import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { CallToAction } from "."

describe('<CallToAction />', () => {  
  beforeEach(() => {
    render(<CallToAction />)
  })  

  it('should render properly', () => {
    expect(screen.getByTestId('cta')).toBeInTheDocument()
  })

  it('should render the title', () => {
    const title = screen.getByText('FaleMais')
    expect(title).toBeInTheDocument()
  })

  it('should render the copy', () => {
    const copy = screen.getByText('Simule abaixo quanto você paga hoje em uma ligação sem o FaleMais e quanto pagará com o novo plano FaleMais!')
    expect(copy).toBeInTheDocument()    
  })

  it('should render the Call to Action link', () => {
    const cta = screen.getByRole('link', { name: 'Contrate já' })
    expect(cta).toBeInTheDocument()
  })

  it('should render the Ver Planos link', () => {
    const fallback = screen.getByRole('link', { name: 'Ver planos'})
    expect(fallback).toBeInTheDocument()
  })
})