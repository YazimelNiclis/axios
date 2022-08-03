import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1
        style={{
          paddingBottom: "1rem",
          paddingLeft: "10rem",
        }}
      >
        BIENVENIDOS
      </h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          paddingLeft: "10rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}
