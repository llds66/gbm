<template>
    <svg aria-hidden="true" :style="{ width: size + 'px', height: size + 'px' }">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
    iconName: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '#333',
    },
    size: {
        type: [Number, String],
        default: 16,
    }
})
const symbolId = computed(() => `#icon-${props.iconName}`)
</script>