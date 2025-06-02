import Menu from '../menu/Menu.jsx'
import Apresentacao from '../apresentacao/apresentacao' 
import Gnocchis from '../gnocchi/Gnocchis.jsx'
import  Pastas from '../pastas/Pastas.jsx'
import Bebidas from '../bebidas/Bebidas.tsx'
import Footer from '../footer/footer'



function Cardapio(){
    return(
        <>
        <Menu />
        <Apresentacao /> 
        <Gnocchis />
        <Pastas />
        <Bebidas />
        <Footer /> 
        </>

    )
}

export default Cardapio;