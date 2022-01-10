import { NewsArticle } from '@azure/cognitiveservices-newssearch/esm/models'

export const DEFAULT_ONECALL_RESPONSE = {
  lat: 46.7723,
  lon: -67.8339,
  timezone: 'America/New_York',
  timezoneOffset: -18000,
  current: {
    dt: 1637234183,
    sunrise: 1637235526,
    sunset: 1637268880,
    temp: 0.01,
    feelsLike: -4.35,
    pressure: 1017,
    humidity: 89,
    dewPoint: -1.4,
    uvi: 0,
    clouds: 90,
    visibility: 10000,
    windSpeed: 4.12,
    windDeg: 150,
    weather: [
      {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
        icon: '10n',
      },
    ],
    rain: {
      '1h': 1.24,
    },
  },
  minutely: [
    {
      dt: 1637234220,
      precipitation: 1.1448,
    },
    {
      dt: 1637234280,
      precipitation: 1.0514,
    },
    {
      dt: 1637234340,
      precipitation: 0.9581,
    },
    {
      dt: 1637234400,
      precipitation: 0.8647,
    },
    {
      dt: 1637234460,
      precipitation: 0.8214,
    },
    {
      dt: 1637234520,
      precipitation: 0.7782,
    },
    {
      dt: 1637234580,
      precipitation: 0.7349,
    },
    {
      dt: 1637234640,
      precipitation: 0.6917,
    },
    {
      dt: 1637234700,
      precipitation: 0.6484,
    },
    {
      dt: 1637234760,
      precipitation: 0.6917,
    },
    {
      dt: 1637234820,
      precipitation: 0.7349,
    },
    {
      dt: 1637234880,
      precipitation: 0.7782,
    },
    {
      dt: 1637234940,
      precipitation: 0.8214,
    },
    {
      dt: 1637235000,
      precipitation: 0.8647,
    },
    {
      dt: 1637235060,
      precipitation: 0.8415,
    },
    {
      dt: 1637235120,
      precipitation: 0.8183,
    },
    {
      dt: 1637235180,
      precipitation: 0.7951,
    },
    {
      dt: 1637235240,
      precipitation: 0.772,
    },
    {
      dt: 1637235300,
      precipitation: 0.7488,
    },
    {
      dt: 1637235360,
      precipitation: 0.7113,
    },
    {
      dt: 1637235420,
      precipitation: 0.6739,
    },
    {
      dt: 1637235480,
      precipitation: 0.6364,
    },
    {
      dt: 1637235540,
      precipitation: 0.599,
    },
    {
      dt: 1637235600,
      precipitation: 0.5615,
    },
    {
      dt: 1637235660,
      precipitation: 0.5221,
    },
    {
      dt: 1637235720,
      precipitation: 0.4828,
    },
    {
      dt: 1637235780,
      precipitation: 0.4434,
    },
    {
      dt: 1637235840,
      precipitation: 0.404,
    },
    {
      dt: 1637235900,
      precipitation: 0.3646,
    },
    {
      dt: 1637235960,
      precipitation: 0.3327,
    },
    {
      dt: 1637236020,
      precipitation: 0.3008,
    },
    {
      dt: 1637236080,
      precipitation: 0.2689,
    },
    {
      dt: 1637236140,
      precipitation: 0.237,
    },
    {
      dt: 1637236200,
      precipitation: 0.205,
    },
    {
      dt: 1637236260,
      precipitation: 0.1713,
    },
    {
      dt: 1637236320,
      precipitation: 0.1376,
    },
    {
      dt: 1637236380,
      precipitation: 0.1039,
    },
    {
      dt: 1637236440,
      precipitation: 0,
    },
    {
      dt: 1637236500,
      precipitation: 0,
    },
    {
      dt: 1637236560,
      precipitation: 0,
    },
    {
      dt: 1637236620,
      precipitation: 0,
    },
    {
      dt: 1637236680,
      precipitation: 0,
    },
    {
      dt: 1637236740,
      precipitation: 0,
    },
    {
      dt: 1637236800,
      precipitation: 0,
    },
    {
      dt: 1637236860,
      precipitation: 0.1231,
    },
    {
      dt: 1637236920,
      precipitation: 0.1976,
    },
    {
      dt: 1637236980,
      precipitation: 0.2721,
    },
    {
      dt: 1637237040,
      precipitation: 0.3466,
    },
    {
      dt: 1637237100,
      precipitation: 0.4211,
    },
    {
      dt: 1637237160,
      precipitation: 0.4866,
    },
    {
      dt: 1637237220,
      precipitation: 0.5522,
    },
    {
      dt: 1637237280,
      precipitation: 0.6177,
    },
    {
      dt: 1637237340,
      precipitation: 0.6832,
    },
    {
      dt: 1637237400,
      precipitation: 0.7488,
    },
    {
      dt: 1637237460,
      precipitation: 0.772,
    },
    {
      dt: 1637237520,
      precipitation: 0.7951,
    },
    {
      dt: 1637237580,
      precipitation: 0.8183,
    },
    {
      dt: 1637237640,
      precipitation: 0.8415,
    },
    {
      dt: 1637237700,
      precipitation: 0.8647,
    },
    {
      dt: 1637237760,
      precipitation: 0.7647,
    },
    {
      dt: 1637237820,
      precipitation: 0.6647,
    },
  ],
  hourly: [
    {
      dt: 1637233200,
      temp: 0.01,
      feelsLike: -5.14,
      pressure: 1017,
      humidity: 89,
      dewPoint: -1.4,
      uvi: 0,
      clouds: 90,
      visibility: 6991,
      windSpeed: 5.43,
      windDeg: 156,
      windGust: 15.26,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637236800,
      temp: 0.25,
      feelsLike: -5.22,
      pressure: 1017,
      humidity: 91,
      dewPoint: -0.92,
      uvi: 0,
      clouds: 92,
      visibility: 7507,
      windSpeed: 6.17,
      windDeg: 153,
      windGust: 16.25,
      weather: [
        {
          id: 616,
          main: 'Snow',
          description: 'rain and snow',
          icon: '13d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.61,
      },
      snow: {
        '1h': 0.51,
      },
    },
    {
      dt: 1637240400,
      temp: 0.76,
      feelsLike: -4.17,
      pressure: 1017,
      humidity: 92,
      dewPoint: -0.34,
      uvi: 0.01,
      clouds: 94,
      visibility: 4098,
      windSpeed: 5.38,
      windDeg: 156,
      windGust: 15.74,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 8.5,
      },
    },
    {
      dt: 1637244000,
      temp: 1.59,
      feelsLike: -3.29,
      pressure: 1016,
      humidity: 94,
      dewPoint: 0.73,
      uvi: 0.04,
      clouds: 96,
      visibility: 8277,
      windSpeed: 5.7,
      windDeg: 158,
      windGust: 16.41,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.32,
      },
    },
    {
      dt: 1637247600,
      temp: 2.82,
      feelsLike: -1.47,
      pressure: 1015,
      humidity: 97,
      dewPoint: 2.39,
      uvi: 0.08,
      clouds: 98,
      visibility: 6487,
      windSpeed: 5.16,
      windDeg: 161,
      windGust: 15.75,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 1.13,
      },
    },
    {
      dt: 1637251200,
      temp: 4.28,
      feelsLike: 0.33,
      pressure: 1013,
      humidity: 98,
      dewPoint: 3.64,
      uvi: 0.12,
      clouds: 100,
      visibility: 7338,
      windSpeed: 5.21,
      windDeg: 161,
      windGust: 15.15,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.8,
    },
    {
      dt: 1637254800,
      temp: 4.78,
      feelsLike: 1.22,
      pressure: 1012,
      humidity: 99,
      dewPoint: 4.18,
      uvi: 0.12,
      clouds: 100,
      visibility: 223,
      windSpeed: 4.68,
      windDeg: 160,
      windGust: 14.06,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.13,
      },
    },
    {
      dt: 1637258400,
      temp: 5.31,
      feelsLike: 1.98,
      pressure: 1011,
      humidity: 99,
      dewPoint: 4.79,
      uvi: 0.09,
      clouds: 100,
      visibility: 108,
      windSpeed: 4.49,
      windDeg: 160,
      windGust: 13.75,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.37,
      },
    },
    {
      dt: 1637262000,
      temp: 6.13,
      feelsLike: 3.14,
      pressure: 1010,
      humidity: 99,
      dewPoint: 5.63,
      uvi: 0.06,
      clouds: 100,
      visibility: 57,
      windSpeed: 4.2,
      windDeg: 160,
      windGust: 13.27,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.36,
    },
    {
      dt: 1637265600,
      temp: 6.63,
      feelsLike: 3.86,
      pressure: 1009,
      humidity: 99,
      dewPoint: 6.07,
      uvi: 0.02,
      clouds: 100,
      visibility: 45,
      windSpeed: 4.01,
      windDeg: 169,
      windGust: 13.1,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.16,
    },
    {
      dt: 1637269200,
      temp: 7.07,
      feelsLike: 4.21,
      pressure: 1009,
      humidity: 99,
      dewPoint: 6.52,
      uvi: 0,
      clouds: 100,
      visibility: 54,
      windSpeed: 4.38,
      windDeg: 167,
      windGust: 13.53,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.46,
      rain: {
        '1h': 0.35,
      },
    },
    {
      dt: 1637272800,
      temp: 7.7,
      feelsLike: 5.15,
      pressure: 1008,
      humidity: 99,
      dewPoint: 7.15,
      uvi: 0,
      clouds: 100,
      visibility: 49,
      windSpeed: 4.06,
      windDeg: 179,
      windGust: 13.33,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.48,
    },
    {
      dt: 1637276400,
      temp: 7.66,
      feelsLike: 5.41,
      pressure: 1008,
      humidity: 99,
      dewPoint: 7.16,
      uvi: 0,
      clouds: 100,
      visibility: 116,
      windSpeed: 3.47,
      windDeg: 189,
      windGust: 10.94,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.64,
      rain: {
        '1h': 0.82,
      },
    },
    {
      dt: 1637280000,
      temp: 7.46,
      feelsLike: 5.36,
      pressure: 1008,
      humidity: 99,
      dewPoint: 7.01,
      uvi: 0,
      clouds: 100,
      visibility: 119,
      windSpeed: 3.15,
      windDeg: 217,
      windGust: 10.43,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.64,
      rain: {
        '1h': 0.39,
      },
    },
    {
      dt: 1637283600,
      temp: 6.82,
      feelsLike: 5.01,
      pressure: 1008,
      humidity: 100,
      dewPoint: 6.41,
      uvi: 0,
      clouds: 100,
      visibility: 187,
      windSpeed: 2.56,
      windDeg: 236,
      windGust: 9.18,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.56,
      rain: {
        '1h': 0.12,
      },
    },
    {
      dt: 1637287200,
      temp: 6.49,
      feelsLike: 4.24,
      pressure: 1008,
      humidity: 99,
      dewPoint: 5.93,
      uvi: 0,
      clouds: 100,
      visibility: 4651,
      windSpeed: 3.08,
      windDeg: 242,
      windGust: 8.16,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.34,
      },
    },
    {
      dt: 1637290800,
      temp: 5.95,
      feelsLike: 3.32,
      pressure: 1009,
      humidity: 98,
      dewPoint: 5.31,
      uvi: 0,
      clouds: 100,
      visibility: 4430,
      windSpeed: 3.49,
      windDeg: 250,
      windGust: 9.92,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 1.42,
      },
    },
    {
      dt: 1637294400,
      temp: 5.25,
      feelsLike: 2.17,
      pressure: 1008,
      humidity: 95,
      dewPoint: 4.1,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      windSpeed: 4,
      windDeg: 264,
      windGust: 11.28,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.94,
      },
    },
    {
      dt: 1637298000,
      temp: 3.85,
      feelsLike: 0.57,
      pressure: 1009,
      humidity: 95,
      dewPoint: 2.74,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      windSpeed: 3.8,
      windDeg: 264,
      windGust: 11.54,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 2.1,
      },
    },
    {
      dt: 1637301600,
      temp: 3.37,
      feelsLike: 1.01,
      pressure: 1010,
      humidity: 95,
      dewPoint: 2.33,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      windSpeed: 2.46,
      windDeg: 249,
      windGust: 8.2,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.54,
      },
    },
    {
      dt: 1637305200,
      temp: 3.2,
      feelsLike: 0.74,
      pressure: 1010,
      humidity: 96,
      dewPoint: 2.27,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      windSpeed: 2.53,
      windDeg: 223,
      windGust: 8.14,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.52,
      rain: {
        '1h': 0.19,
      },
    },
    {
      dt: 1637308800,
      temp: 3.43,
      feelsLike: 0.64,
      pressure: 1009,
      humidity: 94,
      dewPoint: 2.15,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      windSpeed: 2.97,
      windDeg: 241,
      windGust: 9.68,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.56,
    },
    {
      dt: 1637312400,
      temp: 3.42,
      feelsLike: 0.15,
      pressure: 1010,
      humidity: 95,
      dewPoint: 2.27,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      windSpeed: 3.63,
      windDeg: 256,
      windGust: 8.98,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.52,
      rain: {
        '1h': 0.16,
      },
    },
    {
      dt: 1637316000,
      temp: 3.1,
      feelsLike: -0.47,
      pressure: 1010,
      humidity: 91,
      dewPoint: 1.39,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      windSpeed: 3.99,
      windDeg: 268,
      windGust: 9.39,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.48,
    },
    {
      dt: 1637319600,
      temp: 1.97,
      feelsLike: -1.63,
      pressure: 1010,
      humidity: 87,
      dewPoint: -0.27,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      windSpeed: 3.66,
      windDeg: 261,
      windGust: 9.14,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.45,
    },
    {
      dt: 1637323200,
      temp: 1.45,
      feelsLike: -2.64,
      pressure: 1011,
      humidity: 87,
      dewPoint: -0.86,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      windSpeed: 4.22,
      windDeg: 247,
      windGust: 9.3,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.41,
    },
    {
      dt: 1637326800,
      temp: 1.27,
      feelsLike: -3.12,
      pressure: 1011,
      humidity: 84,
      dewPoint: -1.52,
      uvi: 0.17,
      clouds: 100,
      visibility: 10000,
      windSpeed: 4.63,
      windDeg: 256,
      windGust: 9.81,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637330400,
      temp: 1.39,
      feelsLike: -3.31,
      pressure: 1011,
      humidity: 83,
      dewPoint: -1.61,
      uvi: 0.44,
      clouds: 100,
      visibility: 10000,
      windSpeed: 5.24,
      windDeg: 271,
      windGust: 9.77,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637334000,
      temp: 1.95,
      feelsLike: -2.91,
      pressure: 1012,
      humidity: 77,
      dewPoint: -2.1,
      uvi: 0.78,
      clouds: 89,
      visibility: 10000,
      windSpeed: 5.85,
      windDeg: 274,
      windGust: 9.02,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637337600,
      temp: 2.3,
      feelsLike: -2.45,
      pressure: 1012,
      humidity: 74,
      dewPoint: -2.22,
      uvi: 1.04,
      clouds: 88,
      visibility: 10000,
      windSpeed: 5.82,
      windDeg: 276,
      windGust: 8.85,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637341200,
      temp: 2.59,
      feelsLike: -1.97,
      pressure: 1012,
      humidity: 71,
      dewPoint: -2.48,
      uvi: 1.05,
      clouds: 86,
      visibility: 10000,
      windSpeed: 5.59,
      windDeg: 280,
      windGust: 8.74,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637344800,
      temp: 2.74,
      feelsLike: -1.64,
      pressure: 1012,
      humidity: 69,
      dewPoint: -2.66,
      uvi: 0.81,
      clouds: 87,
      visibility: 10000,
      windSpeed: 5.29,
      windDeg: 279,
      windGust: 8.55,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637348400,
      temp: 2.58,
      feelsLike: -1.65,
      pressure: 1012,
      humidity: 72,
      dewPoint: -2.34,
      uvi: 0.48,
      clouds: 93,
      visibility: 10000,
      windSpeed: 4.92,
      windDeg: 270,
      windGust: 8.79,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.01,
    },
    {
      dt: 1637352000,
      temp: 1.89,
      feelsLike: -2.59,
      pressure: 1013,
      humidity: 74,
      dewPoint: -2.64,
      uvi: 0.19,
      clouds: 92,
      visibility: 10000,
      windSpeed: 5.07,
      windDeg: 272,
      windGust: 9.53,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.01,
    },
    {
      dt: 1637355600,
      temp: 0.7,
      feelsLike: -3.94,
      pressure: 1014,
      humidity: 78,
      dewPoint: -3.04,
      uvi: 0,
      clouds: 84,
      visibility: 10000,
      windSpeed: 4.82,
      windDeg: 276,
      windGust: 10.62,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637359200,
      temp: 0.16,
      feelsLike: -4.72,
      pressure: 1015,
      humidity: 81,
      dewPoint: -3.04,
      uvi: 0,
      clouds: 87,
      visibility: 10000,
      windSpeed: 5,
      windDeg: 275,
      windGust: 11.51,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637362800,
      temp: -0.22,
      feelsLike: -5.31,
      pressure: 1016,
      humidity: 82,
      dewPoint: -3.23,
      uvi: 0,
      clouds: 90,
      visibility: 10000,
      windSpeed: 5.21,
      windDeg: 274,
      windGust: 11.95,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637366400,
      temp: -0.58,
      feelsLike: -5.69,
      pressure: 1017,
      humidity: 83,
      dewPoint: -3.44,
      uvi: 0,
      clouds: 87,
      visibility: 10000,
      windSpeed: 5.09,
      windDeg: 272,
      windGust: 12.34,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637370000,
      temp: -0.74,
      feelsLike: -5.89,
      pressure: 1017,
      humidity: 82,
      dewPoint: -3.81,
      uvi: 0,
      clouds: 15,
      visibility: 10000,
      windSpeed: 5.08,
      windDeg: 273,
      windGust: 12.76,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637373600,
      temp: -0.85,
      feelsLike: -6.12,
      pressure: 1018,
      humidity: 81,
      dewPoint: -4.1,
      uvi: 0,
      clouds: 14,
      visibility: 10000,
      windSpeed: 5.24,
      windDeg: 276,
      windGust: 12.79,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637377200,
      temp: -0.95,
      feelsLike: -6.22,
      pressure: 1019,
      humidity: 82,
      dewPoint: -4.05,
      uvi: 0,
      clouds: 14,
      visibility: 10000,
      windSpeed: 5.19,
      windDeg: 280,
      windGust: 12.31,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637380800,
      temp: -0.93,
      feelsLike: -6.16,
      pressure: 1020,
      humidity: 80,
      dewPoint: -4.34,
      uvi: 0,
      clouds: 14,
      visibility: 10000,
      windSpeed: 5.13,
      windDeg: 285,
      windGust: 11.53,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637384400,
      temp: -1.11,
      feelsLike: -6.35,
      pressure: 1021,
      humidity: 77,
      dewPoint: -4.93,
      uvi: 0,
      clouds: 18,
      visibility: 10000,
      windSpeed: 5.07,
      windDeg: 288,
      windGust: 11.49,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637388000,
      temp: -1.42,
      feelsLike: -6.82,
      pressure: 1022,
      humidity: 76,
      dewPoint: -5.42,
      uvi: 0,
      clouds: 17,
      visibility: 10000,
      windSpeed: 5.22,
      windDeg: 290,
      windGust: 11.46,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637391600,
      temp: -1.74,
      feelsLike: -7.1,
      pressure: 1023,
      humidity: 76,
      dewPoint: -5.78,
      uvi: 0,
      clouds: 13,
      visibility: 10000,
      windSpeed: 5.01,
      windDeg: 291,
      windGust: 11.35,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637395200,
      temp: -2.02,
      feelsLike: -7.37,
      pressure: 1024,
      humidity: 76,
      dewPoint: -6.05,
      uvi: 0,
      clouds: 19,
      visibility: 10000,
      windSpeed: 4.89,
      windDeg: 291,
      windGust: 11.45,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637398800,
      temp: -2.24,
      feelsLike: -7.58,
      pressure: 1025,
      humidity: 76,
      dewPoint: -6.28,
      uvi: 0,
      clouds: 15,
      visibility: 10000,
      windSpeed: 4.78,
      windDeg: 290,
      windGust: 11.43,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1637402400,
      temp: -2.45,
      feelsLike: -7.81,
      pressure: 1026,
      humidity: 76,
      dewPoint: -6.47,
      uvi: 0,
      clouds: 13,
      visibility: 10000,
      windSpeed: 4.73,
      windDeg: 291,
      windGust: 11.38,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
  ],
  daily: [
    {
      dt: 1637251200,
      sunrise: 1637235526,
      sunset: 1637268880,
      moonrise: 1637267940,
      moonset: 1637232240,
      moonPhase: 0.48,
      temp: {
        day: 4.28,
        min: -1.38,
        max: 7.7,
        night: 5.25,
        eve: 7.7,
        morn: -0.02,
      },
      feelsLike: {
        day: 0.33,
        night: 2.17,
        eve: 5.15,
        morn: -5.04,
      },
      pressure: 1013,
      humidity: 98,
      dewPoint: 3.64,
      windSpeed: 6.17,
      windDeg: 153,
      windGust: 16.41,
      weather: [
        {
          id: 616,
          main: 'Snow',
          description: 'rain and snow',
          icon: '13d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 7.53,
      snow: 2.21,
      uvi: 0.12,
    },
    {
      dt: 1637337600,
      sunrise: 1637322011,
      sunset: 1637355222,
      moonrise: 1637355840,
      moonset: 1637322600,
      moonPhase: 0.5,
      temp: {
        day: 2.3,
        min: -0.95,
        max: 3.85,
        night: -0.93,
        eve: 0.16,
        morn: 3.1,
      },
      feelsLike: {
        day: -2.45,
        night: -6.16,
        eve: -4.72,
        morn: -0.47,
      },
      pressure: 1012,
      humidity: 74,
      dewPoint: -2.22,
      windSpeed: 5.85,
      windDeg: 274,
      windGust: 12.79,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 88,
      pop: 1,
      rain: 2.99,
      uvi: 1.05,
    },
    {
      dt: 1637424000,
      sunrise: 1637408496,
      sunset: 1637441568,
      moonrise: 1637444100,
      moonset: 1637412960,
      moonPhase: 0.54,
      temp: {
        day: 0.68,
        min: -2.84,
        max: 1.67,
        night: -2.8,
        eve: -1.83,
        morn: -2.45,
      },
      feelsLike: {
        day: -3.84,
        night: -4.82,
        eve: -3.67,
        morn: -7.81,
      },
      pressure: 1030,
      humidity: 60,
      dewPoint: -6.66,
      windSpeed: 5.22,
      windDeg: 290,
      windGust: 11.49,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: 13,
      pop: 0,
      uvi: 1.1,
    },
    {
      dt: 1637510400,
      sunrise: 1637494979,
      sunset: 1637527915,
      moonrise: 1637532780,
      moonset: 1637503080,
      moonPhase: 0.57,
      temp: {
        day: 2.12,
        min: -2.38,
        max: 4.82,
        night: 4.61,
        eve: 3.94,
        morn: -2.13,
      },
      feelsLike: {
        day: -1.97,
        night: 0.72,
        eve: 0.43,
        morn: -5.44,
      },
      pressure: 1029,
      humidity: 68,
      dewPoint: -3.51,
      windSpeed: 5.38,
      windDeg: 186,
      windGust: 14.47,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.32,
      rain: 0.14,
      uvi: 0.96,
    },
    {
      dt: 1637596800,
      sunrise: 1637581462,
      sunset: 1637614265,
      moonrise: 1637621940,
      moonset: 1637592900,
      moonPhase: 0.6,
      temp: {
        day: 10.71,
        min: 6.38,
        max: 11.95,
        night: 11.22,
        eve: 11.88,
        morn: 7.72,
      },
      feelsLike: {
        day: 10.19,
        night: 10.9,
        eve: 11.55,
        morn: 3.62,
      },
      pressure: 1006,
      humidity: 90,
      dewPoint: 8.77,
      windSpeed: 10.93,
      windDeg: 165,
      windGust: 24.39,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 33.23,
      uvi: 1,
    },
    {
      dt: 1637683200,
      sunrise: 1637667944,
      sunset: 1637700617,
      moonrise: 1637711640,
      moonset: 1637682240,
      moonPhase: 0.63,
      temp: {
        day: 13.29,
        min: 10.88,
        max: 13.29,
        night: 12.62,
        eve: 11.94,
        morn: 10.88,
      },
      feelsLike: {
        day: 13.13,
        night: 12.44,
        eve: 11.64,
        morn: 10.58,
      },
      pressure: 988,
      humidity: 94,
      dewPoint: 11.95,
      windSpeed: 6.58,
      windDeg: 144,
      windGust: 13.3,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 35.39,
      uvi: 1,
    },
    {
      dt: 1637769600,
      sunrise: 1637754425,
      sunset: 1637786971,
      moonrise: 1637801760,
      moonset: 1637771100,
      moonPhase: 0.66,
      temp: {
        day: 7.78,
        min: 6.74,
        max: 13.76,
        night: 7.33,
        eve: 7.59,
        morn: 11.86,
      },
      feelsLike: {
        day: 6.3,
        night: 7.33,
        eve: 6.04,
        morn: 11.29,
      },
      pressure: 1003,
      humidity: 81,
      dewPoint: 4.37,
      windSpeed: 7.59,
      windDeg: 137,
      windGust: 13.24,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 8.91,
      uvi: 1,
    },
    {
      dt: 1637856000,
      sunrise: 1637840905,
      sunset: 1637873328,
      moonrise: 1637892180,
      moonset: 1637859480,
      moonPhase: 0.69,
      temp: {
        day: 8.02,
        min: 7.54,
        max: 8.58,
        night: 8.58,
        eve: 8.26,
        morn: 7.92,
      },
      feelsLike: {
        day: 5.88,
        night: 5.91,
        eve: 5.72,
        morn: 6.47,
      },
      pressure: 997,
      humidity: 94,
      dewPoint: 6.67,
      windSpeed: 4.76,
      windDeg: 346,
      windGust: 10.44,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 21.3,
      uvi: 1,
    },
  ],
  alerts: [
    {
      senderName: 'NWS Caribou (Northern Maine)',
      event: 'Winter Weather Advisory',
      start: 1637233020,
      end: 1637244000,
      description:
        '...WINTER WEATHER ADVISORY REMAINS IN EFFECT UNTIL 9 AM EST THIS\nMORNING...\n* WHAT...Freezing rain. Additional ice accumulations up to a tenth\nof an inch.\n* WHERE...Northeast Aroostook and Northwest Aroostook Counties.\n* WHEN...Until 9 AM EST this morning.\n* IMPACTS...Roads, and especially bridges and overpasses, will\nlikely become slick and hazardous. Plan on slippery road\nconditions. The hazardous conditions could impact the Thursday\nmorning commute.',
      tags: [],
    },
  ],
}

export const DEFAULT_GEOCODING_RESPONSE = [
  {
    name: 'Bristol County',
    localNames: {
      ar: 'مقاطعة بريستول',
      ascii: 'Bristol County',
      bg: 'Бристъл',
      en: 'Bristol',
      eu: 'Bristol konderria',
      fa: 'شهرستان بریستول، ماساچوست',
      featureName: 'Bristol County',
      fr: 'Comté de Bristol',
      gl: 'Condado de Bristol',
      hu: 'Bristol megye',
      it: 'Contea di Bristol',
      ja: 'ブリストル郡',
      pl: 'Hrabstwo Bristol',
      pt: 'Condado de Bristol',
      ro: 'Comitatul Bristol',
      ru: 'Бристол',
      sr: 'Округ Бристол',
      vi: 'Quận Bristol',
    },
    lat: 41.8334,
    lon: -71.1662,
    country: 'US',
    state: 'MA',
  },
  {
    name: 'Bristol',
    localNames: {
      ar: 'بريستول',
      ascii: 'Bristol',
      bg: 'Бристъл',
      ca: 'Bristol',
      da: 'Bristol',
      de: 'Bristol',
      el: 'Μπρίστολ',
      en: 'Bristol',
      eu: 'Bristol',
      fa: 'بریستول',
      featureName: 'Bristol',
      fi: 'Bristol',
      fr: 'Bristol',
      he: 'בריסטול',
      hi: 'ब्रिस्टल',
      id: 'Bristol',
      it: 'Bristol',
      ja: 'ブリストル',
      la: 'Bristolium',
      lt: 'Bristolis',
      mk: 'Бристол',
      nl: 'Bristol',
      no: 'Bristol',
      pl: 'Bristol',
      pt: 'Bristol',
      ro: 'Bristol',
      ru: 'Бристоль',
      sk: 'Bristol',
      sl: 'Bristol',
      sr: 'Бристол',
      th: 'บริสตอล',
      tr: 'Bristol',
    },
    lat: 51.4552,
    lon: -2.5967,
    country: 'GB',
  },
  {
    name: 'Bristol',
    localNames: {
      ar: 'بريستول',
      ascii: 'Bristol',
      bg: 'Бристъл',
      de: 'Bristol',
      en: 'Bristol',
      fa: 'بریستول، کنتیکت',
      featureName: 'Bristol',
      fr: 'Bristol',
      ja: 'ブリストル',
      pl: 'Bristol',
      ru: 'Бристол',
      sr: 'Бристол',
    },
    lat: 41.6718,
    lon: -72.9493,
    country: 'US',
    state: 'CT',
  },
  {
    name: 'Bristol County',
    localNames: {
      ascii: 'Bristol County',
      bg: 'Бристъл',
      en: 'Bristol',
      eu: 'Bristol konderria',
      fa: 'شهرستان بریستول، رود آیلند',
      featureName: 'Bristol County',
      fi: 'Bristolin piirikunta',
      fr: 'Comté de Bristol',
      hu: 'Bristol megye',
      it: 'Contea di Bristol',
      ja: 'ブリストル郡',
      pl: 'Hrabstwo Bristol',
      pt: 'Condado de Bristol',
      ro: 'Comitatul Bristol',
      ru: 'Бристол',
      sr: 'Округ Бристол',
      th: 'บริสตอลเคาน์ตี',
    },
    lat: 41.7168,
    lon: -71.2717,
    country: 'US',
    state: 'RI',
  },
  {
    name: 'Bristol',
    localNames: {
      ar: 'بريستول',
      ascii: 'Bristol',
      en: 'Bristol',
      fa: 'بریستول، تنسی',
      featureName: 'Bristol',
      ja: 'ブリストル',
      ru: 'Бристол',
      sr: 'Бристол',
    },
    lat: 36.5951,
    lon: -82.1887,
    country: 'US',
    state: 'TN',
  },
]

export const DEFAULT_NEWS_ARTICLE: NewsArticle = {
  _type: 'NewsArticle',
  name: 'Article Title',
  description: 'A longer description of the news article',
  url: 'https://provider.com/article.html',
  image: {
    _type: 'ImageObject',
    thumbnail: {
      _type: 'ImageObject',
      contentUrl: 'https://provider.com/articleimage.jpg',
      width: 100,
      height: 100,
    },
  },
  provider: [
    {
      _type: 'Organization',
      name: 'A News Provider',
      image: {
        _type: 'ImageObject',
        thumbnail: {
          _type: 'ImageObject',
          contentUrl: 'https://provider.com/providerimage.jpg',
        },
      },
    },
  ],
}
