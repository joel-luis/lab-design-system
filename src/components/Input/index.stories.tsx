import { Meta, StoryObj } from '@storybook/react'
import { TextInput, InputRootProps } from '.'
import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/Input',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key="root">
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input key="input" placeholder="Type your e-mail address" />
    ]
  },
  argTypes: {
    children: { table: { disable: true } }
  }
} as Meta<InputRootProps>

export const Default: StoryObj<InputRootProps> = {}
export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: (
      <TextInput.Input key="input" placeholder="Type your e-mail address" />
    )
  }
}
