import * as React from 'react'
import { ContainerType } from 'unstated'

import { DevToolsButton } from './DevToolsButton'
import { DevToolsOverlay } from './DevToolsOverlay'

interface Props {
  subscriptions: ContainerType<any>[]
}

interface State {
  displayOverlay: boolean
}

export class UnstatedDevTools extends React.Component<Props, State> {
  state = {
    displayOverlay: false,
  }

  render() {
    const { subscriptions } = this.props
    const { displayOverlay } = this.state

    return (
      <>
        <DevToolsButton onClick={this.showOverlay} />
        {displayOverlay && (
          <DevToolsOverlay
            onClose={this.hideOverlay}
            subscriptions={subscriptions}
          />
        )}
      </>
    )
  }

  private showOverlay = () => this.setState({ displayOverlay: true })
  private hideOverlay = () => this.setState({ displayOverlay: false })
}
