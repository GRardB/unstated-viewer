import * as React from 'react'

interface Props {
  className?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const InitButton = ({ className, onClick }: Props) => (
  <button className={className} onClick={onClick}>
    Unstated Viewer
  </button>
)
