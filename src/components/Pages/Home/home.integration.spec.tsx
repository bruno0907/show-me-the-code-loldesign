import { render, screen } from "@testing-library/react"
import { getCodes } from "../../../services/getCodes"
import fees from "../../../utils/fees"

import Home from './index'

const countriesCodeList = getCodes(fees)

describe('Home', () => {
  beforeEach(() => {    
    render(<Home />)
  })   
   
  it('should render a <Select /> with "origin" as name and "Selecionar o DDD de origem" as label', () => {
    const originCodeSelect = screen.getByTestId('origin')
    const originCodeLabel = screen.getByRole('combobox', { name: 'Selecione o DDD de origem' })
    expect(originCodeSelect).toBeInTheDocument()    
    expect(originCodeLabel).toBeInTheDocument()
  })

  
  it('should render a list of countries code to "origin" <Select />', () => {    
    const options = screen.getAllByRole('option')
    countriesCodeList.forEach((_, i) => expect(options[i]).toHaveValue(countriesCodeList[i]))    
  })

  it('should render a <Select /> with "destination" as name and "Selecionar o DDD de destino" as label', () => {
    const destinationCodeSelect = screen.getByTestId('destination')
    const destinationCodeLabel = screen.getByRole('combobox', { name: 'Selecione o DDD de destino' })
    expect(destinationCodeSelect).toBeInTheDocument()
    expect(destinationCodeLabel).toBeInTheDocument()
  })

  it('should render a list of countries code to "destination" <Select />', () => {    
    const options = screen.getAllByRole('option')
    countriesCodeList.forEach((_, i) => expect(options[i]).toHaveValue(countriesCodeList[i]))    
  })

  it('should render <Slider /> with "duration" as name and "Tempo de ligação" as label', () => {
    const slider = screen.getByTestId('duration')
    const label = screen.getByText('Tempo de ligação')
    expect(slider).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })
  
  it('should render a button with a label of "Calcular plano"', () => {
    const submitButton = screen.getByRole('button', { name: /calcular plano/i})
    expect(submitButton).toBeInTheDocument()
  })
})