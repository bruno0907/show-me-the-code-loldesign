import fees from "../utils/fees.json"
import { getCodes } from "./getCodes"

describe('getCodes', () => {
  fit('should return an array of unique values from fees array', () => {
    const result = getCodes(fees)
    expect(result).toStrictEqual(['11', '16', '17', '18'])
  })
})