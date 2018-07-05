import { Colors } from 'common/colors'
import * as React from 'react'
import { Container } from 'unstated'

interface Props {
  activeContainer: Container<any> | null
  containers: Container<any>[]
  onSelect: (container: Container<any>) => void
}

const listStyle: React.CSSProperties = {
  backgroundColor: Colors.LightGray,
  boxSizing: 'border-box',
  listStyleType: 'none',
  margin: 0,
  overflow: 'auto',
  padding: 0,
}

const listItemStyle: React.CSSProperties = {}

const buttonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: Colors.DarkGray,
  cursor: 'pointer',
  fontSize: '16px',
  padding: '5px 10px',
  width: '100%',
}

const activeButtonStyle: React.CSSProperties = {
  background: Colors.DarkGray,
  color: Colors.White,
}

export const ContainerList = ({
  activeContainer,
  containers,
  onSelect,
}: Props) => (
  <ul style={listStyle}>
    {containers.map((container, i) => {
      const isActive = container === activeContainer

      return (
        <li key={i} style={listItemStyle}>
          <button
            onClick={() => onSelect(container)}
            style={{
              ...buttonStyle,
              ...(isActive ? activeButtonStyle : {}),
            }}
          >
            {(container.constructor as any).name}
          </button>
        </li>
      )
    })}
  </ul>
)
