import Header from "./components/organisms/header";
import "./global.css";

// Components
import PokemonGrid from "./components/organisms/pokemonsGrid";
import ScrollToTopButton from "./components/atoms/scrollTopButton";

// Third Imports
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Footer from "./components/organisms/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="App">
            <Header></Header>
            <Routes>
              <Route path="/" element={<PokemonGrid />} />
            </Routes>
            <ScrollToTopButton />
            <Footer />
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
