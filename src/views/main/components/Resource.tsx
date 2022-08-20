import Table from '../../../core/components/table/Table'
import { Btn } from '../style'
import { _resource } from '../_dummy'

export default function Resource() {
  return (
    <>
      <Table headList={_resource.headList} cellList={_resource.cellList} />
      <Btn>리소스 등록</Btn>
    </>
  )
}
