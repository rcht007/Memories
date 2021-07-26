import * as api from '../API/index.js'


//ActionCreators
export const getPosts=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchPosts();
        dispatch({type:'Fetch_ALL',payload:data});
    }catch(error){
        console.log(error.message)
    }
}
export const createPosts=()=>async (dispatch)=>{
    try{
        const {data}=await api.createPost();
        dispatch({type:'CREATE',payload:data});
    }catch(error){
        console.log(error.message)
        
    }
}