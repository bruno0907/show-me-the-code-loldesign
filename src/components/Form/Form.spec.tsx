import { fireEvent, render, screen } from "@testing-library/react"
import { Form } from "."


describe('<Form />', () => {
  it('should render properly', () => {
    render(<Form />)
    const form = screen.getByTestId('form')
    expect(form).toBeInTheDocument()
  })

  it('should submit form', () => {
    const submitMock = jest.fn()
    render(<Form onSubmit={submitMock} />)
    const form = screen.getByTestId('form')
    fireEvent.submit(form)
    expect(submitMock).toHaveBeenCalled()
  })
})