"use client";
import { useAppDispatch } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import { noteAdded } from "../redux/features/TodoSlice";

interface TodoTextInput {
  mode: string;
  todo?: Todo;
  onSave?: (todo: Todo) => void;
}

function TodoTextInput({ mode, todo, onSave }: TodoTextInput) {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    setText(todo?.text || "");
  }, [todo]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      setText(text.trim());
      if (mode === "editing" && onSave && todo) {
        onSave({ ...todo, text });
      } else if (text !== "") {
        dispatch(noteAdded({ text, completed: false }));
        setText("");
      }
    }
  };

  const handleBlur = () => {
    if (mode !== "new" && onSave && todo) {
      onSave({ ...todo, text });
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          className="main-input"
          autoFocus={true}
          value={text}
          placeholder={mode === "new" ? "Add new note" : todo?.text}
          onBlur={handleBlur}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </>
  );
}

export default TodoTextInput;
