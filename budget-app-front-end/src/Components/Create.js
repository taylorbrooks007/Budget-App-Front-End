import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export default function Create() {
  const [user, setUser] = useState({
    id: uuidv4,
    transaction_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  function handleTextChange(event) {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/transactions`, userInput)
      .then((response) => {
        setSubmitStatus(response.data);
        navigate("/transactions");
      })
      .catch((error) => {
        setSubmitStatus("error");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.name}
          placeholder="Name"
          onChange={handleTextChange}
          id="name"
        />
        <input
          type="number"
          value={user.amount}
          placeholder="Number"
          onChange={handleTextChange}
          id="amount"
        />
        <input
          type="date"
          value={user.date}
          onChange={handleTextChange}
          id="date"
        />
        <input
          type="from"
          value={user.from}
          placeholder="From"
          onChange={handleTextChange}
          id="from"
        />
        <input
          type="category"
          value={user.category}
          placeholder="Category"
          onChange={handleTextChange}
          id="category"
        />
        <button type="submit"> Add New Item </button>
      </form>
    </div>
  );
}
