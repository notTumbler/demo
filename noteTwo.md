### 对mount函数增强，参数中同时存在el、template、render
> render>template>el

### 初始化顺序
> 生命周期 -> 事件监听 -> 渲染 -> beforeCreated -> 注入 -> state初始化 -> provide -> created

```js
  if(vm.$options.el){
    vm.$mount(vm.$options.el)
  }
```

在mountComponent()中，执行真正的挂载过程。
在创建过程中，创建了一个watcher实例监听数据变化，如果数据变化，则执行updateComponent();
其中的updateComponent()函数主要做了两件事情：render(生成vdom)、update(将vDom装换成dom)

