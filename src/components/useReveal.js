import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) } }), { threshold: 0.1 })
    document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
