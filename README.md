[![npm version](https://badge.fury.io/js/unstated-viewer.svg)](https://badge.fury.io/js/unstated-viewer)

# Unstated Viewer

`<UnstatedViewer>` is simple component to help you view the state inside your [Unstated](https://github.com/jamiebuilds/unstated) containers.

##  Proof

![screenshot of the Unstated Viewer window](https://imgur.com/khtkhZe.png)

## Installation

Using yarn:

```
yarn --dev add unstated-viewer
```

Using npm:

```
npm --save-dev install unstated-viewer
```

## Usage

First, import the module. Make it a conditional require to strip it from your production build:

```js
const StateViewer = () => {
  if (process.env.NODE_ENV === 'development') {
    const { UnstatedViewer } = require('unstated-viewer')

    return (
      <UnstatedViewer
        className="unstated-viewer" // optional, see below
        subscriptions={[ UserContainer, PostContainer ]}
      />
    )
  }

  return null
}
```

The `className` prop is for custom styling of the button that is used to bring up the viewer. As of now, there is no way to customize how the viewer itself looks, but that is likely to change in the future!

Then, include this wrapper component anywhere so long as it's a descendent of the `<Provider>` component:

```js
export const App = () => (
  <Provider>
    <Router>
      <Routes />
    </Router>
    <StateViewer />
  </Provider>
)
```