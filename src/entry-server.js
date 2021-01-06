import createApp from './app';

// 服务端会调用此函数 产生新的app实例
// 在服务端跑的

export default (context) => new Promise(resolve => {
  const { vm, router, store } = createApp();
  // let meta = vm.$meta  // 注意这个地方不能解构  保证this指向
  // 如果服务端 启动时 直接访问 /foo 返回的页面永远都是 index.html 需要通过路由跳转到指定路径
  // 防止路由中的异步逻辑 服务端专有的方法

  // 需要把当前页面中匹配到的组件 找到asyncData方法让他执行
  router.push(context.url);

  // 等待路由执行完成的回调
  router.onReady(() => {
    // 获取当前路径匹配到的组件 看一下 这个组件中 有没有asyncData方法
    const matchesComponents = router.getMatchedComponents();
    Promise.all(
      matchesComponents.map(component => {
        if (component.asyncData) {
          return component.asyncData({ store });
        }
      }),
    ).then(() => {
      // 把vuex中的状态 挂载 到上下文中的state上
      context.state = store.state;
      context.meta = vm.$meta();
      // 会自动在window上挂载一个属性 __INITIAL_STATE__
      resolve(vm);
    });
  });
});
