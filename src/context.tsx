import React from 'react'

import type { Props } from './types/Props'

export const NativeIconsContext = React.createContext<Props>({
  type: undefined,
})

NativeIconsContext.displayName = 'NativeIconsContext'

export const NativeIconsProvider: React.FC<Props> = ({ children, type }) => (
  <NativeIconsContext.Provider value={{ type }}>
    {children}
  </NativeIconsContext.Provider>
)

NativeIconsProvider.displayName = 'NativeIconsProvider'
