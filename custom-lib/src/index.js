import * as components from './components'

const vueWrapper = {
    install(Vue) {
        componentRegistration(Vue)
    }
}

const componentRegistration = function (Vue) {
    for (let item in components) {
        Vue.component(components[item].name, components[item])
    }
}


// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== undefined) {
    GlobalVue = window.Vue
} else if (typeof global !== undefined) {
    GlobalVue = global.Vue
}
if (GlobalVue) {
    GlobalVue.use(vueWrapper)
}

export * from './components'
export default vueWrapper
