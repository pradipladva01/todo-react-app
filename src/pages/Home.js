import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import TodoItem from "../components/TodoItem";
import EditTodo from "../components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), title: newTodo, completed: false },
      ]);
      setNewTodo("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id) => {
    setEditTodoId(id);
  };

  const cancelEditing = () => {
    setEditTodoId(null);
  };

  const saveEditedTodo = (id, editedTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editedTitle } : todo
      )
    );
    setEditTodoId(null);
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <TextField
          placeholder="Add todo"
          autoComplete="off"
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          sx={{ml: 2}}
        >
          Add
        </Button>
      </Box>
      {todos.map((todo) =>
        editTodoId === todo.id ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            onSaveEditedTodo={saveEditedTodo}
            onCancelEditing={cancelEditing}
          />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={toggleComplete}
            onStartEditing={startEditing}
            onRemove={removeTodo}
          />
        )
      )}
    </Box>
  );
}

export default App;
