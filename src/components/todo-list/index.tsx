import React, {
    FC,
    ReactElement,
    useCallback,
    useEffect,
    useState,
} from 'react'
import { Itodo } from '../../interface/todo.interface'
import TdInput from './Input'
import TdList from './List'

const TodoList: FC = (): ReactElement => {
    const [todoList, setTodoList] = useState<Itodo[]>([])

    useEffect(() => {
        console.log(todoList, 'todoList')
    }, [todoList])

    const addTodo = useCallback((todo: Itodo) => {
        setTodoList((todoList) => [...todoList, todo])
    }, [])
    return (
        <div className="todo-list">
            <TdInput todoList={todoList} addTodo={addTodo} />
            <TdList />
        </div>
    )
}

export default TodoList
