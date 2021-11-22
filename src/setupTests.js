import '@testing-library/jest-dom/extend-expect'

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
}

global.navigator.geolocation = mockGeolocation
global.mockLanguage = jest.spyOn(navigator, 'language', 'get')

global.beforeEach(() => {
  global.mockLanguage.mockReturnValue('en-GB')
})
