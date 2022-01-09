import React, { useState, useCallback } from "react";
import Button from "./Button";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  // const addNote = () => {
  //   const newNote = "random";
  //   setNotes((n) => [...n, newNote]);
  // };
  const addNote = useCallback(() => {
    const newNote = "random";
    setNotes((n) => [...n, newNote]);
  }, [setNotes]);

  return (
    <div>
      <h1>
        <Button addNote={addNote} />
      </h1>
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
    </div>
  );
}
