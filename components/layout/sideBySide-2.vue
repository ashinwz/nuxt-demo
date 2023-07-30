<template>
    <!-- main content -->
    <div class="bg-gray-200 flex-grow overflow-y-auto pt-16 pb-16">
        <div class="max-w-7xl mx-auto py-16 px-8">
            <div class="sm:flex sm:items-baseline sm:justify-between">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Search Panel</h2>
                <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">Download as Excel<span aria-hidden="true"> &darr;</span></a>
            </div>
            <div class="mt-6 grid grid-cols-3 gap-y-6 sm:gap-x-6 lg:gap-8 h-[40rem]">
                <div class="aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 col-span-1 h-full relative">
                    <div class="object-center object-cover group-hover:opacity-75 bg-gray-200 h-full w-full flex flex-col">
                        <!-- Content goes here -->
                        <textarea class="w-full p-4 rounded-md mb-2 " rows="25" placeholder="Enter text here"></textarea>
                        <button class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500">Button</button>
                    </div>
                </div>

                <div class="aspect-w-2 aspect-h-1 overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 col-span-2 h-full">
                    <div class="object-center object-cover group-hover:opacity-75 bg-white h-full w-full border-1 border-gray-800">
                    <div class="max-h-[40rem] overflow-y-auto">
                        <table class="min-w-full divide-y divide-gray-300">
                        <thead class="sticky top-0 bg-indigo-600 z-10">
                            <tr>
                            <th scope="col" class="py-3 px-4 text-left text-lg font-medium uppercase tracking-wide text-white">ID</th>
                            <th scope="col" class="py-3 px-4 text-left text-lg font-medium uppercase tracking-wide text-white relative">
                                Numbers
                                <button @click="copyNumbers1" class="text-white hover:bg-gray-800 opacity-75 px-2 py-2 rounded-md relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                    </svg>
                                    <div v-if="showCopied1" class="absolute top-0 -right-[4.5rem] rounded-sm transform translate-x-full translate-y-1/2 bg-black text-white text-sm py-1 px-3 z-20 transition duration-300 opacity-100 animate-fadeIn">Copied</div>
                                </button>
                            </th>
                            <th scope="col" class="py-3 px-4 text-left text-lg font-medium uppercase tracking-wide text-white relative">
                                Numbers
                                <button @click="copyNumbers2" class="text-white hover:bg-gray-800 opacity-75 px-2 py-2 rounded-md relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                    </svg>
                                    <div v-if="showCopied2" class="absolute top-0 -right-[4.5rem] rounded-sm transform translate-x-full translate-y-1/2 bg-black text-white text-sm py-1 px-3 z-20 transition duration-300 opacity-100 animate-fadeIn">Copied</div>
                                </button>
                            </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="each in message" :key="message.input">
                            <td class="whitespace-nowrap py-3 px-4 text-lg font-medium text-gray-900">{{ each.id }}</td>
                            <td class="whitespace-nowrap py-3 px-4 text-lg font-medium text-gray-900">{{ each.input }}</td>
                            <td class="whitespace-nowrap py-3 px-4 text-lg text-gray-500">{{ each.output }}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
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
import { ref } from 'vue';
const message = ref([
  { id: 1, input: "1111111111", output: "1111111111"},
  { id: 2, input: "1111111111", output: "1111111111"},
  { id: 3, input: "1111111111", output: "1111111111"}
  // More people...
]);

const showCopied1 = ref(false);
const showCopied2 = ref(false);

const copyNumbers2 = () => {
  const numbers = message.value.map((item) => item.input).join('\n');
  navigator.clipboard.writeText(numbers).then(() => {
    showCopied2.value = true;
    setTimeout(() => {
      showCopied2.value = false;
    }, 1000);
  });
};
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s forwards;
}
</style>
