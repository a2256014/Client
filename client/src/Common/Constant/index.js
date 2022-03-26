export const SERVER_URL = `http://ec2-3-36-163-212.ap-northeast-2.compute.amazonaws.com:8080`;

export const DEPLOYMENT_URL = `http://www.cyber-capstone.kro.kr`;

export const BASIC_API_URL = `/api/v1`;

export const ALERT_GET_URL = (id) =>
  `${SERVER_URL}${BASIC_API_URL}/alert-log/get/${id}`;

export const DEPLOYMENT_API_URL = `${DEPLOYMENT_URL}/api`;

export const DEPLOYMENT_ALERT_GET_URl = (id) =>
  `${DEPLOYMENT_API_URL}/alert-log/get/${id}`;
