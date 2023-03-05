import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../dataFakeApi/stock";

const initialState = datas;
const maxId=datas.length;

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
            const newProduct = {
                id: maxId,
                product: action.payload,
                quantity: action.payload,
                price: action.payload
            }
            state.push(newProduct)
        }
    }
})

export default datasSlice.reducer
export const {editQty,editPrice,addArticle} = datasSlice.actions

