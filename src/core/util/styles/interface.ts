import { FlattenSimpleInterpolation } from 'styled-components'

export interface Flex {
  dir?: 'row' | 'column'
  jc?: 'center' | 'flex-start' | 'flex-end' | 'space-between'
  ai?: 'center' | 'flex-start' | 'flex-end' | 'space-between'
}

export type FuncCss<T> = (x?: T) => FlattenSimpleInterpolation
