import styled from 'styled-components'
import { getFlex } from '../../../../core/util/styles/display'

interface IDeleteModal {
  content: string
  onDelete: any
  onCancel: any
}

export const DeleteModal = ({ content, onDelete, onCancel }: IDeleteModal) => {
  return (
    <DeleteModalWrap>
      {content}
      <div>
        <button onClick={onDelete}>삭제</button>
        <button onClick={onCancel}>취소</button>
      </div>
    </DeleteModalWrap>
  )
}

const DeleteModalWrap = styled.div`
  width: 100%;
  height: 100%;
  ${getFlex({ dir: 'column' })}
  padding: 3rem;
  font-size: 2rem;
  gap: 8rem;
  & > div {
    width: 100%;
    ${getFlex({ jc: 'space-between' })}
    button {
      width: 14rem;
      height: 5rem;
      border: none;
      background-color: #ffe0e0;
      color: #d30000;
      border-radius: 2rem;
      &:last-child {
        background-color: #f2f0f9;
        color: #6e6893;
      }
    }
  }
`
