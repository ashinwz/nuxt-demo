<script setup>
const toast = useToast()
</script>

<template>
  <URadio label="Label" required />

  <UButton label="Show toast" @click="toast.add({ title: 'Hello world!' })" />
</template>
