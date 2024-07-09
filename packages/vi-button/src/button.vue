<template>
  <!-- 这边同步组件里的button就能查看代码样式了 -->
  <button :class="buttonClass" @click="$emit('click')">
    <slot></slot><span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  name: 'vi-button',
  props: {
    buttonType: {
      type: String,
      default() {
        return ['cool', 'success', 'info', 'warning', 'danger'].includes(this.buttonType)
          ? this.buttonType
          : 'cool'
      }
    }
  },
  computed: {
    buttonClass() {
      if (this.buttonType === 'cool') {
        return 'lucky-button-cool'
      } else if (this.buttonType === 'success') {
        return 'lucky-button-success'
      } else if (this.buttonType === 'info') {
        return 'lucky-button-info'
      } else if (this.buttonType === 'warning') {
        return 'lucky-button-warning'
      } else if (this.buttonType === 'danger') {
        return 'lucky-button-danger'
      } else {
        return 'lucky-button-cool'
      }
    }
  }
}
</script>
<style scoped>
/* 成功的样式 */
.lucky-button-success {
  padding: 7px 14px;
  letter-spacing: 2px;
  border-radius: 8px;
  margin-right: 23px;
  color: blueviolet;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
}
.lucky-button-success:hover {
  border-radius: 5px;
  color: blueviolet;
  background: #03e9f4;
  box-shadow: 0 0 2px 0 #03e9f4, 0 0 25px 0 #03e9f4, 0 0 50px 0 #03e9f4, 0 0 100px 0 #03e9f4;
  transition: all 0.2s linear;
  font-weight: 700;
  border-radius: 5px;
}

/* 消息的样式 */
.lucky-button-info {
  padding: 7px 14px;
  letter-spacing: 2px;
  border-radius: 8px;
  margin-right: 23px;
  color: rgb(255, 29, 244);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
}

.lucky-button-info:hover {
  border-radius: 5px;
  color: rgb(255, 29, 244);
  background: #03e9f4;
  box-shadow: 0 0 2px 0 #03e9f4, 0 0 25px 0 #03e9f4, 0 0 50px 0 #03e9f4, 0 0 100px 0 #03e9f4;
  transition: all 0.2s linear;
  font-weight: 700;
  border-radius: 5px;
}

/* 警告的样式 */
.lucky-button-warning {
  padding: 7px 14px;
  letter-spacing: 2px;
  border-radius: 8px;
  margin-right: 23px;
  color: rgb(103, 152, 30);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
}
.lucky-button-warning:hover {
  border-radius: 5px;
  color: rgb(103, 152, 30);
  background: #03e9f4;
  box-shadow: 0 0 2px 0 #03e9f4, 0 0 25px 0 #03e9f4, 0 0 50px 0 #03e9f4, 0 0 100px 0 #03e9f4;
  transition: all 0.2s linear;
  font-weight: 700;
  border-radius: 5px;
}

/* 危险的样式 */
.lucky-button-danger {
  padding: 7px 14px;
  letter-spacing: 2px;
  border-radius: 8px;
  color: red;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
}

.lucky-button-danger:hover {
  border-radius: 5px;
  color: #f1520d;
  background: #03e9f4;
  box-shadow: 0 0 2px 0 #03e9f4, 0 0 25px 0 #03e9f4, 0 0 50px 0 #03e9f4, 0 0 100px 0 #03e9f4;
  transition: all 0.2s linear;
  font-weight: 700;
  border-radius: 5px;
}

/*默认按钮的样式 */
.lucky-button-cool {
  padding: 7px 14px;
  color: black;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 8px;
  margin-right: 23px;
  /* left: 30%; */
  /* font-family: '黑体'; */
  font-weight: 600;
  /* font-size: 15px; */
}

.lucky-button-cool:hover {
  border-radius: 5px;
  color: #fff;
  background: #03e9f4;
  box-shadow: 0 0 2px 0 #03e9f4, 0 0 25px 0 #03e9f4, 0 0 50px 0 #03e9f4, 0 0 100px 0 #03e9f4;
  transition: all 0.2s linear;
}

.lucky-button-cool > span,
.lucky-button-success > span,
.lucky-button-info > span,
.lucky-button-warning > span,
.lucky-button-danger > span {
  position: absolute;
}

.lucky-button-cool > span:nth-child(1),
.lucky-button-success > span:nth-child(1),
.lucky-button-info > span:nth-child(1),
.lucky-button-warning > span:nth-child(1),
.lucky-button-danger > span:nth-child(1) {
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(left, transparent, #03e9f4);
  left: -100%;
  top: 0px;
  animation: line1 1s linear infinite;
}

@keyframes line1 {
  50%,
  100% {
    left: 100%;
  }
}

.lucky-button-cool > span:nth-child(2),
.lucky-button-success > span:nth-child(2),
.lucky-button-info > span:nth-child(2),
.lucky-button-warning > span:nth-child(2),
.lucky-button-danger > span:nth-child(2) {
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(top, transparent, #03e9f4);
  right: 0px;
  top: -100%;
  animation: line2 1s 0.25s linear infinite;
}

@keyframes line2 {
  50%,
  100% {
    top: 100%;
  }
}

.lucky-button-cool > span:nth-child(3),
.lucky-button-success > span:nth-child(3),
.lucky-button-info > span:nth-child(3),
.lucky-button-warning > span:nth-child(3),
.lucky-button-danger > span:nth-child(3) {
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(left, #03e9f4, transparent);
  left: 100%;
  bottom: 0px;
  animation: line3 1s 0.75s linear infinite;
}

@keyframes line3 {
  50%,
  100% {
    left: -100%;
  }
}

.lucky-button-cool > span:nth-child(4),
.lucky-button-success > span:nth-child(4),
.lucky-button-info > span:nth-child(4),
.lucky-button-warning > span:nth-child(4),
.lucky-button-danger > span:nth-child(4) {
  width: 1px;
  height: 100%;
  background: -webkit-linear-gradient(top, transparent, #03e9f4);
  left: 0px;
  top: 100%;
  animation: line4 1s 2s linear infinite;
}

@keyframes line4 {
  50%,
  100% {
    top: -100%;
  }
}
</style>
