import React from "react";
import AddTranslation from "./components/AddTranslation";
import SearchTranslation from "./components/SearchTranslation";

function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Translation Management Tool (TMT)</h1>

      <AddTranslation />

      <hr style={{ margin: "20px 0" }} />

      <SearchTranslation />
    </div>
  );
}

export default App;
