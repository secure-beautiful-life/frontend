import styled from 'styled-components'
import { getFlex } from '../util/styles/display'

export default function Nav() {
  return (
    <Wrap>
      <span>Admin Logo</span>
      <div>
        <Btn>로그아웃</Btn>
        <Btn>HOME</Btn>
      </div>
    </Wrap>
  )
}

const Wrap = styled.nav`
  ${getFlex({ jc: 'space-between' })}
  width: 100vw;
  height: 6rem;
  padding: 0 3rem;
  border-bottom: 1px solid #eaeaea;
  font-size: 2rem;

  & > div {
    ${getFlex()}
    gap: 2.2rem;
  }
`

const Btn = styled.button`
  border: none;
  padding: 1rem 2rem;
  border-radius: 1.2rem;
  cursor: pointer;
`
