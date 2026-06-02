// pages/category/index.js
Page({
  data: {
    // 左侧的菜单数据
    leftMenuList: ["大家电", "热门推荐", "海外购", "苏宁宜品", "手机数码"],
    // 右侧的商品数据
    rightContent: [],
    // 被点击的左侧的菜单
    currentIndex: 0,
    // 右侧内容的滚动条距离顶部的距离
    scrollTop: 0
  },
  // 接口的返回数据
  Cates: [
    {
      "cat_id": 1,
      "cat_name": "大家电",
      "children": [
        {
          "cat_id": 2,
          "cat_name": "电视",
          "children": [
            { "cat_id": 3, "cat_name": "曲面电视", "cat_icon": "https://api-hmugo-web.itheima.net/full/2fb110246cafc49961eeef4775357b1646762c2b.jpg" },
            { "cat_id": 4, "cat_name": "海信", "cat_icon": "https://api-hmugo-web.itheima.net/full/2fb110246cafc49961eeef4775357b1646762c2b.jpg" }
          ]
        }
      ]
    },
    {
      "cat_id": 10,
      "cat_name": "热门推荐",
      "children": []
    }
  ],

  onLoad: function (options) {
    this.setCategoryData(0);
  },

  setCategoryData(index) {
    let rightContent = this.Cates[index] ? this.Cates[index].children : [];
    this.setData({
      currentIndex: index,
      rightContent,
      scrollTop: 0
    })
  },

  // 左侧菜单的点击事件
  handleItemTap(e) {
    const { index } = e.currentTarget.dataset;
    this.setCategoryData(index);
  }
})
