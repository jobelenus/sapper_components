import { writable, derived } from 'svelte/store'

let _toasts = writable([])
let idx
_toasts.subscribe(current => {
  idx = current.length
})

export function toast ({label, message, success, error}) {
  let addedIdx = idx
  setTimeout(() => {
    _toasts.update(current => current.filter(t => t.idx != addedIdx))
  }, 2500)
  _toasts.update(current => [...current, {idx, label, message, success, error}])
}
export function clear () {
  _toasts.set([])
}
export let toasts = derived(_toasts, $a => $a || [])  // keeps writable store private, exposes reads