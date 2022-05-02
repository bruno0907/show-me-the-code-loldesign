import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react"
import { Label, Container } from "./styles"

type SliderProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  min: string | number;
  max: string | number;
}

const Component: ForwardRefRenderFunction<HTMLInputElement, SliderProps> = ({ name, label, min, max, ...rest }, ref) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Container 
        type="range"
        name={name}
        data-testid={name}
        ref={ref}        
        min={min}
        max={max}
        {...rest}
      />
    </>
  )
}

export const Slider = forwardRef(Component)
