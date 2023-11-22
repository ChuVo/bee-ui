import {App, Plugin, ref} from 'vue'
import Modal from './modal.vue'

/**
 * Modal components storage: { name: reference }
 */
const storage: any = {}

// Call modal method
function callAction (method: string, name: string, params: {}) {
    try {
        storage[name][method](params)
    } catch (e) {
        console.warn(`Modal "${name}" is not found.`)
    }
}

/**
 *  Modal API
 */
const api = {
    items: ref(storage),
    setModalToStorage (name: string, params: any) {
        storage[name] = params
    },
    deleteModalFromStore (name: string) {
        delete storage[name]
    },
    show (name: string, params: any) {
        this.hide(name, params)
        callAction('show', name, params)
    },
    hide (name: string, params: {}) {
        if (name) {
            callAction('hide', name, params)
        } else {
            Object.getOwnPropertyNames(storage).forEach(function (name) {
                if (storage[name].visible) {
                    storage[name].hide()
                }
            })
        }
    }
}

export default {
    install(Vue: App, params = {} ) {
        const name = params.name || 'modal'

        Vue.component(name, this)
        Vue.config.globalProperties.$modal = api
    }
} as Plugin

export {
    Modal as BeeModal
}
