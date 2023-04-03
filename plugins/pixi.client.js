var Wp = Object.defineProperty,
  jp = Object.defineProperties;
var Yp = Object.getOwnPropertyDescriptors;
var Ls = Object.getOwnPropertySymbols;
var yh = Object.prototype.hasOwnProperty,
  vh = Object.prototype.propertyIsEnumerable;
var gh = (m, tt, ft) =>
    tt in m
      ? Wp(m, tt, { enumerable: !0, configurable: !0, writable: !0, value: ft })
      : (m[tt] = ft),
  re = (m, tt) => {
    for (var ft in tt || (tt = {})) yh.call(tt, ft) && gh(m, ft, tt[ft]);
    if (Ls) for (var ft of Ls(tt)) vh.call(tt, ft) && gh(m, ft, tt[ft]);
    return m;
  },
  Pn = (m, tt) => jp(m, Yp(tt));
var Mn = (m, tt) => {
  var ft = {};
  for (var wt in m) yh.call(m, wt) && tt.indexOf(wt) < 0 && (ft[wt] = m[wt]);
  if (m != null && Ls)
    for (var wt of Ls(m))
      tt.indexOf(wt) < 0 && vh.call(m, wt) && (ft[wt] = m[wt]);
  return ft;
};
/*!
 * pixi.js - v7.1.4
 * Compiled Thu, 02 Mar 2023 16:46:25 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var PIXI = (function (m) {
  'use strict';
  var tt = ((e) => (
      (e[(e.WEBGL_LEGACY = 0)] = 'WEBGL_LEGACY'),
      (e[(e.WEBGL = 1)] = 'WEBGL'),
      (e[(e.WEBGL2 = 2)] = 'WEBGL2'),
      e
    ))(tt || {}),
    ft = ((e) => (
      (e[(e.UNKNOWN = 0)] = 'UNKNOWN'),
      (e[(e.WEBGL = 1)] = 'WEBGL'),
      (e[(e.CANVAS = 2)] = 'CANVAS'),
      e
    ))(ft || {}),
    wt = ((e) => (
      (e[(e.COLOR = 16384)] = 'COLOR'),
      (e[(e.DEPTH = 256)] = 'DEPTH'),
      (e[(e.STENCIL = 1024)] = 'STENCIL'),
      e
    ))(wt || {}),
    G = ((e) => (
      (e[(e.NORMAL = 0)] = 'NORMAL'),
      (e[(e.ADD = 1)] = 'ADD'),
      (e[(e.MULTIPLY = 2)] = 'MULTIPLY'),
      (e[(e.SCREEN = 3)] = 'SCREEN'),
      (e[(e.OVERLAY = 4)] = 'OVERLAY'),
      (e[(e.DARKEN = 5)] = 'DARKEN'),
      (e[(e.LIGHTEN = 6)] = 'LIGHTEN'),
      (e[(e.COLOR_DODGE = 7)] = 'COLOR_DODGE'),
      (e[(e.COLOR_BURN = 8)] = 'COLOR_BURN'),
      (e[(e.HARD_LIGHT = 9)] = 'HARD_LIGHT'),
      (e[(e.SOFT_LIGHT = 10)] = 'SOFT_LIGHT'),
      (e[(e.DIFFERENCE = 11)] = 'DIFFERENCE'),
      (e[(e.EXCLUSION = 12)] = 'EXCLUSION'),
      (e[(e.HUE = 13)] = 'HUE'),
      (e[(e.SATURATION = 14)] = 'SATURATION'),
      (e[(e.COLOR = 15)] = 'COLOR'),
      (e[(e.LUMINOSITY = 16)] = 'LUMINOSITY'),
      (e[(e.NORMAL_NPM = 17)] = 'NORMAL_NPM'),
      (e[(e.ADD_NPM = 18)] = 'ADD_NPM'),
      (e[(e.SCREEN_NPM = 19)] = 'SCREEN_NPM'),
      (e[(e.NONE = 20)] = 'NONE'),
      (e[(e.SRC_OVER = 0)] = 'SRC_OVER'),
      (e[(e.SRC_IN = 21)] = 'SRC_IN'),
      (e[(e.SRC_OUT = 22)] = 'SRC_OUT'),
      (e[(e.SRC_ATOP = 23)] = 'SRC_ATOP'),
      (e[(e.DST_OVER = 24)] = 'DST_OVER'),
      (e[(e.DST_IN = 25)] = 'DST_IN'),
      (e[(e.DST_OUT = 26)] = 'DST_OUT'),
      (e[(e.DST_ATOP = 27)] = 'DST_ATOP'),
      (e[(e.ERASE = 26)] = 'ERASE'),
      (e[(e.SUBTRACT = 28)] = 'SUBTRACT'),
      (e[(e.XOR = 29)] = 'XOR'),
      e
    ))(G || {}),
    Gt = ((e) => (
      (e[(e.POINTS = 0)] = 'POINTS'),
      (e[(e.LINES = 1)] = 'LINES'),
      (e[(e.LINE_LOOP = 2)] = 'LINE_LOOP'),
      (e[(e.LINE_STRIP = 3)] = 'LINE_STRIP'),
      (e[(e.TRIANGLES = 4)] = 'TRIANGLES'),
      (e[(e.TRIANGLE_STRIP = 5)] = 'TRIANGLE_STRIP'),
      (e[(e.TRIANGLE_FAN = 6)] = 'TRIANGLE_FAN'),
      e
    ))(Gt || {}),
    C = ((e) => (
      (e[(e.RGBA = 6408)] = 'RGBA'),
      (e[(e.RGB = 6407)] = 'RGB'),
      (e[(e.RG = 33319)] = 'RG'),
      (e[(e.RED = 6403)] = 'RED'),
      (e[(e.RGBA_INTEGER = 36249)] = 'RGBA_INTEGER'),
      (e[(e.RGB_INTEGER = 36248)] = 'RGB_INTEGER'),
      (e[(e.RG_INTEGER = 33320)] = 'RG_INTEGER'),
      (e[(e.RED_INTEGER = 36244)] = 'RED_INTEGER'),
      (e[(e.ALPHA = 6406)] = 'ALPHA'),
      (e[(e.LUMINANCE = 6409)] = 'LUMINANCE'),
      (e[(e.LUMINANCE_ALPHA = 6410)] = 'LUMINANCE_ALPHA'),
      (e[(e.DEPTH_COMPONENT = 6402)] = 'DEPTH_COMPONENT'),
      (e[(e.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
      e
    ))(C || {}),
    ve = ((e) => (
      (e[(e.TEXTURE_2D = 3553)] = 'TEXTURE_2D'),
      (e[(e.TEXTURE_CUBE_MAP = 34067)] = 'TEXTURE_CUBE_MAP'),
      (e[(e.TEXTURE_2D_ARRAY = 35866)] = 'TEXTURE_2D_ARRAY'),
      (e[(e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
        'TEXTURE_CUBE_MAP_POSITIVE_X'),
      (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
        'TEXTURE_CUBE_MAP_NEGATIVE_X'),
      (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
        'TEXTURE_CUBE_MAP_POSITIVE_Y'),
      (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
        'TEXTURE_CUBE_MAP_NEGATIVE_Y'),
      (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
        'TEXTURE_CUBE_MAP_POSITIVE_Z'),
      (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
        'TEXTURE_CUBE_MAP_NEGATIVE_Z'),
      e
    ))(ve || {}),
    k = ((e) => (
      (e[(e.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
      (e[(e.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
      (e[(e.UNSIGNED_SHORT_5_6_5 = 33635)] = 'UNSIGNED_SHORT_5_6_5'),
      (e[(e.UNSIGNED_SHORT_4_4_4_4 = 32819)] = 'UNSIGNED_SHORT_4_4_4_4'),
      (e[(e.UNSIGNED_SHORT_5_5_5_1 = 32820)] = 'UNSIGNED_SHORT_5_5_5_1'),
      (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
      (e[(e.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
        'UNSIGNED_INT_10F_11F_11F_REV'),
      (e[(e.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
        'UNSIGNED_INT_2_10_10_10_REV'),
      (e[(e.UNSIGNED_INT_24_8 = 34042)] = 'UNSIGNED_INT_24_8'),
      (e[(e.UNSIGNED_INT_5_9_9_9_REV = 35902)] = 'UNSIGNED_INT_5_9_9_9_REV'),
      (e[(e.BYTE = 5120)] = 'BYTE'),
      (e[(e.SHORT = 5122)] = 'SHORT'),
      (e[(e.INT = 5124)] = 'INT'),
      (e[(e.FLOAT = 5126)] = 'FLOAT'),
      (e[(e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
        'FLOAT_32_UNSIGNED_INT_24_8_REV'),
      (e[(e.HALF_FLOAT = 36193)] = 'HALF_FLOAT'),
      e
    ))(k || {}),
    Ni = ((e) => (
      (e[(e.FLOAT = 0)] = 'FLOAT'),
      (e[(e.INT = 1)] = 'INT'),
      (e[(e.UINT = 2)] = 'UINT'),
      e
    ))(Ni || {}),
    Zt = ((e) => (
      (e[(e.NEAREST = 0)] = 'NEAREST'), (e[(e.LINEAR = 1)] = 'LINEAR'), e
    ))(Zt || {}),
    Qt = ((e) => (
      (e[(e.CLAMP = 33071)] = 'CLAMP'),
      (e[(e.REPEAT = 10497)] = 'REPEAT'),
      (e[(e.MIRRORED_REPEAT = 33648)] = 'MIRRORED_REPEAT'),
      e
    ))(Qt || {}),
    Ht = ((e) => (
      (e[(e.OFF = 0)] = 'OFF'),
      (e[(e.POW2 = 1)] = 'POW2'),
      (e[(e.ON = 2)] = 'ON'),
      (e[(e.ON_MANUAL = 3)] = 'ON_MANUAL'),
      e
    ))(Ht || {}),
    Bt = ((e) => (
      (e[(e.NPM = 0)] = 'NPM'),
      (e[(e.UNPACK = 1)] = 'UNPACK'),
      (e[(e.PMA = 2)] = 'PMA'),
      (e[(e.NO_PREMULTIPLIED_ALPHA = 0)] = 'NO_PREMULTIPLIED_ALPHA'),
      (e[(e.PREMULTIPLY_ON_UPLOAD = 1)] = 'PREMULTIPLY_ON_UPLOAD'),
      (e[(e.PREMULTIPLIED_ALPHA = 2)] = 'PREMULTIPLIED_ALPHA'),
      e
    ))(Bt || {}),
    Xt = ((e) => (
      (e[(e.NO = 0)] = 'NO'),
      (e[(e.YES = 1)] = 'YES'),
      (e[(e.AUTO = 2)] = 'AUTO'),
      (e[(e.BLEND = 0)] = 'BLEND'),
      (e[(e.CLEAR = 1)] = 'CLEAR'),
      (e[(e.BLIT = 2)] = 'BLIT'),
      e
    ))(Xt || {}),
    Oi = ((e) => (
      (e[(e.AUTO = 0)] = 'AUTO'), (e[(e.MANUAL = 1)] = 'MANUAL'), e
    ))(Oi || {}),
    Rt = ((e) => (
      (e.LOW = 'lowp'), (e.MEDIUM = 'mediump'), (e.HIGH = 'highp'), e
    ))(Rt || {}),
    ht = ((e) => (
      (e[(e.NONE = 0)] = 'NONE'),
      (e[(e.SCISSOR = 1)] = 'SCISSOR'),
      (e[(e.STENCIL = 2)] = 'STENCIL'),
      (e[(e.SPRITE = 3)] = 'SPRITE'),
      (e[(e.COLOR = 4)] = 'COLOR'),
      e
    ))(ht || {}),
    Bn = ((e) => (
      (e[(e.RED = 1)] = 'RED'),
      (e[(e.GREEN = 2)] = 'GREEN'),
      (e[(e.BLUE = 4)] = 'BLUE'),
      (e[(e.ALPHA = 8)] = 'ALPHA'),
      e
    ))(Bn || {}),
    rt = ((e) => (
      (e[(e.NONE = 0)] = 'NONE'),
      (e[(e.LOW = 2)] = 'LOW'),
      (e[(e.MEDIUM = 4)] = 'MEDIUM'),
      (e[(e.HIGH = 8)] = 'HIGH'),
      e
    ))(rt || {}),
    Vt = ((e) => (
      (e[(e.ELEMENT_ARRAY_BUFFER = 34963)] = 'ELEMENT_ARRAY_BUFFER'),
      (e[(e.ARRAY_BUFFER = 34962)] = 'ARRAY_BUFFER'),
      (e[(e.UNIFORM_BUFFER = 35345)] = 'UNIFORM_BUFFER'),
      e
    ))(Vt || {});
  const Dn = {
      createCanvas: (e, t) => {
        const i = document.createElement('canvas');
        return (i.width = e), (i.height = t), i;
      },
      getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
      getWebGLRenderingContext: () => WebGLRenderingContext,
      getNavigator: () => navigator,
      getBaseUrl: () => {
        var e;
        return (e = document.baseURI) != null ? e : window.location.href;
      },
      getFontFaceSet: () => document.fonts,
      fetch: (e, t) => fetch(e, t),
      parseXML: (e) => new DOMParser().parseFromString(e, 'text/xml'),
    },
    B = {
      ADAPTER: Dn,
      RESOLUTION: 1,
      RENDER_OPTIONS: {
        view: null,
        width: 800,
        height: 600,
        autoDensity: !1,
        backgroundColor: 0,
        backgroundAlpha: 1,
        clearBeforeRender: !0,
        antialias: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1,
        hello: !1,
      },
      CREATE_IMAGE_BITMAP: !1,
      ROUND_PIXELS: !1,
    };
  var Us = /iPhone/i,
    Fn = /iPod/i,
    Nn = /iPad/i,
    On = /\biOS-universal(?:.+)Mac\b/i,
    ks = /\bAndroid(?:.+)Mobile\b/i,
    Ln = /Android/i,
    Oe = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
    Li = /Silk/i,
    ne = /Windows Phone/i,
    Un = /\bWindows(?:.+)ARM\b/i,
    kn = /BlackBerry/i,
    Gn = /BB10/i,
    Hn = /Opera Mini/i,
    Xn = /\b(CriOS|Chrome)(?:.+)Mobile/i,
    Vn = /Mobile(?:.+)Firefox\b/i,
    zn = function (e) {
      return (
        typeof e != 'undefined' &&
        e.platform === 'MacIntel' &&
        typeof e.maxTouchPoints == 'number' &&
        e.maxTouchPoints > 1 &&
        typeof MSStream == 'undefined'
      );
    };
  function xh(e) {
    return function (t) {
      return t.test(e);
    };
  }
  function Th(e) {
    var t = { userAgent: '', platform: '', maxTouchPoints: 0 };
    !e && typeof navigator != 'undefined'
      ? (t = {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          maxTouchPoints: navigator.maxTouchPoints || 0,
        })
      : typeof e == 'string'
      ? (t.userAgent = e)
      : e &&
        e.userAgent &&
        (t = {
          userAgent: e.userAgent,
          platform: e.platform,
          maxTouchPoints: e.maxTouchPoints || 0,
        });
    var i = t.userAgent,
      s = i.split('[FBAN');
    typeof s[1] != 'undefined' && (i = s[0]),
      (s = i.split('Twitter')),
      typeof s[1] != 'undefined' && (i = s[0]);
    var r = xh(i),
      n = {
        apple: {
          phone: r(Us) && !r(ne),
          ipod: r(Fn),
          tablet: !r(Us) && (r(Nn) || zn(t)) && !r(ne),
          universal: r(On),
          device: (r(Us) || r(Fn) || r(Nn) || r(On) || zn(t)) && !r(ne),
        },
        amazon: {
          phone: r(Oe),
          tablet: !r(Oe) && r(Li),
          device: r(Oe) || r(Li),
        },
        android: {
          phone: (!r(ne) && r(Oe)) || (!r(ne) && r(ks)),
          tablet: !r(ne) && !r(Oe) && !r(ks) && (r(Li) || r(Ln)),
          device:
            (!r(ne) && (r(Oe) || r(Li) || r(ks) || r(Ln))) || r(/\bokhttp\b/i),
        },
        windows: { phone: r(ne), tablet: r(Un), device: r(ne) || r(Un) },
        other: {
          blackberry: r(kn),
          blackberry10: r(Gn),
          opera: r(Hn),
          firefox: r(Vn),
          chrome: r(Xn),
          device: r(kn) || r(Gn) || r(Hn) || r(Vn) || r(Xn),
        },
        any: !1,
        phone: !1,
        tablet: !1,
      };
    return (
      (n.any =
        n.apple.device ||
        n.android.device ||
        n.windows.device ||
        n.other.device),
      (n.phone = n.apple.phone || n.android.phone || n.windows.phone),
      (n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet),
      n
    );
  }
  const zt = Th(globalThis.navigator);
  (B.RETINA_PREFIX = /@([0-9\.]+)x/), (B.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1);
  var Gs =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {};
  function $p(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  function Hs(e, t, i) {
    return (
      (i = {
        path: t,
        exports: {},
        require: function (s, r) {
          return bh(s, r == null ? i.path : r);
        },
      }),
      e(i, i.exports),
      i.exports
    );
  }
  function qp(e) {
    return e && Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  function Kp(e) {
    return e &&
      Object.prototype.hasOwnProperty.call(e, 'default') &&
      Object.keys(e).length === 1
      ? e.default
      : e;
  }
  function Zp(e) {
    if (e.__esModule) return e;
    var t = Object.defineProperty({}, '__esModule', { value: !0 });
    return (
      Object.keys(e).forEach(function (i) {
        var s = Object.getOwnPropertyDescriptor(e, i);
        Object.defineProperty(
          t,
          i,
          s.get
            ? s
            : {
                enumerable: !0,
                get: function () {
                  return e[i];
                },
              }
        );
      }),
      t
    );
  }
  function bh() {
    throw new Error(
      'Dynamic requires are not currently supported by @rollup/plugin-commonjs'
    );
  }
  var Le = Hs(function (e) {
      'use strict';
      var t = Object.prototype.hasOwnProperty,
        i = '~';
      function s() {}
      Object.create &&
        ((s.prototype = Object.create(null)), new s().__proto__ || (i = !1));
      function r(h, l, c) {
        (this.fn = h), (this.context = l), (this.once = c || !1);
      }
      function n(h, l, c, u, d) {
        if (typeof c != 'function')
          throw new TypeError('The listener must be a function');
        var f = new r(c, u || h, d),
          p = i ? i + l : l;
        return (
          h._events[p]
            ? h._events[p].fn
              ? (h._events[p] = [h._events[p], f])
              : h._events[p].push(f)
            : ((h._events[p] = f), h._eventsCount++),
          h
        );
      }
      function o(h, l) {
        --h._eventsCount === 0 ? (h._events = new s()) : delete h._events[l];
      }
      function a() {
        (this._events = new s()), (this._eventsCount = 0);
      }
      (a.prototype.eventNames = function () {
        var l = [],
          c,
          u;
        if (this._eventsCount === 0) return l;
        for (u in (c = this._events))
          t.call(c, u) && l.push(i ? u.slice(1) : u);
        return Object.getOwnPropertySymbols
          ? l.concat(Object.getOwnPropertySymbols(c))
          : l;
      }),
        (a.prototype.listeners = function (l) {
          var c = i ? i + l : l,
            u = this._events[c];
          if (!u) return [];
          if (u.fn) return [u.fn];
          for (var d = 0, f = u.length, p = new Array(f); d < f; d++)
            p[d] = u[d].fn;
          return p;
        }),
        (a.prototype.listenerCount = function (l) {
          var c = i ? i + l : l,
            u = this._events[c];
          return u ? (u.fn ? 1 : u.length) : 0;
        }),
        (a.prototype.emit = function (l, c, u, d, f, p) {
          var g = i ? i + l : l;
          if (!this._events[g]) return !1;
          var _ = this._events[g],
            v = arguments.length,
            T,
            y;
          if (_.fn) {
            switch ((_.once && this.removeListener(l, _.fn, void 0, !0), v)) {
              case 1:
                return _.fn.call(_.context), !0;
              case 2:
                return _.fn.call(_.context, c), !0;
              case 3:
                return _.fn.call(_.context, c, u), !0;
              case 4:
                return _.fn.call(_.context, c, u, d), !0;
              case 5:
                return _.fn.call(_.context, c, u, d, f), !0;
              case 6:
                return _.fn.call(_.context, c, u, d, f, p), !0;
            }
            for (y = 1, T = new Array(v - 1); y < v; y++)
              T[y - 1] = arguments[y];
            _.fn.apply(_.context, T);
          } else {
            var x = _.length,
              A;
            for (y = 0; y < x; y++)
              switch (
                (_[y].once && this.removeListener(l, _[y].fn, void 0, !0), v)
              ) {
                case 1:
                  _[y].fn.call(_[y].context);
                  break;
                case 2:
                  _[y].fn.call(_[y].context, c);
                  break;
                case 3:
                  _[y].fn.call(_[y].context, c, u);
                  break;
                case 4:
                  _[y].fn.call(_[y].context, c, u, d);
                  break;
                default:
                  if (!T)
                    for (A = 1, T = new Array(v - 1); A < v; A++)
                      T[A - 1] = arguments[A];
                  _[y].fn.apply(_[y].context, T);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (l, c, u) {
          return n(this, l, c, u, !1);
        }),
        (a.prototype.once = function (l, c, u) {
          return n(this, l, c, u, !0);
        }),
        (a.prototype.removeListener = function (l, c, u, d) {
          var f = i ? i + l : l;
          if (!this._events[f]) return this;
          if (!c) return o(this, f), this;
          var p = this._events[f];
          if (p.fn)
            p.fn === c &&
              (!d || p.once) &&
              (!u || p.context === u) &&
              o(this, f);
          else {
            for (var g = 0, _ = [], v = p.length; g < v; g++)
              (p[g].fn !== c ||
                (d && !p[g].once) ||
                (u && p[g].context !== u)) &&
                _.push(p[g]);
            _.length
              ? (this._events[f] = _.length === 1 ? _[0] : _)
              : o(this, f);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (l) {
          var c;
          return (
            l
              ? ((c = i ? i + l : l), this._events[c] && o(this, c))
              : ((this._events = new s()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = i),
        (a.EventEmitter = a),
        (e.exports = a);
    }),
    Xs = Ui,
    Eh = Ui;
  function Ui(e, t, i) {
    i = i || 2;
    var s = t && t.length,
      r = s ? t[0] * i : e.length,
      n = Wn(e, 0, r, i, !0),
      o = [];
    if (!n || n.next === n.prev) return o;
    var a, h, l, c, u, d, f;
    if ((s && (n = Ch(e, t, n, i)), e.length > 80 * i)) {
      (a = l = e[0]), (h = c = e[1]);
      for (var p = i; p < r; p += i)
        (u = e[p]),
          (d = e[p + 1]),
          u < a && (a = u),
          d < h && (h = d),
          u > l && (l = u),
          d > c && (c = d);
      (f = Math.max(l - a, c - h)), (f = f !== 0 ? 32767 / f : 0);
    }
    return Qe(n, o, i, a, h, f, 0), o;
  }
  function Wn(e, t, i, s, r) {
    var n, o;
    if (r === Ws(e, t, i, s) > 0)
      for (n = t; n < i; n += s) o = $n(n, e[n], e[n + 1], o);
    else for (n = i - s; n >= t; n -= s) o = $n(n, e[n], e[n + 1], o);
    return o && ki(o, o.next) && (ti(o), (o = o.next)), o;
  }
  function xe(e, t) {
    if (!e) return e;
    t || (t = e);
    var i = e,
      s;
    do
      if (
        ((s = !1), !i.steiner && (ki(i, i.next) || nt(i.prev, i, i.next) === 0))
      ) {
        if ((ti(i), (i = t = i.prev), i === i.next)) break;
        s = !0;
      } else i = i.next;
    while (s || i !== t);
    return t;
  }
  function Qe(e, t, i, s, r, n, o) {
    if (!!e) {
      !o && n && Dh(e, s, r, n);
      for (var a = e, h, l; e.prev !== e.next; ) {
        if (((h = e.prev), (l = e.next), n ? Sh(e, s, r, n) : wh(e))) {
          t.push((h.i / i) | 0),
            t.push((e.i / i) | 0),
            t.push((l.i / i) | 0),
            ti(e),
            (e = l.next),
            (a = l.next);
          continue;
        }
        if (((e = l), e === a)) {
          o
            ? o === 1
              ? ((e = Ah(xe(e), t, i)), Qe(e, t, i, s, r, n, 2))
              : o === 2 && Rh(e, t, i, s, r, n)
            : Qe(xe(e), t, i, s, r, n, 1);
          break;
        }
      }
    }
  }
  function wh(e) {
    var t = e.prev,
      i = e,
      s = e.next;
    if (nt(t, i, s) >= 0) return !1;
    for (
      var r = t.x,
        n = i.x,
        o = s.x,
        a = t.y,
        h = i.y,
        l = s.y,
        c = r < n ? (r < o ? r : o) : n < o ? n : o,
        u = a < h ? (a < l ? a : l) : h < l ? h : l,
        d = r > n ? (r > o ? r : o) : n > o ? n : o,
        f = a > h ? (a > l ? a : l) : h > l ? h : l,
        p = s.next;
      p !== t;

    ) {
      if (
        p.x >= c &&
        p.x <= d &&
        p.y >= u &&
        p.y <= f &&
        Ue(r, a, n, h, o, l, p.x, p.y) &&
        nt(p.prev, p, p.next) >= 0
      )
        return !1;
      p = p.next;
    }
    return !0;
  }
  function Sh(e, t, i, s) {
    var r = e.prev,
      n = e,
      o = e.next;
    if (nt(r, n, o) >= 0) return !1;
    for (
      var a = r.x,
        h = n.x,
        l = o.x,
        c = r.y,
        u = n.y,
        d = o.y,
        f = a < h ? (a < l ? a : l) : h < l ? h : l,
        p = c < u ? (c < d ? c : d) : u < d ? u : d,
        g = a > h ? (a > l ? a : l) : h > l ? h : l,
        _ = c > u ? (c > d ? c : d) : u > d ? u : d,
        v = Vs(f, p, t, i, s),
        T = Vs(g, _, t, i, s),
        y = e.prevZ,
        x = e.nextZ;
      y && y.z >= v && x && x.z <= T;

    ) {
      if (
        (y.x >= f &&
          y.x <= g &&
          y.y >= p &&
          y.y <= _ &&
          y !== r &&
          y !== o &&
          Ue(a, c, h, u, l, d, y.x, y.y) &&
          nt(y.prev, y, y.next) >= 0) ||
        ((y = y.prevZ),
        x.x >= f &&
          x.x <= g &&
          x.y >= p &&
          x.y <= _ &&
          x !== r &&
          x !== o &&
          Ue(a, c, h, u, l, d, x.x, x.y) &&
          nt(x.prev, x, x.next) >= 0)
      )
        return !1;
      x = x.nextZ;
    }
    for (; y && y.z >= v; ) {
      if (
        y.x >= f &&
        y.x <= g &&
        y.y >= p &&
        y.y <= _ &&
        y !== r &&
        y !== o &&
        Ue(a, c, h, u, l, d, y.x, y.y) &&
        nt(y.prev, y, y.next) >= 0
      )
        return !1;
      y = y.prevZ;
    }
    for (; x && x.z <= T; ) {
      if (
        x.x >= f &&
        x.x <= g &&
        x.y >= p &&
        x.y <= _ &&
        x !== r &&
        x !== o &&
        Ue(a, c, h, u, l, d, x.x, x.y) &&
        nt(x.prev, x, x.next) >= 0
      )
        return !1;
      x = x.nextZ;
    }
    return !0;
  }
  function Ah(e, t, i) {
    var s = e;
    do {
      var r = s.prev,
        n = s.next.next;
      !ki(r, n) &&
        jn(r, s, s.next, n) &&
        Je(r, n) &&
        Je(n, r) &&
        (t.push((r.i / i) | 0),
        t.push((s.i / i) | 0),
        t.push((n.i / i) | 0),
        ti(s),
        ti(s.next),
        (s = e = n)),
        (s = s.next);
    } while (s !== e);
    return xe(s);
  }
  function Rh(e, t, i, s, r, n) {
    var o = e;
    do {
      for (var a = o.next.next; a !== o.prev; ) {
        if (o.i !== a.i && Oh(o, a)) {
          var h = Yn(o, a);
          (o = xe(o, o.next)),
            (h = xe(h, h.next)),
            Qe(o, t, i, s, r, n, 0),
            Qe(h, t, i, s, r, n, 0);
          return;
        }
        a = a.next;
      }
      o = o.next;
    } while (o !== e);
  }
  function Ch(e, t, i, s) {
    var r = [],
      n,
      o,
      a,
      h,
      l;
    for (n = 0, o = t.length; n < o; n++)
      (a = t[n] * s),
        (h = n < o - 1 ? t[n + 1] * s : e.length),
        (l = Wn(e, a, h, s, !1)),
        l === l.next && (l.steiner = !0),
        r.push(Nh(l));
    for (r.sort(Ih), n = 0; n < r.length; n++) i = Ph(r[n], i);
    return i;
  }
  function Ih(e, t) {
    return e.x - t.x;
  }
  function Ph(e, t) {
    var i = Mh(e, t);
    if (!i) return t;
    var s = Yn(i, e);
    return xe(s, s.next), xe(i, i.next);
  }
  function Mh(e, t) {
    var i = t,
      s = e.x,
      r = e.y,
      n = -1 / 0,
      o;
    do {
      if (r <= i.y && r >= i.next.y && i.next.y !== i.y) {
        var a = i.x + ((r - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);
        if (
          a <= s &&
          a > n &&
          ((n = a), (o = i.x < i.next.x ? i : i.next), a === s)
        )
          return o;
      }
      i = i.next;
    } while (i !== t);
    if (!o) return null;
    var h = o,
      l = o.x,
      c = o.y,
      u = 1 / 0,
      d;
    i = o;
    do
      s >= i.x &&
        i.x >= l &&
        s !== i.x &&
        Ue(r < c ? s : n, r, l, c, r < c ? n : s, r, i.x, i.y) &&
        ((d = Math.abs(r - i.y) / (s - i.x)),
        Je(i, e) &&
          (d < u || (d === u && (i.x > o.x || (i.x === o.x && Bh(o, i))))) &&
          ((o = i), (u = d))),
        (i = i.next);
    while (i !== h);
    return o;
  }
  function Bh(e, t) {
    return nt(e.prev, e, t.prev) < 0 && nt(t.next, e, e.next) < 0;
  }
  function Dh(e, t, i, s) {
    var r = e;
    do
      r.z === 0 && (r.z = Vs(r.x, r.y, t, i, s)),
        (r.prevZ = r.prev),
        (r.nextZ = r.next),
        (r = r.next);
    while (r !== e);
    (r.prevZ.nextZ = null), (r.prevZ = null), Fh(r);
  }
  function Fh(e) {
    var t,
      i,
      s,
      r,
      n,
      o,
      a,
      h,
      l = 1;
    do {
      for (i = e, e = null, n = null, o = 0; i; ) {
        for (o++, s = i, a = 0, t = 0; t < l && (a++, (s = s.nextZ), !!s); t++);
        for (h = l; a > 0 || (h > 0 && s); )
          a !== 0 && (h === 0 || !s || i.z <= s.z)
            ? ((r = i), (i = i.nextZ), a--)
            : ((r = s), (s = s.nextZ), h--),
            n ? (n.nextZ = r) : (e = r),
            (r.prevZ = n),
            (n = r);
        i = s;
      }
      (n.nextZ = null), (l *= 2);
    } while (o > 1);
    return e;
  }
  function Vs(e, t, i, s, r) {
    return (
      (e = ((e - i) * r) | 0),
      (t = ((t - s) * r) | 0),
      (e = (e | (e << 8)) & 16711935),
      (e = (e | (e << 4)) & 252645135),
      (e = (e | (e << 2)) & 858993459),
      (e = (e | (e << 1)) & 1431655765),
      (t = (t | (t << 8)) & 16711935),
      (t = (t | (t << 4)) & 252645135),
      (t = (t | (t << 2)) & 858993459),
      (t = (t | (t << 1)) & 1431655765),
      e | (t << 1)
    );
  }
  function Nh(e) {
    var t = e,
      i = e;
    do (t.x < i.x || (t.x === i.x && t.y < i.y)) && (i = t), (t = t.next);
    while (t !== e);
    return i;
  }
  function Ue(e, t, i, s, r, n, o, a) {
    return (
      (r - o) * (t - a) >= (e - o) * (n - a) &&
      (e - o) * (s - a) >= (i - o) * (t - a) &&
      (i - o) * (n - a) >= (r - o) * (s - a)
    );
  }
  function Oh(e, t) {
    return (
      e.next.i !== t.i &&
      e.prev.i !== t.i &&
      !Lh(e, t) &&
      ((Je(e, t) &&
        Je(t, e) &&
        Uh(e, t) &&
        (nt(e.prev, e, t.prev) || nt(e, t.prev, t))) ||
        (ki(e, t) && nt(e.prev, e, e.next) > 0 && nt(t.prev, t, t.next) > 0))
    );
  }
  function nt(e, t, i) {
    return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y);
  }
  function ki(e, t) {
    return e.x === t.x && e.y === t.y;
  }
  function jn(e, t, i, s) {
    var r = Hi(nt(e, t, i)),
      n = Hi(nt(e, t, s)),
      o = Hi(nt(i, s, e)),
      a = Hi(nt(i, s, t));
    return !!(
      (r !== n && o !== a) ||
      (r === 0 && Gi(e, i, t)) ||
      (n === 0 && Gi(e, s, t)) ||
      (o === 0 && Gi(i, e, s)) ||
      (a === 0 && Gi(i, t, s))
    );
  }
  function Gi(e, t, i) {
    return (
      t.x <= Math.max(e.x, i.x) &&
      t.x >= Math.min(e.x, i.x) &&
      t.y <= Math.max(e.y, i.y) &&
      t.y >= Math.min(e.y, i.y)
    );
  }
  function Hi(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0;
  }
  function Lh(e, t) {
    var i = e;
    do {
      if (
        i.i !== e.i &&
        i.next.i !== e.i &&
        i.i !== t.i &&
        i.next.i !== t.i &&
        jn(i, i.next, e, t)
      )
        return !0;
      i = i.next;
    } while (i !== e);
    return !1;
  }
  function Je(e, t) {
    return nt(e.prev, e, e.next) < 0
      ? nt(e, t, e.next) >= 0 && nt(e, e.prev, t) >= 0
      : nt(e, t, e.prev) < 0 || nt(e, e.next, t) < 0;
  }
  function Uh(e, t) {
    var i = e,
      s = !1,
      r = (e.x + t.x) / 2,
      n = (e.y + t.y) / 2;
    do
      i.y > n != i.next.y > n &&
        i.next.y !== i.y &&
        r < ((i.next.x - i.x) * (n - i.y)) / (i.next.y - i.y) + i.x &&
        (s = !s),
        (i = i.next);
    while (i !== e);
    return s;
  }
  function Yn(e, t) {
    var i = new zs(e.i, e.x, e.y),
      s = new zs(t.i, t.x, t.y),
      r = e.next,
      n = t.prev;
    return (
      (e.next = t),
      (t.prev = e),
      (i.next = r),
      (r.prev = i),
      (s.next = i),
      (i.prev = s),
      (n.next = s),
      (s.prev = n),
      s
    );
  }
  function $n(e, t, i, s) {
    var r = new zs(e, t, i);
    return (
      s
        ? ((r.next = s.next), (r.prev = s), (s.next.prev = r), (s.next = r))
        : ((r.prev = r), (r.next = r)),
      r
    );
  }
  function ti(e) {
    (e.next.prev = e.prev),
      (e.prev.next = e.next),
      e.prevZ && (e.prevZ.nextZ = e.nextZ),
      e.nextZ && (e.nextZ.prevZ = e.prevZ);
  }
  function zs(e, t, i) {
    (this.i = e),
      (this.x = t),
      (this.y = i),
      (this.prev = null),
      (this.next = null),
      (this.z = 0),
      (this.prevZ = null),
      (this.nextZ = null),
      (this.steiner = !1);
  }
  Ui.deviation = function (e, t, i, s) {
    var r = t && t.length,
      n = r ? t[0] * i : e.length,
      o = Math.abs(Ws(e, 0, n, i));
    if (r)
      for (var a = 0, h = t.length; a < h; a++) {
        var l = t[a] * i,
          c = a < h - 1 ? t[a + 1] * i : e.length;
        o -= Math.abs(Ws(e, l, c, i));
      }
    var u = 0;
    for (a = 0; a < s.length; a += 3) {
      var d = s[a] * i,
        f = s[a + 1] * i,
        p = s[a + 2] * i;
      u += Math.abs(
        (e[d] - e[p]) * (e[f + 1] - e[d + 1]) -
          (e[d] - e[f]) * (e[p + 1] - e[d + 1])
      );
    }
    return o === 0 && u === 0 ? 0 : Math.abs((u - o) / o);
  };
  function Ws(e, t, i, s) {
    for (var r = 0, n = t, o = i - s; n < i; n += s)
      (r += (e[o] - e[n]) * (e[n + 1] + e[o + 1])), (o = n);
    return r;
  }
  (Ui.flatten = function (e) {
    for (
      var t = e[0][0].length,
        i = { vertices: [], holes: [], dimensions: t },
        s = 0,
        r = 0;
      r < e.length;
      r++
    ) {
      for (var n = 0; n < e[r].length; n++)
        for (var o = 0; o < t; o++) i.vertices.push(e[r][n][o]);
      r > 0 && ((s += e[r - 1].length), i.holes.push(s));
    }
    return i;
  }),
    (Xs.default = Eh);
  var kh = Hs(function (e, t) {
      /*! https://mths.be/punycode v1.3.2 by @mathias */ (function (i) {
        var s = t && !t.nodeType && t,
          r = e && !e.nodeType && e,
          n = typeof Gs == 'object' && Gs;
        (n.global === n || n.window === n || n.self === n) && (i = n);
        var o,
          a = 2147483647,
          h = 36,
          l = 1,
          c = 26,
          u = 38,
          d = 700,
          f = 72,
          p = 128,
          g = '-',
          _ = /^xn--/,
          v = /[^\x20-\x7E]/,
          T = /[\x2E\u3002\uFF0E\uFF61]/g,
          y = {
            overflow: 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input',
          },
          x = h - l,
          A = Math.floor,
          M = String.fromCharCode,
          R;
        function E(S) {
          throw RangeError(y[S]);
        }
        function L(S, X) {
          for (var q = S.length, Z = []; q--; ) Z[q] = X(S[q]);
          return Z;
        }
        function H(S, X) {
          var q = S.split('@'),
            Z = '';
          q.length > 1 && ((Z = q[0] + '@'), (S = q[1])),
            (S = S.replace(T, '.'));
          var Q = S.split('.'),
            yt = L(Q, X).join('.');
          return Z + yt;
        }
        function I(S) {
          for (var X = [], q = 0, Z = S.length, Q, yt; q < Z; )
            (Q = S.charCodeAt(q++)),
              Q >= 55296 && Q <= 56319 && q < Z
                ? ((yt = S.charCodeAt(q++)),
                  (yt & 64512) == 56320
                    ? X.push(((Q & 1023) << 10) + (yt & 1023) + 65536)
                    : (X.push(Q), q--))
                : X.push(Q);
          return X;
        }
        function N(S) {
          return L(S, function (X) {
            var q = '';
            return (
              X > 65535 &&
                ((X -= 65536),
                (q += M(((X >>> 10) & 1023) | 55296)),
                (X = 56320 | (X & 1023))),
              (q += M(X)),
              q
            );
          }).join('');
        }
        function w(S) {
          return S - 48 < 10
            ? S - 22
            : S - 65 < 26
            ? S - 65
            : S - 97 < 26
            ? S - 97
            : h;
        }
        function b(S, X) {
          return S + 22 + 75 * (S < 26) - ((X != 0) << 5);
        }
        function z(S, X, q) {
          var Z = 0;
          for (
            S = q ? A(S / d) : S >> 1, S += A(S / X);
            S > (x * c) >> 1;
            Z += h
          )
            S = A(S / x);
          return A(Z + ((x + 1) * S) / (S + u));
        }
        function Y(S) {
          var X = [],
            q = S.length,
            Z,
            Q = 0,
            yt = p,
            lt = f,
            vt,
            Tt,
            Mt,
            xt,
            st,
            ct,
            dt,
            ie,
            se;
          for (vt = S.lastIndexOf(g), vt < 0 && (vt = 0), Tt = 0; Tt < vt; ++Tt)
            S.charCodeAt(Tt) >= 128 && E('not-basic'), X.push(S.charCodeAt(Tt));
          for (Mt = vt > 0 ? vt + 1 : 0; Mt < q; ) {
            for (
              xt = Q, st = 1, ct = h;
              Mt >= q && E('invalid-input'),
                (dt = w(S.charCodeAt(Mt++))),
                (dt >= h || dt > A((a - Q) / st)) && E('overflow'),
                (Q += dt * st),
                (ie = ct <= lt ? l : ct >= lt + c ? c : ct - lt),
                !(dt < ie);
              ct += h
            )
              (se = h - ie), st > A(a / se) && E('overflow'), (st *= se);
            (Z = X.length + 1),
              (lt = z(Q - xt, Z, xt == 0)),
              A(Q / Z) > a - yt && E('overflow'),
              (yt += A(Q / Z)),
              (Q %= Z),
              X.splice(Q++, 0, yt);
          }
          return N(X);
        }
        function F(S) {
          var X,
            q,
            Z,
            Q,
            yt,
            lt,
            vt,
            Tt,
            Mt,
            xt,
            st,
            ct = [],
            dt,
            ie,
            se,
            Fi;
          for (
            S = I(S), dt = S.length, X = p, q = 0, yt = f, lt = 0;
            lt < dt;
            ++lt
          )
            (st = S[lt]), st < 128 && ct.push(M(st));
          for (Z = Q = ct.length, Q && ct.push(g); Z < dt; ) {
            for (vt = a, lt = 0; lt < dt; ++lt)
              (st = S[lt]), st >= X && st < vt && (vt = st);
            for (
              ie = Z + 1,
                vt - X > A((a - q) / ie) && E('overflow'),
                q += (vt - X) * ie,
                X = vt,
                lt = 0;
              lt < dt;
              ++lt
            )
              if (((st = S[lt]), st < X && ++q > a && E('overflow'), st == X)) {
                for (
                  Tt = q, Mt = h;
                  (xt = Mt <= yt ? l : Mt >= yt + c ? c : Mt - yt), !(Tt < xt);
                  Mt += h
                )
                  (Fi = Tt - xt),
                    (se = h - xt),
                    ct.push(M(b(xt + (Fi % se), 0))),
                    (Tt = A(Fi / se));
                ct.push(M(b(Tt, 0))), (yt = z(q, ie, Z == Q)), (q = 0), ++Z;
              }
            ++q, ++X;
          }
          return ct.join('');
        }
        function K(S) {
          return H(S, function (X) {
            return _.test(X) ? Y(X.slice(4).toLowerCase()) : X;
          });
        }
        function at(S) {
          return H(S, function (X) {
            return v.test(X) ? 'xn--' + F(X) : X;
          });
        }
        if (
          ((o = {
            version: '1.3.2',
            ucs2: { decode: I, encode: N },
            decode: Y,
            encode: F,
            toASCII: at,
            toUnicode: K,
          }),
          s && r)
        )
          if (e.exports == s) r.exports = o;
          else for (R in o) o.hasOwnProperty(R) && (s[R] = o[R]);
        else i.punycode = o;
      })(Gs);
    }),
    Jt = {
      isString: function (e) {
        return typeof e == 'string';
      },
      isObject: function (e) {
        return typeof e == 'object' && e !== null;
      },
      isNull: function (e) {
        return e === null;
      },
      isNullOrUndefined: function (e) {
        return e == null;
      },
    };
  function Gh(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  var Hh = function (e, t, i, s) {
      (t = t || '&'), (i = i || '=');
      var r = {};
      if (typeof e != 'string' || e.length === 0) return r;
      var n = /\+/g;
      e = e.split(t);
      var o = 1e3;
      s && typeof s.maxKeys == 'number' && (o = s.maxKeys);
      var a = e.length;
      o > 0 && a > o && (a = o);
      for (var h = 0; h < a; ++h) {
        var l = e[h].replace(n, '%20'),
          c = l.indexOf(i),
          u,
          d,
          f,
          p;
        c >= 0
          ? ((u = l.substr(0, c)), (d = l.substr(c + 1)))
          : ((u = l), (d = '')),
          (f = decodeURIComponent(u)),
          (p = decodeURIComponent(d)),
          Gh(r, f)
            ? Array.isArray(r[f])
              ? r[f].push(p)
              : (r[f] = [r[f], p])
            : (r[f] = p);
      }
      return r;
    },
    ei = function (e) {
      switch (typeof e) {
        case 'string':
          return e;
        case 'boolean':
          return e ? 'true' : 'false';
        case 'number':
          return isFinite(e) ? e : '';
        default:
          return '';
      }
    },
    Xh = function (e, t, i, s) {
      return (
        (t = t || '&'),
        (i = i || '='),
        e === null && (e = void 0),
        typeof e == 'object'
          ? Object.keys(e)
              .map(function (r) {
                var n = encodeURIComponent(ei(r)) + i;
                return Array.isArray(e[r])
                  ? e[r]
                      .map(function (o) {
                        return n + encodeURIComponent(ei(o));
                      })
                      .join(t)
                  : n + encodeURIComponent(ei(e[r]));
              })
              .join(t)
          : s
          ? encodeURIComponent(ei(s)) + i + encodeURIComponent(ei(e))
          : ''
      );
    },
    js = Hs(function (e, t) {
      'use strict';
      (t.decode = t.parse = Hh), (t.encode = t.stringify = Xh);
    }),
    qn = ii,
    Kn = tl,
    Vh = el,
    Zn = Jh,
    zh = Dt;
  function Dt() {
    (this.protocol = null),
      (this.slashes = null),
      (this.auth = null),
      (this.host = null),
      (this.port = null),
      (this.hostname = null),
      (this.hash = null),
      (this.search = null),
      (this.query = null),
      (this.pathname = null),
      (this.path = null),
      (this.href = null);
  }
  var Wh = /^([a-z0-9.+-]+:)/i,
    jh = /:[0-9]*$/,
    Yh = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    $h = [
      '<',
      '>',
      '"',
      '`',
      ' ',
      '\r',
      `
`,
      '	',
    ],
    qh = ['{', '}', '|', '\\', '^', '`'].concat($h),
    Ys = ["'"].concat(qh),
    Qn = ['%', '/', '?', ';', '#'].concat(Ys),
    Jn = ['/', '?', '#'],
    Kh = 255,
    to = /^[+a-z0-9A-Z_-]{0,63}$/,
    Zh = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    Qh = { javascript: !0, 'javascript:': !0 },
    $s = { javascript: !0, 'javascript:': !0 },
    ke = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      'http:': !0,
      'https:': !0,
      'ftp:': !0,
      'gopher:': !0,
      'file:': !0,
    };
  function ii(e, t, i) {
    if (e && Jt.isObject(e) && e instanceof Dt) return e;
    var s = new Dt();
    return s.parse(e, t, i), s;
  }
  Dt.prototype.parse = function (e, t, i) {
    if (!Jt.isString(e))
      throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
    var s = e.indexOf('?'),
      r = s !== -1 && s < e.indexOf('#') ? '?' : '#',
      n = e.split(r),
      o = /\\/g;
    (n[0] = n[0].replace(o, '/')), (e = n.join(r));
    var a = e;
    if (((a = a.trim()), !i && e.split('#').length === 1)) {
      var h = Yh.exec(a);
      if (h)
        return (
          (this.path = a),
          (this.href = a),
          (this.pathname = h[1]),
          h[2]
            ? ((this.search = h[2]),
              t
                ? (this.query = js.parse(this.search.substr(1)))
                : (this.query = this.search.substr(1)))
            : t && ((this.search = ''), (this.query = {})),
          this
        );
    }
    var l = Wh.exec(a);
    if (l) {
      l = l[0];
      var c = l.toLowerCase();
      (this.protocol = c), (a = a.substr(l.length));
    }
    if (i || l || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var u = a.substr(0, 2) === '//';
      u && !(l && $s[l]) && ((a = a.substr(2)), (this.slashes = !0));
    }
    if (!$s[l] && (u || (l && !ke[l]))) {
      for (var d = -1, f = 0; f < Jn.length; f++) {
        var p = a.indexOf(Jn[f]);
        p !== -1 && (d === -1 || p < d) && (d = p);
      }
      var g, _;
      d === -1 ? (_ = a.lastIndexOf('@')) : (_ = a.lastIndexOf('@', d)),
        _ !== -1 &&
          ((g = a.slice(0, _)),
          (a = a.slice(_ + 1)),
          (this.auth = decodeURIComponent(g))),
        (d = -1);
      for (var f = 0; f < Qn.length; f++) {
        var p = a.indexOf(Qn[f]);
        p !== -1 && (d === -1 || p < d) && (d = p);
      }
      d === -1 && (d = a.length),
        (this.host = a.slice(0, d)),
        (a = a.slice(d)),
        this.parseHost(),
        (this.hostname = this.hostname || '');
      var v =
        this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';
      if (!v)
        for (
          var T = this.hostname.split(/\./), f = 0, y = T.length;
          f < y;
          f++
        ) {
          var x = T[f];
          if (!!x && !x.match(to)) {
            for (var A = '', M = 0, R = x.length; M < R; M++)
              x.charCodeAt(M) > 127 ? (A += 'x') : (A += x[M]);
            if (!A.match(to)) {
              var E = T.slice(0, f),
                L = T.slice(f + 1),
                H = x.match(Zh);
              H && (E.push(H[1]), L.unshift(H[2])),
                L.length && (a = '/' + L.join('.') + a),
                (this.hostname = E.join('.'));
              break;
            }
          }
        }
      this.hostname.length > Kh
        ? (this.hostname = '')
        : (this.hostname = this.hostname.toLowerCase()),
        v || (this.hostname = kh.toASCII(this.hostname));
      var I = this.port ? ':' + this.port : '',
        N = this.hostname || '';
      (this.host = N + I),
        (this.href += this.host),
        v &&
          ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
          a[0] !== '/' && (a = '/' + a));
    }
    if (!Qh[c])
      for (var f = 0, y = Ys.length; f < y; f++) {
        var w = Ys[f];
        if (a.indexOf(w) !== -1) {
          var b = encodeURIComponent(w);
          b === w && (b = escape(w)), (a = a.split(w).join(b));
        }
      }
    var z = a.indexOf('#');
    z !== -1 && ((this.hash = a.substr(z)), (a = a.slice(0, z)));
    var Y = a.indexOf('?');
    if (
      (Y !== -1
        ? ((this.search = a.substr(Y)),
          (this.query = a.substr(Y + 1)),
          t && (this.query = js.parse(this.query)),
          (a = a.slice(0, Y)))
        : t && ((this.search = ''), (this.query = {})),
      a && (this.pathname = a),
      ke[c] && this.hostname && !this.pathname && (this.pathname = '/'),
      this.pathname || this.search)
    ) {
      var I = this.pathname || '',
        F = this.search || '';
      this.path = I + F;
    }
    return (this.href = this.format()), this;
  };
  function Jh(e) {
    return (
      Jt.isString(e) && (e = ii(e)),
      e instanceof Dt ? e.format() : Dt.prototype.format.call(e)
    );
  }
  Dt.prototype.format = function () {
    var e = this.auth || '';
    e &&
      ((e = encodeURIComponent(e)), (e = e.replace(/%3A/i, ':')), (e += '@'));
    var t = this.protocol || '',
      i = this.pathname || '',
      s = this.hash || '',
      r = !1,
      n = '';
    this.host
      ? (r = e + this.host)
      : this.hostname &&
        ((r =
          e +
          (this.hostname.indexOf(':') === -1
            ? this.hostname
            : '[' + this.hostname + ']')),
        this.port && (r += ':' + this.port)),
      this.query &&
        Jt.isObject(this.query) &&
        Object.keys(this.query).length &&
        (n = js.stringify(this.query));
    var o = this.search || (n && '?' + n) || '';
    return (
      t && t.substr(-1) !== ':' && (t += ':'),
      this.slashes || ((!t || ke[t]) && r !== !1)
        ? ((r = '//' + (r || '')), i && i.charAt(0) !== '/' && (i = '/' + i))
        : r || (r = ''),
      s && s.charAt(0) !== '#' && (s = '#' + s),
      o && o.charAt(0) !== '?' && (o = '?' + o),
      (i = i.replace(/[?#]/g, function (a) {
        return encodeURIComponent(a);
      })),
      (o = o.replace('#', '%23')),
      t + r + i + o + s
    );
  };
  function tl(e, t) {
    return ii(e, !1, !0).resolve(t);
  }
  Dt.prototype.resolve = function (e) {
    return this.resolveObject(ii(e, !1, !0)).format();
  };
  function el(e, t) {
    return e ? ii(e, !1, !0).resolveObject(t) : t;
  }
  (Dt.prototype.resolveObject = function (e) {
    if (Jt.isString(e)) {
      var t = new Dt();
      t.parse(e, !1, !0), (e = t);
    }
    for (var i = new Dt(), s = Object.keys(this), r = 0; r < s.length; r++) {
      var n = s[r];
      i[n] = this[n];
    }
    if (((i.hash = e.hash), e.href === '')) return (i.href = i.format()), i;
    if (e.slashes && !e.protocol) {
      for (var o = Object.keys(e), a = 0; a < o.length; a++) {
        var h = o[a];
        h !== 'protocol' && (i[h] = e[h]);
      }
      return (
        ke[i.protocol] &&
          i.hostname &&
          !i.pathname &&
          (i.path = i.pathname = '/'),
        (i.href = i.format()),
        i
      );
    }
    if (e.protocol && e.protocol !== i.protocol) {
      if (!ke[e.protocol]) {
        for (var l = Object.keys(e), c = 0; c < l.length; c++) {
          var u = l[c];
          i[u] = e[u];
        }
        return (i.href = i.format()), i;
      }
      if (((i.protocol = e.protocol), !e.host && !$s[e.protocol])) {
        for (
          var y = (e.pathname || '').split('/');
          y.length && !(e.host = y.shift());

        );
        e.host || (e.host = ''),
          e.hostname || (e.hostname = ''),
          y[0] !== '' && y.unshift(''),
          y.length < 2 && y.unshift(''),
          (i.pathname = y.join('/'));
      } else i.pathname = e.pathname;
      if (
        ((i.search = e.search),
        (i.query = e.query),
        (i.host = e.host || ''),
        (i.auth = e.auth),
        (i.hostname = e.hostname || e.host),
        (i.port = e.port),
        i.pathname || i.search)
      ) {
        var d = i.pathname || '',
          f = i.search || '';
        i.path = d + f;
      }
      return (i.slashes = i.slashes || e.slashes), (i.href = i.format()), i;
    }
    var p = i.pathname && i.pathname.charAt(0) === '/',
      g = e.host || (e.pathname && e.pathname.charAt(0) === '/'),
      _ = g || p || (i.host && e.pathname),
      v = _,
      T = (i.pathname && i.pathname.split('/')) || [],
      y = (e.pathname && e.pathname.split('/')) || [],
      x = i.protocol && !ke[i.protocol];
    if (
      (x &&
        ((i.hostname = ''),
        (i.port = null),
        i.host && (T[0] === '' ? (T[0] = i.host) : T.unshift(i.host)),
        (i.host = ''),
        e.protocol &&
          ((e.hostname = null),
          (e.port = null),
          e.host && (y[0] === '' ? (y[0] = e.host) : y.unshift(e.host)),
          (e.host = null)),
        (_ = _ && (y[0] === '' || T[0] === ''))),
      g)
    )
      (i.host = e.host || e.host === '' ? e.host : i.host),
        (i.hostname =
          e.hostname || e.hostname === '' ? e.hostname : i.hostname),
        (i.search = e.search),
        (i.query = e.query),
        (T = y);
    else if (y.length)
      T || (T = []),
        T.pop(),
        (T = T.concat(y)),
        (i.search = e.search),
        (i.query = e.query);
    else if (!Jt.isNullOrUndefined(e.search)) {
      if (x) {
        i.hostname = i.host = T.shift();
        var A = i.host && i.host.indexOf('@') > 0 ? i.host.split('@') : !1;
        A && ((i.auth = A.shift()), (i.host = i.hostname = A.shift()));
      }
      return (
        (i.search = e.search),
        (i.query = e.query),
        (!Jt.isNull(i.pathname) || !Jt.isNull(i.search)) &&
          (i.path =
            (i.pathname ? i.pathname : '') + (i.search ? i.search : '')),
        (i.href = i.format()),
        i
      );
    }
    if (!T.length)
      return (
        (i.pathname = null),
        i.search ? (i.path = '/' + i.search) : (i.path = null),
        (i.href = i.format()),
        i
      );
    for (
      var M = T.slice(-1)[0],
        R =
          ((i.host || e.host || T.length > 1) && (M === '.' || M === '..')) ||
          M === '',
        E = 0,
        L = T.length;
      L >= 0;
      L--
    )
      (M = T[L]),
        M === '.'
          ? T.splice(L, 1)
          : M === '..'
          ? (T.splice(L, 1), E++)
          : E && (T.splice(L, 1), E--);
    if (!_ && !v) for (; E--; E) T.unshift('..');
    _ && T[0] !== '' && (!T[0] || T[0].charAt(0) !== '/') && T.unshift(''),
      R && T.join('/').substr(-1) !== '/' && T.push('');
    var H = T[0] === '' || (T[0] && T[0].charAt(0) === '/');
    if (x) {
      i.hostname = i.host = H ? '' : T.length ? T.shift() : '';
      var A = i.host && i.host.indexOf('@') > 0 ? i.host.split('@') : !1;
      A && ((i.auth = A.shift()), (i.host = i.hostname = A.shift()));
    }
    return (
      (_ = _ || (i.host && T.length)),
      _ && !H && T.unshift(''),
      T.length
        ? (i.pathname = T.join('/'))
        : ((i.pathname = null), (i.path = null)),
      (!Jt.isNull(i.pathname) || !Jt.isNull(i.search)) &&
        (i.path = (i.pathname ? i.pathname : '') + (i.search ? i.search : '')),
      (i.auth = e.auth || i.auth),
      (i.slashes = i.slashes || e.slashes),
      (i.href = i.format()),
      i
    );
  }),
    (Dt.prototype.parseHost = function () {
      var e = this.host,
        t = jh.exec(e);
      t &&
        ((t = t[0]),
        t !== ':' && (this.port = t.substr(1)),
        (e = e.substr(0, e.length - t.length))),
        e && (this.hostname = e);
    });
  var Qp = { parse: qn, resolve: Kn, resolveObject: Vh, format: Zn, Url: zh };
  const eo = { parse: qn, format: Zn, resolve: Kn };
  function Wt(e) {
    if (typeof e != 'string')
      throw new TypeError(
        `Path must be a string. Received ${JSON.stringify(e)}`
      );
  }
  function si(e) {
    return e.split('?')[0].split('#')[0];
  }
  function il(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  function sl(e, t, i) {
    return e.replace(new RegExp(il(t), 'g'), i);
  }
  function rl(e, t) {
    let i = '',
      s = 0,
      r = -1,
      n = 0,
      o = -1;
    for (let a = 0; a <= e.length; ++a) {
      if (a < e.length) o = e.charCodeAt(a);
      else {
        if (o === 47) break;
        o = 47;
      }
      if (o === 47) {
        if (!(r === a - 1 || n === 1))
          if (r !== a - 1 && n === 2) {
            if (
              i.length < 2 ||
              s !== 2 ||
              i.charCodeAt(i.length - 1) !== 46 ||
              i.charCodeAt(i.length - 2) !== 46
            ) {
              if (i.length > 2) {
                const h = i.lastIndexOf('/');
                if (h !== i.length - 1) {
                  h === -1
                    ? ((i = ''), (s = 0))
                    : ((i = i.slice(0, h)),
                      (s = i.length - 1 - i.lastIndexOf('/'))),
                    (r = a),
                    (n = 0);
                  continue;
                }
              } else if (i.length === 2 || i.length === 1) {
                (i = ''), (s = 0), (r = a), (n = 0);
                continue;
              }
            }
            t && (i.length > 0 ? (i += '/..') : (i = '..'), (s = 2));
          } else
            i.length > 0
              ? (i += `/${e.slice(r + 1, a)}`)
              : (i = e.slice(r + 1, a)),
              (s = a - r - 1);
        (r = a), (n = 0);
      } else o === 46 && n !== -1 ? ++n : (n = -1);
    }
    return i;
  }
  const pt = {
      toPosix(e) {
        return sl(e, '\\', '/');
      },
      isUrl(e) {
        return /^https?:/.test(this.toPosix(e));
      },
      isDataUrl(e) {
        return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(
          e
        );
      },
      hasProtocol(e) {
        return /^[^/:]+:\//.test(this.toPosix(e));
      },
      getProtocol(e) {
        Wt(e), (e = this.toPosix(e));
        let t = '';
        const i = /^file:\/\/\//.exec(e),
          s = /^[^/:]+:\/\//.exec(e),
          r = /^[^/:]+:\//.exec(e);
        if (i || s || r) {
          const n =
            (i == null ? void 0 : i[0]) ||
            (s == null ? void 0 : s[0]) ||
            (r == null ? void 0 : r[0]);
          (t = n), (e = e.slice(n.length));
        }
        return t;
      },
      toAbsolute(e, t, i) {
        if (this.isDataUrl(e)) return e;
        const s = si(this.toPosix(t != null ? t : B.ADAPTER.getBaseUrl())),
          r = si(this.toPosix(i != null ? i : this.rootname(s)));
        return (
          Wt(e),
          (e = this.toPosix(e)),
          e.startsWith('/')
            ? pt.join(r, e.slice(1))
            : this.isAbsolute(e)
            ? e
            : this.join(s, e)
        );
      },
      normalize(e) {
        if (((e = this.toPosix(e)), Wt(e), e.length === 0)) return '.';
        let t = '';
        const i = e.startsWith('/');
        this.hasProtocol(e) &&
          ((t = this.rootname(e)), (e = e.slice(t.length)));
        const s = e.endsWith('/');
        return (
          (e = rl(e, !1)), e.length > 0 && s && (e += '/'), i ? `/${e}` : t + e
        );
      },
      isAbsolute(e) {
        return (
          Wt(e),
          (e = this.toPosix(e)),
          this.hasProtocol(e) ? !0 : e.startsWith('/')
        );
      },
      join(...e) {
        var i;
        if (e.length === 0) return '.';
        let t;
        for (let s = 0; s < e.length; ++s) {
          const r = e[s];
          if ((Wt(r), r.length > 0))
            if (t === void 0) t = r;
            else {
              const n = (i = e[s - 1]) != null ? i : '';
              this.extname(n) ? (t += `/../${r}`) : (t += `/${r}`);
            }
        }
        return t === void 0 ? '.' : this.normalize(t);
      },
      dirname(e) {
        if ((Wt(e), e.length === 0)) return '.';
        e = this.toPosix(e);
        let t = e.charCodeAt(0);
        const i = t === 47;
        let s = -1,
          r = !0;
        const n = this.getProtocol(e),
          o = e;
        e = e.slice(n.length);
        for (let a = e.length - 1; a >= 1; --a)
          if (((t = e.charCodeAt(a)), t === 47)) {
            if (!r) {
              s = a;
              break;
            }
          } else r = !1;
        return s === -1
          ? i
            ? '/'
            : this.isUrl(o)
            ? n + e
            : n
          : i && s === 1
          ? '//'
          : n + e.slice(0, s);
      },
      rootname(e) {
        Wt(e), (e = this.toPosix(e));
        let t = '';
        if (
          (e.startsWith('/') ? (t = '/') : (t = this.getProtocol(e)),
          this.isUrl(e))
        ) {
          const i = e.indexOf('/', t.length);
          i !== -1 ? (t = e.slice(0, i)) : (t = e),
            t.endsWith('/') || (t += '/');
        }
        return t;
      },
      basename(e, t) {
        Wt(e), t && Wt(t), (e = si(this.toPosix(e)));
        let i = 0,
          s = -1,
          r = !0,
          n;
        if (t !== void 0 && t.length > 0 && t.length <= e.length) {
          if (t.length === e.length && t === e) return '';
          let o = t.length - 1,
            a = -1;
          for (n = e.length - 1; n >= 0; --n) {
            const h = e.charCodeAt(n);
            if (h === 47) {
              if (!r) {
                i = n + 1;
                break;
              }
            } else
              a === -1 && ((r = !1), (a = n + 1)),
                o >= 0 &&
                  (h === t.charCodeAt(o)
                    ? --o === -1 && (s = n)
                    : ((o = -1), (s = a)));
          }
          return i === s ? (s = a) : s === -1 && (s = e.length), e.slice(i, s);
        }
        for (n = e.length - 1; n >= 0; --n)
          if (e.charCodeAt(n) === 47) {
            if (!r) {
              i = n + 1;
              break;
            }
          } else s === -1 && ((r = !1), (s = n + 1));
        return s === -1 ? '' : e.slice(i, s);
      },
      extname(e) {
        Wt(e), (e = si(this.toPosix(e)));
        let t = -1,
          i = 0,
          s = -1,
          r = !0,
          n = 0;
        for (let o = e.length - 1; o >= 0; --o) {
          const a = e.charCodeAt(o);
          if (a === 47) {
            if (!r) {
              i = o + 1;
              break;
            }
            continue;
          }
          s === -1 && ((r = !1), (s = o + 1)),
            a === 46
              ? t === -1
                ? (t = o)
                : n !== 1 && (n = 1)
              : t !== -1 && (n = -1);
        }
        return t === -1 ||
          s === -1 ||
          n === 0 ||
          (n === 1 && t === s - 1 && t === i + 1)
          ? ''
          : e.slice(t, s);
      },
      parse(e) {
        Wt(e);
        const t = { root: '', dir: '', base: '', ext: '', name: '' };
        if (e.length === 0) return t;
        e = si(this.toPosix(e));
        let i = e.charCodeAt(0);
        const s = this.isAbsolute(e);
        let r;
        const n = '';
        (t.root = this.rootname(e)),
          s || this.hasProtocol(e) ? (r = 1) : (r = 0);
        let o = -1,
          a = 0,
          h = -1,
          l = !0,
          c = e.length - 1,
          u = 0;
        for (; c >= r; --c) {
          if (((i = e.charCodeAt(c)), i === 47)) {
            if (!l) {
              a = c + 1;
              break;
            }
            continue;
          }
          h === -1 && ((l = !1), (h = c + 1)),
            i === 46
              ? o === -1
                ? (o = c)
                : u !== 1 && (u = 1)
              : o !== -1 && (u = -1);
        }
        return (
          o === -1 ||
          h === -1 ||
          u === 0 ||
          (u === 1 && o === h - 1 && o === a + 1)
            ? h !== -1 &&
              (a === 0 && s
                ? (t.base = t.name = e.slice(1, h))
                : (t.base = t.name = e.slice(a, h)))
            : (a === 0 && s
                ? ((t.name = e.slice(1, o)), (t.base = e.slice(1, h)))
                : ((t.name = e.slice(a, o)), (t.base = e.slice(a, h))),
              (t.ext = e.slice(o, h))),
          (t.dir = this.dirname(e)),
          n && (t.dir = n + t.dir),
          t
        );
      },
      sep: '/',
      delimiter: ':',
    },
    io = {};
  function $(e, t, i = 3) {
    if (io[t]) return;
    let s = new Error().stack;
    typeof s == 'undefined'
      ? console.warn(
          'PixiJS Deprecation Warning: ',
          `${t}
Deprecated since v${e}`
        )
      : ((s = s
          .split(
            `
`
          )
          .splice(i).join(`
`)),
        console.groupCollapsed
          ? (console.groupCollapsed(
              '%cPixiJS Deprecation Warning: %c%s',
              'color:#614108;background:#fffbe6',
              'font-weight:normal;color:#614108;background:#fffbe6',
              `${t}
Deprecated since v${e}`
            ),
            console.warn(s),
            console.groupEnd())
          : (console.warn(
              'PixiJS Deprecation Warning: ',
              `${t}
Deprecated since v${e}`
            ),
            console.warn(s))),
      (io[t] = !0);
  }
  function nl() {
    $(
      '7.0.0',
      'skipHello is deprecated, please use settings.RENDER_OPTIONS.hello'
    );
  }
  function ol() {
    $('7.0.0', `sayHello is deprecated, please use Renderer's "hello" option`);
  }
  let qs;
  function so() {
    return (
      typeof qs == 'undefined' &&
        (qs = (function () {
          var i;
          const t = {
            stencil: !0,
            failIfMajorPerformanceCaveat: B.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT,
          };
          try {
            if (!B.ADAPTER.getWebGLRenderingContext()) return !1;
            const s = B.ADAPTER.createCanvas();
            let r =
              s.getContext('webgl', t) || s.getContext('experimental-webgl', t);
            const n = !!(
              (i = r == null ? void 0 : r.getContextAttributes()) != null &&
              i.stencil
            );
            if (r) {
              const o = r.getExtension('WEBGL_lose_context');
              o && o.loseContext();
            }
            return (r = null), n;
          } catch (s) {
            return !1;
          }
        })()),
      qs
    );
  }
  var al = '#f0f8ff',
    hl = '#faebd7',
    ll = '#00ffff',
    cl = '#7fffd4',
    ul = '#f0ffff',
    dl = '#f5f5dc',
    fl = '#ffe4c4',
    pl = '#000000',
    ml = '#ffebcd',
    _l = '#0000ff',
    gl = '#8a2be2',
    yl = '#a52a2a',
    vl = '#deb887',
    xl = '#5f9ea0',
    Tl = '#7fff00',
    bl = '#d2691e',
    El = '#ff7f50',
    wl = '#6495ed',
    Sl = '#fff8dc',
    Al = '#dc143c',
    Rl = '#00ffff',
    Cl = '#00008b',
    Il = '#008b8b',
    Pl = '#b8860b',
    Ml = '#a9a9a9',
    Bl = '#006400',
    Dl = '#a9a9a9',
    Fl = '#bdb76b',
    Nl = '#8b008b',
    Ol = '#556b2f',
    Ll = '#ff8c00',
    Ul = '#9932cc',
    kl = '#8b0000',
    Gl = '#e9967a',
    Hl = '#8fbc8f',
    Xl = '#483d8b',
    Vl = '#2f4f4f',
    zl = '#2f4f4f',
    Wl = '#00ced1',
    jl = '#9400d3',
    Yl = '#ff1493',
    $l = '#00bfff',
    ql = '#696969',
    Kl = '#696969',
    Zl = '#1e90ff',
    Ql = '#b22222',
    Jl = '#fffaf0',
    tc = '#228b22',
    ec = '#ff00ff',
    ic = '#dcdcdc',
    sc = '#f8f8ff',
    rc = '#daa520',
    nc = '#ffd700',
    oc = '#808080',
    ac = '#008000',
    hc = '#adff2f',
    lc = '#808080',
    cc = '#f0fff0',
    uc = '#ff69b4',
    dc = '#cd5c5c',
    fc = '#4b0082',
    pc = '#fffff0',
    mc = '#f0e68c',
    _c = '#fff0f5',
    gc = '#e6e6fa',
    yc = '#7cfc00',
    vc = '#fffacd',
    xc = '#add8e6',
    Tc = '#f08080',
    bc = '#e0ffff',
    Ec = '#fafad2',
    wc = '#d3d3d3',
    Sc = '#90ee90',
    Ac = '#d3d3d3',
    Rc = '#ffb6c1',
    Cc = '#ffa07a',
    Ic = '#20b2aa',
    Pc = '#87cefa',
    Mc = '#778899',
    Bc = '#778899',
    Dc = '#b0c4de',
    Fc = '#ffffe0',
    Nc = '#00ff00',
    Oc = '#32cd32',
    Lc = '#faf0e6',
    Uc = '#ff00ff',
    kc = '#800000',
    Gc = '#66cdaa',
    Hc = '#0000cd',
    Xc = '#ba55d3',
    Vc = '#9370db',
    zc = '#3cb371',
    Wc = '#7b68ee',
    jc = '#00fa9a',
    Yc = '#48d1cc',
    $c = '#c71585',
    qc = '#191970',
    Kc = '#f5fffa',
    Zc = '#ffe4e1',
    Qc = '#ffe4b5',
    Jc = '#ffdead',
    tu = '#000080',
    eu = '#fdf5e6',
    iu = '#808000',
    su = '#6b8e23',
    ru = '#ffa500',
    nu = '#ff4500',
    ou = '#da70d6',
    au = '#eee8aa',
    hu = '#98fb98',
    lu = '#afeeee',
    cu = '#db7093',
    uu = '#ffefd5',
    du = '#ffdab9',
    fu = '#cd853f',
    pu = '#ffc0cb',
    mu = '#dda0dd',
    _u = '#b0e0e6',
    gu = '#800080',
    yu = '#663399',
    vu = '#ff0000',
    xu = '#bc8f8f',
    Tu = '#4169e1',
    bu = '#8b4513',
    Eu = '#fa8072',
    wu = '#f4a460',
    Su = '#2e8b57',
    Au = '#fff5ee',
    Ru = '#a0522d',
    Cu = '#c0c0c0',
    Iu = '#87ceeb',
    Pu = '#6a5acd',
    Mu = '#708090',
    Bu = '#708090',
    Du = '#fffafa',
    Fu = '#00ff7f',
    Nu = '#4682b4',
    Ou = '#d2b48c',
    Lu = '#008080',
    Uu = '#d8bfd8',
    ku = '#ff6347',
    Gu = '#40e0d0',
    Hu = '#ee82ee',
    Xu = '#f5deb3',
    Vu = '#ffffff',
    zu = '#f5f5f5',
    Wu = '#ffff00',
    ju = '#9acd32',
    Yu = {
      aliceblue: al,
      antiquewhite: hl,
      aqua: ll,
      aquamarine: cl,
      azure: ul,
      beige: dl,
      bisque: fl,
      black: pl,
      blanchedalmond: ml,
      blue: _l,
      blueviolet: gl,
      brown: yl,
      burlywood: vl,
      cadetblue: xl,
      chartreuse: Tl,
      chocolate: bl,
      coral: El,
      cornflowerblue: wl,
      cornsilk: Sl,
      crimson: Al,
      cyan: Rl,
      darkblue: Cl,
      darkcyan: Il,
      darkgoldenrod: Pl,
      darkgray: Ml,
      darkgreen: Bl,
      darkgrey: Dl,
      darkkhaki: Fl,
      darkmagenta: Nl,
      darkolivegreen: Ol,
      darkorange: Ll,
      darkorchid: Ul,
      darkred: kl,
      darksalmon: Gl,
      darkseagreen: Hl,
      darkslateblue: Xl,
      darkslategray: Vl,
      darkslategrey: zl,
      darkturquoise: Wl,
      darkviolet: jl,
      deeppink: Yl,
      deepskyblue: $l,
      dimgray: ql,
      dimgrey: Kl,
      dodgerblue: Zl,
      firebrick: Ql,
      floralwhite: Jl,
      forestgreen: tc,
      fuchsia: ec,
      gainsboro: ic,
      ghostwhite: sc,
      goldenrod: rc,
      gold: nc,
      gray: oc,
      green: ac,
      greenyellow: hc,
      grey: lc,
      honeydew: cc,
      hotpink: uc,
      indianred: dc,
      indigo: fc,
      ivory: pc,
      khaki: mc,
      lavenderblush: _c,
      lavender: gc,
      lawngreen: yc,
      lemonchiffon: vc,
      lightblue: xc,
      lightcoral: Tc,
      lightcyan: bc,
      lightgoldenrodyellow: Ec,
      lightgray: wc,
      lightgreen: Sc,
      lightgrey: Ac,
      lightpink: Rc,
      lightsalmon: Cc,
      lightseagreen: Ic,
      lightskyblue: Pc,
      lightslategray: Mc,
      lightslategrey: Bc,
      lightsteelblue: Dc,
      lightyellow: Fc,
      lime: Nc,
      limegreen: Oc,
      linen: Lc,
      magenta: Uc,
      maroon: kc,
      mediumaquamarine: Gc,
      mediumblue: Hc,
      mediumorchid: Xc,
      mediumpurple: Vc,
      mediumseagreen: zc,
      mediumslateblue: Wc,
      mediumspringgreen: jc,
      mediumturquoise: Yc,
      mediumvioletred: $c,
      midnightblue: qc,
      mintcream: Kc,
      mistyrose: Zc,
      moccasin: Qc,
      navajowhite: Jc,
      navy: tu,
      oldlace: eu,
      olive: iu,
      olivedrab: su,
      orange: ru,
      orangered: nu,
      orchid: ou,
      palegoldenrod: au,
      palegreen: hu,
      paleturquoise: lu,
      palevioletred: cu,
      papayawhip: uu,
      peachpuff: du,
      peru: fu,
      pink: pu,
      plum: mu,
      powderblue: _u,
      purple: gu,
      rebeccapurple: yu,
      red: vu,
      rosybrown: xu,
      royalblue: Tu,
      saddlebrown: bu,
      salmon: Eu,
      sandybrown: wu,
      seagreen: Su,
      seashell: Au,
      sienna: Ru,
      silver: Cu,
      skyblue: Iu,
      slateblue: Pu,
      slategray: Mu,
      slategrey: Bu,
      snow: Du,
      springgreen: Fu,
      steelblue: Nu,
      tan: Ou,
      teal: Lu,
      thistle: Uu,
      tomato: ku,
      turquoise: Gu,
      violet: Hu,
      wheat: Xu,
      white: Vu,
      whitesmoke: zu,
      yellow: Wu,
      yellowgreen: ju,
    };
  function Te(e, t = []) {
    return (
      (t[0] = ((e >> 16) & 255) / 255),
      (t[1] = ((e >> 8) & 255) / 255),
      (t[2] = (e & 255) / 255),
      t
    );
  }
  function Ks(e) {
    let t = e.toString(16);
    return (t = '000000'.substring(0, 6 - t.length) + t), `#${t}`;
  }
  function Xi(e) {
    if (
      typeof e == 'string' &&
      ((e = Yu[e.toLowerCase()] || e),
      e[0] === '#' && (e = e.slice(1)),
      e.length === 3)
    ) {
      const [t, i, s] = e;
      e = t + t + i + i + s + s;
    }
    return parseInt(e, 16);
  }
  function $u(e) {
    return ((e[0] * 255) << 16) + ((e[1] * 255) << 8) + ((e[2] * 255) | 0);
  }
  function qu() {
    const e = [],
      t = [];
    for (let s = 0; s < 32; s++) (e[s] = s), (t[s] = s);
    (e[G.NORMAL_NPM] = G.NORMAL),
      (e[G.ADD_NPM] = G.ADD),
      (e[G.SCREEN_NPM] = G.SCREEN),
      (t[G.NORMAL] = G.NORMAL_NPM),
      (t[G.ADD] = G.ADD_NPM),
      (t[G.SCREEN] = G.SCREEN_NPM);
    const i = [];
    return i.push(t), i.push(e), i;
  }
  const Zs = qu();
  function Qs(e, t) {
    return Zs[t ? 1 : 0][e];
  }
  function ro(e, t, i, s) {
    return (
      (i = i || new Float32Array(4)),
      s || s === void 0
        ? ((i[0] = e[0] * t), (i[1] = e[1] * t), (i[2] = e[2] * t))
        : ((i[0] = e[0]), (i[1] = e[1]), (i[2] = e[2])),
      (i[3] = t),
      i
    );
  }
  function Vi(e, t) {
    if (t === 1) return ((t * 255) << 24) + e;
    if (t === 0) return 0;
    let i = (e >> 16) & 255,
      s = (e >> 8) & 255,
      r = e & 255;
    return (
      (i = (i * t + 0.5) | 0),
      (s = (s * t + 0.5) | 0),
      (r = (r * t + 0.5) | 0),
      ((t * 255) << 24) + (i << 16) + (s << 8) + r
    );
  }
  function Js(e, t, i, s) {
    return (
      (i = i || new Float32Array(4)),
      (i[0] = ((e >> 16) & 255) / 255),
      (i[1] = ((e >> 8) & 255) / 255),
      (i[2] = (e & 255) / 255),
      (s || s === void 0) && ((i[0] *= t), (i[1] *= t), (i[2] *= t)),
      (i[3] = t),
      i
    );
  }
  const no =
    /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
  function oo(e, t = null) {
    const i = e * 6;
    if (((t = t || new Uint16Array(i)), t.length !== i))
      throw new Error(
        `Out buffer length is incorrect, got ${t.length} and expected ${i}`
      );
    for (let s = 0, r = 0; s < i; s += 6, r += 4)
      (t[s + 0] = r + 0),
        (t[s + 1] = r + 1),
        (t[s + 2] = r + 2),
        (t[s + 3] = r + 0),
        (t[s + 4] = r + 2),
        (t[s + 5] = r + 3);
    return t;
  }
  function zi(e) {
    if (e.BYTES_PER_ELEMENT === 4)
      return e instanceof Float32Array
        ? 'Float32Array'
        : e instanceof Uint32Array
        ? 'Uint32Array'
        : 'Int32Array';
    if (e.BYTES_PER_ELEMENT === 2) {
      if (e instanceof Uint16Array) return 'Uint16Array';
    } else if (e.BYTES_PER_ELEMENT === 1 && e instanceof Uint8Array)
      return 'Uint8Array';
    return null;
  }
  const Ku = { Float32Array, Uint32Array, Int32Array, Uint8Array };
  function Zu(e, t) {
    let i = 0,
      s = 0;
    const r = {};
    for (let h = 0; h < e.length; h++) (s += t[h]), (i += e[h].length);
    const n = new ArrayBuffer(i * 4);
    let o = null,
      a = 0;
    for (let h = 0; h < e.length; h++) {
      const l = t[h],
        c = e[h],
        u = zi(c);
      r[u] || (r[u] = new Ku[u](n)), (o = r[u]);
      for (let d = 0; d < c.length; d++) {
        const f = ((d / l) | 0) * s + a,
          p = d % l;
        o[f + p] = c[d];
      }
      a += l;
    }
    return new Float32Array(n);
  }
  function ri(e) {
    return (
      (e += e === 0 ? 1 : 0),
      --e,
      (e |= e >>> 1),
      (e |= e >>> 2),
      (e |= e >>> 4),
      (e |= e >>> 8),
      (e |= e >>> 16),
      e + 1
    );
  }
  function tr(e) {
    return !(e & (e - 1)) && !!e;
  }
  function er(e) {
    let t = (e > 65535 ? 1 : 0) << 4;
    e >>>= t;
    let i = (e > 255 ? 1 : 0) << 3;
    return (
      (e >>>= i),
      (t |= i),
      (i = (e > 15 ? 1 : 0) << 2),
      (e >>>= i),
      (t |= i),
      (i = (e > 3 ? 1 : 0) << 1),
      (e >>>= i),
      (t |= i),
      t | (e >> 1)
    );
  }
  function be(e, t, i) {
    const s = e.length;
    let r;
    if (t >= s || i === 0) return;
    i = t + i > s ? s - t : i;
    const n = s - i;
    for (r = t; r < n; ++r) e[r] = e[r + i];
    e.length = n;
  }
  function Ee(e) {
    return e === 0 ? 0 : e < 0 ? -1 : 1;
  }
  let Qu = 0;
  function de() {
    return ++Qu;
  }
  const ao = class {
    constructor(e, t, i, s) {
      (this.left = e), (this.top = t), (this.right = i), (this.bottom = s);
    }
    get width() {
      return this.right - this.left;
    }
    get height() {
      return this.bottom - this.top;
    }
    isEmpty() {
      return this.left === this.right || this.top === this.bottom;
    }
  };
  let Wi = ao;
  Wi.EMPTY = new ao(0, 0, 0, 0);
  const ir = {},
    bt = Object.create(null),
    Ct = Object.create(null);
  function Ju() {
    let e;
    for (e in bt) bt[e].destroy();
    for (e in Ct) Ct[e].destroy();
  }
  function td() {
    let e;
    for (e in bt) delete bt[e];
    for (e in Ct) delete Ct[e];
  }
  class sr {
    constructor(t, i, s) {
      (this._canvas = B.ADAPTER.createCanvas()),
        (this._context = this._canvas.getContext('2d')),
        (this.resolution = s || B.RESOLUTION),
        this.resize(t, i);
    }
    clear() {
      this._checkDestroyed(),
        this._context.setTransform(1, 0, 0, 1, 0, 0),
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    resize(t, i) {
      this._checkDestroyed(),
        (this._canvas.width = Math.round(t * this.resolution)),
        (this._canvas.height = Math.round(i * this.resolution));
    }
    destroy() {
      (this._context = null), (this._canvas = null);
    }
    get width() {
      return this._checkDestroyed(), this._canvas.width;
    }
    set width(t) {
      this._checkDestroyed(), (this._canvas.width = Math.round(t));
    }
    get height() {
      return this._checkDestroyed(), this._canvas.height;
    }
    set height(t) {
      this._checkDestroyed(), (this._canvas.height = Math.round(t));
    }
    get canvas() {
      return this._checkDestroyed(), this._canvas;
    }
    get context() {
      return this._checkDestroyed(), this._context;
    }
    _checkDestroyed() {
      if (this._canvas === null)
        throw new TypeError(
          'The CanvasRenderTarget has already been destroyed'
        );
    }
  }
  function ho(e, t, i) {
    for (let s = 0, r = 4 * i * t; s < t; ++s, r += 4)
      if (e[r + 3] !== 0) return !1;
    return !0;
  }
  function lo(e, t, i, s, r) {
    const n = 4 * t;
    for (let o = s, a = s * n + 4 * i; o <= r; ++o, a += n)
      if (e[a + 3] !== 0) return !1;
    return !0;
  }
  function co(e) {
    const { width: t, height: i } = e,
      s = e.getContext('2d', { willReadFrequently: !0 });
    if (s === null) throw new TypeError('Failed to get canvas 2D context');
    const n = s.getImageData(0, 0, t, i).data;
    let o = 0,
      a = 0,
      h = t - 1,
      l = i - 1;
    for (; a < i && ho(n, t, a); ) ++a;
    if (a === i) return Wi.EMPTY;
    for (; ho(n, t, l); ) --l;
    for (; lo(n, t, o, a, l); ) ++o;
    for (; lo(n, t, h, a, l); ) --h;
    return ++h, ++l, new Wi(o, a, h, l);
  }
  function uo(e) {
    const t = co(e),
      { width: i, height: s } = t;
    let r = null;
    if (!t.isEmpty()) {
      const n = e.getContext('2d');
      if (n === null) throw new TypeError('Failed to get canvas 2D context');
      r = n.getImageData(t.left, t.top, i, s);
    }
    return { width: i, height: s, data: r };
  }
  function ed(e) {
    const t = no.exec(e);
    if (t)
      return {
        mediaType: t[1] ? t[1].toLowerCase() : void 0,
        subType: t[2] ? t[2].toLowerCase() : void 0,
        charset: t[3] ? t[3].toLowerCase() : void 0,
        encoding: t[4] ? t[4].toLowerCase() : void 0,
        data: t[5],
      };
  }
  let ji;
  function fo(e, t = globalThis.location) {
    if (e.startsWith('data:')) return '';
    (t = t || globalThis.location),
      ji || (ji = document.createElement('a')),
      (ji.href = e);
    const i = eo.parse(ji.href),
      s = (!i.port && t.port === '') || i.port === t.port;
    return i.hostname !== t.hostname || !s || i.protocol !== t.protocol
      ? 'anonymous'
      : '';
  }
  function oe(e, t = 1) {
    var s;
    const i = (s = B.RETINA_PREFIX) == null ? void 0 : s.exec(e);
    return i ? parseFloat(i[1]) : t;
  }
  var id = {
      __proto__: null,
      isMobile: zt,
      EventEmitter: Le,
      earcut: Xs,
      url: eo,
      path: pt,
      sayHello: ol,
      skipHello: nl,
      isWebGLSupported: so,
      hex2rgb: Te,
      hex2string: Ks,
      rgb2hex: $u,
      string2hex: Xi,
      correctBlendMode: Qs,
      premultiplyBlendMode: Zs,
      premultiplyRgba: ro,
      premultiplyTint: Vi,
      premultiplyTintToRgba: Js,
      DATA_URI: no,
      createIndicesForQuads: oo,
      getBufferType: zi,
      interleaveTypedArrays: Zu,
      isPow2: tr,
      log2: er,
      nextPow2: ri,
      removeItems: be,
      sign: Ee,
      uid: de,
      deprecation: $,
      BoundingBox: Wi,
      BaseTextureCache: Ct,
      ProgramCache: ir,
      TextureCache: bt,
      clearTextureCache: td,
      destroyTextureCache: Ju,
      CanvasRenderTarget: sr,
      getCanvasBoundingBox: co,
      trimCanvas: uo,
      decomposeDataUri: ed,
      determineCrossOrigin: fo,
      getResolutionOfUrl: oe,
    },
    P = ((e) => (
      (e.Renderer = 'renderer'),
      (e.Application = 'application'),
      (e.RendererSystem = 'renderer-webgl-system'),
      (e.RendererPlugin = 'renderer-webgl-plugin'),
      (e.CanvasRendererSystem = 'renderer-canvas-system'),
      (e.CanvasRendererPlugin = 'renderer-canvas-plugin'),
      (e.Asset = 'asset'),
      (e.LoadParser = 'load-parser'),
      (e.ResolveParser = 'resolve-parser'),
      (e.CacheParser = 'cache-parser'),
      (e.DetectionParser = 'detection-parser'),
      e
    ))(P || {});
  const rr = (e) => {
      if (typeof e == 'function' || (typeof e == 'object' && e.extension)) {
        if (!e.extension)
          throw new Error('Extension class must have an extension object');
        const t =
          typeof e.extension != 'object' ? { type: e.extension } : e.extension;
        e = Pn(re({}, t), { ref: e });
      }
      if (typeof e == 'object') e = re({}, e);
      else throw new Error('Invalid extension type');
      return typeof e.type == 'string' && (e.type = [e.type]), e;
    },
    po = (e, t) => {
      var i;
      return (i = rr(e).priority) != null ? i : t;
    },
    U = {
      _addHandlers: {},
      _removeHandlers: {},
      _queue: {},
      remove(...e) {
        return (
          e.map(rr).forEach((t) => {
            t.type.forEach((i) => {
              var s, r;
              return (r = (s = this._removeHandlers)[i]) == null
                ? void 0
                : r.call(s, t);
            });
          }),
          this
        );
      },
      add(...e) {
        return (
          e.map(rr).forEach((t) => {
            t.type.forEach((i) => {
              const s = this._addHandlers,
                r = this._queue;
              s[i] ? s[i](t) : ((r[i] = r[i] || []), r[i].push(t));
            });
          }),
          this
        );
      },
      handle(e, t, i) {
        const s = this._addHandlers,
          r = this._removeHandlers;
        if (s[e] || r[e])
          throw new Error(`Extension type ${e} already has a handler`);
        (s[e] = t), (r[e] = i);
        const n = this._queue;
        return n[e] && (n[e].forEach((o) => t(o)), delete n[e]), this;
      },
      handleByMap(e, t) {
        return this.handle(
          e,
          (i) => {
            t[i.name] = i.ref;
          },
          (i) => {
            delete t[i.name];
          }
        );
      },
      handleByList(e, t, i = -1) {
        return this.handle(
          e,
          (s) => {
            t.includes(s.ref) ||
              (t.push(s.ref), t.sort((r, n) => po(n, i) - po(r, i)));
          },
          (s) => {
            const r = t.indexOf(s.ref);
            r !== -1 && t.splice(r, 1);
          }
        );
      },
    };
  class Yi {
    constructor(t) {
      typeof t == 'number'
        ? (this.rawBinaryData = new ArrayBuffer(t))
        : t instanceof Uint8Array
        ? (this.rawBinaryData = t.buffer)
        : (this.rawBinaryData = t),
        (this.uint32View = new Uint32Array(this.rawBinaryData)),
        (this.float32View = new Float32Array(this.rawBinaryData));
    }
    get int8View() {
      return (
        this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
        this._int8View
      );
    }
    get uint8View() {
      return (
        this._uint8View ||
          (this._uint8View = new Uint8Array(this.rawBinaryData)),
        this._uint8View
      );
    }
    get int16View() {
      return (
        this._int16View ||
          (this._int16View = new Int16Array(this.rawBinaryData)),
        this._int16View
      );
    }
    get uint16View() {
      return (
        this._uint16View ||
          (this._uint16View = new Uint16Array(this.rawBinaryData)),
        this._uint16View
      );
    }
    get int32View() {
      return (
        this._int32View ||
          (this._int32View = new Int32Array(this.rawBinaryData)),
        this._int32View
      );
    }
    view(t) {
      return this[`${t}View`];
    }
    destroy() {
      (this.rawBinaryData = null),
        (this._int8View = null),
        (this._uint8View = null),
        (this._int16View = null),
        (this._uint16View = null),
        (this._int32View = null),
        (this.uint32View = null),
        (this.float32View = null);
    }
    static sizeOf(t) {
      switch (t) {
        case 'int8':
        case 'uint8':
          return 1;
        case 'int16':
        case 'uint16':
          return 2;
        case 'int32':
        case 'uint32':
        case 'float32':
          return 4;
        default:
          throw new Error(`${t} isn't a valid view type`);
      }
    }
  }
  const sd = [
    'precision mediump float;',
    'void main(void){',
    'float test = 0.1;',
    '%forloop%',
    'gl_FragColor = vec4(0.0);',
    '}',
  ].join(`
`);
  function rd(e) {
    let t = '';
    for (let i = 0; i < e; ++i)
      i > 0 &&
        (t += `
else `),
        i < e - 1 && (t += `if(test == ${i}.0){}`);
    return t;
  }
  function mo(e, t) {
    if (e === 0)
      throw new Error(
        'Invalid value of `0` passed to `checkMaxIfStatementsInShader`'
      );
    const i = t.createShader(t.FRAGMENT_SHADER);
    for (;;) {
      const s = sd.replace(/%forloop%/gi, rd(e));
      if (
        (t.shaderSource(i, s),
        t.compileShader(i),
        !t.getShaderParameter(i, t.COMPILE_STATUS))
      )
        e = (e / 2) | 0;
      else break;
    }
    return e;
  }
  const nr = 0,
    or = 1,
    ar = 2,
    hr = 3,
    lr = 4,
    cr = 5;
  class te {
    constructor() {
      (this.data = 0),
        (this.blendMode = G.NORMAL),
        (this.polygonOffset = 0),
        (this.blend = !0),
        (this.depthMask = !0);
    }
    get blend() {
      return !!(this.data & (1 << nr));
    }
    set blend(t) {
      !!(this.data & (1 << nr)) !== t && (this.data ^= 1 << nr);
    }
    get offsets() {
      return !!(this.data & (1 << or));
    }
    set offsets(t) {
      !!(this.data & (1 << or)) !== t && (this.data ^= 1 << or);
    }
    get culling() {
      return !!(this.data & (1 << ar));
    }
    set culling(t) {
      !!(this.data & (1 << ar)) !== t && (this.data ^= 1 << ar);
    }
    get depthTest() {
      return !!(this.data & (1 << hr));
    }
    set depthTest(t) {
      !!(this.data & (1 << hr)) !== t && (this.data ^= 1 << hr);
    }
    get depthMask() {
      return !!(this.data & (1 << cr));
    }
    set depthMask(t) {
      !!(this.data & (1 << cr)) !== t && (this.data ^= 1 << cr);
    }
    get clockwiseFrontFace() {
      return !!(this.data & (1 << lr));
    }
    set clockwiseFrontFace(t) {
      !!(this.data & (1 << lr)) !== t && (this.data ^= 1 << lr);
    }
    get blendMode() {
      return this._blendMode;
    }
    set blendMode(t) {
      (this.blend = t !== G.NONE), (this._blendMode = t);
    }
    get polygonOffset() {
      return this._polygonOffset;
    }
    set polygonOffset(t) {
      (this.offsets = !!t), (this._polygonOffset = t);
    }
    toString() {
      return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
    }
    static for2d() {
      const t = new te();
      return (t.depthTest = !1), (t.blend = !0), t;
    }
  }
  const $i = [];
  function ur(e, t) {
    if (!e) return null;
    let i = '';
    if (typeof e == 'string') {
      const s = /\.(\w{3,4})(?:$|\?|#)/i.exec(e);
      s && (i = s[1].toLowerCase());
    }
    for (let s = $i.length - 1; s >= 0; --s) {
      const r = $i[s];
      if (r.test && r.test(e, i)) return new r(e, t);
    }
    throw new Error('Unrecognized source type to auto-detect Resource');
  }
  class It {
    constructor(t) {
      (this.items = []), (this._name = t), (this._aliasCount = 0);
    }
    emit(t, i, s, r, n, o, a, h) {
      if (arguments.length > 8) throw new Error('max arguments reached');
      const { name: l, items: c } = this;
      this._aliasCount++;
      for (let u = 0, d = c.length; u < d; u++) c[u][l](t, i, s, r, n, o, a, h);
      return c === this.items && this._aliasCount--, this;
    }
    ensureNonAliasedItems() {
      this._aliasCount > 0 &&
        this.items.length > 1 &&
        ((this._aliasCount = 0), (this.items = this.items.slice(0)));
    }
    add(t) {
      return (
        t[this._name] &&
          (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)),
        this
      );
    }
    remove(t) {
      const i = this.items.indexOf(t);
      return (
        i !== -1 && (this.ensureNonAliasedItems(), this.items.splice(i, 1)),
        this
      );
    }
    contains(t) {
      return this.items.includes(t);
    }
    removeAll() {
      return this.ensureNonAliasedItems(), (this.items.length = 0), this;
    }
    destroy() {
      this.removeAll(), (this.items = null), (this._name = null);
    }
    get empty() {
      return this.items.length === 0;
    }
    get name() {
      return this._name;
    }
  }
  Object.defineProperties(It.prototype, {
    dispatch: { value: It.prototype.emit },
    run: { value: It.prototype.emit },
  });
  class Ge {
    constructor(t = 0, i = 0) {
      (this._width = t),
        (this._height = i),
        (this.destroyed = !1),
        (this.internal = !1),
        (this.onResize = new It('setRealSize')),
        (this.onUpdate = new It('update')),
        (this.onError = new It('onError'));
    }
    bind(t) {
      this.onResize.add(t),
        this.onUpdate.add(t),
        this.onError.add(t),
        (this._width || this._height) &&
          this.onResize.emit(this._width, this._height);
    }
    unbind(t) {
      this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t);
    }
    resize(t, i) {
      (t !== this._width || i !== this._height) &&
        ((this._width = t), (this._height = i), this.onResize.emit(t, i));
    }
    get valid() {
      return !!this._width && !!this._height;
    }
    update() {
      this.destroyed || this.onUpdate.emit();
    }
    load() {
      return Promise.resolve(this);
    }
    get width() {
      return this._width;
    }
    get height() {
      return this._height;
    }
    style(t, i, s) {
      return !1;
    }
    dispose() {}
    destroy() {
      this.destroyed ||
        ((this.destroyed = !0),
        this.dispose(),
        this.onError.removeAll(),
        (this.onError = null),
        this.onResize.removeAll(),
        (this.onResize = null),
        this.onUpdate.removeAll(),
        (this.onUpdate = null));
    }
    static test(t, i) {
      return !1;
    }
  }
  class He extends Ge {
    constructor(t, i) {
      const { width: s, height: r } = i || {};
      if (!s || !r) throw new Error('BufferResource width or height invalid');
      super(s, r), (this.data = t);
    }
    upload(t, i, s) {
      const r = t.gl;
      r.pixelStorei(
        r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        i.alphaMode === Bt.UNPACK
      );
      const n = i.realWidth,
        o = i.realHeight;
      return (
        s.width === n && s.height === o
          ? r.texSubImage2D(
              i.target,
              0,
              0,
              0,
              n,
              o,
              i.format,
              s.type,
              this.data
            )
          : ((s.width = n),
            (s.height = o),
            r.texImage2D(
              i.target,
              0,
              s.internalFormat,
              n,
              o,
              0,
              i.format,
              s.type,
              this.data
            )),
        !0
      );
    }
    dispose() {
      this.data = null;
    }
    static test(t) {
      return (
        t instanceof Float32Array ||
        t instanceof Uint8Array ||
        t instanceof Uint32Array
      );
    }
  }
  const nd = { scaleMode: Zt.NEAREST, format: C.RGBA, alphaMode: Bt.NPM },
    Xe = class extends Le {
      constructor(e = null, t = null) {
        super(), (t = Object.assign({}, Xe.defaultOptions, t));
        const {
          alphaMode: i,
          mipmap: s,
          anisotropicLevel: r,
          scaleMode: n,
          width: o,
          height: a,
          wrapMode: h,
          format: l,
          type: c,
          target: u,
          resolution: d,
          resourceOptions: f,
        } = t;
        e && !(e instanceof Ge) && ((e = ur(e, f)), (e.internal = !0)),
          (this.resolution = d || B.RESOLUTION),
          (this.width =
            Math.round((o || 0) * this.resolution) / this.resolution),
          (this.height =
            Math.round((a || 0) * this.resolution) / this.resolution),
          (this._mipmap = s),
          (this.anisotropicLevel = r),
          (this._wrapMode = h),
          (this._scaleMode = n),
          (this.format = l),
          (this.type = c),
          (this.target = u),
          (this.alphaMode = i),
          (this.uid = de()),
          (this.touched = 0),
          (this.isPowerOfTwo = !1),
          this._refreshPOT(),
          (this._glTextures = {}),
          (this.dirtyId = 0),
          (this.dirtyStyleId = 0),
          (this.cacheId = null),
          (this.valid = o > 0 && a > 0),
          (this.textureCacheIds = []),
          (this.destroyed = !1),
          (this.resource = null),
          (this._batchEnabled = 0),
          (this._batchLocation = 0),
          (this.parentTextureArray = null),
          this.setResource(e);
      }
      get realWidth() {
        return Math.round(this.width * this.resolution);
      }
      get realHeight() {
        return Math.round(this.height * this.resolution);
      }
      get mipmap() {
        return this._mipmap;
      }
      set mipmap(e) {
        this._mipmap !== e && ((this._mipmap = e), this.dirtyStyleId++);
      }
      get scaleMode() {
        return this._scaleMode;
      }
      set scaleMode(e) {
        this._scaleMode !== e && ((this._scaleMode = e), this.dirtyStyleId++);
      }
      get wrapMode() {
        return this._wrapMode;
      }
      set wrapMode(e) {
        this._wrapMode !== e && ((this._wrapMode = e), this.dirtyStyleId++);
      }
      setStyle(e, t) {
        let i;
        return (
          e !== void 0 &&
            e !== this.scaleMode &&
            ((this.scaleMode = e), (i = !0)),
          t !== void 0 && t !== this.mipmap && ((this.mipmap = t), (i = !0)),
          i && this.dirtyStyleId++,
          this
        );
      }
      setSize(e, t, i) {
        return (i = i || this.resolution), this.setRealSize(e * i, t * i, i);
      }
      setRealSize(e, t, i) {
        return (
          (this.resolution = i || this.resolution),
          (this.width = Math.round(e) / this.resolution),
          (this.height = Math.round(t) / this.resolution),
          this._refreshPOT(),
          this.update(),
          this
        );
      }
      _refreshPOT() {
        this.isPowerOfTwo = tr(this.realWidth) && tr(this.realHeight);
      }
      setResolution(e) {
        const t = this.resolution;
        return t === e
          ? this
          : ((this.resolution = e),
            this.valid &&
              ((this.width = Math.round(this.width * t) / e),
              (this.height = Math.round(this.height * t) / e),
              this.emit('update', this)),
            this._refreshPOT(),
            this);
      }
      setResource(e) {
        if (this.resource === e) return this;
        if (this.resource) throw new Error('Resource can be set only once');
        return e.bind(this), (this.resource = e), this;
      }
      update() {
        this.valid
          ? (this.dirtyId++, this.dirtyStyleId++, this.emit('update', this))
          : this.width > 0 &&
            this.height > 0 &&
            ((this.valid = !0),
            this.emit('loaded', this),
            this.emit('update', this));
      }
      onError(e) {
        this.emit('error', this, e);
      }
      destroy() {
        this.resource &&
          (this.resource.unbind(this),
          this.resource.internal && this.resource.destroy(),
          (this.resource = null)),
          this.cacheId &&
            (delete Ct[this.cacheId],
            delete bt[this.cacheId],
            (this.cacheId = null)),
          this.dispose(),
          Xe.removeFromCache(this),
          (this.textureCacheIds = null),
          (this.destroyed = !0);
      }
      dispose() {
        this.emit('dispose', this);
      }
      castToBaseTexture() {
        return this;
      }
      static from(e, t, i = B.STRICT_TEXTURE_CACHE) {
        const s = typeof e == 'string';
        let r = null;
        if (s) r = e;
        else {
          if (!e._pixiId) {
            const o = (t == null ? void 0 : t.pixiIdPrefix) || 'pixiid';
            e._pixiId = `${o}_${de()}`;
          }
          r = e._pixiId;
        }
        let n = Ct[r];
        if (s && i && !n)
          throw new Error(
            `The cacheId "${r}" does not exist in BaseTextureCache.`
          );
        return (
          n || ((n = new Xe(e, t)), (n.cacheId = r), Xe.addToCache(n, r)), n
        );
      }
      static fromBuffer(e, t, i, s) {
        e = e || new Float32Array(t * i * 4);
        const r = new He(e, { width: t, height: i }),
          n = e instanceof Float32Array ? k.FLOAT : k.UNSIGNED_BYTE;
        return new Xe(
          r,
          Object.assign({}, nd, s || { width: t, height: i, type: n })
        );
      }
      static addToCache(e, t) {
        t &&
          (e.textureCacheIds.includes(t) || e.textureCacheIds.push(t),
          Ct[t] &&
            Ct[t] !== e &&
            console.warn(
              `BaseTexture added to the cache with an id [${t}] that already had an entry`
            ),
          (Ct[t] = e));
      }
      static removeFromCache(e) {
        if (typeof e == 'string') {
          const t = Ct[e];
          if (t) {
            const i = t.textureCacheIds.indexOf(e);
            return i > -1 && t.textureCacheIds.splice(i, 1), delete Ct[e], t;
          }
        } else if (e != null && e.textureCacheIds) {
          for (let t = 0; t < e.textureCacheIds.length; ++t)
            delete Ct[e.textureCacheIds[t]];
          return (e.textureCacheIds.length = 0), e;
        }
        return null;
      }
    };
  let V = Xe;
  (V.defaultOptions = {
    mipmap: Ht.POW2,
    anisotropicLevel: 0,
    scaleMode: Zt.LINEAR,
    wrapMode: Qt.CLAMP,
    alphaMode: Bt.UNPACK,
    target: ve.TEXTURE_2D,
    format: C.RGBA,
    type: k.UNSIGNED_BYTE,
  }),
    (V._globalBatch = 0);
  class qi {
    constructor() {
      (this.texArray = null),
        (this.blend = 0),
        (this.type = Gt.TRIANGLES),
        (this.start = 0),
        (this.size = 0),
        (this.data = null);
    }
  }
  let od = 0;
  class ot {
    constructor(t, i = !0, s = !1) {
      (this.data = t || new Float32Array(1)),
        (this._glBuffers = {}),
        (this._updateID = 0),
        (this.index = s),
        (this.static = i),
        (this.id = od++),
        (this.disposeRunner = new It('disposeBuffer'));
    }
    update(t) {
      t instanceof Array && (t = new Float32Array(t)),
        (this.data = t || this.data),
        this._updateID++;
    }
    dispose() {
      this.disposeRunner.emit(this, !1);
    }
    destroy() {
      this.dispose(), (this.data = null);
    }
    set index(t) {
      this.type = t ? Vt.ELEMENT_ARRAY_BUFFER : Vt.ARRAY_BUFFER;
    }
    get index() {
      return this.type === Vt.ELEMENT_ARRAY_BUFFER;
    }
    static from(t) {
      return t instanceof Array && (t = new Float32Array(t)), new ot(t);
    }
  }
  class ni {
    constructor(t, i = 0, s = !1, r = k.FLOAT, n, o, a, h = 1) {
      (this.buffer = t),
        (this.size = i),
        (this.normalized = s),
        (this.type = r),
        (this.stride = n),
        (this.start = o),
        (this.instance = a),
        (this.divisor = h);
    }
    destroy() {
      this.buffer = null;
    }
    static from(t, i, s, r, n) {
      return new ni(t, i, s, r, n);
    }
  }
  const ad = { Float32Array, Uint32Array, Int32Array, Uint8Array };
  function hd(e, t) {
    let i = 0,
      s = 0;
    const r = {};
    for (let h = 0; h < e.length; h++) (s += t[h]), (i += e[h].length);
    const n = new ArrayBuffer(i * 4);
    let o = null,
      a = 0;
    for (let h = 0; h < e.length; h++) {
      const l = t[h],
        c = e[h],
        u = zi(c);
      r[u] || (r[u] = new ad[u](n)), (o = r[u]);
      for (let d = 0; d < c.length; d++) {
        const f = ((d / l) | 0) * s + a,
          p = d % l;
        o[f + p] = c[d];
      }
      a += l;
    }
    return new Float32Array(n);
  }
  const _o = { 5126: 4, 5123: 2, 5121: 1 };
  let ld = 0;
  const cd = { Float32Array, Uint32Array, Int32Array, Uint8Array, Uint16Array };
  class ae {
    constructor(t = [], i = {}) {
      (this.buffers = t),
        (this.indexBuffer = null),
        (this.attributes = i),
        (this.glVertexArrayObjects = {}),
        (this.id = ld++),
        (this.instanced = !1),
        (this.instanceCount = 1),
        (this.disposeRunner = new It('disposeGeometry')),
        (this.refCount = 0);
    }
    addAttribute(t, i, s = 0, r = !1, n, o, a, h = !1) {
      if (!i)
        throw new Error('You must pass a buffer when creating an attribute');
      i instanceof ot ||
        (i instanceof Array && (i = new Float32Array(i)), (i = new ot(i)));
      const l = t.split('|');
      if (l.length > 1) {
        for (let u = 0; u < l.length; u++) this.addAttribute(l[u], i, s, r, n);
        return this;
      }
      let c = this.buffers.indexOf(i);
      return (
        c === -1 && (this.buffers.push(i), (c = this.buffers.length - 1)),
        (this.attributes[t] = new ni(c, s, r, n, o, a, h)),
        (this.instanced = this.instanced || h),
        this
      );
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    getBuffer(t) {
      return this.buffers[this.getAttribute(t).buffer];
    }
    addIndex(t) {
      return (
        t instanceof ot ||
          (t instanceof Array && (t = new Uint16Array(t)), (t = new ot(t))),
        (t.type = Vt.ELEMENT_ARRAY_BUFFER),
        (this.indexBuffer = t),
        this.buffers.includes(t) || this.buffers.push(t),
        this
      );
    }
    getIndex() {
      return this.indexBuffer;
    }
    interleave() {
      if (
        this.buffers.length === 1 ||
        (this.buffers.length === 2 && this.indexBuffer)
      )
        return this;
      const t = [],
        i = [],
        s = new ot();
      let r;
      for (r in this.attributes) {
        const n = this.attributes[r],
          o = this.buffers[n.buffer];
        t.push(o.data), i.push((n.size * _o[n.type]) / 4), (n.buffer = 0);
      }
      for (s.data = hd(t, i), r = 0; r < this.buffers.length; r++)
        this.buffers[r] !== this.indexBuffer && this.buffers[r].destroy();
      return (
        (this.buffers = [s]),
        this.indexBuffer && this.buffers.push(this.indexBuffer),
        this
      );
    }
    getSize() {
      for (const t in this.attributes) {
        const i = this.attributes[t];
        return this.buffers[i.buffer].data.length / (i.stride / 4 || i.size);
      }
      return 0;
    }
    dispose() {
      this.disposeRunner.emit(this, !1);
    }
    destroy() {
      this.dispose(),
        (this.buffers = null),
        (this.indexBuffer = null),
        (this.attributes = null);
    }
    clone() {
      const t = new ae();
      for (let i = 0; i < this.buffers.length; i++)
        t.buffers[i] = new ot(this.buffers[i].data.slice(0));
      for (const i in this.attributes) {
        const s = this.attributes[i];
        t.attributes[i] = new ni(
          s.buffer,
          s.size,
          s.normalized,
          s.type,
          s.stride,
          s.start,
          s.instance
        );
      }
      return (
        this.indexBuffer &&
          ((t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)]),
          (t.indexBuffer.type = Vt.ELEMENT_ARRAY_BUFFER)),
        t
      );
    }
    static merge(t) {
      const i = new ae(),
        s = [],
        r = [],
        n = [];
      let o;
      for (let a = 0; a < t.length; a++) {
        o = t[a];
        for (let h = 0; h < o.buffers.length; h++)
          (r[h] = r[h] || 0), (r[h] += o.buffers[h].data.length), (n[h] = 0);
      }
      for (let a = 0; a < o.buffers.length; a++)
        (s[a] = new cd[zi(o.buffers[a].data)](r[a])),
          (i.buffers[a] = new ot(s[a]));
      for (let a = 0; a < t.length; a++) {
        o = t[a];
        for (let h = 0; h < o.buffers.length; h++)
          s[h].set(o.buffers[h].data, n[h]), (n[h] += o.buffers[h].data.length);
      }
      if (((i.attributes = o.attributes), o.indexBuffer)) {
        (i.indexBuffer = i.buffers[o.buffers.indexOf(o.indexBuffer)]),
          (i.indexBuffer.type = Vt.ELEMENT_ARRAY_BUFFER);
        let a = 0,
          h = 0,
          l = 0,
          c = 0;
        for (let u = 0; u < o.buffers.length; u++)
          if (o.buffers[u] !== o.indexBuffer) {
            c = u;
            break;
          }
        for (const u in o.attributes) {
          const d = o.attributes[u];
          (d.buffer | 0) === c && (h += (d.size * _o[d.type]) / 4);
        }
        for (let u = 0; u < t.length; u++) {
          const d = t[u].indexBuffer.data;
          for (let f = 0; f < d.length; f++) i.indexBuffer.data[f + l] += a;
          (a += t[u].buffers[c].data.length / h), (l += d.length);
        }
      }
      return i;
    }
  }
  class dr extends ae {
    constructor(t = !1) {
      super(),
        (this._buffer = new ot(null, t, !1)),
        (this._indexBuffer = new ot(null, t, !0)),
        this.addAttribute('aVertexPosition', this._buffer, 2, !1, k.FLOAT)
          .addAttribute('aTextureCoord', this._buffer, 2, !1, k.FLOAT)
          .addAttribute('aColor', this._buffer, 4, !0, k.UNSIGNED_BYTE)
          .addAttribute('aTextureId', this._buffer, 1, !0, k.FLOAT)
          .addIndex(this._indexBuffer);
    }
  }
  const oi = Math.PI * 2,
    go = 180 / Math.PI,
    yo = Math.PI / 180;
  var mt = ((e) => (
    (e[(e.POLY = 0)] = 'POLY'),
    (e[(e.RECT = 1)] = 'RECT'),
    (e[(e.CIRC = 2)] = 'CIRC'),
    (e[(e.ELIP = 3)] = 'ELIP'),
    (e[(e.RREC = 4)] = 'RREC'),
    e
  ))(mt || {});
  class j {
    constructor(t = 0, i = 0) {
      (this.x = 0), (this.y = 0), (this.x = t), (this.y = i);
    }
    clone() {
      return new j(this.x, this.y);
    }
    copyFrom(t) {
      return this.set(t.x, t.y), this;
    }
    copyTo(t) {
      return t.set(this.x, this.y), t;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    set(t = 0, i = t) {
      return (this.x = t), (this.y = i), this;
    }
    toString() {
      return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
    }
  }
  const Ki = [new j(), new j(), new j(), new j()];
  class W {
    constructor(t = 0, i = 0, s = 0, r = 0) {
      (this.x = Number(t)),
        (this.y = Number(i)),
        (this.width = Number(s)),
        (this.height = Number(r)),
        (this.type = mt.RECT);
    }
    get left() {
      return this.x;
    }
    get right() {
      return this.x + this.width;
    }
    get top() {
      return this.y;
    }
    get bottom() {
      return this.y + this.height;
    }
    static get EMPTY() {
      return new W(0, 0, 0, 0);
    }
    clone() {
      return new W(this.x, this.y, this.width, this.height);
    }
    copyFrom(t) {
      return (
        (this.x = t.x),
        (this.y = t.y),
        (this.width = t.width),
        (this.height = t.height),
        this
      );
    }
    copyTo(t) {
      return (
        (t.x = this.x),
        (t.y = this.y),
        (t.width = this.width),
        (t.height = this.height),
        t
      );
    }
    contains(t, i) {
      return this.width <= 0 || this.height <= 0
        ? !1
        : t >= this.x &&
            t < this.x + this.width &&
            i >= this.y &&
            i < this.y + this.height;
    }
    intersects(t, i) {
      if (!i) {
        const E = this.x < t.x ? t.x : this.x;
        if ((this.right > t.right ? t.right : this.right) <= E) return !1;
        const H = this.y < t.y ? t.y : this.y;
        return (this.bottom > t.bottom ? t.bottom : this.bottom) > H;
      }
      const s = this.left,
        r = this.right,
        n = this.top,
        o = this.bottom;
      if (r <= s || o <= n) return !1;
      const a = Ki[0].set(t.left, t.top),
        h = Ki[1].set(t.left, t.bottom),
        l = Ki[2].set(t.right, t.top),
        c = Ki[3].set(t.right, t.bottom);
      if (l.x <= a.x || h.y <= a.y) return !1;
      const u = Math.sign(i.a * i.d - i.b * i.c);
      if (
        u === 0 ||
        (i.apply(a, a),
        i.apply(h, h),
        i.apply(l, l),
        i.apply(c, c),
        Math.max(a.x, h.x, l.x, c.x) <= s ||
          Math.min(a.x, h.x, l.x, c.x) >= r ||
          Math.max(a.y, h.y, l.y, c.y) <= n ||
          Math.min(a.y, h.y, l.y, c.y) >= o)
      )
        return !1;
      const d = u * (h.y - a.y),
        f = u * (a.x - h.x),
        p = d * s + f * n,
        g = d * r + f * n,
        _ = d * s + f * o,
        v = d * r + f * o;
      if (
        Math.max(p, g, _, v) <= d * a.x + f * a.y ||
        Math.min(p, g, _, v) >= d * c.x + f * c.y
      )
        return !1;
      const T = u * (a.y - l.y),
        y = u * (l.x - a.x),
        x = T * s + y * n,
        A = T * r + y * n,
        M = T * s + y * o,
        R = T * r + y * o;
      return !(
        Math.max(x, A, M, R) <= T * a.x + y * a.y ||
        Math.min(x, A, M, R) >= T * c.x + y * c.y
      );
    }
    pad(t = 0, i = t) {
      return (
        (this.x -= t),
        (this.y -= i),
        (this.width += t * 2),
        (this.height += i * 2),
        this
      );
    }
    fit(t) {
      const i = Math.max(this.x, t.x),
        s = Math.min(this.x + this.width, t.x + t.width),
        r = Math.max(this.y, t.y),
        n = Math.min(this.y + this.height, t.y + t.height);
      return (
        (this.x = i),
        (this.width = Math.max(s - i, 0)),
        (this.y = r),
        (this.height = Math.max(n - r, 0)),
        this
      );
    }
    ceil(t = 1, i = 0.001) {
      const s = Math.ceil((this.x + this.width - i) * t) / t,
        r = Math.ceil((this.y + this.height - i) * t) / t;
      return (
        (this.x = Math.floor((this.x + i) * t) / t),
        (this.y = Math.floor((this.y + i) * t) / t),
        (this.width = s - this.x),
        (this.height = r - this.y),
        this
      );
    }
    enlarge(t) {
      const i = Math.min(this.x, t.x),
        s = Math.max(this.x + this.width, t.x + t.width),
        r = Math.min(this.y, t.y),
        n = Math.max(this.y + this.height, t.y + t.height);
      return (
        (this.x = i),
        (this.width = s - i),
        (this.y = r),
        (this.height = n - r),
        this
      );
    }
    toString() {
      return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
    }
  }
  class Zi {
    constructor(t = 0, i = 0, s = 0) {
      (this.x = t), (this.y = i), (this.radius = s), (this.type = mt.CIRC);
    }
    clone() {
      return new Zi(this.x, this.y, this.radius);
    }
    contains(t, i) {
      if (this.radius <= 0) return !1;
      const s = this.radius * this.radius;
      let r = this.x - t,
        n = this.y - i;
      return (r *= r), (n *= n), r + n <= s;
    }
    getBounds() {
      return new W(
        this.x - this.radius,
        this.y - this.radius,
        this.radius * 2,
        this.radius * 2
      );
    }
    toString() {
      return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
    }
  }
  class Qi {
    constructor(t = 0, i = 0, s = 0, r = 0) {
      (this.x = t),
        (this.y = i),
        (this.width = s),
        (this.height = r),
        (this.type = mt.ELIP);
    }
    clone() {
      return new Qi(this.x, this.y, this.width, this.height);
    }
    contains(t, i) {
      if (this.width <= 0 || this.height <= 0) return !1;
      let s = (t - this.x) / this.width,
        r = (i - this.y) / this.height;
      return (s *= s), (r *= r), s + r <= 1;
    }
    getBounds() {
      return new W(
        this.x - this.width,
        this.y - this.height,
        this.width,
        this.height
      );
    }
    toString() {
      return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
    }
  }
  class we {
    constructor(...t) {
      let i = Array.isArray(t[0]) ? t[0] : t;
      if (typeof i[0] != 'number') {
        const s = [];
        for (let r = 0, n = i.length; r < n; r++) s.push(i[r].x, i[r].y);
        i = s;
      }
      (this.points = i), (this.type = mt.POLY), (this.closeStroke = !0);
    }
    clone() {
      const t = this.points.slice(),
        i = new we(t);
      return (i.closeStroke = this.closeStroke), i;
    }
    contains(t, i) {
      let s = !1;
      const r = this.points.length / 2;
      for (let n = 0, o = r - 1; n < r; o = n++) {
        const a = this.points[n * 2],
          h = this.points[n * 2 + 1],
          l = this.points[o * 2],
          c = this.points[o * 2 + 1];
        h > i != c > i && t < (l - a) * ((i - h) / (c - h)) + a && (s = !s);
      }
      return s;
    }
    toString() {
      return `[@pixi/math:PolygoncloseStroke=${
        this.closeStroke
      }points=${this.points.reduce((t, i) => `${t}, ${i}`, '')}]`;
    }
  }
  class Ji {
    constructor(t = 0, i = 0, s = 0, r = 0, n = 20) {
      (this.x = t),
        (this.y = i),
        (this.width = s),
        (this.height = r),
        (this.radius = n),
        (this.type = mt.RREC);
    }
    clone() {
      return new Ji(this.x, this.y, this.width, this.height, this.radius);
    }
    contains(t, i) {
      if (this.width <= 0 || this.height <= 0) return !1;
      if (
        t >= this.x &&
        t <= this.x + this.width &&
        i >= this.y &&
        i <= this.y + this.height
      ) {
        const s = Math.max(
          0,
          Math.min(this.radius, Math.min(this.width, this.height) / 2)
        );
        if (
          (i >= this.y + s && i <= this.y + this.height - s) ||
          (t >= this.x + s && t <= this.x + this.width - s)
        )
          return !0;
        let r = t - (this.x + s),
          n = i - (this.y + s);
        const o = s * s;
        if (
          r * r + n * n <= o ||
          ((r = t - (this.x + this.width - s)), r * r + n * n <= o) ||
          ((n = i - (this.y + this.height - s)), r * r + n * n <= o) ||
          ((r = t - (this.x + s)), r * r + n * n <= o)
        )
          return !0;
      }
      return !1;
    }
    toString() {
      return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
    }
  }
  class J {
    constructor(t = 1, i = 0, s = 0, r = 1, n = 0, o = 0) {
      (this.array = null),
        (this.a = t),
        (this.b = i),
        (this.c = s),
        (this.d = r),
        (this.tx = n),
        (this.ty = o);
    }
    fromArray(t) {
      (this.a = t[0]),
        (this.b = t[1]),
        (this.c = t[3]),
        (this.d = t[4]),
        (this.tx = t[2]),
        (this.ty = t[5]);
    }
    set(t, i, s, r, n, o) {
      return (
        (this.a = t),
        (this.b = i),
        (this.c = s),
        (this.d = r),
        (this.tx = n),
        (this.ty = o),
        this
      );
    }
    toArray(t, i) {
      this.array || (this.array = new Float32Array(9));
      const s = i || this.array;
      return (
        t
          ? ((s[0] = this.a),
            (s[1] = this.b),
            (s[2] = 0),
            (s[3] = this.c),
            (s[4] = this.d),
            (s[5] = 0),
            (s[6] = this.tx),
            (s[7] = this.ty),
            (s[8] = 1))
          : ((s[0] = this.a),
            (s[1] = this.c),
            (s[2] = this.tx),
            (s[3] = this.b),
            (s[4] = this.d),
            (s[5] = this.ty),
            (s[6] = 0),
            (s[7] = 0),
            (s[8] = 1)),
        s
      );
    }
    apply(t, i) {
      i = i || new j();
      const s = t.x,
        r = t.y;
      return (
        (i.x = this.a * s + this.c * r + this.tx),
        (i.y = this.b * s + this.d * r + this.ty),
        i
      );
    }
    applyInverse(t, i) {
      i = i || new j();
      const s = 1 / (this.a * this.d + this.c * -this.b),
        r = t.x,
        n = t.y;
      return (
        (i.x =
          this.d * s * r +
          -this.c * s * n +
          (this.ty * this.c - this.tx * this.d) * s),
        (i.y =
          this.a * s * n +
          -this.b * s * r +
          (-this.ty * this.a + this.tx * this.b) * s),
        i
      );
    }
    translate(t, i) {
      return (this.tx += t), (this.ty += i), this;
    }
    scale(t, i) {
      return (
        (this.a *= t),
        (this.d *= i),
        (this.c *= t),
        (this.b *= i),
        (this.tx *= t),
        (this.ty *= i),
        this
      );
    }
    rotate(t) {
      const i = Math.cos(t),
        s = Math.sin(t),
        r = this.a,
        n = this.c,
        o = this.tx;
      return (
        (this.a = r * i - this.b * s),
        (this.b = r * s + this.b * i),
        (this.c = n * i - this.d * s),
        (this.d = n * s + this.d * i),
        (this.tx = o * i - this.ty * s),
        (this.ty = o * s + this.ty * i),
        this
      );
    }
    append(t) {
      const i = this.a,
        s = this.b,
        r = this.c,
        n = this.d;
      return (
        (this.a = t.a * i + t.b * r),
        (this.b = t.a * s + t.b * n),
        (this.c = t.c * i + t.d * r),
        (this.d = t.c * s + t.d * n),
        (this.tx = t.tx * i + t.ty * r + this.tx),
        (this.ty = t.tx * s + t.ty * n + this.ty),
        this
      );
    }
    setTransform(t, i, s, r, n, o, a, h, l) {
      return (
        (this.a = Math.cos(a + l) * n),
        (this.b = Math.sin(a + l) * n),
        (this.c = -Math.sin(a - h) * o),
        (this.d = Math.cos(a - h) * o),
        (this.tx = t - (s * this.a + r * this.c)),
        (this.ty = i - (s * this.b + r * this.d)),
        this
      );
    }
    prepend(t) {
      const i = this.tx;
      if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
        const s = this.a,
          r = this.c;
        (this.a = s * t.a + this.b * t.c),
          (this.b = s * t.b + this.b * t.d),
          (this.c = r * t.a + this.d * t.c),
          (this.d = r * t.b + this.d * t.d);
      }
      return (
        (this.tx = i * t.a + this.ty * t.c + t.tx),
        (this.ty = i * t.b + this.ty * t.d + t.ty),
        this
      );
    }
    decompose(t) {
      const i = this.a,
        s = this.b,
        r = this.c,
        n = this.d,
        o = t.pivot,
        a = -Math.atan2(-r, n),
        h = Math.atan2(s, i),
        l = Math.abs(a + h);
      return (
        l < 1e-5 || Math.abs(oi - l) < 1e-5
          ? ((t.rotation = h), (t.skew.x = t.skew.y = 0))
          : ((t.rotation = 0), (t.skew.x = a), (t.skew.y = h)),
        (t.scale.x = Math.sqrt(i * i + s * s)),
        (t.scale.y = Math.sqrt(r * r + n * n)),
        (t.position.x = this.tx + (o.x * i + o.y * r)),
        (t.position.y = this.ty + (o.x * s + o.y * n)),
        t
      );
    }
    invert() {
      const t = this.a,
        i = this.b,
        s = this.c,
        r = this.d,
        n = this.tx,
        o = t * r - i * s;
      return (
        (this.a = r / o),
        (this.b = -i / o),
        (this.c = -s / o),
        (this.d = t / o),
        (this.tx = (s * this.ty - r * n) / o),
        (this.ty = -(t * this.ty - i * n) / o),
        this
      );
    }
    identity() {
      return (
        (this.a = 1),
        (this.b = 0),
        (this.c = 0),
        (this.d = 1),
        (this.tx = 0),
        (this.ty = 0),
        this
      );
    }
    clone() {
      const t = new J();
      return (
        (t.a = this.a),
        (t.b = this.b),
        (t.c = this.c),
        (t.d = this.d),
        (t.tx = this.tx),
        (t.ty = this.ty),
        t
      );
    }
    copyTo(t) {
      return (
        (t.a = this.a),
        (t.b = this.b),
        (t.c = this.c),
        (t.d = this.d),
        (t.tx = this.tx),
        (t.ty = this.ty),
        t
      );
    }
    copyFrom(t) {
      return (
        (this.a = t.a),
        (this.b = t.b),
        (this.c = t.c),
        (this.d = t.d),
        (this.tx = t.tx),
        (this.ty = t.ty),
        this
      );
    }
    toString() {
      return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
    }
    static get IDENTITY() {
      return new J();
    }
    static get TEMP_MATRIX() {
      return new J();
    }
  }
  const Se = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
    Ae = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
    Re = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
    Ce = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
    fr = [],
    vo = [],
    ts = Math.sign;
  function ud() {
    for (let e = 0; e < 16; e++) {
      const t = [];
      fr.push(t);
      for (let i = 0; i < 16; i++) {
        const s = ts(Se[e] * Se[i] + Re[e] * Ae[i]),
          r = ts(Ae[e] * Se[i] + Ce[e] * Ae[i]),
          n = ts(Se[e] * Re[i] + Re[e] * Ce[i]),
          o = ts(Ae[e] * Re[i] + Ce[e] * Ce[i]);
        for (let a = 0; a < 16; a++)
          if (Se[a] === s && Ae[a] === r && Re[a] === n && Ce[a] === o) {
            t.push(a);
            break;
          }
      }
    }
    for (let e = 0; e < 16; e++) {
      const t = new J();
      t.set(Se[e], Ae[e], Re[e], Ce[e], 0, 0), vo.push(t);
    }
  }
  ud();
  const et = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: (e) => Se[e],
    uY: (e) => Ae[e],
    vX: (e) => Re[e],
    vY: (e) => Ce[e],
    inv: (e) => (e & 8 ? e & 15 : -e & 7),
    add: (e, t) => fr[e][t],
    sub: (e, t) => fr[e][et.inv(t)],
    rotate180: (e) => e ^ 4,
    isVertical: (e) => (e & 3) === 2,
    byDirection: (e, t) =>
      Math.abs(e) * 2 <= Math.abs(t)
        ? t >= 0
          ? et.S
          : et.N
        : Math.abs(t) * 2 <= Math.abs(e)
        ? e > 0
          ? et.E
          : et.W
        : t > 0
        ? e > 0
          ? et.SE
          : et.SW
        : e > 0
        ? et.NE
        : et.NW,
    matrixAppendRotationInv: (e, t, i = 0, s = 0) => {
      const r = vo[et.inv(t)];
      (r.tx = i), (r.ty = s), e.append(r);
    },
  };
  class he {
    constructor(t, i, s = 0, r = 0) {
      (this._x = s), (this._y = r), (this.cb = t), (this.scope = i);
    }
    clone(t = this.cb, i = this.scope) {
      return new he(t, i, this._x, this._y);
    }
    set(t = 0, i = t) {
      return (
        (this._x !== t || this._y !== i) &&
          ((this._x = t), (this._y = i), this.cb.call(this.scope)),
        this
      );
    }
    copyFrom(t) {
      return (
        (this._x !== t.x || this._y !== t.y) &&
          ((this._x = t.x), (this._y = t.y), this.cb.call(this.scope)),
        this
      );
    }
    copyTo(t) {
      return t.set(this._x, this._y), t;
    }
    equals(t) {
      return t.x === this._x && t.y === this._y;
    }
    toString() {
      return `[@pixi/math:ObservablePoint x=${0} y=${0} scope=${this.scope}]`;
    }
    get x() {
      return this._x;
    }
    set x(t) {
      this._x !== t && ((this._x = t), this.cb.call(this.scope));
    }
    get y() {
      return this._y;
    }
    set y(t) {
      this._y !== t && ((this._y = t), this.cb.call(this.scope));
    }
  }
  const xo = class {
    constructor() {
      (this.worldTransform = new J()),
        (this.localTransform = new J()),
        (this.position = new he(this.onChange, this, 0, 0)),
        (this.scale = new he(this.onChange, this, 1, 1)),
        (this.pivot = new he(this.onChange, this, 0, 0)),
        (this.skew = new he(this.updateSkew, this, 0, 0)),
        (this._rotation = 0),
        (this._cx = 1),
        (this._sx = 0),
        (this._cy = 0),
        (this._sy = 1),
        (this._localID = 0),
        (this._currentLocalID = 0),
        (this._worldID = 0),
        (this._parentID = 0);
    }
    onChange() {
      this._localID++;
    }
    updateSkew() {
      (this._cx = Math.cos(this._rotation + this.skew.y)),
        (this._sx = Math.sin(this._rotation + this.skew.y)),
        (this._cy = -Math.sin(this._rotation - this.skew.x)),
        (this._sy = Math.cos(this._rotation - this.skew.x)),
        this._localID++;
    }
    toString() {
      return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
    }
    updateLocalTransform() {
      const e = this.localTransform;
      this._localID !== this._currentLocalID &&
        ((e.a = this._cx * this.scale.x),
        (e.b = this._sx * this.scale.x),
        (e.c = this._cy * this.scale.y),
        (e.d = this._sy * this.scale.y),
        (e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c)),
        (e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d)),
        (this._currentLocalID = this._localID),
        (this._parentID = -1));
    }
    updateTransform(e) {
      const t = this.localTransform;
      if (
        (this._localID !== this._currentLocalID &&
          ((t.a = this._cx * this.scale.x),
          (t.b = this._sx * this.scale.x),
          (t.c = this._cy * this.scale.y),
          (t.d = this._sy * this.scale.y),
          (t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
          (t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
          (this._currentLocalID = this._localID),
          (this._parentID = -1)),
        this._parentID !== e._worldID)
      ) {
        const i = e.worldTransform,
          s = this.worldTransform;
        (s.a = t.a * i.a + t.b * i.c),
          (s.b = t.a * i.b + t.b * i.d),
          (s.c = t.c * i.a + t.d * i.c),
          (s.d = t.c * i.b + t.d * i.d),
          (s.tx = t.tx * i.a + t.ty * i.c + i.tx),
          (s.ty = t.tx * i.b + t.ty * i.d + i.ty),
          (this._parentID = e._worldID),
          this._worldID++;
      }
    }
    setFromMatrix(e) {
      e.decompose(this), this._localID++;
    }
    get rotation() {
      return this._rotation;
    }
    set rotation(e) {
      this._rotation !== e && ((this._rotation = e), this.updateSkew());
    }
  };
  let ai = xo;
  ai.IDENTITY = new xo();
  var dd = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,
    fd = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
  function To(e, t, i) {
    const s = e.createShader(t);
    return e.shaderSource(s, i), e.compileShader(s), s;
  }
  function pr(e) {
    const t = new Array(e);
    for (let i = 0; i < t.length; i++) t[i] = !1;
    return t;
  }
  function bo(e, t) {
    switch (e) {
      case 'float':
        return 0;
      case 'vec2':
        return new Float32Array(2 * t);
      case 'vec3':
        return new Float32Array(3 * t);
      case 'vec4':
        return new Float32Array(4 * t);
      case 'int':
      case 'uint':
      case 'sampler2D':
      case 'sampler2DArray':
        return 0;
      case 'ivec2':
        return new Int32Array(2 * t);
      case 'ivec3':
        return new Int32Array(3 * t);
      case 'ivec4':
        return new Int32Array(4 * t);
      case 'uvec2':
        return new Uint32Array(2 * t);
      case 'uvec3':
        return new Uint32Array(3 * t);
      case 'uvec4':
        return new Uint32Array(4 * t);
      case 'bool':
        return !1;
      case 'bvec2':
        return pr(2 * t);
      case 'bvec3':
        return pr(3 * t);
      case 'bvec4':
        return pr(4 * t);
      case 'mat2':
        return new Float32Array([1, 0, 0, 1]);
      case 'mat3':
        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
      case 'mat4':
        return new Float32Array([
          1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        ]);
    }
    return null;
  }
  const Ie = [
      {
        test: (e) => e.type === 'float' && e.size === 1 && !e.isArray,
        code: (e) => `
            if(uv["${e}"] !== ud["${e}"].value)
            {
                ud["${e}"].value = uv["${e}"]
                gl.uniform1f(ud["${e}"].location, uv["${e}"])
            }
            `,
      },
      {
        test: (e, t) =>
          (e.type === 'sampler2D' ||
            e.type === 'samplerCube' ||
            e.type === 'sampler2DArray') &&
          e.size === 1 &&
          !e.isArray &&
          (t == null || t.castToBaseTexture !== void 0),
        code: (e) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${e}"], t);

            if(ud["${e}"].value !== t)
            {
                ud["${e}"].value = t;
                gl.uniform1i(ud["${e}"].location, t);
; // eslint-disable-line max-len
            }`,
      },
      {
        test: (e, t) =>
          e.type === 'mat3' && e.size === 1 && !e.isArray && t.a !== void 0,
        code: (e) => `
            gl.uniformMatrix3fv(ud["${e}"].location, false, uv["${e}"].toArray(true));
            `,
        codeUbo: (e) => `
                var ${e}_matrix = uv.${e}.toArray(true);

                data[offset] = ${e}_matrix[0];
                data[offset+1] = ${e}_matrix[1];
                data[offset+2] = ${e}_matrix[2];
        
                data[offset + 4] = ${e}_matrix[3];
                data[offset + 5] = ${e}_matrix[4];
                data[offset + 6] = ${e}_matrix[5];
        
                data[offset + 8] = ${e}_matrix[6];
                data[offset + 9] = ${e}_matrix[7];
                data[offset + 10] = ${e}_matrix[8];
            `,
      },
      {
        test: (e, t) =>
          e.type === 'vec2' && e.size === 1 && !e.isArray && t.x !== void 0,
        code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${e}"].location, v.x, v.y);
                }`,
        codeUbo: (e) => `
                v = uv.${e};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `,
      },
      {
        test: (e) => e.type === 'vec2' && e.size === 1 && !e.isArray,
        code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${e}"].location, v[0], v[1]);
                }
            `,
      },
      {
        test: (e, t) =>
          e.type === 'vec4' && e.size === 1 && !e.isArray && t.width !== void 0,
        code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${e}"].location, v.x, v.y, v.width, v.height)
                }`,
        codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `,
      },
      {
        test: (e) => e.type === 'vec4' && e.size === 1 && !e.isArray,
        code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${e}"].location, v[0], v[1], v[2], v[3])
                }`,
      },
    ],
    pd = {
      float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
      vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
      vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
      vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
      int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
      ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
      ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
      ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
      uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
      uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
      uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
      uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
      bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
      bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
      bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
      bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
      mat2: 'gl.uniformMatrix2fv(location, false, v)',
      mat3: 'gl.uniformMatrix3fv(location, false, v)',
      mat4: 'gl.uniformMatrix4fv(location, false, v)',
      sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
      samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
      sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    },
    md = {
      float: 'gl.uniform1fv(location, v)',
      vec2: 'gl.uniform2fv(location, v)',
      vec3: 'gl.uniform3fv(location, v)',
      vec4: 'gl.uniform4fv(location, v)',
      mat4: 'gl.uniformMatrix4fv(location, false, v)',
      mat3: 'gl.uniformMatrix3fv(location, false, v)',
      mat2: 'gl.uniformMatrix2fv(location, false, v)',
      int: 'gl.uniform1iv(location, v)',
      ivec2: 'gl.uniform2iv(location, v)',
      ivec3: 'gl.uniform3iv(location, v)',
      ivec4: 'gl.uniform4iv(location, v)',
      uint: 'gl.uniform1uiv(location, v)',
      uvec2: 'gl.uniform2uiv(location, v)',
      uvec3: 'gl.uniform3uiv(location, v)',
      uvec4: 'gl.uniform4uiv(location, v)',
      bool: 'gl.uniform1iv(location, v)',
      bvec2: 'gl.uniform2iv(location, v)',
      bvec3: 'gl.uniform3iv(location, v)',
      bvec4: 'gl.uniform4iv(location, v)',
      sampler2D: 'gl.uniform1iv(location, v)',
      samplerCube: 'gl.uniform1iv(location, v)',
      sampler2DArray: 'gl.uniform1iv(location, v)',
    };
  function _d(e, t) {
    var s;
    const i = [
      `
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `,
    ];
    for (const r in e.uniforms) {
      const n = t[r];
      if (!n) {
        (s = e.uniforms[r]) != null &&
          s.group &&
          (e.uniforms[r].ubo
            ? i.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${r}, '${r}');
                    `)
            : i.push(`
                        renderer.shader.syncUniformGroup(uv.${r}, syncData);
                    `));
        continue;
      }
      const o = e.uniforms[r];
      let a = !1;
      for (let h = 0; h < Ie.length; h++)
        if (Ie[h].test(n, o)) {
          i.push(Ie[h].code(r, o)), (a = !0);
          break;
        }
      if (!a) {
        const l = (n.size === 1 && !n.isArray ? pd : md)[n.type].replace(
          'location',
          `ud["${r}"].location`
        );
        i.push(`
            cu = ud["${r}"];
            cv = cu.value;
            v = uv["${r}"];
            ${l};`);
      }
    }
    return new Function(
      'ud',
      'uv',
      'renderer',
      'syncData',
      i.join(`
`)
    );
  }
  const Eo = {};
  let Ve = Eo;
  function wo() {
    if (Ve === Eo || (Ve == null ? void 0 : Ve.isContextLost())) {
      const e = B.ADAPTER.createCanvas();
      let t;
      B.PREFER_ENV >= tt.WEBGL2 && (t = e.getContext('webgl2', {})),
        t ||
          ((t =
            e.getContext('webgl', {}) ||
            e.getContext('experimental-webgl', {})),
          t ? t.getExtension('WEBGL_draw_buffers') : (t = null)),
        (Ve = t);
    }
    return Ve;
  }
  let es;
  function gd() {
    if (!es) {
      es = Rt.MEDIUM;
      const e = wo();
      e &&
        e.getShaderPrecisionFormat &&
        (es = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
          .precision
          ? Rt.HIGH
          : Rt.MEDIUM);
    }
    return es;
  }
  function So(e, t) {
    const i = e
        .getShaderSource(t)
        .split(
          `
`
        )
        .map((l, c) => `${c}: ${l}`),
      s = e.getShaderInfoLog(t),
      r = s.split(`
`),
      n = {},
      o = r
        .map((l) => parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, '$1')))
        .filter((l) => (l && !n[l] ? ((n[l] = !0), !0) : !1)),
      a = [''];
    o.forEach((l) => {
      (i[l - 1] = `%c${i[l - 1]}%c`),
        a.push(
          'background: #FF0000; color:#FFFFFF; font-size: 10px',
          'font-size: 10px'
        );
    });
    const h = i.join(`
`);
    (a[0] = h),
      console.error(s),
      console.groupCollapsed('click to view full shader code'),
      console.warn(...a),
      console.groupEnd();
  }
  function yd(e, t, i, s) {
    e.getProgramParameter(t, e.LINK_STATUS) ||
      (e.getShaderParameter(i, e.COMPILE_STATUS) || So(e, i),
      e.getShaderParameter(s, e.COMPILE_STATUS) || So(e, s),
      console.error('PixiJS Error: Could not initialize shader.'),
      e.getProgramInfoLog(t) !== '' &&
        console.warn(
          'PixiJS Warning: gl.getProgramInfoLog()',
          e.getProgramInfoLog(t)
        ));
  }
  const vd = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4,
    uint: 1,
    uvec2: 2,
    uvec3: 3,
    uvec4: 4,
    bool: 1,
    bvec2: 2,
    bvec3: 3,
    bvec4: 4,
    mat2: 4,
    mat3: 9,
    mat4: 16,
    sampler2D: 1,
  };
  function Ao(e) {
    return vd[e];
  }
  let is = null;
  const Ro = {
    FLOAT: 'float',
    FLOAT_VEC2: 'vec2',
    FLOAT_VEC3: 'vec3',
    FLOAT_VEC4: 'vec4',
    INT: 'int',
    INT_VEC2: 'ivec2',
    INT_VEC3: 'ivec3',
    INT_VEC4: 'ivec4',
    UNSIGNED_INT: 'uint',
    UNSIGNED_INT_VEC2: 'uvec2',
    UNSIGNED_INT_VEC3: 'uvec3',
    UNSIGNED_INT_VEC4: 'uvec4',
    BOOL: 'bool',
    BOOL_VEC2: 'bvec2',
    BOOL_VEC3: 'bvec3',
    BOOL_VEC4: 'bvec4',
    FLOAT_MAT2: 'mat2',
    FLOAT_MAT3: 'mat3',
    FLOAT_MAT4: 'mat4',
    SAMPLER_2D: 'sampler2D',
    INT_SAMPLER_2D: 'sampler2D',
    UNSIGNED_INT_SAMPLER_2D: 'sampler2D',
    SAMPLER_CUBE: 'samplerCube',
    INT_SAMPLER_CUBE: 'samplerCube',
    UNSIGNED_INT_SAMPLER_CUBE: 'samplerCube',
    SAMPLER_2D_ARRAY: 'sampler2DArray',
    INT_SAMPLER_2D_ARRAY: 'sampler2DArray',
    UNSIGNED_INT_SAMPLER_2D_ARRAY: 'sampler2DArray',
  };
  function Co(e, t) {
    if (!is) {
      const i = Object.keys(Ro);
      is = {};
      for (let s = 0; s < i.length; ++s) {
        const r = i[s];
        is[e[r]] = Ro[r];
      }
    }
    return is[t];
  }
  function Io(e, t, i) {
    if (e.substring(0, 9) !== 'precision') {
      let s = t;
      return (
        t === Rt.HIGH && i !== Rt.HIGH && (s = Rt.MEDIUM),
        `precision ${s} float;
${e}`
      );
    } else if (i !== Rt.HIGH && e.substring(0, 15) === 'precision highp')
      return e.replace('precision highp', 'precision mediump');
    return e;
  }
  let hi;
  function Po() {
    if (typeof hi == 'boolean') return hi;
    try {
      hi =
        new Function(
          'param1',
          'param2',
          'param3',
          'return param1[param2] === param3;'
        )({ a: 'b' }, 'a', 'b') === !0;
    } catch (e) {
      hi = !1;
    }
    return hi;
  }
  let xd = 0;
  const ss = {},
    ze = class {
      constructor(e, t, i = 'pixi-shader', s = {}) {
        (this.extra = {}),
          (this.id = xd++),
          (this.vertexSrc = e || ze.defaultVertexSrc),
          (this.fragmentSrc = t || ze.defaultFragmentSrc),
          (this.vertexSrc = this.vertexSrc.trim()),
          (this.fragmentSrc = this.fragmentSrc.trim()),
          (this.extra = s),
          this.vertexSrc.substring(0, 8) !== '#version' &&
            ((i = i.replace(/\s+/g, '-')),
            ss[i] ? (ss[i]++, (i += `-${ss[i]}`)) : (ss[i] = 1),
            (this.vertexSrc = `#define SHADER_NAME ${i}
${this.vertexSrc}`),
            (this.fragmentSrc = `#define SHADER_NAME ${i}
${this.fragmentSrc}`),
            (this.vertexSrc = Io(
              this.vertexSrc,
              ze.defaultVertexPrecision,
              Rt.HIGH
            )),
            (this.fragmentSrc = Io(
              this.fragmentSrc,
              ze.defaultFragmentPrecision,
              gd()
            ))),
          (this.glPrograms = {}),
          (this.syncUniforms = null);
      }
      static get defaultVertexSrc() {
        return fd;
      }
      static get defaultFragmentSrc() {
        return dd;
      }
      static from(e, t, i) {
        const s = e + t;
        let r = ir[s];
        return r || (ir[s] = r = new ze(e, t, i)), r;
      }
    };
  let Ft = ze;
  (Ft.defaultVertexPrecision = Rt.HIGH),
    (Ft.defaultFragmentPrecision = zt.apple.device ? Rt.HIGH : Rt.MEDIUM);
  let Td = 0;
  class Nt {
    constructor(t, i, s) {
      (this.group = !0),
        (this.syncUniforms = {}),
        (this.dirtyId = 0),
        (this.id = Td++),
        (this.static = !!i),
        (this.ubo = !!s),
        t instanceof ot
          ? ((this.buffer = t),
            (this.buffer.type = Vt.UNIFORM_BUFFER),
            (this.autoManage = !1),
            (this.ubo = !0))
          : ((this.uniforms = t),
            this.ubo &&
              ((this.buffer = new ot(new Float32Array(1))),
              (this.buffer.type = Vt.UNIFORM_BUFFER),
              (this.autoManage = !0)));
    }
    update() {
      this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
    }
    add(t, i, s) {
      if (!this.ubo) this.uniforms[t] = new Nt(i, s);
      else
        throw new Error(
          '[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them'
        );
    }
    static from(t, i, s) {
      return new Nt(t, i, s);
    }
    static uboFrom(t, i) {
      return new Nt(t, i != null ? i : !0, !0);
    }
  }
  class jt {
    constructor(t, i) {
      (this.uniformBindCount = 0),
        (this.program = t),
        i
          ? i instanceof Nt
            ? (this.uniformGroup = i)
            : (this.uniformGroup = new Nt(i))
          : (this.uniformGroup = new Nt({})),
        (this.disposeRunner = new It('disposeShader'));
    }
    checkUniformExists(t, i) {
      if (i.uniforms[t]) return !0;
      for (const s in i.uniforms) {
        const r = i.uniforms[s];
        if (r.group && this.checkUniformExists(t, r)) return !0;
      }
      return !1;
    }
    destroy() {
      (this.uniformGroup = null),
        this.disposeRunner.emit(this),
        this.disposeRunner.destroy();
    }
    get uniforms() {
      return this.uniformGroup.uniforms;
    }
    static from(t, i, s) {
      const r = Ft.from(t, i);
      return new jt(r, s);
    }
  }
  class Mo {
    constructor(t, i) {
      if (
        ((this.vertexSrc = t),
        (this.fragTemplate = i),
        (this.programCache = {}),
        (this.defaultGroupCache = {}),
        !i.includes('%count%'))
      )
        throw new Error('Fragment template must contain "%count%".');
      if (!i.includes('%forloop%'))
        throw new Error('Fragment template must contain "%forloop%".');
    }
    generateShader(t) {
      if (!this.programCache[t]) {
        const s = new Int32Array(t);
        for (let n = 0; n < t; n++) s[n] = n;
        this.defaultGroupCache[t] = Nt.from({ uSamplers: s }, !0);
        let r = this.fragTemplate;
        (r = r.replace(/%count%/gi, `${t}`)),
          (r = r.replace(/%forloop%/gi, this.generateSampleSrc(t))),
          (this.programCache[t] = new Ft(this.vertexSrc, r));
      }
      const i = {
        tint: new Float32Array([1, 1, 1, 1]),
        translationMatrix: new J(),
        default: this.defaultGroupCache[t],
      };
      return new jt(this.programCache[t], i);
    }
    generateSampleSrc(t) {
      let i = '';
      (i += `
`),
        (i += `
`);
      for (let s = 0; s < t; s++)
        s > 0 &&
          (i += `
else `),
          s < t - 1 && (i += `if(vTextureId < ${s}.5)`),
          (i += `
{`),
          (i += `
	color = texture2D(uSamplers[${s}], vTextureCoord);`),
          (i += `
}`);
      return (
        (i += `
`),
        (i += `
`),
        i
      );
    }
  }
  class rs {
    constructor() {
      (this.elements = []), (this.ids = []), (this.count = 0);
    }
    clear() {
      for (let t = 0; t < this.count; t++) this.elements[t] = null;
      this.count = 0;
    }
  }
  function bd() {
    return !zt.apple.device;
  }
  function Ed(e) {
    let t = !0;
    const i = B.ADAPTER.getNavigator();
    if (zt.tablet || zt.phone) {
      if (zt.apple.device) {
        const s = i.userAgent.match(/OS (\d+)_(\d+)?/);
        s && parseInt(s[1], 10) < 11 && (t = !1);
      }
      if (zt.android.device) {
        const s = i.userAgent.match(/Android\s([0-9.]*)/);
        s && parseInt(s[1], 10) < 7 && (t = !1);
      }
    }
    return t ? e : 4;
  }
  class li {
    constructor(t) {
      this.renderer = t;
    }
    flush() {}
    destroy() {
      this.renderer = null;
    }
    start() {}
    stop() {
      this.flush();
    }
    render(t) {}
  }
  var wd = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,
    Sd = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
  const Yt = class extends li {
    constructor(e) {
      super(e),
        this.setShaderGenerator(),
        (this.geometryClass = dr),
        (this.vertexSize = 6),
        (this.state = te.for2d()),
        (this.size = Yt.defaultBatchSize * 4),
        (this._vertexCount = 0),
        (this._indexCount = 0),
        (this._bufferedElements = []),
        (this._bufferedTextures = []),
        (this._bufferSize = 0),
        (this._shader = null),
        (this._packedGeometries = []),
        (this._packedGeometryPoolSize = 2),
        (this._flushId = 0),
        (this._aBuffers = {}),
        (this._iBuffers = {}),
        (this.maxTextures = 1),
        this.renderer.on('prerender', this.onPrerender, this),
        e.runners.contextChange.add(this),
        (this._dcIndex = 0),
        (this._aIndex = 0),
        (this._iIndex = 0),
        (this._attributeBuffer = null),
        (this._indexBuffer = null),
        (this._tempBoundTextures = []);
    }
    static get defaultMaxTextures() {
      var e;
      return (
        (this._defaultMaxTextures =
          (e = this._defaultMaxTextures) != null ? e : Ed(32)),
        this._defaultMaxTextures
      );
    }
    static set defaultMaxTextures(e) {
      this._defaultMaxTextures = e;
    }
    static get canUploadSameBuffer() {
      var e;
      return (
        (this._canUploadSameBuffer =
          (e = this._canUploadSameBuffer) != null ? e : bd()),
        this._canUploadSameBuffer
      );
    }
    static set canUploadSameBuffer(e) {
      this._canUploadSameBuffer = e;
    }
    get MAX_TEXTURES() {
      return (
        $(
          '7.1.0',
          'BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures'
        ),
        this.maxTextures
      );
    }
    static get defaultVertexSrc() {
      return Sd;
    }
    static get defaultFragmentTemplate() {
      return wd;
    }
    setShaderGenerator({
      vertex: e = Yt.defaultVertexSrc,
      fragment: t = Yt.defaultFragmentTemplate,
    } = {}) {
      this.shaderGenerator = new Mo(e, t);
    }
    contextChange() {
      const e = this.renderer.gl;
      B.PREFER_ENV === tt.WEBGL_LEGACY
        ? (this.maxTextures = 1)
        : ((this.maxTextures = Math.min(
            e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
            Yt.defaultMaxTextures
          )),
          (this.maxTextures = mo(this.maxTextures, e))),
        (this._shader = this.shaderGenerator.generateShader(this.maxTextures));
      for (let t = 0; t < this._packedGeometryPoolSize; t++)
        this._packedGeometries[t] = new this.geometryClass();
      this.initFlushBuffers();
    }
    initFlushBuffers() {
      const { _drawCallPool: e, _textureArrayPool: t } = Yt,
        i = this.size / 4,
        s = Math.floor(i / this.maxTextures) + 1;
      for (; e.length < i; ) e.push(new qi());
      for (; t.length < s; ) t.push(new rs());
      for (let r = 0; r < this.maxTextures; r++)
        this._tempBoundTextures[r] = null;
    }
    onPrerender() {
      this._flushId = 0;
    }
    render(e) {
      !e._texture.valid ||
        (this._vertexCount + e.vertexData.length / 2 > this.size &&
          this.flush(),
        (this._vertexCount += e.vertexData.length / 2),
        (this._indexCount += e.indices.length),
        (this._bufferedTextures[this._bufferSize] = e._texture.baseTexture),
        (this._bufferedElements[this._bufferSize++] = e));
    }
    buildTexturesAndDrawCalls() {
      const { _bufferedTextures: e, maxTextures: t } = this,
        i = Yt._textureArrayPool,
        s = this.renderer.batch,
        r = this._tempBoundTextures,
        n = this.renderer.textureGC.count;
      let o = ++V._globalBatch,
        a = 0,
        h = i[0],
        l = 0;
      s.copyBoundTextures(r, t);
      for (let c = 0; c < this._bufferSize; ++c) {
        const u = e[c];
        (e[c] = null),
          u._batchEnabled !== o &&
            (h.count >= t &&
              (s.boundArray(h, r, o, t),
              this.buildDrawCalls(h, l, c),
              (l = c),
              (h = i[++a]),
              ++o),
            (u._batchEnabled = o),
            (u.touched = n),
            (h.elements[h.count++] = u));
      }
      h.count > 0 &&
        (s.boundArray(h, r, o, t),
        this.buildDrawCalls(h, l, this._bufferSize),
        ++a,
        ++o);
      for (let c = 0; c < r.length; c++) r[c] = null;
      V._globalBatch = o;
    }
    buildDrawCalls(e, t, i) {
      const {
          _bufferedElements: s,
          _attributeBuffer: r,
          _indexBuffer: n,
          vertexSize: o,
        } = this,
        a = Yt._drawCallPool;
      let h = this._dcIndex,
        l = this._aIndex,
        c = this._iIndex,
        u = a[h];
      (u.start = this._iIndex), (u.texArray = e);
      for (let d = t; d < i; ++d) {
        const f = s[d],
          p = f._texture.baseTexture,
          g = Zs[p.alphaMode ? 1 : 0][f.blendMode];
        (s[d] = null),
          t < d &&
            u.blend !== g &&
            ((u.size = c - u.start),
            (t = d),
            (u = a[++h]),
            (u.texArray = e),
            (u.start = c)),
          this.packInterleavedGeometry(f, r, n, l, c),
          (l += (f.vertexData.length / 2) * o),
          (c += f.indices.length),
          (u.blend = g);
      }
      t < i && ((u.size = c - u.start), ++h),
        (this._dcIndex = h),
        (this._aIndex = l),
        (this._iIndex = c);
    }
    bindAndClearTexArray(e) {
      const t = this.renderer.texture;
      for (let i = 0; i < e.count; i++)
        t.bind(e.elements[i], e.ids[i]), (e.elements[i] = null);
      e.count = 0;
    }
    updateGeometry() {
      const {
        _packedGeometries: e,
        _attributeBuffer: t,
        _indexBuffer: i,
      } = this;
      Yt.canUploadSameBuffer
        ? (e[this._flushId]._buffer.update(t.rawBinaryData),
          e[this._flushId]._indexBuffer.update(i),
          this.renderer.geometry.updateBuffers())
        : (this._packedGeometryPoolSize <= this._flushId &&
            (this._packedGeometryPoolSize++,
            (e[this._flushId] = new this.geometryClass())),
          e[this._flushId]._buffer.update(t.rawBinaryData),
          e[this._flushId]._indexBuffer.update(i),
          this.renderer.geometry.bind(e[this._flushId]),
          this.renderer.geometry.updateBuffers(),
          this._flushId++);
    }
    drawBatches() {
      const e = this._dcIndex,
        { gl: t, state: i } = this.renderer,
        s = Yt._drawCallPool;
      let r = null;
      for (let n = 0; n < e; n++) {
        const { texArray: o, type: a, size: h, start: l, blend: c } = s[n];
        r !== o && ((r = o), this.bindAndClearTexArray(o)),
          (this.state.blendMode = c),
          i.set(this.state),
          t.drawElements(a, h, t.UNSIGNED_SHORT, l * 2);
      }
    }
    flush() {
      this._vertexCount !== 0 &&
        ((this._attributeBuffer = this.getAttributeBuffer(this._vertexCount)),
        (this._indexBuffer = this.getIndexBuffer(this._indexCount)),
        (this._aIndex = 0),
        (this._iIndex = 0),
        (this._dcIndex = 0),
        this.buildTexturesAndDrawCalls(),
        this.updateGeometry(),
        this.drawBatches(),
        (this._bufferSize = 0),
        (this._vertexCount = 0),
        (this._indexCount = 0));
    }
    start() {
      this.renderer.state.set(this.state),
        this.renderer.texture.ensureSamplerType(this.maxTextures),
        this.renderer.shader.bind(this._shader),
        Yt.canUploadSameBuffer &&
          this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
    }
    stop() {
      this.flush();
    }
    destroy() {
      for (let e = 0; e < this._packedGeometryPoolSize; e++)
        this._packedGeometries[e] && this._packedGeometries[e].destroy();
      this.renderer.off('prerender', this.onPrerender, this),
        (this._aBuffers = null),
        (this._iBuffers = null),
        (this._packedGeometries = null),
        (this._attributeBuffer = null),
        (this._indexBuffer = null),
        this._shader && (this._shader.destroy(), (this._shader = null)),
        super.destroy();
    }
    getAttributeBuffer(e) {
      const t = ri(Math.ceil(e / 8)),
        i = er(t),
        s = t * 8;
      this._aBuffers.length <= i && (this._iBuffers.length = i + 1);
      let r = this._aBuffers[s];
      return r || (this._aBuffers[s] = r = new Yi(s * this.vertexSize * 4)), r;
    }
    getIndexBuffer(e) {
      const t = ri(Math.ceil(e / 12)),
        i = er(t),
        s = t * 12;
      this._iBuffers.length <= i && (this._iBuffers.length = i + 1);
      let r = this._iBuffers[i];
      return r || (this._iBuffers[i] = r = new Uint16Array(s)), r;
    }
    packInterleavedGeometry(e, t, i, s, r) {
      const { uint32View: n, float32View: o } = t,
        a = s / this.vertexSize,
        h = e.uvs,
        l = e.indices,
        c = e.vertexData,
        u = e._texture.baseTexture._batchLocation,
        d = Math.min(e.worldAlpha, 1),
        f =
          d < 1 && e._texture.baseTexture.alphaMode
            ? Vi(e._tintRGB, d)
            : e._tintRGB + ((d * 255) << 24);
      for (let p = 0; p < c.length; p += 2)
        (o[s++] = c[p]),
          (o[s++] = c[p + 1]),
          (o[s++] = h[p]),
          (o[s++] = h[p + 1]),
          (n[s++] = f),
          (o[s++] = u);
      for (let p = 0; p < l.length; p++) i[r++] = a + l[p];
    }
  };
  let Ot = Yt;
  (Ot.defaultBatchSize = 4096),
    (Ot.extension = { name: 'batch', type: P.RendererPlugin }),
    (Ot._drawCallPool = []),
    (Ot._textureArrayPool = []),
    U.add(Ot);
  var Ad = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,
    Rd = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
  const ci = class extends jt {
    constructor(e, t, i) {
      const s = Ft.from(e || ci.defaultVertexSrc, t || ci.defaultFragmentSrc);
      super(s, i),
        (this.padding = 0),
        (this.resolution = ci.defaultResolution),
        (this.multisample = ci.defaultMultisample),
        (this.enabled = !0),
        (this.autoFit = !0),
        (this.state = new te());
    }
    apply(e, t, i, s, r) {
      e.applyFilter(this, t, i, s);
    }
    get blendMode() {
      return this.state.blendMode;
    }
    set blendMode(e) {
      this.state.blendMode = e;
    }
    get resolution() {
      return this._resolution;
    }
    set resolution(e) {
      this._resolution = e;
    }
    static get defaultVertexSrc() {
      return Rd;
    }
    static get defaultFragmentSrc() {
      return Ad;
    }
  };
  let _t = ci;
  (_t.defaultResolution = 1), (_t.defaultMultisample = rt.NONE);
  class mr {
    constructor() {
      (this.clearBeforeRender = !0),
        (this._backgroundColor = 0),
        (this._backgroundColorRgba = [0, 0, 0, 1]),
        (this._backgroundColorString = '#000000'),
        (this.color = this._backgroundColor),
        (this.alpha = 1);
    }
    init(t) {
      (this.clearBeforeRender = t.clearBeforeRender),
        t.color &&
          (this.color = typeof t.color == 'string' ? Xi(t.color) : t.color),
        (this.alpha = t.alpha);
    }
    get color() {
      return this._backgroundColor;
    }
    set color(t) {
      (this._backgroundColor = t),
        (this._backgroundColorString = Ks(t)),
        Te(t, this._backgroundColorRgba);
    }
    get alpha() {
      return this._backgroundColorRgba[3];
    }
    set alpha(t) {
      this._backgroundColorRgba[3] = t;
    }
    get colorRgba() {
      return this._backgroundColorRgba;
    }
    get colorString() {
      return this._backgroundColorString;
    }
    destroy() {}
  }
  (mr.extension = {
    type: [P.RendererSystem, P.CanvasRendererSystem],
    name: 'background',
  }),
    U.add(mr);
  class _r {
    constructor(t) {
      (this.renderer = t),
        (this.emptyRenderer = new li(t)),
        (this.currentRenderer = this.emptyRenderer);
    }
    setObjectRenderer(t) {
      this.currentRenderer !== t &&
        (this.currentRenderer.stop(),
        (this.currentRenderer = t),
        this.currentRenderer.start());
    }
    flush() {
      this.setObjectRenderer(this.emptyRenderer);
    }
    reset() {
      this.setObjectRenderer(this.emptyRenderer);
    }
    copyBoundTextures(t, i) {
      const { boundTextures: s } = this.renderer.texture;
      for (let r = i - 1; r >= 0; --r)
        (t[r] = s[r] || null), t[r] && (t[r]._batchLocation = r);
    }
    boundArray(t, i, s, r) {
      const { elements: n, ids: o, count: a } = t;
      let h = 0;
      for (let l = 0; l < a; l++) {
        const c = n[l],
          u = c._batchLocation;
        if (u >= 0 && u < r && i[u] === c) {
          o[l] = u;
          continue;
        }
        for (; h < r; ) {
          const d = i[h];
          if (d && d._batchEnabled === s && d._batchLocation === h) {
            h++;
            continue;
          }
          (o[l] = h), (c._batchLocation = h), (i[h] = c);
          break;
        }
      }
    }
    destroy() {
      this.renderer = null;
    }
  }
  (_r.extension = { type: P.RendererSystem, name: 'batch' }), U.add(_r);
  let Bo = 0;
  class gr {
    constructor(t) {
      (this.renderer = t),
        (this.webGLVersion = 1),
        (this.extensions = {}),
        (this.supports = { uint32Indices: !1 }),
        (this.handleContextLost = this.handleContextLost.bind(this)),
        (this.handleContextRestored = this.handleContextRestored.bind(this));
    }
    get isLost() {
      return !this.gl || this.gl.isContextLost();
    }
    contextChange(t) {
      (this.gl = t), (this.renderer.gl = t), (this.renderer.CONTEXT_UID = Bo++);
    }
    init(t) {
      if (t.context) this.initFromContext(t.context);
      else {
        const i = this.renderer.background.alpha < 1,
          s = t.premultipliedAlpha;
        (this.preserveDrawingBuffer = t.preserveDrawingBuffer),
          (this.useContextAlpha = t.useContextAlpha),
          (this.powerPreference = t.powerPreference),
          this.initFromOptions({
            alpha: i,
            premultipliedAlpha: s,
            antialias: t.antialias,
            stencil: !0,
            preserveDrawingBuffer: t.preserveDrawingBuffer,
            powerPreference: t.powerPreference,
          });
      }
    }
    initFromContext(t) {
      (this.gl = t),
        this.validateContext(t),
        (this.renderer.gl = t),
        (this.renderer.CONTEXT_UID = Bo++),
        this.renderer.runners.contextChange.emit(t);
      const i = this.renderer.view;
      i.addEventListener !== void 0 &&
        (i.addEventListener('webglcontextlost', this.handleContextLost, !1),
        i.addEventListener(
          'webglcontextrestored',
          this.handleContextRestored,
          !1
        ));
    }
    initFromOptions(t) {
      const i = this.createContext(this.renderer.view, t);
      this.initFromContext(i);
    }
    createContext(t, i) {
      let s;
      if ((B.PREFER_ENV >= tt.WEBGL2 && (s = t.getContext('webgl2', i)), s))
        this.webGLVersion = 2;
      else if (
        ((this.webGLVersion = 1),
        (s = t.getContext('webgl', i) || t.getContext('experimental-webgl', i)),
        !s)
      )
        throw new Error(
          'This browser does not support WebGL. Try using the canvas renderer'
        );
      return (this.gl = s), this.getExtensions(), this.gl;
    }
    getExtensions() {
      const { gl: t } = this,
        i = {
          loseContext: t.getExtension('WEBGL_lose_context'),
          anisotropicFiltering: t.getExtension(
            'EXT_texture_filter_anisotropic'
          ),
          floatTextureLinear: t.getExtension('OES_texture_float_linear'),
          s3tc: t.getExtension('WEBGL_compressed_texture_s3tc'),
          s3tc_sRGB: t.getExtension('WEBGL_compressed_texture_s3tc_srgb'),
          etc: t.getExtension('WEBGL_compressed_texture_etc'),
          etc1: t.getExtension('WEBGL_compressed_texture_etc1'),
          pvrtc:
            t.getExtension('WEBGL_compressed_texture_pvrtc') ||
            t.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
          atc: t.getExtension('WEBGL_compressed_texture_atc'),
          astc: t.getExtension('WEBGL_compressed_texture_astc'),
        };
      this.webGLVersion === 1
        ? Object.assign(this.extensions, i, {
            drawBuffers: t.getExtension('WEBGL_draw_buffers'),
            depthTexture: t.getExtension('WEBGL_depth_texture'),
            vertexArrayObject:
              t.getExtension('OES_vertex_array_object') ||
              t.getExtension('MOZ_OES_vertex_array_object') ||
              t.getExtension('WEBKIT_OES_vertex_array_object'),
            uint32ElementIndex: t.getExtension('OES_element_index_uint'),
            floatTexture: t.getExtension('OES_texture_float'),
            floatTextureLinear: t.getExtension('OES_texture_float_linear'),
            textureHalfFloat: t.getExtension('OES_texture_half_float'),
            textureHalfFloatLinear: t.getExtension(
              'OES_texture_half_float_linear'
            ),
          })
        : this.webGLVersion === 2 &&
          Object.assign(this.extensions, i, {
            colorBufferFloat: t.getExtension('EXT_color_buffer_float'),
          });
    }
    handleContextLost(t) {
      t.preventDefault(),
        setTimeout(() => {
          this.gl.isContextLost() &&
            this.extensions.loseContext &&
            this.extensions.loseContext.restoreContext();
        }, 0);
    }
    handleContextRestored() {
      this.renderer.runners.contextChange.emit(this.gl);
    }
    destroy() {
      const t = this.renderer.view;
      (this.renderer = null),
        t.removeEventListener !== void 0 &&
          (t.removeEventListener('webglcontextlost', this.handleContextLost),
          t.removeEventListener(
            'webglcontextrestored',
            this.handleContextRestored
          )),
        this.gl.useProgram(null),
        this.extensions.loseContext &&
          this.extensions.loseContext.loseContext();
    }
    postrender() {
      this.renderer.objectRenderer.renderingToScreen && this.gl.flush();
    }
    validateContext(t) {
      const i = t.getContextAttributes(),
        s =
          'WebGL2RenderingContext' in globalThis &&
          t instanceof globalThis.WebGL2RenderingContext;
      s && (this.webGLVersion = 2),
        i &&
          !i.stencil &&
          console.warn(
            'Provided WebGL context does not have a stencil buffer, masks may not render correctly'
          );
      const r = s || !!t.getExtension('OES_element_index_uint');
      (this.supports.uint32Indices = r),
        r ||
          console.warn(
            'Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly'
          );
    }
  }
  (gr.extension = { type: P.RendererSystem, name: 'context' }), U.add(gr);
  class Cd extends He {
    upload(t, i, s) {
      const r = t.gl;
      r.pixelStorei(
        r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        i.alphaMode === Bt.UNPACK
      );
      const n = i.realWidth,
        o = i.realHeight;
      return (
        s.width === n && s.height === o
          ? r.texSubImage2D(
              i.target,
              0,
              0,
              0,
              n,
              o,
              i.format,
              s.type,
              this.data
            )
          : ((s.width = n),
            (s.height = o),
            r.texImage2D(
              i.target,
              0,
              s.internalFormat,
              n,
              o,
              0,
              i.format,
              s.type,
              this.data
            )),
        !0
      );
    }
  }
  class ns {
    constructor(t, i) {
      (this.width = Math.round(t || 100)),
        (this.height = Math.round(i || 100)),
        (this.stencil = !1),
        (this.depth = !1),
        (this.dirtyId = 0),
        (this.dirtyFormat = 0),
        (this.dirtySize = 0),
        (this.depthTexture = null),
        (this.colorTextures = []),
        (this.glFramebuffers = {}),
        (this.disposeRunner = new It('disposeFramebuffer')),
        (this.multisample = rt.NONE);
    }
    get colorTexture() {
      return this.colorTextures[0];
    }
    addColorTexture(t = 0, i) {
      return (
        (this.colorTextures[t] =
          i ||
          new V(null, {
            scaleMode: Zt.NEAREST,
            resolution: 1,
            mipmap: Ht.OFF,
            width: this.width,
            height: this.height,
          })),
        this.dirtyId++,
        this.dirtyFormat++,
        this
      );
    }
    addDepthTexture(t) {
      return (
        (this.depthTexture =
          t ||
          new V(new Cd(null, { width: this.width, height: this.height }), {
            scaleMode: Zt.NEAREST,
            resolution: 1,
            width: this.width,
            height: this.height,
            mipmap: Ht.OFF,
            format: C.DEPTH_COMPONENT,
            type: k.UNSIGNED_SHORT,
          })),
        this.dirtyId++,
        this.dirtyFormat++,
        this
      );
    }
    enableDepth() {
      return (this.depth = !0), this.dirtyId++, this.dirtyFormat++, this;
    }
    enableStencil() {
      return (this.stencil = !0), this.dirtyId++, this.dirtyFormat++, this;
    }
    resize(t, i) {
      if (
        ((t = Math.round(t)),
        (i = Math.round(i)),
        !(t === this.width && i === this.height))
      ) {
        (this.width = t), (this.height = i), this.dirtyId++, this.dirtySize++;
        for (let s = 0; s < this.colorTextures.length; s++) {
          const r = this.colorTextures[s],
            n = r.resolution;
          r.setSize(t / n, i / n);
        }
        if (this.depthTexture) {
          const s = this.depthTexture.resolution;
          this.depthTexture.setSize(t / s, i / s);
        }
      }
    }
    dispose() {
      this.disposeRunner.emit(this, !1);
    }
    destroyDepthTexture() {
      this.depthTexture &&
        (this.depthTexture.destroy(),
        (this.depthTexture = null),
        ++this.dirtyId,
        ++this.dirtyFormat);
    }
  }
  class yr extends V {
    constructor(t = {}) {
      var i;
      if (typeof t == 'number') {
        const s = arguments[0],
          r = arguments[1],
          n = arguments[2],
          o = arguments[3];
        t = { width: s, height: r, scaleMode: n, resolution: o };
      }
      (t.width = t.width || 100),
        (t.height = t.height || 100),
        (i = t.multisample) != null || (t.multisample = rt.NONE),
        super(null, t),
        (this.mipmap = Ht.OFF),
        (this.valid = !0),
        (this.clearColor = [0, 0, 0, 0]),
        (this.framebuffer = new ns(
          this.realWidth,
          this.realHeight
        ).addColorTexture(0, this)),
        (this.framebuffer.multisample = t.multisample),
        (this.maskStack = []),
        (this.filterStack = [{}]);
    }
    resize(t, i) {
      this.framebuffer.resize(t * this.resolution, i * this.resolution),
        this.setRealSize(this.framebuffer.width, this.framebuffer.height);
    }
    dispose() {
      this.framebuffer.dispose(), super.dispose();
    }
    destroy() {
      super.destroy(),
        this.framebuffer.destroyDepthTexture(),
        (this.framebuffer = null);
    }
  }
  class le extends Ge {
    constructor(t) {
      const i = t,
        s = i.naturalWidth || i.videoWidth || i.width,
        r = i.naturalHeight || i.videoHeight || i.height;
      super(s, r), (this.source = t), (this.noSubImage = !1);
    }
    static crossOrigin(t, i, s) {
      s === void 0 && !i.startsWith('data:')
        ? (t.crossOrigin = fo(i))
        : s !== !1 && (t.crossOrigin = typeof s == 'string' ? s : 'anonymous');
    }
    upload(t, i, s, r) {
      const n = t.gl,
        o = i.realWidth,
        a = i.realHeight;
      if (
        ((r = r || this.source),
        typeof HTMLImageElement != 'undefined' && r instanceof HTMLImageElement)
      ) {
        if (!r.complete || r.naturalWidth === 0) return !1;
      } else if (
        typeof HTMLVideoElement != 'undefined' &&
        r instanceof HTMLVideoElement &&
        r.readyState <= 1 &&
        r.buffered.length === 0
      )
        return !1;
      return (
        n.pixelStorei(
          n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
          i.alphaMode === Bt.UNPACK
        ),
        !this.noSubImage &&
        i.target === n.TEXTURE_2D &&
        s.width === o &&
        s.height === a
          ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, i.format, s.type, r)
          : ((s.width = o),
            (s.height = a),
            n.texImage2D(i.target, 0, s.internalFormat, i.format, s.type, r)),
        !0
      );
    }
    update() {
      if (this.destroyed) return;
      const t = this.source,
        i = t.naturalWidth || t.videoWidth || t.width,
        s = t.naturalHeight || t.videoHeight || t.height;
      this.resize(i, s), super.update();
    }
    dispose() {
      this.source = null;
    }
  }
  class vr extends le {
    constructor(t, i) {
      var s;
      if (((i = i || {}), typeof t == 'string')) {
        const r = new Image();
        le.crossOrigin(r, t, i.crossorigin), (r.src = t), (t = r);
      }
      super(t),
        !t.complete &&
          !!this._width &&
          !!this._height &&
          ((this._width = 0), (this._height = 0)),
        (this.url = t.src),
        (this._process = null),
        (this.preserveBitmap = !1),
        (this.createBitmap =
          ((s = i.createBitmap) != null ? s : B.CREATE_IMAGE_BITMAP) &&
          !!globalThis.createImageBitmap),
        (this.alphaMode = typeof i.alphaMode == 'number' ? i.alphaMode : null),
        (this.bitmap = null),
        (this._load = null),
        i.autoLoad !== !1 && this.load();
    }
    load(t) {
      return this._load
        ? this._load
        : (t !== void 0 && (this.createBitmap = t),
          (this._load = new Promise((i, s) => {
            const r = this.source;
            this.url = r.src;
            const n = () => {
              this.destroyed ||
                ((r.onload = null),
                (r.onerror = null),
                this.resize(r.width, r.height),
                (this._load = null),
                this.createBitmap ? i(this.process()) : i(this));
            };
            r.complete && r.src
              ? n()
              : ((r.onload = n),
                (r.onerror = (o) => {
                  s(o), this.onError.emit(o);
                }));
          })),
          this._load);
    }
    process() {
      const t = this.source;
      if (this._process !== null) return this._process;
      if (this.bitmap !== null || !globalThis.createImageBitmap)
        return Promise.resolve(this);
      const i = globalThis.createImageBitmap,
        s = !t.crossOrigin || t.crossOrigin === 'anonymous';
      return (
        (this._process = fetch(t.src, { mode: s ? 'cors' : 'no-cors' })
          .then((r) => r.blob())
          .then((r) =>
            i(r, 0, 0, t.width, t.height, {
              premultiplyAlpha:
                this.alphaMode === null || this.alphaMode === Bt.UNPACK
                  ? 'premultiply'
                  : 'none',
            })
          )
          .then((r) =>
            this.destroyed
              ? Promise.reject()
              : ((this.bitmap = r),
                this.update(),
                (this._process = null),
                Promise.resolve(this))
          )),
        this._process
      );
    }
    upload(t, i, s) {
      if (
        (typeof this.alphaMode == 'number' && (i.alphaMode = this.alphaMode),
        !this.createBitmap)
      )
        return super.upload(t, i, s);
      if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
      if ((super.upload(t, i, s, this.bitmap), !this.preserveBitmap)) {
        let r = !0;
        const n = i._glTextures;
        for (const o in n) {
          const a = n[o];
          if (a !== s && a.dirtyId !== i.dirtyId) {
            r = !1;
            break;
          }
        }
        r && (this.bitmap.close && this.bitmap.close(), (this.bitmap = null));
      }
      return !0;
    }
    dispose() {
      (this.source.onload = null),
        (this.source.onerror = null),
        super.dispose(),
        this.bitmap && (this.bitmap.close(), (this.bitmap = null)),
        (this._process = null),
        (this._load = null);
    }
    static test(t) {
      return (
        typeof HTMLImageElement != 'undefined' &&
        (typeof t == 'string' || t instanceof HTMLImageElement)
      );
    }
  }
  class xr {
    constructor() {
      (this.x0 = 0),
        (this.y0 = 0),
        (this.x1 = 1),
        (this.y1 = 0),
        (this.x2 = 1),
        (this.y2 = 1),
        (this.x3 = 0),
        (this.y3 = 1),
        (this.uvsFloat32 = new Float32Array(8));
    }
    set(t, i, s) {
      const r = i.width,
        n = i.height;
      if (s) {
        const o = t.width / 2 / r,
          a = t.height / 2 / n,
          h = t.x / r + o,
          l = t.y / n + a;
        (s = et.add(s, et.NW)),
          (this.x0 = h + o * et.uX(s)),
          (this.y0 = l + a * et.uY(s)),
          (s = et.add(s, 2)),
          (this.x1 = h + o * et.uX(s)),
          (this.y1 = l + a * et.uY(s)),
          (s = et.add(s, 2)),
          (this.x2 = h + o * et.uX(s)),
          (this.y2 = l + a * et.uY(s)),
          (s = et.add(s, 2)),
          (this.x3 = h + o * et.uX(s)),
          (this.y3 = l + a * et.uY(s));
      } else
        (this.x0 = t.x / r),
          (this.y0 = t.y / n),
          (this.x1 = (t.x + t.width) / r),
          (this.y1 = t.y / n),
          (this.x2 = (t.x + t.width) / r),
          (this.y2 = (t.y + t.height) / n),
          (this.x3 = t.x / r),
          (this.y3 = (t.y + t.height) / n);
      (this.uvsFloat32[0] = this.x0),
        (this.uvsFloat32[1] = this.y0),
        (this.uvsFloat32[2] = this.x1),
        (this.uvsFloat32[3] = this.y1),
        (this.uvsFloat32[4] = this.x2),
        (this.uvsFloat32[5] = this.y2),
        (this.uvsFloat32[6] = this.x3),
        (this.uvsFloat32[7] = this.y3);
    }
    toString() {
      return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
    }
  }
  const Do = new xr();
  function os(e) {
    (e.destroy = function () {}),
      (e.on = function () {}),
      (e.once = function () {}),
      (e.emit = function () {});
  }
  class D extends Le {
    constructor(t, i, s, r, n, o) {
      if (
        (super(),
        (this.noFrame = !1),
        i || ((this.noFrame = !0), (i = new W(0, 0, 1, 1))),
        t instanceof D && (t = t.baseTexture),
        (this.baseTexture = t),
        (this._frame = i),
        (this.trim = r),
        (this.valid = !1),
        (this._uvs = Do),
        (this.uvMatrix = null),
        (this.orig = s || i),
        (this._rotate = Number(n || 0)),
        n === !0)
      )
        this._rotate = 2;
      else if (this._rotate % 2 !== 0)
        throw new Error(
          'attempt to use diamond-shaped UVs. If you are sure, set rotation manually'
        );
      (this.defaultAnchor = o ? new j(o.x, o.y) : new j(0, 0)),
        (this._updateID = 0),
        (this.textureCacheIds = []),
        t.valid
          ? this.noFrame
            ? t.valid && this.onBaseTextureUpdated(t)
            : (this.frame = i)
          : t.once('loaded', this.onBaseTextureUpdated, this),
        this.noFrame && t.on('update', this.onBaseTextureUpdated, this);
    }
    update() {
      this.baseTexture.resource && this.baseTexture.resource.update();
    }
    onBaseTextureUpdated(t) {
      if (this.noFrame) {
        if (!this.baseTexture.valid) return;
        (this._frame.width = t.width),
          (this._frame.height = t.height),
          (this.valid = !0),
          this.updateUvs();
      } else this.frame = this._frame;
      this.emit('update', this);
    }
    destroy(t) {
      if (this.baseTexture) {
        if (t) {
          const { resource: i } = this.baseTexture;
          (i == null ? void 0 : i.url) && bt[i.url] && D.removeFromCache(i.url),
            this.baseTexture.destroy();
        }
        this.baseTexture.off('loaded', this.onBaseTextureUpdated, this),
          this.baseTexture.off('update', this.onBaseTextureUpdated, this),
          (this.baseTexture = null);
      }
      (this._frame = null),
        (this._uvs = null),
        (this.trim = null),
        (this.orig = null),
        (this.valid = !1),
        D.removeFromCache(this),
        (this.textureCacheIds = null);
    }
    clone() {
      var r;
      const t = this._frame.clone(),
        i = this._frame === this.orig ? t : this.orig.clone(),
        s = new D(
          this.baseTexture,
          !this.noFrame && t,
          i,
          (r = this.trim) == null ? void 0 : r.clone(),
          this.rotate,
          this.defaultAnchor
        );
      return this.noFrame && (s._frame = t), s;
    }
    updateUvs() {
      this._uvs === Do && (this._uvs = new xr()),
        this._uvs.set(this._frame, this.baseTexture, this.rotate),
        this._updateID++;
    }
    static from(t, i = {}, s = B.STRICT_TEXTURE_CACHE) {
      const r = typeof t == 'string';
      let n = null;
      if (r) n = t;
      else if (t instanceof V) {
        if (!t.cacheId) {
          const a = (i == null ? void 0 : i.pixiIdPrefix) || 'pixiid';
          (t.cacheId = `${a}-${de()}`), V.addToCache(t, t.cacheId);
        }
        n = t.cacheId;
      } else {
        if (!t._pixiId) {
          const a = (i == null ? void 0 : i.pixiIdPrefix) || 'pixiid';
          t._pixiId = `${a}_${de()}`;
        }
        n = t._pixiId;
      }
      let o = bt[n];
      if (r && s && !o)
        throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
      return (
        !o && !(t instanceof V)
          ? (i.resolution || (i.resolution = oe(t)),
            (o = new D(new V(t, i))),
            (o.baseTexture.cacheId = n),
            V.addToCache(o.baseTexture, n),
            D.addToCache(o, n))
          : !o && t instanceof V && ((o = new D(t)), D.addToCache(o, n)),
        o
      );
    }
    static fromURL(t, i) {
      const s = Object.assign(
          { autoLoad: !1 },
          i == null ? void 0 : i.resourceOptions
        ),
        r = D.from(t, Object.assign({ resourceOptions: s }, i), !1),
        n = r.baseTexture.resource;
      return r.baseTexture.valid
        ? Promise.resolve(r)
        : n.load().then(() => Promise.resolve(r));
    }
    static fromBuffer(t, i, s, r) {
      return new D(V.fromBuffer(t, i, s, r));
    }
    static fromLoader(t, i, s, r) {
      const n = new V(
          t,
          Object.assign(
            { scaleMode: V.defaultOptions.scaleMode, resolution: oe(i) },
            r
          )
        ),
        { resource: o } = n;
      o instanceof vr && (o.url = i);
      const a = new D(n);
      return (
        s || (s = i),
        V.addToCache(a.baseTexture, s),
        D.addToCache(a, s),
        s !== i && (V.addToCache(a.baseTexture, i), D.addToCache(a, i)),
        a.baseTexture.valid
          ? Promise.resolve(a)
          : new Promise((h) => {
              a.baseTexture.once('loaded', () => h(a));
            })
      );
    }
    static addToCache(t, i) {
      i &&
        (t.textureCacheIds.includes(i) || t.textureCacheIds.push(i),
        bt[i] &&
          bt[i] !== t &&
          console.warn(
            `Texture added to the cache with an id [${i}] that already had an entry`
          ),
        (bt[i] = t));
    }
    static removeFromCache(t) {
      if (typeof t == 'string') {
        const i = bt[t];
        if (i) {
          const s = i.textureCacheIds.indexOf(t);
          return s > -1 && i.textureCacheIds.splice(s, 1), delete bt[t], i;
        }
      } else if (t != null && t.textureCacheIds) {
        for (let i = 0; i < t.textureCacheIds.length; ++i)
          bt[t.textureCacheIds[i]] === t && delete bt[t.textureCacheIds[i]];
        return (t.textureCacheIds.length = 0), t;
      }
      return null;
    }
    get resolution() {
      return this.baseTexture.resolution;
    }
    get frame() {
      return this._frame;
    }
    set frame(t) {
      (this._frame = t), (this.noFrame = !1);
      const { x: i, y: s, width: r, height: n } = t,
        o = i + r > this.baseTexture.width,
        a = s + n > this.baseTexture.height;
      if (o || a) {
        const h = o && a ? 'and' : 'or',
          l = `X: ${i} + ${r} = ${i + r} > ${this.baseTexture.width}`,
          c = `Y: ${s} + ${n} = ${s + n} > ${this.baseTexture.height}`;
        throw new Error(
          `Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${c}`
        );
      }
      (this.valid = r && n && this.baseTexture.valid),
        !this.trim && !this.rotate && (this.orig = t),
        this.valid && this.updateUvs();
    }
    get rotate() {
      return this._rotate;
    }
    set rotate(t) {
      (this._rotate = t), this.valid && this.updateUvs();
    }
    get width() {
      return this.orig.width;
    }
    get height() {
      return this.orig.height;
    }
    castToBaseTexture() {
      return this.baseTexture;
    }
    static get EMPTY() {
      return (
        D._EMPTY ||
          ((D._EMPTY = new D(new V())), os(D._EMPTY), os(D._EMPTY.baseTexture)),
        D._EMPTY
      );
    }
    static get WHITE() {
      if (!D._WHITE) {
        const t = B.ADAPTER.createCanvas(16, 16),
          i = t.getContext('2d');
        (t.width = 16),
          (t.height = 16),
          (i.fillStyle = 'white'),
          i.fillRect(0, 0, 16, 16),
          (D._WHITE = new D(V.from(t))),
          os(D._WHITE),
          os(D._WHITE.baseTexture);
      }
      return D._WHITE;
    }
  }
  class ce extends D {
    constructor(t, i) {
      super(t, i),
        (this.valid = !0),
        (this.filterFrame = null),
        (this.filterPoolKey = null),
        this.updateUvs();
    }
    get framebuffer() {
      return this.baseTexture.framebuffer;
    }
    get multisample() {
      return this.framebuffer.multisample;
    }
    set multisample(t) {
      this.framebuffer.multisample = t;
    }
    resize(t, i, s = !0) {
      const r = this.baseTexture.resolution,
        n = Math.round(t * r) / r,
        o = Math.round(i * r) / r;
      (this.valid = n > 0 && o > 0),
        (this._frame.width = this.orig.width = n),
        (this._frame.height = this.orig.height = o),
        s && this.baseTexture.resize(n, o),
        this.updateUvs();
    }
    setResolution(t) {
      const { baseTexture: i } = this;
      i.resolution !== t &&
        (i.setResolution(t), this.resize(i.width, i.height, !1));
    }
    static create(t) {
      return new ce(new yr(t));
    }
  }
  class Tr {
    constructor(t) {
      (this.texturePool = {}),
        (this.textureOptions = t || {}),
        (this.enableFullScreen = !1),
        (this._pixelsWidth = 0),
        (this._pixelsHeight = 0);
    }
    createTexture(t, i, s = rt.NONE) {
      const r = new yr(
        Object.assign(
          { width: t, height: i, resolution: 1, multisample: s },
          this.textureOptions
        )
      );
      return new ce(r);
    }
    getOptimalTexture(t, i, s = 1, r = rt.NONE) {
      let n;
      (t = Math.ceil(t * s - 1e-6)),
        (i = Math.ceil(i * s - 1e-6)),
        !this.enableFullScreen ||
        t !== this._pixelsWidth ||
        i !== this._pixelsHeight
          ? ((t = ri(t)),
            (i = ri(i)),
            (n = (((t & 65535) << 16) | (i & 65535)) >>> 0),
            r > 1 && (n += r * 4294967296))
          : (n = r > 1 ? -r : -1),
        this.texturePool[n] || (this.texturePool[n] = []);
      let o = this.texturePool[n].pop();
      return (
        o || (o = this.createTexture(t, i, r)),
        (o.filterPoolKey = n),
        o.setResolution(s),
        o
      );
    }
    getFilterTexture(t, i, s) {
      const r = this.getOptimalTexture(
        t.width,
        t.height,
        i || t.resolution,
        s || rt.NONE
      );
      return (r.filterFrame = t.filterFrame), r;
    }
    returnTexture(t) {
      const i = t.filterPoolKey;
      (t.filterFrame = null), this.texturePool[i].push(t);
    }
    returnFilterTexture(t) {
      this.returnTexture(t);
    }
    clear(t) {
      if (((t = t !== !1), t))
        for (const i in this.texturePool) {
          const s = this.texturePool[i];
          if (s) for (let r = 0; r < s.length; r++) s[r].destroy(!0);
        }
      this.texturePool = {};
    }
    setScreenSize(t) {
      if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight)) {
        this.enableFullScreen = t.width > 0 && t.height > 0;
        for (const i in this.texturePool) {
          if (!(Number(i) < 0)) continue;
          const s = this.texturePool[i];
          if (s) for (let r = 0; r < s.length; r++) s[r].destroy(!0);
          this.texturePool[i] = [];
        }
        (this._pixelsWidth = t.width), (this._pixelsHeight = t.height);
      }
    }
  }
  Tr.SCREEN_KEY = -1;
  class Fo extends ae {
    constructor() {
      super(),
        this.addAttribute(
          'aVertexPosition',
          new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
        ).addIndex([0, 1, 3, 2]);
    }
  }
  class br extends ae {
    constructor() {
      super(),
        (this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
        (this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
        (this.vertexBuffer = new ot(this.vertices)),
        (this.uvBuffer = new ot(this.uvs)),
        this.addAttribute('aVertexPosition', this.vertexBuffer)
          .addAttribute('aTextureCoord', this.uvBuffer)
          .addIndex([0, 1, 2, 0, 2, 3]);
    }
    map(t, i) {
      let s = 0,
        r = 0;
      return (
        (this.uvs[0] = s),
        (this.uvs[1] = r),
        (this.uvs[2] = s + i.width / t.width),
        (this.uvs[3] = r),
        (this.uvs[4] = s + i.width / t.width),
        (this.uvs[5] = r + i.height / t.height),
        (this.uvs[6] = s),
        (this.uvs[7] = r + i.height / t.height),
        (s = i.x),
        (r = i.y),
        (this.vertices[0] = s),
        (this.vertices[1] = r),
        (this.vertices[2] = s + i.width),
        (this.vertices[3] = r),
        (this.vertices[4] = s + i.width),
        (this.vertices[5] = r + i.height),
        (this.vertices[6] = s),
        (this.vertices[7] = r + i.height),
        this.invalidate(),
        this
      );
    }
    invalidate() {
      return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
    }
  }
  class No {
    constructor() {
      (this.renderTexture = null),
        (this.target = null),
        (this.legacy = !1),
        (this.resolution = 1),
        (this.multisample = rt.NONE),
        (this.sourceFrame = new W()),
        (this.destinationFrame = new W()),
        (this.bindingSourceFrame = new W()),
        (this.bindingDestinationFrame = new W()),
        (this.filters = []),
        (this.transform = null);
    }
    clear() {
      (this.target = null), (this.filters = null), (this.renderTexture = null);
    }
  }
  const as = [new j(), new j(), new j(), new j()],
    Er = new J();
  class wr {
    constructor(t) {
      (this.renderer = t),
        (this.defaultFilterStack = [{}]),
        (this.texturePool = new Tr()),
        (this.statePool = []),
        (this.quad = new Fo()),
        (this.quadUv = new br()),
        (this.tempRect = new W()),
        (this.activeState = {}),
        (this.globalUniforms = new Nt(
          {
            outputFrame: new W(),
            inputSize: new Float32Array(4),
            inputPixel: new Float32Array(4),
            inputClamp: new Float32Array(4),
            resolution: 1,
            filterArea: new Float32Array(4),
            filterClamp: new Float32Array(4),
          },
          !0
        )),
        (this.forceClear = !1),
        (this.useMaxPadding = !1);
    }
    init() {
      this.texturePool.setScreenSize(this.renderer.view);
    }
    push(t, i) {
      var p, g;
      const s = this.renderer,
        r = this.defaultFilterStack,
        n = this.statePool.pop() || new No(),
        o = this.renderer.renderTexture;
      let a = i[0].resolution,
        h = i[0].multisample,
        l = i[0].padding,
        c = i[0].autoFit,
        u = (p = i[0].legacy) != null ? p : !0;
      for (let _ = 1; _ < i.length; _++) {
        const v = i[_];
        (a = Math.min(a, v.resolution)),
          (h = Math.min(h, v.multisample)),
          (l = this.useMaxPadding ? Math.max(l, v.padding) : l + v.padding),
          (c = c && v.autoFit),
          (u = u || ((g = v.legacy) != null ? g : !0));
      }
      r.length === 1 && (this.defaultFilterStack[0].renderTexture = o.current),
        r.push(n),
        (n.resolution = a),
        (n.multisample = h),
        (n.legacy = u),
        (n.target = t),
        n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
        n.sourceFrame.pad(l);
      const d = this.tempRect.copyFrom(o.sourceFrame);
      s.projection.transform &&
        this.transformAABB(Er.copyFrom(s.projection.transform).invert(), d),
        c
          ? (n.sourceFrame.fit(d),
            (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) &&
              ((n.sourceFrame.width = 0), (n.sourceFrame.height = 0)))
          : n.sourceFrame.intersects(d) ||
            ((n.sourceFrame.width = 0), (n.sourceFrame.height = 0)),
        this.roundFrame(
          n.sourceFrame,
          o.current ? o.current.resolution : s.resolution,
          o.sourceFrame,
          o.destinationFrame,
          s.projection.transform
        ),
        (n.renderTexture = this.getOptimalFilterTexture(
          n.sourceFrame.width,
          n.sourceFrame.height,
          a,
          h
        )),
        (n.filters = i),
        (n.destinationFrame.width = n.renderTexture.width),
        (n.destinationFrame.height = n.renderTexture.height);
      const f = this.tempRect;
      (f.x = 0),
        (f.y = 0),
        (f.width = n.sourceFrame.width),
        (f.height = n.sourceFrame.height),
        (n.renderTexture.filterFrame = n.sourceFrame),
        n.bindingSourceFrame.copyFrom(o.sourceFrame),
        n.bindingDestinationFrame.copyFrom(o.destinationFrame),
        (n.transform = s.projection.transform),
        (s.projection.transform = null),
        o.bind(n.renderTexture, n.sourceFrame, f),
        s.framebuffer.clear(0, 0, 0, 0);
    }
    pop() {
      const t = this.defaultFilterStack,
        i = t.pop(),
        s = i.filters;
      this.activeState = i;
      const r = this.globalUniforms.uniforms;
      (r.outputFrame = i.sourceFrame), (r.resolution = i.resolution);
      const n = r.inputSize,
        o = r.inputPixel,
        a = r.inputClamp;
      if (
        ((n[0] = i.destinationFrame.width),
        (n[1] = i.destinationFrame.height),
        (n[2] = 1 / n[0]),
        (n[3] = 1 / n[1]),
        (o[0] = Math.round(n[0] * i.resolution)),
        (o[1] = Math.round(n[1] * i.resolution)),
        (o[2] = 1 / o[0]),
        (o[3] = 1 / o[1]),
        (a[0] = 0.5 * o[2]),
        (a[1] = 0.5 * o[3]),
        (a[2] = i.sourceFrame.width * n[2] - 0.5 * o[2]),
        (a[3] = i.sourceFrame.height * n[3] - 0.5 * o[3]),
        i.legacy)
      ) {
        const l = r.filterArea;
        (l[0] = i.destinationFrame.width),
          (l[1] = i.destinationFrame.height),
          (l[2] = i.sourceFrame.x),
          (l[3] = i.sourceFrame.y),
          (r.filterClamp = r.inputClamp);
      }
      this.globalUniforms.update();
      const h = t[t.length - 1];
      if ((this.renderer.framebuffer.blit(), s.length === 1))
        s[0].apply(this, i.renderTexture, h.renderTexture, Xt.BLEND, i),
          this.returnFilterTexture(i.renderTexture);
      else {
        let l = i.renderTexture,
          c = this.getOptimalFilterTexture(l.width, l.height, i.resolution);
        c.filterFrame = l.filterFrame;
        let u = 0;
        for (u = 0; u < s.length - 1; ++u) {
          u === 1 &&
            i.multisample > 1 &&
            ((c = this.getOptimalFilterTexture(
              l.width,
              l.height,
              i.resolution
            )),
            (c.filterFrame = l.filterFrame)),
            s[u].apply(this, l, c, Xt.CLEAR, i);
          const d = l;
          (l = c), (c = d);
        }
        s[u].apply(this, l, h.renderTexture, Xt.BLEND, i),
          u > 1 &&
            i.multisample > 1 &&
            this.returnFilterTexture(i.renderTexture),
          this.returnFilterTexture(l),
          this.returnFilterTexture(c);
      }
      i.clear(), this.statePool.push(i);
    }
    bindAndClear(t, i = Xt.CLEAR) {
      const { renderTexture: s, state: r } = this.renderer;
      if (
        (t ===
        this.defaultFilterStack[this.defaultFilterStack.length - 1]
          .renderTexture
          ? (this.renderer.projection.transform = this.activeState.transform)
          : (this.renderer.projection.transform = null),
        t != null && t.filterFrame)
      ) {
        const o = this.tempRect;
        (o.x = 0),
          (o.y = 0),
          (o.width = t.filterFrame.width),
          (o.height = t.filterFrame.height),
          s.bind(t, t.filterFrame, o);
      } else
        t !==
        this.defaultFilterStack[this.defaultFilterStack.length - 1]
          .renderTexture
          ? s.bind(t)
          : this.renderer.renderTexture.bind(
              t,
              this.activeState.bindingSourceFrame,
              this.activeState.bindingDestinationFrame
            );
      const n = r.stateId & 1 || this.forceClear;
      (i === Xt.CLEAR || (i === Xt.BLIT && n)) &&
        this.renderer.framebuffer.clear(0, 0, 0, 0);
    }
    applyFilter(t, i, s, r) {
      const n = this.renderer;
      n.state.set(t.state),
        this.bindAndClear(s, r),
        (t.uniforms.uSampler = i),
        (t.uniforms.filterGlobals = this.globalUniforms),
        n.shader.bind(t),
        (t.legacy = !!t.program.attributeData.aTextureCoord),
        t.legacy
          ? (this.quadUv.map(i._frame, i.filterFrame),
            n.geometry.bind(this.quadUv),
            n.geometry.draw(Gt.TRIANGLES))
          : (n.geometry.bind(this.quad), n.geometry.draw(Gt.TRIANGLE_STRIP));
    }
    calculateSpriteMatrix(t, i) {
      const { sourceFrame: s, destinationFrame: r } = this.activeState,
        { orig: n } = i._texture,
        o = t.set(r.width, 0, 0, r.height, s.x, s.y),
        a = i.worldTransform.copyTo(J.TEMP_MATRIX);
      return (
        a.invert(),
        o.prepend(a),
        o.scale(1 / n.width, 1 / n.height),
        o.translate(i.anchor.x, i.anchor.y),
        o
      );
    }
    destroy() {
      (this.renderer = null), this.texturePool.clear(!1);
    }
    getOptimalFilterTexture(t, i, s = 1, r = rt.NONE) {
      return this.texturePool.getOptimalTexture(t, i, s, r);
    }
    getFilterTexture(t, i, s) {
      if (typeof t == 'number') {
        const n = t;
        (t = i), (i = n);
      }
      t = t || this.activeState.renderTexture;
      const r = this.texturePool.getOptimalTexture(
        t.width,
        t.height,
        i || t.resolution,
        s || rt.NONE
      );
      return (r.filterFrame = t.filterFrame), r;
    }
    returnFilterTexture(t) {
      this.texturePool.returnTexture(t);
    }
    emptyPool() {
      this.texturePool.clear(!0);
    }
    resize() {
      this.texturePool.setScreenSize(this.renderer.view);
    }
    transformAABB(t, i) {
      const s = as[0],
        r = as[1],
        n = as[2],
        o = as[3];
      s.set(i.left, i.top),
        r.set(i.left, i.bottom),
        n.set(i.right, i.top),
        o.set(i.right, i.bottom),
        t.apply(s, s),
        t.apply(r, r),
        t.apply(n, n),
        t.apply(o, o);
      const a = Math.min(s.x, r.x, n.x, o.x),
        h = Math.min(s.y, r.y, n.y, o.y),
        l = Math.max(s.x, r.x, n.x, o.x),
        c = Math.max(s.y, r.y, n.y, o.y);
      (i.x = a), (i.y = h), (i.width = l - a), (i.height = c - h);
    }
    roundFrame(t, i, s, r, n) {
      if (!(t.width <= 0 || t.height <= 0 || s.width <= 0 || s.height <= 0)) {
        if (n) {
          const { a: o, b: a, c: h, d: l } = n;
          if (
            (Math.abs(a) > 1e-4 || Math.abs(h) > 1e-4) &&
            (Math.abs(o) > 1e-4 || Math.abs(l) > 1e-4)
          )
            return;
        }
        (n = n ? Er.copyFrom(n) : Er.identity()),
          n
            .translate(-s.x, -s.y)
            .scale(r.width / s.width, r.height / s.height)
            .translate(r.x, r.y),
          this.transformAABB(n, t),
          t.ceil(i),
          this.transformAABB(n.invert(), t);
      }
    }
  }
  (wr.extension = { type: P.RendererSystem, name: 'filter' }), U.add(wr);
  class Oo {
    constructor(t) {
      (this.framebuffer = t),
        (this.stencil = null),
        (this.dirtyId = -1),
        (this.dirtyFormat = -1),
        (this.dirtySize = -1),
        (this.multisample = rt.NONE),
        (this.msaaBuffer = null),
        (this.blitFramebuffer = null),
        (this.mipLevel = 0);
    }
  }
  const Id = new W();
  class Sr {
    constructor(t) {
      (this.renderer = t),
        (this.managedFramebuffers = []),
        (this.unknownFramebuffer = new ns(10, 10)),
        (this.msaaSamples = null);
    }
    contextChange() {
      this.disposeAll(!0);
      const t = (this.gl = this.renderer.gl);
      if (
        ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
        (this.current = this.unknownFramebuffer),
        (this.viewport = new W()),
        (this.hasMRT = !0),
        (this.writeDepthTexture = !0),
        this.renderer.context.webGLVersion === 1)
      ) {
        let i = this.renderer.context.extensions.drawBuffers,
          s = this.renderer.context.extensions.depthTexture;
        B.PREFER_ENV === tt.WEBGL_LEGACY && ((i = null), (s = null)),
          i
            ? (t.drawBuffers = (r) => i.drawBuffersWEBGL(r))
            : ((this.hasMRT = !1), (t.drawBuffers = () => {})),
          s || (this.writeDepthTexture = !1);
      } else
        this.msaaSamples = t.getInternalformatParameter(
          t.RENDERBUFFER,
          t.RGBA8,
          t.SAMPLES
        );
    }
    bind(t, i, s = 0) {
      const { gl: r } = this;
      if (t) {
        const n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
        this.current !== t &&
          ((this.current = t), r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer)),
          n.mipLevel !== s && (t.dirtyId++, t.dirtyFormat++, (n.mipLevel = s)),
          n.dirtyId !== t.dirtyId &&
            ((n.dirtyId = t.dirtyId),
            n.dirtyFormat !== t.dirtyFormat
              ? ((n.dirtyFormat = t.dirtyFormat),
                (n.dirtySize = t.dirtySize),
                this.updateFramebuffer(t, s))
              : n.dirtySize !== t.dirtySize &&
                ((n.dirtySize = t.dirtySize), this.resizeFramebuffer(t)));
        for (let o = 0; o < t.colorTextures.length; o++) {
          const a = t.colorTextures[o];
          this.renderer.texture.unbind(a.parentTextureArray || a);
        }
        if (
          (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), i)
        ) {
          const o = i.width >> s,
            a = i.height >> s,
            h = o / i.width;
          this.setViewport(i.x * h, i.y * h, o, a);
        } else {
          const o = t.width >> s,
            a = t.height >> s;
          this.setViewport(0, 0, o, a);
        }
      } else
        this.current &&
          ((this.current = null), r.bindFramebuffer(r.FRAMEBUFFER, null)),
          i
            ? this.setViewport(i.x, i.y, i.width, i.height)
            : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
    }
    setViewport(t, i, s, r) {
      const n = this.viewport;
      (t = Math.round(t)),
        (i = Math.round(i)),
        (s = Math.round(s)),
        (r = Math.round(r)),
        (n.width !== s || n.height !== r || n.x !== t || n.y !== i) &&
          ((n.x = t),
          (n.y = i),
          (n.width = s),
          (n.height = r),
          this.gl.viewport(t, i, s, r));
    }
    get size() {
      return this.current
        ? { x: 0, y: 0, width: this.current.width, height: this.current.height }
        : {
            x: 0,
            y: 0,
            width: this.renderer.width,
            height: this.renderer.height,
          };
    }
    clear(t, i, s, r, n = wt.COLOR | wt.DEPTH) {
      const { gl: o } = this;
      o.clearColor(t, i, s, r), o.clear(n);
    }
    initFramebuffer(t) {
      const { gl: i } = this,
        s = new Oo(i.createFramebuffer());
      return (
        (s.multisample = this.detectSamples(t.multisample)),
        (t.glFramebuffers[this.CONTEXT_UID] = s),
        this.managedFramebuffers.push(t),
        t.disposeRunner.add(this),
        s
      );
    }
    resizeFramebuffer(t) {
      const { gl: i } = this,
        s = t.glFramebuffers[this.CONTEXT_UID];
      s.stencil &&
        (i.bindRenderbuffer(i.RENDERBUFFER, s.stencil),
        s.msaaBuffer
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              s.multisample,
              i.DEPTH24_STENCIL8,
              t.width,
              t.height
            )
          : i.renderbufferStorage(
              i.RENDERBUFFER,
              i.DEPTH_STENCIL,
              t.width,
              t.height
            ));
      const r = t.colorTextures;
      let n = r.length;
      i.drawBuffers || (n = Math.min(n, 1));
      for (let o = 0; o < n; o++) {
        const a = r[o],
          h = a.parentTextureArray || a;
        this.renderer.texture.bind(h, 0),
          o === 0 &&
            s.msaaBuffer &&
            (i.bindRenderbuffer(i.RENDERBUFFER, s.msaaBuffer),
            i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              s.multisample,
              h._glTextures[this.CONTEXT_UID].internalFormat,
              t.width,
              t.height
            ));
      }
      t.depthTexture &&
        this.writeDepthTexture &&
        this.renderer.texture.bind(t.depthTexture, 0);
    }
    updateFramebuffer(t, i) {
      const { gl: s } = this,
        r = t.glFramebuffers[this.CONTEXT_UID],
        n = t.colorTextures;
      let o = n.length;
      s.drawBuffers || (o = Math.min(o, 1)),
        r.multisample > 1 && this.canMultisampleFramebuffer(t)
          ? (r.msaaBuffer = r.msaaBuffer || s.createRenderbuffer())
          : r.msaaBuffer &&
            (s.deleteRenderbuffer(r.msaaBuffer),
            (r.msaaBuffer = null),
            r.blitFramebuffer &&
              (r.blitFramebuffer.dispose(), (r.blitFramebuffer = null)));
      const a = [];
      for (let h = 0; h < o; h++) {
        const l = n[h],
          c = l.parentTextureArray || l;
        this.renderer.texture.bind(c, 0),
          h === 0 && r.msaaBuffer
            ? (s.bindRenderbuffer(s.RENDERBUFFER, r.msaaBuffer),
              s.renderbufferStorageMultisample(
                s.RENDERBUFFER,
                r.multisample,
                c._glTextures[this.CONTEXT_UID].internalFormat,
                t.width,
                t.height
              ),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.COLOR_ATTACHMENT0,
                s.RENDERBUFFER,
                r.msaaBuffer
              ))
            : (s.framebufferTexture2D(
                s.FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + h,
                l.target,
                c._glTextures[this.CONTEXT_UID].texture,
                i
              ),
              a.push(s.COLOR_ATTACHMENT0 + h));
      }
      if (
        (a.length > 1 && s.drawBuffers(a),
        t.depthTexture && this.writeDepthTexture)
      ) {
        const l = t.depthTexture;
        this.renderer.texture.bind(l, 0),
          s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            l._glTextures[this.CONTEXT_UID].texture,
            i
          );
      }
      (t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture)
        ? ((r.stencil = r.stencil || s.createRenderbuffer()),
          s.bindRenderbuffer(s.RENDERBUFFER, r.stencil),
          r.msaaBuffer
            ? s.renderbufferStorageMultisample(
                s.RENDERBUFFER,
                r.multisample,
                s.DEPTH24_STENCIL8,
                t.width,
                t.height
              )
            : s.renderbufferStorage(
                s.RENDERBUFFER,
                s.DEPTH_STENCIL,
                t.width,
                t.height
              ),
          s.framebufferRenderbuffer(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.RENDERBUFFER,
            r.stencil
          ))
        : r.stencil && (s.deleteRenderbuffer(r.stencil), (r.stencil = null));
    }
    canMultisampleFramebuffer(t) {
      return (
        this.renderer.context.webGLVersion !== 1 &&
        t.colorTextures.length <= 1 &&
        !t.depthTexture
      );
    }
    detectSamples(t) {
      const { msaaSamples: i } = this;
      let s = rt.NONE;
      if (t <= 1 || i === null) return s;
      for (let r = 0; r < i.length; r++)
        if (i[r] <= t) {
          s = i[r];
          break;
        }
      return s === 1 && (s = rt.NONE), s;
    }
    blit(t, i, s) {
      const { current: r, renderer: n, gl: o, CONTEXT_UID: a } = this;
      if (n.context.webGLVersion !== 2 || !r) return;
      const h = r.glFramebuffers[a];
      if (!h) return;
      if (!t) {
        if (!h.msaaBuffer) return;
        const c = r.colorTextures[0];
        if (!c) return;
        h.blitFramebuffer ||
          ((h.blitFramebuffer = new ns(r.width, r.height)),
          h.blitFramebuffer.addColorTexture(0, c)),
          (t = h.blitFramebuffer),
          t.colorTextures[0] !== c &&
            ((t.colorTextures[0] = c), t.dirtyId++, t.dirtyFormat++),
          (t.width !== r.width || t.height !== r.height) &&
            ((t.width = r.width),
            (t.height = r.height),
            t.dirtyId++,
            t.dirtySize++);
      }
      i || ((i = Id), (i.width = r.width), (i.height = r.height)), s || (s = i);
      const l = i.width === s.width && i.height === s.height;
      this.bind(t),
        o.bindFramebuffer(o.READ_FRAMEBUFFER, h.framebuffer),
        o.blitFramebuffer(
          i.left,
          i.top,
          i.right,
          i.bottom,
          s.left,
          s.top,
          s.right,
          s.bottom,
          o.COLOR_BUFFER_BIT,
          l ? o.NEAREST : o.LINEAR
        );
    }
    disposeFramebuffer(t, i) {
      const s = t.glFramebuffers[this.CONTEXT_UID],
        r = this.gl;
      if (!s) return;
      delete t.glFramebuffers[this.CONTEXT_UID];
      const n = this.managedFramebuffers.indexOf(t);
      n >= 0 && this.managedFramebuffers.splice(n, 1),
        t.disposeRunner.remove(this),
        i ||
          (r.deleteFramebuffer(s.framebuffer),
          s.msaaBuffer && r.deleteRenderbuffer(s.msaaBuffer),
          s.stencil && r.deleteRenderbuffer(s.stencil)),
        s.blitFramebuffer && s.blitFramebuffer.dispose();
    }
    disposeAll(t) {
      const i = this.managedFramebuffers;
      this.managedFramebuffers = [];
      for (let s = 0; s < i.length; s++) this.disposeFramebuffer(i[s], t);
    }
    forceStencil() {
      const t = this.current;
      if (!t) return;
      const i = t.glFramebuffers[this.CONTEXT_UID];
      if (!i || i.stencil) return;
      t.stencil = !0;
      const s = t.width,
        r = t.height,
        n = this.gl,
        o = n.createRenderbuffer();
      n.bindRenderbuffer(n.RENDERBUFFER, o),
        i.msaaBuffer
          ? n.renderbufferStorageMultisample(
              n.RENDERBUFFER,
              i.multisample,
              n.DEPTH24_STENCIL8,
              s,
              r
            )
          : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, s, r),
        (i.stencil = o),
        n.framebufferRenderbuffer(
          n.FRAMEBUFFER,
          n.DEPTH_STENCIL_ATTACHMENT,
          n.RENDERBUFFER,
          o
        );
    }
    reset() {
      (this.current = this.unknownFramebuffer), (this.viewport = new W());
    }
    destroy() {
      this.renderer = null;
    }
  }
  (Sr.extension = { type: P.RendererSystem, name: 'framebuffer' }), U.add(Sr);
  const Ar = { 5126: 4, 5123: 2, 5121: 1 };
  class Rr {
    constructor(t) {
      (this.renderer = t),
        (this._activeGeometry = null),
        (this._activeVao = null),
        (this.hasVao = !0),
        (this.hasInstance = !0),
        (this.canUseUInt32ElementIndex = !1),
        (this.managedGeometries = {});
    }
    contextChange() {
      this.disposeAll(!0);
      const t = (this.gl = this.renderer.gl),
        i = this.renderer.context;
      if (
        ((this.CONTEXT_UID = this.renderer.CONTEXT_UID), i.webGLVersion !== 2)
      ) {
        let s = this.renderer.context.extensions.vertexArrayObject;
        B.PREFER_ENV === tt.WEBGL_LEGACY && (s = null),
          s
            ? ((t.createVertexArray = () => s.createVertexArrayOES()),
              (t.bindVertexArray = (r) => s.bindVertexArrayOES(r)),
              (t.deleteVertexArray = (r) => s.deleteVertexArrayOES(r)))
            : ((this.hasVao = !1),
              (t.createVertexArray = () => null),
              (t.bindVertexArray = () => null),
              (t.deleteVertexArray = () => null));
      }
      if (i.webGLVersion !== 2) {
        const s = t.getExtension('ANGLE_instanced_arrays');
        s
          ? ((t.vertexAttribDivisor = (r, n) =>
              s.vertexAttribDivisorANGLE(r, n)),
            (t.drawElementsInstanced = (r, n, o, a, h) =>
              s.drawElementsInstancedANGLE(r, n, o, a, h)),
            (t.drawArraysInstanced = (r, n, o, a) =>
              s.drawArraysInstancedANGLE(r, n, o, a)))
          : (this.hasInstance = !1);
      }
      this.canUseUInt32ElementIndex =
        i.webGLVersion === 2 || !!i.extensions.uint32ElementIndex;
    }
    bind(t, i) {
      i = i || this.renderer.shader.shader;
      const { gl: s } = this;
      let r = t.glVertexArrayObjects[this.CONTEXT_UID],
        n = !1;
      r ||
        ((this.managedGeometries[t.id] = t),
        t.disposeRunner.add(this),
        (t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}),
        (n = !0));
      const o = r[i.program.id] || this.initGeometryVao(t, i, n);
      (this._activeGeometry = t),
        this._activeVao !== o &&
          ((this._activeVao = o),
          this.hasVao ? s.bindVertexArray(o) : this.activateVao(t, i.program)),
        this.updateBuffers();
    }
    reset() {
      this.unbind();
    }
    updateBuffers() {
      const t = this._activeGeometry,
        i = this.renderer.buffer;
      for (let s = 0; s < t.buffers.length; s++) {
        const r = t.buffers[s];
        i.update(r);
      }
    }
    checkCompatibility(t, i) {
      const s = t.attributes,
        r = i.attributeData;
      for (const n in r)
        if (!s[n])
          throw new Error(
            `shader and geometry incompatible, geometry missing the "${n}" attribute`
          );
    }
    getSignature(t, i) {
      const s = t.attributes,
        r = i.attributeData,
        n = ['g', t.id];
      for (const o in s) r[o] && n.push(o, r[o].location);
      return n.join('-');
    }
    initGeometryVao(t, i, s = !0) {
      const r = this.gl,
        n = this.CONTEXT_UID,
        o = this.renderer.buffer,
        a = i.program;
      a.glPrograms[n] || this.renderer.shader.generateProgram(i),
        this.checkCompatibility(t, a);
      const h = this.getSignature(t, a),
        l = t.glVertexArrayObjects[this.CONTEXT_UID];
      let c = l[h];
      if (c) return (l[a.id] = c), c;
      const u = t.buffers,
        d = t.attributes,
        f = {},
        p = {};
      for (const g in u) (f[g] = 0), (p[g] = 0);
      for (const g in d)
        !d[g].size && a.attributeData[g]
          ? (d[g].size = a.attributeData[g].size)
          : d[g].size ||
            console.warn(
              `PIXI Geometry attribute '${g}' size cannot be determined (likely the bound shader does not have the attribute)`
            ),
          (f[d[g].buffer] += d[g].size * Ar[d[g].type]);
      for (const g in d) {
        const _ = d[g],
          v = _.size;
        _.stride === void 0 &&
          (f[_.buffer] === v * Ar[_.type]
            ? (_.stride = 0)
            : (_.stride = f[_.buffer])),
          _.start === void 0 &&
            ((_.start = p[_.buffer]), (p[_.buffer] += v * Ar[_.type]));
      }
      (c = r.createVertexArray()), r.bindVertexArray(c);
      for (let g = 0; g < u.length; g++) {
        const _ = u[g];
        o.bind(_), s && _._glBuffers[n].refCount++;
      }
      return (
        this.activateVao(t, a),
        (l[a.id] = c),
        (l[h] = c),
        r.bindVertexArray(null),
        o.unbind(Vt.ARRAY_BUFFER),
        c
      );
    }
    disposeGeometry(t, i) {
      var a;
      if (!this.managedGeometries[t.id]) return;
      delete this.managedGeometries[t.id];
      const s = t.glVertexArrayObjects[this.CONTEXT_UID],
        r = this.gl,
        n = t.buffers,
        o = (a = this.renderer) == null ? void 0 : a.buffer;
      if ((t.disposeRunner.remove(this), !!s)) {
        if (o)
          for (let h = 0; h < n.length; h++) {
            const l = n[h]._glBuffers[this.CONTEXT_UID];
            l && (l.refCount--, l.refCount === 0 && !i && o.dispose(n[h], i));
          }
        if (!i) {
          for (const h in s)
            if (h[0] === 'g') {
              const l = s[h];
              this._activeVao === l && this.unbind(), r.deleteVertexArray(l);
            }
        }
        delete t.glVertexArrayObjects[this.CONTEXT_UID];
      }
    }
    disposeAll(t) {
      const i = Object.keys(this.managedGeometries);
      for (let s = 0; s < i.length; s++)
        this.disposeGeometry(this.managedGeometries[i[s]], t);
    }
    activateVao(t, i) {
      const s = this.gl,
        r = this.CONTEXT_UID,
        n = this.renderer.buffer,
        o = t.buffers,
        a = t.attributes;
      t.indexBuffer && n.bind(t.indexBuffer);
      let h = null;
      for (const l in a) {
        const c = a[l],
          u = o[c.buffer],
          d = u._glBuffers[r];
        if (i.attributeData[l]) {
          h !== d && (n.bind(u), (h = d));
          const f = i.attributeData[l].location;
          if (
            (s.enableVertexAttribArray(f),
            s.vertexAttribPointer(
              f,
              c.size,
              c.type || s.FLOAT,
              c.normalized,
              c.stride,
              c.start
            ),
            c.instance)
          )
            if (this.hasInstance) s.vertexAttribDivisor(f, c.divisor);
            else
              throw new Error(
                'geometry error, GPU Instancing is not supported on this device'
              );
        }
      }
    }
    draw(t, i, s, r) {
      const { gl: n } = this,
        o = this._activeGeometry;
      if (o.indexBuffer) {
        const a = o.indexBuffer.data.BYTES_PER_ELEMENT,
          h = a === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
        a === 2 || (a === 4 && this.canUseUInt32ElementIndex)
          ? o.instanced
            ? n.drawElementsInstanced(
                t,
                i || o.indexBuffer.data.length,
                h,
                (s || 0) * a,
                r || 1
              )
            : n.drawElements(t, i || o.indexBuffer.data.length, h, (s || 0) * a)
          : console.warn('unsupported index buffer type: uint32');
      } else
        o.instanced
          ? n.drawArraysInstanced(t, s, i || o.getSize(), r || 1)
          : n.drawArrays(t, s, i || o.getSize());
      return this;
    }
    unbind() {
      this.gl.bindVertexArray(null),
        (this._activeVao = null),
        (this._activeGeometry = null);
    }
    destroy() {
      this.renderer = null;
    }
  }
  (Rr.extension = { type: P.RendererSystem, name: 'geometry' }), U.add(Rr);
  const Lo = new J();
  class hs {
    constructor(t, i) {
      (this._texture = t),
        (this.mapCoord = new J()),
        (this.uClampFrame = new Float32Array(4)),
        (this.uClampOffset = new Float32Array(2)),
        (this._textureID = -1),
        (this._updateID = 0),
        (this.clampOffset = 0),
        (this.clampMargin = typeof i == 'undefined' ? 0.5 : i),
        (this.isSimple = !1);
    }
    get texture() {
      return this._texture;
    }
    set texture(t) {
      (this._texture = t), (this._textureID = -1);
    }
    multiplyUvs(t, i) {
      i === void 0 && (i = t);
      const s = this.mapCoord;
      for (let r = 0; r < t.length; r += 2) {
        const n = t[r],
          o = t[r + 1];
        (i[r] = n * s.a + o * s.c + s.tx),
          (i[r + 1] = n * s.b + o * s.d + s.ty);
      }
      return i;
    }
    update(t) {
      const i = this._texture;
      if (!i || !i.valid || (!t && this._textureID === i._updateID)) return !1;
      (this._textureID = i._updateID), this._updateID++;
      const s = i._uvs;
      this.mapCoord.set(
        s.x1 - s.x0,
        s.y1 - s.y0,
        s.x3 - s.x0,
        s.y3 - s.y0,
        s.x0,
        s.y0
      );
      const r = i.orig,
        n = i.trim;
      n &&
        (Lo.set(
          r.width / n.width,
          0,
          0,
          r.height / n.height,
          -n.x / n.width,
          -n.y / n.height
        ),
        this.mapCoord.append(Lo));
      const o = i.baseTexture,
        a = this.uClampFrame,
        h = this.clampMargin / o.resolution,
        l = this.clampOffset;
      return (
        (a[0] = (i._frame.x + h + l) / o.width),
        (a[1] = (i._frame.y + h + l) / o.height),
        (a[2] = (i._frame.x + i._frame.width - h + l) / o.width),
        (a[3] = (i._frame.y + i._frame.height - h + l) / o.height),
        (this.uClampOffset[0] = l / o.realWidth),
        (this.uClampOffset[1] = l / o.realHeight),
        (this.isSimple =
          i._frame.width === o.width &&
          i._frame.height === o.height &&
          i.rotate === 0),
        !0
      );
    }
  }
  var Pd = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,
    Md = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
  class Uo extends _t {
    constructor(t, i, s) {
      let r = null;
      typeof t != 'string' &&
        i === void 0 &&
        s === void 0 &&
        ((r = t), (t = void 0), (i = void 0), (s = void 0)),
        super(t || Md, i || Pd, s),
        (this.maskSprite = r),
        (this.maskMatrix = new J());
    }
    get maskSprite() {
      return this._maskSprite;
    }
    set maskSprite(t) {
      (this._maskSprite = t),
        this._maskSprite && (this._maskSprite.renderable = !1);
    }
    apply(t, i, s, r) {
      const n = this._maskSprite,
        o = n._texture;
      !o.valid ||
        (o.uvMatrix || (o.uvMatrix = new hs(o, 0)),
        o.uvMatrix.update(),
        (this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1),
        (this.uniforms.mask = o),
        (this.uniforms.otherMatrix = t
          .calculateSpriteMatrix(this.maskMatrix, n)
          .prepend(o.uvMatrix.mapCoord)),
        (this.uniforms.alpha = n.worldAlpha),
        (this.uniforms.maskClamp = o.uvMatrix.uClampFrame),
        t.applyFilter(this, i, s, r));
    }
  }
  class ko {
    constructor(t = null) {
      (this.type = ht.NONE),
        (this.autoDetect = !0),
        (this.maskObject = t || null),
        (this.pooled = !1),
        (this.isMaskData = !0),
        (this.resolution = null),
        (this.multisample = _t.defaultMultisample),
        (this.enabled = !0),
        (this.colorMask = 15),
        (this._filters = null),
        (this._stencilCounter = 0),
        (this._scissorCounter = 0),
        (this._scissorRect = null),
        (this._scissorRectLocal = null),
        (this._colorMask = 15),
        (this._target = null);
    }
    get filter() {
      return this._filters ? this._filters[0] : null;
    }
    set filter(t) {
      t
        ? this._filters
          ? (this._filters[0] = t)
          : (this._filters = [t])
        : (this._filters = null);
    }
    reset() {
      this.pooled &&
        ((this.maskObject = null),
        (this.type = ht.NONE),
        (this.autoDetect = !0)),
        (this._target = null),
        (this._scissorRectLocal = null);
    }
    copyCountersOrReset(t) {
      t
        ? ((this._stencilCounter = t._stencilCounter),
          (this._scissorCounter = t._scissorCounter),
          (this._scissorRect = t._scissorRect))
        : ((this._stencilCounter = 0),
          (this._scissorCounter = 0),
          (this._scissorRect = null));
    }
  }
  class Cr {
    constructor(t) {
      (this.renderer = t),
        (this.enableScissor = !0),
        (this.alphaMaskPool = []),
        (this.maskDataPool = []),
        (this.maskStack = []),
        (this.alphaMaskIndex = 0);
    }
    setMaskStack(t) {
      (this.maskStack = t),
        this.renderer.scissor.setMaskStack(t),
        this.renderer.stencil.setMaskStack(t);
    }
    push(t, i) {
      let s = i;
      if (!s.isMaskData) {
        const n = this.maskDataPool.pop() || new ko();
        (n.pooled = !0), (n.maskObject = i), (s = n);
      }
      const r =
        this.maskStack.length !== 0
          ? this.maskStack[this.maskStack.length - 1]
          : null;
      if (
        (s.copyCountersOrReset(r),
        (s._colorMask = r ? r._colorMask : 15),
        s.autoDetect && this.detect(s),
        (s._target = t),
        s.type !== ht.SPRITE && this.maskStack.push(s),
        s.enabled)
      )
        switch (s.type) {
          case ht.SCISSOR:
            this.renderer.scissor.push(s);
            break;
          case ht.STENCIL:
            this.renderer.stencil.push(s);
            break;
          case ht.SPRITE:
            s.copyCountersOrReset(null), this.pushSpriteMask(s);
            break;
          case ht.COLOR:
            this.pushColorMask(s);
            break;
          default:
            break;
        }
      s.type === ht.SPRITE && this.maskStack.push(s);
    }
    pop(t) {
      const i = this.maskStack.pop();
      if (!(!i || i._target !== t)) {
        if (i.enabled)
          switch (i.type) {
            case ht.SCISSOR:
              this.renderer.scissor.pop(i);
              break;
            case ht.STENCIL:
              this.renderer.stencil.pop(i.maskObject);
              break;
            case ht.SPRITE:
              this.popSpriteMask(i);
              break;
            case ht.COLOR:
              this.popColorMask(i);
              break;
            default:
              break;
          }
        if (
          (i.reset(),
          i.pooled && this.maskDataPool.push(i),
          this.maskStack.length !== 0)
        ) {
          const s = this.maskStack[this.maskStack.length - 1];
          s.type === ht.SPRITE &&
            s._filters &&
            (s._filters[0].maskSprite = s.maskObject);
        }
      }
    }
    detect(t) {
      const i = t.maskObject;
      i
        ? i.isSprite
          ? (t.type = ht.SPRITE)
          : this.enableScissor && this.renderer.scissor.testScissor(t)
          ? (t.type = ht.SCISSOR)
          : (t.type = ht.STENCIL)
        : (t.type = ht.COLOR);
    }
    pushSpriteMask(t) {
      var c, u;
      const { maskObject: i } = t,
        s = t._target;
      let r = t._filters;
      r ||
        ((r = this.alphaMaskPool[this.alphaMaskIndex]),
        r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new Uo()]));
      const n = this.renderer,
        o = n.renderTexture;
      let a, h;
      if (o.current) {
        const d = o.current;
        (a = t.resolution || d.resolution),
          (h = (c = t.multisample) != null ? c : d.multisample);
      } else
        (a = t.resolution || n.resolution),
          (h = (u = t.multisample) != null ? u : n.multisample);
      (r[0].resolution = a), (r[0].multisample = h), (r[0].maskSprite = i);
      const l = s.filterArea;
      (s.filterArea = i.getBounds(!0)),
        n.filter.push(s, r),
        (s.filterArea = l),
        t._filters || this.alphaMaskIndex++;
    }
    popSpriteMask(t) {
      this.renderer.filter.pop(),
        t._filters
          ? (t._filters[0].maskSprite = null)
          : (this.alphaMaskIndex--,
            (this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null));
    }
    pushColorMask(t) {
      const i = t._colorMask,
        s = (t._colorMask = i & t.colorMask);
      s !== i &&
        this.renderer.gl.colorMask(
          (s & 1) !== 0,
          (s & 2) !== 0,
          (s & 4) !== 0,
          (s & 8) !== 0
        );
    }
    popColorMask(t) {
      const i = t._colorMask,
        s =
          this.maskStack.length > 0
            ? this.maskStack[this.maskStack.length - 1]._colorMask
            : 15;
      s !== i &&
        this.renderer.gl.colorMask(
          (s & 1) !== 0,
          (s & 2) !== 0,
          (s & 4) !== 0,
          (s & 8) !== 0
        );
    }
    destroy() {
      this.renderer = null;
    }
  }
  (Cr.extension = { type: P.RendererSystem, name: 'mask' }), U.add(Cr);
  class Go {
    constructor(t) {
      (this.renderer = t), (this.maskStack = []), (this.glConst = 0);
    }
    getStackLength() {
      return this.maskStack.length;
    }
    setMaskStack(t) {
      const { gl: i } = this.renderer,
        s = this.getStackLength();
      this.maskStack = t;
      const r = this.getStackLength();
      r !== s &&
        (r === 0
          ? i.disable(this.glConst)
          : (i.enable(this.glConst), this._useCurrent()));
    }
    _useCurrent() {}
    destroy() {
      (this.renderer = null), (this.maskStack = null);
    }
  }
  const Ho = new J(),
    Xo = [],
    ls = class extends Go {
      constructor(e) {
        super(e),
          (this.glConst = B.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST);
      }
      getStackLength() {
        const e = this.maskStack[this.maskStack.length - 1];
        return e ? e._scissorCounter : 0;
      }
      calcScissorRect(e) {
        var o;
        if (e._scissorRectLocal) return;
        const t = e._scissorRect,
          { maskObject: i } = e,
          { renderer: s } = this,
          r = s.renderTexture,
          n = i.getBounds(!0, (o = Xo.pop()) != null ? o : new W());
        this.roundFrameToPixels(
          n,
          r.current ? r.current.resolution : s.resolution,
          r.sourceFrame,
          r.destinationFrame,
          s.projection.transform
        ),
          t && n.fit(t),
          (e._scissorRectLocal = n);
      }
      static isMatrixRotated(e) {
        if (!e) return !1;
        const { a: t, b: i, c: s, d: r } = e;
        return (
          (Math.abs(i) > 1e-4 || Math.abs(s) > 1e-4) &&
          (Math.abs(t) > 1e-4 || Math.abs(r) > 1e-4)
        );
      }
      testScissor(e) {
        const { maskObject: t } = e;
        if (
          !t.isFastRect ||
          !t.isFastRect() ||
          ls.isMatrixRotated(t.worldTransform) ||
          ls.isMatrixRotated(this.renderer.projection.transform)
        )
          return !1;
        this.calcScissorRect(e);
        const i = e._scissorRectLocal;
        return i.width > 0 && i.height > 0;
      }
      roundFrameToPixels(e, t, i, s, r) {
        ls.isMatrixRotated(r) ||
          ((r = r ? Ho.copyFrom(r) : Ho.identity()),
          r
            .translate(-i.x, -i.y)
            .scale(s.width / i.width, s.height / i.height)
            .translate(s.x, s.y),
          this.renderer.filter.transformAABB(r, e),
          e.fit(s),
          (e.x = Math.round(e.x * t)),
          (e.y = Math.round(e.y * t)),
          (e.width = Math.round(e.width * t)),
          (e.height = Math.round(e.height * t)));
      }
      push(e) {
        e._scissorRectLocal || this.calcScissorRect(e);
        const { gl: t } = this.renderer;
        e._scissorRect || t.enable(t.SCISSOR_TEST),
          e._scissorCounter++,
          (e._scissorRect = e._scissorRectLocal),
          this._useCurrent();
      }
      pop(e) {
        const { gl: t } = this.renderer;
        e && Xo.push(e._scissorRectLocal),
          this.getStackLength() > 0
            ? this._useCurrent()
            : t.disable(t.SCISSOR_TEST);
      }
      _useCurrent() {
        const e = this.maskStack[this.maskStack.length - 1]._scissorRect;
        let t;
        this.renderer.renderTexture.current
          ? (t = e.y)
          : (t = this.renderer.height - e.height - e.y),
          this.renderer.gl.scissor(e.x, t, e.width, e.height);
      }
    };
  let Ir = ls;
  (Ir.extension = { type: P.RendererSystem, name: 'scissor' }), U.add(Ir);
  class Pr extends Go {
    constructor(t) {
      super(t),
        (this.glConst = B.ADAPTER.getWebGLRenderingContext().STENCIL_TEST);
    }
    getStackLength() {
      const t = this.maskStack[this.maskStack.length - 1];
      return t ? t._stencilCounter : 0;
    }
    push(t) {
      const i = t.maskObject,
        { gl: s } = this.renderer,
        r = t._stencilCounter;
      r === 0 &&
        (this.renderer.framebuffer.forceStencil(),
        s.clearStencil(0),
        s.clear(s.STENCIL_BUFFER_BIT),
        s.enable(s.STENCIL_TEST)),
        t._stencilCounter++;
      const n = t._colorMask;
      n !== 0 && ((t._colorMask = 0), s.colorMask(!1, !1, !1, !1)),
        s.stencilFunc(s.EQUAL, r, 4294967295),
        s.stencilOp(s.KEEP, s.KEEP, s.INCR),
        (i.renderable = !0),
        i.render(this.renderer),
        this.renderer.batch.flush(),
        (i.renderable = !1),
        n !== 0 &&
          ((t._colorMask = n),
          s.colorMask(
            (n & 1) !== 0,
            (n & 2) !== 0,
            (n & 4) !== 0,
            (n & 8) !== 0
          )),
        this._useCurrent();
    }
    pop(t) {
      const i = this.renderer.gl;
      if (this.getStackLength() === 0) i.disable(i.STENCIL_TEST);
      else {
        const s =
            this.maskStack.length !== 0
              ? this.maskStack[this.maskStack.length - 1]
              : null,
          r = s ? s._colorMask : 15;
        r !== 0 && ((s._colorMask = 0), i.colorMask(!1, !1, !1, !1)),
          i.stencilOp(i.KEEP, i.KEEP, i.DECR),
          (t.renderable = !0),
          t.render(this.renderer),
          this.renderer.batch.flush(),
          (t.renderable = !1),
          r !== 0 &&
            ((s._colorMask = r),
            i.colorMask(
              (r & 1) !== 0,
              (r & 2) !== 0,
              (r & 4) !== 0,
              (r & 8) !== 0
            )),
          this._useCurrent();
      }
    }
    _useCurrent() {
      const t = this.renderer.gl;
      t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295),
        t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
    }
  }
  (Pr.extension = { type: P.RendererSystem, name: 'stencil' }), U.add(Pr);
  class Mr {
    constructor(t) {
      (this.renderer = t),
        (this.plugins = {}),
        Object.defineProperties(this.plugins, {
          extract: {
            enumerable: !1,
            get() {
              return (
                $(
                  '7.0.0',
                  'renderer.plugins.extract has moved to renderer.extract'
                ),
                t.extract
              );
            },
          },
          prepare: {
            enumerable: !1,
            get() {
              return (
                $(
                  '7.0.0',
                  'renderer.plugins.prepare has moved to renderer.prepare'
                ),
                t.prepare
              );
            },
          },
          interaction: {
            enumerable: !1,
            get() {
              return (
                $(
                  '7.0.0',
                  'renderer.plugins.interaction has been deprecated, use renderer.events'
                ),
                t.events
              );
            },
          },
        });
    }
    init(t) {
      for (const i in t) this.plugins[i] = new t[i](this.renderer);
    }
    destroy() {
      for (const t in this.plugins)
        this.plugins[t].destroy(), (this.plugins[t] = null);
    }
  }
  (Mr.extension = {
    type: [P.RendererSystem, P.CanvasRendererSystem],
    name: '_plugin',
  }),
    U.add(Mr);
  class Br {
    constructor(t) {
      (this.renderer = t),
        (this.destinationFrame = null),
        (this.sourceFrame = null),
        (this.defaultFrame = null),
        (this.projectionMatrix = new J()),
        (this.transform = null);
    }
    update(t, i, s, r) {
      (this.destinationFrame = t || this.destinationFrame || this.defaultFrame),
        (this.sourceFrame = i || this.sourceFrame || t),
        this.calculateProjection(this.destinationFrame, this.sourceFrame, s, r),
        this.transform && this.projectionMatrix.append(this.transform);
      const n = this.renderer;
      (n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix),
        n.globalUniforms.update(),
        n.shader.shader &&
          n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
    }
    calculateProjection(t, i, s, r) {
      const n = this.projectionMatrix,
        o = r ? -1 : 1;
      n.identity(),
        (n.a = (1 / i.width) * 2),
        (n.d = o * ((1 / i.height) * 2)),
        (n.tx = -1 - i.x * n.a),
        (n.ty = -o - i.y * n.d);
    }
    setTransform(t) {}
    destroy() {
      this.renderer = null;
    }
  }
  (Br.extension = { type: P.RendererSystem, name: 'projection' }), U.add(Br);
  const Bd = new ai();
  class Dr {
    constructor(t) {
      (this.renderer = t), (this._tempMatrix = new J());
    }
    generateTexture(t, i) {
      const h = i || {},
        { region: s } = h,
        r = Mn(h, ['region']),
        n = s || t.getLocalBounds(null, !0);
      n.width === 0 && (n.width = 1), n.height === 0 && (n.height = 1);
      const o = ce.create(re({ width: n.width, height: n.height }, r));
      (this._tempMatrix.tx = -n.x), (this._tempMatrix.ty = -n.y);
      const a = t.transform;
      return (
        (t.transform = Bd),
        this.renderer.render(t, {
          renderTexture: o,
          transform: this._tempMatrix,
          skipUpdateTransform: !!t.parent,
          blit: !0,
        }),
        (t.transform = a),
        o
      );
    }
    destroy() {}
  }
  (Dr.extension = {
    type: [P.RendererSystem, P.CanvasRendererSystem],
    name: 'textureGenerator',
  }),
    U.add(Dr);
  const Pe = new W(),
    ui = new W();
  class Fr {
    constructor(t) {
      (this.renderer = t),
        (this.defaultMaskStack = []),
        (this.current = null),
        (this.sourceFrame = new W()),
        (this.destinationFrame = new W()),
        (this.viewportFrame = new W());
    }
    bind(t = null, i, s) {
      const r = this.renderer;
      this.current = t;
      let n, o, a;
      t
        ? ((n = t.baseTexture),
          (a = n.resolution),
          i ||
            ((Pe.width = t.frame.width),
            (Pe.height = t.frame.height),
            (i = Pe)),
          s ||
            ((ui.x = t.frame.x),
            (ui.y = t.frame.y),
            (ui.width = i.width),
            (ui.height = i.height),
            (s = ui)),
          (o = n.framebuffer))
        : ((a = r.resolution),
          i ||
            ((Pe.width = r._view.screen.width),
            (Pe.height = r._view.screen.height),
            (i = Pe)),
          s || ((s = Pe), (s.width = i.width), (s.height = i.height)));
      const h = this.viewportFrame;
      (h.x = s.x * a),
        (h.y = s.y * a),
        (h.width = s.width * a),
        (h.height = s.height * a),
        t || (h.y = r.view.height - (h.y + h.height)),
        h.ceil(),
        this.renderer.framebuffer.bind(o, h),
        this.renderer.projection.update(s, i, a, !o),
        t
          ? this.renderer.mask.setMaskStack(n.maskStack)
          : this.renderer.mask.setMaskStack(this.defaultMaskStack),
        this.sourceFrame.copyFrom(i),
        this.destinationFrame.copyFrom(s);
    }
    clear(t, i) {
      this.current
        ? (t = t || this.current.baseTexture.clearColor)
        : (t = t || this.renderer.background.colorRgba);
      const s = this.destinationFrame,
        r = this.current
          ? this.current.baseTexture
          : this.renderer._view.screen,
        n = s.width !== r.width || s.height !== r.height;
      if (n) {
        let { x: o, y: a, width: h, height: l } = this.viewportFrame;
        (o = Math.round(o)),
          (a = Math.round(a)),
          (h = Math.round(h)),
          (l = Math.round(l)),
          this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
          this.renderer.gl.scissor(o, a, h, l);
      }
      this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], i),
        n && this.renderer.scissor.pop();
    }
    resize() {
      this.bind(null);
    }
    reset() {
      this.bind(null);
    }
    destroy() {
      this.renderer = null;
    }
  }
  (Fr.extension = { type: P.RendererSystem, name: 'renderTexture' }), U.add(Fr);
  class Dd {}
  class Vo {
    constructor(t, i) {
      (this.program = t),
        (this.uniformData = i),
        (this.uniformGroups = {}),
        (this.uniformDirtyGroups = {}),
        (this.uniformBufferBindings = {});
    }
    destroy() {
      (this.uniformData = null),
        (this.uniformGroups = null),
        (this.uniformDirtyGroups = null),
        (this.uniformBufferBindings = null),
        (this.program = null);
    }
  }
  function Fd(e, t) {
    const i = {},
      s = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
    for (let r = 0; r < s; r++) {
      const n = t.getActiveAttrib(e, r);
      if (n.name.startsWith('gl_')) continue;
      const o = Co(t, n.type),
        a = {
          type: o,
          name: n.name,
          size: Ao(o),
          location: t.getAttribLocation(e, n.name),
        };
      i[n.name] = a;
    }
    return i;
  }
  function Nd(e, t) {
    const i = {},
      s = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let r = 0; r < s; r++) {
      const n = t.getActiveUniform(e, r),
        o = n.name.replace(/\[.*?\]$/, ''),
        a = !!n.name.match(/\[.*?\]$/),
        h = Co(t, n.type);
      i[o] = {
        name: o,
        index: r,
        type: h,
        size: n.size,
        isArray: a,
        value: bo(h, n.size),
      };
    }
    return i;
  }
  function zo(e, t) {
    var h;
    const i = To(e, e.VERTEX_SHADER, t.vertexSrc),
      s = To(e, e.FRAGMENT_SHADER, t.fragmentSrc),
      r = e.createProgram();
    e.attachShader(r, i), e.attachShader(r, s);
    const n = (h = t.extra) == null ? void 0 : h.transformFeedbackVaryings;
    if (
      (n &&
        (typeof e.transformFeedbackVaryings != 'function'
          ? console.warn(
              'TransformFeedback is not supported but TransformFeedbackVaryings are given.'
            )
          : e.transformFeedbackVaryings(
              r,
              n.names,
              n.bufferMode === 'separate'
                ? e.SEPARATE_ATTRIBS
                : e.INTERLEAVED_ATTRIBS
            )),
      e.linkProgram(r),
      e.getProgramParameter(r, e.LINK_STATUS) || yd(e, r, i, s),
      (t.attributeData = Fd(r, e)),
      (t.uniformData = Nd(r, e)),
      !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc))
    ) {
      const l = Object.keys(t.attributeData);
      l.sort((c, u) => (c > u ? 1 : -1));
      for (let c = 0; c < l.length; c++)
        (t.attributeData[l[c]].location = c), e.bindAttribLocation(r, c, l[c]);
      e.linkProgram(r);
    }
    e.deleteShader(i), e.deleteShader(s);
    const o = {};
    for (const l in t.uniformData) {
      const c = t.uniformData[l];
      o[l] = {
        location: e.getUniformLocation(r, l),
        value: bo(c.type, c.size),
      };
    }
    return new Vo(r, o);
  }
  function Od(e, t, i, s, r) {
    i.buffer.update(r);
  }
  const Ld = {
      float: `
        data[offset] = v;
    `,
      vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
      vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
      vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
      mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
      mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
      mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `,
    },
    Wo = {
      float: 4,
      vec2: 8,
      vec3: 12,
      vec4: 16,
      int: 4,
      ivec2: 8,
      ivec3: 12,
      ivec4: 16,
      uint: 4,
      uvec2: 8,
      uvec3: 12,
      uvec4: 16,
      bool: 4,
      bvec2: 8,
      bvec3: 12,
      bvec4: 16,
      mat2: 16 * 2,
      mat3: 16 * 3,
      mat4: 16 * 4,
    };
  function jo(e) {
    const t = e.map((n) => ({ data: n, offset: 0, dataLen: 0, dirty: 0 }));
    let i = 0,
      s = 0,
      r = 0;
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      if (
        ((i = Wo[o.data.type]),
        o.data.size > 1 && (i = Math.max(i, 16) * o.data.size),
        (o.dataLen = i),
        s % i !== 0 && s < 16)
      ) {
        const a = (s % i) % 16;
        (s += a), (r += a);
      }
      s + i > 16
        ? ((r = Math.ceil(r / 16) * 16), (o.offset = r), (r += i), (s = i))
        : ((o.offset = r), (s += i), (r += i));
    }
    return (r = Math.ceil(r / 16) * 16), { uboElements: t, size: r };
  }
  function Yo(e, t) {
    const i = [];
    for (const s in e) t[s] && i.push(t[s]);
    return i.sort((s, r) => s.index - r.index), i;
  }
  function $o(e, t) {
    if (!e.autoManage) return { size: 0, syncFunc: Od };
    const i = Yo(e.uniforms, t),
      { uboElements: s, size: r } = jo(i),
      n = [
        `
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `,
      ];
    for (let o = 0; o < s.length; o++) {
      const a = s[o],
        h = e.uniforms[a.data.name],
        l = a.data.name;
      let c = !1;
      for (let u = 0; u < Ie.length; u++) {
        const d = Ie[u];
        if (d.codeUbo && d.test(a.data, h)) {
          n.push(`offset = ${a.offset / 4};`, Ie[u].codeUbo(a.data.name, h)),
            (c = !0);
          break;
        }
      }
      if (!c)
        if (a.data.size > 1) {
          const u = Ao(a.data.type),
            d = Math.max(Wo[a.data.type] / 16, 1),
            f = u / d,
            p = (4 - (f % 4)) % 4;
          n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset / 4};

                t = 0;

                for(var i=0; i < ${a.data.size * d}; i++)
                {
                    for(var j = 0; j < ${f}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${p};
                }

                `);
        } else {
          const u = Ld[a.data.type];
          n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset / 4};
                ${u};
                `);
        }
    }
    return (
      n.push(`
       renderer.buffer.update(buffer);
    `),
      {
        size: r,
        syncFunc: new Function(
          'ud',
          'uv',
          'renderer',
          'syncData',
          'buffer',
          n.join(`
`)
        ),
      }
    );
  }
  let Ud = 0;
  const cs = { textureCount: 0, uboCount: 0 };
  class Nr {
    constructor(t) {
      (this.destroyed = !1),
        (this.renderer = t),
        this.systemCheck(),
        (this.gl = null),
        (this.shader = null),
        (this.program = null),
        (this.cache = {}),
        (this._uboCache = {}),
        (this.id = Ud++);
    }
    systemCheck() {
      if (!Po())
        throw new Error(
          'Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.'
        );
    }
    contextChange(t) {
      (this.gl = t), this.reset();
    }
    bind(t, i) {
      t.disposeRunner.add(this),
        (t.uniforms.globals = this.renderer.globalUniforms);
      const s = t.program,
        r = s.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
      return (
        (this.shader = t),
        this.program !== s &&
          ((this.program = s), this.gl.useProgram(r.program)),
        i ||
          ((cs.textureCount = 0),
          (cs.uboCount = 0),
          this.syncUniformGroup(t.uniformGroup, cs)),
        r
      );
    }
    setUniforms(t) {
      const i = this.shader.program,
        s = i.glPrograms[this.renderer.CONTEXT_UID];
      i.syncUniforms(s.uniformData, t, this.renderer);
    }
    syncUniformGroup(t, i) {
      const s = this.getGlProgram();
      (!t.static || t.dirtyId !== s.uniformDirtyGroups[t.id]) &&
        ((s.uniformDirtyGroups[t.id] = t.dirtyId), this.syncUniforms(t, s, i));
    }
    syncUniforms(t, i, s) {
      (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(
        i.uniformData,
        t.uniforms,
        this.renderer,
        s
      );
    }
    createSyncGroups(t) {
      const i = this.getSignature(t, this.shader.program.uniformData, 'u');
      return (
        this.cache[i] ||
          (this.cache[i] = _d(t, this.shader.program.uniformData)),
        (t.syncUniforms[this.shader.program.id] = this.cache[i]),
        t.syncUniforms[this.shader.program.id]
      );
    }
    syncUniformBufferGroup(t, i) {
      const s = this.getGlProgram();
      if (!t.static || t.dirtyId !== 0 || !s.uniformGroups[t.id]) {
        t.dirtyId = 0;
        const r = s.uniformGroups[t.id] || this.createSyncBufferGroup(t, s, i);
        t.buffer.update(),
          r(s.uniformData, t.uniforms, this.renderer, cs, t.buffer);
      }
      this.renderer.buffer.bindBufferBase(t.buffer, s.uniformBufferBindings[i]);
    }
    createSyncBufferGroup(t, i, s) {
      const { gl: r } = this.renderer;
      this.renderer.buffer.bind(t.buffer);
      const n = this.gl.getUniformBlockIndex(i.program, s);
      (i.uniformBufferBindings[s] = this.shader.uniformBindCount),
        r.uniformBlockBinding(i.program, n, this.shader.uniformBindCount),
        this.shader.uniformBindCount++;
      const o = this.getSignature(t, this.shader.program.uniformData, 'ubo');
      let a = this._uboCache[o];
      if (
        (a || (a = this._uboCache[o] = $o(t, this.shader.program.uniformData)),
        t.autoManage)
      ) {
        const h = new Float32Array(a.size / 4);
        t.buffer.update(h);
      }
      return (i.uniformGroups[t.id] = a.syncFunc), i.uniformGroups[t.id];
    }
    getSignature(t, i, s) {
      const r = t.uniforms,
        n = [`${s}-`];
      for (const o in r) n.push(o), i[o] && n.push(i[o].type);
      return n.join('-');
    }
    getGlProgram() {
      return this.shader
        ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID]
        : null;
    }
    generateProgram(t) {
      const i = this.gl,
        s = t.program,
        r = zo(i, s);
      return (s.glPrograms[this.renderer.CONTEXT_UID] = r), r;
    }
    reset() {
      (this.program = null), (this.shader = null);
    }
    disposeShader(t) {
      this.shader === t && (this.shader = null);
    }
    destroy() {
      (this.renderer = null), (this.destroyed = !0);
    }
  }
  (Nr.extension = { type: P.RendererSystem, name: 'shader' }), U.add(Nr);
  class Or {
    constructor(t) {
      this.renderer = t;
    }
    run(t) {
      const i = this.renderer;
      i.emitWithCustomOptions(i.runners.init, t),
        t.hello &&
          console.log(`PixiJS 7.1.4 - ${i.rendererLogId} - https://pixijs.com`),
        i.resize(this.renderer.screen.width, this.renderer.screen.height);
    }
    destroy() {}
  }
  (Or.extension = {
    type: [P.RendererSystem, P.CanvasRendererSystem],
    name: 'startup',
  }),
    U.add(Or);
  function kd(e, t = []) {
    return (
      (t[G.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.ADD] = [e.ONE, e.ONE]),
      (t[G.MULTIPLY] = [
        e.DST_COLOR,
        e.ONE_MINUS_SRC_ALPHA,
        e.ONE,
        e.ONE_MINUS_SRC_ALPHA,
      ]),
      (t[G.SCREEN] = [
        e.ONE,
        e.ONE_MINUS_SRC_COLOR,
        e.ONE,
        e.ONE_MINUS_SRC_ALPHA,
      ]),
      (t[G.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.NONE] = [0, 0]),
      (t[G.NORMAL_NPM] = [
        e.SRC_ALPHA,
        e.ONE_MINUS_SRC_ALPHA,
        e.ONE,
        e.ONE_MINUS_SRC_ALPHA,
      ]),
      (t[G.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE]),
      (t[G.SCREEN_NPM] = [
        e.SRC_ALPHA,
        e.ONE_MINUS_SRC_COLOR,
        e.ONE,
        e.ONE_MINUS_SRC_ALPHA,
      ]),
      (t[G.SRC_IN] = [e.DST_ALPHA, e.ZERO]),
      (t[G.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO]),
      (t[G.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE]),
      (t[G.DST_IN] = [e.ZERO, e.SRC_ALPHA]),
      (t[G.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA]),
      (t[G.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA]),
      (t[G.SUBTRACT] = [
        e.ONE,
        e.ONE,
        e.ONE,
        e.ONE,
        e.FUNC_REVERSE_SUBTRACT,
        e.FUNC_ADD,
      ]),
      t
    );
  }
  const Gd = 0,
    Hd = 1,
    Xd = 2,
    Vd = 3,
    zd = 4,
    Wd = 5,
    Lr = class {
      constructor() {
        (this.gl = null),
          (this.stateId = 0),
          (this.polygonOffset = 0),
          (this.blendMode = G.NONE),
          (this._blendEq = !1),
          (this.map = []),
          (this.map[Gd] = this.setBlend),
          (this.map[Hd] = this.setOffset),
          (this.map[Xd] = this.setCullFace),
          (this.map[Vd] = this.setDepthTest),
          (this.map[zd] = this.setFrontFace),
          (this.map[Wd] = this.setDepthMask),
          (this.checks = []),
          (this.defaultState = new te()),
          (this.defaultState.blend = !0);
      }
      contextChange(e) {
        (this.gl = e),
          (this.blendModes = kd(e)),
          this.set(this.defaultState),
          this.reset();
      }
      set(e) {
        if (((e = e || this.defaultState), this.stateId !== e.data)) {
          let t = this.stateId ^ e.data,
            i = 0;
          for (; t; )
            t & 1 && this.map[i].call(this, !!(e.data & (1 << i))),
              (t = t >> 1),
              i++;
          this.stateId = e.data;
        }
        for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
      }
      forceState(e) {
        e = e || this.defaultState;
        for (let t = 0; t < this.map.length; t++)
          this.map[t].call(this, !!(e.data & (1 << t)));
        for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
        this.stateId = e.data;
      }
      setBlend(e) {
        this.updateCheck(Lr.checkBlendMode, e),
          this.gl[e ? 'enable' : 'disable'](this.gl.BLEND);
      }
      setOffset(e) {
        this.updateCheck(Lr.checkPolygonOffset, e),
          this.gl[e ? 'enable' : 'disable'](this.gl.POLYGON_OFFSET_FILL);
      }
      setDepthTest(e) {
        this.gl[e ? 'enable' : 'disable'](this.gl.DEPTH_TEST);
      }
      setDepthMask(e) {
        this.gl.depthMask(e);
      }
      setCullFace(e) {
        this.gl[e ? 'enable' : 'disable'](this.gl.CULL_FACE);
      }
      setFrontFace(e) {
        this.gl.frontFace(this.gl[e ? 'CW' : 'CCW']);
      }
      setBlendMode(e) {
        if (e === this.blendMode) return;
        this.blendMode = e;
        const t = this.blendModes[e],
          i = this.gl;
        t.length === 2
          ? i.blendFunc(t[0], t[1])
          : i.blendFuncSeparate(t[0], t[1], t[2], t[3]),
          t.length === 6
            ? ((this._blendEq = !0), i.blendEquationSeparate(t[4], t[5]))
            : this._blendEq &&
              ((this._blendEq = !1),
              i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD));
      }
      setPolygonOffset(e, t) {
        this.gl.polygonOffset(e, t);
      }
      reset() {
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
          this.forceState(this.defaultState),
          (this._blendEq = !0),
          (this.blendMode = -1),
          this.setBlendMode(0);
      }
      updateCheck(e, t) {
        const i = this.checks.indexOf(e);
        t && i === -1
          ? this.checks.push(e)
          : !t && i !== -1 && this.checks.splice(i, 1);
      }
      static checkBlendMode(e, t) {
        e.setBlendMode(t.blendMode);
      }
      static checkPolygonOffset(e, t) {
        e.setPolygonOffset(1, t.polygonOffset);
      }
      destroy() {
        this.gl = null;
      }
    };
  let Ur = Lr;
  (Ur.extension = { type: P.RendererSystem, name: 'state' }), U.add(Ur);
  class qo extends Le {
    constructor() {
      super(...arguments), (this.runners = {}), (this._systemsHash = {});
    }
    setup(t) {
      var r;
      this.addRunners(...t.runners);
      const i = ((r = t.priority) != null ? r : []).filter((n) => t.systems[n]),
        s = [...i, ...Object.keys(t.systems).filter((n) => !i.includes(n))];
      for (const n of s) this.addSystem(t.systems[n], n);
    }
    addRunners(...t) {
      t.forEach((i) => {
        this.runners[i] = new It(i);
      });
    }
    addSystem(t, i) {
      const s = new t(this);
      if (this[i]) throw new Error(`Whoops! The name "${i}" is already in use`);
      (this[i] = s), (this._systemsHash[i] = s);
      for (const r in this.runners) this.runners[r].add(s);
      return this;
    }
    emitWithCustomOptions(t, i) {
      const s = Object.keys(this._systemsHash);
      t.items.forEach((r) => {
        const n = s.find((o) => this._systemsHash[o] === r);
        r[t.name](i[n]);
      });
    }
    destroy() {
      Object.values(this.runners).forEach((t) => {
        t.destroy();
      }),
        (this._systemsHash = {});
    }
  }
  const us = class {
    constructor(e) {
      (this.renderer = e),
        (this.count = 0),
        (this.checkCount = 0),
        (this.maxIdle = us.defaultMaxIdle),
        (this.checkCountMax = us.defaultCheckCountMax),
        (this.mode = us.defaultMode);
    }
    postrender() {
      !this.renderer.objectRenderer.renderingToScreen ||
        (this.count++,
        this.mode !== Oi.MANUAL &&
          (this.checkCount++,
          this.checkCount > this.checkCountMax &&
            ((this.checkCount = 0), this.run())));
    }
    run() {
      const e = this.renderer.texture,
        t = e.managedTextures;
      let i = !1;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        !r.framebuffer &&
          this.count - r.touched > this.maxIdle &&
          (e.destroyTexture(r, !0), (t[s] = null), (i = !0));
      }
      if (i) {
        let s = 0;
        for (let r = 0; r < t.length; r++) t[r] !== null && (t[s++] = t[r]);
        t.length = s;
      }
    }
    unload(e) {
      const t = this.renderer.texture,
        i = e._texture;
      i && !i.framebuffer && t.destroyTexture(i);
      for (let s = e.children.length - 1; s >= 0; s--)
        this.unload(e.children[s]);
    }
    destroy() {
      this.renderer = null;
    }
  };
  let Lt = us;
  (Lt.defaultMode = Oi.AUTO),
    (Lt.defaultMaxIdle = 3600),
    (Lt.defaultCheckCountMax = 600),
    (Lt.extension = { type: P.RendererSystem, name: 'textureGC' }),
    U.add(Lt);
  class ds {
    constructor(t) {
      (this.texture = t),
        (this.width = -1),
        (this.height = -1),
        (this.dirtyId = -1),
        (this.dirtyStyleId = -1),
        (this.mipmap = !1),
        (this.wrapMode = 33071),
        (this.type = k.UNSIGNED_BYTE),
        (this.internalFormat = C.RGBA),
        (this.samplerType = 0);
    }
  }
  function jd(e) {
    let t;
    return (
      'WebGL2RenderingContext' in globalThis &&
      e instanceof globalThis.WebGL2RenderingContext
        ? (t = {
            [k.UNSIGNED_BYTE]: {
              [C.RGBA]: e.RGBA8,
              [C.RGB]: e.RGB8,
              [C.RG]: e.RG8,
              [C.RED]: e.R8,
              [C.RGBA_INTEGER]: e.RGBA8UI,
              [C.RGB_INTEGER]: e.RGB8UI,
              [C.RG_INTEGER]: e.RG8UI,
              [C.RED_INTEGER]: e.R8UI,
              [C.ALPHA]: e.ALPHA,
              [C.LUMINANCE]: e.LUMINANCE,
              [C.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA,
            },
            [k.BYTE]: {
              [C.RGBA]: e.RGBA8_SNORM,
              [C.RGB]: e.RGB8_SNORM,
              [C.RG]: e.RG8_SNORM,
              [C.RED]: e.R8_SNORM,
              [C.RGBA_INTEGER]: e.RGBA8I,
              [C.RGB_INTEGER]: e.RGB8I,
              [C.RG_INTEGER]: e.RG8I,
              [C.RED_INTEGER]: e.R8I,
            },
            [k.UNSIGNED_SHORT]: {
              [C.RGBA_INTEGER]: e.RGBA16UI,
              [C.RGB_INTEGER]: e.RGB16UI,
              [C.RG_INTEGER]: e.RG16UI,
              [C.RED_INTEGER]: e.R16UI,
              [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT16,
            },
            [k.SHORT]: {
              [C.RGBA_INTEGER]: e.RGBA16I,
              [C.RGB_INTEGER]: e.RGB16I,
              [C.RG_INTEGER]: e.RG16I,
              [C.RED_INTEGER]: e.R16I,
            },
            [k.UNSIGNED_INT]: {
              [C.RGBA_INTEGER]: e.RGBA32UI,
              [C.RGB_INTEGER]: e.RGB32UI,
              [C.RG_INTEGER]: e.RG32UI,
              [C.RED_INTEGER]: e.R32UI,
              [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT24,
            },
            [k.INT]: {
              [C.RGBA_INTEGER]: e.RGBA32I,
              [C.RGB_INTEGER]: e.RGB32I,
              [C.RG_INTEGER]: e.RG32I,
              [C.RED_INTEGER]: e.R32I,
            },
            [k.FLOAT]: {
              [C.RGBA]: e.RGBA32F,
              [C.RGB]: e.RGB32F,
              [C.RG]: e.RG32F,
              [C.RED]: e.R32F,
              [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT32F,
            },
            [k.HALF_FLOAT]: {
              [C.RGBA]: e.RGBA16F,
              [C.RGB]: e.RGB16F,
              [C.RG]: e.RG16F,
              [C.RED]: e.R16F,
            },
            [k.UNSIGNED_SHORT_5_6_5]: { [C.RGB]: e.RGB565 },
            [k.UNSIGNED_SHORT_4_4_4_4]: { [C.RGBA]: e.RGBA4 },
            [k.UNSIGNED_SHORT_5_5_5_1]: { [C.RGBA]: e.RGB5_A1 },
            [k.UNSIGNED_INT_2_10_10_10_REV]: {
              [C.RGBA]: e.RGB10_A2,
              [C.RGBA_INTEGER]: e.RGB10_A2UI,
            },
            [k.UNSIGNED_INT_10F_11F_11F_REV]: { [C.RGB]: e.R11F_G11F_B10F },
            [k.UNSIGNED_INT_5_9_9_9_REV]: { [C.RGB]: e.RGB9_E5 },
            [k.UNSIGNED_INT_24_8]: { [C.DEPTH_STENCIL]: e.DEPTH24_STENCIL8 },
            [k.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
              [C.DEPTH_STENCIL]: e.DEPTH32F_STENCIL8,
            },
          })
        : (t = {
            [k.UNSIGNED_BYTE]: {
              [C.RGBA]: e.RGBA,
              [C.RGB]: e.RGB,
              [C.ALPHA]: e.ALPHA,
              [C.LUMINANCE]: e.LUMINANCE,
              [C.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA,
            },
            [k.UNSIGNED_SHORT_5_6_5]: { [C.RGB]: e.RGB },
            [k.UNSIGNED_SHORT_4_4_4_4]: { [C.RGBA]: e.RGBA },
            [k.UNSIGNED_SHORT_5_5_5_1]: { [C.RGBA]: e.RGBA },
          }),
      t
    );
  }
  class kr {
    constructor(t) {
      (this.renderer = t),
        (this.boundTextures = []),
        (this.currentLocation = -1),
        (this.managedTextures = []),
        (this._unknownBoundTextures = !1),
        (this.unknownTexture = new V()),
        (this.hasIntegerTextures = !1);
    }
    contextChange() {
      const t = (this.gl = this.renderer.gl);
      (this.CONTEXT_UID = this.renderer.CONTEXT_UID),
        (this.webGLVersion = this.renderer.context.webGLVersion),
        (this.internalFormats = jd(t));
      const i = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
      this.boundTextures.length = i;
      for (let r = 0; r < i; r++) this.boundTextures[r] = null;
      this.emptyTextures = {};
      const s = new ds(t.createTexture());
      t.bindTexture(t.TEXTURE_2D, s.texture),
        t.texImage2D(
          t.TEXTURE_2D,
          0,
          t.RGBA,
          1,
          1,
          0,
          t.RGBA,
          t.UNSIGNED_BYTE,
          new Uint8Array(4)
        ),
        (this.emptyTextures[t.TEXTURE_2D] = s),
        (this.emptyTextures[t.TEXTURE_CUBE_MAP] = new ds(t.createTexture())),
        t.bindTexture(
          t.TEXTURE_CUBE_MAP,
          this.emptyTextures[t.TEXTURE_CUBE_MAP].texture
        );
      for (let r = 0; r < 6; r++)
        t.texImage2D(
          t.TEXTURE_CUBE_MAP_POSITIVE_X + r,
          0,
          t.RGBA,
          1,
          1,
          0,
          t.RGBA,
          t.UNSIGNED_BYTE,
          null
        );
      t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR),
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
      for (let r = 0; r < this.boundTextures.length; r++) this.bind(null, r);
    }
    bind(t, i = 0) {
      const { gl: s } = this;
      if (
        ((t = t == null ? void 0 : t.castToBaseTexture()),
        (t == null ? void 0 : t.valid) && !t.parentTextureArray)
      ) {
        t.touched = this.renderer.textureGC.count;
        const r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
        this.boundTextures[i] !== t &&
          (this.currentLocation !== i &&
            ((this.currentLocation = i), s.activeTexture(s.TEXTURE0 + i)),
          s.bindTexture(t.target, r.texture)),
          r.dirtyId !== t.dirtyId
            ? (this.currentLocation !== i &&
                ((this.currentLocation = i), s.activeTexture(s.TEXTURE0 + i)),
              this.updateTexture(t))
            : r.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t),
          (this.boundTextures[i] = t);
      } else
        this.currentLocation !== i &&
          ((this.currentLocation = i), s.activeTexture(s.TEXTURE0 + i)),
          s.bindTexture(s.TEXTURE_2D, this.emptyTextures[s.TEXTURE_2D].texture),
          (this.boundTextures[i] = null);
    }
    reset() {
      (this._unknownBoundTextures = !0),
        (this.hasIntegerTextures = !1),
        (this.currentLocation = -1);
      for (let t = 0; t < this.boundTextures.length; t++)
        this.boundTextures[t] = this.unknownTexture;
    }
    unbind(t) {
      const { gl: i, boundTextures: s } = this;
      if (this._unknownBoundTextures) {
        this._unknownBoundTextures = !1;
        for (let r = 0; r < s.length; r++)
          s[r] === this.unknownTexture && this.bind(null, r);
      }
      for (let r = 0; r < s.length; r++)
        s[r] === t &&
          (this.currentLocation !== r &&
            (i.activeTexture(i.TEXTURE0 + r), (this.currentLocation = r)),
          i.bindTexture(t.target, this.emptyTextures[t.target].texture),
          (s[r] = null));
    }
    ensureSamplerType(t) {
      const { boundTextures: i, hasIntegerTextures: s, CONTEXT_UID: r } = this;
      if (!!s)
        for (let n = t - 1; n >= 0; --n) {
          const o = i[n];
          o &&
            o._glTextures[r].samplerType !== Ni.FLOAT &&
            this.renderer.texture.unbind(o);
        }
    }
    initTexture(t) {
      const i = new ds(this.gl.createTexture());
      return (
        (i.dirtyId = -1),
        (t._glTextures[this.CONTEXT_UID] = i),
        this.managedTextures.push(t),
        t.on('dispose', this.destroyTexture, this),
        i
      );
    }
    initTextureType(t, i) {
      var s, r;
      (i.internalFormat =
        (r =
          (s = this.internalFormats[t.type]) == null ? void 0 : s[t.format]) !=
        null
          ? r
          : t.format),
        this.webGLVersion === 2 && t.type === k.HALF_FLOAT
          ? (i.type = this.gl.HALF_FLOAT)
          : (i.type = t.type);
    }
    updateTexture(t) {
      var r;
      const i = t._glTextures[this.CONTEXT_UID];
      if (!i) return;
      const s = this.renderer;
      if (
        (this.initTextureType(t, i),
        (r = t.resource) != null && r.upload(s, t, i))
      )
        i.samplerType !== Ni.FLOAT && (this.hasIntegerTextures = !0);
      else {
        const n = t.realWidth,
          o = t.realHeight,
          a = s.gl;
        (i.width !== n || i.height !== o || i.dirtyId < 0) &&
          ((i.width = n),
          (i.height = o),
          a.texImage2D(
            t.target,
            0,
            i.internalFormat,
            n,
            o,
            0,
            t.format,
            i.type,
            null
          ));
      }
      t.dirtyStyleId !== i.dirtyStyleId && this.updateTextureStyle(t),
        (i.dirtyId = t.dirtyId);
    }
    destroyTexture(t, i) {
      const { gl: s } = this;
      if (
        ((t = t.castToBaseTexture()),
        t._glTextures[this.CONTEXT_UID] &&
          (this.unbind(t),
          s.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
          t.off('dispose', this.destroyTexture, this),
          delete t._glTextures[this.CONTEXT_UID],
          !i))
      ) {
        const r = this.managedTextures.indexOf(t);
        r !== -1 && be(this.managedTextures, r, 1);
      }
    }
    updateTextureStyle(t) {
      var s;
      const i = t._glTextures[this.CONTEXT_UID];
      !i ||
        ((t.mipmap === Ht.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo
          ? (i.mipmap = !1)
          : (i.mipmap = t.mipmap >= 1),
        this.webGLVersion !== 2 && !t.isPowerOfTwo
          ? (i.wrapMode = Qt.CLAMP)
          : (i.wrapMode = t.wrapMode),
        ((s = t.resource) != null && s.style(this.renderer, t, i)) ||
          this.setStyle(t, i),
        (i.dirtyStyleId = t.dirtyStyleId));
    }
    setStyle(t, i) {
      const s = this.gl;
      if (
        (i.mipmap && t.mipmap !== Ht.ON_MANUAL && s.generateMipmap(t.target),
        s.texParameteri(t.target, s.TEXTURE_WRAP_S, i.wrapMode),
        s.texParameteri(t.target, s.TEXTURE_WRAP_T, i.wrapMode),
        i.mipmap)
      ) {
        s.texParameteri(
          t.target,
          s.TEXTURE_MIN_FILTER,
          t.scaleMode === Zt.LINEAR
            ? s.LINEAR_MIPMAP_LINEAR
            : s.NEAREST_MIPMAP_NEAREST
        );
        const r = this.renderer.context.extensions.anisotropicFiltering;
        if (r && t.anisotropicLevel > 0 && t.scaleMode === Zt.LINEAR) {
          const n = Math.min(
            t.anisotropicLevel,
            s.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
          );
          s.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, n);
        }
      } else
        s.texParameteri(
          t.target,
          s.TEXTURE_MIN_FILTER,
          t.scaleMode === Zt.LINEAR ? s.LINEAR : s.NEAREST
        );
      s.texParameteri(
        t.target,
        s.TEXTURE_MAG_FILTER,
        t.scaleMode === Zt.LINEAR ? s.LINEAR : s.NEAREST
      );
    }
    destroy() {
      this.renderer = null;
    }
  }
  (kr.extension = { type: P.RendererSystem, name: 'texture' }), U.add(kr);
  class Gr {
    constructor(t) {
      this.renderer = t;
    }
    contextChange() {
      (this.gl = this.renderer.gl),
        (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
    }
    bind(t) {
      const { gl: i, CONTEXT_UID: s } = this,
        r = t._glTransformFeedbacks[s] || this.createGLTransformFeedback(t);
      i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, r);
    }
    unbind() {
      const { gl: t } = this;
      t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null);
    }
    beginTransformFeedback(t, i) {
      const { gl: s, renderer: r } = this;
      i && r.shader.bind(i), s.beginTransformFeedback(t);
    }
    endTransformFeedback() {
      const { gl: t } = this;
      t.endTransformFeedback();
    }
    createGLTransformFeedback(t) {
      const { gl: i, renderer: s, CONTEXT_UID: r } = this,
        n = i.createTransformFeedback();
      (t._glTransformFeedbacks[r] = n),
        i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, n);
      for (let o = 0; o < t.buffers.length; o++) {
        const a = t.buffers[o];
        !a ||
          (s.buffer.update(a),
          a._glBuffers[r].refCount++,
          i.bindBufferBase(
            i.TRANSFORM_FEEDBACK_BUFFER,
            o,
            a._glBuffers[r].buffer || null
          ));
      }
      return (
        i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, null),
        t.disposeRunner.add(this),
        n
      );
    }
    disposeTransformFeedback(t, i) {
      const s = t._glTransformFeedbacks[this.CONTEXT_UID],
        r = this.gl;
      t.disposeRunner.remove(this);
      const n = this.renderer.buffer;
      if (n)
        for (let o = 0; o < t.buffers.length; o++) {
          const a = t.buffers[o];
          if (!a) continue;
          const h = a._glBuffers[this.CONTEXT_UID];
          h && (h.refCount--, h.refCount === 0 && !i && n.dispose(a, i));
        }
      !s ||
        (i || r.deleteTransformFeedback(s),
        delete t._glTransformFeedbacks[this.CONTEXT_UID]);
    }
    destroy() {
      this.renderer = null;
    }
  }
  (Gr.extension = { type: P.RendererSystem, name: 'transformFeedback' }),
    U.add(Gr);
  class Hr {
    constructor(t) {
      this.renderer = t;
    }
    init(t) {
      (this.screen = new W(0, 0, t.width, t.height)),
        (this.element = t.view || B.ADAPTER.createCanvas()),
        (this.resolution = t.resolution || B.RESOLUTION),
        (this.autoDensity = !!t.autoDensity);
    }
    resizeView(t, i) {
      (this.element.width = Math.round(t * this.resolution)),
        (this.element.height = Math.round(i * this.resolution));
      const s = this.element.width / this.resolution,
        r = this.element.height / this.resolution;
      (this.screen.width = s),
        (this.screen.height = r),
        this.autoDensity &&
          ((this.element.style.width = `${s}px`),
          (this.element.style.height = `${r}px`)),
        this.renderer.emit('resize', s, r),
        this.renderer.runners.resize.emit(
          this.screen.width,
          this.screen.height
        );
    }
    destroy(t) {
      var i;
      t &&
        ((i = this.element.parentNode) == null || i.removeChild(this.element)),
        (this.renderer = null),
        (this.element = null),
        (this.screen = null);
    }
  }
  (Hr.extension = {
    type: [P.RendererSystem, P.CanvasRendererSystem],
    name: '_view',
  }),
    U.add(Hr),
    (B.PREFER_ENV = tt.WEBGL2),
    (B.STRICT_TEXTURE_CACHE = !1),
    Object.defineProperties(B, {
      WRAP_MODE: {
        get() {
          return V.defaultOptions.wrapMode;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode'
          ),
            (V.defaultOptions.wrapMode = e);
        },
      },
      SCALE_MODE: {
        get() {
          return V.defaultOptions.scaleMode;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode'
          ),
            (V.defaultOptions.scaleMode = e);
        },
      },
      MIPMAP_TEXTURES: {
        get() {
          return V.defaultOptions.mipmap;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap'
          ),
            (V.defaultOptions.mipmap = e);
        },
      },
      ANISOTROPIC_LEVEL: {
        get() {
          return V.defaultOptions.anisotropicLevel;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel'
          ),
            (V.defaultOptions.anisotropicLevel = e);
        },
      },
      FILTER_RESOLUTION: {
        get() {
          return (
            $(
              '7.1.0',
              'settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution'
            ),
            _t.defaultResolution
          );
        },
        set(e) {
          _t.defaultResolution = e;
        },
      },
      FILTER_MULTISAMPLE: {
        get() {
          return (
            $(
              '7.1.0',
              'settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample'
            ),
            _t.defaultMultisample
          );
        },
        set(e) {
          _t.defaultMultisample = e;
        },
      },
      SPRITE_MAX_TEXTURES: {
        get() {
          return Ot.defaultMaxTextures;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures'
          ),
            (Ot.defaultMaxTextures = e);
        },
      },
      SPRITE_BATCH_SIZE: {
        get() {
          return Ot.defaultBatchSize;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize'
          ),
            (Ot.defaultBatchSize = e);
        },
      },
      CAN_UPLOAD_SAME_BUFFER: {
        get() {
          return Ot.canUploadSameBuffer;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer'
          ),
            (Ot.canUploadSameBuffer = e);
        },
      },
      GC_MODE: {
        get() {
          return Lt.defaultMode;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode'
          ),
            (Lt.defaultMode = e);
        },
      },
      GC_MAX_IDLE: {
        get() {
          return Lt.defaultMaxIdle;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle'
          ),
            (Lt.defaultMaxIdle = e);
        },
      },
      GC_MAX_CHECK_COUNT: {
        get() {
          return Lt.defaultCheckCountMax;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax'
          ),
            (Lt.defaultCheckCountMax = e);
        },
      },
      PRECISION_VERTEX: {
        get() {
          return Ft.defaultVertexPrecision;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision'
          ),
            (Ft.defaultVertexPrecision = e);
        },
      },
      PRECISION_FRAGMENT: {
        get() {
          return Ft.defaultFragmentPrecision;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision'
          ),
            (Ft.defaultFragmentPrecision = e);
        },
      },
    });
  var fe = ((e) => (
    (e[(e.HIGH = 25)] = 'HIGH'),
    (e[(e.NORMAL = 0)] = 'NORMAL'),
    (e[(e.LOW = -25)] = 'LOW'),
    (e[(e.UTILITY = -50)] = 'UTILITY'),
    e
  ))(fe || {});
  class Xr {
    constructor(t, i = null, s = 0, r = !1) {
      (this.next = null),
        (this.previous = null),
        (this._destroyed = !1),
        (this.fn = t),
        (this.context = i),
        (this.priority = s),
        (this.once = r);
    }
    match(t, i = null) {
      return this.fn === t && this.context === i;
    }
    emit(t) {
      this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
      const i = this.next;
      return (
        this.once && this.destroy(!0), this._destroyed && (this.next = null), i
      );
    }
    connect(t) {
      (this.previous = t),
        t.next && (t.next.previous = this),
        (this.next = t.next),
        (t.next = this);
    }
    destroy(t = !1) {
      (this._destroyed = !0),
        (this.fn = null),
        (this.context = null),
        this.previous && (this.previous.next = this.next),
        this.next && (this.next.previous = this.previous);
      const i = this.next;
      return (this.next = t ? null : i), (this.previous = null), i;
    }
  }
  const Pt = class {
    constructor() {
      (this.autoStart = !1),
        (this.deltaTime = 1),
        (this.lastTime = -1),
        (this.speed = 1),
        (this.started = !1),
        (this._requestId = null),
        (this._maxElapsedMS = 100),
        (this._minElapsedMS = 0),
        (this._protected = !1),
        (this._lastFrame = -1),
        (this._head = new Xr(null, null, 1 / 0)),
        (this.deltaMS = 1 / Pt.targetFPMS),
        (this.elapsedMS = 1 / Pt.targetFPMS),
        (this._tick = (e) => {
          (this._requestId = null),
            this.started &&
              (this.update(e),
              this.started &&
                this._requestId === null &&
                this._head.next &&
                (this._requestId = requestAnimationFrame(this._tick)));
        });
    }
    _requestIfNeeded() {
      this._requestId === null &&
        this._head.next &&
        ((this.lastTime = performance.now()),
        (this._lastFrame = this.lastTime),
        (this._requestId = requestAnimationFrame(this._tick)));
    }
    _cancelIfNeeded() {
      this._requestId !== null &&
        (cancelAnimationFrame(this._requestId), (this._requestId = null));
    }
    _startIfPossible() {
      this.started ? this._requestIfNeeded() : this.autoStart && this.start();
    }
    add(e, t, i = fe.NORMAL) {
      return this._addListener(new Xr(e, t, i));
    }
    addOnce(e, t, i = fe.NORMAL) {
      return this._addListener(new Xr(e, t, i, !0));
    }
    _addListener(e) {
      let t = this._head.next,
        i = this._head;
      if (!t) e.connect(i);
      else {
        for (; t; ) {
          if (e.priority > t.priority) {
            e.connect(i);
            break;
          }
          (i = t), (t = t.next);
        }
        e.previous || e.connect(i);
      }
      return this._startIfPossible(), this;
    }
    remove(e, t) {
      let i = this._head.next;
      for (; i; ) i.match(e, t) ? (i = i.destroy()) : (i = i.next);
      return this._head.next || this._cancelIfNeeded(), this;
    }
    get count() {
      if (!this._head) return 0;
      let e = 0,
        t = this._head;
      for (; (t = t.next); ) e++;
      return e;
    }
    start() {
      this.started || ((this.started = !0), this._requestIfNeeded());
    }
    stop() {
      this.started && ((this.started = !1), this._cancelIfNeeded());
    }
    destroy() {
      if (!this._protected) {
        this.stop();
        let e = this._head.next;
        for (; e; ) e = e.destroy(!0);
        this._head.destroy(), (this._head = null);
      }
    }
    update(e = performance.now()) {
      let t;
      if (e > this.lastTime) {
        if (
          ((t = this.elapsedMS = e - this.lastTime),
          t > this._maxElapsedMS && (t = this._maxElapsedMS),
          (t *= this.speed),
          this._minElapsedMS)
        ) {
          const r = (e - this._lastFrame) | 0;
          if (r < this._minElapsedMS) return;
          this._lastFrame = e - (r % this._minElapsedMS);
        }
        (this.deltaMS = t), (this.deltaTime = this.deltaMS * Pt.targetFPMS);
        const i = this._head;
        let s = i.next;
        for (; s; ) s = s.emit(this.deltaTime);
        i.next || this._cancelIfNeeded();
      } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
      this.lastTime = e;
    }
    get FPS() {
      return 1e3 / this.elapsedMS;
    }
    get minFPS() {
      return 1e3 / this._maxElapsedMS;
    }
    set minFPS(e) {
      const t = Math.min(this.maxFPS, e),
        i = Math.min(Math.max(0, t) / 1e3, Pt.targetFPMS);
      this._maxElapsedMS = 1 / i;
    }
    get maxFPS() {
      return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
    }
    set maxFPS(e) {
      if (e === 0) this._minElapsedMS = 0;
      else {
        const t = Math.max(this.minFPS, e);
        this._minElapsedMS = 1 / (t / 1e3);
      }
    }
    static get shared() {
      if (!Pt._shared) {
        const e = (Pt._shared = new Pt());
        (e.autoStart = !0), (e._protected = !0);
      }
      return Pt._shared;
    }
    static get system() {
      if (!Pt._system) {
        const e = (Pt._system = new Pt());
        (e.autoStart = !0), (e._protected = !0);
      }
      return Pt._system;
    }
  };
  let ut = Pt;
  (ut.targetFPMS = 0.06),
    Object.defineProperties(B, {
      TARGET_FPMS: {
        get() {
          return ut.targetFPMS;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS'
          ),
            (ut.targetFPMS = e);
        },
      },
    });
  class Vr {
    static init(t) {
      (t = Object.assign({ autoStart: !0, sharedTicker: !1 }, t)),
        Object.defineProperty(this, 'ticker', {
          set(i) {
            this._ticker && this._ticker.remove(this.render, this),
              (this._ticker = i),
              i && i.add(this.render, this, fe.LOW);
          },
          get() {
            return this._ticker;
          },
        }),
        (this.stop = () => {
          this._ticker.stop();
        }),
        (this.start = () => {
          this._ticker.start();
        }),
        (this._ticker = null),
        (this.ticker = t.sharedTicker ? ut.shared : new ut()),
        t.autoStart && this.start();
    }
    static destroy() {
      if (this._ticker) {
        const t = this._ticker;
        (this.ticker = null), t.destroy();
      }
    }
  }
  (Vr.extension = P.Application), U.add(Vr);
  const Ko = [];
  U.handleByList(P.Renderer, Ko);
  function Zo(e) {
    for (const t of Ko) if (t.test(e)) return new t(e);
    throw new Error('Unable to auto-detect a suitable renderer.');
  }
  var Yd = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,
    $d = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
  const Qo = Yd,
    zr = $d;
  class Wr {
    constructor(t) {
      this.renderer = t;
    }
    contextChange(t) {
      let i;
      if (this.renderer.context.webGLVersion === 1) {
        const s = t.getParameter(t.FRAMEBUFFER_BINDING);
        t.bindFramebuffer(t.FRAMEBUFFER, null),
          (i = t.getParameter(t.SAMPLES)),
          t.bindFramebuffer(t.FRAMEBUFFER, s);
      } else {
        const s = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
        t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
          (i = t.getParameter(t.SAMPLES)),
          t.bindFramebuffer(t.DRAW_FRAMEBUFFER, s);
      }
      i >= rt.HIGH
        ? (this.multisample = rt.HIGH)
        : i >= rt.MEDIUM
        ? (this.multisample = rt.MEDIUM)
        : i >= rt.LOW
        ? (this.multisample = rt.LOW)
        : (this.multisample = rt.NONE);
    }
    destroy() {}
  }
  (Wr.extension = { type: P.RendererSystem, name: '_multisample' }), U.add(Wr);
  class qd {
    constructor(t) {
      (this.buffer = t || null),
        (this.updateID = -1),
        (this.byteLength = -1),
        (this.refCount = 0);
    }
  }
  class jr {
    constructor(t) {
      (this.renderer = t),
        (this.managedBuffers = {}),
        (this.boundBufferBases = {});
    }
    destroy() {
      this.renderer = null;
    }
    contextChange() {
      this.disposeAll(!0),
        (this.gl = this.renderer.gl),
        (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
    }
    bind(t) {
      const { gl: i, CONTEXT_UID: s } = this,
        r = t._glBuffers[s] || this.createGLBuffer(t);
      i.bindBuffer(t.type, r.buffer);
    }
    unbind(t) {
      const { gl: i } = this;
      i.bindBuffer(t, null);
    }
    bindBufferBase(t, i) {
      const { gl: s, CONTEXT_UID: r } = this;
      if (this.boundBufferBases[i] !== t) {
        const n = t._glBuffers[r] || this.createGLBuffer(t);
        (this.boundBufferBases[i] = t),
          s.bindBufferBase(s.UNIFORM_BUFFER, i, n.buffer);
      }
    }
    bindBufferRange(t, i, s) {
      const { gl: r, CONTEXT_UID: n } = this;
      s = s || 0;
      const o = t._glBuffers[n] || this.createGLBuffer(t);
      r.bindBufferRange(r.UNIFORM_BUFFER, i || 0, o.buffer, s * 256, 256);
    }
    update(t) {
      const { gl: i, CONTEXT_UID: s } = this,
        r = t._glBuffers[s] || this.createGLBuffer(t);
      if (t._updateID !== r.updateID)
        if (
          ((r.updateID = t._updateID),
          i.bindBuffer(t.type, r.buffer),
          r.byteLength >= t.data.byteLength)
        )
          i.bufferSubData(t.type, 0, t.data);
        else {
          const n = t.static ? i.STATIC_DRAW : i.DYNAMIC_DRAW;
          (r.byteLength = t.data.byteLength), i.bufferData(t.type, t.data, n);
        }
    }
    dispose(t, i) {
      if (!this.managedBuffers[t.id]) return;
      delete this.managedBuffers[t.id];
      const s = t._glBuffers[this.CONTEXT_UID],
        r = this.gl;
      t.disposeRunner.remove(this),
        s &&
          (i || r.deleteBuffer(s.buffer),
          delete t._glBuffers[this.CONTEXT_UID]);
    }
    disposeAll(t) {
      const i = Object.keys(this.managedBuffers);
      for (let s = 0; s < i.length; s++)
        this.dispose(this.managedBuffers[i[s]], t);
    }
    createGLBuffer(t) {
      const { CONTEXT_UID: i, gl: s } = this;
      return (
        (t._glBuffers[i] = new qd(s.createBuffer())),
        (this.managedBuffers[t.id] = t),
        t.disposeRunner.add(this),
        t._glBuffers[i]
      );
    }
  }
  (jr.extension = { type: P.RendererSystem, name: 'buffer' }), U.add(jr);
  class Yr {
    constructor(t) {
      this.renderer = t;
    }
    render(t, i) {
      const s = this.renderer;
      let r, n, o, a;
      if (
        (i &&
          ((r = i.renderTexture),
          (n = i.clear),
          (o = i.transform),
          (a = i.skipUpdateTransform)),
        (this.renderingToScreen = !r),
        s.runners.prerender.emit(),
        s.emit('prerender'),
        (s.projection.transform = o),
        !s.context.isLost)
      ) {
        if ((r || (this.lastObjectRendered = t), !a)) {
          const h = t.enableTempParent();
          t.updateTransform(), t.disableTempParent(h);
        }
        s.renderTexture.bind(r),
          s.batch.currentRenderer.start(),
          (n != null ? n : s.background.clearBeforeRender) &&
            s.renderTexture.clear(),
          t.render(s),
          s.batch.currentRenderer.flush(),
          r && (i.blit && s.framebuffer.blit(), r.baseTexture.update()),
          s.runners.postrender.emit(),
          (s.projection.transform = null),
          s.emit('postrender');
      }
    }
    destroy() {
      (this.renderer = null), (this.lastObjectRendered = null);
    }
  }
  (Yr.extension = { type: P.RendererSystem, name: 'objectRenderer' }),
    U.add(Yr);
  const $r = class extends qo {
    constructor(e) {
      var s;
      super(),
        (this.type = ft.WEBGL),
        (e = Object.assign({}, B.RENDER_OPTIONS, e)),
        (this.gl = null),
        (this.CONTEXT_UID = 0),
        (this.globalUniforms = new Nt({ projectionMatrix: new J() }, !0));
      const t = {
        runners: [
          'init',
          'destroy',
          'contextChange',
          'resolutionChange',
          'reset',
          'update',
          'postrender',
          'prerender',
          'resize',
        ],
        systems: $r.__systems,
        priority: [
          '_view',
          'textureGenerator',
          'background',
          '_plugin',
          'startup',
          'context',
          'state',
          'texture',
          'buffer',
          'geometry',
          'framebuffer',
          'transformFeedback',
          'mask',
          'scissor',
          'stencil',
          'projection',
          'textureGC',
          'filter',
          'renderTexture',
          'batch',
          'objectRenderer',
          '_multisample',
        ],
      };
      this.setup(t),
        'useContextAlpha' in e &&
          ($(
            '7.0.0',
            'options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead'
          ),
          (e.premultipliedAlpha =
            e.useContextAlpha && e.useContextAlpha !== 'notMultiplied'),
          (e.backgroundAlpha =
            e.useContextAlpha === !1 ? 1 : e.backgroundAlpha));
      const i = {
        hello: e.hello,
        _plugin: $r.__plugins,
        background: {
          alpha: e.backgroundAlpha,
          color: (s = e.background) != null ? s : e.backgroundColor,
          clearBeforeRender: e.clearBeforeRender,
        },
        _view: {
          height: e.height,
          width: e.width,
          autoDensity: e.autoDensity,
          resolution: e.resolution,
          view: e.view,
        },
        context: {
          antialias: e.antialias,
          context: e.context,
          powerPreference: e.powerPreference,
          premultipliedAlpha: e.premultipliedAlpha,
          preserveDrawingBuffer: e.preserveDrawingBuffer,
        },
      };
      (this.options = e), this.startup.run(i);
    }
    static test(e) {
      return e != null && e.forceCanvas ? !1 : so();
    }
    render(e, t) {
      this.objectRenderer.render(e, t);
    }
    resize(e, t) {
      this._view.resizeView(e, t);
    }
    reset() {
      return this.runners.reset.emit(), this;
    }
    clear() {
      this.renderTexture.bind(), this.renderTexture.clear();
    }
    destroy(e = !1) {
      this.runners.destroy.items.reverse(),
        this.emitWithCustomOptions(this.runners.destroy, { _view: e }),
        super.destroy();
    }
    get plugins() {
      return this._plugin.plugins;
    }
    get multisample() {
      return this._multisample.multisample;
    }
    get width() {
      return this._view.element.width;
    }
    get height() {
      return this._view.element.height;
    }
    get resolution() {
      return this._view.resolution;
    }
    set resolution(e) {
      (this._view.resolution = e), this.runners.resolutionChange.emit(e);
    }
    get autoDensity() {
      return this._view.autoDensity;
    }
    get view() {
      return this._view.element;
    }
    get screen() {
      return this._view.screen;
    }
    get lastObjectRendered() {
      return this.objectRenderer.lastObjectRendered;
    }
    get renderingToScreen() {
      return this.objectRenderer.renderingToScreen;
    }
    get rendererLogId() {
      return `WebGL ${this.context.webGLVersion}`;
    }
    get clearBeforeRender() {
      return (
        $(
          '7.0.0',
          'renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead.'
        ),
        this.background.clearBeforeRender
      );
    }
    get useContextAlpha() {
      return (
        $(
          '7.0.0',
          'renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead.'
        ),
        this.context.useContextAlpha
      );
    }
    get preserveDrawingBuffer() {
      return (
        $(
          '7.0.0',
          'renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context'
        ),
        this.context.preserveDrawingBuffer
      );
    }
    get backgroundColor() {
      return (
        $(
          '7.0.0',
          'renderer.backgroundColor has been deprecated, use renderer.background.color instead.'
        ),
        this.background.color
      );
    }
    set backgroundColor(e) {
      $(
        '7.0.0',
        'renderer.backgroundColor has been deprecated, use renderer.background.color instead.'
      ),
        (this.background.color = e);
    }
    get backgroundAlpha() {
      return (
        $(
          '7.0.0',
          'renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead.'
        ),
        this.background.color
      );
    }
    set backgroundAlpha(e) {
      $(
        '7.0.0',
        'renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead.'
      ),
        (this.background.alpha = e);
    }
    get powerPreference() {
      return (
        $(
          '7.0.0',
          'renderer.powerPreference has been deprecated, we can only know this if pixi creates the context'
        ),
        this.context.powerPreference
      );
    }
    generateTexture(e, t) {
      return this.textureGenerator.generateTexture(e, t);
    }
  };
  let Me = $r;
  (Me.extension = { type: P.Renderer, priority: 1 }),
    (Me.__plugins = {}),
    (Me.__systems = {}),
    U.handleByMap(P.RendererPlugin, Me.__plugins),
    U.handleByMap(P.RendererSystem, Me.__systems),
    U.add(Me);
  class qr extends Ge {
    constructor(t, i) {
      const { width: s, height: r } = i || {};
      super(s, r), (this.items = []), (this.itemDirtyIds = []);
      for (let n = 0; n < t; n++) {
        const o = new V();
        this.items.push(o), this.itemDirtyIds.push(-2);
      }
      (this.length = t), (this._load = null), (this.baseTexture = null);
    }
    initFromArray(t, i) {
      for (let s = 0; s < this.length; s++)
        !t[s] ||
          (t[s].castToBaseTexture
            ? this.addBaseTextureAt(t[s].castToBaseTexture(), s)
            : t[s] instanceof Ge
            ? this.addResourceAt(t[s], s)
            : this.addResourceAt(ur(t[s], i), s));
    }
    dispose() {
      for (let t = 0, i = this.length; t < i; t++) this.items[t].destroy();
      (this.items = null), (this.itemDirtyIds = null), (this._load = null);
    }
    addResourceAt(t, i) {
      if (!this.items[i]) throw new Error(`Index ${i} is out of bounds`);
      return (
        t.valid && !this.valid && this.resize(t.width, t.height),
        this.items[i].setResource(t),
        this
      );
    }
    bind(t) {
      if (this.baseTexture !== null)
        throw new Error('Only one base texture per TextureArray is allowed');
      super.bind(t);
      for (let i = 0; i < this.length; i++)
        (this.items[i].parentTextureArray = t),
          this.items[i].on('update', t.update, t);
    }
    unbind(t) {
      super.unbind(t);
      for (let i = 0; i < this.length; i++)
        (this.items[i].parentTextureArray = null),
          this.items[i].off('update', t.update, t);
    }
    load() {
      if (this._load) return this._load;
      const i = this.items
        .map((s) => s.resource)
        .filter((s) => s)
        .map((s) => s.load());
      return (
        (this._load = Promise.all(i).then(() => {
          const { realWidth: s, realHeight: r } = this.items[0];
          return this.resize(s, r), Promise.resolve(this);
        })),
        this._load
      );
    }
  }
  class Jo extends qr {
    constructor(t, i) {
      const { width: s, height: r } = i || {};
      let n, o;
      Array.isArray(t) ? ((n = t), (o = t.length)) : (o = t),
        super(o, { width: s, height: r }),
        n && this.initFromArray(n, i);
    }
    addBaseTextureAt(t, i) {
      if (t.resource) this.addResourceAt(t.resource, i);
      else throw new Error('ArrayResource does not support RenderTexture');
      return this;
    }
    bind(t) {
      super.bind(t), (t.target = ve.TEXTURE_2D_ARRAY);
    }
    upload(t, i, s) {
      const { length: r, itemDirtyIds: n, items: o } = this,
        { gl: a } = t;
      s.dirtyId < 0 &&
        a.texImage3D(
          a.TEXTURE_2D_ARRAY,
          0,
          s.internalFormat,
          this._width,
          this._height,
          r,
          0,
          i.format,
          s.type,
          null
        );
      for (let h = 0; h < r; h++) {
        const l = o[h];
        n[h] < l.dirtyId &&
          ((n[h] = l.dirtyId),
          l.valid &&
            a.texSubImage3D(
              a.TEXTURE_2D_ARRAY,
              0,
              0,
              0,
              h,
              l.resource.width,
              l.resource.height,
              1,
              i.format,
              s.type,
              l.resource.source
            ));
      }
      return !0;
    }
  }
  class ta extends le {
    constructor(t) {
      super(t);
    }
    static test(t) {
      const { OffscreenCanvas: i } = globalThis;
      return i && t instanceof i
        ? !0
        : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement;
    }
  }
  const di = class extends qr {
    constructor(e, t) {
      const { width: i, height: s, autoLoad: r, linkBaseTexture: n } = t || {};
      if (e && e.length !== di.SIDES)
        throw new Error(`Invalid length. Got ${e.length}, expected 6`);
      super(6, { width: i, height: s });
      for (let o = 0; o < di.SIDES; o++)
        this.items[o].target = ve.TEXTURE_CUBE_MAP_POSITIVE_X + o;
      (this.linkBaseTexture = n !== !1),
        e && this.initFromArray(e, t),
        r !== !1 && this.load();
    }
    bind(e) {
      super.bind(e), (e.target = ve.TEXTURE_CUBE_MAP);
    }
    addBaseTextureAt(e, t, i) {
      if ((i === void 0 && (i = this.linkBaseTexture), !this.items[t]))
        throw new Error(`Index ${t} is out of bounds`);
      if (
        !this.linkBaseTexture ||
        e.parentTextureArray ||
        Object.keys(e._glTextures).length > 0
      )
        if (e.resource) this.addResourceAt(e.resource, t);
        else
          throw new Error(
            'CubeResource does not support copying of renderTexture.'
          );
      else
        (e.target = ve.TEXTURE_CUBE_MAP_POSITIVE_X + t),
          (e.parentTextureArray = this.baseTexture),
          (this.items[t] = e);
      return (
        e.valid && !this.valid && this.resize(e.realWidth, e.realHeight),
        (this.items[t] = e),
        this
      );
    }
    upload(e, t, i) {
      const s = this.itemDirtyIds;
      for (let r = 0; r < di.SIDES; r++) {
        const n = this.items[r];
        (s[r] < n.dirtyId || i.dirtyId < t.dirtyId) &&
          (n.valid && n.resource
            ? (n.resource.upload(e, n, i), (s[r] = n.dirtyId))
            : s[r] < -1 &&
              (e.gl.texImage2D(
                n.target,
                0,
                i.internalFormat,
                t.realWidth,
                t.realHeight,
                0,
                t.format,
                i.type,
                null
              ),
              (s[r] = -1)));
      }
      return !0;
    }
    static test(e) {
      return Array.isArray(e) && e.length === di.SIDES;
    }
  };
  let Kr = di;
  Kr.SIDES = 6;
  class Be extends le {
    constructor(t, i) {
      var n;
      i = i || {};
      let s, r;
      typeof t == 'string' ? ((s = Be.EMPTY), (r = t)) : ((s = t), (r = null)),
        super(s),
        (this.url = r),
        (this.crossOrigin = (n = i.crossOrigin) != null ? n : !0),
        (this.alphaMode = typeof i.alphaMode == 'number' ? i.alphaMode : null),
        (this._load = null),
        i.autoLoad !== !1 && this.load();
    }
    load() {
      return this._load
        ? this._load
        : ((this._load = new Promise(async (t, i) => {
            if (this.url === null) {
              t(this);
              return;
            }
            try {
              const s = await B.ADAPTER.fetch(this.url, {
                mode: this.crossOrigin ? 'cors' : 'no-cors',
              });
              if (this.destroyed) return;
              const r = await s.blob();
              if (this.destroyed) return;
              const n = await createImageBitmap(r, {
                premultiplyAlpha:
                  this.alphaMode === null || this.alphaMode === Bt.UNPACK
                    ? 'premultiply'
                    : 'none',
              });
              if (this.destroyed) return;
              (this.source = n), this.update(), t(this);
            } catch (s) {
              if (this.destroyed) return;
              i(s), this.onError.emit(s);
            }
          })),
          this._load);
    }
    upload(t, i, s) {
      return this.source instanceof ImageBitmap
        ? (typeof this.alphaMode == 'number' && (i.alphaMode = this.alphaMode),
          super.upload(t, i, s))
        : (this.load(), !1);
    }
    dispose() {
      this.source instanceof ImageBitmap && this.source.close(),
        super.dispose(),
        (this._load = null);
    }
    static test(t) {
      return (
        !!globalThis.createImageBitmap &&
        typeof ImageBitmap != 'undefined' &&
        (typeof t == 'string' || t instanceof ImageBitmap)
      );
    }
    static get EMPTY() {
      var t;
      return (
        (Be._EMPTY =
          (t = Be._EMPTY) != null ? t : B.ADAPTER.createCanvas(0, 0)),
        Be._EMPTY
      );
    }
  }
  const fs = class extends le {
    constructor(e, t) {
      (t = t || {}),
        super(B.ADAPTER.createCanvas()),
        (this._width = 0),
        (this._height = 0),
        (this.svg = e),
        (this.scale = t.scale || 1),
        (this._overrideWidth = t.width),
        (this._overrideHeight = t.height),
        (this._resolve = null),
        (this._crossorigin = t.crossorigin),
        (this._load = null),
        t.autoLoad !== !1 && this.load();
    }
    load() {
      return this._load
        ? this._load
        : ((this._load = new Promise((e) => {
            if (
              ((this._resolve = () => {
                this.resize(this.source.width, this.source.height), e(this);
              }),
              fs.SVG_XML.test(this.svg.trim()))
            ) {
              if (!btoa)
                throw new Error(
                  "Your browser doesn't support base64 conversions."
                );
              this.svg = `data:image/svg+xml;base64,${btoa(
                unescape(encodeURIComponent(this.svg))
              )}`;
            }
            this._loadSvg();
          })),
          this._load);
    }
    _loadSvg() {
      const e = new Image();
      le.crossOrigin(e, this.svg, this._crossorigin),
        (e.src = this.svg),
        (e.onerror = (t) => {
          !this._resolve || ((e.onerror = null), this.onError.emit(t));
        }),
        (e.onload = () => {
          if (!this._resolve) return;
          const t = e.width,
            i = e.height;
          if (!t || !i)
            throw new Error(
              'The SVG image must have width and height defined (in pixels), canvas API needs them.'
            );
          let s = t * this.scale,
            r = i * this.scale;
          (this._overrideWidth || this._overrideHeight) &&
            ((s = this._overrideWidth || (this._overrideHeight / i) * t),
            (r = this._overrideHeight || (this._overrideWidth / t) * i)),
            (s = Math.round(s)),
            (r = Math.round(r));
          const n = this.source;
          (n.width = s),
            (n.height = r),
            (n._pixiId = `canvas_${de()}`),
            n.getContext('2d').drawImage(e, 0, 0, t, i, 0, 0, s, r),
            this._resolve(),
            (this._resolve = null);
        });
    }
    static getSize(e) {
      const t = fs.SVG_SIZE.exec(e),
        i = {};
      return (
        t &&
          ((i[t[1]] = Math.round(parseFloat(t[3]))),
          (i[t[5]] = Math.round(parseFloat(t[7])))),
        i
      );
    }
    dispose() {
      super.dispose(), (this._resolve = null), (this._crossorigin = null);
    }
    static test(e, t) {
      return (
        t === 'svg' ||
        (typeof e == 'string' && e.startsWith('data:image/svg+xml')) ||
        (typeof e == 'string' && fs.SVG_XML.test(e))
      );
    }
  };
  let We = fs;
  (We.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m),
    (We.SVG_SIZE =
      /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i);
  const Zr = class extends le {
    constructor(e, t) {
      if (((t = t || {}), !(e instanceof HTMLVideoElement))) {
        const i = document.createElement('video');
        i.setAttribute('preload', 'auto'),
          i.setAttribute('webkit-playsinline', ''),
          i.setAttribute('playsinline', ''),
          typeof e == 'string' && (e = [e]);
        const s = e[0].src || e[0];
        le.crossOrigin(i, s, t.crossorigin);
        for (let r = 0; r < e.length; ++r) {
          const n = document.createElement('source');
          let { src: o, mime: a } = e[r];
          o = o || e[r];
          const h = o.split('?').shift().toLowerCase(),
            l = h.slice(h.lastIndexOf('.') + 1);
          (a = a || Zr.MIME_TYPES[l] || `video/${l}`),
            (n.src = o),
            (n.type = a),
            i.appendChild(n);
        }
        e = i;
      }
      super(e),
        (this.noSubImage = !0),
        (this._autoUpdate = !0),
        (this._isConnectedToTicker = !1),
        (this._updateFPS = t.updateFPS || 0),
        (this._msToNextUpdate = 0),
        (this.autoPlay = t.autoPlay !== !1),
        (this._load = null),
        (this._resolve = null),
        (this._onCanPlay = this._onCanPlay.bind(this)),
        (this._onError = this._onError.bind(this)),
        t.autoLoad !== !1 && this.load();
    }
    update(e = 0) {
      if (!this.destroyed) {
        const t = ut.shared.elapsedMS * this.source.playbackRate;
        (this._msToNextUpdate = Math.floor(this._msToNextUpdate - t)),
          (!this._updateFPS || this._msToNextUpdate <= 0) &&
            (super.update(),
            (this._msToNextUpdate = this._updateFPS
              ? Math.floor(1e3 / this._updateFPS)
              : 0));
      }
    }
    load() {
      if (this._load) return this._load;
      const e = this.source;
      return (
        (e.readyState === e.HAVE_ENOUGH_DATA ||
          e.readyState === e.HAVE_FUTURE_DATA) &&
          e.width &&
          e.height &&
          (e.complete = !0),
        e.addEventListener('play', this._onPlayStart.bind(this)),
        e.addEventListener('pause', this._onPlayStop.bind(this)),
        this._isSourceReady()
          ? this._onCanPlay()
          : (e.addEventListener('canplay', this._onCanPlay),
            e.addEventListener('canplaythrough', this._onCanPlay),
            e.addEventListener('error', this._onError, !0)),
        (this._load = new Promise((t) => {
          this.valid ? t(this) : ((this._resolve = t), e.load());
        })),
        this._load
      );
    }
    _onError(e) {
      this.source.removeEventListener('error', this._onError, !0),
        this.onError.emit(e);
    }
    _isSourcePlaying() {
      const e = this.source;
      return !e.paused && !e.ended && this._isSourceReady();
    }
    _isSourceReady() {
      return this.source.readyState > 2;
    }
    _onPlayStart() {
      this.valid || this._onCanPlay(),
        this.autoUpdate &&
          !this._isConnectedToTicker &&
          (ut.shared.add(this.update, this), (this._isConnectedToTicker = !0));
    }
    _onPlayStop() {
      this._isConnectedToTicker &&
        (ut.shared.remove(this.update, this), (this._isConnectedToTicker = !1));
    }
    _onCanPlay() {
      const e = this.source;
      e.removeEventListener('canplay', this._onCanPlay),
        e.removeEventListener('canplaythrough', this._onCanPlay);
      const t = this.valid;
      this.resize(e.videoWidth, e.videoHeight),
        !t && this._resolve && (this._resolve(this), (this._resolve = null)),
        this._isSourcePlaying()
          ? this._onPlayStart()
          : this.autoPlay && e.play();
    }
    dispose() {
      this._isConnectedToTicker &&
        (ut.shared.remove(this.update, this), (this._isConnectedToTicker = !1));
      const e = this.source;
      e &&
        (e.removeEventListener('error', this._onError, !0),
        e.pause(),
        (e.src = ''),
        e.load()),
        super.dispose();
    }
    get autoUpdate() {
      return this._autoUpdate;
    }
    set autoUpdate(e) {
      e !== this._autoUpdate &&
        ((this._autoUpdate = e),
        !this._autoUpdate && this._isConnectedToTicker
          ? (ut.shared.remove(this.update, this),
            (this._isConnectedToTicker = !1))
          : this._autoUpdate &&
            !this._isConnectedToTicker &&
            this._isSourcePlaying() &&
            (ut.shared.add(this.update, this),
            (this._isConnectedToTicker = !0)));
    }
    get updateFPS() {
      return this._updateFPS;
    }
    set updateFPS(e) {
      e !== this._updateFPS && (this._updateFPS = e);
    }
    static test(e, t) {
      return (
        (globalThis.HTMLVideoElement && e instanceof HTMLVideoElement) ||
        Zr.TYPES.includes(t)
      );
    }
  };
  let ps = Zr;
  (ps.TYPES = ['mp4', 'm4v', 'webm', 'ogg', 'ogv', 'h264', 'avi', 'mov']),
    (ps.MIME_TYPES = {
      ogv: 'video/ogg',
      mov: 'video/quicktime',
      m4v: 'video/mp4',
    }),
    $i.push(Be, vr, ta, ps, We, He, Kr, Jo);
  class Kd {
    constructor() {
      (this._glTransformFeedbacks = {}),
        (this.buffers = []),
        (this.disposeRunner = new It('disposeTransformFeedback'));
    }
    bindBuffer(t, i) {
      this.buffers[t] = i;
    }
    destroy() {
      this.disposeRunner.emit(this, !1);
    }
  }
  const Zd = '7.1.4';
  class fi {
    constructor() {
      (this.minX = 1 / 0),
        (this.minY = 1 / 0),
        (this.maxX = -1 / 0),
        (this.maxY = -1 / 0),
        (this.rect = null),
        (this.updateID = -1);
    }
    isEmpty() {
      return this.minX > this.maxX || this.minY > this.maxY;
    }
    clear() {
      (this.minX = 1 / 0),
        (this.minY = 1 / 0),
        (this.maxX = -1 / 0),
        (this.maxY = -1 / 0);
    }
    getRectangle(t) {
      return this.minX > this.maxX || this.minY > this.maxY
        ? W.EMPTY
        : ((t = t || new W(0, 0, 1, 1)),
          (t.x = this.minX),
          (t.y = this.minY),
          (t.width = this.maxX - this.minX),
          (t.height = this.maxY - this.minY),
          t);
    }
    addPoint(t) {
      (this.minX = Math.min(this.minX, t.x)),
        (this.maxX = Math.max(this.maxX, t.x)),
        (this.minY = Math.min(this.minY, t.y)),
        (this.maxY = Math.max(this.maxY, t.y));
    }
    addPointMatrix(t, i) {
      const { a: s, b: r, c: n, d: o, tx: a, ty: h } = t,
        l = s * i.x + n * i.y + a,
        c = r * i.x + o * i.y + h;
      (this.minX = Math.min(this.minX, l)),
        (this.maxX = Math.max(this.maxX, l)),
        (this.minY = Math.min(this.minY, c)),
        (this.maxY = Math.max(this.maxY, c));
    }
    addQuad(t) {
      let i = this.minX,
        s = this.minY,
        r = this.maxX,
        n = this.maxY,
        o = t[0],
        a = t[1];
      (i = o < i ? o : i),
        (s = a < s ? a : s),
        (r = o > r ? o : r),
        (n = a > n ? a : n),
        (o = t[2]),
        (a = t[3]),
        (i = o < i ? o : i),
        (s = a < s ? a : s),
        (r = o > r ? o : r),
        (n = a > n ? a : n),
        (o = t[4]),
        (a = t[5]),
        (i = o < i ? o : i),
        (s = a < s ? a : s),
        (r = o > r ? o : r),
        (n = a > n ? a : n),
        (o = t[6]),
        (a = t[7]),
        (i = o < i ? o : i),
        (s = a < s ? a : s),
        (r = o > r ? o : r),
        (n = a > n ? a : n),
        (this.minX = i),
        (this.minY = s),
        (this.maxX = r),
        (this.maxY = n);
    }
    addFrame(t, i, s, r, n) {
      this.addFrameMatrix(t.worldTransform, i, s, r, n);
    }
    addFrameMatrix(t, i, s, r, n) {
      const o = t.a,
        a = t.b,
        h = t.c,
        l = t.d,
        c = t.tx,
        u = t.ty;
      let d = this.minX,
        f = this.minY,
        p = this.maxX,
        g = this.maxY,
        _ = o * i + h * s + c,
        v = a * i + l * s + u;
      (d = _ < d ? _ : d),
        (f = v < f ? v : f),
        (p = _ > p ? _ : p),
        (g = v > g ? v : g),
        (_ = o * r + h * s + c),
        (v = a * r + l * s + u),
        (d = _ < d ? _ : d),
        (f = v < f ? v : f),
        (p = _ > p ? _ : p),
        (g = v > g ? v : g),
        (_ = o * i + h * n + c),
        (v = a * i + l * n + u),
        (d = _ < d ? _ : d),
        (f = v < f ? v : f),
        (p = _ > p ? _ : p),
        (g = v > g ? v : g),
        (_ = o * r + h * n + c),
        (v = a * r + l * n + u),
        (d = _ < d ? _ : d),
        (f = v < f ? v : f),
        (p = _ > p ? _ : p),
        (g = v > g ? v : g),
        (this.minX = d),
        (this.minY = f),
        (this.maxX = p),
        (this.maxY = g);
    }
    addVertexData(t, i, s) {
      let r = this.minX,
        n = this.minY,
        o = this.maxX,
        a = this.maxY;
      for (let h = i; h < s; h += 2) {
        const l = t[h],
          c = t[h + 1];
        (r = l < r ? l : r),
          (n = c < n ? c : n),
          (o = l > o ? l : o),
          (a = c > a ? c : a);
      }
      (this.minX = r), (this.minY = n), (this.maxX = o), (this.maxY = a);
    }
    addVertices(t, i, s, r) {
      this.addVerticesMatrix(t.worldTransform, i, s, r);
    }
    addVerticesMatrix(t, i, s, r, n = 0, o = n) {
      const a = t.a,
        h = t.b,
        l = t.c,
        c = t.d,
        u = t.tx,
        d = t.ty;
      let f = this.minX,
        p = this.minY,
        g = this.maxX,
        _ = this.maxY;
      for (let v = s; v < r; v += 2) {
        const T = i[v],
          y = i[v + 1],
          x = a * T + l * y + u,
          A = c * y + h * T + d;
        (f = Math.min(f, x - n)),
          (g = Math.max(g, x + n)),
          (p = Math.min(p, A - o)),
          (_ = Math.max(_, A + o));
      }
      (this.minX = f), (this.minY = p), (this.maxX = g), (this.maxY = _);
    }
    addBounds(t) {
      const i = this.minX,
        s = this.minY,
        r = this.maxX,
        n = this.maxY;
      (this.minX = t.minX < i ? t.minX : i),
        (this.minY = t.minY < s ? t.minY : s),
        (this.maxX = t.maxX > r ? t.maxX : r),
        (this.maxY = t.maxY > n ? t.maxY : n);
    }
    addBoundsMask(t, i) {
      const s = t.minX > i.minX ? t.minX : i.minX,
        r = t.minY > i.minY ? t.minY : i.minY,
        n = t.maxX < i.maxX ? t.maxX : i.maxX,
        o = t.maxY < i.maxY ? t.maxY : i.maxY;
      if (s <= n && r <= o) {
        const a = this.minX,
          h = this.minY,
          l = this.maxX,
          c = this.maxY;
        (this.minX = s < a ? s : a),
          (this.minY = r < h ? r : h),
          (this.maxX = n > l ? n : l),
          (this.maxY = o > c ? o : c);
      }
    }
    addBoundsMatrix(t, i) {
      this.addFrameMatrix(i, t.minX, t.minY, t.maxX, t.maxY);
    }
    addBoundsArea(t, i) {
      const s = t.minX > i.x ? t.minX : i.x,
        r = t.minY > i.y ? t.minY : i.y,
        n = t.maxX < i.x + i.width ? t.maxX : i.x + i.width,
        o = t.maxY < i.y + i.height ? t.maxY : i.y + i.height;
      if (s <= n && r <= o) {
        const a = this.minX,
          h = this.minY,
          l = this.maxX,
          c = this.maxY;
        (this.minX = s < a ? s : a),
          (this.minY = r < h ? r : h),
          (this.maxX = n > l ? n : l),
          (this.maxY = o > c ? o : c);
      }
    }
    pad(t = 0, i = t) {
      this.isEmpty() ||
        ((this.minX -= t),
        (this.maxX += t),
        (this.minY -= i),
        (this.maxY += i));
    }
    addFramePad(t, i, s, r, n, o) {
      (t -= n),
        (i -= o),
        (s += n),
        (r += o),
        (this.minX = this.minX < t ? this.minX : t),
        (this.maxX = this.maxX > s ? this.maxX : s),
        (this.minY = this.minY < i ? this.minY : i),
        (this.maxY = this.maxY > r ? this.maxY : r);
    }
  }
  class it extends Le {
    constructor() {
      super(),
        (this.tempDisplayObjectParent = null),
        (this.transform = new ai()),
        (this.alpha = 1),
        (this.visible = !0),
        (this.renderable = !0),
        (this.cullable = !1),
        (this.cullArea = null),
        (this.parent = null),
        (this.worldAlpha = 1),
        (this._lastSortedIndex = 0),
        (this._zIndex = 0),
        (this.filterArea = null),
        (this.filters = null),
        (this._enabledFilters = null),
        (this._bounds = new fi()),
        (this._localBounds = null),
        (this._boundsID = 0),
        (this._boundsRect = null),
        (this._localBoundsRect = null),
        (this._mask = null),
        (this._maskRefCount = 0),
        (this._destroyed = !1),
        (this.isSprite = !1),
        (this.isMask = !1);
    }
    static mixin(t) {
      const i = Object.keys(t);
      for (let s = 0; s < i.length; ++s) {
        const r = i[s];
        Object.defineProperty(
          it.prototype,
          r,
          Object.getOwnPropertyDescriptor(t, r)
        );
      }
    }
    get destroyed() {
      return this._destroyed;
    }
    _recursivePostUpdateTransform() {
      this.parent
        ? (this.parent._recursivePostUpdateTransform(),
          this.transform.updateTransform(this.parent.transform))
        : this.transform.updateTransform(
            this._tempDisplayObjectParent.transform
          );
    }
    updateTransform() {
      this._boundsID++,
        this.transform.updateTransform(this.parent.transform),
        (this.worldAlpha = this.alpha * this.parent.worldAlpha);
    }
    getBounds(t, i) {
      return (
        t ||
          (this.parent
            ? (this._recursivePostUpdateTransform(), this.updateTransform())
            : ((this.parent = this._tempDisplayObjectParent),
              this.updateTransform(),
              (this.parent = null))),
        this._bounds.updateID !== this._boundsID &&
          (this.calculateBounds(), (this._bounds.updateID = this._boundsID)),
        i ||
          (this._boundsRect || (this._boundsRect = new W()),
          (i = this._boundsRect)),
        this._bounds.getRectangle(i)
      );
    }
    getLocalBounds(t) {
      t ||
        (this._localBoundsRect || (this._localBoundsRect = new W()),
        (t = this._localBoundsRect)),
        this._localBounds || (this._localBounds = new fi());
      const i = this.transform,
        s = this.parent;
      (this.parent = null),
        (this.transform = this._tempDisplayObjectParent.transform);
      const r = this._bounds,
        n = this._boundsID;
      this._bounds = this._localBounds;
      const o = this.getBounds(!1, t);
      return (
        (this.parent = s),
        (this.transform = i),
        (this._bounds = r),
        (this._bounds.updateID += this._boundsID - n),
        o
      );
    }
    toGlobal(t, i, s = !1) {
      return (
        s ||
          (this._recursivePostUpdateTransform(),
          this.parent
            ? this.displayObjectUpdateTransform()
            : ((this.parent = this._tempDisplayObjectParent),
              this.displayObjectUpdateTransform(),
              (this.parent = null))),
        this.worldTransform.apply(t, i)
      );
    }
    toLocal(t, i, s, r) {
      return (
        i && (t = i.toGlobal(t, s, r)),
        r ||
          (this._recursivePostUpdateTransform(),
          this.parent
            ? this.displayObjectUpdateTransform()
            : ((this.parent = this._tempDisplayObjectParent),
              this.displayObjectUpdateTransform(),
              (this.parent = null))),
        this.worldTransform.applyInverse(t, s)
      );
    }
    setParent(t) {
      if (!t || !t.addChild)
        throw new Error('setParent: Argument must be a Container');
      return t.addChild(this), t;
    }
    removeFromParent() {
      var t;
      (t = this.parent) == null || t.removeChild(this);
    }
    setTransform(
      t = 0,
      i = 0,
      s = 1,
      r = 1,
      n = 0,
      o = 0,
      a = 0,
      h = 0,
      l = 0
    ) {
      return (
        (this.position.x = t),
        (this.position.y = i),
        (this.scale.x = s || 1),
        (this.scale.y = r || 1),
        (this.rotation = n),
        (this.skew.x = o),
        (this.skew.y = a),
        (this.pivot.x = h),
        (this.pivot.y = l),
        this
      );
    }
    destroy(t) {
      this.removeFromParent(),
        (this._destroyed = !0),
        (this.transform = null),
        (this.parent = null),
        (this._bounds = null),
        (this.mask = null),
        (this.cullArea = null),
        (this.filters = null),
        (this.filterArea = null),
        (this.hitArea = null),
        (this.interactive = !1),
        (this.interactiveChildren = !1),
        this.emit('destroyed'),
        this.removeAllListeners();
    }
    get _tempDisplayObjectParent() {
      return (
        this.tempDisplayObjectParent === null &&
          (this.tempDisplayObjectParent = new ea()),
        this.tempDisplayObjectParent
      );
    }
    enableTempParent() {
      const t = this.parent;
      return (this.parent = this._tempDisplayObjectParent), t;
    }
    disableTempParent(t) {
      this.parent = t;
    }
    get x() {
      return this.position.x;
    }
    set x(t) {
      this.transform.position.x = t;
    }
    get y() {
      return this.position.y;
    }
    set y(t) {
      this.transform.position.y = t;
    }
    get worldTransform() {
      return this.transform.worldTransform;
    }
    get localTransform() {
      return this.transform.localTransform;
    }
    get position() {
      return this.transform.position;
    }
    set position(t) {
      this.transform.position.copyFrom(t);
    }
    get scale() {
      return this.transform.scale;
    }
    set scale(t) {
      this.transform.scale.copyFrom(t);
    }
    get pivot() {
      return this.transform.pivot;
    }
    set pivot(t) {
      this.transform.pivot.copyFrom(t);
    }
    get skew() {
      return this.transform.skew;
    }
    set skew(t) {
      this.transform.skew.copyFrom(t);
    }
    get rotation() {
      return this.transform.rotation;
    }
    set rotation(t) {
      this.transform.rotation = t;
    }
    get angle() {
      return this.transform.rotation * go;
    }
    set angle(t) {
      this.transform.rotation = t * yo;
    }
    get zIndex() {
      return this._zIndex;
    }
    set zIndex(t) {
      (this._zIndex = t), this.parent && (this.parent.sortDirty = !0);
    }
    get worldVisible() {
      let t = this;
      do {
        if (!t.visible) return !1;
        t = t.parent;
      } while (t);
      return !0;
    }
    get mask() {
      return this._mask;
    }
    set mask(t) {
      if (this._mask !== t) {
        if (this._mask) {
          const i = this._mask.isMaskData ? this._mask.maskObject : this._mask;
          i &&
            (i._maskRefCount--,
            i._maskRefCount === 0 && ((i.renderable = !0), (i.isMask = !1)));
        }
        if (((this._mask = t), this._mask)) {
          const i = this._mask.isMaskData ? this._mask.maskObject : this._mask;
          i &&
            (i._maskRefCount === 0 && ((i.renderable = !1), (i.isMask = !0)),
            i._maskRefCount++);
        }
      }
    }
  }
  class ea extends it {
    constructor() {
      super(...arguments), (this.sortDirty = null);
    }
  }
  it.prototype.displayObjectUpdateTransform = it.prototype.updateTransform;
  const Qd = new J();
  function Jd(e, t) {
    return e.zIndex === t.zIndex
      ? e._lastSortedIndex - t._lastSortedIndex
      : e.zIndex - t.zIndex;
  }
  const Qr = class extends it {
    constructor() {
      super(),
        (this.children = []),
        (this.sortableChildren = Qr.defaultSortableChildren),
        (this.sortDirty = !1);
    }
    onChildrenChange(e) {}
    addChild(...e) {
      if (e.length > 1) for (let t = 0; t < e.length; t++) this.addChild(e[t]);
      else {
        const t = e[0];
        t.parent && t.parent.removeChild(t),
          (t.parent = this),
          (this.sortDirty = !0),
          (t.transform._parentID = -1),
          this.children.push(t),
          this._boundsID++,
          this.onChildrenChange(this.children.length - 1),
          this.emit('childAdded', t, this, this.children.length - 1),
          t.emit('added', this);
      }
      return e[0];
    }
    addChildAt(e, t) {
      if (t < 0 || t > this.children.length)
        throw new Error(
          `${e}addChildAt: The index ${t} supplied is out of bounds ${this.children.length}`
        );
      return (
        e.parent && e.parent.removeChild(e),
        (e.parent = this),
        (this.sortDirty = !0),
        (e.transform._parentID = -1),
        this.children.splice(t, 0, e),
        this._boundsID++,
        this.onChildrenChange(t),
        e.emit('added', this),
        this.emit('childAdded', e, this, t),
        e
      );
    }
    swapChildren(e, t) {
      if (e === t) return;
      const i = this.getChildIndex(e),
        s = this.getChildIndex(t);
      (this.children[i] = t),
        (this.children[s] = e),
        this.onChildrenChange(i < s ? i : s);
    }
    getChildIndex(e) {
      const t = this.children.indexOf(e);
      if (t === -1)
        throw new Error(
          'The supplied DisplayObject must be a child of the caller'
        );
      return t;
    }
    setChildIndex(e, t) {
      if (t < 0 || t >= this.children.length)
        throw new Error(
          `The index ${t} supplied is out of bounds ${this.children.length}`
        );
      const i = this.getChildIndex(e);
      be(this.children, i, 1),
        this.children.splice(t, 0, e),
        this.onChildrenChange(t);
    }
    getChildAt(e) {
      if (e < 0 || e >= this.children.length)
        throw new Error(`getChildAt: Index (${e}) does not exist.`);
      return this.children[e];
    }
    removeChild(...e) {
      if (e.length > 1)
        for (let t = 0; t < e.length; t++) this.removeChild(e[t]);
      else {
        const t = e[0],
          i = this.children.indexOf(t);
        if (i === -1) return null;
        (t.parent = null),
          (t.transform._parentID = -1),
          be(this.children, i, 1),
          this._boundsID++,
          this.onChildrenChange(i),
          t.emit('removed', this),
          this.emit('childRemoved', t, this, i);
      }
      return e[0];
    }
    removeChildAt(e) {
      const t = this.getChildAt(e);
      return (
        (t.parent = null),
        (t.transform._parentID = -1),
        be(this.children, e, 1),
        this._boundsID++,
        this.onChildrenChange(e),
        t.emit('removed', this),
        this.emit('childRemoved', t, this, e),
        t
      );
    }
    removeChildren(e = 0, t = this.children.length) {
      const i = e,
        s = t,
        r = s - i;
      let n;
      if (r > 0 && r <= s) {
        n = this.children.splice(i, r);
        for (let o = 0; o < n.length; ++o)
          (n[o].parent = null),
            n[o].transform && (n[o].transform._parentID = -1);
        this._boundsID++, this.onChildrenChange(e);
        for (let o = 0; o < n.length; ++o)
          n[o].emit('removed', this), this.emit('childRemoved', n[o], this, o);
        return n;
      } else if (r === 0 && this.children.length === 0) return [];
      throw new RangeError(
        'removeChildren: numeric values are outside the acceptable range.'
      );
    }
    sortChildren() {
      let e = !1;
      for (let t = 0, i = this.children.length; t < i; ++t) {
        const s = this.children[t];
        (s._lastSortedIndex = t), !e && s.zIndex !== 0 && (e = !0);
      }
      e && this.children.length > 1 && this.children.sort(Jd),
        (this.sortDirty = !1);
    }
    updateTransform() {
      this.sortableChildren && this.sortDirty && this.sortChildren(),
        this._boundsID++,
        this.transform.updateTransform(this.parent.transform),
        (this.worldAlpha = this.alpha * this.parent.worldAlpha);
      for (let e = 0, t = this.children.length; e < t; ++e) {
        const i = this.children[e];
        i.visible && i.updateTransform();
      }
    }
    calculateBounds() {
      this._bounds.clear(), this._calculateBounds();
      for (let e = 0; e < this.children.length; e++) {
        const t = this.children[e];
        if (!(!t.visible || !t.renderable))
          if ((t.calculateBounds(), t._mask)) {
            const i = t._mask.isMaskData ? t._mask.maskObject : t._mask;
            i
              ? (i.calculateBounds(),
                this._bounds.addBoundsMask(t._bounds, i._bounds))
              : this._bounds.addBounds(t._bounds);
          } else
            t.filterArea
              ? this._bounds.addBoundsArea(t._bounds, t.filterArea)
              : this._bounds.addBounds(t._bounds);
      }
      this._bounds.updateID = this._boundsID;
    }
    getLocalBounds(e, t = !1) {
      const i = super.getLocalBounds(e);
      if (!t)
        for (let s = 0, r = this.children.length; s < r; ++s) {
          const n = this.children[s];
          n.visible && n.updateTransform();
        }
      return i;
    }
    _calculateBounds() {}
    _renderWithCulling(e) {
      const t = e.renderTexture.sourceFrame;
      if (!(t.width > 0 && t.height > 0)) return;
      let i, s;
      this.cullArea
        ? ((i = this.cullArea), (s = this.worldTransform))
        : this._render !== Qr.prototype._render && (i = this.getBounds(!0));
      const r = e.projection.transform;
      if (
        (r && (s ? ((s = Qd.copyFrom(s)), s.prepend(r)) : (s = r)),
        i && t.intersects(i, s))
      )
        this._render(e);
      else if (this.cullArea) return;
      for (let n = 0, o = this.children.length; n < o; ++n) {
        const a = this.children[n],
          h = a.cullable;
        (a.cullable = h || !this.cullArea), a.render(e), (a.cullable = h);
      }
    }
    render(e) {
      var t;
      if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
        if (this._mask || ((t = this.filters) == null ? void 0 : t.length))
          this.renderAdvanced(e);
        else if (this.cullable) this._renderWithCulling(e);
        else {
          this._render(e);
          for (let i = 0, s = this.children.length; i < s; ++i)
            this.children[i].render(e);
        }
    }
    renderAdvanced(e) {
      var r, n, o;
      const t = this.filters,
        i = this._mask;
      if (t) {
        this._enabledFilters || (this._enabledFilters = []),
          (this._enabledFilters.length = 0);
        for (let a = 0; a < t.length; a++)
          t[a].enabled && this._enabledFilters.push(t[a]);
      }
      const s =
        (t && ((r = this._enabledFilters) == null ? void 0 : r.length)) ||
        (i &&
          (!i.isMaskData ||
            (i.enabled && (i.autoDetect || i.type !== ht.NONE))));
      if (
        (s && e.batch.flush(),
        t &&
          ((n = this._enabledFilters) == null ? void 0 : n.length) &&
          e.filter.push(this, this._enabledFilters),
        i && e.mask.push(this, this._mask),
        this.cullable)
      )
        this._renderWithCulling(e);
      else {
        this._render(e);
        for (let a = 0, h = this.children.length; a < h; ++a)
          this.children[a].render(e);
      }
      s && e.batch.flush(),
        i && e.mask.pop(this),
        t &&
          ((o = this._enabledFilters) == null ? void 0 : o.length) &&
          e.filter.pop();
    }
    _render(e) {}
    destroy(e) {
      super.destroy(), (this.sortDirty = !1);
      const t = typeof e == 'boolean' ? e : e == null ? void 0 : e.children,
        i = this.removeChildren(0, this.children.length);
      if (t) for (let s = 0; s < i.length; ++s) i[s].destroy(e);
    }
    get width() {
      return this.scale.x * this.getLocalBounds().width;
    }
    set width(e) {
      const t = this.getLocalBounds().width;
      t !== 0 ? (this.scale.x = e / t) : (this.scale.x = 1), (this._width = e);
    }
    get height() {
      return this.scale.y * this.getLocalBounds().height;
    }
    set height(e) {
      const t = this.getLocalBounds().height;
      t !== 0 ? (this.scale.y = e / t) : (this.scale.y = 1), (this._height = e);
    }
  };
  let St = Qr;
  (St.defaultSortableChildren = !1),
    (St.prototype.containerUpdateTransform = St.prototype.updateTransform),
    Object.defineProperties(B, {
      SORTABLE_CHILDREN: {
        get() {
          return St.defaultSortableChildren;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren'
          ),
            (St.defaultSortableChildren = e);
        },
      },
    });
  const pi = new j(),
    tf = new Uint16Array([0, 1, 2, 0, 2, 3]);
  class pe extends St {
    constructor(t) {
      super(),
        (this._anchor = new he(
          this._onAnchorUpdate,
          this,
          t ? t.defaultAnchor.x : 0,
          t ? t.defaultAnchor.y : 0
        )),
        (this._texture = null),
        (this._width = 0),
        (this._height = 0),
        (this._tint = null),
        (this._tintRGB = null),
        (this.tint = 16777215),
        (this.blendMode = G.NORMAL),
        (this._cachedTint = 16777215),
        (this.uvs = null),
        (this.texture = t || D.EMPTY),
        (this.vertexData = new Float32Array(8)),
        (this.vertexTrimmedData = null),
        (this._transformID = -1),
        (this._textureID = -1),
        (this._transformTrimmedID = -1),
        (this._textureTrimmedID = -1),
        (this.indices = tf),
        (this.pluginName = 'batch'),
        (this.isSprite = !0),
        (this._roundPixels = B.ROUND_PIXELS);
    }
    _onTextureUpdate() {
      (this._textureID = -1),
        (this._textureTrimmedID = -1),
        (this._cachedTint = 16777215),
        this._width &&
          (this.scale.x =
            (Ee(this.scale.x) * this._width) / this._texture.orig.width),
        this._height &&
          (this.scale.y =
            (Ee(this.scale.y) * this._height) / this._texture.orig.height);
    }
    _onAnchorUpdate() {
      (this._transformID = -1), (this._transformTrimmedID = -1);
    }
    calculateVertices() {
      const t = this._texture;
      if (
        this._transformID === this.transform._worldID &&
        this._textureID === t._updateID
      )
        return;
      this._textureID !== t._updateID &&
        (this.uvs = this._texture._uvs.uvsFloat32),
        (this._transformID = this.transform._worldID),
        (this._textureID = t._updateID);
      const i = this.transform.worldTransform,
        s = i.a,
        r = i.b,
        n = i.c,
        o = i.d,
        a = i.tx,
        h = i.ty,
        l = this.vertexData,
        c = t.trim,
        u = t.orig,
        d = this._anchor;
      let f = 0,
        p = 0,
        g = 0,
        _ = 0;
      if (
        (c
          ? ((p = c.x - d._x * u.width),
            (f = p + c.width),
            (_ = c.y - d._y * u.height),
            (g = _ + c.height))
          : ((p = -d._x * u.width),
            (f = p + u.width),
            (_ = -d._y * u.height),
            (g = _ + u.height)),
        (l[0] = s * p + n * _ + a),
        (l[1] = o * _ + r * p + h),
        (l[2] = s * f + n * _ + a),
        (l[3] = o * _ + r * f + h),
        (l[4] = s * f + n * g + a),
        (l[5] = o * g + r * f + h),
        (l[6] = s * p + n * g + a),
        (l[7] = o * g + r * p + h),
        this._roundPixels)
      ) {
        const v = B.RESOLUTION;
        for (let T = 0; T < l.length; ++T) l[T] = Math.round(l[T] * v) / v;
      }
    }
    calculateTrimmedVertices() {
      if (!this.vertexTrimmedData) this.vertexTrimmedData = new Float32Array(8);
      else if (
        this._transformTrimmedID === this.transform._worldID &&
        this._textureTrimmedID === this._texture._updateID
      )
        return;
      (this._transformTrimmedID = this.transform._worldID),
        (this._textureTrimmedID = this._texture._updateID);
      const t = this._texture,
        i = this.vertexTrimmedData,
        s = t.orig,
        r = this._anchor,
        n = this.transform.worldTransform,
        o = n.a,
        a = n.b,
        h = n.c,
        l = n.d,
        c = n.tx,
        u = n.ty,
        d = -r._x * s.width,
        f = d + s.width,
        p = -r._y * s.height,
        g = p + s.height;
      (i[0] = o * d + h * p + c),
        (i[1] = l * p + a * d + u),
        (i[2] = o * f + h * p + c),
        (i[3] = l * p + a * f + u),
        (i[4] = o * f + h * g + c),
        (i[5] = l * g + a * f + u),
        (i[6] = o * d + h * g + c),
        (i[7] = l * g + a * d + u);
    }
    _render(t) {
      this.calculateVertices(),
        t.batch.setObjectRenderer(t.plugins[this.pluginName]),
        t.plugins[this.pluginName].render(this);
    }
    _calculateBounds() {
      const t = this._texture.trim,
        i = this._texture.orig;
      !t || (t.width === i.width && t.height === i.height)
        ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData))
        : (this.calculateTrimmedVertices(),
          this._bounds.addQuad(this.vertexTrimmedData));
    }
    getLocalBounds(t) {
      return this.children.length === 0
        ? (this._localBounds || (this._localBounds = new fi()),
          (this._localBounds.minX =
            this._texture.orig.width * -this._anchor._x),
          (this._localBounds.minY =
            this._texture.orig.height * -this._anchor._y),
          (this._localBounds.maxX =
            this._texture.orig.width * (1 - this._anchor._x)),
          (this._localBounds.maxY =
            this._texture.orig.height * (1 - this._anchor._y)),
          t ||
            (this._localBoundsRect || (this._localBoundsRect = new W()),
            (t = this._localBoundsRect)),
          this._localBounds.getRectangle(t))
        : super.getLocalBounds.call(this, t);
    }
    containsPoint(t) {
      this.worldTransform.applyInverse(t, pi);
      const i = this._texture.orig.width,
        s = this._texture.orig.height,
        r = -i * this.anchor.x;
      let n = 0;
      return (
        pi.x >= r &&
        pi.x < r + i &&
        ((n = -s * this.anchor.y), pi.y >= n && pi.y < n + s)
      );
    }
    destroy(t) {
      if (
        (super.destroy(t),
        this._texture.off('update', this._onTextureUpdate, this),
        (this._anchor = null),
        typeof t == 'boolean' ? t : t == null ? void 0 : t.texture)
      ) {
        const s =
          typeof t == 'boolean' ? t : t == null ? void 0 : t.baseTexture;
        this._texture.destroy(!!s);
      }
      this._texture = null;
    }
    static from(t, i) {
      const s = t instanceof D ? t : D.from(t, i);
      return new pe(s);
    }
    set roundPixels(t) {
      this._roundPixels !== t && (this._transformID = -1),
        (this._roundPixels = t);
    }
    get roundPixels() {
      return this._roundPixels;
    }
    get width() {
      return Math.abs(this.scale.x) * this._texture.orig.width;
    }
    set width(t) {
      const i = Ee(this.scale.x) || 1;
      (this.scale.x = (i * t) / this._texture.orig.width), (this._width = t);
    }
    get height() {
      return Math.abs(this.scale.y) * this._texture.orig.height;
    }
    set height(t) {
      const i = Ee(this.scale.y) || 1;
      (this.scale.y = (i * t) / this._texture.orig.height), (this._height = t);
    }
    get anchor() {
      return this._anchor;
    }
    set anchor(t) {
      this._anchor.copyFrom(t);
    }
    get tint() {
      return this._tint;
    }
    set tint(t) {
      (this._tint = t),
        (this._tintRGB = (t >> 16) + (t & 65280) + ((t & 255) << 16));
    }
    get texture() {
      return this._texture;
    }
    set texture(t) {
      this._texture !== t &&
        (this._texture &&
          this._texture.off('update', this._onTextureUpdate, this),
        (this._texture = t || D.EMPTY),
        (this._cachedTint = 16777215),
        (this._textureID = -1),
        (this._textureTrimmedID = -1),
        t &&
          (t.baseTexture.valid
            ? this._onTextureUpdate()
            : t.once('update', this._onTextureUpdate, this)));
    }
  }
  const ia = new J();
  (it.prototype._cacheAsBitmap = !1),
    (it.prototype._cacheData = null),
    (it.prototype._cacheAsBitmapResolution = null),
    (it.prototype._cacheAsBitmapMultisample = null);
  class ef {
    constructor() {
      (this.textureCacheId = null),
        (this.originalRender = null),
        (this.originalRenderCanvas = null),
        (this.originalCalculateBounds = null),
        (this.originalGetLocalBounds = null),
        (this.originalUpdateTransform = null),
        (this.originalDestroy = null),
        (this.originalMask = null),
        (this.originalFilterArea = null),
        (this.originalContainsPoint = null),
        (this.sprite = null);
    }
  }
  Object.defineProperties(it.prototype, {
    cacheAsBitmapResolution: {
      get() {
        return this._cacheAsBitmapResolution;
      },
      set(e) {
        e !== this._cacheAsBitmapResolution &&
          ((this._cacheAsBitmapResolution = e),
          this.cacheAsBitmap &&
            ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
      },
    },
    cacheAsBitmapMultisample: {
      get() {
        return this._cacheAsBitmapMultisample;
      },
      set(e) {
        e !== this._cacheAsBitmapMultisample &&
          ((this._cacheAsBitmapMultisample = e),
          this.cacheAsBitmap &&
            ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
      },
    },
    cacheAsBitmap: {
      get() {
        return this._cacheAsBitmap;
      },
      set(e) {
        if (this._cacheAsBitmap === e) return;
        this._cacheAsBitmap = e;
        let t;
        e
          ? (this._cacheData || (this._cacheData = new ef()),
            (t = this._cacheData),
            (t.originalRender = this.render),
            (t.originalRenderCanvas = this.renderCanvas),
            (t.originalUpdateTransform = this.updateTransform),
            (t.originalCalculateBounds = this.calculateBounds),
            (t.originalGetLocalBounds = this.getLocalBounds),
            (t.originalDestroy = this.destroy),
            (t.originalContainsPoint = this.containsPoint),
            (t.originalMask = this._mask),
            (t.originalFilterArea = this.filterArea),
            (this.render = this._renderCached),
            (this.renderCanvas = this._renderCachedCanvas),
            (this.destroy = this._cacheAsBitmapDestroy))
          : ((t = this._cacheData),
            t.sprite && this._destroyCachedDisplayObject(),
            (this.render = t.originalRender),
            (this.renderCanvas = t.originalRenderCanvas),
            (this.calculateBounds = t.originalCalculateBounds),
            (this.getLocalBounds = t.originalGetLocalBounds),
            (this.destroy = t.originalDestroy),
            (this.updateTransform = t.originalUpdateTransform),
            (this.containsPoint = t.originalContainsPoint),
            (this._mask = t.originalMask),
            (this.filterArea = t.originalFilterArea));
      },
    },
  }),
    (it.prototype._renderCached = function (t) {
      !this.visible ||
        this.worldAlpha <= 0 ||
        !this.renderable ||
        (this._initCachedDisplayObject(t),
        (this._cacheData.sprite.transform._worldID = this.transform._worldID),
        (this._cacheData.sprite.worldAlpha = this.worldAlpha),
        this._cacheData.sprite._render(t));
    }),
    (it.prototype._initCachedDisplayObject = function (t) {
      var d, f, p;
      if ((d = this._cacheData) != null && d.sprite) return;
      const i = this.alpha;
      (this.alpha = 1), t.batch.flush();
      const s = this.getLocalBounds(null, !0).clone();
      if ((f = this.filters) != null && f.length) {
        const g = this.filters[0].padding;
        s.pad(g);
      }
      s.ceil(B.RESOLUTION);
      const r = t.renderTexture.current,
        n = t.renderTexture.sourceFrame.clone(),
        o = t.renderTexture.destinationFrame.clone(),
        a = t.projection.transform,
        h = ce.create({
          width: s.width,
          height: s.height,
          resolution: this.cacheAsBitmapResolution || t.resolution,
          multisample:
            (p = this.cacheAsBitmapMultisample) != null ? p : t.multisample,
        }),
        l = `cacheAsBitmap_${de()}`;
      (this._cacheData.textureCacheId = l),
        V.addToCache(h.baseTexture, l),
        D.addToCache(h, l);
      const c = this.transform.localTransform
        .copyTo(ia)
        .invert()
        .translate(-s.x, -s.y);
      (this.render = this._cacheData.originalRender),
        t.render(this, {
          renderTexture: h,
          clear: !0,
          transform: c,
          skipUpdateTransform: !1,
        }),
        t.framebuffer.blit(),
        (t.projection.transform = a),
        t.renderTexture.bind(r, n, o),
        (this.render = this._renderCached),
        (this.updateTransform = this.displayObjectUpdateTransform),
        (this.calculateBounds = this._calculateCachedBounds),
        (this.getLocalBounds = this._getCachedLocalBounds),
        (this._mask = null),
        (this.filterArea = null),
        (this.alpha = i);
      const u = new pe(h);
      (u.transform.worldTransform = this.transform.worldTransform),
        (u.anchor.x = -(s.x / s.width)),
        (u.anchor.y = -(s.y / s.height)),
        (u.alpha = i),
        (u._bounds = this._bounds),
        (this._cacheData.sprite = u),
        (this.transform._parentID = -1),
        this.parent
          ? this.updateTransform()
          : (this.enableTempParent(),
            this.updateTransform(),
            this.disableTempParent(null)),
        (this.containsPoint = u.containsPoint.bind(u));
    }),
    (it.prototype._renderCachedCanvas = function (t) {
      !this.visible ||
        this.worldAlpha <= 0 ||
        !this.renderable ||
        (this._initCachedDisplayObjectCanvas(t),
        (this._cacheData.sprite.worldAlpha = this.worldAlpha),
        this._cacheData.sprite._renderCanvas(t));
    }),
    (it.prototype._initCachedDisplayObjectCanvas = function (t) {
      var c;
      if ((c = this._cacheData) != null && c.sprite) return;
      const i = this.getLocalBounds(null, !0),
        s = this.alpha;
      this.alpha = 1;
      const r = t.canvasContext.activeContext,
        n = t._projTransform;
      i.ceil(B.RESOLUTION);
      const o = ce.create({ width: i.width, height: i.height }),
        a = `cacheAsBitmap_${de()}`;
      (this._cacheData.textureCacheId = a),
        V.addToCache(o.baseTexture, a),
        D.addToCache(o, a);
      const h = ia;
      this.transform.localTransform.copyTo(h),
        h.invert(),
        (h.tx -= i.x),
        (h.ty -= i.y),
        (this.renderCanvas = this._cacheData.originalRenderCanvas),
        t.render(this, {
          renderTexture: o,
          clear: !0,
          transform: h,
          skipUpdateTransform: !1,
        }),
        (t.canvasContext.activeContext = r),
        (t._projTransform = n),
        (this.renderCanvas = this._renderCachedCanvas),
        (this.updateTransform = this.displayObjectUpdateTransform),
        (this.calculateBounds = this._calculateCachedBounds),
        (this.getLocalBounds = this._getCachedLocalBounds),
        (this._mask = null),
        (this.filterArea = null),
        (this.alpha = s);
      const l = new pe(o);
      (l.transform.worldTransform = this.transform.worldTransform),
        (l.anchor.x = -(i.x / i.width)),
        (l.anchor.y = -(i.y / i.height)),
        (l.alpha = s),
        (l._bounds = this._bounds),
        (this._cacheData.sprite = l),
        (this.transform._parentID = -1),
        this.parent
          ? this.updateTransform()
          : ((this.parent = t._tempDisplayObjectParent),
            this.updateTransform(),
            (this.parent = null)),
        (this.containsPoint = l.containsPoint.bind(l));
    }),
    (it.prototype._calculateCachedBounds = function () {
      this._bounds.clear(),
        (this._cacheData.sprite.transform._worldID = this.transform._worldID),
        this._cacheData.sprite._calculateBounds(),
        (this._bounds.updateID = this._boundsID);
    }),
    (it.prototype._getCachedLocalBounds = function () {
      return this._cacheData.sprite.getLocalBounds(null);
    }),
    (it.prototype._destroyCachedDisplayObject = function () {
      this._cacheData.sprite._texture.destroy(!0),
        (this._cacheData.sprite = null),
        V.removeFromCache(this._cacheData.textureCacheId),
        D.removeFromCache(this._cacheData.textureCacheId),
        (this._cacheData.textureCacheId = null);
    }),
    (it.prototype._cacheAsBitmapDestroy = function (t) {
      (this.cacheAsBitmap = !1), this.destroy(t);
    }),
    (it.prototype.name = null),
    (St.prototype.getChildByName = function (t, i) {
      for (let s = 0, r = this.children.length; s < r; s++)
        if (this.children[s].name === t) return this.children[s];
      if (i)
        for (let s = 0, r = this.children.length; s < r; s++) {
          const n = this.children[s];
          if (!n.getChildByName) continue;
          const o = n.getChildByName(t, !0);
          if (o) return o;
        }
      return null;
    }),
    (it.prototype.getGlobalPosition = function (t = new j(), i = !1) {
      return (
        this.parent
          ? this.parent.toGlobal(this.position, t, i)
          : ((t.x = this.position.x), (t.y = this.position.y)),
        t
      );
    });
  var sf = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
  class sa extends _t {
    constructor(t = 1) {
      super(Qo, sf, { uAlpha: 1 }), (this.alpha = t);
    }
    get alpha() {
      return this.uniforms.uAlpha;
    }
    set alpha(t) {
      this.uniforms.uAlpha = t;
    }
  }
  const rf = {
      5: [0.153388, 0.221461, 0.250301],
      7: [0.071303, 0.131514, 0.189879, 0.214607],
      9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
      11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
      13: [
        0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641,
      ],
      15: [
        489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697,
        0.197448,
      ],
    },
    nf = [
      'varying vec2 vBlurTexCoords[%size%];',
      'uniform sampler2D uSampler;',
      'void main(void)',
      '{',
      '    gl_FragColor = vec4(0.0);',
      '    %blur%',
      '}',
    ].join(`
`);
  function of(e) {
    const t = rf[e],
      i = t.length;
    let s = nf,
      r = '';
    const n =
      'gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;';
    let o;
    for (let a = 0; a < e; a++) {
      let h = n.replace('%index%', a.toString());
      (o = a),
        a >= i && (o = e - a - 1),
        (h = h.replace('%value%', t[o].toString())),
        (r += h),
        (r += `
`);
    }
    return (
      (s = s.replace('%blur%', r)), (s = s.replace('%size%', e.toString())), s
    );
  }
  const af = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
  function hf(e, t) {
    const i = Math.ceil(e / 2);
    let s = af,
      r = '',
      n;
    t
      ? (n =
          'vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);')
      : (n =
          'vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);');
    for (let o = 0; o < e; o++) {
      let a = n.replace('%index%', o.toString());
      (a = a.replace('%sampleIndex%', `${o - (i - 1)}.0`)),
        (r += a),
        (r += `
`);
    }
    return (
      (s = s.replace('%blur%', r)), (s = s.replace('%size%', e.toString())), s
    );
  }
  class ms extends _t {
    constructor(t, i = 8, s = 4, r = _t.defaultResolution, n = 5) {
      const o = hf(n, t),
        a = of(n);
      super(o, a),
        (this.horizontal = t),
        (this.resolution = r),
        (this._quality = 0),
        (this.quality = s),
        (this.blur = i);
    }
    apply(t, i, s, r) {
      if (
        (s
          ? this.horizontal
            ? (this.uniforms.strength = (1 / s.width) * (s.width / i.width))
            : (this.uniforms.strength = (1 / s.height) * (s.height / i.height))
          : this.horizontal
          ? (this.uniforms.strength =
              (1 / t.renderer.width) * (t.renderer.width / i.width))
          : (this.uniforms.strength =
              (1 / t.renderer.height) * (t.renderer.height / i.height)),
        (this.uniforms.strength *= this.strength),
        (this.uniforms.strength /= this.passes),
        this.passes === 1)
      )
        t.applyFilter(this, i, s, r);
      else {
        const n = t.getFilterTexture(),
          o = t.renderer;
        let a = i,
          h = n;
        (this.state.blend = !1), t.applyFilter(this, a, h, Xt.CLEAR);
        for (let l = 1; l < this.passes - 1; l++) {
          t.bindAndClear(a, Xt.BLIT), (this.uniforms.uSampler = h);
          const c = h;
          (h = a), (a = c), o.shader.bind(this), o.geometry.draw(5);
        }
        (this.state.blend = !0),
          t.applyFilter(this, h, s, r),
          t.returnFilterTexture(n);
      }
    }
    get blur() {
      return this.strength;
    }
    set blur(t) {
      (this.padding = 1 + Math.abs(t) * 2), (this.strength = t);
    }
    get quality() {
      return this._quality;
    }
    set quality(t) {
      (this._quality = t), (this.passes = t);
    }
  }
  class ra extends _t {
    constructor(t = 8, i = 4, s = _t.defaultResolution, r = 5) {
      super(),
        (this.blurXFilter = new ms(!0, t, i, s, r)),
        (this.blurYFilter = new ms(!1, t, i, s, r)),
        (this.resolution = s),
        (this.quality = i),
        (this.blur = t),
        (this.repeatEdgePixels = !1);
    }
    apply(t, i, s, r) {
      const n = Math.abs(this.blurXFilter.strength),
        o = Math.abs(this.blurYFilter.strength);
      if (n && o) {
        const a = t.getFilterTexture();
        this.blurXFilter.apply(t, i, a, Xt.CLEAR),
          this.blurYFilter.apply(t, a, s, r),
          t.returnFilterTexture(a);
      } else
        o
          ? this.blurYFilter.apply(t, i, s, r)
          : this.blurXFilter.apply(t, i, s, r);
    }
    updatePadding() {
      this._repeatEdgePixels
        ? (this.padding = 0)
        : (this.padding =
            Math.max(
              Math.abs(this.blurXFilter.strength),
              Math.abs(this.blurYFilter.strength)
            ) * 2);
    }
    get blur() {
      return this.blurXFilter.blur;
    }
    set blur(t) {
      (this.blurXFilter.blur = this.blurYFilter.blur = t), this.updatePadding();
    }
    get quality() {
      return this.blurXFilter.quality;
    }
    set quality(t) {
      this.blurXFilter.quality = this.blurYFilter.quality = t;
    }
    get blurX() {
      return this.blurXFilter.blur;
    }
    set blurX(t) {
      (this.blurXFilter.blur = t), this.updatePadding();
    }
    get blurY() {
      return this.blurYFilter.blur;
    }
    set blurY(t) {
      (this.blurYFilter.blur = t), this.updatePadding();
    }
    get blendMode() {
      return this.blurYFilter.blendMode;
    }
    set blendMode(t) {
      this.blurYFilter.blendMode = t;
    }
    get repeatEdgePixels() {
      return this._repeatEdgePixels;
    }
    set repeatEdgePixels(t) {
      (this._repeatEdgePixels = t), this.updatePadding();
    }
  }
  var lf = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
  class _s extends _t {
    constructor() {
      const t = {
        m: new Float32Array([
          1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
        ]),
        uAlpha: 1,
      };
      super(zr, lf, t), (this.alpha = 1);
    }
    _loadMatrix(t, i = !1) {
      let s = t;
      i && (this._multiply(s, this.uniforms.m, t), (s = this._colorMatrix(s))),
        (this.uniforms.m = s);
    }
    _multiply(t, i, s) {
      return (
        (t[0] = i[0] * s[0] + i[1] * s[5] + i[2] * s[10] + i[3] * s[15]),
        (t[1] = i[0] * s[1] + i[1] * s[6] + i[2] * s[11] + i[3] * s[16]),
        (t[2] = i[0] * s[2] + i[1] * s[7] + i[2] * s[12] + i[3] * s[17]),
        (t[3] = i[0] * s[3] + i[1] * s[8] + i[2] * s[13] + i[3] * s[18]),
        (t[4] = i[0] * s[4] + i[1] * s[9] + i[2] * s[14] + i[3] * s[19] + i[4]),
        (t[5] = i[5] * s[0] + i[6] * s[5] + i[7] * s[10] + i[8] * s[15]),
        (t[6] = i[5] * s[1] + i[6] * s[6] + i[7] * s[11] + i[8] * s[16]),
        (t[7] = i[5] * s[2] + i[6] * s[7] + i[7] * s[12] + i[8] * s[17]),
        (t[8] = i[5] * s[3] + i[6] * s[8] + i[7] * s[13] + i[8] * s[18]),
        (t[9] = i[5] * s[4] + i[6] * s[9] + i[7] * s[14] + i[8] * s[19] + i[9]),
        (t[10] = i[10] * s[0] + i[11] * s[5] + i[12] * s[10] + i[13] * s[15]),
        (t[11] = i[10] * s[1] + i[11] * s[6] + i[12] * s[11] + i[13] * s[16]),
        (t[12] = i[10] * s[2] + i[11] * s[7] + i[12] * s[12] + i[13] * s[17]),
        (t[13] = i[10] * s[3] + i[11] * s[8] + i[12] * s[13] + i[13] * s[18]),
        (t[14] =
          i[10] * s[4] + i[11] * s[9] + i[12] * s[14] + i[13] * s[19] + i[14]),
        (t[15] = i[15] * s[0] + i[16] * s[5] + i[17] * s[10] + i[18] * s[15]),
        (t[16] = i[15] * s[1] + i[16] * s[6] + i[17] * s[11] + i[18] * s[16]),
        (t[17] = i[15] * s[2] + i[16] * s[7] + i[17] * s[12] + i[18] * s[17]),
        (t[18] = i[15] * s[3] + i[16] * s[8] + i[17] * s[13] + i[18] * s[18]),
        (t[19] =
          i[15] * s[4] + i[16] * s[9] + i[17] * s[14] + i[18] * s[19] + i[19]),
        t
      );
    }
    _colorMatrix(t) {
      const i = new Float32Array(t);
      return (i[4] /= 255), (i[9] /= 255), (i[14] /= 255), (i[19] /= 255), i;
    }
    brightness(t, i) {
      const s = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(s, i);
    }
    tint(t, i) {
      const s = (t >> 16) & 255,
        r = (t >> 8) & 255,
        n = t & 255,
        o = [
          s / 255,
          0,
          0,
          0,
          0,
          0,
          r / 255,
          0,
          0,
          0,
          0,
          0,
          n / 255,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
        ];
      this._loadMatrix(o, i);
    }
    greyscale(t, i) {
      const s = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(s, i);
    }
    blackAndWhite(t) {
      const i = [
        0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0,
        1, 0,
      ];
      this._loadMatrix(i, t);
    }
    hue(t, i) {
      t = ((t || 0) / 180) * Math.PI;
      const s = Math.cos(t),
        r = Math.sin(t),
        n = Math.sqrt,
        o = 1 / 3,
        a = n(o),
        h = s + (1 - s) * o,
        l = o * (1 - s) - a * r,
        c = o * (1 - s) + a * r,
        u = o * (1 - s) + a * r,
        d = s + o * (1 - s),
        f = o * (1 - s) - a * r,
        p = o * (1 - s) - a * r,
        g = o * (1 - s) + a * r,
        _ = s + o * (1 - s),
        v = [h, l, c, 0, 0, u, d, f, 0, 0, p, g, _, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(v, i);
    }
    contrast(t, i) {
      const s = (t || 0) + 1,
        r = -0.5 * (s - 1),
        n = [s, 0, 0, 0, r, 0, s, 0, 0, r, 0, 0, s, 0, r, 0, 0, 0, 1, 0];
      this._loadMatrix(n, i);
    }
    saturate(t = 0, i) {
      const s = (t * 2) / 3 + 1,
        r = (s - 1) * -0.5,
        n = [s, r, r, 0, 0, r, s, r, 0, 0, r, r, s, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(n, i);
    }
    desaturate() {
      this.saturate(-1);
    }
    negative(t) {
      const i = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(i, t);
    }
    sepia(t) {
      const i = [
        0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0,
        0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0,
      ];
      this._loadMatrix(i, t);
    }
    technicolor(t) {
      const i = [
        1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0,
        11.793603434377337, -0.3087833385928097, 1.7658908555458428,
        -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616,
        -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0,
        1, 0,
      ];
      this._loadMatrix(i, t);
    }
    polaroid(t) {
      const i = [
        1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016,
        -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
      ];
      this._loadMatrix(i, t);
    }
    toBGR(t) {
      const i = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(i, t);
    }
    kodachrome(t) {
      const i = [
        1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0,
        63.72958762196502, -0.16404339962244616, 1.0835251566291304,
        -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763,
        -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0,
        1, 0,
      ];
      this._loadMatrix(i, t);
    }
    browni(t) {
      const i = [
        0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
        47.43192855600873, -0.037703249837783157, 0.8609577587992641,
        0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335,
        -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0,
        0, 1, 0,
      ];
      this._loadMatrix(i, t);
    }
    vintage(t) {
      const i = [
        0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0,
        9.651285835294123, 0.02578397704808868, 0.6441188644374771,
        0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
        -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0,
        1, 0,
      ];
      this._loadMatrix(i, t);
    }
    colorTone(t, i, s, r, n) {
      (t = t || 0.2), (i = i || 0.15), (s = s || 16770432), (r = r || 3375104);
      const o = ((s >> 16) & 255) / 255,
        a = ((s >> 8) & 255) / 255,
        h = (s & 255) / 255,
        l = ((r >> 16) & 255) / 255,
        c = ((r >> 8) & 255) / 255,
        u = (r & 255) / 255,
        d = [
          0.3,
          0.59,
          0.11,
          0,
          0,
          o,
          a,
          h,
          t,
          0,
          l,
          c,
          u,
          i,
          0,
          o - l,
          a - c,
          h - u,
          0,
          0,
        ];
      this._loadMatrix(d, n);
    }
    night(t, i) {
      t = t || 0.1;
      const s = [
        t * -2,
        -t,
        0,
        0,
        0,
        -t,
        0,
        t,
        0,
        0,
        0,
        t,
        t * 2,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
      ];
      this._loadMatrix(s, i);
    }
    predator(t, i) {
      const s = [
        11.224130630493164 * t,
        -4.794486999511719 * t,
        -2.8746118545532227 * t,
        0 * t,
        0.40342438220977783 * t,
        -3.6330697536468506 * t,
        9.193157196044922 * t,
        -2.951810836791992 * t,
        0 * t,
        -1.316135048866272 * t,
        -3.2184197902679443 * t,
        -4.2375030517578125 * t,
        7.476448059082031 * t,
        0 * t,
        0.8044459223747253 * t,
        0,
        0,
        0,
        1,
        0,
      ];
      this._loadMatrix(s, i);
    }
    lsd(t) {
      const i = [
        2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0,
        1, 0,
      ];
      this._loadMatrix(i, t);
    }
    reset() {
      const t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(t, !1);
    }
    get matrix() {
      return this.uniforms.m;
    }
    set matrix(t) {
      this.uniforms.m = t;
    }
    get alpha() {
      return this.uniforms.uAlpha;
    }
    set alpha(t) {
      this.uniforms.uAlpha = t;
    }
  }
  _s.prototype.grayscale = _s.prototype.greyscale;
  var cf = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,
    uf = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
  class na extends _t {
    constructor(t, i) {
      const s = new J();
      (t.renderable = !1),
        super(uf, cf, {
          mapSampler: t._texture,
          filterMatrix: s,
          scale: { x: 1, y: 1 },
          rotation: new Float32Array([1, 0, 0, 1]),
        }),
        (this.maskSprite = t),
        (this.maskMatrix = s),
        i == null && (i = 20),
        (this.scale = new j(i, i));
    }
    apply(t, i, s, r) {
      (this.uniforms.filterMatrix = t.calculateSpriteMatrix(
        this.maskMatrix,
        this.maskSprite
      )),
        (this.uniforms.scale.x = this.scale.x),
        (this.uniforms.scale.y = this.scale.y);
      const n = this.maskSprite.worldTransform,
        o = Math.sqrt(n.a * n.a + n.b * n.b),
        a = Math.sqrt(n.c * n.c + n.d * n.d);
      o !== 0 &&
        a !== 0 &&
        ((this.uniforms.rotation[0] = n.a / o),
        (this.uniforms.rotation[1] = n.b / o),
        (this.uniforms.rotation[2] = n.c / a),
        (this.uniforms.rotation[3] = n.d / a)),
        t.applyFilter(this, i, s, r);
    }
    get map() {
      return this.uniforms.mapSampler;
    }
    set map(t) {
      this.uniforms.mapSampler = t;
    }
  }
  var df = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,
    ff = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
  class oa extends _t {
    constructor() {
      super(ff, df);
    }
  }
  var pf = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
  class aa extends _t {
    constructor(t = 0.5, i = Math.random()) {
      super(zr, pf, { uNoise: 0, uSeed: 0 }), (this.noise = t), (this.seed = i);
    }
    get noise() {
      return this.uniforms.uNoise;
    }
    set noise(t) {
      this.uniforms.uNoise = t;
    }
    get seed() {
      return this.uniforms.uSeed;
    }
    set seed(t) {
      this.uniforms.uSeed = t;
    }
  }
  const Jr = {
    AlphaFilter: sa,
    BlurFilter: ra,
    BlurFilterPass: ms,
    ColorMatrixFilter: _s,
    DisplacementFilter: na,
    FXAAFilter: oa,
    NoiseFilter: aa,
  };
  Object.entries(Jr).forEach(([e, t]) => {
    Object.defineProperty(Jr, e, {
      get() {
        return t;
      },
    });
  });
  class je {
    constructor(t) {
      (this.bubbles = !0),
        (this.cancelBubble = !0),
        (this.cancelable = !1),
        (this.composed = !1),
        (this.defaultPrevented = !1),
        (this.eventPhase = je.prototype.NONE),
        (this.propagationStopped = !1),
        (this.propagationImmediatelyStopped = !1),
        (this.layer = new j()),
        (this.page = new j()),
        (this.AT_TARGET = 1),
        (this.BUBBLING_PHASE = 2),
        (this.CAPTURING_PHASE = 3),
        (this.NONE = 0),
        (this.manager = t);
    }
    get layerX() {
      return this.layer.x;
    }
    get layerY() {
      return this.layer.y;
    }
    get pageX() {
      return this.page.x;
    }
    get pageY() {
      return this.page.y;
    }
    get data() {
      return this;
    }
    composedPath() {
      return (
        this.manager &&
          (!this.path || this.path[this.path.length - 1] !== this.target) &&
          (this.path = this.target
            ? this.manager.propagationPath(this.target)
            : []),
        this.path
      );
    }
    initEvent(t, i, s) {
      throw new Error(
        'initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.'
      );
    }
    initUIEvent(t, i, s, r, n) {
      throw new Error(
        'initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.'
      );
    }
    preventDefault() {
      this.nativeEvent instanceof Event &&
        this.nativeEvent.cancelable &&
        this.nativeEvent.preventDefault(),
        (this.defaultPrevented = !0);
    }
    stopImmediatePropagation() {
      this.propagationImmediatelyStopped = !0;
    }
    stopPropagation() {
      this.propagationStopped = !0;
    }
  }
  class mi extends je {
    constructor() {
      super(...arguments),
        (this.client = new j()),
        (this.movement = new j()),
        (this.offset = new j()),
        (this.global = new j()),
        (this.screen = new j());
    }
    get clientX() {
      return this.client.x;
    }
    get clientY() {
      return this.client.y;
    }
    get x() {
      return this.clientX;
    }
    get y() {
      return this.clientY;
    }
    get movementX() {
      return this.movement.x;
    }
    get movementY() {
      return this.movement.y;
    }
    get offsetX() {
      return this.offset.x;
    }
    get offsetY() {
      return this.offset.y;
    }
    get globalX() {
      return this.global.x;
    }
    get globalY() {
      return this.global.y;
    }
    get screenX() {
      return this.screen.x;
    }
    get screenY() {
      return this.screen.y;
    }
    getModifierState(t) {
      return (
        'getModifierState' in this.nativeEvent &&
        this.nativeEvent.getModifierState(t)
      );
    }
    initMouseEvent(t, i, s, r, n, o, a, h, l, c, u, d, f, p, g) {
      throw new Error('Method not implemented.');
    }
  }
  class Ut extends mi {
    constructor() {
      super(...arguments),
        (this.width = 0),
        (this.height = 0),
        (this.isPrimary = !1);
    }
    getCoalescedEvents() {
      return this.type === 'pointermove' ||
        this.type === 'mousemove' ||
        this.type === 'touchmove'
        ? [this]
        : [];
    }
    getPredictedEvents() {
      throw new Error('getPredictedEvents is not supported!');
    }
  }
  class De extends mi {
    constructor() {
      super(...arguments),
        (this.DOM_DELTA_PIXEL = 0),
        (this.DOM_DELTA_LINE = 1),
        (this.DOM_DELTA_PAGE = 2);
    }
  }
  (De.DOM_DELTA_PIXEL = 0), (De.DOM_DELTA_LINE = 1), (De.DOM_DELTA_PAGE = 2);
  const mf = 2048,
    _f = new j(),
    tn = new j();
  class ha {
    constructor(t) {
      (this.dispatch = new Le()),
        (this.moveOnAll = !1),
        (this.mappingState = { trackingData: {} }),
        (this.eventPool = new Map()),
        (this.rootTarget = t),
        (this.hitPruneFn = this.hitPruneFn.bind(this)),
        (this.hitTestFn = this.hitTestFn.bind(this)),
        (this.mapPointerDown = this.mapPointerDown.bind(this)),
        (this.mapPointerMove = this.mapPointerMove.bind(this)),
        (this.mapPointerOut = this.mapPointerOut.bind(this)),
        (this.mapPointerOver = this.mapPointerOver.bind(this)),
        (this.mapPointerUp = this.mapPointerUp.bind(this)),
        (this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this)),
        (this.mapWheel = this.mapWheel.bind(this)),
        (this.mappingTable = {}),
        this.addEventMapping('pointerdown', this.mapPointerDown),
        this.addEventMapping('pointermove', this.mapPointerMove),
        this.addEventMapping('pointerout', this.mapPointerOut),
        this.addEventMapping('pointerleave', this.mapPointerOut),
        this.addEventMapping('pointerover', this.mapPointerOver),
        this.addEventMapping('pointerup', this.mapPointerUp),
        this.addEventMapping('pointerupoutside', this.mapPointerUpOutside),
        this.addEventMapping('wheel', this.mapWheel);
    }
    addEventMapping(t, i) {
      this.mappingTable[t] || (this.mappingTable[t] = []),
        this.mappingTable[t].push({ fn: i, priority: 0 }),
        this.mappingTable[t].sort((s, r) => s.priority - r.priority);
    }
    dispatchEvent(t, i) {
      (t.propagationStopped = !1),
        (t.propagationImmediatelyStopped = !1),
        this.propagate(t, i),
        this.dispatch.emit(i || t.type, t);
    }
    mapEvent(t) {
      if (!this.rootTarget) return;
      const i = this.mappingTable[t.type];
      if (i) for (let s = 0, r = i.length; s < r; s++) i[s].fn(t);
      else
        console.warn(
          `[EventBoundary]: Event mapping not defined for ${t.type}`
        );
    }
    hitTest(t, i) {
      const s = this.hitTestRecursive(
        this.rootTarget,
        this.rootTarget.interactive,
        _f.set(t, i),
        this.hitTestFn,
        this.hitPruneFn
      );
      return s && s[0];
    }
    propagate(t, i) {
      if (!t.target) return;
      const s = t.composedPath();
      t.eventPhase = t.CAPTURING_PHASE;
      for (let r = 0, n = s.length - 1; r < n; r++)
        if (
          ((t.currentTarget = s[r]),
          this.notifyTarget(t, i),
          t.propagationStopped || t.propagationImmediatelyStopped)
        )
          return;
      if (
        ((t.eventPhase = t.AT_TARGET),
        (t.currentTarget = t.target),
        this.notifyTarget(t, i),
        !(t.propagationStopped || t.propagationImmediatelyStopped))
      ) {
        t.eventPhase = t.BUBBLING_PHASE;
        for (let r = s.length - 2; r >= 0; r--)
          if (
            ((t.currentTarget = s[r]),
            this.notifyTarget(t, i),
            t.propagationStopped || t.propagationImmediatelyStopped)
          )
            return;
      }
    }
    all(t, i, s = this.rootTarget) {
      t.eventPhase = t.BUBBLING_PHASE;
      const r = s.children;
      if (r) for (let n = 0; n < r.length; n++) this.all(t, i, r[n]);
      (t.currentTarget = s), this.notifyTarget(t, i);
    }
    propagationPath(t) {
      const i = [t];
      for (let s = 0; s < mf && t !== this.rootTarget; s++) {
        if (!t.parent)
          throw new Error(
            'Cannot find propagation path to disconnected target'
          );
        i.push(t.parent), (t = t.parent);
      }
      return i.reverse(), i;
    }
    hitTestRecursive(t, i, s, r, n) {
      if (!t || !t.visible || n(t, s)) return null;
      if (t.interactiveChildren && t.children) {
        const o = t.children;
        for (let a = o.length - 1; a >= 0; a--) {
          const h = o[a],
            l = this.hitTestRecursive(h, i || h.interactive, s, r, n);
          if (l) {
            if (l.length > 0 && !l[l.length - 1].parent) continue;
            return (l.length > 0 || t.interactive) && l.push(t), l;
          }
        }
      }
      return i && r(t, s) ? (t.interactive ? [t] : []) : null;
    }
    hitPruneFn(t, i) {
      var s;
      if (
        t.hitArea &&
        (t.worldTransform.applyInverse(i, tn), !t.hitArea.contains(tn.x, tn.y))
      )
        return !0;
      if (t._mask) {
        const r = t._mask.isMaskData ? t._mask.maskObject : t._mask;
        if (r && !((s = r.containsPoint) != null && s.call(r, i))) return !0;
      }
      return !1;
    }
    hitTestFn(t, i) {
      return t.hitArea ? !0 : t.containsPoint ? t.containsPoint(i) : !1;
    }
    notifyTarget(t, i) {
      var n, o;
      i = i != null ? i : t.type;
      const s = `on${i}`;
      (o = (n = t.currentTarget)[s]) == null || o.call(n, t);
      const r =
        t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET
          ? `${i}capture`
          : i;
      this.notifyListeners(t, r),
        t.eventPhase === t.AT_TARGET && this.notifyListeners(t, i);
    }
    mapPointerDown(t) {
      if (!(t instanceof Ut)) {
        console.warn(
          'EventBoundary cannot map a non-pointer event as a pointer event'
        );
        return;
      }
      const i = this.createPointerEvent(t);
      if ((this.dispatchEvent(i, 'pointerdown'), i.pointerType === 'touch'))
        this.dispatchEvent(i, 'touchstart');
      else if (i.pointerType === 'mouse' || i.pointerType === 'pen') {
        const r = i.button === 2;
        this.dispatchEvent(i, r ? 'rightdown' : 'mousedown');
      }
      const s = this.trackingData(t.pointerId);
      (s.pressTargetsByButton[t.button] = i.composedPath()), this.freeEvent(i);
    }
    mapPointerMove(t) {
      var a, h;
      if (!(t instanceof Ut)) {
        console.warn(
          'EventBoundary cannot map a non-pointer event as a pointer event'
        );
        return;
      }
      const i = this.createPointerEvent(t),
        s = i.pointerType === 'mouse' || i.pointerType === 'pen',
        r = this.trackingData(t.pointerId),
        n = this.findMountedTarget(r.overTargets);
      if (
        ((a = r.overTargets) == null ? void 0 : a.length) > 0 &&
        n !== i.target
      ) {
        const l = t.type === 'mousemove' ? 'mouseout' : 'pointerout',
          c = this.createPointerEvent(t, l, n);
        if (
          (this.dispatchEvent(c, 'pointerout'),
          s && this.dispatchEvent(c, 'mouseout'),
          !i.composedPath().includes(n))
        ) {
          const u = this.createPointerEvent(t, 'pointerleave', n);
          for (
            u.eventPhase = u.AT_TARGET;
            u.target && !i.composedPath().includes(u.target);

          )
            (u.currentTarget = u.target),
              this.notifyTarget(u),
              s && this.notifyTarget(u, 'mouseleave'),
              (u.target = u.target.parent);
          this.freeEvent(u);
        }
        this.freeEvent(c);
      }
      if (n !== i.target) {
        const l = t.type === 'mousemove' ? 'mouseover' : 'pointerover',
          c = this.clonePointerEvent(i, l);
        this.dispatchEvent(c, 'pointerover'),
          s && this.dispatchEvent(c, 'mouseover');
        let u = n == null ? void 0 : n.parent;
        for (; u && u !== this.rootTarget.parent && u !== i.target; )
          u = u.parent;
        if (!u || u === this.rootTarget.parent) {
          const f = this.clonePointerEvent(i, 'pointerenter');
          for (
            f.eventPhase = f.AT_TARGET;
            f.target && f.target !== n && f.target !== this.rootTarget.parent;

          )
            (f.currentTarget = f.target),
              this.notifyTarget(f),
              s && this.notifyTarget(f, 'mouseenter'),
              (f.target = f.target.parent);
          this.freeEvent(f);
        }
        this.freeEvent(c);
      }
      const o = this.moveOnAll ? 'all' : 'dispatchEvent';
      this[o](i, 'pointermove'),
        this.all(i, 'globalpointermove'),
        i.pointerType === 'touch' &&
          (this[o](i, 'touchmove'), this.all(i, 'globaltouchmove')),
        s &&
          (this[o](i, 'mousemove'),
          this.all(i, 'globalmousemove'),
          (this.cursor = (h = i.target) == null ? void 0 : h.cursor)),
        (r.overTargets = i.composedPath()),
        this.freeEvent(i);
    }
    mapPointerOver(t) {
      var o;
      if (!(t instanceof Ut)) {
        console.warn(
          'EventBoundary cannot map a non-pointer event as a pointer event'
        );
        return;
      }
      const i = this.trackingData(t.pointerId),
        s = this.createPointerEvent(t),
        r = s.pointerType === 'mouse' || s.pointerType === 'pen';
      this.dispatchEvent(s, 'pointerover'),
        r && this.dispatchEvent(s, 'mouseover'),
        s.pointerType === 'mouse' &&
          (this.cursor = (o = s.target) == null ? void 0 : o.cursor);
      const n = this.clonePointerEvent(s, 'pointerenter');
      for (
        n.eventPhase = n.AT_TARGET;
        n.target && n.target !== this.rootTarget.parent;

      )
        (n.currentTarget = n.target),
          this.notifyTarget(n),
          r && this.notifyTarget(n, 'mouseenter'),
          (n.target = n.target.parent);
      (i.overTargets = s.composedPath()), this.freeEvent(s), this.freeEvent(n);
    }
    mapPointerOut(t) {
      if (!(t instanceof Ut)) {
        console.warn(
          'EventBoundary cannot map a non-pointer event as a pointer event'
        );
        return;
      }
      const i = this.trackingData(t.pointerId);
      if (i.overTargets) {
        const s = t.pointerType === 'mouse' || t.pointerType === 'pen',
          r = this.findMountedTarget(i.overTargets),
          n = this.createPointerEvent(t, 'pointerout', r);
        this.dispatchEvent(n), s && this.dispatchEvent(n, 'mouseout');
        const o = this.createPointerEvent(t, 'pointerleave', r);
        for (
          o.eventPhase = o.AT_TARGET;
          o.target && o.target !== this.rootTarget.parent;

        )
          (o.currentTarget = o.target),
            this.notifyTarget(o),
            s && this.notifyTarget(o, 'mouseleave'),
            (o.target = o.target.parent);
        (i.overTargets = null), this.freeEvent(n), this.freeEvent(o);
      }
      this.cursor = null;
    }
    mapPointerUp(t) {
      if (!(t instanceof Ut)) {
        console.warn(
          'EventBoundary cannot map a non-pointer event as a pointer event'
        );
        return;
      }
      const i = performance.now(),
        s = this.createPointerEvent(t);
      if ((this.dispatchEvent(s, 'pointerup'), s.pointerType === 'touch'))
        this.dispatchEvent(s, 'touchend');
      else if (s.pointerType === 'mouse' || s.pointerType === 'pen') {
        const a = s.button === 2;
        this.dispatchEvent(s, a ? 'rightup' : 'mouseup');
      }
      const r = this.trackingData(t.pointerId),
        n = this.findMountedTarget(r.pressTargetsByButton[t.button]);
      let o = n;
      if (n && !s.composedPath().includes(n)) {
        let a = n;
        for (; a && !s.composedPath().includes(a); ) {
          if (
            ((s.currentTarget = a),
            this.notifyTarget(s, 'pointerupoutside'),
            s.pointerType === 'touch')
          )
            this.notifyTarget(s, 'touchendoutside');
          else if (s.pointerType === 'mouse' || s.pointerType === 'pen') {
            const h = s.button === 2;
            this.notifyTarget(s, h ? 'rightupoutside' : 'mouseupoutside');
          }
          a = a.parent;
        }
        delete r.pressTargetsByButton[t.button], (o = a);
      }
      if (o) {
        const a = this.clonePointerEvent(s, 'click');
        (a.target = o),
          (a.path = null),
          r.clicksByButton[t.button] ||
            (r.clicksByButton[t.button] = {
              clickCount: 0,
              target: a.target,
              timeStamp: i,
            });
        const h = r.clicksByButton[t.button];
        if (
          (h.target === a.target && i - h.timeStamp < 200
            ? ++h.clickCount
            : (h.clickCount = 1),
          (h.target = a.target),
          (h.timeStamp = i),
          (a.detail = h.clickCount),
          a.pointerType === 'mouse')
        ) {
          const l = a.button === 2;
          this.dispatchEvent(a, l ? 'rightclick' : 'click');
        } else a.pointerType === 'touch' && this.dispatchEvent(a, 'tap');
        this.dispatchEvent(a, 'pointertap'), this.freeEvent(a);
      }
      this.freeEvent(s);
    }
    mapPointerUpOutside(t) {
      if (!(t instanceof Ut)) {
        console.warn(
          'EventBoundary cannot map a non-pointer event as a pointer event'
        );
        return;
      }
      const i = this.trackingData(t.pointerId),
        s = this.findMountedTarget(i.pressTargetsByButton[t.button]),
        r = this.createPointerEvent(t);
      if (s) {
        let n = s;
        for (; n; )
          (r.currentTarget = n),
            this.notifyTarget(r, 'pointerupoutside'),
            r.pointerType === 'touch'
              ? this.notifyTarget(r, 'touchendoutside')
              : (r.pointerType === 'mouse' || r.pointerType === 'pen') &&
                this.notifyTarget(
                  r,
                  r.button === 2 ? 'rightupoutside' : 'mouseupoutside'
                ),
            (n = n.parent);
        delete i.pressTargetsByButton[t.button];
      }
      this.freeEvent(r);
    }
    mapWheel(t) {
      if (!(t instanceof De)) {
        console.warn(
          'EventBoundary cannot map a non-wheel event as a wheel event'
        );
        return;
      }
      const i = this.createWheelEvent(t);
      this.dispatchEvent(i), this.freeEvent(i);
    }
    findMountedTarget(t) {
      if (!t) return null;
      let i = t[0];
      for (let s = 1; s < t.length && t[s].parent === i; s++) i = t[s];
      return i;
    }
    createPointerEvent(t, i, s) {
      const r = this.allocateEvent(Ut);
      return (
        this.copyPointerData(t, r),
        this.copyMouseData(t, r),
        this.copyData(t, r),
        (r.nativeEvent = t.nativeEvent),
        (r.originalEvent = t),
        (r.target = s != null ? s : this.hitTest(r.global.x, r.global.y)),
        typeof i == 'string' && (r.type = i),
        r
      );
    }
    createWheelEvent(t) {
      const i = this.allocateEvent(De);
      return (
        this.copyWheelData(t, i),
        this.copyMouseData(t, i),
        this.copyData(t, i),
        (i.nativeEvent = t.nativeEvent),
        (i.originalEvent = t),
        (i.target = this.hitTest(i.global.x, i.global.y)),
        i
      );
    }
    clonePointerEvent(t, i) {
      const s = this.allocateEvent(Ut);
      return (
        (s.nativeEvent = t.nativeEvent),
        (s.originalEvent = t.originalEvent),
        this.copyPointerData(t, s),
        this.copyMouseData(t, s),
        this.copyData(t, s),
        (s.target = t.target),
        (s.path = t.composedPath().slice()),
        (s.type = i != null ? i : s.type),
        s
      );
    }
    copyWheelData(t, i) {
      (i.deltaMode = t.deltaMode),
        (i.deltaX = t.deltaX),
        (i.deltaY = t.deltaY),
        (i.deltaZ = t.deltaZ);
    }
    copyPointerData(t, i) {
      t instanceof Ut &&
        i instanceof Ut &&
        ((i.pointerId = t.pointerId),
        (i.width = t.width),
        (i.height = t.height),
        (i.isPrimary = t.isPrimary),
        (i.pointerType = t.pointerType),
        (i.pressure = t.pressure),
        (i.tangentialPressure = t.tangentialPressure),
        (i.tiltX = t.tiltX),
        (i.tiltY = t.tiltY),
        (i.twist = t.twist));
    }
    copyMouseData(t, i) {
      t instanceof mi &&
        i instanceof mi &&
        ((i.altKey = t.altKey),
        (i.button = t.button),
        (i.buttons = t.buttons),
        i.client.copyFrom(t.client),
        (i.ctrlKey = t.ctrlKey),
        (i.metaKey = t.metaKey),
        i.movement.copyFrom(t.movement),
        i.screen.copyFrom(t.screen),
        i.global.copyFrom(t.global));
    }
    copyData(t, i) {
      (i.isTrusted = t.isTrusted),
        (i.srcElement = t.srcElement),
        (i.timeStamp = performance.now()),
        (i.type = t.type),
        (i.detail = t.detail),
        (i.view = t.view),
        (i.which = t.which),
        i.layer.copyFrom(t.layer),
        i.page.copyFrom(t.page);
    }
    trackingData(t) {
      return (
        this.mappingState.trackingData[t] ||
          (this.mappingState.trackingData[t] = {
            pressTargetsByButton: {},
            clicksByButton: {},
            overTarget: null,
          }),
        this.mappingState.trackingData[t]
      );
    }
    allocateEvent(t) {
      this.eventPool.has(t) || this.eventPool.set(t, []);
      const i = this.eventPool.get(t).pop() || new t(this);
      return (
        (i.eventPhase = i.NONE),
        (i.currentTarget = null),
        (i.path = null),
        (i.target = null),
        i
      );
    }
    freeEvent(t) {
      if (t.manager !== this)
        throw new Error(
          'It is illegal to free an event not managed by this EventBoundary!'
        );
      const i = t.constructor;
      this.eventPool.has(i) || this.eventPool.set(i, []),
        this.eventPool.get(i).push(t);
    }
    notifyListeners(t, i) {
      const s = t.currentTarget._events[i];
      if (!!s)
        if ('fn' in s)
          s.once && t.currentTarget.removeListener(i, s.fn, void 0, !0),
            s.fn.call(s.context, t);
        else
          for (
            let r = 0, n = s.length;
            r < n && !t.propagationImmediatelyStopped;
            r++
          )
            s[r].once && t.currentTarget.removeListener(i, s[r].fn, void 0, !0),
              s[r].fn.call(s[r].context, t);
    }
  }
  const gf = 1,
    yf = {
      touchstart: 'pointerdown',
      touchend: 'pointerup',
      touchendoutside: 'pointerupoutside',
      touchmove: 'pointermove',
      touchcancel: 'pointercancel',
    };
  class en {
    constructor(t) {
      (this.supportsTouchEvents = 'ontouchstart' in globalThis),
        (this.supportsPointerEvents = !!globalThis.PointerEvent),
        (this.domElement = null),
        (this.resolution = 1),
        (this.renderer = t),
        (this.rootBoundary = new ha(null)),
        (this.autoPreventDefault = !0),
        (this.eventsAdded = !1),
        (this.rootPointerEvent = new Ut(null)),
        (this.rootWheelEvent = new De(null)),
        (this.cursorStyles = { default: 'inherit', pointer: 'pointer' }),
        (this.onPointerDown = this.onPointerDown.bind(this)),
        (this.onPointerMove = this.onPointerMove.bind(this)),
        (this.onPointerUp = this.onPointerUp.bind(this)),
        (this.onPointerOverOut = this.onPointerOverOut.bind(this)),
        (this.onWheel = this.onWheel.bind(this));
    }
    init() {
      const { view: t, resolution: i } = this.renderer;
      this.setTargetElement(t), (this.resolution = i);
    }
    resolutionChange(t) {
      this.resolution = t;
    }
    destroy() {
      this.setTargetElement(null), (this.renderer = null);
    }
    setCursor(t) {
      t = t || 'default';
      let i = !0;
      if (
        (globalThis.OffscreenCanvas &&
          this.domElement instanceof OffscreenCanvas &&
          (i = !1),
        this.currentCursor === t)
      )
        return;
      this.currentCursor = t;
      const s = this.cursorStyles[t];
      if (s)
        switch (typeof s) {
          case 'string':
            i && (this.domElement.style.cursor = s);
            break;
          case 'function':
            s(t);
            break;
          case 'object':
            i && Object.assign(this.domElement.style, s);
            break;
        }
      else
        i &&
          typeof t == 'string' &&
          !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) &&
          (this.domElement.style.cursor = t);
    }
    onPointerDown(t) {
      if (
        ((this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        this.supportsTouchEvents && t.pointerType === 'touch')
      )
        return;
      const i = this.normalizeToPointerData(t);
      this.autoPreventDefault &&
        i[0].isNormalized &&
        (t.cancelable || !('cancelable' in t)) &&
        t.preventDefault();
      for (let s = 0, r = i.length; s < r; s++) {
        const n = i[s],
          o = this.bootstrapEvent(this.rootPointerEvent, n);
        this.rootBoundary.mapEvent(o);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerMove(t) {
      if (
        ((this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        this.supportsTouchEvents && t.pointerType === 'touch')
      )
        return;
      const i = this.normalizeToPointerData(t);
      for (let s = 0, r = i.length; s < r; s++) {
        const n = this.bootstrapEvent(this.rootPointerEvent, i[s]);
        this.rootBoundary.mapEvent(n);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerUp(t) {
      if (
        ((this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        this.supportsTouchEvents && t.pointerType === 'touch')
      )
        return;
      let i = t.target;
      t.composedPath &&
        t.composedPath().length > 0 &&
        (i = t.composedPath()[0]);
      const s = i !== this.domElement ? 'outside' : '',
        r = this.normalizeToPointerData(t);
      for (let n = 0, o = r.length; n < o; n++) {
        const a = this.bootstrapEvent(this.rootPointerEvent, r[n]);
        (a.type += s), this.rootBoundary.mapEvent(a);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerOverOut(t) {
      if (
        ((this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        this.supportsTouchEvents && t.pointerType === 'touch')
      )
        return;
      const i = this.normalizeToPointerData(t);
      for (let s = 0, r = i.length; s < r; s++) {
        const n = this.bootstrapEvent(this.rootPointerEvent, i[s]);
        this.rootBoundary.mapEvent(n);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onWheel(t) {
      const i = this.normalizeWheelEvent(t);
      (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        this.rootBoundary.mapEvent(i);
    }
    setTargetElement(t) {
      this.removeEvents(), (this.domElement = t), this.addEvents();
    }
    addEvents() {
      if (this.eventsAdded || !this.domElement) return;
      const t = this.domElement.style;
      t &&
        (globalThis.navigator.msPointerEnabled
          ? ((t.msContentZooming = 'none'), (t.msTouchAction = 'none'))
          : this.supportsPointerEvents && (t.touchAction = 'none')),
        this.supportsPointerEvents
          ? (globalThis.document.addEventListener(
              'pointermove',
              this.onPointerMove,
              !0
            ),
            this.domElement.addEventListener(
              'pointerdown',
              this.onPointerDown,
              !0
            ),
            this.domElement.addEventListener(
              'pointerleave',
              this.onPointerOverOut,
              !0
            ),
            this.domElement.addEventListener(
              'pointerover',
              this.onPointerOverOut,
              !0
            ),
            globalThis.addEventListener('pointerup', this.onPointerUp, !0))
          : (globalThis.document.addEventListener(
              'mousemove',
              this.onPointerMove,
              !0
            ),
            this.domElement.addEventListener(
              'mousedown',
              this.onPointerDown,
              !0
            ),
            this.domElement.addEventListener(
              'mouseout',
              this.onPointerOverOut,
              !0
            ),
            this.domElement.addEventListener(
              'mouseover',
              this.onPointerOverOut,
              !0
            ),
            globalThis.addEventListener('mouseup', this.onPointerUp, !0)),
        this.supportsTouchEvents &&
          (this.domElement.addEventListener(
            'touchstart',
            this.onPointerDown,
            !0
          ),
          this.domElement.addEventListener('touchend', this.onPointerUp, !0),
          this.domElement.addEventListener(
            'touchmove',
            this.onPointerMove,
            !0
          )),
        this.domElement.addEventListener('wheel', this.onWheel, {
          passive: !0,
          capture: !0,
        }),
        (this.eventsAdded = !0);
    }
    removeEvents() {
      if (!this.eventsAdded || !this.domElement) return;
      const t = this.domElement.style;
      globalThis.navigator.msPointerEnabled
        ? ((t.msContentZooming = ''), (t.msTouchAction = ''))
        : this.supportsPointerEvents && (t.touchAction = ''),
        this.supportsPointerEvents
          ? (globalThis.document.removeEventListener(
              'pointermove',
              this.onPointerMove,
              !0
            ),
            this.domElement.removeEventListener(
              'pointerdown',
              this.onPointerDown,
              !0
            ),
            this.domElement.removeEventListener(
              'pointerleave',
              this.onPointerOverOut,
              !0
            ),
            this.domElement.removeEventListener(
              'pointerover',
              this.onPointerOverOut,
              !0
            ),
            globalThis.removeEventListener('pointerup', this.onPointerUp, !0))
          : (globalThis.document.removeEventListener(
              'mousemove',
              this.onPointerMove,
              !0
            ),
            this.domElement.removeEventListener(
              'mousedown',
              this.onPointerDown,
              !0
            ),
            this.domElement.removeEventListener(
              'mouseout',
              this.onPointerOverOut,
              !0
            ),
            this.domElement.removeEventListener(
              'mouseover',
              this.onPointerOverOut,
              !0
            ),
            globalThis.removeEventListener('mouseup', this.onPointerUp, !0)),
        this.supportsTouchEvents &&
          (this.domElement.removeEventListener(
            'touchstart',
            this.onPointerDown,
            !0
          ),
          this.domElement.removeEventListener('touchend', this.onPointerUp, !0),
          this.domElement.removeEventListener(
            'touchmove',
            this.onPointerMove,
            !0
          )),
        this.domElement.removeEventListener('wheel', this.onWheel, !0),
        (this.domElement = null),
        (this.eventsAdded = !1);
    }
    mapPositionToPoint(t, i, s) {
      let r;
      this.domElement.parentElement
        ? (r = this.domElement.getBoundingClientRect())
        : (r = {
            x: 0,
            y: 0,
            width: this.domElement.width,
            height: this.domElement.height,
            left: 0,
            top: 0,
          });
      const n = 1 / this.resolution;
      (t.x = (i - r.left) * (this.domElement.width / r.width) * n),
        (t.y = (s - r.top) * (this.domElement.height / r.height) * n);
    }
    normalizeToPointerData(t) {
      const i = [];
      if (this.supportsTouchEvents && t instanceof TouchEvent)
        for (let s = 0, r = t.changedTouches.length; s < r; s++) {
          const n = t.changedTouches[s];
          typeof n.button == 'undefined' && (n.button = 0),
            typeof n.buttons == 'undefined' && (n.buttons = 1),
            typeof n.isPrimary == 'undefined' &&
              (n.isPrimary = t.touches.length === 1 && t.type === 'touchstart'),
            typeof n.width == 'undefined' && (n.width = n.radiusX || 1),
            typeof n.height == 'undefined' && (n.height = n.radiusY || 1),
            typeof n.tiltX == 'undefined' && (n.tiltX = 0),
            typeof n.tiltY == 'undefined' && (n.tiltY = 0),
            typeof n.pointerType == 'undefined' && (n.pointerType = 'touch'),
            typeof n.pointerId == 'undefined' &&
              (n.pointerId = n.identifier || 0),
            typeof n.pressure == 'undefined' && (n.pressure = n.force || 0.5),
            typeof n.twist == 'undefined' && (n.twist = 0),
            typeof n.tangentialPressure == 'undefined' &&
              (n.tangentialPressure = 0),
            typeof n.layerX == 'undefined' &&
              (n.layerX = n.offsetX = n.clientX),
            typeof n.layerY == 'undefined' &&
              (n.layerY = n.offsetY = n.clientY),
            (n.isNormalized = !0),
            (n.type = t.type),
            i.push(n);
        }
      else if (
        !globalThis.MouseEvent ||
        (t instanceof MouseEvent &&
          (!this.supportsPointerEvents ||
            !(t instanceof globalThis.PointerEvent)))
      ) {
        const s = t;
        typeof s.isPrimary == 'undefined' && (s.isPrimary = !0),
          typeof s.width == 'undefined' && (s.width = 1),
          typeof s.height == 'undefined' && (s.height = 1),
          typeof s.tiltX == 'undefined' && (s.tiltX = 0),
          typeof s.tiltY == 'undefined' && (s.tiltY = 0),
          typeof s.pointerType == 'undefined' && (s.pointerType = 'mouse'),
          typeof s.pointerId == 'undefined' && (s.pointerId = gf),
          typeof s.pressure == 'undefined' && (s.pressure = 0.5),
          typeof s.twist == 'undefined' && (s.twist = 0),
          typeof s.tangentialPressure == 'undefined' &&
            (s.tangentialPressure = 0),
          (s.isNormalized = !0),
          i.push(s);
      } else i.push(t);
      return i;
    }
    normalizeWheelEvent(t) {
      const i = this.rootWheelEvent;
      return (
        this.transferMouseData(i, t),
        (i.deltaX = t.deltaX),
        (i.deltaY = t.deltaY),
        (i.deltaZ = t.deltaZ),
        (i.deltaMode = t.deltaMode),
        this.mapPositionToPoint(i.screen, t.clientX, t.clientY),
        i.global.copyFrom(i.screen),
        i.offset.copyFrom(i.screen),
        (i.nativeEvent = t),
        (i.type = t.type),
        i
      );
    }
    bootstrapEvent(t, i) {
      return (
        (t.originalEvent = null),
        (t.nativeEvent = i),
        (t.pointerId = i.pointerId),
        (t.width = i.width),
        (t.height = i.height),
        (t.isPrimary = i.isPrimary),
        (t.pointerType = i.pointerType),
        (t.pressure = i.pressure),
        (t.tangentialPressure = i.tangentialPressure),
        (t.tiltX = i.tiltX),
        (t.tiltY = i.tiltY),
        (t.twist = i.twist),
        this.transferMouseData(t, i),
        this.mapPositionToPoint(t.screen, i.clientX, i.clientY),
        t.global.copyFrom(t.screen),
        t.offset.copyFrom(t.screen),
        (t.isTrusted = i.isTrusted),
        t.type === 'pointerleave' && (t.type = 'pointerout'),
        t.type.startsWith('mouse') &&
          (t.type = t.type.replace('mouse', 'pointer')),
        t.type.startsWith('touch') && (t.type = yf[t.type] || t.type),
        t
      );
    }
    transferMouseData(t, i) {
      (t.isTrusted = i.isTrusted),
        (t.srcElement = i.srcElement),
        (t.timeStamp = performance.now()),
        (t.type = i.type),
        (t.altKey = i.altKey),
        (t.button = i.button),
        (t.buttons = i.buttons),
        (t.client.x = i.clientX),
        (t.client.y = i.clientY),
        (t.ctrlKey = i.ctrlKey),
        (t.metaKey = i.metaKey),
        (t.movement.x = i.movementX),
        (t.movement.y = i.movementY),
        (t.page.x = i.pageX),
        (t.page.y = i.pageY),
        (t.relatedTarget = null),
        (t.shiftKey = i.shiftKey);
    }
  }
  (en.extension = {
    name: 'events',
    type: [P.RendererSystem, P.CanvasRendererSystem],
  }),
    U.add(en);
  const la = {
    onclick: null,
    onmousedown: null,
    onmouseenter: null,
    onmouseleave: null,
    onmousemove: null,
    onglobalmousemove: null,
    onmouseout: null,
    onmouseover: null,
    onmouseup: null,
    onmouseupoutside: null,
    onpointercancel: null,
    onpointerdown: null,
    onpointerenter: null,
    onpointerleave: null,
    onpointermove: null,
    onglobalpointermove: null,
    onpointerout: null,
    onpointerover: null,
    onpointertap: null,
    onpointerup: null,
    onpointerupoutside: null,
    onrightclick: null,
    onrightdown: null,
    onrightup: null,
    onrightupoutside: null,
    ontap: null,
    ontouchcancel: null,
    ontouchend: null,
    ontouchendoutside: null,
    ontouchmove: null,
    onglobaltouchmove: null,
    ontouchstart: null,
    onwheel: null,
    interactive: !1,
    interactiveChildren: !0,
    hitArea: null,
    addEventListener(e, t, i) {
      const s =
          (typeof i == 'boolean' && i) || (typeof i == 'object' && i.capture),
        r = typeof t == 'function' ? void 0 : t;
      (e = s ? `${e}capture` : e),
        (t = typeof t == 'function' ? t : t.handleEvent),
        this.on(e, t, r);
    },
    removeEventListener(e, t, i) {
      const s =
          (typeof i == 'boolean' && i) || (typeof i == 'object' && i.capture),
        r = typeof t == 'function' ? void 0 : t;
      (e = s ? `${e}capture` : e),
        (t = typeof t == 'function' ? t : t.handleEvent),
        this.off(e, t, r);
    },
    dispatchEvent(e) {
      if (!(e instanceof je))
        throw new Error(
          'DisplayObject cannot propagate events outside of the Federated Events API'
        );
      return (
        (e.defaultPrevented = !1),
        (e.path = null),
        (e.target = this),
        e.manager.dispatchEvent(e),
        !e.defaultPrevented
      );
    },
  };
  it.mixin(la);
  const ca = {
    accessible: !1,
    accessibleTitle: null,
    accessibleHint: null,
    tabIndex: 0,
    _accessibleActive: !1,
    _accessibleDiv: null,
    accessibleType: 'button',
    accessiblePointerEvents: 'auto',
    accessibleChildren: !0,
    renderId: -1,
  };
  it.mixin(ca);
  const vf = 9,
    gs = 100,
    xf = 0,
    Tf = 0,
    ua = 2,
    da = 1,
    bf = -1e3,
    Ef = -1e3,
    wf = 2;
  class sn {
    constructor(t) {
      (this.debug = !1),
        (this._isActive = !1),
        (this._isMobileAccessibility = !1),
        (this.pool = []),
        (this.renderId = 0),
        (this.children = []),
        (this.androidUpdateCount = 0),
        (this.androidUpdateFrequency = 500),
        (this._hookDiv = null),
        (zt.tablet || zt.phone) && this.createTouchHook();
      const i = document.createElement('div');
      (i.style.width = `${gs}px`),
        (i.style.height = `${gs}px`),
        (i.style.position = 'absolute'),
        (i.style.top = `${xf}px`),
        (i.style.left = `${Tf}px`),
        (i.style.zIndex = ua.toString()),
        (this.div = i),
        (this.renderer = t),
        (this._onKeyDown = this._onKeyDown.bind(this)),
        (this._onMouseMove = this._onMouseMove.bind(this)),
        globalThis.addEventListener('keydown', this._onKeyDown, !1);
    }
    get isActive() {
      return this._isActive;
    }
    get isMobileAccessibility() {
      return this._isMobileAccessibility;
    }
    createTouchHook() {
      const t = document.createElement('button');
      (t.style.width = `${da}px`),
        (t.style.height = `${da}px`),
        (t.style.position = 'absolute'),
        (t.style.top = `${bf}px`),
        (t.style.left = `${Ef}px`),
        (t.style.zIndex = wf.toString()),
        (t.style.backgroundColor = '#FF0000'),
        (t.title = 'select to enable accessibility for this content'),
        t.addEventListener('focus', () => {
          (this._isMobileAccessibility = !0),
            this.activate(),
            this.destroyTouchHook();
        }),
        document.body.appendChild(t),
        (this._hookDiv = t);
    }
    destroyTouchHook() {
      !this._hookDiv ||
        (document.body.removeChild(this._hookDiv), (this._hookDiv = null));
    }
    activate() {
      var t;
      this._isActive ||
        ((this._isActive = !0),
        globalThis.document.addEventListener(
          'mousemove',
          this._onMouseMove,
          !0
        ),
        globalThis.removeEventListener('keydown', this._onKeyDown, !1),
        this.renderer.on('postrender', this.update, this),
        (t = this.renderer.view.parentNode) == null || t.appendChild(this.div));
    }
    deactivate() {
      var t;
      !this._isActive ||
        this._isMobileAccessibility ||
        ((this._isActive = !1),
        globalThis.document.removeEventListener(
          'mousemove',
          this._onMouseMove,
          !0
        ),
        globalThis.addEventListener('keydown', this._onKeyDown, !1),
        this.renderer.off('postrender', this.update),
        (t = this.div.parentNode) == null || t.removeChild(this.div));
    }
    updateAccessibleObjects(t) {
      if (!t.visible || !t.accessibleChildren) return;
      t.accessible &&
        t.interactive &&
        (t._accessibleActive || this.addChild(t), (t.renderId = this.renderId));
      const i = t.children;
      if (i)
        for (let s = 0; s < i.length; s++) this.updateAccessibleObjects(i[s]);
    }
    update() {
      const t = performance.now();
      if (
        (zt.android.device && t < this.androidUpdateCount) ||
        ((this.androidUpdateCount = t + this.androidUpdateFrequency),
        !this.renderer.renderingToScreen)
      )
        return;
      this.renderer.lastObjectRendered &&
        this.updateAccessibleObjects(this.renderer.lastObjectRendered);
      const {
          x: i,
          y: s,
          width: r,
          height: n,
        } = this.renderer.view.getBoundingClientRect(),
        { width: o, height: a, resolution: h } = this.renderer,
        l = (r / o) * h,
        c = (n / a) * h;
      let u = this.div;
      (u.style.left = `${i}px`),
        (u.style.top = `${s}px`),
        (u.style.width = `${o}px`),
        (u.style.height = `${a}px`);
      for (let d = 0; d < this.children.length; d++) {
        const f = this.children[d];
        if (f.renderId !== this.renderId)
          (f._accessibleActive = !1),
            be(this.children, d, 1),
            this.div.removeChild(f._accessibleDiv),
            this.pool.push(f._accessibleDiv),
            (f._accessibleDiv = null),
            d--;
        else {
          u = f._accessibleDiv;
          let p = f.hitArea;
          const g = f.worldTransform;
          f.hitArea
            ? ((u.style.left = `${(g.tx + p.x * g.a) * l}px`),
              (u.style.top = `${(g.ty + p.y * g.d) * c}px`),
              (u.style.width = `${p.width * g.a * l}px`),
              (u.style.height = `${p.height * g.d * c}px`))
            : ((p = f.getBounds()),
              this.capHitArea(p),
              (u.style.left = `${p.x * l}px`),
              (u.style.top = `${p.y * c}px`),
              (u.style.width = `${p.width * l}px`),
              (u.style.height = `${p.height * c}px`),
              u.title !== f.accessibleTitle &&
                f.accessibleTitle !== null &&
                (u.title = f.accessibleTitle),
              u.getAttribute('aria-label') !== f.accessibleHint &&
                f.accessibleHint !== null &&
                u.setAttribute('aria-label', f.accessibleHint)),
            (f.accessibleTitle !== u.title || f.tabIndex !== u.tabIndex) &&
              ((u.title = f.accessibleTitle),
              (u.tabIndex = f.tabIndex),
              this.debug && this.updateDebugHTML(u));
        }
      }
      this.renderId++;
    }
    updateDebugHTML(t) {
      t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;
    }
    capHitArea(t) {
      t.x < 0 && ((t.width += t.x), (t.x = 0)),
        t.y < 0 && ((t.height += t.y), (t.y = 0));
      const { width: i, height: s } = this.renderer;
      t.x + t.width > i && (t.width = i - t.x),
        t.y + t.height > s && (t.height = s - t.y);
    }
    addChild(t) {
      let i = this.pool.pop();
      i ||
        ((i = document.createElement('button')),
        (i.style.width = `${gs}px`),
        (i.style.height = `${gs}px`),
        (i.style.backgroundColor = this.debug
          ? 'rgba(255,255,255,0.5)'
          : 'transparent'),
        (i.style.position = 'absolute'),
        (i.style.zIndex = ua.toString()),
        (i.style.borderStyle = 'none'),
        navigator.userAgent.toLowerCase().includes('chrome')
          ? i.setAttribute('aria-live', 'off')
          : i.setAttribute('aria-live', 'polite'),
        navigator.userAgent.match(/rv:.*Gecko\//)
          ? i.setAttribute('aria-relevant', 'additions')
          : i.setAttribute('aria-relevant', 'text'),
        i.addEventListener('click', this._onClick.bind(this)),
        i.addEventListener('focus', this._onFocus.bind(this)),
        i.addEventListener('focusout', this._onFocusOut.bind(this))),
        (i.style.pointerEvents = t.accessiblePointerEvents),
        (i.type = t.accessibleType),
        t.accessibleTitle && t.accessibleTitle !== null
          ? (i.title = t.accessibleTitle)
          : (!t.accessibleHint || t.accessibleHint === null) &&
            (i.title = `displayObject ${t.tabIndex}`),
        t.accessibleHint &&
          t.accessibleHint !== null &&
          i.setAttribute('aria-label', t.accessibleHint),
        this.debug && this.updateDebugHTML(i),
        (t._accessibleActive = !0),
        (t._accessibleDiv = i),
        (i.displayObject = t),
        this.children.push(t),
        this.div.appendChild(t._accessibleDiv),
        (t._accessibleDiv.tabIndex = t.tabIndex);
    }
    _dispatchEvent(t, i) {
      const { displayObject: s } = t.target,
        r = this.renderer.events.rootBoundary,
        n = Object.assign(new je(r), { target: s });
      (r.rootTarget = this.renderer.lastObjectRendered),
        i.forEach((o) => r.dispatchEvent(n, o));
    }
    _onClick(t) {
      this._dispatchEvent(t, ['click', 'pointertap', 'tap']);
    }
    _onFocus(t) {
      t.target.getAttribute('aria-live') ||
        t.target.setAttribute('aria-live', 'assertive'),
        this._dispatchEvent(t, ['mouseover']);
    }
    _onFocusOut(t) {
      t.target.getAttribute('aria-live') ||
        t.target.setAttribute('aria-live', 'polite'),
        this._dispatchEvent(t, ['mouseout']);
    }
    _onKeyDown(t) {
      t.keyCode === vf && this.activate();
    }
    _onMouseMove(t) {
      (t.movementX === 0 && t.movementY === 0) || this.deactivate();
    }
    destroy() {
      this.destroyTouchHook(),
        (this.div = null),
        globalThis.document.removeEventListener(
          'mousemove',
          this._onMouseMove,
          !0
        ),
        globalThis.removeEventListener('keydown', this._onKeyDown),
        (this.pool = null),
        (this.children = null),
        (this.renderer = null);
    }
  }
  (sn.extension = {
    name: 'accessibility',
    type: [P.RendererPlugin, P.CanvasRendererPlugin],
  }),
    U.add(sn);
  const rn = class {
    constructor(e) {
      (this.stage = new St()),
        (e = Object.assign({ forceCanvas: !1 }, e)),
        (this.renderer = Zo(e)),
        rn._plugins.forEach((t) => {
          t.init.call(this, e);
        });
    }
    render() {
      this.renderer.render(this.stage);
    }
    get view() {
      return this.renderer.view;
    }
    get screen() {
      return this.renderer.screen;
    }
    destroy(e, t) {
      const i = rn._plugins.slice(0);
      i.reverse(),
        i.forEach((s) => {
          s.destroy.call(this);
        }),
        this.stage.destroy(t),
        (this.stage = null),
        this.renderer.destroy(e),
        (this.renderer = null);
    }
  };
  let nn = rn;
  (nn._plugins = []), U.handleByList(P.Application, nn._plugins);
  class on {
    static init(t) {
      Object.defineProperty(this, 'resizeTo', {
        set(i) {
          globalThis.removeEventListener('resize', this.queueResize),
            (this._resizeTo = i),
            i &&
              (globalThis.addEventListener('resize', this.queueResize),
              this.resize());
        },
        get() {
          return this._resizeTo;
        },
      }),
        (this.queueResize = () => {
          !this._resizeTo ||
            (this.cancelResize(),
            (this._resizeId = requestAnimationFrame(() => this.resize())));
        }),
        (this.cancelResize = () => {
          this._resizeId &&
            (cancelAnimationFrame(this._resizeId), (this._resizeId = null));
        }),
        (this.resize = () => {
          if (!this._resizeTo) return;
          this.cancelResize();
          let i, s;
          if (this._resizeTo === globalThis.window)
            (i = globalThis.innerWidth), (s = globalThis.innerHeight);
          else {
            const { clientWidth: r, clientHeight: n } = this._resizeTo;
            (i = r), (s = n);
          }
          this.renderer.resize(i, s), this.render();
        }),
        (this._resizeId = null),
        (this._resizeTo = null),
        (this.resizeTo = t.resizeTo || null);
    }
    static destroy() {
      globalThis.removeEventListener('resize', this.queueResize),
        this.cancelResize(),
        (this.cancelResize = null),
        (this.queueResize = null),
        (this.resizeTo = null),
        (this.resize = null);
    }
  }
  (on.extension = P.Application), U.add(on);
  const fa = {
    loader: P.LoadParser,
    resolver: P.ResolveParser,
    cache: P.CacheParser,
    detection: P.DetectionParser,
  };
  U.handle(
    P.Asset,
    (e) => {
      const t = e.ref;
      Object.entries(fa)
        .filter(([i]) => !!t[i])
        .forEach(([i, s]) => {
          var r;
          return U.add(
            Object.assign(t[i], {
              extension: (r = t[i].extension) != null ? r : s,
            })
          );
        });
    },
    (e) => {
      const t = e.ref;
      Object.keys(fa)
        .filter((i) => !!t[i])
        .forEach((i) => U.remove(t[i]));
    }
  );
  class Sf {
    constructor(t, i = !1) {
      (this._loader = t),
        (this._assetList = []),
        (this._isLoading = !1),
        (this._maxConcurrent = 1),
        (this.verbose = i);
    }
    add(t) {
      t.forEach((i) => {
        this._assetList.push(i);
      }),
        this.verbose &&
          console.log('[BackgroundLoader] assets: ', this._assetList),
        this._isActive && !this._isLoading && this._next();
    }
    async _next() {
      if (this._assetList.length && this._isActive) {
        this._isLoading = !0;
        const t = [],
          i = Math.min(this._assetList.length, this._maxConcurrent);
        for (let s = 0; s < i; s++) t.push(this._assetList.pop());
        await this._loader.load(t), (this._isLoading = !1), this._next();
      }
    }
    get active() {
      return this._isActive;
    }
    set active(t) {
      this._isActive !== t &&
        ((this._isActive = t), t && !this._isLoading && this._next());
    }
  }
  function an(e, t) {
    if (Array.isArray(t)) {
      for (const i of t) if (e.startsWith(`data:${i}`)) return !0;
      return !1;
    }
    return e.startsWith(`data:${t}`);
  }
  function _i(e, t) {
    const i = e.split('?')[0],
      s = pt.extname(i).toLowerCase();
    return Array.isArray(t) ? t.includes(s) : s === t;
  }
  const ee = (e, t) => (
      Array.isArray(e) || (e = [e]),
      t ? e.map((i) => (typeof i == 'string' ? t(i) : i)) : e
    ),
    ys = (e, t) => {
      const i = t.split('?')[1];
      return i && (e += `?${i}`), e;
    };
  function pa(e, t, i, s, r) {
    const n = t[i];
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      i < t.length - 1
        ? pa(e.replace(s[i], a), t, i + 1, s, r)
        : r.push(e.replace(s[i], a));
    }
  }
  function ma(e) {
    const t = /\{(.*?)\}/g,
      i = e.match(t),
      s = [];
    if (i) {
      const r = [];
      i.forEach((n) => {
        const o = n.substring(1, n.length - 1).split(',');
        r.push(o);
      }),
        pa(e, r, 0, i, s);
    } else s.push(e);
    return s;
  }
  const gi = (e) => !Array.isArray(e);
  class Af {
    constructor() {
      (this._parsers = []),
        (this._cache = new Map()),
        (this._cacheMap = new Map());
    }
    reset() {
      this._cacheMap.clear(), this._cache.clear();
    }
    has(t) {
      return this._cache.has(t);
    }
    get(t) {
      const i = this._cache.get(t);
      return (
        i || console.warn(`[Assets] Asset id ${t} was not found in the Cache`),
        i
      );
    }
    set(t, i) {
      const s = ee(t);
      let r;
      for (let a = 0; a < this.parsers.length; a++) {
        const h = this.parsers[a];
        if (h.test(i)) {
          r = h.getCacheableAssets(s, i);
          break;
        }
      }
      r ||
        ((r = {}),
        s.forEach((a) => {
          r[a] = i;
        }));
      const n = Object.keys(r),
        o = { cacheKeys: n, keys: s };
      if (
        (s.forEach((a) => {
          this._cacheMap.set(a, o);
        }),
        n.forEach((a) => {
          this._cache.has(a) &&
            this._cache.get(a) !== i &&
            console.warn('[Cache] already has key:', a),
            this._cache.set(a, r[a]);
        }),
        i instanceof D)
      ) {
        const a = i;
        s.forEach((h) => {
          a.baseTexture !== D.EMPTY.baseTexture &&
            V.addToCache(a.baseTexture, h),
            D.addToCache(a, h);
        });
      }
    }
    remove(t) {
      if ((this._cacheMap.get(t), !this._cacheMap.has(t))) {
        console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
        return;
      }
      const i = this._cacheMap.get(t);
      i.cacheKeys.forEach((r) => {
        this._cache.delete(r);
      }),
        i.keys.forEach((r) => {
          this._cacheMap.delete(r);
        });
    }
    get parsers() {
      return this._parsers;
    }
  }
  const Ye = new Af();
  class Rf {
    constructor() {
      (this._parsers = []), (this.promiseCache = {});
    }
    reset() {
      this.promiseCache = {};
    }
    _getLoadPromiseAndParser(t, i) {
      const s = { promise: null, parser: null };
      return (
        (s.promise = (async () => {
          var n, o;
          let r = null;
          for (let a = 0; a < this.parsers.length; a++) {
            const h = this.parsers[a];
            if (
              h.load &&
              ((n = h.test) == null ? void 0 : n.call(h, t, i, this))
            ) {
              (r = await h.load(t, i, this)), (s.parser = h);
              break;
            }
          }
          if (!s.parser)
            return (
              console.warn(
                `[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has being added`
              ),
              null
            );
          for (let a = 0; a < this.parsers.length; a++) {
            const h = this.parsers[a];
            h.parse &&
              h.parse &&
              (await ((o = h.testParse) == null
                ? void 0
                : o.call(h, r, i, this))) &&
              ((r = (await h.parse(r, i, this)) || r), (s.parser = h));
          }
          return r;
        })()),
        s
      );
    }
    async load(t, i) {
      let s = 0;
      const r = {},
        n = gi(t),
        o = ee(t, (l) => ({ src: l })),
        a = o.length,
        h = o.map(async (l) => {
          const c = pt.toAbsolute(l.src);
          if (!r[l.src])
            try {
              this.promiseCache[c] ||
                (this.promiseCache[c] = this._getLoadPromiseAndParser(c, l)),
                (r[l.src] = await this.promiseCache[c].promise),
                i && i(++s / a);
            } catch (u) {
              throw (
                (delete this.promiseCache[c],
                delete r[l.src],
                new Error(`[Loader.load] Failed to load ${c}.
${u}`))
              );
            }
        });
      return await Promise.all(h), n ? r[o[0].src] : r;
    }
    async unload(t) {
      const s = ee(t, (r) => ({ src: r })).map(async (r) => {
        var a, h;
        const n = pt.toAbsolute(r.src),
          o = this.promiseCache[n];
        if (o) {
          const l = await o.promise;
          (h = (a = o.parser) == null ? void 0 : a.unload) == null ||
            h.call(a, l, r, this),
            delete this.promiseCache[n];
        }
      });
      await Promise.all(s);
    }
    get parsers() {
      return this._parsers;
    }
  }
  var $t = ((e) => (
    (e[(e.Low = 0)] = 'Low'),
    (e[(e.Normal = 1)] = 'Normal'),
    (e[(e.High = 2)] = 'High'),
    e
  ))($t || {});
  const _a = {
    extension: { type: P.LoadParser, priority: $t.Low },
    test(e) {
      return pt.extname(e).toLowerCase() === '.json';
    },
    async load(e) {
      return await (await B.ADAPTER.fetch(e)).json();
    },
  };
  U.add(_a);
  const ga = {
    extension: { type: P.LoadParser, priority: $t.Low },
    test(e) {
      return pt.extname(e).toLowerCase() === '.txt';
    },
    async load(e) {
      return await (await B.ADAPTER.fetch(e)).text();
    },
  };
  U.add(ga);
  const Cf = [
      'normal',
      'bold',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ],
    If = ['.ttf', '.otf', '.woff', '.woff2'],
    Pf = ['font/ttf', 'font/otf', 'font/woff', 'font/woff2'];
  function ya(e) {
    const t = pt.extname(e);
    return pt
      .basename(e, t)
      .replace(/(-|_)/g, ' ')
      .toLowerCase()
      .split(' ')
      .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
      .join(' ');
  }
  const va = {
    extension: { type: P.LoadParser, priority: $t.Low },
    test(e) {
      return an(e, Pf) || _i(e, If);
    },
    async load(e, t) {
      var s, r, n, o, a, h;
      const i = B.ADAPTER.getFontFaceSet();
      if (i) {
        const l = [],
          c =
            (r = (s = t.data) == null ? void 0 : s.family) != null ? r : ya(e),
          u =
            (a =
              (o = (n = t.data) == null ? void 0 : n.weights) == null
                ? void 0
                : o.filter((f) => Cf.includes(f))) != null
              ? a
              : ['normal'],
          d = (h = t.data) != null ? h : {};
        for (let f = 0; f < u.length; f++) {
          const p = u[f],
            g = new FontFace(
              c,
              `url(${encodeURI(e)})`,
              Pn(re({}, d), { weight: p })
            );
          await g.load(), i.add(g), l.push(g);
        }
        return l.length === 1 ? l[0] : l;
      }
      return (
        console.warn(
          '[loadWebFont] FontFace API is not supported. Skipping loading font'
        ),
        null
      );
    },
    unload(e) {
      (Array.isArray(e) ? e : [e]).forEach((t) =>
        B.ADAPTER.getFontFaceSet().delete(t)
      );
    },
  };
  U.add(va);
  let xa = 0,
    hn;
  const Mf = {
      id: 'checkImageBitmap',
      code: `
    async function checkImageBitmap()
    {
        try
        {
            if (typeof createImageBitmap !== 'function') return false;

            const response = await fetch('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=');
            const imageBlob =  await response.blob();
            const imageBitmap = await createImageBitmap(imageBlob);

            return imageBitmap.width === 1 && imageBitmap.height === 1;
        }
        catch (e)
        {
            return false;
        }
    }
    checkImageBitmap().then((result) => { self.postMessage(result); });
    `,
    },
    Bf = {
      id: 'loadImageBitmap',
      code: `
    async function loadImageBitmap(url)
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                + \`\${response.status} \${response.statusText}\`);
        }

        const imageBlob =  await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        return imageBitmap;
    }
    self.onmessage = async (event) =>
    {
        try
        {
            const imageBitmap = await loadImageBitmap(event.data.data[0]);

            self.postMessage({
                data: imageBitmap,
                uuid: event.data.uuid,
                id: event.data.id,
            }, [imageBitmap]);
        }
        catch(e)
        {
            self.postMessage({
                error: e,
                uuid: event.data.uuid,
                id: event.data.id,
            });
        }
    };`,
    };
  let ln;
  class Df {
    constructor() {
      (this._initialized = !1),
        (this._createdWorkers = 0),
        (this.workerPool = []),
        (this.queue = []),
        (this.resolveHash = {});
    }
    isImageBitmapSupported() {
      return this._isImageBitmapSupported !== void 0
        ? this._isImageBitmapSupported
        : ((this._isImageBitmapSupported = new Promise((t) => {
            const i = URL.createObjectURL(
                new Blob([Mf.code], { type: 'application/javascript' })
              ),
              s = new Worker(i);
            s.addEventListener('message', (r) => {
              s.terminate(), URL.revokeObjectURL(i), t(r.data);
            });
          })),
          this._isImageBitmapSupported);
    }
    loadImageBitmap(t) {
      return this._run('loadImageBitmap', [t]);
    }
    async _initWorkers() {
      this._initialized || (this._initialized = !0);
    }
    getWorker() {
      hn === void 0 && (hn = navigator.hardwareConcurrency || 4);
      let t = this.workerPool.pop();
      return (
        !t &&
          this._createdWorkers < hn &&
          (ln ||
            (ln = URL.createObjectURL(
              new Blob([Bf.code], { type: 'application/javascript' })
            )),
          this._createdWorkers++,
          (t = new Worker(ln)),
          t.addEventListener('message', (i) => {
            this.complete(i.data), this.returnWorker(i.target), this.next();
          })),
        t
      );
    }
    returnWorker(t) {
      this.workerPool.push(t);
    }
    complete(t) {
      t.error !== void 0
        ? this.resolveHash[t.uuid].reject(t.error)
        : this.resolveHash[t.uuid].resolve(t.data),
        (this.resolveHash[t.uuid] = null);
    }
    async _run(t, i) {
      await this._initWorkers();
      const s = new Promise((r, n) => {
        this.queue.push({ id: t, arguments: i, resolve: r, reject: n });
      });
      return this.next(), s;
    }
    next() {
      if (!this.queue.length) return;
      const t = this.getWorker();
      if (!t) return;
      const i = this.queue.pop(),
        s = i.id;
      (this.resolveHash[xa] = { resolve: i.resolve, reject: i.reject }),
        t.postMessage({ data: i.arguments, uuid: xa++, id: s });
    }
  }
  const Ta = new Df();
  function yi(e, t, i) {
    const s = new D(e);
    return (
      s.baseTexture.on('dispose', () => {
        delete t.promiseCache[i];
      }),
      s
    );
  }
  const Ff = ['.jpeg', '.jpg', '.png', '.webp', '.avif'],
    Nf = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
  async function ba(e) {
    const t = await B.ADAPTER.fetch(e);
    if (!t.ok)
      throw new Error(
        `[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`
      );
    const i = await t.blob();
    return await createImageBitmap(i);
  }
  const $e = {
    extension: { type: P.LoadParser, priority: $t.High },
    config: { preferWorkers: !0 },
    test(e) {
      return an(e, Nf) || _i(e, Ff);
    },
    async load(e, t, i) {
      let s = null;
      globalThis.createImageBitmap
        ? this.config.preferWorkers && (await Ta.isImageBitmapSupported())
          ? (s = await Ta.loadImageBitmap(e))
          : (s = await ba(e))
        : (s = await new Promise((n) => {
            (s = new Image()),
              (s.crossOrigin = 'anonymous'),
              (s.src = e),
              s.complete
                ? n(s)
                : (s.onload = () => {
                    n(s);
                  });
          }));
      const r = new V(s, re({ resolution: oe(e) }, t.data));
      return (r.resource.src = e), yi(r, i, e);
    },
    unload(e) {
      e.destroy(!0);
    },
  };
  U.add($e);
  const Ea = {
    extension: { type: P.LoadParser, priority: $t.High },
    test(e) {
      return pt.extname(e).toLowerCase() === '.svg';
    },
    async testParse(e) {
      return We.test(e);
    },
    async parse(e, t, i) {
      var o, a, h;
      const s = new We(
          e,
          (o = t == null ? void 0 : t.data) == null ? void 0 : o.resourceOptions
        ),
        r = new V(s, re({ resolution: oe(e) }, t == null ? void 0 : t.data));
      r.resource.src = e;
      const n = yi(r, i, e);
      return (
        ((h =
          (a = t == null ? void 0 : t.data) == null
            ? void 0
            : a.resourceOptions) != null &&
          h.autoLoad) ||
          (await s.load()),
        n
      );
    },
    async load(e, t) {
      return (await B.ADAPTER.fetch(e)).text();
    },
    unload: $e.unload,
  };
  U.add(Ea);
  class Of {
    constructor() {
      (this._defaultBundleIdentifierOptions = {
        connector: '-',
        createBundleAssetId: (t, i) => `${t}${this._bundleIdConnector}${i}`,
        extractAssetIdFromBundle: (t, i) =>
          i.replace(`${t}${this._bundleIdConnector}`, ''),
      }),
        (this._bundleIdConnector =
          this._defaultBundleIdentifierOptions.connector),
        (this._createBundleAssetId =
          this._defaultBundleIdentifierOptions.createBundleAssetId),
        (this._extractAssetIdFromBundle =
          this._defaultBundleIdentifierOptions.extractAssetIdFromBundle),
        (this._assetMap = {}),
        (this._preferredOrder = []),
        (this._parsers = []),
        (this._resolverHash = {}),
        (this._bundles = {});
    }
    setBundleIdentifier(t) {
      var i, s, r;
      if (
        ((this._bundleIdConnector =
          (i = t.connector) != null ? i : this._bundleIdConnector),
        (this._createBundleAssetId =
          (s = t.createBundleAssetId) != null ? s : this._createBundleAssetId),
        (this._extractAssetIdFromBundle =
          (r = t.extractAssetIdFromBundle) != null
            ? r
            : this._extractAssetIdFromBundle),
        this._extractAssetIdFromBundle(
          'foo',
          this._createBundleAssetId('foo', 'bar')
        ) !== 'bar')
      )
        throw new Error(
          '[Resolver] GenerateBundleAssetId are not working correctly'
        );
    }
    prefer(...t) {
      t.forEach((i) => {
        this._preferredOrder.push(i),
          i.priority || (i.priority = Object.keys(i.params));
      }),
        (this._resolverHash = {});
    }
    set basePath(t) {
      this._basePath = t;
    }
    get basePath() {
      return this._basePath;
    }
    set rootPath(t) {
      this._rootPath = t;
    }
    get rootPath() {
      return this._rootPath;
    }
    get parsers() {
      return this._parsers;
    }
    reset() {
      this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
        (this._assetMap = {}),
        (this._preferredOrder = []),
        (this._resolverHash = {}),
        (this._rootPath = null),
        (this._basePath = null),
        (this._manifest = null),
        (this._bundles = {}),
        (this._defaultSearchParams = null);
    }
    setDefaultSearchParams(t) {
      if (typeof t == 'string') this._defaultSearchParams = t;
      else {
        const i = t;
        this._defaultSearchParams = Object.keys(i)
          .map((s) => `${encodeURIComponent(s)}=${encodeURIComponent(i[s])}`)
          .join('&');
      }
    }
    addManifest(t) {
      this._manifest &&
        console.warn(
          '[Resolver] Manifest already exists, this will be overwritten'
        ),
        (this._manifest = t),
        t.bundles.forEach((i) => {
          this.addBundle(i.name, i.assets);
        });
    }
    addBundle(t, i) {
      const s = [];
      Array.isArray(i)
        ? i.forEach((r) => {
            if (typeof r.name == 'string') {
              const n = this._createBundleAssetId(t, r.name);
              s.push(n), this.add([r.name, n], r.srcs, r.data);
            } else {
              const n = r.name.map((o) => this._createBundleAssetId(t, o));
              n.forEach((o) => {
                s.push(o);
              }),
                this.add([...r.name, ...n], r.srcs);
            }
          })
        : Object.keys(i).forEach((r) => {
            s.push(this._createBundleAssetId(t, r)),
              this.add([r, this._createBundleAssetId(t, r)], i[r]);
          }),
        (this._bundles[t] = s);
    }
    add(t, i, s) {
      const r = ee(t);
      r.forEach((o) => {
        this.hasKey(o) &&
          console.warn(`[Resolver] already has key: ${o} overwriting`);
      }),
        Array.isArray(i) || (typeof i == 'string' ? (i = ma(i)) : (i = [i]));
      const n = i.map((o) => {
        var h;
        let a = o;
        if (typeof o == 'string') {
          let l = !1;
          for (let c = 0; c < this._parsers.length; c++) {
            const u = this._parsers[c];
            if (u.test(o)) {
              (a = u.parse(o)), (l = !0);
              break;
            }
          }
          l || (a = { src: o });
        }
        return (
          a.format || (a.format = a.src.split('.').pop()),
          a.alias || (a.alias = r),
          (this._basePath || this._rootPath) &&
            (a.src = pt.toAbsolute(a.src, this._basePath, this._rootPath)),
          (a.src = this._appendDefaultSearchParams(a.src)),
          (a.data = (h = a.data) != null ? h : s),
          a
        );
      });
      r.forEach((o) => {
        this._assetMap[o] = n;
      });
    }
    resolveBundle(t) {
      const i = gi(t);
      t = ee(t);
      const s = {};
      return (
        t.forEach((r) => {
          const n = this._bundles[r];
          if (n) {
            const o = this.resolve(n),
              a = {};
            for (const h in o) {
              const l = o[h];
              a[this._extractAssetIdFromBundle(r, h)] = l;
            }
            s[r] = a;
          }
        }),
        i ? s[t[0]] : s
      );
    }
    resolveUrl(t) {
      const i = this.resolve(t);
      if (typeof t != 'string') {
        const s = {};
        for (const r in i) s[r] = i[r].src;
        return s;
      }
      return i.src;
    }
    resolve(t) {
      const i = gi(t);
      t = ee(t);
      const s = {};
      return (
        t.forEach((r) => {
          var n;
          if (!this._resolverHash[r])
            if (this._assetMap[r]) {
              let o = this._assetMap[r];
              const a = this._getPreferredOrder(o),
                h = o[0];
              a == null ||
                a.priority.forEach((l) => {
                  a.params[l].forEach((c) => {
                    const u = o.filter((d) => (d[l] ? d[l] === c : !1));
                    u.length && (o = u);
                  });
                }),
                (this._resolverHash[r] = (n = o[0]) != null ? n : h);
            } else {
              let o = r;
              (this._basePath || this._rootPath) &&
                (o = pt.toAbsolute(o, this._basePath, this._rootPath)),
                (o = this._appendDefaultSearchParams(o)),
                (this._resolverHash[r] = { src: o });
            }
          s[r] = this._resolverHash[r];
        }),
        i ? s[t[0]] : s
      );
    }
    hasKey(t) {
      return !!this._assetMap[t];
    }
    hasBundle(t) {
      return !!this._bundles[t];
    }
    _getPreferredOrder(t) {
      for (let i = 0; i < t.length; i++) {
        const s = t[0],
          r = this._preferredOrder.find((n) =>
            n.params.format.includes(s.format)
          );
        if (r) return r;
      }
      return this._preferredOrder[0];
    }
    _appendDefaultSearchParams(t) {
      if (!this._defaultSearchParams) return t;
      const i = /\?/.test(t) ? '&' : '?';
      return `${t}${i}${this._defaultSearchParams}`;
    }
  }
  class wa {
    constructor() {
      (this._detections = []),
        (this._initialized = !1),
        (this.resolver = new Of()),
        (this.loader = new Rf()),
        (this.cache = Ye),
        (this._backgroundLoader = new Sf(this.loader)),
        (this._backgroundLoader.active = !0),
        this.reset();
    }
    async init(t = {}) {
      var n, o, a, h;
      if (this._initialized) {
        console.warn(
          '[Assets]AssetManager already initialized, did you load before calling this Asset.init()?'
        );
        return;
      }
      if (
        ((this._initialized = !0),
        t.defaultSearchParams &&
          this.resolver.setDefaultSearchParams(t.defaultSearchParams),
        t.basePath && (this.resolver.basePath = t.basePath),
        t.bundleIdentifier &&
          this.resolver.setBundleIdentifier(t.bundleIdentifier),
        t.manifest)
      ) {
        let l = t.manifest;
        typeof l == 'string' && (l = await this.load(l)),
          this.resolver.addManifest(l);
      }
      const i =
          (o = (n = t.texturePreference) == null ? void 0 : n.resolution) !=
          null
            ? o
            : 1,
        s = typeof i == 'number' ? [i] : i;
      let r = [];
      if ((a = t.texturePreference) != null && a.format) {
        const l = (h = t.texturePreference) == null ? void 0 : h.format;
        r = typeof l == 'string' ? [l] : l;
        for (const c of this._detections)
          (await c.test()) || (r = await c.remove(r));
      } else
        for (const l of this._detections)
          (await l.test()) && (r = await l.add(r));
      this.resolver.prefer({ params: { format: r, resolution: s } });
    }
    add(t, i, s) {
      this.resolver.add(t, i, s);
    }
    async load(t, i) {
      this._initialized || (await this.init());
      const s = gi(t),
        r = ee(t).map((a) =>
          typeof a != 'string'
            ? (this.resolver.add(a.src, a), a.src)
            : (this.resolver.hasKey(a) || this.resolver.add(a, a), a)
        ),
        n = this.resolver.resolve(r),
        o = await this._mapLoadToResolve(n, i);
      return s ? o[r[0]] : o;
    }
    addBundle(t, i) {
      this.resolver.addBundle(t, i);
    }
    async loadBundle(t, i) {
      this._initialized || (await this.init());
      let s = !1;
      typeof t == 'string' && ((s = !0), (t = [t]));
      const r = this.resolver.resolveBundle(t),
        n = {},
        o = Object.keys(r);
      let a = 0,
        h = 0;
      const l = () => {
          i == null || i(++a / h);
        },
        c = o.map((u) => {
          const d = r[u];
          return (
            (h += Object.keys(d).length),
            this._mapLoadToResolve(d, l).then((f) => {
              n[u] = f;
            })
          );
        });
      return await Promise.all(c), s ? n[t[0]] : n;
    }
    async backgroundLoad(t) {
      this._initialized || (await this.init()),
        typeof t == 'string' && (t = [t]);
      const i = this.resolver.resolve(t);
      this._backgroundLoader.add(Object.values(i));
    }
    async backgroundLoadBundle(t) {
      this._initialized || (await this.init()),
        typeof t == 'string' && (t = [t]);
      const i = this.resolver.resolveBundle(t);
      Object.values(i).forEach((s) => {
        this._backgroundLoader.add(Object.values(s));
      });
    }
    reset() {
      this.resolver.reset(),
        this.loader.reset(),
        this.cache.reset(),
        (this._initialized = !1);
    }
    get(t) {
      if (typeof t == 'string') return Ye.get(t);
      const i = {};
      for (let s = 0; s < t.length; s++) i[s] = Ye.get(t[s]);
      return i;
    }
    async _mapLoadToResolve(t, i) {
      const s = Object.values(t),
        r = Object.keys(t);
      this._backgroundLoader.active = !1;
      const n = await this.loader.load(s, i);
      this._backgroundLoader.active = !0;
      const o = {};
      return (
        s.forEach((a, h) => {
          const l = n[a.src],
            c = [a.src];
          a.alias && c.push(...a.alias), (o[r[h]] = l), Ye.set(c, l);
        }),
        o
      );
    }
    async unload(t) {
      this._initialized || (await this.init());
      const i = ee(t).map((r) => (typeof r != 'string' ? r.src : r)),
        s = this.resolver.resolve(i);
      await this._unloadFromResolved(s);
    }
    async unloadBundle(t) {
      this._initialized || (await this.init()), (t = ee(t));
      const i = this.resolver.resolveBundle(t),
        s = Object.keys(i).map((r) => this._unloadFromResolved(i[r]));
      await Promise.all(s);
    }
    async _unloadFromResolved(t) {
      const i = Object.values(t);
      i.forEach((s) => {
        Ye.remove(s.src);
      }),
        await this.loader.unload(i);
    }
    get detections() {
      return this._detections;
    }
    get preferWorkers() {
      return $e.config.preferWorkers;
    }
    set preferWorkers(t) {
      $e.config.preferWorkers = t;
    }
  }
  const vi = new wa();
  U.handleByList(P.LoadParser, vi.loader.parsers)
    .handleByList(P.ResolveParser, vi.resolver.parsers)
    .handleByList(P.CacheParser, vi.cache.parsers)
    .handleByList(P.DetectionParser, vi.detections);
  const Sa = {
    extension: P.CacheParser,
    test: (e) => Array.isArray(e) && e.every((t) => t instanceof D),
    getCacheableAssets: (e, t) => {
      const i = {};
      return (
        e.forEach((s) => {
          t.forEach((r, n) => {
            i[s + (n === 0 ? '' : n + 1)] = r;
          });
        }),
        i
      );
    },
  };
  U.add(Sa);
  const Aa = {
    extension: { type: P.DetectionParser, priority: 1 },
    test: async () => {
      if (!globalThis.createImageBitmap) return !1;
      const e =
          'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=',
        t = await B.ADAPTER.fetch(e).then((i) => i.blob());
      return createImageBitmap(t).then(
        () => !0,
        () => !1
      );
    },
    add: async (e) => [...e, 'avif'],
    remove: async (e) => e.filter((t) => t !== 'avif'),
  };
  U.add(Aa);
  const Ra = {
    extension: { type: P.DetectionParser, priority: 0 },
    test: async () => {
      if (!globalThis.createImageBitmap) return !1;
      const e =
          'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
        t = await B.ADAPTER.fetch(e).then((i) => i.blob());
      return createImageBitmap(t).then(
        () => !0,
        () => !1
      );
    },
    add: async (e) => [...e, 'webp'],
    remove: async (e) => e.filter((t) => t !== 'webp'),
  };
  U.add(Ra);
  const Ca = ['png', 'jpg', 'jpeg'],
    Ia = {
      extension: { type: P.DetectionParser, priority: -1 },
      test: () => Promise.resolve(!0),
      add: async (e) => [...e, ...Ca],
      remove: async (e) => e.filter((t) => !Ca.includes(t)),
    };
  U.add(Ia);
  const Pa = {
    extension: P.ResolveParser,
    test: $e.test,
    parse: (e) => {
      var t, i;
      return {
        resolution: parseFloat(
          (i = (t = B.RETINA_PREFIX.exec(e)) == null ? void 0 : t[1]) != null
            ? i
            : '1'
        ),
        format: e.split('.').pop(),
        src: e,
      };
    },
  };
  U.add(Pa);
  var At = ((e) => (
    (e[(e.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
      'COMPRESSED_RGB_S3TC_DXT1_EXT'),
    (e[(e.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
      'COMPRESSED_RGBA_S3TC_DXT1_EXT'),
    (e[(e.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
      'COMPRESSED_RGBA_S3TC_DXT3_EXT'),
    (e[(e.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
      'COMPRESSED_RGBA_S3TC_DXT5_EXT'),
    (e[(e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917)] =
      'COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT'),
    (e[(e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918)] =
      'COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT'),
    (e[(e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919)] =
      'COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT'),
    (e[(e.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916)] =
      'COMPRESSED_SRGB_S3TC_DXT1_EXT'),
    (e[(e.COMPRESSED_R11_EAC = 37488)] = 'COMPRESSED_R11_EAC'),
    (e[(e.COMPRESSED_SIGNED_R11_EAC = 37489)] = 'COMPRESSED_SIGNED_R11_EAC'),
    (e[(e.COMPRESSED_RG11_EAC = 37490)] = 'COMPRESSED_RG11_EAC'),
    (e[(e.COMPRESSED_SIGNED_RG11_EAC = 37491)] = 'COMPRESSED_SIGNED_RG11_EAC'),
    (e[(e.COMPRESSED_RGB8_ETC2 = 37492)] = 'COMPRESSED_RGB8_ETC2'),
    (e[(e.COMPRESSED_RGBA8_ETC2_EAC = 37496)] = 'COMPRESSED_RGBA8_ETC2_EAC'),
    (e[(e.COMPRESSED_SRGB8_ETC2 = 37493)] = 'COMPRESSED_SRGB8_ETC2'),
    (e[(e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
      'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC'),
    (e[(e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
      'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
    (e[(e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
      'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
    (e[(e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840)] =
      'COMPRESSED_RGB_PVRTC_4BPPV1_IMG'),
    (e[(e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842)] =
      'COMPRESSED_RGBA_PVRTC_4BPPV1_IMG'),
    (e[(e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841)] =
      'COMPRESSED_RGB_PVRTC_2BPPV1_IMG'),
    (e[(e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843)] =
      'COMPRESSED_RGBA_PVRTC_2BPPV1_IMG'),
    (e[(e.COMPRESSED_RGB_ETC1_WEBGL = 36196)] = 'COMPRESSED_RGB_ETC1_WEBGL'),
    (e[(e.COMPRESSED_RGB_ATC_WEBGL = 35986)] = 'COMPRESSED_RGB_ATC_WEBGL'),
    (e[(e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986)] =
      'COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL'),
    (e[(e.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798)] =
      'COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL'),
    (e[(e.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808)] =
      'COMPRESSED_RGBA_ASTC_4x4_KHR'),
    e
  ))(At || {});
  const xi = {
    [33776]: 0.5,
    [33777]: 0.5,
    [33778]: 1,
    [33779]: 1,
    [35916]: 0.5,
    [35917]: 0.5,
    [35918]: 1,
    [35919]: 1,
    [37488]: 0.5,
    [37489]: 0.5,
    [37490]: 1,
    [37491]: 1,
    [37492]: 0.5,
    [37496]: 1,
    [37493]: 0.5,
    [37497]: 1,
    [37494]: 0.5,
    [37495]: 0.5,
    [35840]: 0.5,
    [35842]: 0.5,
    [35841]: 0.25,
    [35843]: 0.25,
    [36196]: 0.5,
    [35986]: 0.5,
    [35986]: 1,
    [34798]: 1,
    [37808]: 1,
  };
  let ue, qe;
  function Ma() {
    qe = {
      s3tc: ue.getExtension('WEBGL_compressed_texture_s3tc'),
      s3tc_sRGB: ue.getExtension('WEBGL_compressed_texture_s3tc_srgb'),
      etc: ue.getExtension('WEBGL_compressed_texture_etc'),
      etc1: ue.getExtension('WEBGL_compressed_texture_etc1'),
      pvrtc:
        ue.getExtension('WEBGL_compressed_texture_pvrtc') ||
        ue.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
      atc: ue.getExtension('WEBGL_compressed_texture_atc'),
      astc: ue.getExtension('WEBGL_compressed_texture_astc'),
    };
  }
  const Ba = {
    extension: { type: P.DetectionParser, priority: 2 },
    test: async () => {
      const t = B.ADAPTER.createCanvas().getContext('webgl');
      return t
        ? ((ue = t), !0)
        : (console.warn('WebGL not available for compressed textures.'), !1);
    },
    add: async (e) => {
      qe || Ma();
      const t = [];
      for (const i in qe) !qe[i] || t.push(i);
      return [...t, ...e];
    },
    remove: async (e) => (qe || Ma(), e.filter((t) => !(t in qe))),
  };
  U.add(Ba);
  class Da extends He {
    constructor(t, i = { width: 1, height: 1, autoLoad: !0 }) {
      let s, r;
      typeof t == 'string'
        ? ((s = t), (r = new Uint8Array()))
        : ((s = null), (r = t)),
        super(r, i),
        (this.origin = s),
        (this.buffer = r ? new Yi(r) : null),
        this.origin && i.autoLoad !== !1 && this.load(),
        r != null &&
          r.length &&
          ((this.loaded = !0), this.onBlobLoaded(this.buffer.rawBinaryData));
    }
    onBlobLoaded(t) {}
    async load() {
      const s = await (await (await fetch(this.origin)).blob()).arrayBuffer();
      return (
        (this.data = new Uint32Array(s)),
        (this.buffer = new Yi(s)),
        (this.loaded = !0),
        this.onBlobLoaded(s),
        this.update(),
        this
      );
    }
  }
  class me extends Da {
    constructor(t, i) {
      super(t, i),
        (this.format = i.format),
        (this.levels = i.levels || 1),
        (this._width = i.width),
        (this._height = i.height),
        (this._extension = me._formatToExtension(this.format)),
        (i.levelBuffers || this.buffer) &&
          (this._levelBuffers =
            i.levelBuffers ||
            me._createLevelBuffers(
              t instanceof Uint8Array ? t : this.buffer.uint8View,
              this.format,
              this.levels,
              4,
              4,
              this.width,
              this.height
            ));
    }
    upload(t, i, s) {
      const r = t.gl;
      if (!t.context.extensions[this._extension])
        throw new Error(
          `${this._extension} textures are not supported on the current machine`
        );
      if (!this._levelBuffers) return !1;
      for (let o = 0, a = this.levels; o < a; o++) {
        const {
          levelID: h,
          levelWidth: l,
          levelHeight: c,
          levelBuffer: u,
        } = this._levelBuffers[o];
        r.compressedTexImage2D(r.TEXTURE_2D, h, this.format, l, c, 0, u);
      }
      return !0;
    }
    onBlobLoaded() {
      this._levelBuffers = me._createLevelBuffers(
        this.buffer.uint8View,
        this.format,
        this.levels,
        4,
        4,
        this.width,
        this.height
      );
    }
    static _formatToExtension(t) {
      if (t >= 33776 && t <= 33779) return 's3tc';
      if (t >= 37488 && t <= 37497) return 'etc';
      if (t >= 35840 && t <= 35843) return 'pvrtc';
      if (t >= 36196) return 'etc1';
      if (t >= 35986 && t <= 34798) return 'atc';
      throw new Error('Invalid (compressed) texture format given!');
    }
    static _createLevelBuffers(t, i, s, r, n, o, a) {
      const h = new Array(s);
      let l = t.byteOffset,
        c = o,
        u = a,
        d = (c + r - 1) & ~(r - 1),
        f = (u + n - 1) & ~(n - 1),
        p = d * f * xi[i];
      for (let g = 0; g < s; g++)
        (h[g] = {
          levelID: g,
          levelWidth: s > 1 ? c : d,
          levelHeight: s > 1 ? u : f,
          levelBuffer: new Uint8Array(t.buffer, l, p),
        }),
          (l += p),
          (c = c >> 1 || 1),
          (u = u >> 1 || 1),
          (d = (c + r - 1) & ~(r - 1)),
          (f = (u + n - 1) & ~(n - 1)),
          (p = d * f * xi[i]);
      return h;
    }
  }
  const cn = 4,
    vs = 124,
    Lf = 32,
    Fa = 20,
    Uf = 542327876,
    xs = {
      SIZE: 1,
      FLAGS: 2,
      HEIGHT: 3,
      WIDTH: 4,
      MIPMAP_COUNT: 7,
      PIXEL_FORMAT: 19,
    },
    kf = {
      SIZE: 0,
      FLAGS: 1,
      FOURCC: 2,
      RGB_BITCOUNT: 3,
      R_BIT_MASK: 4,
      G_BIT_MASK: 5,
      B_BIT_MASK: 6,
      A_BIT_MASK: 7,
    },
    Ts = {
      DXGI_FORMAT: 0,
      RESOURCE_DIMENSION: 1,
      MISC_FLAG: 2,
      ARRAY_SIZE: 3,
      MISC_FLAGS2: 4,
    };
  var Gf = ((e) => (
      (e[(e.DXGI_FORMAT_UNKNOWN = 0)] = 'DXGI_FORMAT_UNKNOWN'),
      (e[(e.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1)] =
        'DXGI_FORMAT_R32G32B32A32_TYPELESS'),
      (e[(e.DXGI_FORMAT_R32G32B32A32_FLOAT = 2)] =
        'DXGI_FORMAT_R32G32B32A32_FLOAT'),
      (e[(e.DXGI_FORMAT_R32G32B32A32_UINT = 3)] =
        'DXGI_FORMAT_R32G32B32A32_UINT'),
      (e[(e.DXGI_FORMAT_R32G32B32A32_SINT = 4)] =
        'DXGI_FORMAT_R32G32B32A32_SINT'),
      (e[(e.DXGI_FORMAT_R32G32B32_TYPELESS = 5)] =
        'DXGI_FORMAT_R32G32B32_TYPELESS'),
      (e[(e.DXGI_FORMAT_R32G32B32_FLOAT = 6)] = 'DXGI_FORMAT_R32G32B32_FLOAT'),
      (e[(e.DXGI_FORMAT_R32G32B32_UINT = 7)] = 'DXGI_FORMAT_R32G32B32_UINT'),
      (e[(e.DXGI_FORMAT_R32G32B32_SINT = 8)] = 'DXGI_FORMAT_R32G32B32_SINT'),
      (e[(e.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9)] =
        'DXGI_FORMAT_R16G16B16A16_TYPELESS'),
      (e[(e.DXGI_FORMAT_R16G16B16A16_FLOAT = 10)] =
        'DXGI_FORMAT_R16G16B16A16_FLOAT'),
      (e[(e.DXGI_FORMAT_R16G16B16A16_UNORM = 11)] =
        'DXGI_FORMAT_R16G16B16A16_UNORM'),
      (e[(e.DXGI_FORMAT_R16G16B16A16_UINT = 12)] =
        'DXGI_FORMAT_R16G16B16A16_UINT'),
      (e[(e.DXGI_FORMAT_R16G16B16A16_SNORM = 13)] =
        'DXGI_FORMAT_R16G16B16A16_SNORM'),
      (e[(e.DXGI_FORMAT_R16G16B16A16_SINT = 14)] =
        'DXGI_FORMAT_R16G16B16A16_SINT'),
      (e[(e.DXGI_FORMAT_R32G32_TYPELESS = 15)] = 'DXGI_FORMAT_R32G32_TYPELESS'),
      (e[(e.DXGI_FORMAT_R32G32_FLOAT = 16)] = 'DXGI_FORMAT_R32G32_FLOAT'),
      (e[(e.DXGI_FORMAT_R32G32_UINT = 17)] = 'DXGI_FORMAT_R32G32_UINT'),
      (e[(e.DXGI_FORMAT_R32G32_SINT = 18)] = 'DXGI_FORMAT_R32G32_SINT'),
      (e[(e.DXGI_FORMAT_R32G8X24_TYPELESS = 19)] =
        'DXGI_FORMAT_R32G8X24_TYPELESS'),
      (e[(e.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20)] =
        'DXGI_FORMAT_D32_FLOAT_S8X24_UINT'),
      (e[(e.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21)] =
        'DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS'),
      (e[(e.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22)] =
        'DXGI_FORMAT_X32_TYPELESS_G8X24_UINT'),
      (e[(e.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23)] =
        'DXGI_FORMAT_R10G10B10A2_TYPELESS'),
      (e[(e.DXGI_FORMAT_R10G10B10A2_UNORM = 24)] =
        'DXGI_FORMAT_R10G10B10A2_UNORM'),
      (e[(e.DXGI_FORMAT_R10G10B10A2_UINT = 25)] =
        'DXGI_FORMAT_R10G10B10A2_UINT'),
      (e[(e.DXGI_FORMAT_R11G11B10_FLOAT = 26)] = 'DXGI_FORMAT_R11G11B10_FLOAT'),
      (e[(e.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27)] =
        'DXGI_FORMAT_R8G8B8A8_TYPELESS'),
      (e[(e.DXGI_FORMAT_R8G8B8A8_UNORM = 28)] = 'DXGI_FORMAT_R8G8B8A8_UNORM'),
      (e[(e.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29)] =
        'DXGI_FORMAT_R8G8B8A8_UNORM_SRGB'),
      (e[(e.DXGI_FORMAT_R8G8B8A8_UINT = 30)] = 'DXGI_FORMAT_R8G8B8A8_UINT'),
      (e[(e.DXGI_FORMAT_R8G8B8A8_SNORM = 31)] = 'DXGI_FORMAT_R8G8B8A8_SNORM'),
      (e[(e.DXGI_FORMAT_R8G8B8A8_SINT = 32)] = 'DXGI_FORMAT_R8G8B8A8_SINT'),
      (e[(e.DXGI_FORMAT_R16G16_TYPELESS = 33)] = 'DXGI_FORMAT_R16G16_TYPELESS'),
      (e[(e.DXGI_FORMAT_R16G16_FLOAT = 34)] = 'DXGI_FORMAT_R16G16_FLOAT'),
      (e[(e.DXGI_FORMAT_R16G16_UNORM = 35)] = 'DXGI_FORMAT_R16G16_UNORM'),
      (e[(e.DXGI_FORMAT_R16G16_UINT = 36)] = 'DXGI_FORMAT_R16G16_UINT'),
      (e[(e.DXGI_FORMAT_R16G16_SNORM = 37)] = 'DXGI_FORMAT_R16G16_SNORM'),
      (e[(e.DXGI_FORMAT_R16G16_SINT = 38)] = 'DXGI_FORMAT_R16G16_SINT'),
      (e[(e.DXGI_FORMAT_R32_TYPELESS = 39)] = 'DXGI_FORMAT_R32_TYPELESS'),
      (e[(e.DXGI_FORMAT_D32_FLOAT = 40)] = 'DXGI_FORMAT_D32_FLOAT'),
      (e[(e.DXGI_FORMAT_R32_FLOAT = 41)] = 'DXGI_FORMAT_R32_FLOAT'),
      (e[(e.DXGI_FORMAT_R32_UINT = 42)] = 'DXGI_FORMAT_R32_UINT'),
      (e[(e.DXGI_FORMAT_R32_SINT = 43)] = 'DXGI_FORMAT_R32_SINT'),
      (e[(e.DXGI_FORMAT_R24G8_TYPELESS = 44)] = 'DXGI_FORMAT_R24G8_TYPELESS'),
      (e[(e.DXGI_FORMAT_D24_UNORM_S8_UINT = 45)] =
        'DXGI_FORMAT_D24_UNORM_S8_UINT'),
      (e[(e.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46)] =
        'DXGI_FORMAT_R24_UNORM_X8_TYPELESS'),
      (e[(e.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47)] =
        'DXGI_FORMAT_X24_TYPELESS_G8_UINT'),
      (e[(e.DXGI_FORMAT_R8G8_TYPELESS = 48)] = 'DXGI_FORMAT_R8G8_TYPELESS'),
      (e[(e.DXGI_FORMAT_R8G8_UNORM = 49)] = 'DXGI_FORMAT_R8G8_UNORM'),
      (e[(e.DXGI_FORMAT_R8G8_UINT = 50)] = 'DXGI_FORMAT_R8G8_UINT'),
      (e[(e.DXGI_FORMAT_R8G8_SNORM = 51)] = 'DXGI_FORMAT_R8G8_SNORM'),
      (e[(e.DXGI_FORMAT_R8G8_SINT = 52)] = 'DXGI_FORMAT_R8G8_SINT'),
      (e[(e.DXGI_FORMAT_R16_TYPELESS = 53)] = 'DXGI_FORMAT_R16_TYPELESS'),
      (e[(e.DXGI_FORMAT_R16_FLOAT = 54)] = 'DXGI_FORMAT_R16_FLOAT'),
      (e[(e.DXGI_FORMAT_D16_UNORM = 55)] = 'DXGI_FORMAT_D16_UNORM'),
      (e[(e.DXGI_FORMAT_R16_UNORM = 56)] = 'DXGI_FORMAT_R16_UNORM'),
      (e[(e.DXGI_FORMAT_R16_UINT = 57)] = 'DXGI_FORMAT_R16_UINT'),
      (e[(e.DXGI_FORMAT_R16_SNORM = 58)] = 'DXGI_FORMAT_R16_SNORM'),
      (e[(e.DXGI_FORMAT_R16_SINT = 59)] = 'DXGI_FORMAT_R16_SINT'),
      (e[(e.DXGI_FORMAT_R8_TYPELESS = 60)] = 'DXGI_FORMAT_R8_TYPELESS'),
      (e[(e.DXGI_FORMAT_R8_UNORM = 61)] = 'DXGI_FORMAT_R8_UNORM'),
      (e[(e.DXGI_FORMAT_R8_UINT = 62)] = 'DXGI_FORMAT_R8_UINT'),
      (e[(e.DXGI_FORMAT_R8_SNORM = 63)] = 'DXGI_FORMAT_R8_SNORM'),
      (e[(e.DXGI_FORMAT_R8_SINT = 64)] = 'DXGI_FORMAT_R8_SINT'),
      (e[(e.DXGI_FORMAT_A8_UNORM = 65)] = 'DXGI_FORMAT_A8_UNORM'),
      (e[(e.DXGI_FORMAT_R1_UNORM = 66)] = 'DXGI_FORMAT_R1_UNORM'),
      (e[(e.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67)] =
        'DXGI_FORMAT_R9G9B9E5_SHAREDEXP'),
      (e[(e.DXGI_FORMAT_R8G8_B8G8_UNORM = 68)] = 'DXGI_FORMAT_R8G8_B8G8_UNORM'),
      (e[(e.DXGI_FORMAT_G8R8_G8B8_UNORM = 69)] = 'DXGI_FORMAT_G8R8_G8B8_UNORM'),
      (e[(e.DXGI_FORMAT_BC1_TYPELESS = 70)] = 'DXGI_FORMAT_BC1_TYPELESS'),
      (e[(e.DXGI_FORMAT_BC1_UNORM = 71)] = 'DXGI_FORMAT_BC1_UNORM'),
      (e[(e.DXGI_FORMAT_BC1_UNORM_SRGB = 72)] = 'DXGI_FORMAT_BC1_UNORM_SRGB'),
      (e[(e.DXGI_FORMAT_BC2_TYPELESS = 73)] = 'DXGI_FORMAT_BC2_TYPELESS'),
      (e[(e.DXGI_FORMAT_BC2_UNORM = 74)] = 'DXGI_FORMAT_BC2_UNORM'),
      (e[(e.DXGI_FORMAT_BC2_UNORM_SRGB = 75)] = 'DXGI_FORMAT_BC2_UNORM_SRGB'),
      (e[(e.DXGI_FORMAT_BC3_TYPELESS = 76)] = 'DXGI_FORMAT_BC3_TYPELESS'),
      (e[(e.DXGI_FORMAT_BC3_UNORM = 77)] = 'DXGI_FORMAT_BC3_UNORM'),
      (e[(e.DXGI_FORMAT_BC3_UNORM_SRGB = 78)] = 'DXGI_FORMAT_BC3_UNORM_SRGB'),
      (e[(e.DXGI_FORMAT_BC4_TYPELESS = 79)] = 'DXGI_FORMAT_BC4_TYPELESS'),
      (e[(e.DXGI_FORMAT_BC4_UNORM = 80)] = 'DXGI_FORMAT_BC4_UNORM'),
      (e[(e.DXGI_FORMAT_BC4_SNORM = 81)] = 'DXGI_FORMAT_BC4_SNORM'),
      (e[(e.DXGI_FORMAT_BC5_TYPELESS = 82)] = 'DXGI_FORMAT_BC5_TYPELESS'),
      (e[(e.DXGI_FORMAT_BC5_UNORM = 83)] = 'DXGI_FORMAT_BC5_UNORM'),
      (e[(e.DXGI_FORMAT_BC5_SNORM = 84)] = 'DXGI_FORMAT_BC5_SNORM'),
      (e[(e.DXGI_FORMAT_B5G6R5_UNORM = 85)] = 'DXGI_FORMAT_B5G6R5_UNORM'),
      (e[(e.DXGI_FORMAT_B5G5R5A1_UNORM = 86)] = 'DXGI_FORMAT_B5G5R5A1_UNORM'),
      (e[(e.DXGI_FORMAT_B8G8R8A8_UNORM = 87)] = 'DXGI_FORMAT_B8G8R8A8_UNORM'),
      (e[(e.DXGI_FORMAT_B8G8R8X8_UNORM = 88)] = 'DXGI_FORMAT_B8G8R8X8_UNORM'),
      (e[(e.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89)] =
        'DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM'),
      (e[(e.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90)] =
        'DXGI_FORMAT_B8G8R8A8_TYPELESS'),
      (e[(e.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91)] =
        'DXGI_FORMAT_B8G8R8A8_UNORM_SRGB'),
      (e[(e.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92)] =
        'DXGI_FORMAT_B8G8R8X8_TYPELESS'),
      (e[(e.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93)] =
        'DXGI_FORMAT_B8G8R8X8_UNORM_SRGB'),
      (e[(e.DXGI_FORMAT_BC6H_TYPELESS = 94)] = 'DXGI_FORMAT_BC6H_TYPELESS'),
      (e[(e.DXGI_FORMAT_BC6H_UF16 = 95)] = 'DXGI_FORMAT_BC6H_UF16'),
      (e[(e.DXGI_FORMAT_BC6H_SF16 = 96)] = 'DXGI_FORMAT_BC6H_SF16'),
      (e[(e.DXGI_FORMAT_BC7_TYPELESS = 97)] = 'DXGI_FORMAT_BC7_TYPELESS'),
      (e[(e.DXGI_FORMAT_BC7_UNORM = 98)] = 'DXGI_FORMAT_BC7_UNORM'),
      (e[(e.DXGI_FORMAT_BC7_UNORM_SRGB = 99)] = 'DXGI_FORMAT_BC7_UNORM_SRGB'),
      (e[(e.DXGI_FORMAT_AYUV = 100)] = 'DXGI_FORMAT_AYUV'),
      (e[(e.DXGI_FORMAT_Y410 = 101)] = 'DXGI_FORMAT_Y410'),
      (e[(e.DXGI_FORMAT_Y416 = 102)] = 'DXGI_FORMAT_Y416'),
      (e[(e.DXGI_FORMAT_NV12 = 103)] = 'DXGI_FORMAT_NV12'),
      (e[(e.DXGI_FORMAT_P010 = 104)] = 'DXGI_FORMAT_P010'),
      (e[(e.DXGI_FORMAT_P016 = 105)] = 'DXGI_FORMAT_P016'),
      (e[(e.DXGI_FORMAT_420_OPAQUE = 106)] = 'DXGI_FORMAT_420_OPAQUE'),
      (e[(e.DXGI_FORMAT_YUY2 = 107)] = 'DXGI_FORMAT_YUY2'),
      (e[(e.DXGI_FORMAT_Y210 = 108)] = 'DXGI_FORMAT_Y210'),
      (e[(e.DXGI_FORMAT_Y216 = 109)] = 'DXGI_FORMAT_Y216'),
      (e[(e.DXGI_FORMAT_NV11 = 110)] = 'DXGI_FORMAT_NV11'),
      (e[(e.DXGI_FORMAT_AI44 = 111)] = 'DXGI_FORMAT_AI44'),
      (e[(e.DXGI_FORMAT_IA44 = 112)] = 'DXGI_FORMAT_IA44'),
      (e[(e.DXGI_FORMAT_P8 = 113)] = 'DXGI_FORMAT_P8'),
      (e[(e.DXGI_FORMAT_A8P8 = 114)] = 'DXGI_FORMAT_A8P8'),
      (e[(e.DXGI_FORMAT_B4G4R4A4_UNORM = 115)] = 'DXGI_FORMAT_B4G4R4A4_UNORM'),
      (e[(e.DXGI_FORMAT_P208 = 116)] = 'DXGI_FORMAT_P208'),
      (e[(e.DXGI_FORMAT_V208 = 117)] = 'DXGI_FORMAT_V208'),
      (e[(e.DXGI_FORMAT_V408 = 118)] = 'DXGI_FORMAT_V408'),
      (e[(e.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119)] =
        'DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE'),
      (e[(e.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120)] =
        'DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE'),
      (e[(e.DXGI_FORMAT_FORCE_UINT = 121)] = 'DXGI_FORMAT_FORCE_UINT'),
      e
    ))(Gf || {}),
    Hf = ((e) => (
      (e[(e.DDS_DIMENSION_TEXTURE1D = 2)] = 'DDS_DIMENSION_TEXTURE1D'),
      (e[(e.DDS_DIMENSION_TEXTURE2D = 3)] = 'DDS_DIMENSION_TEXTURE2D'),
      (e[(e.DDS_DIMENSION_TEXTURE3D = 6)] = 'DDS_DIMENSION_TEXTURE3D'),
      e
    ))(Hf || {});
  const Xf = 1,
    Vf = 2,
    zf = 4,
    Wf = 64,
    jf = 512,
    Yf = 131072,
    $f = 827611204,
    qf = 861165636,
    Kf = 894720068,
    Zf = 808540228,
    Qf = 4,
    Jf = {
      [$f]: At.COMPRESSED_RGBA_S3TC_DXT1_EXT,
      [qf]: At.COMPRESSED_RGBA_S3TC_DXT3_EXT,
      [Kf]: At.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    },
    tp = {
      [70]: At.COMPRESSED_RGBA_S3TC_DXT1_EXT,
      [71]: At.COMPRESSED_RGBA_S3TC_DXT1_EXT,
      [73]: At.COMPRESSED_RGBA_S3TC_DXT3_EXT,
      [74]: At.COMPRESSED_RGBA_S3TC_DXT3_EXT,
      [76]: At.COMPRESSED_RGBA_S3TC_DXT5_EXT,
      [77]: At.COMPRESSED_RGBA_S3TC_DXT5_EXT,
      [72]: At.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
      [75]: At.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
      [78]: At.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
    };
  function Na(e) {
    const t = new Uint32Array(e);
    if (t[0] !== Uf) throw new Error('Invalid DDS file magic word');
    const s = new Uint32Array(e, 0, vs / Uint32Array.BYTES_PER_ELEMENT),
      r = s[xs.HEIGHT],
      n = s[xs.WIDTH],
      o = s[xs.MIPMAP_COUNT],
      a = new Uint32Array(
        e,
        xs.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT,
        Lf / Uint32Array.BYTES_PER_ELEMENT
      ),
      h = a[Xf];
    if (h & zf) {
      const l = a[kf.FOURCC];
      if (l !== Zf) {
        const y = Jf[l],
          x = cn + vs,
          A = new Uint8Array(e, x);
        return [new me(A, { format: y, width: n, height: r, levels: o })];
      }
      const c = cn + vs,
        u = new Uint32Array(t.buffer, c, Fa / Uint32Array.BYTES_PER_ELEMENT),
        d = u[Ts.DXGI_FORMAT],
        f = u[Ts.RESOURCE_DIMENSION],
        p = u[Ts.MISC_FLAG],
        g = u[Ts.ARRAY_SIZE],
        _ = tp[d];
      if (_ === void 0)
        throw new Error(
          `DDSParser cannot parse texture data with DXGI format ${d}`
        );
      if (p === Qf)
        throw new Error('DDSParser does not support cubemap textures');
      if (f === 6)
        throw new Error('DDSParser does not supported 3D texture data');
      const v = new Array(),
        T = cn + vs + Fa;
      if (g === 1) v.push(new Uint8Array(e, T));
      else {
        const y = xi[_];
        let x = 0,
          A = n,
          M = r;
        for (let E = 0; E < o; E++) {
          const L = Math.max(1, (A + 3) & -4),
            H = Math.max(1, (M + 3) & -4);
          (x += L * H * y), (A = A >>> 1), (M = M >>> 1);
        }
        let R = T;
        for (let E = 0; E < g; E++) v.push(new Uint8Array(e, R, x)), (R += x);
      }
      return v.map(
        (y) => new me(y, { format: _, width: n, height: r, levels: o })
      );
    }
    throw h & Wf
      ? new Error('DDSParser does not support uncompressed texture data.')
      : h & jf
      ? new Error('DDSParser does not supported YUV uncompressed texture data.')
      : h & Yf
      ? new Error(
          'DDSParser does not support single-channel (lumninance) texture data!'
        )
      : h & Vf
      ? new Error(
          'DDSParser does not support single-channel (alpha) texture data!'
        )
      : new Error(
          'DDSParser failed to load a texture file due to an unknown reason!'
        );
  }
  const Oa = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
    ep = 67305985,
    qt = {
      FILE_IDENTIFIER: 0,
      ENDIANNESS: 12,
      GL_TYPE: 16,
      GL_TYPE_SIZE: 20,
      GL_FORMAT: 24,
      GL_INTERNAL_FORMAT: 28,
      GL_BASE_INTERNAL_FORMAT: 32,
      PIXEL_WIDTH: 36,
      PIXEL_HEIGHT: 40,
      PIXEL_DEPTH: 44,
      NUMBER_OF_ARRAY_ELEMENTS: 48,
      NUMBER_OF_FACES: 52,
      NUMBER_OF_MIPMAP_LEVELS: 56,
      BYTES_OF_KEY_VALUE_DATA: 60,
    },
    un = 64,
    dn = {
      [k.UNSIGNED_BYTE]: 1,
      [k.UNSIGNED_SHORT]: 2,
      [k.INT]: 4,
      [k.UNSIGNED_INT]: 4,
      [k.FLOAT]: 4,
      [k.HALF_FLOAT]: 8,
    },
    La = {
      [C.RGBA]: 4,
      [C.RGB]: 3,
      [C.RG]: 2,
      [C.RED]: 1,
      [C.LUMINANCE]: 1,
      [C.LUMINANCE_ALPHA]: 2,
      [C.ALPHA]: 1,
    },
    Ua = {
      [k.UNSIGNED_SHORT_4_4_4_4]: 2,
      [k.UNSIGNED_SHORT_5_5_5_1]: 2,
      [k.UNSIGNED_SHORT_5_6_5]: 2,
    };
  function ka(e, t, i = !1) {
    const s = new DataView(t);
    if (!ip(e, s)) return null;
    const r = s.getUint32(qt.ENDIANNESS, !0) === ep,
      n = s.getUint32(qt.GL_TYPE, r),
      o = s.getUint32(qt.GL_FORMAT, r),
      a = s.getUint32(qt.GL_INTERNAL_FORMAT, r),
      h = s.getUint32(qt.PIXEL_WIDTH, r),
      l = s.getUint32(qt.PIXEL_HEIGHT, r) || 1,
      c = s.getUint32(qt.PIXEL_DEPTH, r) || 1,
      u = s.getUint32(qt.NUMBER_OF_ARRAY_ELEMENTS, r) || 1,
      d = s.getUint32(qt.NUMBER_OF_FACES, r),
      f = s.getUint32(qt.NUMBER_OF_MIPMAP_LEVELS, r),
      p = s.getUint32(qt.BYTES_OF_KEY_VALUE_DATA, r);
    if (l === 0 || c !== 1) throw new Error('Only 2D textures are supported');
    if (d !== 1)
      throw new Error('CubeTextures are not supported by KTXLoader yet!');
    if (u !== 1) throw new Error('WebGL does not support array textures');
    const g = 4,
      _ = 4,
      v = (h + 3) & -4,
      T = (l + 3) & -4,
      y = new Array(u);
    let x = h * l;
    n === 0 && (x = v * T);
    let A;
    if (
      (n !== 0 ? (dn[n] ? (A = dn[n] * La[o]) : (A = Ua[n])) : (A = xi[a]),
      A === void 0)
    )
      throw new Error(
        'Unable to resolve the pixel format stored in the *.ktx file!'
      );
    const M = i ? rp(s, p, r) : null;
    let E = x * A,
      L = h,
      H = l,
      I = v,
      N = T,
      w = un + p;
    for (let b = 0; b < f; b++) {
      const z = s.getUint32(w, r);
      let Y = w + 4;
      for (let F = 0; F < u; F++) {
        let K = y[F];
        K || (K = y[F] = new Array(f)),
          (K[b] = {
            levelID: b,
            levelWidth: f > 1 || n !== 0 ? L : I,
            levelHeight: f > 1 || n !== 0 ? H : N,
            levelBuffer: new Uint8Array(t, Y, E),
          }),
          (Y += E);
      }
      (w += z + 4),
        (w = w % 4 !== 0 ? w + 4 - (w % 4) : w),
        (L = L >> 1 || 1),
        (H = H >> 1 || 1),
        (I = (L + g - 1) & ~(g - 1)),
        (N = (H + _ - 1) & ~(_ - 1)),
        (E = I * N * A);
    }
    return n !== 0
      ? {
          uncompressed: y.map((b) => {
            let z = b[0].levelBuffer,
              Y = !1;
            return (
              n === k.FLOAT
                ? (z = new Float32Array(
                    b[0].levelBuffer.buffer,
                    b[0].levelBuffer.byteOffset,
                    b[0].levelBuffer.byteLength / 4
                  ))
                : n === k.UNSIGNED_INT
                ? ((Y = !0),
                  (z = new Uint32Array(
                    b[0].levelBuffer.buffer,
                    b[0].levelBuffer.byteOffset,
                    b[0].levelBuffer.byteLength / 4
                  )))
                : n === k.INT &&
                  ((Y = !0),
                  (z = new Int32Array(
                    b[0].levelBuffer.buffer,
                    b[0].levelBuffer.byteOffset,
                    b[0].levelBuffer.byteLength / 4
                  ))),
              {
                resource: new He(z, {
                  width: b[0].levelWidth,
                  height: b[0].levelHeight,
                }),
                type: n,
                format: Y ? sp(o) : o,
              }
            );
          }),
          kvData: M,
        }
      : {
          compressed: y.map(
            (b) =>
              new me(null, {
                format: a,
                width: h,
                height: l,
                levels: f,
                levelBuffers: b,
              })
          ),
          kvData: M,
        };
  }
  function ip(e, t) {
    for (let i = 0; i < Oa.length; i++)
      if (t.getUint8(i) !== Oa[i])
        return console.error(`${e} is not a valid *.ktx file!`), !1;
    return !0;
  }
  function sp(e) {
    switch (e) {
      case C.RGBA:
        return C.RGBA_INTEGER;
      case C.RGB:
        return C.RGB_INTEGER;
      case C.RG:
        return C.RG_INTEGER;
      case C.RED:
        return C.RED_INTEGER;
      default:
        return e;
    }
  }
  function rp(e, t, i) {
    const s = new Map();
    let r = 0;
    for (; r < t; ) {
      const n = e.getUint32(un + r, i),
        o = un + r + 4,
        a = 3 - ((n + 3) % 4);
      if (n === 0 || n > t - r) {
        console.error('KTXLoader: keyAndValueByteSize out of bounds');
        break;
      }
      let h = 0;
      for (; h < n && e.getUint8(o + h) !== 0; h++);
      if (h === -1) {
        console.error(
          'KTXLoader: Failed to find null byte terminating kvData key'
        );
        break;
      }
      const l = new TextDecoder().decode(new Uint8Array(e.buffer, o, h)),
        c = new DataView(e.buffer, o + h + 1, n - h - 1);
      s.set(l, c), (r += 4 + n + a);
    }
    return s;
  }
  const Ga = {
    extension: { type: P.LoadParser, priority: $t.High },
    test(e) {
      return _i(e, '.dds');
    },
    async load(e, t, i) {
      const r = await (await B.ADAPTER.fetch(e)).arrayBuffer(),
        o = Na(r).map((a) => {
          const h = new V(
            a,
            re(
              {
                mipmap: Ht.OFF,
                alphaMode: Bt.NO_PREMULTIPLIED_ALPHA,
                resolution: oe(e),
              },
              t.data
            )
          );
          return yi(h, i, e);
        });
      return o.length === 1 ? o[0] : o;
    },
    unload(e) {
      Array.isArray(e) ? e.forEach((t) => t.destroy(!0)) : e.destroy(!0);
    },
  };
  U.add(Ga);
  const Ha = {
    extension: { type: P.LoadParser, priority: $t.High },
    test(e) {
      return _i(e, '.ktx');
    },
    async load(e, t, i) {
      const r = await (await B.ADAPTER.fetch(e)).arrayBuffer(),
        { compressed: n, uncompressed: o, kvData: a } = ka(e, r),
        h = n != null ? n : o,
        l = re(
          {
            mipmap: Ht.OFF,
            alphaMode: Bt.NO_PREMULTIPLIED_ALPHA,
            resolution: oe(e),
          },
          t.data
        ),
        c = h.map((u) => {
          h === o && Object.assign(l, { type: u.type, format: u.format });
          const d = new V(u, l);
          return (d.ktxKeyValueData = a), yi(d, i, e);
        });
      return c.length === 1 ? c[0] : c;
    },
    unload(e) {
      Array.isArray(e) ? e.forEach((t) => t.destroy(!0)) : e.destroy(!0);
    },
  };
  U.add(Ha);
  const Xa = {
    extension: P.ResolveParser,
    test: (e) => {
      const i = e.split('?')[0].split('.').pop();
      return ['basis', 'ktx', 'dds'].includes(i);
    },
    parse: (e) => {
      var s, r, n, o;
      if (e.split('?')[0].split('.').pop() === 'ktx') {
        const a = [
          '.s3tc.ktx',
          '.s3tc_sRGB.ktx',
          '.etc.ktx',
          '.etc1.ktx',
          '.pvrt.ktx',
          '.atc.ktx',
          '.astc.ktx',
        ];
        if (a.some((h) => e.endsWith(h)))
          return {
            resolution: parseFloat(
              (r = (s = B.RETINA_PREFIX.exec(e)) == null ? void 0 : s[1]) !=
                null
                ? r
                : '1'
            ),
            format: a.find((h) => e.endsWith(h)),
            src: e,
          };
      }
      return {
        resolution: parseFloat(
          (o = (n = B.RETINA_PREFIX.exec(e)) == null ? void 0 : n[1]) != null
            ? o
            : '1'
        ),
        format: e.split('.').pop(),
        src: e,
      };
    },
  };
  U.add(Xa);
  const np = new W(),
    op = 4,
    fn = class {
      constructor(e) {
        this.renderer = e;
      }
      async image(e, t, i) {
        const s = new Image();
        return (s.src = await this.base64(e, t, i)), s;
      }
      async base64(e, t, i) {
        const s = this.canvas(e);
        if (s.toDataURL !== void 0) return s.toDataURL(t, i);
        if (s.convertToBlob !== void 0) {
          const r = await s.convertToBlob({ type: t, quality: i });
          return await new Promise((n) => {
            const o = new FileReader();
            (o.onload = () => n(o.result)), o.readAsDataURL(r);
          });
        }
        throw new Error(
          'Extract.base64() requires ICanvas.toDataURL or ICanvas.convertToBlob to be implemented'
        );
      }
      canvas(e, t) {
        const {
          pixels: i,
          width: s,
          height: r,
          flipY: n,
        } = this._rawPixels(e, t);
        let o = new sr(s, r, 1);
        const a = o.context.getImageData(0, 0, s, r);
        if (
          (fn.arrayPostDivide(i, a.data), o.context.putImageData(a, 0, 0), n)
        ) {
          const h = new sr(o.width, o.height, 1);
          h.context.scale(1, -1),
            h.context.drawImage(o.canvas, 0, -r),
            o.destroy(),
            (o = h);
        }
        return o.canvas;
      }
      pixels(e, t) {
        const { pixels: i } = this._rawPixels(e, t);
        return fn.arrayPostDivide(i, i), i;
      }
      _rawPixels(e, t) {
        const i = this.renderer;
        let s,
          r = !1,
          n,
          o = !1;
        if (e)
          if (e instanceof ce) n = e;
          else {
            const u = i.context.webGLVersion >= 2 ? i.multisample : rt.NONE;
            if (
              ((n = this.renderer.generateTexture(e, { multisample: u })),
              u !== rt.NONE)
            ) {
              const d = ce.create({ width: n.width, height: n.height });
              i.framebuffer.bind(n.framebuffer),
                i.framebuffer.blit(d.framebuffer),
                i.framebuffer.bind(null),
                n.destroy(!0),
                (n = d);
            }
            o = !0;
          }
        n
          ? ((s = n.baseTexture.resolution),
            (t = t != null ? t : n.frame),
            (r = !1),
            i.renderTexture.bind(n))
          : ((s = i.resolution),
            t || ((t = np), (t.width = i.width), (t.height = i.height)),
            (r = !0),
            i.renderTexture.bind(null));
        const a = Math.round(t.width * s),
          h = Math.round(t.height * s),
          l = new Uint8Array(op * a * h),
          c = i.gl;
        return (
          c.readPixels(
            Math.round(t.x * s),
            Math.round(t.y * s),
            a,
            h,
            c.RGBA,
            c.UNSIGNED_BYTE,
            l
          ),
          o && n.destroy(!0),
          { pixels: l, width: a, height: h, flipY: r }
        );
      }
      destroy() {
        this.renderer = null;
      }
      static arrayPostDivide(e, t) {
        for (let i = 0; i < e.length; i += 4) {
          const s = (t[i + 3] = e[i + 3]);
          s !== 0
            ? ((t[i] = Math.round(Math.min((e[i] * 255) / s, 255))),
              (t[i + 1] = Math.round(Math.min((e[i + 1] * 255) / s, 255))),
              (t[i + 2] = Math.round(Math.min((e[i + 2] * 255) / s, 255))))
            : ((t[i] = e[i]), (t[i + 1] = e[i + 1]), (t[i + 2] = e[i + 2]));
        }
      }
    };
  let pn = fn;
  (pn.extension = { name: 'extract', type: P.RendererSystem }), U.add(pn);
  const Ti = {
    build(e) {
      const t = e.points;
      let i, s, r, n, o, a;
      if (e.type === mt.CIRC) {
        const p = e.shape;
        (i = p.x), (s = p.y), (o = a = p.radius), (r = n = 0);
      } else if (e.type === mt.ELIP) {
        const p = e.shape;
        (i = p.x), (s = p.y), (o = p.width), (a = p.height), (r = n = 0);
      } else {
        const p = e.shape,
          g = p.width / 2,
          _ = p.height / 2;
        (i = p.x + g),
          (s = p.y + _),
          (o = a = Math.max(0, Math.min(p.radius, Math.min(g, _)))),
          (r = g - o),
          (n = _ - a);
      }
      if (!(o >= 0 && a >= 0 && r >= 0 && n >= 0)) {
        t.length = 0;
        return;
      }
      const h = Math.ceil(2.3 * Math.sqrt(o + a)),
        l = h * 8 + (r ? 4 : 0) + (n ? 4 : 0);
      if (((t.length = l), l === 0)) return;
      if (h === 0) {
        (t.length = 8),
          (t[0] = t[6] = i + r),
          (t[1] = t[3] = s + n),
          (t[2] = t[4] = i - r),
          (t[5] = t[7] = s - n);
        return;
      }
      let c = 0,
        u = h * 4 + (r ? 2 : 0) + 2,
        d = u,
        f = l;
      {
        const p = r + o,
          g = n,
          _ = i + p,
          v = i - p,
          T = s + g;
        if (((t[c++] = _), (t[c++] = T), (t[--u] = T), (t[--u] = v), n)) {
          const y = s - g;
          (t[d++] = v), (t[d++] = y), (t[--f] = y), (t[--f] = _);
        }
      }
      for (let p = 1; p < h; p++) {
        const g = (Math.PI / 2) * (p / h),
          _ = r + Math.cos(g) * o,
          v = n + Math.sin(g) * a,
          T = i + _,
          y = i - _,
          x = s + v,
          A = s - v;
        (t[c++] = T),
          (t[c++] = x),
          (t[--u] = x),
          (t[--u] = y),
          (t[d++] = y),
          (t[d++] = A),
          (t[--f] = A),
          (t[--f] = T);
      }
      {
        const p = r,
          g = n + a,
          _ = i + p,
          v = i - p,
          T = s + g,
          y = s - g;
        (t[c++] = _),
          (t[c++] = T),
          (t[--f] = y),
          (t[--f] = _),
          r && ((t[c++] = v), (t[c++] = T), (t[--f] = y), (t[--f] = v));
      }
    },
    triangulate(e, t) {
      const i = e.points,
        s = t.points,
        r = t.indices;
      if (i.length === 0) return;
      let n = s.length / 2;
      const o = n;
      let a, h;
      if (e.type !== mt.RREC) {
        const c = e.shape;
        (a = c.x), (h = c.y);
      } else {
        const c = e.shape;
        (a = c.x + c.width / 2), (h = c.y + c.height / 2);
      }
      const l = e.matrix;
      s.push(
        e.matrix ? l.a * a + l.c * h + l.tx : a,
        e.matrix ? l.b * a + l.d * h + l.ty : h
      ),
        n++,
        s.push(i[0], i[1]);
      for (let c = 2; c < i.length; c += 2)
        s.push(i[c], i[c + 1]), r.push(n++, o, n);
      r.push(o + 1, o, n);
    },
  };
  function Va(e, t = !1) {
    const i = e.length;
    if (i < 6) return;
    let s = 0;
    for (let r = 0, n = e[i - 2], o = e[i - 1]; r < i; r += 2) {
      const a = e[r],
        h = e[r + 1];
      (s += (a - n) * (h + o)), (n = a), (o = h);
    }
    if ((!t && s > 0) || (t && s <= 0)) {
      const r = i / 2;
      for (let n = r + (r % 2); n < i; n += 2) {
        const o = i - n - 2,
          a = i - n - 1,
          h = n,
          l = n + 1;
        ([e[o], e[h]] = [e[h], e[o]]), ([e[a], e[l]] = [e[l], e[a]]);
      }
    }
  }
  const mn = {
      build(e) {
        e.points = e.shape.points.slice();
      },
      triangulate(e, t) {
        let i = e.points;
        const s = e.holes,
          r = t.points,
          n = t.indices;
        if (i.length >= 6) {
          Va(i, !1);
          const o = [];
          for (let l = 0; l < s.length; l++) {
            const c = s[l];
            Va(c.points, !0), o.push(i.length / 2), (i = i.concat(c.points));
          }
          const a = Xs(i, o, 2);
          if (!a) return;
          const h = r.length / 2;
          for (let l = 0; l < a.length; l += 3)
            n.push(a[l] + h), n.push(a[l + 1] + h), n.push(a[l + 2] + h);
          for (let l = 0; l < i.length; l++) r.push(i[l]);
        }
      },
    },
    za = {
      build(e) {
        const t = e.shape,
          i = t.x,
          s = t.y,
          r = t.width,
          n = t.height,
          o = e.points;
        (o.length = 0),
          r >= 0 && n >= 0 && o.push(i, s, i + r, s, i + r, s + n, i, s + n);
      },
      triangulate(e, t) {
        const i = e.points,
          s = t.points;
        if (i.length === 0) return;
        const r = s.length / 2;
        s.push(i[0], i[1], i[2], i[3], i[6], i[7], i[4], i[5]),
          t.indices.push(r, r + 1, r + 2, r + 1, r + 2, r + 3);
      },
    },
    Wa = {
      build(e) {
        Ti.build(e);
      },
      triangulate(e, t) {
        Ti.triangulate(e, t);
      },
    };
  var kt = ((e) => (
      (e.MITER = 'miter'), (e.BEVEL = 'bevel'), (e.ROUND = 'round'), e
    ))(kt || {}),
    _e = ((e) => (
      (e.BUTT = 'butt'), (e.ROUND = 'round'), (e.SQUARE = 'square'), e
    ))(_e || {});
  const ge = {
      adaptive: !0,
      maxLength: 10,
      minSegments: 8,
      maxSegments: 2048,
      epsilon: 1e-4,
      _segmentsCount(e, t = 20) {
        if (!this.adaptive || !e || isNaN(e)) return t;
        let i = Math.ceil(e / this.maxLength);
        return (
          i < this.minSegments
            ? (i = this.minSegments)
            : i > this.maxSegments && (i = this.maxSegments),
          i
        );
      },
    },
    ap = ge;
  class _n {
    static curveTo(t, i, s, r, n, o) {
      const a = o[o.length - 2],
        l = o[o.length - 1] - i,
        c = a - t,
        u = r - i,
        d = s - t,
        f = Math.abs(l * d - c * u);
      if (f < 1e-8 || n === 0)
        return (
          (o[o.length - 2] !== t || o[o.length - 1] !== i) && o.push(t, i), null
        );
      const p = l * l + c * c,
        g = u * u + d * d,
        _ = l * u + c * d,
        v = (n * Math.sqrt(p)) / f,
        T = (n * Math.sqrt(g)) / f,
        y = (v * _) / p,
        x = (T * _) / g,
        A = v * d + T * c,
        M = v * u + T * l,
        R = c * (T + y),
        E = l * (T + y),
        L = d * (v + x),
        H = u * (v + x),
        I = Math.atan2(E - M, R - A),
        N = Math.atan2(H - M, L - A);
      return {
        cx: A + t,
        cy: M + i,
        radius: n,
        startAngle: I,
        endAngle: N,
        anticlockwise: c * u > d * l,
      };
    }
    static arc(t, i, s, r, n, o, a, h, l) {
      const c = a - o,
        u = ge._segmentsCount(
          Math.abs(c) * n,
          Math.ceil(Math.abs(c) / oi) * 40
        ),
        d = c / (u * 2),
        f = d * 2,
        p = Math.cos(d),
        g = Math.sin(d),
        _ = u - 1,
        v = (_ % 1) / _;
      for (let T = 0; T <= _; ++T) {
        const y = T + v * T,
          x = d + o + f * y,
          A = Math.cos(x),
          M = -Math.sin(x);
        l.push((p * A + g * M) * n + s, (p * -M + g * A) * n + r);
      }
    }
  }
  class ja {
    constructor() {
      this.reset();
    }
    begin(t, i, s) {
      this.reset(), (this.style = t), (this.start = i), (this.attribStart = s);
    }
    end(t, i) {
      (this.attribSize = i - this.attribStart), (this.size = t - this.start);
    }
    reset() {
      (this.style = null),
        (this.size = 0),
        (this.start = 0),
        (this.attribStart = 0),
        (this.attribSize = 0);
    }
  }
  class bs {
    static curveLength(t, i, s, r, n, o, a, h) {
      let c = 0,
        u = 0,
        d = 0,
        f = 0,
        p = 0,
        g = 0,
        _ = 0,
        v = 0,
        T = 0,
        y = 0,
        x = 0,
        A = t,
        M = i;
      for (let R = 1; R <= 10; ++R)
        (u = R / 10),
          (d = u * u),
          (f = d * u),
          (p = 1 - u),
          (g = p * p),
          (_ = g * p),
          (v = _ * t + 3 * g * u * s + 3 * p * d * n + f * a),
          (T = _ * i + 3 * g * u * r + 3 * p * d * o + f * h),
          (y = A - v),
          (x = M - T),
          (A = v),
          (M = T),
          (c += Math.sqrt(y * y + x * x));
      return c;
    }
    static curveTo(t, i, s, r, n, o, a) {
      const h = a[a.length - 2],
        l = a[a.length - 1];
      a.length -= 2;
      const c = ge._segmentsCount(bs.curveLength(h, l, t, i, s, r, n, o));
      let u = 0,
        d = 0,
        f = 0,
        p = 0,
        g = 0;
      a.push(h, l);
      for (let _ = 1, v = 0; _ <= c; ++_)
        (v = _ / c),
          (u = 1 - v),
          (d = u * u),
          (f = d * u),
          (p = v * v),
          (g = p * v),
          a.push(
            f * h + 3 * d * v * t + 3 * u * p * s + g * n,
            f * l + 3 * d * v * i + 3 * u * p * r + g * o
          );
    }
  }
  function Ya(e, t, i, s, r, n, o, a) {
    const h = e - i * r,
      l = t - s * r,
      c = e + i * n,
      u = t + s * n;
    let d, f;
    o ? ((d = s), (f = -i)) : ((d = -s), (f = i));
    const p = h + d,
      g = l + f,
      _ = c + d,
      v = u + f;
    return a.push(p, g, _, v), 2;
  }
  function Fe(e, t, i, s, r, n, o, a) {
    const h = i - e,
      l = s - t;
    let c = Math.atan2(h, l),
      u = Math.atan2(r - e, n - t);
    a && c < u ? (c += Math.PI * 2) : !a && c > u && (u += Math.PI * 2);
    let d = c;
    const f = u - c,
      p = Math.abs(f),
      g = Math.sqrt(h * h + l * l),
      _ = (((15 * p * Math.sqrt(g)) / Math.PI) >> 0) + 1,
      v = f / _;
    if (((d += v), a)) {
      o.push(e, t, i, s);
      for (let T = 1, y = d; T < _; T++, y += v)
        o.push(e, t, e + Math.sin(y) * g, t + Math.cos(y) * g);
      o.push(e, t, r, n);
    } else {
      o.push(i, s, e, t);
      for (let T = 1, y = d; T < _; T++, y += v)
        o.push(e + Math.sin(y) * g, t + Math.cos(y) * g, e, t);
      o.push(r, n, e, t);
    }
    return _ * 2;
  }
  function hp(e, t) {
    const i = e.shape;
    let s = e.points || i.points.slice();
    const r = t.closePointEps;
    if (s.length === 0) return;
    const n = e.lineStyle,
      o = new j(s[0], s[1]),
      a = new j(s[s.length - 2], s[s.length - 1]),
      h = i.type !== mt.POLY || i.closeStroke,
      l = Math.abs(o.x - a.x) < r && Math.abs(o.y - a.y) < r;
    if (h) {
      (s = s.slice()),
        l && (s.pop(), s.pop(), a.set(s[s.length - 2], s[s.length - 1]));
      const F = (o.x + a.x) * 0.5,
        K = (a.y + o.y) * 0.5;
      s.unshift(F, K), s.push(F, K);
    }
    const c = t.points,
      u = s.length / 2;
    let d = s.length;
    const f = c.length / 2,
      p = n.width / 2,
      g = p * p,
      _ = n.miterLimit * n.miterLimit;
    let v = s[0],
      T = s[1],
      y = s[2],
      x = s[3],
      A = 0,
      M = 0,
      R = -(T - x),
      E = v - y,
      L = 0,
      H = 0,
      I = Math.sqrt(R * R + E * E);
    (R /= I), (E /= I), (R *= p), (E *= p);
    const N = n.alignment,
      w = (1 - N) * 2,
      b = N * 2;
    h ||
      (n.cap === _e.ROUND
        ? (d +=
            Fe(
              v - R * (w - b) * 0.5,
              T - E * (w - b) * 0.5,
              v - R * w,
              T - E * w,
              v + R * b,
              T + E * b,
              c,
              !0
            ) + 2)
        : n.cap === _e.SQUARE && (d += Ya(v, T, R, E, w, b, !0, c))),
      c.push(v - R * w, T - E * w, v + R * b, T + E * b);
    for (let F = 1; F < u - 1; ++F) {
      (v = s[(F - 1) * 2]),
        (T = s[(F - 1) * 2 + 1]),
        (y = s[F * 2]),
        (x = s[F * 2 + 1]),
        (A = s[(F + 1) * 2]),
        (M = s[(F + 1) * 2 + 1]),
        (R = -(T - x)),
        (E = v - y),
        (I = Math.sqrt(R * R + E * E)),
        (R /= I),
        (E /= I),
        (R *= p),
        (E *= p),
        (L = -(x - M)),
        (H = y - A),
        (I = Math.sqrt(L * L + H * H)),
        (L /= I),
        (H /= I),
        (L *= p),
        (H *= p);
      const K = y - v,
        at = T - x,
        S = y - A,
        X = M - x,
        q = K * S + at * X,
        Z = at * S - X * K,
        Q = Z < 0;
      if (Math.abs(Z) < 0.001 * Math.abs(q)) {
        c.push(y - R * w, x - E * w, y + R * b, x + E * b),
          q >= 0 &&
            (n.join === kt.ROUND
              ? (d +=
                  Fe(y, x, y - R * w, x - E * w, y - L * w, x - H * w, c, !1) +
                  4)
              : (d += 2),
            c.push(y - L * b, x - H * b, y + L * w, x + H * w));
        continue;
      }
      const yt = (-R + v) * (-E + x) - (-R + y) * (-E + T),
        lt = (-L + A) * (-H + x) - (-L + y) * (-H + M),
        vt = (K * lt - S * yt) / Z,
        Tt = (X * yt - at * lt) / Z,
        Mt = (vt - y) * (vt - y) + (Tt - x) * (Tt - x),
        xt = y + (vt - y) * w,
        st = x + (Tt - x) * w,
        ct = y - (vt - y) * b,
        dt = x - (Tt - x) * b,
        ie = Math.min(K * K + at * at, S * S + X * X),
        se = Q ? w : b,
        Fi = ie + se * se * g,
        zp = Mt <= Fi;
      let Os = n.join;
      if ((Os === kt.MITER && Mt / g > _ && (Os = kt.BEVEL), zp))
        switch (Os) {
          case kt.MITER: {
            c.push(xt, st, ct, dt);
            break;
          }
          case kt.BEVEL: {
            Q
              ? c.push(
                  xt,
                  st,
                  y + R * b,
                  x + E * b,
                  xt,
                  st,
                  y + L * b,
                  x + H * b
                )
              : c.push(
                  y - R * w,
                  x - E * w,
                  ct,
                  dt,
                  y - L * w,
                  x - H * w,
                  ct,
                  dt
                ),
              (d += 2);
            break;
          }
          case kt.ROUND: {
            Q
              ? (c.push(xt, st, y + R * b, x + E * b),
                (d +=
                  Fe(y, x, y + R * b, x + E * b, y + L * b, x + H * b, c, !0) +
                  4),
                c.push(xt, st, y + L * b, x + H * b))
              : (c.push(y - R * w, x - E * w, ct, dt),
                (d +=
                  Fe(y, x, y - R * w, x - E * w, y - L * w, x - H * w, c, !1) +
                  4),
                c.push(y - L * w, x - H * w, ct, dt));
            break;
          }
        }
      else {
        switch ((c.push(y - R * w, x - E * w, y + R * b, x + E * b), Os)) {
          case kt.MITER: {
            Q ? c.push(ct, dt, ct, dt) : c.push(xt, st, xt, st), (d += 2);
            break;
          }
          case kt.ROUND: {
            Q
              ? (d +=
                  Fe(y, x, y + R * b, x + E * b, y + L * b, x + H * b, c, !0) +
                  2)
              : (d +=
                  Fe(y, x, y - R * w, x - E * w, y - L * w, x - H * w, c, !1) +
                  2);
            break;
          }
        }
        c.push(y - L * w, x - H * w, y + L * b, x + H * b), (d += 2);
      }
    }
    (v = s[(u - 2) * 2]),
      (T = s[(u - 2) * 2 + 1]),
      (y = s[(u - 1) * 2]),
      (x = s[(u - 1) * 2 + 1]),
      (R = -(T - x)),
      (E = v - y),
      (I = Math.sqrt(R * R + E * E)),
      (R /= I),
      (E /= I),
      (R *= p),
      (E *= p),
      c.push(y - R * w, x - E * w, y + R * b, x + E * b),
      h ||
        (n.cap === _e.ROUND
          ? (d +=
              Fe(
                y - R * (w - b) * 0.5,
                x - E * (w - b) * 0.5,
                y - R * w,
                x - E * w,
                y + R * b,
                x + E * b,
                c,
                !1
              ) + 2)
          : n.cap === _e.SQUARE && (d += Ya(y, x, R, E, w, b, !1, c)));
    const z = t.indices,
      Y = ge.epsilon * ge.epsilon;
    for (let F = f; F < d + f - 2; ++F)
      (v = c[F * 2]),
        (T = c[F * 2 + 1]),
        (y = c[(F + 1) * 2]),
        (x = c[(F + 1) * 2 + 1]),
        (A = c[(F + 2) * 2]),
        (M = c[(F + 2) * 2 + 1]),
        !(Math.abs(v * (x - M) + y * (M - T) + A * (T - x)) < Y) &&
          z.push(F, F + 1, F + 2);
  }
  function lp(e, t) {
    let i = 0;
    const s = e.shape,
      r = e.points || s.points,
      n = s.type !== mt.POLY || s.closeStroke;
    if (r.length === 0) return;
    const o = t.points,
      a = t.indices,
      h = r.length / 2,
      l = o.length / 2;
    let c = l;
    for (o.push(r[0], r[1]), i = 1; i < h; i++)
      o.push(r[i * 2], r[i * 2 + 1]), a.push(c, c + 1), c++;
    n && a.push(c, l);
  }
  function gn(e, t) {
    e.lineStyle.native ? lp(e, t) : hp(e, t);
  }
  class Es {
    static curveLength(t, i, s, r, n, o) {
      const a = t - 2 * s + n,
        h = i - 2 * r + o,
        l = 2 * s - 2 * t,
        c = 2 * r - 2 * i,
        u = 4 * (a * a + h * h),
        d = 4 * (a * l + h * c),
        f = l * l + c * c,
        p = 2 * Math.sqrt(u + d + f),
        g = Math.sqrt(u),
        _ = 2 * u * g,
        v = 2 * Math.sqrt(f),
        T = d / g;
      return (
        (_ * p +
          g * d * (p - v) +
          (4 * f * u - d * d) * Math.log((2 * g + T + p) / (T + v))) /
        (4 * _)
      );
    }
    static curveTo(t, i, s, r, n) {
      const o = n[n.length - 2],
        a = n[n.length - 1],
        h = ge._segmentsCount(Es.curveLength(o, a, t, i, s, r));
      let l = 0,
        c = 0;
      for (let u = 1; u <= h; ++u) {
        const d = u / h;
        (l = o + (t - o) * d),
          (c = a + (i - a) * d),
          n.push(l + (t + (s - t) * d - l) * d, c + (i + (r - i) * d - c) * d);
      }
    }
  }
  const ws = {
      [mt.POLY]: mn,
      [mt.CIRC]: Ti,
      [mt.ELIP]: Ti,
      [mt.RECT]: za,
      [mt.RREC]: Wa,
    },
    yn = [],
    bi = [];
  class Ei {
    constructor(t, i = null, s = null, r = null) {
      (this.points = []),
        (this.holes = []),
        (this.shape = t),
        (this.lineStyle = s),
        (this.fillStyle = i),
        (this.matrix = r),
        (this.type = t.type);
    }
    clone() {
      return new Ei(this.shape, this.fillStyle, this.lineStyle, this.matrix);
    }
    destroy() {
      (this.shape = null),
        (this.holes.length = 0),
        (this.holes = null),
        (this.points.length = 0),
        (this.points = null),
        (this.lineStyle = null),
        (this.fillStyle = null);
    }
  }
  const Ke = new j(),
    $a = class extends dr {
      constructor() {
        super(),
          (this.closePointEps = 1e-4),
          (this.boundsPadding = 0),
          (this.uvsFloat32 = null),
          (this.indicesUint16 = null),
          (this.batchable = !1),
          (this.points = []),
          (this.colors = []),
          (this.uvs = []),
          (this.indices = []),
          (this.textureIds = []),
          (this.graphicsData = []),
          (this.drawCalls = []),
          (this.batchDirty = -1),
          (this.batches = []),
          (this.dirty = 0),
          (this.cacheDirty = -1),
          (this.clearDirty = 0),
          (this.shapeIndex = 0),
          (this._bounds = new fi()),
          (this.boundsDirty = -1);
      }
      get bounds() {
        return (
          this.updateBatches(),
          this.boundsDirty !== this.dirty &&
            ((this.boundsDirty = this.dirty), this.calculateBounds()),
          this._bounds
        );
      }
      invalidate() {
        (this.boundsDirty = -1),
          this.dirty++,
          this.batchDirty++,
          (this.shapeIndex = 0),
          (this.points.length = 0),
          (this.colors.length = 0),
          (this.uvs.length = 0),
          (this.indices.length = 0),
          (this.textureIds.length = 0);
        for (let e = 0; e < this.drawCalls.length; e++)
          this.drawCalls[e].texArray.clear(), bi.push(this.drawCalls[e]);
        this.drawCalls.length = 0;
        for (let e = 0; e < this.batches.length; e++) {
          const t = this.batches[e];
          t.reset(), yn.push(t);
        }
        this.batches.length = 0;
      }
      clear() {
        return (
          this.graphicsData.length > 0 &&
            (this.invalidate(),
            this.clearDirty++,
            (this.graphicsData.length = 0)),
          this
        );
      }
      drawShape(e, t = null, i = null, s = null) {
        const r = new Ei(e, t, i, s);
        return this.graphicsData.push(r), this.dirty++, this;
      }
      drawHole(e, t = null) {
        if (!this.graphicsData.length) return null;
        const i = new Ei(e, null, null, t),
          s = this.graphicsData[this.graphicsData.length - 1];
        return (i.lineStyle = s.lineStyle), s.holes.push(i), this.dirty++, this;
      }
      destroy() {
        super.destroy();
        for (let e = 0; e < this.graphicsData.length; ++e)
          this.graphicsData[e].destroy();
        (this.points.length = 0),
          (this.points = null),
          (this.colors.length = 0),
          (this.colors = null),
          (this.uvs.length = 0),
          (this.uvs = null),
          (this.indices.length = 0),
          (this.indices = null),
          this.indexBuffer.destroy(),
          (this.indexBuffer = null),
          (this.graphicsData.length = 0),
          (this.graphicsData = null),
          (this.drawCalls.length = 0),
          (this.drawCalls = null),
          (this.batches.length = 0),
          (this.batches = null),
          (this._bounds = null);
      }
      containsPoint(e) {
        const t = this.graphicsData;
        for (let i = 0; i < t.length; ++i) {
          const s = t[i];
          if (
            !!s.fillStyle.visible &&
            s.shape &&
            (s.matrix ? s.matrix.applyInverse(e, Ke) : Ke.copyFrom(e),
            s.shape.contains(Ke.x, Ke.y))
          ) {
            let r = !1;
            if (s.holes) {
              for (let n = 0; n < s.holes.length; n++)
                if (s.holes[n].shape.contains(Ke.x, Ke.y)) {
                  r = !0;
                  break;
                }
            }
            if (!r) return !0;
          }
        }
        return !1;
      }
      updateBatches() {
        if (!this.graphicsData.length) {
          this.batchable = !0;
          return;
        }
        if (!this.validateBatching()) return;
        this.cacheDirty = this.dirty;
        const e = this.uvs,
          t = this.graphicsData;
        let i = null,
          s = null;
        this.batches.length > 0 &&
          ((i = this.batches[this.batches.length - 1]), (s = i.style));
        for (let a = this.shapeIndex; a < t.length; a++) {
          this.shapeIndex++;
          const h = t[a],
            l = h.fillStyle,
            c = h.lineStyle;
          ws[h.type].build(h),
            h.matrix && this.transformPoints(h.points, h.matrix),
            (l.visible || c.visible) && this.processHoles(h.holes);
          for (let d = 0; d < 2; d++) {
            const f = d === 0 ? l : c;
            if (!f.visible) continue;
            const p = f.texture.baseTexture,
              g = this.indices.length,
              _ = this.points.length / 2;
            (p.wrapMode = Qt.REPEAT),
              d === 0 ? this.processFill(h) : this.processLine(h);
            const v = this.points.length / 2 - _;
            v !== 0 &&
              (i && !this._compareStyles(s, f) && (i.end(g, _), (i = null)),
              i ||
                ((i = yn.pop() || new ja()),
                i.begin(f, g, _),
                this.batches.push(i),
                (s = f)),
              this.addUvs(this.points, e, f.texture, _, v, f.matrix));
          }
        }
        const r = this.indices.length,
          n = this.points.length / 2;
        if ((i && i.end(r, n), this.batches.length === 0)) {
          this.batchable = !0;
          return;
        }
        const o = n > 65535;
        this.indicesUint16 &&
        this.indices.length === this.indicesUint16.length &&
        o === this.indicesUint16.BYTES_PER_ELEMENT > 2
          ? this.indicesUint16.set(this.indices)
          : (this.indicesUint16 = o
              ? new Uint32Array(this.indices)
              : new Uint16Array(this.indices)),
          (this.batchable = this.isBatchable()),
          this.batchable ? this.packBatches() : this.buildDrawCalls();
      }
      _compareStyles(e, t) {
        return !(
          !e ||
          !t ||
          e.texture.baseTexture !== t.texture.baseTexture ||
          e.color + e.alpha !== t.color + t.alpha ||
          !!e.native != !!t.native
        );
      }
      validateBatching() {
        if (this.dirty === this.cacheDirty || !this.graphicsData.length)
          return !1;
        for (let e = 0, t = this.graphicsData.length; e < t; e++) {
          const i = this.graphicsData[e],
            s = i.fillStyle,
            r = i.lineStyle;
          if (
            (s && !s.texture.baseTexture.valid) ||
            (r && !r.texture.baseTexture.valid)
          )
            return !1;
        }
        return !0;
      }
      packBatches() {
        this.batchDirty++, (this.uvsFloat32 = new Float32Array(this.uvs));
        const e = this.batches;
        for (let t = 0, i = e.length; t < i; t++) {
          const s = e[t];
          for (let r = 0; r < s.size; r++) {
            const n = s.start + r;
            this.indicesUint16[n] = this.indicesUint16[n] - s.attribStart;
          }
        }
      }
      isBatchable() {
        if (this.points.length > 65535 * 2) return !1;
        const e = this.batches;
        for (let t = 0; t < e.length; t++) if (e[t].style.native) return !1;
        return this.points.length < $a.BATCHABLE_SIZE * 2;
      }
      buildDrawCalls() {
        let e = ++V._globalBatch;
        for (let c = 0; c < this.drawCalls.length; c++)
          this.drawCalls[c].texArray.clear(), bi.push(this.drawCalls[c]);
        this.drawCalls.length = 0;
        const t = this.colors,
          i = this.textureIds;
        let s = bi.pop();
        s || ((s = new qi()), (s.texArray = new rs())),
          (s.texArray.count = 0),
          (s.start = 0),
          (s.size = 0),
          (s.type = Gt.TRIANGLES);
        let r = 0,
          n = null,
          o = 0,
          a = !1,
          h = Gt.TRIANGLES,
          l = 0;
        this.drawCalls.push(s);
        for (let c = 0; c < this.batches.length; c++) {
          const u = this.batches[c],
            d = 8,
            f = u.style,
            p = f.texture.baseTexture;
          a !== !!f.native &&
            ((a = !!f.native),
            (h = a ? Gt.LINES : Gt.TRIANGLES),
            (n = null),
            (r = d),
            e++),
            n !== p &&
              ((n = p),
              p._batchEnabled !== e &&
                (r === d &&
                  (e++,
                  (r = 0),
                  s.size > 0 &&
                    ((s = bi.pop()),
                    s || ((s = new qi()), (s.texArray = new rs())),
                    this.drawCalls.push(s)),
                  (s.start = l),
                  (s.size = 0),
                  (s.texArray.count = 0),
                  (s.type = h)),
                (p.touched = 1),
                (p._batchEnabled = e),
                (p._batchLocation = r),
                (p.wrapMode = Qt.REPEAT),
                (s.texArray.elements[s.texArray.count++] = p),
                r++)),
            (s.size += u.size),
            (l += u.size),
            (o = p._batchLocation),
            this.addColors(t, f.color, f.alpha, u.attribSize, u.attribStart),
            this.addTextureIds(i, o, u.attribSize, u.attribStart);
        }
        (V._globalBatch = e), this.packAttributes();
      }
      packAttributes() {
        const e = this.points,
          t = this.uvs,
          i = this.colors,
          s = this.textureIds,
          r = new ArrayBuffer(e.length * 3 * 4),
          n = new Float32Array(r),
          o = new Uint32Array(r);
        let a = 0;
        for (let h = 0; h < e.length / 2; h++)
          (n[a++] = e[h * 2]),
            (n[a++] = e[h * 2 + 1]),
            (n[a++] = t[h * 2]),
            (n[a++] = t[h * 2 + 1]),
            (o[a++] = i[h]),
            (n[a++] = s[h]);
        this._buffer.update(r), this._indexBuffer.update(this.indicesUint16);
      }
      processFill(e) {
        e.holes.length
          ? mn.triangulate(e, this)
          : ws[e.type].triangulate(e, this);
      }
      processLine(e) {
        gn(e, this);
        for (let t = 0; t < e.holes.length; t++) gn(e.holes[t], this);
      }
      processHoles(e) {
        for (let t = 0; t < e.length; t++) {
          const i = e[t];
          ws[i.type].build(i),
            i.matrix && this.transformPoints(i.points, i.matrix);
        }
      }
      calculateBounds() {
        const e = this._bounds;
        e.clear(),
          e.addVertexData(this.points, 0, this.points.length),
          e.pad(this.boundsPadding, this.boundsPadding);
      }
      transformPoints(e, t) {
        for (let i = 0; i < e.length / 2; i++) {
          const s = e[i * 2],
            r = e[i * 2 + 1];
          (e[i * 2] = t.a * s + t.c * r + t.tx),
            (e[i * 2 + 1] = t.b * s + t.d * r + t.ty);
        }
      }
      addColors(e, t, i, s, r = 0) {
        const n = (t >> 16) + (t & 65280) + ((t & 255) << 16),
          o = Vi(n, i);
        e.length = Math.max(e.length, r + s);
        for (let a = 0; a < s; a++) e[r + a] = o;
      }
      addTextureIds(e, t, i, s = 0) {
        e.length = Math.max(e.length, s + i);
        for (let r = 0; r < i; r++) e[s + r] = t;
      }
      addUvs(e, t, i, s, r, n = null) {
        let o = 0;
        const a = t.length,
          h = i.frame;
        for (; o < r; ) {
          let c = e[(s + o) * 2],
            u = e[(s + o) * 2 + 1];
          if (n) {
            const d = n.a * c + n.c * u + n.tx;
            (u = n.b * c + n.d * u + n.ty), (c = d);
          }
          o++, t.push(c / h.width, u / h.height);
        }
        const l = i.baseTexture;
        (h.width < l.width || h.height < l.height) &&
          this.adjustUvs(t, i, a, r);
      }
      adjustUvs(e, t, i, s) {
        const r = t.baseTexture,
          n = 1e-6,
          o = i + s * 2,
          a = t.frame,
          h = a.width / r.width,
          l = a.height / r.height;
        let c = a.x / a.width,
          u = a.y / a.height,
          d = Math.floor(e[i] + n),
          f = Math.floor(e[i + 1] + n);
        for (let p = i + 2; p < o; p += 2)
          (d = Math.min(d, Math.floor(e[p] + n))),
            (f = Math.min(f, Math.floor(e[p + 1] + n)));
        (c -= d), (u -= f);
        for (let p = i; p < o; p += 2)
          (e[p] = (e[p] + c) * h), (e[p + 1] = (e[p + 1] + u) * l);
      }
    };
  let vn = $a;
  vn.BATCHABLE_SIZE = 100;
  class wi {
    constructor() {
      (this.color = 16777215),
        (this.alpha = 1),
        (this.texture = D.WHITE),
        (this.matrix = null),
        (this.visible = !1),
        this.reset();
    }
    clone() {
      const t = new wi();
      return (
        (t.color = this.color),
        (t.alpha = this.alpha),
        (t.texture = this.texture),
        (t.matrix = this.matrix),
        (t.visible = this.visible),
        t
      );
    }
    reset() {
      (this.color = 16777215),
        (this.alpha = 1),
        (this.texture = D.WHITE),
        (this.matrix = null),
        (this.visible = !1);
    }
    destroy() {
      (this.texture = null), (this.matrix = null);
    }
  }
  class Ss extends wi {
    constructor() {
      super(...arguments),
        (this.width = 0),
        (this.alignment = 0.5),
        (this.native = !1),
        (this.cap = _e.BUTT),
        (this.join = kt.MITER),
        (this.miterLimit = 10);
    }
    clone() {
      const t = new Ss();
      return (
        (t.color = this.color),
        (t.alpha = this.alpha),
        (t.texture = this.texture),
        (t.matrix = this.matrix),
        (t.visible = this.visible),
        (t.width = this.width),
        (t.alignment = this.alignment),
        (t.native = this.native),
        (t.cap = this.cap),
        (t.join = this.join),
        (t.miterLimit = this.miterLimit),
        t
      );
    }
    reset() {
      super.reset(),
        (this.color = 0),
        (this.alignment = 0.5),
        (this.width = 0),
        (this.native = !1);
    }
  }
  const cp = new Float32Array(3),
    xn = {},
    As = class extends St {
      constructor(e = null) {
        super(),
          (this.shader = null),
          (this.pluginName = 'batch'),
          (this.currentPath = null),
          (this.batches = []),
          (this.batchTint = -1),
          (this.batchDirty = -1),
          (this.vertexData = null),
          (this._fillStyle = new wi()),
          (this._lineStyle = new Ss()),
          (this._matrix = null),
          (this._holeMode = !1),
          (this.state = te.for2d()),
          (this._geometry = e || new vn()),
          this._geometry.refCount++,
          (this._transformID = -1),
          (this.tint = 16777215),
          (this.blendMode = G.NORMAL);
      }
      get geometry() {
        return this._geometry;
      }
      clone() {
        return this.finishPoly(), new As(this._geometry);
      }
      set blendMode(e) {
        this.state.blendMode = e;
      }
      get blendMode() {
        return this.state.blendMode;
      }
      get tint() {
        return this._tint;
      }
      set tint(e) {
        this._tint = e;
      }
      get fill() {
        return this._fillStyle;
      }
      get line() {
        return this._lineStyle;
      }
      lineStyle(e = null, t = 0, i = 1, s = 0.5, r = !1) {
        return (
          typeof e == 'number' &&
            (e = { width: e, color: t, alpha: i, alignment: s, native: r }),
          this.lineTextureStyle(e)
        );
      }
      lineTextureStyle(e) {
        (e = Object.assign(
          {
            width: 0,
            texture: D.WHITE,
            color: e != null && e.texture ? 16777215 : 0,
            alpha: 1,
            matrix: null,
            alignment: 0.5,
            native: !1,
            cap: _e.BUTT,
            join: kt.MITER,
            miterLimit: 10,
          },
          e
        )),
          this.currentPath && this.startPoly();
        const t = e.width > 0 && e.alpha > 0;
        return (
          t
            ? (e.matrix && ((e.matrix = e.matrix.clone()), e.matrix.invert()),
              Object.assign(this._lineStyle, { visible: t }, e))
            : this._lineStyle.reset(),
          this
        );
      }
      startPoly() {
        if (this.currentPath) {
          const e = this.currentPath.points,
            t = this.currentPath.points.length;
          t > 2 &&
            (this.drawShape(this.currentPath),
            (this.currentPath = new we()),
            (this.currentPath.closeStroke = !1),
            this.currentPath.points.push(e[t - 2], e[t - 1]));
        } else
          (this.currentPath = new we()), (this.currentPath.closeStroke = !1);
      }
      finishPoly() {
        this.currentPath &&
          (this.currentPath.points.length > 2
            ? (this.drawShape(this.currentPath), (this.currentPath = null))
            : (this.currentPath.points.length = 0));
      }
      moveTo(e, t) {
        return (
          this.startPoly(),
          (this.currentPath.points[0] = e),
          (this.currentPath.points[1] = t),
          this
        );
      }
      lineTo(e, t) {
        this.currentPath || this.moveTo(0, 0);
        const i = this.currentPath.points,
          s = i[i.length - 2],
          r = i[i.length - 1];
        return (s !== e || r !== t) && i.push(e, t), this;
      }
      _initCurve(e = 0, t = 0) {
        this.currentPath
          ? this.currentPath.points.length === 0 &&
            (this.currentPath.points = [e, t])
          : this.moveTo(e, t);
      }
      quadraticCurveTo(e, t, i, s) {
        this._initCurve();
        const r = this.currentPath.points;
        return (
          r.length === 0 && this.moveTo(0, 0), Es.curveTo(e, t, i, s, r), this
        );
      }
      bezierCurveTo(e, t, i, s, r, n) {
        return (
          this._initCurve(),
          bs.curveTo(e, t, i, s, r, n, this.currentPath.points),
          this
        );
      }
      arcTo(e, t, i, s, r) {
        this._initCurve(e, t);
        const n = this.currentPath.points,
          o = _n.curveTo(e, t, i, s, r, n);
        if (o) {
          const {
            cx: a,
            cy: h,
            radius: l,
            startAngle: c,
            endAngle: u,
            anticlockwise: d,
          } = o;
          this.arc(a, h, l, c, u, d);
        }
        return this;
      }
      arc(e, t, i, s, r, n = !1) {
        if (s === r) return this;
        if ((!n && r <= s ? (r += oi) : n && s <= r && (s += oi), r - s === 0))
          return this;
        const a = e + Math.cos(s) * i,
          h = t + Math.sin(s) * i,
          l = this._geometry.closePointEps;
        let c = this.currentPath ? this.currentPath.points : null;
        if (c) {
          const u = Math.abs(c[c.length - 2] - a),
            d = Math.abs(c[c.length - 1] - h);
          (u < l && d < l) || c.push(a, h);
        } else this.moveTo(a, h), (c = this.currentPath.points);
        return _n.arc(a, h, e, t, i, s, r, n, c), this;
      }
      beginFill(e = 0, t = 1) {
        return this.beginTextureFill({ texture: D.WHITE, color: e, alpha: t });
      }
      beginTextureFill(e) {
        (e = Object.assign(
          { texture: D.WHITE, color: 16777215, alpha: 1, matrix: null },
          e
        )),
          this.currentPath && this.startPoly();
        const t = e.alpha > 0;
        return (
          t
            ? (e.matrix && ((e.matrix = e.matrix.clone()), e.matrix.invert()),
              Object.assign(this._fillStyle, { visible: t }, e))
            : this._fillStyle.reset(),
          this
        );
      }
      endFill() {
        return this.finishPoly(), this._fillStyle.reset(), this;
      }
      drawRect(e, t, i, s) {
        return this.drawShape(new W(e, t, i, s));
      }
      drawRoundedRect(e, t, i, s, r) {
        return this.drawShape(new Ji(e, t, i, s, r));
      }
      drawCircle(e, t, i) {
        return this.drawShape(new Zi(e, t, i));
      }
      drawEllipse(e, t, i, s) {
        return this.drawShape(new Qi(e, t, i, s));
      }
      drawPolygon(...e) {
        let t,
          i = !0;
        const s = e[0];
        s.points
          ? ((i = s.closeStroke), (t = s.points))
          : Array.isArray(e[0])
          ? (t = e[0])
          : (t = e);
        const r = new we(t);
        return (r.closeStroke = i), this.drawShape(r), this;
      }
      drawShape(e) {
        return (
          this._holeMode
            ? this._geometry.drawHole(e, this._matrix)
            : this._geometry.drawShape(
                e,
                this._fillStyle.clone(),
                this._lineStyle.clone(),
                this._matrix
              ),
          this
        );
      }
      clear() {
        return (
          this._geometry.clear(),
          this._lineStyle.reset(),
          this._fillStyle.reset(),
          this._boundsID++,
          (this._matrix = null),
          (this._holeMode = !1),
          (this.currentPath = null),
          this
        );
      }
      isFastRect() {
        const e = this._geometry.graphicsData;
        return (
          e.length === 1 &&
          e[0].shape.type === mt.RECT &&
          !e[0].matrix &&
          !e[0].holes.length &&
          !(e[0].lineStyle.visible && e[0].lineStyle.width)
        );
      }
      _render(e) {
        this.finishPoly();
        const t = this._geometry;
        t.updateBatches(),
          t.batchable
            ? (this.batchDirty !== t.batchDirty && this._populateBatches(),
              this._renderBatched(e))
            : (e.batch.flush(), this._renderDirect(e));
      }
      _populateBatches() {
        const e = this._geometry,
          t = this.blendMode,
          i = e.batches.length;
        (this.batchTint = -1),
          (this._transformID = -1),
          (this.batchDirty = e.batchDirty),
          (this.batches.length = i),
          (this.vertexData = new Float32Array(e.points));
        for (let s = 0; s < i; s++) {
          const r = e.batches[s],
            n = r.style.color,
            o = new Float32Array(
              this.vertexData.buffer,
              r.attribStart * 4 * 2,
              r.attribSize * 2
            ),
            a = new Float32Array(
              e.uvsFloat32.buffer,
              r.attribStart * 4 * 2,
              r.attribSize * 2
            ),
            h = new Uint16Array(e.indicesUint16.buffer, r.start * 2, r.size),
            l = {
              vertexData: o,
              blendMode: t,
              indices: h,
              uvs: a,
              _batchRGB: Te(n),
              _tintRGB: n,
              _texture: r.style.texture,
              alpha: r.style.alpha,
              worldAlpha: 1,
            };
          this.batches[s] = l;
        }
      }
      _renderBatched(e) {
        if (!!this.batches.length) {
          e.batch.setObjectRenderer(e.plugins[this.pluginName]),
            this.calculateVertices(),
            this.calculateTints();
          for (let t = 0, i = this.batches.length; t < i; t++) {
            const s = this.batches[t];
            (s.worldAlpha = this.worldAlpha * s.alpha),
              e.plugins[this.pluginName].render(s);
          }
        }
      }
      _renderDirect(e) {
        const t = this._resolveDirectShader(e),
          i = this._geometry,
          s = this.tint,
          r = this.worldAlpha,
          n = t.uniforms,
          o = i.drawCalls;
        (n.translationMatrix = this.transform.worldTransform),
          (n.tint[0] = (((s >> 16) & 255) / 255) * r),
          (n.tint[1] = (((s >> 8) & 255) / 255) * r),
          (n.tint[2] = ((s & 255) / 255) * r),
          (n.tint[3] = r),
          e.shader.bind(t),
          e.geometry.bind(i, t),
          e.state.set(this.state);
        for (let a = 0, h = o.length; a < h; a++)
          this._renderDrawCallDirect(e, i.drawCalls[a]);
      }
      _renderDrawCallDirect(e, t) {
        const { texArray: i, type: s, size: r, start: n } = t,
          o = i.count;
        for (let a = 0; a < o; a++) e.texture.bind(i.elements[a], a);
        e.geometry.draw(s, r, n);
      }
      _resolveDirectShader(e) {
        let t = this.shader;
        const i = this.pluginName;
        if (!t) {
          if (!xn[i]) {
            const { maxTextures: s } = e.plugins[i],
              r = new Int32Array(s);
            for (let a = 0; a < s; a++) r[a] = a;
            const n = {
                tint: new Float32Array([1, 1, 1, 1]),
                translationMatrix: new J(),
                default: Nt.from({ uSamplers: r }, !0),
              },
              o = e.plugins[i]._shader.program;
            xn[i] = new jt(o, n);
          }
          t = xn[i];
        }
        return t;
      }
      _calculateBounds() {
        this.finishPoly();
        const e = this._geometry;
        if (!e.graphicsData.length) return;
        const { minX: t, minY: i, maxX: s, maxY: r } = e.bounds;
        this._bounds.addFrame(this.transform, t, i, s, r);
      }
      containsPoint(e) {
        return (
          this.worldTransform.applyInverse(e, As._TEMP_POINT),
          this._geometry.containsPoint(As._TEMP_POINT)
        );
      }
      calculateTints() {
        if (this.batchTint !== this.tint) {
          this.batchTint = this.tint;
          const e = Te(this.tint, cp);
          for (let t = 0; t < this.batches.length; t++) {
            const i = this.batches[t],
              s = i._batchRGB,
              r = e[0] * s[0] * 255,
              n = e[1] * s[1] * 255,
              o = e[2] * s[2] * 255,
              a = (r << 16) + (n << 8) + (o | 0);
            i._tintRGB = (a >> 16) + (a & 65280) + ((a & 255) << 16);
          }
        }
      }
      calculateVertices() {
        const e = this.transform._worldID;
        if (this._transformID === e) return;
        this._transformID = e;
        const t = this.transform.worldTransform,
          i = t.a,
          s = t.b,
          r = t.c,
          n = t.d,
          o = t.tx,
          a = t.ty,
          h = this._geometry.points,
          l = this.vertexData;
        let c = 0;
        for (let u = 0; u < h.length; u += 2) {
          const d = h[u],
            f = h[u + 1];
          (l[c++] = i * d + r * f + o), (l[c++] = n * f + s * d + a);
        }
      }
      closePath() {
        const e = this.currentPath;
        return e && ((e.closeStroke = !0), this.finishPoly()), this;
      }
      setMatrix(e) {
        return (this._matrix = e), this;
      }
      beginHole() {
        return this.finishPoly(), (this._holeMode = !0), this;
      }
      endHole() {
        return this.finishPoly(), (this._holeMode = !1), this;
      }
      destroy(e) {
        this._geometry.refCount--,
          this._geometry.refCount === 0 && this._geometry.dispose(),
          (this._matrix = null),
          (this.currentPath = null),
          this._lineStyle.destroy(),
          (this._lineStyle = null),
          this._fillStyle.destroy(),
          (this._fillStyle = null),
          (this._geometry = null),
          (this.shader = null),
          (this.vertexData = null),
          (this.batches.length = 0),
          (this.batches = null),
          super.destroy(e);
      }
    };
  let Si = As;
  (Si.curves = ge), (Si._TEMP_POINT = new j());
  const up = {
    buildPoly: mn,
    buildCircle: Ti,
    buildRectangle: za,
    buildRoundedRectangle: Wa,
    buildLine: gn,
    ArcUtils: _n,
    BezierUtils: bs,
    QuadraticUtils: Es,
    BatchPart: ja,
    FILL_COMMANDS: ws,
    BATCH_POOL: yn,
    DRAW_CALL_POOL: bi,
  };
  class qa {
    constructor(t, i) {
      (this.uvBuffer = t),
        (this.uvMatrix = i),
        (this.data = null),
        (this._bufferUpdateId = -1),
        (this._textureUpdateId = -1),
        (this._updateID = 0);
    }
    update(t) {
      if (
        !t &&
        this._bufferUpdateId === this.uvBuffer._updateID &&
        this._textureUpdateId === this.uvMatrix._updateID
      )
        return;
      (this._bufferUpdateId = this.uvBuffer._updateID),
        (this._textureUpdateId = this.uvMatrix._updateID);
      const i = this.uvBuffer.data;
      (!this.data || this.data.length !== i.length) &&
        (this.data = new Float32Array(i.length)),
        this.uvMatrix.multiplyUvs(i, this.data),
        this._updateID++;
    }
  }
  const Tn = new j(),
    Ka = new we(),
    Za = class extends St {
      constructor(e, t, i, s = Gt.TRIANGLES) {
        super(),
          (this.geometry = e),
          (this.shader = t),
          (this.state = i || te.for2d()),
          (this.drawMode = s),
          (this.start = 0),
          (this.size = 0),
          (this.uvs = null),
          (this.indices = null),
          (this.vertexData = new Float32Array(1)),
          (this.vertexDirty = -1),
          (this._transformID = -1),
          (this._roundPixels = B.ROUND_PIXELS),
          (this.batchUvs = null);
      }
      get geometry() {
        return this._geometry;
      }
      set geometry(e) {
        this._geometry !== e &&
          (this._geometry &&
            (this._geometry.refCount--,
            this._geometry.refCount === 0 && this._geometry.dispose()),
          (this._geometry = e),
          this._geometry && this._geometry.refCount++,
          (this.vertexDirty = -1));
      }
      get uvBuffer() {
        return this.geometry.buffers[1];
      }
      get verticesBuffer() {
        return this.geometry.buffers[0];
      }
      set material(e) {
        this.shader = e;
      }
      get material() {
        return this.shader;
      }
      set blendMode(e) {
        this.state.blendMode = e;
      }
      get blendMode() {
        return this.state.blendMode;
      }
      set roundPixels(e) {
        this._roundPixels !== e && (this._transformID = -1),
          (this._roundPixels = e);
      }
      get roundPixels() {
        return this._roundPixels;
      }
      get tint() {
        return 'tint' in this.shader ? this.shader.tint : null;
      }
      set tint(e) {
        this.shader.tint = e;
      }
      get texture() {
        return 'texture' in this.shader ? this.shader.texture : null;
      }
      set texture(e) {
        this.shader.texture = e;
      }
      _render(e) {
        const t = this.geometry.buffers[0].data;
        this.shader.batchable &&
        this.drawMode === Gt.TRIANGLES &&
        t.length < Za.BATCHABLE_SIZE * 2
          ? this._renderToBatch(e)
          : this._renderDefault(e);
      }
      _renderDefault(e) {
        const t = this.shader;
        (t.alpha = this.worldAlpha),
          t.update && t.update(),
          e.batch.flush(),
          (t.uniforms.translationMatrix = this.transform.worldTransform.toArray(
            !0
          )),
          e.shader.bind(t),
          e.state.set(this.state),
          e.geometry.bind(this.geometry, t),
          e.geometry.draw(
            this.drawMode,
            this.size,
            this.start,
            this.geometry.instanceCount
          );
      }
      _renderToBatch(e) {
        const t = this.geometry,
          i = this.shader;
        i.uvMatrix && (i.uvMatrix.update(), this.calculateUvs()),
          this.calculateVertices(),
          (this.indices = t.indexBuffer.data),
          (this._tintRGB = i._tintRGB),
          (this._texture = i.texture);
        const s = this.material.pluginName;
        e.batch.setObjectRenderer(e.plugins[s]), e.plugins[s].render(this);
      }
      calculateVertices() {
        const t = this.geometry.buffers[0],
          i = t.data,
          s = t._updateID;
        if (
          s === this.vertexDirty &&
          this._transformID === this.transform._worldID
        )
          return;
        (this._transformID = this.transform._worldID),
          this.vertexData.length !== i.length &&
            (this.vertexData = new Float32Array(i.length));
        const r = this.transform.worldTransform,
          n = r.a,
          o = r.b,
          a = r.c,
          h = r.d,
          l = r.tx,
          c = r.ty,
          u = this.vertexData;
        for (let d = 0; d < u.length / 2; d++) {
          const f = i[d * 2],
            p = i[d * 2 + 1];
          (u[d * 2] = n * f + a * p + l), (u[d * 2 + 1] = o * f + h * p + c);
        }
        if (this._roundPixels) {
          const d = B.RESOLUTION;
          for (let f = 0; f < u.length; ++f) u[f] = Math.round(u[f] * d) / d;
        }
        this.vertexDirty = s;
      }
      calculateUvs() {
        const e = this.geometry.buffers[1],
          t = this.shader;
        t.uvMatrix.isSimple
          ? (this.uvs = e.data)
          : (this.batchUvs || (this.batchUvs = new qa(e, t.uvMatrix)),
            this.batchUvs.update(),
            (this.uvs = this.batchUvs.data));
      }
      _calculateBounds() {
        this.calculateVertices(),
          this._bounds.addVertexData(
            this.vertexData,
            0,
            this.vertexData.length
          );
      }
      containsPoint(e) {
        if (!this.getBounds().contains(e.x, e.y)) return !1;
        this.worldTransform.applyInverse(e, Tn);
        const t = this.geometry.getBuffer('aVertexPosition').data,
          i = Ka.points,
          s = this.geometry.getIndex().data,
          r = s.length,
          n = this.drawMode === 4 ? 3 : 1;
        for (let o = 0; o + 2 < r; o += n) {
          const a = s[o] * 2,
            h = s[o + 1] * 2,
            l = s[o + 2] * 2;
          if (
            ((i[0] = t[a]),
            (i[1] = t[a + 1]),
            (i[2] = t[h]),
            (i[3] = t[h + 1]),
            (i[4] = t[l]),
            (i[5] = t[l + 1]),
            Ka.contains(Tn.x, Tn.y))
          )
            return !0;
        }
        return !1;
      }
      destroy(e) {
        super.destroy(e),
          this._cachedTexture &&
            (this._cachedTexture.destroy(), (this._cachedTexture = null)),
          (this.geometry = null),
          (this.shader = null),
          (this.state = null),
          (this.uvs = null),
          (this.indices = null),
          (this.vertexData = null);
      }
    };
  let Ne = Za;
  Ne.BATCHABLE_SIZE = 100;
  class Ai extends ae {
    constructor(t, i, s) {
      super();
      const r = new ot(t),
        n = new ot(i, !0),
        o = new ot(s, !0, !0);
      this.addAttribute('aVertexPosition', r, 2, !1, k.FLOAT)
        .addAttribute('aTextureCoord', n, 2, !1, k.FLOAT)
        .addIndex(o),
        (this._updateId = -1);
    }
    get vertexDirtyId() {
      return this.buffers[0]._updateID;
    }
  }
  var dp = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,
    fp = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
  class Ze extends jt {
    constructor(t, i) {
      const s = {
        uSampler: t,
        alpha: 1,
        uTextureMatrix: J.IDENTITY,
        uColor: new Float32Array([1, 1, 1, 1]),
      };
      (i = Object.assign({ tint: 16777215, alpha: 1, pluginName: 'batch' }, i)),
        i.uniforms && Object.assign(s, i.uniforms),
        super(i.program || Ft.from(fp, dp), s),
        (this._colorDirty = !1),
        (this.uvMatrix = new hs(t)),
        (this.batchable = i.program === void 0),
        (this.pluginName = i.pluginName),
        (this.tint = i.tint),
        (this.alpha = i.alpha);
    }
    get texture() {
      return this.uniforms.uSampler;
    }
    set texture(t) {
      this.uniforms.uSampler !== t &&
        (!this.uniforms.uSampler.baseTexture.alphaMode !=
          !t.baseTexture.alphaMode && (this._colorDirty = !0),
        (this.uniforms.uSampler = t),
        (this.uvMatrix.texture = t));
    }
    set alpha(t) {
      t !== this._alpha && ((this._alpha = t), (this._colorDirty = !0));
    }
    get alpha() {
      return this._alpha;
    }
    set tint(t) {
      t !== this._tint &&
        ((this._tint = t),
        (this._tintRGB = (t >> 16) + (t & 65280) + ((t & 255) << 16)),
        (this._colorDirty = !0));
    }
    get tint() {
      return this._tint;
    }
    update() {
      if (this._colorDirty) {
        this._colorDirty = !1;
        const t = this.texture.baseTexture;
        Js(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode);
      }
      this.uvMatrix.update() &&
        (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
    }
  }
  class Qa extends Ai {
    constructor(t = 100, i = 100, s = 10, r = 10) {
      super(),
        (this.segWidth = s),
        (this.segHeight = r),
        (this.width = t),
        (this.height = i),
        this.build();
    }
    build() {
      const t = this.segWidth * this.segHeight,
        i = [],
        s = [],
        r = [],
        n = this.segWidth - 1,
        o = this.segHeight - 1,
        a = this.width / n,
        h = this.height / o;
      for (let c = 0; c < t; c++) {
        const u = c % this.segWidth,
          d = (c / this.segWidth) | 0;
        i.push(u * a, d * h), s.push(u / n, d / o);
      }
      const l = n * o;
      for (let c = 0; c < l; c++) {
        const u = c % n,
          d = (c / n) | 0,
          f = d * this.segWidth + u,
          p = d * this.segWidth + u + 1,
          g = (d + 1) * this.segWidth + u,
          _ = (d + 1) * this.segWidth + u + 1;
        r.push(f, p, g, p, _, g);
      }
      (this.buffers[0].data = new Float32Array(i)),
        (this.buffers[1].data = new Float32Array(s)),
        (this.indexBuffer.data = new Uint16Array(r)),
        this.buffers[0].update(),
        this.buffers[1].update(),
        this.indexBuffer.update();
    }
  }
  class Ja extends Ai {
    constructor(t = 200, i, s = 0) {
      super(
        new Float32Array(i.length * 4),
        new Float32Array(i.length * 4),
        new Uint16Array((i.length - 1) * 6)
      ),
        (this.points = i),
        (this._width = t),
        (this.textureScale = s),
        this.build();
    }
    get width() {
      return this._width;
    }
    build() {
      const t = this.points;
      if (!t) return;
      const i = this.getBuffer('aVertexPosition'),
        s = this.getBuffer('aTextureCoord'),
        r = this.getIndex();
      if (t.length < 1) return;
      i.data.length / 4 !== t.length &&
        ((i.data = new Float32Array(t.length * 4)),
        (s.data = new Float32Array(t.length * 4)),
        (r.data = new Uint16Array((t.length - 1) * 6)));
      const n = s.data,
        o = r.data;
      (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 1);
      let a = 0,
        h = t[0];
      const l = this._width * this.textureScale,
        c = t.length;
      for (let d = 0; d < c; d++) {
        const f = d * 4;
        if (this.textureScale > 0) {
          const p = h.x - t[d].x,
            g = h.y - t[d].y,
            _ = Math.sqrt(p * p + g * g);
          (h = t[d]), (a += _ / l);
        } else a = d / (c - 1);
        (n[f] = a), (n[f + 1] = 0), (n[f + 2] = a), (n[f + 3] = 1);
      }
      let u = 0;
      for (let d = 0; d < c - 1; d++) {
        const f = d * 2;
        (o[u++] = f),
          (o[u++] = f + 1),
          (o[u++] = f + 2),
          (o[u++] = f + 2),
          (o[u++] = f + 1),
          (o[u++] = f + 3);
      }
      s.update(), r.update(), this.updateVertices();
    }
    updateVertices() {
      const t = this.points;
      if (t.length < 1) return;
      let i = t[0],
        s,
        r = 0,
        n = 0;
      const o = this.buffers[0].data,
        a = t.length,
        h =
          this.textureScale > 0
            ? (this.textureScale * this._width) / 2
            : this._width / 2;
      for (let l = 0; l < a; l++) {
        const c = t[l],
          u = l * 4;
        l < t.length - 1 ? (s = t[l + 1]) : (s = c),
          (n = -(s.x - i.x)),
          (r = s.y - i.y);
        let d = (1 - l / (a - 1)) * 10;
        d > 1 && (d = 1);
        const f = Math.sqrt(r * r + n * n);
        f < 1e-6
          ? ((r = 0), (n = 0))
          : ((r /= f), (n /= f), (r *= h), (n *= h)),
          (o[u] = c.x + r),
          (o[u + 1] = c.y + n),
          (o[u + 2] = c.x - r),
          (o[u + 3] = c.y - n),
          (i = c);
      }
      this.buffers[0].update();
    }
    update() {
      this.textureScale > 0 ? this.build() : this.updateVertices();
    }
  }
  class th extends Ne {
    constructor(t, i, s) {
      const r = new Qa(t.width, t.height, i, s),
        n = new Ze(D.WHITE);
      super(r, n), (this.texture = t), (this.autoResize = !0);
    }
    textureUpdated() {
      this._textureID = this.shader.texture._updateID;
      const t = this.geometry,
        { width: i, height: s } = this.shader.texture;
      this.autoResize &&
        (t.width !== i || t.height !== s) &&
        ((t.width = this.shader.texture.width),
        (t.height = this.shader.texture.height),
        t.build());
    }
    set texture(t) {
      this.shader.texture !== t &&
        ((this.shader.texture = t),
        (this._textureID = -1),
        t.baseTexture.valid
          ? this.textureUpdated()
          : t.once('update', this.textureUpdated, this));
    }
    get texture() {
      return this.shader.texture;
    }
    _render(t) {
      this._textureID !== this.shader.texture._updateID &&
        this.textureUpdated(),
        super._render(t);
    }
    destroy(t) {
      this.shader.texture.off('update', this.textureUpdated, this),
        super.destroy(t);
    }
  }
  const Rs = 10;
  class pp extends th {
    constructor(t, i = Rs, s = Rs, r = Rs, n = Rs) {
      super(D.WHITE, 4, 4),
        (this._origWidth = t.orig.width),
        (this._origHeight = t.orig.height),
        (this._width = this._origWidth),
        (this._height = this._origHeight),
        (this._leftWidth = i),
        (this._rightWidth = r),
        (this._topHeight = s),
        (this._bottomHeight = n),
        (this.texture = t);
    }
    textureUpdated() {
      (this._textureID = this.shader.texture._updateID), this._refresh();
    }
    get vertices() {
      return this.geometry.getBuffer('aVertexPosition').data;
    }
    set vertices(t) {
      this.geometry.getBuffer('aVertexPosition').data = t;
    }
    updateHorizontalVertices() {
      const t = this.vertices,
        i = this._getMinScale();
      (t[9] = t[11] = t[13] = t[15] = this._topHeight * i),
        (t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * i),
        (t[25] = t[27] = t[29] = t[31] = this._height);
    }
    updateVerticalVertices() {
      const t = this.vertices,
        i = this._getMinScale();
      (t[2] = t[10] = t[18] = t[26] = this._leftWidth * i),
        (t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * i),
        (t[6] = t[14] = t[22] = t[30] = this._width);
    }
    _getMinScale() {
      const t = this._leftWidth + this._rightWidth,
        i = this._width > t ? 1 : this._width / t,
        s = this._topHeight + this._bottomHeight,
        r = this._height > s ? 1 : this._height / s;
      return Math.min(i, r);
    }
    get width() {
      return this._width;
    }
    set width(t) {
      (this._width = t), this._refresh();
    }
    get height() {
      return this._height;
    }
    set height(t) {
      (this._height = t), this._refresh();
    }
    get leftWidth() {
      return this._leftWidth;
    }
    set leftWidth(t) {
      (this._leftWidth = t), this._refresh();
    }
    get rightWidth() {
      return this._rightWidth;
    }
    set rightWidth(t) {
      (this._rightWidth = t), this._refresh();
    }
    get topHeight() {
      return this._topHeight;
    }
    set topHeight(t) {
      (this._topHeight = t), this._refresh();
    }
    get bottomHeight() {
      return this._bottomHeight;
    }
    set bottomHeight(t) {
      (this._bottomHeight = t), this._refresh();
    }
    _refresh() {
      const t = this.texture,
        i = this.geometry.buffers[1].data;
      (this._origWidth = t.orig.width), (this._origHeight = t.orig.height);
      const s = 1 / this._origWidth,
        r = 1 / this._origHeight;
      (i[0] = i[8] = i[16] = i[24] = 0),
        (i[1] = i[3] = i[5] = i[7] = 0),
        (i[6] = i[14] = i[22] = i[30] = 1),
        (i[25] = i[27] = i[29] = i[31] = 1),
        (i[2] = i[10] = i[18] = i[26] = s * this._leftWidth),
        (i[4] = i[12] = i[20] = i[28] = 1 - s * this._rightWidth),
        (i[9] = i[11] = i[13] = i[15] = r * this._topHeight),
        (i[17] = i[19] = i[21] = i[23] = 1 - r * this._bottomHeight),
        this.updateHorizontalVertices(),
        this.updateVerticalVertices(),
        this.geometry.buffers[0].update(),
        this.geometry.buffers[1].update();
    }
  }
  class mp extends Ne {
    constructor(t = D.EMPTY, i, s, r, n) {
      const o = new Ai(i, s, r);
      o.getBuffer('aVertexPosition').static = !1;
      const a = new Ze(t);
      super(o, a, null, n), (this.autoUpdate = !0);
    }
    get vertices() {
      return this.geometry.getBuffer('aVertexPosition').data;
    }
    set vertices(t) {
      this.geometry.getBuffer('aVertexPosition').data = t;
    }
    _render(t) {
      this.autoUpdate && this.geometry.getBuffer('aVertexPosition').update(),
        super._render(t);
    }
  }
  class _p extends Ne {
    constructor(t, i, s = 0) {
      const r = new Ja(t.height, i, s),
        n = new Ze(t);
      s > 0 && (t.baseTexture.wrapMode = Qt.REPEAT),
        super(r, n),
        (this.autoUpdate = !0);
    }
    _render(t) {
      const i = this.geometry;
      (this.autoUpdate || i._width !== this.shader.texture.height) &&
        ((i._width = this.shader.texture.height), i.update()),
        super._render(t);
    }
  }
  class gp extends St {
    constructor(t = 1500, i, s = 16384, r = !1) {
      super();
      const n = 16384;
      s > n && (s = n),
        (this._properties = [!1, !0, !1, !1, !1]),
        (this._maxSize = t),
        (this._batchSize = s),
        (this._buffers = null),
        (this._bufferUpdateIDs = []),
        (this._updateID = 0),
        (this.interactiveChildren = !1),
        (this.blendMode = G.NORMAL),
        (this.autoResize = r),
        (this.roundPixels = !0),
        (this.baseTexture = null),
        this.setProperties(i),
        (this._tint = 0),
        (this.tintRgb = new Float32Array(4)),
        (this.tint = 16777215);
    }
    setProperties(t) {
      t &&
        ((this._properties[0] =
          'vertices' in t || 'scale' in t
            ? !!t.vertices || !!t.scale
            : this._properties[0]),
        (this._properties[1] =
          'position' in t ? !!t.position : this._properties[1]),
        (this._properties[2] =
          'rotation' in t ? !!t.rotation : this._properties[2]),
        (this._properties[3] = 'uvs' in t ? !!t.uvs : this._properties[3]),
        (this._properties[4] =
          'tint' in t || 'alpha' in t
            ? !!t.tint || !!t.alpha
            : this._properties[4]));
    }
    updateTransform() {
      this.displayObjectUpdateTransform();
    }
    get tint() {
      return this._tint;
    }
    set tint(t) {
      (this._tint = t), Te(t, this.tintRgb);
    }
    render(t) {
      !this.visible ||
        this.worldAlpha <= 0 ||
        !this.children.length ||
        !this.renderable ||
        (this.baseTexture ||
          ((this.baseTexture = this.children[0]._texture.baseTexture),
          this.baseTexture.valid ||
            this.baseTexture.once('update', () => this.onChildrenChange(0))),
        t.batch.setObjectRenderer(t.plugins.particle),
        t.plugins.particle.render(this));
    }
    onChildrenChange(t) {
      const i = Math.floor(t / this._batchSize);
      for (; this._bufferUpdateIDs.length < i; ) this._bufferUpdateIDs.push(0);
      this._bufferUpdateIDs[i] = ++this._updateID;
    }
    dispose() {
      if (this._buffers) {
        for (let t = 0; t < this._buffers.length; ++t)
          this._buffers[t].destroy();
        this._buffers = null;
      }
    }
    destroy(t) {
      super.destroy(t),
        this.dispose(),
        (this._properties = null),
        (this._buffers = null),
        (this._bufferUpdateIDs = null);
    }
  }
  class eh {
    constructor(t, i, s) {
      (this.geometry = new ae()),
        (this.indexBuffer = null),
        (this.size = s),
        (this.dynamicProperties = []),
        (this.staticProperties = []);
      for (let r = 0; r < t.length; ++r) {
        let n = t[r];
        (n = {
          attributeName: n.attributeName,
          size: n.size,
          uploadFunction: n.uploadFunction,
          type: n.type || k.FLOAT,
          offset: n.offset,
        }),
          i[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n);
      }
      (this.staticStride = 0),
        (this.staticBuffer = null),
        (this.staticData = null),
        (this.staticDataUint32 = null),
        (this.dynamicStride = 0),
        (this.dynamicBuffer = null),
        (this.dynamicData = null),
        (this.dynamicDataUint32 = null),
        (this._updateID = 0),
        this.initBuffers();
    }
    initBuffers() {
      const t = this.geometry;
      let i = 0;
      (this.indexBuffer = new ot(oo(this.size), !0, !0)),
        t.addIndex(this.indexBuffer),
        (this.dynamicStride = 0);
      for (let o = 0; o < this.dynamicProperties.length; ++o) {
        const a = this.dynamicProperties[o];
        (a.offset = i), (i += a.size), (this.dynamicStride += a.size);
      }
      const s = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
      (this.dynamicData = new Float32Array(s)),
        (this.dynamicDataUint32 = new Uint32Array(s)),
        (this.dynamicBuffer = new ot(this.dynamicData, !1, !1));
      let r = 0;
      this.staticStride = 0;
      for (let o = 0; o < this.staticProperties.length; ++o) {
        const a = this.staticProperties[o];
        (a.offset = r), (r += a.size), (this.staticStride += a.size);
      }
      const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
      (this.staticData = new Float32Array(n)),
        (this.staticDataUint32 = new Uint32Array(n)),
        (this.staticBuffer = new ot(this.staticData, !0, !1));
      for (let o = 0; o < this.dynamicProperties.length; ++o) {
        const a = this.dynamicProperties[o];
        t.addAttribute(
          a.attributeName,
          this.dynamicBuffer,
          0,
          a.type === k.UNSIGNED_BYTE,
          a.type,
          this.dynamicStride * 4,
          a.offset * 4
        );
      }
      for (let o = 0; o < this.staticProperties.length; ++o) {
        const a = this.staticProperties[o];
        t.addAttribute(
          a.attributeName,
          this.staticBuffer,
          0,
          a.type === k.UNSIGNED_BYTE,
          a.type,
          this.staticStride * 4,
          a.offset * 4
        );
      }
    }
    uploadDynamic(t, i, s) {
      for (let r = 0; r < this.dynamicProperties.length; r++) {
        const n = this.dynamicProperties[r];
        n.uploadFunction(
          t,
          i,
          s,
          n.type === k.UNSIGNED_BYTE
            ? this.dynamicDataUint32
            : this.dynamicData,
          this.dynamicStride,
          n.offset
        );
      }
      this.dynamicBuffer._updateID++;
    }
    uploadStatic(t, i, s) {
      for (let r = 0; r < this.staticProperties.length; r++) {
        const n = this.staticProperties[r];
        n.uploadFunction(
          t,
          i,
          s,
          n.type === k.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData,
          this.staticStride,
          n.offset
        );
      }
      this.staticBuffer._updateID++;
    }
    destroy() {
      (this.indexBuffer = null),
        (this.dynamicProperties = null),
        (this.dynamicBuffer = null),
        (this.dynamicData = null),
        (this.dynamicDataUint32 = null),
        (this.staticProperties = null),
        (this.staticBuffer = null),
        (this.staticData = null),
        (this.staticDataUint32 = null),
        this.geometry.destroy();
    }
  }
  var yp = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,
    vp = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
  class bn extends li {
    constructor(t) {
      super(t),
        (this.shader = null),
        (this.properties = null),
        (this.tempMatrix = new J()),
        (this.properties = [
          {
            attributeName: 'aVertexPosition',
            size: 2,
            uploadFunction: this.uploadVertices,
            offset: 0,
          },
          {
            attributeName: 'aPositionCoord',
            size: 2,
            uploadFunction: this.uploadPosition,
            offset: 0,
          },
          {
            attributeName: 'aRotation',
            size: 1,
            uploadFunction: this.uploadRotation,
            offset: 0,
          },
          {
            attributeName: 'aTextureCoord',
            size: 2,
            uploadFunction: this.uploadUvs,
            offset: 0,
          },
          {
            attributeName: 'aColor',
            size: 1,
            type: k.UNSIGNED_BYTE,
            uploadFunction: this.uploadTint,
            offset: 0,
          },
        ]),
        (this.shader = jt.from(vp, yp, {})),
        (this.state = te.for2d());
    }
    render(t) {
      const i = t.children,
        s = t._maxSize,
        r = t._batchSize,
        n = this.renderer;
      let o = i.length;
      if (o === 0) return;
      o > s && !t.autoResize && (o = s);
      let a = t._buffers;
      a || (a = t._buffers = this.generateBuffers(t));
      const h = i[0]._texture.baseTexture,
        l = h.alphaMode > 0;
      (this.state.blendMode = Qs(t.blendMode, l)), n.state.set(this.state);
      const c = n.gl,
        u = t.worldTransform.copyTo(this.tempMatrix);
      u.prepend(n.globalUniforms.uniforms.projectionMatrix),
        (this.shader.uniforms.translationMatrix = u.toArray(!0)),
        (this.shader.uniforms.uColor = ro(
          t.tintRgb,
          t.worldAlpha,
          this.shader.uniforms.uColor,
          l
        )),
        (this.shader.uniforms.uSampler = h),
        this.renderer.shader.bind(this.shader);
      let d = !1;
      for (let f = 0, p = 0; f < o; f += r, p += 1) {
        let g = o - f;
        g > r && (g = r),
          p >= a.length && a.push(this._generateOneMoreBuffer(t));
        const _ = a[p];
        _.uploadDynamic(i, f, g);
        const v = t._bufferUpdateIDs[p] || 0;
        (d = d || _._updateID < v),
          d && ((_._updateID = t._updateID), _.uploadStatic(i, f, g)),
          n.geometry.bind(_.geometry),
          c.drawElements(c.TRIANGLES, g * 6, c.UNSIGNED_SHORT, 0);
      }
    }
    generateBuffers(t) {
      const i = [],
        s = t._maxSize,
        r = t._batchSize,
        n = t._properties;
      for (let o = 0; o < s; o += r) i.push(new eh(this.properties, n, r));
      return i;
    }
    _generateOneMoreBuffer(t) {
      const i = t._batchSize,
        s = t._properties;
      return new eh(this.properties, s, i);
    }
    uploadVertices(t, i, s, r, n, o) {
      let a = 0,
        h = 0,
        l = 0,
        c = 0;
      for (let u = 0; u < s; ++u) {
        const d = t[i + u],
          f = d._texture,
          p = d.scale.x,
          g = d.scale.y,
          _ = f.trim,
          v = f.orig;
        _
          ? ((h = _.x - d.anchor.x * v.width),
            (a = h + _.width),
            (c = _.y - d.anchor.y * v.height),
            (l = c + _.height))
          : ((a = v.width * (1 - d.anchor.x)),
            (h = v.width * -d.anchor.x),
            (l = v.height * (1 - d.anchor.y)),
            (c = v.height * -d.anchor.y)),
          (r[o] = h * p),
          (r[o + 1] = c * g),
          (r[o + n] = a * p),
          (r[o + n + 1] = c * g),
          (r[o + n * 2] = a * p),
          (r[o + n * 2 + 1] = l * g),
          (r[o + n * 3] = h * p),
          (r[o + n * 3 + 1] = l * g),
          (o += n * 4);
      }
    }
    uploadPosition(t, i, s, r, n, o) {
      for (let a = 0; a < s; a++) {
        const h = t[i + a].position;
        (r[o] = h.x),
          (r[o + 1] = h.y),
          (r[o + n] = h.x),
          (r[o + n + 1] = h.y),
          (r[o + n * 2] = h.x),
          (r[o + n * 2 + 1] = h.y),
          (r[o + n * 3] = h.x),
          (r[o + n * 3 + 1] = h.y),
          (o += n * 4);
      }
    }
    uploadRotation(t, i, s, r, n, o) {
      for (let a = 0; a < s; a++) {
        const h = t[i + a].rotation;
        (r[o] = h),
          (r[o + n] = h),
          (r[o + n * 2] = h),
          (r[o + n * 3] = h),
          (o += n * 4);
      }
    }
    uploadUvs(t, i, s, r, n, o) {
      for (let a = 0; a < s; ++a) {
        const h = t[i + a]._texture._uvs;
        h
          ? ((r[o] = h.x0),
            (r[o + 1] = h.y0),
            (r[o + n] = h.x1),
            (r[o + n + 1] = h.y1),
            (r[o + n * 2] = h.x2),
            (r[o + n * 2 + 1] = h.y2),
            (r[o + n * 3] = h.x3),
            (r[o + n * 3 + 1] = h.y3),
            (o += n * 4))
          : ((r[o] = 0),
            (r[o + 1] = 0),
            (r[o + n] = 0),
            (r[o + n + 1] = 0),
            (r[o + n * 2] = 0),
            (r[o + n * 2 + 1] = 0),
            (r[o + n * 3] = 0),
            (r[o + n * 3 + 1] = 0),
            (o += n * 4));
      }
    }
    uploadTint(t, i, s, r, n, o) {
      for (let a = 0; a < s; ++a) {
        const h = t[i + a],
          l = h._texture.baseTexture.alphaMode > 0,
          c = h.alpha,
          u = c < 1 && l ? Vi(h._tintRGB, c) : h._tintRGB + ((c * 255) << 24);
        (r[o] = u),
          (r[o + n] = u),
          (r[o + n * 2] = u),
          (r[o + n * 3] = u),
          (o += n * 4);
      }
    }
    destroy() {
      super.destroy(),
        this.shader && (this.shader.destroy(), (this.shader = null)),
        (this.tempMatrix = null);
    }
  }
  (bn.extension = { name: 'particle', type: P.RendererPlugin }), U.add(bn);
  var Ri = ((e) => (
    (e[(e.LINEAR_VERTICAL = 0)] = 'LINEAR_VERTICAL'),
    (e[(e.LINEAR_HORIZONTAL = 1)] = 'LINEAR_HORIZONTAL'),
    e
  ))(Ri || {});
  const Cs = { willReadFrequently: !0 },
    O = class {
      static get experimentalLetterSpacingSupported() {
        let e = O._experimentalLetterSpacingSupported;
        if (e !== void 0) {
          const t = B.ADAPTER.getCanvasRenderingContext2D().prototype;
          e = O._experimentalLetterSpacingSupported =
            'letterSpacing' in t || 'textLetterSpacing' in t;
        }
        return e;
      }
      constructor(e, t, i, s, r, n, o, a, h) {
        (this.text = e),
          (this.style = t),
          (this.width = i),
          (this.height = s),
          (this.lines = r),
          (this.lineWidths = n),
          (this.lineHeight = o),
          (this.maxLineWidth = a),
          (this.fontProperties = h);
      }
      static measureText(e, t, i, s = O._canvas) {
        i = i == null ? t.wordWrap : i;
        const r = t.toFontString(),
          n = O.measureFont(r);
        n.fontSize === 0 &&
          ((n.fontSize = t.fontSize), (n.ascent = t.fontSize));
        const o = s.getContext('2d', Cs);
        o.font = r;
        const h = (i ? O.wordWrap(e, t, s) : e).split(/(?:\r\n|\r|\n)/),
          l = new Array(h.length);
        let c = 0;
        for (let p = 0; p < h.length; p++) {
          const g = O._measureText(h[p], t.letterSpacing, o);
          (l[p] = g), (c = Math.max(c, g));
        }
        let u = c + t.strokeThickness;
        t.dropShadow && (u += t.dropShadowDistance);
        const d = t.lineHeight || n.fontSize + t.strokeThickness;
        let f =
          Math.max(d, n.fontSize + t.strokeThickness * 2) +
          (h.length - 1) * (d + t.leading);
        return (
          t.dropShadow && (f += t.dropShadowDistance),
          new O(e, t, u, f, h, l, d + t.leading, c, n)
        );
      }
      static _measureText(e, t, i) {
        let s = !1;
        O.experimentalLetterSpacingSupported &&
          (O.experimentalLetterSpacing
            ? ((i.letterSpacing = `${t}px`),
              (i.textLetterSpacing = `${t}px`),
              (s = !0))
            : ((i.letterSpacing = '0px'), (i.textLetterSpacing = '0px')));
        let r = i.measureText(e).width;
        return (
          r > 0 &&
            (s ? (r -= t) : (r += (O.graphemeSegmenter(e).length - 1) * t)),
          r
        );
      }
      static wordWrap(e, t, i = O._canvas) {
        const s = i.getContext('2d', Cs);
        let r = 0,
          n = '',
          o = '';
        const a = Object.create(null),
          { letterSpacing: h, whiteSpace: l } = t,
          c = O.collapseSpaces(l),
          u = O.collapseNewlines(l);
        let d = !c;
        const f = t.wordWrapWidth + h,
          p = O.tokenize(e);
        for (let g = 0; g < p.length; g++) {
          let _ = p[g];
          if (O.isNewline(_)) {
            if (!u) {
              (o += O.addLine(n)), (d = !c), (n = ''), (r = 0);
              continue;
            }
            _ = ' ';
          }
          if (c) {
            const T = O.isBreakingSpace(_),
              y = O.isBreakingSpace(n[n.length - 1]);
            if (T && y) continue;
          }
          const v = O.getFromCache(_, h, a, s);
          if (v > f)
            if (
              (n !== '' && ((o += O.addLine(n)), (n = ''), (r = 0)),
              O.canBreakWords(_, t.breakWords))
            ) {
              const T = O.wordWrapSplit(_);
              for (let y = 0; y < T.length; y++) {
                let x = T[y],
                  A = x,
                  M = 1;
                for (; T[y + M]; ) {
                  const E = T[y + M];
                  if (!O.canBreakChars(A, E, _, y, t.breakWords)) x += E;
                  else break;
                  (A = E), M++;
                }
                y += M - 1;
                const R = O.getFromCache(x, h, a, s);
                R + r > f && ((o += O.addLine(n)), (d = !1), (n = ''), (r = 0)),
                  (n += x),
                  (r += R);
              }
            } else {
              n.length > 0 && ((o += O.addLine(n)), (n = ''), (r = 0));
              const T = g === p.length - 1;
              (o += O.addLine(_, !T)), (d = !1), (n = ''), (r = 0);
            }
          else
            v + r > f && ((d = !1), (o += O.addLine(n)), (n = ''), (r = 0)),
              (n.length > 0 || !O.isBreakingSpace(_) || d) &&
                ((n += _), (r += v));
        }
        return (o += O.addLine(n, !1)), o;
      }
      static addLine(e, t = !0) {
        return (
          (e = O.trimRight(e)),
          (e = t
            ? `${e}
`
            : e),
          e
        );
      }
      static getFromCache(e, t, i, s) {
        let r = i[e];
        return (
          typeof r != 'number' &&
            ((r = O._measureText(e, t, s) + t), (i[e] = r)),
          r
        );
      }
      static collapseSpaces(e) {
        return e === 'normal' || e === 'pre-line';
      }
      static collapseNewlines(e) {
        return e === 'normal';
      }
      static trimRight(e) {
        if (typeof e != 'string') return '';
        for (let t = e.length - 1; t >= 0; t--) {
          const i = e[t];
          if (!O.isBreakingSpace(i)) break;
          e = e.slice(0, -1);
        }
        return e;
      }
      static isNewline(e) {
        return typeof e != 'string'
          ? !1
          : O._newlines.includes(e.charCodeAt(0));
      }
      static isBreakingSpace(e, t) {
        return typeof e != 'string'
          ? !1
          : O._breakingSpaces.includes(e.charCodeAt(0));
      }
      static tokenize(e) {
        const t = [];
        let i = '';
        if (typeof e != 'string') return t;
        for (let s = 0; s < e.length; s++) {
          const r = e[s],
            n = e[s + 1];
          if (O.isBreakingSpace(r, n) || O.isNewline(r)) {
            i !== '' && (t.push(i), (i = '')), t.push(r);
            continue;
          }
          i += r;
        }
        return i !== '' && t.push(i), t;
      }
      static canBreakWords(e, t) {
        return t;
      }
      static canBreakChars(e, t, i, s, r) {
        return !0;
      }
      static wordWrapSplit(e) {
        return O.graphemeSegmenter(e);
      }
      static measureFont(e) {
        if (O._fonts[e]) return O._fonts[e];
        const t = { ascent: 0, descent: 0, fontSize: 0 },
          i = O._canvas,
          s = O._context;
        s.font = e;
        const r = O.METRICS_STRING + O.BASELINE_SYMBOL,
          n = Math.ceil(s.measureText(r).width);
        let o = Math.ceil(s.measureText(O.BASELINE_SYMBOL).width);
        const a = Math.ceil(O.HEIGHT_MULTIPLIER * o);
        if (((o = (o * O.BASELINE_MULTIPLIER) | 0), n === 0 || a === 0))
          return (O._fonts[e] = t), t;
        (i.width = n),
          (i.height = a),
          (s.fillStyle = '#f00'),
          s.fillRect(0, 0, n, a),
          (s.font = e),
          (s.textBaseline = 'alphabetic'),
          (s.fillStyle = '#000'),
          s.fillText(r, 0, o);
        const h = s.getImageData(0, 0, n, a).data,
          l = h.length,
          c = n * 4;
        let u = 0,
          d = 0,
          f = !1;
        for (u = 0; u < o; ++u) {
          for (let p = 0; p < c; p += 4)
            if (h[d + p] !== 255) {
              f = !0;
              break;
            }
          if (!f) d += c;
          else break;
        }
        for (t.ascent = o - u, d = l - c, f = !1, u = a; u > o; --u) {
          for (let p = 0; p < c; p += 4)
            if (h[d + p] !== 255) {
              f = !0;
              break;
            }
          if (!f) d -= c;
          else break;
        }
        return (
          (t.descent = u - o),
          (t.fontSize = t.ascent + t.descent),
          (O._fonts[e] = t),
          t
        );
      }
      static clearMetrics(e = '') {
        e ? delete O._fonts[e] : (O._fonts = {});
      }
      static get _canvas() {
        if (!O.__canvas) {
          let e;
          try {
            const t = new OffscreenCanvas(0, 0),
              i = t.getContext('2d', Cs);
            if (i != null && i.measureText) return (O.__canvas = t), t;
            e = B.ADAPTER.createCanvas();
          } catch (t) {
            e = B.ADAPTER.createCanvas();
          }
          (e.width = e.height = 10), (O.__canvas = e);
        }
        return O.__canvas;
      }
      static get _context() {
        return (
          O.__context || (O.__context = O._canvas.getContext('2d', Cs)),
          O.__context
        );
      }
    };
  let gt = O;
  (gt.METRICS_STRING = '|\xC9q\xC5'),
    (gt.BASELINE_SYMBOL = 'M'),
    (gt.BASELINE_MULTIPLIER = 1.4),
    (gt.HEIGHT_MULTIPLIER = 2),
    (gt.graphemeSegmenter = (() => {
      if (typeof (Intl == null ? void 0 : Intl.Segmenter) == 'function') {
        const e = new Intl.Segmenter();
        return (t) => [...e.segment(t)].map((i) => i.segment);
      }
      return (e) => [...e];
    })()),
    (gt.experimentalLetterSpacing = !1),
    (gt._fonts = {}),
    (gt._newlines = [10, 13]),
    (gt._breakingSpaces = [
      9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287,
      12288,
    ]);
  const xp = [
      'serif',
      'sans-serif',
      'monospace',
      'cursive',
      'fantasy',
      'system-ui',
    ],
    Ci = class {
      constructor(e) {
        (this.styleID = 0), this.reset(), wn(this, e, e);
      }
      clone() {
        const e = {};
        return wn(e, this, Ci.defaultStyle), new Ci(e);
      }
      reset() {
        wn(this, Ci.defaultStyle, Ci.defaultStyle);
      }
      get align() {
        return this._align;
      }
      set align(e) {
        this._align !== e && ((this._align = e), this.styleID++);
      }
      get breakWords() {
        return this._breakWords;
      }
      set breakWords(e) {
        this._breakWords !== e && ((this._breakWords = e), this.styleID++);
      }
      get dropShadow() {
        return this._dropShadow;
      }
      set dropShadow(e) {
        this._dropShadow !== e && ((this._dropShadow = e), this.styleID++);
      }
      get dropShadowAlpha() {
        return this._dropShadowAlpha;
      }
      set dropShadowAlpha(e) {
        this._dropShadowAlpha !== e &&
          ((this._dropShadowAlpha = e), this.styleID++);
      }
      get dropShadowAngle() {
        return this._dropShadowAngle;
      }
      set dropShadowAngle(e) {
        this._dropShadowAngle !== e &&
          ((this._dropShadowAngle = e), this.styleID++);
      }
      get dropShadowBlur() {
        return this._dropShadowBlur;
      }
      set dropShadowBlur(e) {
        this._dropShadowBlur !== e &&
          ((this._dropShadowBlur = e), this.styleID++);
      }
      get dropShadowColor() {
        return this._dropShadowColor;
      }
      set dropShadowColor(e) {
        const t = En(e);
        this._dropShadowColor !== t &&
          ((this._dropShadowColor = t), this.styleID++);
      }
      get dropShadowDistance() {
        return this._dropShadowDistance;
      }
      set dropShadowDistance(e) {
        this._dropShadowDistance !== e &&
          ((this._dropShadowDistance = e), this.styleID++);
      }
      get fill() {
        return this._fill;
      }
      set fill(e) {
        const t = En(e);
        this._fill !== t && ((this._fill = t), this.styleID++);
      }
      get fillGradientType() {
        return this._fillGradientType;
      }
      set fillGradientType(e) {
        this._fillGradientType !== e &&
          ((this._fillGradientType = e), this.styleID++);
      }
      get fillGradientStops() {
        return this._fillGradientStops;
      }
      set fillGradientStops(e) {
        Tp(this._fillGradientStops, e) ||
          ((this._fillGradientStops = e), this.styleID++);
      }
      get fontFamily() {
        return this._fontFamily;
      }
      set fontFamily(e) {
        this.fontFamily !== e && ((this._fontFamily = e), this.styleID++);
      }
      get fontSize() {
        return this._fontSize;
      }
      set fontSize(e) {
        this._fontSize !== e && ((this._fontSize = e), this.styleID++);
      }
      get fontStyle() {
        return this._fontStyle;
      }
      set fontStyle(e) {
        this._fontStyle !== e && ((this._fontStyle = e), this.styleID++);
      }
      get fontVariant() {
        return this._fontVariant;
      }
      set fontVariant(e) {
        this._fontVariant !== e && ((this._fontVariant = e), this.styleID++);
      }
      get fontWeight() {
        return this._fontWeight;
      }
      set fontWeight(e) {
        this._fontWeight !== e && ((this._fontWeight = e), this.styleID++);
      }
      get letterSpacing() {
        return this._letterSpacing;
      }
      set letterSpacing(e) {
        this._letterSpacing !== e &&
          ((this._letterSpacing = e), this.styleID++);
      }
      get lineHeight() {
        return this._lineHeight;
      }
      set lineHeight(e) {
        this._lineHeight !== e && ((this._lineHeight = e), this.styleID++);
      }
      get leading() {
        return this._leading;
      }
      set leading(e) {
        this._leading !== e && ((this._leading = e), this.styleID++);
      }
      get lineJoin() {
        return this._lineJoin;
      }
      set lineJoin(e) {
        this._lineJoin !== e && ((this._lineJoin = e), this.styleID++);
      }
      get miterLimit() {
        return this._miterLimit;
      }
      set miterLimit(e) {
        this._miterLimit !== e && ((this._miterLimit = e), this.styleID++);
      }
      get padding() {
        return this._padding;
      }
      set padding(e) {
        this._padding !== e && ((this._padding = e), this.styleID++);
      }
      get stroke() {
        return this._stroke;
      }
      set stroke(e) {
        const t = En(e);
        this._stroke !== t && ((this._stroke = t), this.styleID++);
      }
      get strokeThickness() {
        return this._strokeThickness;
      }
      set strokeThickness(e) {
        this._strokeThickness !== e &&
          ((this._strokeThickness = e), this.styleID++);
      }
      get textBaseline() {
        return this._textBaseline;
      }
      set textBaseline(e) {
        this._textBaseline !== e && ((this._textBaseline = e), this.styleID++);
      }
      get trim() {
        return this._trim;
      }
      set trim(e) {
        this._trim !== e && ((this._trim = e), this.styleID++);
      }
      get whiteSpace() {
        return this._whiteSpace;
      }
      set whiteSpace(e) {
        this._whiteSpace !== e && ((this._whiteSpace = e), this.styleID++);
      }
      get wordWrap() {
        return this._wordWrap;
      }
      set wordWrap(e) {
        this._wordWrap !== e && ((this._wordWrap = e), this.styleID++);
      }
      get wordWrapWidth() {
        return this._wordWrapWidth;
      }
      set wordWrapWidth(e) {
        this._wordWrapWidth !== e &&
          ((this._wordWrapWidth = e), this.styleID++);
      }
      toFontString() {
        const e =
          typeof this.fontSize == 'number'
            ? `${this.fontSize}px`
            : this.fontSize;
        let t = this.fontFamily;
        Array.isArray(this.fontFamily) || (t = this.fontFamily.split(','));
        for (let i = t.length - 1; i >= 0; i--) {
          let s = t[i].trim();
          !/([\"\'])[^\'\"]+\1/.test(s) && !xp.includes(s) && (s = `"${s}"`),
            (t[i] = s);
        }
        return `${this.fontStyle} ${this.fontVariant} ${
          this.fontWeight
        } ${e} ${t.join(',')}`;
      }
    };
  let ye = Ci;
  ye.defaultStyle = {
    align: 'left',
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: 'black',
    dropShadowDistance: 5,
    fill: 'black',
    fillGradientType: Ri.LINEAR_VERTICAL,
    fillGradientStops: [],
    fontFamily: 'Arial',
    fontSize: 26,
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'normal',
    leading: 0,
    letterSpacing: 0,
    lineHeight: 0,
    lineJoin: 'miter',
    miterLimit: 10,
    padding: 0,
    stroke: 'black',
    strokeThickness: 0,
    textBaseline: 'alphabetic',
    trim: !1,
    whiteSpace: 'pre',
    wordWrap: !1,
    wordWrapWidth: 100,
  };
  function ih(e) {
    return typeof e == 'number'
      ? Ks(e)
      : (typeof e == 'string' &&
          e.startsWith('0x') &&
          (e = e.replace('0x', '#')),
        e);
  }
  function En(e) {
    if (Array.isArray(e)) {
      for (let t = 0; t < e.length; ++t) e[t] = ih(e[t]);
      return e;
    } else return ih(e);
  }
  function Tp(e, t) {
    if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length)
      return !1;
    for (let i = 0; i < e.length; ++i) if (e[i] !== t[i]) return !1;
    return !0;
  }
  function wn(e, t, i) {
    for (const s in i)
      Array.isArray(t[s]) ? (e[s] = t[s].slice()) : (e[s] = t[s]);
  }
  const bp = { texture: !0, children: !1, baseTexture: !0 },
    Sn = class extends pe {
      constructor(e, t, i) {
        var n;
        let s = !1;
        i || ((i = B.ADAPTER.createCanvas()), (s = !0)),
          (i.width = 3),
          (i.height = 3);
        const r = D.from(i);
        (r.orig = new W()),
          (r.trim = new W()),
          super(r),
          (this._ownCanvas = s),
          (this.canvas = i),
          (this.context = i.getContext('2d', { willReadFrequently: !0 })),
          (this._resolution =
            (n = Sn.defaultResolution) != null ? n : B.RESOLUTION),
          (this._autoResolution = Sn.defaultAutoResolution),
          (this._text = null),
          (this._style = null),
          (this._styleListener = null),
          (this._font = ''),
          (this.text = e),
          (this.style = t),
          (this.localStyleID = -1);
      }
      static get experimentalLetterSpacing() {
        return gt.experimentalLetterSpacing;
      }
      static set experimentalLetterSpacing(e) {
        $(
          '7.1.0',
          'Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing'
        ),
          (gt.experimentalLetterSpacing = e);
      }
      updateText(e) {
        const t = this._style;
        if (
          (this.localStyleID !== t.styleID &&
            ((this.dirty = !0), (this.localStyleID = t.styleID)),
          !this.dirty && e)
        )
          return;
        this._font = this._style.toFontString();
        const i = this.context,
          s = gt.measureText(
            this._text || ' ',
            this._style,
            this._style.wordWrap,
            this.canvas
          ),
          r = s.width,
          n = s.height,
          o = s.lines,
          a = s.lineHeight,
          h = s.lineWidths,
          l = s.maxLineWidth,
          c = s.fontProperties;
        (this.canvas.width = Math.ceil(
          Math.ceil(Math.max(1, r) + t.padding * 2) * this._resolution
        )),
          (this.canvas.height = Math.ceil(
            Math.ceil(Math.max(1, n) + t.padding * 2) * this._resolution
          )),
          i.scale(this._resolution, this._resolution),
          i.clearRect(0, 0, this.canvas.width, this.canvas.height),
          (i.font = this._font),
          (i.lineWidth = t.strokeThickness),
          (i.textBaseline = t.textBaseline),
          (i.lineJoin = t.lineJoin),
          (i.miterLimit = t.miterLimit);
        let u, d;
        const f = t.dropShadow ? 2 : 1;
        for (let p = 0; p < f; ++p) {
          const g = t.dropShadow && p === 0,
            _ = g ? Math.ceil(Math.max(1, n) + t.padding * 2) : 0,
            v = _ * this._resolution;
          if (g) {
            (i.fillStyle = 'black'), (i.strokeStyle = 'black');
            const y = t.dropShadowColor,
              x = Te(typeof y == 'number' ? y : Xi(y)),
              A = t.dropShadowBlur * this._resolution,
              M = t.dropShadowDistance * this._resolution;
            (i.shadowColor = `rgba(${x[0] * 255},${x[1] * 255},${x[2] * 255},${
              t.dropShadowAlpha
            })`),
              (i.shadowBlur = A),
              (i.shadowOffsetX = Math.cos(t.dropShadowAngle) * M),
              (i.shadowOffsetY = Math.sin(t.dropShadowAngle) * M + v);
          } else
            (i.fillStyle = this._generateFillStyle(t, o, s)),
              (i.strokeStyle = t.stroke),
              (i.shadowColor = 'black'),
              (i.shadowBlur = 0),
              (i.shadowOffsetX = 0),
              (i.shadowOffsetY = 0);
          let T = (a - c.fontSize) / 2;
          a - c.fontSize < 0 && (T = 0);
          for (let y = 0; y < o.length; y++)
            (u = t.strokeThickness / 2),
              (d = t.strokeThickness / 2 + y * a + c.ascent + T),
              t.align === 'right'
                ? (u += l - h[y])
                : t.align === 'center' && (u += (l - h[y]) / 2),
              t.stroke &&
                t.strokeThickness &&
                this.drawLetterSpacing(
                  o[y],
                  u + t.padding,
                  d + t.padding - _,
                  !0
                ),
              t.fill &&
                this.drawLetterSpacing(o[y], u + t.padding, d + t.padding - _);
        }
        this.updateTexture();
      }
      drawLetterSpacing(e, t, i, s = !1) {
        const n = this._style.letterSpacing;
        let o = !1;
        if (
          (gt.experimentalLetterSpacingSupported &&
            (gt.experimentalLetterSpacing
              ? ((this.context.letterSpacing = `${n}px`),
                (this.context.textLetterSpacing = `${n}px`),
                (o = !0))
              : ((this.context.letterSpacing = '0px'),
                (this.context.textLetterSpacing = '0px'))),
          n === 0 || o)
        ) {
          s ? this.context.strokeText(e, t, i) : this.context.fillText(e, t, i);
          return;
        }
        let a = t;
        const h = gt.graphemeSegmenter(e);
        let l = this.context.measureText(e).width,
          c = 0;
        for (let u = 0; u < h.length; ++u) {
          const d = h[u];
          s ? this.context.strokeText(d, a, i) : this.context.fillText(d, a, i);
          let f = '';
          for (let p = u + 1; p < h.length; ++p) f += h[p];
          (c = this.context.measureText(f).width), (a += l - c + n), (l = c);
        }
      }
      updateTexture() {
        const e = this.canvas;
        if (this._style.trim) {
          const n = uo(e);
          n.data &&
            ((e.width = n.width),
            (e.height = n.height),
            this.context.putImageData(n.data, 0, 0));
        }
        const t = this._texture,
          i = this._style,
          s = i.trim ? 0 : i.padding,
          r = t.baseTexture;
        (t.trim.width = t._frame.width = e.width / this._resolution),
          (t.trim.height = t._frame.height = e.height / this._resolution),
          (t.trim.x = -s),
          (t.trim.y = -s),
          (t.orig.width = t._frame.width - s * 2),
          (t.orig.height = t._frame.height - s * 2),
          this._onTextureUpdate(),
          r.setRealSize(e.width, e.height, this._resolution),
          t.updateUvs(),
          (this.dirty = !1);
      }
      _render(e) {
        this._autoResolution &&
          this._resolution !== e.resolution &&
          ((this._resolution = e.resolution), (this.dirty = !0)),
          this.updateText(!0),
          super._render(e);
      }
      updateTransform() {
        this.updateText(!0), super.updateTransform();
      }
      getBounds(e, t) {
        return (
          this.updateText(!0),
          this._textureID === -1 && (e = !1),
          super.getBounds(e, t)
        );
      }
      getLocalBounds(e) {
        return this.updateText(!0), super.getLocalBounds.call(this, e);
      }
      _calculateBounds() {
        this.calculateVertices(), this._bounds.addQuad(this.vertexData);
      }
      _generateFillStyle(e, t, i) {
        const s = e.fill;
        if (Array.isArray(s)) {
          if (s.length === 1) return s[0];
        } else return s;
        let r;
        const n = e.dropShadow ? e.dropShadowDistance : 0,
          o = e.padding || 0,
          a = this.canvas.width / this._resolution - n - o * 2,
          h = this.canvas.height / this._resolution - n - o * 2,
          l = s.slice(),
          c = e.fillGradientStops.slice();
        if (!c.length) {
          const u = l.length + 1;
          for (let d = 1; d < u; ++d) c.push(d / u);
        }
        if (
          (l.unshift(s[0]),
          c.unshift(0),
          l.push(s[s.length - 1]),
          c.push(1),
          e.fillGradientType === Ri.LINEAR_VERTICAL)
        ) {
          r = this.context.createLinearGradient(a / 2, o, a / 2, h + o);
          const u = i.fontProperties.fontSize + e.strokeThickness;
          for (let d = 0; d < t.length; d++) {
            const f = i.lineHeight * (d - 1) + u,
              p = i.lineHeight * d;
            let g = p;
            d > 0 && f > p && (g = (p + f) / 2);
            const _ = p + u,
              v = i.lineHeight * (d + 1);
            let T = _;
            d + 1 < t.length && v < _ && (T = (_ + v) / 2);
            const y = (T - g) / h;
            for (let x = 0; x < l.length; x++) {
              let A = 0;
              typeof c[x] == 'number' ? (A = c[x]) : (A = x / l.length);
              let M = Math.min(1, Math.max(0, g / h + A * y));
              (M = Number(M.toFixed(5))), r.addColorStop(M, l[x]);
            }
          }
        } else {
          r = this.context.createLinearGradient(o, h / 2, a + o, h / 2);
          const u = l.length + 1;
          let d = 1;
          for (let f = 0; f < l.length; f++) {
            let p;
            typeof c[f] == 'number' ? (p = c[f]) : (p = d / u),
              r.addColorStop(p, l[f]),
              d++;
          }
        }
        return r;
      }
      destroy(e) {
        typeof e == 'boolean' && (e = { children: e }),
          (e = Object.assign({}, bp, e)),
          super.destroy(e),
          this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
          (this.context = null),
          (this.canvas = null),
          (this._style = null);
      }
      get width() {
        return (
          this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
        );
      }
      set width(e) {
        this.updateText(!0);
        const t = Ee(this.scale.x) || 1;
        (this.scale.x = (t * e) / this._texture.orig.width), (this._width = e);
      }
      get height() {
        return (
          this.updateText(!0),
          Math.abs(this.scale.y) * this._texture.orig.height
        );
      }
      set height(e) {
        this.updateText(!0);
        const t = Ee(this.scale.y) || 1;
        (this.scale.y = (t * e) / this._texture.orig.height),
          (this._height = e);
      }
      get style() {
        return this._style;
      }
      set style(e) {
        (e = e || {}),
          e instanceof ye ? (this._style = e) : (this._style = new ye(e)),
          (this.localStyleID = -1),
          (this.dirty = !0);
      }
      get text() {
        return this._text;
      }
      set text(e) {
        (e = String(e == null ? '' : e)),
          this._text !== e && ((this._text = e), (this.dirty = !0));
      }
      get resolution() {
        return this._resolution;
      }
      set resolution(e) {
        (this._autoResolution = !1),
          this._resolution !== e && ((this._resolution = e), (this.dirty = !0));
      }
    };
  let Is = Sn;
  Is.defaultAutoResolution = !0;
  class sh {
    constructor(t) {
      (this.maxItemsPerFrame = t), (this.itemsLeft = 0);
    }
    beginFrame() {
      this.itemsLeft = this.maxItemsPerFrame;
    }
    allowedToUpload() {
      return this.itemsLeft-- > 0;
    }
  }
  function Ep(e, t) {
    var s;
    let i = !1;
    if ((s = e == null ? void 0 : e._textures) != null && s.length) {
      for (let r = 0; r < e._textures.length; r++)
        if (e._textures[r] instanceof D) {
          const n = e._textures[r].baseTexture;
          t.includes(n) || (t.push(n), (i = !0));
        }
    }
    return i;
  }
  function wp(e, t) {
    if (e.baseTexture instanceof V) {
      const i = e.baseTexture;
      return t.includes(i) || t.push(i), !0;
    }
    return !1;
  }
  function Sp(e, t) {
    if (e._texture && e._texture instanceof D) {
      const i = e._texture.baseTexture;
      return t.includes(i) || t.push(i), !0;
    }
    return !1;
  }
  function Ap(e, t) {
    return t instanceof Is ? (t.updateText(!0), !0) : !1;
  }
  function Rp(e, t) {
    if (t instanceof ye) {
      const i = t.toFontString();
      return gt.measureFont(i), !0;
    }
    return !1;
  }
  function Cp(e, t) {
    if (e instanceof Is) {
      t.includes(e.style) || t.push(e.style), t.includes(e) || t.push(e);
      const i = e._texture.baseTexture;
      return t.includes(i) || t.push(i), !0;
    }
    return !1;
  }
  function Ip(e, t) {
    return e instanceof ye ? (t.includes(e) || t.push(e), !0) : !1;
  }
  const rh = class {
    constructor(e) {
      (this.limiter = new sh(rh.uploadsPerFrame)),
        (this.renderer = e),
        (this.uploadHookHelper = null),
        (this.queue = []),
        (this.addHooks = []),
        (this.uploadHooks = []),
        (this.completes = []),
        (this.ticking = !1),
        (this.delayedTick = () => {
          !this.queue || this.prepareItems();
        }),
        this.registerFindHook(Cp),
        this.registerFindHook(Ip),
        this.registerFindHook(Ep),
        this.registerFindHook(wp),
        this.registerFindHook(Sp),
        this.registerUploadHook(Ap),
        this.registerUploadHook(Rp);
    }
    upload(e) {
      return new Promise((t) => {
        e && this.add(e),
          this.queue.length
            ? (this.completes.push(t),
              this.ticking ||
                ((this.ticking = !0),
                ut.system.addOnce(this.tick, this, fe.UTILITY)))
            : t();
      });
    }
    tick() {
      setTimeout(this.delayedTick, 0);
    }
    prepareItems() {
      for (
        this.limiter.beginFrame();
        this.queue.length && this.limiter.allowedToUpload();

      ) {
        const e = this.queue[0];
        let t = !1;
        if (e && !e._destroyed) {
          for (let i = 0, s = this.uploadHooks.length; i < s; i++)
            if (this.uploadHooks[i](this.uploadHookHelper, e)) {
              this.queue.shift(), (t = !0);
              break;
            }
        }
        t || this.queue.shift();
      }
      if (this.queue.length) ut.system.addOnce(this.tick, this, fe.UTILITY);
      else {
        this.ticking = !1;
        const e = this.completes.slice(0);
        this.completes.length = 0;
        for (let t = 0, i = e.length; t < i; t++) e[t]();
      }
    }
    registerFindHook(e) {
      return e && this.addHooks.push(e), this;
    }
    registerUploadHook(e) {
      return e && this.uploadHooks.push(e), this;
    }
    add(e) {
      for (
        let t = 0, i = this.addHooks.length;
        t < i && !this.addHooks[t](e, this.queue);
        t++
      );
      if (e instanceof St)
        for (let t = e.children.length - 1; t >= 0; t--)
          this.add(e.children[t]);
      return this;
    }
    destroy() {
      this.ticking && ut.system.remove(this.tick, this),
        (this.ticking = !1),
        (this.addHooks = null),
        (this.uploadHooks = null),
        (this.renderer = null),
        (this.completes = null),
        (this.queue = null),
        (this.limiter = null),
        (this.uploadHookHelper = null);
    }
  };
  let Ii = rh;
  (Ii.uploadsPerFrame = 4),
    Object.defineProperties(B, {
      UPLOADS_PER_FRAME: {
        get() {
          return Ii.uploadsPerFrame;
        },
        set(e) {
          $(
            '7.1.0',
            'settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame'
          ),
            (Ii.uploadsPerFrame = e);
        },
      },
    });
  function nh(e, t) {
    return t instanceof V
      ? (t._glTextures[e.CONTEXT_UID] || e.texture.bind(t), !0)
      : !1;
  }
  function Pp(e, t) {
    if (!(t instanceof Si)) return !1;
    const { geometry: i } = t;
    t.finishPoly(), i.updateBatches();
    const { batches: s } = i;
    for (let r = 0; r < s.length; r++) {
      const { texture: n } = s[r].style;
      n && nh(e, n.baseTexture);
    }
    return i.batchable || e.geometry.bind(i, t._resolveDirectShader(e)), !0;
  }
  function Mp(e, t) {
    return e instanceof Si ? (t.push(e), !0) : !1;
  }
  class An extends Ii {
    constructor(t) {
      super(t),
        (this.uploadHookHelper = this.renderer),
        this.registerFindHook(Mp),
        this.registerUploadHook(nh),
        this.registerUploadHook(Pp);
    }
  }
  (An.extension = { name: 'prepare', type: P.RendererSystem }), U.add(An);
  class Bp {
    constructor(t) {
      (this.maxMilliseconds = t), (this.frameStart = 0);
    }
    beginFrame() {
      this.frameStart = Date.now();
    }
    allowedToUpload() {
      return Date.now() - this.frameStart < this.maxMilliseconds;
    }
  }
  class Ps extends pe {
    constructor(t, i = !0) {
      super(t[0] instanceof D ? t[0] : t[0].texture),
        (this._textures = null),
        (this._durations = null),
        (this._autoUpdate = i),
        (this._isConnectedToTicker = !1),
        (this.animationSpeed = 1),
        (this.loop = !0),
        (this.updateAnchor = !1),
        (this.onComplete = null),
        (this.onFrameChange = null),
        (this.onLoop = null),
        (this._currentTime = 0),
        (this._playing = !1),
        (this._previousFrame = null),
        (this.textures = t);
    }
    stop() {
      !this._playing ||
        ((this._playing = !1),
        this._autoUpdate &&
          this._isConnectedToTicker &&
          (ut.shared.remove(this.update, this),
          (this._isConnectedToTicker = !1)));
    }
    play() {
      this._playing ||
        ((this._playing = !0),
        this._autoUpdate &&
          !this._isConnectedToTicker &&
          (ut.shared.add(this.update, this, fe.HIGH),
          (this._isConnectedToTicker = !0)));
    }
    gotoAndStop(t) {
      this.stop(), (this.currentFrame = t);
    }
    gotoAndPlay(t) {
      (this.currentFrame = t), this.play();
    }
    update(t) {
      if (!this._playing) return;
      const i = this.animationSpeed * t,
        s = this.currentFrame;
      if (this._durations !== null) {
        let r = (this._currentTime % 1) * this._durations[this.currentFrame];
        for (r += (i / 60) * 1e3; r < 0; )
          this._currentTime--, (r += this._durations[this.currentFrame]);
        const n = Math.sign(this.animationSpeed * t);
        for (
          this._currentTime = Math.floor(this._currentTime);
          r >= this._durations[this.currentFrame];

        )
          (r -= this._durations[this.currentFrame] * n),
            (this._currentTime += n);
        this._currentTime += r / this._durations[this.currentFrame];
      } else this._currentTime += i;
      this._currentTime < 0 && !this.loop
        ? (this.gotoAndStop(0), this.onComplete && this.onComplete())
        : this._currentTime >= this._textures.length && !this.loop
        ? (this.gotoAndStop(this._textures.length - 1),
          this.onComplete && this.onComplete())
        : s !== this.currentFrame &&
          (this.loop &&
            this.onLoop &&
            ((this.animationSpeed > 0 && this.currentFrame < s) ||
              (this.animationSpeed < 0 && this.currentFrame > s)) &&
            this.onLoop(),
          this.updateTexture());
    }
    updateTexture() {
      const t = this.currentFrame;
      this._previousFrame !== t &&
        ((this._previousFrame = t),
        (this._texture = this._textures[t]),
        (this._textureID = -1),
        (this._textureTrimmedID = -1),
        (this._cachedTint = 16777215),
        (this.uvs = this._texture._uvs.uvsFloat32),
        this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor),
        this.onFrameChange && this.onFrameChange(this.currentFrame));
    }
    destroy(t) {
      this.stop(),
        super.destroy(t),
        (this.onComplete = null),
        (this.onFrameChange = null),
        (this.onLoop = null);
    }
    static fromFrames(t) {
      const i = [];
      for (let s = 0; s < t.length; ++s) i.push(D.from(t[s]));
      return new Ps(i);
    }
    static fromImages(t) {
      const i = [];
      for (let s = 0; s < t.length; ++s) i.push(D.from(t[s]));
      return new Ps(i);
    }
    get totalFrames() {
      return this._textures.length;
    }
    get textures() {
      return this._textures;
    }
    set textures(t) {
      if (t[0] instanceof D) (this._textures = t), (this._durations = null);
      else {
        (this._textures = []), (this._durations = []);
        for (let i = 0; i < t.length; i++)
          this._textures.push(t[i].texture), this._durations.push(t[i].time);
      }
      (this._previousFrame = null), this.gotoAndStop(0), this.updateTexture();
    }
    get currentFrame() {
      let t = Math.floor(this._currentTime) % this._textures.length;
      return t < 0 && (t += this._textures.length), t;
    }
    set currentFrame(t) {
      if (t < 0 || t > this.totalFrames - 1)
        throw new Error(
          `[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`
        );
      const i = this.currentFrame;
      (this._currentTime = t), i !== this.currentFrame && this.updateTexture();
    }
    get playing() {
      return this._playing;
    }
    get autoUpdate() {
      return this._autoUpdate;
    }
    set autoUpdate(t) {
      t !== this._autoUpdate &&
        ((this._autoUpdate = t),
        !this._autoUpdate && this._isConnectedToTicker
          ? (ut.shared.remove(this.update, this),
            (this._isConnectedToTicker = !1))
          : this._autoUpdate &&
            !this._isConnectedToTicker &&
            this._playing &&
            (ut.shared.add(this.update, this),
            (this._isConnectedToTicker = !0)));
    }
  }
  const Pi = new j();
  class Rn extends pe {
    constructor(t, i = 100, s = 100) {
      super(t),
        (this.tileTransform = new ai()),
        (this._width = i),
        (this._height = s),
        (this.uvMatrix = this.texture.uvMatrix || new hs(t)),
        (this.pluginName = 'tilingSprite'),
        (this.uvRespectAnchor = !1);
    }
    get clampMargin() {
      return this.uvMatrix.clampMargin;
    }
    set clampMargin(t) {
      (this.uvMatrix.clampMargin = t), this.uvMatrix.update(!0);
    }
    get tileScale() {
      return this.tileTransform.scale;
    }
    set tileScale(t) {
      this.tileTransform.scale.copyFrom(t);
    }
    get tilePosition() {
      return this.tileTransform.position;
    }
    set tilePosition(t) {
      this.tileTransform.position.copyFrom(t);
    }
    _onTextureUpdate() {
      this.uvMatrix && (this.uvMatrix.texture = this._texture),
        (this._cachedTint = 16777215);
    }
    _render(t) {
      const i = this._texture;
      !i ||
        !i.valid ||
        (this.tileTransform.updateLocalTransform(),
        this.uvMatrix.update(),
        t.batch.setObjectRenderer(t.plugins[this.pluginName]),
        t.plugins[this.pluginName].render(this));
    }
    _calculateBounds() {
      const t = this._width * -this._anchor._x,
        i = this._height * -this._anchor._y,
        s = this._width * (1 - this._anchor._x),
        r = this._height * (1 - this._anchor._y);
      this._bounds.addFrame(this.transform, t, i, s, r);
    }
    getLocalBounds(t) {
      return this.children.length === 0
        ? ((this._bounds.minX = this._width * -this._anchor._x),
          (this._bounds.minY = this._height * -this._anchor._y),
          (this._bounds.maxX = this._width * (1 - this._anchor._x)),
          (this._bounds.maxY = this._height * (1 - this._anchor._y)),
          t ||
            (this._localBoundsRect || (this._localBoundsRect = new W()),
            (t = this._localBoundsRect)),
          this._bounds.getRectangle(t))
        : super.getLocalBounds.call(this, t);
    }
    containsPoint(t) {
      this.worldTransform.applyInverse(t, Pi);
      const i = this._width,
        s = this._height,
        r = -i * this.anchor._x;
      if (Pi.x >= r && Pi.x < r + i) {
        const n = -s * this.anchor._y;
        if (Pi.y >= n && Pi.y < n + s) return !0;
      }
      return !1;
    }
    destroy(t) {
      super.destroy(t), (this.tileTransform = null), (this.uvMatrix = null);
    }
    static from(t, i) {
      const s = t instanceof D ? t : D.from(t, i);
      return new Rn(s, i.width, i.height);
    }
    get width() {
      return this._width;
    }
    set width(t) {
      this._width = t;
    }
    get height() {
      return this._height;
    }
    set height(t) {
      this._height = t;
    }
  }
  var Dp = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,
    Fp = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
    Np = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,
    oh = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
    Op = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
  const Ms = new J();
  class Cn extends li {
    constructor(t) {
      super(t),
        t.runners.contextChange.add(this),
        (this.quad = new br()),
        (this.state = te.for2d());
    }
    contextChange() {
      const t = this.renderer,
        i = { globals: t.globalUniforms };
      (this.simpleShader = jt.from(oh, Op, i)),
        (this.shader =
          t.context.webGLVersion > 1 ? jt.from(Fp, Dp, i) : jt.from(oh, Np, i));
    }
    render(t) {
      const i = this.renderer,
        s = this.quad;
      let r = s.vertices;
      (r[0] = r[6] = t._width * -t.anchor.x),
        (r[1] = r[3] = t._height * -t.anchor.y),
        (r[2] = r[4] = t._width * (1 - t.anchor.x)),
        (r[5] = r[7] = t._height * (1 - t.anchor.y));
      const n = t.uvRespectAnchor ? t.anchor.x : 0,
        o = t.uvRespectAnchor ? t.anchor.y : 0;
      (r = s.uvs),
        (r[0] = r[6] = -n),
        (r[1] = r[3] = -o),
        (r[2] = r[4] = 1 - n),
        (r[5] = r[7] = 1 - o),
        s.invalidate();
      const a = t._texture,
        h = a.baseTexture,
        l = h.alphaMode > 0,
        c = t.tileTransform.localTransform,
        u = t.uvMatrix;
      let d =
        h.isPowerOfTwo &&
        a.frame.width === h.width &&
        a.frame.height === h.height;
      d &&
        (h._glTextures[i.CONTEXT_UID]
          ? (d = h.wrapMode !== Qt.CLAMP)
          : h.wrapMode === Qt.CLAMP && (h.wrapMode = Qt.REPEAT));
      const f = d ? this.simpleShader : this.shader,
        p = a.width,
        g = a.height,
        _ = t._width,
        v = t._height;
      Ms.set(
        (c.a * p) / _,
        (c.b * p) / v,
        (c.c * g) / _,
        (c.d * g) / v,
        c.tx / _,
        c.ty / v
      ),
        Ms.invert(),
        d
          ? Ms.prepend(u.mapCoord)
          : ((f.uniforms.uMapCoord = u.mapCoord.toArray(!0)),
            (f.uniforms.uClampFrame = u.uClampFrame),
            (f.uniforms.uClampOffset = u.uClampOffset)),
        (f.uniforms.uTransform = Ms.toArray(!0)),
        (f.uniforms.uColor = Js(t.tint, t.worldAlpha, f.uniforms.uColor, l)),
        (f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0)),
        (f.uniforms.uSampler = a),
        i.shader.bind(f),
        i.geometry.bind(s),
        (this.state.blendMode = Qs(t.blendMode, l)),
        i.state.set(this.state),
        i.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
    }
  }
  (Cn.extension = { name: 'tilingSprite', type: P.RendererPlugin }), U.add(Cn);
  const Mi = class {
    constructor(e, t, i = null) {
      (this.linkedSheets = []),
        (this._texture = e instanceof D ? e : null),
        (this.baseTexture = e instanceof V ? e : this._texture.baseTexture),
        (this.textures = {}),
        (this.animations = {}),
        (this.data = t);
      const s = this.baseTexture.resource;
      (this.resolution = this._updateResolution(i || (s ? s.url : null))),
        (this._frames = this.data.frames),
        (this._frameKeys = Object.keys(this._frames)),
        (this._batchIndex = 0),
        (this._callback = null);
    }
    _updateResolution(e = null) {
      const { scale: t } = this.data.meta;
      let i = oe(e, null);
      return (
        i === null && (i = parseFloat(t != null ? t : '1')),
        i !== 1 && this.baseTexture.setResolution(i),
        i
      );
    }
    parse() {
      return new Promise((e) => {
        (this._callback = e),
          (this._batchIndex = 0),
          this._frameKeys.length <= Mi.BATCH_SIZE
            ? (this._processFrames(0),
              this._processAnimations(),
              this._parseComplete())
            : this._nextBatch();
      });
    }
    _processFrames(e) {
      let t = e;
      const i = Mi.BATCH_SIZE;
      for (; t - e < i && t < this._frameKeys.length; ) {
        const s = this._frameKeys[t],
          r = this._frames[s],
          n = r.frame;
        if (n) {
          let o = null,
            a = null;
          const h = r.trimmed !== !1 && r.sourceSize ? r.sourceSize : r.frame,
            l = new W(
              0,
              0,
              Math.floor(h.w) / this.resolution,
              Math.floor(h.h) / this.resolution
            );
          r.rotated
            ? (o = new W(
                Math.floor(n.x) / this.resolution,
                Math.floor(n.y) / this.resolution,
                Math.floor(n.h) / this.resolution,
                Math.floor(n.w) / this.resolution
              ))
            : (o = new W(
                Math.floor(n.x) / this.resolution,
                Math.floor(n.y) / this.resolution,
                Math.floor(n.w) / this.resolution,
                Math.floor(n.h) / this.resolution
              )),
            r.trimmed !== !1 &&
              r.spriteSourceSize &&
              (a = new W(
                Math.floor(r.spriteSourceSize.x) / this.resolution,
                Math.floor(r.spriteSourceSize.y) / this.resolution,
                Math.floor(n.w) / this.resolution,
                Math.floor(n.h) / this.resolution
              )),
            (this.textures[s] = new D(
              this.baseTexture,
              o,
              l,
              a,
              r.rotated ? 2 : 0,
              r.anchor
            )),
            D.addToCache(this.textures[s], s);
        }
        t++;
      }
    }
    _processAnimations() {
      const e = this.data.animations || {};
      for (const t in e) {
        this.animations[t] = [];
        for (let i = 0; i < e[t].length; i++) {
          const s = e[t][i];
          this.animations[t].push(this.textures[s]);
        }
      }
    }
    _parseComplete() {
      const e = this._callback;
      (this._callback = null),
        (this._batchIndex = 0),
        e.call(this, this.textures);
    }
    _nextBatch() {
      this._processFrames(this._batchIndex * Mi.BATCH_SIZE),
        this._batchIndex++,
        setTimeout(() => {
          this._batchIndex * Mi.BATCH_SIZE < this._frameKeys.length
            ? this._nextBatch()
            : (this._processAnimations(), this._parseComplete());
        }, 0);
    }
    destroy(e = !1) {
      var t;
      for (const i in this.textures) this.textures[i].destroy();
      (this._frames = null),
        (this._frameKeys = null),
        (this.data = null),
        (this.textures = null),
        e &&
          ((t = this._texture) == null || t.destroy(),
          this.baseTexture.destroy()),
        (this._texture = null),
        (this.baseTexture = null),
        (this.linkedSheets = []);
    }
  };
  let Bs = Mi;
  Bs.BATCH_SIZE = 1e3;
  const Lp = ['jpg', 'png', 'jpeg', 'avif', 'webp'];
  function ah(e, t, i) {
    const s = {};
    if (
      (e.forEach((r) => {
        s[r] = t;
      }),
      Object.keys(t.textures).forEach((r) => {
        s[r] = t.textures[r];
      }),
      !i)
    ) {
      const r = pt.dirname(e[0]);
      t.linkedSheets.forEach((n, o) => {
        const a = ah([`${r}/${t.data.meta.related_multi_packs[o]}`], n, !0);
        Object.assign(s, a);
      });
    }
    return s;
  }
  const hh = {
    extension: P.Asset,
    cache: {
      test: (e) => e instanceof Bs,
      getCacheableAssets: (e, t) => ah(e, t, !1),
    },
    resolver: {
      test: (e) => {
        const i = e.split('?')[0].split('.'),
          s = i.pop(),
          r = i.pop();
        return s === 'json' && Lp.includes(r);
      },
      parse: (e) => {
        var i, s;
        const t = e.split('.');
        return {
          resolution: parseFloat(
            (s = (i = B.RETINA_PREFIX.exec(e)) == null ? void 0 : i[1]) != null
              ? s
              : '1'
          ),
          format: t[t.length - 2],
          src: e,
        };
      },
    },
    loader: {
      extension: { type: P.LoadParser, priority: $t.Normal },
      async testParse(e, t) {
        return pt.extname(t.src).toLowerCase() === '.json' && !!e.frames;
      },
      async parse(e, t, i) {
        var l, c;
        let s = pt.dirname(t.src);
        s && s.lastIndexOf('/') !== s.length - 1 && (s += '/');
        let r = s + e.meta.image;
        r = ys(r, t.src);
        const o = (await i.load([r]))[r],
          a = new Bs(o.baseTexture, e, t.src);
        await a.parse();
        const h =
          (l = e == null ? void 0 : e.meta) == null
            ? void 0
            : l.related_multi_packs;
        if (Array.isArray(h)) {
          const u = [];
          for (const f of h) {
            if (typeof f != 'string') continue;
            let p = s + f;
            ((c = t.data) != null && c.ignoreMultiPack) ||
              ((p = ys(p, t.src)),
              u.push(i.load({ src: p, data: { ignoreMultiPack: !0 } })));
          }
          const d = await Promise.all(u);
          (a.linkedSheets = d),
            d.forEach((f) => {
              f.linkedSheets = [a].concat(
                a.linkedSheets.filter((p) => p !== f)
              );
            });
        }
        return a;
      },
      unload(e) {
        e.destroy(!0);
      },
    },
  };
  U.add(hh);
  class Bi {
    constructor() {
      (this.info = []),
        (this.common = []),
        (this.page = []),
        (this.char = []),
        (this.kerning = []),
        (this.distanceField = []);
    }
  }
  class Di {
    static test(t) {
      return typeof t == 'string' && t.startsWith('info face=');
    }
    static parse(t) {
      const i = t.match(/^[a-z]+\s+.+$/gm),
        s = {
          info: [],
          common: [],
          page: [],
          char: [],
          chars: [],
          kerning: [],
          kernings: [],
          distanceField: [],
        };
      for (const n in i) {
        const o = i[n].match(/^[a-z]+/gm)[0],
          a = i[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
          h = {};
        for (const l in a) {
          const c = a[l].split('='),
            u = c[0],
            d = c[1].replace(/"/gm, ''),
            f = parseFloat(d),
            p = isNaN(f) ? d : f;
          h[u] = p;
        }
        s[o].push(h);
      }
      const r = new Bi();
      return (
        s.info.forEach((n) =>
          r.info.push({ face: n.face, size: parseInt(n.size, 10) })
        ),
        s.common.forEach((n) =>
          r.common.push({ lineHeight: parseInt(n.lineHeight, 10) })
        ),
        s.page.forEach((n) =>
          r.page.push({ id: parseInt(n.id, 10), file: n.file })
        ),
        s.char.forEach((n) =>
          r.char.push({
            id: parseInt(n.id, 10),
            page: parseInt(n.page, 10),
            x: parseInt(n.x, 10),
            y: parseInt(n.y, 10),
            width: parseInt(n.width, 10),
            height: parseInt(n.height, 10),
            xoffset: parseInt(n.xoffset, 10),
            yoffset: parseInt(n.yoffset, 10),
            xadvance: parseInt(n.xadvance, 10),
          })
        ),
        s.kerning.forEach((n) =>
          r.kerning.push({
            first: parseInt(n.first, 10),
            second: parseInt(n.second, 10),
            amount: parseInt(n.amount, 10),
          })
        ),
        s.distanceField.forEach((n) =>
          r.distanceField.push({
            distanceRange: parseInt(n.distanceRange, 10),
            fieldType: n.fieldType,
          })
        ),
        r
      );
    }
  }
  class Ds {
    static test(t) {
      const i = t;
      return (
        'getElementsByTagName' in i &&
        i.getElementsByTagName('page').length &&
        i.getElementsByTagName('info')[0].getAttribute('face') !== null
      );
    }
    static parse(t) {
      const i = new Bi(),
        s = t.getElementsByTagName('info'),
        r = t.getElementsByTagName('common'),
        n = t.getElementsByTagName('page'),
        o = t.getElementsByTagName('char'),
        a = t.getElementsByTagName('kerning'),
        h = t.getElementsByTagName('distanceField');
      for (let l = 0; l < s.length; l++)
        i.info.push({
          face: s[l].getAttribute('face'),
          size: parseInt(s[l].getAttribute('size'), 10),
        });
      for (let l = 0; l < r.length; l++)
        i.common.push({
          lineHeight: parseInt(r[l].getAttribute('lineHeight'), 10),
        });
      for (let l = 0; l < n.length; l++)
        i.page.push({
          id: parseInt(n[l].getAttribute('id'), 10) || 0,
          file: n[l].getAttribute('file'),
        });
      for (let l = 0; l < o.length; l++) {
        const c = o[l];
        i.char.push({
          id: parseInt(c.getAttribute('id'), 10),
          page: parseInt(c.getAttribute('page'), 10) || 0,
          x: parseInt(c.getAttribute('x'), 10),
          y: parseInt(c.getAttribute('y'), 10),
          width: parseInt(c.getAttribute('width'), 10),
          height: parseInt(c.getAttribute('height'), 10),
          xoffset: parseInt(c.getAttribute('xoffset'), 10),
          yoffset: parseInt(c.getAttribute('yoffset'), 10),
          xadvance: parseInt(c.getAttribute('xadvance'), 10),
        });
      }
      for (let l = 0; l < a.length; l++)
        i.kerning.push({
          first: parseInt(a[l].getAttribute('first'), 10),
          second: parseInt(a[l].getAttribute('second'), 10),
          amount: parseInt(a[l].getAttribute('amount'), 10),
        });
      for (let l = 0; l < h.length; l++)
        i.distanceField.push({
          fieldType: h[l].getAttribute('fieldType'),
          distanceRange: parseInt(h[l].getAttribute('distanceRange'), 10),
        });
      return i;
    }
  }
  class Fs {
    static test(t) {
      return typeof t == 'string' && t.includes('<font>')
        ? Ds.test(B.ADAPTER.parseXML(t))
        : !1;
    }
    static parse(t) {
      return Ds.parse(B.ADAPTER.parseXML(t));
    }
  }
  const In = [Di, Ds, Fs];
  function lh(e) {
    for (let t = 0; t < In.length; t++) if (In[t].test(e)) return In[t];
    return null;
  }
  function Up(e, t, i, s, r, n) {
    const o = i.fill;
    if (Array.isArray(o)) {
      if (o.length === 1) return o[0];
    } else return o;
    let a;
    const h = i.dropShadow ? i.dropShadowDistance : 0,
      l = i.padding || 0,
      c = e.width / s - h - l * 2,
      u = e.height / s - h - l * 2,
      d = o.slice(),
      f = i.fillGradientStops.slice();
    if (!f.length) {
      const p = d.length + 1;
      for (let g = 1; g < p; ++g) f.push(g / p);
    }
    if (
      (d.unshift(o[0]),
      f.unshift(0),
      d.push(o[o.length - 1]),
      f.push(1),
      i.fillGradientType === Ri.LINEAR_VERTICAL)
    ) {
      a = t.createLinearGradient(c / 2, l, c / 2, u + l);
      let p = 0;
      const _ = (n.fontProperties.fontSize + i.strokeThickness) / u;
      for (let v = 0; v < r.length; v++) {
        const T = n.lineHeight * v;
        for (let y = 0; y < d.length; y++) {
          let x = 0;
          typeof f[y] == 'number' ? (x = f[y]) : (x = y / d.length);
          const A = T / u + x * _;
          let M = Math.max(p, A);
          (M = Math.min(M, 1)), a.addColorStop(M, d[y]), (p = M);
        }
      }
    } else {
      a = t.createLinearGradient(l, u / 2, c + l, u / 2);
      const p = d.length + 1;
      let g = 1;
      for (let _ = 0; _ < d.length; _++) {
        let v;
        typeof f[_] == 'number' ? (v = f[_]) : (v = g / p),
          a.addColorStop(v, d[_]),
          g++;
      }
    }
    return a;
  }
  function kp(e, t, i, s, r, n, o) {
    const a = i.text,
      h = i.fontProperties;
    t.translate(s, r), t.scale(n, n);
    const l = o.strokeThickness / 2,
      c = -(o.strokeThickness / 2);
    if (
      ((t.font = o.toFontString()),
      (t.lineWidth = o.strokeThickness),
      (t.textBaseline = o.textBaseline),
      (t.lineJoin = o.lineJoin),
      (t.miterLimit = o.miterLimit),
      (t.fillStyle = Up(e, t, o, n, [a], i)),
      (t.strokeStyle = o.stroke),
      o.dropShadow)
    ) {
      const u = o.dropShadowColor,
        d = Te(typeof u == 'number' ? u : Xi(u)),
        f = o.dropShadowBlur * n,
        p = o.dropShadowDistance * n;
      (t.shadowColor = `rgba(${d[0] * 255},${d[1] * 255},${d[2] * 255},${
        o.dropShadowAlpha
      })`),
        (t.shadowBlur = f),
        (t.shadowOffsetX = Math.cos(o.dropShadowAngle) * p),
        (t.shadowOffsetY = Math.sin(o.dropShadowAngle) * p);
    } else
      (t.shadowColor = 'black'),
        (t.shadowBlur = 0),
        (t.shadowOffsetX = 0),
        (t.shadowOffsetY = 0);
    o.stroke &&
      o.strokeThickness &&
      t.strokeText(a, l, c + i.lineHeight - h.descent),
      o.fill && t.fillText(a, l, c + i.lineHeight - h.descent),
      t.setTransform(1, 0, 0, 1, 0, 0),
      (t.fillStyle = 'rgba(0, 0, 0, 0)');
  }
  function Ns(e) {
    return e.codePointAt ? e.codePointAt(0) : e.charCodeAt(0);
  }
  function ch(e) {
    return Array.from ? Array.from(e) : e.split('');
  }
  function Gp(e) {
    typeof e == 'string' && (e = [e]);
    const t = [];
    for (let i = 0, s = e.length; i < s; i++) {
      const r = e[i];
      if (Array.isArray(r)) {
        if (r.length !== 2)
          throw new Error(
            `[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`
          );
        const n = r[0].charCodeAt(0),
          o = r[1].charCodeAt(0);
        if (o < n) throw new Error('[BitmapFont]: Invalid character range.');
        for (let a = n, h = o; a <= h; a++) t.push(String.fromCharCode(a));
      } else t.push(...ch(r));
    }
    if (t.length === 0)
      throw new Error('[BitmapFont]: Empty set when resolving characters.');
    return t;
  }
  const Kt = class {
    constructor(e, t, i) {
      var l, c;
      const [s] = e.info,
        [r] = e.common,
        [n] = e.page,
        [o] = e.distanceField,
        a = oe(n.file),
        h = {};
      (this._ownsTextures = i),
        (this.font = s.face),
        (this.size = s.size),
        (this.lineHeight = r.lineHeight / a),
        (this.chars = {}),
        (this.pageTextures = h);
      for (let u = 0; u < e.page.length; u++) {
        const { id: d, file: f } = e.page[u];
        (h[d] = t instanceof Array ? t[u] : t[f]),
          (o == null ? void 0 : o.fieldType) &&
            o.fieldType !== 'none' &&
            ((h[d].baseTexture.alphaMode = Bt.NO_PREMULTIPLIED_ALPHA),
            (h[d].baseTexture.mipmap = Ht.OFF));
      }
      for (let u = 0; u < e.char.length; u++) {
        const { id: d, page: f } = e.char[u];
        let {
          x: p,
          y: g,
          width: _,
          height: v,
          xoffset: T,
          yoffset: y,
          xadvance: x,
        } = e.char[u];
        (p /= a), (g /= a), (_ /= a), (v /= a), (T /= a), (y /= a), (x /= a);
        const A = new W(p + h[f].frame.x / a, g + h[f].frame.y / a, _, v);
        this.chars[d] = {
          xOffset: T,
          yOffset: y,
          xAdvance: x,
          kerning: {},
          texture: new D(h[f].baseTexture, A),
          page: f,
        };
      }
      for (let u = 0; u < e.kerning.length; u++) {
        let { first: d, second: f, amount: p } = e.kerning[u];
        (d /= a),
          (f /= a),
          (p /= a),
          this.chars[f] && (this.chars[f].kerning[d] = p);
      }
      (this.distanceFieldRange = o == null ? void 0 : o.distanceRange),
        (this.distanceFieldType =
          (c =
            (l = o == null ? void 0 : o.fieldType) == null
              ? void 0
              : l.toLowerCase()) != null
            ? c
            : 'none');
    }
    destroy() {
      for (const e in this.chars)
        this.chars[e].texture.destroy(), (this.chars[e].texture = null);
      for (const e in this.pageTextures)
        this._ownsTextures && this.pageTextures[e].destroy(!0),
          (this.pageTextures[e] = null);
      (this.chars = null), (this.pageTextures = null);
    }
    static install(e, t, i) {
      let s;
      if (e instanceof Bi) s = e;
      else {
        const n = lh(e);
        if (!n) throw new Error('Unrecognized data format for font.');
        s = n.parse(e);
      }
      t instanceof D && (t = [t]);
      const r = new Kt(s, t, i);
      return (Kt.available[r.font] = r), r;
    }
    static uninstall(e) {
      const t = Kt.available[e];
      if (!t) throw new Error(`No font found named '${e}'`);
      t.destroy(), delete Kt.available[e];
    }
    static from(e, t, i) {
      if (!e) throw new Error('[BitmapFont] Property `name` is required.');
      const M = Object.assign({}, Kt.defaultOptions, i),
        {
          chars: s,
          padding: r,
          resolution: n,
          textureWidth: o,
          textureHeight: a,
        } = M,
        h = Mn(M, [
          'chars',
          'padding',
          'resolution',
          'textureWidth',
          'textureHeight',
        ]),
        l = Gp(s),
        c = t instanceof ye ? t : new ye(t),
        u = o,
        d = new Bi();
      (d.info[0] = { face: c.fontFamily, size: c.fontSize }),
        (d.common[0] = { lineHeight: c.fontSize });
      let f = 0,
        p = 0,
        g,
        _,
        v,
        T = 0;
      const y = [],
        x = [];
      for (let R = 0; R < l.length; R++) {
        g ||
          ((g = B.ADAPTER.createCanvas()),
          (g.width = o),
          (g.height = a),
          (_ = g.getContext('2d')),
          (v = new V(g, re({ resolution: n }, h))),
          y.push(v),
          x.push(new D(v)),
          d.page.push({ id: x.length - 1, file: '' }));
        const E = l[R],
          L = gt.measureText(E, c, !1, g),
          H = L.width,
          I = Math.ceil(L.height),
          N = Math.ceil((c.fontStyle === 'italic' ? 2 : 1) * H);
        if (p >= a - I * n) {
          if (p === 0)
            throw new Error(
              `[BitmapFont] textureHeight ${a}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${E}')`
            );
          --R, (g = null), (_ = null), (v = null), (p = 0), (f = 0), (T = 0);
          continue;
        }
        if (((T = Math.max(I + L.fontProperties.descent, T)), N * n + f >= u)) {
          if (f === 0)
            throw new Error(
              `[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${E}')`
            );
          --R, (p += T * n), (p = Math.ceil(p)), (f = 0), (T = 0);
          continue;
        }
        kp(g, _, L, f, p, n, c);
        const w = Ns(L.text);
        d.char.push({
          id: w,
          page: x.length - 1,
          x: f / n,
          y: p / n,
          width: N,
          height: I,
          xoffset: 0,
          yoffset: 0,
          xadvance:
            H -
            (c.dropShadow ? c.dropShadowDistance : 0) -
            (c.stroke ? c.strokeThickness : 0),
        }),
          (f += (N + 2 * r) * n),
          (f = Math.ceil(f));
      }
      for (let R = 0, E = l.length; R < E; R++) {
        const L = l[R];
        for (let H = 0; H < E; H++) {
          const I = l[H],
            N = _.measureText(L).width,
            w = _.measureText(I).width,
            z = _.measureText(L + I).width - (N + w);
          z && d.kerning.push({ first: Ns(L), second: Ns(I), amount: z });
        }
      }
      const A = new Kt(d, x, !0);
      return (
        Kt.available[e] !== void 0 && Kt.uninstall(e), (Kt.available[e] = A), A
      );
    }
  };
  let Et = Kt;
  (Et.ALPHA = [['a', 'z'], ['A', 'Z'], ' ']),
    (Et.NUMERIC = [['0', '9']]),
    (Et.ALPHANUMERIC = [['a', 'z'], ['A', 'Z'], ['0', '9'], ' ']),
    (Et.ASCII = [[' ', '~']]),
    (Et.defaultOptions = {
      resolution: 1,
      textureWidth: 512,
      textureHeight: 512,
      padding: 4,
      chars: Kt.ALPHANUMERIC,
    }),
    (Et.available = {});
  var Hp = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r
\r
}\r
`,
    Xp = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
  const uh = [],
    dh = [],
    fh = [],
    ph = class extends St {
      constructor(e, t = {}) {
        super(), (this._tint = 16777215);
        const {
          align: i,
          tint: s,
          maxWidth: r,
          letterSpacing: n,
          fontName: o,
          fontSize: a,
        } = Object.assign({}, ph.styleDefaults, t);
        if (!Et.available[o]) throw new Error(`Missing BitmapFont "${o}"`);
        (this._activePagesMeshData = []),
          (this._textWidth = 0),
          (this._textHeight = 0),
          (this._align = i),
          (this._tint = s),
          (this._font = void 0),
          (this._fontName = o),
          (this._fontSize = a),
          (this.text = e),
          (this._maxWidth = r),
          (this._maxLineHeight = 0),
          (this._letterSpacing = n),
          (this._anchor = new he(
            () => {
              this.dirty = !0;
            },
            this,
            0,
            0
          )),
          (this._roundPixels = B.ROUND_PIXELS),
          (this.dirty = !0),
          (this._resolution = B.RESOLUTION),
          (this._autoResolution = !0),
          (this._textureCache = {});
      }
      updateText() {
        var H;
        const e = Et.available[this._fontName],
          t = this.fontSize,
          i = t / e.size,
          s = new j(),
          r = [],
          n = [],
          o = [],
          a =
            this._text.replace(
              /(?:\r\n|\r)/g,
              `
`
            ) || ' ',
          h = ch(a),
          l = (this._maxWidth * e.size) / t,
          c = e.distanceFieldType === 'none' ? uh : dh;
        let u = null,
          d = 0,
          f = 0,
          p = 0,
          g = -1,
          _ = 0,
          v = 0,
          T = 0,
          y = 0;
        for (let I = 0; I < h.length; I++) {
          const N = h[I],
            w = Ns(N);
          if (
            (/(?:\s)/.test(N) && ((g = I), (_ = d), y++),
            N === '\r' ||
              N ===
                `
`)
          ) {
            n.push(d),
              o.push(-1),
              (f = Math.max(f, d)),
              ++p,
              ++v,
              (s.x = 0),
              (s.y += e.lineHeight),
              (u = null),
              (y = 0);
            continue;
          }
          const b = e.chars[w];
          if (!b) continue;
          u && b.kerning[u] && (s.x += b.kerning[u]);
          const z = fh.pop() || {
            texture: D.EMPTY,
            line: 0,
            charCode: 0,
            prevSpaces: 0,
            position: new j(),
          };
          (z.texture = b.texture),
            (z.line = p),
            (z.charCode = w),
            (z.position.x = Math.round(
              s.x + b.xOffset + this._letterSpacing / 2
            )),
            (z.position.y = Math.round(s.y + b.yOffset)),
            (z.prevSpaces = y),
            r.push(z),
            (d =
              z.position.x +
              Math.max(b.xAdvance - b.xOffset, b.texture.orig.width)),
            (s.x += b.xAdvance + this._letterSpacing),
            (T = Math.max(T, b.yOffset + b.texture.height)),
            (u = w),
            g !== -1 &&
              l > 0 &&
              s.x > l &&
              (++v,
              be(r, 1 + g - v, 1 + I - g),
              (I = g),
              (g = -1),
              n.push(_),
              o.push(r.length > 0 ? r[r.length - 1].prevSpaces : 0),
              (f = Math.max(f, _)),
              p++,
              (s.x = 0),
              (s.y += e.lineHeight),
              (u = null),
              (y = 0));
        }
        const x = h[h.length - 1];
        x !== '\r' &&
          x !==
            `
` &&
          (/(?:\s)/.test(x) && (d = _),
          n.push(d),
          (f = Math.max(f, d)),
          o.push(-1));
        const A = [];
        for (let I = 0; I <= p; I++) {
          let N = 0;
          this._align === 'right'
            ? (N = f - n[I])
            : this._align === 'center'
            ? (N = (f - n[I]) / 2)
            : this._align === 'justify' &&
              (N = o[I] < 0 ? 0 : (f - n[I]) / o[I]),
            A.push(N);
        }
        const M = r.length,
          R = {},
          E = [],
          L = this._activePagesMeshData;
        c.push(...L);
        for (let I = 0; I < M; I++) {
          const N = r[I].texture,
            w = N.baseTexture.uid;
          if (!R[w]) {
            let b = c.pop();
            if (!b) {
              const Y = new Ai();
              let F, K;
              e.distanceFieldType === 'none'
                ? ((F = new Ze(D.EMPTY)), (K = G.NORMAL))
                : ((F = new Ze(D.EMPTY, {
                    program: Ft.from(Xp, Hp),
                    uniforms: { uFWidth: 0 },
                  })),
                  (K = G.NORMAL_NPM));
              const at = new Ne(Y, F);
              (at.blendMode = K),
                (b = {
                  index: 0,
                  indexCount: 0,
                  vertexCount: 0,
                  uvsCount: 0,
                  total: 0,
                  mesh: at,
                  vertices: null,
                  uvs: null,
                  indices: null,
                });
            }
            (b.index = 0),
              (b.indexCount = 0),
              (b.vertexCount = 0),
              (b.uvsCount = 0),
              (b.total = 0);
            const { _textureCache: z } = this;
            (z[w] = z[w] || new D(N.baseTexture)),
              (b.mesh.texture = z[w]),
              (b.mesh.tint = this._tint),
              E.push(b),
              (R[w] = b);
          }
          R[w].total++;
        }
        for (let I = 0; I < L.length; I++)
          E.includes(L[I]) || this.removeChild(L[I].mesh);
        for (let I = 0; I < E.length; I++)
          E[I].mesh.parent !== this && this.addChild(E[I].mesh);
        this._activePagesMeshData = E;
        for (const I in R) {
          const N = R[I],
            w = N.total;
          if (
            !(((H = N.indices) == null ? void 0 : H.length) > 6 * w) ||
            N.vertices.length < Ne.BATCHABLE_SIZE * 2
          )
            (N.vertices = new Float32Array(4 * 2 * w)),
              (N.uvs = new Float32Array(4 * 2 * w)),
              (N.indices = new Uint16Array(6 * w));
          else {
            const b = N.total,
              z = N.vertices;
            for (let Y = b * 4 * 2; Y < z.length; Y++) z[Y] = 0;
          }
          N.mesh.size = 6 * w;
        }
        for (let I = 0; I < M; I++) {
          const N = r[I];
          let w =
            N.position.x +
            A[N.line] * (this._align === 'justify' ? N.prevSpaces : 1);
          this._roundPixels && (w = Math.round(w));
          const b = w * i,
            z = N.position.y * i,
            Y = N.texture,
            F = R[Y.baseTexture.uid],
            K = Y.frame,
            at = Y._uvs,
            S = F.index++;
          (F.indices[S * 6 + 0] = 0 + S * 4),
            (F.indices[S * 6 + 1] = 1 + S * 4),
            (F.indices[S * 6 + 2] = 2 + S * 4),
            (F.indices[S * 6 + 3] = 0 + S * 4),
            (F.indices[S * 6 + 4] = 2 + S * 4),
            (F.indices[S * 6 + 5] = 3 + S * 4),
            (F.vertices[S * 8 + 0] = b),
            (F.vertices[S * 8 + 1] = z),
            (F.vertices[S * 8 + 2] = b + K.width * i),
            (F.vertices[S * 8 + 3] = z),
            (F.vertices[S * 8 + 4] = b + K.width * i),
            (F.vertices[S * 8 + 5] = z + K.height * i),
            (F.vertices[S * 8 + 6] = b),
            (F.vertices[S * 8 + 7] = z + K.height * i),
            (F.uvs[S * 8 + 0] = at.x0),
            (F.uvs[S * 8 + 1] = at.y0),
            (F.uvs[S * 8 + 2] = at.x1),
            (F.uvs[S * 8 + 3] = at.y1),
            (F.uvs[S * 8 + 4] = at.x2),
            (F.uvs[S * 8 + 5] = at.y2),
            (F.uvs[S * 8 + 6] = at.x3),
            (F.uvs[S * 8 + 7] = at.y3);
        }
        (this._textWidth = f * i),
          (this._textHeight = (s.y + e.lineHeight) * i);
        for (const I in R) {
          const N = R[I];
          if (this.anchor.x !== 0 || this.anchor.y !== 0) {
            let Y = 0;
            const F = this._textWidth * this.anchor.x,
              K = this._textHeight * this.anchor.y;
            for (let at = 0; at < N.total; at++)
              (N.vertices[Y++] -= F),
                (N.vertices[Y++] -= K),
                (N.vertices[Y++] -= F),
                (N.vertices[Y++] -= K),
                (N.vertices[Y++] -= F),
                (N.vertices[Y++] -= K),
                (N.vertices[Y++] -= F),
                (N.vertices[Y++] -= K);
          }
          this._maxLineHeight = T * i;
          const w = N.mesh.geometry.getBuffer('aVertexPosition'),
            b = N.mesh.geometry.getBuffer('aTextureCoord'),
            z = N.mesh.geometry.getIndex();
          (w.data = N.vertices),
            (b.data = N.uvs),
            (z.data = N.indices),
            w.update(),
            b.update(),
            z.update();
        }
        for (let I = 0; I < r.length; I++) fh.push(r[I]);
        (this._font = e), (this.dirty = !1);
      }
      updateTransform() {
        this.validate(), this.containerUpdateTransform();
      }
      _render(e) {
        this._autoResolution &&
          this._resolution !== e.resolution &&
          ((this._resolution = e.resolution), (this.dirty = !0));
        const {
          distanceFieldRange: t,
          distanceFieldType: i,
          size: s,
        } = Et.available[this._fontName];
        if (i !== 'none') {
          const { a: r, b: n, c: o, d: a } = this.worldTransform,
            h = Math.sqrt(r * r + n * n),
            l = Math.sqrt(o * o + a * a),
            c = (Math.abs(h) + Math.abs(l)) / 2,
            u = this.fontSize / s,
            d = e._view.resolution;
          for (const f of this._activePagesMeshData)
            f.mesh.shader.uniforms.uFWidth = c * t * u * d;
        }
        super._render(e);
      }
      getLocalBounds() {
        return this.validate(), super.getLocalBounds();
      }
      validate() {
        const e = Et.available[this._fontName];
        if (!e) throw new Error(`Missing BitmapFont "${this._fontName}"`);
        this._font !== e && (this.dirty = !0), this.dirty && this.updateText();
      }
      get tint() {
        return this._tint;
      }
      set tint(e) {
        if (this._tint !== e) {
          this._tint = e;
          for (let t = 0; t < this._activePagesMeshData.length; t++)
            this._activePagesMeshData[t].mesh.tint = e;
        }
      }
      get align() {
        return this._align;
      }
      set align(e) {
        this._align !== e && ((this._align = e), (this.dirty = !0));
      }
      get fontName() {
        return this._fontName;
      }
      set fontName(e) {
        if (!Et.available[e]) throw new Error(`Missing BitmapFont "${e}"`);
        this._fontName !== e && ((this._fontName = e), (this.dirty = !0));
      }
      get fontSize() {
        var e;
        return (e = this._fontSize) != null
          ? e
          : Et.available[this._fontName].size;
      }
      set fontSize(e) {
        this._fontSize !== e && ((this._fontSize = e), (this.dirty = !0));
      }
      get anchor() {
        return this._anchor;
      }
      set anchor(e) {
        typeof e == 'number' ? this._anchor.set(e) : this._anchor.copyFrom(e);
      }
      get text() {
        return this._text;
      }
      set text(e) {
        (e = String(e == null ? '' : e)),
          this._text !== e && ((this._text = e), (this.dirty = !0));
      }
      get maxWidth() {
        return this._maxWidth;
      }
      set maxWidth(e) {
        this._maxWidth !== e && ((this._maxWidth = e), (this.dirty = !0));
      }
      get maxLineHeight() {
        return this.validate(), this._maxLineHeight;
      }
      get textWidth() {
        return this.validate(), this._textWidth;
      }
      get letterSpacing() {
        return this._letterSpacing;
      }
      set letterSpacing(e) {
        this._letterSpacing !== e &&
          ((this._letterSpacing = e), (this.dirty = !0));
      }
      get roundPixels() {
        return this._roundPixels;
      }
      set roundPixels(e) {
        e !== this._roundPixels && ((this._roundPixels = e), (this.dirty = !0));
      }
      get textHeight() {
        return this.validate(), this._textHeight;
      }
      get resolution() {
        return this._resolution;
      }
      set resolution(e) {
        (this._autoResolution = !1),
          this._resolution !== e && ((this._resolution = e), (this.dirty = !0));
      }
      destroy(e) {
        const { _textureCache: t } = this,
          s =
            Et.available[this._fontName].distanceFieldType === 'none' ? uh : dh;
        s.push(...this._activePagesMeshData);
        for (const r of this._activePagesMeshData) this.removeChild(r.mesh);
        (this._activePagesMeshData = []),
          s
            .filter((r) => t[r.mesh.texture.baseTexture.uid])
            .forEach((r) => {
              r.mesh.texture = D.EMPTY;
            });
        for (const r in t) t[r].destroy(), delete t[r];
        (this._font = null), (this._textureCache = null), super.destroy(e);
      }
    };
  let mh = ph;
  mh.styleDefaults = {
    align: 'left',
    tint: 16777215,
    maxWidth: 0,
    letterSpacing: 0,
  };
  const Vp = ['.xml', '.fnt'],
    _h = {
      extension: { type: P.LoadParser, priority: $t.Normal },
      test(e) {
        return Vp.includes(pt.extname(e).toLowerCase());
      },
      async testParse(e) {
        return Di.test(e) || Fs.test(e);
      },
      async parse(e, t, i) {
        const s = Di.test(e) ? Di.parse(e) : Fs.parse(e),
          { src: r } = t,
          { page: n } = s,
          o = [];
        for (let l = 0; l < n.length; ++l) {
          const c = n[l].file;
          let u = pt.join(pt.dirname(r), c);
          (u = ys(u, r)), o.push(u);
        }
        const a = await i.load(o),
          h = o.map((l) => a[l]);
        return Et.install(s, h, !0);
      },
      async load(e, t) {
        return (await B.ADAPTER.fetch(e)).text();
      },
      unload(e) {
        e.destroy();
      },
    };
  return (
    U.add(_h),
    (m.ALPHA_MODES = Bt),
    (m.AbstractMultiResource = qr),
    (m.AccessibilityManager = sn),
    (m.AlphaFilter = sa),
    (m.AnimatedSprite = Ps),
    (m.Application = nn),
    (m.ArrayResource = Jo),
    (m.Assets = vi),
    (m.AssetsClass = wa),
    (m.Attribute = ni),
    (m.BLEND_MODES = G),
    (m.BUFFER_BITS = wt),
    (m.BUFFER_TYPE = Vt),
    (m.BackgroundSystem = mr),
    (m.BaseImageResource = le),
    (m.BasePrepare = Ii),
    (m.BaseRenderTexture = yr),
    (m.BaseTexture = V),
    (m.BatchDrawCall = qi),
    (m.BatchGeometry = dr),
    (m.BatchRenderer = Ot),
    (m.BatchShaderGenerator = Mo),
    (m.BatchSystem = _r),
    (m.BatchTextureArray = rs),
    (m.BitmapFont = Et),
    (m.BitmapFontData = Bi),
    (m.BitmapText = mh),
    (m.BlobResource = Da),
    (m.BlurFilter = ra),
    (m.BlurFilterPass = ms),
    (m.Bounds = fi),
    (m.BrowserAdapter = Dn),
    (m.Buffer = ot),
    (m.BufferResource = He),
    (m.BufferSystem = jr),
    (m.CLEAR_MODES = Xt),
    (m.COLOR_MASK_BITS = Bn),
    (m.Cache = Ye),
    (m.CanvasResource = ta),
    (m.Circle = Zi),
    (m.ColorMatrixFilter = _s),
    (m.CompressedTextureResource = me),
    (m.Container = St),
    (m.ContextSystem = gr),
    (m.CountLimiter = sh),
    (m.CubeResource = Kr),
    (m.DEG_TO_RAD = yo),
    (m.DRAW_MODES = Gt),
    (m.DisplacementFilter = na),
    (m.DisplayObject = it),
    (m.ENV = tt),
    (m.Ellipse = Qi),
    (m.EventBoundary = ha),
    (m.EventSystem = en),
    (m.ExtensionType = P),
    (m.Extract = pn),
    (m.FORMATS = C),
    (m.FORMATS_TO_COMPONENTS = La),
    (m.FXAAFilter = oa),
    (m.FederatedDisplayObject = la),
    (m.FederatedEvent = je),
    (m.FederatedMouseEvent = mi),
    (m.FederatedPointerEvent = Ut),
    (m.FederatedWheelEvent = De),
    (m.FillStyle = wi),
    (m.Filter = _t),
    (m.FilterState = No),
    (m.FilterSystem = wr),
    (m.Framebuffer = ns),
    (m.FramebufferSystem = Sr),
    (m.GC_MODES = Oi),
    (m.GLFramebuffer = Oo),
    (m.GLProgram = Vo),
    (m.GLTexture = ds),
    (m.GRAPHICS_CURVES = ap),
    (m.GenerateTextureSystem = Dr),
    (m.Geometry = ae),
    (m.GeometrySystem = Rr),
    (m.Graphics = Si),
    (m.GraphicsData = Ei),
    (m.GraphicsGeometry = vn),
    (m.IGLUniformData = Dd),
    (m.INSTALLED = $i),
    (m.INTERNAL_FORMATS = At),
    (m.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL = xi),
    (m.ImageBitmapResource = Be),
    (m.ImageResource = vr),
    (m.LINE_CAP = _e),
    (m.LINE_JOIN = kt),
    (m.LineStyle = Ss),
    (m.LoaderParserPriority = $t),
    (m.MASK_TYPES = ht),
    (m.MIPMAP_MODES = Ht),
    (m.MSAA_QUALITY = rt),
    (m.MaskData = ko),
    (m.MaskSystem = Cr),
    (m.Matrix = J),
    (m.Mesh = Ne),
    (m.MeshBatchUvs = qa),
    (m.MeshGeometry = Ai),
    (m.MeshMaterial = Ze),
    (m.MultisampleSystem = Wr),
    (m.NineSlicePlane = pp),
    (m.NoiseFilter = aa),
    (m.ObjectRenderer = li),
    (m.ObjectRendererSystem = Yr),
    (m.ObservablePoint = he),
    (m.PI_2 = oi),
    (m.PRECISION = Rt),
    (m.ParticleContainer = gp),
    (m.ParticleRenderer = bn),
    (m.PlaneGeometry = Qa),
    (m.PluginSystem = Mr),
    (m.Point = j),
    (m.Polygon = we),
    (m.Prepare = An),
    (m.Program = Ft),
    (m.ProjectionSystem = Br),
    (m.Quad = Fo),
    (m.QuadUv = br),
    (m.RAD_TO_DEG = go),
    (m.RENDERER_TYPE = ft),
    (m.Rectangle = W),
    (m.RenderTexture = ce),
    (m.RenderTexturePool = Tr),
    (m.RenderTextureSystem = Fr),
    (m.Renderer = Me),
    (m.ResizePlugin = on),
    (m.Resource = Ge),
    (m.RopeGeometry = Ja),
    (m.RoundedRectangle = Ji),
    (m.Runner = It),
    (m.SAMPLER_TYPES = Ni),
    (m.SCALE_MODES = Zt),
    (m.SHAPES = mt),
    (m.SVGResource = We),
    (m.ScissorSystem = Ir),
    (m.Shader = jt),
    (m.ShaderSystem = Nr),
    (m.SimpleMesh = mp),
    (m.SimplePlane = th),
    (m.SimpleRope = _p),
    (m.Sprite = pe),
    (m.SpriteMaskFilter = Uo),
    (m.Spritesheet = Bs),
    (m.StartupSystem = Or),
    (m.State = te),
    (m.StateSystem = Ur),
    (m.StencilSystem = Pr),
    (m.SystemManager = qo),
    (m.TARGETS = ve),
    (m.TEXT_GRADIENT = Ri),
    (m.TYPES = k),
    (m.TYPES_TO_BYTES_PER_COMPONENT = dn),
    (m.TYPES_TO_BYTES_PER_PIXEL = Ua),
    (m.TemporaryDisplayObject = ea),
    (m.Text = Is),
    (m.TextFormat = Di),
    (m.TextMetrics = gt),
    (m.TextStyle = ye),
    (m.Texture = D),
    (m.TextureGCSystem = Lt),
    (m.TextureMatrix = hs),
    (m.TextureSystem = kr),
    (m.TextureUvs = xr),
    (m.Ticker = ut),
    (m.TickerPlugin = Vr),
    (m.TilingSprite = Rn),
    (m.TilingSpriteRenderer = Cn),
    (m.TimeLimiter = Bp),
    (m.Transform = ai),
    (m.TransformFeedback = Kd),
    (m.TransformFeedbackSystem = Gr),
    (m.UPDATE_PRIORITY = fe),
    (m.UniformGroup = Nt),
    (m.VERSION = Zd),
    (m.VideoResource = ps),
    (m.ViewSystem = Hr),
    (m.ViewableBuffer = Yi),
    (m.WRAP_MODES = Qt),
    (m.XMLFormat = Ds),
    (m.XMLStringFormat = Fs),
    (m.accessibleTarget = ca),
    (m.autoDetectFormat = lh),
    (m.autoDetectRenderer = Zo),
    (m.autoDetectResource = ur),
    (m.cacheTextureArray = Sa),
    (m.checkDataUrl = an),
    (m.checkExtension = _i),
    (m.checkMaxIfStatementsInShader = mo),
    (m.convertToList = ee),
    (m.copySearchParams = ys),
    (m.createStringVariations = ma),
    (m.createTexture = yi),
    (m.createUBOElements = jo),
    (m.curves = ge),
    (m.defaultFilterVertex = zr),
    (m.defaultVertex = Qo),
    (m.detectAvif = Aa),
    (m.detectCompressedTextures = Ba),
    (m.detectDefaults = Ia),
    (m.detectWebp = Ra),
    (m.extensions = U),
    (m.filters = Jr),
    (m.generateProgram = zo),
    (m.generateUniformBufferSync = $o),
    (m.getFontFamilyName = ya),
    (m.getTestContext = wo),
    (m.getUBOData = Yo),
    (m.graphicsUtils = up),
    (m.groupD8 = et),
    (m.isMobile = zt),
    (m.isSingleItem = gi),
    (m.loadBitmapFont = _h),
    (m.loadDDS = Ga),
    (m.loadImageBitmap = ba),
    (m.loadJson = _a),
    (m.loadKTX = Ha),
    (m.loadSVG = Ea),
    (m.loadTextures = $e),
    (m.loadTxt = ga),
    (m.loadWebFont = va),
    (m.parseDDS = Na),
    (m.parseKTX = ka),
    (m.resolveCompressedTextureUrl = Xa),
    (m.resolveTextureUrl = Pa),
    (m.settings = B),
    (m.spritesheetAsset = hh),
    (m.uniformParsers = Ie),
    (m.unsafeEvalSupported = Po),
    (m.utils = id),
    Object.defineProperty(m, '__esModule', { value: !0 }),
    m
  );
})({});
//# sourceMappingURL=pixi.min.js.map

/*!
 * pixi-filters - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:53:35 UTC
 *
 * pixi-filters is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var __filters = (function (e, n, t, r, o, i, l, a) {
  'use strict';
  var s = function (e, n) {
    return (s =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, n) {
          e.__proto__ = n;
        }) ||
      function (e, n) {
        for (var t in n)
          Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
      })(e, n);
  };
  function u(e, n) {
    function t() {
      this.constructor = e;
    }
    s(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((t.prototype = n.prototype), new t()));
  }
  var f = function () {
    return (f =
      Object.assign ||
      function (e) {
        for (var n, t = arguments, r = 1, o = arguments.length; r < o; r++)
          for (var i in (n = t[r]))
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        return e;
      }).apply(this, arguments);
  };
  Object.create;
  Object.create;
  var c =
      'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}',
    m = (function (e) {
      function n(n) {
        var t =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n'
          ) || this;
        return (
          (t.gamma = 1),
          (t.saturation = 1),
          (t.contrast = 1),
          (t.brightness = 1),
          (t.red = 1),
          (t.green = 1),
          (t.blue = 1),
          (t.alpha = 1),
          Object.assign(t, n),
          t
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          (this.uniforms.gamma = Math.max(this.gamma, 1e-4)),
            (this.uniforms.saturation = this.saturation),
            (this.uniforms.contrast = this.contrast),
            (this.uniforms.brightness = this.brightness),
            (this.uniforms.red = this.red),
            (this.uniforms.green = this.green),
            (this.uniforms.blue = this.blue),
            (this.uniforms.alpha = this.alpha),
            e.applyFilter(this, n, t, r);
        }),
        n
      );
    })(n.Filter),
    p = (function (e) {
      function n(n) {
        void 0 === n && (n = 0.5);
        var t =
          e.call(
            this,
            c,
            "\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n"
          ) || this;
        return (t.threshold = n), t;
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'threshold', {
          get: function () {
            return this.uniforms.threshold;
          },
          set: function (e) {
            this.uniforms.threshold = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    d = (function (e) {
      function n(n, r, o) {
        void 0 === n && (n = 4),
          void 0 === r && (r = 3),
          void 0 === o && (o = !1);
        var i =
          e.call(
            this,
            c,
            o
              ? '\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n'
              : '\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}'
          ) || this;
        return (
          (i._kernels = []),
          (i._blur = 4),
          (i._quality = 3),
          (i.uniforms.uOffset = new Float32Array(2)),
          (i._pixelSize = new t.Point()),
          (i.pixelSize = 1),
          (i._clamp = o),
          Array.isArray(n) ? (i.kernels = n) : ((i._blur = n), (i.quality = r)),
          i
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          var o,
            i = this._pixelSize.x / n._frame.width,
            l = this._pixelSize.y / n._frame.height;
          if (1 === this._quality || 0 === this._blur)
            (o = this._kernels[0] + 0.5),
              (this.uniforms.uOffset[0] = o * i),
              (this.uniforms.uOffset[1] = o * l),
              e.applyFilter(this, n, t, r);
          else {
            for (
              var a = e.getFilterTexture(),
                s = n,
                u = a,
                f = void 0,
                c = this._quality - 1,
                m = 0;
              m < c;
              m++
            )
              (o = this._kernels[m] + 0.5),
                (this.uniforms.uOffset[0] = o * i),
                (this.uniforms.uOffset[1] = o * l),
                e.applyFilter(this, s, u, 1),
                (f = s),
                (s = u),
                (u = f);
            (o = this._kernels[c] + 0.5),
              (this.uniforms.uOffset[0] = o * i),
              (this.uniforms.uOffset[1] = o * l),
              e.applyFilter(this, s, t, r),
              e.returnFilterTexture(a);
          }
        }),
        (n.prototype._updatePadding = function () {
          this.padding = Math.ceil(
            this._kernels.reduce(function (e, n) {
              return e + n + 0.5;
            }, 0)
          );
        }),
        (n.prototype._generateKernels = function () {
          var e = this._blur,
            n = this._quality,
            t = [e];
          if (e > 0)
            for (var r = e, o = e / n, i = 1; i < n; i++) (r -= o), t.push(r);
          (this._kernels = t), this._updatePadding();
        }),
        Object.defineProperty(n.prototype, 'kernels', {
          get: function () {
            return this._kernels;
          },
          set: function (e) {
            Array.isArray(e) && e.length > 0
              ? ((this._kernels = e),
                (this._quality = e.length),
                (this._blur = Math.max.apply(Math, e)))
              : ((this._kernels = [0]), (this._quality = 1));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'clamp', {
          get: function () {
            return this._clamp;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'pixelSize', {
          get: function () {
            return this._pixelSize;
          },
          set: function (e) {
            'number' == typeof e
              ? ((this._pixelSize.x = e), (this._pixelSize.y = e))
              : Array.isArray(e)
              ? ((this._pixelSize.x = e[0]), (this._pixelSize.y = e[1]))
              : e instanceof t.Point
              ? ((this._pixelSize.x = e.x), (this._pixelSize.y = e.y))
              : ((this._pixelSize.x = 1), (this._pixelSize.y = 1));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'quality', {
          get: function () {
            return this._quality;
          },
          set: function (e) {
            (this._quality = Math.max(1, Math.round(e))),
              this._generateKernels();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'blur', {
          get: function () {
            return this._blur;
          },
          set: function (e) {
            (this._blur = e), this._generateKernels();
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    h = (function (e) {
      function n(t) {
        var o =
          e.call(
            this,
            c,
            'uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n'
          ) || this;
        (o.bloomScale = 1),
          (o.brightness = 1),
          (o._resolution = r.settings.FILTER_RESOLUTION),
          'number' == typeof t && (t = { threshold: t });
        var i = Object.assign(n.defaults, t);
        (o.bloomScale = i.bloomScale), (o.brightness = i.brightness);
        var l = i.kernels,
          a = i.blur,
          s = i.quality,
          u = i.pixelSize,
          f = i.resolution;
        return (
          (o._extractFilter = new p(i.threshold)),
          (o._extractFilter.resolution = f),
          (o._blurFilter = l ? new d(l) : new d(a, s)),
          (o.pixelSize = u),
          (o.resolution = f),
          o
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r, o) {
          var i = e.getFilterTexture();
          this._extractFilter.apply(e, n, i, 1, o);
          var l = e.getFilterTexture();
          this._blurFilter.apply(e, i, l, 1),
            (this.uniforms.bloomScale = this.bloomScale),
            (this.uniforms.brightness = this.brightness),
            (this.uniforms.bloomTexture = l),
            e.applyFilter(this, n, t, r),
            e.returnFilterTexture(l),
            e.returnFilterTexture(i);
        }),
        Object.defineProperty(n.prototype, 'resolution', {
          get: function () {
            return this._resolution;
          },
          set: function (e) {
            (this._resolution = e),
              this._extractFilter && (this._extractFilter.resolution = e),
              this._blurFilter && (this._blurFilter.resolution = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'threshold', {
          get: function () {
            return this._extractFilter.threshold;
          },
          set: function (e) {
            this._extractFilter.threshold = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'kernels', {
          get: function () {
            return this._blurFilter.kernels;
          },
          set: function (e) {
            this._blurFilter.kernels = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'blur', {
          get: function () {
            return this._blurFilter.blur;
          },
          set: function (e) {
            this._blurFilter.blur = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'quality', {
          get: function () {
            return this._blurFilter.quality;
          },
          set: function (e) {
            this._blurFilter.quality = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'pixelSize', {
          get: function () {
            return this._blurFilter.pixelSize;
          },
          set: function (e) {
            this._blurFilter.pixelSize = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.defaults = {
          threshold: 0.5,
          bloomScale: 1,
          brightness: 1,
          kernels: null,
          blur: 8,
          quality: 4,
          pixelSize: 1,
          resolution: r.settings.FILTER_RESOLUTION,
        }),
        n
      );
    })(n.Filter),
    g = (function (e) {
      function n(n) {
        void 0 === n && (n = 8);
        var t =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n'
          ) || this;
        return (t.size = n), t;
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'size', {
          get: function () {
            return this.uniforms.pixelSize;
          },
          set: function (e) {
            this.uniforms.pixelSize = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    v = (function (e) {
      function n(n) {
        var t =
          e.call(
            this,
            c,
            'precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n'
          ) || this;
        return (
          (t._thickness = 2),
          (t._angle = 0),
          (t.uniforms.lightColor = new Float32Array(3)),
          (t.uniforms.shadowColor = new Float32Array(3)),
          Object.assign(
            t,
            {
              rotation: 45,
              thickness: 2,
              lightColor: 16777215,
              lightAlpha: 0.7,
              shadowColor: 0,
              shadowAlpha: 0.7,
            },
            n
          ),
          (t.padding = 1),
          t
        );
      }
      return (
        u(n, e),
        (n.prototype._updateTransform = function () {
          (this.uniforms.transformX = this._thickness * Math.cos(this._angle)),
            (this.uniforms.transformY =
              this._thickness * Math.sin(this._angle));
        }),
        Object.defineProperty(n.prototype, 'rotation', {
          get: function () {
            return this._angle / t.DEG_TO_RAD;
          },
          set: function (e) {
            (this._angle = e * t.DEG_TO_RAD), this._updateTransform();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'thickness', {
          get: function () {
            return this._thickness;
          },
          set: function (e) {
            (this._thickness = e), this._updateTransform();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'lightColor', {
          get: function () {
            return o.rgb2hex(this.uniforms.lightColor);
          },
          set: function (e) {
            o.hex2rgb(e, this.uniforms.lightColor);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'lightAlpha', {
          get: function () {
            return this.uniforms.lightAlpha;
          },
          set: function (e) {
            this.uniforms.lightAlpha = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'shadowColor', {
          get: function () {
            return o.rgb2hex(this.uniforms.shadowColor);
          },
          set: function (e) {
            o.hex2rgb(e, this.uniforms.shadowColor);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'shadowAlpha', {
          get: function () {
            return this.uniforms.shadowAlpha;
          },
          set: function (e) {
            this.uniforms.shadowAlpha = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    y = (function (e) {
      function n(n, o, s, u) {
        void 0 === n && (n = 2),
          void 0 === o && (o = 4),
          void 0 === s && (s = r.settings.FILTER_RESOLUTION),
          void 0 === u && (u = 5);
        var f,
          c,
          m = e.call(this) || this;
        return (
          'number' == typeof n
            ? ((f = n), (c = n))
            : n instanceof t.Point
            ? ((f = n.x), (c = n.y))
            : Array.isArray(n) && ((f = n[0]), (c = n[1])),
          (m.blurXFilter = new a.BlurFilterPass(!0, f, o, s, u)),
          (m.blurYFilter = new a.BlurFilterPass(!1, c, o, s, u)),
          (m.blurYFilter.blendMode = i.BLEND_MODES.SCREEN),
          (m.defaultFilter = new l.AlphaFilter()),
          m
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          var o = e.getFilterTexture();
          this.defaultFilter.apply(e, n, t, r),
            this.blurXFilter.apply(e, n, o, 1),
            this.blurYFilter.apply(e, o, t, 0),
            e.returnFilterTexture(o);
        }),
        Object.defineProperty(n.prototype, 'blur', {
          get: function () {
            return this.blurXFilter.blur;
          },
          set: function (e) {
            this.blurXFilter.blur = this.blurYFilter.blur = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'blurX', {
          get: function () {
            return this.blurXFilter.blur;
          },
          set: function (e) {
            this.blurXFilter.blur = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'blurY', {
          get: function () {
            return this.blurYFilter.blur;
          },
          set: function (e) {
            this.blurYFilter.blur = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    b = (function (e) {
      function n(t) {
        var r =
          e.call(
            this,
            c,
            'uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n'
          ) || this;
        return (
          (r.uniforms.dimensions = new Float32Array(2)),
          Object.assign(r, n.defaults, t),
          r
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          var o = n.filterFrame,
            i = o.width,
            l = o.height;
          (this.uniforms.dimensions[0] = i),
            (this.uniforms.dimensions[1] = l),
            e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(n.prototype, 'radius', {
          get: function () {
            return this.uniforms.radius;
          },
          set: function (e) {
            this.uniforms.radius = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'strength', {
          get: function () {
            return this.uniforms.strength;
          },
          set: function (e) {
            this.uniforms.strength = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'center', {
          get: function () {
            return this.uniforms.center;
          },
          set: function (e) {
            this.uniforms.center = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.defaults = { center: [0.5, 0.5], radius: 100, strength: 1 }),
        n
      );
    })(n.Filter),
    x = (function (e) {
      function t(n, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = 1);
        var o =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    vec4 adjusted;\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n        float innerWidth = _size - 1.0;\n        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n        float zSlice1 = min(zSlice0 + 1.0, innerWidth);\n        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n        float s0 = xOffset + (zSlice0 * _sliceSize);\n        float s1 = xOffset + (zSlice1 * _sliceSize);\n        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);\n        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));\n        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));\n        float zOffset = fract(color.b * innerWidth);\n        adjusted = mix(slice0Color, slice1Color, zOffset);\n\n        color.rgb *= color.a;\n    }\n    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);\n\n}'
          ) || this;
        return (
          (o.mix = 1),
          (o._size = 0),
          (o._sliceSize = 0),
          (o._slicePixelSize = 0),
          (o._sliceInnerSize = 0),
          (o._nearest = !1),
          (o._scaleMode = null),
          (o._colorMap = null),
          (o._scaleMode = null),
          (o.nearest = t),
          (o.mix = r),
          (o.colorMap = n),
          o
        );
      }
      return (
        u(t, e),
        (t.prototype.apply = function (e, n, t, r) {
          (this.uniforms._mix = this.mix), e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(t.prototype, 'colorSize', {
          get: function () {
            return this._size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'colorMap', {
          get: function () {
            return this._colorMap;
          },
          set: function (e) {
            var t;
            e &&
              (e instanceof n.Texture || (e = n.Texture.from(e)),
              (null === (t = e) || void 0 === t ? void 0 : t.baseTexture) &&
                ((e.baseTexture.scaleMode = this._scaleMode),
                (e.baseTexture.mipmap = i.MIPMAP_MODES.OFF),
                (this._size = e.height),
                (this._sliceSize = 1 / this._size),
                (this._slicePixelSize = this._sliceSize / this._size),
                (this._sliceInnerSize =
                  this._slicePixelSize * (this._size - 1)),
                (this.uniforms._size = this._size),
                (this.uniforms._sliceSize = this._sliceSize),
                (this.uniforms._slicePixelSize = this._slicePixelSize),
                (this.uniforms._sliceInnerSize = this._sliceInnerSize),
                (this.uniforms.colorMap = e)),
              (this._colorMap = e));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'nearest', {
          get: function () {
            return this._nearest;
          },
          set: function (e) {
            (this._nearest = e),
              (this._scaleMode = e
                ? i.SCALE_MODES.NEAREST
                : i.SCALE_MODES.LINEAR);
            var n = this._colorMap;
            n &&
              n.baseTexture &&
              ((n.baseTexture._glTextures = {}),
              (n.baseTexture.scaleMode = this._scaleMode),
              (n.baseTexture.mipmap = i.MIPMAP_MODES.OFF),
              n._updateID++,
              n.baseTexture.emit('update', n.baseTexture));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.updateColorMap = function () {
          var e = this._colorMap;
          e &&
            e.baseTexture &&
            (e._updateID++,
            e.baseTexture.emit('update', e.baseTexture),
            (this.colorMap = e));
        }),
        (t.prototype.destroy = function (n) {
          void 0 === n && (n = !1),
            this._colorMap && this._colorMap.destroy(n),
            e.prototype.destroy.call(this);
        }),
        t
      );
    })(n.Filter),
    _ = (function (e) {
      function n(n, t) {
        void 0 === n && (n = 0), void 0 === t && (t = 1);
        var r =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 color;\nuniform float alpha;\n\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);\n}\n'
          ) || this;
        return (
          (r._color = 0),
          (r._alpha = 1),
          (r.uniforms.color = new Float32Array(3)),
          (r.color = n),
          (r.alpha = t),
          r
        );
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'color', {
          get: function () {
            return this._color;
          },
          set: function (e) {
            var n = this.uniforms.color;
            'number' == typeof e
              ? (o.hex2rgb(e, n), (this._color = e))
              : ((n[0] = e[0]),
                (n[1] = e[1]),
                (n[2] = e[2]),
                (this._color = o.rgb2hex(n)));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'alpha', {
          get: function () {
            return this._alpha;
          },
          set: function (e) {
            (this.uniforms.alpha = e), (this._alpha = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    C = (function (e) {
      function n(n, t, r) {
        void 0 === n && (n = 16711680),
          void 0 === t && (t = 0),
          void 0 === r && (r = 0.4);
        var o =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n'
          ) || this;
        return (
          (o._originalColor = 16711680),
          (o._newColor = 0),
          (o.uniforms.originalColor = new Float32Array(3)),
          (o.uniforms.newColor = new Float32Array(3)),
          (o.originalColor = n),
          (o.newColor = t),
          (o.epsilon = r),
          o
        );
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'originalColor', {
          get: function () {
            return this._originalColor;
          },
          set: function (e) {
            var n = this.uniforms.originalColor;
            'number' == typeof e
              ? (o.hex2rgb(e, n), (this._originalColor = e))
              : ((n[0] = e[0]),
                (n[1] = e[1]),
                (n[2] = e[2]),
                (this._originalColor = o.rgb2hex(n)));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'newColor', {
          get: function () {
            return this._newColor;
          },
          set: function (e) {
            var n = this.uniforms.newColor;
            'number' == typeof e
              ? (o.hex2rgb(e, n), (this._newColor = e))
              : ((n[0] = e[0]),
                (n[1] = e[1]),
                (n[2] = e[2]),
                (this._newColor = o.rgb2hex(n)));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'epsilon', {
          get: function () {
            return this.uniforms.epsilon;
          },
          set: function (e) {
            this.uniforms.epsilon = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    S = (function (e) {
      function n(n, t, r) {
        void 0 === t && (t = 200), void 0 === r && (r = 200);
        var o =
          e.call(
            this,
            c,
            'precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n'
          ) || this;
        return (
          (o.uniforms.texelSize = new Float32Array(2)),
          (o.uniforms.matrix = new Float32Array(9)),
          void 0 !== n && (o.matrix = n),
          (o.width = t),
          (o.height = r),
          o
        );
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'matrix', {
          get: function () {
            return this.uniforms.matrix;
          },
          set: function (e) {
            var n = this;
            e.forEach(function (e, t) {
              n.uniforms.matrix[t] = e;
            });
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'width', {
          get: function () {
            return 1 / this.uniforms.texelSize[0];
          },
          set: function (e) {
            this.uniforms.texelSize[0] = 1 / e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'height', {
          get: function () {
            return 1 / this.uniforms.texelSize[1];
          },
          set: function (e) {
            this.uniforms.texelSize[1] = 1 / e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    F = (function (e) {
      function n() {
        return (
          e.call(
            this,
            c,
            'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n'
          ) || this
        );
      }
      return u(n, e), n;
    })(n.Filter),
    z = (function (e) {
      function n(t) {
        var r =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));\n    \n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0)\n    {\n        float _c = curvature > 0. ? curvature : 1.;\n        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n        vec2 uv = dir * k;\n\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n'
          ) || this;
        return (
          (r.time = 0),
          (r.seed = 0),
          (r.uniforms.dimensions = new Float32Array(2)),
          Object.assign(r, n.defaults, t),
          r
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          var o = n.filterFrame,
            i = o.width,
            l = o.height;
          (this.uniforms.dimensions[0] = i),
            (this.uniforms.dimensions[1] = l),
            (this.uniforms.seed = this.seed),
            (this.uniforms.time = this.time),
            e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(n.prototype, 'curvature', {
          get: function () {
            return this.uniforms.curvature;
          },
          set: function (e) {
            this.uniforms.curvature = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'lineWidth', {
          get: function () {
            return this.uniforms.lineWidth;
          },
          set: function (e) {
            this.uniforms.lineWidth = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'lineContrast', {
          get: function () {
            return this.uniforms.lineContrast;
          },
          set: function (e) {
            this.uniforms.lineContrast = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'verticalLine', {
          get: function () {
            return this.uniforms.verticalLine;
          },
          set: function (e) {
            this.uniforms.verticalLine = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'noise', {
          get: function () {
            return this.uniforms.noise;
          },
          set: function (e) {
            this.uniforms.noise = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'noiseSize', {
          get: function () {
            return this.uniforms.noiseSize;
          },
          set: function (e) {
            this.uniforms.noiseSize = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'vignetting', {
          get: function () {
            return this.uniforms.vignetting;
          },
          set: function (e) {
            this.uniforms.vignetting = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'vignettingAlpha', {
          get: function () {
            return this.uniforms.vignettingAlpha;
          },
          set: function (e) {
            this.uniforms.vignettingAlpha = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'vignettingBlur', {
          get: function () {
            return this.uniforms.vignettingBlur;
          },
          set: function (e) {
            this.uniforms.vignettingBlur = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.defaults = {
          curvature: 1,
          lineWidth: 1,
          lineContrast: 0.25,
          verticalLine: !1,
          noise: 0,
          noiseSize: 1,
          seed: 0,
          vignetting: 0.3,
          vignettingAlpha: 1,
          vignettingBlur: 0.3,
          time: 0,
        }),
        n
      );
    })(n.Filter),
    O = (function (e) {
      function n(n, t) {
        void 0 === n && (n = 1), void 0 === t && (t = 5);
        var r =
          e.call(
            this,
            c,
            'precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n'
          ) || this;
        return (r.scale = n), (r.angle = t), r;
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'scale', {
          get: function () {
            return this.uniforms.scale;
          },
          set: function (e) {
            this.uniforms.scale = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'angle', {
          get: function () {
            return this.uniforms.angle;
          },
          set: function (e) {
            this.uniforms.angle = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    P = (function (e) {
      function i(o) {
        var l = e.call(this) || this;
        (l.angle = 45),
          (l._distance = 5),
          (l._resolution = r.settings.FILTER_RESOLUTION);
        var a = o ? f(f({}, i.defaults), o) : i.defaults,
          s = a.kernels,
          u = a.blur,
          m = a.quality,
          p = a.pixelSize,
          h = a.resolution;
        (l._tintFilter = new n.Filter(
          c,
          'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}'
        )),
          (l._tintFilter.uniforms.color = new Float32Array(4)),
          (l._tintFilter.uniforms.shift = new t.Point()),
          (l._tintFilter.resolution = h),
          (l._blurFilter = s ? new d(s) : new d(u, m)),
          (l.pixelSize = p),
          (l.resolution = h);
        var g = a.shadowOnly,
          v = a.rotation,
          y = a.distance,
          b = a.alpha,
          x = a.color;
        return (
          (l.shadowOnly = g),
          (l.rotation = v),
          (l.distance = y),
          (l.alpha = b),
          (l.color = x),
          l._updatePadding(),
          l
        );
      }
      return (
        u(i, e),
        (i.prototype.apply = function (e, n, t, r) {
          var o = e.getFilterTexture();
          this._tintFilter.apply(e, n, o, 1),
            this._blurFilter.apply(e, o, t, r),
            !0 !== this.shadowOnly && e.applyFilter(this, n, t, 0),
            e.returnFilterTexture(o);
        }),
        (i.prototype._updatePadding = function () {
          this.padding = this.distance + 2 * this.blur;
        }),
        (i.prototype._updateShift = function () {
          this._tintFilter.uniforms.shift.set(
            this.distance * Math.cos(this.angle),
            this.distance * Math.sin(this.angle)
          );
        }),
        Object.defineProperty(i.prototype, 'resolution', {
          get: function () {
            return this._resolution;
          },
          set: function (e) {
            (this._resolution = e),
              this._tintFilter && (this._tintFilter.resolution = e),
              this._blurFilter && (this._blurFilter.resolution = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'distance', {
          get: function () {
            return this._distance;
          },
          set: function (e) {
            (this._distance = e), this._updatePadding(), this._updateShift();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'rotation', {
          get: function () {
            return this.angle / t.DEG_TO_RAD;
          },
          set: function (e) {
            (this.angle = e * t.DEG_TO_RAD), this._updateShift();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'alpha', {
          get: function () {
            return this._tintFilter.uniforms.alpha;
          },
          set: function (e) {
            this._tintFilter.uniforms.alpha = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'color', {
          get: function () {
            return o.rgb2hex(this._tintFilter.uniforms.color);
          },
          set: function (e) {
            o.hex2rgb(e, this._tintFilter.uniforms.color);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'kernels', {
          get: function () {
            return this._blurFilter.kernels;
          },
          set: function (e) {
            this._blurFilter.kernels = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'blur', {
          get: function () {
            return this._blurFilter.blur;
          },
          set: function (e) {
            (this._blurFilter.blur = e), this._updatePadding();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'quality', {
          get: function () {
            return this._blurFilter.quality;
          },
          set: function (e) {
            this._blurFilter.quality = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'pixelSize', {
          get: function () {
            return this._blurFilter.pixelSize;
          },
          set: function (e) {
            this._blurFilter.pixelSize = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (i.defaults = {
          rotation: 45,
          distance: 5,
          color: 0,
          alpha: 0.5,
          shadowOnly: !1,
          kernels: null,
          blur: 2,
          quality: 3,
          pixelSize: 1,
          resolution: r.settings.FILTER_RESOLUTION,
        }),
        i
      );
    })(n.Filter),
    A = (function (e) {
      function n(n) {
        void 0 === n && (n = 5);
        var t =
          e.call(
            this,
            c,
            'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n'
          ) || this;
        return (t.strength = n), t;
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'strength', {
          get: function () {
            return this.uniforms.strength;
          },
          set: function (e) {
            this.uniforms.strength = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    T = (function (e) {
      function r(t) {
        var o =
          e.call(
            this,
            c,
            '// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n'
          ) || this;
        return (
          (o.offset = 100),
          (o.fillMode = r.TRANSPARENT),
          (o.average = !1),
          (o.seed = 0),
          (o.minSize = 8),
          (o.sampleSize = 512),
          (o._slices = 0),
          (o._offsets = new Float32Array(1)),
          (o._sizes = new Float32Array(1)),
          (o._direction = -1),
          (o.uniforms.dimensions = new Float32Array(2)),
          (o._canvas = document.createElement('canvas')),
          (o._canvas.width = 4),
          (o._canvas.height = o.sampleSize),
          (o.texture = n.Texture.from(o._canvas, {
            scaleMode: i.SCALE_MODES.NEAREST,
          })),
          Object.assign(o, r.defaults, t),
          o
        );
      }
      return (
        u(r, e),
        (r.prototype.apply = function (e, n, t, r) {
          var o = n.filterFrame,
            i = o.width,
            l = o.height;
          (this.uniforms.dimensions[0] = i),
            (this.uniforms.dimensions[1] = l),
            (this.uniforms.aspect = l / i),
            (this.uniforms.seed = this.seed),
            (this.uniforms.offset = this.offset),
            (this.uniforms.fillMode = this.fillMode),
            e.applyFilter(this, n, t, r);
        }),
        (r.prototype._randomizeSizes = function () {
          var e = this._sizes,
            n = this._slices - 1,
            t = this.sampleSize,
            r = Math.min(this.minSize / t, 0.9 / this._slices);
          if (this.average) {
            for (var o = this._slices, i = 1, l = 0; l < n; l++) {
              var a = i / (o - l),
                s = Math.max(a * (1 - 0.6 * Math.random()), r);
              (e[l] = s), (i -= s);
            }
            e[n] = i;
          } else {
            i = 1;
            var u = Math.sqrt(1 / this._slices);
            for (l = 0; l < n; l++) {
              s = Math.max(u * i * Math.random(), r);
              (e[l] = s), (i -= s);
            }
            e[n] = i;
          }
          this.shuffle();
        }),
        (r.prototype.shuffle = function () {
          for (var e = this._sizes, n = this._slices - 1; n > 0; n--) {
            var t = (Math.random() * n) >> 0,
              r = e[n];
            (e[n] = e[t]), (e[t] = r);
          }
        }),
        (r.prototype._randomizeOffsets = function () {
          for (var e = 0; e < this._slices; e++)
            this._offsets[e] = Math.random() * (Math.random() < 0.5 ? -1 : 1);
        }),
        (r.prototype.refresh = function () {
          this._randomizeSizes(), this._randomizeOffsets(), this.redraw();
        }),
        (r.prototype.redraw = function () {
          var e,
            n = this.sampleSize,
            t = this.texture,
            r = this._canvas.getContext('2d');
          r.clearRect(0, 0, 8, n);
          for (var o = 0, i = 0; i < this._slices; i++) {
            e = Math.floor(256 * this._offsets[i]);
            var l = this._sizes[i] * n,
              a = e > 0 ? e : 0,
              s = e < 0 ? -e : 0;
            (r.fillStyle = 'rgba(' + a + ', ' + s + ', 0, 1)'),
              r.fillRect(0, o >> 0, n, (l + 1) >> 0),
              (o += l);
          }
          t.baseTexture.update(), (this.uniforms.displacementMap = t);
        }),
        Object.defineProperty(r.prototype, 'sizes', {
          get: function () {
            return this._sizes;
          },
          set: function (e) {
            for (var n = Math.min(this._slices, e.length), t = 0; t < n; t++)
              this._sizes[t] = e[t];
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'offsets', {
          get: function () {
            return this._offsets;
          },
          set: function (e) {
            for (var n = Math.min(this._slices, e.length), t = 0; t < n; t++)
              this._offsets[t] = e[t];
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'slices', {
          get: function () {
            return this._slices;
          },
          set: function (e) {
            this._slices !== e &&
              ((this._slices = e),
              (this.uniforms.slices = e),
              (this._sizes = this.uniforms.slicesWidth = new Float32Array(e)),
              (this._offsets = this.uniforms.slicesOffset =
                new Float32Array(e)),
              this.refresh());
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'direction', {
          get: function () {
            return this._direction;
          },
          set: function (e) {
            if (this._direction !== e) {
              this._direction = e;
              var n = e * t.DEG_TO_RAD;
              (this.uniforms.sinDir = Math.sin(n)),
                (this.uniforms.cosDir = Math.cos(n));
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'red', {
          get: function () {
            return this.uniforms.red;
          },
          set: function (e) {
            this.uniforms.red = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'green', {
          get: function () {
            return this.uniforms.green;
          },
          set: function (e) {
            this.uniforms.green = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, 'blue', {
          get: function () {
            return this.uniforms.blue;
          },
          set: function (e) {
            this.uniforms.blue = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.destroy = function () {
          var e;
          null === (e = this.texture) || void 0 === e || e.destroy(!0),
            (this.texture =
              this._canvas =
              this.red =
              this.green =
              this.blue =
              this._sizes =
              this._offsets =
                null);
        }),
        (r.defaults = {
          slices: 5,
          offset: 100,
          direction: 0,
          fillMode: 0,
          average: !1,
          seed: 0,
          red: [0, 0],
          green: [0, 0],
          blue: [0, 0],
          minSize: 8,
          sampleSize: 512,
        }),
        (r.TRANSPARENT = 0),
        (r.ORIGINAL = 1),
        (r.LOOP = 2),
        (r.CLAMP = 3),
        (r.MIRROR = 4),
        r
      );
    })(n.Filter),
    w = (function (e) {
      function n(t) {
        var r = this,
          o = Object.assign({}, n.defaults, t),
          i = o.outerStrength,
          l = o.innerStrength,
          a = o.color,
          s = o.knockout,
          u = o.quality,
          f = Math.round(o.distance);
        return (
          ((r =
            e.call(
              this,
              c,
              'varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float outerStrength;\nuniform float innerStrength;\n\nuniform vec4 glowColor;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform bool knockout;\n\nconst float PI = 3.14159265358979323846264;\n\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);\nconst float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);\n\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\n    float totalAlpha = 0.0;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {\n       direction = vec2(cos(angle), sin(angle)) * px;\n\n       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {\n           displaced = clamp(vTextureCoord + direction * \n                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);\n\n           curColor = texture2D(uSampler, displaced);\n\n           totalAlpha += (DIST - curDistance) * curColor.a;\n       }\n    }\n    \n    curColor = texture2D(uSampler, vTextureCoord);\n\n    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);\n\n    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;\n    float innerGlowStrength = min(1.0, innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);\n    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);\n\n    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;\n    \n    if (knockout) {\n      float resultAlpha = outerGlowAlpha + innerGlowAlpha;\n      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      gl_FragColor = innerColor + outerGlowColor;\n    }\n}\n'
                .replace(/__ANGLE_STEP_SIZE__/gi, '' + (1 / u / f).toFixed(7))
                .replace(/__DIST__/gi, f.toFixed(0) + '.0')
            ) || this).uniforms.glowColor = new Float32Array([0, 0, 0, 1])),
          Object.assign(r, {
            color: a,
            outerStrength: i,
            innerStrength: l,
            padding: f,
            knockout: s,
          }),
          r
        );
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'color', {
          get: function () {
            return o.rgb2hex(this.uniforms.glowColor);
          },
          set: function (e) {
            o.hex2rgb(e, this.uniforms.glowColor);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'outerStrength', {
          get: function () {
            return this.uniforms.outerStrength;
          },
          set: function (e) {
            this.uniforms.outerStrength = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'innerStrength', {
          get: function () {
            return this.uniforms.innerStrength;
          },
          set: function (e) {
            this.uniforms.innerStrength = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'knockout', {
          get: function () {
            return this.uniforms.knockout;
          },
          set: function (e) {
            this.uniforms.knockout = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.defaults = {
          distance: 10,
          outerStrength: 4,
          innerStrength: 0,
          color: 16777215,
          quality: 0.1,
          knockout: !1,
        }),
        n
      );
    })(n.Filter),
    D = (function (e) {
      function n(r) {
        var o =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\nuniform float alpha;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n    // apply user alpha\n    mist *= alpha;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n\n}\n'.replace(
              '${perlin}',
              'vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n'
            )
          ) || this;
        (o.parallel = !0),
          (o.time = 0),
          (o._angle = 0),
          (o.uniforms.dimensions = new Float32Array(2));
        var i = Object.assign(n.defaults, r);
        return (
          (o._angleLight = new t.Point()),
          (o.angle = i.angle),
          (o.gain = i.gain),
          (o.lacunarity = i.lacunarity),
          (o.alpha = i.alpha),
          (o.parallel = i.parallel),
          (o.center = i.center),
          (o.time = i.time),
          o
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          var o = n.filterFrame,
            i = o.width,
            l = o.height;
          (this.uniforms.light = this.parallel
            ? this._angleLight
            : this.center),
            (this.uniforms.parallel = this.parallel),
            (this.uniforms.dimensions[0] = i),
            (this.uniforms.dimensions[1] = l),
            (this.uniforms.aspect = l / i),
            (this.uniforms.time = this.time),
            (this.uniforms.alpha = this.alpha),
            e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(n.prototype, 'angle', {
          get: function () {
            return this._angle;
          },
          set: function (e) {
            this._angle = e;
            var n = e * t.DEG_TO_RAD;
            (this._angleLight.x = Math.cos(n)),
              (this._angleLight.y = Math.sin(n));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'gain', {
          get: function () {
            return this.uniforms.gain;
          },
          set: function (e) {
            this.uniforms.gain = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'lacunarity', {
          get: function () {
            return this.uniforms.lacunarity;
          },
          set: function (e) {
            this.uniforms.lacunarity = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'alpha', {
          get: function () {
            return this.uniforms.alpha;
          },
          set: function (e) {
            this.uniforms.alpha = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.defaults = {
          angle: 30,
          gain: 0.5,
          lacunarity: 2.5,
          time: 0,
          parallel: !0,
          center: [0, 0],
          alpha: 1,
        }),
        n
      );
    })(n.Filter),
    j = (function (e) {
      function n(n, r, o) {
        void 0 === n && (n = [0, 0]),
          void 0 === r && (r = 5),
          void 0 === o && (o = 0);
        var i =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n'
          ) || this;
        return (
          (i.kernelSize = 5),
          (i.uniforms.uVelocity = new Float32Array(2)),
          (i._velocity = new t.ObservablePoint(i.velocityChanged, i)),
          i.setVelocity(n),
          (i.kernelSize = r),
          (i.offset = o),
          i
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          var o = this.velocity,
            i = o.x,
            l = o.y;
          (this.uniforms.uKernelSize =
            0 !== i || 0 !== l ? this.kernelSize : 0),
            e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(n.prototype, 'velocity', {
          get: function () {
            return this._velocity;
          },
          set: function (e) {
            this.setVelocity(e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.setVelocity = function (e) {
          if (Array.isArray(e)) {
            var n = e[0],
              t = e[1];
            this._velocity.set(n, t);
          } else this._velocity.copyFrom(e);
        }),
        (n.prototype.velocityChanged = function () {
          (this.uniforms.uVelocity[0] = this._velocity.x),
            (this.uniforms.uVelocity[1] = this._velocity.y),
            (this.padding =
              1 +
              (Math.max(
                Math.abs(this._velocity.x),
                Math.abs(this._velocity.y)
              ) >>
                0));
        }),
        Object.defineProperty(n.prototype, 'offset', {
          get: function () {
            return this.uniforms.uOffset;
          },
          set: function (e) {
            this.uniforms.uOffset = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    M = (function (e) {
      function n(n, t, r) {
        void 0 === t && (t = 0.05), void 0 === r && (r = n.length);
        var o =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n'.replace(
              /%maxColors%/g,
              r.toFixed(0)
            )
          ) || this;
        return (
          (o._replacements = []),
          (o._maxColors = 0),
          (o.epsilon = t),
          (o._maxColors = r),
          (o.uniforms.originalColors = new Float32Array(3 * r)),
          (o.uniforms.targetColors = new Float32Array(3 * r)),
          (o.replacements = n),
          o
        );
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'replacements', {
          get: function () {
            return this._replacements;
          },
          set: function (e) {
            var n = this.uniforms.originalColors,
              t = this.uniforms.targetColors,
              r = e.length;
            if (r > this._maxColors)
              throw new Error(
                'Length of replacements (' +
                  r +
                  ') exceeds the maximum colors length (' +
                  this._maxColors +
                  ')'
              );
            n[3 * r] = -1;
            for (var i = 0; i < r; i++) {
              var l = e[i],
                a = l[0];
              'number' == typeof a ? (a = o.hex2rgb(a)) : (l[0] = o.rgb2hex(a)),
                (n[3 * i] = a[0]),
                (n[3 * i + 1] = a[1]),
                (n[3 * i + 2] = a[2]);
              var s = l[1];
              'number' == typeof s ? (s = o.hex2rgb(s)) : (l[1] = o.rgb2hex(s)),
                (t[3 * i] = s[0]),
                (t[3 * i + 1] = s[1]),
                (t[3 * i + 2] = s[2]);
            }
            this._replacements = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.refresh = function () {
          this.replacements = this._replacements;
        }),
        Object.defineProperty(n.prototype, 'maxColors', {
          get: function () {
            return this._maxColors;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'epsilon', {
          get: function () {
            return this.uniforms.epsilon;
          },
          set: function (e) {
            this.uniforms.epsilon = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    R = (function (e) {
      function n(t, r) {
        void 0 === r && (r = 0);
        var o =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n'
          ) || this;
        return (
          (o.seed = 0),
          (o.uniforms.dimensions = new Float32Array(2)),
          'number' == typeof t ? ((o.seed = t), (t = void 0)) : (o.seed = r),
          Object.assign(o, n.defaults, t),
          o
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          var o, i;
          (this.uniforms.dimensions[0] =
            null === (o = n.filterFrame) || void 0 === o ? void 0 : o.width),
            (this.uniforms.dimensions[1] =
              null === (i = n.filterFrame) || void 0 === i ? void 0 : i.height),
            (this.uniforms.seed = this.seed),
            e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(n.prototype, 'sepia', {
          get: function () {
            return this.uniforms.sepia;
          },
          set: function (e) {
            this.uniforms.sepia = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'noise', {
          get: function () {
            return this.uniforms.noise;
          },
          set: function (e) {
            this.uniforms.noise = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'noiseSize', {
          get: function () {
            return this.uniforms.noiseSize;
          },
          set: function (e) {
            this.uniforms.noiseSize = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'scratch', {
          get: function () {
            return this.uniforms.scratch;
          },
          set: function (e) {
            this.uniforms.scratch = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'scratchDensity', {
          get: function () {
            return this.uniforms.scratchDensity;
          },
          set: function (e) {
            this.uniforms.scratchDensity = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'scratchWidth', {
          get: function () {
            return this.uniforms.scratchWidth;
          },
          set: function (e) {
            this.uniforms.scratchWidth = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'vignetting', {
          get: function () {
            return this.uniforms.vignetting;
          },
          set: function (e) {
            this.uniforms.vignetting = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'vignettingAlpha', {
          get: function () {
            return this.uniforms.vignettingAlpha;
          },
          set: function (e) {
            this.uniforms.vignettingAlpha = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'vignettingBlur', {
          get: function () {
            return this.uniforms.vignettingBlur;
          },
          set: function (e) {
            this.uniforms.vignettingBlur = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.defaults = {
          sepia: 0.3,
          noise: 0.3,
          noiseSize: 1,
          scratch: 0.5,
          scratchDensity: 0.3,
          scratchWidth: 1,
          vignetting: 0.3,
          vignettingAlpha: 1,
          vignettingBlur: 0.3,
        }),
        n
      );
    })(n.Filter),
    E = (function (e) {
      function n(t, r, o) {
        void 0 === t && (t = 1),
          void 0 === r && (r = 0),
          void 0 === o && (o = 0.1);
        var i =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n'.replace(
              /\$\{angleStep\}/,
              n.getAngleStep(o)
            )
          ) || this;
        return (
          (i._thickness = 1),
          (i.uniforms.thickness = new Float32Array([0, 0])),
          (i.uniforms.outlineColor = new Float32Array([0, 0, 0, 1])),
          Object.assign(i, { thickness: t, color: r, quality: o }),
          i
        );
      }
      return (
        u(n, e),
        (n.getAngleStep = function (e) {
          var t = Math.max(e * n.MAX_SAMPLES, n.MIN_SAMPLES);
          return ((2 * Math.PI) / t).toFixed(7);
        }),
        (n.prototype.apply = function (e, n, t, r) {
          (this.uniforms.thickness[0] = this._thickness / n._frame.width),
            (this.uniforms.thickness[1] = this._thickness / n._frame.height),
            e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(n.prototype, 'color', {
          get: function () {
            return o.rgb2hex(this.uniforms.outlineColor);
          },
          set: function (e) {
            o.hex2rgb(e, this.uniforms.outlineColor);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'thickness', {
          get: function () {
            return this._thickness;
          },
          set: function (e) {
            (this._thickness = e), (this.padding = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.MIN_SAMPLES = 1),
        (n.MAX_SAMPLES = 100),
        n
      );
    })(n.Filter),
    I = (function (e) {
      function n(n) {
        void 0 === n && (n = 10);
        var t =
          e.call(
            this,
            c,
            'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n'
          ) || this;
        return (t.size = n), t;
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'size', {
          get: function () {
            return this.uniforms.size;
          },
          set: function (e) {
            'number' == typeof e && (e = [e, e]), (this.uniforms.size = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    k = (function (e) {
      function n(n, t, r, o) {
        void 0 === n && (n = 0),
          void 0 === t && (t = [0, 0]),
          void 0 === r && (r = 5),
          void 0 === o && (o = -1);
        var i =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n'
          ) || this;
        return (
          (i._angle = 0),
          (i.angle = n),
          (i.center = t),
          (i.kernelSize = r),
          (i.radius = o),
          i
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          (this.uniforms.uKernelSize = 0 !== this._angle ? this.kernelSize : 0),
            e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(n.prototype, 'angle', {
          get: function () {
            return this._angle;
          },
          set: function (e) {
            (this._angle = e), (this.uniforms.uRadian = (e * Math.PI) / 180);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'center', {
          get: function () {
            return this.uniforms.uCenter;
          },
          set: function (e) {
            this.uniforms.uCenter = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'radius', {
          get: function () {
            return this.uniforms.uRadius;
          },
          set: function (e) {
            (e < 0 || e === 1 / 0) && (e = -1), (this.uniforms.uRadius = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    L = (function (e) {
      function n(t) {
        var r =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n'
          ) || this;
        return (
          (r.time = 0),
          (r.uniforms.amplitude = new Float32Array(2)),
          (r.uniforms.waveLength = new Float32Array(2)),
          (r.uniforms.alpha = new Float32Array(2)),
          (r.uniforms.dimensions = new Float32Array(2)),
          Object.assign(r, n.defaults, t),
          r
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          var o, i;
          (this.uniforms.dimensions[0] =
            null === (o = n.filterFrame) || void 0 === o ? void 0 : o.width),
            (this.uniforms.dimensions[1] =
              null === (i = n.filterFrame) || void 0 === i ? void 0 : i.height),
            (this.uniforms.time = this.time),
            e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(n.prototype, 'mirror', {
          get: function () {
            return this.uniforms.mirror;
          },
          set: function (e) {
            this.uniforms.mirror = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'boundary', {
          get: function () {
            return this.uniforms.boundary;
          },
          set: function (e) {
            this.uniforms.boundary = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'amplitude', {
          get: function () {
            return this.uniforms.amplitude;
          },
          set: function (e) {
            (this.uniforms.amplitude[0] = e[0]),
              (this.uniforms.amplitude[1] = e[1]);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'waveLength', {
          get: function () {
            return this.uniforms.waveLength;
          },
          set: function (e) {
            (this.uniforms.waveLength[0] = e[0]),
              (this.uniforms.waveLength[1] = e[1]);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'alpha', {
          get: function () {
            return this.uniforms.alpha;
          },
          set: function (e) {
            (this.uniforms.alpha[0] = e[0]), (this.uniforms.alpha[1] = e[1]);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.defaults = {
          mirror: !0,
          boundary: 0.5,
          amplitude: [0, 20],
          waveLength: [30, 100],
          alpha: [1, 1],
          time: 0,
        }),
        n
      );
    })(n.Filter),
    N = (function (e) {
      function n(n, t, r) {
        void 0 === n && (n = [-10, 0]),
          void 0 === t && (t = [0, 10]),
          void 0 === r && (r = [0, 0]);
        var o =
          e.call(
            this,
            c,
            'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n'
          ) || this;
        return (o.red = n), (o.green = t), (o.blue = r), o;
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'red', {
          get: function () {
            return this.uniforms.red;
          },
          set: function (e) {
            this.uniforms.red = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'green', {
          get: function () {
            return this.uniforms.green;
          },
          set: function (e) {
            this.uniforms.green = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'blue', {
          get: function () {
            return this.uniforms.blue;
          },
          set: function (e) {
            this.uniforms.blue = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    X = (function (e) {
      function n(t, r, o) {
        void 0 === t && (t = [0, 0]), void 0 === o && (o = 0);
        var i =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n'
          ) || this;
        return (i.center = t), Object.assign(i, n.defaults, r), (i.time = o), i;
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          (this.uniforms.time = this.time), e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(n.prototype, 'center', {
          get: function () {
            return this.uniforms.center;
          },
          set: function (e) {
            this.uniforms.center = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'amplitude', {
          get: function () {
            return this.uniforms.amplitude;
          },
          set: function (e) {
            this.uniforms.amplitude = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'wavelength', {
          get: function () {
            return this.uniforms.wavelength;
          },
          set: function (e) {
            this.uniforms.wavelength = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'brightness', {
          get: function () {
            return this.uniforms.brightness;
          },
          set: function (e) {
            this.uniforms.brightness = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'speed', {
          get: function () {
            return this.uniforms.speed;
          },
          set: function (e) {
            this.uniforms.speed = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'radius', {
          get: function () {
            return this.uniforms.radius;
          },
          set: function (e) {
            this.uniforms.radius = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.defaults = {
          amplitude: 30,
          wavelength: 160,
          brightness: 1,
          speed: 500,
          radius: -1,
        }),
        n
      );
    })(n.Filter),
    B = (function (e) {
      function n(n, t, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1);
        var o =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n'
          ) || this;
        return (
          (o._color = 0),
          (o.uniforms.dimensions = new Float32Array(2)),
          (o.uniforms.ambientColor = new Float32Array([0, 0, 0, r])),
          (o.texture = n),
          (o.color = t),
          o
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          var o, i;
          (this.uniforms.dimensions[0] =
            null === (o = n.filterFrame) || void 0 === o ? void 0 : o.width),
            (this.uniforms.dimensions[1] =
              null === (i = n.filterFrame) || void 0 === i ? void 0 : i.height),
            e.applyFilter(this, n, t, r);
        }),
        Object.defineProperty(n.prototype, 'texture', {
          get: function () {
            return this.uniforms.uLightmap;
          },
          set: function (e) {
            this.uniforms.uLightmap = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'color', {
          get: function () {
            return this._color;
          },
          set: function (e) {
            var n = this.uniforms.ambientColor;
            'number' == typeof e
              ? (o.hex2rgb(e, n), (this._color = e))
              : ((n[0] = e[0]),
                (n[1] = e[1]),
                (n[2] = e[2]),
                (n[3] = e[3]),
                (this._color = o.rgb2hex(n)));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'alpha', {
          get: function () {
            return this.uniforms.ambientColor[3];
          },
          set: function (e) {
            this.uniforms.ambientColor[3] = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    G = (function (e) {
      function n(n, r, o, i) {
        void 0 === n && (n = 100), void 0 === r && (r = 600);
        var l =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n'
          ) || this;
        return (
          (l.uniforms.blur = n),
          (l.uniforms.gradientBlur = r),
          (l.uniforms.start = o || new t.Point(0, window.innerHeight / 2)),
          (l.uniforms.end = i || new t.Point(600, window.innerHeight / 2)),
          (l.uniforms.delta = new t.Point(30, 30)),
          (l.uniforms.texSize = new t.Point(
            window.innerWidth,
            window.innerHeight
          )),
          l.updateDelta(),
          l
        );
      }
      return (
        u(n, e),
        (n.prototype.updateDelta = function () {
          (this.uniforms.delta.x = 0), (this.uniforms.delta.y = 0);
        }),
        Object.defineProperty(n.prototype, 'blur', {
          get: function () {
            return this.uniforms.blur;
          },
          set: function (e) {
            this.uniforms.blur = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'gradientBlur', {
          get: function () {
            return this.uniforms.gradientBlur;
          },
          set: function (e) {
            this.uniforms.gradientBlur = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'start', {
          get: function () {
            return this.uniforms.start;
          },
          set: function (e) {
            (this.uniforms.start = e), this.updateDelta();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'end', {
          get: function () {
            return this.uniforms.end;
          },
          set: function (e) {
            (this.uniforms.end = e), this.updateDelta();
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    K = (function (e) {
      function n() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        u(n, e),
        (n.prototype.updateDelta = function () {
          var e = this.uniforms.end.x - this.uniforms.start.x,
            n = this.uniforms.end.y - this.uniforms.start.y,
            t = Math.sqrt(e * e + n * n);
          (this.uniforms.delta.x = e / t), (this.uniforms.delta.y = n / t);
        }),
        n
      );
    })(G),
    q = (function (e) {
      function n() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        u(n, e),
        (n.prototype.updateDelta = function () {
          var e = this.uniforms.end.x - this.uniforms.start.x,
            n = this.uniforms.end.y - this.uniforms.start.y,
            t = Math.sqrt(e * e + n * n);
          (this.uniforms.delta.x = -n / t), (this.uniforms.delta.y = e / t);
        }),
        n
      );
    })(G),
    W = (function (e) {
      function n(n, t, r, o) {
        void 0 === n && (n = 100), void 0 === t && (t = 600);
        var i = e.call(this) || this;
        return (
          (i.tiltShiftXFilter = new K(n, t, r, o)),
          (i.tiltShiftYFilter = new q(n, t, r, o)),
          i
        );
      }
      return (
        u(n, e),
        (n.prototype.apply = function (e, n, t, r) {
          var o = e.getFilterTexture();
          this.tiltShiftXFilter.apply(e, n, o, 1),
            this.tiltShiftYFilter.apply(e, o, t, r),
            e.returnFilterTexture(o);
        }),
        Object.defineProperty(n.prototype, 'blur', {
          get: function () {
            return this.tiltShiftXFilter.blur;
          },
          set: function (e) {
            this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'gradientBlur', {
          get: function () {
            return this.tiltShiftXFilter.gradientBlur;
          },
          set: function (e) {
            this.tiltShiftXFilter.gradientBlur =
              this.tiltShiftYFilter.gradientBlur = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'start', {
          get: function () {
            return this.tiltShiftXFilter.start;
          },
          set: function (e) {
            this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'end', {
          get: function () {
            return this.tiltShiftXFilter.end;
          },
          set: function (e) {
            this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        n
      );
    })(n.Filter),
    Y = (function (e) {
      function n(t) {
        var r =
          e.call(
            this,
            c,
            'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n'
          ) || this;
        return Object.assign(r, n.defaults, t), r;
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'offset', {
          get: function () {
            return this.uniforms.offset;
          },
          set: function (e) {
            this.uniforms.offset = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'radius', {
          get: function () {
            return this.uniforms.radius;
          },
          set: function (e) {
            this.uniforms.radius = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'angle', {
          get: function () {
            return this.uniforms.angle;
          },
          set: function (e) {
            this.uniforms.angle = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.defaults = {
          radius: 200,
          angle: 4,
          padding: 20,
          offset: new t.Point(),
        }),
        n
      );
    })(n.Filter),
    Z = (function (e) {
      function n(t) {
        var r,
          o = Object.assign(n.defaults, t),
          i = o.maxKernelSize,
          l = (function (e, n) {
            var t = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                n.indexOf(r) < 0 &&
                (t[r] = e[r]);
            if (
              null != e &&
              'function' == typeof Object.getOwnPropertySymbols
            ) {
              var o = 0;
              for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                n.indexOf(r[o]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                  (t[r[o]] = e[r[o]]);
            }
            return t;
          })(o, ['maxKernelSize']);
        return (
          (r =
            e.call(
              this,
              c,
              "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = ${maxKernelSize};\n\n// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float seed) {\n    const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n    return fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = rand(vTextureCoord, 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n".replace(
                '${maxKernelSize}',
                i.toFixed(1)
              )
            ) || this),
          Object.assign(r, l),
          r
        );
      }
      return (
        u(n, e),
        Object.defineProperty(n.prototype, 'center', {
          get: function () {
            return this.uniforms.uCenter;
          },
          set: function (e) {
            this.uniforms.uCenter = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'strength', {
          get: function () {
            return this.uniforms.uStrength;
          },
          set: function (e) {
            this.uniforms.uStrength = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'innerRadius', {
          get: function () {
            return this.uniforms.uInnerRadius;
          },
          set: function (e) {
            this.uniforms.uInnerRadius = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, 'radius', {
          get: function () {
            return this.uniforms.uRadius;
          },
          set: function (e) {
            (e < 0 || e === 1 / 0) && (e = -1), (this.uniforms.uRadius = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.defaults = {
          strength: 0.1,
          center: [0, 0],
          innerRadius: 0,
          radius: -1,
          maxKernelSize: 32,
        }),
        n
      );
    })(n.Filter);
  return (
    (e.AdjustmentFilter = m),
    (e.AdvancedBloomFilter = h),
    (e.AsciiFilter = g),
    (e.BevelFilter = v),
    (e.BloomFilter = y),
    (e.BulgePinchFilter = b),
    (e.CRTFilter = z),
    (e.ColorMapFilter = x),
    (e.ColorOverlayFilter = _),
    (e.ColorReplaceFilter = C),
    (e.ConvolutionFilter = S),
    (e.CrossHatchFilter = F),
    (e.DotFilter = O),
    (e.DropShadowFilter = P),
    (e.EmbossFilter = A),
    (e.GlitchFilter = T),
    (e.GlowFilter = w),
    (e.GodrayFilter = D),
    (e.KawaseBlurFilter = d),
    (e.MotionBlurFilter = j),
    (e.MultiColorReplaceFilter = M),
    (e.OldFilmFilter = R),
    (e.OutlineFilter = E),
    (e.PixelateFilter = I),
    (e.RGBSplitFilter = N),
    (e.RadialBlurFilter = k),
    (e.ReflectionFilter = L),
    (e.ShockwaveFilter = X),
    (e.SimpleLightmapFilter = B),
    (e.TiltShiftAxisFilter = G),
    (e.TiltShiftFilter = W),
    (e.TiltShiftXFilter = K),
    (e.TiltShiftYFilter = q),
    (e.TwistFilter = Y),
    (e.ZoomBlurFilter = Z),
    Object.defineProperty(e, '__esModule', { value: !0 }),
    e
  );
})({}, PIXI, PIXI, PIXI, PIXI.utils, PIXI, PIXI.filters, PIXI.filters);
Object.assign(PIXI.filters, __filters);
//# sourceMappingURL=pixi-filters.js.map