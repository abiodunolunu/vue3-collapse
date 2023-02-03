# Vue3 Collapse

A simple, customizable and highly performant Vue 3 component for collapsing elements with support for transitions and easings.

Features:

- v-model support for toggle value
- duration and easing options
- optional withOpacity to control the opacity during the collapse transition
- highly performant, uses vue's built-in computed properties and hooks
- clean and modular code structure, easy to extend and customize

It uses the `MutationObserver` API to observe changes to the target element and updates its height and opacity as needed. It also sets up event listeners for the `resize` event to ensure the collapsing effect is responsive to window changes.

### Installation and usage

```
npm install vue3-collapse
```

You can use register it globally like this:

```javascript
import vue3Collapse from "vue3Collapse";
import App from "./App.vue";
import { createApp } from "vue";

const app = createApp(App);

app.component("vue3-collapse", vue3Collapse);
```

then use it this in your component:

`<vue3-collapse />`

Alternatively, you can use it directly:

```vue
<!-- your-component.vue -->

<template>
  <vue3-collapse v-model="open">
    <content-to-collapse />
  </vue3-collapse>
</template>

<script>
import { defineComponent } from "vue";
import vue3Collapse from "vue3Collapse";

export default defineComponent({
  components: {
    vue3Collapse,
  },
});
</script>
```

### Browser with CDN

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue3-collapse"></script>
```

```javascript
const { createApp } = Vue;
const App = {
  //Component code...
};
const app = createApp(App);
app.component("vue3Collapse", Vue3Collapse);
app.mount("#app");
```

**Vue3Collapse uses v-model to toggle its collapsed state :**

```vue
<vue3-collapse v-model="open">
    <content-to-collapse />
</vue3-collapse>
```

##Slot

This component uses slot to the content you want to collapse. Like this:

```vue
<vue3-collapse v-model="open">
    <content-to-collapse />
</vue3-collapse>
```

## Props

| Prop                   | Description                                            | Type             | Default |
| ---------------------- | ------------------------------------------------------ | ---------------- | ------- |
| modelValue (required)  | The value to be passed as v-model, should be a boolean | Boolean          | N/A     |
| duration (optional)    | The duration of the animation in milliseconds          | String Or Number | 500     |
| withOpacity (optional) | Whether to include an opacity animation                | Boolean          | True    |
| easing (optional)      | The easing function to be applied to the animation     | String           | linear  |

**Note**: The available easing options are listed in a separate table below.

The value of the easing prop can be any of these options (on the left)

| Option         | Easing function                     |
| -------------- | ----------------------------------- |
| linear         | linear                              |
| ease           | ease                                |
| easeIn         | ease-in                             |
| easeOut        | ease-out                            |
| easeInOut      | ease-in-out                         |
| easeInSine     | cubic-bezier(0.12, 0, 0.39, 0)      |
| easeOutSine    | cubic-bezier(0.61, 1, 0.88, 1)      |
| easeInOutSine  | cubic-bezier(0.37, 0, 0.63, 1)      |
| easeInQuad     | cubic-bezier(0.11, 0, 0.5, 0)       |
| easeOutQuad    | cubic-bezier(0.5, 1, 0.89, 1)       |
| easeInOutQuad  | cubic-bezier(0.45, 0, 0.55, 1)      |
| easeInCubic    | cubic-bezier(0.32, 0, 0.67, 0)      |
| easeOutCubic   | cubic-bezier(0.33, 1, 0.68, 1)      |
| easeInOutCubic | cubic-bezier(0.65, 0, 0.35, 1)      |
| easeInQuart    | cubic-bezier(0.5, 0, 0.75, 0)       |
| easeOutQuart   | cubic-bezier(0.25, 1, 0.5, 1)       |
| easeInOutQuart | cubic-bezier(0.76, 0, 0.24, 1)      |
| easeInQuint    | cubic-bezier(0.64, 0, 0.78, 0)      |
| easeOutQuint   | cubic-bezier(0.22, 1, 0.36, 1)      |
| easeInOutQuint | cubic-bezier(0.83, 0, 0.17, 1)      |
| easeInExpo     | cubic-bezier(0.7, 0, 0.84, 0)       |
| easeOutExpo    | cubic-bezier(0.16, 1, 0.3, 1)       |
| easeInOutExpo  | cubic-bezier(0.87, 0, 0.13, 1)      |
| easeInCirc     | cubic-bezier(0.55, 0, 1, 0.45)      |
| easeOutCirc    | cubic-bezier(0, 0.55, 0.45, 1)      |
| easeInOutCirc  | cubic-bezier(0.85, 0, 0.15, 1)      |
| easeInBack     | cubic-bezier(0.36, 0, 0.66, -0.56)  |
| easeOutBack    | cubic-bezier(0.34, 1.56, 0.64, 1)   |
| easeInOutBack  | cubic-bezier(0.68, -0.6, 0.32, 1.6) |
