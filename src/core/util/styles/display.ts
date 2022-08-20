import { css } from 'styled-components'
import { FLEX } from './constant'
import { Flex, FuncCss } from './interface'

export const getFlex: FuncCss<Flex> = (params = FLEX) => {
  const style = css`
    display: flex;
    flex-direction: ${params.dir};
    justify-content: ${params.jc ? params.jc : 'center'};
    align-items: ${params.ai ? params.ai : 'center'};
  `
  return style
}

export const getScreenCenter = () => {
  const style = css`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  `
  return style
}
