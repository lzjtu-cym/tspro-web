type API_URL = Record<string, string>;
type API_URLS = Record<string, API_URL>;
type SERVICE_ENV_MAP = Record<string, SERVICE_ITEM>;
export type API_MAP = Record<string, API_OPTION>;
export interface SERVICE_ITEM {
  local: string;
  [envName: string]: string;
}

export interface API_OPTION {
  service?: string;
  path: string;
}

// 当前环境，由构建注入
export const env = process.env.RUNTIME_ENV || 'local';

const API_URLS: API_URLS = {};

export const SERVICE_ENV_MAP: SERVICE_ENV_MAP = {};

export const API_MAP: API_MAP = {};

export function register(ServiceKey: string, ServiceMap: SERVICE_ITEM, APIMap: API_MAP) {
  if (!ServiceMap || !APIMap) return {};
  SERVICE_ENV_MAP[ServiceKey] = ServiceMap;
  API_URLS[ServiceKey] = API_URLS[ServiceKey] || {};
  const RegisterUrls: API_URL = {};
  for (const key in APIMap) {
    const api = APIMap[key];
    if (!api.service) {
      api.service = ServiceKey;
    }
    API_MAP[key] = api;
    RegisterUrls[key] = API_URLS[ServiceKey][key] = getSrc(key);
  }
  return RegisterUrls;
}

export const getSrc = (key: string) => {
  const api = API_MAP[key];
  if (!api) {
    throw Error(`找不到API ${key}，查看api配置是否异常`);
  }
  const { service, path } = api;
  const serviceData = SERVICE_ENV_MAP[service!];
  if (!serviceData) {
    throw Error(`找不到对应API服务 ${service}，查看service配置是否异常`);
  }
  const envHost = serviceData[env] || serviceData['default'];
  if (!envHost) {
    throw Error(`找不到对应环境 ${env}，查看构建env注入是否异常`);
  }
  return `${envHost}${path}`;
};

export default API_URLS;
