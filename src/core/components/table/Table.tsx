import * as UI from './style'
import * as I from './interface'

export default function Table({ headList, cellList }: I.Table) {
  return (
    <UI.Table>
      <UI.Thead>
        {headList.map((head: I.Head) => (
          <UI.Th key={Object.keys(head)[0]}>{Object.values(head)[0]}</UI.Th>
        ))}
      </UI.Thead>
      <UI.Tbody>
        {cellList.map((body: I.Cell, idx) => (
          <UI.Tr key={idx}>
            {headList.map((head: string) => (
              <UI.Td key={Object.keys(head)[0]}>{body[Object.keys(head)[0]]}</UI.Td>
            ))}
          </UI.Tr>
        ))}
      </UI.Tbody>
    </UI.Table>
  )
}
