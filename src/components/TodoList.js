import React, { useState } from "react";
import { TextField, Button, Box, Card, CardContent } from "@mui/material";

const EditTodo = ({ todo, onSaveEditedTodo, onCancelEditing }) => {
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleSave = () => {
    onSaveEditedTodo(todo.id, editedTitle);
    setEditedTitle("");
  };

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <Box sx={{display: 'flex'}}>
          <Button
            size="small"
            onClick={handleSave}
            sx={{ minWidth: 100, ml: 1.5 }}
          >
            Save
          </Button>
          <Button
            size="small"
            onClick={onCancelEditing}
            sx={{ minWidth: 100, ml: 1.5 }}
          >
            Cancel
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EditTodo;
