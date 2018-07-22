// App constants
const appConstants = {
  env: process.env.NODE_ENV || 'development',
  isDev: !!(process.env.NODE_ENV === 'development'),
  isProd: !!(process.env.NODE_ENV === 'production'),
  version: process.env.VERSION || '0.0.0',
  buildNumber: process.env.BUILD_NUMBER || '0',
  buildTimestamp: process.env.BUILD_TIMESTAMP || new Date().getTime(),
  serverApiUrl: process.env.SERVER_API_URL || 'http://localhost:8080/',
  tokenKey: 'jhi-token',
  messages: {
    DATA_ERROR_ALERT: 'Internal Error'
  },
  authorities: {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_USER'
  },
  formats: {
    date: 'DD/MM/YY HH:mm',
    timestamp: 'DD/MM/YY HH:mm:ss',
    localDate: 'DD/MM/YYYY',
    localDatetime: 'YYYY-MM-DDThh:mm',
    wholeNumber: '0,0',
    twoDigitsSfterPointNumber: '0,0.[00]'
  }
};

export default appConstants;
