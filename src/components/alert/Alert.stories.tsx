import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { DEFAULT_ONECALL_RESPONSE } from '../../testUtils/sampleData'
import Alert from './Alert'

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Default = Template.bind({})
Default.args = {
  alert: DEFAULT_ONECALL_RESPONSE.alerts[0],
}
