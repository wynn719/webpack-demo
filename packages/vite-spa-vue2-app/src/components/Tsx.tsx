import { defineComponent } from "@vue/composition-api";
import './Tsx.less';

const fn = () => console.log("fn");
const merge = (obj1: any, obj2: any) => ({ ...obj1, ...obj2 });

export default defineComponent({
  name: "bar",

  setup() {
    fn();
    merge({ name: "wynn" }, { age: 28 });

    return () => (
      <h1>Render tsx</h1>
    )
  },
});

