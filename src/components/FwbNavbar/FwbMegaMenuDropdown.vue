<template>
    <div  id="mega-menu-full-cta-dropdown" :class="megaMenuVisble == false ? 'hidden' : ''" class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <slot name="default"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, toRef, inject } from 'vue'

const { megaMenuVisble, toggleMenu } = inject('megaMenuToggle')
</script>
