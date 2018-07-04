import * as React from 'react'



interface CollapsibleProps {
  children: (
    {
      collapsed,
      toggleCollapse,
    }: { collapsed: boolean; toggleCollapse: () => void },
  ) => React.ReactNode
}

interface CollapsibleState {
  collapsed: boolean
}

export class Collapsible extends React.Component<
  CollapsibleProps,
  CollapsibleState
> {
  state = {
    collapsed: false,
  }

  render() {
    return this.props.children({
      collapsed: this.state.collapsed,
      toggleCollapse: this.toggleCollapse,
    })
  }

  toggleCollapse = () => this.setState({ collapsed: !this.state.collapsed })
}
