import {createSlice} from '@reduxjs/toolkit';

const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUsers(state,action){
            state.push(action.payload);
        },
        removeUsers(state,action){
            console.log(action.payload)
            state.splice(action.payload,1);
        },
        deleteAllUsers(state,action){
            state.splice(0,state.length);
        }
    },
});
export  const {addUsers,removeUsers,deleteAllUsers}=userSlice.actions;
export default userSlice;