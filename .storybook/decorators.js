import { LocationProvider } from '../src/contexts/Location'

export const withLocationProvider = (story) => <LocationProvider>{story()}</LocationProvider>
