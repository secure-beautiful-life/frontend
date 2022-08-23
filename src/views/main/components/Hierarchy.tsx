import { _hierarchy } from '../_dummy'
import * as UI from '../../../core/components/table/style'
import { Btn } from '../style'
import { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'

export default function Hierarchy() {
  const [cellList, setCellList] = useState(_hierarchy.cellList)

  return (
    <>
      <UI.Table>
        <UI.Thead>
          <UI.Tr>
            <UI.Th>권한</UI.Th>
          </UI.Tr>
        </UI.Thead>
        <UI.Tbody>
          <ReactSortable list={cellList} setList={setCellList} animation={200}>
            {cellList.map((cell, idx) => (
              <UI.Tr key={idx}>
                <UI.Td>{cell.role}</UI.Td>
              </UI.Tr>
            ))}
          </ReactSortable>
        </UI.Tbody>
      </UI.Table>
      <Btn>수정 완료</Btn>
    </>
  )
}
