import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo, deleteTodo, switchTodo } from "../redux/modules/todos";
import {  useNavigate } from "react-router-dom";


const TodoList = () => {
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handAddTodo=()=>{
    if(title.trim()!==''&body.trim()!==''){
      dispatch(addTodo(title,body));
      setTitle('');
      setBody('');
      
    }else{
    alert('입력해주세요');
  }
  };
  const handDeleteTodo =(id)=>{
    dispatch(deleteTodo(id));
  }
  const handSwitchTodo=(id)=>{
    dispatch(switchTodo(id));
  }
  const completedTodos = todos.filter((todo)=>todo.isDone)
  const inTodos = todos.filter((todo)=>!todo.isDone)
  return (
  <div>
<h1>투두리스트</h1>
<div>
  <div>
  <p>제목</p>
  <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
  <p>내용</p>
  <input type="text" value={body} onChange={(e)=>setBody(e.target.value)} />
  <button onClick={handAddTodo}>전송</button>
  </div>
</div>
<ul>
<h2>하는중</h2>
    {inTodos.map((todo)=>(
      <li key={todo.id}>
      <div>
      <h3>제목:{todo.title}</h3>
      <p>내용:{todo.body}</p>
      </div>
      <button onClick={()=>navigate(`/${todo.id}`)}>상세보기</button>
      <button onClick={()=>handSwitchTodo(todo.id)}>
        {todo.isDone ? '취소':'끝남'}
      </button>
      <button onClick={()=>handDeleteTodo(todo.id)}>삭제</button>
      </li>
    ))}
    <h2>끝남</h2>
    {completedTodos.map((todo)=>(
      <li key={todo.id}>
      <div>
      <h3>제목:{todo.title}</h3>
      <p>내용:{todo.body}</p>
      </div>
      <button onClick={()=>navigate(`/${todo.id}`)}>상세보기</button>
      <button onClick={()=>handSwitchTodo(todo.id)}>
        {todo.isDone ? '취소':'끝남'}
      </button>
      <button onClick={()=>handDeleteTodo(todo.id)}>삭제</button>
      </li>
    ))}
</ul>
  </div>)
};

export default TodoList;