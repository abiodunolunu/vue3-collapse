<script setup lang='ts'>
import { computed, ref } from 'vue';
import useCollapser from '../composables/collapse';
import { easingFunctions } from '../Easings';
import { EasingFunctionKey } from '../types';

interface Props {
    modelValue: boolean
    duration?: number | string,
    easing?: EasingFunctionKey
    withOpacity?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    duration: 500,
    easing: 'linear',
    withOpacity: true
});


const eleRef = ref<HTMLDivElement>()

useCollapser(computed(() => eleRef.value), computed(() => props.modelValue), computed(() => props.withOpacity))


const styles = computed(() => {
    return {
        overflow: 'hidden',
        'transition-property': 'all',
        'transition-timing-function': easingFunctions[props.easing],
        'transition-duration': `${props.duration}ms`
    }
})
</script>

<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<template>
    <div ref="eleRef" :style="styles">
        <slot />
    </div>
</template>

<style scoped>

</style>