import { FormHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactNode } from "react"

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children?: ReactNode;
  label?: string;
}

const Component: ForwardRefRenderFunction<HTMLFormElement, FormProps> = ({ label, children, ...rest }, ref) => {
  return (    
    <form ref={ref} data-testid="form" {...rest} >
      {children}
    </form>
  )
}

export const Form = forwardRef(Component)
