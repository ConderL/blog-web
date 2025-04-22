import carousel from "./carousel";
import home from "./home";
import article from "./article";

const data = {
	url: "/api",
	method: "get",
	response: () => ({
		flag: true,
		code: 200,
		msg: "操作成功",
		data: {
			articleCount: 12,
			categoryCount: 3,
			tagCount: 14,
			viewCount: "341",
			siteConfig: {
				id: 1,
				userAvatar:
					"https://picture.qiuyu.wiki/config/52372318dfd8599fd5f6d919b22989ef.jpg",
				touristAvatar:
					"https://picture.qiuyu.wiki/config/2da04bebe07cfdb4b6c6e67fc7823e5d.jpg",
				siteName: "Conder's blog",
				siteAddress: "https://www.conder.top",
				siteIntro: "每天进步一点点。",
				siteNotice: "后端基于NestJs开发，前端基于Vue3 Ts Navie UI开发",
				createSiteTime: "2025-2-16",
				recordNumber: "豫ICP备2024068028号-1",
				authorAvatar: "http://img.conder.top/config/avatar.jpg",
				siteAuthor: "@ConderL",
				articleCover:
					"https://picture.qiuyu.wiki/config/a309572c1e5f943ec6e6eff445b0f14d.jpg",
				aboutMe:
					"\uD83C\uDF40个人简介\n\n全栈开发工程师\n\n喜欢捣鼓一些新奇的东西",
				github: "https://github.com/ConderL",
				gitee: "https://gitee.com/ConderL",
				bilibili: "https://space.bilibili.com/180248324",
				qq: "912277676",
				commentCheck: 0,
				messageCheck: 0,
				isReward: 1,
				weiXinCode:
					"https://picture.qiuyu.wiki/config/747ea3a1cad627c4384fb5f19b78d96d.jpg",
				aliCode:
					"https://picture.qiuyu.wiki/config/96535c4e348bb5d6e16b42086fcdca39.jpg",
				emailNotice: 1,
				socialList: "gitee,github,qq,bilibili",
				loginList: ",gitee,github",
				isMusic: 1,
				musicId: "691394551",
				isChat: 1,
				websocketUrl: "wss://www.qiuyu.wiki/websocket/",
				archiveWallpaper:
					"https://picture.qiuyu.wiki/config/4343ce0c8ea2d5389ec8dfb1643d562c.jpg",
				categoryWallpaper:
					"https://picture.qiuyu.wiki/config/6a41b24a35f31690b048c651906ef714.png",
				tagWallpaper:
					"https://picture.qiuyu.wiki/config/4769c73d1745ff3b978867bf551fe6c7.jpg",
				talkWallpaper:
					"https://picture.qiuyu.wiki/config/5a08159479ba344dec5813e61fb6f79c.png",
				albumWallpaper:
					"https://picture.qiuyu.wiki/config/911b382d5b990b23c95104f965524880.png",
				friendWallpaper:
					"https://picture.qiuyu.wiki/config/1b64e99e7c3a0a954f8ed4632e58a968.png",
				messageWallpaper:
					"https://picture.qiuyu.wiki/config/a2d126855bbeb3353abafc9047c0fd15.png",
				aboutWallpaper:
					"https://picture.qiuyu.wiki/config/5efb247a6e443d6c9036baa78db14044.png",
			},
		},
	}),
};

export default [data, ...carousel, ...home, ...article];
