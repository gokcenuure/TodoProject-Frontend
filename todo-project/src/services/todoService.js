import axios from "axios";

export default class TodoService {
      getTodos() {
          return axios.get("http://localhost:8080/api/todos/getall")
      }

      getByTodoName(todoName) {
        return axios.get("http://localhost:8080/api/todos/getByTodoName?todoName"+todoName)
    }
    getEmployees() {
        return axios.get("http://localhost:8080/api/employees/getall")

    }
    getByEmployeesFirstName(firstName) {
        return axios.get("http://localhost:8080/api/employees/getByFirstName?firstName"+firstName)

    }
    getExecutives() {
        return axios.get("http://localhost:8080/api/executives/getall")

    }
    getByExecutivesFirstName(firstName) {
        return axios.get("http://localhost:8080/api/executives/getByFirstName?firstName"+firstName)




    }

}