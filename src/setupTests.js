import '@testing-library/jest-dom/extend-expect'

process.env.REACT_APP_NEWS_API_KEY = '12345'

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
}

global.navigator.geolocation = mockGeolocation
global.mockLanguage = jest.spyOn(navigator, 'language', 'get')

global.beforeEach(() => {
  global.mockLanguage.mockReturnValue('en-GB')
})
