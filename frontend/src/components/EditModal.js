import React, { useState } from "react";
import api from "../api";

export default function EditModal({ item, onClose, onUpdated }) {
  const [translations, setTranslations] = useState(
    Object.fromEntries(Object.entries(item.translations))
  );

  const update = async () => {
    await api.put(`/${item._id}`, { translations });
    onUpdated();
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "#00000088" }}>
      <div
        style={{
          width: 500,
          margin: "100px auto",
          background: "#fff",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <h3>Edit: {item.key}</h3>

        {Object.keys(translations).map((lang) => (
          <div key={lang}>
            <label>{lang}: </label>
            <input
              value={translations[lang]}
              onChange={(e) =>
                setTranslations({ ...translations, [lang]: e.target.value })
              }
            />
          </div>
        ))}

        <button onClick={update}>Save</button>
        <button onClick={onClose} style={{ marginLeft: 10 }}>
          Cancel
        </button>
      </div>
    </div>
  );
}
