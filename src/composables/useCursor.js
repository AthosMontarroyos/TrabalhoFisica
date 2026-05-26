import { onMounted, onBeforeUnmount } from 'vue'

export function useCursor() {
  onMounted(() => {
    const cursor = document.getElementById('cursor')
    if (!cursor) return

    const handler = e => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', handler)

    // cleanup not trivial with addEventListener, but store reference
    // We'll use _handler for cleanup
    cursor._handler = handler
  })

  onBeforeUnmount(() => {
    const cursor = document.getElementById('cursor')
    if (cursor && cursor._handler) {
      document.removeEventListener('mousemove', cursor._handler)
    }
  })
}
