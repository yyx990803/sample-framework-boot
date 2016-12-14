const hasIRC = typeof requestIdleCallback !== 'undefined'

export default {
  beforeMount () {
    const render = this.$options.render
    this.$options.render = function delayedRender (h) {
      if (!hasIRC || this.hasRendered) {
        return render.call(this, h)
      } else if (!this.pendingRender) {
        this.pendingRender = true
        requestIdleCallback(() => {
          this.hasRendered = true
          this.$forceUpdate()
        })
      }
    }
  }
}
