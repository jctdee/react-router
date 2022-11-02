import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Booklist from "./Components/Booklist";
import Book from "./Components/Book";
import BookLayout from "./Components/BookLayout";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<Booklist />} />
          <Route path=":id" element={<Book />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
