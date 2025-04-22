import { MockMethod } from "vite-plugin-mock";

export default [
	{
		url: "/recent/comment",
		method: "get",
		response: () => ({
			flag: true,
			code: 200,
			msg: "操作成功",
			data: {
				avatar: "",
				commentContent: "老铁，666啊",
				createTime: "",
				id: 0,
				nickname: "Conder",
			},
		}),
	},
] as MockMethod[];
