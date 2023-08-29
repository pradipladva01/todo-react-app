import React from "react";
import { Card, CardContent, Button, Typography, Box } from "@mui/material";

const TodoItem = ({ key, todo, onToggleComplete, onStartEditing, onRemove }) => {
  return (
    <Card key={key} sx={{ marginTop: 2 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ width: "100%" }}
          variant="body1"
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Button
            size="small"
            onClick={() => onToggleComplete(todo.id)}
            sx={{ minWidth: 100, ml: "auto" }}
          >
            {todo.completed ? "Uncomplete" : "Complete"}
          </Button>
          <Button
            size="small"
            onClick={() => onStartEditing(todo.id, todo.title)}
            sx={{ minWidth: 100, ml: 1.5 }}
          >
            Edit
          </Button>
          <Button
            sx={{ minWidth: 100, ml: 1.5 }}
            size="small"
            onClick={() => onRemove(todo.id)}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
