import { DEFAULT_ONECALL_RESPONSE } from '../testUtils/sampleData'
import { getHourlyGraphData } from './graphDataTransforms'

const HOURLY_TEST_DATA = DEFAULT_ONECALL_RESPONSE.hourly.slice(0, 3)

describe('graphDataTransforms', () => {
  describe('getHourlyGraphData', () => {
    test('returns correct temperature range info', () => {
      const graphData = getHourlyGraphData(HOURLY_TEST_DATA)
      expect(graphData.temperatureRange).toEqual({ max: 0.76, min: 0.01, range: 0.75 })
    })

    test('returns correct temperature plot data', () => {
      const graphData = getHourlyGraphData(HOURLY_TEST_DATA)
      expect(graphData.temperatureData).toEqual([
        { x: 1637233200, y: 0.01 },
        { x: 1637236800, y: 0.25 },
        { x: 1637240400, y: 0.76 },
      ])
    })

    test('returns correct precipitation plot data', () => {
      const graphData = getHourlyGraphData(HOURLY_TEST_DATA)
      expect(graphData.precipitationData).toEqual([
        { label: '', x: 1637233200, y: 0.01 },
        { label: '0.61mm', x: 1637236800, y: 0.071 },
        { label: '8.5mm', x: 1637240400, y: 0.76 },
      ])
    })
  })
})
