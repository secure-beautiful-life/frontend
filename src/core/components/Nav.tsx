import { useState } from 'react'
import styled from 'styled-components'
import { getFlex } from '../util/styles/display'

export default function Nav() {
  const [isLogin, setIsLogin] = useState(false)

  const onLogin = () => {
    setIsLogin(true)
  }
  const onLogout = () => {
    setIsLogin(false)
  }

  return (
    <Wrap>
      <span>Admin Logo</span>
      <div>
        <Btn>쇼핑몰로 이동하기</Btn>
        {isLogin ? <Btn onClick={onLogout}>로그아웃</Btn> : <Btn onClick={onLogin}>로그인</Btn>}
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
    gap: 2.3rem;
  }

  button:last-child {
    width: 10rem;
  }
`

const Btn = styled.button`
  border: none;
  padding: 1rem 2rem;
  border-radius: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #f4f2ff;
  }
`
