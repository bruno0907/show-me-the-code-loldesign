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
    <div className="p-6 flex flex-col bg-zinc-50 rounded-lg shadow">
      <label htmlFor={name} className="mb-4 font-semibold">{label}</label>      
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
        {...rest}
      />
    </div>
  )
}

export const Slider = forwardRef(Component)
