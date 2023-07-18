## mn-confirm

### Installation

```bash
$ npm install mn-confirm
```

### Set up

```JS
// Vuejs
import { createApp } from 'vue'
import App from './App.vue'
// import mn-confirm
import mnConfirm from 'mn-confirm';
// Import Css
import 'mn-confirm/dist/style.css'

const app = createApp(App)
// Use mn-confirm in the app
app.use(mnConfirm)
// Mount the app
app.mount('#app')
```
### Props
| props   | type  |
| ------------- | ------------- |
| title  | string  |
| message  | string  |
| okButton | string |
| cancelButton | string |

### Usage

```html
<template>
  <div>
    <p v-for="item in items" :key="item.id">
      <span>{{item}}</span> - <button @click="deleteItem(item)"><span>&times;</span></button></button>
    </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: "VueJs" },
          { id: 2, name: "JavaScript" },
          { id: 3, name: "mn-confirm" },
        ],
      };
    },
    methods: {
      async deleteItem(item) {
        const hasConfirmed = await this.$confirm({
          title: "Attention",
          message: `${item.name} will be deleted`,
          okButton: "Ok for me",
          cancelButton: "Not sure !",
        });
        if (hasConfirmed) {
          this.items = this.items.filter((el) => el.id != item.id);
        }
      },
    },
  };
</script>
```
### Demo

![exemple](./docs/exemple.gif)

### License
MIT