<template>
    <div class="wrapper">
        <Datepicker v-model="selectedDate" :format-locale="ja" />

        <h1>Show Year Picker On Open</h1>
        <Datepicker v-model="selectedDate" :format-locale="ja" :show-year-picker-on-open="true" />
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import Datepicker from '../src/VueDatePicker/VueDatePicker.vue';
    import { ja } from 'date-fns/locale';

    const selectedDate = ref();
</script>

<style lang="scss">
    .wrapper {
        padding: 200px;
    }
</style>
