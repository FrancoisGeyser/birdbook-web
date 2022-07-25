import React, { useContext, useState, useCallback, useEffect } from 'react'
import { PageLayout } from '../../components/layout/PageLayout'
import { DataContext } from '../../lib/context'

const Search = () => {
  const data = useContext(DataContext)
  const [lang, setLang] = useState('Afr')
  const [searchTerm, setSearchTerm] = useState(null)

  useEffect(() => {
    if (searchTerm === '' || searchTerm === ' ') {
      setSearchTerm(null)
    }
  }, [searchTerm])

  const ListItem = ({ bird }) => {
    return (
      <div
        key={bird.nameA}
        style={{
          margin: '0.5rem',
          cursor: 'pointer',
        }}
      >
        <a href={`/${bird.id - 1}`}>
          {lang == 'Afr'
            ? bird.nameA + ' / ' + bird.nameE
            : bird.nameE + ' / ' + bird.nameA}
        </a>
      </div>
    )
  }

  const List = useCallback(
    () =>
      data
        .reduce((birds, bird) => {
          if (
            bird.nameA.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bird.nameE.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            birds.push(bird)
          }
          return birds
        }, [])
        .map((bird, index) => <ListItem key={index} bird={bird} />),
    [searchTerm]
  )

  return (
    <PageLayout>
      <div>
        <label htmlFor="search">
          Soek
          <input
            name="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      {searchTerm ? <List /> : <p>Enter search term</p>}
      {searchTerm !== null && List().length === 0 ? <p>None found</p> : null}
    </PageLayout>
  )
}

export default Search
