"use client";
// import { useAppSelector } from "@/redux/hooks";
import { RootState } from "../redux/store";
import React from "react";
import TodoItem from "./TodoItem";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

function TodoList() {
  // const todoList: Todo[] | [] = useAppSelector((state) => {
  //   switch (state.visibilityFilter) {
  //     case "all":
  //       return state.todo;
  //     case "active":
  //       return state.todo.filter((todo) => !todo.completed);
  //     case "completed":
  //       return state.todo.filter((todo) => todo.completed);
  //     default:
  //       return [];
  //   }
  // });
  const selectNumCompletedTodos = createSelector(
    (state: RootState) => state,
    ({ todo, visibilityFilter }) => {
      switch (visibilityFilter) {
        case "all":
          return todo;
        case "active":
          return todo.filter((todo) => !todo.completed);
        case "completed":
          return todo.filter((todo) => todo.completed);
        default:
          return [];
      }
    }
  );
  const todoList: Todo[] = useSelector(selectNumCompletedTodos);

  return (
    <div className="flex flex-col gap-y-4 mt-3" data-testid="todoList-element">
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id}></TodoItem>
      ))}
    </div>
  );
}

export default TodoList;
