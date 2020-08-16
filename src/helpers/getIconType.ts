import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import type { FontType } from '../types/FontType'

export const getIconType = (type?: FontType) => {
  switch (type) {
    case 'ant-design':
      return AntDesign

    case 'entypo':
      return Entypo

    case 'evil-icons':
      return EvilIcons

    case 'feather':
      return Feather

    case 'font-awesome':
      return FontAwesome

    case 'font-awesome-5':
      return FontAwesome5

    case 'fontisto':
      return Fontisto

    case 'foundation':
      return Foundation

    case 'ionicons':
      return Ionicons

    case 'material-icons':
      return MaterialIcons

    case 'material-community-icons':
      return MaterialCommunityIcons

    case 'octicons':
      return Octicons

    case 'zocial':
      return Zocial

    case 'simple-line-icons':
      return SimpleLineIcons

    default: {
      if (
        typeof type === 'string' &&
        Object.prototype.hasOwnProperty.call(customIcons, type)
      ) {
        return customIcons[type]
      }

      return MaterialIcons
    }
  }
}
