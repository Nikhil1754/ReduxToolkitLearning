import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import {AiFillDelete} from 'react-icons/ai/index'
import { useDispatch } from 'react-redux';
import { removeUsers } from '../store/slices/UserSlice';
const DisplayData = () => {
    const data=useSelector((state)=>{
        return state.users;
    })
    const dispatch=useDispatch();
    const deleteUser=(id)=>{
        dispatch(removeUsers(id));
    }
  return (
   <Wrapper>
    {data?.map((state,id)=>{
        return <li key={id}>{state} <button className='btn-delete' onClick={()=>{
            deleteUser(id);
        }} > 
        <AiFillDelete className="delete-icon"/>
    </button>
    </li> })}
     </Wrapper> 
   
    
  )
}

const Wrapper=styled.section`
li{
    width:100%;
    display:flex;
    align-items:center;
    padding:10px,
    justify-content:center;
    border-bottom:1px solid #eee;
    $:first-child{
        border-top:1px solid #eee;
    }
}
`

export default DisplayData;