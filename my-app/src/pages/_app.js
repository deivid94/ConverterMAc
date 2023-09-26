import GlobalStyle from "@/components/GlobalStyle"
import ContainerApp from "@/components/ContainerApp"
import Titulo from "@/components/Titulo"
import InputMac from "@/components/InputMac"


export default function App (){
  return (
    <ContainerApp>
      <GlobalStyle />
      <Titulo>Converter o MAC</Titulo>

      <InputMac className="dataSearch" type="text" name="" id="" placeholder="Digite o mac address" />
    </ContainerApp>

  )
}