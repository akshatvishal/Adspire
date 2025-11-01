import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.2,   /* seconds */
  easing: (t: number) => t,  /* custom easing fn */
  smooth: true,
})

