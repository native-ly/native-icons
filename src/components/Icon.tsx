import React, { useContext } from 'react'
import { IconProps } from 'react-native-vector-icons/Icon'

import { NativeIconsContext } from '../context'

import { getIconType } from '../helpers/getIconType'

import type { Props } from '../types/Props'

// TODO? type for name optional when has context provided
export const Icon = ({ type, name, ...props }: Props & IconProps) => {
  const iconsContext = useContext(NativeIconsContext)

  // TODO
  const IconComponent = getIconType(type || iconsContext.type)

  // TODO
  return <IconComponent name={name || iconsContext.fallbackIcon} {...props} />
}
