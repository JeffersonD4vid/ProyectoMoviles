import { SafeAreaView } from "react-native"
import { Inicio } from './src/screem/Inicio';
import { Login } from "./src/screem/Login";
import { Registro } from "./src/screem/Registro";
import { Bienvenido } from "./src/screem/Bienvenido";

const App = () =>{
  return(
    <SafeAreaView style={{flex:1}}>
      {/*<Inicio/>
      <Registro/>
      <Login/>*/}
      <Bienvenido/>
    </SafeAreaView>
  )
}

export default App;