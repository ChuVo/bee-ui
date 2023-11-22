<script>

export default {
    name: 'ModalView',
    props: {
        /**
         *  Unique name of modal
         */
        name: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: 'small'
        }
    },
    data () {
        return {
            visible: false
        }
    },
    methods: {
        show (params) {
            this.visible = true
            document.body.classList.add('overflow-hidden')
            this.$emit('show', params)
        },
        hide (params) {
            this.visible = false
            document.body.classList.remove('overflow-hidden')
            this.$emit('hide', params)
        },
        lurk (event) {
            if (event.target.className === 'modal-mask'  || event.target.className.includes('modal-mask')) {
                this.hide()
            }
        }
    },
    mounted () {
        if (this.$modal.items[this.name]) {
            console.warn(`Modal ${this.name} already exists.`)
        }
        this.$modal.setModalToStorage(this.name, this)
    },
    unmounted () {
        document.body.classList.remove('overflow-hidden')
    }
}

</script>

<template>
    <div v-if="visible" class="modal-mask" @click="lurk">
        <div class="modal" :class="size">
            <div class="modal__wrapper">
                <div class="modal__header">
                    <slot name="header" />
                </div>
                <div class="modal__content">
                    <slot name="content" />
                </div>
                <div class="modal__footer">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>
