import React from 'react'
import { render } from '@testing-library/react-native'

import NativeIcon, { IconsProvider, FontType } from '../src'

type TestCase = [icon: string, type: FontType]

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

  it('should render add icon from default type – material-icons', () => {
    const { toJSON } = render(<NativeIcon name="add" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it.each(testCases)(
    'should render %s from %s using value from context',
    (icon, type) => {
      const { toJSON } = render(
        <IconsProvider type={type}>
          <NativeIcon name={icon} />
        </IconsProvider>
      )

      expect(toJSON()).toMatchSnapshot()
    }
  )

  it('should override icon type from context with type from icon', () => {
    const { toJSON } = render(
      <IconsProvider type="ionicons">
        <NativeIcon name="add" type="material-icons" />
        <NativeIcon name="ios-add" />
      </IconsProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render icon with default type', () => {
    const { toJSON } = render(
      <IconsProvider>
        <NativeIcon name="add" />
      </IconsProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
