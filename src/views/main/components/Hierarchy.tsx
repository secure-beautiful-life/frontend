import Table from '../../../core/components/table/Table'
import { _hierarchy } from '../_dummy'

export default function Hierarchy() {
  return <Table headList={_hierarchy.headList} cellList={_hierarchy.cellList} />
}
