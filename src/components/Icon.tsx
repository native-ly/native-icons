import React, { useContext } from 'react'
import { IconProps } from 'react-native-vector-icons/Icon'

import { NativeIconsContext } from '../context'

import { getIconType } from '../helpers/getIconType'

import type { Props } from '../types/Props'

export const Icon = ({ type, ...props }: Props & IconProps) => {
  const contextFontType = useContext(NativeIconsContext)

  const IconComponent = getIconType(type || contextFontType)

  return <IconComponent {...props} />
}
