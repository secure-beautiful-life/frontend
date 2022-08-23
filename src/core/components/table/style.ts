import styled from 'styled-components'
import { getFlex } from '../../util/styles/display'

export const Table = styled.table`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border-collapse: collapse;
`

export const Thead = styled.thead`
  height: 4.5rem;
  background-color: #f4f2ff;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 15px;
  text-transform: uppercase;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #d9d5ec;
  ${getFlex({ jc: 'space-between', ai: 'center' })}
`

export const Th = styled.th`
  width: 100%;
  height: 100%;
  ${getFlex()}
  color: #6E6893;
`

export const Tbody = styled.tbody`
  ${getFlex({ dir: 'column', jc: 'space-between', ai: 'center' })}
  div {
    width: 100%;
  }
`

export const Td = styled.td`
  ${getFlex()}
  width: 100%;
  height: 3.8rem;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #25213b;
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

export const Tr = styled.tr`
  ${getFlex({ jc: 'space-between', ai: 'center' })}
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #e6e6f2;
  &:last-child {
    border-bottom: none;
  }
`

export const DeleteBtn = styled.button`
  padding: 0.4rem 2.5rem;
  border: none;
  background-color: #ffe0e0;
  color: #d30000;
  border-radius: 1.5rem;
`

export const UpdateBtn = styled.button`
  padding: 0.4rem 2.5rem;
  border: none;
  background-color: #cdffcd;
  color: #007f00;
  border-radius: 1.5rem;
`

export const TriggerText = styled.span`
  color: #4a4aff;
  text-decoration: underline;
  cursor: pointer;
`
