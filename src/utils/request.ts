import { useUserStore } from "@/store";
import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";
import { getServiceBaseURL } from "./service";
import { getToken, token_prefix } from "./token";

// const { url, proxyPattern } = getServiceEnvConfig(import.meta.env);

const isHttpProxy =
	import.meta.env.DEV && import.meta.env.VITE_HTTP_PROXY === "Y";
const { baseURL } = getServiceBaseURL(import.meta.env, isHttpProxy);

const requests = axios.create({
	baseURL,
	timeout: 10000,
	// 请求头
	headers: {
		"Content-Type": "application/json;charset=UTF-8",
	},
});

// 请求拦截器
requests.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		// 请求带token
		if (getToken()) {
			config.headers["Authorization"] = token_prefix + getToken();
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

const handleResponse = (response: AxiosResponse) => {
	switch (response.data.code) {
		case -1:
			window.$message?.error(response.data.msg);
			break;
		case 400:
			window.$message?.error(response.data.msg);
			break;
		case 402:
			const user = useUserStore();
			user.forceLogOut();
			window.$message?.error(response.data.msg);
			break;
		case 500:
			window.$message?.error(response.data.msg);
			break;
	}
};

// 配置响应拦截器
requests.interceptors.response.use(
	(response: AxiosResponse) => {
		handleResponse(response);
		return response;
	},
	(error: AxiosError) => {
		let { response } = error;
		handleResponse(response as AxiosResponse);
		return Promise.reject(error);
	}
);

// 对外暴露
export default requests;
