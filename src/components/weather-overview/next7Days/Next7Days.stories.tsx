import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { DEFAULT_ONECALL_RESPONSE } from '../../../testUtils/sampleData'
import Next7Days from './Next7Days'

export default {
  title: 'Next7Days',
  component: Next7Days,
  argTypes: {},
} as ComponentMeta<typeof Next7Days>

const Template: ComponentStory<typeof Next7Days> = (args) => <Next7Days {...args} />

export const Default = Template.bind({})
Default.args = {
  forecast: DEFAULT_ONECALL_RESPONSE.daily,
}
