import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Router>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
