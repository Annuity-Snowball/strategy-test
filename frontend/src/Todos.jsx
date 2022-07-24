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
import './App.css';
const Title = (props) => {
  return (
    <h1 className='logo'>{props.title}</h1>
  );
}
const TodosContext = React.createContext({
  strategy_list: [], fetchTodos: () => {}
})

export default async function Todos() {
  const [strategy_list, setTodos] = useState([])
  const fetchTodos = async () => {
    const response = await fetch("http://192.168.30.2:8000/stra")
    const strategy_list = await response.json()
    setTodos(strategy_list.data)
  }
  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <TodosContext.Provider value={{strategy_list, fetchTodos}}>
      <App />
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

async function AddTodo() {
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

    fetch("http://192.168.30.2:8000/stra", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newstrategy_list)
    }).then(fetchTodos)
  }

  return (
    <form>
      <InputGroup size="md">
        <input type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInput1}
        />
        <input type="text"
          placeholder="별명을 입력하세요"
          onChange={handleInput2}
        />
        <input type="text"
          placeholder="나이을 입력하세요"
          onChange={handleInput3}
        />
      </InputGroup>
      <button type="submit"onClick={handleSubmit}>전송</button>
    </form>
  )
}
const App = () =>(
  <>
    <div className="App">
      <Title title="SnowBall"/>
      <ul className="banner">
        <li>우리는?</li>
        <li>포트폴리오 등록</li>
        <li>포트폴리오 추천</li>
        <li>프트폴리오 쇼핑</li>
        <li>공지사항</li>
        <li className="Loginbanner">Log In</li>
        <li
         className="Signupbanner">Sign up</li>
      </ul>
    </div>

    <h1>포트폴리오 입력</h1>
    <br></br>
  </>
);