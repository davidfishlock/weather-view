import { withLocationProvider } from './decorators'
import { addDecorator } from "@storybook/react";
import 'leaflet/dist/leaflet.css'

addDecorator(withLocationProvider)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}