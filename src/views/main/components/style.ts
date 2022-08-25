import styled from 'styled-components'
import { getFlex } from '../../../core/util/styles/display'
import { inheritSize } from '../../../core/util/styles/helper'

export const Wrap = styled.div`
  ${inheritSize}
  padding: 1rem;
  ${getFlex()}
`

export const ColumnWrap = styled.div`
  ${inheritSize}
  padding: 1rem;
  ${getFlex({ dir: 'column', ai: 'flex-end' })}
`

export const InnerList = styled.ul`
  width: 100%;
  ${getFlex({ dir: 'column', jc: 'flex-start', ai: 'flex-start' })}
  gap: 2rem;
  li {
    width: 100%;
  }
  dl {
    width: 100%;
    ${getFlex({ jc: 'flex-start' })}
    gap: 10rem;
  }
  dt {
    font-size: 1.5rem;
    font-weight: 700;
    width: 10rem;
  }
  dd {
    font-size: 1.2rem;
  }
`
