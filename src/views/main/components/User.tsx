import { useState } from 'react'
import Modal from '../../../core/components/modal/Modal'
import * as UI from '../../../core/components/table/style'
import { useModal } from '../../../core/util/hooks/useModal'
import { _user } from '../_dummy'
import { DeleteModal } from './modal/DeleteModal'

export default function User() {
  const { isModal, setIsModal } = useModal()
  const [modalType, setModalType] = useState('')

  const onSetIsModal = (type: string) => () => {
    setModalType(type)
    setIsModal(true)
  }

  return (
    <>
      <UI.Table>
        <UI.Thead>
          <UI.Tr>
            <UI.Th>이름</UI.Th>
            <UI.Th>이메일</UI.Th>
            <UI.Th>나이</UI.Th>
            <UI.Th>권한</UI.Th>
            <UI.Th>삭제</UI.Th>
          </UI.Tr>
        </UI.Thead>
        <UI.Tbody>
          {_user.cellList.map((cell) => (
            <UI.Tr key={cell.name}>
              <UI.Td>
                <UI.TriggerText onClick={onSetIsModal('user')}>{cell.name}</UI.TriggerText>
              </UI.Td>
              <UI.Td>{cell.email}</UI.Td>
              <UI.Td>{cell.age}</UI.Td>
              <UI.Td>{cell.role}</UI.Td>
              <UI.Th>
                <UI.DeleteBtn onClick={onSetIsModal('delete')}>삭제</UI.DeleteBtn>
              </UI.Th>
            </UI.Tr>
          ))}
        </UI.Tbody>
      </UI.Table>
      {isModal && (
        <Modal
          clickDimmed={() => setIsModal(false)}
          width="40rem"
          height="28rem"
          children={
            modalType === 'delete' ? (
              <DeleteModal content="유저를 삭제하시겠습니까?" onDelete={() => {}} onCancel={() => setIsModal(false)} />
            ) : (
              <UserModal userData={''} />
            )
          }
        />
      )}
    </>
  )
}

export const UserModal = (userData: any) => {
  return <div>유저 데이터</div>
}
