import { register } from 'src/api/base';
import type { API_OPTION } from 'src/api/base';
import { GATEWAY, SERVICE_NAME } from 'src/api/gateWayConfig';

const SERVICE_KEY = 'test';
const { TEST_SERVICE_NAME } = SERVICE_NAME;

const API_LIST: Record<string, API_OPTION> = {
  GET_TABLE_LIST: {
    path: `${TEST_SERVICE_NAME}/test/gets`,
  },
};
const URLS = register(SERVICE_KEY, GATEWAY, API_LIST);

export const GET_TABLE_LIST = URLS['GET_TABLE_LIST'];
