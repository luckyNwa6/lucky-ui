<template>
  <div>
    <span :class="wordClass">{{ content }}</span>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '你太酷啦！'
    },
    classType: {
      type: String,
      default() {
        return ['normal', 'hover', 'typewriting'].includes(this.classType)
          ? this.classType
          : 'normal'
      }
    }
  },
  computed: {
    wordClass() {
      if (this.classType === 'normal') {
        return 'lucky-word-normal'
      } else if (this.classType === 'hover') {
        return 'lucky-word-hover'
      } else {
        return 'lucky-word-normal'
      }
    }
  }
}
</script>

<style scoped>
.lucky-word-normal {
  /* 加上 -webkit- 注意兼容 */
  font-size: 1.5rem;
  display: inline;
  text-align: center;
  background-image: linear-gradient(
    to right,
    #f782a9 0%,
    #b48bd9 10%,
    #4ed9ab 40%,
    #ffd26b 60%,
    #f782a9 90%,
    #f782a9 100%
  );
  background-size: 200% auto;
  color: #000;
  font-size: 5rem;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 10s linear infinite;
  font-family: dancing script, cursive;
  font-weight: 700;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
/* 下面是悬浮时候的特效 */
.lucky-word-hover {
  /* 加上 -webkit- 注意兼容 */
  font-size: 1.5rem;
  display: inline;
  text-align: center;
  background-image: linear-gradient(
    to right,
    #f782a9 0%,
    #b48bd9 10%,
    #4ed9ab 40%,
    #ffd26b 60%,
    #f782a9 90%,
    #f782a9 100%
  );
  background-size: 200% auto;
  color: #000;
  font-size: 5rem;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 10s linear infinite;
  font-family: dancing script, cursive;
  font-weight: 700;
}
.lucky-word-hover:hover {
  animation: animate 0.5s linear infinite;
}

@keyframes animate {
  0%,
  25% {
    text-shadow: 2px 2px 2px #ff6384;
  }

  50% {
    text-shadow: 2px -2px 2px #d184a8;
  }

  75% {
    text-shadow: -2px 2px 2px #da74d4;
  }

  100% {
    text-shadow: -2px -2px 2px #aa2c76;
  }
}
</style>
