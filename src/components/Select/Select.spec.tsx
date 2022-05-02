import { fireEvent, render, screen } from "@testing-library/react"
import { Select } from "."

type SelectProps = {
  name: string;
  label?: string;
  options: string[]
}

const properties: SelectProps = {
  name: 'select',
  label: 'Select label mock',
  options: [
    'Mock data 1',
    'Mock data 2',
    'Mock data 3',
  ]
}

describe('<Select />', () => {  
  beforeEach(() => {
    render(
      <Select name={properties.name} label={properties.label}              >        
        {properties.options.map(option => (
          <option key={option} value={option}>{option}</option>)
        )}
      </Select>
    )
  })

  it('should render properly', () => {    
    const selectComponent = screen.getByRole('combobox', { name: properties.label })
    expect(selectComponent).toBeInTheDocument()
  })

  it('should render its label text properly', () => {    
    const label = screen.getByText(properties.label)    
    expect(label).toBeInTheDocument()    
  })

  it('should render the correct amount of options', () => { 
    const options = screen.getAllByRole('option')       
    expect(options).toHaveLength(properties.options.length)
  })
  
  it('should change select input value upon selecting an option from a given options list', () => {
    const selectComponent = screen.getByRole('combobox', { name: properties.label })
    fireEvent.change(selectComponent, {
      target: {
        value: properties.options[2]
      }
    })    
    expect(selectComponent).toHaveValue(properties.options[2])
  })
})
