// components/w-auto-time/w-add-cehckbox/w-add-checkbox.js
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
    items: [
      { name: 1, value: 'Relay1' },
      { name: 2, value: 'Relay2' },
      { name: 3, value: 'Relay3' },
      { name: 4, value: 'Relay4' },
      { name: 5, value: 'Relay5' },
      { name: 6, value: 'Relay6' },
      { name: 7, value: 'Relay7' },
      { name: 8, value: 'Relay8' },]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkboxChange: function (e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    }
  }
})
