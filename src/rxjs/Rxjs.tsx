import React, {
    FC,
    ReactElement,
    Fragment,
    useRef,
    MutableRefObject,
    useEffect,
} from 'react'
// 响应式编程是一种面向数据流和变化传播的编程范式。这意味着可以在编程语言中很方便地表达静态或动态的数据流
import { fromEvent, Observable,throttleTime,scan } from 'rxjs'

const Rxjs: FC = (): ReactElement => {
    const btnRef: MutableRefObject<any> = useRef()

    // stream$尾部的$是表示当前这个变量是个ovservable
    const stream$ = new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next([1, 2, 3])
        }, 500)
        setTimeout(() => {
            subscriber.next({ a: 1000 })
        }, 1000)
        setTimeout(() => {
            subscriber.next('end')
        }, 3000)
        setTimeout(() => {
            subscriber.complete()
        }, 4000)
    })

    // 启动流
    stream$.subscribe({
        complete: () => console.log('done'),
        next: (v) => console.log(v, 'v'),
        error: () => console.log('error'),
    })

    try {
        // componentDidMount
        useEffect(() => {
           /**
            pipe(管道) 现在可以理解成一条数据流入的管子. 这里"数据"可以抽象成"逻辑流"。
            从点击事件发生开始, 逻辑的执行流程, 会进入 pipe 函数, 依次执行
            首先是流入 throttleTime. 它会将事件稀释到1000毫秒触发一次, 相当于一个"拦截规则"或者"守卫", 当允许数据流往下走以后, 又到了 scan 管子里, 
            这时就来了一个"新朋友" count, 它会进行类似 reduce 的操作, 将数据处理好, 
            然后送往 subscribe 函数中. 整个流程是非常清晰的. 因为pipe管道组合了各种"流"的相关操作, 令逻辑更为内聚.
            */
            fromEvent(btnRef.current, 'click')
            .pipe(
              throttleTime(2000),
              // scan 操作符的工作原理与数组的 reduce 类似。它需要一个暴露给回调函数当参数的初始值。每次回调函数运行后的返回值会作为下次回调函数运行时的参数。
              scan((count:number) => count + 1, 0)
            )
            // 订阅
            .subscribe((count:number) =>
                console.log(`this is ${count}`)
            )
        }, [btnRef])
    } catch (error) {
        console.log(error)
    }

    return (
        <Fragment>
            <button className="btn" ref={btnRef}>
                btn
            </button>
        </Fragment>
    )
}

export default Rxjs
