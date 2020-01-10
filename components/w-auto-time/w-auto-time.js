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
      txt: '＋ 新建定时任务'
    },
    created_if:false,
    task_name_list:[]
  },



  pageLifetimes:{
    // 页面被展示时执行的函数
    show: function () {
      wx.request({
        url: 'http://localhost:1996/w_task_list',
        method: 'POST',
        data: {
          data:'task_name_list',
        },
        success: (res) => {
          this.setData({
            'task_name_list': res.data
          })
          console.log(this.data.task_name_list)
        }
      })
    
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

    addTask: function (event) {
      wx.navigateTo({
        url: "/components/w-auto-time/w-add-task/w-add-task",
      })
    },

  }
})
