import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'
import { DEFAULT_GEOCODING_RESPONSE } from '../testUtils/sampleData'
import RootFrame from './RootFrame'

export default {
  title: 'RootFrame',
  component: RootFrame,
  decorators: [withMock],
} as ComponentMeta<typeof RootFrame>

const Template: ComponentStory<typeof RootFrame> = (args) => <RootFrame {...args} />

export const Default = Template.bind({})
Default.args = {}

Default.parameters = {
  mockData: [
    {
      url: 'https://api.openweathermap.org/geo/1.0/direct?q=anything&limit=anything&appid=anything',
      method: 'GET',
      status: 200,
      response: DEFAULT_GEOCODING_RESPONSE,
    },
  ],
}
