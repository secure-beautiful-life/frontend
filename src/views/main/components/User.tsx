import Table from '../../../core/components/table/Table'
import { _user } from '../_dummy'

export default function User() {
  return <Table headList={_user.headList} cellList={_user.cellList} />
}
