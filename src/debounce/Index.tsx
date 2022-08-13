import {FC, ReactElement, SyntheticEvent, useEffect, useRef} from 'react'
import { Input } from 'antd'

// 怎么知道e的类型????  question

const Debounce: FC = (): ReactElement => {
    // const inputRef = useRef(null)
    // // 闭包
    // const debouncFun = function(fn:()=>void){
    //     // console.log('=========================>')
    //     let n = 0
    //     let timer:any = null
    //     console.log(timer,'timer1');
    //     return function(){
    //         n++
    //         console.log(n,'nnnnnnnnn');
    //         console.log(timer,'timer2');
    //         if(timer){
    //             clearTimeout(timer)
    //         }
    //         timer = setTimeout(()=>{
    //             fn()
    //         },2000)
    //     }
    // }

    // useEffect(()=>{
    //     const inputDom = document.querySelector('.input')!
    //     // debouncFun() 是执行 所以input监听的是debouncFun的返回值 也就是返回来的函数
    //     inputDom.addEventListener('input',debouncFun(()=>console.log('log here')))
    // },[inputRef])



    const onChangeFun = function (e:SyntheticEvent<HTMLInputElement>){
        // let input = (e.target) as HTMLInputElement
        // console.log(input.value)
    }
 
    return (
        <>
            {/*<input type="text" className={'input'} ref={ inputRef }/>*/}
            <Input onChange={ onChangeFun } />
        </>
    )
}

export default Debounce

   // const debounc = function (){
    //     // arguments传入的参数对象
    //     console.log(arguments,'arguments')
    // }
    // @ts-ignore
    // debounc(1,3,5,7)
