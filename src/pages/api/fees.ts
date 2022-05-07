import { NextApiRequest, NextApiResponse } from "next";
import fees from "../../utils/fees";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const data = [...fees]  
  return response.status(200).json(data)
}
