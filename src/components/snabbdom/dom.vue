<template>
  <div>
    <div>
      <button @click="change">change</button>
    </div>

    <div id="container">hello,dom</div>
    <Child>
      <div>
        <h2>hello, child</h2>
      </div>
    </Child>
    <hr />
    <button-counter></button-counter>
  </div>
</template>

<script type="text/x-template" id="anchored-heading-template">
<div>123</div>;
</script>


<script>
import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
import Child from "./child.vue";
import Vue from "vue";

Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  render: function (createEle) {
    return createEle(
      "button",
      {
        attrs: { id: "mydiv" },
        on: {
          click: () => {
            this.count++;
          },
        },
      },
      this.count
    );
  },
});

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

export default {
  methods: {
    change() {
      const helloNode2 = h("div.wrap#mydiv", { style: { color: "red" } }, [
        h("span", {}, "i am child111111111111"),
        h("div", { style: {} }),
        h("span", {}, "i am child2"),
      ]);

      patch(this.helloNode, helloNode2);
    },
  },
  components: {
    Child,
  },
  mounted() {
    const container = document.getElementById("container");

    const someFn = () => {};

    const vnode = h("div#container.two.classes", { on: { click: someFn } }, [
      h("span", { style: { fontWeight: "bold" } }, "This is bold"),
      " and this is just normal text",
      h("a", { props: { href: "/foo" } }, "I'll take you places!"),
    ]);
    // Patch into empty DOM element – this modifies the DOM as a side effect
    patch(container, vnode);

    this.helloNode = h("div.wrap#mydiv", { style: { color: "red" } }, [
      h("span", {}, "i am child1"),
      h("div", { style: {} }),
      h("span", {}, "i am child2"),
    ]);
    console.log(this.helloNode, "vNode");

    patch(vnode, this.helloNode);
  },
};
</script>