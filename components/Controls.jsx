import React from 'react'
import { Icon } from './Icon'

const Random = ({ cb }) => {
  return (
    <div
      style={{
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Icon name="random" cb={cb} />
    </div>
  )
}

const Normal = ({ cb }) => {
  return (
    <div
      style={{
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Icon name="back" cb={cb} />
      <Icon name="next" cb={cb} />
    </div>
  )
}
export const NavControls = ({ state, cb }) => {
  return (
    <div
      style={{
        width: '300px',
      }}
    >
      {state === 'random' ? <Random cb={cb} /> : <Normal cb={cb} />}
    </div>
  )
}
