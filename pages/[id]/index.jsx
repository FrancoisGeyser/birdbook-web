import React from 'react'
import { useRouter } from 'next/router'
import { DataContext } from '../../lib/context'
import { BirdDisplay } from '../../components/BirdDisplay'
import { PageLayout } from '../../components/layout/PageLayout'

const Random = () => {
  const data = React.useContext(DataContext)
  const router = useRouter()
  const { id } = router.query

  if (!id || id > data.length) {
    return (
      <PageLayout>
        <h3>Not found</h3>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <BirdDisplay bird={data[id]} key={id} />
    </PageLayout>
  )
}

export default Random
