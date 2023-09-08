import React from 'react'
// import {Calculator} from './calculator'
// import Banner from './banner'
// import { EventData2 } from './even-data'
// import RefsFunc from './refs-func'
// import RefsArray from './refs-array'
// import MessageBox from './state-func'
import { userContext } from './context'
// import Header from './context-header'
// import Content from './context-content'
import Header2 from './context-header2'
import Content2 from './context-content2'


export default function App(){
  let[user,setUser]= React.useState()
  return (
      <userContext.Provider value={[user,setUser]}>
        <Header2/>
        <Content2/>
      </userContext.Provider>
  )
}