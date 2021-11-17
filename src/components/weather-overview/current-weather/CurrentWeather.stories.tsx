import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { DEFAULT_ONECALL_RESPONSE } from '../../../testUtils/sampleData'
import CurrentWeather from './CurrentWeather'

export default {
  title: 'CurrentWeather',
  component: CurrentWeather,
  argTypes: {},
} as ComponentMeta<typeof CurrentWeather>

const Template: ComponentStory<typeof CurrentWeather> = (args) => <CurrentWeather {...args} />

export const Default = Template.bind({})
Default.args = {
  weather: DEFAULT_ONECALL_RESPONSE.current,
}
