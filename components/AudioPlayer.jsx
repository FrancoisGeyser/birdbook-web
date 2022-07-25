import React from 'react'
import { Icon } from './Icon'

export const AudioPlayer = ({ src, cb }) => {
  const audio = React.useRef(null)
  const [playing, setPlaying] = React.useState(false)

  React.useEffect(() => {
    audio.current = new Audio(src)
    return () => {
      setPlaying(false)
      audio.current.pause()
      audio.current = null
    }
  }, [src])

  const clickHandler = (e) => {
    const { id } = e.target
    const handlers = {
      play: () => {
        audio.current.play()
        setPlaying(true)
      },
      pause: () => {
        audio.current.pause()
        setPlaying(false)
      },
    }
    handlers[id]()
  }

  return (
    <div
      style={{
        width: '300px',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      {playing ? (
        <Icon name="pause" cb={clickHandler} />
      ) : (
        <Icon name="play" cb={clickHandler} />
      )}
    </div>
  )
}
