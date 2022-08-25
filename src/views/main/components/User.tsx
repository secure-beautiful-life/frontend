import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { queryClient } from '../../..'
import { makeDelete, makeGet } from '../../../api/axios/makeRequest'
import Modal from '../../../core/components/modal/Modal'
import * as TableStyle from '../../../core/components/table/style'
import { useModal } from '../../../core/util/hooks/useModal'
import { sliceLetter } from '../../../core/util/styles/helper'
import { DeleteModal } from './modal/DeleteModal'
import * as UI from './style'

export default function User() {
  const { isModal, setIsModal } = useModal()
  const [modalType, setModalType] = useState('')
  const [curr, setCurr] = useState(0)

  const { data } = useQuery(['users'], () => makeGet('/users'))

  const { mutate } = useMutation((id: number) => makeDelete(`/users/${id}`), {
    onSuccess: (res) => {
      queryClient.invalidateQueries('users')
      setIsModal(false)
    },
  })

  const onSetIsModal = (type: string, id: number) => () => {
    setModalType(type)
    setIsModal(true)
    setCurr(id)
  }

  return (
    <>
      <TableStyle.Table>
        <TableStyle.Thead>
          <TableStyle.Tr>
            <TableStyle.Th>이름</TableStyle.Th>
            <TableStyle.Th>아이디</TableStyle.Th>
            <TableStyle.Th>이메일</TableStyle.Th>
            <TableStyle.Th>권한</TableStyle.Th>
            <TableStyle.Th>삭제</TableStyle.Th>
          </TableStyle.Tr>
        </TableStyle.Thead>
        <TableStyle.Tbody>
          {data &&
            data.content.map((cell: any) => (
              <TableStyle.Tr key={cell.name}>
                <TableStyle.Td>
                  <TableStyle.TriggerText onClick={onSetIsModal('user', cell.id)}>{cell.name}</TableStyle.TriggerText>
                </TableStyle.Td>
                <TableStyle.Td>{cell.username}</TableStyle.Td>
                <TableStyle.Td>{cell.email}</TableStyle.Td>
                <TableStyle.Td>{cell.role_name}</TableStyle.Td>
                <TableStyle.Th>
                  {cell.id !== 1 && (
                    <TableStyle.DeleteBtn onClick={onSetIsModal('delete', cell.id)}>삭제</TableStyle.DeleteBtn>
                  )}
                </TableStyle.Th>
              </TableStyle.Tr>
            ))}
        </TableStyle.Tbody>
      </TableStyle.Table>
      {isModal && (
        <Modal
          clickDimmed={() => setIsModal(false)}
          width="40rem"
          height="60rem"
          children={
            modalType === 'delete' ? (
              <DeleteModal
                content="유저를 삭제하시겠습니까?"
                onDelete={() => {
                  mutate(curr)
                }}
                onCancel={() => setIsModal(false)}
              />
            ) : (
              <UserModal userId={curr} />
            )
          }
        />
      )}
    </>
  )
}

export const UserModal = ({ userId }: { userId: number }) => {
  const { data } = useQuery(`user/${userId}`, () => makeGet(`/users/${userId}`))

  return (
    <UI.Wrap>
      <UI.InnerList>
        {data &&
          Object.keys(data).map((key: any) => (
            <li>
              <dl>
                <dt>{key}</dt>
                <dd>{sliceLetter(data[key], 20)}</dd>
              </dl>
            </li>
          ))}
      </UI.InnerList>
    </UI.Wrap>
  )
}
