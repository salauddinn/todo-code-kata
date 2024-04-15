import axios from "axios";
import { TODO_BASE_URL } from "../constants/constants.js";

export const fetchTodos = async (start, limit) => {
    try {
        const response = await axios.get(
            TODO_BASE_URL + `?start=${start}&_limit=${limit}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(`Failed to fetch TODO's: ${error.message}`);
    }
};
export const getEvenNumberTodos = async (todos, noOfEvenNumbers) => {
    const evenTodos = todos
        .filter((todo) => todo.id % 2 === 0)
        .slice(0, noOfEvenNumbers);
    return evenTodos.map((todo) => ({
        title: todo.title,
        completed: todo.completed ? "Completed" : "Not Completed",
    }));
};
