import styled from "styled-components"
import Titulo from '../components/Titulo'
import InputMac from '../components/InputMac'
import GlobalStyle from '../components/GlobalStyle'

const AppContainer = styled.div `
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
   height: 100vh;
   background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);

`

export default function App (){
  return (
    <AppContainer>
      <GlobalStyle />
      <Titulo>Converter o MAC</Titulo>
      <InputMac type="text" name="" id="" placeholder="Digite o mac address" />
    </AppContainer>

  )
}
