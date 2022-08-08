import React, {
    FC,
    ReactElement,
    Fragment,
    useState,
    useEffect,
    useRef,
    MutableRefObject,
    createContext,
    // useContext
} from 'react'
import store from '../store'

// import { RouteComponentProps } from 'react-router-dom';

import { connect, ConnectedProps } from 'react-redux'

const NumContext = createContext<{ num?: number }>({})

function Sub() {
    // const { num } = useContext(NumContext) // 这种写法也可以
    return (
        <NumContext.Consumer>
            {({ num }) => {
                return <h2>{num}</h2>
            }}
        </NumContext.Consumer>
    )
}
function Father() {
    return <Sub />
}

type PropsFromRedux = ConnectedProps<typeof connector>

interface OwnProps {
    name: string
}

type Props = PropsFromRedux & OwnProps

// setState是异步的,使用第二个参数回调函数可得到最新值
const Base: FC<Props> = (props): ReactElement => {
    // console.log(props, 'props')
    const { name, msg } = props

    const [num, setNum] = useState(0)
    const spanRef: MutableRefObject<any> = useRef(null)

    useEffect(() => {
        // 不写参数全部触发，[]为不触发
        console.log(spanRef)
        console.log(num)
    }, [num])

    const addNum = () => {
        setNum(num + 1) // 覆盖初始值
        // setNum((num)=> num+1) // 覆盖上一次的值
    }
    return (
        <NumContext.Provider value={{ num }}>
            <Fragment>
                <div>
                    {name}
                    {msg}
                    <button onClick={props.changeMsg}>修改</button>
                    <Father />
                </div>
                {/* <span ref={spanRef}>{num}</span> */}
                <button onClick={addNum}>+</button>
            </Fragment>
        </NumContext.Provider>
    )
}

const mapStateToProps = (state: {msg:''}) => {
    return {
        msg: state.msg,
    }
}
// (action:{type:string,value:string})=>void
const mapDispatchToProps = (dispatch: typeof store.dispatch) => {
    return {
        // changeMsg:function(){}的简写 key:value
        changeMsg() {
            const action = {
                type: 'changeMsgFn',
                value: '9527',
            }
            dispatch(action)
        },
    }
}

// React-Redux提供一个connect方法能够让你把组件和store连接起来。
const connector = connect(mapStateToProps, mapDispatchToProps)

// 高阶函数
export default connector(Base)
// 先写一个通用加法，他接收第一个加数，返回一个方法
// 返回的这个方法接收第二个加数，第一个加数是上层方法的a
// 这样当我们需要计算1+2是，就是add(1)(2)
// let add = (a) => {
//     return (b) => {
//     return a + b;
//     }
//    }
// let addFn = add(1);
// let res = addFn(4) == add(1)(2)
// 我们也可以将返回的函数赋给一个变量，这个变量也就变成一个能特定加a的一个方法

/**
 * useEffect 模拟三个生命周期
 * mouted(componentDidMount) updated(componentDidUpdate) beforeDestroy(componentWillUnmount)
 */
