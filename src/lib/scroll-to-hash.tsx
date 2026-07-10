import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const { pathname, hash } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    const cameFromAnotherRoute = prevPathname.current !== pathname
    prevPathname.current = pathname

    // Same-route hash clicks (navbar anchors) are already handled by the browser's
    // native fragment scroll + globals.css `scroll-behavior: smooth`. Only step in
    // for cross-route navigation, where react-router doesn't scroll to the hash itself.
    if (!hash || !cameFromAnotherRoute) return

    const id = hash.slice(1)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [pathname, hash])

  return null
}
