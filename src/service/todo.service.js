import axios from "axios"
const baseUrl="http://localhast:3020"

export const TodoService={
    getTodos() {
        return axios.get(baseUrl + "/todos")
    },

    getSections(){
        return axios.get(baseUrl + "/sections")
    },

    addSection(body){
        return axios.post(baseUrl + "/sections",body)
    }

}