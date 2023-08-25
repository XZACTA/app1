import React from 'react'
import {Calculator} from './calculator'
import Banner from './banner'
import { EventData2 } from './even-data'
import RefsFunc from './refs-func'
import RefsArray from './refs-array'
import MessageBox from './state-func'


export default function App(){
  return (
    <>
    <div>
      <RefsArray/>
      <MessageBox/>
    </div>
    </>
  )
}