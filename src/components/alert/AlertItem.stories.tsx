import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { DEFAULT_ONECALL_RESPONSE } from '../../testUtils/sampleData'
import AlertItem from './AlertItem'

export default {
  title: 'Alert',
  component: AlertItem,
  argTypes: {},
} as ComponentMeta<typeof AlertItem>

const Template: ComponentStory<typeof AlertItem> = (args) => <AlertItem {...args} />

export const Default = Template.bind({})
Default.args = {
  alert: DEFAULT_ONECALL_RESPONSE.alerts[0],
}
