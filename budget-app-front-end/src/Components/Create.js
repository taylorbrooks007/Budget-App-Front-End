import { useState } from "react";
export default function Create() {
  const [user, setUser] = useState({
    name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  function handleTextChange(event) {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
  }

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
