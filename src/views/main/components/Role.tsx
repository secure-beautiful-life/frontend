import { useState } from 'react'
import Modal from '../../../core/components/modal/Modal'
import * as UI from '../../../core/components/table/style'
import { useModal } from '../../../core/util/hooks/useModal'
import { Btn } from '../style'
import { _resource } from '../_dummy'
import { DeleteModal } from './modal/DeleteModal'

export default function Role() {
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
            <UI.Th>리소스명</UI.Th>
            <UI.Th>리소스타입</UI.Th>
            <UI.Th>HttpMethod</UI.Th>
            <UI.Th>순서</UI.Th>
            <UI.Th>수정</UI.Th>
          </UI.Tr>
        </UI.Thead>
        <UI.Tbody>
          {_resource.cellList.map((cell) => (
            <UI.Tr key={cell.name}>
              <UI.Td>{cell.name}</UI.Td>
              <UI.Td>{cell.type}</UI.Td>
              <UI.Td>{cell.httpMethod}</UI.Td>
              <UI.Td>{cell.order}</UI.Td>
              <UI.Th>
                <UI.UpdateBtn onClick={onSetIsModal('update')}>수정</UI.UpdateBtn>
              </UI.Th>
            </UI.Tr>
          ))}
        </UI.Tbody>
      </UI.Table>
      <Btn>권한 등록</Btn>
      {isModal && (
        <Modal
          clickDimmed={() => setIsModal(false)}
          width="40rem"
          height="28rem"
          children={
            modalType === 'delete' ? (
              <DeleteModal content="권한을 삭제하시겠습니까?" onDelete={() => {}} onCancel={() => setIsModal(false)} />
            ) : (
              <div>수정 모달</div>
            )
          }
        />
      )}
    </>
  )
}
