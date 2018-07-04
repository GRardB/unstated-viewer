import * as React from 'react'
import { Container } from 'unstated'
import { Value } from 'Value'

interface Props {
  container: Container<any>
}

export const ContainerInfo = React.forwardRef(
  ({ container }: Props, ref: React.RefObject<HTMLDivElement>) => (
    <div
      ref={ref}
      style={{
        flex: 1,
        overflow: 'auto',
      }}
    >
      <Value
        containerName={(container.constructor as any).name}
        value={container.state}
      />
    </div>
  ),
)
