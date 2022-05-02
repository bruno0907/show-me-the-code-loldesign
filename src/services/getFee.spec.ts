import { getFee } from "./getFee"

describe('getFee', () => {
  it('should return a fee from a given origin and destination', () => {
    const result = getFee('11', '16')

    expect(result).toStrictEqual({
      origin: '11',
      destination: '16',
      fee: 1.90,
    })
    
  })
})