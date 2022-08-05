import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Get } from './decorator/methods.decorator'
// import Rxjs from "./rxjs/Rxjs"
import RxjsRquest from './rxjs/Rxjs.request'

class App extends Component {
    @Get('aaaaaaa')
    test(txt: string) {
        console.log(txt)
    }
    render() {
        return (
            <>
                <RxjsRquest />
                {/* <Rxjs /> */}
                <div
                    onClick={() => {
                        this.test('a')
                    }}
                >
                    test
                </div>
            </>
        )
    }
}

export default App
