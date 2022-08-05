import React, { FC, MutableRefObject, ReactElement, useEffect, useRef } from 'react'
import { fromEvent,interval,from,merge, mergeMap,scan } from 'rxjs'
import axios from 'axios'

const RxjsRquest: FC = (): ReactElement => {
    const btnRef:MutableRefObject<any> = useRef()

    useEffect(()=>{
        const click = fromEvent(btnRef.current,'click')
        const inner = interval(500000)
        // 将数组、promise 或迭代器转换成 observable 。
        const req = from(axios.get('http://localhost:9000/todoList').then(res => {
            let code = res.data.code
            if(code === 200){
                return res
            }
           
            
        }))
        // 合并流
        const rep = merge(
            click,
            inner
        ).pipe(
            // 转换操作符(将每个源值投射成 Observable ，该 Observable 会合并到输出 Observable 中)
            mergeMap(_ => req),
        )
        rep.subscribe({
            complete: () => console.log('done'),
            next: (v) => console.log(v, 'v'),
            error: () => console.log('error'),
        })
    },[btnRef])

    const btnClickFun = ()=>{

    }

    return (
        <div>
            <button className="btn" ref={btnRef} onClick={btnClickFun}>
                btnX
            </button>
        </div>
    )
}

export default RxjsRquest
