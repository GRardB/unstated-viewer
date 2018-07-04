import { Colors } from 'common/colors'
import * as React from 'react'

export const Num = ({ value }: { value: number }) => (
  <span style={{ color: Colors.Cyan }}>{value}</span>
)
