import React from 'react'
import { data } from './data'
import { controls } from './controls'

export const DataContext = React.createContext(data)
export const ControlsContext = React.createContext(controls)

export const Provider = (props) => {
  return (
    <DataContext.Provider value={data}>
      <ControlsContext.Provider value={controls}>
        {props.children}
      </ControlsContext.Provider>
    </DataContext.Provider>
  )
}
