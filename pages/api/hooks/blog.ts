import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString() ?? "";
    const secret = process.env.SANITY_WEBHOOK_SECRET ?? "";
    // validate the signature
    if (!isValidSignature(JSON.stringify(req.body), signature, secret)) {
      res.status(401).json({ success: false, message: "Invalid request" });
      return;
    }

    const { slug } = req.body;
    await res.revalidate(`/blog/${slug}`);
    await res.revalidate(`/blog/`);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export default handler;
