import React from 'react'
import { DataContext, ControlsContext } from '../../lib/context'
import { PageLayout } from '../../components/layout/PageLayout'
import { BirdDisplay } from '../../components/BirdDisplay'
import { NavControls } from '../../components/Controls'

const Show = () => {
  const data = React.useContext(DataContext)
  const controls = React.useContext(ControlsContext)
  const [current, setCurrent] = React.useState(0)
  const total = data.length - 1

  const update = (val) => {
    if (val > total) {
      setCurrent(0)
    } else if (val < 0) {
      setCurrent(total)
    } else {
      setCurrent(val)
    }
  }

  const cbHandler = (e) => {
    if (!e?.target?.id) return
    const { id } = e.target
    const handlers = {
      next: () => update(current + 1),
      back: () => update(current - 1),
    }
    if (!handlers[id]) return
    handlers[id]()
  }

  return (
    <PageLayout>
      <BirdDisplay bird={data[current]} key={current} />
      <NavControls state={controls.navControls} cb={cbHandler} />
    </PageLayout>
  )
}

export default Show
