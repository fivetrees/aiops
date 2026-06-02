// pages/cart/index.js
Page({
  data: {
    cart: [],
    allChecked: false,
    totalPrice: 0,
    totalNum: 0
  },
  onShow() {
    const cart = wx.getStorageSync("cart") || [];
    this.setCart(cart);
  },
  // 商品的选中
  handeItemChange(e) {
    const goods_id = e.currentTarget.dataset.id;
    let { cart } = this.data;
    let index = cart.findIndex(v => v.goods_id === goods_id);
    cart[index].checked = !cart[index].checked;
    this.setCart(cart);
  },
  // 设置购物车状态同时 重新计算 底部工具栏的数据 全选 总价格 购买的数量
  setCart(cart) {
    let allChecked = true;
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      if (v.checked) {
        totalPrice += v.num * v.goods_price;
        totalNum += v.num;
      } else {
        allChecked = false;
      }
    })
    allChecked = cart.length != 0 ? allChecked : false;
    this.setData({
      cart,
      totalPrice,
      totalNum,
      allChecked
    });
    wx.setStorageSync("cart", cart);
  },
  // 商品全选功能
  handleItemAllCheck() {
    let { cart, allChecked } = this.data;
    allChecked = !allChecked;
    cart.forEach(v => v.checked = allChecked);
    this.setCart(cart);
  },
  // 商品数量编辑功能
  handleItemNumEdit(e) {
    const { operation, id } = e.currentTarget.dataset;
    let { cart } = this.data;
    const index = cart.findIndex(v => v.goods_id === id);
    if (cart[index].num === 1 && operation === -1) {
      wx.showModal({
        title: '提示',
        content: '您是否要删除？',
        success: (res) => {
          if (res.confirm) {
            cart.splice(index, 1);
            this.setCart(cart);
          }
        }
      })
    } else {
      cart[index].num += operation;
      this.setCart(cart);
    }
  },
  // 点击 结算
  handlePay() {
    const { totalNum } = this.data;
    if (totalNum === 0) {
      wx.showToast({
        title: '您还没有选购商品',
        icon: 'none'
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/pay/index'
    });
  }
})
