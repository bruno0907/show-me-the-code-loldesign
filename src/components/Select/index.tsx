import { forwardRef, ForwardRefRenderFunction, ReactNode, SelectHTMLAttributes } from "react";
import { Label, Container } from "./styles";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label?: string;  
  children: ReactNode;
}

const Component: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({ label, name, children, ...rest }, ref) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>

      <Container
        id={name}
        name={name}
        data-testid={name}
        ref={ref}
        {...rest}
      >
        {children}
      </Container>
    </>
  )
}

export const Select = forwardRef(Component)
