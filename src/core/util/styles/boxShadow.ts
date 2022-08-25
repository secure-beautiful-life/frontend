import { css } from 'styled-components'

type T_BoxShadow = { [x: string]: string }

const BoxShadow: T_BoxShadow = {
  basic_1: 'box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;',
  line: 'box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;',
  shadowLine:
    'box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;',
} as const

export const getBoxShadow = (params: keyof typeof BoxShadow) => {
  const style = css`
    ${BoxShadow[params]}
  `
  return style
}
