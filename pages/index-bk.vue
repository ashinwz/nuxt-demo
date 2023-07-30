<template>
    <div class="flex flex-col min-h-screen">
        <!-- header -->
        <header class="fixed top-0 left-0 w-full bg-gray-800 z-10">
            <nav class="max-w-8xl mx-auto px-2 sm:px-3 lg:px-3" aria-label="Top">
                <div class="w-full py-4 flex items-center justify-between border-b border-gray-500 lg:border-none">
                <div class="flex items-center">
                    <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="" />
                    </a>
                    <div class="hidden ml-10 space-x-8 lg:block">
                    <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-gray-50">
                        {{ link.name }}
                    </a>
                    </div>
                </div>
                <div class="ml-10 space-x-4">
                    <a href="#" class="inline-block bg-gray-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Sign in</a>
                    <a href="#" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">Sign up</a>
                </div>
                </div>
                <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-gray-50">
                    {{ link.name }}
                </a>
                </div>
            </nav>
        </header>

        <!-- main content -->
        <div class="bg-gray-50 flex-grow overflow-y-auto pt-16 pb-16">
            <div class="max-w-7xl mx-auto py-8 px-8">
                <div class="sm:flex sm:items-baseline sm:justify-between">
                    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
                    <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">Browse all categories<span aria-hidden="true"> &rarr;</span></a>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8 h-[40rem]">
                    <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 h-full">
                        <div class="object-center object-cover group-hover:opacity-75 bg-gray-500 h-full w-full">
                            <!-- Content goes here -->
                        </div>
                    </div>

                    <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 h-full">
                        <div class="object-center object-cover group-hover:opacity-75 bg-gray-500 h-full w-full">
                        </div>
                    </div>
                </div>
                <div class="mt-6 sm:hidden">
                    <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">Browse all categories<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
        </div>

        <!-- footer -->
        <footer class="fixed bottom-0 left-0 w-full bg-gray-800 z-10">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div class="flex justify-center space-x-6 md:order-2">
                <a v-for="item in footer" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </a>
            </div>
            <div class="mt-8 md:mt-0 md:order-1">
                <p class="text-center text-base text-gray-400">&copy; 2020 Workflow, Inc. All rights reserved.</p>
            </div>
            </div>
        </footer>
    </div>
</template>
  
<script lang="ts" setup>
import { defineComponent, h } from 'vue'

const navigation = [
{ name: 'Solutions', href: '#' },
{ name: 'Pricing', href: '#' },
{ name: 'Docs', href: '#' },
{ name: 'Company', href: '#' },
]

const footer = [
  {
    name: 'Facebook',
    href: '#',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  }
]

</script>