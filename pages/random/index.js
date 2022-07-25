import React from 'react'
import { DataContext, ControlsContext } from '../../lib/context'
import { BirdDisplay } from '../../components/BirdDisplay'
import { NavControls } from '../../components/Controls'
import { PageLayout } from '../../components/layout/PageLayout'

const Random = () => {
  const data = React.useContext(DataContext)
  const controls = React.useContext(ControlsContext)
  const [current, setCurrent] = React.useState(0)

  const total = data.length

  function getRandomInt() {
    return Math.floor(Math.random() * total)
  }

  const update = () => {
    setCurrent(getRandomInt())
  }

  const cbHandler = (e) => {
    const { id } = e.target
    const handlers = {
      random: () => update(),
    }
    if (!handlers[id]) return
    handlers[id]()
  }

  return (
    <PageLayout>
      <BirdDisplay bird={data[current]} key={current} />
      <NavControls state={'random'} cb={cbHandler} />
    </PageLayout>
  )
}

export default Random
