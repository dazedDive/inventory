import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../dataFakeApi/stock";

const initialState = datas;

const datasSlice = createSlice({
    name: 'dataManager',
    initialState,
    reducers:{
        editQty : (state,action)=>{
            const product = state.find((p)=> p.id === action.payload.id)
            product.quantity=action.payload.quantity
        },
        editPrice : (state,action)=>{
            const product = state.find((p)=> p.id === action.payload.id)
            product.price=action.payload.price
        },
        addArticle : (state,action)=>{
            const maxId=state[state.length-1].id;
            const newProduct = {
                id: maxId+1,
                product: action.payload.product,
                quantity: action.payload.quantity,
                price: action.payload.price
            }
            state.push(newProduct);
        },
        delArticle : (state,action)=>{
            console.log(action.payload)
            return state = state.filter(p=>p.id !== action.payload)
        },
    }
})

export default datasSlice.reducer
export const {editQty, editPrice, addArticle, delArticle} = datasSlice.actions

