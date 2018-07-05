import { Colors } from 'common/colors'
import * as React from 'react'

export const Sym = ({ value }: { value: symbol }) => (
  <span style={{ color: Colors.Yellow }}>{value.toString()}</span>
)
