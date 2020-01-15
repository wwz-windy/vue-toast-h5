# vue-toast-h5

a H5 toast plugin for vue

## Usage

```javascript

import VueToast from 'vue-toast-h5'

Vue.use(VueToast)

/**
 * duration: 多长时间后关闭，
 * closed: 关闭后执行的回调方法
 */ 
this.$toast.show("hello vue toast", {
	duration: 3000,
	closed: ()=>{
		this.$toast.info('info message');
	}}
)

this.$toast.info("hello vue toast")

this.$toast.warn("hello vue toast")

this.$toast.error("hello vue toast")
```
