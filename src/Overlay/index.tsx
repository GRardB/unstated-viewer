import { Colors } from 'common/colors'
import * as React from 'react'
import Rnd from 'react-rnd'
import { Container, ContainerType, Subscribe } from 'unstated'

import { ContainerInfo } from './ContainerInfo'
import { ContainerList } from './ContainerList'
import { OverlayHeader } from './OverlayHeader'

interface Props {
  onClose: React.MouseEventHandler<HTMLButtonElement>
  subscriptions: ContainerType<any>[]
}

interface State {
  activeContainer: Container<any> | null
}

const overlayStyle: React.CSSProperties = {
  background: Colors.White,
  border: `1px solid ${Colors.DarkGray}`,
  zIndex: 10000,
}

const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  height: 'calc(100% - 36px)',
}

export class Overlay extends React.Component<Props, State> {
  infoRef = React.createRef<HTMLDivElement>()

  state: State = {
    activeContainer: null,
  }

  render() {
    const { onClose, subscriptions } = this.props
    const { activeContainer } = this.state
    return (
      <Subscribe to={subscriptions}>
        {(...subs) => (
          <Rnd
            bounds="body"
            dragHandleClassName="unstated-viewer-header"
            default={this.getDefaults()}
            style={overlayStyle}
            enableResizing={{
              bottom: true,
              bottomLeft: true,
              bottomRight: true,
              left: true,
              right: true,
              top: false,
              topLeft: false,
              topRight: false,
            }}
            onResize={(e) => e.stopPropagation()}
          >
            <OverlayHeader onClose={onClose} />

            <div style={contentStyle}>
              <ContainerList
                activeContainer={activeContainer}
                containers={subs as Container<any>[]}
                onSelect={this.setActiveContainer}
              />
              <ContainerInfo ref={this.infoRef} container={activeContainer} />
            </div>
          </Rnd>
        )}
      </Subscribe>
    )
  }

  setActiveContainer = (container: State['activeContainer']) => {
    if (this.infoRef.current) {
      this.infoRef.current.scrollTop = 0
    }
    this.setState({ activeContainer: container })
  }

  getDefaults = () => {
    const height = window.innerHeight * 0.5
    const width = window.innerWidth * 0.5

    const x = window.innerWidth / 2 - width / 2
    const y = window.innerHeight / 2 - height / 2

    return {
      x,
      y,
      height,
      width,
    }
  }
}
