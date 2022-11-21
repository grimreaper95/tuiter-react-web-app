import axios from 'axios';
const API_BASE = 'https://tuiter-node-server-app-ss.herokuapp.com/api';
// console.log(API_BASE + ":: shashank")
const TUITS_API = `${API_BASE}/tuits`;

// const TUITS_API = 'https://tuiter-node-server-app-ss.herokuapp.com/api/tuits'

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}


export const findTuits  = async ()     => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    // console.log(tuits)
    // console.log(tuits[0].tuit + " : a");
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}



