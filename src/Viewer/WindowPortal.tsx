import * as React from 'react'
import * as ReactDOM from 'react-dom'


interface Props {
  onClose: () => void
}

export class WindowPortal extends React.PureComponent<Props> {
  containerEl = document.createElement('div')
  externalWindow: Window = null

  render() {
    return ReactDOM.createPortal(this.props.children, this.containerEl)
  }

  componentDidMount() {
    this.externalWindow = window.open(
      '',
      '',
      'height=480,width=640,scrollbars=no,menubar=no,location=no,status=no,toolbar=no',
    )

    this.externalWindow.document.body.appendChild(this.containerEl)
    this.externalWindow.addEventListener('beforeunload', this.props.onClose)

    this.externalWindow.document.getElementsByTagName('body')[0].style.margin =
      '0'

    this.externalWindow.document.title = 'Unstated Viewer'
  }

  componentWillUnmount() {
    this.externalWindow.close()
  }
}
