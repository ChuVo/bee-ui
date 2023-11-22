<template>
    <div class="about">
        <h1>Bee-ui-library <strong v-text="'text fields'"/></h1>
        <button @click="clickShowModal">Show Modal</button>
        <HelloModal :name="'HelloModalName'" />
    </div>
</template>

<script>

import {Options, Vue} from "vue-class-component";
import HelloModal from "./HelloModal";

@Options({
    components: {
        HelloModal
    },
    methods: {
        clickShowModal () {
            this.$modal.show('HelloModalName', { message: 'This text is fish' })
        }
    }
})

export default class TextFieldsPage extends Vue {}

</script>
