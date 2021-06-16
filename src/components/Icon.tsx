import React, { useContext } from 'react'
import { IconProps } from 'react-native-vector-icons/Icon'

import { NativeIconsContext } from '../context'

import { getIconType } from '../helpers/getIconType'

import type { FontType } from '../types/FontType'

interface Props extends IconProps {
  readonly type?: FontType
}

export const Icon = ({ type, ...props }: Props) => {
  const iconsContext = useContext(NativeIconsContext)

  const IconComponent = getIconType(type || iconsContext?.type)

  return <IconComponent {...props} />
}
