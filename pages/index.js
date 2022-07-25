import { useRouter } from 'next/router'
import { PageLayout } from '../components/layout/PageLayout'
import { Icon } from '../components/Icon'

const NavItem = ({ name, clickHandler }) => {
  return (
    <div>
      <Icon name={name} cb={clickHandler} />
    </div>
  )
}

const Home = () => {
  const url = `/images/home/home.jpg`
  const router = useRouter()
  const clickHandler = (e) => {
    const { id } = e.target
    const handlers = {
      play() {
        router.push('show')
      },
      random() {
        router.push('random')
      },
      search() {
        router.push('search')
      },
      alpha() {
        router.push('alpha')
      },
    }
    handlers[id]()
  }
  return (
    <PageLayout>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <img src={url} alt="bird image" style={{ width: '100%' }} />
        <div
          style={{
            margin: '3rem auto',
            width: '300px',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <NavItem name="play" clickHandler={clickHandler} />
          <NavItem name="random" clickHandler={clickHandler} />
          <NavItem name="search" clickHandler={clickHandler} />
          <NavItem name="alpha" clickHandler={clickHandler} />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home
