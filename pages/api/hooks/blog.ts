import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== "POST") {
    console.log("Must a POST request");
    return res.status(401).json({ message: "Must be a POST request" });
  }

  const secret = process.env.SANITY_WEBHOOK_SECRET ?? "";
  const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString() ?? "";
  if (!isValidSignature(JSON.stringify(req.body), signature, secret)) {
    return res.status(401).json({ message: "Invalid signature" });
  }

  // const validReq = req.query.secret === secret;
  // console.log(`valid req ${validReq}`);
  // console.log(`query secret ${req.query.secret}`);
  // // console.log(`Parse req ${JSON.parse(JSON.stringify(req))}`);
  // console.log(
  //   `valid signature ${isValidSignature(
  //     JSON.stringify(req.body),
  //     signature,
  //     secret
  //   )}`
  // );
  // console.log(`my secret ${secret}`);
  // console.log(`signature ${signature}`);
  // console.log(`req.body ${req.body}`);

  try {
    const { slug } = req.body;
    console.log(`Revalidated slug: ${typeof slug}`);
    // await res.revalidate("/blog/");
    // await res.revalidate(`/blog/${slug.toString()}`);
    res.status(200).json({ message: "Revalidation successful" });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

export default handler;
