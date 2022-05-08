import { render, screen } from "@testing-library/react"
import { CallToAction } from "."

describe('<CallToAction', () => {
  it('should render properly', () => {
    render(<CallToAction/>)

    const productName = screen.findByText('FaleMais+')
    const cta = screen.findByText('Simule abaixo quanto você paga hoje em uma ligação e quanto pagará com um novo plano FaleMais!')

    expect(productName).toBeInTheDocument()
    expect(cta).toBeInTheDocument()
  })
})