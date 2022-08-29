const { foo, bar } = window.library;

new Vue({
  data() {
    return {
      title: 'Vanilla js vue app'
    }
  },
  components: {
    foo,
    bar,
  }
}).$mount('#app');