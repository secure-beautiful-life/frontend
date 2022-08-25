import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { queryClient } from '../../..'
import { makeDelete, makeGet, makePost, makePut } from '../../../api/axios/makeRequest'
import Input from '../../../core/components/Input'
import Modal from '../../../core/components/modal/Modal'
import * as UI from '../../../core/components/table/style'
import { useInput } from '../../../core/util/hooks/useInput'
import { useModal } from '../../../core/util/hooks/useModal'
import { sliceLetter } from '../../../core/util/styles/helper'
import { Btn } from '../style'
import { DeleteModal } from './modal/DeleteModal'
import { ColumnWrap } from './style'

export default function Resource() {
  const { isModal, setIsModal } = useModal()
  const [modalType, setModalType] = useState('')
  const [curr, setCurr] = useState<any>()

  const { data } = useQuery('resource', () => makeGet('/auth/resource'))
  const { mutate } = useMutation(() => makeDelete(`/auth/resource/${curr.id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries('resource')
      setIsModal(false)
    },
  })

  const onSetIsModal = (type: string, data: any) => () => {
    setModalType(type)
    setIsModal(true)
    setCurr(data)
  }
  return (
    <>
      <UI.Table>
        <UI.Thead>
          <UI.Tr>
            <UI.Th>method</UI.Th>
            <UI.Th>url</UI.Th>
            <UI.Th>권한 이름</UI.Th>
            <UI.Th>수정</UI.Th>
            <UI.Th>삭제</UI.Th>
          </UI.Tr>
        </UI.Thead>
        <UI.Tbody>
          {data &&
            data.content.map((cell: any) => (
              <UI.Tr key={cell.url}>
                <UI.Td>{cell.method}</UI.Td>
                <UI.Td>{sliceLetter(cell.url, 15)}</UI.Td>
                <UI.Td>{cell.role_name}</UI.Td>
                <UI.Th>
                  <UI.UpdateBtn onClick={onSetIsModal('update', cell)}>수정</UI.UpdateBtn>
                </UI.Th>
                <UI.Th>
                  <UI.DeleteBtn onClick={onSetIsModal('delete', cell)}>삭제</UI.DeleteBtn>
                </UI.Th>
              </UI.Tr>
            ))}
        </UI.Tbody>
      </UI.Table>
      <Btn onClick={onSetIsModal('create', 0)}>리소스 등록</Btn>
      {isModal && (
        <Modal
          clickDimmed={() => setIsModal(false)}
          width="40rem"
          height="38rem"
          children={
            modalType === 'create' ? (
              <CreateModal modalControl={setIsModal} />
            ) : modalType === 'update' ? (
              <UpdateModal modalControl={setIsModal} curr={curr} />
            ) : (
              <DeleteModal content="리소스를 삭제하시겠습니까 ?" onDelete={mutate} onCancel={() => setIsModal(false)} />
            )
          }
        />
      )}
    </>
  )
}

const CreateModal = ({ modalControl }: { modalControl: any }) => {
  const { value: method, changeValue: changeMethod } = useInput('')
  const { value: url, changeValue: changeUrl } = useInput('')
  const { value: roleName, changeValue: changeRoleName } = useInput('')

  const { mutate } = useMutation((body: any) => makePost({ endpoint: '/auth/resource', body }), {
    onSuccess: () => {
      queryClient.invalidateQueries('resource')
      modalControl(false)
    },
  })

  const onCreate = () => {
    mutate({ method, url, role_name: roleName })
  }

  return (
    <ColumnWrap>
      <Input placeHolder="PUT" label="method" value={method} changeValue={changeMethod} />
      <Input placeHolder="https://..." label="url" value={url} changeValue={changeUrl} />
      <Input placeHolder="admin" label="role_name" value={roleName} changeValue={changeRoleName} />
      <Btn onClick={onCreate}>등록하기</Btn>
    </ColumnWrap>
  )
}

const UpdateModal = ({ modalControl, curr }: { modalControl: any; curr: any }) => {
  const { value: method, changeValue: changeMethod } = useInput(curr.method)
  const { value: url, changeValue: changeUrl } = useInput(curr.url)
  const { value: roleName, changeValue: changeRoleName } = useInput(curr.role_name)

  const { mutate } = useMutation((body: any) => makePut({ endpoint: `/auth/resource/${curr.id}`, body }), {
    onSuccess: () => {
      queryClient.invalidateQueries('resource')
      modalControl(false)
    },
  })

  const onUpdate = () => {
    mutate({ method, url, role_name: roleName })
  }

  return (
    <ColumnWrap>
      <Input placeHolder="PUT" label="method" value={method} changeValue={changeMethod} />
      <Input placeHolder="https://..." label="url" value={url} changeValue={changeUrl} />
      <Input placeHolder="admin" label="role_name" value={roleName} changeValue={changeRoleName} />
      <Btn onClick={onUpdate}>등록하기</Btn>
    </ColumnWrap>
  )
}
