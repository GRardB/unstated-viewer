import * as React from 'react'

export const Bool = ({ value }: { value: boolean }) => (
  <span>{value ? 'true' : 'false'}</span>
)
