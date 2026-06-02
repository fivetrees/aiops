// pages/index/index.js
Page({
  data: {
    // 轮播图数组
    swiperList: [
      {
        "image_src": "https://api-hmugo-web.itheima.net/pyg/banner1.png",
        "open_type": "navigate",
        "goods_id": 129,
        "navigator_url": "/pages/goods_detail/index?goods_id=129"
      },
      {
        "image_src": "https://api-hmugo-web.itheima.net/pyg/banner2.png",
        "open_type": "navigate",
        "goods_id": 395,
        "navigator_url": "/pages/goods_detail/index?goods_id=395"
      },
      {
        "image_src": "https://api-hmugo-web.itheima.net/pyg/banner3.png",
        "open_type": "navigate",
        "goods_id": 38,
        "navigator_url": "/pages/goods_detail/index?goods_id=38"
      }
    ],
    // 导航 数组
    cateList: [
      {
        "name": "分类",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_4@2x.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/category/index"
      },
      {
        "name": "秒杀拍",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_3@2x.png"
      },
      {
        "name": "超市购",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_2@2x.png"
      },
      {
        "name": "母婴品",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_1@2x.png"
      }
    ],
    // 楼层数据
    floorList: [
      {
        "floor_title": {
          "name": "时尚女装",
          "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
        },
        "product_list": [
          {
            "name": "优质女装",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
            "image_width": "232",
            "open_type": "navigate",
            "navigator_url": "/pages/goods_list/index?query=热"
          },
          {
            "name": "春季新款",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
            "image_width": "233",
            "open_type": "navigate",
            "navigator_url": "/pages/goods_list/index?query=热"
          },
          {
            "name": "陆港季",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
            "image_width": "233",
            "open_type": "navigate",
            "navigator_url": "/pages/goods_list/index?query=热"
          },
          {
            "name": "蓬蓬裙",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
            "image_width": "233",
            "open_type": "navigate",
            "navigator_url": "/pages/goods_list/index?query=热"
          },
          {
            "name": "师奶款",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
            "image_width": "233",
            "open_type": "navigate",
            "navigator_url": "/pages/goods_list/index?query=热"
          }
        ]
      }
    ]
  },
  onLoad: function (options) {
    // 1 发送异步请求获取轮播图数据  优购原接口已失效，这里使用模拟数据
    // this.getSwiperList();
    // this.getCateList();
    // this.getFloorList();
  }
})
