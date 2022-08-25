import styled from 'styled-components'
import { getBoxShadow } from '../util/styles/boxShadow'
import { inheritSize } from '../util/styles/helper'

interface Props {
  label: string
  placeHolder: string
  value: string
  changeValue: any
}

export default function Input(props: Props) {
  return (
    <Wrap>
      <Label htmlFor={props.label}>{props.label}</Label>
      <input id={props.label} placeholder={props.placeHolder} value={props.value} onChange={props.changeValue} />
    </Wrap>
  )
}

const Wrap = styled.div`
  ${inheritSize}
  input {
    width: 100%;
    height: 4rem;
    border: none;
    ${getBoxShadow('line')}
    padding: 0 1rem;
    border-radius: 0.5rem;
  }
`
const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
`
