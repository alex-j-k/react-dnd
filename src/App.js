import ListContextProvider from "./context/ListContext";
const { default: Navbar } = require("./components/Navbar");
const { default: TheUnorderedList } = require("./components/TheUnorderedList");

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
            <ListContextProvider>
                  <TheUnorderedList></TheUnorderedList>
           </ListContextProvider>
    
    </div>
  );
}

export default App;
