import React from 'react';
import TodoItem from './TodoItem'; // Make sure the path is correct

const TodoList = ({ items, deleteItem }) => (
  <ul>
    {items.map((item, index) => (
      <TodoItem key={index} item={item} deleteItem={deleteItem} />
    ))}
  </ul>
);

export default TodoList;
