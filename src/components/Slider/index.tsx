import { ChangeEvent, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react"

type SliderProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  min: string | number;
  max: string | number;
  value: number;
  onChange: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void 
}

const Component: ForwardRefRenderFunction<HTMLInputElement, SliderProps> = ({ name, label, min, max, value, onChange, ...rest }, ref) => {
  return (
    <div className="flex flex-col flex-1 justify-center">
      <label htmlFor={name} className="mb-4 font-semibold leading-none text-zinc-600">{label}</label>      
      <span className="flex flex-1 items-center justify-between">
        <span className="text-sm font-semibold">{min}</span>
        <span className="text-sm font-semibold">{value}</span>
        <span className="text-sm font-semibold">{max}</span>
      </span>
      <input 
        type="range"
        name={name}
        data-testid={name}
        ref={ref}        
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="text-zinc-600"        
        {...rest}
      />
    </div>
  )
}

export const Slider = forwardRef(Component)
