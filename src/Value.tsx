import * as React from 'react'

import { Collapsible } from './Collapsible'

const Indent: React.SFC = ({ children }) => (
  <div style={{ marginLeft: 15 }}>{children}</div>
)

// PRIMIIVES

const Null = () => <span>null</span>
const Undefined = () => <span>undefined</span>
const Num = ({ value }: { value: number }) => <span>{value}</span>
const Str = ({ value }: { value: string }) => <span>"{value}"</span>
const Bool = ({ value }: { value: boolean }) => (
  <span>{value ? 'true' : 'false'}</span>
)

// OBJECT

interface ObjectProps {
  collapsed?: boolean
  containerName: string
  value: any
}

const Obj: React.SFC<ObjectProps> = ({
  collapsed = false,
  containerName,
  value,
}) => {
  const names = Object.keys(value)
  const isArray = Array.isArray(value)
  const objType = isArray ? 'Array' : 'Object'

  return (
    <span>
      {collapsed && `${objType} `}
      {isArray ? '[' : '{'}
      {isArray && collapsed && ` (${value.length}) `}
      {!collapsed &&
        names.map((name, i) => (
          <Indent key={`${containerName}-${name}-${i}`}>
            <Collapsible>
              {({ collapsed, toggleCollapse }) => (
                <>
                  <span onClick={toggleCollapse}>{name}</span>
                  :{' '}
                  <Value
                    collapsed={collapsed}
                    containerName={containerName}
                    value={value[name]}
                  />
                </>
              )}
            </Collapsible>
            {i < names.length - 1 && ','}
          </Indent>
        ))}
      {isArray ? ']' : '}'}
    </span>
  )
}

// VALUE

interface Props {
  collapsed?: boolean
  containerName: string
  value: any
}

export const Value = ({ collapsed = false, containerName, value }: Props) => {
  if (value === null) {
    return <Null />
  }
  if (value === undefined) {
    return <Undefined />
  }
  if (typeof value === 'boolean') {
    return <Bool value={value} />
  }
  if (typeof value === 'number') {
    return <Num value={value} />
  }
  if (typeof value === 'string') {
    return <Str value={value} />
  }

  if (typeof value === 'object') {
    return (
      <Obj collapsed={collapsed} containerName={containerName} value={value} />
    )
  }

  return <span>Unknown type: {typeof value}</span>
}
