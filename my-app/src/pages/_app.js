import styled from "styled-components"
import Titulo from '../components/Titulo'
import InputMac from '../components/InputMac'
import GlobalStyle from '../components/GlobalStyle'
import { useState } from "react"

const AppContainer = styled.div `
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
   height: 100vh;
   background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);

`


export default function App (){
   const [MacDigitado, setMacDigitado] = useState ('')

    function converterMac (MacDigitado){
      let macConvertido = MacDigitado.replace(":", " ")
      console.log(macConvertido)
    }


  return (
    <AppContainer>
      <GlobalStyle />
      <Titulo>Converter o MAC</Titulo>
      <InputMac 
      placeholder="Digite o mac address"
      onBlur={event =>converterMac (event.target.value)}

        
      
      />
      
    </AppContainer>
    
  )
  
}
