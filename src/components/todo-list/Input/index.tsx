import React, { FC, ReactElement, useRef } from 'react'
import { Itodo } from '../../../interface/todo.interface'

interface Iprops {
    todoList: Itodo[]
    addTodo(todo: Itodo): void
}
const TdInput: FC<Iprops> = ({ todoList, addTodo }): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null)

    const addItem = () => {
        const val: string = inputRef.current!.value.trim()

        if (!val.length) {
            console.log('请输入')
            return
        }

        /*  find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
            find() 方法为数组中的每个元素都调用一次函数执行：
            当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
            如果没有符合条件的元素返回 undefined
            注意: find() 对于空数组，函数是不会执行的。
            注意: find() 并没有改变数组的原始值。*/

        const isExist = todoList.find((o: Itodo) => o.content === val)
        if (isExist) {
            console.log('已存在')
            return
        }
        addTodo({
            id: new Date().getTime(),
            content: val,
            completed: false,
        })
        inputRef.current!.value = ''
    }
    return (
        <div className="td-input">
            <input type="text" ref={inputRef} />
            <button onClick={addItem}>+</button>
        </div>
    )
}

export default TdInput
