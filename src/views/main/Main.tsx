import { useState } from 'react'
import * as I from './interface'
import * as UI from './style'
import { TAB } from './constant'
import User from './components/User'
import Hierarchy from './components/Hierarchy'
import Resource from './components/Resource'

export default function Main() {
  const [tab, setTab] = useState<I.Tab>('user')

  return (
    <UI.Wrap>
      <UI.Tab>
        {Object.keys(TAB).map((key: I.Tab) => (
          <UI.TabItem key={key} onClick={() => setTab(key)} isCurr={tab === key}>
            {TAB[key]}
          </UI.TabItem>
        ))}
      </UI.Tab>
      {tab === 'user' && <User />}
      {tab === 'hierarchy' && <Hierarchy />}
      {tab === 'resource' && <Resource />}
    </UI.Wrap>
  )
}
