import './App.css';
import Router from "./Components/router"
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
      <Router />
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
