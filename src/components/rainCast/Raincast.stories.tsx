import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { DEFAULT_ONECALL_RESPONSE } from '../../testUtils/sampleData'
import Raincast from './Raincast'

export default {
  title: 'Raincast',
  component: Raincast,
  argTypes: {},
} as ComponentMeta<typeof Raincast>

const Template: ComponentStory<typeof Raincast> = (args) => <Raincast {...args} />

export const Default = Template.bind({})
Default.args = {
  location: {
    name: 'some location',
    lat: DEFAULT_ONECALL_RESPONSE.lat,
    lon: DEFAULT_ONECALL_RESPONSE.lon,
  },
  forecast: DEFAULT_ONECALL_RESPONSE.minutely,
}
