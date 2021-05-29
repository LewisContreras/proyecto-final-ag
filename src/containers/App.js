import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./MainPage";
import Routes from "../routers/Routes";
import PetDetailView from "./PetDetailView";
import Chat from "./Chat";
import PostPage from "./PostPage";




function App() {
  return (
    <ChakraProvider>
      <Routes/>
    </ChakraProvider>
  );
}

export default App;
