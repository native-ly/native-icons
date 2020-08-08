import React from 'react'
import { render } from '@testing-library/react-native'

import NativeIcons from '../src'

describe('NativeIcons', () => {
  it.each([
    ['plus', 'ant-design'],
    ['plus', 'entypo'],
    ['plus', 'evil-icons'],
    ['plus', 'feather'],
    ['plus', 'font-awesome'],
    ['plus', 'font-awesome-5'],
    ['facebook', 'fontisto'],
    ['plus', 'foundation'],
    ['ios-add', 'ionicons'],
    ['add', 'material-icons'],
    ['plus', 'material-community-icons'],
    ['plus', 'octicons'],
    ['facebook', 'zocial'],
    ['plus', 'simple-line-icons'],
  ])('should render %s from %s', (icon, type) => {
    const { toJSON } = render(<NativeIcons type={type} icon={icon} />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should', () => {
    const { toJSON } = render(<NativeIcons icon="add" />)

    expect(toJSON()).toMatchSnapshot()
  })
})
