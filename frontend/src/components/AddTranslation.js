import React, { useState } from "react";
import api from "../api";

export default function AddTranslation() {
  const [key, setKey] = useState("");
  const [english, setEnglish] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/", { key, english });
      setMessage("Added: " + res.data.key);
      setKey("");
      setEnglish("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error adding translation");
    }
  };

  return (
    <div>
      <h2>Add Translation</h2>

      <form onSubmit={submit}>
        <label>Key:</label>
        <input value={key} onChange={(e) => setKey(e.target.value)} required />

        <br />

        <label>English:</label>
        <input
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          required
        />

        <br />
        <button type="submit">Add (Auto Generate)</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
