import { render, screen } from "@testing-library/react"
import { List } from "."

describe('<List />', () => {
  it('should render properly', () => {
    render(<List/>)
    const list = screen.getByTestId(/list-component/i)
    expect(list).toBeInTheDocument()
  })

  it('should render children nodes properly', () => {
    render(
      <List>
        <li>Data 1</li>
        <li>Data 2</li>
        <li>Data 3</li>
      </List>
    )
    const list = screen.getByTestId(/list-component/i)    
    expect(list.childNodes).toHaveLength(3)
    expect(screen.getByText(/data 1/i)).toBeInTheDocument()
    expect(screen.getByText(/data 2/i)).toBeInTheDocument()
    expect(screen.getByText(/data 3/i)).toBeInTheDocument()
  })
})