import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'
import { DEFAULT_ONECALL_RESPONSE } from '../testUtils/sampleData'
import WeatherOverview from './WeatherOverview'

const DEFAULT_REQUEST_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=anything&lon=anything&units=anything&appid=anything`
const DEFAULT_LOCATION = { name: 'current location', lat: 0, lon: 0 }

export default {
  title: 'WeatherOverview',
  component: WeatherOverview,
  decorators: [withMock],
} as ComponentMeta<typeof WeatherOverview>

const Template: ComponentStory<typeof WeatherOverview> = (args) => <WeatherOverview {...args} />

export const Default = Template.bind({})
Default.args = {
  location: DEFAULT_LOCATION,
}

Default.parameters = {
  mockData: [
    {
      url: DEFAULT_REQUEST_URL,
      method: 'GET',
      status: 200,
      response: DEFAULT_ONECALL_RESPONSE,
    },
  ],
}

export const Error = Template.bind({})
Error.args = {
  location: DEFAULT_LOCATION,
}

Error.parameters = {
  mockData: [
    {
      url: DEFAULT_REQUEST_URL,
      method: 'GET',
      status: 401,
      response: {},
    },
  ],
}

export const Loading = Template.bind({})
Loading.args = {
  location: DEFAULT_LOCATION,
}

Loading.parameters = {
  mockData: [
    {
      url: DEFAULT_REQUEST_URL,
      method: 'GET',
      status: 200,
      response: DEFAULT_ONECALL_RESPONSE,
      delay: 5000,
    },
  ],
}
