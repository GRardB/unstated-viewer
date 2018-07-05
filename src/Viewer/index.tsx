import * as React from 'react'
import { Container, ContainerType, Subscribe } from 'unstated'

import { ContainerInfo } from './ContainerInfo'
import { ContainerList } from './ContainerList'
import { WindowPortal } from './WindowPortal'

interface UnconnectedViewerProps {
  onClose: () => void
  containers: Container<any>[]
}

interface UnconnectedViewerState {
  activeContainer: Container<any> | null
}

const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  width: '100vw',
}

class UnconnectedViewer extends React.Component<
  UnconnectedViewerProps,
  UnconnectedViewerState
> {
  infoRef = React.createRef<HTMLDivElement>()

  state: UnconnectedViewerState = {
    activeContainer: null,
  }

  componentDidMount() {
    const { containers } = this.props

    // NOTE: For some reason, without setting the state after mounting,
    //       no JavaScript works inside the external window. I have no
    //       idea why, but this code seems to work both as a nice feature
    //       as well as a fix for that problem. I hope it works deterministically
    if (!this.state.activeContainer && containers.length > 0) {
      this.setState({ activeContainer: containers[0] })
    }
  }

  render() {
    const { onClose, containers } = this.props
    const { activeContainer } = this.state
    return (
      <WindowPortal onClose={onClose}>
        <div style={contentStyle}>
          <ContainerList
            activeContainer={activeContainer}
            containers={containers}
            onSelect={this.setActiveContainer}
          />
          <ContainerInfo ref={this.infoRef} container={activeContainer} />
        </div>
      </WindowPortal>
    )
  }

  private setActiveContainer = (
    container: UnconnectedViewerState['activeContainer'],
  ) => {
    if (this.infoRef.current) {
      this.infoRef.current.scrollTop = 0
    }
    this.setState({ activeContainer: container })
  }
}

interface Props extends Pick<UnconnectedViewerProps, 'onClose'> {
  subscriptions: ContainerType<any>[]
}

export const Viewer = ({ onClose, subscriptions }: Props) => (
  <Subscribe to={subscriptions}>
    {(...containers: Container<any>[]) => (
      <UnconnectedViewer containers={containers} onClose={onClose} />
    )}
  </Subscribe>
)
