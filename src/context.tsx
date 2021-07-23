import React from 'react'
import { IconProps } from 'react-native-vector-icons/Icon'

import type { FontType } from './types/FontType'
import type { Props } from './types/Props'

// TODO refactor
export const NativeIconsContext = React.createContext<{
  readonly type?: FontType
  readonly fallbackIcon?: IconProps['name']
}>({
  type: undefined,
  fallbackIcon: undefined,
})

NativeIconsContext.displayName = 'NativeIconsContext'

export const NativeIconsProvider = ({
  children,
  type,
  fallbackIcon,
}: Props & {
  // TODO refactor
  readonly children: React.ReactNode
  readonly fallbackIcon?: IconProps['name']
}) => (
  <NativeIconsContext.Provider value={{ type, fallbackIcon }}>
    {children}
  </NativeIconsContext.Provider>
)
