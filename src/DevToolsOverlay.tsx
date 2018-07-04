import * as React from 'react'
import Rnd from 'react-rnd'
import { Container, ContainerType, Subscribe } from 'unstated'

import { ContainerInfo } from './ContainerInfo'
import { ContainerList } from './ContainerList'

interface Props {
  onClose: React.MouseEventHandler<HTMLButtonElement>
  subscriptions: ContainerType<any>[]
}

interface State {
  activeContainer: Container<any> | null
}

export class DevToolsOverlay extends React.Component<Props, State> {
  infoRef = React.createRef<HTMLDivElement>()

  state: State = {
    activeContainer: null,
  }

  render() {
    const { subscriptions } = this.props
    const { activeContainer } = this.state
    return (
      <Subscribe to={subscriptions}>
        {(...subs) => (
          <Rnd
            bounds="body"
            dragHandleClassName="unstated-devtools-header"
            default={this.getDefaults()}
            style={{
              background: 'white',
              border: '1px solid black',
              zIndex: 10000,
            }}
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
            <header
              className="unstated-devtools-header"
              style={{
                boxSizing: 'border-box',
                cursor: 'move',
                fontSize: 24,
                fontWeight: 'bold',
                height: 36, // fontSize + padding*2
                padding: 6,
              }}
            >
              Unstated DevTools
              <button
                style={{
                  float: 'right',
                }}
                onClick={this.props.onClose}
              >
                &times;
              </button>
            </header>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                height: 'calc(100% - 36px)',
              }}
            >
              <ContainerList
                containers={subs as Container<any>[]}
                onSelect={this.setActiveContainer}
              />
              {activeContainer !== null && (
                <ContainerInfo ref={this.infoRef} container={activeContainer} />
              )}
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
