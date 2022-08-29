<template>
  <div>
    <foo></foo>
    <bar></bar>
  </div>
</template>

<script>
import { foo, bar } from "rollup-npm-package-vue2-component";

export default {
  name: "FooBar",
  components: { foo, bar },
};
</script>
