import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Header } from "./components/index";

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
    </Theme>
  );
};

export default App;
