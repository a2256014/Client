export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const BASIC_API_URL = process.env.REACT_APP_BASIC_API_URL;

export const ALERT_GET_URL_BASIC = process.env.REACT_APP_ALERT_GET_URL;

export const ALERT_GET_URL = (id) =>
  `${SERVER_URL}${BASIC_API_URL}${ALERT_GET_URL_BASIC}/${id}`;

export const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKET_SERVER_URL;
