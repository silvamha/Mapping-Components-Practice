import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

const populateEntry = (emojis) => {
  return (
    <Entry
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(populateEntry)}
    </div>
  );
}

export default App;
