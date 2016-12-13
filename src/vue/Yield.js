const hasIRC = typeof requestIdleCallback !== 'undefined'

export default {
  render (h) {
    if (this._isMounted || !hasIRC) {
      return this.$slots.default[0]
    } else {
      requestIdleCallback(() => {
        this.$forceUpdate()
      })
    }
  }
}
