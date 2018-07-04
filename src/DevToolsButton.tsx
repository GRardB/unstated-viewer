import * as React from 'react'

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const DevToolsButton = ({ onClick }: Props) => (
  <button onClick={onClick}>Unstated DevTools</button>
)
