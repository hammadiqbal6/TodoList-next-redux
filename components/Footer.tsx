"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { filterChanged } from "../redux/features/VisibilityFilters";
import { clearCompleted } from "../redux/features/TodoSlice";

function Footer() {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector((state) => {
    return state.todo.filter((todo) => todo.completed);
  });
  return (
    <div
      className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 mt-3 pt-3 justify-between items-center border-black border-t"
      data-testid="footer-element"
    >
      <p>Items completed {todoList.length}</p>
      <div className="flex gap-x-3">
        <div
          className="hover:underline cursor-pointer p-2"
          onClick={() => {
            dispatch(filterChanged("all"));
          }}
        >
          All
        </div>
        <div
          className="hover:underline cursor-pointer p-2"
          onClick={() => {
            dispatch(filterChanged("active"));
          }}
        >
          Active
        </div>
        <div
          className="hover:underline cursor-pointer p-2"
          onClick={() => {
            dispatch(filterChanged("completed"));
          }}
        >
          Completed
        </div>
      </div>
      <div
        className="hover:underline cursor-pointer p-2"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </div>
    </div>
  );
}

export default Footer;
