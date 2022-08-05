import React, { FC, ReactElement,Fragment,useRef, MutableRefObject, useEffect } from 'react'
import { fromEvent } from 'rxjs'



 const Rxjs:FC = ():ReactElement => {
  const btnRef:MutableRefObject<any> = useRef()


  try {
    // componentDidMount

    useEffect(()=>{
      fromEvent(btnRef.current,'click')
      .subscribe(()=>console.log('6666666666'))
    }, [btnRef])
  } catch (error) {
    console.log(error);
    
  }

  return (
    <Fragment>
      <button className='btn' ref = { btnRef } >btn</button>
    </Fragment>
  )
}

export default Rxjs

