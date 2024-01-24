import Header from "./components/organisms/header";
import "./global.css";

// Components
import PokemonGrid from "./components/organisms/pokemons-grid";

// Third Imports
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header></Header>
        <PokemonGrid />
      </div>
    </QueryClientProvider>
  );
}

export default App;
