import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
            <Content />
        <Footer />
    </div>
  );
}

export default App;
