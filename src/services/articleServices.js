import { response } from "msw";
import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = ()=> {
    axiosWithAuth().get(`http://localhost:5000/api/articles/${id}`)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.