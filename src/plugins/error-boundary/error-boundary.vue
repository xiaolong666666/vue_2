<template>
  <div><slot></slot></div>
</template>

<script>
export default {
  name: "error-boundary",
  data() {
    return {
      hasError: null,
      errorInfo: null,
    };
  },
  // 全局处理错误
  // Vue.config.errorHandler
  errorCaptured: (err, vm, info) => {
    console.log(err.message, vm, info);
    // 处理错误后 返回 true 不再向上传递
    return true;
  },
};
</script>
