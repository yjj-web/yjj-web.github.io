/*
 * @Author: YuanJiuJiu
 * @Date: 2022-09-13 14:13:18
 * @LastEditors: YuanJiuJiu
 * @LastEditTime: 2022-09-13 14:13:18
 * @Description: 请填写描述
 */
export default {
  title: '袁纠纠', //站点标题
  description: '前端知识', //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "袁纠纠",
    logo: "/logo.png",
    nav: [{
        text: "构建中",
        link: "/guide/"
      },
      {
        text: "构建中",
        link: "/guide/test"
      },
      {
        text: "构建中",
        link: "https://gitee.com/geeksdidi"
      },
      {
        text: "构建中",
        items: [{
            text: '构建中',
            link: '/item-1'
          },
          {
            text: '构建中',
            link: '/item-2'
          },
          {
            text: '构建中',
            link: '/item-3'
          }
        ]
      }
    ],
    sidebar: [{
        text: "构建中",
        items: [{
            text: "构建中",
            link: "/articles/组件库环境搭建",
          },
          {
            text: "构建中",
            link: "/articles/gulp的使用"
          },
        ],
      },
      {
        text: "构建中",
        items: [{
          text: "构建中",
          link: "/articles/pina和vuex",
        }, ],
      },
    ],
  },

}