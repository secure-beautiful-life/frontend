import * as UI from '../../../core/components/table/style'
import { Btn } from '../style'
import { useEffect, useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { useMutation, useQuery } from 'react-query'
import { makeGet, makePut } from '../../../api/axios/makeRequest'
import { queryClient } from '../../..'

export default function Hierarchy() {
  const [cellList, setCellList] = useState<Array<any>>([])
  const { data } = useQuery('priority', () => makeGet('/auth/role/priority'))

  const { mutate } = useMutation((body: any) => makePut({ endpoint: '/auth/role/priority', body }), {
    onSuccess: () => {
      queryClient.invalidateQueries('priority')
      window.alert('수정이 완료되었습니다.')
    },
  })

  useEffect(() => {
    if (data) setCellList(data.priority_list.slice(1, data.priority_list.length))
  }, [data])

  const onUpdate = () => {
    const priorityList = cellList.map((cell) => cell.valueOf())
    priorityList.unshift(data.priority_list[0])
    mutate({ priority_list: priorityList })
  }

  return (
    <>
      <UI.Table>
        <UI.Thead>
          <UI.Tr>
            <UI.Th>권한</UI.Th>
          </UI.Tr>
        </UI.Thead>
        <UI.Tbody>
          <UI.Tr>
            <UI.Td>{data && data.priority_list[0]}</UI.Td>
          </UI.Tr>
          {cellList.length > 0 && (
            <ReactSortable list={cellList} setList={setCellList} animation={200}>
              {cellList.map((cell: string) => (
                <UI.Tr key={cell}>
                  <UI.Td>{cell}</UI.Td>
                </UI.Tr>
              ))}
            </ReactSortable>
          )}
        </UI.Tbody>
      </UI.Table>
      <Btn onClick={onUpdate}>수정 완료</Btn>
    </>
  )
}
