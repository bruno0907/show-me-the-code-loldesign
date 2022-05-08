import { render, screen } from "@testing-library/react"
import { Hero } from "."

describe('<Hero />', () => {
  it('should render properly', () => {
    render(<Hero />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })
})