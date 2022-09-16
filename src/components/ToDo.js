import { useState } from "react";
import ListItem from "./LisItem";

export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [todoList, SetTodoList] = useState([]);

  const handleNewItem = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Prevents page from refreshing

    let tempList = todoList; //Temporary array
    tempList.push(todo);
    console.log(todoList);

    SetTodoList(tempList); //Actually replacing state list with temporary list

    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNewItem} value={todo} type="text"></input>
        <button type="submit"> Add item</button>
      </form>

      <div>
        {todoList.map((item, index) => (
          <ListItem item = {item} key = {index}></ListItem>
        ))}
      </div>
    </div>
  );
}
