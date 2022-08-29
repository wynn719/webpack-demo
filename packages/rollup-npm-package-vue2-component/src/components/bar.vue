<template>
  <div class="bar">bar</div>
</template>

<script>
const fn = () => console.log('fn');
const merge = (obj1, obj2) => ({ ...obj1, ...obj2 });

export default {
  name: 'bar',
  
  created() {
    fn();
    merge({ name: 'wynn' }, { age: 28 });
  }
}
</script>

<style lang="less" scoped>
.bar {
  background-color: blue;
}
</style>