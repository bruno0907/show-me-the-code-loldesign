import { forwardRef, ForwardRefRenderFunction, ReactNode, SelectHTMLAttributes } from "react";


type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label?: string;  
  children: ReactNode;
}

const Component: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({ label, name, children, ...rest }, ref) => {
  return (
    <div className="p-6 flex flex-col bg-zinc-50 rounded-lg shadow">
      <label 
        htmlFor={name}
        className="mb-2"
      >{label}</label>
      <select        
        id={name}
        name={name}
        data-testid={name}
        ref={ref}
        className="rounded-lg border-2 border-blue-400"
        {...rest}
      >
        {children}
      </select>
    </div>
  )
}

export const Select = forwardRef(Component)
