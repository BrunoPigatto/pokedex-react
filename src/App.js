import Header from "./components/organisms/header";
import "./global.css";

// Components
import PokemonGrid from "./components/organisms/pokemonsGrid";

// Third Imports
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "../src/redux/store";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header></Header>
          <PokemonGrid />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
