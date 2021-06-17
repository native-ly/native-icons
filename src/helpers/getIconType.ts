import { Platform } from 'react-native'

import type { FontType } from '../types/FontType'

const prepareDefaultType = () => {
  switch (Platform.OS) {
    case 'ios':
    case 'macos':
      return require('react-native-vector-icons/Ionicons').default

    case 'android':
      return require('react-native-vector-icons/MaterialIcons').default

    case 'windows':
      return

    case 'web':
      return

    default:
      return
  }
}

export const getIconType = (type?: FontType) => {
  switch (type) {
    case 'ant-design':
      return require('react-native-vector-icons/AntDesign').default

    case 'entypo':
      return require('react-native-vector-icons/Entypo').default

    case 'evil-icons':
      return require('react-native-vector-icons/EvilIcons').default

    case 'feather':
      return require('react-native-vector-icons/Feather').default

    case 'font-awesome':
      return require('react-native-vector-icons/FontAwesome').default

    case 'font-awesome-5':
      return require('react-native-vector-icons/FontAwesome5').default

    case 'fontisto':
      return require('react-native-vector-icons/Fontisto').default

    case 'foundation':
      return require('react-native-vector-icons/Foundation').default

    case 'ionicons':
      return require('react-native-vector-icons/Ionicons').default

    case 'material-icons':
      return require('react-native-vector-icons/MaterialIcons').default

    case 'material-community-icons':
      return require('react-native-vector-icons/MaterialCommunityIcons').default

    case 'octicons':
      return require('react-native-vector-icons/Octicons').default

    case 'zocial':
      return require('react-native-vector-icons/Zocial').default

    case 'simple-line-icons':
      return require('react-native-vector-icons/SimpleLineIcons').default

    default:
      return prepareDefaultType()
  }
}
