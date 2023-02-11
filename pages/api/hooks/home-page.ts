import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    console.log("Must a POST request");
    return res.status(401).json({ message: "Must be a POST request" });
  }

  const secret = process.env.SANITY_WEBHOOK_SECRET ?? "";
  const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString() ?? "";
  if (!isValidSignature(JSON.stringify(req.body), signature, secret)) {
    return res.status(401).json({ message: "Invalid signature" });
  }

  try {
    const { resumeURL } = req.body;
    await res.revalidate(`/`);
    res.status(200).json({ revalidatedHomePage: true });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export default handler;
