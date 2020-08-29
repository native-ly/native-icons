import React from 'react'
import { IconProps } from 'react-native-vector-icons/Icon'

import { getIconType } from '../helpers/getIconType'

import type { FontType } from '../types/FontType'

interface Props extends IconProps {
  readonly type?: FontType
}

export const Icon: React.FC<Props> = ({ type, ...props }) => {
  const IconComponent = getIconType(type)

  return <IconComponent {...props} />
}
