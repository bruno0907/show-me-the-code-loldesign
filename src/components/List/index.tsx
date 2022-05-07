import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react"

type ListProps = {
  children?: ReactNode;
}

const Component: ForwardRefRenderFunction<HTMLUListElement, ListProps> = ({ children, ...rest }, ref) => {
  return (
    <>      
      <ul 
        className="flex flex-col gap-4"
        data-testid="list-component"
        ref={ref}
        {...rest}
      >
        {children}
      </ul>
    </>
  )
}

export const List = forwardRef(Component)
