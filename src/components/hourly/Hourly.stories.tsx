import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { DEFAULT_ONECALL_RESPONSE } from '../../testUtils/sampleData'
import Hourly from './Hourly'

export default {
  title: 'Hourly',
  component: Hourly,
  argTypes: {},
} as ComponentMeta<typeof Hourly>

const Template: ComponentStory<typeof Hourly> = (args) => <Hourly {...args} />

export const Default = Template.bind({})
Default.args = {
  forecast: DEFAULT_ONECALL_RESPONSE.hourly,
  timezoneOffset: DEFAULT_ONECALL_RESPONSE.timezoneOffset,
}
