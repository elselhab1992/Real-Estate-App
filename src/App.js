import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { Hero, Search, HouseList, Footer } from "./components";
const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Hero />
        <Search />
        <HouseList />
        <Footer />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
