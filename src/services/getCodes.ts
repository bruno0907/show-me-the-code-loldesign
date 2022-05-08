import { Fee } from "../types";
import fees from "../utils/fees.json";

export const getCodes = (fees: Fee[]) => {
  const codes = [...fees.map(fee => fee.origin)]
  return Array.from(new Set(codes))
}