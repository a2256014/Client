export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const BASIC_API_URL = process.env.REACT_APP_BASIC_API_URL;

export const ALERT_GET_URL_BASIC = process.env.REACT_APP_ALERT_GET_URL;

export const ALERT_GET_URL = (id) =>
  `${SERVER_URL}${BASIC_API_URL}${ALERT_GET_URL_BASIC}/${id}`;

export const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKET_SERVER_URL;

export const SIGNIN_POST_URL_BASIC = process.env.REACT_APP_SIGNIN_POST_URL;

export const SIGNUP_POST_URL_BASIC = process.env.REACT_APP_SIGNUP_POST_URL;

export const SIGNIN_POST_URL = `${SERVER_URL}${BASIC_API_URL}${SIGNIN_POST_URL_BASIC}`;

export const SIGNUP_POST_URL = `${SERVER_URL}${BASIC_API_URL}${SIGNUP_POST_URL_BASIC}`;

export const LOG_GET_URL_BASIC = process.env.REACT_APP_LOG_GET_URL;

export const LOG_GET_URL = (id) =>
  `${SERVER_URL}${BASIC_API_URL}${ALERT_GET_URL_BASIC}${LOG_GET_URL_BASIC}${id}`;


export const IMAGE_STREAM_URL = process.env.REACT_APP_STREAM_IMAGE_URL;