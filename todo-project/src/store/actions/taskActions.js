
export const ADD_TO_TASK = "ADD_TO_TASK"
export const REMOVE_FROM_TASK = "REMOVE_FROM_TASK"
export const ADD_TO_EMPLOYEES = "ADD_TO_EMPLOYEES"
export const REMOVE_FROM_EMPLOYEES = "REMOVE_FROM_EMPLOYEES"
export const ADD_TO_EXECUTİVES = "ADD_TO_EXECUTİVES"
export const REMOVE_FROM_EXECUTİVES = "REMOVE_FROM_EXECUTİVES"





export function addToTask(todo) {
    return {
        type: ADD_TO_TASK,
        payload: todo
    }
}
function removeFromTask(todo) {
    return {
        type: REMOVE_FROM_TASK,
        payload: todo
    }
    function addToEmployees(employees) {
        return {
            type: ADD_TO_EMPLOYEES,
            payload: employees
        }
    }
    function removeFromEmployees(employees) {
        return {
            type: REMOVE_FROM_EMPLOYEES,
            payload: employees
        }
    }
    function addToExecutives(executives) {
        return {
            type: ADD_TO_EXECUTİVES,
            payload: executives
        }
    }
    function removeFromEmployees(executives) {
        return {
            type: REMOVE_FROM_EXECUTİVES,
            payload: executives
        }
    }




}

