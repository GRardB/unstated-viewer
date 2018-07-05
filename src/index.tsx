import * as React from 'react'
import { ContainerType } from 'unstated'
import { Viewer } from 'Viewer'

import { InitButton } from './InitButton'

interface Props {
  className?: string
  subscriptions: ContainerType<any>[]
}

interface State {
  displayWindow: boolean
}

export class UnstatedViewer extends React.Component<Props, State> {
  state = {
    displayWindow: false,
  }

  render() {
    const { className, subscriptions } = this.props
    const { displayWindow } = this.state

    return (
      <>
        <InitButton className={className} onClick={this.openViewer} />
        {displayWindow && (
          <Viewer onClose={this.closeViewer} subscriptions={subscriptions} />
        )}
      </>
    )
  }

  private openViewer = () => this.setState({ displayWindow: true })
  private closeViewer = () => this.setState({ displayWindow: false })
}
