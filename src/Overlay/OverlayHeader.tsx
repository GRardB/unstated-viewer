import { Colors } from 'common/colors'
import * as React from 'react'

interface Props {
  onClose: React.MouseEventHandler<HTMLButtonElement>
}

const headerStyle: React.CSSProperties = {
  backgroundColor: Colors.LightGray,
  borderBottom: `1px solid ${Colors.DarkGray}`,
  boxSizing: 'border-box',
  color: Colors.DarkGray,
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
  color: Colors.DarkGray,
  cursor: 'pointer',
  float: 'right',
  fontSize: '24px',
  margin: 0,
  paddingBottom: 4,
}

export const OverlayHeader = ({ onClose }: Props) => (
  <header className="unstated-viewer-header" style={headerStyle}>
    Unstated Viewer
    <button style={closeButtonStyle} onClick={onClose}>
      &times;
    </button>
  </header>
)
