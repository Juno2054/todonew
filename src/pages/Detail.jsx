import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useLocation,useNavigate, useParams } from "react-router-dom";


const Detail = () => {
const todos =useSelector((state)=>state.todos);
const location=useLocation();
const navigate=useNavigate();
const {id}= useParams();
const todoId= String(id);
const todo =todos.find((todo)=>todo.id===todoId);
const handBack =()=> navigate('/')

  return <div>
    <h2>상세 정보</h2>
    {todo?(
      <div>
        <h3>제목 : {todo.title}</h3>
        <p>내용 : {todo.body}</p>
        <p>완료 여부: {todo.isDone ?'끝남':'진행중!'}</p>
      </div>
      
    ):<p>없음</p>}
    <button onClick={handBack}>뒤로가기</button>
  </div>;
};

export default Detail;
