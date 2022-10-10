import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

const SECRET = process.env.SANITY_BLOG_WEBHOOK_SECRET;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString();
    if (
      !isValidSignature(JSON.stringify(req.body), signature ?? "", SECRET ?? "")
    ) {
      res.status(401).json({ success: false, message: "Invalid request" });
      return;
    }

    const slug = req.body.slug;
    await res.revalidate(`/blog/${slug}`);
    await res.revalidate(`/blog/`);
    res.status(200).json({ success: true, message: "Pages revalidated" });
    console.log(`revalidated slug: ${slug}`);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export default handler;
