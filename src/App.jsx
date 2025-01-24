import { BrowserRouter as Routes, Route, HashRouter } from "react-router-dom";
import About from './pages/About';
import Book from './pages/Book';
import Menu from './pages/Menu';
import MenuItem from "./pages/Menu_Item";
import Home from './pages/Home';
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/book" element={<Book />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/:itemId" element={<MenuItem />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
