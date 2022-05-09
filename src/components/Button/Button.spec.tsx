import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "."

describe('<Button />', () => {    
  it('should render properly', () => {
    render(<Button>Submit</Button>)    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should display a label text for the button', () => {
    render(<Button>Submit</Button>)    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Submit')
  })

  it('should accept multiple types of button function', () => {
    const { rerender } = render(<Button type="submit">Submit</Button>)
    const button = screen.getByRole('button')    
    expect(button).toHaveProperty('type', 'submit')

    rerender(<Button type="button">Button</Button>)
    expect(button).toHaveProperty('type', 'button')

    rerender(<Button type="reset">Submit</Button>)
    expect(button).toHaveProperty('type', 'reset')    
  })

  it('should call a function upon clicking', () => {
    const mockFn = jest.fn()    
    render(<Button type="submit" onClick={mockFn}>Submit</Button>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})