import {App, Plugin} from 'vue'

import ContextMenu from './context-menu.vue'

export default {
    install(Vue: App) {
        Vue.component(ContextMenu.name, ContextMenu)
    }
} as Plugin

export {
    ContextMenu as BeeContextMenu
}
