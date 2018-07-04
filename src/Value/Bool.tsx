import { Colors } from 'common/colors'
import * as React from 'react'

export const Bool = ({ value }: { value: boolean }) => (
  <span style={{ color: Colors.Blue }}>{value ? 'true' : 'false'}</span>
)
