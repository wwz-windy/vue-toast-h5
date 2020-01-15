import ToastComponent from './vue-toast.vue'

const Toast = {};
Toast.install = function(Vue, options){
	console.log(Vue);
	const opt = {
		duration: 3000,
		...options
	}
	
	Vue.prototype.$toast = function(message, option){
		const opts = (typeof option == 'object') ? {...opt, ...option} : {...opt};
		
		const ToastController = Vue.extend(ToastComponent);
		let instance = new ToastController().$mount(document.createElement('div'));
		instance.visible = true;
		instance.message = message;
		instance.backgroundColor = opts.backgroundColor;
		
		document.body.appendChild(instance.$el);
		setTimeout(()=>{
			instance.visible = false;
			document.body.removeChild(instance.$el);
			if(typeof opts.closed == 'function') opts.closed();
		}, opts.duration)
	}
	
	Vue.prototype.$toast['show'] = function(message, option){
		Vue.prototype.$toast(message, option);
	}
	
	Vue.prototype.$toast['warn'] = function(message, option){
		let opts = {backgroundColor: '#faad14', ...option};
		Vue.prototype.$toast(message, opts);
	}
	
	Vue.prototype.$toast['info'] = function(message, option){
		let opts = {backgroundColor: '#1890ff', ...option};
		Vue.prototype.$toast(message, opts);
	}
	
	Vue.prototype.$toast['error'] = function(message, option){
		let opts = {backgroundColor: '#f5222d', ...option};
		Vue.prototype.$toast(message, opts);
	}
}

if(window.Vue){
	Vue.use(Toast);
}

export default Toast;
