
import axios from 'axios'

const baseUrl = "http://localhost:3020";

export const TodoService = {
    getSections() {
        return axios.get(baseUrl + "/sections")
    },
    addSection(body) {
        return axios.post(baseUrl + "/sections", body)
    },
    deleteSection(id){
        return axios.delete(`${baseUrl}/sections/${id}`)
    },
    editSection(id,body){
        return axios.put(`${baseUrl}/sections/${id}`,body)
    },
    getTodos() {
        return axios.get(baseUrl + "/todos")
    },
    addTasks(body) {
        return axios.post(baseUrl + "/todos", body)
    },
    updataTodo(id,newTodo){
        return axios.patch(`${baseUrl}/todos/${id}`,newTodo)
    },
    deleteTodo(id){
        return axios.delete(`${baseUrl}/todos/${id}`)
    },
    updateTask(id,newTask){
        return axios.put(`${baseUrl}/todos/${id}`,newTask)
    }
    
}