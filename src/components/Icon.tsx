import React, { useContext, useMemo } from 'react'
import { IconProps } from 'react-native-vector-icons/Icon'

import { IconsContext } from '../context'

import { getIconType } from '../helpers/getIconType'

import type { Props } from '../types/Props'

export const Icon = ({ type, ...props }: Props & IconProps) => {
  const contextFontType = useContext(IconsContext)

  const IconComponent = useMemo(
    () => getIconType(type || contextFontType),
    [contextFontType, type]
  )

  return <IconComponent {...props} />
}
