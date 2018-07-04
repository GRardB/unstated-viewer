import { Colors } from 'common/colors'
import * as React from 'react'
import { Container } from 'unstated'
import { Value } from 'Value'

interface Props {
  container: Container<any> | null
}

const emptyStateStyle: React.CSSProperties = {
  color: Colors.Base3,
  textAlign: 'center',
}

const EmptyState = () => (
  <p style={emptyStateStyle}>Choose a container on the left side!</p>
)

const containerInfoStyle: React.CSSProperties = {
  backgroundColor: Colors.Base02,
  flex: 1,
  fontSize: '14px',
  lineHeight: '20px',
  overflow: 'auto',
  padding: 5,
}

export const ContainerInfo = React.forwardRef(
  ({ container }: Props, ref: React.RefObject<HTMLDivElement>) => (
    <div ref={ref} style={containerInfoStyle}>
      {container ? (
        <Value
          containerName={(container.constructor as any).name}
          value={container.state}
        />
      ) : (
        <EmptyState />
      )}
    </div>
  ),
)
