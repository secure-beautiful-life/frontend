import { createPortal } from 'react-dom'
import styled from 'styled-components'
import * as I from './interface'

export default function Modal({ width, height, children, clickDimmed }: I.Modal) {
  const container = document.getElementById('root') || document.body

  return createPortal(
    <Contents clickDimmed={clickDimmed} width={width} height={height} children={children} />,
    container
  )
}

const Contents = ({ width, height, children, clickDimmed }: I.Modal) => {
  return (
    <>
      <Dimmed onClick={clickDimmed} />
      <Wrap width={width} height={height}>
        {children}
      </Wrap>
    </>
  )
}

const Wrap = styled.div<I.Wrap_props>`
  ${({ width }) => `width: ${width};`}
  ${({ height }) => `height: ${height};`}
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  padding: 1rem;
  border-radius: 12px;
  background-color: white;
`

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  right: 0%;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`
