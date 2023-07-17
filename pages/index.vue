<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <header class="bg-gray-600">
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


</template>
  
<script lang="ts" setup>
const navigation = [
{ name: 'Solutions', href: '#' },
{ name: 'Pricing', href: '#' },
{ name: 'Docs', href: '#' },
{ name: 'Company', href: '#' },
]

</script>