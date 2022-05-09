import { forwardRef, ForwardRefRenderFunction, ReactNode, SelectHTMLAttributes } from "react";


type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label?: string;  
  children: ReactNode;
}

const Component: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({ label, name, children, ...rest }, ref) => {
  return (
    <div className="w-full flex flex-col justify-center">
      <label 
        htmlFor={name}
        className="mb-2 leading-none text-zinc-600 font-medium"
      >{label}</label>
      <select        
        id={name}
        name={name}
        data-testid={name}
        ref={ref}
        className="font-medium rounded-lg border-2 border-zinc-600 text-zinc-600"
        {...rest}
      >
        {children}
      </select>
    </div>
  )
}

export const Select = forwardRef(Component)
