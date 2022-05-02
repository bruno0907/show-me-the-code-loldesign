import { render, screen } from "@testing-library/react"

import Home from './index'

describe('Home', () => {
  it('should render properly', () => {
    render(<Home />)
    
    expect(screen.getByRole('heading', {
      name: 'Planos FaleMais'
    })).toBeInTheDocument()
  })  
})