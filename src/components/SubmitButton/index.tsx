
import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles"

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {  
  children: string;  
}

export const SubmitButton = ({ children, ...rest }: SubmitButtonProps) => {
  return (
    <Container
      type="submit"
      {...rest}            
    >
      {children}
    </Container>
  )
}
