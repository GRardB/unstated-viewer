import * as React from 'react'

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const InitButton = ({ onClick }: Props) => (
  <button onClick={onClick}>Unstated Viewer</button>
)
