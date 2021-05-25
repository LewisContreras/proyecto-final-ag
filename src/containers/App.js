import { ChakraProvider } from "@chakra-ui/react";
import Routes from "../routers/Routes";



function App() {
  return (
    <ChakraProvider>
      <Routes/>
      <div>hola</div>
    </ChakraProvider>
  );
}

export default App;
