import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

const SECRET = process.env.SANITY_BLOG_WEBHOOK_SECRET;

const handler = async (req, res) => {
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME];
    const body = await readBody(req); // Read the body into a string
    if (!isValidSignature(body, signature, SECRET)) {
      res.status(401).json({ success: false, message: "Invalid request" });
      return;
    }

    const jsonBody = JSON.parse(body);
    const { slug } = jsonBody;

    await res.revalidate(`/blog/${slug}`);
    await res.revalidate(`/blog/`);
    res.status(200).json({ success: true, message: "Pages revalidated" });
    console.log(`revalidated slug: ${slug}`);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false,
  },
};

async function readBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export default handler;
