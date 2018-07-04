import * as React from 'react'

interface Props {
  onClose: React.MouseEventHandler<HTMLButtonElement>
}

const headerStyle: React.CSSProperties = {
  backgroundColor: '#F4F4F4',
  boxSizing: 'border-box',
  color: '#333',
  cursor: 'move',
  display: 'flex',
  fontSize: '20px',
  lineHeight: '36px',
  justifyContent: 'space-between',
  paddingLeft: 10,
}

const closeButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  color: '#333',
  cursor: 'pointer',
  float: 'right',
  fontSize: '24px',
  margin: 0,
  paddingBottom: 4,
}

export const OverlayHeader = ({ onClose }: Props) => (
  <header className="unstated-devtools-header" style={headerStyle}>
    Unstated DevTools
    <button style={closeButtonStyle} onClick={onClose}>
      &times;
    </button>
  </header>
)
