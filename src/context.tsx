import React from 'react'

import type { FontType } from './types/FontType'
import type { Props } from './types/Props'

export const IconsContext = React.createContext<FontType | undefined>(undefined)

IconsContext.displayName = 'IconsContext'

export const IconsProvider = ({
  children,
  type,
}: Props & { readonly children: React.ReactNode }) => (
  <IconsContext.Provider value={type}>{children}</IconsContext.Provider>
)
