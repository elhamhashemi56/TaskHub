// import axios from 'axios'

// const baseUrl= "http://localhast:3020";

// export const TodoService={
//     getTodos() {
//            return axios.get(baseUrl + "/todos")
       
//     },
//     getSections(){
       
//         return axios.get(baseUrl + "/sections")
//     },
//     addSection(body){
        
//         return axios.post(baseUrl + "/sections", body)
//     }
// }

import axios from 'axios'

const baseUrl = "http://localhost:3020";

export const TodoService = {
    getTodos() {
        return axios.get(baseUrl + "/todos")
    },
    getSections() {
        return axios.get(baseUrl + "/sections")
    },
    addSection(body) {
        return axios.post(baseUrl + "/sections", body)
    },
    addTasks(body) {
        return axios.post(baseUrl + "/todos", body)
    },
    updataTodo(id,newTodo){
        return axios.patch(`${baseUrl}/todos/${id}`,newTodo)
    }
}