import { NextApiRequest, NextApiResponse } from "next";
import plans from "../../utils/plans";

export default function handle(request: NextApiRequest, response: NextApiResponse) {
  const data = [...plans]
  return response.status(200).json(data)
}