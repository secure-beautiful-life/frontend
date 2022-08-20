export interface Table {
  headList: Array<any>
  cellList: Array<Cell>
}

export interface Head {
  [key: string]: string
}

export interface Cell {
  [key: string]: number | string
}
