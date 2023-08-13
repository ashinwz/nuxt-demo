export default defineAppConfig({
  ui: {
    container: {
      constrained: 'max-w-5xl'
    },
    card: {
      class: 'p-4',
      background: "bg-background",
    },
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 right-0'
    }
  }
})
  