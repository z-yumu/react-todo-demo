import React, {
    FC,
    ReactElement,
    Fragment,
    useRef,
    MutableRefObject,
    useEffect,
} from 'react'
import { fromEvent, Observable } from 'rxjs'

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
            fromEvent(btnRef.current, 'click').subscribe(() =>
                console.log('6666666666')
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
