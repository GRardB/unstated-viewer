import { Overlay } from 'Overlay'
import * as React from 'react'
import { ContainerType } from 'unstated'

import { InitButton } from './InitButton'

interface Props {
  className?: string
  subscriptions: ContainerType<any>[]
}

interface State {
  displayOverlay: boolean
}

export class UnstatedViewer extends React.Component<Props, State> {
  state = {
    displayOverlay: false,
  }

  render() {
    const { className, subscriptions } = this.props
    const { displayOverlay } = this.state

    return (
      <>
        <InitButton className={className} onClick={this.showOverlay} />
        {displayOverlay && (
          <Overlay onClose={this.hideOverlay} subscriptions={subscriptions} />
        )}
      </>
    )
  }

  private showOverlay = () => this.setState({ displayOverlay: true })
  private hideOverlay = () => this.setState({ displayOverlay: false })
}
