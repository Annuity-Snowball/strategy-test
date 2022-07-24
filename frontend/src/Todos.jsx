import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";

const TodosContext = React.createContext({
  strategy_list: [], fetchTodos: () => {}
})
export default function Todos() {
  const [strategy_list, setTodos] = useState([])
  const fetchTodos = async () => {
    const response = await fetch("http://192.168.30.4:8000/stra")
    const strategy_list = await response.json()
    setTodos(strategy_list.data)
  }
  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <TodosContext.Provider value={{strategy_list, fetchTodos}}>
      <AddTodo />
      <Stack spacing={5}>
        {strategy_list.map((todo) => (
          <>
          <p>{todo.name}</p>
          <p>{todo.nickname}</p>
          <p>{todo.age}</p>
          </>
        ))}
      </Stack>
    </TodosContext.Provider>
  )
}

function AddTodo() {
  const [name, setName] = React.useState("")
  const [nickname, setNickname] = React.useState("")
  const [age, setAge] = React.useState("")
  const {strategy_list, fetchTodos} = React.useContext(TodosContext)

  const handleInput1 = event  => {
    setName(event.target.value)
  }
  const handleInput2 = event  => {
    setNickname(event.target.value)
  }
  const handleInput3 = event  => {
    setAge(event.target.value)
  }

  const handleSubmit = (event) => {
    const newstrategy_list = {
      "name": name,
      "nickname": nickname,
      "age"   : age
    }

    fetch("http://192.168.30.4:8000/stra", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newstrategy_list)
    }).then(fetchTodos)
  }

  return (
    <form>
      <InputGroup size="md">
        <input type="text"
          placeholder="Add a todo name"
          onChange={handleInput1}
        />
        <input type="text"
          placeholder="Add a todo nickname"
          onChange={handleInput2}
        />
        <input type="text"
          placeholder="Add a todo age"
          onChange={handleInput3}
        />
      </InputGroup>
      <button  type="submit"onClick={handleSubmit}>전송</button>
    </form>
  )
}