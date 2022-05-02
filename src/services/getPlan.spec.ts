import { getPlan } from "./getPlan"

describe('getPlan', () => {
  it('should return a plan from a given slug', () => {
    const result = getPlan('fale_mais_30')

    expect(result).toStrictEqual({
      id: 'planId01',
      name: 'FaleMais30',
      description: 'No plano FaleMais30 você ganha 30 minutos de franquia para falar de graça com qualquer DDD.',
      tolerance: 30,
      slug: 'fale_mais_30',
    })
  })
})