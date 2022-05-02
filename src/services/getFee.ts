import fees from "../utils/fees"

export const getFee = (origin: string, destination: string) => {
  const fee = fees.find(fee => fee.origin === origin && fee.destination === destination)
  return fee
}