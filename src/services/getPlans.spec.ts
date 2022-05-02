import { getPlans } from "./getPlans"

describe('getPlans', () => {
  it('should return a list plans', () => {
    const result = getPlans()

    expect(result).toStrictEqual([
      {    
        id: 'planId01',
        name: 'FaleMais30',
        description: 'No plano FaleMais30 você ganha 30 minutos de franquia para falar de graça com qualquer DDD.',
        tolerance: 30, 
        slug: 'fale_mais_30',
      },
      {
        id: 'planId02',
        name: 'FaleMais60',
        description: 'No plano FaleMais60 você ganha 60 minutos de franquia para falar de graça com qualquer DDD.',
        tolerance: 60,
        slug: 'fale_mais_60',
      },
      {
        id: 'planId03',
        name: 'FaleMais120',
        description: 'No plano FaleMais120 você ganha 120 minutos de franquia para falar de graça com qualquer DDD.',
        tolerance: 120,
        slug: 'fale_mais_120',
      },
    ])
  })
})