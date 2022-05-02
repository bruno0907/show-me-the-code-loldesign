import { fireEvent, render, screen } from "@testing-library/react"

import { SubmitButton } from './index'

describe('SubmitButton', () => {    
  it('should render properly', () => {
    render(<SubmitButton>Submit</SubmitButton>)    
    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()
  })

  it('should display a label text for the button', () => {
    render(<SubmitButton>Submit</SubmitButton>)    
    const submitButton = screen.getByRole('button', { name: 'Submit' })
    expect(submitButton).toHaveTextContent('Submit')
  })

  it('should only have a type of submit', () => {
    render(<SubmitButton>Submit</SubmitButton>)
    const submitButton = screen.getByRole('button')    
    expect(submitButton).toHaveProperty('type', 'submit')
    expect(submitButton).not.toHaveProperty('type', 'button')
    expect(submitButton).not.toHaveProperty('type', 'reset')
  })

  it('should call a function upon clicking', () => {
    const mockFn = jest.fn()    
    render(
      <SubmitButton onClick={mockFn}>Submit</SubmitButton>      
    )
    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})