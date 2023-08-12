import React from "react";
import styled from "styled-components";
import { deleteAllUsers } from "../store/slices/UserSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const DeleteAllUser = () => {
   const dispatch=useDispatch();
  const data=useSelector((state)=>{
    return state.user;
  })

  const DeleteAll=()=>{
    dispatch(deleteAllUsers(data));
  }
  return (
    <Wrapper>
      <button
        className="btn add-btn"
        onClick={() => {
          DeleteAll();
        }}
      >
        Delete All User
      </button>
    </Wrapper>
  );
};

const Wrapper=styled.section`
.clear-btn{
  text-transform:capitalize;
  background-color:#db338a;
}
`
