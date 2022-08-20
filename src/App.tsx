import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './core/components/Nav'
import { getFlex } from './core/util/styles/display'
import Main from './views/main/Main'

function App() {
  return (
    <Wrap>
      <Nav />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Wrap>
  )
}

export default App

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  ${getFlex({ dir: 'column', jc: 'flex-start' })}
`

const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 1rem 8rem;
`
