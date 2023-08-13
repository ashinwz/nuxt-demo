<template>
    <!-- add adaptive layout for the small screen with sidebar and footer-->
    <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/5">
            <Sidebar />
        </div>
        <div class="w-full md:w-4/5 flex justify-center flex-row">
            <!-- add the navbar for the page -->
            <div class="w-full md:w-4/5 absolute top-0">
                <Navbar />
            </div>
            <slot />
            <!-- add footer with layout on the bottom of the page -->
            <div class="w-full md:w-4/5 max-w-4xl absolute bottom-0 flex justify-center">
                <Footer />
            </div>
        </div>
    </div>
</template>
  
  