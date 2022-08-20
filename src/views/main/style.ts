import styled from 'styled-components'
import { getFlex } from '../../core/util/styles/display'

export const Wrap = styled.main`
  ${getFlex({ dir: 'column', jc: 'flex-start', ai: 'flex-end' })}
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`

export const Tab = styled.ul`
  ${getFlex({ jc: 'flex-start', ai: 'flex-start' })}
  width: 100%;
  height: 3rem;
  gap: 2rem;
  border-bottom: 1px solid #c6c2de;
  margin-bottom: 2rem;
`

export const TabItem = styled.li<{ isCurr: any }>`
  ${getFlex()}
  width: 12rem;
  height: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #6e6893;
  cursor: pointer;
  ${({ isCurr }) =>
    isCurr
      ? `
    color: #25213B;
    border-bottom: 2px solid #25213B;
  `
      : `color: #6e6893;`}
`

export const Btn = styled.button`
  color: white;
  background-color: #6d5bd0;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-top: 1.7rem;
  cursor: pointer;
`
