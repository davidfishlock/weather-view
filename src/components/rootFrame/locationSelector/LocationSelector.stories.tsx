import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'
import { DEFAULT_GEOCODING_RESPONSE } from '../../../testUtils/sampleData'
import LocationSelector from './LocationSelector'

export default {
  title: 'LocationSelector',
  component: LocationSelector,
  decorators: [withMock],
} as ComponentMeta<typeof LocationSelector>

const Template: ComponentStory<typeof LocationSelector> = (args) => <LocationSelector {...args} />

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
