import {App, Plugin} from 'vue'

import ContextMenu from './context-menu.vue'

/**
*  Classes for icons:
 *      add-folder,
 *      move,
 *      edit,
 *      upload,
 *      upload-link,
 *      delete,
 *      transcode-btn
 */

export default {
    install(Vue: App) {
        Vue.component(ContextMenu.name, ContextMenu)
    }
} as Plugin

export {
    ContextMenu as BeeContextMenu
}
