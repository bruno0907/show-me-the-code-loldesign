import { fireEvent, render, screen } from "@testing-library/react"
import { Slider } from "."

describe('<Slider />', () => {
  beforeEach(() => {
    render(
      <Slider 
        name="slider-component" 
        label="Slider"
        min={0}
        max={200}
      />
    )
  })

  it('should render properly', () => {   
    const slider = screen.getByTestId('slider-component') 
    expect(slider).toBeInTheDocument()
  })

  it('should have a min-value of 0 and a max-value of 200', () => {
    const slider = screen.getByTestId('slider-component')
    expect(slider).toHaveAttribute('min', '0')
    expect(slider).toHaveAttribute('max', '200')
  })

  it('should receive a new value upon change', () => {
    const slider = screen.getByTestId('slider-component')
    fireEvent.change(slider, { target: { value: 75 }})
    expect(slider).toHaveValue('75')
  })
})