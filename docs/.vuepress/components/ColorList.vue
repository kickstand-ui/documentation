<template>
    <div>
        <div class="mb-lg" v-for="color in colors" :key="color" style="text-transform: capitalize;">
            <div :class="`bg-${color} p-sm text-md`">{{color}}</div>
            <ks-row position="stretch" class=" p-xs">
                <ks-column v-for="variation in variations" :key="`${color}-${variation}`" :class="`bg-${color}${variation === 'base' ? '' : '-' + variation} p-sm`">
                    <span>{{color}} {{variation}}</span>
                </ks-column>
            </ks-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                colors: ['primary', 'secondary', 'success', 'info', 'warning', 'success', 'danger', 'light', 'dark'],
                variations: ['lighter', 'light', 'base', 'dark', 'darker']
            }
        }
    }
</script>
