// var pageData = {
//   data: {
//     switch1Checked: false, switch2Checked: false,
//     switch3Checked: false, switch4Checked: false,
//     switch5Checked: false, switch6Checked: false,
//     switch7Checked: false, switch8Checked: false,
//   },


//   Statecheck: function (optinons) {
//     wx.request({
//       url: 'http://www.causgh.com:1996/wechat_control',
//       method: "POST",
//       data: {
//         'data': 0,
//       },
//       success: (res) => {
//         console.log(res.data)
//         this.setData({
//           'switch1Checked': res.data[0], 'switch2Checked': res.data[1],
//           'switch3Checked': res.data[2], 'switch4Checked': res.data[3],
//           'switch5Checked': res.data[4], 'switch6Checked': res.data[5],
//           'switch7Checked': res.data[6], 'switch8Checked': res.data[7],
//         })
//       }
//     })
//   },

//   Statechange: (index) => {
//     const a = 1;
//     console.log(index, '位置2')
//     wx.request({
//       url: 'http://www.causgh.com:1996/wechat_control',
//       method: "POST",
//       data: {
//         'data': index,
//       },
//     })
//   },


// }

// for (var i = 1; i <= 9; ++i) {
//   (function (index) {
//     pageData[`switch${index}Change`] = function (e) {
//       console.log(`switch${index}发生change事件，携带值为`, e.detail.value)
//       var obj = {}
//       if (e.detail.value == true)
//         obj[`switch${index}Checked`] = 1
//       if (e.detail.value == false)
//         obj[`switch${index}Checked`] = 0
//       this.setData(obj)
//       console.log(obj, '位置1')
//       this.Statechange(obj)
//     }
//   })(i)
// }
// Page(pageData)


Component({
  
  data: {
    switch0Checked: false, switch1Checked: false,
    switch2Checked: false, switch3Checked: false,
    switch4Checked: false, switch5Checked: false,
    switch6Checked: false, switch7Checked: false,
  },

  lifetimes: {
    created: function () {
      console.log('Component-1 lifetimes >> created');
      this.Statecheck();
    }
  },

  methods: {
    swictch_selct: function (index1, index2) {
      var obj = {}
      if (index2 == true)
        obj[`switch${index1}Checked`] = 1
      if (index2 == false)
        obj[`switch${index1}Checked`] = 0
      this.setData(obj)
      // console.log(obj, '位置1')
      this.Statechange(obj)
    },

    switch0Change: function (e) {
      console.log('switch0 发生 change 事件，携带值为', e.detail.value)
      this.swictch_selct(0, e.detail.value)
    },
    switch1Change: function (e) {
      console.log('switch1 发生 change 事件，携带值为', e.detail.value)
      this.swictch_selct(1, e.detail.value)
    },
    switch2Change: function (e) {
      console.log('switch2 发生 change 事件，携带值为', e.detail.value)
      this.swictch_selct(2, e.detail.value)
    },
    switch3Change: function (e) {
      console.log('switch3 发生 change 事件，携带值为', e.detail.value)
      this.swictch_selct(3, e.detail.value)
    },
    switch4Change: function (e) {
      console.log('switch4 发生 change 事件，携带值为', e.detail.value)
      this.swictch_selct(4, e.detail.value)
    },
    switch5Change: function (e) {
      console.log('switch5 发生 change 事件，携带值为', e.detail.value)
      this.swictch_selct(5, e.detail.value)
    },
    switch6Change: function (e) {
      console.log('switch6 发生 change 事件，携带值为', e.detail.value)
      this.swictch_selct(6, e.detail.value)
    },
    switch7Change: function (e) {
      console.log('switch7 发生 change 事件，携带值为', e.detail.value)
      this.swictch_selct(7, e.detail.value)
    },

    Statecheck: function (optinons) {
      wx.request({
        url: 'http://localhost:1996/w_manual',
        method: "POST",
        data: {
          'data': 0,
        },
        success: (res) => {
          console.log(res.data)
          this.setData({
            'switch0Checked': res.data[0], 'switch1Checked': res.data[1],
            'switch2Checked': res.data[2], 'switch3Checked': res.data[3],
            'switch4Checked': res.data[4], 'switch5Checked': res.data[5],
            'switch6Checked': res.data[6], 'switch7Checked': res.data[7],
          })
        }
      })
    },

    Statechange: (index) => {
      const a = 1;
      console.log(index, '位置2')
      wx.request({
        url: 'http://localhost:1996/w_manual',
        method: "POST",
        data: {
          'data': index,
        },
      })
    }

  },


})
