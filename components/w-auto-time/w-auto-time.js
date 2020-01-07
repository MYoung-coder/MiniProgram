// components/w-auto-time/w-auto-time.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    button: {
      txt: '＋ 新建任务'
    },
    created_if:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoPage: function (event) {
      wx.navigateTo({
        url: "/components/w-auto-time/w-add-job/w-add-job",
      })
    }

  }
})
