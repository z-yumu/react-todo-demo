import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Get } from './decorator/methods.decorator'
// import Rxjs from "./rxjs/Rxjs"
import RxjsRquest from './rxjs/Rxjs.request'
import Base from './practise/Base'

class App extends Component {
    @Get('aaaaaaa')
    test(txt: string) {
        console.log(txt)
    }
    render() {
        return (
            <>
                <Base name={'testName'} />
                {/* <RxjsRquest /> */}
                {/* <Rxjs /> */}
                <div
                    onClick={() => {
                        this.test('a')
                    }}
                >
                    
                </div>
            </>
        )
    }
}

export default App
