import React, { useState } from "react";
import storage, { KEYS } from "../services/storage";

const DEFAULT_ENTRIES = {};

const Questions = () => {
  const [entries, setEntries] = useState(DEFAULT_ENTRIES);

  const handleChange = ({ target: { value, name } }) =>
    setEntries({ ...entries, [name]: value });

  const save = () => {
    const { local } = storage;

    const questions = JSON.parse(local.get(KEYS.QUESTIONS) ?? "[]");
    questions.push(entries);

    local.set(KEYS.QUESTIONS, JSON.stringify(questions));

    setEntries(DEFAULT_ENTRIES);
  };

  return (
    <div>
      <div>email</div>
      <input
        type="text"
        name="email"
        value={entries.email ?? ""}
        onChange={handleChange}
      />

      <div>description</div>
      <input
        type="text"
        name="description"
        value={entries.description ?? ""}
        onChange={handleChange}
      />

      <button type="button" onClick={save}>
        Save
      </button>
    </div>
  );
};

export default Questions;
