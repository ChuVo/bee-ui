import {App, Plugin, Ref, ref} from 'vue';
import Toast from './toast.vue';

const dataToast:Ref<any[]> = ref([])
const model = {
    text: '',
    lifetime: 4000
}

let index = 0

const api = {
    toasts: ref(dataToast.value),
    show (toast: any) {
        toast = Object.assign({}, model, {
            index: index++
        }, toast)

        dataToast.value.push(toast)

        if (toast.lifetime) {
            setTimeout(() => {
                this.hide(toast)
            }, toast.lifetime)
        }

        return dataToast
    },
    hide (toast: any) {
        if (!toast) {
            return dataToast.value.splice(0, 1)
        }

        const index = dataToast.value.findIndex(t => t.index === toast.index)

        if (index >= 0) {
            return dataToast.value.splice(index, 1)
        }
    }
}

export default {
    install(Vue: App, options) {
        Vue.component(Toast.name, Toast)

        options = Object.assign(model, options)
        options.name = options.name || 'toast'

        /**
         * variant of toast
         * @values susses, error, warning, info
         */
        options.variant = options.variant || ''

        Vue.component(options.name)
        Vue.config.globalProperties.$toast = api
    }
} as Plugin

export {
    Toast as BeeToast
}
