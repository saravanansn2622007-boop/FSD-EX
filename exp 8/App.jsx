import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the React Router application.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This application demonstrates React routing.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Email: student@example.com</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>React Router Navigation</h1>

      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/about">About</Link> {" | "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={<h2>404 - Page Not Found</h2>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

