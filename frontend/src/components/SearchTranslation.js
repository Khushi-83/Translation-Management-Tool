import React, { useState } from "react";
import api from "../api";
import EditModal from "./EditModal";

export default function SearchTranslation() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [editing, setEditing] = useState(null);

  const performSearch = async () => {
    const res = await api.get("/", { params: { search } });
    setResults(res.data);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Search Translation</h2>

      <input
        placeholder="search key"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={performSearch}>Search</button>

      <ul>
        {results.map((r) => (
          <li key={r._id}>
            <strong>{r.key}</strong>
            {Object.entries(r.translations).map(([lang, value]) => (
              <div key={lang}>
                {lang}: {value}
              </div>
            ))}

            <button onClick={() => setEditing(r)}>Edit</button>
          </li>
        ))}
      </ul>

      {editing && (
        <EditModal
          item={editing}
          onClose={() => setEditing(null)}
          onUpdated={() => {
            performSearch();
            setEditing(null);
          }}
        />
      )}
    </div>
  );
}
