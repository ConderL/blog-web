import { MockMethod } from "vite-plugin-mock";

export default [
	{
		url: "/home/talk",
		method: "get",
		response: () => ({
			flag: true,
			code: 200,
			msg: "操作成功",
			data: [
				"欲买桂花同载酒，终不似，少年游。",
				"待到秋来九月八，我花开后百花杀。",
				"君子慎独，不欺暗室",
			],
		}),
	},
] as MockMethod[];
