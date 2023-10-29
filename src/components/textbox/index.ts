import { App, Plugin } from 'vue'

import BeeTextbox from './bee-textbox.vue'

export default {
    install(Vue: App, ) {
        Vue.component(BeeTextbox.name, BeeTextbox)
    }
} as Plugin

export {
    BeeTextbox
}
