import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Modal from './Modal'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'A Title',
  children: 'Some body content',
}
