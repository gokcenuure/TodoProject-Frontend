
import { ADD_TO_TASK, REMOVE_FROM_TASK } from "../actions/taskActions";
import { taskItems } from "../initialValues/taskItems"

const initialState = {
    taskItems: taskItems
}

export default function taskReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_TASK:
            let todo = state.taskItems.find(t => t.todo.id === payload.id)
            if (todo) {
                todo.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    taskItems: [...state.taskItems, { quantity: 1, todo: payload }]
                }
            }

        case REMOVE_FROM_TASK:
            return {
                ...state,
                taskItems: state.taskItems.filter((t) => t.todo.id !== payload.id),
            }
        default:
            return state;
    }
}