<template>
  <div>
    <h2>ssr</h2>
    <FooBar />
    <h2>client-only:</h2>
    <client-only>
      <FooBar />
    </client-only>
  </div>
</template>

<script>
import FooBar from "../components/FooBar.vue";

export default {
  name: "IndexPage",
  components: {
    FooBar,
  },
};
</script>
