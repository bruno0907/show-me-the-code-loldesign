import { fireEvent, render, screen } from "@testing-library/react"
import React, { useState } from "react"
import { PlanCalculator } from "."
import { fetchPlanResult } from "../../../../../services/fetchPlanResult"

const plans = [
  {    
    "id": "planId01",
    "name": "FaleMais30",
    "description": "No plano FaleMais30 você ganha 30 minutos de franquia para falar de graça com qualquer DDD.",
    "tolerance": 30,    
    "slug": "fale_mais_30"
  },
  {
    "id": "planId02",
    "name": "FaleMais60",
    "description": "No plano FaleMais60 você ganha 60 minutos de franquia para falar de graça com qualquer DDD.",
    "tolerance": 60,    
    "slug": "fale_mais_60"
  },
  {
    "id": "planId03",
    "name": "FaleMais120",
    "description": "No plano FaleMais120 você ganha 120 minutos de franquia para falar de graça com qualquer DDD.",
    "tolerance": 120,
    "slug": "fale_mais_120"
  }
]

const fees = [
  {
    "origin": "11",
    "destination": "16",
    "fee": 1.90
  },
  {
    "origin": "16",
    "destination": "11",
    "fee": 2.90
  },
  {
    "origin": "11",
    "destination": "17",
    "fee": 1.70
  },
  {
    "origin": "17",
    "destination": "11",
    "fee": 2.70
  },
  {
    "origin": "11",
    "destination": "18",
    "fee": 0.90
  },
  {
    "origin": "18",
    "destination": "11",
    "fee": 1.90
  }
]

describe('<PlanCalculator />', () => {
  beforeEach(() => render(<PlanCalculator plans={plans} fees={fees} />))
  
  it('should render properly', () => {
    const calculator = screen.getByText('Faça sua simulação')
    expect(calculator).toBeInTheDocument()
  })
})