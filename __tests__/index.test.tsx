import React from 'react'
import { render } from '@testing-library/react-native'

import NativeIcon, { FontType } from '../src'

type TestCase = [string, FontType]

const testCases: TestCase[] = [
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
]

describe('NativeIcons', () => {
  it.each(testCases)('should render %s from %s', (icon, type) => {
    const { toJSON } = render(<NativeIcon type={type} name={icon} />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render add icon from default library – material-icons', () => {
    const { toJSON } = render(<NativeIcon name="add" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it.todo('add tests for context')
})
