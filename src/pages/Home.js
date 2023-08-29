// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// // import TodoItem from "../components/TodoItem";
// // import TodoList from "../components/TodoList";

// const Home = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editTodoId, setEditTodoId] = useState(null);
//   const [editedTodoTitle, setEditedTodoTitle] = useState("");

//   const addTodo = () => {
//     if (newTodo.trim() !== "") {
//       setTodos([
//         ...todos,
//         { id: Date.now(), title: newTodo, completed: false },
//       ]);
//       setNewTodo("");
//     }
//   };

//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };
//   const removeTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const startEditing = (id, title) => {
//     setEditTodoId(id);
//     setEditedTodoTitle(title);
//   };

//   const cancelEditing = () => {
//     setEditTodoId(null);
//     setEditedTodoTitle("");
//   };

//   const saveEditedTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, title: editedTodoTitle } : todo
//       )
//     );
//     setEditTodoId(null);
//     setEditedTodoTitle("");
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "50%",
//         margin: "100px auto",
//       }}
//     >
//       <Box mb={3}>
//         <Typography variant="h1">Welcome back, Stan</Typography>
//         <Typography variant="subtitle1">
//           You've got 7 tasks comming up in the next days.
//         </Typography>
//       </Box>
//       <Box mb={3} display={"flex"}>
//         <TextField
//           variant="outlined"
//           placeholder="Add Task"
//           sx={{ flex: "auto" }}
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               addTodo();
//             }
//           }}
//         ></TextField>
//         <Button variant="contained" sx={{ ml: "20px" }} onClick={addTodo}>
//           Add Task
//         </Button>
//       </Box>
//       {todos.map((todo) => (
//         <Card sx={{ minWidth: 275 }} key={todo.id}>
//           <CardContent
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             {/* <Typography
//               variant="body1"
//               style={{
//                 textDecoration: todo.completed ? "line-through" : "none",
//               }}
//             >
//               {todo.title}
//             </Typography> */}
//             {editTodoId === todo.id ? (
//               <TextField
//                 value={editedTodoTitle}
//                 onChange={(e) => setEditedTodoTitle(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     saveEditedTodo(todo.id);
//                   } else if (e.key === "Escape") {
//                     cancelEditing();
//                   }
//                 }}
//               />
//             ) : (
//               <Typography
//                 variant="body1"
//                 style={{
//                   textDecoration: todo.completed ? "line-through" : "none",
//                 }}
//               >
//                 {todo.title}
//               </Typography>
//             )}
//             <Button
//               sx={{ minWidth: 100 }}
//               onClick={() => toggleComplete(todo.id)}
//               style={{ marginLeft: "auto" }}
//             >
//               {todo.completed ? "Uncomplete" : "Complete"}
//             </Button>
//             {editTodoId === todo.id ? (
//               <>
//                 <Button
//                   sx={{ minWidth: 100 }}
//                   size="small"
//                   onClick={() => saveEditedTodo(todo.id)}
//                   style={{ marginLeft: 10 }}
//                 >
//                   Save
//                 </Button>
//                 <Button
//                   sx={{ minWidth: 100 }}
//                   size="small"
//                   onClick={cancelEditing}
//                   style={{ marginLeft: 10 }}
//                 >
//                   Cancel
//                 </Button>
//               </>
//             ) : (
//               <Button
//                 sx={{ minWidth: 100 }}
//                 size="small"
//                 onClick={() => startEditing(todo.id, todo.title)}
//                 style={{ marginLeft: 10 }}
//               >
//                 Edit
//               </Button>
//             )}
//             <Button
//               sx={{ minWidth: 100 }}
//               onClick={() => removeTodo(todo.id)}
//               style={{ marginLeft: 10 }}
//             >
//               Remove
//             </Button>
//           </CardContent>
//         </Card>
//       ))}
//       {/* <Box>
//         <Card sx={{ minWidth: 275 }}>
//           <CardContent
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Typography variant="body1">Design sign up Flow</Typography>
//             <Button sx={{ minWidth: 100 }}>Edit</Button>
//           </CardContent>
//         </Card>
//       </Box> */}
//     </Box>
//   );
// };

// export default Home;

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
