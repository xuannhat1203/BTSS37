import React, { useContext } from 'react'
import { SetUseContext } from './UseContext'
export default function D() {
    const getData = useContext(SetUseContext)
  return (
    <>
    <p>Name: {getData}</p>
    </>
  )
}
