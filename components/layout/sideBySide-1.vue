<template>
    <!-- main content -->
    <div class="bg-gray-50 flex-grow overflow-y-auto pt-16 pb-16">
        <div class="max-w-7xl mx-auto py-16 px-8">
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
</template>

<script lang="ts" setup>
</script>
