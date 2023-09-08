import React from 'react'
// import {Calculator} from './calculator'
// import Banner from './banner'
// import { EventData2 } from './even-data'
// import RefsFunc from './refs-func'
// import RefsArray from './refs-array'
// import MessageBox from './state-func'
import { userContext } from './context'
import Header from './context-header'


export default function App(){
  return (
      <userContext.Provider value={'Tom Jerry'}>
        <Header/>
      </userContext.Provider>
  )
}