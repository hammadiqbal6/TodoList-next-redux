"use client";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";
import {
  noteEdited,
  noteDeleted,
  noteCompleted,
} from "../redux/features/TodoSlice";
import TodoTextInput from "./TodoTextInput";

function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();
  const handleSave = (todo: Todo) => {
    if (todo.text !== "") {
      dispatch(noteEdited(todo));
    } else {
      dispatch(noteDeleted(todo));
    }
    setIsEditing(false);
  };
  const handleDoubleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsEditing(true);
  };
  const changeCompleted = () => {
    dispatch(noteCompleted(todo));
  };

  return (
    <>
      <div className="flex">
        <input
          type="checkbox"
          className="w-6 h-6 rounded-full mr-4"
          value={todo.completed.toString()}
          onChange={changeCompleted}
        ></input>
        {!isEditing && (
          <div
            className={
              (todo.completed ? "line-through opacity-60" : "") + " w-full"
            }
            onDoubleClick={handleDoubleClick}
          >
            {todo.text}
          </div>
        )}
        {isEditing && (
          <TodoTextInput
            mode="editing"
            todo={todo}
            onSave={handleSave}
          ></TodoTextInput>
        )}
      </div>
    </>
  );
}

export default TodoItem;
