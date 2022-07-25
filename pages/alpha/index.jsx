import React, { useContext, useState } from 'react'
import { PageLayout } from '../../components/layout/PageLayout'
import { DataContext } from '../../lib/context'

const Alpha = () => {
  const data = useContext(DataContext)
  const [lang, setLang] = useState('Afr')
  const sortedData = {
    Afr: [...data].sort((a, b) => {
      const A = a.nameA.replace(/ /g, '')
      const B = b.nameA.replace(/ /g, '')
      if (A > B) return 1
      if (A < B) return -1
      else return 0
    }),
    En: [...data].sort((a, b) => {
      const A = a.nameE.replace(/ /g, '')
      const B = b.nameE.replace(/ /g, '')
      if (A > B) return 1
      if (A < B) return -1
      else return 0
    }),
  }

  const ListLinks = sortedData[lang].map((bird) => (
    <div
      key={bird.nameA}
      style={{
        margin: '0.5rem',
        cursor: 'pointer',
      }}
    >
      <a href={`/${bird.id - 1}`}>
        <h3>
          {lang == 'Afr'
            ? bird.nameA + ' / ' + bird.nameE
            : bird.nameE + ' / ' + bird.nameA}
        </h3>
      </a>
    </div>
  ))

  return (
    <PageLayout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '300px',
        }}
      >
        <div
          style={{
            cursor: 'pointer',
            padding: '0.5rem',
            border: lang === 'Afr' ? '1px solid black' : 'none',
          }}
          onClick={() => setLang('Afr')}
        >
          Afr
        </div>
        <div
          style={{
            cursor: 'pointer',
            padding: '0.5rem',
            border: lang === 'En' ? '1px solid black' : 'none',
          }}
          onClick={() => setLang('En')}
        >
          En
        </div>
      </div>
      <hr style={{ width: '100%' }} />
      <div>{ListLinks}</div>
    </PageLayout>
  )
}

export default Alpha
