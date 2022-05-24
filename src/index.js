import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import About from "./routes/about";
import Card from "./routes/card";
  

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="about" element={<About />} />
    <Route path="card" element={<Card />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Routes>
</BrowserRouter>,);