import Tab from '@/components/Tab'
import TabTwo from '@/components/TabTwo'

const components = [Tab, TabTwo]


// 全局注册之后(main中use下)，可以在任何页面使用该组件
const demo = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

export default demo