import React from 'react'

export const Icon = ({ name, cb }) => {
  const url = `/icons/${name}.png`
  return (
    <img
      id={name}
      keu={name}
      onClick={cb}
      src={url}
      width="30px"
      height="30px"
    />
  )
}
