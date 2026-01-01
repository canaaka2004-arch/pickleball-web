import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tournaments from "./pages/Tournaments";
import TournamentDetail from "./pages/TournamentDetail";
import Rankings from "./pages/Rankings";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [language, setLanguage] = useState('vi');

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar language={language} setLanguage={setLanguage} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/tournaments" element={<Tournaments language={language} />} />
            <Route path="/tournaments/:id" element={<TournamentDetail language={language} />} />
            <Route path="/rankings" element={<Rankings language={language} />} />
            <Route path="/news" element={<News language={language} />} />
            <Route path="/news/:id" element={<NewsDetail language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
