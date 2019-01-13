var MyButtton = {
  props: ['href', 'tag'],
  // template: `
  //   <a v-if="(!tag && href) || tag === 'a'" :href="href || '#'">
  //     <slot></slot>
  //   </a>
  //   <span v-else-if="tag === 'span'">
  //     <slot></slot>
  //   </span>
  //   <button v-else>
  //     <slot></slot>
  //   </button>
  // `

  // 描画関数
  render: function (createElement) {
    var tag = this.tag || (this.href ? 'a' : 'button')

    return createElement(tag, {
      attrs: {
        href: this.href || '#'
      }
    }, this.$slots.default)
  }
}

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement('my-button', {
      attrs: {
        href: this.url
      },
      props: {
        tag: 'a'
      }
    })
  },
  components: {
    MyButtton: MyButtton
  }
})