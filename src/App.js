import Header from "./header/header";
import Footer from "./footer/footer";
import Main from "./main/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <FontAwesomeIcon icon="fas fa-map-marker-alt" />
    </div>
  );
}

export default App;
