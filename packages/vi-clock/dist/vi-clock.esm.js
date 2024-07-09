//
//
//
//
//
//

var script = {
  props: {
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 80
    },
    hoverStyle: {
      type: String,
      default: 'rgba(235, 133, 201, 0.8)'
    }
  },
  computed: {
    canvasStyle() {
      return {
        opacity: '0.5',
        transition: '0.2s linear',
        borderRadius: '5px',
        background: 'transparent',
        ':hover': {
          opacity: '1',
          background: this.hoverStyle
        }
      };
    }
  },
  methods: {
    createCanvas() {
      let canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      let ctx = canvas.getContext('2d');
      let wd = ['日', '一', '二', '三', '四', '五', '六'];
      const canvasContainer = this.$refs.canvasContainer;
      canvasContainer.appendChild(canvas);
      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let d = new Date();
        let timenow = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2);
        let datenow = d.getFullYear() + '年' + (' ' + (d.getMonth() + 1)).slice(-2) + '月' + (' ' + d.getDate()).slice(-2) + '日';
        let wnow = wd[d.getDay()];
        ctx.fillStyle = 'gray';
        ctx.font = '30px Pix Font';
        ctx.fillText(timenow, 12, 32);
        ctx.font = '18px Pix Font';
        ctx.fillText(datenow, 12, 62);
        ctx.font = '40px Pix Font';
        ctx.fillText(wnow, 152, 52);
        ctx.fillStyle = 'black';
        ctx.font = '30px Pix Font';
        ctx.fillText(timenow, 10, 30);
        ctx.font = '18px Pix Font';
        ctx.fillText(datenow, 10, 60);
        ctx.font = '40px Pix Font';
        ctx.fillText(wnow, 150, 50);
      }
      setInterval(draw, 100);
    }
  },
  mounted() {
    this.createCanvas();
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }
  // Vue.extend constructor export interop.
  const options = typeof script === 'function' ? script.options : script;
  // render functions
  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true;
    // functional template
    if (isFunctionalTemplate) {
      options.functional = true;
    }
  }
  // scopedId
  if (scopeId) {
    options._scopeId = scopeId;
  }
  let hook;
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context = context ||
      // cached call
      this.$vnode && this.$vnode.ssrContext ||
      // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }
      // inject component styles
      if (style) {
        style.call(this, createInjectorSSR(context));
      }
      // register component module identifier for async chunk inference
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }
  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      const originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      const existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return script;
}

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", { ref: "canvasContainer" })])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

__vue_component__.install = function (Vue) {
  Vue.component(__vue_component__.name, __vue_component__);
};

export { __vue_component__ as default };
//# sourceMappingURL=vi-clock.esm.js.map
