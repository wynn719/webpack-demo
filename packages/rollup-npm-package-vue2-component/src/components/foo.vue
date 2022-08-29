<template>
  <div class="foo">foo</div>
</template>

<script>
import { isFoo } from "@/utils";

const fn = () => console.log('fn');
const merge = (obj1, obj2) => ({ ...obj1, ...obj2 });

export default {
  name: 'foo',

  created() {
    fn();
    merge({ name: 'wynn' }, { age: 28 });
    isFoo();
  }
}
</script>

<style lang="less" scoped>
.foo {
  background-color: green;
}
</style>