import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Footer } from "./components";
import { Home, PropertyDetails } from "./pages/index";
const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
