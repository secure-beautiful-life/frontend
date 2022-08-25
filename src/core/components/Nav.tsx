import { useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import { makePost } from '../../api/axios/makeRequest'
import { ColumnWrap } from '../../views/main/components/style'
import { useInput } from '../util/hooks/useInput'
import { useModal } from '../util/hooks/useModal'
import { getFlex } from '../util/styles/display'
import Input from './Input'
import Modal from './modal/Modal'

export default function Nav() {
  const isToken = () => localStorage.getItem('access_token')

  const [isLogin, setIsLogin] = useState(isToken() ? true : false)
  const { isModal, setIsModal } = useModal()

  const onLogout = () => {
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('refresh_token')
    setIsLogin(false)
  }

  const loginSuccess = () => {
    setIsModal(false)
    setIsLogin(true)
  }

  return (
    <>
      <Wrap>
        <span>Admin Logo</span>
        <div>
          <Btn>쇼핑몰로 이동하기</Btn>
          {isLogin ? <Btn onClick={onLogout}>로그아웃</Btn> : <Btn onClick={() => setIsModal(true)}>로그인</Btn>}
        </div>
        {isModal && (
          <Modal
            clickDimmed={() => setIsModal(false)}
            width="40rem"
            height="30rem"
            children={<LoginModal modalControl={loginSuccess} />}
          />
        )}
      </Wrap>
    </>
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
  &:not(:disabled):hover {
    background-color: #f4f2ff;
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

const LoginModal = ({ modalControl }: { modalControl: any }) => {
  const { value: username, changeValue: changeUserName } = useInput('')
  const { value: password, changeValue: setPassword } = useInput('')

  const { mutate } = useMutation((body: any) => makePost({ endpoint: '/users/login', body }), {
    onSuccess: (res) => {
      window.localStorage.setItem('access_token', res.data.access_token)
      window.localStorage.setItem('refresh_token', res.data.refresh_token)
      modalControl()
    },
  })

  const onLogin = () => {
    mutate({ username, password })
  }

  return (
    <ColumnWrap style={{ padding: '2rem 1rem' }}>
      <Input placeHolder="id" label="아이디" value={username} changeValue={changeUserName} />
      <Input placeHolder="password" label="비밀번호" value={password} changeValue={setPassword} />
      <Btn style={{ width: '100%' }} onClick={onLogin} disabled={!username || !password}>
        로그인하기
      </Btn>
    </ColumnWrap>
  )
}
