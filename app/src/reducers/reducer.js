export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Another item',
        completed: false,
        id: 3892987590
    },
]

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'TOGGLE_COMPLETED':
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}