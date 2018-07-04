import { Colors } from 'common/colors'
import * as React from 'react'

export const Str = ({ value }: { value: string }) => (
  <span style={{ color: Colors.Base0 }}>"{value}"</span>
)
