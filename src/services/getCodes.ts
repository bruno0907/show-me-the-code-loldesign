import fees from "../utils/fees";

export const getCodes = () => {
  const codes = [...fees.map(fee => fee.origin)]
  return Array.from(new Set(codes))
}