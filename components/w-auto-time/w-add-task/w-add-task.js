var util = require('../../../utils/util.js');
var app = getApp();

Page({
  data: {
    task: {
      name: '',
      beginTime: '00:00',
      endTime: '00:00',
      startDay: '2016-11-00',
      endDay: '2016-11-00',
      repeat: {
        'monday': 1,
        'tuesday': 1,
        'wednesday': 1,
        'thursday': 1,
        'friday': 1,
        'saturday': 0,
        'sunday': 0
      },
      select_relay: []
     
    },
    openId: '',
    userInfo: {},
    creating: false,
    button: {
      build: '新建',
      cancel:'取消'
    },
    modalHidden: true
  },

  // 设置任务名称
  bindKeyInput: function (e) {
    this.setData({
      'task.name': e.detail.value
    });
  },

  // 设置开始时间
  setBeginTime: function (e) {
    var that = this;
    var hour = ((+e.detail.value.slice(0, 2) + 24 - 2) % 24).toString();
    that.setData({
      'task.beginTime': e.detail.value,
    });
  },

  
  // 设置结束时间
  setEndTime: function (e) {
    var that = this;
    var hour = ((+e.detail.value.slice(0, 2) + 24 - 2) % 24).toString();
    that.setData({
      'task.endTime': e.detail.value,
    });
  },


  // 设置开始日期
  startDateChange: function (e) {
    this.setData({
      'task.startDay': e.detail.value
    })
  },

  // 设置结束日期
  endDateChange: function (e) {
    this.setData({
      'task.endDay': e.detail.value
    })
  },

  // 设置重复日
  changeMonday: function (e) {
    var state = this.data.task.repeat.monday;
    this.setData({
      'task.repeat.monday': (state == 1 ? 0 : 1) 
    });
  },
  changeTuesday: function (e) {
    var state = this.data.task.repeat.tuesday;
    this.setData({
      'task.repeat.tuesday': (state == 1 ? 0 : 1) 
    });
  },
  changeWednesday: function (e) {
    var state = this.data.task.repeat.wednesday;
    this.setData({
      'task.repeat.wednesday': (state == 1 ? 0 : 1) 
    });
  },
  changeThursday: function (e) {
    var state = this.data.task.repeat.thursday;
    this.setData({
      'task.repeat.thursday': (state == 1 ? 0 : 1) 
    });
  },
  changeFriday: function (e) {
    var state = this.data.task.repeat.friday;
    this.setData({
      'task.repeat.friday': (state == 1 ? 0 : 1) 
    });
  },
  changeSaturday: function (e) {
    var state = this.data.task.repeat.saturday;
    this.setData({
      'task.repeat.saturday': (state == 1 ? 0 : 1) 
    });
  },
  changeSunday: function (e) {
    var state = this.data.task.repeat.sunday;
    this.setData({
      'task.repeat.sunday': (state == 1 ? 0 : 1) 
    });
  },

  //设置选定的Relay数组
  selectRelay(event) {
    this.setData({
      'task.select_relay': event.detail.select_pipe
    })
    console.log(this.data.task.select_relay)
  },

  // 取消创建
  bindcancel:function(){
    wx.navigateBack({
      delta:1
    })

  },
  // 创建任务
  createTask: function () {
    var that = this;
    var task = this.data.task;
    console.log('新建函数');  
    wx.request({
      url: 'http://localhost:1996/w_time_new_task',
      method: 'POST', 
      data: {
        'task_name': task.name,
        'new_task':{
          'startDay': task.startDay,
          'endDay': task.endDay,
          'beginTime': task.beginTime,
          'endTime': task.endTime,
          'repeat': {
            'monday': task.repeat.monday,
            'tuesday': task.repeat.tuesday,
            'wednesday': task.repeat.wednesday,
            'thursday': task.repeat.thursday,
            'friday': task.repeat.friday,
            'saturday': task.repeat.saturday,
            'sunday': task.repeat.sunday,
            },
          'select_relay': task.select_relay
        },
      },  

      success: function(res){
        console.log(res.data)
        wx.showToast({
          title: '新建中...',
          icon: 'loading',
          duration: 200,
          success: function () {
            setTimeout(function () {
              wx.navigateBack({
                delta: 1
              })
            }, 200);
          }
        });

      }
    })
 
  },

  // 提交、检验
  bindSubmit: function (e) {
    var that = this;
    var task = this.data.task;
    var creating = this.data.creating;

    if (task.name == '') {
      this.setData({
        modalHidden: false
      });
    } else {
      if (!creating) {
        this.setData({
          'creating': true
        });
        that.createTask();
      }
    }
  },
  
  onShow: function () {
    // 恢复新建按钮状态
    this.setData({
      'creating': false
    });
  },

  onHide: function () {
  },

  // 初始化设置
  onLoad: function () {
    var that = this;
    var now = new Date();
    var openId = wx.getStorageSync('openId');

    // 初始化打卡时间
    that.setData({
      'task.signTime': util.getHM(now),
      'task.signEarlyTime': util.getHM(new Date(now.getTime() - 1000 * 3600 * 2))
    });
    
    // 初始化日期
    that.setData({
      'task.startDay': util.getYMD(now),
      'task.endDay': util.getYMD(now)
    });


  }  
})