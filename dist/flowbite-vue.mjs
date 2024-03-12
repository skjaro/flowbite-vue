import { reactive as so, onBeforeMount as oo, onBeforeUnmount as no, defineComponent as C, openBlock as u, createElementBlock as g, unref as y, renderSlot as w, computed as c, ref as R, onMounted as He, normalizeClass as x, createCommentVNode as P, createElementVNode as f, useAttrs as ae, mergeProps as re, useSlots as De, toRefs as Y, toDisplayString as M, createBlock as H, resolveDynamicComponent as X, withCtx as j, resolveComponent as be, normalizeProps as Se, Fragment as q, renderList as Me, withModifiers as wt, isRef as Xt, getCurrentScope as ao, onScopeDispose as lo, getCurrentInstance as is, nextTick as Zt, watch as kt, watchEffect as io, createTextVNode as te, Comment as uo, toRef as nt, createVNode as ze, Transition as ds, normalizeStyle as et, pushScopeId as us, popScopeId as cs, withKeys as fs, provide as de, inject as Q, withDirectives as Te, vShow as co, guardReactiveProps as ps, h as pt, TransitionGroup as fo, withScopeId as po, vModelCheckbox as gs, vModelDynamic as go, vModelRadio as ho, vModelText as hs, vModelSelect as mo } from "vue";
let ms = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, r) => (r &= 63, r < 36 ? t += r.toString(36) : r < 62 ? t += (r - 26).toString(36).toUpperCase() : r > 62 ? t += "-" : t += "_", t), "");
const Rt = so({});
function ut(e, t) {
  return oo(() => {
    e && (Rt[e] = {
      id: e,
      flush: t?.flush ?? !1,
      alwaysOpen: t?.alwaysOpen ?? !1,
      openFirstItem: t?.openFirstItem ?? !0,
      panels: {}
    });
  }), no(() => {
    e && delete Rt[e];
  }), {
    accordionsStates: Rt
  };
}
const bo = ["data-accordion-id"], Qf = /* @__PURE__ */ C({
  __name: "FwbAccordion",
  props: {
    alwaysOpen: { type: Boolean, default: !1 },
    openFirstItem: { type: Boolean, default: !0 },
    flush: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, r = ms();
    return ut(r, { ...t }), (s, o) => (u(), g("div", { "data-accordion-id": y(r) }, [
      w(s.$slots, "default")
    ], 8, bo));
  }
});
function vo() {
  for (var e = 0, t, r, s = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = bs(t)) && (s && (s += " "), s += r);
  return s;
}
function bs(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", s = 0; s < e.length; s++)
    e[s] && (t = bs(e[s])) && (r && (r += " "), r += t);
  return r;
}
var er = "-";
function yo(e) {
  var t = xo(e), r = e.conflictingClassGroups, s = e.conflictingClassGroupModifiers, o = s === void 0 ? {} : s;
  function n(l) {
    var i = l.split(er);
    return i[0] === "" && i.length !== 1 && i.shift(), vs(i, t) || wo(l);
  }
  function a(l, i) {
    var d = r[l] || [];
    return i && o[l] ? [].concat(d, o[l]) : d;
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  };
}
function vs(e, t) {
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], s = t.nextPart.get(r), o = s ? vs(e.slice(1), s) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var n = e.join(er);
    return t.validators.find(function(a) {
      var l = a.validator;
      return l(n);
    })?.classGroupId;
  }
}
var mr = /^\[(.+)\]$/;
function wo(e) {
  if (mr.test(e)) {
    var t = mr.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function xo(e) {
  var t = e.theme, r = e.prefix, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = _o(Object.entries(e.classGroups), r);
  return o.forEach(function(n) {
    var a = n[0], l = n[1];
    Gt(l, s, a, t);
  }), s;
}
function Gt(e, t, r, s) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var n = o === "" ? t : br(t, o);
      n.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (ko(o)) {
        Gt(o(s), t, r, s);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(function(a) {
      var l = a[0], i = a[1];
      Gt(i, br(t, l), r, s);
    });
  });
}
function br(e, t) {
  var r = e;
  return t.split(er).forEach(function(s) {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}
function ko(e) {
  return e.isThemeGetter;
}
function _o(e, t) {
  return t ? e.map(function(r) {
    var s = r[0], o = r[1], n = o.map(function(a) {
      return typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(function(l) {
        var i = l[0], d = l[1];
        return [t + i, d];
      })) : a;
    });
    return [s, n];
  }) : e;
}
function Co(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  function o(n, a) {
    r.set(n, a), t++, t > e && (t = 0, s = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(a) {
      var l = r.get(a);
      if (l !== void 0)
        return l;
      if ((l = s.get(a)) !== void 0)
        return o(a, l), l;
    },
    set: function(a, l) {
      r.has(a) ? r.set(a, l) : o(a, l);
    }
  };
}
var ys = "!";
function $o(e) {
  var t = e.separator || ":", r = t.length === 1, s = t[0], o = t.length;
  return function(a) {
    for (var l = [], i = 0, d = 0, p, m = 0; m < a.length; m++) {
      var v = a[m];
      if (i === 0) {
        if (v === s && (r || a.slice(m, m + o) === t)) {
          l.push(a.slice(d, m)), d = m + o;
          continue;
        }
        if (v === "/") {
          p = m;
          continue;
        }
      }
      v === "[" ? i++ : v === "]" && i--;
    }
    var h = l.length === 0 ? a : a.substring(d), b = h.startsWith(ys), k = b ? h.substring(1) : h, $ = p && p > d ? p - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: b,
      baseClassName: k,
      maybePostfixModifierPosition: $
    };
  };
}
function So(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(s) {
    var o = s[0] === "[";
    o ? (t.push.apply(t, r.sort().concat([s])), r = []) : r.push(s);
  }), t.push.apply(t, r.sort()), t;
}
function To(e) {
  return {
    cache: Co(e.cacheSize),
    splitModifiers: $o(e),
    ...yo(e)
  };
}
var Po = /\s+/;
function Fo(e, t) {
  var r = t.splitModifiers, s = t.getClassGroupId, o = t.getConflictingClassGroupIds, n = /* @__PURE__ */ new Set();
  return e.trim().split(Po).map(function(a) {
    var l = r(a), i = l.modifiers, d = l.hasImportantModifier, p = l.baseClassName, m = l.maybePostfixModifierPosition, v = s(m ? p.substring(0, m) : p), h = !!m;
    if (!v) {
      if (!m)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (v = s(p), !v)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      h = !1;
    }
    var b = So(i).join(":"), k = d ? b + ys : b;
    return {
      isTailwindClass: !0,
      modifierId: k,
      classGroupId: v,
      originalClassName: a,
      hasPostfixModifier: h
    };
  }).reverse().filter(function(a) {
    if (!a.isTailwindClass)
      return !0;
    var l = a.modifierId, i = a.classGroupId, d = a.hasPostfixModifier, p = l + i;
    return n.has(p) ? !1 : (n.add(p), o(i, d).forEach(function(m) {
      return n.add(l + m);
    }), !0);
  }).reverse().map(function(a) {
    return a.originalClassName;
  }).join(" ");
}
function zo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var s, o, n, a = l;
  function l(d) {
    var p = t[0], m = t.slice(1), v = m.reduce(function(h, b) {
      return b(h);
    }, p());
    return s = To(v), o = s.cache.get, n = s.cache.set, a = i, i(d);
  }
  function i(d) {
    var p = o(d);
    if (p)
      return p;
    var m = Fo(d, s);
    return n(d, m), m;
  }
  return function() {
    return a(vo.apply(null, arguments));
  };
}
function V(e) {
  var t = function(s) {
    return s[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ws = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ao = /^\d+\/\d+$/, Io = /* @__PURE__ */ new Set(["px", "full", "screen"]), Mo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Oo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Bo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function le(e) {
  return Ae(e) || Io.has(e) || Ao.test(e) || Ut(e);
}
function Ut(e) {
  return Be(e, "length", jo);
}
function Lo(e) {
  return Be(e, "size", xs);
}
function Eo(e) {
  return Be(e, "position", xs);
}
function No(e) {
  return Be(e, "url", Ho);
}
function gt(e) {
  return Be(e, "number", Ae);
}
function Ae(e) {
  return !Number.isNaN(Number(e));
}
function Ro(e) {
  return e.endsWith("%") && Ae(e.slice(0, -1));
}
function Je(e) {
  return vr(e) || Be(e, "number", vr);
}
function I(e) {
  return ws.test(e);
}
function Ke() {
  return !0;
}
function ve(e) {
  return Mo.test(e);
}
function Vo(e) {
  return Be(e, "", Do);
}
function Be(e, t, r) {
  var s = ws.exec(e);
  return s ? s[1] ? s[1] === t : r(s[2]) : !1;
}
function jo(e) {
  return Oo.test(e);
}
function xs() {
  return !1;
}
function Ho(e) {
  return e.startsWith("url(");
}
function vr(e) {
  return Number.isInteger(Number(e));
}
function Do(e) {
  return Bo.test(e);
}
function Wo() {
  var e = V("colors"), t = V("spacing"), r = V("blur"), s = V("brightness"), o = V("borderColor"), n = V("borderRadius"), a = V("borderSpacing"), l = V("borderWidth"), i = V("contrast"), d = V("grayscale"), p = V("hueRotate"), m = V("invert"), v = V("gap"), h = V("gradientColorStops"), b = V("gradientColorStopPositions"), k = V("inset"), $ = V("margin"), S = V("opacity"), T = V("padding"), A = V("saturate"), L = V("scale"), _ = V("sepia"), E = V("skew"), F = V("space"), N = V("translate"), D = function() {
    return ["auto", "contain", "none"];
  }, G = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, J = function() {
    return ["auto", I, t];
  }, z = function() {
    return [I, t];
  }, ce = function() {
    return ["", le];
  }, U = function() {
    return ["auto", Ae, I];
  }, Z = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, K = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, se = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Ue = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, qe = function() {
    return ["", "0", I];
  }, hr = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Ye = function() {
    return [Ae, gt];
  }, ft = function() {
    return [Ae, I];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Ke],
      spacing: [le],
      blur: ["none", "", ve, I],
      brightness: Ye(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ve, I],
      borderSpacing: z(),
      borderWidth: ce(),
      contrast: Ye(),
      grayscale: qe(),
      hueRotate: ft(),
      invert: qe(),
      gap: z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ro, Ut],
      inset: J(),
      margin: J(),
      opacity: Ye(),
      padding: z(),
      saturate: Ye(),
      scale: Ye(),
      sepia: qe(),
      skew: ft(),
      space: z(),
      translate: z()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", I]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ve]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": hr()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": hr()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(Z(), [I])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: G()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": G()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": G()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [k]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [k]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [k]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [k]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [k]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [k]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [k]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [k]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [k]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Je]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: J()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", I]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: qe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: qe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Je]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ke]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Je]
        }, I]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ke]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Je]
        }, I]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", I]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", I]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(Ue())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(Ue(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(Ue(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [T]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [T]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [T]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [T]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [T]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [T]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [T]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [T]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [T]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [$]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [$]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [$]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [$]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [$]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [$]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [$]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [$]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [$]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [F]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [F]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", I, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", I, le]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ve]
        }, ve, I]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [I, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", I, le]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [I, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ve, Ut]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", gt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ke]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", I]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ae, gt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", I, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", I]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", I]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [S]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [S]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(K(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", le]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", I, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: z()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", I]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [S]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(Z(), [Eo])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Lo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, No]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [n]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [n]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [n]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [n]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [n]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [n]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [n]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [n]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [n]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [n]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [n]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [n]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [n]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [n]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [n]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [S]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(K(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [S]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: K()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(K())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [I, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [le]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ce()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [S]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [le]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ve, Vo]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ke]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": se()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [i]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ve, I]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [i]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", I]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ft()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", I]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ft()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", I]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Je, I]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", I]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": z()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", I]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [le, gt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var B = /* @__PURE__ */ zo(Wo);
const Go = "p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900";
function Uo(e) {
  const t = c(() => e.value.parentElement.parentElement.dataset.accordionId), r = c(() => e.value.parentElement.dataset.panelId), { accordionsStates: s } = ut(), o = c(() => s[t.value]), n = c(() => s[t.value].panels[r.value]), a = c(() => Object.keys(s[t.value].panels[r.value]).length);
  return {
    contentClasses: c(() => B(
      Go,
      !n.value.isVisible && "hidden",
      (n.value.order !== a.value - 1 || o.value.flush) && "border-b-0",
      n.value.order === a.value - 1 && "border-t-0",
      o.value.flush && "border-x-0"
    ))
  };
}
const Xf = /* @__PURE__ */ C({
  __name: "FwbAccordionContent",
  setup(e) {
    const t = R(!1), r = R();
    let s;
    return He(() => {
      s = Uo(r).contentClasses, t.value = !0;
    }), (o, n) => (u(), g("div", {
      ref_key: "content",
      ref: r
    }, [
      t.value ? (u(), g("div", {
        key: 0,
        class: x(y(s))
      }, [
        w(o.$slots, "default")
      ], 2)) : P("", !0)
    ], 512));
  }
}), qo = "flex items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800", Yo = "w-6 h-6 shrink-0";
function Jo(e) {
  const t = c(() => e.value.parentElement.parentElement.dataset.accordionId), r = c(() => e.value.parentElement.dataset.panelId), { accordionsStates: s } = ut(), o = c(() => s[t.value]), n = c(() => o.value.panels[r.value]), a = c(() => Object.keys(n.value).length), l = c(() => n.value.order !== a.value - 1), i = c(() => l.value || o.value.flush && n.value.order === a.value - 1 && !n.value.isVisible), d = c(() => B(
    qo,
    n.value.isVisible && "bg-gray-100 dark:bg-gray-800",
    n.value.order === 0 && !o.value.flush && "rounded-t-xl",
    n.value.order === 0 && o.value.flush && "border-t-0",
    i.value && "border-b-0",
    o.value.flush && "border-x-0"
  )), p = c(() => B(Yo, n.value.isVisible && "rotate-180"));
  return {
    headerClasses: d,
    arrowClasses: p
  };
}
const Ko = { class: "w-full" }, Qo = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
}, null, -1), Xo = [
  Qo
], Zf = /* @__PURE__ */ C({
  __name: "FwbAccordionHeader",
  setup(e) {
    const t = R(!1), r = R(), s = c(() => r.value.parentElement.parentElement.dataset.accordionId), o = c(() => r.value.parentElement.dataset.panelId), { accordionsStates: n } = ut(), a = c(() => n[s.value]), l = c(() => a.value.panels[o.value]);
    let i, d;
    function p() {
      const h = l.value.isVisible;
      for (const b in a.value.panels) {
        const k = a.value.panels[b];
        k.id !== o.value ? k.isVisible = !1 : k.isVisible = !h;
      }
    }
    function m() {
      l.value.isVisible = !l.value.isVisible;
    }
    function v() {
      if (a.value.alwaysOpen)
        return m();
      p();
    }
    return He(() => {
      const h = Jo(r);
      i = h.headerClasses, d = h.arrowClasses, t.value = !0;
    }), (h, b) => (u(), g("div", {
      ref_key: "header",
      ref: r
    }, [
      t.value ? (u(), g("button", {
        key: 0,
        type: "button",
        class: x(y(i)),
        onClick: v
      }, [
        f("span", Ko, [
          w(h.$slots, "default")
        ]),
        (u(), g("svg", {
          "data-accordion-icon": "",
          class: x(y(d)),
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, Xo, 2))
      ], 2)) : P("", !0)
    ], 512));
  }
}), Zo = ["data-panel-id"], ep = /* @__PURE__ */ C({
  __name: "FwbAccordionPanel",
  setup(e) {
    const { accordionsStates: t } = ut(), r = ms(), s = R(), o = c(() => s.value ? s.value.parentElement.dataset.accordionId : null), n = c(() => t[o.value]);
    return He(() => {
      const a = Object.keys(n?.value?.panels)?.length;
      n.value.panels[r] = {
        id: r,
        order: a,
        isVisible: (n.value.openFirstItem && a === 0) ?? !1
      };
    }), (a, l) => (u(), g("div", {
      ref_key: "panel",
      ref: s,
      "data-panel-id": y(r)
    }, [
      o.value ? w(a.$slots, "default", { key: 0 }) : P("", !0)
    ], 8, Zo));
  }
}), en = { class: "flex items-center" }, tn = /* @__PURE__ */ f("svg", {
  class: "flex-shrink-0 w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ f("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    "clip-rule": "evenodd"
  })
], -1), rn = /* @__PURE__ */ f("span", { class: "sr-only" }, "Dismiss", -1), sn = /* @__PURE__ */ f("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ f("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), on = [
  rn,
  sn
], nn = "ml-auto -mr-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700", tp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbAlert",
  props: {
    type: { default: "info" },
    closable: { type: Boolean, default: !1 },
    icon: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, s = t, o = ae(), n = {
      danger: "text-red-800 dark:text-red-400",
      dark: "text-gray-800 dark:text-gray-300",
      info: "text-blue-800 dark:text-blue-400",
      success: "text-green-800 dark:text-green-400",
      warning: "text-yellow-800 dark:text-yellow-300"
    }, a = {
      danger: "bg-red-50",
      dark: "bg-gray-50",
      info: "bg-blue-50",
      success: "bg-green-50",
      warning: "bg-yellow-50"
    }, i = B(nn, {
      danger: "text-red-500 dark:text-red-400 bg-red-50 hover:bg-red-200 focus:ring-red-400",
      dark: "text-gray-500 dark:text-gray-300 bg-gray-50 hover:bg-gray-200 focus:ring-gray-400 dark:hover:text-white",
      info: "text-blue-500 dark:text-blue-400 bg-blue-50 hover:bg-blue-200 focus:ring-blue-400",
      success: "text-green-500 dark:text-green-400 bg-green-50 hover:bg-green-200 focus:ring-green-400",
      warning: "text-yellow-500 dark:text-yellow-300 bg-yellow-50 hover:bg-yellow-200 focus:ring-yellow-400"
    }[r.type]), d = {
      danger: "border-red-500 dark:text-red-400",
      dark: "border-gray-500 dark:text-gray-400",
      info: "border-blue-500 dark:text-blue-400",
      success: "border-green-500 dark:text-green-400",
      warning: "border-yellow-500 dark:text-yellow-400"
    }, p = {
      danger: [n.danger, a.danger].join(" "),
      dark: [n.dark, a.dark].join(" "),
      info: [n.info, a.info].join(" "),
      success: [n.success, a.success].join(" "),
      warning: [n.warning, a.warning].join(" ")
    }, m = B(
      "p-4 gap-3 text-sm dark:bg-gray-800 rounded-lg",
      p[r.type],
      (r.icon || r.closable) && "flex items-center",
      d[r.type],
      r.border && "border",
      o.class
    ), v = R(!0);
    function h() {
      s("close"), v.value = !1;
    }
    return (b, k) => v.value ? (u(), g("div", re({ key: 0 }, b.$attrs, {
      class: y(m),
      role: "alert"
    }), [
      f("div", en, [
        b.icon || b.$slots.icon ? w(b.$slots, "icon", { key: 0 }, () => [
          tn
        ]) : P("", !0),
        w(b.$slots, "title")
      ]),
      w(b.$slots, "default", { onCloseClick: h }),
      w(b.$slots, "close-icon", { onCloseClick: h }, () => [
        b.closable ? (u(), g("button", {
          key: 0,
          type: "button",
          class: x(y(i)),
          "aria-label": "Close",
          onClick: h
        }, on, 2)) : P("", !0)
      ])
    ], 16)) : P("", !0);
  }
}), me = (e) => B(e), yr = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-20 h-20",
  xl: "w-36 h-36"
}, wr = {
  default: "rounded",
  rounded: "rounded-full"
}, an = "ring-2 ring-gray-300 dark:ring-gray-500 p-1", ln = "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800", dn = {
  away: "bg-gray-400",
  busy: "bg-yellow-400",
  offline: "bg-red-400",
  online: "bg-green-400"
}, un = {
  "top-right-rounded": "top-0 -right-0.5",
  "top-right-default": "-top-1.5 -right-1.5",
  "top-left-rounded": "top-0 left-0",
  "top-left-default": "top-0 left-0 transform -translate-y-1/2 -translate-x-1/2",
  "bottom-right-rounded": "bottom-0 -right-0.5",
  "bottom-right-default": "bottom-0 -right-1.5 translate-y-1/2",
  "bottom-left-rounded": "bottom-0 left-0",
  "bottom-left-default": "-bottom-1.5 left-0 transform -translate-x-1/2 "
}, cn = "absolute w-auto h-auto text-gray-400", fn = "flex overflow-hidden relative justify-center items-center", pn = "bg-gray-100 dark:bg-gray-600", gn = "font-medium text-gray-600 dark:text-gray-300", hn = {
  xs: "bottom-0",
  sm: "bottom-0",
  md: "-bottom-1",
  lg: "-bottom-2",
  xl: "-bottom-4"
};
function mn(e) {
  const t = c(
    () => me([
      yr[e.size.value],
      wr[e.rounded.value ? "rounded" : "default"],
      e.bordered.value ? an : "",
      e.stacked.value ? "border-2 border-white dark:border-gray-800" : ""
    ])
  ), r = c(() => {
    const a = `${e.statusPosition.value}-${e.rounded.value ? "rounded" : "default"}`;
    return me([
      ln,
      dn[e.status.value],
      un[a]
    ]);
  }), s = c(
    () => me([
      cn,
      hn[e.size.value]
    ])
  ), o = c(
    () => me([
      fn,
      yr[e.size.value],
      wr[e.rounded.value ? "rounded" : "default"],
      e.img.value && e.bordered.value ? "" : pn,
      e.bordered.value ? " overflow-visible" : ""
    ])
  ), n = c(
    () => me([
      gn
    ])
  );
  return {
    avatarClasses: t,
    avatarDotClasses: r,
    avatarPlaceholderClasses: s,
    avatarPlaceholderInitialsClasses: n,
    avatarPlaceholderWrapperClasses: o
  };
}
const bn = { class: "relative" }, vn = ["alt", "src"], yn = /* @__PURE__ */ f("path", {
  "clip-rule": "evenodd",
  d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
  "fill-rule": "evenodd"
}, null, -1), wn = [
  yn
], xn = ["data-pos"], rp = /* @__PURE__ */ C({
  __name: "FwbAvatar",
  props: {
    alt: {
      type: String,
      default: "Avatar"
    },
    bordered: {
      type: Boolean,
      default: !1
    },
    img: {
      type: String,
      default: ""
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "md"
    },
    stacked: {
      type: Boolean,
      default: !1
    },
    status: {
      type: String,
      default: null
    },
    statusPosition: {
      type: String,
      default: "top-right"
    },
    initials: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = R(!1);
    function r() {
      t.value = !0;
    }
    const s = De(), o = c(() => s.placeholder), n = e, {
      avatarClasses: a,
      avatarDotClasses: l,
      avatarPlaceholderClasses: i,
      avatarPlaceholderInitialsClasses: d,
      avatarPlaceholderWrapperClasses: p
    } = mn(Y(n));
    return (m, v) => (u(), g("div", bn, [
      f("div", {
        class: x(y(p))
      }, [
        e.img && !t.value ? (u(), g("img", {
          key: 0,
          alt: e.alt,
          class: x(y(a)),
          src: e.img,
          onError: r
        }, null, 42, vn)) : !e.initials && o.value ? (u(), g("div", {
          key: 1,
          class: x(y(i))
        }, [
          w(m.$slots, "placeholder")
        ], 2)) : !e.img && !e.initials ? (u(), g("svg", {
          key: 2,
          class: x(y(i)),
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, wn, 2)) : (u(), g("div", {
          key: 3,
          class: x(y(d))
        }, M(e.initials), 3))
      ], 2),
      e.status ? (u(), g("span", {
        key: 0,
        class: x(y(l)),
        "data-pos": e.statusPosition
      }, null, 10, xn)) : P("", !0)
    ]));
  }
}), he = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, o] of t)
    r[s] = o;
  return r;
}, kn = {}, _n = { class: "flex -space-x-4" };
function Cn(e, t) {
  return u(), g("div", _n, [
    w(e.$slots, "default")
  ]);
}
const sp = /* @__PURE__ */ he(kn, [["render", Cn]]), $n = ["href"], op = /* @__PURE__ */ C({
  __name: "FwbAvatarStackCounter",
  props: {
    total: {
      type: Number,
      default: 1
    },
    href: {
      type: String,
      default: "#"
    }
  },
  setup(e) {
    return (t, r) => (u(), g("a", {
      class: "relative flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800",
      href: e.href
    }, "+" + M(e.total), 9, $n));
  }
}), Sn = "mr-2 px-2.5 py-0.5 rounded flex items-center justify-center", Tn = "bg-blue-100 hover:bg-blue-200 text-blue-800 dark:text-blue-800 dark:hover:bg-blue-300", Pn = "p-1 rounded-full mr-2", Fn = {
  default: "text-blue-800 dark:text-blue-800",
  dark: "text-gray-800 dark:bg-gray-700",
  red: "text-red-800 dark:text-red-900",
  green: "text-green-800 dark:text-green-900",
  yellow: "text-yellow-800 dark:text-yellow-900",
  indigo: "text-indigo-800 dark:text-indigo-900",
  purple: "text-purple-800 dark:text-purple-900",
  pink: "text-pink-800 dark:text-pink-900"
}, zn = {
  default: "bg-blue-100 dark:bg-blue-200",
  dark: "bg-gray-100 dark:bg-gray-700",
  red: "bg-red-100 dark:bg-red-200",
  green: "bg-green-100 dark:bg-green-200",
  yellow: "bg-yellow-100 dark:bg-yellow-200",
  indigo: "bg-indigo-100 dark:bg-indigo-200",
  purple: "bg-purple-100 dark:bg-purple-200",
  pink: "bg-pink-100 dark:bg-pink-200"
}, An = {
  xs: "text-xs font-semibold",
  sm: "text-sm font-medium"
};
function In(e, t) {
  const r = ae();
  return {
    badgeClasses: c(() => B(
      An[e.size],
      e.href ? "" : zn[e.type],
      e.href ? "" : Fn[e.type],
      e.href ? Tn : "",
      t.isContentEmpty.value ? Pn : Sn,
      r.class
    ))
  };
}
const np = /* @__PURE__ */ C({
  __name: "FwbBadge",
  props: {
    type: { default: "default" },
    size: { default: "xs" },
    href: { default: null }
  },
  setup(e) {
    const t = e, r = De(), s = c(() => !r.default), o = c(() => t.href ? "a" : "span"), { badgeClasses: n } = In(t, { isContentEmpty: s });
    return (a, l) => (u(), H(X(o.value), {
      class: x(y(n)),
      href: a.href
    }, {
      default: j(() => [
        w(a.$slots, "icon"),
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "href"]));
  }
});
function Mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ks = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = [], o = 0; o < arguments.length; o++) {
        var n = arguments[o];
        if (n) {
          var a = typeof n;
          if (a === "string" || a === "number")
            s.push(n);
          else if (Array.isArray(n)) {
            if (n.length) {
              var l = r.apply(null, n);
              l && s.push(l);
            }
          } else if (a === "object") {
            if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
              s.push(n.toString());
              continue;
            }
            for (var i in n)
              t.call(n, i) && n[i] && s.push(i);
          }
        }
      }
      return s.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(ks);
