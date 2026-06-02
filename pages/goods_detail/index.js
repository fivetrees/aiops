// pages/goods_detail/index.js
Page({
  data: {
    goodsObj: {},
    isCollect: false
  },
  // 商品对象
  GoodsInfo: {},

  onShow: function () {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1];
    let options = currentPage.options;
    const { goods_id } = options;
    this.getGoodsDetail(goods_id);
  },

  // 获取商品详情数据
  getGoodsDetail(goods_id) {
    // 模拟数据
    const res = {
      goods_id: goods_id,
      goods_name: "海信(Hisense) LED55MU9600X3DUC 55英寸 4K超高清 HDR 智能电视",
      goods_price: 13999,
      goods_introduce: "<div>商品详情图文介绍内容</div>",
      pics: [
        { pics_id: 1, pics_mid: "https://api-hmugo-web.itheima.net/full/2fb110246cafc49961eeef4775357b1646762c2b.jpg" }
      ]
    };
    this.GoodsInfo = res;
    // 1 获取缓存中的商品收藏数组
    let collect = wx.getStorageSync("collect") || [];
    // 2 判断当前商品是否被收藏
    let isCollect = collect.some(v => v.goods_id === this.GoodsInfo.goods_id);
    this.setData({
      goodsObj: {
        goods_name: res.goods_name,
        goods_price: res.goods_price,
        goods_introduce: res.goods_introduce.replace(/\.webp/g, '.jpg'),
        pics: res.pics
      },
      isCollect
    })
  },

  // 点击轮播图 预览大图
  handlePrevewImage(e) {
    const urls = this.GoodsInfo.pics.map(v => v.pics_mid);
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls
    });
  },

  // 点击 加入购物车
  handleCartAdd() {
    let cart = wx.getStorageSync("cart") || [];
    let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
    if (index === -1) {
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true;
      cart.push(this.GoodsInfo);
    } else {
      cart[index].num++;
    }
    wx.setStorageSync("cart", cart);
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true
    });
  },

  // 点击 商品收藏图标
  handleCollect() {
    let isCollect = false;
    let collect = wx.getStorageSync("collect") || [];
    let index = collect.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
    if (index !== -1) {
      collect.splice(index, 1);
      isCollect = false;
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        mask: true
      });
    } else {
      collect.push(this.GoodsInfo);
      isCollect = true;
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        mask: true
      });
    }
    wx.setStorageSync("collect", collect);
    this.setData({
      isCollect
    })
  }
})
