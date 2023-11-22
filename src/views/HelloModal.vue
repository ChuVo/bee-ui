<template>
    <bee-modal :name="'HelloModalName'" :size="'small'">
        <template v-slot:header>This is header</template>

        <template v-slot:content>
            <div>This is content</div>
        </template>

        <template v-slot:footer>
            <button @click="hide">cancel</button>
            <button @click="show">ok</button>
        </template>
    </bee-modal>
</template>

<script>
import BeeModal from "@/components/modal/modal";
export default {
    components: {BeeModal},
    methods: {
        show () {
            this.$toast.show({
                text: 'Click OK'
            })
            this.$modal.hide('HelloModalName')
        },
        hide () {
            this.$toast.show({
                text: 'Click Cancel'
            })
            this.$modal.hide('HelloModalName')
        }
    }
}
</script>
