import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Get } from './decorator/methods.decorator'
// import Rxjs from "./rxjs/Rxjs"
import RxjsRquest from './rxjs/Rxjs.request'
import Base from './practise/Base'
import Debounce from './debounce/Index'

class App extends Component {
    @Get('aaaaaaa')
    test(txt: string) {
        console.log(txt)
    }
    render() {
        return (
            <>
                <Debounce />
                {/* <Base name={'testName'} /> */}
                {/* <RxjsRquest /> */}
                {/* <Rxjs /> */}
                <div
                    onClick={() => {
                        this.test('a')
                    }}
                ></div>
            </>
        )
    }
}

export default App
