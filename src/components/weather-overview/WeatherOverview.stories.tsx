import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'
import { DEFAULT_ONECALL_RESPONSE } from '../../testUtils/sampleData'
import WeatherOverview from './WeatherOverview'

export default {
  title: 'WeatherOverview',
  component: WeatherOverview,
  decorators: [withMock],
} as ComponentMeta<typeof WeatherOverview>

const Template: ComponentStory<typeof WeatherOverview> = (args) => <WeatherOverview {...args} />

export const Default = Template.bind({})
Default.args = {
  location: { name: 'your location', lat: 0, lon: 0 },
}

Default.parameters = {
  mockData: [
    {
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=0&lon=0&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      method: 'GET',
      status: 200,
      response: DEFAULT_ONECALL_RESPONSE,
    },
  ],
}
