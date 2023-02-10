import { isValidRequest } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const secret = process.env.SANITY_WEBHOOK_SECRET ?? "";
    // validate the signature
    if (!isValidRequest(req, secret)) {
      res.status(401).json({ success: false, message: "Invalid request" });
      return;
    }

    const { slug } = req.body;
    await res.revalidate(`/blog/`);
    await res.revalidate(`/blog/${slug}`);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export default handler;
