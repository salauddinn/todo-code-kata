import axios from 'axios';
import { TODO_BASE_URL } from '../constants/constants.js';
import { fetchTodos, getEvenNumberTodos } from './todoCommands.js';
import MockAdapter from 'axios-mock-adapter';

describe('fetchTodos', () => {
    var mock = new MockAdapter(axios);
    it('fetches todos from the API', async () => {
        const todos = [{ id: 1, title: 'Todo 1', completed: false }];
        mock.onGet(TODO_BASE_URL + `?start=0&_limit=10`).reply(200, todos);
        const result = await fetchTodos(0, 10);
        expect(result).toEqual(todos);
    });

    it('throws an error when fetching todos fails', async () => {
        const errorMessage = 'Failed to fetch TODO\'s: Request failed with status code 501';
        mock.onGet(TODO_BASE_URL + `?start=0&_limit=10`).reply(501, "Request failed with status code 501");

        await expect(fetchTodos(0, 10)).rejects.toThrow(errorMessage);
    });
});

describe('getEvenNumberTodos', () => {
    it('returns even numbered todos with titles and completion status', async () => {
        const todos = [
            { id: 1, title: 'Todo 1', completed: false },
            { id: 2, title: 'Todo 2', completed: true },
            { id: 3, title: 'Todo 3', completed: false }
        ];
        const result = await getEvenNumberTodos(todos, 2);
        expect(result).toEqual([
            { title: 'Todo 2', completed: 'Completed' }
        ]);
    });
});
