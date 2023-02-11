import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const secret = process.env.SANITY_WEBHOOK_SECRET ?? "";
    const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString() ?? "";
    // validate the signature
    if (!isValidSignature(JSON.stringify(req.body), signature, secret)) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid request" });
    }

    const { slug } = req.body;
    await res.revalidate(`/blog/${slug}`);
    await res.revalidate(`/blog/`);
    console.log(`Revalidated slug: ${slug}`);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export default handler;
