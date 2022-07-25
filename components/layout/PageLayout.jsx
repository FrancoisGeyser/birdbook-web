import { Icon } from '../Icon'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  const home = () => router.push('/')
  if (router.pathname == '/') return null
  return (
    <div style={{ width: '100%', padding: '1rem' }}>
      <Icon name="home" cb={() => home()} />
    </div>
  )
}

export const PageLayout = ({ children }) => {
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Nav />
      {children}
    </div>
  )
}
