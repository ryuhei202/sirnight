import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = req.query;
    const rtsp = query.rtsp;
    const memberId = query.memberId;

    if (!rtsp || !isString(rtsp) || !memberId || !isString(memberId)) {
      return res.status(400).json({ error: "Bad Request" });
    }

    const result = await fetch(
      `https://www.rentracks.jp/secure/es.html?sid=1847&pid=12433&price=0&quantity=1&reward=-1&cname=&ctel=&cemail=&cinfo=${memberId}&rtsp=${rtsp}`,
    );
    console.log(result); // eslint-disable-line no-console
    res.status(200).send({ result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isString(value: any): value is string {
  return typeof value === "string";
}
