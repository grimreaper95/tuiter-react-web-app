import { createSlice } from "@reduxjs/toolkit";
//import tuits from './tuits.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk}
    from "../../services/tuits-thunks";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "/images/nasa-icon.jpeg",
};


const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
    "time": "2h"
}

const initialState = {
    tuits: [],
    loading: false
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload;
                console.log(payload[0]._id + ": payload");
            },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },

        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }


    },
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            console.log("templateTuit: " + templateTuit.topic)
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;