var On = ks.exports;
const W = /* @__PURE__ */ Mn(On), Bn = "inline-flex items-center space-x-1 md:space-x-3", Ln = {
  default: "flex",
  solid: "flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
};
function En(e) {
  const t = c(() => W(Bn)), r = c(() => W(
    Ln[e.solid.value ? "solid" : "defauilt"]
  ));
  return {
    breadcrumbClasses: t,
    breadcrumbWrapperClasses: r
  };
}
const ap = /* @__PURE__ */ C({
  __name: "FwbBreadcrumb",
  props: {
    solid: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, { breadcrumbClasses: r, breadcrumbWrapperClasses: s } = En(Y(t));
    return (o, n) => (u(), g("nav", {
      class: x(y(s)),
      "aria-label": "Breadcrumb"
    }, [
      f("ol", {
        class: x(y(r))
      }, [
        w(o.$slots, "default")
      ], 2)
    ], 2));
  }
}), Nn = "ml-1 inline-flex items-center text-sm font-medium dark:text-gray-400", Rn = "text-gray-700 hover:text-gray-900 dark:hover:text-white", Vn = "text-gray-500";
function jn(e) {
  return {
    breadcrumbItemClasses: c(() => W(
      Nn,
      e.href.value ? Rn : Vn
    ))
  };
}
const Hn = { class: "inline-flex items-center" }, Dn = {
  key: 0,
  class: "w-6 h-6 text-gray-400 mr-1",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Wn = /* @__PURE__ */ f("path", {
  "clip-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "fill-rule": "evenodd"
}, null, -1), Gn = [
  Wn
], Un = {
  key: 0,
  class: "w-4 h-4 mr-2",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, qn = /* @__PURE__ */ f("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), Yn = [
  qn
], lp = /* @__PURE__ */ C({
  __name: "FwbBreadcrumbItem",
  props: {
    href: {
      type: String,
      default: null
    },
    home: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = c(() => t.href ? "a" : "span"), { breadcrumbItemClasses: s } = jn(Y(t));
    return (o, n) => (u(), g("li", Hn, [
      w(o.$slots, "arrow-icon", {}, () => [
        e.home ? P("", !0) : (u(), g("svg", Dn, Gn))
      ]),
      (u(), H(X(r.value), {
        class: x(y(s)),
        href: e.href
      }, {
        default: j(() => [
          w(o.$slots, "home-icon", {}, () => [
            e.home ? (u(), g("svg", Un, Yn)) : P("", !0)
          ]),
          w(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "href"]))
    ]));
  }
}), Jn = {
  0: "w-0 h-0",
  0.5: "w-0.5 h-0.5",
  1: "w-1 h-1",
  1.5: "w-1.5 h-1.5",
  10: "w-10 h-10",
  11: "w-11 h-11",
  12: "w-12 h-12",
  2: "w-2 h-2",
  2.5: "w-2.5 h-2.5",
  3: "w-3 h-3",
  4: "w-4 h-4",
  5: "w-5 h-5",
  6: "w-6 h-6",
  7: "w-7 h-7",
  8: "w-8 h-8",
  9: "w-9 h-9"
}, Kn = {
  blue: "fill-blue-600",
  gray: "fill-gray-600 dark:fill-gray-300",
  green: "fill-green-500",
  pink: "fill-pink-600",
  purple: "fill-purple-600",
  red: "fill-red-600",
  white: "fill-white",
  yellow: "fill-yellow-400"
};
function Qn(e) {
  const t = c(() => Jn[e.size.value]), r = c(() => Kn[e.color.value]), s = c(() => "text-gray-200 dark:text-gray-600"), o = c(() => "animate-spin");
  return { spinnerClasses: c(() => W(
    o.value,
    s.value,
    r.value,
    t.value
  )) };
}
const Xn = /* @__PURE__ */ f("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), Zn = /* @__PURE__ */ f("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), ea = [
  Xn,
  Zn
], ht = /* @__PURE__ */ C({
  __name: "FwbSpinner",
  props: {
    color: { default: "blue" },
    size: { default: "4" }
  },
  setup(e) {
    const t = e, { spinnerClasses: r } = Qn(Y(t));
    return (s, o) => (u(), g("svg", {
      class: x(y(r)),
      fill: "none",
      role: "status",
      viewBox: "0 0 100 101",
      xmlns: "http://www.w3.org/2000/svg"
    }, ea, 2));
  }
}), xr = {
  default: {
    default: "text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
    blue: "text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
    alternative: "font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600",
    dark: "text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700",
    light: "text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700",
    green: "focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800",
    red: "focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:focus:ring-red-900",
    yellow: "focus:outline-none text-white bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg dark:focus:ring-yellow-900",
    purple: "focus:outline-none text-white bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg dark:bg-purple-600 dark:focus:ring-purple-900",
    pink: "focus:outline-none text-white bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg dark:bg-pink-600 dark:focus:ring-pink-900"
  },
  hover: {
    default: "hover:bg-blue-800 dark:hover:bg-blue-700",
    blue: "hover:bg-blue-800 dark:hover:bg-blue-700",
    alternative: "hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700",
    dark: "hover:bg-gray-900 dark:hover:bg-gray-700",
    light: "hover:bg-gray-100 dark:hover:border-gray-600",
    green: "hover:bg-green-800 dark:hover:bg-green-700",
    red: "hover:bg-red-800 dark:hover:bg-red-700",
    yellow: "hover:bg-yellow-500",
    purple: "hover:bg-purple-800 dark:hover:bg-purple-700",
    pink: "hover:bg-pink-800 dark:hover:bg-pink-700"
  }
}, kr = {
  default: {
    dark: "text-gray-900 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center dark:border-gray-600 dark:text-gray-400 dark:focus:ring-gray-800",
    default: "text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800",
    blue: "text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800",
    green: "text-green-700 border border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800",
    purple: "text-purple-700 border border-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm text-center dark:border-purple-400 dark:text-purple-400 dark:focus:ring-purple-900",
    pink: "text-pink-700 border border-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm text-center dark:border-pink-400 dark:text-pink-400 dark:focus:ring-pink-900",
    red: "text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900",
    yellow: "text-yellow-400 border border-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm text-center dark:border-yellow-300 dark:text-yellow-300 dark:focus:ring-yellow-900"
  },
  hover: {
    dark: "hover:text-white hover:bg-gray-900 dark:hover:text-white dark:hover:bg-gray-600",
    default: "hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600",
    blue: "hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600",
    green: "hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600",
    purple: "hover:text-white hover:bg-purple-800 dark:hover:text-white dark:hover:bg-purple-500",
    pink: "hover:text-white hover:bg-pink-800 dark:hover:text-white dark:hover:bg-pink-500",
    red: "hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "hover:text-white hover:bg-yellow-500 dark:hover:text-white dark:hover:bg-yellow-400"
  }
}, _r = {
  hover: {
    "cyan-blue": "hover:bg-gradient-to-bl",
    "green-blue": "hover:bg-gradient-to-bl",
    "pink-orange": "hover:bg-gradient-to-bl",
    "purple-blue": "hover:bg-gradient-to-bl",
    "purple-pink": "hover:bg-gradient-to-l",
    "red-yellow": "hover:bg-gradient-to-bl",
    "teal-lime": "hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200",
    blue: "hover:bg-gradient-to-br",
    cyan: "hover:bg-gradient-to-br",
    green: "hover:bg-gradient-to-br",
    lime: "hover:bg-gradient-to-br",
    pink: "hover:bg-gradient-to-br",
    purple: "hover:bg-gradient-to-br",
    red: "hover:bg-gradient-to-br",
    teal: "hover:bg-gradient-to-br"
  },
  default: {
    "cyan-blue": "text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg",
    "green-blue": "text-white bg-gradient-to-br from-green-400 to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg",
    "pink-orange": "text-white bg-gradient-to-br from-pink-500 to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg",
    "purple-blue": "text-white bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg",
    "purple-pink": "text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg",
    "red-yellow": "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg",
    "teal-lime": "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg",
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg",
    cyan: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg",
    green: "text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg",
    lime: "text-gray-900 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg",
    pink: "text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg",
    red: "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg",
    teal: "text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg"
  }
}, Cr = {
  default: {
    "cyan-blue": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",
    "green-blue": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
    "pink-orange": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",
    "purple-blue": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
    "purple-pink": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
    "red-yellow": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
    "teal-lime": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
  },
  hover: {
    "cyan-blue": "group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white",
    "green-blue": "group-hover:from-green-400 group-hover:to-blue-600 hover:text-white",
    "pink-orange": "group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white",
    "purple-blue": "group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white",
    "purple-pink": "group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white",
    "red-yellow": "group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:hover:text-gray-900",
    "teal-lime": "group-hover:from-teal-300 group-hover:to-lime-300 dark:hover:text-gray-900"
  }
}, ta = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-base px-6 py-3"
}, ra = {
  xs: "text-xs p-1",
  sm: "text-sm p-1.5",
  md: "text-sm p-2",
  lg: "text-base p-2.5",
  xl: "text-base p-3"
}, $r = {
  blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
  cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
  green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
  lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
  pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
  purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
  red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
  teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
}, Vt = ["blue", "green", "cyan", "teal", "lime", "red", "pink", "purple"], sa = ["alternative", "light"];
function oa(e) {
  const t = De(), r = c(() => e.square.value ? ra[e.size.value] : ta[e.size.value]), s = c(() => {
    const n = !!e.gradient.value, a = !!e.color.value, l = e.outline.value;
    let i = "", d = "";
    if (n && l)
      Vt.includes(e.gradient.value) ? console.warn(`cannot use outline prop with "${e.gradient.value}" gradient`) : (d = Cr.default[e.gradient.value], e.disabled.value || (i = Cr.hover[e.gradient.value]));
    else if (n)
      d = _r.default[e.gradient.value], e.disabled.value || (i = _r.hover[e.gradient.value]);
    else if (a && l)
      if (sa.includes(e.color.value))
        console.warn(`cannot use outline prop with "${e.color.value}" color`);
      else {
        const m = e.color.value;
        d = kr.default[m], e.disabled.value || (i = kr.hover[m]);
      }
    else {
      const m = e.color.value;
      d = xr.default[m], e.disabled.value || (i = xr.hover[m]);
    }
    let p = "";
    return e.shadow.value === "" ? e.gradient.value && Vt.includes(e.gradient.value) && (p = $r[e.gradient.value]) : typeof e.shadow.value == "string" && Vt.includes(e.shadow.value) && (p = $r[e.shadow.value]), [
      d,
      i,
      p,
      e.pill.value && "!rounded-full",
      e.disabled.value && "cursor-not-allowed opacity-50",
      n && l ? "p-0.5" : r.value,
      (t.prefix || t.suffix || e.loading.value) && "inline-flex items-center",
      e.class.value
    ].filter((m) => m).join(" ");
  }), o = c(() => e.gradient.value && e.outline.value ? [
    "relative bg-white dark:bg-gray-900 rounded-md inline-flex items-center",
    r.value,
    e.disabled.value ? "" : "group-hover:bg-opacity-0 transition-all ease-in duration-75"
  ].filter((n) => n).join(" ") : "");
  return {
    wrapperClasses: s.value,
    spanClasses: o.value
  };
}
function na(e) {
  const t = {
    xs: "2.5",
    sm: "3",
    md: "4",
    lg: "5",
    xl: "6"
  }, r = c(() => t[e.size.value]);
  return {
    color: c(() => e.outline.value ? e.gradient.value ? e.gradient.value.includes("purple") ? "purple" : e.gradient.value.includes("blue") ? "blue" : e.gradient.value.includes("pink") ? "pink" : e.gradient.value.includes("red") ? "red" : "white" : ["alternative", "dark", "light"].includes(e.color.value) ? "white" : e.color.value === "default" ? "blue" : e.color.value : "white"),
    size: r
  };
}
const aa = {
  key: 0,
  class: "mr-2"
}, la = {
  key: 0,
  class: "mr-2"
}, ia = {
  key: 1,
  class: "ml-2"
}, da = {
  key: 1,
  class: "ml-2"
}, ua = /* @__PURE__ */ C({
  __name: "FwbButton",
  props: {
    class: { default: "" },
    color: { default: "default" },
    gradient: { default: null },
    size: { default: "md" },
    shadow: { default: null },
    pill: { type: Boolean, default: !1 },
    square: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    loadingPosition: { default: "prefix" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "" },
    tag: { default: "a" }
  },
  setup(e) {
    const t = e, r = oa(Y(t)), s = c(() => me(r.wrapperClasses)), o = c(() => me(r.spanClasses)), n = c(() => t.outline && t.gradient), a = c(() => t.loading && t.loadingPosition === "prefix"), l = c(() => t.loading && t.loadingPosition === "suffix"), { color: i, size: d } = na(Y(t)), p = t.tag !== "a" ? be(t.tag) : "a", m = t.href ? p : "button", v = t.tag === "router-link" || t.tag === "nuxt-link" ? "to" : "href";
    return (h, b) => (u(), H(X(y(m)), Se({
      class: s.value,
      [y(v) || ""]: h.href,
      disabled: y(m) === "button" && h.disabled
    }), {
      default: j(() => [
        !n.value && (h.$slots.prefix || a.value) ? (u(), g("div", aa, [
          a.value ? (u(), H(ht, {
            key: 0,
            color: y(i),
            size: y(d)
          }, null, 8, ["color", "size"])) : w(h.$slots, "prefix", { key: 1 })
        ])) : P("", !0),
        f("span", {
          class: x(o.value)
        }, [
          n.value && (h.$slots.prefix || a.value) ? (u(), g("span", la, [
            a.value ? (u(), H(ht, {
              key: 0,
              color: y(i),
              size: y(d)
            }, null, 8, ["color", "size"])) : w(h.$slots, "prefix", { key: 1 })
          ])) : P("", !0),
          w(h.$slots, "default"),
          n.value && (h.$slots.suffix || l.value) ? (u(), g("span", ia, [
            l.value ? (u(), H(ht, {
              key: 0,
              color: y(i),
              size: y(d)
            }, null, 8, ["color", "size"])) : w(h.$slots, "suffix", { key: 1 })
          ])) : P("", !0)
        ], 2),
        !n.value && (h.$slots.suffix || l.value) ? (u(), g("div", da, [
          l.value ? (u(), H(ht, {
            key: 0,
            color: y(i),
            size: y(d)
          }, null, 8, ["color", "size"])) : w(h.$slots, "suffix", { key: 1 })
        ])) : P("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
});
const ca = {}, fa = {
  class: "btn-group inline-flex rounded-md shadow-sm",
  role: "group"
};
function pa(e, t) {
  return u(), g("div", fa, [
    w(e.$slots, "default")
  ]);
}
const ip = /* @__PURE__ */ he(ca, [["render", pa]]);
function ga(e) {
  const t = c(() => e.variant.value === "default" ? "block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" : e.variant.value === "image" ? "max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" : e.variant.value === "horizontal" ? "flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" : ""), r = c(
    () => e.variant.value === "horizontal" ? "object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" : ""
  );
  return {
    cardClasses: t,
    horizontalImageClasses: r
  };
}
const ha = ["alt", "src"], dp = /* @__PURE__ */ C({
  __name: "FwbCard",
  props: {
    href: {
      type: String,
      default: ""
    },
    imgAlt: {
      type: String,
      default: ""
    },
    imgSrc: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const t = e, { cardClasses: r, horizontalImageClasses: s } = ga(Y(t)), o = c(() => t.href ? "a" : "div");
    return (n, a) => (u(), H(X(o.value), {
      class: x(y(r)),
      href: e.href
    }, {
      default: j(() => [
        e.imgSrc ? (u(), g("img", {
          key: 0,
          alt: e.imgAlt,
          class: x([y(s), "rounded-t-lg"]),
          src: e.imgSrc
        }, null, 10, ha)) : P("", !0),
        f("div", null, [
          w(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["class", "href"]));
  }
}), ma = { class: "relative" }, ba = { class: "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" }, va = ["alt", "src"], ya = {
  key: 0,
  class: "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
}, wa = ["aria-label", "onClick"], xa = /* @__PURE__ */ f("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
  /* @__PURE__ */ f("svg", {
    class: "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ f("path", {
      d: "M15 19l-7-7 7-7",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    })
  ]),
  /* @__PURE__ */ f("span", { class: "hidden" }, "Previous")
], -1), ka = [
  xa
], _a = /* @__PURE__ */ f("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
  /* @__PURE__ */ f("svg", {
    class: "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ f("path", {
      d: "M9 5l7 7-7 7",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    })
  ]),
  /* @__PURE__ */ f("span", { class: "hidden" }, "Next")
], -1), Ca = [
  _a
], up = /* @__PURE__ */ C({
  __name: "FwbCarousel",
  props: {
    pictures: {
      type: Array,
      default() {
        return [];
      }
    },
    noIndicators: {
      type: Boolean,
      default: !1
    },
    noControls: {
      type: Boolean,
      default: !1
    },
    slide: {
      type: Boolean,
      default: !1
    },
    slideInterval: {
      type: Number,
      default: 3e3
    },
    animation: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = R(0), s = R(""), o = R(), n = () => {
      o.value = setInterval(function() {
        i();
      }, t.slideInterval);
    }, a = () => {
      clearInterval(o.value), n();
    }, l = (p) => {
      r.value = p, a();
    }, i = () => {
      r.value !== t.pictures.length - 1 ? r.value++ : r.value = 0, s.value = "right", a();
    }, d = () => {
      r.value !== 0 ? r.value-- : r.value = t.pictures.length - 1, s.value = "left", a();
    };
    return He(() => {
      t.slide && n();
    }), (p, m) => (u(), g("div", ma, [
      f("div", ba, [
        (u(!0), g(q, null, Me(e.pictures, (v, h) => (u(), g("div", {
          key: h,
          class: x([h === r.value ? "z-30" : "z-0", "absolute inset-0 -translate-y-0"])
        }, [
          f("img", {
            alt: v.alt,
            src: v.src,
            class: "block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
          }, null, 8, va)
        ], 2))), 128))
      ]),
      e.noIndicators ? P("", !0) : (u(), g("div", ya, [
        (u(!0), g(q, null, Me(e.pictures, (v, h) => (u(), g("button", {
          key: h,
          "aria-label": "Slide " + h,
          class: x([h === r.value ? "bg-white" : "bg-white/50", "w-3 h-3 rounded-full bg-white"]),
          "aria-current": "false",
          type: "button",
          onClick: wt((b) => l(h), ["prevent"])
        }, null, 10, wa))), 128))
      ])),
      e.noControls ? P("", !0) : (u(), g(q, { key: 1 }, [
        f("button", {
          class: "flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none",
          "data-carousel-prev": "",
          type: "button",
          onClick: wt(d, ["prevent"])
        }, ka),
        f("button", {
          class: "flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none",
          "data-carousel-next": "",
          type: "button",
          onClick: wt(i, ["prevent"])
        }, Ca)
      ], 64))
    ]));
  }
});
var Sr;
const tr = typeof window < "u", $a = (e) => typeof e < "u", Sa = (e) => typeof e == "function", Ta = (e) => typeof e == "string", jt = () => {
};
tr && ((Sr = window?.navigator) != null && Sr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function _t(e) {
  return typeof e == "function" ? e() : y(e);
}
function Pa(e) {
  return e;
}
function Fa(e, t) {
  var r;
  if (typeof e == "number")
    return e + t;
  const s = ((r = e.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : r[0]) || "", o = e.slice(s.length), n = parseFloat(s) + t;
  return Number.isNaN(n) ? e : n + o;
}
function rr(e) {
  return ao() ? (lo(e), !0) : !1;
}
function za(e) {
  return typeof e == "function" ? c(e) : R(e);
}
function Aa(e, t = !0) {
  is() ? He(e) : t ? e() : Zt(e);
}
function Ia(e, t, r = {}) {
  const {
    immediate: s = !0
  } = r, o = R(!1);
  let n = null;
  function a() {
    n && (clearTimeout(n), n = null);
  }
  function l() {
    o.value = !1, a();
  }
  function i(...d) {
    a(), o.value = !0, n = setTimeout(() => {
      o.value = !1, n = null, e(...d);
    }, _t(t));
  }
  return s && (o.value = !0, tr && i()), rr(l), {
    isPending: o,
    start: i,
    stop: l
  };
}
function Ma(e = !1, t = {}) {
  const {
    truthyValue: r = !0,
    falsyValue: s = !1
  } = t, o = Xt(e), n = R(e);
  function a(l) {
    if (arguments.length)
      return n.value = l, n.value;
    {
      const i = _t(r);
      return n.value = n.value === i ? _t(s) : i, n.value;
    }
  }
  return o ? a : [n, a];
}
function Ze(e) {
  var t;
  const r = _t(e);
  return (t = r?.$el) != null ? t : r;
}
const At = tr ? window : void 0;
function mt(...e) {
  let t, r, s, o;
  if (Ta(e[0]) ? ([r, s, o] = e, t = At) : [t, r, s, o] = e, !t)
    return jt;
  let n = jt;
  const a = kt(() => Ze(t), (i) => {
    n(), i && (i.addEventListener(r, s, o), n = () => {
      i.removeEventListener(r, s, o), n = jt;
    });
  }, { immediate: !0, flush: "post" }), l = () => {
    a(), n();
  };
  return rr(l), l;
}
function Oa(e, t, r = {}) {
  const { window: s = At, ignore: o, capture: n = !0, detectIframe: a = !1 } = r;
  if (!s)
    return;
  const l = R(!0);
  let i;
  const d = (h) => {
    s.clearTimeout(i);
    const b = Ze(e);
    !b || b === h.target || h.composedPath().includes(b) || !l.value || t(h);
  }, p = (h) => o && o.some((b) => {
    const k = Ze(b);
    return k && (h.target === k || h.composedPath().includes(k));
  }), m = [
    mt(s, "click", d, { passive: !0, capture: n }),
    mt(s, "pointerdown", (h) => {
      const b = Ze(e);
      l.value = !!b && !h.composedPath().includes(b) && !p(h);
    }, { passive: !0 }),
    mt(s, "pointerup", (h) => {
      if (h.button === 0) {
        const b = h.composedPath();
        h.composedPath = () => b, i = s.setTimeout(() => d(h), 50);
      }
    }, { passive: !0 }),
    a && mt(s, "blur", (h) => {
      var b;
      const k = Ze(e);
      ((b = document.activeElement) == null ? void 0 : b.tagName) === "IFRAME" && !k?.contains(document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => m.forEach((h) => h());
}
function Ba(e, t = !1) {
  const r = R(), s = () => r.value = !!e();
  return s(), Aa(s, t), r;
}
function Qe(e, t = {}) {
  const { window: r = At } = t, s = Ba(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let o;
  const n = R(!1), a = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", l) : o.removeListener(l));
  }, l = () => {
    s.value && (a(), o = r.matchMedia(za(e).value), n.value = o.matches, "addEventListener" in o ? o.addEventListener("change", l) : o.addListener(l));
  };
  return io(l), rr(() => a()), n;
}
const _s = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
var La = Object.defineProperty, Tr = Object.getOwnPropertySymbols, Ea = Object.prototype.hasOwnProperty, Na = Object.prototype.propertyIsEnumerable, Pr = (e, t, r) => t in e ? La(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ra = (e, t) => {
  for (var r in t || (t = {}))
    Ea.call(t, r) && Pr(e, r, t[r]);
  if (Tr)
    for (var r of Tr(t))
      Na.call(t, r) && Pr(e, r, t[r]);
  return e;
};
function Cs(e, t = {}) {
  function r(l, i) {
    let d = e[l];
    return i != null && (d = Fa(d, i)), typeof d == "number" && (d = `${d}px`), d;
  }
  const { window: s = At } = t;
  function o(l) {
    return s ? s.matchMedia(l).matches : !1;
  }
  const n = (l) => Qe(`(min-width: ${r(l)})`, t), a = Object.keys(e).reduce((l, i) => (Object.defineProperty(l, i, {
    get: () => n(i),
    enumerable: !0,
    configurable: !0
  }), l), {});
  return Ra({
    greater(l) {
      return Qe(`(min-width: ${r(l, 0.1)})`, t);
    },
    greaterOrEqual: n,
    smaller(l) {
      return Qe(`(max-width: ${r(l, -0.1)})`, t);
    },
    smallerOrEqual(l) {
      return Qe(`(max-width: ${r(l)})`, t);
    },
    between(l, i) {
      return Qe(`(min-width: ${r(l)}) and (max-width: ${r(i, -0.1)})`, t);
    },
    isGreater(l) {
      return o(`(min-width: ${r(l, 0.1)})`);
    },
    isGreaterOrEqual(l) {
      return o(`(min-width: ${r(l)})`);
    },
    isSmaller(l) {
      return o(`(max-width: ${r(l, -0.1)})`);
    },
    isSmallerOrEqual(l) {
      return o(`(max-width: ${r(l)})`);
    },
    isInBetween(l, i) {
      return o(`(min-width: ${r(l)}) and (max-width: ${r(i, -0.1)})`);
    }
  }, a);
}
function Va(e) {
  return JSON.parse(JSON.stringify(e));
}
const Fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zr = "__vueuse_ssr_handlers__";
Fr[zr] = Fr[zr] || {};
var Ar;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ar || (Ar = {}));
var ja = Object.defineProperty, Ir = Object.getOwnPropertySymbols, Ha = Object.prototype.hasOwnProperty, Da = Object.prototype.propertyIsEnumerable, Mr = (e, t, r) => t in e ? ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Wa = (e, t) => {
  for (var r in t || (t = {}))
    Ha.call(t, r) && Mr(e, r, t[r]);
  if (Ir)
    for (var r of Ir(t))
      Da.call(t, r) && Mr(e, r, t[r]);
  return e;
};
const Ga = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Wa({
  linear: Pa
}, Ga);
function $s(e, t, r, s = {}) {
  var o, n, a;
  const {
    clone: l = !1,
    passive: i = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: m
  } = s, v = is(), h = r || v?.emit || ((o = v?.$emit) == null ? void 0 : o.bind(v)) || ((a = (n = v?.proxy) == null ? void 0 : n.$emit) == null ? void 0 : a.bind(v?.proxy));
  let b = d;
  t || (t = "modelValue"), b = d || b || `update:${t.toString()}`;
  const k = (S) => l ? Sa(l) ? l(S) : Va(S) : S, $ = () => $a(e[t]) ? k(e[t]) : m;
  if (i) {
    const S = $(), T = R(S);
    return kt(() => e[t], (A) => T.value = k(A)), kt(T, (A) => {
      (A !== e[t] || p) && h(b, A);
    }, { deep: p }), T;
  } else
    return c({
      get() {
        return $();
      },
      set(S) {
        h(b, S);
      }
    });
}
var Ua = typeof global == "object" && global && global.Object === Object && global;
const qa = Ua;
var Ya = typeof self == "object" && self && self.Object === Object && self, Ja = qa || Ya || Function("return this")();
const sr = Ja;
var Ka = sr.Symbol;
const Ce = Ka;
var Ss = Object.prototype, Qa = Ss.hasOwnProperty, Xa = Ss.toString, Xe = Ce ? Ce.toStringTag : void 0;
function Za(e) {
  var t = Qa.call(e, Xe), r = e[Xe];
  try {
    e[Xe] = void 0;
    var s = !0;
  } catch {
  }
  var o = Xa.call(e);
  return s && (t ? e[Xe] = r : delete e[Xe]), o;
}
var el = Object.prototype, tl = el.toString;
function rl(e) {
  return tl.call(e);
}
var sl = "[object Null]", ol = "[object Undefined]", Or = Ce ? Ce.toStringTag : void 0;
function or(e) {
  return e == null ? e === void 0 ? ol : sl : Or && Or in Object(e) ? Za(e) : rl(e);
}
function nr(e) {
  return e != null && typeof e == "object";
}
var nl = "[object Symbol]";
function ar(e) {
  return typeof e == "symbol" || nr(e) && or(e) == nl;
}
function al(e, t) {
  for (var r = -1, s = e == null ? 0 : e.length, o = Array(s); ++r < s; )
    o[r] = t(e[r], r, e);
  return o;
}
var ll = Array.isArray;
const We = ll;
var il = 1 / 0, Br = Ce ? Ce.prototype : void 0, Lr = Br ? Br.toString : void 0;
function Ts(e) {
  if (typeof e == "string")
    return e;
  if (We(e))
    return al(e, Ts) + "";
  if (ar(e))
    return Lr ? Lr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -il ? "-0" : t;
}
function Ct(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function dl(e) {
  return e;
}
var ul = "[object AsyncFunction]", cl = "[object Function]", fl = "[object GeneratorFunction]", pl = "[object Proxy]";
function gl(e) {
  if (!Ct(e))
    return !1;
  var t = or(e);
  return t == cl || t == fl || t == ul || t == pl;
}
var hl = sr["__core-js_shared__"];
const Ht = hl;
var Er = function() {
  var e = /[^.]+$/.exec(Ht && Ht.keys && Ht.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ml(e) {
  return !!Er && Er in e;
}
var bl = Function.prototype, vl = bl.toString;
function yl(e) {
  if (e != null) {
    try {
      return vl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var wl = /[\\^$.*+?()[\]{}|]/g, xl = /^\[object .+?Constructor\]$/, kl = Function.prototype, _l = Object.prototype, Cl = kl.toString, $l = _l.hasOwnProperty, Sl = RegExp(
  "^" + Cl.call($l).replace(wl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Tl(e) {
  if (!Ct(e) || ml(e))
    return !1;
  var t = gl(e) ? Sl : xl;
  return t.test(yl(e));
}
function Pl(e, t) {
  return e?.[t];
}
function lr(e, t) {
  var r = Pl(e, t);
  return Tl(r) ? r : void 0;
}
function Fl(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var zl = 800, Al = 16, Il = Date.now;
function Ml(e) {
  var t = 0, r = 0;
  return function() {
    var s = Il(), o = Al - (s - r);
    if (r = s, o > 0) {
      if (++t >= zl)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ol(e) {
  return function() {
    return e;
  };
}
var Bl = function() {
  try {
    var e = lr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const $t = Bl;
var Ll = $t ? function(e, t) {
  return $t(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ol(t),
    writable: !0
  });
} : dl;
const El = Ll;
var Nl = Ml(El);
const Rl = Nl;
var Vl = 9007199254740991, jl = /^(?:0|[1-9]\d*)$/;
function Ps(e, t) {
  var r = typeof e;
  return t = t ?? Vl, !!t && (r == "number" || r != "symbol" && jl.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Hl(e, t, r) {
  t == "__proto__" && $t ? $t(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Fs(e, t) {
  return e === t || e !== e && t !== t;
}
var Dl = Object.prototype, Wl = Dl.hasOwnProperty;
function Gl(e, t, r) {
  var s = e[t];
  (!(Wl.call(e, t) && Fs(s, r)) || r === void 0 && !(t in e)) && Hl(e, t, r);
}
var Nr = Math.max;
function Ul(e, t, r) {
  return t = Nr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var s = arguments, o = -1, n = Nr(s.length - t, 0), a = Array(n); ++o < n; )
      a[o] = s[t + o];
    o = -1;
    for (var l = Array(t + 1); ++o < t; )
      l[o] = s[o];
    return l[t] = r(a), Fl(e, this, l);
  };
}
var ql = 9007199254740991;
function Yl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ql;
}
var Jl = "[object Arguments]";
function Rr(e) {
  return nr(e) && or(e) == Jl;
}
var zs = Object.prototype, Kl = zs.hasOwnProperty, Ql = zs.propertyIsEnumerable, Xl = Rr(function() {
  return arguments;
}()) ? Rr : function(e) {
  return nr(e) && Kl.call(e, "callee") && !Ql.call(e, "callee");
};
const As = Xl;
var Zl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ei = /^\w*$/;
function ti(e, t) {
  if (We(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ar(e) ? !0 : ei.test(e) || !Zl.test(e) || t != null && e in Object(t);
}
var ri = lr(Object, "create");
const at = ri;
function si() {
  this.__data__ = at ? at(null) : {}, this.size = 0;
}
function oi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ni = "__lodash_hash_undefined__", ai = Object.prototype, li = ai.hasOwnProperty;
function ii(e) {
  var t = this.__data__;
  if (at) {
    var r = t[e];
    return r === ni ? void 0 : r;
  }
  return li.call(t, e) ? t[e] : void 0;
}
var di = Object.prototype, ui = di.hasOwnProperty;
function ci(e) {
  var t = this.__data__;
  return at ? t[e] !== void 0 : ui.call(t, e);
}
var fi = "__lodash_hash_undefined__";
function pi(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = at && t === void 0 ? fi : t, this;
}
function Oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Oe.prototype.clear = si;
Oe.prototype.delete = oi;
Oe.prototype.get = ii;
Oe.prototype.has = ci;
Oe.prototype.set = pi;
function gi() {
  this.__data__ = [], this.size = 0;
}
function It(e, t) {
  for (var r = e.length; r--; )
    if (Fs(e[r][0], t))
      return r;
  return -1;
}
var hi = Array.prototype, mi = hi.splice;
function bi(e) {
  var t = this.__data__, r = It(t, e);
  if (r < 0)
    return !1;
  var s = t.length - 1;
  return r == s ? t.pop() : mi.call(t, r, 1), --this.size, !0;
}
function vi(e) {
  var t = this.__data__, r = It(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function yi(e) {
  return It(this.__data__, e) > -1;
}
function wi(e, t) {
  var r = this.__data__, s = It(r, e);
  return s < 0 ? (++this.size, r.push([e, t])) : r[s][1] = t, this;
}
function Ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Ge.prototype.clear = gi;
Ge.prototype.delete = bi;
Ge.prototype.get = vi;
Ge.prototype.has = yi;
Ge.prototype.set = wi;
var xi = lr(sr, "Map");
const ki = xi;
function _i() {
  this.size = 0, this.__data__ = {
    hash: new Oe(),
    map: new (ki || Ge)(),
    string: new Oe()
  };
}
function Ci(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Mt(e, t) {
  var r = e.__data__;
  return Ci(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function $i(e) {
  var t = Mt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Si(e) {
  return Mt(this, e).get(e);
}
function Ti(e) {
  return Mt(this, e).has(e);
}
function Pi(e, t) {
  var r = Mt(this, e), s = r.size;
  return r.set(e, t), this.size += r.size == s ? 0 : 1, this;
}
function Le(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Le.prototype.clear = _i;
Le.prototype.delete = $i;
Le.prototype.get = Si;
Le.prototype.has = Ti;
Le.prototype.set = Pi;
var Fi = "Expected a function";
function ir(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fi);
  var r = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], n = r.cache;
    if (n.has(o))
      return n.get(o);
    var a = e.apply(this, s);
    return r.cache = n.set(o, a) || n, a;
  };
  return r.cache = new (ir.Cache || Le)(), r;
}
ir.Cache = Le;
var zi = 500;
function Ai(e) {
  var t = ir(e, function(s) {
    return r.size === zi && r.clear(), s;
  }), r = t.cache;
  return t;
}
var Ii = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Mi = /\\(\\)?/g, Oi = Ai(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ii, function(r, s, o, n) {
    t.push(o ? n.replace(Mi, "$1") : s || r);
  }), t;
});
const Bi = Oi;
function Li(e) {
  return e == null ? "" : Ts(e);
}
function Ot(e, t) {
  return We(e) ? e : ti(e, t) ? [e] : Bi(Li(e));
}
var Ei = 1 / 0;
function dr(e) {
  if (typeof e == "string" || ar(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ei ? "-0" : t;
}
function Ni(e, t) {
  t = Ot(t, e);
  for (var r = 0, s = t.length; e != null && r < s; )
    e = e[dr(t[r++])];
  return r && r == s ? e : void 0;
}
function Ri(e, t) {
  for (var r = -1, s = t.length, o = e.length; ++r < s; )
    e[o + r] = t[r];
  return e;
}
var Vr = Ce ? Ce.isConcatSpreadable : void 0;
function Vi(e) {
  return We(e) || As(e) || !!(Vr && e && e[Vr]);
}
function Is(e, t, r, s, o) {
  var n = -1, a = e.length;
  for (r || (r = Vi), o || (o = []); ++n < a; ) {
    var l = e[n];
    t > 0 && r(l) ? t > 1 ? Is(l, t - 1, r, s, o) : Ri(o, l) : s || (o[o.length] = l);
  }
  return o;
}
function ji(e) {
  var t = e == null ? 0 : e.length;
  return t ? Is(e, 1) : [];
}
function Hi(e) {
  return Rl(Ul(e, void 0, ji), e + "");
}
function Di(e, t) {
  return e != null && t in Object(e);
}
function Wi(e, t, r) {
  t = Ot(t, e);
  for (var s = -1, o = t.length, n = !1; ++s < o; ) {
    var a = dr(t[s]);
    if (!(n = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return n || ++s != o ? n : (o = e == null ? 0 : e.length, !!o && Yl(o) && Ps(a, o) && (We(e) || As(e)));
}
function Gi(e, t) {
  return e != null && Wi(e, t, Di);
}
function Ui(e, t, r, s) {
  if (!Ct(e))
    return e;
  t = Ot(t, e);
  for (var o = -1, n = t.length, a = n - 1, l = e; l != null && ++o < n; ) {
    var i = dr(t[o]), d = r;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (o != a) {
      var p = l[i];
      d = s ? s(p, i, l) : void 0, d === void 0 && (d = Ct(p) ? p : Ps(t[o + 1]) ? [] : {});
    }
    Gl(l, i, d), l = l[i];
  }
  return e;
}
function qi(e, t, r) {
  for (var s = -1, o = t.length, n = {}; ++s < o; ) {
    var a = t[s], l = Ni(e, a);
    r(l, a) && Ui(n, Ot(a, e), l);
  }
  return n;
}
function Yi(e, t) {
  return qi(e, t, function(r, s) {
    return Gi(e, s);
  });
}
var Ji = Hi(function(e, t) {
  return e == null ? {} : Yi(e, t);
});
const Ki = Ji;
function St(e, t = !0, r = []) {
  return e.forEach((s) => {
    if (s !== null) {
      if (typeof s != "object") {
        (typeof s == "string" || typeof s == "number") && r.push(te(String(s)));
        return;
      }
      if (Array.isArray(s)) {
        St(s, t, r);
        return;
      }
      if (s.type === q) {
        if (s.children === null)
          return;
        Array.isArray(s.children) && St(s.children, t, r);
      } else
        s.type !== uo && r.push(s);
    }
  }), r;
}
function Qi(e, t = "default", r = void 0) {
  const s = e[t];
  if (!s)
    return console.warn("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const o = St(s(r));
  return o.length === 1 ? o[0] : (console.warn("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
const Xi = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"]
};
function Zi(e, t) {
  Object.entries(Xi).forEach(([, r]) => {
    r.forEach((s) => {
      e.props ? e.props = Object.assign({}, e.props) : e.props = {};
      const o = e.props[s], n = t[s];
      o ? e.props[s] = (...a) => {
        o(...a), n(...a);
      } : e.props[s] = n;
    });
  });
}
const jr = C({
  name: "SlotListener",
  props: {
    trigger: {
      type: String,
      default: "click"
    }
  },
  emits: ["click", "focus", "blur", "mouseenter", "mouseleave"],
  setup(e, { emit: t }) {
    return {
      handleClick: (l) => {
        t("click", l);
      },
      handleBlur: (l) => {
        t("blur", l);
      },
      handleFocus: (l) => {
        t("focus", l);
      },
      handleMouseLeave: (l) => {
        t("mouseleave", l);
      },
      handleMouseEnter: (l) => {
        t("mouseenter", l);
      }
    };
  },
  render() {
    const {
      $slots: e
    } = this, t = {
      onClick: this.handleClick,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    }, r = Qi(e, "default"), s = [
      t
    ];
    return r?.props && s.push(
      Ki(r.props, "onClick", "onMouseenter", "onMouseleave", "onFocus", "onBlur")
    ), r && Zi(
      r,
      {
        onBlur: (n) => {
          s.forEach((a) => {
            a?.onBlur?.(n);
          });
        },
        onFocus: (n) => {
          s.forEach((a) => {
            a?.onFocus?.(n);
          });
        },
        onClick: (n) => {
          s.forEach((a) => {
            a?.onClick?.(n);
          });
        },
        onMouseenter: (n) => {
          s.forEach((a) => {
            a?.onMouseenter?.(n);
          });
        },
        onMouseleave: (n) => {
          s.forEach((a) => {
            a?.onMouseleave?.(n);
          });
        }
      }
    ), r;
  }
}), ed = "absolute z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700", bt = 8, td = {
  bottom: "",
  left: "top-0",
  right: "top-0",
  top: ""
}, rd = {
  bottom(e) {
    return `bottom: -${e.height + bt}px;`;
  },
  left(e) {
    return `left: -${e.width + bt}px;`;
  },
  right(e) {
    return `right: -${e.width + bt}px;`;
  },
  top(e) {
    return `top: -${e.height + bt}px;`;
  }
};
function sd(e) {
  kt(e.visible, (o) => {
    o && Zt(() => r());
  });
  const t = R(""), r = () => {
    const o = e.contentRef.value?.getBoundingClientRect();
    if (!o) {
      t.value = "";
      return;
    }
    t.value = rd[e.placement.value](o);
  };
  return {
    contentClasses: c(() => W(
      ed,
      td[e.placement.value]
    )),
    contentStyles: t
  };
}
const od = (e) => (us("data-v-7ea3917f"), e = e(), cs(), e), nd = { class: "inline-flex items-center" }, ad = /* @__PURE__ */ od(() => /* @__PURE__ */ f("svg", {
  class: "w-4 h-4 ml-2",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ f("path", {
    d: "M19 9l-7 7-7-7",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  })
], -1)), ld = /* @__PURE__ */ C({
  __name: "FwbDropdown",
  props: {
    placement: { default: "bottom" },
    text: { default: "" },
    transition: { default: "" }
  },
  setup(e) {
    const t = R(!1), r = () => t.value = !1, s = () => t.value = !t.value, o = e, n = {
      bottom: "to-bottom",
      left: "to-left",
      right: "to-right",
      top: "to-top"
    }, a = c(() => o.transition === null ? n[o.placement] : o.transition), l = R(), i = R(), { contentClasses: d, contentStyles: p } = sd({
      placement: nt(o, "placement"),
      visible: t,
      contentRef: l
    });
    return Oa(i, () => {
      t.value && (t.value = !1);
    }), (m, v) => (u(), g("div", {
      ref_key: "wrapper",
      ref: i,
      class: "inline-flex relative"
    }, [
      f("div", nd, [
        ze(jr, { onClick: s }, {
          default: j(() => [
            w(m.$slots, "trigger", {}, () => [
              ze(ua, null, {
                suffix: j(() => [
                  ad
                ]),
                default: j(() => [
                  te(M(m.text) + " ", 1)
                ]),
                _: 1
              })
            ], !0)
          ]),
          _: 3
        })
      ]),
      ze(ds, { name: a.value }, {
        default: j(() => [
          t.value ? (u(), g("div", {
            key: 0,
            ref_key: "content",
            ref: l,
            class: x([y(d)]),
            style: et(y(p))
          }, [
            ze(jr, { onClick: r }, {
              default: j(() => [
                w(m.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            })
          ], 6)) : P("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 512));
  }
});
const cp = /* @__PURE__ */ he(ld, [["__scopeId", "data-v-7ea3917f"]]), fp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooter",
  props: {
    sticky: { type: Boolean, default: !1 },
    footerType: { default: "default" }
  },
  setup(e) {
    const t = e, r = ae(), s = B(
      t.footerType === "sitemap" && "bg-gray-800",
      t.footerType === "socialmedia" && "p-4 bg-white sm:p-6 dark:bg-gray-800",
      t.footerType === "logo" && "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800",
      t.footerType === "default" && "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800",
      t.sticky && "absolute bottom-0 left-0 z-20 w-full border-t border-gray-200 dark:border-gray-600",
      r.class
    );
    return (o, n) => (u(), g("footer", re(o.$attrs, { class: y(s) }), [
      w(o.$slots, "default")
    ], 16));
  }
}), id = ["href"], dd = ["alt", "src"], pp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooterBrand",
  props: {
    href: { default: "" },
    src: { default: "" },
    alt: { default: "" },
    name: { default: "" },
    imageClass: { default: "" },
    nameClass: { default: "" },
    aClass: { default: "" }
  },
  setup(e) {
    const t = ae(), r = e, s = B("mb-6 md:mb-0", t.class), o = B("flex items-center", r.aClass), n = B("h-8 mr-3", r.imageClass), a = B("self-center text-2xl font-semibold whitespace-nowrap dark:text-white", r.nameClass);
    return (l, i) => (u(), g("div", re({ class: y(s) }, l.$attrs), [
      f("a", {
        class: x(y(o)),
        href: l.href
      }, [
        f("img", {
          alt: l.alt,
          class: x(y(n)),
          src: l.src
        }, null, 10, dd),
        f("span", {
          class: x(y(a))
        }, M(l.name), 3)
      ], 10, id)
    ], 16));
  }
}), gp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooterCopyright",
  props: {
    year: { default: (/* @__PURE__ */ new Date()).getFullYear() },
    by: { default: "" },
    href: { default: "" },
    aClass: { default: "" },
    copyrightMessage: { default: "All Rights Reserved." }
  },
  setup(e) {
    const t = e, r = ae(), s = B("block text-sm text-gray-500 sm:text-center dark:text-gray-400", r.class), o = B(t.href ? "hover:underline" : "ml-1", t.aClass), n = t.href ? "a" : "span";
    return (a, l) => (u(), g("span", re(a.$attrs, { class: y(s) }), [
      te(" © " + M(a.year) + " ", 1),
      (u(), H(X(y(n)), {
        class: x(y(o)),
        href: a.href
      }, {
        default: j(() => [
          te(M(a.by), 1)
        ]),
        _: 1
      }, 8, ["class", "href"])),
      te(" " + M(a.copyrightMessage), 1)
    ], 16));
  }
}), ud = { class: "sr-only" }, hp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooterIcon",
  props: {
    href: { default: "" },
    ariaLabel: { default: "" },
    srText: { default: "" }
  },
  setup(e) {
    const t = ae(), s = e.href ? "a" : "span", o = B("text-gray-500 hover:text-gray-900 dark:hover:text-white", t.class);
    return (n, a) => (u(), H(X(y(s)), re({
      "aria-label": n.ariaLabel,
      class: y(o),
      href: n.href
    }, n.$attrs), {
      default: j(() => [
        w(n.$slots, "default"),
        f("span", ud, M(n.srText), 1)
      ]),
      _: 3
    }, 16, ["aria-label", "class", "href"]));
  }
}), mp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooterLink",
  props: {
    href: { default: "" },
    aClass: { default: "" },
    component: { default: "a" }
  },
  setup(e) {
    const t = ae(), r = e, s = r.component === "a" ? "a" : be(r.component), o = r.component === "router-link" ? "to" : "href", n = B("hover:underline", r.aClass), a = B("mr-4 md:mr-6 last:mr-0", t.class);
    return (l, i) => (u(), g("li", re(l.$attrs, { class: y(a) }), [
      (u(), H(X(y(s)), Se({
        [y(o) || ""]: l.href,
        class: y(n)
      }), {
        default: j(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ], 16));
  }
}), bp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooterLinkGroup",
  setup(e) {
    const t = ae(), r = B("flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0", t.class);
    return (s, o) => (u(), g("ul", re(s.$attrs, { class: y(r) }), [
      w(s.$slots, "default")
    ], 16));
  }
}), vp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbJumbotron",
  props: {
    headerLevel: { default: 1 },
    subText: { default: "" },
    subTextClasses: { default: "" },
    headerText: { default: "" },
    headerClasses: { default: "" }
  },
  setup(e) {
    const t = e, r = ae(), s = c(() => B(
      "bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto max-w-screen-xl text-center ",
      r.class
    )), o = c(() => B("mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white", t.headerClasses)), n = c(() => B("mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-0 lg:px-16 dark:text-gray-400", t.subTextClasses));
    return (a, l) => (u(), g("div", re(a.$attrs, { class: s.value }), [
      (u(), H(X(`h${a.headerLevel}`), {
        class: x(o.value)
      }, {
        default: j(() => [
          te(M(a.headerText), 1)
        ]),
        _: 1
      }, 8, ["class"])),
      f("div", {
        class: x(n.value)
      }, M(a.subText), 3),
      w(a.$slots, "default")
    ], 16));
  }
}), cd = "overflow-hidden w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white";
function fd() {
  return {
    containerClasses: c(() => W(
      cd
    ))
  };
}
const yp = /* @__PURE__ */ C({
  __name: "FwbListGroup",
  setup(e) {
    const { containerClasses: t } = fd();
    return (r, s) => (u(), g("ul", {
      class: x(y(t))
    }, [
      w(r.$slots, "default")
    ], 2));
  }
}), pd = {
  border: (e) => e.substring(0, e.lastIndexOf("-"))
}, gd = (e, t = pd) => {
  const s = Object.keys(t).find((o) => e.includes(o));
  return s ? t[s](e) : e.substring(0, e.indexOf("-"));
};
function ne(...e) {
  return e.filter((t) => t).reduce((t, r) => {
    const s = Array.isArray(r) ? Array.from(r).map((p) => p.split(" ")).flat() : r.split(" "), o = s.map((p) => gd(p)), n = o.filter((p) => !t.types.includes(p)), l = [...o.filter((p) => t.types.includes(p)), ...n], i = [.../* @__PURE__ */ new Set([...t.types, ...l])], d = i.map((p) => {
      if (l.includes(p)) {
        const v = o.indexOf(p);
        if (v >= 0)
          return s[v] || "";
      }
      const m = t.types.indexOf(p);
      return m >= 0 && t.classes[m] || "";
    }).filter((p) => !!p);
    return {
      types: i,
      classes: d
    };
  }, { types: [], classes: [] }).classes.join(" ");
}
const hd = "inline-flex items-center w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600", md = "block w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white", bd = "bg-gray-100 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400";
function vd(e) {
  return {
    itemClasses: c(() => ne(
      hd,
      e.disabled.value ? bd : "",
      !e.disabled.value && e.hover.value ? md : ""
    ))
  };
}
const yd = {
  key: 0,
  class: "mr-2"
}, wd = {
  key: 1,
  class: "ml-2"
}, wp = /* @__PURE__ */ C({
  __name: "FwbListGroupItem",
  props: {
    hover: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, { itemClasses: r } = vd(Y(t));
    return (s, o) => (u(), g("li", {
      class: x(y(r))
    }, [
      s.$slots.prefix ? (u(), g("div", yd, [
        w(s.$slots, "prefix")
      ])) : P("", !0),
      w(s.$slots, "default"),
      s.$slots.suffix ? (u(), g("div", wd, [
        w(s.$slots, "suffix")
      ])) : P("", !0)
    ], 2));
  }
}), xd = /* @__PURE__ */ f("div", { class: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40" }, null, -1), kd = { class: "relative bg-white rounded-lg shadow dark:bg-gray-700" }, _d = /* @__PURE__ */ f("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ f("path", {
    "clip-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "fill-rule": "evenodd"
  })
], -1), Cd = {
  key: 0,
  class: "p-6 rounded-b border-gray-200 border-t dark:border-gray-600"
}, xp = /* @__PURE__ */ C({
  __name: "FwbModal",
  props: {
    notEscapable: { type: Boolean, default: !1 },
    persistent: { type: Boolean, default: !1 },
    size: { default: "2xl" }
  },
  emits: ["close", "click:outside"],
  setup(e, { emit: t }) {
    const r = e, s = t, o = {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    };
    function n() {
      s("close");
    }
    function a() {
      r.persistent || (s("click:outside"), n());
    }
    function l() {
      !r.notEscapable && !r.persistent && n();
    }
    const i = R(null);
    return He(() => {
      i.value && i.value.focus();
    }), (d, p) => (u(), g("div", null, [
      xd,
      f("div", {
        ref_key: "modalRef",
        ref: i,
        class: "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex",
        tabindex: "0",
        onClick: wt(a, ["self"]),
        onKeyup: fs(l, ["esc"])
      }, [
        f("div", {
          class: x([`${o[d.size]}`, "relative p-4 w-full h-full"])
        }, [
          f("div", kd, [
            f("div", {
              class: x([d.$slots.header ? "border-b border-gray-200 dark:border-gray-600" : "", "p-4 rounded-t flex justify-between items-center"])
            }, [
              w(d.$slots, "header"),
              d.persistent ? P("", !0) : (u(), g("button", {
                key: 0,
                "aria-label": "close",
                class: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
                type: "button",
                onClick: n
              }, [
                w(d.$slots, "close-icon", {}, () => [
                  _d
                ])
              ]))
            ], 2),
            f("div", {
              class: x([d.$slots.header ? "" : "pt-0", "p-6"])
            }, [
              w(d.$slots, "body")
            ], 2),
            d.$slots.footer ? (u(), g("div", Cd, [
              w(d.$slots, "footer")
            ])) : P("", !0)
          ])
        ], 2)
      ], 544)
    ]));
  }
}), $d = { class: "container flex flex-wrap justify-between items-center mx-auto" }, Sd = /* @__PURE__ */ f("span", { class: "sr-only" }, "Open main menu", -1), Td = /* @__PURE__ */ f("svg", {
  "aria-hidden": "true",
  class: "w-6 h-6",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ f("path", {
    "clip-rule": "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    "fill-rule": "evenodd"
  })
], -1), Pd = {
  key: 0,
  class: "hidden md:order-2 md:flex"
}, Fd = " border-gray-200", zd = "fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600", Ad = "rounded", Id = "p-3 bg-gray-50 dark:bg-gray-800 dark:border-gray-700", Md = "bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900", kp = /* @__PURE__ */ C({
  __name: "FwbNavbar",
  props: {
    class: {
      type: String,
      default: ""
    },
    sticky: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    solid: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = R(!1);
    function s() {
      r.value = !r.value;
    }
    de("megaMenuToggle", {
      megaMenuVisble: r,
      toggleMenu: s
    });
    const o = De(), a = Cs(_s).smaller("md"), l = R(!1), i = Ma(l), d = c(() => me(
      [
        Fd,
        t.sticky ? zd : "",
        t.rounded ? Ad : "",
        t.solid ? Id : Md,
        t.class
      ].join(" ")
    )), p = c(
      () => a ? l.value : !0
    );
    return (m, v) => (u(), g("nav", {
      class: x(d.value)
    }, [
      f("div", $d, [
        w(m.$slots, "logo"),
        f("button", {
          "aria-controls": "navbar-default",
          "aria-expanded": "false",
          class: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
          type: "button",
          onClick: v[0] || (v[0] = (h) => y(i)())
        }, [
          Sd,
          w(m.$slots, "menu-icon", {}, () => [
            Td
          ])
        ]),
        w(m.$slots, "default", { isShowMenu: p.value }),
        y(o)["right-side"] ? (u(), g("div", Pd, [
          w(m.$slots, "right-side")
        ])) : P("", !0)
      ]),
      w(m.$slots, "mega-menu-dropdown")
    ], 2));
  }
}), Od = "w-full md:block md:w-auto", Bd = "flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700", Ld = "bg-gray-50", _p = /* @__PURE__ */ C({
  __name: "FwbNavbarCollapse",
  props: {
    isShowMenu: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = Cs(_s).smaller("md"), s = e, o = c(() => W(
      Od,
      s.isShowMenu ? "" : "hidden"
    )), n = c(() => W(
      Bd,
      r.value ? Ld : ""
    ));
    return (a, l) => (u(), g("div", {
      class: x(o.value)
    }, [
      f("ul", {
        class: x(n.value)
      }, [
        w(a.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ed = "bg-blue-700 md:bg-transparent text-white md:text-blue-700 dark:text-white", Nd = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", Rd = "block py-2 pr-4 pl-3 rounded md:p-0", Cp = /* @__PURE__ */ C({
  __name: "FwbNavbarLink",
  props: {
    link: { default: "/" },
    isActive: { type: Boolean, default: !1 },
    component: { default: "a" },
    linkAttr: { default: "href" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = e, s = t, o = c(() => r.component !== "a" ? be(r.component) : "a"), n = B(
      Rd,
      r.isActive ? Ed : Nd
    ), a = (l) => {
      r.disabled || s("click", l);
    };
    return (l, i) => (u(), g("li", null, [
      (u(), H(X(o.value), Se({
        [l.linkAttr || ""]: l.link,
        class: y(n),
        onClick: a
      }), {
        default: j(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ]));
  }
}), Vd = ["src", "alt"], jd = { class: "self-center text-xl font-semibold whitespace-nowrap dark:text-white" }, $p = /* @__PURE__ */ C({
  __name: "FwbNavbarLogo",
  props: {
    link: { default: "/" },
    imageUrl: { default: "/assets/logo.svg" },
    alt: { default: "Logo" },
    component: { default: "a" },
    linkAttr: { default: "href" }
  },
  setup(e) {
    const t = e, r = c(() => t.component !== "a" ? be(t.component) : "a");
    return (s, o) => (u(), H(X(r.value), Se({
      class: "flex items-center",
      [s.linkAttr || ""]: s.link
    }), {
      default: j(() => [
        f("img", {
          src: s.imageUrl,
          alt: s.alt,
          class: "mr-3 h-6 sm:h-10"
        }, null, 8, Vd),
        f("span", jd, [
          w(s.$slots, "default")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Hd = /* @__PURE__ */ f("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  class: "dark:fill-gray-400 hover:dark:fill-white"
}, [
  /* @__PURE__ */ f("title", null, "settings"),
  /* @__PURE__ */ f("path", { d: "M16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM20.315 15.404c0.046-0.105 0.112-0.191 0.192-0.257 0.112-0.092 0.251-0.146 0.403-0.147h0.090c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121-0.337-1.58-0.879-2.121-1.293-0.879-2.121-0.879h-0.159c-0.11-0.001-0.215-0.028-0.308-0.076-0.127-0.066-0.23-0.172-0.292-0.312-0.003-0.029-0.004-0.059-0.004-0.089-0.024-0.055-0.040-0.111-0.049-0.168 0.020-0.334 0.077-0.454 0.168-0.547l0.062-0.062c0.585-0.586 0.878-1.356 0.877-2.122s-0.294-1.536-0.881-2.122c-0.586-0.585-1.356-0.878-2.122-0.877s-1.536 0.294-2.12 0.879l-0.046 0.046c-0.083 0.080-0.183 0.136-0.288 0.166-0.14 0.039-0.291 0.032-0.438-0.033-0.101-0.044-0.187-0.11-0.253-0.19-0.092-0.112-0.146-0.251-0.147-0.403v-0.090c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121v0.159c-0.001 0.11-0.028 0.215-0.076 0.308-0.066 0.127-0.172 0.23-0.312 0.292-0.029 0.003-0.059 0.004-0.089 0.004-0.055 0.024-0.111 0.040-0.168 0.049-0.335-0.021-0.455-0.078-0.548-0.169l-0.062-0.062c-0.586-0.585-1.355-0.878-2.122-0.878s-1.535 0.294-2.122 0.882c-0.585 0.586-0.878 1.355-0.878 2.122s0.294 1.536 0.879 2.12l0.048 0.047c0.080 0.083 0.136 0.183 0.166 0.288 0.039 0.14 0.032 0.291-0.031 0.434-0.006 0.016-0.013 0.034-0.021 0.052-0.041 0.109-0.108 0.203-0.191 0.275-0.11 0.095-0.25 0.153-0.383 0.156h-0.090c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.294-0.879 2.122 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879h0.159c0.11 0.001 0.215 0.028 0.308 0.076 0.128 0.067 0.233 0.174 0.296 0.321 0.024 0.055 0.040 0.111 0.049 0.168-0.020 0.334-0.077 0.454-0.168 0.547l-0.062 0.062c-0.585 0.586-0.878 1.356-0.877 2.122s0.294 1.536 0.881 2.122c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.12-0.879l0.047-0.048c0.083-0.080 0.183-0.136 0.288-0.166 0.14-0.039 0.291-0.032 0.434 0.031 0.016 0.006 0.034 0.013 0.052 0.021 0.109 0.041 0.203 0.108 0.275 0.191 0.095 0.11 0.153 0.25 0.156 0.383v0.092c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121v-0.159c0.001-0.11 0.028-0.215 0.076-0.308 0.067-0.128 0.174-0.233 0.321-0.296 0.055-0.024 0.111-0.040 0.168-0.049 0.334 0.020 0.454 0.077 0.547 0.168l0.062 0.062c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.122-0.881c0.585-0.586 0.878-1.356 0.877-2.122s-0.294-1.536-0.879-2.12l-0.048-0.047c-0.080-0.083-0.136-0.183-0.166-0.288-0.039-0.14-0.032-0.291 0.031-0.434zM18.396 9.302c-0.012-0.201-0.038-0.297-0.076-0.382v0.080c0 0.043 0.003 0.084 0.008 0.125 0.021 0.060 0.043 0.119 0.068 0.177 0.004 0.090 0.005 0.091 0.005 0.092 0.249 0.581 0.684 1.030 1.208 1.303 0.371 0.193 0.785 0.298 1.211 0.303h0.18c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707-0.111 0.525-0.293 0.707-0.431 0.293-0.707 0.293h-0.090c-0.637 0.003-1.22 0.228-1.675 0.603-0.323 0.266-0.581 0.607-0.75 0.993-0.257 0.582-0.288 1.21-0.127 1.782 0.119 0.423 0.341 0.814 0.652 1.136l0.072 0.073c0.196 0.196 0.294 0.45 0.294 0.707s-0.097 0.512-0.292 0.707c-0.197 0.197-0.451 0.295-0.709 0.295s-0.512-0.097-0.707-0.292l-0.061-0.061c-0.463-0.453-1.040-0.702-1.632-0.752-0.437-0.037-0.882 0.034-1.293 0.212-0.578 0.248-1.027 0.683-1.3 1.206-0.193 0.371-0.298 0.785-0.303 1.211v0.181c0 0.276-0.111 0.525-0.293 0.707s-0.43 0.292-0.706 0.292-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707v-0.090c-0.015-0.66-0.255-1.242-0.644-1.692-0.284-0.328-0.646-0.585-1.058-0.744-0.575-0.247-1.193-0.274-1.756-0.116-0.423 0.119-0.814 0.341-1.136 0.652l-0.073 0.072c-0.196 0.196-0.45 0.294-0.707 0.294s-0.512-0.097-0.707-0.292c-0.197-0.197-0.295-0.451-0.295-0.709s0.097-0.512 0.292-0.707l0.061-0.061c0.453-0.463 0.702-1.040 0.752-1.632 0.037-0.437-0.034-0.882-0.212-1.293-0.248-0.578-0.683-1.027-1.206-1.3-0.371-0.193-0.785-0.298-1.211-0.303l-0.18 0.001c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293h0.090c0.66-0.015 1.242-0.255 1.692-0.644 0.328-0.284 0.585-0.646 0.744-1.058 0.247-0.575 0.274-1.193 0.116-1.756-0.119-0.423-0.341-0.814-0.652-1.136l-0.073-0.073c-0.196-0.196-0.294-0.45-0.294-0.707s0.097-0.512 0.292-0.707c0.197-0.197 0.451-0.295 0.709-0.295s0.512 0.097 0.707 0.292l0.061 0.061c0.463 0.453 1.040 0.702 1.632 0.752 0.37 0.032 0.745-0.014 1.101-0.137 0.096-0.012 0.186-0.036 0.266-0.072-0.031 0.001-0.061 0.003-0.089 0.004-0.201 0.012-0.297 0.038-0.382 0.076h0.080c0.043 0 0.084-0.003 0.125-0.008 0.060-0.021 0.119-0.043 0.177-0.068 0.090-0.004 0.091-0.005 0.092-0.005 0.581-0.249 1.030-0.684 1.303-1.208 0.193-0.37 0.298-0.785 0.303-1.21v-0.181c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707v0.090c0.003 0.637 0.228 1.22 0.603 1.675 0.266 0.323 0.607 0.581 0.996 0.751 0.578 0.255 1.206 0.286 1.778 0.125 0.423-0.119 0.814-0.341 1.136-0.652l0.073-0.072c0.196-0.196 0.45-0.294 0.707-0.294s0.512 0.097 0.707 0.292c0.197 0.197 0.295 0.451 0.295 0.709s-0.097 0.512-0.292 0.707l-0.061 0.061c-0.453 0.463-0.702 1.040-0.752 1.632-0.032 0.37 0.014 0.745 0.137 1.101 0.012 0.095 0.037 0.185 0.072 0.266-0.001-0.032-0.002-0.062-0.004-0.089z" })
], -1), Sp = /* @__PURE__ */ C({
  __name: "FwbMegaMenu",
  setup(e) {
    const { megaMenuVisble: t, toggleMenu: r } = Q("megaMenuToggle");
    return (s, o) => (u(), g("div", {
      id: "mega-menu-full-cta-dropdown-button",
      class: "flex gap-2 items-center justify-between w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0dark:text-gray-400 md:dark:hover:white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
      onClick: o[0] || (o[0] = //@ts-ignore
      (...n) => y(r) && y(r)(...n))
    }, [
      Hd,
      w(s.$slots, "default")
    ]));
  }
}), Dd = { class: "grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6" }, Tp = /* @__PURE__ */ C({
  __name: "FwbMegaMenuDropdown",
  setup(e) {
    const { megaMenuVisble: t, toggleMenu: r } = Q("megaMenuToggle");
    return (s, o) => (u(), g("div", {
      id: "mega-menu-full-cta-dropdown",
      class: x([y(t) == !1 ? "hidden" : "", "mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"])
    }, [
      f("div", Dd, [
        w(s.$slots, "default")
      ])
    ], 2));
  }
}), Wd = { "aria-label": "Navigation" }, Gd = { class: "font-semibold text-gray-900 dark:text-white" }, Ud = { class: "font-semibold text-gray-900 dark:text-white" }, qd = { class: "font-semibold text-gray-900 dark:text-white" }, Yd = ["disabled"], Jd = ["disabled"], Kd = {
  key: 0,
  stroke: "currentColor",
  fill: "currentColor",
  "stroke-width": "0",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  class: "h-5 w-5",
  height: "1em",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, Qd = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Xd = [
  Qd
], Zd = ["disabled", "onClick"], eu = ["disabled"], tu = {
  key: 0,
  stroke: "currentColor",
  fill: "currentColor",
  "stroke-width": "0",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  class: "h-5 w-5",
  height: "1em",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, ru = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), su = [
  ru
], ou = ["disabled"], Pp = /* @__PURE__ */ C({
  __name: "FwbPagination",
  props: {
    modelValue: { default: 1 },
    totalPages: { default: void 0 },
    perPage: { default: 10 },
    totalItems: { default: 10 },
    layout: { default: "pagination" },
    showIcons: { type: Boolean, default: !1 },
    sliceLength: { default: 2 },
    previousLabel: { default: "Prev" },
    nextLabel: { default: "Next" },
    enableFirstAndLastButtons: { type: Boolean, default: !1 },
    showLabels: { type: Boolean, default: !0 },
    large: { type: Boolean, default: !1 }
  },
  emits: ["update:model-value", "page-changed"],
  setup(e, { emit: t }) {
    const r = t, s = e;
    function o(_) {
      r("update:model-value", _), r("page-changed", _);
    }
    function n() {
      r("update:model-value", s.modelValue - 1), r("page-changed", s.modelValue - 1);
    }
    function a() {
      r("update:model-value", s.modelValue + 1), r("page-changed", s.modelValue + 1);
    }
    function l() {
      r("update:model-value", 1), r("page-changed", 1);
    }
    function i() {
      const _ = d.value;
      r("update:model-value", _), r("page-changed", _);
    }
    const d = c(() => s.totalPages ? s.totalPages : Math.ceil(s.totalItems / s.perPage)), p = c(() => s.modelValue <= 1), m = c(() => s.modelValue >= d.value), v = (_) => _ === s.modelValue, h = c(() => {
      if (s.layout === "navigation")
        return [];
      if (s.layout === "table")
        return [];
      if (d.value <= s.sliceLength * 2 + 1) {
        const F = [];
        for (let N = 1; N <= d.value; N++)
          F.push(N);
        return F;
      }
      if (s.modelValue <= s.sliceLength) {
        const F = [], N = Math.abs(s.modelValue - s.sliceLength) + s.modelValue + s.sliceLength + 1;
        for (let D = 1; D <= N; D++)
          F.push(D);
        return F;
      }
      if (s.modelValue >= d.value - s.sliceLength) {
        const F = [];
        for (let N = Math.abs(d.value - s.sliceLength * 2); N <= d.value; N++)
          F.push(N);
        return F;
      }
      const _ = [], E = s.modelValue - s.sliceLength > 0 ? s.modelValue - s.sliceLength : 1;
      for (let F = E; F < s.modelValue + s.sliceLength + 1 && !(F >= d.value); F++)
        _.push(F);
      return _;
    }), b = c(() => s.modelValue * s.perPage - s.perPage + 1), k = c(() => {
      const _ = s.modelValue * s.perPage;
      return s.totalItems && _ > s.totalItems ? s.totalItems : _;
    }), $ = c(() => s.totalItems ? s.totalItems : d.value * s.perPage), S = c(() => s.modelValue === 1), T = c(() => s.modelValue === d.value);
    function A(_) {
      const E = "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", F = "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white", N = "px-4 h-10";
      return B(E, _ && F, s.large && N);
    }
    function L(_) {
      const E = "flex items-center justify-center first:rounded-l-lg last:rounded-r-lg px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", F = "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white cursor-not-allowed", N = "px-4 h-10", D = "border-none text-white hover:text-white bg-gray-800 rounded-none first:rounded-l last:rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
      return B(
        E,
        _ === s.modelValue && F,
        s.large && N,
        (_ > d.value || _ < 1) && F,
        s.layout === "navigation" && "first:mr-3",
        (s.layout === "navigation" || s.layout === "table") && "rounded-lg",
        s.layout === "table" && D
      );
    }
    return (_, E) => (u(), g("nav", Wd, [
      _.layout === "table" ? (u(), g("div", {
        key: 0,
        class: x(["text-gray-700 dark:text-gray-400 mb-2", _.large ? "text-base" : "text-sm"])
      }, [
        te(" Showing "),
        f("span", Gd, M(b.value), 1),
        te(" to "),
        f("span", Ud, M(k.value), 1),
        te(" of "),
        f("span", qd, M($.value), 1)
      ], 2)) : P("", !0),
      f("div", {
        class: x(["inline-flex", _.large && "text-base h-10"])
      }, [
        w(_.$slots, "start"),
        _.enableFirstAndLastButtons ? w(_.$slots, "first-button", { key: 0 }, () => [
          f("button", {
            disabled: S.value,
            class: x(L(1)),
            onClick: l
          }, " First ", 10, Yd)
        ]) : P("", !0),
        w(_.$slots, "prev-button", {
          disabled: p.value,
          decreasePage: n
        }, () => [
          f("button", {
            disabled: p.value,
            class: x(L(_.modelValue - 1)),
            onClick: n
          }, [
            w(_.$slots, "prev-icon", {}, () => [
              _.showIcons || _.$slots["prev-icon"] ? (u(), g("svg", Kd, Xd)) : P("", !0)
            ]),
            _.showLabels ? (u(), g(q, { key: 0 }, [
              te(M(_.previousLabel), 1)
            ], 64)) : P("", !0)
          ], 10, Jd)
        ]),
        (u(!0), g(q, null, Me(h.value, (F) => w(_.$slots, "page-button", {
          key: F,
          page: F,
          setPage: o,
          disabled: v(F)
        }, () => [
          f("button", {
            disabled: v(F),
            class: x(A(F === _.modelValue)),
            onClick: (N) => o(F)
          }, M(F), 11, Zd)
        ])), 128)),
        w(_.$slots, "next-button", {
          disabled: m.value,
          increasePage: a
        }, () => [
          f("button", {
            disabled: m.value,
            class: x(L(_.modelValue + 1)),
            onClick: a
          }, [
            _.showLabels ? (u(), g(q, { key: 0 }, [
              te(M(_.nextLabel), 1)
            ], 64)) : P("", !0),
            w(_.$slots, "next-icon", {}, () => [
              _.showIcons || _.$slots["next-icon"] ? (u(), g("svg", tu, su)) : P("", !0)
            ])
          ], 10, eu)
        ]),
        _.enableFirstAndLastButtons ? w(_.$slots, "last-button", { key: 1 }, () => [
          f("button", {
            disabled: T.value,
            class: x(L(d.value)),
            onClick: i
          }, " Last ", 10, ou)
        ]) : P("", !0),
        w(_.$slots, "end")
      ], 2)
    ]));
  }
}), nu = {
  default: "bg-blue-600 dark:bg-blue-600",
  blue: "bg-blue-600 dark:bg-blue-600",
  dark: "bg-gray-600 dark:bg-gray-300",
  green: "bg-green-600 dark:bg-green-500",
  red: "bg-red-600 dark:bg-red-500",
  yellow: "bg-yellow-400",
  indigo: "bg-indigo-600 dark:bg-indigo-500",
  purple: "bg-purple-600 dark:bg-purple-500"
}, au = {
  default: "",
  blue: "text-blue-700 dark:text-blue-500",
  dark: "dark:text-white",
  green: "text-green-700 dark:text-green-500",
  red: "text-red-700 dark:text-red-500",
  yellow: "text-yellow-700 dark:text-yellow-500",
  indigo: "text-indigo-700 dark:text-indigo-500",
  purple: "text-purple-700 dark:text-purple-500"
}, Hr = {
  sm: "h-1.5 text-xs leading-none",
  md: "h-2.5 text-xs leading-none",
  lg: "h-4 text-sm leading-none",
  xl: "h-6 text-base leading-tight"
};
function lu(e) {
  const t = c(() => W(
    nu[e.color.value],
    Hr[e.size.value]
  )), r = c(() => W(
    Hr[e.size.value]
  )), s = c(() => W(
    au[e.color.value]
  ));
  return {
    innerClasses: t,
    outerClasses: r,
    outsideLabelClasses: s
  };
}
const iu = {
  key: 0,
  class: "flex justify-between mb-1"
}, Fp = /* @__PURE__ */ C({
  __name: "FwbProgress",
  props: {
    color: { default: "default" },
    label: { default: "" },
    labelPosition: { default: "none" },
    labelProgress: { type: Boolean, default: !1 },
    progress: { default: 0 },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, {
      innerClasses: r,
      outerClasses: s,
      outsideLabelClasses: o
    } = lu(Y(t));
    return (n, a) => (u(), g("div", null, [
      n.label || n.labelProgress && n.labelPosition === "outside" ? (u(), g("div", iu, [
        f("span", {
          class: x([y(o), "text-base font-medium"])
        }, M(n.label), 3),
        n.labelProgress && n.labelPosition === "outside" ? (u(), g("span", {
          key: 0,
          class: x([y(o), "text-sm font-medium"])
        }, M(n.progress) + "%", 3)) : P("", !0)
      ])) : P("", !0),
      f("div", {
        class: x([y(s), "w-full bg-gray-200 rounded-full dark:bg-gray-700"])
      }, [
        f("div", {
          class: x([y(r), "rounded-full font-medium text-blue-100 text-center p-0.5"]),
          style: et({ width: n.progress + "%" })
        }, [
          n.labelProgress && n.labelPosition === "inside" ? (u(), g(q, { key: 0 }, [
            te(M(n.progress) + "% ", 1)
          ], 64)) : P("", !0)
        ], 6)
      ], 2)
    ]));
  }
}), du = {
  sm: "w-5 h-5",
  md: "w-7 h-7",
  lg: "w-10 h-10"
};
function uu(e) {
  return { sizeClasses: c(() => W(
    du[e.size.value] ?? ""
  )) };
}
const cu = { class: "flex items-center" }, fu = /* @__PURE__ */ f("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1), pu = [
  fu
], gu = /* @__PURE__ */ f("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1), hu = [
  gu
], mu = /* @__PURE__ */ f("span", { class: "w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" }, null, -1), bu = ["href"], zp = /* @__PURE__ */ C({
  __name: "FwbRating",
  props: {
    rating: { default: 3 },
    reviewLink: { default: "" },
    reviewText: { default: "" },
    scale: { default: 5 },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, r = c(() => Math.floor(t.rating)), s = c(() => t.scale - r.value), { sizeClasses: o } = uu(Y(t));
    return (n, a) => (u(), g("div", cu, [
      (u(!0), g(q, null, Me(r.value, (l) => (u(), g("svg", {
        key: l,
        class: x([y(o), "text-yellow-400"]),
        fill: "currentColor",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, pu, 2))), 128)),
      (u(!0), g(q, null, Me(s.value, (l) => (u(), g("svg", {
        key: l,
        class: x([y(o), "text-gray-300 dark:text-gray-500"]),
        fill: "currentColor",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, hu, 2))), 128)),
      w(n.$slots, "besideText"),
      n.reviewText && n.reviewLink ? (u(), g(q, { key: 0 }, [
        mu,
        f("a", {
          href: n.reviewLink,
          class: "text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
        }, M(n.reviewText), 9, bu)
      ], 64)) : P("", !0)
    ]));
  }
}), vu = { class: "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800" }, yu = { class: "space-y-2 font-medium" }, Ap = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbSidebar",
  setup(e) {
    const t = ae(), r = B("absolute top-0 left-0 z-40 w-64 h-screen transition-transform", t.class);
    return (s, o) => (u(), g("aside", re(s.$attrs, {
      class: y(r),
      "aria-label": "Sidebar"
    }), [
      f("div", vu, [
        f("div", yu, [
          w(s.$slots, "default")
        ])
      ])
    ], 16));
  }
}), wu = {
  class: "p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900",
  role: "alert"
}, xu = { class: "flex items-center mb-3" }, ku = { class: "bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900" }, _u = /* @__PURE__ */ f("span", { class: "sr-only" }, "Close", -1), Cu = /* @__PURE__ */ f("svg", {
  class: "w-2.5 h-2.5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 14 14"
}, [
  /* @__PURE__ */ f("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
  })
], -1), $u = [
  _u,
  Cu
], Ip = /* @__PURE__ */ C({
  __name: "FwbSidebarCta",
  props: {
    label: { default: void 0 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = t;
    function s() {
      r("close");
    }
    return (o, n) => (u(), g("div", wu, [
      f("div", xu, [
        f("span", ku, M(o.label), 1),
        f("button", {
          type: "button",
          class: "ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800",
          "aria-label": "Close",
          onClick: s
        }, $u)
      ]),
      w(o.$slots, "default")
    ]));
  }
}), Su = { class: "overflow-hidden" }, Tu = /* @__PURE__ */ f("svg", {
  class: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 18 21"
}, [
  /* @__PURE__ */ f("path", { d: "M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" })
], -1), Pu = { class: "flex-1 ml-3 text-left whitespace-nowrap" }, Fu = /* @__PURE__ */ f("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m1 1 4 4 4-4"
}, null, -1), zu = [
  Fu
], Au = { class: "py-2 space-y-2 z-0 overflow-hidden" }, Iu = { key: 0 }, Mp = /* @__PURE__ */ C({
  __name: "FwbSidebarDropdownItem",
  setup(e) {
    const t = R(!1);
    function r() {
      t.value = !t.value;
    }
    return (s, o) => (u(), g("div", Su, [
      f("button", {
        type: "button",
        class: "flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 z-10",
        "aria-controls": "dropdown-content",
        onClick: r
      }, [
        w(s.$slots, "icon", {}, () => [
          Tu
        ]),
        f("span", Pu, [
          w(s.$slots, "trigger")
        ]),
        w(s.$slots, "arrow-icon", { toggleDropdown: r }, () => [
          (u(), g("svg", {
            class: x(["w-3 h-3 transition-all duration-300", t.value && "rotate-180"]),
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 10 6"
          }, zu, 2))
        ])
      ]),
      f("div", Au, [
        ze(ds, {
          duration: 150,
          "enter-from-class": "-translate-y-full",
          "enter-to-class": "translate-y-0",
          "enter-active-class": "transition duration-400 ease-out",
          "leave-active-class": "transition duration-400 ease-in",
          "leave-from-class": "translate-y-0",
          "leave-to-class": "-translate-y-full"
        }, {
          default: j(() => [
            t.value ? (u(), g("div", Iu, [
              w(s.$slots, "default")
            ])) : P("", !0)
          ]),
          _: 3
        })
      ])
    ]));
  }
}), Op = /* @__PURE__ */ C({
  __name: "FwbSidebarItem",
  props: {
    link: { default: "/" },
    tag: { default: "router-link" }
  },
  setup(e) {
    const t = e, r = t.tag === "a" ? "a" : be(t.tag), s = t.tag === "a" ? "href" : "to";
    return (o, n) => (u(), H(X(y(r)), Se({
      [y(s) || ""]: o.link,
      class: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    }), {
      default: j(() => [
        w(o.$slots, "icon"),
        f("span", {
          class: x(["flex-1 whitespace-nowrap", o.$slots.icon && "ml-3"])
        }, [
          w(o.$slots, "default")
        ], 2),
        w(o.$slots, "suffix")
      ]),
      _: 3
    }, 16));
  }
}), Mu = "pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700", Bp = /* @__PURE__ */ C({
  __name: "FwbSidebarItemGroup",
  props: {
    border: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, r) => (u(), g("div", {
      class: x(t.border && Mu)
    }, [
      w(t.$slots, "default")
    ], 2));
  }
}), Ou = ["src", "alt"], Bu = { class: "self-center text-xl font-semibold whitespace-nowrap dark:text-white" }, Lp = /* @__PURE__ */ C({
  __name: "FwbSidebarLogo",
  props: {
    name: { default: "" },
    link: { default: "/" },
    logo: { default: "" },
    alt: { default: "" },
    tag: { default: "router-link" }
  },
  setup(e) {
    const t = e, r = t.tag === "a" ? "a" : be(t.tag), s = t.tag === "a" ? "href" : "to";
    return (o, n) => (u(), H(X(y(r)), Se({
      [y(s) || ""]: o.link,
      class: "flex items-center mb-5 pl-2.5"
    }), {
      default: j(() => [
        f("img", {
          src: o.logo,
          class: "h-6 mr-3 sm:h-7",
          alt: o.alt ?? o.name
        }, null, 8, Ou),
        f("span", Bu, M(o.name), 1)
      ]),
      _: 1
    }, 16));
  }
}), Lu = { class: "relative overflow-x-auto shadow-md sm:rounded-lg" }, Eu = { class: "w-full text-sm text-left text-gray-500 dark:text-gray-400" }, Ep = /* @__PURE__ */ C({
  __name: "FwbTable",
  props: {
    striped: {
      type: Boolean,
      default: !1
    },
    stripedColumns: {
      type: Boolean,
      default: !1
    },
    hoverable: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    return de("hoverable", t.hoverable), de("striped", t.striped), de("stripedColumns", t.stripedColumns), (r, s) => (u(), g("div", Lu, [
      f("table", Eu, [
        w(r.$slots, "default")
      ])
    ]));
  }
}), Nu = {};
function Ru(e, t) {
  return u(), g("tbody", null, [
    w(e.$slots, "default")
  ]);
}
const Np = /* @__PURE__ */ he(Nu, [["render", Ru]]), Vu = "px-6 py-4 first:font-medium first:text-gray-900 first:dark:text-white first:whitespace-nowrap last:text-right", ju = "even:bg-gray-white even:dark:bg-gray-900 odd:dark:bg-gray-800 odd:bg-gray-50";
function Hu() {
  const e = Q("stripedColumns");
  return { tableCellClasses: c(() => W(
    Vu,
    { [ju]: e }
  )) };
}
const Rp = /* @__PURE__ */ C({
  __name: "FwbTableCell",
  setup(e) {
    const { tableCellClasses: t } = Hu();
    return (r, s) => (u(), g("td", {
      class: x(y(t))
    }, [
      w(r.$slots, "default")
    ], 2));
  }
}), Du = {}, Wu = { class: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" };
function Gu(e, t) {
  return u(), g("thead", Wu, [
    f("tr", null, [
      w(e.$slots, "default")
    ])
  ]);
}
const Vp = /* @__PURE__ */ he(Du, [["render", Gu]]), Uu = "px-6 py-3 text-xs uppercase", qu = "even:bg-white even:dark:bg-gray-900 odd:dark:bg-gray-800 odd:bg-gray-50";
function Yu() {
  const e = Q("stripedColumns");
  return { tableHeadCellClasses: c(() => W(
    Uu,
    { [qu]: e }
  )) };
}
const jp = /* @__PURE__ */ C({
  __name: "FwbTableHeadCell",
  setup(e) {
    const { tableHeadCellClasses: t } = Yu();
    return (r, s) => (u(), g("th", {
      scope: "col",
      class: x(y(t))
    }, [
      w(r.$slots, "default")
    ], 2));
  }
}), Ju = "bg-white dark:bg-gray-800 [&:not(:last-child)]:border-b [&:not(:last-child)]:dark:border-gray-700", Ku = "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700", Qu = "hover:bg-gray-50 dark:hover:bg-gray-600";
function Xu() {
  const e = Q("striped"), t = Q("hoverable");
  return { tableRowClasses: c(() => W(
    Ju,
    {
      [Qu]: t,
      [Ku]: e
    }
  )) };
}
const Hp = /* @__PURE__ */ C({
  __name: "FwbTableRow",
  setup(e) {
    const { tableRowClasses: t } = Xu();
    return (r, s) => (u(), g("tr", {
      class: x(y(t))
    }, [
      w(r.$slots, "default")
    ], 2));
  }
}), Ms = "flowbite-tab-activate-func-injection", Os = "flowbite-tab-active-name-injection", Bs = "flowbite-tab-style-injection", Ls = "flowbite-tab-visibility-directive-injection", Zu = { key: 0 }, ec = { key: 1 }, Dp = /* @__PURE__ */ C({
  __FLOWBITE_TAB__: !0,
  __name: "FwbTab",
  props: {
    name: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Q(Os, ""), r = Q(Ls, "if");
    return (s, o) => y(r) === "if" ? (u(), g(q, { key: 0 }, [
      y(t) === e.name ? (u(), g("div", Zu, [
        w(s.$slots, "default")
      ])) : P("", !0)
    ], 64)) : y(r) === "show" ? Te((u(), g("div", ec, [
      w(s.$slots, "default")
    ], 512)), [
      [co, y(t) === e.name]
    ]) : P("", !0);
  }
});
function tc(e) {
  const t = c(() => B(
    "flex flex-wrap font-medium text-center text-gray-500 dark:text-gray-400 text-sm",
    e.variant === "underline" && "-mb-px",
    e.variant === "default" && "border-b border-gray-200 dark:border-gray-700"
  ));
  return {
    divClasses: c(() => e.variant === "underline" ? "border-b border-gray-200 dark:border-gray-700 font-medium text-center text-gray-500 dark:text-gray-400 text-sm" : ""),
    ulClasses: t
  };
}
const Es = "flowbite-themable-injection-key", Ne = {
  blue: {
    background: "bg-blue-700 dark:bg-blue-600",
    disabled: "",
    hover: "hover:bg-blue-800 dark:hover:bg-blue-700",
    text: "text-blue-600 dark:text-blue-500",
    border: "border-blue-600 dark:border-blue-500",
    focus: "focus:ring-blue-300 dark:focus:ring-blue-800"
  },
  green: {
    background: "bg-green-700 dark:bg-green-600",
    disabled: "",
    hover: "hover:bg-green-800 dark:hover:bg-green-700",
    text: "text-green-600 dark:text-green-500",
    border: "border-green-600 dark:border-green-500",
    focus: "focus:ring-green-300 dark:focus:ring-green-800"
  },
  pink: {
    background: "bg-pink-700 dark:bg-pink-600",
    disabled: "",
    hover: "hover:bg-pink-800 dark:hover:bg-pink-700",
    text: "text-pink-600 dark:text-pink-500",
    border: "border-pink-600 dark:border-pink-500",
    focus: "focus:ring-pink-300 dark:focus:ring-pink-900"
  },
  purple: {
    background: "bg-purple-700 dark:bg-purple-600",
    disabled: "",
    hover: "hover:bg-purple-800 dark:hover:bg-purple-700",
    text: "text-purple-600 dark:text-purple-500",
    border: "border-purple-600 dark:border-purple-500",
    focus: "focus:ring-purple-300 dark:focus:ring-purple-900"
  },
  red: {
    background: "bg-red-700 dark:bg-red-600",
    disabled: "",
    hover: "hover:bg-red-800 dark:hover:bg-red-700",
    text: "text-red-600 dark:text-red-500",
    border: "border-red-600 dark:border-red-500",
    focus: "focus:ring-red-300 dark:focus:ring-red-900"
  }
};
function Ns(e) {
  const t = Q(Es, R(null)), r = c(() => e || t.value), s = c(() => !!t?.value), o = c(
    () => r.value ? Ne[r.value].background : ""
  ), n = c(
    () => r.value ? Ne[r.value].border : ""
  ), a = c(() => t?.value || void 0), l = c(
    () => r.value ? Ne[r.value].disabled : ""
  ), i = c(
    () => r.value ? Ne[r.value].focus : ""
  ), d = c(
    () => r.value ? Ne[r.value].hover : ""
  ), p = c(
    () => r.value ? Ne[r.value].text : ""
  );
  return {
    backgroundClasses: o,
    borderClasses: n,
    color: a,
    disabledClasses: l,
    focusClasses: i,
    hoverClasses: d,
    isActive: s,
    textClasses: p
  };
}
const rc = {
  default: "cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
  active: "cursor-pointer inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",
  disabled: "inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"
}, sc = {
  default: "cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
  active: "cursor-pointer inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
  disabled: "inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"
}, oc = {
  default: "cursor-pointer inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
  active: "cursor-pointer inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active",
  disabled: "inline-block py-3 px-4 text-gray-400 cursor-not-allowed dark:text-gray-500"
};
function nc(e) {
  const t = Ns();
  return { tabClasses: c(() => {
    const s = t.isActive.value, o = e.active.value ? "active" : e.disabled.value ? "disabled" : "default";
    return e.variant === "default" ? ne(
      rc[o],
      (s && o) === "active" ? t.textClasses.value : ""
    ) : e.variant === "underline" ? ne(
      sc[o],
      (s && o) === "active" ? [t.borderClasses.value, t.textClasses.value] : ""
    ) : e.variant === "pills" ? ne(
      oc[o],
      (s && o) === "active" ? [t.backgroundClasses.value, "text-white"] : ""
    ) : "";
  }) };
}
const ac = /* @__PURE__ */ C({
  __name: "FwbTabPane",
  props: {
    name: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = Q(Bs);
    r || console.warn("you can't use Tab outside of Tabs component. No tab style injection found");
    const s = Q(Ms);
    s || console.warn("you can't use Tab outside of Tabs component. No tab activate injection found");
    const o = () => {
      if (!t.disabled) {
        if (!s)
          return console.warn("no onActivate");
        s(t.name);
      }
    }, { tabClasses: n } = nc({
      active: nt(t, "active"),
      disabled: nt(t, "disabled"),
      variant: r
    });
    return (a, l) => (u(), g("li", null, [
      f("div", {
        class: x(y(n)),
        onClick: o
      }, M(e.title), 3)
    ]));
  }
}), Wp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbTabs",
  props: {
    variant: { default: "default" },
    modelValue: { default: "" },
    directive: { default: "if" }
  },
  emits: ["update:modelValue", "click:pane"],
  setup(e, { emit: t }) {
    const r = e, s = t, { ulClasses: o, divClasses: n } = tc(r);
    de(Bs, r.variant);
    const l = De().default, i = c(() => l ? St(l()).filter((v) => v.type.__FLOWBITE_TAB__) : []), d = c({
      get: () => r.modelValue,
      set: (v) => s("update:modelValue", v)
    });
    de(Os, d), de(Ls, nt(r, "directive"));
    const p = (v) => {
      d.value = v;
    }, m = () => {
      s("click:pane");
    };
    return de(Ms, p), (v, h) => (u(), g(q, null, [
      f("div", {
        class: x(y(n))
      }, [
        f("ul", {
          class: x(y(o))
        }, [
          (u(!0), g(q, null, Me(i.value, (b, k) => (u(), H(ac, {
            key: k,
            active: d.value === b.props?.name,
            disabled: b.props?.disabled,
            name: b.props?.name,
            title: b.props?.title,
            onClick: m
          }, null, 8, ["active", "disabled", "name", "title"]))), 128))
        ], 2)
      ], 2),
      f("div", Se(ps(v.$attrs)), [
        w(v.$slots, "default")
      ], 16)
    ], 64));
  }
}), lc = "relative border-gray-200 dark:border-gray-700", ic = "border-l", dc = "flex", Gp = /* @__PURE__ */ C({
  __name: "FwbTimeline",
  props: {
    horizontal: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    de("horizontal", t.horizontal);
    const r = c(() => W(
      lc,
      t.horizontal ? dc : ic
    ));
    return (s, o) => (u(), g("ol", re({ class: r.value }, s.$attrs), [
      w(s.$slots, "default")
    ], 16));
  }
}), uc = {}, cc = { class: "font-normal mb-4 text-base text-gray-500 dark:text-gray-400" };
function fc(e, t) {
  return u(), g("p", cc, [
    w(e.$slots, "default")
  ]);
}
const Up = /* @__PURE__ */ he(uc, [["render", fc]]), qp = /* @__PURE__ */ C({
  __name: "FwbTimelineContent",
  setup(e) {
    const t = Q("horizontal"), r = c(() => W(t ? "mt-3 sm:pr-8" : ""));
    return (s, o) => (u(), g("div", {
      class: x(r.value)
    }, [
      w(s.$slots, "default")
    ], 2));
  }
}), pc = "mb-10", gc = "mb-6 sm:mb-0 relative", hc = "ml-6", Yp = /* @__PURE__ */ C({
  __name: "FwbTimelineItem",
  setup(e) {
    const t = Q("horizontal"), r = c(() => W(pc, t ? gc : hc));
    return (s, o) => (u(), g("li", {
      class: x(r.value)
    }, [
      w(s.$slots, "default")
    ], 2));
  }
}), mc = "h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex", Jp = /* @__PURE__ */ C({
  __name: "FwbTimelinePoint",
  setup(e) {
    const t = De(), r = c(() => !!t.default), s = Q("horizontal"), o = c(() => W(s ? "flex items-center" : "")), n = c(() => W(mc, { "sm:hidden hidden": !s })), a = c(() => {
      const l = "absolute rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700", i = "mt-1.5 w-3 h-3 bg-gray-200", d = "mt-1.5 w-6 h-6 -left-3 flex justify-center items-center bg-blue-200 ring-8 ring-white dark:ring-gray-900", p = "w-3 h-3 bg-gray-200", m = "w-6 h-6 -left-3 flex justify-center items-center bg-blue-200 ring-8 ring-white dark:ring-gray-900", v = !s && !r.value, h = !s && r.value, b = s && !r.value, k = s && r.value;
      return W(
        l,
        {
          [i]: v,
          [d]: h,
          [p]: b,
          [m]: k
        }
      );
    });
    return (l, i) => (u(), g("div", {
      class: x(o.value)
    }, [
      f("div", {
        class: x(a.value)
      }, [
        w(l.$slots, "default")
      ], 2),
      f("div", {
        class: x(n.value)
      }, null, 2)
    ], 2));
  }
}), bc = {}, vc = { class: "font-normal leading-none mb-1 text-gray-400 dark:text-gray-500 text-sm" };
function yc(e, t) {
  return u(), g("time", vc, [
    w(e.$slots, "default")
  ]);
}
const Kp = /* @__PURE__ */ he(bc, [["render", yc]]), wc = {}, xc = { class: "font-semibold text-gray-900 dark:text-white text-lg" };
function kc(e, t) {
  return u(), g("h3", xc, [
    w(e.$slots, "default")
  ]);
}
const Qp = /* @__PURE__ */ he(wc, [["render", kc]]), _c = {
  danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
  empty: "",
  success: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
  warning: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200"
}, Cc = {
  center: "items-center",
  end: "items-end",
  start: "items-start"
}, Dr = "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800", Wr = "text-sm font-normal";
function $c(e) {
  const t = c(() => _c[e.type.value]), r = c(() => {
    const o = Cc[e.alignment.value];
    return e.divide.value ? ne(Dr, "dark:divide-gray-700 divide-x divide-gray-200", o) : ne(Dr, o);
  }), s = c(() => e.type.value !== "empty" && e.divide.value ? ne(Wr, "pl-3") : Wr);
  return {
    typeClasses: t,
    wrapperClasses: r,
    contentClasses: s
  };
}
function Sc(e) {
  const {
    backgroundClasses: t,
    borderClasses: r,
    disabledClasses: s,
    focusClasses: o,
    hoverClasses: n,
    isActive: a,
    textClasses: l
  } = Ns(e.theme?.value);
  return {
    classes: c(() => {
      if (!a.value)
        return "";
      const d = [];
      return e.apply.value.includes("text") && d.push(l.value), e.apply.value.includes("border") && d.push(r.value), e.apply.value.includes("background") && d.push(t.value), e.apply.value.includes("hover") && d.push(n.value), e.apply.value.includes("disabled") && d.push(s.value), e.apply.value.includes("focus") && d.push(o.value), d.join(" ");
    })
  };
}
const Tc = /* @__PURE__ */ C({
  __name: "FlowbiteThemableChild",
  props: {
    apply: {
      type: Array,
      required: !0
    },
    tag: {
      type: String,
      default: "div"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    const t = ae(), r = e, { classes: s } = Sc(Y(r)), o = c(() => t.class || "");
    return (n, a) => (u(), H(X(e.tag), {
      class: x(y(ne)(o.value, y(s)))
    }, {
      default: j(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Pc = {
  key: 1,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Fc = /* @__PURE__ */ f("path", {
  "clip-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "fill-rule": "evenodd"
}, null, -1), zc = [
  Fc
], Ac = {
  key: 2,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Ic = /* @__PURE__ */ f("path", {
  "clip-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "fill-rule": "evenodd"
}, null, -1), Mc = [
  Ic
], Oc = {
  key: 3,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Bc = /* @__PURE__ */ f("path", {
  "clip-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "fill-rule": "evenodd"
}, null, -1), Lc = [
  Bc
], Ec = /* @__PURE__ */ f("span", { class: "sr-only" }, "Close", -1), Nc = /* @__PURE__ */ f("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ f("path", {
    "clip-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "fill-rule": "evenodd"
  })
], -1), Rc = [
  Ec,
  Nc
], Gr = /* @__PURE__ */ C({
  __name: "FwbToast",
  props: {
    type: {
      type: String,
      default: "empty"
    },
    alignment: {
      type: String,
      default: "center"
    },
    closable: {
      type: Boolean,
      default: !1
    },
    divide: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, s = R(!0), o = t, {
      typeClasses: n,
      wrapperClasses: a,
      contentClasses: l
    } = $c(Y(r)), i = () => {
      o("close"), s.value = !1;
    };
    return (d, p) => s.value ? (u(), g("div", {
      key: 0,
      id: "toast-default",
      class: x(y(a)),
      role: "alert"
    }, [
      e.type !== "empty" || d.$slots.icon ? (u(), H(Tc, {
        key: 0,
        apply: ["background", "text"],
        class: x(["inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg", y(n)])
      }, {
        default: j(() => [
          d.$slots.icon ? w(d.$slots, "icon", {
            key: 0,
            class: x({ "ml-3": e.type !== "empty" })
          }) : e.type === "success" ? (u(), g("svg", Pc, zc)) : e.type === "danger" ? (u(), g("svg", Ac, Mc)) : e.type === "warning" ? (u(), g("svg", Oc, Lc)) : P("", !0)
        ]),
        _: 3
      }, 8, ["class"])) : P("", !0),
      f("div", {
        class: x([y(l), { "ml-3": d.$slots.icon || e.type !== "empty" }])
      }, [
        w(d.$slots, "default")
      ], 2),
      e.closable ? (u(), g("button", {
        key: 1,
        "aria-label": "Close",
        class: "border-none ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
        type: "button",
        onClick: i
      }, Rc)) : P("", !0)
    ], 2)) : P("", !0);
  }
}), Rs = "flowbite-toast-injection-key", Vc = C({
  components: {
    FwbToast: Gr
  },
  props: {
    transition: {
      type: String,
      default: "slide-left"
    }
  },
  setup() {
    const e = R([]), t = (n, a) => {
      Ia(() => o(n), a);
    }, r = (n) => {
      const a = parseInt(((/* @__PURE__ */ new Date()).getTime() * Math.random()).toString()).toString();
      return e.value.push({
        id: a,
        ...n
      }), n.time > 0 && t(a, n.time), a;
    }, s = () => {
      if (e.value.length === 0)
        return "";
      const n = e.value[e.value.length - 1].id;
      return e.value.pop(), n;
    }, o = (n) => {
      const a = e.value.findIndex((l) => l.id === n);
      return a >= 0 && e.value.splice(a, 1), a >= 0;
    };
    return de(Rs, {
      add: r,
      pop: s,
      remove: o
    }), {
      toasts: e,
      removeToast: o
    };
  },
  render() {
    const { $props: e, $slots: t, toasts: r, removeToast: s } = this;
    return pt("div", {}, [
      t.default ? t.default() : null,
      // rendering default slot
      pt(
        fo,
        {
          name: e.transition,
          tag: "div",
          class: "xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50"
        },
        {
          default: () => r.map(
            (o) => o.component ? pt(
              o.component,
              {
                key: o.id,
                onClose: () => s(o.id),
                ...o.componentProps ? o.componentProps : {}
              },
              () => o.text
            ) : pt(
              Gr,
              {
                closable: !0,
                type: o.type,
                key: o.id,
                onClose: () => s(o.id)
              },
              () => o.text
            )
          )
        }
      )
    ]);
  }
});
const Xp = /* @__PURE__ */ he(Vc, [["__scopeId", "data-v-aba06225"]]), jc = ["top", "right", "bottom", "left"], Ur = ["start", "end"], qr = /* @__PURE__ */ jc.reduce((e, t) => e.concat(t, t + "-" + Ur[0], t + "-" + Ur[1]), []), lt = Math.min, Fe = Math.max, Hc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Dc = {
  start: "end",
  end: "start"
};
function qt(e, t, r) {
  return Fe(e, lt(t, r));
}
function Ee(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ge(e) {
  return e.split("-")[0];
}
function ue(e) {
  return e.split("-")[1];
}
function Vs(e) {
  return e === "x" ? "y" : "x";
}
function ur(e) {
  return e === "y" ? "height" : "width";
}
function ct(e) {
  return ["top", "bottom"].includes(ge(e)) ? "y" : "x";
}
function cr(e) {
  return Vs(ct(e));
}
function js(e, t, r) {
  r === void 0 && (r = !1);
  const s = ue(e), o = cr(e), n = ur(o);
  let a = o === "x" ? s === (r ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[n] > t.floating[n] && (a = Pt(a)), [a, Pt(a)];
}
function Wc(e) {
  const t = Pt(e);
  return [Tt(e), t, Tt(t)];
}
function Tt(e) {
  return e.replace(/start|end/g, (t) => Dc[t]);
}
function Gc(e, t, r) {
  const s = ["left", "right"], o = ["right", "left"], n = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? o : s : t ? s : o;
    case "left":
    case "right":
      return t ? n : a;
    default:
      return [];
  }
}
function Uc(e, t, r, s) {
  const o = ue(e);
  let n = Gc(ge(e), r === "start", s);
  return o && (n = n.map((a) => a + "-" + o), t && (n = n.concat(n.map(Tt)))), n;
}
function Pt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Hc[t]);
}
function qc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hs(e) {
  return typeof e != "number" ? qc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function tt(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Yr(e, t, r) {
  let {
    reference: s,
    floating: o
  } = e;
  const n = ct(t), a = cr(t), l = ur(a), i = ge(t), d = n === "y", p = s.x + s.width / 2 - o.width / 2, m = s.y + s.height / 2 - o.height / 2, v = s[l] / 2 - o[l] / 2;
  let h;
  switch (i) {
    case "top":
      h = {
        x: p,
        y: s.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: p,
        y: s.y + s.height
      };
      break;
    case "right":
      h = {
        x: s.x + s.width,
        y: m
      };
      break;
    case "left":
      h = {
        x: s.x - o.width,
        y: m
      };
      break;
    default:
      h = {
        x: s.x,
        y: s.y
      };
  }
  switch (ue(t)) {
    case "start":
      h[a] -= v * (r && d ? -1 : 1);
      break;
    case "end":
      h[a] += v * (r && d ? -1 : 1);
      break;
  }
  return h;
}
const Yc = async (e, t, r) => {
  const {
    placement: s = "bottom",
    strategy: o = "absolute",
    middleware: n = [],
    platform: a
  } = r, l = n.filter(Boolean), i = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: p,
    y: m
  } = Yr(d, s, i), v = s, h = {}, b = 0;
  for (let k = 0; k < l.length; k++) {
    const {
      name: $,
      fn: S
    } = l[k], {
      x: T,
      y: A,
      data: L,
      reset: _
    } = await S({
      x: p,
      y: m,
      initialPlacement: s,
      placement: v,
      strategy: o,
      middlewareData: h,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = T ?? p, m = A ?? m, h = {
      ...h,
      [$]: {
        ...h[$],
        ...L
      }
    }, _ && b <= 50 && (b++, typeof _ == "object" && (_.placement && (v = _.placement), _.rects && (d = _.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: p,
      y: m
    } = Yr(d, v, i)), k = -1);
  }
  return {
    x: p,
    y: m,
    placement: v,
    strategy: o,
    middlewareData: h
  };
};
async function Bt(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: s,
    y: o,
    platform: n,
    rects: a,
    elements: l,
    strategy: i
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: m = "floating",
    altBoundary: v = !1,
    padding: h = 0
  } = Ee(t, e), b = Hs(h), $ = l[v ? m === "floating" ? "reference" : "floating" : m], S = tt(await n.getClippingRect({
    element: (r = await (n.isElement == null ? void 0 : n.isElement($))) == null || r ? $ : $.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(l.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: i
  })), T = m === "floating" ? {
    ...a.floating,
    x: s,
    y: o
  } : a.reference, A = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(l.floating)), L = await (n.isElement == null ? void 0 : n.isElement(A)) ? await (n.getScale == null ? void 0 : n.getScale(A)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = tt(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: T,
    offsetParent: A,
    strategy: i
  }) : T);
  return {
    top: (S.top - _.top + b.top) / L.y,
    bottom: (_.bottom - S.bottom + b.bottom) / L.y,
    left: (S.left - _.left + b.left) / L.x,
    right: (_.right - S.right + b.right) / L.x
  };
}
const Jc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: s,
      placement: o,
      rects: n,
      platform: a,
      elements: l,
      middlewareData: i
    } = t, {
      element: d,
      padding: p = 0
    } = Ee(e, t) || {};
    if (d == null)
      return {};
    const m = Hs(p), v = {
      x: r,
      y: s
    }, h = cr(o), b = ur(h), k = await a.getDimensions(d), $ = h === "y", S = $ ? "top" : "left", T = $ ? "bottom" : "right", A = $ ? "clientHeight" : "clientWidth", L = n.reference[b] + n.reference[h] - v[h] - n.floating[b], _ = v[h] - n.reference[h], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let F = E ? E[A] : 0;
    (!F || !await (a.isElement == null ? void 0 : a.isElement(E))) && (F = l.floating[A] || n.floating[b]);
    const N = L / 2 - _ / 2, D = F / 2 - k[b] / 2 - 1, G = lt(m[S], D), J = lt(m[T], D), z = G, ce = F - k[b] - J, U = F / 2 - k[b] / 2 + N, Z = qt(z, U, ce), K = !i.arrow && ue(o) != null && U !== Z && n.reference[b] / 2 - (U < z ? G : J) - k[b] / 2 < 0, se = K ? U < z ? U - z : U - ce : 0;
    return {
      [h]: v[h] + se,
      data: {
        [h]: Z,
        centerOffset: U - Z - se,
        ...K && {
          alignmentOffset: se
        }
      },
      reset: K
    };
  }
});
function Kc(e, t, r) {
  return (e ? [...r.filter((o) => ue(o) === e), ...r.filter((o) => ue(o) !== e)] : r.filter((o) => ge(o) === o)).filter((o) => e ? ue(o) === e || (t ? Tt(o) !== o : !1) : !0);
}
const Qc = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var r, s, o;
      const {
        rects: n,
        middlewareData: a,
        placement: l,
        platform: i,
        elements: d
      } = t, {
        crossAxis: p = !1,
        alignment: m,
        allowedPlacements: v = qr,
        autoAlignment: h = !0,
        ...b
      } = Ee(e, t), k = m !== void 0 || v === qr ? Kc(m || null, h, v) : v, $ = await Bt(t, b), S = ((r = a.autoPlacement) == null ? void 0 : r.index) || 0, T = k[S];
      if (T == null)
        return {};
      const A = js(T, n, await (i.isRTL == null ? void 0 : i.isRTL(d.floating)));
      if (l !== T)
        return {
          reset: {
            placement: k[0]
          }
        };
      const L = [$[ge(T)], $[A[0]], $[A[1]]], _ = [...((s = a.autoPlacement) == null ? void 0 : s.overflows) || [], {
        placement: T,
        overflows: L
      }], E = k[S + 1];
      if (E)
        return {
          data: {
            index: S + 1,
            overflows: _
          },
          reset: {
            placement: E
          }
        };
      const F = _.map((G) => {
        const J = ue(G.placement);
        return [G.placement, J && p ? (
          // Check along the mainAxis and main crossAxis side.
          G.overflows.slice(0, 2).reduce((z, ce) => z + ce, 0)
        ) : (
          // Check only the mainAxis.
          G.overflows[0]
        ), G.overflows];
      }).sort((G, J) => G[1] - J[1]), D = ((o = F.filter((G) => G[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        ue(G[0]) ? 2 : 3
      ).every((J) => J <= 0))[0]) == null ? void 0 : o[0]) || F[0][0];
      return D !== l ? {
        data: {
          index: S + 1,
          overflows: _
        },
        reset: {
          placement: D
        }
      } : {};
    }
  };
}, Xc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, s;
      const {
        placement: o,
        middlewareData: n,
        rects: a,
        initialPlacement: l,
        platform: i,
        elements: d
      } = t, {
        mainAxis: p = !0,
        crossAxis: m = !0,
        fallbackPlacements: v,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: k = !0,
        ...$
      } = Ee(e, t);
      if ((r = n.arrow) != null && r.alignmentOffset)
        return {};
      const S = ge(o), T = ge(l) === l, A = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), L = v || (T || !k ? [Pt(l)] : Wc(l));
      !v && b !== "none" && L.push(...Uc(l, k, b, A));
      const _ = [l, ...L], E = await Bt(t, $), F = [];
      let N = ((s = n.flip) == null ? void 0 : s.overflows) || [];
      if (p && F.push(E[S]), m) {
        const z = js(o, a, A);
        F.push(E[z[0]], E[z[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: F
      }], !F.every((z) => z <= 0)) {
        var D, G;
        const z = (((D = n.flip) == null ? void 0 : D.index) || 0) + 1, ce = _[z];
        if (ce)
          return {
            data: {
              index: z,
              overflows: N
            },
            reset: {
              placement: ce
            }
          };
        let U = (G = N.filter((Z) => Z.overflows[0] <= 0).sort((Z, K) => Z.overflows[1] - K.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!U)
          switch (h) {
            case "bestFit": {
              var J;
              const Z = (J = N.map((K) => [K.placement, K.overflows.filter((se) => se > 0).reduce((se, Ue) => se + Ue, 0)]).sort((K, se) => K[1] - se[1])[0]) == null ? void 0 : J[0];
              Z && (U = Z);
              break;
            }
            case "initialPlacement":
              U = l;
              break;
          }
        if (o !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
async function Zc(e, t) {
  const {
    placement: r,
    platform: s,
    elements: o
  } = e, n = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)), a = ge(r), l = ue(r), i = ct(r) === "y", d = ["left", "top"].includes(a) ? -1 : 1, p = n && i ? -1 : 1, m = Ee(t, e);
  let {
    mainAxis: v,
    crossAxis: h,
    alignmentAxis: b
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...m
  };
  return l && typeof b == "number" && (h = l === "end" ? b * -1 : b), i ? {
    x: h * p,
    y: v * d
  } : {
    x: v * d,
    y: h * p
  };
}
const e0 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, s;
      const {
        x: o,
        y: n,
        placement: a,
        middlewareData: l
      } = t, i = await Zc(t, e);
      return a === ((r = l.offset) == null ? void 0 : r.placement) && (s = l.arrow) != null && s.alignmentOffset ? {} : {
        x: o + i.x,
        y: n + i.y,
        data: {
          ...i,
          placement: a
        }
      };
    }
  };
}, t0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: s,
        placement: o
      } = t, {
        mainAxis: n = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: ($) => {
            let {
              x: S,
              y: T
            } = $;
            return {
              x: S,
              y: T
            };
          }
        },
        ...i
      } = Ee(e, t), d = {
        x: r,
        y: s
      }, p = await Bt(t, i), m = ct(ge(o)), v = Vs(m);
      let h = d[v], b = d[m];
      if (n) {
        const $ = v === "y" ? "top" : "left", S = v === "y" ? "bottom" : "right", T = h + p[$], A = h - p[S];
        h = qt(T, h, A);
      }
      if (a) {
        const $ = m === "y" ? "top" : "left", S = m === "y" ? "bottom" : "right", T = b + p[$], A = b - p[S];
        b = qt(T, b, A);
      }
      const k = l.fn({
        ...t,
        [v]: h,
        [m]: b
      });
      return {
        ...k,
        data: {
          x: k.x - r,
          y: k.y - s
        }
      };
    }
  };
}, r0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: r,
        rects: s,
        platform: o,
        elements: n
      } = t, {
        apply: a = () => {
        },
        ...l
      } = Ee(e, t), i = await Bt(t, l), d = ge(r), p = ue(r), m = ct(r) === "y", {
        width: v,
        height: h
      } = s.floating;
      let b, k;
      d === "top" || d === "bottom" ? (b = d, k = p === (await (o.isRTL == null ? void 0 : o.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (k = d, b = p === "end" ? "top" : "bottom");
      const $ = h - i[b], S = v - i[k], T = !t.middlewareData.shift;
      let A = $, L = S;
      if (m) {
        const E = v - i.left - i.right;
        L = p || T ? lt(S, E) : E;
      } else {
        const E = h - i.top - i.bottom;
        A = p || T ? lt($, E) : E;
      }
      if (T && !p) {
        const E = Fe(i.left, 0), F = Fe(i.right, 0), N = Fe(i.top, 0), D = Fe(i.bottom, 0);
        m ? L = v - 2 * (E !== 0 || F !== 0 ? E + F : Fe(i.left, i.right)) : A = h - 2 * (N !== 0 || D !== 0 ? N + D : Fe(i.top, i.bottom));
      }
      await a({
        ...t,
        availableWidth: L,
        availableHeight: A
      });
      const _ = await o.getDimensions(n.floating);
      return v !== _.width || h !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function oe(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fe(e) {
  return oe(e).getComputedStyle(e);
}
const Jr = Math.min, rt = Math.max, Ft = Math.round;
function Ds(e) {
  const t = fe(e);
  let r = parseFloat(t.width), s = parseFloat(t.height);
  const o = e.offsetWidth, n = e.offsetHeight, a = Ft(r) !== o || Ft(s) !== n;
  return a && (r = o, s = n), { width: r, height: s, fallback: a };
}
function $e(e) {
  return Gs(e) ? (e.nodeName || "").toLowerCase() : "";
}
let vt;
function Ws() {
  if (vt)
    return vt;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (vt = e.brands.map((t) => t.brand + "/" + t.version).join(" "), vt) : navigator.userAgent;
}
function pe(e) {
  return e instanceof oe(e).HTMLElement;
}
function ke(e) {
  return e instanceof oe(e).Element;
}
function Gs(e) {
  return e instanceof oe(e).Node;
}
function Kr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof oe(e).ShadowRoot || e instanceof ShadowRoot;
}
function Lt(e) {
  const { overflow: t, overflowX: r, overflowY: s, display: o } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + r) && !["inline", "contents"].includes(o);
}
function s0(e) {
  return ["table", "td", "th"].includes($e(e));
}
function Yt(e) {
  const t = /firefox/i.test(Ws()), r = fe(e), s = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!s && s !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((o) => r.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some((o) => {
    const n = r.contain;
    return n != null && n.includes(o);
  });
}
function Us() {
  return !/^((?!chrome|android).)*safari/i.test(Ws());
}
function fr(e) {
  return ["html", "body", "#document"].includes($e(e));
}
function qs(e) {
  return ke(e) ? e : e.contextElement;
}
const Ys = { x: 1, y: 1 };
function Ve(e) {
  const t = qs(e);
  if (!pe(t))
    return Ys;
  const r = t.getBoundingClientRect(), { width: s, height: o, fallback: n } = Ds(t);
  let a = (n ? Ft(r.width) : r.width) / s, l = (n ? Ft(r.height) : r.height) / o;
  return a && Number.isFinite(a) || (a = 1), l && Number.isFinite(l) || (l = 1), { x: a, y: l };
}
function it(e, t, r, s) {
  var o, n;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(), l = qs(e);
  let i = Ys;
  t && (s ? ke(s) && (i = Ve(s)) : i = Ve(e));
  const d = l ? oe(l) : window, p = !Us() && r;
  let m = (a.left + (p && ((o = d.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / i.x, v = (a.top + (p && ((n = d.visualViewport) == null ? void 0 : n.offsetTop) || 0)) / i.y, h = a.width / i.x, b = a.height / i.y;
  if (l) {
    const k = oe(l), $ = s && ke(s) ? oe(s) : s;
    let S = k.frameElement;
    for (; S && s && $ !== k; ) {
      const T = Ve(S), A = S.getBoundingClientRect(), L = getComputedStyle(S);
      A.x += (S.clientLeft + parseFloat(L.paddingLeft)) * T.x, A.y += (S.clientTop + parseFloat(L.paddingTop)) * T.y, m *= T.x, v *= T.y, h *= T.x, b *= T.y, m += A.x, v += A.y, S = oe(S).frameElement;
    }
  }
  return { width: h, height: b, top: v, right: m + h, bottom: v + b, left: m, x: m, y: v };
}
function _e(e) {
  return ((Gs(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Et(e) {
  return ke(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Js(e) {
  return it(_e(e)).left + Et(e).scrollLeft;
}
function dt(e) {
  if ($e(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Kr(e) && e.host || _e(e);
  return Kr(t) ? t.host : t;
}
function Ks(e) {
  const t = dt(e);
  return fr(t) ? t.ownerDocument.body : pe(t) && Lt(t) ? t : Ks(t);
}
function zt(e, t) {
  var r;
  t === void 0 && (t = []);
  const s = Ks(e), o = s === ((r = e.ownerDocument) == null ? void 0 : r.body), n = oe(s);
  return o ? t.concat(n, n.visualViewport || [], Lt(s) ? s : []) : t.concat(s, zt(s));
}
function Qr(e, t, r) {
  return t === "viewport" ? tt(function(s, o) {
    const n = oe(s), a = _e(s), l = n.visualViewport;
    let i = a.clientWidth, d = a.clientHeight, p = 0, m = 0;
    if (l) {
      i = l.width, d = l.height;
      const v = Us();
      (v || !v && o === "fixed") && (p = l.offsetLeft, m = l.offsetTop);
    }
    return { width: i, height: d, x: p, y: m };
  }(e, r)) : ke(t) ? tt(function(s, o) {
    const n = it(s, !0, o === "fixed"), a = n.top + s.clientTop, l = n.left + s.clientLeft, i = pe(s) ? Ve(s) : { x: 1, y: 1 };
    return { width: s.clientWidth * i.x, height: s.clientHeight * i.y, x: l * i.x, y: a * i.y };
  }(t, r)) : tt(function(s) {
    const o = _e(s), n = Et(s), a = s.ownerDocument.body, l = rt(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), i = rt(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
    let d = -n.scrollLeft + Js(s);
    const p = -n.scrollTop;
    return fe(a).direction === "rtl" && (d += rt(o.clientWidth, a.clientWidth) - l), { width: l, height: i, x: d, y: p };
  }(_e(e)));
}
function Xr(e) {
  return pe(e) && fe(e).position !== "fixed" ? e.offsetParent : null;
}
function Zr(e) {
  const t = oe(e);
  let r = Xr(e);
  for (; r && s0(r) && fe(r).position === "static"; )
    r = Xr(r);
  return r && ($e(r) === "html" || $e(r) === "body" && fe(r).position === "static" && !Yt(r)) ? t : r || function(s) {
    let o = dt(s);
    for (; pe(o) && !fr(o); ) {
      if (Yt(o))
        return o;
      o = dt(o);
    }
    return null;
  }(e) || t;
}
function o0(e, t, r) {
  const s = pe(t), o = _e(t), n = it(e, !0, r === "fixed", t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && r !== "fixed")
    if (($e(t) !== "body" || Lt(o)) && (a = Et(t)), pe(t)) {
      const i = it(t, !0);
      l.x = i.x + t.clientLeft, l.y = i.y + t.clientTop;
    } else
      o && (l.x = Js(o));
  return { x: n.left + a.scrollLeft - l.x, y: n.top + a.scrollTop - l.y, width: n.width, height: n.height };
}
const n0 = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: s, strategy: o } = e;
  const n = r === "clippingAncestors" ? function(d, p) {
    const m = p.get(d);
    if (m)
      return m;
    let v = zt(d).filter(($) => ke($) && $e($) !== "body"), h = null;
    const b = fe(d).position === "fixed";
    let k = b ? dt(d) : d;
    for (; ke(k) && !fr(k); ) {
      const $ = fe(k), S = Yt(k);
      (b ? S || h : S || $.position !== "static" || !h || !["absolute", "fixed"].includes(h.position)) ? h = $ : v = v.filter((T) => T !== k), k = dt(k);
    }
    return p.set(d, v), v;
  }(t, this._c) : [].concat(r), a = [...n, s], l = a[0], i = a.reduce((d, p) => {
    const m = Qr(t, p, o);
    return d.top = rt(m.top, d.top), d.right = Jr(m.right, d.right), d.bottom = Jr(m.bottom, d.bottom), d.left = rt(m.left, d.left), d;
  }, Qr(t, l, o));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: s } = e;
  const o = pe(r), n = _e(r);
  if (r === n)
    return t;
  let a = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const i = { x: 0, y: 0 };
  if ((o || !o && s !== "fixed") && (($e(r) !== "body" || Lt(n)) && (a = Et(r)), pe(r))) {
    const d = it(r);
    l = Ve(r), i.x = d.x + r.clientLeft, i.y = d.y + r.clientTop;
  }
  return { width: t.width * l.x, height: t.height * l.y, x: t.x * l.x - a.scrollLeft * l.x + i.x, y: t.y * l.y - a.scrollTop * l.y + i.y };
}, isElement: ke, getDimensions: function(e) {
  return pe(e) ? Ds(e) : e.getBoundingClientRect();
}, getOffsetParent: Zr, getDocumentElement: _e, getScale: Ve, async getElementRects(e) {
  let { reference: t, floating: r, strategy: s } = e;
  const o = this.getOffsetParent || Zr, n = this.getDimensions;
  return { reference: o0(t, await o(r), s), floating: { x: 0, y: 0, ...await n(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => fe(e).direction === "rtl" }, a0 = (e, t, r) => {
  const s = /* @__PURE__ */ new Map(), o = { platform: n0, ...r }, n = { ...o.platform, _c: s };
  return Yc(e, t, { ...o, platform: n });
}, Ie = {
  // Disable popper components
  disabled: !1,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5e3,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: !0,
  // Flip to the opposite placement if needed
  flip: !0,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: !0,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: !0,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function Jt(e, t) {
  let r = Ie.themes[e] || {}, s;
  do
    s = r[t], typeof s > "u" ? r.$extend ? r = Ie.themes[r.$extend] || {} : (r = null, s = Ie[t]) : r = null;
  while (r);
  return s;
}
function l0(e) {
  const t = [e];
  let r = Ie.themes[e] || {};
  do
    r.$extend && !r.$resetCss ? (t.push(r.$extend), r = Ie.themes[r.$extend] || {}) : r = null;
  while (r);
  return t.map((s) => `v-popper--theme-${s}`);
}
function es(e) {
  const t = [e];
  let r = Ie.themes[e] || {};
  do
    r.$extend ? (t.push(r.$extend), r = Ie.themes[r.$extend] || {}) : r = null;
  while (r);
  return t;
}
let je = !1;
if (typeof window < "u") {
  je = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        je = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Qs = !1;
typeof window < "u" && typeof navigator < "u" && (Qs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const i0 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), ts = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, rs = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function ss(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
function Dt() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const ie = [];
let Pe = null;
const os = {};
function ns(e) {
  let t = os[e];
  return t || (t = os[e] = []), t;
}
let Kt = function() {
};
typeof window < "u" && (Kt = window.Element);
function O(e) {
  return function(t) {
    return Jt(t.theme, e);
  };
}
const Wt = "__floating-vue__popper", Xs = () => C({
  name: "VPopper",
  provide() {
    return {
      [Wt]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Wt]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: O("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: O("positioningDisabled")
    },
    placement: {
      type: String,
      default: O("placement"),
      validator: (e) => i0.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: O("delay")
    },
    distance: {
      type: [Number, String],
      default: O("distance")
    },
    skidding: {
      type: [Number, String],
      default: O("skidding")
    },
    triggers: {
      type: Array,
      default: O("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: O("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: O("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: O("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: O("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: O("popperHideTriggers")
    },
    container: {
      type: [String, Object, Kt, Boolean],
      default: O("container")
    },
    boundary: {
      type: [String, Kt],
      default: O("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: O("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: O("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: O("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: O("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: O("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: O("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: O("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: O("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: O("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: O("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: O("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: O("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: O("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: O("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: O("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: O("flip")
    },
    shift: {
      type: Boolean,
      default: O("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: O("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: O("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: O("disposeTimeout")
    }
  },
  emits: [
    "show",
    "hide",
    "update:shown",
    "apply-show",
    "apply-hide",
    "close-group",
    "close-directive",
    "auto-hide",
    "resize",
    "dispose"
  ],
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Wt]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    ...[
      "triggers",
      "positioningDisabled"
    ].reduce((e, t) => (e[t] = "$_refreshListeners", e), {}),
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
  },
  created() {
    this.$_isDisposed = !0, this.randomId = `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`, this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = !1, force: r = !1 } = {}) {
      var s, o;
      (s = this.parentPopper) != null && s.lockedChild && this.parentPopper.lockedChild !== this || (this.$_pendingHide = !1, (r || !this.disabled) && (((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var r;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.$_pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((r = this.parentPopper) == null ? void 0 : r.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e;
      this.$_isDisposed && (this.$_isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.$_isDisposed || (this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"), this.$emit("dispose"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.$_isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(e0({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Qc({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(t0({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Xc({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Jc({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: s, rects: o, middlewareData: n }) => {
          let a;
          const { centerOffset: l } = n.arrow;
          return s.startsWith("top") || s.startsWith("bottom") ? a = Math.abs(l) > o.reference.width / 2 : a = Math.abs(l) > o.reference.height / 2, {
            data: {
              overflow: a
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const s = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: o, placement: n, middlewareData: a }) => {
            var l;
            if ((l = a.autoSize) != null && l.skip)
              return {};
            let i, d;
            return n.startsWith("top") || n.startsWith("bottom") ? i = o.reference.width : d = o.reference.height, this.$_innerNode.style[s === "min" ? "minWidth" : s === "max" ? "maxWidth" : "width"] = i != null ? `${i}px` : null, this.$_innerNode.style[s === "min" ? "minHeight" : s === "max" ? "maxHeight" : "height"] = d != null ? `${d}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(r0({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: s, availableHeight: o }) => {
          this.$_innerNode.style.maxWidth = s != null ? `${s}px` : null, this.$_innerNode.style.maxHeight = o != null ? `${o}px` : null;
        }
      })));
      const r = await a0(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: r.x,
        y: r.y,
        placement: r.placement,
        strategy: r.strategy,
        arrow: {
          ...r.middlewareData.arrow,
          ...r.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e = null, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Pe && this.instantMove && Pe.instantMove && Pe !== this.parentPopper) {
        Pe.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Pe = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Dt(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...zt(this.$_referenceNode),
        ...zt(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), r = this.$_popperNode.querySelector(".v-popper__wrapper"), s = r.parentNode.getBoundingClientRect(), o = t.x + t.width / 2 - (s.left + r.offsetLeft), n = t.y + t.height / 2 - (s.top + r.offsetTop);
        this.result.transformOrigin = `${o}px ${n}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let r = 0; r < ie.length; r++)
          t = ie[r], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      ie.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of es(this.theme))
        ns(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Dt(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, ss(ie, this), ie.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const r of es(this.theme)) {
        const s = ns(r);
        ss(s, this), s.length === 0 && document.body.classList.remove(`v-popper--some-open--${r}`);
      }
      Pe === this && (Pe = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Dt(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.$_isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (r) => {
        this.isShown && !this.$_hideInProgress || (r.usedByTooltip = !0, !this.$_preventShow && this.show({ event: r }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, ts, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], ts, this.popperTriggers, this.popperShowTriggers, e);
      const t = (r) => {
        r.usedByTooltip || this.hide({ event: r });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, rs, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], rs, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, r) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: r }), e.forEach((s) => s.addEventListener(t, r, je ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, r, s, o) {
      let n = r;
      s != null && (n = typeof s == "function" ? s(n) : s), n.forEach((a) => {
        const l = t[a];
        l && this.$_registerEventListeners(e, l, o);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((r) => {
        const { targetNodes: s, eventType: o, handler: n } = r;
        !e || e === o ? s.forEach((a) => a.removeEventListener(o, n)) : t.push(r);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.$_isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const r of this.$_targetNodes) {
        const s = r.getAttribute(e);
        s && (r.removeAttribute(e), r.setAttribute(t, s));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const r in e) {
          const s = e[r];
          s == null ? t.removeAttribute(r) : t.setAttribute(r, s);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.$_pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (st >= e.left && st <= e.right && ot >= e.top && ot <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), r = st - ye, s = ot - we, o = t.left + t.width / 2 - ye + (t.top + t.height / 2) - we + t.width + t.height, n = ye + r * o, a = we + s * o;
        return yt(ye, we, n, a, t.left, t.top, t.left, t.bottom) || // Left edge
        yt(ye, we, n, a, t.left, t.top, t.right, t.top) || // Top edge
        yt(ye, we, n, a, t.right, t.top, t.right, t.bottom) || // Right edge
        yt(ye, we, n, a, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (Qs ? (document.addEventListener("touchstart", as, je ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", u0, je ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", as, !0), window.addEventListener("click", d0, !0)), window.addEventListener("resize", p0));
function as(e) {
  for (let t = 0; t < ie.length; t++) {
    const r = ie[t];
    try {
      const s = r.popperNode();
      r.$_mouseDownContains = s.contains(e.target);
    } catch {
    }
  }
}
function d0(e) {
  Zs(e);
}
function u0(e) {
  Zs(e, !0);
}
function Zs(e, t = !1) {
  const r = {};
  for (let s = ie.length - 1; s >= 0; s--) {
    const o = ie[s];
    try {
      const n = o.$_containsGlobalTarget = c0(o, e);
      o.$_pendingHide = !1, requestAnimationFrame(() => {
        if (o.$_pendingHide = !1, !r[o.randomId] && ls(o, n, e)) {
          if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && n) {
            let l = o.parentPopper;
            for (; l; )
              r[l.randomId] = !0, l = l.parentPopper;
            return;
          }
          let a = o.parentPopper;
          for (; a && ls(a, a.$_containsGlobalTarget, e); )
            a.$_handleGlobalClose(e, t), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function c0(e, t) {
  const r = e.popperNode();
  return e.$_mouseDownContains || r.contains(t.target);
}
function ls(e, t, r) {
  return r.closeAllPopover || r.closePopover && t || f0(e, r) && !t;
}
function f0(e, t) {
  if (typeof e.autoHide == "function") {
    const r = e.autoHide(t);
    return e.lastAutoHide = r, r;
  }
  return e.autoHide;
}
function p0(e) {
  for (let t = 0; t < ie.length; t++)
    ie[t].$_computePosition(e);
}
let ye = 0, we = 0, st = 0, ot = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  ye = st, we = ot, st = e.clientX, ot = e.clientY;
}, je ? {
  passive: !0
} : void 0);
function yt(e, t, r, s, o, n, a, l) {
  const i = ((a - o) * (t - n) - (l - n) * (e - o)) / ((l - n) * (r - e) - (a - o) * (s - t)), d = ((r - e) * (t - n) - (s - t) * (e - o)) / ((l - n) * (r - e) - (a - o) * (s - t));
  return i >= 0 && i <= 1 && d >= 0 && d <= 1;
}
const g0 = {
  extends: Xs()
}, pr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, o] of t)
    r[s] = o;
  return r;
};
function h0(e, t, r, s, o, n) {
  return u(), g("div", {
    ref: "reference",
    class: x(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    w(e.$slots, "default", Se(ps(e.slotData)))
  ], 2);
}
const m0 = /* @__PURE__ */ pr(g0, [["render", h0]]);
function b0() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var r = e.indexOf("Trident/");
  if (r > 0) {
    var s = e.indexOf("rv:");
    return parseInt(e.substring(s + 3, e.indexOf(".", s)), 10);
  }
  var o = e.indexOf("Edge/");
  return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : -1;
}
let xt;
function Qt() {
  Qt.init || (Qt.init = !0, xt = b0() !== -1);
}
var Nt = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    Qt(), Zt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", xt && this.$el.appendChild(e), e.data = "about:blank", xt || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!xt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const v0 = /* @__PURE__ */ po("data-v-b329ee4c");
us("data-v-b329ee4c");
const y0 = {
  class: "resize-observer",
  tabindex: "-1"
};
cs();
const w0 = /* @__PURE__ */ v0((e, t, r, s, o, n) => (u(), H("div", y0)));
Nt.render = w0;
Nt.__scopeId = "data-v-b329ee4c";
Nt.__file = "src/components/ResizeObserver.vue";
const eo = (e = "theme") => ({
  computed: {
    themeClass() {
      return l0(this[e]);
    }
  }
}), x0 = C({
  name: "VPopperContent",
  components: {
    ResizeObserver: Nt
  },
  mixins: [
    eo()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), k0 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], _0 = {
  ref: "inner",
  class: "v-popper__inner"
}, C0 = /* @__PURE__ */ f("div", { class: "v-popper__arrow-outer" }, null, -1), $0 = /* @__PURE__ */ f("div", { class: "v-popper__arrow-inner" }, null, -1), S0 = [
  C0,
  $0
];
function T0(e, t, r, s, o, n) {
  const a = be("ResizeObserver");
  return u(), g("div", {
    id: e.popperId,
    ref: "popover",
    class: x(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: et(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = fs((l) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    f("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (l) => e.autoHide && e.$emit("hide"))
    }),
    f("div", {
      class: "v-popper__wrapper",
      style: et(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      f("div", _0, [
        e.mounted ? (u(), g(q, { key: 0 }, [
          f("div", null, [
            w(e.$slots, "default")
          ]),
          e.handleResize ? (u(), H(a, {
            key: 0,
            onNotify: t[1] || (t[1] = (l) => e.$emit("resize", l))
          })) : P("", !0)
        ], 64)) : P("", !0)
      ], 512),
      f("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: et(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, S0, 4)
    ], 4)
  ], 46, k0);
}
const to = /* @__PURE__ */ pr(x0, [["render", T0]]), ro = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
}, P0 = C({
  name: "VPopperWrapper",
  components: {
    Popper: m0,
    PopperContent: to
  },
  mixins: [
    ro,
    eo("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function F0(e, t, r, s, o, n) {
  const a = be("PopperContent"), l = be("Popper");
  return u(), H(l, {
    ref: "popper",
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: x([
      e.themeClass
    ])
  }, {
    default: j(({
      popperId: i,
      isShown: d,
      shouldMountContent: p,
      skipTransition: m,
      autoHide: v,
      show: h,
      hide: b,
      handleResize: k,
      onResize: $,
      classes: S,
      result: T
    }) => [
      w(e.$slots, "default", {
        shown: d,
        show: h,
        hide: b
      }),
      ze(a, {
        ref: "popperContent",
        "popper-id": i,
        theme: e.finalTheme,
        shown: d,
        mounted: p,
        "skip-transition": m,
        "auto-hide": v,
        "handle-resize": k,
        classes: S,
        result: T,
        onHide: b,
        onResize: $
      }, {
        default: j(() => [
          w(e.$slots, "popper", {
            shown: d,
            hide: b
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
const gr = /* @__PURE__ */ pr(P0, [["render", F0]]);
({
  ...gr
});
({
  ...gr
});
const z0 = {
  ...gr,
  name: "VTooltip",
  vPopperTheme: "tooltip"
};
C({
  name: "VTooltipDirective",
  components: {
    Popper: Xs(),
    PopperContent: to
  },
  mixins: [
    ro
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Jt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Jt(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const t = ++this.$_fetchId, r = this.content(this);
        r.then ? r.then((s) => this.onResult(t, s)) : this.onResult(t, r);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
});
const A0 = z0;
const I0 = { class: "flex items-start" }, Zp = /* @__PURE__ */ C({
  __name: "FwbTooltip",
  props: {
    placement: { default: "top" },
    theme: { default: "dark" },
    trigger: { default: "hover" }
  },
  setup(e) {
    const t = e, r = c(() => ({
      light: "tooltip-light",
      dark: "tooltip-dark"
    })[t.theme]);
    return (s, o) => (u(), g("div", I0, [
      ze(y(A0), {
        placement: s.placement,
        triggers: [s.trigger],
        theme: r.value,
        "auto-hide": ""
      }, {
        popper: j(() => [
          w(s.$slots, "content")
        ]),
        default: j(() => [
          w(s.$slots, "trigger")
        ]),
        _: 3
      }, 8, ["placement", "triggers", "theme"])
    ]));
  }
});
const M0 = "block text-sm font-medium text-gray-900 dark:text-gray-300", O0 = "w-4 h-4 rounded bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500";
function B0() {
  const e = c(() => ne(O0)), t = c(() => M0);
  return {
    checkboxClasses: e,
    labelClasses: t
  };
}
const L0 = { class: "flex gap-3 items-center justify-start" }, E0 = ["disabled"], eg = /* @__PURE__ */ C({
  __name: "FwbCheckbox",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, s = t, o = c({
      get() {
        return r.modelValue;
      },
      set(l) {
        s("update:modelValue", l);
      }
    }), {
      checkboxClasses: n,
      labelClasses: a
    } = B0();
    return (l, i) => (u(), g("label", L0, [
      Te(f("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (d) => o.value = d),
        class: x(y(n)),
        disabled: l.disabled,
        type: "checkbox"
      }, null, 10, E0), [
        [gs, o.value]
      ]),
      l.label ? (u(), g("span", {
        key: 0,
        class: x(y(a))
      }, M(l.label), 3)) : P("", !0),
      w(l.$slots, "default")
    ]));
  }
}), N0 = "block w-full text-sm text-gray-900 border-[1px] border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400", R0 = "block mb-2 text-sm font-medium text-gray-900 dark:text-white", V0 = "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600", j0 = "flex flex-col items-center justify-center pt-5 pb-6", H0 = "!-mb-2 text-sm text-gray-500 dark:text-gray-400";
function D0(e) {
  const t = c(() => ne(
    N0,
    "text-" + e
  )), r = c(() => R0), s = c(() => V0), o = c(() => j0), n = c(() => H0);
  return {
    fileInpClasses: t,
    labelClasses: r,
    dropzoneLabelClasses: s,
    dropzoneWrapClasses: o,
    dropzoneTextClasses: n
  };
}
const W0 = { key: 0 }, G0 = ["multiple"], U0 = /* @__PURE__ */ f("svg", {
  "aria-hidden": "true",
  class: "w-8 h-8 text-gray-500 dark:text-gray-400",
  fill: "none",
  viewBox: "0 0 20 16",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ f("path", {
    d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    stroke: "currentColor"
  })
], -1), q0 = { key: 0 }, Y0 = /* @__PURE__ */ f("span", { class: "font-semibold" }, "Click to upload", -1), J0 = { key: 1 }, K0 = ["multiple"], tg = /* @__PURE__ */ C({
  __name: "FwbFileInput",
  props: {
    dropzone: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { default: null },
    multiple: { type: Boolean, default: !1 },
    size: { default: "sm" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, s = c(() => We(r.modelValue) ? r.modelValue.map((b) => b.name).join(", ") : r.modelValue instanceof FileList ? Array.from(r.modelValue).map((b) => b.name).join(",") : r.modelValue instanceof File && r.modelValue.name || ""), o = t, n = c({
      get() {
        return r.modelValue;
      },
      set(b) {
        o("update:modelValue", b);
      }
    }), a = (b) => {
      const k = b.target;
      r.multiple ? n.value = Array.from(k.files ?? []) : n.value = k.files?.[0] ?? null;
    }, l = (b) => {
      b.preventDefault();
      const k = [];
      b.dataTransfer?.items ? (Object.values(b.dataTransfer.items).forEach(($) => {
        $.kind === "file" && k.push($.getAsFile());
      }), r.multiple ? n.value = k : n.value = k[0]) : b.dataTransfer?.files && Object.values(b.dataTransfer.files).forEach(($) => {
        n.value = $;
      });
    }, i = (b) => {
      b.preventDefault();
    }, {
      fileInpClasses: d,
      labelClasses: p,
      dropzoneLabelClasses: m,
      dropzoneWrapClasses: v,
      dropzoneTextClasses: h
    } = D0(r.size);
    return (b, k) => (u(), g("div", null, [
      b.dropzone ? (u(), g("div", {
        key: 1,
        class: "flex items-center justify-center",
        onChange: a,
        onDragover: i,
        onDrop: l
      }, [
        f("label", {
          class: x(y(m))
        }, [
          f("div", {
            class: x(y(v))
          }, [
            U0,
            n.value ? (u(), g("p", J0, "File: " + M(s.value), 1)) : (u(), g("div", q0, [
              f("p", {
                class: x(y(h))
              }, [
                Y0,
                te(" or drag and drop ")
              ], 2),
              w(b.$slots, "default")
            ]))
          ], 2),
          f("input", {
            multiple: b.multiple,
            type: "file",
            class: "hidden"
          }, null, 8, K0)
        ], 2)
      ], 32)) : (u(), g("div", W0, [
        f("label", null, [
          f("span", {
            class: x(y(p))
          }, M(b.label), 3),
          f("input", {
            class: x(y(d)),
            multiple: b.multiple,
            type: "file",
            onChange: a
          }, null, 42, G0)
        ]),
        w(b.$slots, "default")
      ]))
    ]));
  }
}), Re = {
  Success: "success",
  Error: "error"
}, Q0 = "block mb-2 text-sm font-medium", X0 = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", Z0 = "cursor-not-allowed bg-gray-100", ef = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, tf = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", rf = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function sf(e) {
  const t = c(() => {
    const s = e.validationStatus.value, o = s === Re.Success ? tf : s === Re.Error ? rf : "";
    return B(
      X0,
      o,
      ef[e.size.value],
      e.disabled.value ? Z0 : ""
    );
  }), r = c(() => {
    const s = e.validationStatus.value, o = s === Re.Success ? "text-green-700 dark:text-green-500" : s === Re.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return B(Q0, o);
  });
  return {
    inputClasses: t,
    labelClasses: r
  };
}
const of = { class: "flex relative" }, nf = {
  key: 0,
  class: "w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
}, af = ["disabled", "type", "required"], lf = {
  key: 1,
  class: "absolute right-2.5 bottom-2.5"
}, df = {
  key: 2,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, rg = /* @__PURE__ */ C({
  __name: "FwbInput",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { default: "" },
    required: { type: Boolean, default: !1 },
    size: { default: "md" },
    type: { default: "text" },
    validationStatus: { default: void 0 }
  },
  setup(e) {
    const t = e, r = $s(t, "modelValue"), { inputClasses: s, labelClasses: o } = sf(Y(t)), n = c(() => B(
      "mt-2 text-sm",
      t.validationStatus === Re.Success ? "text-green-600 dark:text-green-500" : "",
      t.validationStatus === Re.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (a, l) => (u(), g("div", null, [
      a.label ? (u(), g("label", {
        key: 0,
        class: x(y(o))
      }, M(a.label), 3)) : P("", !0),
      f("div", of, [
        a.$slots.prefix ? (u(), g("div", nf, [
          w(a.$slots, "prefix")
        ])) : P("", !0),
        Te(f("input", re(a.$attrs, {
          "onUpdate:modelValue": l[0] || (l[0] = (i) => Xt(r) ? r.value = i : null),
          disabled: a.disabled,
          type: a.type,
          required: a.required,
          class: [y(s), a.$slots.prefix ? "pl-10" : ""]
        }), null, 16, af), [
          [go, y(r)]
        ]),
        a.$slots.suffix ? (u(), g("div", lf, [
          w(a.$slots, "suffix")
        ])) : P("", !0)
      ]),
      a.$slots.validationMessage ? (u(), g("p", {
        key: 1,
        class: x(n.value)
      }, [
        w(a.$slots, "validationMessage")
      ], 2)) : P("", !0),
      a.$slots.helper ? (u(), g("p", df, [
        w(a.$slots, "helper")
      ])) : P("", !0)
    ]));
  }
}), uf = { class: "flex w-[100%] items-center" }, cf = ["disabled", "name", "value"], ff = "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600", pf = "m-2 mr-0 text-sm font-medium text-gray-900 dark:text-gray-300", sg = /* @__PURE__ */ C({
  __name: "FwbRadio",
  props: {
    modelValue: { default: "" },
    name: { default: "" },
    value: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, s = t, o = c({
      get() {
        return r.modelValue;
      },
      set(l) {
        s("update:modelValue", l);
      }
    }), n = c(() => ff), a = c(() => B(pf, r.disabled && "text-gray-400 dark:text-gray-500"));
    return (l, i) => (u(), g("label", uf, [
      Te(f("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (d) => o.value = d),
        type: "radio",
        disabled: l.disabled,
        name: l.name,
        value: l.value,
        class: x(n.value)
      }, null, 10, cf), [
        [ho, o.value]
      ]),
      f("span", {
        class: x(a.value)
      }, M(l.label), 3),
      w(l.$slots, "default")
    ]));
  }
}), gf = "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700", hf = "block mb-2 text-sm font-medium text-gray-900 dark:text-white", mf = {
  lg: "h-3 range-lg",
  md: "h-2 range-md",
  sm: "h-1 range-sm"
};
function bf(e) {
  const t = c(() => ne(
    gf,
    mf[e.size.value]
  )), r = c(() => hf);
  return {
    rangeClasses: t,
    labelClasses: r
  };
}
const vf = { class: "flex flex-col" }, yf = ["step", "min", "max", "disabled"], wf = /* @__PURE__ */ C({
  __name: "FwbRange",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: { default: "Range slider" },
    max: { default: 100 },
    min: { default: 0 },
    modelValue: { default: 50 },
    size: { default: "md" },
    steps: { default: 1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, s = t, o = c({
      get() {
        return r.modelValue;
      },
      set(l) {
        s("update:modelValue", l);
      }
    }), { rangeClasses: n, labelClasses: a } = bf(Y(r));
    return (l, i) => (u(), g("label", vf, [
      f("span", {
        class: x(y(a))
      }, M(l.label), 3),
      Te(f("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (d) => o.value = d),
        step: l.steps,
        min: l.min,
        max: l.max,
        disabled: l.disabled,
        type: "range",
        class: x(y(n))
      }, null, 10, yf), [
        [hs, o.value]
      ])
    ]));
  }
});
const og = /* @__PURE__ */ he(wf, [["__scopeId", "data-v-c4cfe3d4"]]), xe = {
  Success: "success",
  Error: "error"
}, xf = "block mb-2 text-sm font-medium", kf = "w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500", _f = "cursor-not-allowed bg-gray-100", Cf = "bg-transparent dark:bg-transparent border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer", $f = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, Sf = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", Tf = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function Pf(e) {
  const t = c(() => {
    const s = e.validationStatus.value, o = s === xe.Success ? Sf : s === xe.Error ? Tf : "", n = s === xe.Success ? "focus:border-green-500" : s === xe.Error ? "focus:border-red-500" : "";
    return B(
      kf,
      o,
      $f[e.size.value],
      e.disabled.value && _f,
      e.underline.value ? Cf : "border border-gray-300 rounded-lg",
      e.underline.value && n
    );
  }), r = c(() => {
    const s = e.validationStatus.value, o = s === xe.Success ? "text-green-700 dark:text-green-500" : s === xe.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return B(xf, o);
  });
  return {
    selectClasses: t,
    labelClasses: r
  };
}
const Ff = ["disabled"], zf = {
  disabled: "",
  selected: "",
  value: ""
}, Af = ["value"], If = {
  key: 1,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, ng = /* @__PURE__ */ C({
  __name: "FwbSelect",
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    options: { default: () => [] },
    placeholder: { default: "Please select one" },
    disabled: { type: Boolean, default: !1 },
    underline: { type: Boolean, default: !1 },
    size: { default: "md" },
    validationStatus: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = $s(r, "modelValue", t), { selectClasses: n, labelClasses: a } = Pf(Y(r)), l = c(() => B(
      "mt-2 text-sm",
      r.validationStatus === xe.Success ? "text-green-600 dark:text-green-500" : "",
      r.validationStatus === xe.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (i, d) => (u(), g("div", null, [
      f("label", null, [
        i.label ? (u(), g("span", {
          key: 0,
          class: x(y(a))
        }, M(i.label), 3)) : P("", !0),
        Te(f("select", {
          "onUpdate:modelValue": d[0] || (d[0] = (p) => Xt(o) ? o.value = p : null),
          disabled: i.disabled,
          class: x(y(n))
        }, [
          f("option", zf, M(i.placeholder), 1),
          (u(!0), g(q, null, Me(i.options, (p, m) => (u(), g("option", {
            key: m,
            value: p.value
          }, M(p.name), 9, Af))), 128))
        ], 10, Ff), [
          [mo, y(o)]
        ])
      ]),
      i.$slots.validationMessage ? (u(), g("p", {
        key: 0,
        class: x(l.value)
      }, [
        w(i.$slots, "validationMessage")
      ], 2)) : P("", !0),
      i.$slots.helper ? (u(), g("p", If, [
        w(i.$slots, "helper")
      ])) : P("", !0)
    ]));
  }
}), Mf = "block w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600", Of = "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", Bf = "block mb-2 text-sm font-medium text-gray-900 dark:text-white", Lf = "block py-2 px-3 border-gray-200 dark:border-gray-600";
function Ef(e) {
  const t = c(() => ne(
    Of,
    e ? "bg-white dark:bg-gray-800 border-none" : "border"
  )), r = c(() => Bf), s = c(() => e ? Mf : ""), o = c(() => Lf);
  return {
    textareaClasses: t,
    labelClasses: r,
    wrapperClasses: s,
    footerClasses: o
  };
}
const Nf = ["rows", "placeholder"], ag = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbTextarea",
  props: {
    modelValue: { default: "" },
    label: { default: "Your message" },
    rows: { default: 4 },
    custom: { type: Boolean, default: !1 },
    placeholder: { default: "Write your message here..." }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, s = t, o = c({
      get() {
        return r.modelValue;
      },
      set(d) {
        s("update:modelValue", d);
      }
    }), { textareaClasses: n, labelClasses: a, wrapperClasses: l, footerClasses: i } = Ef(r.custom);
    return (d, p) => (u(), g("label", null, [
      f("span", {
        class: x(y(a))
      }, M(d.label), 3),
      f("span", {
        class: x(y(l))
      }, [
        Te(f("textarea", re({
          "onUpdate:modelValue": p[0] || (p[0] = (m) => o.value = m)
        }, d.$attrs, {
          class: y(n),
          rows: d.rows,
          placeholder: d.placeholder
        }), null, 16, Nf), [
          [hs, o.value]
        ]),
        d.$slots.footer ? (u(), g("span", {
          key: 0,
          class: x(y(i))
        }, [
          w(d.$slots, "footer")
        ], 2)) : P("", !0)
      ], 2)
    ]));
  }
}), Rf = "w-fit relative inline-flex items-center cursor-pointer", Vf = 'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600', jf = "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300", Hf = {
  lg: "w-14 h-7 after:top-0.5 after:left-[4px] after:h-6 after:w-6",
  md: "w-11 h-6 after:top-[2px] after:left-[2px] after:h-5 after:w-5",
  sm: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4"
}, Df = {
  red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
  green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
  purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
  yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
  teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
  orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
};
function Wf(e) {
  const t = c(() => Rf), r = c(() => Vf), s = c(() => Hf[e.size.value]), o = c(() => Df[e.color.value]), n = c(() => jf);
  return {
    labelClasses: t,
    toggleSize: s,
    toggleClasses: r,
    toggleColor: o,
    toggleBallClasses: n
  };
}
const Gf = ["disabled"], lg = /* @__PURE__ */ C({
  __name: "FwbToggle",
  props: {
    color: { default: "" },
    disabled: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { type: Boolean, default: !1 },
    size: { default: "md" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, s = t, o = c({
      get() {
        return r.modelValue;
      },
      set(p) {
        s("update:modelValue", p);
      }
    }), {
      labelClasses: n,
      toggleSize: a,
      toggleClasses: l,
      toggleColor: i,
      toggleBallClasses: d
    } = Wf(Y(r));
    return (p, m) => (u(), g("label", {
      class: x(y(n))
    }, [
      Te(f("input", {
        "onUpdate:modelValue": m[0] || (m[0] = (v) => o.value = v),
        disabled: p.disabled,
        class: "sr-only peer",
        type: "checkbox"
      }, null, 8, Gf), [
        [gs, o.value]
      ]),
      f("span", {
        class: x([y(l), y(a), y(i)])
      }, null, 2),
      f("span", {
        class: x(y(d))
      }, M(p.label), 3)
    ], 2));
  }
}), Uf = ["href"], ig = /* @__PURE__ */ C({
  __name: "FwbA",
  props: {
    href: { default: "" },
    color: { default: "text-primary-600 dark:text-primary-500" }
  },
  setup(e) {
    return (t, r) => (u(), g("a", {
      href: t.href,
      class: x([t.color, "inline-flex items-center hover:underline"])
    }, [
      w(t.$slots, "default")
    ], 10, Uf));
  }
}), dg = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbHeading",
  props: {
    tag: { default: "h1" },
    color: { default: "text-gray-900 dark:text-white" },
    customSize: { default: "" }
  },
  setup(e) {
    const t = e, r = {
      h1: "text-5xl font-extrabold",
      h2: "text-4xl font-bold",
      h3: "text-3xl font-bold",
      h4: "text-2xl font-bold",
      h5: "text-xl font-bold",
      h6: "text-lg font-bold"
    }, s = ae(), o = B(
      "w-full",
      r[t.tag],
      t.color,
      t.customSize,
      s.class
    ), n = t.tag;
    return (a, l) => (u(), H(X(y(n)), re(a.$attrs, { class: y(o) }), {
      default: j(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qf = ["src", "alt"], Yf = ["src", "alt"], ug = /* @__PURE__ */ C({
  __name: "FwbImg",
  props: {
    caption: { default: "" },
    src: { default: "" },
    size: { default: "max-w-full" },
    alt: { default: "" },
    imgClass: { default: "h-auto" },
    alignment: { default: "" },
    captionClass: { default: "mt-2 text-sm text-center text-gray-500 dark:text-gray-400" }
  },
  setup(e) {
    return (t, r) => t.caption ? (u(), g("figure", {
      key: 0,
      class: x(t.size)
    }, [
      f("img", {
        src: t.src,
        alt: t.alt,
        class: x([t.size, t.alignment, t.imgClass])
      }, null, 10, qf),
      f("figcaption", {
        class: x(t.captionClass)
      }, M(t.caption), 3)
    ], 2)) : (u(), g("img", {
      key: 1,
      src: t.src,
      alt: t.alt,
      class: x([t.size, t.alignment, t.imgClass])
    }, null, 10, Yf));
  }
}), Jf = "mb-3 last:mb-0 text-gray-900 dark:text-white leading-normal", cg = /* @__PURE__ */ C({
  __name: "FwbP",
  props: {
    class: { default: "" }
  },
  setup(e) {
    const t = e, r = c(() => me([
      Jf,
      t.class
    ]));
    return (s, o) => (u(), g("p", {
      class: x(r.value)
    }, [
      w(s.$slots, "default")
    ], 2));
  }
}), fg = /* @__PURE__ */ C({
  __name: "FlowbiteThemable",
  props: {
    theme: { default: "blue" }
  },
  setup(e) {
    return de(Es, nt(e, "theme")), (r, s) => w(r.$slots, "default");
  }
});
function pg() {
  const e = Q(Rs, null);
  return e === null && console.warn("Cannot use useToast outside <toast-provider> component. Please wrap your component with <toast-provider>"), {
    add: (o) => e ? e?.add(o) : "",
    remove: (o) => e ? e?.remove(o) : !1,
    pop: () => e ? e?.pop() : ""
  };
}
export {
  fg as FlowbiteThemable,
  Tc as FlowbiteThemableChild,
  ig as FwbA,
  Qf as FwbAccordion,
  Xf as FwbAccordionContent,
  Zf as FwbAccordionHeader,
  ep as FwbAccordionPanel,
  tp as FwbAlert,
  rp as FwbAvatar,
  sp as FwbAvatarStack,
  op as FwbAvatarStackCounter,
  np as FwbBadge,
  ap as FwbBreadcrumb,
  lp as FwbBreadcrumbItem,
  ua as FwbButton,
  ip as FwbButtonGroup,
  dp as FwbCard,
  up as FwbCarousel,
  eg as FwbCheckbox,
  cp as FwbDropdown,
  tg as FwbFileInput,
  fp as FwbFooter,
  pp as FwbFooterBrand,
  gp as FwbFooterCopyright,
  hp as FwbFooterIcon,
  mp as FwbFooterLink,
  bp as FwbFooterLinkGroup,
  dg as FwbHeading,
  ug as FwbImg,
  rg as FwbInput,
  vp as FwbJumbotron,
  yp as FwbListGroup,
  wp as FwbListGroupItem,
  Sp as FwbMegaMenu,
  Tp as FwbMegaMenuDropdown,
  xp as FwbModal,
  kp as FwbNavbar,
  _p as FwbNavbarCollapse,
  Cp as FwbNavbarLink,
  $p as FwbNavbarLogo,
  cg as FwbP,
  Pp as FwbPagination,
  Fp as FwbProgress,
  sg as FwbRadio,
  og as FwbRange,
  zp as FwbRating,
  ng as FwbSelect,
  Ap as FwbSidebar,
  Ip as FwbSidebarCta,
  Mp as FwbSidebarDropdownItem,
  Op as FwbSidebarItem,
  Bp as FwbSidebarItemGroup,
  Lp as FwbSidebarLogo,
  jr as FwbSlotListener,
  ht as FwbSpinner,
  Dp as FwbTab,
  Ep as FwbTable,
  Np as FwbTableBody,
  Rp as FwbTableCell,
  Vp as FwbTableHead,
  jp as FwbTableHeadCell,
  Hp as FwbTableRow,
  Wp as FwbTabs,
  ag as FwbTextarea,
  Gp as FwbTimeline,
  Up as FwbTimelineBody,
  qp as FwbTimelineContent,
  Yp as FwbTimelineItem,
  Jp as FwbTimelinePoint,
  Kp as FwbTimelineTime,
  Qp as FwbTimelineTitle,
  Gr as FwbToast,
  Xp as FwbToastProvider,
  lg as FwbToggle,
  Zp as FwbTooltip,
  pg as useToast
};
