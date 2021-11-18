import { addDecorator } from '@storybook/react'
import '../src/index.css'
import { withLocationProvider } from './decorators'

addDecorator(withLocationProvider)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
