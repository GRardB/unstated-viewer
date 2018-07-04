import * as React from 'react'
import { Container } from 'unstated'

interface Props {
  containers: Container<any>[]
  onSelect: (container: Container<any>) => void
}

export const ContainerList = ({ containers, onSelect }: Props) => (
  <ul
    style={{
      boxSizing: 'border-box',
      margin: 0,
      overflow: 'auto',
      padding: '0 20px',
    }}
  >
    {containers.map((container, i) => (
      <li key={i} onClick={() => onSelect(container)}>
        {(container.constructor as any).name}
      </li>
    ))}
  </ul>
)
