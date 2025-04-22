import { MockMethod } from "vite-plugin-mock";

export default [
	{
		url: "/article/recommend",
		method: "get",
		response: () => ({
			flag: true,
			code: 200,
			msg: "操作成功",
			data: [
				{
					id: 11,
					articleTitle: "Spring Boot 请求/响应包装器",
					articleCover:
						"https://picture.qiuyu.wiki/config/a309572c1e5f943ec6e6eff445b0f14d.jpg",
					createTime: "2024-11-12T16:53:04",
				},
			],
		}),
	},
	{
		url: "/article/list",
		method: "get",
		response: () => ({
			flag: true,
			code: 200,
			msg: "操作成功",
			data: {
				recordList: [
					{
						id: 12,
						articleCover:
							"https://picture.qiuyu.wiki/article/c1dd439ab9d4e1e559329513410617a8.gif",
						articleTitle: "HTML + CSS 滚动轮播图",
						articleDesc: "滚动轮播图",
						category: { id: 53, categoryName: "技术杂谈" },
						tagVOList: [
							{ id: 26, tagName: "HTML" },
							{ id: 27, tagName: "CSS" },
							{ id: 28, tagName: "JavaScript" },
						],
						isTop: 0,
						createTime: "2024-11-15T12:03:39",
					},
					{
						id: 11,
						articleCover:
							"https://picture.qiuyu.wiki/config/a309572c1e5f943ec6e6eff445b0f14d.jpg",
						articleTitle: "Spring Boot 请求/响应包装器",
						articleDesc:
							"什么是请求和响应包装器在SpringBoot中，请求和响应包装器是用于增强原生HttpServletRequest和HttpServletResponse对象的功能。这些包装器允许开发者在请求处理过程",
						category: { id: 53, categoryName: "技术杂谈" },
						tagVOList: [
							{ id: 16, tagName: "Java" },
							{ id: 30, tagName: "Spring Boot" },
						],
						isTop: 0,
						createTime: "2024-11-12T16:53:04",
					},
					{
						id: 10,
						articleCover:
							"https://picture.qiuyu.wiki/config/a309572c1e5f943ec6e6eff445b0f14d.jpg",
						articleTitle: "mysql定时备份数据",
						articleDesc: "MySQL数据定时备份",
						category: { id: 53, categoryName: "技术杂谈" },
						tagVOList: [
							{ id: 18, tagName: "Linux" },
							{ id: 29, tagName: "数据库" },
						],
						isTop: 0,
						createTime: "2024-11-08T16:22:42",
					},
					{
						id: 9,
						articleCover: "http://img.conder.top/config/avatar.jpg",
						articleTitle: "有意思的代码",
						articleDesc: "有趣的代码",
						category: { id: 53, categoryName: "技术杂谈" },
						tagVOList: [
							{ id: 26, tagName: "HTML" },
							{ id: 27, tagName: "CSS" },
							{ id: 28, tagName: "JavaScript" },
						],
						isTop: 0,
						createTime: "2024-10-29T12:55:34",
					},
					{
						id: 8,
						articleCover:
							"https://picture.qiuyu.wiki/article/6e8f5f420e74f0eb9ad779f603483448.png",
						articleTitle: "登录页切换效果",
						articleDesc:
							"实现了一个炫酷的登录切换效果，包括一个注册账号和登录账号的表单，以及一个可以切换表单的动态效果。",
						category: { id: 53, categoryName: "技术杂谈" },
						tagVOList: [
							{ id: 26, tagName: "HTML" },
							{ id: 27, tagName: "CSS" },
							{ id: 28, tagName: "JavaScript" },
						],
						isTop: 0,
						createTime: "2024-10-04T10:49:20",
					},
				],
				count: 12,
			},
		}),
	},
] as MockMethod[];
