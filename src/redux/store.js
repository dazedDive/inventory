import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './features';

export const store = configureStore({

    reducer:{
        datas:dataReducer
    }
})

export default store