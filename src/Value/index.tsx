import { Colors } from 'common/colors'
import * as React from 'react'

import { Bool } from './Bool'
import { Collapsible } from './Collapsible'
import { Null } from './Null'
import { Num } from './Num'
import { Str } from './Str'
import { Sym } from './Sym'
import { Undefined } from './Undefined'

const Indent: React.SFC = ({ children }) => (
  <div style={{ marginLeft: 15 }}>{children}</div>
)

// OBJECT

interface ObjectProps {
  collapsed?: boolean
  containerName: string
  value: any
}

const objStyle: React.CSSProperties = {
  color: Colors.Base2,
  fontFamily: 'Menlo, Monaco, "Courier New", Courier, monospace',
}

const Obj: React.SFC<ObjectProps> = ({
  collapsed = false,
  containerName,
  value,
}) => {
  const names = Object.keys(value).filter((name) => value.hasOwnProperty(name))
  const isArray = Array.isArray(value)
  const objType = isArray ? 'Array' : 'Object'

  return (
    <span style={objStyle}>
      {objType}
      {isArray && collapsed && ` (${value.length})`}
      {isArray ? ' [' : ' {'}
      {collapsed && '...'}
      <span style={{ display: collapsed ? 'none' : 'inline' }}>
        {names.map((name, i) => (
          <Indent key={`${containerName}-${name}-${i}`}>
            <Value
              containerName={containerName}
              name={name}
              value={value[name]}
            />
          </Indent>
        ))}
      </span>
      {isArray ? ']' : '}'}
    </span>
  )
}

// VALUE

interface Props {
  containerName: string
  name?: string
  value: any
}

const labelStyle: React.CSSProperties = {
  color: Colors.Green,
}

export const Value = ({ containerName, name, value }: Props) => {
  let isObject = false
  let valueComponent = <span>Unknown type: {typeof value}</span>
  const label = name && <span style={labelStyle}>{name}: </span>

  if (value === null) {
    valueComponent = <Null />
  } else if (value === undefined) {
    valueComponent = <Undefined />
  } else if (typeof value === 'boolean') {
    valueComponent = <Bool value={value} />
  } else if (typeof value === 'number') {
    valueComponent = <Num value={value} />
  } else if (typeof value === 'string') {
    valueComponent = <Str value={value} />
  } else if (typeof value === 'symbol') {
    valueComponent = <Sym value={value} />
  } else if (typeof value === 'object') {
    isObject = true
  }

  if (!isObject) {
    return (
      <div>
        {label}
        {valueComponent}
      </div>
    )
  }

  return (
    <Collapsible>
      {({ collapsed, toggleCollapse }) => (
        <div style={{ position: 'relative' }}>
          <div
            style={{
              cursor: 'pointer',
              height: '1em',
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
            }}
            onClick={toggleCollapse}
          />
          {label}
          <Obj
            collapsed={collapsed}
            containerName={containerName}
            value={value}
          />
        </div>
      )}
    </Collapsible>
  )
}
