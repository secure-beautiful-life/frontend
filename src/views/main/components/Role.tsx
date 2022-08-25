import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { queryClient } from '../../..'
import { makeGet, makePost, makePut } from '../../../api/axios/makeRequest'
import Input from '../../../core/components/Input'
import Modal from '../../../core/components/modal/Modal'
import * as UI from '../../../core/components/table/style'
import { useInput } from '../../../core/util/hooks/useInput'
import { useModal } from '../../../core/util/hooks/useModal'
import { Btn } from '../style'
import { ColumnWrap } from './style'

export default function Role() {
  const { isModal, setIsModal } = useModal()
  const [modalType, setModalType] = useState('')
  const [curr, setCurr] = useState<any>()

  const { data } = useQuery('roles', () => makeGet('/auth/role'))

  const onSetIsModal = (type: string, id: number) => () => {
    setModalType(type)
    setIsModal(true)
    setCurr(id)
  }

  return (
    <>
      <UI.Table>
        <UI.Thead>
          <UI.Tr>
            <UI.Th>아이디</UI.Th>
            <UI.Th>이름</UI.Th>
            <UI.Th>내용</UI.Th>
            <UI.Th>설명</UI.Th>
          </UI.Tr>
        </UI.Thead>
        <UI.Tbody>
          {data &&
            data.content.map((cell: any) => (
              <UI.Tr key={cell.name}>
                <UI.Td>{cell.id}</UI.Td>
                <UI.Td>{cell.name}</UI.Td>
                <UI.Td>{cell.description}</UI.Td>
                <UI.Th>
                  {cell.id !== 1 && <UI.UpdateBtn onClick={onSetIsModal('update', cell)}>수정</UI.UpdateBtn>}
                </UI.Th>
              </UI.Tr>
            ))}
        </UI.Tbody>
      </UI.Table>
      <Btn onClick={onSetIsModal('create', 0)}>권한 등록</Btn>
      {isModal && (
        <Modal
          clickDimmed={() => setIsModal(false)}
          width="40rem"
          height="28rem"
          children={
            modalType === 'update' ? (
              <UpdateModal modalControl={setIsModal} curr={curr} />
            ) : (
              <CreateModal modalControl={setIsModal} />
            )
          }
        />
      )}
    </>
  )
}

const CreateModal = ({ modalControl }: { modalControl: any }) => {
  const { value: name, changeValue: changeName } = useInput('')
  const { value: desc, changeValue: changeDesc } = useInput('')

  const { mutate } = useMutation((body: any) => makePost({ endpoint: '/auth/role', body }), {
    onSuccess: () => {
      queryClient.invalidateQueries('roles')
      modalControl(false)
    },
  })

  const onCreate = () => {
    mutate({ name, description: desc })
  }

  return (
    <ColumnWrap>
      <Input placeHolder="user" label="이름" value={name} changeValue={changeName} />
      <Input placeHolder="브랜드" label="설명" value={desc} changeValue={changeDesc} />
      <Btn onClick={onCreate}>등록하기</Btn>
    </ColumnWrap>
  )
}

const UpdateModal = ({ modalControl, curr }: { modalControl: any; curr: any }) => {
  const { value: name, changeValue: changeName } = useInput(curr.name)
  const { value: desc, changeValue: changeDesc } = useInput(curr.description)

  const { mutate } = useMutation((body: any) => makePut({ endpoint: `/auth/role/${curr.id}`, body }), {
    onSuccess: () => {
      queryClient.invalidateQueries('roles')
      modalControl(false)
    },
  })

  const onUpdate = () => {
    mutate({ name, description: desc })
  }

  return (
    <ColumnWrap>
      <Input placeHolder="user" label="이름" value={name} changeValue={changeName} />
      <Input placeHolder="브랜드" label="설명" value={desc} changeValue={changeDesc} />
      <Btn onClick={onUpdate}>수정하기</Btn>
    </ColumnWrap>
  )
}
