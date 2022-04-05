import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Codachi</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}