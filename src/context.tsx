import React from 'react'

import { FontType } from '.'

type ContextProps = {
  readonly type: FontType
}

export const NativeIconsContext = React.createContext<ContextProps>({
  type: undefined,
})

NativeIconsContext.displayName = 'NativeIconsContext'

export const NativeIconsProvider: React.FC<ContextProps> = ({
  children,
  type,
}) => (
  <NativeIconsContext.Provider value={{ type }}>
    {children}
  </NativeIconsContext.Provider>
)

NativeIconsProvider.displayName = 'NativeIconsProvider'
