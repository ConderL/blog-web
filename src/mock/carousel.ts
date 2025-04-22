import { MockMethod } from "vite-plugin-mock";

export default [
	{
		url: "/carousel/list",
		method: "get",
		response: () => ({
			flag: true,
			code: 200,
			msg: "操作成功",
			data: [
				{
					id: 4,
					imgUrl: "https://conder.oss-cn-beijing.aliyuncs.com/preview.jpg",
				},
			],
		}),
	},
] as MockMethod[];
