import { Link } from "react-router-dom";

export default function NavBar() {
  const mystyle = {
    color: "brown",
    backgroundColor: "beige",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div style={mystyle}>
      <h1>Budget App</h1>
      <button>
        <Link to="/transactions">Create New Transaction</Link>
      </button>
    </div>
  );
}
