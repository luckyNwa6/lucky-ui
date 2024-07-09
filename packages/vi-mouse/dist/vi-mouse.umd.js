(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ViMouse = {}));
})(this, (function (exports) { 'use strict';

  //
  //
  //
  //

  var script = {
    mounted() {
      this.initCanvas();
      this.addEventListeners();
      this.drawPointsInterval = setInterval(this.drawPoints, 20);
    },
    beforeDestroy() {
      clearInterval(this.drawPointsInterval);
      this.removeEventListeners();
    },
    methods: {
      initCanvas() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.canvas = canvas;
        this.ctx = ctx;
      },
      addEventListeners() {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('click', this.handleMouseClick);
      },
      removeEventListeners() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('click', this.handleMouseClick);
      },
      handleMouseMove(evt) {
        for (let i = 0; i < 15; i++) {
          this.points.push({
            sx: evt.x,
            sy: evt.y,
            vx: 0.5 - Math.random(),
            vy: 0.5 - Math.random(),
            life: this.live,
            color: this.colors[parseInt(Math.random() * this.colors.length)],
            size: Math.random() * 5
          });
        }
      },
      handleMouseClick(evt) {
        this.clicks.push({
          sx: evt.x,
          sy: evt.y,
          color: this.colors[parseInt(Math.random() * this.colors.length)],
          life: this.live
        });
      },
      drawPoints() {
        const ctx = this.ctx;
        const canvas = this.canvas;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 绘制粒子
        for (let i = 0; i < this.points.length; i++) {
          const point = this.points[i];
          ctx.beginPath();
          ctx.arc(point.sx, point.sy, point.size, Math.PI * 2, false);
          ctx.fillStyle = `rgba(${point.color},${point.life / this.live})`;
          ctx.fill();
          point.life--;
          if (point.life <= 0) {
            this.points.splice(i, 1);
          }
          point.sx += point.vx * 3;
          point.sy += point.vy * 3;
        }

        // 绘制点击效果
        for (let i = 0; i < this.clicks.length; i++) {
          const click = this.clicks[i];
          ctx.beginPath();
          ctx.arc(click.sx, click.sy, this.live - click.life, Math.PI * 2, false);
          ctx.fillStyle = `rgba(${click.color},${click.life / this.live})`;
          ctx.fill();
          click.life--;
          if (click.life <= 0) {
            this.clicks.splice(i, 1);
          }
        }
      }
    },
    data() {
      return {
        canvas: null,
        ctx: null,
        points: [],
        clicks: [],
        live: 50,
        colors: ['236, 204, 104', '255, 71, 87', '112, 161, 255', '123, 237, 159'],
        drawPointsInterval: null
      };
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
    return _c("canvas", {
      ref: "canvas",
      staticStyle: {
        position: "absolute",
        left: "0",
        top: "0",
        "pointer-events": "none",
      },
    })
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

  exports["default"] = __vue_component__;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vi-mouse.umd.js.map
