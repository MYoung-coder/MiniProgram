// const types=['手动','定时','模型']
// var pageData = {
//   data: {
//     switch1Checked: false, switch2Checked: false,
//     switch3Checked: false, switch4Checked: false,
//     switch5Checked: false, switch6Checked: false,
//     switch7Checked: false, switch8Checked: false,
//     titles: ['手动', '定时', '模型'],
//     currentType:'手动'
//   },

//   onPullDownRefresh: function () {
//     console.log('onPullDownRefresh', '下拉刷新....');
//     this.Statecheck();
//     wx.stopPullDownRefresh();
//     console.log('onPullDownRefresh', '下拉刷新结束');
//   },


//   handleTabClick(event){
//     //------取出index，判定点击了哪一个tab
//     const index=event.detail.index;
//     console.log(index)
//     //设置type
//     this.setData({
//       currentType:types[index]
//     })
//   },


//   onReady: function (options) {
//     this.Statecheck();
//   },

//   onLoad: function (options) {

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



const types = ['手动', '定时', '模型']


var pageData = {
  data: {
    titles: ['手动', '定时', '模型'],
    currentType: '手动',
  },

  handleTabClick(event) {
    //------取出index，判定点击了哪一个tab
    const index = event.detail.index;
   
    //设置type
    this.setData({
      currentType: types[index]
    })
  },
}
Page(pageData)
