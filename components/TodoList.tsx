"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList: Todo[] | [] = useAppSelector((state) => {
    switch (state.visibilityFilter) {
      case "all":
        return state.todo;
      case "active":
        return state.todo.filter((todo) => !todo.completed);
      case "completed":
        return state.todo.filter((todo) => todo.completed);
      default:
        return [];
    }
  });
  return (
    <div className="flex flex-col gap-y-4 mt-3" data-testid="todoList-element">
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id}></TodoItem>
      ))}
    </div>
  );
}

export default TodoList;
