;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const s = {}
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const s = n(i)
    fetch(i.href, s)
  }
})()
function Nv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t
}
var cp = { exports: {} },
  sa = {},
  hp = { exports: {} },
  z = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fs = Symbol.for('react.element'),
  Dv = Symbol.for('react.portal'),
  Vv = Symbol.for('react.fragment'),
  Lv = Symbol.for('react.strict_mode'),
  Ov = Symbol.for('react.profiler'),
  Mv = Symbol.for('react.provider'),
  Fv = Symbol.for('react.context'),
  $v = Symbol.for('react.forward_ref'),
  jv = Symbol.for('react.suspense'),
  Uv = Symbol.for('react.memo'),
  zv = Symbol.for('react.lazy'),
  Xh = Symbol.iterator
function Bv(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (Xh && t[Xh]) || t['@@iterator']),
      typeof t == 'function' ? t : null)
}
var dp = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fp = Object.assign,
  pp = {}
function qr(t, e, n) {
  ;(this.props = t),
    (this.context = e),
    (this.refs = pp),
    (this.updater = n || dp)
}
qr.prototype.isReactComponent = {}
qr.prototype.setState = function (t, e) {
  if (typeof t != 'object' && typeof t != 'function' && t != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, t, e, 'setState')
}
qr.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, 'forceUpdate')
}
function mp() {}
mp.prototype = qr.prototype
function uc(t, e, n) {
  ;(this.props = t),
    (this.context = e),
    (this.refs = pp),
    (this.updater = n || dp)
}
var cc = (uc.prototype = new mp())
cc.constructor = uc
fp(cc, qr.prototype)
cc.isPureReactComponent = !0
var Jh = Array.isArray,
  gp = Object.prototype.hasOwnProperty,
  hc = { current: null },
  yp = { key: !0, ref: !0, __self: !0, __source: !0 }
function vp(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = '' + e.key),
    e))
      gp.call(e, r) && !yp.hasOwnProperty(r) && (i[r] = e[r])
  var a = arguments.length - 2
  if (a === 1) i.children = n
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2]
    i.children = l
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r])
  return { $$typeof: fs, type: t, key: s, ref: o, props: i, _owner: hc.current }
}
function Hv(t, e) {
  return {
    $$typeof: fs,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  }
}
function dc(t) {
  return typeof t == 'object' && t !== null && t.$$typeof === fs
}
function qv(t) {
  var e = { '=': '=0', ':': '=2' }
  return (
    '$' +
    t.replace(/[=:]/g, function (n) {
      return e[n]
    })
  )
}
var Zh = /\/+/g
function Ya(t, e) {
  return typeof t == 'object' && t !== null && t.key != null
    ? qv('' + t.key)
    : e.toString(36)
}
function io(t, e, n, r, i) {
  var s = typeof t
  ;(s === 'undefined' || s === 'boolean') && (t = null)
  var o = !1
  if (t === null) o = !0
  else
    switch (s) {
      case 'string':
      case 'number':
        o = !0
        break
      case 'object':
        switch (t.$$typeof) {
          case fs:
          case Dv:
            o = !0
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === '' ? '.' + Ya(o, 0) : r),
      Jh(i)
        ? ((n = ''),
          t != null && (n = t.replace(Zh, '$&/') + '/'),
          io(i, e, n, '', function (u) {
            return u
          }))
        : i != null &&
          (dc(i) &&
            (i = Hv(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Zh, '$&/') + '/') +
                t
            )),
          e.push(i)),
      1
    )
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Jh(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a]
      var l = r + Ya(s, a)
      o += io(s, e, n, l, i)
    }
  else if (((l = Bv(t)), typeof l == 'function'))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = r + Ya(s, a++)), (o += io(s, e, n, l, i))
  else if (s === 'object')
    throw (
      ((e = String(t)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return o
}
function Ds(t, e, n) {
  if (t == null) return t
  var r = [],
    i = 0
  return (
    io(t, r, '', '', function (s) {
      return e.call(n, s, i++)
    }),
    r
  )
}
function Qv(t) {
  if (t._status === -1) {
    var e = t._result
    ;(e = e()),
      e.then(
        function (n) {
          ;(t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n))
        },
        function (n) {
          ;(t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n))
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e))
  }
  if (t._status === 1) return t._result.default
  throw t._result
}
var Qe = { current: null },
  so = { transition: null },
  Kv = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: so,
    ReactCurrentOwner: hc,
  }
z.Children = {
  map: Ds,
  forEach: function (t, e, n) {
    Ds(
      t,
      function () {
        e.apply(this, arguments)
      },
      n
    )
  },
  count: function (t) {
    var e = 0
    return (
      Ds(t, function () {
        e++
      }),
      e
    )
  },
  toArray: function (t) {
    return (
      Ds(t, function (e) {
        return e
      }) || []
    )
  },
  only: function (t) {
    if (!dc(t))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return t
  },
}
z.Component = qr
z.Fragment = Vv
z.Profiler = Ov
z.PureComponent = uc
z.StrictMode = Lv
z.Suspense = jv
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kv
z.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        t +
        '.'
    )
  var r = fp({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = hc.current)),
      e.key !== void 0 && (i = '' + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps
    for (l in e)
      gp.call(e, l) &&
        !yp.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
  }
  var l = arguments.length - 2
  if (l === 1) r.children = n
  else if (1 < l) {
    a = Array(l)
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2]
    r.children = a
  }
  return { $$typeof: fs, type: t.type, key: i, ref: s, props: r, _owner: o }
}
z.createContext = function (t) {
  return (
    (t = {
      $$typeof: Fv,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Mv, _context: t }),
    (t.Consumer = t)
  )
}
z.createElement = vp
z.createFactory = function (t) {
  var e = vp.bind(null, t)
  return (e.type = t), e
}
z.createRef = function () {
  return { current: null }
}
z.forwardRef = function (t) {
  return { $$typeof: $v, render: t }
}
z.isValidElement = dc
z.lazy = function (t) {
  return { $$typeof: zv, _payload: { _status: -1, _result: t }, _init: Qv }
}
z.memo = function (t, e) {
  return { $$typeof: Uv, type: t, compare: e === void 0 ? null : e }
}
z.startTransition = function (t) {
  var e = so.transition
  so.transition = {}
  try {
    t()
  } finally {
    so.transition = e
  }
}
z.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
z.useCallback = function (t, e) {
  return Qe.current.useCallback(t, e)
}
z.useContext = function (t) {
  return Qe.current.useContext(t)
}
z.useDebugValue = function () {}
z.useDeferredValue = function (t) {
  return Qe.current.useDeferredValue(t)
}
z.useEffect = function (t, e) {
  return Qe.current.useEffect(t, e)
}
z.useId = function () {
  return Qe.current.useId()
}
z.useImperativeHandle = function (t, e, n) {
  return Qe.current.useImperativeHandle(t, e, n)
}
z.useInsertionEffect = function (t, e) {
  return Qe.current.useInsertionEffect(t, e)
}
z.useLayoutEffect = function (t, e) {
  return Qe.current.useLayoutEffect(t, e)
}
z.useMemo = function (t, e) {
  return Qe.current.useMemo(t, e)
}
z.useReducer = function (t, e, n) {
  return Qe.current.useReducer(t, e, n)
}
z.useRef = function (t) {
  return Qe.current.useRef(t)
}
z.useState = function (t) {
  return Qe.current.useState(t)
}
z.useSyncExternalStore = function (t, e, n) {
  return Qe.current.useSyncExternalStore(t, e, n)
}
z.useTransition = function () {
  return Qe.current.useTransition()
}
z.version = '18.2.0'
hp.exports = z
var vt = hp.exports
const Wv = Nv(vt)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gv = vt,
  bv = Symbol.for('react.element'),
  Yv = Symbol.for('react.fragment'),
  Xv = Object.prototype.hasOwnProperty,
  Jv = Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zv = { key: !0, ref: !0, __self: !0, __source: !0 }
function _p(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null
  n !== void 0 && (s = '' + n),
    e.key !== void 0 && (s = '' + e.key),
    e.ref !== void 0 && (o = e.ref)
  for (r in e) Xv.call(e, r) && !Zv.hasOwnProperty(r) && (i[r] = e[r])
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r])
  return { $$typeof: bv, type: t, key: s, ref: o, props: i, _owner: Jv.current }
}
sa.Fragment = Yv
sa.jsx = _p
sa.jsxs = _p
cp.exports = sa
var A = cp.exports,
  jl = {},
  Ep = { exports: {} },
  it = {},
  wp = { exports: {} },
  Tp = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (t) {
  function e(k, F) {
    var U = k.length
    k.push(F)
    e: for (; 0 < U; ) {
      var le = (U - 1) >>> 1,
        ve = k[le]
      if (0 < i(ve, F)) (k[le] = F), (k[U] = ve), (U = le)
      else break e
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0]
  }
  function r(k) {
    if (k.length === 0) return null
    var F = k[0],
      U = k.pop()
    if (U !== F) {
      k[0] = U
      e: for (var le = 0, ve = k.length, xs = ve >>> 1; le < xs; ) {
        var An = 2 * (le + 1) - 1,
          ba = k[An],
          Cn = An + 1,
          Ns = k[Cn]
        if (0 > i(ba, U))
          Cn < ve && 0 > i(Ns, ba)
            ? ((k[le] = Ns), (k[Cn] = U), (le = Cn))
            : ((k[le] = ba), (k[An] = U), (le = An))
        else if (Cn < ve && 0 > i(Ns, U)) (k[le] = Ns), (k[Cn] = U), (le = Cn)
        else break e
      }
    }
    return F
  }
  function i(k, F) {
    var U = k.sortIndex - F.sortIndex
    return U !== 0 ? U : k.id - F.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance
    t.unstable_now = function () {
      return s.now()
    }
  } else {
    var o = Date,
      a = o.now()
    t.unstable_now = function () {
      return o.now() - a
    }
  }
  var l = [],
    u = [],
    c = 1,
    h = null,
    f = 3,
    g = !1,
    _ = !1,
    E = !1,
    N = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m(k) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u)
      else if (F.startTime <= k) r(u), (F.sortIndex = F.expirationTime), e(l, F)
      else break
      F = n(u)
    }
  }
  function v(k) {
    if (((E = !1), m(k), !_))
      if (n(l) !== null) (_ = !0), Wa(C)
      else {
        var F = n(u)
        F !== null && Ga(v, F.startTime - k)
      }
  }
  function C(k, F) {
    ;(_ = !1), E && ((E = !1), p(D), (D = -1)), (g = !0)
    var U = f
    try {
      for (
        m(F), h = n(l);
        h !== null && (!(h.expirationTime > F) || (k && !ft()));

      ) {
        var le = h.callback
        if (typeof le == 'function') {
          ;(h.callback = null), (f = h.priorityLevel)
          var ve = le(h.expirationTime <= F)
          ;(F = t.unstable_now()),
            typeof ve == 'function' ? (h.callback = ve) : h === n(l) && r(l),
            m(F)
        } else r(l)
        h = n(l)
      }
      if (h !== null) var xs = !0
      else {
        var An = n(u)
        An !== null && Ga(v, An.startTime - F), (xs = !1)
      }
      return xs
    } finally {
      ;(h = null), (f = U), (g = !1)
    }
  }
  var P = !1,
    x = null,
    D = -1,
    te = 5,
    j = -1
  function ft() {
    return !(t.unstable_now() - j < te)
  }
  function ei() {
    if (x !== null) {
      var k = t.unstable_now()
      j = k
      var F = !0
      try {
        F = x(!0, k)
      } finally {
        F ? ti() : ((P = !1), (x = null))
      }
    } else P = !1
  }
  var ti
  if (typeof d == 'function')
    ti = function () {
      d(ei)
    }
  else if (typeof MessageChannel < 'u') {
    var Yh = new MessageChannel(),
      xv = Yh.port2
    ;(Yh.port1.onmessage = ei),
      (ti = function () {
        xv.postMessage(null)
      })
  } else
    ti = function () {
      N(ei, 0)
    }
  function Wa(k) {
    ;(x = k), P || ((P = !0), ti())
  }
  function Ga(k, F) {
    D = N(function () {
      k(t.unstable_now())
    }, F)
  }
  ;(t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (k) {
      k.callback = null
    }),
    (t.unstable_continueExecution = function () {
      _ || g || ((_ = !0), Wa(C))
    }),
    (t.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (te = 0 < k ? Math.floor(1e3 / k) : 5)
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l)
    }),
    (t.unstable_next = function (k) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var F = 3
          break
        default:
          F = f
      }
      var U = f
      f = F
      try {
        return k()
      } finally {
        f = U
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (k, F) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          k = 3
      }
      var U = f
      f = k
      try {
        return F()
      } finally {
        f = U
      }
    }),
    (t.unstable_scheduleCallback = function (k, F, U) {
      var le = t.unstable_now()
      switch (
        (typeof U == 'object' && U !== null
          ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? le + U : le))
          : (U = le),
        k)
      ) {
        case 1:
          var ve = -1
          break
        case 2:
          ve = 250
          break
        case 5:
          ve = 1073741823
          break
        case 4:
          ve = 1e4
          break
        default:
          ve = 5e3
      }
      return (
        (ve = U + ve),
        (k = {
          id: c++,
          callback: F,
          priorityLevel: k,
          startTime: U,
          expirationTime: ve,
          sortIndex: -1,
        }),
        U > le
          ? ((k.sortIndex = U),
            e(u, k),
            n(l) === null &&
              k === n(u) &&
              (E ? (p(D), (D = -1)) : (E = !0), Ga(v, U - le)))
          : ((k.sortIndex = ve), e(l, k), _ || g || ((_ = !0), Wa(C))),
        k
      )
    }),
    (t.unstable_shouldYield = ft),
    (t.unstable_wrapCallback = function (k) {
      var F = f
      return function () {
        var U = f
        f = F
        try {
          return k.apply(this, arguments)
        } finally {
          f = U
        }
      }
    })
})(Tp)
wp.exports = Tp
var e0 = wp.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sp = vt,
  nt = e0
function w(t) {
  for (
    var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
    n < arguments.length;
    n++
  )
    e += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    t +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Ip = new Set(),
  Mi = {}
function Xn(t, e) {
  xr(t, e), xr(t + 'Capture', e)
}
function xr(t, e) {
  for (Mi[t] = e, t = 0; t < e.length; t++) Ip.add(e[t])
}
var Bt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ul = Object.prototype.hasOwnProperty,
  t0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ed = {},
  td = {}
function n0(t) {
  return Ul.call(td, t)
    ? !0
    : Ul.call(ed, t)
    ? !1
    : t0.test(t)
    ? (td[t] = !0)
    : ((ed[t] = !0), !1)
}
function r0(t, e, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof e) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-')
    default:
      return !1
  }
}
function i0(t, e, n, r) {
  if (e === null || typeof e > 'u' || r0(t, e, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e
      case 4:
        return e === !1
      case 5:
        return isNaN(e)
      case 6:
        return isNaN(e) || 1 > e
    }
  return !1
}
function Ke(t, e, n, r, i, s, o) {
  ;(this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o)
}
var xe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (t) {
    xe[t] = new Ke(t, 0, !1, t, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (t) {
  var e = t[0]
  xe[e] = new Ke(e, 1, !1, t[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
  xe[t] = new Ke(t, 2, !1, t.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (t) {
  xe[t] = new Ke(t, 2, !1, t, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (t) {
    xe[t] = new Ke(t, 3, !1, t.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
  xe[t] = new Ke(t, 3, !0, t, null, !1, !1)
})
;['capture', 'download'].forEach(function (t) {
  xe[t] = new Ke(t, 4, !1, t, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (t) {
  xe[t] = new Ke(t, 6, !1, t, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (t) {
  xe[t] = new Ke(t, 5, !1, t.toLowerCase(), null, !1, !1)
})
var fc = /[\-:]([a-z])/g
function pc(t) {
  return t[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(fc, pc)
    xe[e] = new Ke(e, 1, !1, t, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(fc, pc)
    xe[e] = new Ke(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
  var e = t.replace(fc, pc)
  xe[e] = new Ke(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (t) {
  xe[t] = new Ke(t, 1, !1, t.toLowerCase(), null, !1, !1)
})
xe.xlinkHref = new Ke(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (t) {
  xe[t] = new Ke(t, 1, !1, t.toLowerCase(), null, !0, !0)
})
function mc(t, e, n, r) {
  var i = xe.hasOwnProperty(e) ? xe[e] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== 'o' && e[0] !== 'O') ||
      (e[1] !== 'n' && e[1] !== 'N')) &&
    (i0(e, n, i, r) && (n = null),
    r || i === null
      ? n0(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var Wt = Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vs = Symbol.for('react.element'),
  sr = Symbol.for('react.portal'),
  or = Symbol.for('react.fragment'),
  gc = Symbol.for('react.strict_mode'),
  zl = Symbol.for('react.profiler'),
  Ap = Symbol.for('react.provider'),
  Cp = Symbol.for('react.context'),
  yc = Symbol.for('react.forward_ref'),
  Bl = Symbol.for('react.suspense'),
  Hl = Symbol.for('react.suspense_list'),
  vc = Symbol.for('react.memo'),
  bt = Symbol.for('react.lazy'),
  Rp = Symbol.for('react.offscreen'),
  nd = Symbol.iterator
function ni(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (nd && t[nd]) || t['@@iterator']),
      typeof t == 'function' ? t : null)
}
var ie = Object.assign,
  Xa
function fi(t) {
  if (Xa === void 0)
    try {
      throw Error()
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/)
      Xa = (e && e[1]) || ''
    }
  return (
    `
` +
    Xa +
    t
  )
}
var Ja = !1
function Za(t, e) {
  if (!t || Ja) return ''
  Ja = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (e)
      if (
        ((e = function () {
          throw Error()
        }),
        Object.defineProperty(e.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(t, [], e)
      } else {
        try {
          e.call()
        } catch (u) {
          r = u
        }
        t.call(e.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      t()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(' at new ', ' at ')
                return (
                  t.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', t.displayName)),
                  l
                )
              }
            while (1 <= o && 0 <= a)
          break
        }
    }
  } finally {
    ;(Ja = !1), (Error.prepareStackTrace = n)
  }
  return (t = t ? t.displayName || t.name : '') ? fi(t) : ''
}
function s0(t) {
  switch (t.tag) {
    case 5:
      return fi(t.type)
    case 16:
      return fi('Lazy')
    case 13:
      return fi('Suspense')
    case 19:
      return fi('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (t = Za(t.type, !1)), t
    case 11:
      return (t = Za(t.type.render, !1)), t
    case 1:
      return (t = Za(t.type, !0)), t
    default:
      return ''
  }
}
function ql(t) {
  if (t == null) return null
  if (typeof t == 'function') return t.displayName || t.name || null
  if (typeof t == 'string') return t
  switch (t) {
    case or:
      return 'Fragment'
    case sr:
      return 'Portal'
    case zl:
      return 'Profiler'
    case gc:
      return 'StrictMode'
    case Bl:
      return 'Suspense'
    case Hl:
      return 'SuspenseList'
  }
  if (typeof t == 'object')
    switch (t.$$typeof) {
      case Cp:
        return (t.displayName || 'Context') + '.Consumer'
      case Ap:
        return (t._context.displayName || 'Context') + '.Provider'
      case yc:
        var e = t.render
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ''),
            (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
          t
        )
      case vc:
        return (
          (e = t.displayName || null), e !== null ? e : ql(t.type) || 'Memo'
        )
      case bt:
        ;(e = t._payload), (t = t._init)
        try {
          return ql(t(e))
        } catch {}
    }
  return null
}
function o0(t) {
  var e = t.type
  switch (t.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (e.displayName || 'Context') + '.Consumer'
    case 10:
      return (e._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ''),
        e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return e
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return ql(e)
    case 8:
      return e === gc ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == 'function') return e.displayName || e.name || null
      if (typeof e == 'string') return e
  }
  return null
}
function mn(t) {
  switch (typeof t) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return t
    case 'object':
      return t
    default:
      return ''
  }
}
function Pp(t) {
  var e = t.type
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === 'input' &&
    (e === 'checkbox' || e === 'radio')
  )
}
function a0(t) {
  var e = Pp(t) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = '' + t[e]
  if (
    !t.hasOwnProperty(e) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      s = n.set
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (o) {
          ;(r = '' + o), s.call(this, o)
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (o) {
          r = '' + o
        },
        stopTracking: function () {
          ;(t._valueTracker = null), delete t[e]
        },
      }
    )
  }
}
function Ls(t) {
  t._valueTracker || (t._valueTracker = a0(t))
}
function kp(t) {
  if (!t) return !1
  var e = t._valueTracker
  if (!e) return !0
  var n = e.getValue(),
    r = ''
  return (
    t && (r = Pp(t) ? (t.checked ? 'true' : 'false') : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  )
}
function Eo(t) {
  if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u'))
    return null
  try {
    return t.activeElement || t.body
  } catch {
    return t.body
  }
}
function Ql(t, e) {
  var n = e.checked
  return ie({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  })
}
function rd(t, e) {
  var n = e.defaultValue == null ? '' : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked
  ;(n = mn(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === 'checkbox' || e.type === 'radio'
          ? e.checked != null
          : e.value != null,
    })
}
function xp(t, e) {
  ;(e = e.checked), e != null && mc(t, 'checked', e, !1)
}
function Kl(t, e) {
  xp(t, e)
  var n = mn(e.value),
    r = e.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
      : t.value !== '' + n && (t.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    t.removeAttribute('value')
    return
  }
  e.hasOwnProperty('value')
    ? Wl(t, e.type, n)
    : e.hasOwnProperty('defaultValue') && Wl(t, e.type, mn(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked)
}
function id(t, e, n) {
  if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
    var r = e.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return
    ;(e = '' + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e)
  }
  ;(n = t.name),
    n !== '' && (t.name = ''),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== '' && (t.name = n)
}
function Wl(t, e, n) {
  ;(e !== 'number' || Eo(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = '' + t._wrapperState.initialValue)
      : t.defaultValue !== '' + n && (t.defaultValue = '' + n))
}
var pi = Array.isArray
function vr(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {}
    for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty('$' + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0)
  } else {
    for (n = '' + mn(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        ;(t[i].selected = !0), r && (t[i].defaultSelected = !0)
        return
      }
      e !== null || t[i].disabled || (e = t[i])
    }
    e !== null && (e.selected = !0)
  }
}
function Gl(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(w(91))
  return ie({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: '' + t._wrapperState.initialValue,
  })
}
function sd(t, e) {
  var n = e.value
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(w(92))
      if (pi(n)) {
        if (1 < n.length) throw Error(w(93))
        n = n[0]
      }
      e = n
    }
    e == null && (e = ''), (n = e)
  }
  t._wrapperState = { initialValue: mn(n) }
}
function Np(t, e) {
  var n = mn(e.value),
    r = mn(e.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = '' + r)
}
function od(t) {
  var e = t.textContent
  e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e)
}
function Dp(t) {
  switch (t) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function bl(t, e) {
  return t == null || t === 'http://www.w3.org/1999/xhtml'
    ? Dp(e)
    : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : t
}
var Os,
  Vp = (function (t) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i)
          })
        }
      : t
  })(function (t, e) {
    if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t)
      t.innerHTML = e
    else {
      for (
        Os = Os || document.createElement('div'),
          Os.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
          e = Os.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild)
      for (; e.firstChild; ) t.appendChild(e.firstChild)
    }
  })
function Fi(t, e) {
  if (e) {
    var n = t.firstChild
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e
      return
    }
  }
  t.textContent = e
}
var wi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  l0 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(wi).forEach(function (t) {
  l0.forEach(function (e) {
    ;(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (wi[e] = wi[t])
  })
})
function Lp(t, e, n) {
  return e == null || typeof e == 'boolean' || e === ''
    ? ''
    : n || typeof e != 'number' || e === 0 || (wi.hasOwnProperty(t) && wi[t])
    ? ('' + e).trim()
    : e + 'px'
}
function Op(t, e) {
  t = t.style
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Lp(n, e[n], r)
      n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i)
    }
}
var u0 = ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function Yl(t, e) {
  if (e) {
    if (u0[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(w(137, t))
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(w(60))
      if (
        typeof e.dangerouslySetInnerHTML != 'object' ||
        !('__html' in e.dangerouslySetInnerHTML)
      )
        throw Error(w(61))
    }
    if (e.style != null && typeof e.style != 'object') throw Error(w(62))
  }
}
function Xl(t, e) {
  if (t.indexOf('-') === -1) return typeof e.is == 'string'
  switch (t) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Jl = null
function _c(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  )
}
var Zl = null,
  _r = null,
  Er = null
function ad(t) {
  if ((t = gs(t))) {
    if (typeof Zl != 'function') throw Error(w(280))
    var e = t.stateNode
    e && ((e = ca(e)), Zl(t.stateNode, t.type, e))
  }
}
function Mp(t) {
  _r ? (Er ? Er.push(t) : (Er = [t])) : (_r = t)
}
function Fp() {
  if (_r) {
    var t = _r,
      e = Er
    if (((Er = _r = null), ad(t), e)) for (t = 0; t < e.length; t++) ad(e[t])
  }
}
function $p(t, e) {
  return t(e)
}
function jp() {}
var el = !1
function Up(t, e, n) {
  if (el) return t(e, n)
  el = !0
  try {
    return $p(t, e, n)
  } finally {
    ;(el = !1), (_r !== null || Er !== null) && (jp(), Fp())
  }
}
function $i(t, e) {
  var n = t.stateNode
  if (n === null) return null
  var r = ca(n)
  if (r === null) return null
  n = r[e]
  e: switch (e) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === 'button' ||
          t === 'input' ||
          t === 'select' ||
          t === 'textarea'
        ))),
        (t = !r)
      break e
    default:
      t = !1
  }
  if (t) return null
  if (n && typeof n != 'function') throw Error(w(231, e, typeof n))
  return n
}
var eu = !1
if (Bt)
  try {
    var ri = {}
    Object.defineProperty(ri, 'passive', {
      get: function () {
        eu = !0
      },
    }),
      window.addEventListener('test', ri, ri),
      window.removeEventListener('test', ri, ri)
  } catch {
    eu = !1
  }
function c0(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    e.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var Ti = !1,
  wo = null,
  To = !1,
  tu = null,
  h0 = {
    onError: function (t) {
      ;(Ti = !0), (wo = t)
    },
  }
function d0(t, e, n, r, i, s, o, a, l) {
  ;(Ti = !1), (wo = null), c0.apply(h0, arguments)
}
function f0(t, e, n, r, i, s, o, a, l) {
  if ((d0.apply(this, arguments), Ti)) {
    if (Ti) {
      var u = wo
      ;(Ti = !1), (wo = null)
    } else throw Error(w(198))
    To || ((To = !0), (tu = u))
  }
}
function Jn(t) {
  var e = t,
    n = t
  if (t.alternate) for (; e.return; ) e = e.return
  else {
    t = e
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return)
    while (t)
  }
  return e.tag === 3 ? n : null
}
function zp(t) {
  if (t.tag === 13) {
    var e = t.memoizedState
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated
  }
  return null
}
function ld(t) {
  if (Jn(t) !== t) throw Error(w(188))
}
function p0(t) {
  var e = t.alternate
  if (!e) {
    if (((e = Jn(t)), e === null)) throw Error(w(188))
    return e !== t ? null : t
  }
  for (var n = t, r = e; ; ) {
    var i = n.return
    if (i === null) break
    var s = i.alternate
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return ld(i), t
        if (s === r) return ld(i), e
        s = s.sibling
      }
      throw Error(w(188))
    }
    if (n.return !== r.return) (n = i), (r = s)
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          ;(o = !0), (n = i), (r = s)
          break
        }
        if (a === r) {
          ;(o = !0), (r = i), (n = s)
          break
        }
        a = a.sibling
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ;(o = !0), (n = s), (r = i)
            break
          }
          if (a === r) {
            ;(o = !0), (r = s), (n = i)
            break
          }
          a = a.sibling
        }
        if (!o) throw Error(w(189))
      }
    }
    if (n.alternate !== r) throw Error(w(190))
  }
  if (n.tag !== 3) throw Error(w(188))
  return n.stateNode.current === n ? t : e
}
function Bp(t) {
  return (t = p0(t)), t !== null ? Hp(t) : null
}
function Hp(t) {
  if (t.tag === 5 || t.tag === 6) return t
  for (t = t.child; t !== null; ) {
    var e = Hp(t)
    if (e !== null) return e
    t = t.sibling
  }
  return null
}
var qp = nt.unstable_scheduleCallback,
  ud = nt.unstable_cancelCallback,
  m0 = nt.unstable_shouldYield,
  g0 = nt.unstable_requestPaint,
  ue = nt.unstable_now,
  y0 = nt.unstable_getCurrentPriorityLevel,
  Ec = nt.unstable_ImmediatePriority,
  Qp = nt.unstable_UserBlockingPriority,
  So = nt.unstable_NormalPriority,
  v0 = nt.unstable_LowPriority,
  Kp = nt.unstable_IdlePriority,
  oa = null,
  xt = null
function _0(t) {
  if (xt && typeof xt.onCommitFiberRoot == 'function')
    try {
      xt.onCommitFiberRoot(oa, t, void 0, (t.current.flags & 128) === 128)
    } catch {}
}
var _t = Math.clz32 ? Math.clz32 : T0,
  E0 = Math.log,
  w0 = Math.LN2
function T0(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((E0(t) / w0) | 0)) | 0
}
var Ms = 64,
  Fs = 4194304
function mi(t) {
  switch (t & -t) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return t
  }
}
function Io(t, e) {
  var n = t.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455
  if (o !== 0) {
    var a = o & ~i
    a !== 0 ? (r = mi(a)) : ((s &= o), s !== 0 && (r = mi(s)))
  } else (o = n & ~i), o !== 0 ? (r = mi(o)) : s !== 0 && (r = mi(s))
  if (r === 0) return 0
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - _t(e)), (i = 1 << n), (r |= t[n]), (e &= ~i)
  return r
}
function S0(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function I0(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - _t(s),
      a = 1 << o,
      l = i[o]
    l === -1
      ? (!(a & n) || a & r) && (i[o] = S0(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a)
  }
}
function nu(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  )
}
function Wp() {
  var t = Ms
  return (Ms <<= 1), !(Ms & 4194240) && (Ms = 64), t
}
function tl(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t)
  return e
}
function ps(t, e, n) {
  ;(t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - _t(e)),
    (t[e] = n)
}
function A0(t, e) {
  var n = t.pendingLanes & ~e
  ;(t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements)
  var r = t.eventTimes
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - _t(n),
      s = 1 << i
    ;(e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s)
  }
}
function wc(t, e) {
  var n = (t.entangledLanes |= e)
  for (t = t.entanglements; n; ) {
    var r = 31 - _t(n),
      i = 1 << r
    ;(i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i)
  }
}
var G = 0
function Gp(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
}
var bp,
  Tc,
  Yp,
  Xp,
  Jp,
  ru = !1,
  $s = [],
  rn = null,
  sn = null,
  on = null,
  ji = new Map(),
  Ui = new Map(),
  Xt = [],
  C0 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function cd(t, e) {
  switch (t) {
    case 'focusin':
    case 'focusout':
      rn = null
      break
    case 'dragenter':
    case 'dragleave':
      sn = null
      break
    case 'mouseover':
    case 'mouseout':
      on = null
      break
    case 'pointerover':
    case 'pointerout':
      ji.delete(e.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ui.delete(e.pointerId)
  }
}
function ii(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = gs(e)), e !== null && Tc(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t)
}
function R0(t, e, n, r, i) {
  switch (e) {
    case 'focusin':
      return (rn = ii(rn, t, e, n, r, i)), !0
    case 'dragenter':
      return (sn = ii(sn, t, e, n, r, i)), !0
    case 'mouseover':
      return (on = ii(on, t, e, n, r, i)), !0
    case 'pointerover':
      var s = i.pointerId
      return ji.set(s, ii(ji.get(s) || null, t, e, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (s = i.pointerId), Ui.set(s, ii(Ui.get(s) || null, t, e, n, r, i)), !0
      )
  }
  return !1
}
function Zp(t) {
  var e = Nn(t.target)
  if (e !== null) {
    var n = Jn(e)
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = zp(n)), e !== null)) {
          ;(t.blockedOn = e),
            Jp(t.priority, function () {
              Yp(n)
            })
          return
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  t.blockedOn = null
}
function oo(t) {
  if (t.blockedOn !== null) return !1
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = iu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent)
    if (n === null) {
      n = t.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Jl = r), n.target.dispatchEvent(r), (Jl = null)
    } else return (e = gs(n)), e !== null && Tc(e), (t.blockedOn = n), !1
    e.shift()
  }
  return !0
}
function hd(t, e, n) {
  oo(t) && n.delete(e)
}
function P0() {
  ;(ru = !1),
    rn !== null && oo(rn) && (rn = null),
    sn !== null && oo(sn) && (sn = null),
    on !== null && oo(on) && (on = null),
    ji.forEach(hd),
    Ui.forEach(hd)
}
function si(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    ru ||
      ((ru = !0), nt.unstable_scheduleCallback(nt.unstable_NormalPriority, P0)))
}
function zi(t) {
  function e(i) {
    return si(i, t)
  }
  if (0 < $s.length) {
    si($s[0], t)
    for (var n = 1; n < $s.length; n++) {
      var r = $s[n]
      r.blockedOn === t && (r.blockedOn = null)
    }
  }
  for (
    rn !== null && si(rn, t),
      sn !== null && si(sn, t),
      on !== null && si(on, t),
      ji.forEach(e),
      Ui.forEach(e),
      n = 0;
    n < Xt.length;
    n++
  )
    (r = Xt[n]), r.blockedOn === t && (r.blockedOn = null)
  for (; 0 < Xt.length && ((n = Xt[0]), n.blockedOn === null); )
    Zp(n), n.blockedOn === null && Xt.shift()
}
var wr = Wt.ReactCurrentBatchConfig,
  Ao = !0
function k0(t, e, n, r) {
  var i = G,
    s = wr.transition
  wr.transition = null
  try {
    ;(G = 1), Sc(t, e, n, r)
  } finally {
    ;(G = i), (wr.transition = s)
  }
}
function x0(t, e, n, r) {
  var i = G,
    s = wr.transition
  wr.transition = null
  try {
    ;(G = 4), Sc(t, e, n, r)
  } finally {
    ;(G = i), (wr.transition = s)
  }
}
function Sc(t, e, n, r) {
  if (Ao) {
    var i = iu(t, e, n, r)
    if (i === null) hl(t, e, r, Co, n), cd(t, r)
    else if (R0(i, t, e, n, r)) r.stopPropagation()
    else if ((cd(t, r), e & 4 && -1 < C0.indexOf(t))) {
      for (; i !== null; ) {
        var s = gs(i)
        if (
          (s !== null && bp(s),
          (s = iu(t, e, n, r)),
          s === null && hl(t, e, r, Co, n),
          s === i)
        )
          break
        i = s
      }
      i !== null && r.stopPropagation()
    } else hl(t, e, r, null, n)
  }
}
var Co = null
function iu(t, e, n, r) {
  if (((Co = null), (t = _c(r)), (t = Nn(t)), t !== null))
    if (((e = Jn(t)), e === null)) t = null
    else if (((n = e.tag), n === 13)) {
      if (((t = zp(e)), t !== null)) return t
      t = null
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null
      t = null
    } else e !== t && (t = null)
  return (Co = t), null
}
function em(t) {
  switch (t) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (y0()) {
        case Ec:
          return 1
        case Qp:
          return 4
        case So:
        case v0:
          return 16
        case Kp:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Zt = null,
  Ic = null,
  ao = null
function tm() {
  if (ao) return ao
  var t,
    e = Ic,
    n = e.length,
    r,
    i = 'value' in Zt ? Zt.value : Zt.textContent,
    s = i.length
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (ao = i.slice(t, 1 < r ? 1 - r : void 0))
}
function lo(t) {
  var e = t.keyCode
  return (
    'charCode' in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  )
}
function js() {
  return !0
}
function dd() {
  return !1
}
function st(t) {
  function e(n, r, i, s, o) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null)
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]))
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? js
        : dd),
      (this.isPropagationStopped = dd),
      this
    )
  }
  return (
    ie(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = js))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = js))
      },
      persist: function () {},
      isPersistent: js,
    }),
    e
  )
}
var Qr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ac = st(Qr),
  ms = ie({}, Qr, { view: 0, detail: 0 }),
  N0 = st(ms),
  nl,
  rl,
  oi,
  aa = ie({}, ms, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Cc,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget
    },
    movementX: function (t) {
      return 'movementX' in t
        ? t.movementX
        : (t !== oi &&
            (oi && t.type === 'mousemove'
              ? ((nl = t.screenX - oi.screenX), (rl = t.screenY - oi.screenY))
              : (rl = nl = 0),
            (oi = t)),
          nl)
    },
    movementY: function (t) {
      return 'movementY' in t ? t.movementY : rl
    },
  }),
  fd = st(aa),
  D0 = ie({}, aa, { dataTransfer: 0 }),
  V0 = st(D0),
  L0 = ie({}, ms, { relatedTarget: 0 }),
  il = st(L0),
  O0 = ie({}, Qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  M0 = st(O0),
  F0 = ie({}, Qr, {
    clipboardData: function (t) {
      return 'clipboardData' in t ? t.clipboardData : window.clipboardData
    },
  }),
  $0 = st(F0),
  j0 = ie({}, Qr, { data: 0 }),
  pd = st(j0),
  U0 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  z0 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  B0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function H0(t) {
  var e = this.nativeEvent
  return e.getModifierState ? e.getModifierState(t) : (t = B0[t]) ? !!e[t] : !1
}
function Cc() {
  return H0
}
var q0 = ie({}, ms, {
    key: function (t) {
      if (t.key) {
        var e = U0[t.key] || t.key
        if (e !== 'Unidentified') return e
      }
      return t.type === 'keypress'
        ? ((t = lo(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
        : t.type === 'keydown' || t.type === 'keyup'
        ? z0[t.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cc,
    charCode: function (t) {
      return t.type === 'keypress' ? lo(t) : 0
    },
    keyCode: function (t) {
      return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
    },
    which: function (t) {
      return t.type === 'keypress'
        ? lo(t)
        : t.type === 'keydown' || t.type === 'keyup'
        ? t.keyCode
        : 0
    },
  }),
  Q0 = st(q0),
  K0 = ie({}, aa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  md = st(K0),
  W0 = ie({}, ms, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cc,
  }),
  G0 = st(W0),
  b0 = ie({}, Qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Y0 = st(b0),
  X0 = ie({}, aa, {
    deltaX: function (t) {
      return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
    },
    deltaY: function (t) {
      return 'deltaY' in t
        ? t.deltaY
        : 'wheelDeltaY' in t
        ? -t.wheelDeltaY
        : 'wheelDelta' in t
        ? -t.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  J0 = st(X0),
  Z0 = [9, 13, 27, 32],
  Rc = Bt && 'CompositionEvent' in window,
  Si = null
Bt && 'documentMode' in document && (Si = document.documentMode)
var e_ = Bt && 'TextEvent' in window && !Si,
  nm = Bt && (!Rc || (Si && 8 < Si && 11 >= Si)),
  gd = String.fromCharCode(32),
  yd = !1
function rm(t, e) {
  switch (t) {
    case 'keyup':
      return Z0.indexOf(e.keyCode) !== -1
    case 'keydown':
      return e.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function im(t) {
  return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null
}
var ar = !1
function t_(t, e) {
  switch (t) {
    case 'compositionend':
      return im(e)
    case 'keypress':
      return e.which !== 32 ? null : ((yd = !0), gd)
    case 'textInput':
      return (t = e.data), t === gd && yd ? null : t
    default:
      return null
  }
}
function n_(t, e) {
  if (ar)
    return t === 'compositionend' || (!Rc && rm(t, e))
      ? ((t = tm()), (ao = Ic = Zt = null), (ar = !1), t)
      : null
  switch (t) {
    case 'paste':
      return null
    case 'keypress':
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char
        if (e.which) return String.fromCharCode(e.which)
      }
      return null
    case 'compositionend':
      return nm && e.locale !== 'ko' ? null : e.data
    default:
      return null
  }
}
var r_ = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function vd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase()
  return e === 'input' ? !!r_[t.type] : e === 'textarea'
}
function sm(t, e, n, r) {
  Mp(r),
    (e = Ro(e, 'onChange')),
    0 < e.length &&
      ((n = new Ac('onChange', 'change', null, n, r)),
      t.push({ event: n, listeners: e }))
}
var Ii = null,
  Bi = null
function i_(t) {
  gm(t, 0)
}
function la(t) {
  var e = cr(t)
  if (kp(e)) return t
}
function s_(t, e) {
  if (t === 'change') return e
}
var om = !1
if (Bt) {
  var sl
  if (Bt) {
    var ol = 'oninput' in document
    if (!ol) {
      var _d = document.createElement('div')
      _d.setAttribute('oninput', 'return;'),
        (ol = typeof _d.oninput == 'function')
    }
    sl = ol
  } else sl = !1
  om = sl && (!document.documentMode || 9 < document.documentMode)
}
function Ed() {
  Ii && (Ii.detachEvent('onpropertychange', am), (Bi = Ii = null))
}
function am(t) {
  if (t.propertyName === 'value' && la(Bi)) {
    var e = []
    sm(e, Bi, t, _c(t)), Up(i_, e)
  }
}
function o_(t, e, n) {
  t === 'focusin'
    ? (Ed(), (Ii = e), (Bi = n), Ii.attachEvent('onpropertychange', am))
    : t === 'focusout' && Ed()
}
function a_(t) {
  if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return la(Bi)
}
function l_(t, e) {
  if (t === 'click') return la(e)
}
function u_(t, e) {
  if (t === 'input' || t === 'change') return la(e)
}
function c_(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
}
var wt = typeof Object.is == 'function' ? Object.is : c_
function Hi(t, e) {
  if (wt(t, e)) return !0
  if (typeof t != 'object' || t === null || typeof e != 'object' || e === null)
    return !1
  var n = Object.keys(t),
    r = Object.keys(e)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!Ul.call(e, i) || !wt(t[i], e[i])) return !1
  }
  return !0
}
function wd(t) {
  for (; t && t.firstChild; ) t = t.firstChild
  return t
}
function Td(t, e) {
  var n = wd(t)
  t = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t }
      t = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = wd(n)
  }
}
function lm(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? lm(t, e.parentNode)
      : 'contains' in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1
}
function um() {
  for (var t = window, e = Eo(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) t = e.contentWindow
    else break
    e = Eo(t.document)
  }
  return e
}
function Pc(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase()
  return (
    e &&
    ((e === 'input' &&
      (t.type === 'text' ||
        t.type === 'search' ||
        t.type === 'tel' ||
        t.type === 'url' ||
        t.type === 'password')) ||
      e === 'textarea' ||
      t.contentEditable === 'true')
  )
}
function h_(t) {
  var e = um(),
    n = t.focusedElem,
    r = t.selectionRange
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    lm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Pc(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        'selectionStart' in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length))
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection()
        var i = n.textContent.length,
          s = Math.min(r.start, i)
        ;(r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Td(n, s))
        var o = Td(n, r)
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)))
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top)
  }
}
var d_ = Bt && 'documentMode' in document && 11 >= document.documentMode,
  lr = null,
  su = null,
  Ai = null,
  ou = !1
function Sd(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  ou ||
    lr == null ||
    lr !== Eo(r) ||
    ((r = lr),
    'selectionStart' in r && Pc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ai && Hi(Ai, r)) ||
      ((Ai = r),
      (r = Ro(su, 'onSelect')),
      0 < r.length &&
        ((e = new Ac('onSelect', 'select', null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = lr))))
}
function Us(t, e) {
  var n = {}
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n['Webkit' + t] = 'webkit' + e),
    (n['Moz' + t] = 'moz' + e),
    n
  )
}
var ur = {
    animationend: Us('Animation', 'AnimationEnd'),
    animationiteration: Us('Animation', 'AnimationIteration'),
    animationstart: Us('Animation', 'AnimationStart'),
    transitionend: Us('Transition', 'TransitionEnd'),
  },
  al = {},
  cm = {}
Bt &&
  ((cm = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ur.animationend.animation,
    delete ur.animationiteration.animation,
    delete ur.animationstart.animation),
  'TransitionEvent' in window || delete ur.transitionend.transition)
function ua(t) {
  if (al[t]) return al[t]
  if (!ur[t]) return t
  var e = ur[t],
    n
  for (n in e) if (e.hasOwnProperty(n) && n in cm) return (al[t] = e[n])
  return t
}
var hm = ua('animationend'),
  dm = ua('animationiteration'),
  fm = ua('animationstart'),
  pm = ua('transitionend'),
  mm = new Map(),
  Id =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function En(t, e) {
  mm.set(t, e), Xn(e, [t])
}
for (var ll = 0; ll < Id.length; ll++) {
  var ul = Id[ll],
    f_ = ul.toLowerCase(),
    p_ = ul[0].toUpperCase() + ul.slice(1)
  En(f_, 'on' + p_)
}
En(hm, 'onAnimationEnd')
En(dm, 'onAnimationIteration')
En(fm, 'onAnimationStart')
En('dblclick', 'onDoubleClick')
En('focusin', 'onFocus')
En('focusout', 'onBlur')
En(pm, 'onTransitionEnd')
xr('onMouseEnter', ['mouseout', 'mouseover'])
xr('onMouseLeave', ['mouseout', 'mouseover'])
xr('onPointerEnter', ['pointerout', 'pointerover'])
xr('onPointerLeave', ['pointerout', 'pointerover'])
Xn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Xn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Xn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Xn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Xn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Xn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var gi =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  m_ = new Set('cancel close invalid load scroll toggle'.split(' ').concat(gi))
function Ad(t, e, n) {
  var r = t.type || 'unknown-event'
  ;(t.currentTarget = n), f0(r, e, void 0, t), (t.currentTarget = null)
}
function gm(t, e) {
  e = (e & 4) !== 0
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event
    r = r.listeners
    e: {
      var s = void 0
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e
          Ad(i, a, u), (s = l)
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e
          Ad(i, a, u), (s = l)
        }
    }
  }
  if (To) throw ((t = tu), (To = !1), (tu = null), t)
}
function X(t, e) {
  var n = e[hu]
  n === void 0 && (n = e[hu] = new Set())
  var r = t + '__bubble'
  n.has(r) || (ym(e, t, 2, !1), n.add(r))
}
function cl(t, e, n) {
  var r = 0
  e && (r |= 4), ym(n, t, r, e)
}
var zs = '_reactListening' + Math.random().toString(36).slice(2)
function qi(t) {
  if (!t[zs]) {
    ;(t[zs] = !0),
      Ip.forEach(function (n) {
        n !== 'selectionchange' && (m_.has(n) || cl(n, !1, t), cl(n, !0, t))
      })
    var e = t.nodeType === 9 ? t : t.ownerDocument
    e === null || e[zs] || ((e[zs] = !0), cl('selectionchange', !1, e))
  }
}
function ym(t, e, n, r) {
  switch (em(e)) {
    case 1:
      var i = k0
      break
    case 4:
      i = x0
      break
    default:
      i = Sc
  }
  ;(n = i.bind(null, e, n, t)),
    (i = void 0),
    !eu ||
      (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1)
}
function hl(t, e, n, r, i) {
  var s = r
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var o = r.tag
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return
            o = o.return
          }
        for (; a !== null; ) {
          if (((o = Nn(a)), o === null)) return
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o
            continue e
          }
          a = a.parentNode
        }
      }
      r = r.return
    }
  Up(function () {
    var u = s,
      c = _c(n),
      h = []
    e: {
      var f = mm.get(t)
      if (f !== void 0) {
        var g = Ac,
          _ = t
        switch (t) {
          case 'keypress':
            if (lo(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = Q0
            break
          case 'focusin':
            ;(_ = 'focus'), (g = il)
            break
          case 'focusout':
            ;(_ = 'blur'), (g = il)
            break
          case 'beforeblur':
          case 'afterblur':
            g = il
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = fd
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = V0
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = G0
            break
          case hm:
          case dm:
          case fm:
            g = M0
            break
          case pm:
            g = Y0
            break
          case 'scroll':
            g = N0
            break
          case 'wheel':
            g = J0
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = $0
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = md
        }
        var E = (e & 4) !== 0,
          N = !E && t === 'scroll',
          p = E ? (f !== null ? f + 'Capture' : null) : f
        E = []
        for (var d = u, m; d !== null; ) {
          m = d
          var v = m.stateNode
          if (
            (m.tag === 5 &&
              v !== null &&
              ((m = v),
              p !== null && ((v = $i(d, p)), v != null && E.push(Qi(d, v, m)))),
            N)
          )
            break
          d = d.return
        }
        0 < E.length &&
          ((f = new g(f, _, null, n, c)), h.push({ event: f, listeners: E }))
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((f = t === 'mouseover' || t === 'pointerover'),
          (g = t === 'mouseout' || t === 'pointerout'),
          f &&
            n !== Jl &&
            (_ = n.relatedTarget || n.fromElement) &&
            (Nn(_) || _[Ht]))
        )
          break e
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((_ = n.relatedTarget || n.toElement),
              (g = u),
              (_ = _ ? Nn(_) : null),
              _ !== null &&
                ((N = Jn(_)), _ !== N || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((g = null), (_ = u)),
          g !== _)
        ) {
          if (
            ((E = fd),
            (v = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (d = 'mouse'),
            (t === 'pointerout' || t === 'pointerover') &&
              ((E = md),
              (v = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (d = 'pointer')),
            (N = g == null ? f : cr(g)),
            (m = _ == null ? f : cr(_)),
            (f = new E(v, d + 'leave', g, n, c)),
            (f.target = N),
            (f.relatedTarget = m),
            (v = null),
            Nn(c) === u &&
              ((E = new E(p, d + 'enter', _, n, c)),
              (E.target = m),
              (E.relatedTarget = N),
              (v = E)),
            (N = v),
            g && _)
          )
            t: {
              for (E = g, p = _, d = 0, m = E; m; m = er(m)) d++
              for (m = 0, v = p; v; v = er(v)) m++
              for (; 0 < d - m; ) (E = er(E)), d--
              for (; 0 < m - d; ) (p = er(p)), m--
              for (; d--; ) {
                if (E === p || (p !== null && E === p.alternate)) break t
                ;(E = er(E)), (p = er(p))
              }
              E = null
            }
          else E = null
          g !== null && Cd(h, f, g, E, !1),
            _ !== null && N !== null && Cd(h, N, _, E, !0)
        }
      }
      e: {
        if (
          ((f = u ? cr(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && f.type === 'file'))
        )
          var C = s_
        else if (vd(f))
          if (om) C = u_
          else {
            C = a_
            var P = o_
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (C = l_)
        if (C && (C = C(t, u))) {
          sm(h, C, n, c)
          break e
        }
        P && P(t, f, u),
          t === 'focusout' &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === 'number' &&
            Wl(f, 'number', f.value)
      }
      switch (((P = u ? cr(u) : window), t)) {
        case 'focusin':
          ;(vd(P) || P.contentEditable === 'true') &&
            ((lr = P), (su = u), (Ai = null))
          break
        case 'focusout':
          Ai = su = lr = null
          break
        case 'mousedown':
          ou = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(ou = !1), Sd(h, n, c)
          break
        case 'selectionchange':
          if (d_) break
        case 'keydown':
        case 'keyup':
          Sd(h, n, c)
      }
      var x
      if (Rc)
        e: {
          switch (t) {
            case 'compositionstart':
              var D = 'onCompositionStart'
              break e
            case 'compositionend':
              D = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              D = 'onCompositionUpdate'
              break e
          }
          D = void 0
        }
      else
        ar
          ? rm(t, n) && (D = 'onCompositionEnd')
          : t === 'keydown' && n.keyCode === 229 && (D = 'onCompositionStart')
      D &&
        (nm &&
          n.locale !== 'ko' &&
          (ar || D !== 'onCompositionStart'
            ? D === 'onCompositionEnd' && ar && (x = tm())
            : ((Zt = c),
              (Ic = 'value' in Zt ? Zt.value : Zt.textContent),
              (ar = !0))),
        (P = Ro(u, D)),
        0 < P.length &&
          ((D = new pd(D, t, null, n, c)),
          h.push({ event: D, listeners: P }),
          x ? (D.data = x) : ((x = im(n)), x !== null && (D.data = x)))),
        (x = e_ ? t_(t, n) : n_(t, n)) &&
          ((u = Ro(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new pd('onBeforeInput', 'beforeinput', null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = x)))
    }
    gm(h, e)
  })
}
function Qi(t, e, n) {
  return { instance: t, listener: e, currentTarget: n }
}
function Ro(t, e) {
  for (var n = e + 'Capture', r = []; t !== null; ) {
    var i = t,
      s = i.stateNode
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = $i(t, n)),
      s != null && r.unshift(Qi(t, s, i)),
      (s = $i(t, e)),
      s != null && r.push(Qi(t, s, i))),
      (t = t.return)
  }
  return r
}
function er(t) {
  if (t === null) return null
  do t = t.return
  while (t && t.tag !== 5)
  return t || null
}
function Cd(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode
    if (l !== null && l === r) break
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = $i(n, s)), l != null && o.unshift(Qi(n, l, a)))
        : i || ((l = $i(n, s)), l != null && o.push(Qi(n, l, a)))),
      (n = n.return)
  }
  o.length !== 0 && t.push({ event: e, listeners: o })
}
var g_ = /\r\n?/g,
  y_ = /\u0000|\uFFFD/g
function Rd(t) {
  return (typeof t == 'string' ? t : '' + t)
    .replace(
      g_,
      `
`
    )
    .replace(y_, '')
}
function Bs(t, e, n) {
  if (((e = Rd(e)), Rd(t) !== e && n)) throw Error(w(425))
}
function Po() {}
var au = null,
  lu = null
function uu(t, e) {
  return (
    t === 'textarea' ||
    t === 'noscript' ||
    typeof e.children == 'string' ||
    typeof e.children == 'number' ||
    (typeof e.dangerouslySetInnerHTML == 'object' &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  )
}
var cu = typeof setTimeout == 'function' ? setTimeout : void 0,
  v_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Pd = typeof Promise == 'function' ? Promise : void 0,
  __ =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Pd < 'u'
      ? function (t) {
          return Pd.resolve(null).then(t).catch(E_)
        }
      : cu
function E_(t) {
  setTimeout(function () {
    throw t
  })
}
function dl(t, e) {
  var n = e,
    r = 0
  do {
    var i = n.nextSibling
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          t.removeChild(i), zi(e)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  zi(e)
}
function an(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType
    if (e === 1 || e === 3) break
    if (e === 8) {
      if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break
      if (e === '/$') return null
    }
  }
  return t
}
function kd(t) {
  t = t.previousSibling
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (e === 0) return t
        e--
      } else n === '/$' && e++
    }
    t = t.previousSibling
  }
  return null
}
var Kr = Math.random().toString(36).slice(2),
  At = '__reactFiber$' + Kr,
  Ki = '__reactProps$' + Kr,
  Ht = '__reactContainer$' + Kr,
  hu = '__reactEvents$' + Kr,
  w_ = '__reactListeners$' + Kr,
  T_ = '__reactHandles$' + Kr
function Nn(t) {
  var e = t[At]
  if (e) return e
  for (var n = t.parentNode; n; ) {
    if ((e = n[Ht] || n[At])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = kd(t); t !== null; ) {
          if ((n = t[At])) return n
          t = kd(t)
        }
      return e
    }
    ;(t = n), (n = t.parentNode)
  }
  return null
}
function gs(t) {
  return (
    (t = t[At] || t[Ht]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  )
}
function cr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode
  throw Error(w(33))
}
function ca(t) {
  return t[Ki] || null
}
var du = [],
  hr = -1
function wn(t) {
  return { current: t }
}
function Z(t) {
  0 > hr || ((t.current = du[hr]), (du[hr] = null), hr--)
}
function Y(t, e) {
  hr++, (du[hr] = t.current), (t.current = e)
}
var gn = {},
  je = wn(gn),
  be = wn(!1),
  Bn = gn
function Nr(t, e) {
  var n = t.type.contextTypes
  if (!n) return gn
  var r = t.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    s
  for (s in n) i[s] = e[s]
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function Ye(t) {
  return (t = t.childContextTypes), t != null
}
function ko() {
  Z(be), Z(je)
}
function xd(t, e, n) {
  if (je.current !== gn) throw Error(w(168))
  Y(je, e), Y(be, n)
}
function vm(t, e, n) {
  var r = t.stateNode
  if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in e)) throw Error(w(108, o0(t) || 'Unknown', i))
  return ie({}, n, r)
}
function xo(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || gn),
    (Bn = je.current),
    Y(je, t),
    Y(be, be.current),
    !0
  )
}
function Nd(t, e, n) {
  var r = t.stateNode
  if (!r) throw Error(w(169))
  n
    ? ((t = vm(t, e, Bn)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      Z(be),
      Z(je),
      Y(je, t))
    : Z(be),
    Y(be, n)
}
var Ft = null,
  ha = !1,
  fl = !1
function _m(t) {
  Ft === null ? (Ft = [t]) : Ft.push(t)
}
function S_(t) {
  ;(ha = !0), _m(t)
}
function Tn() {
  if (!fl && Ft !== null) {
    fl = !0
    var t = 0,
      e = G
    try {
      var n = Ft
      for (G = 1; t < n.length; t++) {
        var r = n[t]
        do r = r(!0)
        while (r !== null)
      }
      ;(Ft = null), (ha = !1)
    } catch (i) {
      throw (Ft !== null && (Ft = Ft.slice(t + 1)), qp(Ec, Tn), i)
    } finally {
      ;(G = e), (fl = !1)
    }
  }
  return null
}
var dr = [],
  fr = 0,
  No = null,
  Do = 0,
  ot = [],
  at = 0,
  Hn = null,
  $t = 1,
  jt = ''
function Rn(t, e) {
  ;(dr[fr++] = Do), (dr[fr++] = No), (No = t), (Do = e)
}
function Em(t, e, n) {
  ;(ot[at++] = $t), (ot[at++] = jt), (ot[at++] = Hn), (Hn = t)
  var r = $t
  t = jt
  var i = 32 - _t(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var s = 32 - _t(e) + i
  if (30 < s) {
    var o = i - (i % 5)
    ;(s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      ($t = (1 << (32 - _t(e) + i)) | (n << i) | r),
      (jt = s + t)
  } else ($t = (1 << s) | (n << i) | r), (jt = t)
}
function kc(t) {
  t.return !== null && (Rn(t, 1), Em(t, 1, 0))
}
function xc(t) {
  for (; t === No; )
    (No = dr[--fr]), (dr[fr] = null), (Do = dr[--fr]), (dr[fr] = null)
  for (; t === Hn; )
    (Hn = ot[--at]),
      (ot[at] = null),
      (jt = ot[--at]),
      (ot[at] = null),
      ($t = ot[--at]),
      (ot[at] = null)
}
var tt = null,
  et = null,
  ee = !1,
  yt = null
function wm(t, e) {
  var n = ut(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n)
}
function Dd(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (tt = t), (et = an(e.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (tt = t), (et = null), !0) : !1
      )
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Hn !== null ? { id: $t, overflow: jt } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (tt = t),
            (et = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function fu(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function pu(t) {
  if (ee) {
    var e = et
    if (e) {
      var n = e
      if (!Dd(t, e)) {
        if (fu(t)) throw Error(w(418))
        e = an(n.nextSibling)
        var r = tt
        e && Dd(t, e)
          ? wm(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (ee = !1), (tt = t))
      }
    } else {
      if (fu(t)) throw Error(w(418))
      ;(t.flags = (t.flags & -4097) | 2), (ee = !1), (tt = t)
    }
  }
}
function Vd(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return
  tt = t
}
function Hs(t) {
  if (t !== tt) return !1
  if (!ee) return Vd(t), (ee = !0), !1
  var e
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== 'head' && e !== 'body' && !uu(t.type, t.memoizedProps))),
    e && (e = et))
  ) {
    if (fu(t)) throw (Tm(), Error(w(418)))
    for (; e; ) wm(t, e), (e = an(e.nextSibling))
  }
  if ((Vd(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(w(317))
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data
          if (n === '/$') {
            if (e === 0) {
              et = an(t.nextSibling)
              break e
            }
            e--
          } else (n !== '$' && n !== '$!' && n !== '$?') || e++
        }
        t = t.nextSibling
      }
      et = null
    }
  } else et = tt ? an(t.stateNode.nextSibling) : null
  return !0
}
function Tm() {
  for (var t = et; t; ) t = an(t.nextSibling)
}
function Dr() {
  ;(et = tt = null), (ee = !1)
}
function Nc(t) {
  yt === null ? (yt = [t]) : yt.push(t)
}
var I_ = Wt.ReactCurrentBatchConfig
function mt(t, e) {
  if (t && t.defaultProps) {
    ;(e = ie({}, e)), (t = t.defaultProps)
    for (var n in t) e[n] === void 0 && (e[n] = t[n])
    return e
  }
  return e
}
var Vo = wn(null),
  Lo = null,
  pr = null,
  Dc = null
function Vc() {
  Dc = pr = Lo = null
}
function Lc(t) {
  var e = Vo.current
  Z(Vo), (t._currentValue = e)
}
function mu(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break
    t = t.return
  }
}
function Tr(t, e) {
  ;(Lo = t),
    (Dc = pr = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (Ge = !0), (t.firstContext = null))
}
function ht(t) {
  var e = t._currentValue
  if (Dc !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), pr === null)) {
      if (Lo === null) throw Error(w(308))
      ;(pr = t), (Lo.dependencies = { lanes: 0, firstContext: t })
    } else pr = pr.next = t
  return e
}
var Dn = null
function Oc(t) {
  Dn === null ? (Dn = [t]) : Dn.push(t)
}
function Sm(t, e, n, r) {
  var i = e.interleaved
  return (
    i === null ? ((n.next = n), Oc(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    qt(t, r)
  )
}
function qt(t, e) {
  t.lanes |= e
  var n = t.alternate
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return)
  return n.tag === 3 ? n.stateNode : null
}
var Yt = !1
function Mc(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Im(t, e) {
  ;(t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      })
}
function zt(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function ln(t, e, n) {
  var r = t.updateQueue
  if (r === null) return null
  if (((r = r.shared), Q & 2)) {
    var i = r.pending
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      qt(t, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Oc(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    qt(t, n)
  )
}
function uo(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes
    ;(r &= t.pendingLanes), (n |= r), (e.lanes = n), wc(t, n)
  }
}
function Ld(t, e) {
  var n = t.updateQueue,
    r = t.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next)
      } while (n !== null)
      s === null ? (i = s = e) : (s = s.next = e)
    } else i = s = e
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n)
    return
  }
  ;(t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e)
}
function Oo(t, e, n, r) {
  var i = t.updateQueue
  Yt = !1
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending
  if (a !== null) {
    i.shared.pending = null
    var l = a,
      u = l.next
    ;(l.next = null), o === null ? (s = u) : (o.next = u), (o = l)
    var c = t.alternate
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)))
  }
  if (s !== null) {
    var h = i.baseState
    ;(o = 0), (c = u = l = null), (a = s)
    do {
      var f = a.lane,
        g = a.eventTime
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            })
        e: {
          var _ = t,
            E = a
          switch (((f = e), (g = n), E.tag)) {
            case 1:
              if (((_ = E.payload), typeof _ == 'function')) {
                h = _.call(g, h, f)
                break e
              }
              h = _
              break e
            case 3:
              _.flags = (_.flags & -65537) | 128
            case 0:
              if (
                ((_ = E.payload),
                (f = typeof _ == 'function' ? _.call(g, h, f) : _),
                f == null)
              )
                break e
              h = ie({}, h, f)
              break e
            case 2:
              Yt = !0
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a))
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = h)) : (c = c.next = g),
          (o |= f)
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break
        ;(f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null)
      }
    } while (1)
    if (
      (c === null && (l = h),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e
      do (o |= i.lane), (i = i.next)
      while (i !== e)
    } else s === null && (i.shared.lanes = 0)
    ;(Qn |= o), (t.lanes = o), (t.memoizedState = h)
  }
}
function Od(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(w(191, i))
        i.call(r)
      }
    }
}
var Am = new Sp.Component().refs
function gu(t, e, n, r) {
  ;(e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : ie({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var da = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Jn(t) === t : !1
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals
    var r = qe(),
      i = cn(t),
      s = zt(r, i)
    ;(s.payload = e),
      n != null && (s.callback = n),
      (e = ln(t, s, i)),
      e !== null && (Et(e, t, i, r), uo(e, t, i))
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals
    var r = qe(),
      i = cn(t),
      s = zt(r, i)
    ;(s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = ln(t, s, i)),
      e !== null && (Et(e, t, i, r), uo(e, t, i))
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals
    var n = qe(),
      r = cn(t),
      i = zt(n, r)
    ;(i.tag = 2),
      e != null && (i.callback = e),
      (e = ln(t, i, r)),
      e !== null && (Et(e, t, r, n), uo(e, t, r))
  },
}
function Md(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == 'function'
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Hi(n, r) || !Hi(i, s)
      : !0
  )
}
function Cm(t, e, n) {
  var r = !1,
    i = gn,
    s = e.contextType
  return (
    typeof s == 'object' && s !== null
      ? (s = ht(s))
      : ((i = Ye(e) ? Bn : je.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? Nr(t, i) : gn)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = da),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  )
}
function Fd(t, e, n, r) {
  ;(t = e.state),
    typeof e.componentWillReceiveProps == 'function' &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && da.enqueueReplaceState(e, e.state, null)
}
function yu(t, e, n, r) {
  var i = t.stateNode
  ;(i.props = n), (i.state = t.memoizedState), (i.refs = Am), Mc(t)
  var s = e.contextType
  typeof s == 'object' && s !== null
    ? (i.context = ht(s))
    : ((s = Ye(e) ? Bn : je.current), (i.context = Nr(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == 'function' && (gu(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((e = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && da.enqueueReplaceState(i, i.state, null),
      Oo(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == 'function' && (t.flags |= 4194308)
}
function ai(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309))
        var r = n.stateNode
      }
      if (!r) throw Error(w(147, t))
      var i = r,
        s = '' + t
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == 'function' &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs
            a === Am && (a = i.refs = {}), o === null ? delete a[s] : (a[s] = o)
          }),
          (e._stringRef = s),
          e)
    }
    if (typeof t != 'string') throw Error(w(284))
    if (!n._owner) throw Error(w(290, t))
  }
  return t
}
function qs(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      w(
        31,
        t === '[object Object]'
          ? 'object with keys {' + Object.keys(e).join(', ') + '}'
          : t
      )
    ))
  )
}
function $d(t) {
  var e = t._init
  return e(t._payload)
}
function Rm(t) {
  function e(p, d) {
    if (t) {
      var m = p.deletions
      m === null ? ((p.deletions = [d]), (p.flags |= 16)) : m.push(d)
    }
  }
  function n(p, d) {
    if (!t) return null
    for (; d !== null; ) e(p, d), (d = d.sibling)
    return null
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling)
    return p
  }
  function i(p, d) {
    return (p = hn(p, d)), (p.index = 0), (p.sibling = null), p
  }
  function s(p, d, m) {
    return (
      (p.index = m),
      t
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((p.flags |= 2), d) : m)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    )
  }
  function o(p) {
    return t && p.alternate === null && (p.flags |= 2), p
  }
  function a(p, d, m, v) {
    return d === null || d.tag !== 6
      ? ((d = El(m, p.mode, v)), (d.return = p), d)
      : ((d = i(d, m)), (d.return = p), d)
  }
  function l(p, d, m, v) {
    var C = m.type
    return C === or
      ? c(p, d, m.props.children, v, m.key)
      : d !== null &&
        (d.elementType === C ||
          (typeof C == 'object' &&
            C !== null &&
            C.$$typeof === bt &&
            $d(C) === d.type))
      ? ((v = i(d, m.props)), (v.ref = ai(p, d, m)), (v.return = p), v)
      : ((v = go(m.type, m.key, m.props, null, p.mode, v)),
        (v.ref = ai(p, d, m)),
        (v.return = p),
        v)
  }
  function u(p, d, m, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = wl(m, p.mode, v)), (d.return = p), d)
      : ((d = i(d, m.children || [])), (d.return = p), d)
  }
  function c(p, d, m, v, C) {
    return d === null || d.tag !== 7
      ? ((d = jn(m, p.mode, v, C)), (d.return = p), d)
      : ((d = i(d, m)), (d.return = p), d)
  }
  function h(p, d, m) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = El('' + d, p.mode, m)), (d.return = p), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case Vs:
          return (
            (m = go(d.type, d.key, d.props, null, p.mode, m)),
            (m.ref = ai(p, null, d)),
            (m.return = p),
            m
          )
        case sr:
          return (d = wl(d, p.mode, m)), (d.return = p), d
        case bt:
          var v = d._init
          return h(p, v(d._payload), m)
      }
      if (pi(d) || ni(d)) return (d = jn(d, p.mode, m, null)), (d.return = p), d
      qs(p, d)
    }
    return null
  }
  function f(p, d, m, v) {
    var C = d !== null ? d.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return C !== null ? null : a(p, d, '' + m, v)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Vs:
          return m.key === C ? l(p, d, m, v) : null
        case sr:
          return m.key === C ? u(p, d, m, v) : null
        case bt:
          return (C = m._init), f(p, d, C(m._payload), v)
      }
      if (pi(m) || ni(m)) return C !== null ? null : c(p, d, m, v, null)
      qs(p, m)
    }
    return null
  }
  function g(p, d, m, v, C) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (p = p.get(m) || null), a(d, p, '' + v, C)
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Vs:
          return (p = p.get(v.key === null ? m : v.key) || null), l(d, p, v, C)
        case sr:
          return (p = p.get(v.key === null ? m : v.key) || null), u(d, p, v, C)
        case bt:
          var P = v._init
          return g(p, d, m, P(v._payload), C)
      }
      if (pi(v) || ni(v)) return (p = p.get(m) || null), c(d, p, v, C, null)
      qs(d, v)
    }
    return null
  }
  function _(p, d, m, v) {
    for (
      var C = null, P = null, x = d, D = (d = 0), te = null;
      x !== null && D < m.length;
      D++
    ) {
      x.index > D ? ((te = x), (x = null)) : (te = x.sibling)
      var j = f(p, x, m[D], v)
      if (j === null) {
        x === null && (x = te)
        break
      }
      t && x && j.alternate === null && e(p, x),
        (d = s(j, d, D)),
        P === null ? (C = j) : (P.sibling = j),
        (P = j),
        (x = te)
    }
    if (D === m.length) return n(p, x), ee && Rn(p, D), C
    if (x === null) {
      for (; D < m.length; D++)
        (x = h(p, m[D], v)),
          x !== null &&
            ((d = s(x, d, D)), P === null ? (C = x) : (P.sibling = x), (P = x))
      return ee && Rn(p, D), C
    }
    for (x = r(p, x); D < m.length; D++)
      (te = g(x, p, D, m[D], v)),
        te !== null &&
          (t && te.alternate !== null && x.delete(te.key === null ? D : te.key),
          (d = s(te, d, D)),
          P === null ? (C = te) : (P.sibling = te),
          (P = te))
    return (
      t &&
        x.forEach(function (ft) {
          return e(p, ft)
        }),
      ee && Rn(p, D),
      C
    )
  }
  function E(p, d, m, v) {
    var C = ni(m)
    if (typeof C != 'function') throw Error(w(150))
    if (((m = C.call(m)), m == null)) throw Error(w(151))
    for (
      var P = (C = null), x = d, D = (d = 0), te = null, j = m.next();
      x !== null && !j.done;
      D++, j = m.next()
    ) {
      x.index > D ? ((te = x), (x = null)) : (te = x.sibling)
      var ft = f(p, x, j.value, v)
      if (ft === null) {
        x === null && (x = te)
        break
      }
      t && x && ft.alternate === null && e(p, x),
        (d = s(ft, d, D)),
        P === null ? (C = ft) : (P.sibling = ft),
        (P = ft),
        (x = te)
    }
    if (j.done) return n(p, x), ee && Rn(p, D), C
    if (x === null) {
      for (; !j.done; D++, j = m.next())
        (j = h(p, j.value, v)),
          j !== null &&
            ((d = s(j, d, D)), P === null ? (C = j) : (P.sibling = j), (P = j))
      return ee && Rn(p, D), C
    }
    for (x = r(p, x); !j.done; D++, j = m.next())
      (j = g(x, p, D, j.value, v)),
        j !== null &&
          (t && j.alternate !== null && x.delete(j.key === null ? D : j.key),
          (d = s(j, d, D)),
          P === null ? (C = j) : (P.sibling = j),
          (P = j))
    return (
      t &&
        x.forEach(function (ei) {
          return e(p, ei)
        }),
      ee && Rn(p, D),
      C
    )
  }
  function N(p, d, m, v) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === or &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Vs:
          e: {
            for (var C = m.key, P = d; P !== null; ) {
              if (P.key === C) {
                if (((C = m.type), C === or)) {
                  if (P.tag === 7) {
                    n(p, P.sibling),
                      (d = i(P, m.props.children)),
                      (d.return = p),
                      (p = d)
                    break e
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === bt &&
                    $d(C) === P.type)
                ) {
                  n(p, P.sibling),
                    (d = i(P, m.props)),
                    (d.ref = ai(p, P, m)),
                    (d.return = p),
                    (p = d)
                  break e
                }
                n(p, P)
                break
              } else e(p, P)
              P = P.sibling
            }
            m.type === or
              ? ((d = jn(m.props.children, p.mode, v, m.key)),
                (d.return = p),
                (p = d))
              : ((v = go(m.type, m.key, m.props, null, p.mode, v)),
                (v.ref = ai(p, d, m)),
                (v.return = p),
                (p = v))
          }
          return o(p)
        case sr:
          e: {
            for (P = m.key; d !== null; ) {
              if (d.key === P)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(p, d.sibling),
                    (d = i(d, m.children || [])),
                    (d.return = p),
                    (p = d)
                  break e
                } else {
                  n(p, d)
                  break
                }
              else e(p, d)
              d = d.sibling
            }
            ;(d = wl(m, p.mode, v)), (d.return = p), (p = d)
          }
          return o(p)
        case bt:
          return (P = m._init), N(p, d, P(m._payload), v)
      }
      if (pi(m)) return _(p, d, m, v)
      if (ni(m)) return E(p, d, m, v)
      qs(p, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = i(d, m)), (d.return = p), (p = d))
          : (n(p, d), (d = El(m, p.mode, v)), (d.return = p), (p = d)),
        o(p))
      : n(p, d)
  }
  return N
}
var Vr = Rm(!0),
  Pm = Rm(!1),
  ys = {},
  Nt = wn(ys),
  Wi = wn(ys),
  Gi = wn(ys)
function Vn(t) {
  if (t === ys) throw Error(w(174))
  return t
}
function Fc(t, e) {
  switch ((Y(Gi, e), Y(Wi, t), Y(Nt, ys), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : bl(null, '')
      break
    default:
      ;(t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = bl(e, t))
  }
  Z(Nt), Y(Nt, e)
}
function Lr() {
  Z(Nt), Z(Wi), Z(Gi)
}
function km(t) {
  Vn(Gi.current)
  var e = Vn(Nt.current),
    n = bl(e, t.type)
  e !== n && (Y(Wi, t), Y(Nt, n))
}
function $c(t) {
  Wi.current === t && (Z(Nt), Z(Wi))
}
var ne = wn(0)
function Mo(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return e
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e
    } else if (e.child !== null) {
      ;(e.child.return = e), (e = e.child)
      continue
    }
    if (e === t) break
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null
      e = e.return
    }
    ;(e.sibling.return = e.return), (e = e.sibling)
  }
  return null
}
var pl = []
function jc() {
  for (var t = 0; t < pl.length; t++) pl[t]._workInProgressVersionPrimary = null
  pl.length = 0
}
var co = Wt.ReactCurrentDispatcher,
  ml = Wt.ReactCurrentBatchConfig,
  qn = 0,
  re = null,
  me = null,
  Ee = null,
  Fo = !1,
  Ci = !1,
  bi = 0,
  A_ = 0
function Ne() {
  throw Error(w(321))
}
function Uc(t, e) {
  if (e === null) return !1
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!wt(t[n], e[n])) return !1
  return !0
}
function zc(t, e, n, r, i, s) {
  if (
    ((qn = s),
    (re = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (co.current = t === null || t.memoizedState === null ? k_ : x_),
    (t = n(r, i)),
    Ci)
  ) {
    s = 0
    do {
      if (((Ci = !1), (bi = 0), 25 <= s)) throw Error(w(301))
      ;(s += 1),
        (Ee = me = null),
        (e.updateQueue = null),
        (co.current = N_),
        (t = n(r, i))
    } while (Ci)
  }
  if (
    ((co.current = $o),
    (e = me !== null && me.next !== null),
    (qn = 0),
    (Ee = me = re = null),
    (Fo = !1),
    e)
  )
    throw Error(w(300))
  return t
}
function Bc() {
  var t = bi !== 0
  return (bi = 0), t
}
function It() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return Ee === null ? (re.memoizedState = Ee = t) : (Ee = Ee.next = t), Ee
}
function dt() {
  if (me === null) {
    var t = re.alternate
    t = t !== null ? t.memoizedState : null
  } else t = me.next
  var e = Ee === null ? re.memoizedState : Ee.next
  if (e !== null) (Ee = e), (me = t)
  else {
    if (t === null) throw Error(w(310))
    ;(me = t),
      (t = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      Ee === null ? (re.memoizedState = Ee = t) : (Ee = Ee.next = t)
  }
  return Ee
}
function Yi(t, e) {
  return typeof e == 'function' ? e(t) : e
}
function gl(t) {
  var e = dt(),
    n = e.queue
  if (n === null) throw Error(w(311))
  n.lastRenderedReducer = t
  var r = me,
    i = r.baseQueue,
    s = n.pending
  if (s !== null) {
    if (i !== null) {
      var o = i.next
      ;(i.next = s.next), (s.next = o)
    }
    ;(r.baseQueue = i = s), (n.pending = null)
  }
  if (i !== null) {
    ;(s = i.next), (r = r.baseState)
    var a = (o = null),
      l = null,
      u = s
    do {
      var c = u.lane
      if ((qn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action))
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        l === null ? ((a = l = h), (o = r)) : (l = l.next = h),
          (re.lanes |= c),
          (Qn |= c)
      }
      u = u.next
    } while (u !== null && u !== s)
    l === null ? (o = r) : (l.next = a),
      wt(r, e.memoizedState) || (Ge = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r)
  }
  if (((t = n.interleaved), t !== null)) {
    i = t
    do (s = i.lane), (re.lanes |= s), (Qn |= s), (i = i.next)
    while (i !== t)
  } else i === null && (n.lanes = 0)
  return [e.memoizedState, n.dispatch]
}
function yl(t) {
  var e = dt(),
    n = e.queue
  if (n === null) throw Error(w(311))
  n.lastRenderedReducer = t
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState
  if (i !== null) {
    n.pending = null
    var o = (i = i.next)
    do (s = t(s, o.action)), (o = o.next)
    while (o !== i)
    wt(s, e.memoizedState) || (Ge = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s)
  }
  return [s, r]
}
function xm() {}
function Nm(t, e) {
  var n = re,
    r = dt(),
    i = e(),
    s = !wt(r.memoizedState, i)
  if (
    (s && ((r.memoizedState = i), (Ge = !0)),
    (r = r.queue),
    Hc(Lm.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xi(9, Vm.bind(null, n, r, i, e), void 0, null),
      we === null)
    )
      throw Error(w(349))
    qn & 30 || Dm(n, e, i)
  }
  return i
}
function Dm(t, e, n) {
  ;(t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = re.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (re.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t))
}
function Vm(t, e, n, r) {
  ;(e.value = n), (e.getSnapshot = r), Om(e) && Mm(t)
}
function Lm(t, e, n) {
  return n(function () {
    Om(e) && Mm(t)
  })
}
function Om(t) {
  var e = t.getSnapshot
  t = t.value
  try {
    var n = e()
    return !wt(t, n)
  } catch {
    return !0
  }
}
function Mm(t) {
  var e = qt(t, 1)
  e !== null && Et(e, t, 1, -1)
}
function jd(t) {
  var e = It()
  return (
    typeof t == 'function' && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yi,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = P_.bind(null, re, t)),
    [e.memoizedState, t]
  )
}
function Xi(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = re.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (re.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  )
}
function Fm() {
  return dt().memoizedState
}
function ho(t, e, n, r) {
  var i = It()
  ;(re.flags |= t),
    (i.memoizedState = Xi(1 | e, n, void 0, r === void 0 ? null : r))
}
function fa(t, e, n, r) {
  var i = dt()
  r = r === void 0 ? null : r
  var s = void 0
  if (me !== null) {
    var o = me.memoizedState
    if (((s = o.destroy), r !== null && Uc(r, o.deps))) {
      i.memoizedState = Xi(e, n, s, r)
      return
    }
  }
  ;(re.flags |= t), (i.memoizedState = Xi(1 | e, n, s, r))
}
function Ud(t, e) {
  return ho(8390656, 8, t, e)
}
function Hc(t, e) {
  return fa(2048, 8, t, e)
}
function $m(t, e) {
  return fa(4, 2, t, e)
}
function jm(t, e) {
  return fa(4, 4, t, e)
}
function Um(t, e) {
  if (typeof e == 'function')
    return (
      (t = t()),
      e(t),
      function () {
        e(null)
      }
    )
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null
      }
    )
}
function zm(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), fa(4, 4, Um.bind(null, e, t), n)
  )
}
function qc() {}
function Bm(t, e) {
  var n = dt()
  e = e === void 0 ? null : e
  var r = n.memoizedState
  return r !== null && e !== null && Uc(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t)
}
function Hm(t, e) {
  var n = dt()
  e = e === void 0 ? null : e
  var r = n.memoizedState
  return r !== null && e !== null && Uc(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t)
}
function qm(t, e, n) {
  return qn & 21
    ? (wt(n, e) || ((n = Wp()), (re.lanes |= n), (Qn |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (Ge = !0)), (t.memoizedState = n))
}
function C_(t, e) {
  var n = G
  ;(G = n !== 0 && 4 > n ? n : 4), t(!0)
  var r = ml.transition
  ml.transition = {}
  try {
    t(!1), e()
  } finally {
    ;(G = n), (ml.transition = r)
  }
}
function Qm() {
  return dt().memoizedState
}
function R_(t, e, n) {
  var r = cn(t)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Km(t))
  )
    Wm(e, n)
  else if (((n = Sm(t, e, n, r)), n !== null)) {
    var i = qe()
    Et(n, t, r, i), Gm(n, e, r)
  }
}
function P_(t, e, n) {
  var r = cn(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Km(t)) Wm(e, i)
  else {
    var s = t.alternate
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, n)
        if (((i.hasEagerState = !0), (i.eagerState = a), wt(a, o))) {
          var l = e.interleaved
          l === null
            ? ((i.next = i), Oc(e))
            : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Sm(t, e, i, r)),
      n !== null && ((i = qe()), Et(n, t, r, i), Gm(n, e, r))
  }
}
function Km(t) {
  var e = t.alternate
  return t === re || (e !== null && e === re)
}
function Wm(t, e) {
  Ci = Fo = !0
  var n = t.pending
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e)
}
function Gm(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes
    ;(r &= t.pendingLanes), (n |= r), (e.lanes = n), wc(t, n)
  }
}
var $o = {
    readContext: ht,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  k_ = {
    readContext: ht,
    useCallback: function (t, e) {
      return (It().memoizedState = [t, e === void 0 ? null : e]), t
    },
    useContext: ht,
    useEffect: Ud,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        ho(4194308, 4, Um.bind(null, e, t), n)
      )
    },
    useLayoutEffect: function (t, e) {
      return ho(4194308, 4, t, e)
    },
    useInsertionEffect: function (t, e) {
      return ho(4, 2, t, e)
    },
    useMemo: function (t, e) {
      var n = It()
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      )
    },
    useReducer: function (t, e, n) {
      var r = It()
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = R_.bind(null, re, t)),
        [r.memoizedState, t]
      )
    },
    useRef: function (t) {
      var e = It()
      return (t = { current: t }), (e.memoizedState = t)
    },
    useState: jd,
    useDebugValue: qc,
    useDeferredValue: function (t) {
      return (It().memoizedState = t)
    },
    useTransition: function () {
      var t = jd(!1),
        e = t[0]
      return (t = C_.bind(null, t[1])), (It().memoizedState = t), [e, t]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = re,
        i = It()
      if (ee) {
        if (n === void 0) throw Error(w(407))
        n = n()
      } else {
        if (((n = e()), we === null)) throw Error(w(349))
        qn & 30 || Dm(r, e, n)
      }
      i.memoizedState = n
      var s = { value: n, getSnapshot: e }
      return (
        (i.queue = s),
        Ud(Lm.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        Xi(9, Vm.bind(null, r, s, n, e), void 0, null),
        n
      )
    },
    useId: function () {
      var t = It(),
        e = we.identifierPrefix
      if (ee) {
        var n = jt,
          r = $t
        ;(n = (r & ~(1 << (32 - _t(r) - 1))).toString(32) + n),
          (e = ':' + e + 'R' + n),
          (n = bi++),
          0 < n && (e += 'H' + n.toString(32)),
          (e += ':')
      } else (n = A_++), (e = ':' + e + 'r' + n.toString(32) + ':')
      return (t.memoizedState = e)
    },
    unstable_isNewReconciler: !1,
  },
  x_ = {
    readContext: ht,
    useCallback: Bm,
    useContext: ht,
    useEffect: Hc,
    useImperativeHandle: zm,
    useInsertionEffect: $m,
    useLayoutEffect: jm,
    useMemo: Hm,
    useReducer: gl,
    useRef: Fm,
    useState: function () {
      return gl(Yi)
    },
    useDebugValue: qc,
    useDeferredValue: function (t) {
      var e = dt()
      return qm(e, me.memoizedState, t)
    },
    useTransition: function () {
      var t = gl(Yi)[0],
        e = dt().memoizedState
      return [t, e]
    },
    useMutableSource: xm,
    useSyncExternalStore: Nm,
    useId: Qm,
    unstable_isNewReconciler: !1,
  },
  N_ = {
    readContext: ht,
    useCallback: Bm,
    useContext: ht,
    useEffect: Hc,
    useImperativeHandle: zm,
    useInsertionEffect: $m,
    useLayoutEffect: jm,
    useMemo: Hm,
    useReducer: yl,
    useRef: Fm,
    useState: function () {
      return yl(Yi)
    },
    useDebugValue: qc,
    useDeferredValue: function (t) {
      var e = dt()
      return me === null ? (e.memoizedState = t) : qm(e, me.memoizedState, t)
    },
    useTransition: function () {
      var t = yl(Yi)[0],
        e = dt().memoizedState
      return [t, e]
    },
    useMutableSource: xm,
    useSyncExternalStore: Nm,
    useId: Qm,
    unstable_isNewReconciler: !1,
  }
function Or(t, e) {
  try {
    var n = '',
      r = e
    do (n += s0(r)), (r = r.return)
    while (r)
    var i = n
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack
  }
  return { value: t, source: e, stack: i, digest: null }
}
function vl(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null }
}
function vu(t, e) {
  try {
    console.error(e.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var D_ = typeof WeakMap == 'function' ? WeakMap : Map
function bm(t, e, n) {
  ;(n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = e.value
  return (
    (n.callback = function () {
      Uo || ((Uo = !0), (Pu = r)), vu(t, e)
    }),
    n
  )
}
function Ym(t, e, n) {
  ;(n = zt(-1, n)), (n.tag = 3)
  var r = t.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = e.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        vu(t, e)
      })
  }
  var s = t.stateNode
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        vu(t, e),
          typeof r != 'function' &&
            (un === null ? (un = new Set([this])) : un.add(this))
        var o = e.stack
        this.componentDidCatch(e.value, { componentStack: o !== null ? o : '' })
      }),
    n
  )
}
function zd(t, e, n) {
  var r = t.pingCache
  if (r === null) {
    r = t.pingCache = new D_()
    var i = new Set()
    r.set(e, i)
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i))
  i.has(n) || (i.add(n), (t = K_.bind(null, t, e, n)), e.then(t, t))
}
function Bd(t) {
  do {
    var e
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t
    t = t.return
  } while (t !== null)
  return null
}
function Hd(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = zt(-1, 1)), (e.tag = 2), ln(n, e, 1))),
          (n.lanes |= 1)),
      t)
}
var V_ = Wt.ReactCurrentOwner,
  Ge = !1
function ze(t, e, n, r) {
  e.child = t === null ? Pm(e, null, n, r) : Vr(e, t.child, n, r)
}
function qd(t, e, n, r, i) {
  n = n.render
  var s = e.ref
  return (
    Tr(e, i),
    (r = zc(t, e, n, r, s, i)),
    (n = Bc()),
    t !== null && !Ge
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Qt(t, e, i))
      : (ee && n && kc(e), (e.flags |= 1), ze(t, e, r, i), e.child)
  )
}
function Qd(t, e, n, r, i) {
  if (t === null) {
    var s = n.type
    return typeof s == 'function' &&
      !Jc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), Xm(t, e, s, r, i))
      : ((t = go(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t))
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Hi), n(o, r) && t.ref === e.ref)
    )
      return Qt(t, e, i)
  }
  return (
    (e.flags |= 1),
    (t = hn(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  )
}
function Xm(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps
    if (Hi(s, r) && t.ref === e.ref)
      if (((Ge = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (Ge = !0)
      else return (e.lanes = t.lanes), Qt(t, e, i)
  }
  return _u(t, e, n, r, i)
}
function Jm(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null
  if (r.mode === 'hidden')
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(gr, Ze),
        (Ze |= n)
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          Y(gr, Ze),
          (Ze |= t),
          null
        )
      ;(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Y(gr, Ze),
        (Ze |= r)
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      Y(gr, Ze),
      (Ze |= r)
  return ze(t, e, i, n), e.child
}
function Zm(t, e) {
  var n = e.ref
  ;((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152))
}
function _u(t, e, n, r, i) {
  var s = Ye(n) ? Bn : je.current
  return (
    (s = Nr(e, s)),
    Tr(e, i),
    (n = zc(t, e, n, r, s, i)),
    (r = Bc()),
    t !== null && !Ge
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Qt(t, e, i))
      : (ee && r && kc(e), (e.flags |= 1), ze(t, e, n, i), e.child)
  )
}
function Kd(t, e, n, r, i) {
  if (Ye(n)) {
    var s = !0
    xo(e)
  } else s = !1
  if ((Tr(e, i), e.stateNode === null))
    fo(t, e), Cm(e, n, r), yu(e, n, r, i), (r = !0)
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps
    o.props = a
    var l = o.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = ht(u))
      : ((u = Ye(n) ? Bn : je.current), (u = Nr(e, u)))
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && Fd(e, o, r, u)),
      (Yt = !1)
    var f = e.memoizedState
    ;(o.state = f),
      Oo(e, r, o, i),
      (l = e.memoizedState),
      a !== r || f !== l || be.current || Yt
        ? (typeof c == 'function' && (gu(e, n, c, r), (l = e.memoizedState)),
          (a = Yt || Md(e, n, a, r, f, l, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (e.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
          (r = !1))
  } else {
    ;(o = e.stateNode),
      Im(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : mt(e.type, a)),
      (o.props = u),
      (h = e.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = ht(l))
        : ((l = Ye(n) ? Bn : je.current), (l = Nr(e, l)))
    var g = n.getDerivedStateFromProps
    ;(c =
      typeof g == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== h || f !== l) && Fd(e, o, r, l)),
      (Yt = !1),
      (f = e.memoizedState),
      (o.state = f),
      Oo(e, r, o, i)
    var _ = e.memoizedState
    a !== h || f !== _ || be.current || Yt
      ? (typeof g == 'function' && (gu(e, n, g, r), (_ = e.memoizedState)),
        (u = Yt || Md(e, n, u, r, f, _, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, _, l),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, _, l)),
            typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = _)),
        (o.props = r),
        (o.state = _),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1))
  }
  return Eu(t, e, n, r, s, i)
}
function Eu(t, e, n, r, i, s) {
  Zm(t, e)
  var o = (e.flags & 128) !== 0
  if (!r && !o) return i && Nd(e, n, !1), Qt(t, e, s)
  ;(r = e.stateNode), (V_.current = e)
  var a =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Vr(e, t.child, null, s)), (e.child = Vr(e, null, a, s)))
      : ze(t, e, a, s),
    (e.memoizedState = r.state),
    i && Nd(e, n, !0),
    e.child
  )
}
function eg(t) {
  var e = t.stateNode
  e.pendingContext
    ? xd(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && xd(t, e.context, !1),
    Fc(t, e.containerInfo)
}
function Wd(t, e, n, r, i) {
  return Dr(), Nc(i), (e.flags |= 256), ze(t, e, n, r), e.child
}
var wu = { dehydrated: null, treeContext: null, retryLane: 0 }
function Tu(t) {
  return { baseLanes: t, cachePool: null, transitions: null }
}
function tg(t, e, n) {
  var r = e.pendingProps,
    i = ne.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    Y(ne, i & 1),
    t === null)
  )
    return (
      pu(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === '$!'
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = ga(o, r, 0, null)),
              (t = jn(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Tu(n)),
              (e.memoizedState = wu),
              t)
            : Qc(e, o))
    )
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return L_(t, e, o, r, a, i, n)
  if (s) {
    ;(s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling)
    var l = { mode: 'hidden', children: r.children }
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = hn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = hn(a, s)) : ((s = jn(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Tu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = wu),
      r
    )
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = hn(s, { mode: 'visible', children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  )
}
function Qc(t, e) {
  return (
    (e = ga({ mode: 'visible', children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  )
}
function Qs(t, e, n, r) {
  return (
    r !== null && Nc(r),
    Vr(e, t.child, null, n),
    (t = Qc(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  )
}
function L_(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = vl(Error(w(422)))), Qs(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = ga({ mode: 'visible', children: r.children }, i, 0, null)),
        (s = jn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && Vr(e, t.child, null, o),
        (e.child.memoizedState = Tu(o)),
        (e.memoizedState = wu),
        s)
  if (!(e.mode & 1)) return Qs(t, e, o, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst
    return (r = a), (s = Error(w(419))), (r = vl(s, r, void 0)), Qs(t, e, o, r)
  }
  if (((a = (o & t.childLanes) !== 0), Ge || a)) {
    if (((r = we), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), qt(t, i), Et(r, t, i, -1))
    }
    return Xc(), (r = vl(Error(w(421)))), Qs(t, e, o, r)
  }
  return i.data === '$?'
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = W_.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (et = an(i.nextSibling)),
      (tt = e),
      (ee = !0),
      (yt = null),
      t !== null &&
        ((ot[at++] = $t),
        (ot[at++] = jt),
        (ot[at++] = Hn),
        ($t = t.id),
        (jt = t.overflow),
        (Hn = e)),
      (e = Qc(e, r.children)),
      (e.flags |= 4096),
      e)
}
function Gd(t, e, n) {
  t.lanes |= e
  var r = t.alternate
  r !== null && (r.lanes |= e), mu(t.return, e, n)
}
function _l(t, e, n, r, i) {
  var s = t.memoizedState
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i))
}
function ng(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail
  if ((ze(t, e, r.children, n), (r = ne.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128)
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Gd(t, n, e)
        else if (t.tag === 19) Gd(t, n, e)
        else if (t.child !== null) {
          ;(t.child.return = t), (t = t.child)
          continue
        }
        if (t === e) break e
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    r &= 1
  }
  if ((Y(ne, r), !(e.mode & 1))) e.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && Mo(t) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          _l(e, !1, i, n, s)
        break
      case 'backwards':
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && Mo(t) === null)) {
            e.child = i
            break
          }
          ;(t = i.sibling), (i.sibling = n), (n = i), (i = t)
        }
        _l(e, !0, n, null, s)
        break
      case 'together':
        _l(e, !1, null, null, void 0)
        break
      default:
        e.memoizedState = null
    }
  return e.child
}
function fo(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2))
}
function Qt(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Qn |= e.lanes),
    !(n & e.childLanes))
  )
    return null
  if (t !== null && e.child !== t.child) throw Error(w(153))
  if (e.child !== null) {
    for (
      t = e.child, n = hn(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = hn(t, t.pendingProps)), (n.return = e)
    n.sibling = null
  }
  return e.child
}
function O_(t, e, n) {
  switch (e.tag) {
    case 3:
      eg(e), Dr()
      break
    case 5:
      km(e)
      break
    case 1:
      Ye(e.type) && xo(e)
      break
    case 4:
      Fc(e, e.stateNode.containerInfo)
      break
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value
      Y(Vo, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(ne, ne.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? tg(t, e, n)
          : (Y(ne, ne.current & 1),
            (t = Qt(t, e, n)),
            t !== null ? t.sibling : null)
      Y(ne, ne.current & 1)
      break
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return ng(t, e, n)
        e.flags |= 128
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Y(ne, ne.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (e.lanes = 0), Jm(t, e, n)
  }
  return Qt(t, e, n)
}
var rg, Su, ig, sg
rg = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === e) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Su = function () {}
ig = function (t, e, n, r) {
  var i = t.memoizedProps
  if (i !== r) {
    ;(t = e.stateNode), Vn(Nt.current)
    var s = null
    switch (n) {
      case 'input':
        ;(i = Ql(t, i)), (r = Ql(t, r)), (s = [])
        break
      case 'select':
        ;(i = ie({}, i, { value: void 0 })),
          (r = ie({}, r, { value: void 0 })),
          (s = [])
        break
      case 'textarea':
        ;(i = Gl(t, i)), (r = Gl(t, r)), (s = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (t.onclick = Po)
    }
    Yl(n, r)
    var o
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var a = i[u]
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Mi.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null))
    for (u in r) {
      var l = r[u]
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''))
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]))
          } else n || (s || (s = []), s.push(u, n)), (n = l)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (s = s || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Mi.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && X('scroll', t),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l))
    }
    n && (s = s || []).push('style', n)
    var u = s
    ;(e.updateQueue = u) && (e.flags |= 4)
  }
}
sg = function (t, e, n, r) {
  n !== r && (e.flags |= 4)
}
function li(t, e) {
  if (!ee)
    switch (t.tailMode) {
      case 'hidden':
        e = t.tail
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling)
        n === null ? (t.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = t.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null)
    }
}
function De(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling)
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling)
  return (t.subtreeFlags |= r), (t.childLanes = n), e
}
function M_(t, e, n) {
  var r = e.pendingProps
  switch ((xc(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return De(e), null
    case 1:
      return Ye(e.type) && ko(), De(e), null
    case 3:
      return (
        (r = e.stateNode),
        Lr(),
        Z(be),
        Z(je),
        jc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Hs(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), yt !== null && (Nu(yt), (yt = null)))),
        Su(t, e),
        De(e),
        null
      )
    case 5:
      $c(e)
      var i = Vn(Gi.current)
      if (((n = e.type), t !== null && e.stateNode != null))
        ig(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152))
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(w(166))
          return De(e), null
        }
        if (((t = Vn(Nt.current)), Hs(e))) {
          ;(r = e.stateNode), (n = e.type)
          var s = e.memoizedProps
          switch (((r[At] = e), (r[Ki] = s), (t = (e.mode & 1) !== 0), n)) {
            case 'dialog':
              X('cancel', r), X('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              X('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < gi.length; i++) X(gi[i], r)
              break
            case 'source':
              X('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              X('error', r), X('load', r)
              break
            case 'details':
              X('toggle', r)
              break
            case 'input':
              rd(r, s), X('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!s.multiple }),
                X('invalid', r)
              break
            case 'textarea':
              sd(r, s), X('invalid', r)
          }
          Yl(n, s), (i = null)
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o]
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Bs(r.textContent, a, t),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Bs(r.textContent, a, t),
                    (i = ['children', '' + a]))
                : Mi.hasOwnProperty(o) &&
                  a != null &&
                  o === 'onScroll' &&
                  X('scroll', r)
            }
          switch (n) {
            case 'input':
              Ls(r), id(r, s, !0)
              break
            case 'textarea':
              Ls(r), od(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof s.onClick == 'function' && (r.onclick = Po)
          }
          ;(r = i), (e.updateQueue = r), r !== null && (e.flags |= 4)
        } else {
          ;(o = i.nodeType === 9 ? i : i.ownerDocument),
            t === 'http://www.w3.org/1999/xhtml' && (t = Dp(n)),
            t === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((t = o.createElement('div')),
                  (t.innerHTML = '<script></script>'),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == 'string'
                ? (t = o.createElement(n, { is: r.is }))
                : ((t = o.createElement(n)),
                  n === 'select' &&
                    ((o = t),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[At] = e),
            (t[Ki] = r),
            rg(t, e, !1, !1),
            (e.stateNode = t)
          e: {
            switch (((o = Xl(n, r)), n)) {
              case 'dialog':
                X('cancel', t), X('close', t), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                X('load', t), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < gi.length; i++) X(gi[i], t)
                i = r
                break
              case 'source':
                X('error', t), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                X('error', t), X('load', t), (i = r)
                break
              case 'details':
                X('toggle', t), (i = r)
                break
              case 'input':
                rd(t, r), (i = Ql(t, r)), X('invalid', t)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ie({}, r, { value: void 0 })),
                  X('invalid', t)
                break
              case 'textarea':
                sd(t, r), (i = Gl(t, r)), X('invalid', t)
                break
              default:
                i = r
            }
            Yl(n, i), (a = i)
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s]
                s === 'style'
                  ? Op(t, l)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Vp(t, l))
                  : s === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Fi(t, l)
                    : typeof l == 'number' && Fi(t, '' + l)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (Mi.hasOwnProperty(s)
                      ? l != null && s === 'onScroll' && X('scroll', t)
                      : l != null && mc(t, s, l, o))
              }
            switch (n) {
              case 'input':
                Ls(t), id(t, r, !1)
                break
              case 'textarea':
                Ls(t), od(t)
                break
              case 'option':
                r.value != null && t.setAttribute('value', '' + mn(r.value))
                break
              case 'select':
                ;(t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? vr(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      vr(t, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (t.onclick = Po)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (e.flags |= 4)
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152))
      }
      return De(e), null
    case 6:
      if (t && e.stateNode != null) sg(t, e, t.memoizedProps, r)
      else {
        if (typeof r != 'string' && e.stateNode === null) throw Error(w(166))
        if (((n = Vn(Gi.current)), Vn(Nt.current), Hs(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[At] = e),
            (s = r.nodeValue !== n) && ((t = tt), t !== null))
          )
            switch (t.tag) {
              case 3:
                Bs(r.nodeValue, n, (t.mode & 1) !== 0)
                break
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bs(r.nodeValue, n, (t.mode & 1) !== 0)
            }
          s && (e.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[At] = e),
            (e.stateNode = r)
      }
      return De(e), null
    case 13:
      if (
        (Z(ne),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (ee && et !== null && e.mode & 1 && !(e.flags & 128))
          Tm(), Dr(), (e.flags |= 98560), (s = !1)
        else if (((s = Hs(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(w(318))
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(w(317))
            s[At] = e
          } else
            Dr(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4)
          De(e), (s = !1)
        } else yt !== null && (Nu(yt), (yt = null)), (s = !0)
        if (!s) return e.flags & 65536 ? e : null
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || ne.current & 1 ? ye === 0 && (ye = 3) : Xc())),
          e.updateQueue !== null && (e.flags |= 4),
          De(e),
          null)
    case 4:
      return (
        Lr(), Su(t, e), t === null && qi(e.stateNode.containerInfo), De(e), null
      )
    case 10:
      return Lc(e.type._context), De(e), null
    case 17:
      return Ye(e.type) && ko(), De(e), null
    case 19:
      if ((Z(ne), (s = e.memoizedState), s === null)) return De(e), null
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) li(s, !1)
        else {
          if (ye !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Mo(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    li(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling)
                return Y(ne, (ne.current & 1) | 2), e.child
              }
              t = t.sibling
            }
          s.tail !== null &&
            ue() > Mr &&
            ((e.flags |= 128), (r = !0), li(s, !1), (e.lanes = 4194304))
        }
      else {
        if (!r)
          if (((t = Mo(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              li(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !ee)
            )
              return De(e), null
          } else
            2 * ue() - s.renderingStartTime > Mr &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), li(s, !1), (e.lanes = 4194304))
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o))
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = ue()),
          (e.sibling = null),
          (n = ne.current),
          Y(ne, r ? (n & 1) | 2 : n & 1),
          e)
        : (De(e), null)
    case 22:
    case 23:
      return (
        Yc(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? Ze & 1073741824 && (De(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : De(e),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(w(156, e.tag))
}
function F_(t, e) {
  switch ((xc(e), e.tag)) {
    case 1:
      return (
        Ye(e.type) && ko(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      )
    case 3:
      return (
        Lr(),
        Z(be),
        Z(je),
        jc(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      )
    case 5:
      return $c(e), null
    case 13:
      if ((Z(ne), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(w(340))
        Dr()
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      )
    case 19:
      return Z(ne), null
    case 4:
      return Lr(), null
    case 10:
      return Lc(e.type._context), null
    case 22:
    case 23:
      return Yc(), null
    case 24:
      return null
    default:
      return null
  }
}
var Ks = !1,
  Oe = !1,
  $_ = typeof WeakSet == 'function' ? WeakSet : Set,
  R = null
function mr(t, e) {
  var n = t.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        se(t, e, r)
      }
    else n.current = null
}
function Iu(t, e, n) {
  try {
    n()
  } catch (r) {
    se(t, e, r)
  }
}
var bd = !1
function j_(t, e) {
  if (((au = Ao), (t = um()), Pc(t))) {
    if ('selectionStart' in t)
      var n = { start: t.selectionStart, end: t.selectionEnd }
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            s = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, s.nodeType
          } catch {
            n = null
            break e
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            h = t,
            f = null
          t: for (;;) {
            for (
              var g;
              h !== n || (i !== 0 && h.nodeType !== 3) || (a = o + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (f = h), (h = g)
            for (;;) {
              if (h === t) break t
              if (
                (f === n && ++u === i && (a = o),
                f === s && ++c === r && (l = o),
                (g = h.nextSibling) !== null)
              )
                break
              ;(h = f), (f = h.parentNode)
            }
            h = g
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (lu = { focusedElem: t, selectionRange: n }, Ao = !1, R = e; R !== null; )
    if (((e = R), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (R = t)
    else
      for (; R !== null; ) {
        e = R
        try {
          var _ = e.alternate
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (_ !== null) {
                  var E = _.memoizedProps,
                    N = _.memoizedState,
                    p = e.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? E : mt(e.type, E),
                      N
                    )
                  p.__reactInternalSnapshotBeforeUpdate = d
                }
                break
              case 3:
                var m = e.stateNode.containerInfo
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(w(163))
            }
        } catch (v) {
          se(e, e.return, v)
        }
        if (((t = e.sibling), t !== null)) {
          ;(t.return = e.return), (R = t)
          break
        }
        R = e.return
      }
  return (_ = bd), (bd = !1), _
}
function Ri(t, e, n) {
  var r = e.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy
        ;(i.destroy = void 0), s !== void 0 && Iu(e, n, s)
      }
      i = i.next
    } while (i !== r)
  }
}
function pa(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next)
    do {
      if ((n.tag & t) === t) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== e)
  }
}
function Au(t) {
  var e = t.ref
  if (e !== null) {
    var n = t.stateNode
    switch (t.tag) {
      case 5:
        t = n
        break
      default:
        t = n
    }
    typeof e == 'function' ? e(t) : (e.current = t)
  }
}
function og(t) {
  var e = t.alternate
  e !== null && ((t.alternate = null), og(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[At], delete e[Ki], delete e[hu], delete e[w_], delete e[T_])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null)
}
function ag(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function Yd(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || ag(t.return)) return null
      t = t.return
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e
      ;(t.child.return = t), (t = t.child)
    }
    if (!(t.flags & 2)) return t.stateNode
  }
}
function Cu(t, e, n) {
  var r = t.tag
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Po))
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Cu(t, e, n), t = t.sibling; t !== null; ) Cu(t, e, n), (t = t.sibling)
}
function Ru(t, e, n) {
  var r = t.tag
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t)
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Ru(t, e, n), t = t.sibling; t !== null; ) Ru(t, e, n), (t = t.sibling)
}
var Ie = null,
  gt = !1
function Gt(t, e, n) {
  for (n = n.child; n !== null; ) lg(t, e, n), (n = n.sibling)
}
function lg(t, e, n) {
  if (xt && typeof xt.onCommitFiberUnmount == 'function')
    try {
      xt.onCommitFiberUnmount(oa, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || mr(n, e)
    case 6:
      var r = Ie,
        i = gt
      ;(Ie = null),
        Gt(t, e, n),
        (Ie = r),
        (gt = i),
        Ie !== null &&
          (gt
            ? ((t = Ie),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Ie.removeChild(n.stateNode))
      break
    case 18:
      Ie !== null &&
        (gt
          ? ((t = Ie),
            (n = n.stateNode),
            t.nodeType === 8
              ? dl(t.parentNode, n)
              : t.nodeType === 1 && dl(t, n),
            zi(t))
          : dl(Ie, n.stateNode))
      break
    case 4:
      ;(r = Ie),
        (i = gt),
        (Ie = n.stateNode.containerInfo),
        (gt = !0),
        Gt(t, e, n),
        (Ie = r),
        (gt = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var s = i,
            o = s.destroy
          ;(s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Iu(n, e, o),
            (i = i.next)
        } while (i !== r)
      }
      Gt(t, e, n)
      break
    case 1:
      if (
        !Oe &&
        (mr(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (a) {
          se(n, e, a)
        }
      Gt(t, e, n)
      break
    case 21:
      Gt(t, e, n)
      break
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), Gt(t, e, n), (Oe = r))
        : Gt(t, e, n)
      break
    default:
      Gt(t, e, n)
  }
}
function Xd(t) {
  var e = t.updateQueue
  if (e !== null) {
    t.updateQueue = null
    var n = t.stateNode
    n === null && (n = t.stateNode = new $_()),
      e.forEach(function (r) {
        var i = G_.bind(null, t, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function pt(t, e) {
  var n = e.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var s = t,
          o = e,
          a = o
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ;(Ie = a.stateNode), (gt = !1)
              break e
            case 3:
              ;(Ie = a.stateNode.containerInfo), (gt = !0)
              break e
            case 4:
              ;(Ie = a.stateNode.containerInfo), (gt = !0)
              break e
          }
          a = a.return
        }
        if (Ie === null) throw Error(w(160))
        lg(s, o, i), (Ie = null), (gt = !1)
        var l = i.alternate
        l !== null && (l.return = null), (i.return = null)
      } catch (u) {
        se(i, e, u)
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) ug(e, t), (e = e.sibling)
}
function ug(t, e) {
  var n = t.alternate,
    r = t.flags
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(e, t), St(t), r & 4)) {
        try {
          Ri(3, t, t.return), pa(3, t)
        } catch (E) {
          se(t, t.return, E)
        }
        try {
          Ri(5, t, t.return)
        } catch (E) {
          se(t, t.return, E)
        }
      }
      break
    case 1:
      pt(e, t), St(t), r & 512 && n !== null && mr(n, n.return)
      break
    case 5:
      if (
        (pt(e, t),
        St(t),
        r & 512 && n !== null && mr(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode
        try {
          Fi(i, '')
        } catch (E) {
          se(t, t.return, E)
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue
        if (((t.updateQueue = null), l !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && xp(i, s),
              Xl(a, o)
            var u = Xl(a, s)
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                h = l[o + 1]
              c === 'style'
                ? Op(i, h)
                : c === 'dangerouslySetInnerHTML'
                ? Vp(i, h)
                : c === 'children'
                ? Fi(i, h)
                : mc(i, c, h, u)
            }
            switch (a) {
              case 'input':
                Kl(i, s)
                break
              case 'textarea':
                Np(i, s)
                break
              case 'select':
                var f = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!s.multiple
                var g = s.value
                g != null
                  ? vr(i, !!s.multiple, g, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? vr(i, !!s.multiple, s.defaultValue, !0)
                      : vr(i, !!s.multiple, s.multiple ? [] : '', !1))
            }
            i[Ki] = s
          } catch (E) {
            se(t, t.return, E)
          }
      }
      break
    case 6:
      if ((pt(e, t), St(t), r & 4)) {
        if (t.stateNode === null) throw Error(w(162))
        ;(i = t.stateNode), (s = t.memoizedProps)
        try {
          i.nodeValue = s
        } catch (E) {
          se(t, t.return, E)
        }
      }
      break
    case 3:
      if (
        (pt(e, t), St(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          zi(e.containerInfo)
        } catch (E) {
          se(t, t.return, E)
        }
      break
    case 4:
      pt(e, t), St(t)
      break
    case 13:
      pt(e, t),
        St(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Gc = ue())),
        r & 4 && Xd(t)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Oe = (u = Oe) || c), pt(e, t), (Oe = u)) : pt(e, t),
        St(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (R = t, c = t.child; c !== null; ) {
            for (h = R = c; R !== null; ) {
              switch (((f = R), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ri(4, f, f.return)
                  break
                case 1:
                  mr(f, f.return)
                  var _ = f.stateNode
                  if (typeof _.componentWillUnmount == 'function') {
                    ;(r = f), (n = f.return)
                    try {
                      ;(e = r),
                        (_.props = e.memoizedProps),
                        (_.state = e.memoizedState),
                        _.componentWillUnmount()
                    } catch (E) {
                      se(r, n, E)
                    }
                  }
                  break
                case 5:
                  mr(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    Zd(h)
                    continue
                  }
              }
              g !== null ? ((g.return = f), (R = g)) : Zd(h)
            }
            c = c.sibling
          }
        e: for (c = null, h = t; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h
              try {
                ;(i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((a = h.stateNode),
                      (l = h.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = Lp('display', o)))
              } catch (E) {
                se(t, t.return, E)
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? '' : h.memoizedProps
              } catch (E) {
                se(t, t.return, E)
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === t) &&
            h.child !== null
          ) {
            ;(h.child.return = h), (h = h.child)
            continue
          }
          if (h === t) break e
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e
            c === h && (c = null), (h = h.return)
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling)
        }
      }
      break
    case 19:
      pt(e, t), St(t), r & 4 && Xd(t)
      break
    case 21:
      break
    default:
      pt(e, t), St(t)
  }
}
function St(t) {
  var e = t.flags
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (ag(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(w(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (Fi(i, ''), (r.flags &= -33))
          var s = Yd(t)
          Ru(t, s, i)
          break
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Yd(t)
          Cu(t, a, o)
          break
        default:
          throw Error(w(161))
      }
    } catch (l) {
      se(t, t.return, l)
    }
    t.flags &= -3
  }
  e & 4096 && (t.flags &= -4097)
}
function U_(t, e, n) {
  ;(R = t), cg(t)
}
function cg(t, e, n) {
  for (var r = (t.mode & 1) !== 0; R !== null; ) {
    var i = R,
      s = i.child
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ks
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Oe
        a = Ks
        var u = Oe
        if (((Ks = o), (Oe = l) && !u))
          for (R = i; R !== null; )
            (o = R),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ef(i)
                : l !== null
                ? ((l.return = o), (R = l))
                : ef(i)
        for (; s !== null; ) (R = s), cg(s), (s = s.sibling)
        ;(R = i), (Ks = a), (Oe = u)
      }
      Jd(t)
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (R = s)) : Jd(t)
  }
}
function Jd(t) {
  for (; R !== null; ) {
    var e = R
    if (e.flags & 8772) {
      var n = e.alternate
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Oe || pa(5, e)
              break
            case 1:
              var r = e.stateNode
              if (e.flags & 4 && !Oe)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : mt(e.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var s = e.updateQueue
              s !== null && Od(e, s, r)
              break
            case 3:
              var o = e.updateQueue
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode
                      break
                    case 1:
                      n = e.child.stateNode
                  }
                Od(e, o, n)
              }
              break
            case 5:
              var a = e.stateNode
              if (n === null && e.flags & 4) {
                n = a
                var l = e.memoizedProps
                switch (e.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus()
                    break
                  case 'img':
                    l.src && (n.src = l.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var h = c.dehydrated
                    h !== null && zi(h)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(w(163))
          }
        Oe || (e.flags & 512 && Au(e))
      } catch (f) {
        se(e, e.return, f)
      }
    }
    if (e === t) {
      R = null
      break
    }
    if (((n = e.sibling), n !== null)) {
      ;(n.return = e.return), (R = n)
      break
    }
    R = e.return
  }
}
function Zd(t) {
  for (; R !== null; ) {
    var e = R
    if (e === t) {
      R = null
      break
    }
    var n = e.sibling
    if (n !== null) {
      ;(n.return = e.return), (R = n)
      break
    }
    R = e.return
  }
}
function ef(t) {
  for (; R !== null; ) {
    var e = R
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return
          try {
            pa(4, e)
          } catch (l) {
            se(e, n, l)
          }
          break
        case 1:
          var r = e.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = e.return
            try {
              r.componentDidMount()
            } catch (l) {
              se(e, i, l)
            }
          }
          var s = e.return
          try {
            Au(e)
          } catch (l) {
            se(e, s, l)
          }
          break
        case 5:
          var o = e.return
          try {
            Au(e)
          } catch (l) {
            se(e, o, l)
          }
      }
    } catch (l) {
      se(e, e.return, l)
    }
    if (e === t) {
      R = null
      break
    }
    var a = e.sibling
    if (a !== null) {
      ;(a.return = e.return), (R = a)
      break
    }
    R = e.return
  }
}
var z_ = Math.ceil,
  jo = Wt.ReactCurrentDispatcher,
  Kc = Wt.ReactCurrentOwner,
  ct = Wt.ReactCurrentBatchConfig,
  Q = 0,
  we = null,
  fe = null,
  Re = 0,
  Ze = 0,
  gr = wn(0),
  ye = 0,
  Ji = null,
  Qn = 0,
  ma = 0,
  Wc = 0,
  Pi = null,
  We = null,
  Gc = 0,
  Mr = 1 / 0,
  Mt = null,
  Uo = !1,
  Pu = null,
  un = null,
  Ws = !1,
  en = null,
  zo = 0,
  ki = 0,
  ku = null,
  po = -1,
  mo = 0
function qe() {
  return Q & 6 ? ue() : po !== -1 ? po : (po = ue())
}
function cn(t) {
  return t.mode & 1
    ? Q & 2 && Re !== 0
      ? Re & -Re
      : I_.transition !== null
      ? (mo === 0 && (mo = Wp()), mo)
      : ((t = G),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : em(t.type))),
        t)
    : 1
}
function Et(t, e, n, r) {
  if (50 < ki) throw ((ki = 0), (ku = null), Error(w(185)))
  ps(t, n, r),
    (!(Q & 2) || t !== we) &&
      (t === we && (!(Q & 2) && (ma |= n), ye === 4 && Jt(t, Re)),
      Xe(t, r),
      n === 1 && Q === 0 && !(e.mode & 1) && ((Mr = ue() + 500), ha && Tn()))
}
function Xe(t, e) {
  var n = t.callbackNode
  I0(t, e)
  var r = Io(t, t === we ? Re : 0)
  if (r === 0)
    n !== null && ud(n), (t.callbackNode = null), (t.callbackPriority = 0)
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && ud(n), e === 1))
      t.tag === 0 ? S_(tf.bind(null, t)) : _m(tf.bind(null, t)),
        __(function () {
          !(Q & 6) && Tn()
        }),
        (n = null)
    else {
      switch (Gp(r)) {
        case 1:
          n = Ec
          break
        case 4:
          n = Qp
          break
        case 16:
          n = So
          break
        case 536870912:
          n = Kp
          break
        default:
          n = So
      }
      n = vg(n, hg.bind(null, t))
    }
    ;(t.callbackPriority = e), (t.callbackNode = n)
  }
}
function hg(t, e) {
  if (((po = -1), (mo = 0), Q & 6)) throw Error(w(327))
  var n = t.callbackNode
  if (Sr() && t.callbackNode !== n) return null
  var r = Io(t, t === we ? Re : 0)
  if (r === 0) return null
  if (r & 30 || r & t.expiredLanes || e) e = Bo(t, r)
  else {
    e = r
    var i = Q
    Q |= 2
    var s = fg()
    ;(we !== t || Re !== e) && ((Mt = null), (Mr = ue() + 500), $n(t, e))
    do
      try {
        q_()
        break
      } catch (a) {
        dg(t, a)
      }
    while (1)
    Vc(),
      (jo.current = s),
      (Q = i),
      fe !== null ? (e = 0) : ((we = null), (Re = 0), (e = ye))
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = nu(t)), i !== 0 && ((r = i), (e = xu(t, i)))), e === 1)
    )
      throw ((n = Ji), $n(t, 0), Jt(t, r), Xe(t, ue()), n)
    if (e === 6) Jt(t, r)
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !B_(i) &&
          ((e = Bo(t, r)),
          e === 2 && ((s = nu(t)), s !== 0 && ((r = s), (e = xu(t, s)))),
          e === 1))
      )
        throw ((n = Ji), $n(t, 0), Jt(t, r), Xe(t, ue()), n)
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(w(345))
        case 2:
          Pn(t, We, Mt)
          break
        case 3:
          if (
            (Jt(t, r), (r & 130023424) === r && ((e = Gc + 500 - ue()), 10 < e))
          ) {
            if (Io(t, 0) !== 0) break
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              qe(), (t.pingedLanes |= t.suspendedLanes & i)
              break
            }
            t.timeoutHandle = cu(Pn.bind(null, t, We, Mt), e)
            break
          }
          Pn(t, We, Mt)
          break
        case 4:
          if ((Jt(t, r), (r & 4194240) === r)) break
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - _t(r)
            ;(s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s)
          }
          if (
            ((r = i),
            (r = ue() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * z_(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = cu(Pn.bind(null, t, We, Mt), r)
            break
          }
          Pn(t, We, Mt)
          break
        case 5:
          Pn(t, We, Mt)
          break
        default:
          throw Error(w(329))
      }
    }
  }
  return Xe(t, ue()), t.callbackNode === n ? hg.bind(null, t) : null
}
function xu(t, e) {
  var n = Pi
  return (
    t.current.memoizedState.isDehydrated && ($n(t, e).flags |= 256),
    (t = Bo(t, e)),
    t !== 2 && ((e = We), (We = n), e !== null && Nu(e)),
    t
  )
}
function Nu(t) {
  We === null ? (We = t) : We.push.apply(We, t)
}
function B_(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot
          i = i.value
          try {
            if (!wt(s(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n)
    else {
      if (e === t) break
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0
        e = e.return
      }
      ;(e.sibling.return = e.return), (e = e.sibling)
    }
  }
  return !0
}
function Jt(t, e) {
  for (
    e &= ~Wc,
      e &= ~ma,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - _t(e),
      r = 1 << n
    ;(t[n] = -1), (e &= ~r)
  }
}
function tf(t) {
  if (Q & 6) throw Error(w(327))
  Sr()
  var e = Io(t, 0)
  if (!(e & 1)) return Xe(t, ue()), null
  var n = Bo(t, e)
  if (t.tag !== 0 && n === 2) {
    var r = nu(t)
    r !== 0 && ((e = r), (n = xu(t, r)))
  }
  if (n === 1) throw ((n = Ji), $n(t, 0), Jt(t, e), Xe(t, ue()), n)
  if (n === 6) throw Error(w(345))
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Pn(t, We, Mt),
    Xe(t, ue()),
    null
  )
}
function bc(t, e) {
  var n = Q
  Q |= 1
  try {
    return t(e)
  } finally {
    ;(Q = n), Q === 0 && ((Mr = ue() + 500), ha && Tn())
  }
}
function Kn(t) {
  en !== null && en.tag === 0 && !(Q & 6) && Sr()
  var e = Q
  Q |= 1
  var n = ct.transition,
    r = G
  try {
    if (((ct.transition = null), (G = 1), t)) return t()
  } finally {
    ;(G = r), (ct.transition = n), (Q = e), !(Q & 6) && Tn()
  }
}
function Yc() {
  ;(Ze = gr.current), Z(gr)
}
function $n(t, e) {
  ;(t.finishedWork = null), (t.finishedLanes = 0)
  var n = t.timeoutHandle
  if ((n !== -1 && ((t.timeoutHandle = -1), v_(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n
      switch ((xc(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && ko()
          break
        case 3:
          Lr(), Z(be), Z(je), jc()
          break
        case 5:
          $c(r)
          break
        case 4:
          Lr()
          break
        case 13:
          Z(ne)
          break
        case 19:
          Z(ne)
          break
        case 10:
          Lc(r.type._context)
          break
        case 22:
        case 23:
          Yc()
      }
      n = n.return
    }
  if (
    ((we = t),
    (fe = t = hn(t.current, null)),
    (Re = Ze = e),
    (ye = 0),
    (Ji = null),
    (Wc = ma = Qn = 0),
    (We = Pi = null),
    Dn !== null)
  ) {
    for (e = 0; e < Dn.length; e++)
      if (((n = Dn[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          s = n.pending
        if (s !== null) {
          var o = s.next
          ;(s.next = i), (r.next = o)
        }
        n.pending = r
      }
    Dn = null
  }
  return t
}
function dg(t, e) {
  do {
    var n = fe
    try {
      if ((Vc(), (co.current = $o), Fo)) {
        for (var r = re.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        Fo = !1
      }
      if (
        ((qn = 0),
        (Ee = me = re = null),
        (Ci = !1),
        (bi = 0),
        (Kc.current = null),
        n === null || n.return === null)
      ) {
        ;(ye = 1), (Ji = e), (fe = null)
        break
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e
        if (
          ((e = Re),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            h = c.tag
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = c.alternate
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var g = Bd(o)
          if (g !== null) {
            ;(g.flags &= -257),
              Hd(g, o, a, s, e),
              g.mode & 1 && zd(s, u, e),
              (e = g),
              (l = u)
            var _ = e.updateQueue
            if (_ === null) {
              var E = new Set()
              E.add(l), (e.updateQueue = E)
            } else _.add(l)
            break e
          } else {
            if (!(e & 1)) {
              zd(s, u, e), Xc()
              break e
            }
            l = Error(w(426))
          }
        } else if (ee && a.mode & 1) {
          var N = Bd(o)
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              Hd(N, o, a, s, e),
              Nc(Or(l, a))
            break e
          }
        }
        ;(s = l = Or(l, a)),
          ye !== 4 && (ye = 2),
          Pi === null ? (Pi = [s]) : Pi.push(s),
          (s = o)
        do {
          switch (s.tag) {
            case 3:
              ;(s.flags |= 65536), (e &= -e), (s.lanes |= e)
              var p = bm(s, l, e)
              Ld(s, p)
              break e
            case 1:
              a = l
              var d = s.type,
                m = s.stateNode
              if (
                !(s.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (un === null || !un.has(m))))
              ) {
                ;(s.flags |= 65536), (e &= -e), (s.lanes |= e)
                var v = Ym(s, a, e)
                Ld(s, v)
                break e
              }
          }
          s = s.return
        } while (s !== null)
      }
      mg(n)
    } catch (C) {
      ;(e = C), fe === n && n !== null && (fe = n = n.return)
      continue
    }
    break
  } while (1)
}
function fg() {
  var t = jo.current
  return (jo.current = $o), t === null ? $o : t
}
function Xc() {
  ;(ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    we === null || (!(Qn & 268435455) && !(ma & 268435455)) || Jt(we, Re)
}
function Bo(t, e) {
  var n = Q
  Q |= 2
  var r = fg()
  ;(we !== t || Re !== e) && ((Mt = null), $n(t, e))
  do
    try {
      H_()
      break
    } catch (i) {
      dg(t, i)
    }
  while (1)
  if ((Vc(), (Q = n), (jo.current = r), fe !== null)) throw Error(w(261))
  return (we = null), (Re = 0), ye
}
function H_() {
  for (; fe !== null; ) pg(fe)
}
function q_() {
  for (; fe !== null && !m0(); ) pg(fe)
}
function pg(t) {
  var e = yg(t.alternate, t, Ze)
  ;(t.memoizedProps = t.pendingProps),
    e === null ? mg(t) : (fe = e),
    (Kc.current = null)
}
function mg(t) {
  var e = t
  do {
    var n = e.alternate
    if (((t = e.return), e.flags & 32768)) {
      if (((n = F_(n, e)), n !== null)) {
        ;(n.flags &= 32767), (fe = n)
        return
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)
      else {
        ;(ye = 6), (fe = null)
        return
      }
    } else if (((n = M_(n, e, Ze)), n !== null)) {
      fe = n
      return
    }
    if (((e = e.sibling), e !== null)) {
      fe = e
      return
    }
    fe = e = t
  } while (e !== null)
  ye === 0 && (ye = 5)
}
function Pn(t, e, n) {
  var r = G,
    i = ct.transition
  try {
    ;(ct.transition = null), (G = 1), Q_(t, e, n, r)
  } finally {
    ;(ct.transition = i), (G = r)
  }
  return null
}
function Q_(t, e, n, r) {
  do Sr()
  while (en !== null)
  if (Q & 6) throw Error(w(327))
  n = t.finishedWork
  var i = t.finishedLanes
  if (n === null) return null
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(w(177))
  ;(t.callbackNode = null), (t.callbackPriority = 0)
  var s = n.lanes | n.childLanes
  if (
    (A0(t, s),
    t === we && ((fe = we = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ws ||
      ((Ws = !0),
      vg(So, function () {
        return Sr(), null
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ;(s = ct.transition), (ct.transition = null)
    var o = G
    G = 1
    var a = Q
    ;(Q |= 4),
      (Kc.current = null),
      j_(t, n),
      ug(n, t),
      h_(lu),
      (Ao = !!au),
      (lu = au = null),
      (t.current = n),
      U_(n),
      g0(),
      (Q = a),
      (G = o),
      (ct.transition = s)
  } else t.current = n
  if (
    (Ws && ((Ws = !1), (en = t), (zo = i)),
    (s = t.pendingLanes),
    s === 0 && (un = null),
    _0(n.stateNode),
    Xe(t, ue()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (Uo) throw ((Uo = !1), (t = Pu), (Pu = null), t)
  return (
    zo & 1 && t.tag !== 0 && Sr(),
    (s = t.pendingLanes),
    s & 1 ? (t === ku ? ki++ : ((ki = 0), (ku = t))) : (ki = 0),
    Tn(),
    null
  )
}
function Sr() {
  if (en !== null) {
    var t = Gp(zo),
      e = ct.transition,
      n = G
    try {
      if (((ct.transition = null), (G = 16 > t ? 16 : t), en === null))
        var r = !1
      else {
        if (((t = en), (en = null), (zo = 0), Q & 6)) throw Error(w(331))
        var i = Q
        for (Q |= 4, R = t.current; R !== null; ) {
          var s = R,
            o = s.child
          if (R.flags & 16) {
            var a = s.deletions
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l]
                for (R = u; R !== null; ) {
                  var c = R
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ri(8, c, s)
                  }
                  var h = c.child
                  if (h !== null) (h.return = c), (R = h)
                  else
                    for (; R !== null; ) {
                      c = R
                      var f = c.sibling,
                        g = c.return
                      if ((og(c), c === u)) {
                        R = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = g), (R = f)
                        break
                      }
                      R = g
                    }
                }
              }
              var _ = s.alternate
              if (_ !== null) {
                var E = _.child
                if (E !== null) {
                  _.child = null
                  do {
                    var N = E.sibling
                    ;(E.sibling = null), (E = N)
                  } while (E !== null)
                }
              }
              R = s
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (R = o)
          else
            e: for (; R !== null; ) {
              if (((s = R), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ri(9, s, s.return)
                }
              var p = s.sibling
              if (p !== null) {
                ;(p.return = s.return), (R = p)
                break e
              }
              R = s.return
            }
        }
        var d = t.current
        for (R = d; R !== null; ) {
          o = R
          var m = o.child
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (R = m)
          else
            e: for (o = d; R !== null; ) {
              if (((a = R), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pa(9, a)
                  }
                } catch (C) {
                  se(a, a.return, C)
                }
              if (a === o) {
                R = null
                break e
              }
              var v = a.sibling
              if (v !== null) {
                ;(v.return = a.return), (R = v)
                break e
              }
              R = a.return
            }
        }
        if (
          ((Q = i), Tn(), xt && typeof xt.onPostCommitFiberRoot == 'function')
        )
          try {
            xt.onPostCommitFiberRoot(oa, t)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(G = n), (ct.transition = e)
    }
  }
  return !1
}
function nf(t, e, n) {
  ;(e = Or(n, e)),
    (e = bm(t, e, 1)),
    (t = ln(t, e, 1)),
    (e = qe()),
    t !== null && (ps(t, 1, e), Xe(t, e))
}
function se(t, e, n) {
  if (t.tag === 3) nf(t, t, n)
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        nf(e, t, n)
        break
      } else if (e.tag === 1) {
        var r = e.stateNode
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (un === null || !un.has(r)))
        ) {
          ;(t = Or(n, t)),
            (t = Ym(e, t, 1)),
            (e = ln(e, t, 1)),
            (t = qe()),
            e !== null && (ps(e, 1, t), Xe(e, t))
          break
        }
      }
      e = e.return
    }
}
function K_(t, e, n) {
  var r = t.pingCache
  r !== null && r.delete(e),
    (e = qe()),
    (t.pingedLanes |= t.suspendedLanes & n),
    we === t &&
      (Re & n) === n &&
      (ye === 4 || (ye === 3 && (Re & 130023424) === Re && 500 > ue() - Gc)
        ? $n(t, 0)
        : (Wc |= n)),
    Xe(t, e)
}
function gg(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Fs), (Fs <<= 1), !(Fs & 130023424) && (Fs = 4194304))
      : (e = 1))
  var n = qe()
  ;(t = qt(t, e)), t !== null && (ps(t, e, n), Xe(t, n))
}
function W_(t) {
  var e = t.memoizedState,
    n = 0
  e !== null && (n = e.retryLane), gg(t, n)
}
function G_(t, e) {
  var n = 0
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = t.stateNode
      break
    default:
      throw Error(w(314))
  }
  r !== null && r.delete(e), gg(t, n)
}
var yg
yg = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || be.current) Ge = !0
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (Ge = !1), O_(t, e, n)
      Ge = !!(t.flags & 131072)
    }
  else (Ge = !1), ee && e.flags & 1048576 && Em(e, Do, e.index)
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type
      fo(t, e), (t = e.pendingProps)
      var i = Nr(e, je.current)
      Tr(e, n), (i = zc(null, e, r, t, i, n))
      var s = Bc()
      return (
        (e.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ye(r) ? ((s = !0), xo(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Mc(e),
            (i.updater = da),
            (e.stateNode = i),
            (i._reactInternals = e),
            yu(e, r, t, n),
            (e = Eu(null, e, r, !0, s, n)))
          : ((e.tag = 0), ee && s && kc(e), ze(null, e, i, n), (e = e.child)),
        e
      )
    case 16:
      r = e.elementType
      e: {
        switch (
          (fo(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = Y_(r)),
          (t = mt(r, t)),
          i)
        ) {
          case 0:
            e = _u(null, e, r, t, n)
            break e
          case 1:
            e = Kd(null, e, r, t, n)
            break e
          case 11:
            e = qd(null, e, r, t, n)
            break e
          case 14:
            e = Qd(null, e, r, mt(r.type, t), n)
            break e
        }
        throw Error(w(306, r, ''))
      }
      return e
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : mt(r, i)),
        _u(t, e, r, i, n)
      )
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : mt(r, i)),
        Kd(t, e, r, i, n)
      )
    case 3:
      e: {
        if ((eg(e), t === null)) throw Error(w(387))
        ;(r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          Im(t, e),
          Oo(e, r, null, n)
        var o = e.memoizedState
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            ;(i = Or(Error(w(423)), e)), (e = Wd(t, e, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Or(Error(w(424)), e)), (e = Wd(t, e, r, n, i))
            break e
          } else
            for (
              et = an(e.stateNode.containerInfo.firstChild),
                tt = e,
                ee = !0,
                yt = null,
                n = Pm(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Dr(), r === i)) {
            e = Qt(t, e, n)
            break e
          }
          ze(t, e, r, n)
        }
        e = e.child
      }
      return e
    case 5:
      return (
        km(e),
        t === null && pu(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        uu(r, i) ? (o = null) : s !== null && uu(r, s) && (e.flags |= 32),
        Zm(t, e),
        ze(t, e, o, n),
        e.child
      )
    case 6:
      return t === null && pu(e), null
    case 13:
      return tg(t, e, n)
    case 4:
      return (
        Fc(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Vr(e, null, r, n)) : ze(t, e, r, n),
        e.child
      )
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : mt(r, i)),
        qd(t, e, r, i, n)
      )
    case 7:
      return ze(t, e, e.pendingProps, n), e.child
    case 8:
      return ze(t, e, e.pendingProps.children, n), e.child
    case 12:
      return ze(t, e, e.pendingProps.children, n), e.child
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          Y(Vo, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (wt(s.value, o)) {
            if (s.children === i.children && !be.current) {
              e = Qt(t, e, n)
              break e
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies
              if (a !== null) {
                o = s.child
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ;(l = zt(-1, n & -n)), (l.tag = 2)
                      var u = s.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l)
                      }
                    }
                    ;(s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      mu(s.return, n, e),
                      (a.lanes |= n)
                    break
                  }
                  l = l.next
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(w(341))
                ;(o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  mu(o, n, e),
                  (o = s.sibling)
              } else o = s.child
              if (o !== null) o.return = s
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null
                    break
                  }
                  if (((s = o.sibling), s !== null)) {
                    ;(s.return = o.return), (o = s)
                    break
                  }
                  o = o.return
                }
              s = o
            }
        ze(t, e, i.children, n), (e = e.child)
      }
      return e
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Tr(e, n),
        (i = ht(i)),
        (r = r(i)),
        (e.flags |= 1),
        ze(t, e, r, n),
        e.child
      )
    case 14:
      return (
        (r = e.type),
        (i = mt(r, e.pendingProps)),
        (i = mt(r.type, i)),
        Qd(t, e, r, i, n)
      )
    case 15:
      return Xm(t, e, e.type, e.pendingProps, n)
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : mt(r, i)),
        fo(t, e),
        (e.tag = 1),
        Ye(r) ? ((t = !0), xo(e)) : (t = !1),
        Tr(e, n),
        Cm(e, r, i),
        yu(e, r, i, n),
        Eu(null, e, r, !0, t, n)
      )
    case 19:
      return ng(t, e, n)
    case 22:
      return Jm(t, e, n)
  }
  throw Error(w(156, e.tag))
}
function vg(t, e) {
  return qp(t, e)
}
function b_(t, e, n, r) {
  ;(this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function ut(t, e, n, r) {
  return new b_(t, e, n, r)
}
function Jc(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent)
}
function Y_(t) {
  if (typeof t == 'function') return Jc(t) ? 1 : 0
  if (t != null) {
    if (((t = t.$$typeof), t === yc)) return 11
    if (t === vc) return 14
  }
  return 2
}
function hn(t, e) {
  var n = t.alternate
  return (
    n === null
      ? ((n = ut(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  )
}
function go(t, e, n, r, i, s) {
  var o = 2
  if (((r = t), typeof t == 'function')) Jc(t) && (o = 1)
  else if (typeof t == 'string') o = 5
  else
    e: switch (t) {
      case or:
        return jn(n.children, i, s, e)
      case gc:
        ;(o = 8), (i |= 8)
        break
      case zl:
        return (t = ut(12, n, e, i | 2)), (t.elementType = zl), (t.lanes = s), t
      case Bl:
        return (t = ut(13, n, e, i)), (t.elementType = Bl), (t.lanes = s), t
      case Hl:
        return (t = ut(19, n, e, i)), (t.elementType = Hl), (t.lanes = s), t
      case Rp:
        return ga(n, i, s, e)
      default:
        if (typeof t == 'object' && t !== null)
          switch (t.$$typeof) {
            case Ap:
              o = 10
              break e
            case Cp:
              o = 9
              break e
            case yc:
              o = 11
              break e
            case vc:
              o = 14
              break e
            case bt:
              ;(o = 16), (r = null)
              break e
          }
        throw Error(w(130, t == null ? t : typeof t, ''))
    }
  return (
    (e = ut(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  )
}
function jn(t, e, n, r) {
  return (t = ut(7, t, r, e)), (t.lanes = n), t
}
function ga(t, e, n, r) {
  return (
    (t = ut(22, t, r, e)),
    (t.elementType = Rp),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  )
}
function El(t, e, n) {
  return (t = ut(6, t, null, e)), (t.lanes = n), t
}
function wl(t, e, n) {
  return (
    (e = ut(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  )
}
function X_(t, e, n, r, i) {
  ;(this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = tl(0)),
    (this.expirationTimes = tl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = tl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Zc(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new X_(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = ut(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mc(s),
    t
  )
}
function J_(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: sr,
    key: r == null ? null : '' + r,
    children: t,
    containerInfo: e,
    implementation: n,
  }
}
function _g(t) {
  if (!t) return gn
  t = t._reactInternals
  e: {
    if (Jn(t) !== t || t.tag !== 1) throw Error(w(170))
    var e = t
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context
          break e
        case 1:
          if (Ye(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      e = e.return
    } while (e !== null)
    throw Error(w(171))
  }
  if (t.tag === 1) {
    var n = t.type
    if (Ye(n)) return vm(t, n, e)
  }
  return e
}
function Eg(t, e, n, r, i, s, o, a, l) {
  return (
    (t = Zc(n, r, !0, t, i, s, o, a, l)),
    (t.context = _g(null)),
    (n = t.current),
    (r = qe()),
    (i = cn(n)),
    (s = zt(r, i)),
    (s.callback = e ?? null),
    ln(n, s, i),
    (t.current.lanes = i),
    ps(t, i, r),
    Xe(t, r),
    t
  )
}
function ya(t, e, n, r) {
  var i = e.current,
    s = qe(),
    o = cn(i)
  return (
    (n = _g(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = zt(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = ln(i, e, o)),
    t !== null && (Et(t, i, o, s), uo(t, i, o)),
    o
  )
}
function Ho(t) {
  if (((t = t.current), !t.child)) return null
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode
    default:
      return t.child.stateNode
  }
}
function rf(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane
    t.retryLane = n !== 0 && n < e ? n : e
  }
}
function eh(t, e) {
  rf(t, e), (t = t.alternate) && rf(t, e)
}
function Z_() {
  return null
}
var wg =
  typeof reportError == 'function'
    ? reportError
    : function (t) {
        console.error(t)
      }
function th(t) {
  this._internalRoot = t
}
va.prototype.render = th.prototype.render = function (t) {
  var e = this._internalRoot
  if (e === null) throw Error(w(409))
  ya(t, e, null, null)
}
va.prototype.unmount = th.prototype.unmount = function () {
  var t = this._internalRoot
  if (t !== null) {
    this._internalRoot = null
    var e = t.containerInfo
    Kn(function () {
      ya(null, t, null, null)
    }),
      (e[Ht] = null)
  }
}
function va(t) {
  this._internalRoot = t
}
va.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Xp()
    t = { blockedOn: null, target: t, priority: e }
    for (var n = 0; n < Xt.length && e !== 0 && e < Xt[n].priority; n++);
    Xt.splice(n, 0, t), n === 0 && Zp(t)
  }
}
function nh(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
}
function _a(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
  )
}
function sf() {}
function e1(t, e, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r
      r = function () {
        var u = Ho(o)
        s.call(u)
      }
    }
    var o = Eg(e, r, t, 0, null, !1, !1, '', sf)
    return (
      (t._reactRootContainer = o),
      (t[Ht] = o.current),
      qi(t.nodeType === 8 ? t.parentNode : t),
      Kn(),
      o
    )
  }
  for (; (i = t.lastChild); ) t.removeChild(i)
  if (typeof r == 'function') {
    var a = r
    r = function () {
      var u = Ho(l)
      a.call(u)
    }
  }
  var l = Zc(t, 0, !1, null, null, !1, !1, '', sf)
  return (
    (t._reactRootContainer = l),
    (t[Ht] = l.current),
    qi(t.nodeType === 8 ? t.parentNode : t),
    Kn(function () {
      ya(e, l, n, r)
    }),
    l
  )
}
function Ea(t, e, n, r, i) {
  var s = n._reactRootContainer
  if (s) {
    var o = s
    if (typeof i == 'function') {
      var a = i
      i = function () {
        var l = Ho(o)
        a.call(l)
      }
    }
    ya(e, o, t, i)
  } else o = e1(n, e, t, i, r)
  return Ho(o)
}
bp = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode
      if (e.current.memoizedState.isDehydrated) {
        var n = mi(e.pendingLanes)
        n !== 0 &&
          (wc(e, n | 1), Xe(e, ue()), !(Q & 6) && ((Mr = ue() + 500), Tn()))
      }
      break
    case 13:
      Kn(function () {
        var r = qt(t, 1)
        if (r !== null) {
          var i = qe()
          Et(r, t, 1, i)
        }
      }),
        eh(t, 1)
  }
}
Tc = function (t) {
  if (t.tag === 13) {
    var e = qt(t, 134217728)
    if (e !== null) {
      var n = qe()
      Et(e, t, 134217728, n)
    }
    eh(t, 134217728)
  }
}
Yp = function (t) {
  if (t.tag === 13) {
    var e = cn(t),
      n = qt(t, e)
    if (n !== null) {
      var r = qe()
      Et(n, t, e, r)
    }
    eh(t, e)
  }
}
Xp = function () {
  return G
}
Jp = function (t, e) {
  var n = G
  try {
    return (G = t), e()
  } finally {
    G = n
  }
}
Zl = function (t, e, n) {
  switch (e) {
    case 'input':
      if ((Kl(t, n), (e = n.name), n.type === 'radio' && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e]
          if (r !== t && r.form === t.form) {
            var i = ca(r)
            if (!i) throw Error(w(90))
            kp(r), Kl(r, i)
          }
        }
      }
      break
    case 'textarea':
      Np(t, n)
      break
    case 'select':
      ;(e = n.value), e != null && vr(t, !!n.multiple, e, !1)
  }
}
$p = bc
jp = Kn
var t1 = { usingClientEntryPoint: !1, Events: [gs, cr, ca, Mp, Fp, bc] },
  ui = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  n1 = {
    bundleType: ui.bundleType,
    version: ui.version,
    rendererPackageName: ui.rendererPackageName,
    rendererConfig: ui.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Bp(t)), t === null ? null : t.stateNode
    },
    findFiberByHostInstance: ui.findFiberByHostInstance || Z_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Gs = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Gs.isDisabled && Gs.supportsFiber)
    try {
      ;(oa = Gs.inject(n1)), (xt = Gs)
    } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t1
it.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!nh(e)) throw Error(w(200))
  return J_(t, e, null, n)
}
it.createRoot = function (t, e) {
  if (!nh(t)) throw Error(w(299))
  var n = !1,
    r = '',
    i = wg
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = Zc(t, 1, !1, null, null, n, !1, r, i)),
    (t[Ht] = e.current),
    qi(t.nodeType === 8 ? t.parentNode : t),
    new th(e)
  )
}
it.findDOMNode = function (t) {
  if (t == null) return null
  if (t.nodeType === 1) return t
  var e = t._reactInternals
  if (e === void 0)
    throw typeof t.render == 'function'
      ? Error(w(188))
      : ((t = Object.keys(t).join(',')), Error(w(268, t)))
  return (t = Bp(e)), (t = t === null ? null : t.stateNode), t
}
it.flushSync = function (t) {
  return Kn(t)
}
it.hydrate = function (t, e, n) {
  if (!_a(e)) throw Error(w(200))
  return Ea(null, t, e, !0, n)
}
it.hydrateRoot = function (t, e, n) {
  if (!nh(t)) throw Error(w(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    o = wg
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = Eg(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[Ht] = e.current),
    qi(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i)
  return new va(e)
}
it.render = function (t, e, n) {
  if (!_a(e)) throw Error(w(200))
  return Ea(null, t, e, !1, n)
}
it.unmountComponentAtNode = function (t) {
  if (!_a(t)) throw Error(w(40))
  return t._reactRootContainer
    ? (Kn(function () {
        Ea(null, null, t, !1, function () {
          ;(t._reactRootContainer = null), (t[Ht] = null)
        })
      }),
      !0)
    : !1
}
it.unstable_batchedUpdates = bc
it.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!_a(n)) throw Error(w(200))
  if (t == null || t._reactInternals === void 0) throw Error(w(38))
  return Ea(t, e, n, !1, r)
}
it.version = '18.2.0-next-9e3b772b8-20220608'
function Tg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tg)
    } catch (t) {
      console.error(t)
    }
}
Tg(), (Ep.exports = it)
var r1 = Ep.exports,
  of = r1
;(jl.createRoot = of.createRoot), (jl.hydrateRoot = of.hydrateRoot)
const i1 = ({
    created: t,
    title: e,
    repo: n,
    techs: r,
    description: i,
    deploy: s,
    image: o,
  }) => {
    const a = r.split(',').join(' • '),
      l = new Date(`${t}T00:00:00.000-06:00`).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    return A.jsx('div', {
      className: 'col',
      children: A.jsxs('div', {
        className:
          'bg-body border rounded shadow-sm overflow-hidden h-100 d-flex flex-column',
        children: [
          A.jsx('img', {
            loading: 'lazy',
            src: o,
            alt: e,
            className: 'w-100 border-bottom',
            style: { minHeight: '100px' },
          }),
          A.jsxs('div', {
            className:
              'd-flex flex-column justify-content-between flex-grow-1 p-3',
            children: [
              A.jsxs('div', {
                children: [
                  A.jsx('h3', { children: e }),
                  A.jsx('p', {
                    className: 'text-secondary text-truncate',
                    title: a,
                    children: A.jsx('small', { children: a }),
                  }),
                  A.jsx('p', { className: 'flex-grow-1', children: i }),
                ],
              }),
              A.jsxs('div', {
                children: [
                  A.jsxs('p', {
                    className: 'd-flex gap-2',
                    children: [
                      A.jsx('a', {
                        className: 'with-external-link-icon',
                        href: s,
                        target: '_blank',
                        children: 'App',
                      }),
                      A.jsx('span', { children: '·' }),
                      A.jsx('a', {
                        className: 'with-external-link-icon',
                        href: n,
                        target: '_blank',
                        children: 'Repo',
                      }),
                    ],
                  }),
                  A.jsx('p', {
                    className: 'm-0 text-end',
                    children: A.jsxs('small', {
                      className: 'text-secondary',
                      children: ['Created: ', l],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  },
  s1 = ({ projects: t }) => {
    const [e, n] = vt.useState(''),
      r = vt.useMemo(
        () =>
          [...new Set(t.flatMap(({ techs: o }) => o.split(',')))].sort((o, a) =>
            o.localeCompare(a)
          ),
        [t]
      ),
      i = t.filter(({ techs: o }) => o.includes(e)),
      s = (o) => () => {
        n(o)
      }
    return A.jsxs('section', {
      children: [
        A.jsx('hr', {}),
        A.jsx('h2', { className: 'my-4', children: 'Personal Projects' }),
        A.jsxs('div', {
          className: 'mb-3 d-flex flex-wrap',
          children: [
            A.jsx('button', {
              className: `btn btn-sm me-2 mb-2 ${
                e === '' ? 'btn-primary' : 'btn-outline-primary'
              }`,
              onClick: s(''),
              children: 'All',
            }),
            r.map((o) =>
              A.jsx(
                'button',
                {
                  className: `btn btn-sm me-2 mb-2 ${
                    o === e ? 'btn-primary' : 'btn-outline-primary'
                  }`,
                  onClick: s(o),
                  children: o,
                },
                o
              )
            ),
          ],
        }),
        A.jsx('div', {
          className: 'row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3',
          children: i.map(({ id: o, ...a }) => A.jsx(i1, { ...a }, o)),
        }),
      ],
    })
  },
  o1 = () =>
    A.jsx('div', {
      className: 'progress mb-4',
      children: A.jsx('div', {
        className:
          'progress-bar progress-bar-striped progress-bar-animated w-100',
      }),
    }),
  a1 = () =>
    A.jsx('section', {
      className: 'container',
      children: A.jsxs('div', {
        className: 'row',
        children: [
          A.jsxs('div', {
            className: 'col-12 col-sm-6 align-self-center mb-3 mb-sm-5',
            children: [
              A.jsx('h1', { children: 'Jaime A. Pineda' }),
              A.jsxs('p', {
                children: [
                  A.jsx('strong', { children: 'Web Developer' }),
                  ' with experience building responsive websites and a strong UX-based approach. I am a passionate self-learner and open-minded to new ways of solving problems. Great emphasis on scalable code and good practices. My work experience stands out in the sport and retail industry as the NBA team “Miami Heat” and Unicomer Group, respectively.',
                ],
              }),
              A.jsx('img', {
                className: 'w-100',
                src: 'https://skillicons.dev/icons?i=angular,react,nextjs,nodejs,express,nestjs,typescript,javascript&theme=light',
                alt: "Jaime Pineda's Tech Stack ",
              }),
            ],
          }),
          A.jsx('div', {
            className: 'col-12 col-sm-6 align-self-center mb-3 mb-sm-5',
            children: A.jsx('img', {
              className: 'rounded-circle border w-100 mx-auto d-block',
              src: 'https://github.com/jpin730.png',
              alt: "Jaime Pineda's Github avatar",
              style: { maxWidth: '300px' },
            }),
          }),
        ],
      }),
    })
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sg = function (t) {
    const e = []
    let n = 0
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r)
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < t.length &&
          (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
    }
    return e
  },
  l1 = function (t) {
    const e = []
    let n = 0,
      r = 0
    for (; n < t.length; ) {
      const i = t[n++]
      if (i < 128) e[r++] = String.fromCharCode(i)
      else if (i > 191 && i < 224) {
        const s = t[n++]
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63))
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          a = t[n++],
          l =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536
        ;(e[r++] = String.fromCharCode(55296 + (l >> 10))),
          (e[r++] = String.fromCharCode(56320 + (l & 1023)))
      } else {
        const s = t[n++],
          o = t[n++]
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        )
      }
    }
    return e.join('')
  },
  Ig = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/='
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.'
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error('encodeByteArray takes an array as a parameter')
      this.init_()
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = []
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          a = o ? t[i + 1] : 0,
          l = i + 2 < t.length,
          u = l ? t[i + 2] : 0,
          c = s >> 2,
          h = ((s & 3) << 4) | (a >> 4)
        let f = ((a & 15) << 2) | (u >> 6),
          g = u & 63
        l || ((g = 64), o || (f = 64)), r.push(n[c], n[h], n[f], n[g])
      }
      return r.join('')
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(Sg(t), e)
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : l1(this.decodeStringToByteArray(t, e))
    },
    decodeStringToByteArray(t, e) {
      this.init_()
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = []
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          a = i < t.length ? n[t.charAt(i)] : 0
        ++i
        const u = i < t.length ? n[t.charAt(i)] : 64
        ++i
        const h = i < t.length ? n[t.charAt(i)] : 64
        if ((++i, s == null || a == null || u == null || h == null))
          throw new u1()
        const f = (s << 2) | (a >> 4)
        if ((r.push(f), u !== 64)) {
          const g = ((a << 4) & 240) | (u >> 2)
          if ((r.push(g), h !== 64)) {
            const _ = ((u << 6) & 192) | h
            r.push(_)
          }
        }
      }
      return r
    },
    init_() {
      if (!this.byteToCharMap_) {
        ;(this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {})
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t))
      }
    },
  }
class u1 extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError')
  }
}
const c1 = function (t) {
    const e = Sg(t)
    return Ig.encodeByteArray(e, !0)
  },
  qo = function (t) {
    return c1(t).replace(/\./g, '')
  },
  h1 = function (t) {
    try {
      return Ig.decodeString(t, !0)
    } catch (e) {
      console.error('base64Decode failed: ', e)
    }
    return null
  }
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function d1() {
  if (typeof self < 'u') return self
  if (typeof window < 'u') return window
  if (typeof global < 'u') return global
  throw new Error('Unable to locate global object.')
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const f1 = () => d1().__FIREBASE_DEFAULTS__,
  p1 = () => {
    if (typeof process > 'u' || typeof process.env > 'u') return
    const t = {}.__FIREBASE_DEFAULTS__
    if (t) return JSON.parse(t)
  },
  m1 = () => {
    if (typeof document > 'u') return
    let t
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
      return
    }
    const e = t && h1(t[1])
    return e && JSON.parse(e)
  },
  rh = () => {
    try {
      return f1() || p1() || m1()
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)
      return
    }
  },
  g1 = (t) => {
    var e, n
    return (n =
      (e = rh()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t]
  },
  y1 = (t) => {
    const e = g1(t)
    if (!e) return
    const n = e.lastIndexOf(':')
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`)
    const r = parseInt(e.substring(n + 1), 10)
    return e[0] === '[' ? [e.substring(1, n - 1), r] : [e.substring(0, n), r]
  },
  Ag = () => {
    var t
    return (t = rh()) === null || t === void 0 ? void 0 : t.config
  }
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v1 {
  constructor() {
    ;(this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        ;(this.resolve = e), (this.reject = n)
      }))
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == 'function' &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r))
    }
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _1(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    )
  const n = { alg: 'none', type: 'JWT' },
    r = e || 'demo-project',
    i = t.iat || 0,
    s = t.sub || t.user_id
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
  const o = Object.assign(
      {
        iss: `https://securetoken.google.com/${r}`,
        aud: r,
        iat: i,
        exp: i + 3600,
        auth_time: i,
        sub: s,
        user_id: s,
        firebase: { sign_in_provider: 'custom', identities: {} },
      },
      t
    ),
    a = ''
  return [qo(JSON.stringify(n)), qo(JSON.stringify(o)), a].join('.')
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qo() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : ''
}
function E1() {
  var t
  const e = (t = rh()) === null || t === void 0 ? void 0 : t.forceEnvironment
  if (e === 'node') return !0
  if (e === 'browser') return !1
  try {
    return Object.prototype.toString.call(global.process) === '[object process]'
  } catch {
    return !1
  }
}
function w1() {
  return (
    !E1() &&
    navigator.userAgent.includes('Safari') &&
    !navigator.userAgent.includes('Chrome')
  )
}
function Cg() {
  try {
    return typeof indexedDB == 'object'
  } catch {
    return !1
  }
}
function T1() {
  return new Promise((t, e) => {
    try {
      let n = !0
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        i = self.indexedDB.open(r)
      ;(i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0)
      }),
        (i.onupgradeneeded = () => {
          n = !1
        }),
        (i.onerror = () => {
          var s
          e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || '')
        })
    } catch (n) {
      e(n)
    }
  })
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const S1 = 'FirebaseError'
class Wr extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = S1),
      Object.setPrototypeOf(this, Wr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Rg.prototype.create)
  }
}
class Rg {
  constructor(e, n, r) {
    ;(this.service = e), (this.serviceName = n), (this.errors = r)
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? I1(s, r) : 'Error',
      a = `${this.serviceName}: ${o} (${i}).`
    return new Wr(i, a, r)
  }
}
function I1(t, e) {
  return t.replace(A1, (n, r) => {
    const i = e[r]
    return i != null ? String(i) : `<${r}?>`
  })
}
const A1 = /\{\$([^}]+)}/g
function Du(t, e) {
  if (t === e) return !0
  const n = Object.keys(t),
    r = Object.keys(e)
  for (const i of n) {
    if (!r.includes(i)) return !1
    const s = t[i],
      o = e[i]
    if (af(s) && af(o)) {
      if (!Du(s, o)) return !1
    } else if (s !== o) return !1
  }
  for (const i of r) if (!n.includes(i)) return !1
  return !0
}
function af(t) {
  return t !== null && typeof t == 'object'
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function C1(t) {
  return t && t._delegate ? t._delegate : t
}
class Zi {
  constructor(e, n, r) {
    ;(this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null)
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kn = '[DEFAULT]'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class R1 {
  constructor(e, n) {
    ;(this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map())
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e)
    if (!this.instancesDeferred.has(n)) {
      const r = new v1()
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n })
          i && r.resolve(i)
        } catch {}
    }
    return this.instancesDeferred.get(n).promise
  }
  getImmediate(e) {
    var n
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r })
      } catch (s) {
        if (i) return null
        throw s
      }
    else {
      if (i) return null
      throw Error(`Service ${this.name} is not available`)
    }
  }
  getComponent() {
    return this.component
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`)
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`)
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (k1(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: kn })
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n)
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i })
          r.resolve(s)
        } catch {}
      }
    }
  }
  clearInstance(e = kn) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e)
  }
  async delete() {
    const e = Array.from(this.instances.values())
    await Promise.all([
      ...e.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => '_delete' in n).map((n) => n._delete()),
    ])
  }
  isComponentSet() {
    return this.component != null
  }
  isInitialized(e = kn) {
    return this.instances.has(e)
  }
  getOptions(e = kn) {
    return this.instancesOptions.get(e) || {}
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier)
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`)
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`)
    const i = this.getOrInitializeService({ instanceIdentifier: r, options: n })
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s)
      r === a && o.resolve(i)
    }
    return i
  }
  onInit(e, n) {
    var r
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set()
    s.add(e), this.onInitCallbacks.set(i, s)
    const o = this.instances.get(i)
    return (
      o && e(o, i),
      () => {
        s.delete(e)
      }
    )
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n)
    if (r)
      for (const i of r)
        try {
          i(e, n)
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e)
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: P1(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r)
      } catch {}
    return r || null
  }
  normalizeInstanceIdentifier(e = kn) {
    return this.component ? (this.component.multipleInstances ? e : kn) : e
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT'
  }
}
function P1(t) {
  return t === kn ? void 0 : t
}
function k1(t) {
  return t.instantiationMode === 'EAGER'
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x1 {
  constructor(e) {
    ;(this.name = e), (this.providers = new Map())
  }
  addComponent(e) {
    const n = this.getProvider(e.name)
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      )
    n.setComponent(e)
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e)
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e)
    const n = new R1(e, this)
    return this.providers.set(e, n), n
  }
  getProviders() {
    return Array.from(this.providers.values())
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var H
;(function (t) {
  ;(t[(t.DEBUG = 0)] = 'DEBUG'),
    (t[(t.VERBOSE = 1)] = 'VERBOSE'),
    (t[(t.INFO = 2)] = 'INFO'),
    (t[(t.WARN = 3)] = 'WARN'),
    (t[(t.ERROR = 4)] = 'ERROR'),
    (t[(t.SILENT = 5)] = 'SILENT')
})(H || (H = {}))
const N1 = {
    debug: H.DEBUG,
    verbose: H.VERBOSE,
    info: H.INFO,
    warn: H.WARN,
    error: H.ERROR,
    silent: H.SILENT,
  },
  D1 = H.INFO,
  V1 = {
    [H.DEBUG]: 'log',
    [H.VERBOSE]: 'log',
    [H.INFO]: 'info',
    [H.WARN]: 'warn',
    [H.ERROR]: 'error',
  },
  L1 = (t, e, ...n) => {
    if (e < t.logLevel) return
    const r = new Date().toISOString(),
      i = V1[e]
    if (i) console[i](`[${r}]  ${t.name}:`, ...n)
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      )
  }
class Pg {
  constructor(e) {
    ;(this.name = e),
      (this._logLevel = D1),
      (this._logHandler = L1),
      (this._userLogHandler = null)
  }
  get logLevel() {
    return this._logLevel
  }
  set logLevel(e) {
    if (!(e in H))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``)
    this._logLevel = e
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? N1[e] : e
  }
  get logHandler() {
    return this._logHandler
  }
  set logHandler(e) {
    if (typeof e != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function')
    this._logHandler = e
  }
  get userLogHandler() {
    return this._userLogHandler
  }
  set userLogHandler(e) {
    this._userLogHandler = e
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, H.DEBUG, ...e),
      this._logHandler(this, H.DEBUG, ...e)
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, H.VERBOSE, ...e),
      this._logHandler(this, H.VERBOSE, ...e)
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, H.INFO, ...e),
      this._logHandler(this, H.INFO, ...e)
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, H.WARN, ...e),
      this._logHandler(this, H.WARN, ...e)
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, H.ERROR, ...e),
      this._logHandler(this, H.ERROR, ...e)
  }
}
const O1 = (t, e) => e.some((n) => t instanceof n)
let lf, uf
function M1() {
  return (
    lf ||
    (lf = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  )
}
function F1() {
  return (
    uf ||
    (uf = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  )
}
const kg = new WeakMap(),
  Vu = new WeakMap(),
  xg = new WeakMap(),
  Tl = new WeakMap(),
  ih = new WeakMap()
function $1(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener('success', s), t.removeEventListener('error', o)
      },
      s = () => {
        n(dn(t.result)), i()
      },
      o = () => {
        r(t.error), i()
      }
    t.addEventListener('success', s), t.addEventListener('error', o)
  })
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && kg.set(n, t)
      })
      .catch(() => {}),
    ih.set(e, t),
    e
  )
}
function j1(t) {
  if (Vu.has(t)) return
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener('complete', s),
          t.removeEventListener('error', o),
          t.removeEventListener('abort', o)
      },
      s = () => {
        n(), i()
      },
      o = () => {
        r(t.error || new DOMException('AbortError', 'AbortError')), i()
      }
    t.addEventListener('complete', s),
      t.addEventListener('error', o),
      t.addEventListener('abort', o)
  })
  Vu.set(t, e)
}
let Lu = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === 'done') return Vu.get(t)
      if (e === 'objectStoreNames') return t.objectStoreNames || xg.get(t)
      if (e === 'store')
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0])
    }
    return dn(t[e])
  },
  set(t, e, n) {
    return (t[e] = n), !0
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === 'done' || e === 'store')
      ? !0
      : e in t
  },
}
function U1(t) {
  Lu = t(Lu)
}
function z1(t) {
  return t === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(Sl(this), e, ...n)
        return xg.set(r, e.sort ? e.sort() : [e]), dn(r)
      }
    : F1().includes(t)
    ? function (...e) {
        return t.apply(Sl(this), e), dn(kg.get(this))
      }
    : function (...e) {
        return dn(t.apply(Sl(this), e))
      }
}
function B1(t) {
  return typeof t == 'function'
    ? z1(t)
    : (t instanceof IDBTransaction && j1(t), O1(t, M1()) ? new Proxy(t, Lu) : t)
}
function dn(t) {
  if (t instanceof IDBRequest) return $1(t)
  if (Tl.has(t)) return Tl.get(t)
  const e = B1(t)
  return e !== t && (Tl.set(t, e), ih.set(e, t)), e
}
const Sl = (t) => ih.get(t)
function H1(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = dn(o)
  return (
    r &&
      o.addEventListener('upgradeneeded', (l) => {
        r(dn(o.result), l.oldVersion, l.newVersion, dn(o.transaction), l)
      }),
    n && o.addEventListener('blocked', (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        s && l.addEventListener('close', () => s()),
          i &&
            l.addEventListener('versionchange', (u) =>
              i(u.oldVersion, u.newVersion, u)
            )
      })
      .catch(() => {}),
    a
  )
}
const q1 = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  Q1 = ['put', 'add', 'delete', 'clear'],
  Il = new Map()
function cf(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == 'string')) return
  if (Il.get(e)) return Il.get(e)
  const n = e.replace(/FromIndex$/, ''),
    r = e !== n,
    i = Q1.includes(n)
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || q1.includes(n))
  )
    return
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? 'readwrite' : 'readonly')
    let u = l.store
    return (
      r && (u = u.index(a.shift())),
      (await Promise.all([u[n](...a), i && l.done]))[0]
    )
  }
  return Il.set(e, s), s
}
U1((t) => ({
  ...t,
  get: (e, n, r) => cf(e, n) || t.get(e, n, r),
  has: (e, n) => !!cf(e, n) || t.has(e, n),
}))
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class K1 {
  constructor(e) {
    this.container = e
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (W1(n)) {
          const r = n.getImmediate()
          return `${r.library}/${r.version}`
        } else return null
      })
      .filter((n) => n)
      .join(' ')
  }
}
function W1(t) {
  const e = t.getComponent()
  return (e == null ? void 0 : e.type) === 'VERSION'
}
const Ou = '@firebase/app',
  hf = '0.9.26'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wn = new Pg('@firebase/app'),
  G1 = '@firebase/app-compat',
  b1 = '@firebase/analytics-compat',
  Y1 = '@firebase/analytics',
  X1 = '@firebase/app-check-compat',
  J1 = '@firebase/app-check',
  Z1 = '@firebase/auth',
  eE = '@firebase/auth-compat',
  tE = '@firebase/database',
  nE = '@firebase/database-compat',
  rE = '@firebase/functions',
  iE = '@firebase/functions-compat',
  sE = '@firebase/installations',
  oE = '@firebase/installations-compat',
  aE = '@firebase/messaging',
  lE = '@firebase/messaging-compat',
  uE = '@firebase/performance',
  cE = '@firebase/performance-compat',
  hE = '@firebase/remote-config',
  dE = '@firebase/remote-config-compat',
  fE = '@firebase/storage',
  pE = '@firebase/storage-compat',
  mE = '@firebase/firestore',
  gE = '@firebase/firestore-compat',
  yE = 'firebase',
  vE = '10.7.2'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mu = '[DEFAULT]',
  _E = {
    [Ou]: 'fire-core',
    [G1]: 'fire-core-compat',
    [Y1]: 'fire-analytics',
    [b1]: 'fire-analytics-compat',
    [J1]: 'fire-app-check',
    [X1]: 'fire-app-check-compat',
    [Z1]: 'fire-auth',
    [eE]: 'fire-auth-compat',
    [tE]: 'fire-rtdb',
    [nE]: 'fire-rtdb-compat',
    [rE]: 'fire-fn',
    [iE]: 'fire-fn-compat',
    [sE]: 'fire-iid',
    [oE]: 'fire-iid-compat',
    [aE]: 'fire-fcm',
    [lE]: 'fire-fcm-compat',
    [uE]: 'fire-perf',
    [cE]: 'fire-perf-compat',
    [hE]: 'fire-rc',
    [dE]: 'fire-rc-compat',
    [fE]: 'fire-gcs',
    [pE]: 'fire-gcs-compat',
    [mE]: 'fire-fst',
    [gE]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [yE]: 'fire-js-all',
  }
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ko = new Map(),
  Fu = new Map()
function EE(t, e) {
  try {
    t.container.addComponent(e)
  } catch (n) {
    Wn.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    )
  }
}
function Wo(t) {
  const e = t.name
  if (Fu.has(e))
    return (
      Wn.debug(`There were multiple attempts to register component ${e}.`), !1
    )
  Fu.set(e, t)
  for (const n of Ko.values()) EE(n, t)
  return !0
}
function wE(t, e) {
  const n = t.container.getProvider('heartbeat').getImmediate({ optional: !0 })
  return n && n.triggerHeartbeat(), t.container.getProvider(e)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const TE = {
    'no-app':
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    'bad-app-name': "Illegal App name: '{$appName}",
    'duplicate-app':
      "Firebase App named '{$appName}' already exists with different options or config",
    'app-deleted': "Firebase App named '{$appName}' already deleted",
    'no-options':
      'Need to provide options, when not being deployed to hosting via source.',
    'invalid-app-argument':
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    'invalid-log-argument':
      'First argument to `onLog` must be null or a function.',
    'idb-open':
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-get':
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-set':
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-delete':
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
  },
  fn = new Rg('app', 'Firebase', TE)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class SE {
  constructor(e, n, r) {
    ;(this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Zi('app', () => this, 'PUBLIC'))
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e)
  }
  get name() {
    return this.checkDestroyed(), this._name
  }
  get options() {
    return this.checkDestroyed(), this._options
  }
  get config() {
    return this.checkDestroyed(), this._config
  }
  get container() {
    return this._container
  }
  get isDeleted() {
    return this._isDeleted
  }
  set isDeleted(e) {
    this._isDeleted = e
  }
  checkDestroyed() {
    if (this.isDeleted) throw fn.create('app-deleted', { appName: this._name })
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const IE = vE
function Ng(t, e = {}) {
  let n = t
  typeof e != 'object' && (e = { name: e })
  const r = Object.assign({ name: Mu, automaticDataCollectionEnabled: !1 }, e),
    i = r.name
  if (typeof i != 'string' || !i)
    throw fn.create('bad-app-name', { appName: String(i) })
  if ((n || (n = Ag()), !n)) throw fn.create('no-options')
  const s = Ko.get(i)
  if (s) {
    if (Du(n, s.options) && Du(r, s.config)) return s
    throw fn.create('duplicate-app', { appName: i })
  }
  const o = new x1(i)
  for (const l of Fu.values()) o.addComponent(l)
  const a = new SE(n, r, o)
  return Ko.set(i, a), a
}
function AE(t = Mu) {
  const e = Ko.get(t)
  if (!e && t === Mu && Ag()) return Ng()
  if (!e) throw fn.create('no-app', { appName: t })
  return e
}
function Ir(t, e, n) {
  var r
  let i = (r = _E[t]) !== null && r !== void 0 ? r : t
  n && (i += `-${n}`)
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//)
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`]
    s &&
      a.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && a.push('and'),
      o &&
        a.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      Wn.warn(a.join(' '))
    return
  }
  Wo(new Zi(`${i}-version`, () => ({ library: i, version: e }), 'VERSION'))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const CE = 'firebase-heartbeat-database',
  RE = 1,
  es = 'firebase-heartbeat-store'
let Al = null
function Dg() {
  return (
    Al ||
      (Al = H1(CE, RE, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              try {
                t.createObjectStore(es)
              } catch (n) {
                console.warn(n)
              }
          }
        },
      }).catch((t) => {
        throw fn.create('idb-open', { originalErrorMessage: t.message })
      })),
    Al
  )
}
async function PE(t) {
  try {
    return await (await Dg()).transaction(es).objectStore(es).get(Vg(t))
  } catch (e) {
    if (e instanceof Wr) Wn.warn(e.message)
    else {
      const n = fn.create('idb-get', {
        originalErrorMessage: e == null ? void 0 : e.message,
      })
      Wn.warn(n.message)
    }
  }
}
async function df(t, e) {
  try {
    const r = (await Dg()).transaction(es, 'readwrite')
    await r.objectStore(es).put(e, Vg(t)), await r.done
  } catch (n) {
    if (n instanceof Wr) Wn.warn(n.message)
    else {
      const r = fn.create('idb-set', {
        originalErrorMessage: n == null ? void 0 : n.message,
      })
      Wn.warn(r.message)
    }
  }
}
function Vg(t) {
  return `${t.name}!${t.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kE = 1024,
  xE = 30 * 24 * 60 * 60 * 1e3
class NE {
  constructor(e) {
    ;(this.container = e), (this._heartbeatsCache = null)
    const n = this.container.getProvider('app').getImmediate()
    ;(this._storage = new VE(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)))
  }
  async triggerHeartbeat() {
    var e, n
    const i = this.container
        .getProvider('platform-logger')
        .getImmediate()
        .getPlatformInfoString(),
      s = ff()
    if (
      !(
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((o) => {
            const a = new Date(o.date).valueOf()
            return Date.now() - a <= xE
          })),
        this._storage.overwrite(this._heartbeatsCache)
      )
  }
  async getHeartbeatsHeader() {
    var e
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((e = this._heartbeatsCache) === null || e === void 0
        ? void 0
        : e.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return ''
    const n = ff(),
      { heartbeatsToSend: r, unsentEntries: i } = DE(
        this._heartbeatsCache.heartbeats
      ),
      s = qo(JSON.stringify({ version: 2, heartbeats: r }))
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      s
    )
  }
}
function ff() {
  return new Date().toISOString().substring(0, 10)
}
function DE(t, e = kE) {
  const n = []
  let r = t.slice()
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent)
    if (s) {
      if ((s.dates.push(i.date), pf(n) > e)) {
        s.dates.pop()
        break
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), pf(n) > e)) {
      n.pop()
      break
    }
    r = r.slice(1)
  }
  return { heartbeatsToSend: n, unsentEntries: r }
}
class VE {
  constructor(e) {
    ;(this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck())
  }
  async runIndexedDBEnvironmentCheck() {
    return Cg()
      ? T1()
          .then(() => !0)
          .catch(() => !1)
      : !1
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await PE(this.app)
      return n != null && n.heartbeats ? n : { heartbeats: [] }
    } else return { heartbeats: [] }
  }
  async overwrite(e) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read()
      return df(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      })
    } else return
  }
  async add(e) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read()
      return df(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      })
    } else return
  }
}
function pf(t) {
  return qo(JSON.stringify({ version: 2, heartbeats: t })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function LE(t) {
  Wo(new Zi('platform-logger', (e) => new K1(e), 'PRIVATE')),
    Wo(new Zi('heartbeat', (e) => new NE(e), 'PRIVATE')),
    Ir(Ou, hf, t),
    Ir(Ou, hf, 'esm2017'),
    Ir('fire-js', '')
}
LE('')
var OE =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  S,
  sh = sh || {},
  O = OE || self
function wa(t) {
  var e = typeof t
  return (
    (e = e != 'object' ? e : t ? (Array.isArray(t) ? 'array' : e) : 'null'),
    e == 'array' || (e == 'object' && typeof t.length == 'number')
  )
}
function vs(t) {
  var e = typeof t
  return (e == 'object' && t != null) || e == 'function'
}
function ME(t) {
  return (
    (Object.prototype.hasOwnProperty.call(t, Cl) && t[Cl]) || (t[Cl] = ++FE)
  )
}
var Cl = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
  FE = 0
function $E(t, e, n) {
  return t.call.apply(t.bind, arguments)
}
function jE(t, e, n) {
  if (!t) throw Error()
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2)
    return function () {
      var i = Array.prototype.slice.call(arguments)
      return Array.prototype.unshift.apply(i, r), t.apply(e, i)
    }
  }
  return function () {
    return t.apply(e, arguments)
  }
}
function Fe(t, e, n) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf('native code') != -1
      ? (Fe = $E)
      : (Fe = jE),
    Fe.apply(null, arguments)
  )
}
function bs(t, e) {
  var n = Array.prototype.slice.call(arguments, 1)
  return function () {
    var r = n.slice()
    return r.push.apply(r, arguments), t.apply(this, r)
  }
}
function Se(t, e) {
  function n() {}
  ;(n.prototype = e.prototype),
    (t.$ = e.prototype),
    (t.prototype = new n()),
    (t.prototype.constructor = t),
    (t.ac = function (r, i, s) {
      for (
        var o = Array(arguments.length - 2), a = 2;
        a < arguments.length;
        a++
      )
        o[a - 2] = arguments[a]
      return e.prototype[i].apply(r, o)
    })
}
function Sn() {
  ;(this.s = this.s), (this.o = this.o)
}
var UE = 0
Sn.prototype.s = !1
Sn.prototype.sa = function () {
  !this.s && ((this.s = !0), this.N(), UE != 0) && ME(this)
}
Sn.prototype.N = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()()
}
const Lg = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0)
    }
  : function (t, e) {
      if (typeof t == 'string')
        return typeof e != 'string' || e.length != 1 ? -1 : t.indexOf(e, 0)
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n
      return -1
    }
function oh(t) {
  const e = t.length
  if (0 < e) {
    const n = Array(e)
    for (let r = 0; r < e; r++) n[r] = t[r]
    return n
  }
  return []
}
function mf(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n]
    if (wa(r)) {
      const i = t.length || 0,
        s = r.length || 0
      t.length = i + s
      for (let o = 0; o < s; o++) t[i + o] = r[o]
    } else t.push(r)
  }
}
function $e(t, e) {
  ;(this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1)
}
$e.prototype.h = function () {
  this.defaultPrevented = !0
}
var zE = (function () {
  if (!O.addEventListener || !Object.defineProperty) return !1
  var t = !1,
    e = Object.defineProperty({}, 'passive', {
      get: function () {
        t = !0
      },
    })
  try {
    const n = () => {}
    O.addEventListener('test', n, e), O.removeEventListener('test', n, e)
  } catch {}
  return t
})()
function ts(t) {
  return /^[\s\xa0]*$/.test(t)
}
function Ta() {
  var t = O.navigator
  return t && (t = t.userAgent) ? t : ''
}
function Ct(t) {
  return Ta().indexOf(t) != -1
}
function ah(t) {
  return ah[' '](t), t
}
ah[' '] = function () {}
function BE(t, e) {
  var n = Lw
  return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t))
}
var HE = Ct('Opera'),
  Fr = Ct('Trident') || Ct('MSIE'),
  Og = Ct('Edge'),
  $u = Og || Fr,
  Mg =
    Ct('Gecko') &&
    !(Ta().toLowerCase().indexOf('webkit') != -1 && !Ct('Edge')) &&
    !(Ct('Trident') || Ct('MSIE')) &&
    !Ct('Edge'),
  qE = Ta().toLowerCase().indexOf('webkit') != -1 && !Ct('Edge')
function Fg() {
  var t = O.document
  return t ? t.documentMode : void 0
}
var ju
e: {
  var Rl = '',
    Pl = (function () {
      var t = Ta()
      if (Mg) return /rv:([^\);]+)(\)|;)/.exec(t)
      if (Og) return /Edge\/([\d\.]+)/.exec(t)
      if (Fr) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t)
      if (qE) return /WebKit\/(\S+)/.exec(t)
      if (HE) return /(?:Version)[ \/]?(\S+)/.exec(t)
    })()
  if ((Pl && (Rl = Pl ? Pl[1] : ''), Fr)) {
    var kl = Fg()
    if (kl != null && kl > parseFloat(Rl)) {
      ju = String(kl)
      break e
    }
  }
  ju = Rl
}
var Uu
if (O.document && Fr) {
  var gf = Fg()
  Uu = gf || parseInt(ju, 10) || void 0
} else Uu = void 0
var QE = Uu
function ns(t, e) {
  if (
    ($e.call(this, t ? t.type : ''),
    (this.relatedTarget = this.g = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ''),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ''),
    (this.i = null),
    t)
  ) {
    var n = (this.type = t.type),
      r =
        t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null
    if (
      ((this.target = t.target || t.srcElement),
      (this.g = e),
      (e = t.relatedTarget))
    ) {
      if (Mg) {
        e: {
          try {
            ah(e.nodeName)
            var i = !0
            break e
          } catch {}
          i = !1
        }
        i || (e = null)
      }
    } else
      n == 'mouseover'
        ? (e = t.fromElement)
        : n == 'mouseout' && (e = t.toElement)
    ;(this.relatedTarget = e),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = t.clientX !== void 0 ? t.clientX : t.pageX),
          (this.clientY = t.clientY !== void 0 ? t.clientY : t.pageY),
          (this.screenX = t.screenX || 0),
          (this.screenY = t.screenY || 0)),
      (this.button = t.button),
      (this.key = t.key || ''),
      (this.ctrlKey = t.ctrlKey),
      (this.altKey = t.altKey),
      (this.shiftKey = t.shiftKey),
      (this.metaKey = t.metaKey),
      (this.pointerId = t.pointerId || 0),
      (this.pointerType =
        typeof t.pointerType == 'string'
          ? t.pointerType
          : KE[t.pointerType] || ''),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && ns.$.h.call(this)
  }
}
Se(ns, $e)
var KE = { 2: 'touch', 3: 'pen', 4: 'mouse' }
ns.prototype.h = function () {
  ns.$.h.call(this)
  var t = this.i
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1)
}
var _s = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
  WE = 0
function GE(t, e, n, r, i) {
  ;(this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.la = i),
    (this.key = ++WE),
    (this.fa = this.ia = !1)
}
function Sa(t) {
  ;(t.fa = !0),
    (t.listener = null),
    (t.proxy = null),
    (t.src = null),
    (t.la = null)
}
function lh(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t)
}
function bE(t, e) {
  for (const n in t) e.call(void 0, t[n], n, t)
}
function $g(t) {
  const e = {}
  for (const n in t) e[n] = t[n]
  return e
}
const yf =
  'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
    ' '
  )
function jg(t, e) {
  let n, r
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i]
    for (n in r) t[n] = r[n]
    for (let s = 0; s < yf.length; s++)
      (n = yf[s]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
  }
}
function Ia(t) {
  ;(this.src = t), (this.g = {}), (this.h = 0)
}
Ia.prototype.add = function (t, e, n, r, i) {
  var s = t.toString()
  ;(t = this.g[s]), t || ((t = this.g[s] = []), this.h++)
  var o = Bu(t, e, r, i)
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ia = !1))
      : ((e = new GE(e, this.src, s, !!r, i)), (e.ia = n), t.push(e)),
    e
  )
}
function zu(t, e) {
  var n = e.type
  if (n in t.g) {
    var r = t.g[n],
      i = Lg(r, e),
      s
    ;(s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (Sa(e), t.g[n].length == 0 && (delete t.g[n], t.h--))
  }
}
function Bu(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var s = t[i]
    if (!s.fa && s.listener == e && s.capture == !!n && s.la == r) return i
  }
  return -1
}
var uh = 'closure_lm_' + ((1e6 * Math.random()) | 0),
  xl = {}
function Ug(t, e, n, r, i) {
  if (r && r.once) return Bg(t, e, n, r, i)
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) Ug(t, e[s], n, r, i)
    return null
  }
  return (
    (n = dh(n)),
    t && t[_s] ? t.O(e, n, vs(r) ? !!r.capture : !!r, i) : zg(t, e, n, !1, r, i)
  )
}
function zg(t, e, n, r, i, s) {
  if (!e) throw Error('Invalid event type')
  var o = vs(i) ? !!i.capture : !!i,
    a = hh(t)
  if ((a || (t[uh] = a = new Ia(t)), (n = a.add(e, n, r, o, s)), n.proxy))
    return n
  if (
    ((r = YE()),
    (n.proxy = r),
    (r.src = t),
    (r.listener = n),
    t.addEventListener)
  )
    zE || (i = o),
      i === void 0 && (i = !1),
      t.addEventListener(e.toString(), r, i)
  else if (t.attachEvent) t.attachEvent(qg(e.toString()), r)
  else if (t.addListener && t.removeListener) t.addListener(r)
  else throw Error('addEventListener and attachEvent are unavailable.')
  return n
}
function YE() {
  function t(n) {
    return e.call(t.src, t.listener, n)
  }
  const e = XE
  return t
}
function Bg(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) Bg(t, e[s], n, r, i)
    return null
  }
  return (
    (n = dh(n)),
    t && t[_s] ? t.P(e, n, vs(r) ? !!r.capture : !!r, i) : zg(t, e, n, !0, r, i)
  )
}
function Hg(t, e, n, r, i) {
  if (Array.isArray(e)) for (var s = 0; s < e.length; s++) Hg(t, e[s], n, r, i)
  else
    (r = vs(r) ? !!r.capture : !!r),
      (n = dh(n)),
      t && t[_s]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((s = t.g[e]),
            (n = Bu(s, n, r, i)),
            -1 < n &&
              (Sa(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = hh(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = Bu(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && ch(n))
}
function ch(t) {
  if (typeof t != 'number' && t && !t.fa) {
    var e = t.src
    if (e && e[_s]) zu(e.i, t)
    else {
      var n = t.type,
        r = t.proxy
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(qg(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = hh(e))
          ? (zu(n, t), n.h == 0 && ((n.src = null), (e[uh] = null)))
          : Sa(t)
    }
  }
}
function qg(t) {
  return t in xl ? xl[t] : (xl[t] = 'on' + t)
}
function XE(t, e) {
  if (t.fa) t = !0
  else {
    e = new ns(e, this)
    var n = t.listener,
      r = t.la || t.src
    t.ia && ch(t), (t = n.call(r, e))
  }
  return t
}
function hh(t) {
  return (t = t[uh]), t instanceof Ia ? t : null
}
var Nl = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
function dh(t) {
  return typeof t == 'function'
    ? t
    : (t[Nl] ||
        (t[Nl] = function (e) {
          return t.handleEvent(e)
        }),
      t[Nl])
}
function Te() {
  Sn.call(this), (this.i = new Ia(this)), (this.S = this), (this.J = null)
}
Se(Te, Sn)
Te.prototype[_s] = !0
Te.prototype.removeEventListener = function (t, e, n, r) {
  Hg(this, t, e, n, r)
}
function Pe(t, e) {
  var n,
    r = t.J
  if (r) for (n = []; r; r = r.J) n.push(r)
  if (((t = t.S), (r = e.type || e), typeof e == 'string')) e = new $e(e, t)
  else if (e instanceof $e) e.target = e.target || t
  else {
    var i = e
    ;(e = new $e(r, t)), jg(e, i)
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (e.g = n[s])
      i = Ys(o, r, !0, e) && i
    }
  if (
    ((o = e.g = t), (i = Ys(o, r, !0, e) && i), (i = Ys(o, r, !1, e) && i), n)
  )
    for (s = 0; s < n.length; s++) (o = e.g = n[s]), (i = Ys(o, r, !1, e) && i)
}
Te.prototype.N = function () {
  if ((Te.$.N.call(this), this.i)) {
    var t = this.i,
      e
    for (e in t.g) {
      for (var n = t.g[e], r = 0; r < n.length; r++) Sa(n[r])
      delete t.g[e], t.h--
    }
  }
  this.J = null
}
Te.prototype.O = function (t, e, n, r) {
  return this.i.add(String(t), e, !1, n, r)
}
Te.prototype.P = function (t, e, n, r) {
  return this.i.add(String(t), e, !0, n, r)
}
function Ys(t, e, n, r) {
  if (((e = t.i.g[String(e)]), !e)) return !0
  e = e.concat()
  for (var i = !0, s = 0; s < e.length; ++s) {
    var o = e[s]
    if (o && !o.fa && o.capture == n) {
      var a = o.listener,
        l = o.la || o.src
      o.ia && zu(t.i, o), (i = a.call(l, r) !== !1 && i)
    }
  }
  return i && !r.defaultPrevented
}
var fh = O.JSON.stringify
class JE {
  constructor(e, n) {
    ;(this.i = e), (this.j = n), (this.h = 0), (this.g = null)
  }
  get() {
    let e
    return (
      0 < this.h
        ? (this.h--, (e = this.g), (this.g = e.next), (e.next = null))
        : (e = this.i()),
      e
    )
  }
}
function ZE() {
  var t = ph
  let e = null
  return (
    t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)),
    e
  )
}
class ew {
  constructor() {
    this.h = this.g = null
  }
  add(e, n) {
    const r = Qg.get()
    r.set(e, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r)
  }
}
var Qg = new JE(
  () => new tw(),
  (t) => t.reset()
)
class tw {
  constructor() {
    this.next = this.g = this.h = null
  }
  set(e, n) {
    ;(this.h = e), (this.g = n), (this.next = null)
  }
  reset() {
    this.next = this.g = this.h = null
  }
}
function nw(t) {
  var e = 1
  t = t.split(':')
  const n = []
  for (; 0 < e && t.length; ) n.push(t.shift()), e--
  return t.length && n.push(t.join(':')), n
}
function rw(t) {
  O.setTimeout(() => {
    throw t
  }, 0)
}
let rs,
  is = !1,
  ph = new ew(),
  Kg = () => {
    const t = O.Promise.resolve(void 0)
    rs = () => {
      t.then(iw)
    }
  }
var iw = () => {
  for (var t; (t = ZE()); ) {
    try {
      t.h.call(t.g)
    } catch (n) {
      rw(n)
    }
    var e = Qg
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t))
  }
  is = !1
}
function Aa(t, e) {
  Te.call(this),
    (this.h = t || 1),
    (this.g = e || O),
    (this.j = Fe(this.qb, this)),
    (this.l = Date.now())
}
Se(Aa, Te)
S = Aa.prototype
S.ga = !1
S.T = null
S.qb = function () {
  if (this.ga) {
    var t = Date.now() - this.l
    0 < t && t < 0.8 * this.h
      ? (this.T = this.g.setTimeout(this.j, this.h - t))
      : (this.T && (this.g.clearTimeout(this.T), (this.T = null)),
        Pe(this, 'tick'),
        this.ga && (mh(this), this.start()))
  }
}
S.start = function () {
  ;(this.ga = !0),
    this.T ||
      ((this.T = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()))
}
function mh(t) {
  ;(t.ga = !1), t.T && (t.g.clearTimeout(t.T), (t.T = null))
}
S.N = function () {
  Aa.$.N.call(this), mh(this), delete this.g
}
function gh(t, e, n) {
  if (typeof t == 'function') n && (t = Fe(t, n))
  else if (t && typeof t.handleEvent == 'function') t = Fe(t.handleEvent, t)
  else throw Error('Invalid listener argument')
  return 2147483647 < Number(e) ? -1 : O.setTimeout(t, e || 0)
}
function Wg(t) {
  t.g = gh(() => {
    ;(t.g = null), t.i && ((t.i = !1), Wg(t))
  }, t.j)
  const e = t.h
  ;(t.h = null), t.m.apply(null, e)
}
class sw extends Sn {
  constructor(e, n) {
    super(),
      (this.m = e),
      (this.j = n),
      (this.h = null),
      (this.i = !1),
      (this.g = null)
  }
  l(e) {
    ;(this.h = arguments), this.g ? (this.i = !0) : Wg(this)
  }
  N() {
    super.N(),
      this.g &&
        (O.clearTimeout(this.g),
        (this.g = null),
        (this.i = !1),
        (this.h = null))
  }
}
function ss(t) {
  Sn.call(this), (this.h = t), (this.g = {})
}
Se(ss, Sn)
var vf = []
function Gg(t, e, n, r) {
  Array.isArray(n) || (n && (vf[0] = n.toString()), (n = vf))
  for (var i = 0; i < n.length; i++) {
    var s = Ug(e, n[i], r || t.handleEvent, !1, t.h || t)
    if (!s) break
    t.g[s.key] = s
  }
}
function bg(t) {
  lh(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && ch(e)
    },
    t
  ),
    (t.g = {})
}
ss.prototype.N = function () {
  ss.$.N.call(this), bg(this)
}
ss.prototype.handleEvent = function () {
  throw Error('EventHandler.handleEvent not implemented')
}
function Ca() {
  this.g = !0
}
Ca.prototype.Ea = function () {
  this.g = !1
}
function ow(t, e, n, r, i, s) {
  t.info(function () {
    if (t.g)
      if (s)
        for (var o = '', a = s.split('&'), l = 0; l < a.length; l++) {
          var u = a[l].split('=')
          if (1 < u.length) {
            var c = u[0]
            u = u[1]
            var h = c.split('_')
            o =
              2 <= h.length && h[1] == 'type'
                ? o + (c + '=' + u + '&')
                : o + (c + '=redacted&')
          }
        }
      else o = null
    else o = s
    return (
      'XMLHTTP REQ (' +
      r +
      ') [attempt ' +
      i +
      ']: ' +
      e +
      `
` +
      n +
      `
` +
      o
    )
  })
}
function aw(t, e, n, r, i, s, o) {
  t.info(function () {
    return (
      'XMLHTTP RESP (' +
      r +
      ') [ attempt ' +
      i +
      ']: ' +
      e +
      `
` +
      n +
      `
` +
      s +
      ' ' +
      o
    )
  })
}
function yr(t, e, n, r) {
  t.info(function () {
    return 'XMLHTTP TEXT (' + e + '): ' + uw(t, n) + (r ? ' ' + r : '')
  })
}
function lw(t, e) {
  t.info(function () {
    return 'TIMEOUT: ' + e
  })
}
Ca.prototype.info = function () {}
function uw(t, e) {
  if (!t.g) return e
  if (!e) return null
  try {
    var n = JSON.parse(e)
    if (n) {
      for (t = 0; t < n.length; t++)
        if (Array.isArray(n[t])) {
          var r = n[t]
          if (!(2 > r.length)) {
            var i = r[1]
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0]
              if (s != 'noop' && s != 'stop' && s != 'close')
                for (var o = 1; o < i.length; o++) i[o] = ''
            }
          }
        }
    }
    return fh(n)
  } catch {
    return e
  }
}
var Zn = {},
  _f = null
function Ra() {
  return (_f = _f || new Te())
}
Zn.Ta = 'serverreachability'
function Yg(t) {
  $e.call(this, Zn.Ta, t)
}
Se(Yg, $e)
function os(t) {
  const e = Ra()
  Pe(e, new Yg(e))
}
Zn.STAT_EVENT = 'statevent'
function Xg(t, e) {
  $e.call(this, Zn.STAT_EVENT, t), (this.stat = e)
}
Se(Xg, $e)
function He(t) {
  const e = Ra()
  Pe(e, new Xg(e, t))
}
Zn.Ua = 'timingevent'
function Jg(t, e) {
  $e.call(this, Zn.Ua, t), (this.size = e)
}
Se(Jg, $e)
function Es(t, e) {
  if (typeof t != 'function')
    throw Error('Fn must not be null and must be a function')
  return O.setTimeout(function () {
    t()
  }, e)
}
var Pa = {
    NO_ERROR: 0,
    rb: 1,
    Eb: 2,
    Db: 3,
    yb: 4,
    Cb: 5,
    Fb: 6,
    Qa: 7,
    TIMEOUT: 8,
    Ib: 9,
  },
  Zg = {
    wb: 'complete',
    Sb: 'success',
    Ra: 'error',
    Qa: 'abort',
    Kb: 'ready',
    Lb: 'readystatechange',
    TIMEOUT: 'timeout',
    Gb: 'incrementaldata',
    Jb: 'progress',
    zb: 'downloadprogress',
    $b: 'uploadprogress',
  }
function yh() {}
yh.prototype.h = null
function Ef(t) {
  return t.h || (t.h = t.i())
}
function ey() {}
var ws = { OPEN: 'a', vb: 'b', Ra: 'c', Hb: 'd' }
function vh() {
  $e.call(this, 'd')
}
Se(vh, $e)
function _h() {
  $e.call(this, 'c')
}
Se(_h, $e)
var Hu
function ka() {}
Se(ka, yh)
ka.prototype.g = function () {
  return new XMLHttpRequest()
}
ka.prototype.i = function () {
  return {}
}
Hu = new ka()
function Ts(t, e, n, r) {
  ;(this.l = t),
    (this.j = e),
    (this.m = n),
    (this.W = r || 1),
    (this.U = new ss(this)),
    (this.P = cw),
    (t = $u ? 125 : void 0),
    (this.V = new Aa(t)),
    (this.I = null),
    (this.i = !1),
    (this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null),
    (this.F = []),
    (this.g = null),
    (this.o = 0),
    (this.s = this.v = null),
    (this.ca = -1),
    (this.J = !1),
    (this.O = 0),
    (this.M = null),
    (this.ba = this.K = this.aa = this.S = !1),
    (this.h = new ty())
}
function ty() {
  ;(this.i = null), (this.g = ''), (this.h = !1)
}
var cw = 45e3,
  ny = {},
  qu = {}
S = Ts.prototype
S.setTimeout = function (t) {
  this.P = t
}
function Qu(t, e, n) {
  ;(t.L = 1), (t.A = Na(Kt(e))), (t.u = n), (t.S = !0), ry(t, null)
}
function ry(t, e) {
  ;(t.G = Date.now()), Ss(t), (t.B = Kt(t.A))
  var n = t.B,
    r = t.W
  Array.isArray(r) || (r = [String(r)]),
    hy(n.i, 't', r),
    (t.o = 0),
    (n = t.l.J),
    (t.h = new ty()),
    (t.g = Dy(t.l, n ? e : null, !t.u)),
    0 < t.O && (t.M = new sw(Fe(t.Pa, t, t.g), t.O)),
    Gg(t.U, t.g, 'readystatechange', t.nb),
    (e = t.I ? $g(t.I) : {}),
    t.u
      ? (t.v || (t.v = 'POST'),
        (e['Content-Type'] = 'application/x-www-form-urlencoded'),
        t.g.ha(t.B, t.v, t.u, e))
      : ((t.v = 'GET'), t.g.ha(t.B, t.v, null, e)),
    os(),
    ow(t.j, t.v, t.B, t.m, t.W, t.u)
}
S.nb = function (t) {
  t = t.target
  const e = this.M
  e && Pt(t) == 3 ? e.l() : this.Pa(t)
}
S.Pa = function (t) {
  try {
    if (t == this.g)
      e: {
        const c = Pt(this.g)
        var e = this.g.Ia()
        const h = this.g.da()
        if (
          !(3 > c) &&
          (c != 3 || $u || (this.g && (this.h.h || this.g.ja() || If(this.g))))
        ) {
          this.J || c != 4 || e == 7 || (e == 8 || 0 >= h ? os(3) : os(2)),
            xa(this)
          var n = this.g.da()
          this.ca = n
          t: if (iy(this)) {
            var r = If(this.g)
            t = ''
            var i = r.length,
              s = Pt(this.g) == 4
            if (!this.h.i) {
              if (typeof TextDecoder > 'u') {
                Ln(this), xi(this)
                var o = ''
                break t
              }
              this.h.i = new O.TextDecoder()
            }
            for (e = 0; e < i; e++)
              (this.h.h = !0),
                (t += this.h.i.decode(r[e], { stream: s && e == i - 1 }))
            ;(r.length = 0), (this.h.g += t), (this.o = 0), (o = this.h.g)
          } else o = this.g.ja()
          if (
            ((this.i = n == 200),
            aw(this.j, this.v, this.B, this.m, this.W, c, n),
            this.i)
          ) {
            if (this.aa && !this.K) {
              t: {
                if (this.g) {
                  var a,
                    l = this.g
                  if (
                    (a = l.g
                      ? l.g.getResponseHeader('X-HTTP-Initial-Response')
                      : null) &&
                    !ts(a)
                  ) {
                    var u = a
                    break t
                  }
                }
                u = null
              }
              if ((n = u))
                yr(
                  this.j,
                  this.m,
                  n,
                  'Initial handshake response via X-HTTP-Initial-Response'
                ),
                  (this.K = !0),
                  Ku(this, n)
              else {
                ;(this.i = !1), (this.s = 3), He(12), Ln(this), xi(this)
                break e
              }
            }
            this.S
              ? (sy(this, c, o),
                $u &&
                  this.i &&
                  c == 3 &&
                  (Gg(this.U, this.V, 'tick', this.mb), this.V.start()))
              : (yr(this.j, this.m, o, null), Ku(this, o)),
              c == 4 && Ln(this),
              this.i &&
                !this.J &&
                (c == 4 ? Py(this.l, this) : ((this.i = !1), Ss(this)))
          } else
            Nw(this.g),
              n == 400 && 0 < o.indexOf('Unknown SID')
                ? ((this.s = 3), He(12))
                : ((this.s = 0), He(13)),
              Ln(this),
              xi(this)
        }
      }
  } catch {
  } finally {
  }
}
function iy(t) {
  return t.g ? t.v == 'GET' && t.L != 2 && t.l.Ha : !1
}
function sy(t, e, n) {
  let r = !0,
    i
  for (; !t.J && t.o < n.length; )
    if (((i = hw(t, n)), i == qu)) {
      e == 4 && ((t.s = 4), He(14), (r = !1)),
        yr(t.j, t.m, null, '[Incomplete Response]')
      break
    } else if (i == ny) {
      ;(t.s = 4), He(15), yr(t.j, t.m, n, '[Invalid Chunk]'), (r = !1)
      break
    } else yr(t.j, t.m, i, null), Ku(t, i)
  iy(t) && t.o != 0 && ((t.h.g = t.h.g.slice(t.o)), (t.o = 0)),
    e != 4 || n.length != 0 || t.h.h || ((t.s = 1), He(16), (r = !1)),
    (t.i = t.i && r),
    r
      ? 0 < n.length &&
        !t.ba &&
        ((t.ba = !0),
        (e = t.l),
        e.g == t &&
          e.ca &&
          !e.M &&
          (e.l.info(
            'Great, no buffering proxy detected. Bytes received: ' + n.length
          ),
          Ah(e),
          (e.M = !0),
          He(11)))
      : (yr(t.j, t.m, n, '[Invalid Chunked Response]'), Ln(t), xi(t))
}
S.mb = function () {
  if (this.g) {
    var t = Pt(this.g),
      e = this.g.ja()
    this.o < e.length &&
      (xa(this), sy(this, t, e), this.i && t != 4 && Ss(this))
  }
}
function hw(t, e) {
  var n = t.o,
    r = e.indexOf(
      `
`,
      n
    )
  return r == -1
    ? qu
    : ((n = Number(e.substring(n, r))),
      isNaN(n)
        ? ny
        : ((r += 1),
          r + n > e.length ? qu : ((e = e.slice(r, r + n)), (t.o = r + n), e)))
}
S.cancel = function () {
  ;(this.J = !0), Ln(this)
}
function Ss(t) {
  ;(t.Y = Date.now() + t.P), oy(t, t.P)
}
function oy(t, e) {
  if (t.C != null) throw Error('WatchDog timer not null')
  t.C = Es(Fe(t.lb, t), e)
}
function xa(t) {
  t.C && (O.clearTimeout(t.C), (t.C = null))
}
S.lb = function () {
  this.C = null
  const t = Date.now()
  0 <= t - this.Y
    ? (lw(this.j, this.B),
      this.L != 2 && (os(), He(17)),
      Ln(this),
      (this.s = 2),
      xi(this))
    : oy(this, this.Y - t)
}
function xi(t) {
  t.l.H == 0 || t.J || Py(t.l, t)
}
function Ln(t) {
  xa(t)
  var e = t.M
  e && typeof e.sa == 'function' && e.sa(),
    (t.M = null),
    mh(t.V),
    bg(t.U),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.sa())
}
function Ku(t, e) {
  try {
    var n = t.l
    if (n.H != 0 && (n.g == t || Wu(n.i, t))) {
      if (!t.K && Wu(n.i, t) && n.H == 3) {
        try {
          var r = n.Ja.g.parse(e)
        } catch {
          r = null
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r
          if (i[0] == 0) {
            e: if (!n.u) {
              if (n.g)
                if (n.g.G + 3e3 < t.G) Yo(n), Oa(n)
                else break e
              Ih(n), He(18)
            }
          } else
            (n.Fa = i[1]),
              0 < n.Fa - n.V &&
                37500 > i[2] &&
                n.G &&
                n.A == 0 &&
                !n.v &&
                (n.v = Es(Fe(n.ib, n), 6e3))
          if (1 >= py(n.i) && n.oa) {
            try {
              n.oa()
            } catch {}
            n.oa = void 0
          }
        } else On(n, 11)
      } else if (((t.K || n.g == t) && Yo(n), !ts(e)))
        for (i = n.Ja.g.parse(e), e = 0; e < i.length; e++) {
          let u = i[e]
          if (((n.V = u[0]), (u = u[1]), n.H == 2))
            if (u[0] == 'c') {
              ;(n.K = u[1]), (n.pa = u[2])
              const c = u[3]
              c != null && ((n.ra = c), n.l.info('VER=' + n.ra))
              const h = u[4]
              h != null && ((n.Ga = h), n.l.info('SVER=' + n.Ga))
              const f = u[5]
              f != null &&
                typeof f == 'number' &&
                0 < f &&
                ((r = 1.5 * f),
                (n.L = r),
                n.l.info('backChannelRequestTimeoutMs_=' + r)),
                (r = n)
              const g = t.g
              if (g) {
                const _ = g.g
                  ? g.g.getResponseHeader('X-Client-Wire-Protocol')
                  : null
                if (_) {
                  var s = r.i
                  s.g ||
                    (_.indexOf('spdy') == -1 &&
                      _.indexOf('quic') == -1 &&
                      _.indexOf('h2') == -1) ||
                    ((s.j = s.l),
                    (s.g = new Set()),
                    s.h && (Eh(s, s.h), (s.h = null)))
                }
                if (r.F) {
                  const E = g.g
                    ? g.g.getResponseHeader('X-HTTP-Session-Id')
                    : null
                  E && ((r.Da = E), J(r.I, r.F, E))
                }
              }
              ;(n.H = 3),
                n.h && n.h.Ba(),
                n.ca &&
                  ((n.S = Date.now() - t.G),
                  n.l.info('Handshake RTT: ' + n.S + 'ms')),
                (r = n)
              var o = t
              if (((r.wa = Ny(r, r.J ? r.pa : null, r.Y)), o.K)) {
                my(r.i, o)
                var a = o,
                  l = r.L
                l && a.setTimeout(l), a.C && (xa(a), Ss(a)), (r.g = o)
              } else Cy(r)
              0 < n.j.length && Ma(n)
            } else (u[0] != 'stop' && u[0] != 'close') || On(n, 7)
          else
            n.H == 3 &&
              (u[0] == 'stop' || u[0] == 'close'
                ? u[0] == 'stop'
                  ? On(n, 7)
                  : Sh(n)
                : u[0] != 'noop' && n.h && n.h.Aa(u),
              (n.A = 0))
        }
    }
    os(4)
  } catch {}
}
function dw(t) {
  if (t.Z && typeof t.Z == 'function') return t.Z()
  if (
    (typeof Map < 'u' && t instanceof Map) ||
    (typeof Set < 'u' && t instanceof Set)
  )
    return Array.from(t.values())
  if (typeof t == 'string') return t.split('')
  if (wa(t)) {
    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r])
    return e
  }
  ;(e = []), (n = 0)
  for (r in t) e[n++] = t[r]
  return e
}
function fw(t) {
  if (t.ta && typeof t.ta == 'function') return t.ta()
  if (!t.Z || typeof t.Z != 'function') {
    if (typeof Map < 'u' && t instanceof Map) return Array.from(t.keys())
    if (!(typeof Set < 'u' && t instanceof Set)) {
      if (wa(t) || typeof t == 'string') {
        var e = []
        t = t.length
        for (var n = 0; n < t; n++) e.push(n)
        return e
      }
      ;(e = []), (n = 0)
      for (const r in t) e[n++] = r
      return e
    }
  }
}
function ay(t, e) {
  if (t.forEach && typeof t.forEach == 'function') t.forEach(e, void 0)
  else if (wa(t) || typeof t == 'string')
    Array.prototype.forEach.call(t, e, void 0)
  else
    for (var n = fw(t), r = dw(t), i = r.length, s = 0; s < i; s++)
      e.call(void 0, r[s], n && n[s], t)
}
var ly = RegExp(
  '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
)
function pw(t, e) {
  if (t) {
    t = t.split('&')
    for (var n = 0; n < t.length; n++) {
      var r = t[n].indexOf('='),
        i = null
      if (0 <= r) {
        var s = t[n].substring(0, r)
        i = t[n].substring(r + 1)
      } else s = t[n]
      e(s, i ? decodeURIComponent(i.replace(/\+/g, ' ')) : '')
    }
  }
}
function Un(t) {
  if (
    ((this.g = this.s = this.j = ''),
    (this.m = null),
    (this.o = this.l = ''),
    (this.h = !1),
    t instanceof Un)
  ) {
    ;(this.h = t.h),
      Go(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      bo(this, t.m),
      (this.l = t.l)
    var e = t.i,
      n = new as()
    ;(n.i = e.i),
      e.g && ((n.g = new Map(e.g)), (n.h = e.h)),
      wf(this, n),
      (this.o = t.o)
  } else
    t && (e = String(t).match(ly))
      ? ((this.h = !1),
        Go(this, e[1] || '', !0),
        (this.s = yi(e[2] || '')),
        (this.g = yi(e[3] || '', !0)),
        bo(this, e[4]),
        (this.l = yi(e[5] || '', !0)),
        wf(this, e[6] || '', !0),
        (this.o = yi(e[7] || '')))
      : ((this.h = !1), (this.i = new as(null, this.h)))
}
Un.prototype.toString = function () {
  var t = [],
    e = this.j
  e && t.push(vi(e, Tf, !0), ':')
  var n = this.g
  return (
    (n || e == 'file') &&
      (t.push('//'),
      (e = this.s) && t.push(vi(e, Tf, !0), '@'),
      t.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
      ),
      (n = this.m),
      n != null && t.push(':', String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != '/' && t.push('/'),
      t.push(vi(n, n.charAt(0) == '/' ? yw : gw, !0))),
    (n = this.i.toString()) && t.push('?', n),
    (n = this.o) && t.push('#', vi(n, _w)),
    t.join('')
  )
}
function Kt(t) {
  return new Un(t)
}
function Go(t, e, n) {
  ;(t.j = n ? yi(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ''))
}
function bo(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e))
      throw Error('Bad port number ' + e)
    t.m = e
  } else t.m = null
}
function wf(t, e, n) {
  e instanceof as
    ? ((t.i = e), Ew(t.i, t.h))
    : (n || (e = vi(e, vw)), (t.i = new as(e, t.h)))
}
function J(t, e, n) {
  t.i.set(e, n)
}
function Na(t) {
  return (
    J(
      t,
      'zx',
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
          36
        )
    ),
    t
  )
}
function yi(t, e) {
  return t
    ? e
      ? decodeURI(t.replace(/%25/g, '%2525'))
      : decodeURIComponent(t)
    : ''
}
function vi(t, e, n) {
  return typeof t == 'string'
    ? ((t = encodeURI(t).replace(e, mw)),
      n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
      t)
    : null
}
function mw(t) {
  return (
    (t = t.charCodeAt(0)),
    '%' + ((t >> 4) & 15).toString(16) + (t & 15).toString(16)
  )
}
var Tf = /[#\/\?@]/g,
  gw = /[#\?:]/g,
  yw = /[#\?]/g,
  vw = /[#\?@]/g,
  _w = /#/g
function as(t, e) {
  ;(this.h = this.g = null), (this.i = t || null), (this.j = !!e)
}
function In(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      pw(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n)
      }))
}
S = as.prototype
S.add = function (t, e) {
  In(this), (this.i = null), (t = Gr(this, t))
  var n = this.g.get(t)
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this
}
function uy(t, e) {
  In(t),
    (e = Gr(t, e)),
    t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e))
}
function cy(t, e) {
  return In(t), (e = Gr(t, e)), t.g.has(e)
}
S.forEach = function (t, e) {
  In(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        t.call(e, i, r, this)
      }, this)
    }, this)
}
S.ta = function () {
  In(this)
  const t = Array.from(this.g.values()),
    e = Array.from(this.g.keys()),
    n = []
  for (let r = 0; r < e.length; r++) {
    const i = t[r]
    for (let s = 0; s < i.length; s++) n.push(e[r])
  }
  return n
}
S.Z = function (t) {
  In(this)
  let e = []
  if (typeof t == 'string')
    cy(this, t) && (e = e.concat(this.g.get(Gr(this, t))))
  else {
    t = Array.from(this.g.values())
    for (let n = 0; n < t.length; n++) e = e.concat(t[n])
  }
  return e
}
S.set = function (t, e) {
  return (
    In(this),
    (this.i = null),
    (t = Gr(this, t)),
    cy(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  )
}
S.get = function (t, e) {
  return t ? ((t = this.Z(t)), 0 < t.length ? String(t[0]) : e) : e
}
function hy(t, e, n) {
  uy(t, e),
    0 < n.length && ((t.i = null), t.g.set(Gr(t, e), oh(n)), (t.h += n.length))
}
S.toString = function () {
  if (this.i) return this.i
  if (!this.g) return ''
  const t = [],
    e = Array.from(this.g.keys())
  for (var n = 0; n < e.length; n++) {
    var r = e[n]
    const s = encodeURIComponent(String(r)),
      o = this.Z(r)
    for (r = 0; r < o.length; r++) {
      var i = s
      o[r] !== '' && (i += '=' + encodeURIComponent(String(o[r]))), t.push(i)
    }
  }
  return (this.i = t.join('&'))
}
function Gr(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e
}
function Ew(t, e) {
  e &&
    !t.j &&
    (In(t),
    (t.i = null),
    t.g.forEach(function (n, r) {
      var i = r.toLowerCase()
      r != i && (uy(this, r), hy(this, i, n))
    }, t)),
    (t.j = e)
}
var ww = class {
  constructor(t, e) {
    ;(this.g = t), (this.map = e)
  }
}
function dy(t) {
  ;(this.l = t || Tw),
    O.PerformanceNavigationTiming
      ? ((t = O.performance.getEntriesByType('navigation')),
        (t =
          0 < t.length &&
          (t[0].nextHopProtocol == 'hq' || t[0].nextHopProtocol == 'h2')))
      : (t = !!(O.g && O.g.Ka && O.g.Ka() && O.g.Ka().dc)),
    (this.j = t ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = [])
}
var Tw = 10
function fy(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1
}
function py(t) {
  return t.h ? 1 : t.g ? t.g.size : 0
}
function Wu(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1
}
function Eh(t, e) {
  t.g ? t.g.add(e) : (t.h = e)
}
function my(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e)
}
dy.prototype.cancel = function () {
  if (((this.i = gy(this)), this.h)) this.h.cancel(), (this.h = null)
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel()
    this.g.clear()
  }
}
function gy(t) {
  if (t.h != null) return t.i.concat(t.h.F)
  if (t.g != null && t.g.size !== 0) {
    let e = t.i
    for (const n of t.g.values()) e = e.concat(n.F)
    return e
  }
  return oh(t.i)
}
var Sw = class {
  stringify(t) {
    return O.JSON.stringify(t, void 0)
  }
  parse(t) {
    return O.JSON.parse(t, void 0)
  }
}
function Iw() {
  this.g = new Sw()
}
function Aw(t, e, n) {
  const r = n || ''
  try {
    ay(t, function (i, s) {
      let o = i
      vs(i) && (o = fh(i)), e.push(r + s + '=' + encodeURIComponent(o))
    })
  } catch (i) {
    throw (e.push(r + 'type=' + encodeURIComponent('_badmap')), i)
  }
}
function Cw(t, e) {
  const n = new Ca()
  if (O.Image) {
    const r = new Image()
    ;(r.onload = bs(Xs, n, r, 'TestLoadImage: loaded', !0, e)),
      (r.onerror = bs(Xs, n, r, 'TestLoadImage: error', !1, e)),
      (r.onabort = bs(Xs, n, r, 'TestLoadImage: abort', !1, e)),
      (r.ontimeout = bs(Xs, n, r, 'TestLoadImage: timeout', !1, e)),
      O.setTimeout(function () {
        r.ontimeout && r.ontimeout()
      }, 1e4),
      (r.src = t)
  } else e(!1)
}
function Xs(t, e, n, r, i) {
  try {
    ;(e.onload = null),
      (e.onerror = null),
      (e.onabort = null),
      (e.ontimeout = null),
      i(r)
  } catch {}
}
function Da(t) {
  ;(this.l = t.ec || null), (this.j = t.ob || !1)
}
Se(Da, yh)
Da.prototype.g = function () {
  return new Va(this.l, this.j)
}
Da.prototype.i = (function (t) {
  return function () {
    return t
  }
})({})
function Va(t, e) {
  Te.call(this),
    (this.F = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = wh),
    (this.status = 0),
    (this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        ''),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = 'GET'),
    (this.B = ''),
    (this.g = !1),
    (this.A = this.j = this.l = null)
}
Se(Va, Te)
var wh = 0
S = Va.prototype
S.open = function (t, e) {
  if (this.readyState != wh)
    throw (this.abort(), Error('Error reopening a connection'))
  ;(this.C = t), (this.B = e), (this.readyState = 1), ls(this)
}
S.send = function (t) {
  if (this.readyState != 1)
    throw (this.abort(), Error('need to call open() first. '))
  this.g = !0
  const e = {
    headers: this.v,
    method: this.C,
    credentials: this.m,
    cache: void 0,
  }
  t && (e.body = t),
    (this.F || O)
      .fetch(new Request(this.B, e))
      .then(this.$a.bind(this), this.ka.bind(this))
}
S.abort = function () {
  ;(this.response = this.responseText = ''),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel('Request was aborted.').catch(() => {}),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), Is(this)),
    (this.readyState = wh)
}
S.$a = function (t) {
  if (
    this.g &&
    ((this.l = t),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = t.headers),
      (this.readyState = 2),
      ls(this)),
    this.g && ((this.readyState = 3), ls(this), this.g))
  )
    if (this.responseType === 'arraybuffer')
      t.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this))
    else if (typeof O.ReadableStream < 'u' && 'body' in t) {
      if (((this.j = t.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.'
          )
        this.response = []
      } else
        (this.response = this.responseText = ''), (this.A = new TextDecoder())
      yy(this)
    } else t.text().then(this.Za.bind(this), this.ka.bind(this))
}
function yy(t) {
  t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))
}
S.Xa = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value)
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0)
      ;(e = this.A.decode(e, { stream: !t.done })) &&
        (this.response = this.responseText += e)
    }
    t.done ? Is(this) : ls(this), this.readyState == 3 && yy(this)
  }
}
S.Za = function (t) {
  this.g && ((this.response = this.responseText = t), Is(this))
}
S.Ya = function (t) {
  this.g && ((this.response = t), Is(this))
}
S.ka = function () {
  this.g && Is(this)
}
function Is(t) {
  ;(t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), ls(t)
}
S.setRequestHeader = function (t, e) {
  this.v.append(t, e)
}
S.getResponseHeader = function (t) {
  return (this.h && this.h.get(t.toLowerCase())) || ''
}
S.getAllResponseHeaders = function () {
  if (!this.h) return ''
  const t = [],
    e = this.h.entries()
  for (var n = e.next(); !n.done; )
    (n = n.value), t.push(n[0] + ': ' + n[1]), (n = e.next())
  return t.join(`\r
`)
}
function ls(t) {
  t.onreadystatechange && t.onreadystatechange.call(t)
}
Object.defineProperty(Va.prototype, 'withCredentials', {
  get: function () {
    return this.m === 'include'
  },
  set: function (t) {
    this.m = t ? 'include' : 'same-origin'
  },
})
var Rw = O.JSON.parse
function ae(t) {
  Te.call(this),
    (this.headers = new Map()),
    (this.u = t || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.I = ''),
    (this.m = 0),
    (this.j = ''),
    (this.l = this.G = this.v = this.F = !1),
    (this.B = 0),
    (this.A = null),
    (this.K = vy),
    (this.L = this.M = !1)
}
Se(ae, Te)
var vy = '',
  Pw = /^https?$/i,
  kw = ['POST', 'PUT']
S = ae.prototype
S.Oa = function (t) {
  this.M = t
}
S.ha = function (t, e, n, r) {
  if (this.g)
    throw Error(
      '[goog.net.XhrIo] Object is active with another request=' +
        this.I +
        '; newUri=' +
        t
    )
  ;(e = e ? e.toUpperCase() : 'GET'),
    (this.I = t),
    (this.j = ''),
    (this.m = 0),
    (this.F = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : Hu.g()),
    (this.C = this.u ? Ef(this.u) : Ef(Hu)),
    (this.g.onreadystatechange = Fe(this.La, this))
  try {
    ;(this.G = !0), this.g.open(e, String(t), !0), (this.G = !1)
  } catch (s) {
    Sf(this, s)
    return
  }
  if (((t = n || ''), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype)
      for (var i in r) n.set(i, r[i])
    else if (typeof r.keys == 'function' && typeof r.get == 'function')
      for (const s of r.keys()) n.set(s, r.get(s))
    else throw Error('Unknown input type for opt_headers: ' + String(r))
  ;(r = Array.from(n.keys()).find((s) => s.toLowerCase() == 'content-type')),
    (i = O.FormData && t instanceof O.FormData),
    !(0 <= Lg(kw, e)) ||
      r ||
      i ||
      n.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
  for (const [s, o] of n) this.g.setRequestHeader(s, o)
  this.K && (this.g.responseType = this.K),
    'withCredentials' in this.g &&
      this.g.withCredentials !== this.M &&
      (this.g.withCredentials = this.M)
  try {
    wy(this),
      0 < this.B &&
        ((this.L = xw(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = Fe(this.ua, this)))
          : (this.A = gh(this.ua, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1)
  } catch (s) {
    Sf(this, s)
  }
}
function xw(t) {
  return Fr && typeof t.timeout == 'number' && t.ontimeout !== void 0
}
S.ua = function () {
  typeof sh < 'u' &&
    this.g &&
    ((this.j = 'Timed out after ' + this.B + 'ms, aborting'),
    (this.m = 8),
    Pe(this, 'timeout'),
    this.abort(8))
}
function Sf(t, e) {
  ;(t.h = !1),
    t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
    (t.j = e),
    (t.m = 5),
    _y(t),
    La(t)
}
function _y(t) {
  t.F || ((t.F = !0), Pe(t, 'complete'), Pe(t, 'error'))
}
S.abort = function (t) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = t || 7),
    Pe(this, 'complete'),
    Pe(this, 'abort'),
    La(this))
}
S.N = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    La(this, !0)),
    ae.$.N.call(this)
}
S.La = function () {
  this.s || (this.G || this.v || this.l ? Ey(this) : this.kb())
}
S.kb = function () {
  Ey(this)
}
function Ey(t) {
  if (t.h && typeof sh < 'u' && (!t.C[1] || Pt(t) != 4 || t.da() != 2)) {
    if (t.v && Pt(t) == 4) gh(t.La, 0, t)
    else if ((Pe(t, 'readystatechange'), Pt(t) == 4)) {
      t.h = !1
      try {
        const o = t.da()
        e: switch (o) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var e = !0
            break e
          default:
            e = !1
        }
        var n
        if (!(n = e)) {
          var r
          if ((r = o === 0)) {
            var i = String(t.I).match(ly)[1] || null
            !i &&
              O.self &&
              O.self.location &&
              (i = O.self.location.protocol.slice(0, -1)),
              (r = !Pw.test(i ? i.toLowerCase() : ''))
          }
          n = r
        }
        if (n) Pe(t, 'complete'), Pe(t, 'success')
        else {
          t.m = 6
          try {
            var s = 2 < Pt(t) ? t.g.statusText : ''
          } catch {
            s = ''
          }
          ;(t.j = s + ' [' + t.da() + ']'), _y(t)
        }
      } finally {
        La(t)
      }
    }
  }
}
function La(t, e) {
  if (t.g) {
    wy(t)
    const n = t.g,
      r = t.C[0] ? () => {} : null
    ;(t.g = null), (t.C = null), e || Pe(t, 'ready')
    try {
      n.onreadystatechange = r
    } catch {}
  }
}
function wy(t) {
  t.g && t.L && (t.g.ontimeout = null),
    t.A && (O.clearTimeout(t.A), (t.A = null))
}
S.isActive = function () {
  return !!this.g
}
function Pt(t) {
  return t.g ? t.g.readyState : 0
}
S.da = function () {
  try {
    return 2 < Pt(this) ? this.g.status : -1
  } catch {
    return -1
  }
}
S.ja = function () {
  try {
    return this.g ? this.g.responseText : ''
  } catch {
    return ''
  }
}
S.Wa = function (t) {
  if (this.g) {
    var e = this.g.responseText
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), Rw(e)
  }
}
function If(t) {
  try {
    if (!t.g) return null
    if ('response' in t.g) return t.g.response
    switch (t.K) {
      case vy:
      case 'text':
        return t.g.responseText
      case 'arraybuffer':
        if ('mozResponseArrayBuffer' in t.g) return t.g.mozResponseArrayBuffer
    }
    return null
  } catch {
    return null
  }
}
function Nw(t) {
  const e = {}
  t = ((t.g && 2 <= Pt(t) && t.g.getAllResponseHeaders()) || '').split(`\r
`)
  for (let r = 0; r < t.length; r++) {
    if (ts(t[r])) continue
    var n = nw(t[r])
    const i = n[0]
    if (((n = n[1]), typeof n != 'string')) continue
    n = n.trim()
    const s = e[i] || []
    ;(e[i] = s), s.push(n)
  }
  bE(e, function (r) {
    return r.join(', ')
  })
}
S.Ia = function () {
  return this.m
}
S.Sa = function () {
  return typeof this.j == 'string' ? this.j : String(this.j)
}
function Ty(t) {
  let e = ''
  return (
    lh(t, function (n, r) {
      ;(e += r),
        (e += ':'),
        (e += n),
        (e += `\r
`)
    }),
    e
  )
}
function Th(t, e, n) {
  e: {
    for (r in n) {
      var r = !1
      break e
    }
    r = !0
  }
  r ||
    ((n = Ty(n)),
    typeof t == 'string'
      ? n != null && encodeURIComponent(String(n))
      : J(t, e, n))
}
function ci(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e
}
function Sy(t) {
  ;(this.Ga = 0),
    (this.j = []),
    (this.l = new Ca()),
    (this.pa =
      this.wa =
      this.I =
      this.Y =
      this.g =
      this.Da =
      this.F =
      this.na =
      this.o =
      this.U =
      this.s =
        null),
    (this.fb = this.W = 0),
    (this.cb = ci('failFast', !1, t)),
    (this.G = this.v = this.u = this.m = this.h = null),
    (this.aa = !0),
    (this.Fa = this.V = -1),
    (this.ba = this.A = this.C = 0),
    (this.ab = ci('baseRetryDelayMs', 5e3, t)),
    (this.hb = ci('retryDelaySeedMs', 1e4, t)),
    (this.eb = ci('forwardChannelMaxRetries', 2, t)),
    (this.xa = ci('forwardChannelRequestTimeoutMs', 2e4, t)),
    (this.va = (t && t.xmlHttpFactory) || void 0),
    (this.Ha = (t && t.useFetchStreams) || !1),
    (this.L = void 0),
    (this.J = (t && t.supportsCrossDomainXhr) || !1),
    (this.K = ''),
    (this.i = new dy(t && t.concurrentRequestLimit)),
    (this.Ja = new Iw()),
    (this.P = (t && t.fastHandshake) || !1),
    (this.O = (t && t.encodeInitMessageHeaders) || !1),
    this.P && this.O && (this.O = !1),
    (this.bb = (t && t.bc) || !1),
    t && t.Ea && this.l.Ea(),
    t && t.forceLongPolling && (this.aa = !1),
    (this.ca = (!this.P && this.aa && t && t.detectBufferingProxy) || !1),
    (this.qa = void 0),
    t &&
      t.longPollingTimeout &&
      0 < t.longPollingTimeout &&
      (this.qa = t.longPollingTimeout),
    (this.oa = void 0),
    (this.S = 0),
    (this.M = !1),
    (this.ma = this.B = null)
}
S = Sy.prototype
S.ra = 8
S.H = 1
function Sh(t) {
  if ((Iy(t), t.H == 3)) {
    var e = t.W++,
      n = Kt(t.I)
    if (
      (J(n, 'SID', t.K),
      J(n, 'RID', e),
      J(n, 'TYPE', 'terminate'),
      As(t, n),
      (e = new Ts(t, t.l, e)),
      (e.L = 2),
      (e.A = Na(Kt(n))),
      (n = !1),
      O.navigator && O.navigator.sendBeacon)
    )
      try {
        n = O.navigator.sendBeacon(e.A.toString(), '')
      } catch {}
    !n && O.Image && ((new Image().src = e.A), (n = !0)),
      n || ((e.g = Dy(e.l, null)), e.g.ha(e.A)),
      (e.G = Date.now()),
      Ss(e)
  }
  xy(t)
}
function Oa(t) {
  t.g && (Ah(t), t.g.cancel(), (t.g = null))
}
function Iy(t) {
  Oa(t),
    t.u && (O.clearTimeout(t.u), (t.u = null)),
    Yo(t),
    t.i.cancel(),
    t.m && (typeof t.m == 'number' && O.clearTimeout(t.m), (t.m = null))
}
function Ma(t) {
  if (!fy(t.i) && !t.m) {
    t.m = !0
    var e = t.Na
    rs || Kg(), is || (rs(), (is = !0)), ph.add(e, t), (t.C = 0)
  }
}
function Dw(t, e) {
  return py(t.i) >= t.i.j - (t.m ? 1 : 0)
    ? !1
    : t.m
    ? ((t.j = e.F.concat(t.j)), !0)
    : t.H == 1 || t.H == 2 || t.C >= (t.cb ? 0 : t.eb)
    ? !1
    : ((t.m = Es(Fe(t.Na, t, e), ky(t, t.C))), t.C++, !0)
}
S.Na = function (t) {
  if (this.m)
    if (((this.m = null), this.H == 1)) {
      if (!t) {
        ;(this.W = Math.floor(1e5 * Math.random())), (t = this.W++)
        const i = new Ts(this, this.l, t)
        let s = this.s
        if (
          (this.U && (s ? ((s = $g(s)), jg(s, this.U)) : (s = this.U)),
          this.o !== null || this.O || ((i.I = s), (s = null)),
          this.P)
        )
          e: {
            for (var e = 0, n = 0; n < this.j.length; n++) {
              t: {
                var r = this.j[n]
                if (
                  '__data__' in r.map &&
                  ((r = r.map.__data__), typeof r == 'string')
                ) {
                  r = r.length
                  break t
                }
                r = void 0
              }
              if (r === void 0) break
              if (((e += r), 4096 < e)) {
                e = n
                break e
              }
              if (e === 4096 || n === this.j.length - 1) {
                e = n + 1
                break e
              }
            }
            e = 1e3
          }
        else e = 1e3
        ;(e = Ay(this, i, e)),
          (n = Kt(this.I)),
          J(n, 'RID', t),
          J(n, 'CVER', 22),
          this.F && J(n, 'X-HTTP-Session-Id', this.F),
          As(this, n),
          s &&
            (this.O
              ? (e = 'headers=' + encodeURIComponent(String(Ty(s))) + '&' + e)
              : this.o && Th(n, this.o, s)),
          Eh(this.i, i),
          this.bb && J(n, 'TYPE', 'init'),
          this.P
            ? (J(n, '$req', e),
              J(n, 'SID', 'null'),
              (i.aa = !0),
              Qu(i, n, null))
            : Qu(i, n, e),
          (this.H = 2)
      }
    } else
      this.H == 3 &&
        (t ? Af(this, t) : this.j.length == 0 || fy(this.i) || Af(this))
}
function Af(t, e) {
  var n
  e ? (n = e.m) : (n = t.W++)
  const r = Kt(t.I)
  J(r, 'SID', t.K),
    J(r, 'RID', n),
    J(r, 'AID', t.V),
    As(t, r),
    t.o && t.s && Th(r, t.o, t.s),
    (n = new Ts(t, t.l, n, t.C + 1)),
    t.o === null && (n.I = t.s),
    e && (t.j = e.F.concat(t.j)),
    (e = Ay(t, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * t.xa) + Math.round(0.5 * t.xa * Math.random())
    ),
    Eh(t.i, n),
    Qu(n, r, e)
}
function As(t, e) {
  t.na &&
    lh(t.na, function (n, r) {
      J(e, r, n)
    }),
    t.h &&
      ay({}, function (n, r) {
        J(e, r, n)
      })
}
function Ay(t, e, n) {
  n = Math.min(t.j.length, n)
  var r = t.h ? Fe(t.h.Va, t.h, t) : null
  e: {
    var i = t.j
    let s = -1
    for (;;) {
      const o = ['count=' + n]
      s == -1
        ? 0 < n
          ? ((s = i[0].g), o.push('ofs=' + s))
          : (s = 0)
        : o.push('ofs=' + s)
      let a = !0
      for (let l = 0; l < n; l++) {
        let u = i[l].g
        const c = i[l].map
        if (((u -= s), 0 > u)) (s = Math.max(0, i[l].g - 100)), (a = !1)
        else
          try {
            Aw(c, o, 'req' + u + '_')
          } catch {
            r && r(c)
          }
      }
      if (a) {
        r = o.join('&')
        break e
      }
    }
  }
  return (t = t.j.splice(0, n)), (e.F = t), r
}
function Cy(t) {
  if (!t.g && !t.u) {
    t.ba = 1
    var e = t.Ma
    rs || Kg(), is || (rs(), (is = !0)), ph.add(e, t), (t.A = 0)
  }
}
function Ih(t) {
  return t.g || t.u || 3 <= t.A
    ? !1
    : (t.ba++, (t.u = Es(Fe(t.Ma, t), ky(t, t.A))), t.A++, !0)
}
S.Ma = function () {
  if (
    ((this.u = null),
    Ry(this),
    this.ca && !(this.M || this.g == null || 0 >= this.S))
  ) {
    var t = 2 * this.S
    this.l.info('BP detection timer enabled: ' + t),
      (this.B = Es(Fe(this.jb, this), t))
  }
}
S.jb = function () {
  this.B &&
    ((this.B = null),
    this.l.info('BP detection timeout reached.'),
    this.l.info('Buffering proxy detected and switch to long-polling!'),
    (this.G = !1),
    (this.M = !0),
    He(10),
    Oa(this),
    Ry(this))
}
function Ah(t) {
  t.B != null && (O.clearTimeout(t.B), (t.B = null))
}
function Ry(t) {
  ;(t.g = new Ts(t, t.l, 'rpc', t.ba)),
    t.o === null && (t.g.I = t.s),
    (t.g.O = 0)
  var e = Kt(t.wa)
  J(e, 'RID', 'rpc'),
    J(e, 'SID', t.K),
    J(e, 'AID', t.V),
    J(e, 'CI', t.G ? '0' : '1'),
    !t.G && t.qa && J(e, 'TO', t.qa),
    J(e, 'TYPE', 'xmlhttp'),
    As(t, e),
    t.o && t.s && Th(e, t.o, t.s),
    t.L && t.g.setTimeout(t.L)
  var n = t.g
  ;(t = t.pa), (n.L = 1), (n.A = Na(Kt(e))), (n.u = null), (n.S = !0), ry(n, t)
}
S.ib = function () {
  this.v != null && ((this.v = null), Oa(this), Ih(this), He(19))
}
function Yo(t) {
  t.v != null && (O.clearTimeout(t.v), (t.v = null))
}
function Py(t, e) {
  var n = null
  if (t.g == e) {
    Yo(t), Ah(t), (t.g = null)
    var r = 2
  } else if (Wu(t.i, e)) (n = e.F), my(t.i, e), (r = 1)
  else return
  if (t.H != 0) {
    if (e.i)
      if (r == 1) {
        ;(n = e.u ? e.u.length : 0), (e = Date.now() - e.G)
        var i = t.C
        ;(r = Ra()), Pe(r, new Jg(r, n)), Ma(t)
      } else Cy(t)
    else if (
      ((i = e.s),
      i == 3 ||
        (i == 0 && 0 < e.ca) ||
        !((r == 1 && Dw(t, e)) || (r == 2 && Ih(t))))
    )
      switch ((n && 0 < n.length && ((e = t.i), (e.i = e.i.concat(n))), i)) {
        case 1:
          On(t, 5)
          break
        case 4:
          On(t, 10)
          break
        case 3:
          On(t, 6)
          break
        default:
          On(t, 2)
      }
  }
}
function ky(t, e) {
  let n = t.ab + Math.floor(Math.random() * t.hb)
  return t.isActive() || (n *= 2), n * e
}
function On(t, e) {
  if ((t.l.info('Error code ' + e), e == 2)) {
    var n = null
    t.h && (n = null)
    var r = Fe(t.pb, t)
    n ||
      ((n = new Un('//www.google.com/images/cleardot.gif')),
      (O.location && O.location.protocol == 'http') || Go(n, 'https'),
      Na(n)),
      Cw(n.toString(), r)
  } else He(2)
  ;(t.H = 0), t.h && t.h.za(e), xy(t), Iy(t)
}
S.pb = function (t) {
  t
    ? (this.l.info('Successfully pinged google.com'), He(2))
    : (this.l.info('Failed to ping google.com'), He(1))
}
function xy(t) {
  if (((t.H = 0), (t.ma = []), t.h)) {
    const e = gy(t.i)
    ;(e.length != 0 || t.j.length != 0) &&
      (mf(t.ma, e),
      mf(t.ma, t.j),
      (t.i.i.length = 0),
      oh(t.j),
      (t.j.length = 0)),
      t.h.ya()
  }
}
function Ny(t, e, n) {
  var r = n instanceof Un ? Kt(n) : new Un(n)
  if (r.g != '') e && (r.g = e + '.' + r.g), bo(r, r.m)
  else {
    var i = O.location
    ;(r = i.protocol),
      (e = e ? e + '.' + i.hostname : i.hostname),
      (i = +i.port)
    var s = new Un(null)
    r && Go(s, r), e && (s.g = e), i && bo(s, i), n && (s.l = n), (r = s)
  }
  return (
    (n = t.F), (e = t.Da), n && e && J(r, n, e), J(r, 'VER', t.ra), As(t, r), r
  )
}
function Dy(t, e, n) {
  if (e && !t.J)
    throw Error("Can't create secondary domain capable XhrIo object.")
  return (
    (e = t.Ha && !t.va ? new ae(new Da({ ob: n })) : new ae(t.va)), e.Oa(t.J), e
  )
}
S.isActive = function () {
  return !!this.h && this.h.isActive(this)
}
function Vy() {}
S = Vy.prototype
S.Ba = function () {}
S.Aa = function () {}
S.za = function () {}
S.ya = function () {}
S.isActive = function () {
  return !0
}
S.Va = function () {}
function Xo() {
  if (Fr && !(10 <= Number(QE)))
    throw Error('Environmental error: no available transport.')
}
Xo.prototype.g = function (t, e) {
  return new rt(t, e)
}
function rt(t, e) {
  Te.call(this),
    (this.g = new Sy(e)),
    (this.l = t),
    (this.h = (e && e.messageUrlParams) || null),
    (t = (e && e.messageHeaders) || null),
    e &&
      e.clientProtocolHeaderRequired &&
      (t
        ? (t['X-Client-Protocol'] = 'webchannel')
        : (t = { 'X-Client-Protocol': 'webchannel' })),
    (this.g.s = t),
    (t = (e && e.initMessageHeaders) || null),
    e &&
      e.messageContentType &&
      (t
        ? (t['X-WebChannel-Content-Type'] = e.messageContentType)
        : (t = { 'X-WebChannel-Content-Type': e.messageContentType })),
    e &&
      e.Ca &&
      (t
        ? (t['X-WebChannel-Client-Profile'] = e.Ca)
        : (t = { 'X-WebChannel-Client-Profile': e.Ca })),
    (this.g.U = t),
    (t = e && e.cc) && !ts(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !ts(e) &&
      ((this.g.F = e),
      (t = this.h),
      t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new br(this))
}
Se(rt, Te)
rt.prototype.m = function () {
  ;(this.g.h = this.j), this.A && (this.g.J = !0)
  var t = this.g,
    e = this.l,
    n = this.h || void 0
  He(0),
    (t.Y = e),
    (t.na = n || {}),
    (t.G = t.aa),
    (t.I = Ny(t, null, t.Y)),
    Ma(t)
}
rt.prototype.close = function () {
  Sh(this.g)
}
rt.prototype.u = function (t) {
  var e = this.g
  if (typeof t == 'string') {
    var n = {}
    ;(n.__data__ = t), (t = n)
  } else this.v && ((n = {}), (n.__data__ = fh(t)), (t = n))
  e.j.push(new ww(e.fb++, t)), e.H == 3 && Ma(e)
}
rt.prototype.N = function () {
  ;(this.g.h = null),
    delete this.j,
    Sh(this.g),
    delete this.g,
    rt.$.N.call(this)
}
function Ly(t) {
  vh.call(this),
    t.__headers__ &&
      ((this.headers = t.__headers__),
      (this.statusCode = t.__status__),
      delete t.__headers__,
      delete t.__status__)
  var e = t.__sm__
  if (e) {
    e: {
      for (const n in e) {
        t = n
        break e
      }
      t = void 0
    }
    ;(this.i = t) && ((t = this.i), (e = e !== null && t in e ? e[t] : void 0)),
      (this.data = e)
  } else this.data = t
}
Se(Ly, vh)
function Oy() {
  _h.call(this), (this.status = 1)
}
Se(Oy, _h)
function br(t) {
  this.g = t
}
Se(br, Vy)
br.prototype.Ba = function () {
  Pe(this.g, 'a')
}
br.prototype.Aa = function (t) {
  Pe(this.g, new Ly(t))
}
br.prototype.za = function (t) {
  Pe(this.g, new Oy())
}
br.prototype.ya = function () {
  Pe(this.g, 'b')
}
function Vw() {
  this.blockSize = -1
}
function Tt() {
  ;(this.blockSize = -1),
    (this.blockSize = 64),
    (this.g = Array(4)),
    (this.m = Array(this.blockSize)),
    (this.i = this.h = 0),
    this.reset()
}
Se(Tt, Vw)
Tt.prototype.reset = function () {
  ;(this.g[0] = 1732584193),
    (this.g[1] = 4023233417),
    (this.g[2] = 2562383102),
    (this.g[3] = 271733878),
    (this.i = this.h = 0)
}
function Dl(t, e, n) {
  n || (n = 0)
  var r = Array(16)
  if (typeof e == 'string')
    for (var i = 0; 16 > i; ++i)
      r[i] =
        e.charCodeAt(n++) |
        (e.charCodeAt(n++) << 8) |
        (e.charCodeAt(n++) << 16) |
        (e.charCodeAt(n++) << 24)
  else
    for (i = 0; 16 > i; ++i)
      r[i] = e[n++] | (e[n++] << 8) | (e[n++] << 16) | (e[n++] << 24)
  ;(e = t.g[0]), (n = t.g[1]), (i = t.g[2])
  var s = t.g[3],
    o = (e + (s ^ (n & (i ^ s))) + r[0] + 3614090360) & 4294967295
  ;(e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[1] + 3905402710) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[2] + 606105819) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[3] + 3250441966) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (s ^ (n & (i ^ s))) + r[4] + 4118548399) & 4294967295),
    (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[5] + 1200080426) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[6] + 2821735955) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[7] + 4249261313) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (s ^ (n & (i ^ s))) + r[8] + 1770035416) & 4294967295),
    (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[9] + 2336552879) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[10] + 4294925233) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[11] + 2304563134) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (s ^ (n & (i ^ s))) + r[12] + 1804603682) & 4294967295),
    (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[13] + 4254626195) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[14] + 2792965006) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[15] + 1236535329) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (i ^ (s & (n ^ i))) + r[1] + 4129170786) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[6] + 3225465664) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[11] + 643717713) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[0] + 3921069994) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (i ^ (s & (n ^ i))) + r[5] + 3593408605) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[10] + 38016083) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[15] + 3634488961) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[4] + 3889429448) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (i ^ (s & (n ^ i))) + r[9] + 568446438) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[14] + 3275163606) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[3] + 4107603335) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[8] + 1163531501) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (i ^ (s & (n ^ i))) + r[13] + 2850285829) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[2] + 4243563512) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[7] + 1735328473) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[12] + 2368359562) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (n ^ i ^ s) + r[5] + 4294588738) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[8] + 2272392833) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[11] + 1839030562) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[14] + 4259657740) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (n ^ i ^ s) + r[1] + 2763975236) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[4] + 1272893353) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[7] + 4139469664) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[10] + 3200236656) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (n ^ i ^ s) + r[13] + 681279174) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[0] + 3936430074) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[3] + 3572445317) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[6] + 76029189) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (n ^ i ^ s) + r[9] + 3654602809) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[12] + 3873151461) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[15] + 530742520) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[2] + 3299628645) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (i ^ (n | ~s)) + r[0] + 4096336452) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[7] + 1126891415) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[14] + 2878612391) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[5] + 4237533241) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (e + (i ^ (n | ~s)) + r[12] + 1700485571) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[3] + 2399980690) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[10] + 4293915773) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[1] + 2240044497) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (e + (i ^ (n | ~s)) + r[8] + 1873313359) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[15] + 4264355552) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[6] + 2734768916) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[13] + 1309151649) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (e + (i ^ (n | ~s)) + r[4] + 4149444226) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[11] + 3174756917) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[2] + 718787259) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[9] + 3951481745) & 4294967295),
    (t.g[0] = (t.g[0] + e) & 4294967295),
    (t.g[1] =
      (t.g[1] + (i + (((o << 21) & 4294967295) | (o >>> 11)))) & 4294967295),
    (t.g[2] = (t.g[2] + i) & 4294967295),
    (t.g[3] = (t.g[3] + s) & 4294967295)
}
Tt.prototype.j = function (t, e) {
  e === void 0 && (e = t.length)
  for (var n = e - this.blockSize, r = this.m, i = this.h, s = 0; s < e; ) {
    if (i == 0) for (; s <= n; ) Dl(this, t, s), (s += this.blockSize)
    if (typeof t == 'string') {
      for (; s < e; )
        if (((r[i++] = t.charCodeAt(s++)), i == this.blockSize)) {
          Dl(this, r), (i = 0)
          break
        }
    } else
      for (; s < e; )
        if (((r[i++] = t[s++]), i == this.blockSize)) {
          Dl(this, r), (i = 0)
          break
        }
  }
  ;(this.h = i), (this.i += e)
}
Tt.prototype.l = function () {
  var t = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h)
  t[0] = 128
  for (var e = 1; e < t.length - 8; ++e) t[e] = 0
  var n = 8 * this.i
  for (e = t.length - 8; e < t.length; ++e) (t[e] = n & 255), (n /= 256)
  for (this.j(t), t = Array(16), e = n = 0; 4 > e; ++e)
    for (var r = 0; 32 > r; r += 8) t[n++] = (this.g[e] >>> r) & 255
  return t
}
function b(t, e) {
  this.h = e
  for (var n = [], r = !0, i = t.length - 1; 0 <= i; i--) {
    var s = t[i] | 0
    ;(r && s == e) || ((n[i] = s), (r = !1))
  }
  this.g = n
}
var Lw = {}
function Ch(t) {
  return -128 <= t && 128 > t
    ? BE(t, function (e) {
        return new b([e | 0], 0 > e ? -1 : 0)
      })
    : new b([t | 0], 0 > t ? -1 : 0)
}
function kt(t) {
  if (isNaN(t) || !isFinite(t)) return Ar
  if (0 > t) return Ce(kt(-t))
  for (var e = [], n = 1, r = 0; t >= n; r++) (e[r] = (t / n) | 0), (n *= Gu)
  return new b(e, 0)
}
function My(t, e) {
  if (t.length == 0) throw Error('number format error: empty string')
  if (((e = e || 10), 2 > e || 36 < e)) throw Error('radix out of range: ' + e)
  if (t.charAt(0) == '-') return Ce(My(t.substring(1), e))
  if (0 <= t.indexOf('-'))
    throw Error('number format error: interior "-" character')
  for (var n = kt(Math.pow(e, 8)), r = Ar, i = 0; i < t.length; i += 8) {
    var s = Math.min(8, t.length - i),
      o = parseInt(t.substring(i, i + s), e)
    8 > s
      ? ((s = kt(Math.pow(e, s))), (r = r.R(s).add(kt(o))))
      : ((r = r.R(n)), (r = r.add(kt(o))))
  }
  return r
}
var Gu = 4294967296,
  Ar = Ch(0),
  bu = Ch(1),
  Cf = Ch(16777216)
S = b.prototype
S.ea = function () {
  if (lt(this)) return -Ce(this).ea()
  for (var t = 0, e = 1, n = 0; n < this.g.length; n++) {
    var r = this.D(n)
    ;(t += (0 <= r ? r : Gu + r) * e), (e *= Gu)
  }
  return t
}
S.toString = function (t) {
  if (((t = t || 10), 2 > t || 36 < t)) throw Error('radix out of range: ' + t)
  if (Ut(this)) return '0'
  if (lt(this)) return '-' + Ce(this).toString(t)
  for (var e = kt(Math.pow(t, 6)), n = this, r = ''; ; ) {
    var i = Zo(n, e).g
    n = Jo(n, i.R(e))
    var s = ((0 < n.g.length ? n.g[0] : n.h) >>> 0).toString(t)
    if (((n = i), Ut(n))) return s + r
    for (; 6 > s.length; ) s = '0' + s
    r = s + r
  }
}
S.D = function (t) {
  return 0 > t ? 0 : t < this.g.length ? this.g[t] : this.h
}
function Ut(t) {
  if (t.h != 0) return !1
  for (var e = 0; e < t.g.length; e++) if (t.g[e] != 0) return !1
  return !0
}
function lt(t) {
  return t.h == -1
}
S.X = function (t) {
  return (t = Jo(this, t)), lt(t) ? -1 : Ut(t) ? 0 : 1
}
function Ce(t) {
  for (var e = t.g.length, n = [], r = 0; r < e; r++) n[r] = ~t.g[r]
  return new b(n, ~t.h).add(bu)
}
S.abs = function () {
  return lt(this) ? Ce(this) : this
}
S.add = function (t) {
  for (
    var e = Math.max(this.g.length, t.g.length), n = [], r = 0, i = 0;
    i <= e;
    i++
  ) {
    var s = r + (this.D(i) & 65535) + (t.D(i) & 65535),
      o = (s >>> 16) + (this.D(i) >>> 16) + (t.D(i) >>> 16)
    ;(r = o >>> 16), (s &= 65535), (o &= 65535), (n[i] = (o << 16) | s)
  }
  return new b(n, n[n.length - 1] & -2147483648 ? -1 : 0)
}
function Jo(t, e) {
  return t.add(Ce(e))
}
S.R = function (t) {
  if (Ut(this) || Ut(t)) return Ar
  if (lt(this)) return lt(t) ? Ce(this).R(Ce(t)) : Ce(Ce(this).R(t))
  if (lt(t)) return Ce(this.R(Ce(t)))
  if (0 > this.X(Cf) && 0 > t.X(Cf)) return kt(this.ea() * t.ea())
  for (var e = this.g.length + t.g.length, n = [], r = 0; r < 2 * e; r++)
    n[r] = 0
  for (r = 0; r < this.g.length; r++)
    for (var i = 0; i < t.g.length; i++) {
      var s = this.D(r) >>> 16,
        o = this.D(r) & 65535,
        a = t.D(i) >>> 16,
        l = t.D(i) & 65535
      ;(n[2 * r + 2 * i] += o * l),
        Js(n, 2 * r + 2 * i),
        (n[2 * r + 2 * i + 1] += s * l),
        Js(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 1] += o * a),
        Js(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 2] += s * a),
        Js(n, 2 * r + 2 * i + 2)
    }
  for (r = 0; r < e; r++) n[r] = (n[2 * r + 1] << 16) | n[2 * r]
  for (r = e; r < 2 * e; r++) n[r] = 0
  return new b(n, 0)
}
function Js(t, e) {
  for (; (t[e] & 65535) != t[e]; )
    (t[e + 1] += t[e] >>> 16), (t[e] &= 65535), e++
}
function hi(t, e) {
  ;(this.g = t), (this.h = e)
}
function Zo(t, e) {
  if (Ut(e)) throw Error('division by zero')
  if (Ut(t)) return new hi(Ar, Ar)
  if (lt(t)) return (e = Zo(Ce(t), e)), new hi(Ce(e.g), Ce(e.h))
  if (lt(e)) return (e = Zo(t, Ce(e))), new hi(Ce(e.g), e.h)
  if (30 < t.g.length) {
    if (lt(t) || lt(e))
      throw Error('slowDivide_ only works with positive integers.')
    for (var n = bu, r = e; 0 >= r.X(t); ) (n = Rf(n)), (r = Rf(r))
    var i = tr(n, 1),
      s = tr(r, 1)
    for (r = tr(r, 2), n = tr(n, 2); !Ut(r); ) {
      var o = s.add(r)
      0 >= o.X(t) && ((i = i.add(n)), (s = o)), (r = tr(r, 1)), (n = tr(n, 1))
    }
    return (e = Jo(t, i.R(e))), new hi(i, e)
  }
  for (i = Ar; 0 <= t.X(e); ) {
    for (
      n = Math.max(1, Math.floor(t.ea() / e.ea())),
        r = Math.ceil(Math.log(n) / Math.LN2),
        r = 48 >= r ? 1 : Math.pow(2, r - 48),
        s = kt(n),
        o = s.R(e);
      lt(o) || 0 < o.X(t);

    )
      (n -= r), (s = kt(n)), (o = s.R(e))
    Ut(s) && (s = bu), (i = i.add(s)), (t = Jo(t, o))
  }
  return new hi(i, t)
}
S.gb = function (t) {
  return Zo(this, t).h
}
S.and = function (t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++)
    n[r] = this.D(r) & t.D(r)
  return new b(n, this.h & t.h)
}
S.or = function (t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++)
    n[r] = this.D(r) | t.D(r)
  return new b(n, this.h | t.h)
}
S.xor = function (t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++)
    n[r] = this.D(r) ^ t.D(r)
  return new b(n, this.h ^ t.h)
}
function Rf(t) {
  for (var e = t.g.length + 1, n = [], r = 0; r < e; r++)
    n[r] = (t.D(r) << 1) | (t.D(r - 1) >>> 31)
  return new b(n, t.h)
}
function tr(t, e) {
  var n = e >> 5
  e %= 32
  for (var r = t.g.length - n, i = [], s = 0; s < r; s++)
    i[s] =
      0 < e ? (t.D(s + n) >>> e) | (t.D(s + n + 1) << (32 - e)) : t.D(s + n)
  return new b(i, t.h)
}
Xo.prototype.createWebChannel = Xo.prototype.g
rt.prototype.send = rt.prototype.u
rt.prototype.open = rt.prototype.m
rt.prototype.close = rt.prototype.close
Pa.NO_ERROR = 0
Pa.TIMEOUT = 8
Pa.HTTP_ERROR = 6
Zg.COMPLETE = 'complete'
ey.EventType = ws
ws.OPEN = 'a'
ws.CLOSE = 'b'
ws.ERROR = 'c'
ws.MESSAGE = 'd'
Te.prototype.listen = Te.prototype.O
ae.prototype.listenOnce = ae.prototype.P
ae.prototype.getLastError = ae.prototype.Sa
ae.prototype.getLastErrorCode = ae.prototype.Ia
ae.prototype.getStatus = ae.prototype.da
ae.prototype.getResponseJson = ae.prototype.Wa
ae.prototype.getResponseText = ae.prototype.ja
ae.prototype.send = ae.prototype.ha
ae.prototype.setWithCredentials = ae.prototype.Oa
Tt.prototype.digest = Tt.prototype.l
Tt.prototype.reset = Tt.prototype.reset
Tt.prototype.update = Tt.prototype.j
b.prototype.add = b.prototype.add
b.prototype.multiply = b.prototype.R
b.prototype.modulo = b.prototype.gb
b.prototype.compare = b.prototype.X
b.prototype.toNumber = b.prototype.ea
b.prototype.toString = b.prototype.toString
b.prototype.getBits = b.prototype.D
b.fromNumber = kt
b.fromString = My
var Ow = function () {
    return new Xo()
  },
  Mw = function () {
    return Ra()
  },
  Vl = Pa,
  Fw = Zg,
  $w = Zn,
  Pf = {
    xb: 0,
    Ab: 1,
    Bb: 2,
    Ub: 3,
    Zb: 4,
    Wb: 5,
    Xb: 6,
    Vb: 7,
    Tb: 8,
    Yb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Rb: 12,
    Nb: 13,
    Ob: 14,
    Mb: 15,
    Pb: 16,
    Qb: 17,
    tb: 18,
    sb: 19,
    ub: 20,
  },
  Zs = ey,
  jw = ae,
  Uw = Tt,
  Cr = b
const kf = '@firebase/firestore'
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Le {
  constructor(e) {
    this.uid = e
  }
  isAuthenticated() {
    return this.uid != null
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user'
  }
  isEqual(e) {
    return e.uid === this.uid
  }
}
;(Le.UNAUTHENTICATED = new Le(null)),
  (Le.GOOGLE_CREDENTIALS = new Le('google-credentials-uid')),
  (Le.FIRST_PARTY = new Le('first-party-uid')),
  (Le.MOCK_USER = new Le('mock-user'))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Yr = '10.7.2'
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Gn = new Pg('@firebase/firestore')
function di() {
  return Gn.logLevel
}
function I(t, ...e) {
  if (Gn.logLevel <= H.DEBUG) {
    const n = e.map(Rh)
    Gn.debug(`Firestore (${Yr}): ${t}`, ...n)
  }
}
function Vt(t, ...e) {
  if (Gn.logLevel <= H.ERROR) {
    const n = e.map(Rh)
    Gn.error(`Firestore (${Yr}): ${t}`, ...n)
  }
}
function $r(t, ...e) {
  if (Gn.logLevel <= H.WARN) {
    const n = e.map(Rh)
    Gn.warn(`Firestore (${Yr}): ${t}`, ...n)
  }
}
function Rh(t) {
  if (typeof t == 'string') return t
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (n) {
      return JSON.stringify(n)
    })(t)
  } catch {
    return t
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $(t = 'Unexpected state') {
  const e = `FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: ` + t
  throw (Vt(e), new Error(e))
}
function pe(t, e) {
  t || $()
}
function K(t, e) {
  return t
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const T = {
  OK: 'ok',
  CANCELLED: 'cancelled',
  UNKNOWN: 'unknown',
  INVALID_ARGUMENT: 'invalid-argument',
  DEADLINE_EXCEEDED: 'deadline-exceeded',
  NOT_FOUND: 'not-found',
  ALREADY_EXISTS: 'already-exists',
  PERMISSION_DENIED: 'permission-denied',
  UNAUTHENTICATED: 'unauthenticated',
  RESOURCE_EXHAUSTED: 'resource-exhausted',
  FAILED_PRECONDITION: 'failed-precondition',
  ABORTED: 'aborted',
  OUT_OF_RANGE: 'out-of-range',
  UNIMPLEMENTED: 'unimplemented',
  INTERNAL: 'internal',
  UNAVAILABLE: 'unavailable',
  DATA_LOSS: 'data-loss',
}
class V extends Wr {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pn {
  constructor() {
    this.promise = new Promise((e, n) => {
      ;(this.resolve = e), (this.reject = n)
    })
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fy {
  constructor(e, n) {
    ;(this.user = n),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${e}`)
  }
}
class zw {
  getToken() {
    return Promise.resolve(null)
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(Le.UNAUTHENTICATED))
  }
  shutdown() {}
}
class Bw {
  constructor(e) {
    ;(this.token = e), (this.changeListener = null)
  }
  getToken() {
    return Promise.resolve(this.token)
  }
  invalidateToken() {}
  start(e, n) {
    ;(this.changeListener = n), e.enqueueRetryable(() => n(this.token.user))
  }
  shutdown() {
    this.changeListener = null
  }
}
class Hw {
  constructor(e) {
    ;(this.t = e),
      (this.currentUser = Le.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null)
  }
  start(e, n) {
    let r = this.i
    const i = (l) => (this.i !== r ? ((r = this.i), n(l)) : Promise.resolve())
    let s = new pn()
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new pn()),
        e.enqueueRetryable(() => i(this.currentUser))
    }
    const o = () => {
        const l = s
        e.enqueueRetryable(async () => {
          await l.promise, await i(this.currentUser)
        })
      },
      a = (l) => {
        I('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = l),
          this.auth.addAuthTokenListener(this.o),
          o()
      }
    this.t.onInit((l) => a(l)),
      setTimeout(() => {
        if (!this.auth) {
          const l = this.t.getImmediate({ optional: !0 })
          l
            ? a(l)
            : (I('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              s.resolve(),
              (s = new pn()))
        }
      }, 0),
      o()
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? (I(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.'
                  ),
                  this.getToken())
                : r
                ? (pe(typeof r.accessToken == 'string'),
                  new Fy(r.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    )
  }
  invalidateToken() {
    this.forceRefresh = !0
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o)
  }
  u() {
    const e = this.auth && this.auth.getUid()
    return pe(e === null || typeof e == 'string'), new Le(e)
  }
}
class qw {
  constructor(e, n, r) {
    ;(this.l = e),
      (this.h = n),
      (this.P = r),
      (this.type = 'FirstParty'),
      (this.user = Le.FIRST_PARTY),
      (this.I = new Map())
  }
  T() {
    return this.P ? this.P() : null
  }
  get headers() {
    this.I.set('X-Goog-AuthUser', this.l)
    const e = this.T()
    return (
      e && this.I.set('Authorization', e),
      this.h && this.I.set('X-Goog-Iam-Authorization-Token', this.h),
      this.I
    )
  }
}
class Qw {
  constructor(e, n, r) {
    ;(this.l = e), (this.h = n), (this.P = r)
  }
  getToken() {
    return Promise.resolve(new qw(this.l, this.h, this.P))
  }
  start(e, n) {
    e.enqueueRetryable(() => n(Le.FIRST_PARTY))
  }
  shutdown() {}
  invalidateToken() {}
}
class Kw {
  constructor(e) {
    ;(this.value = e),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set('x-firebase-appcheck', this.value)
  }
}
class Ww {
  constructor(e) {
    ;(this.A = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null)
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        I(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        )
      const o = s.token !== this.R
      return (
        (this.R = s.token),
        I(
          'FirebaseAppCheckTokenProvider',
          `Received ${o ? 'new' : 'existing'} token.`
        ),
        o ? n(s.token) : Promise.resolve()
      )
    }
    this.o = (s) => {
      e.enqueueRetryable(() => r(s))
    }
    const i = (s) => {
      I('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o)
    }
    this.A.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.A.getImmediate({ optional: !0 })
          s
            ? i(s)
            : I('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected')
        }
      }, 0)
  }
  getToken() {
    const e = this.forceRefresh
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (pe(typeof n.token == 'string'),
                  (this.R = n.token),
                  new Kw(n.token))
                : null
            )
        : Promise.resolve(null)
    )
  }
  invalidateToken() {
    this.forceRefresh = !0
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o)
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gw(t) {
  const e = typeof self < 'u' && (self.crypto || self.msCrypto),
    n = new Uint8Array(t)
  if (e && typeof e.getRandomValues == 'function') e.getRandomValues(n)
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random())
  return n
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bw {
  static newId() {
    const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      n = Math.floor(256 / e.length) * e.length
    let r = ''
    for (; r.length < 20; ) {
      const i = Gw(40)
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length))
    }
    return r
  }
}
function W(t, e) {
  return t < e ? -1 : t > e ? 1 : 0
}
function jr(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]))
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Je {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new V(
        T.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + n
      )
    if (n >= 1e9)
      throw new V(
        T.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + n
      )
    if (e < -62135596800)
      throw new V(T.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e)
    if (e >= 253402300800)
      throw new V(T.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e)
  }
  static now() {
    return Je.fromMillis(Date.now())
  }
  static fromDate(e) {
    return Je.fromMillis(e.getTime())
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n))
    return new Je(n, r)
  }
  toDate() {
    return new Date(this.toMillis())
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? W(this.nanoseconds, e.nanoseconds)
      : W(this.seconds, e.seconds)
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
  }
  toString() {
    return (
      'Timestamp(seconds=' +
      this.seconds +
      ', nanoseconds=' +
      this.nanoseconds +
      ')'
    )
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds }
  }
  valueOf() {
    const e = this.seconds - -62135596800
    return (
      String(e).padStart(12, '0') +
      '.' +
      String(this.nanoseconds).padStart(9, '0')
    )
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M {
  constructor(e) {
    this.timestamp = e
  }
  static fromTimestamp(e) {
    return new M(e)
  }
  static min() {
    return new M(new Je(0, 0))
  }
  static max() {
    return new M(new Je(253402300799, 999999999))
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp)
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp)
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
  }
  toString() {
    return 'SnapshotVersion(' + this.timestamp.toString() + ')'
  }
  toTimestamp() {
    return this.timestamp
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class us {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && $(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && $(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r)
  }
  get length() {
    return this.len
  }
  isEqual(e) {
    return us.comparator(this, e) === 0
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit())
    return (
      e instanceof us
        ? e.forEach((r) => {
            n.push(r)
          })
        : n.push(e),
      this.construct(n)
    )
  }
  limit() {
    return this.offset + this.length
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    )
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1)
  }
  firstSegment() {
    return this.segments[this.offset]
  }
  lastSegment() {
    return this.get(this.length - 1)
  }
  get(e) {
    return this.segments[this.offset + e]
  }
  isEmpty() {
    return this.length === 0
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1
    return !0
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1
    return !0
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n])
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit())
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length)
    for (let i = 0; i < r; i++) {
      const s = e.get(i),
        o = n.get(i)
      if (s < o) return -1
      if (s > o) return 1
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0
  }
}
class oe extends us {
  construct(e, n, r) {
    return new oe(e, n, r)
  }
  canonicalString() {
    return this.toArray().join('/')
  }
  toString() {
    return this.canonicalString()
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join('/')
  }
  static fromString(...e) {
    const n = []
    for (const r of e) {
      if (r.indexOf('//') >= 0)
        throw new V(
          T.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        )
      n.push(...r.split('/').filter((i) => i.length > 0))
    }
    return new oe(n)
  }
  static emptyPath() {
    return new oe([])
  }
}
const Yw = /^[_a-zA-Z][_a-zA-Z0-9]*$/
class Be extends us {
  construct(e, n, r) {
    return new Be(e, n, r)
  }
  static isValidIdentifier(e) {
    return Yw.test(e)
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
          Be.isValidIdentifier(e) || (e = '`' + e + '`'),
          e
        )
      )
      .join('.')
  }
  toString() {
    return this.canonicalString()
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === '__name__'
  }
  static keyField() {
    return new Be(['__name__'])
  }
  static fromServerFormat(e) {
    const n = []
    let r = '',
      i = 0
    const s = () => {
      if (r.length === 0)
        throw new V(
          T.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        )
      n.push(r), (r = '')
    }
    let o = !1
    for (; i < e.length; ) {
      const a = e[i]
      if (a === '\\') {
        if (i + 1 === e.length)
          throw new V(
            T.INVALID_ARGUMENT,
            'Path has trailing escape character: ' + e
          )
        const l = e[i + 1]
        if (l !== '\\' && l !== '.' && l !== '`')
          throw new V(
            T.INVALID_ARGUMENT,
            'Path has invalid escape sequence: ' + e
          )
        ;(r += l), (i += 2)
      } else
        a === '`'
          ? ((o = !o), i++)
          : a !== '.' || o
          ? ((r += a), i++)
          : (s(), i++)
    }
    if ((s(), o))
      throw new V(T.INVALID_ARGUMENT, 'Unterminated ` in path: ' + e)
    return new Be(n)
  }
  static emptyPath() {
    return new Be([])
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class L {
  constructor(e) {
    this.path = e
  }
  static fromPath(e) {
    return new L(oe.fromString(e))
  }
  static fromName(e) {
    return new L(oe.fromString(e).popFirst(5))
  }
  static empty() {
    return new L(oe.emptyPath())
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment()
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2)
  }
  getCollectionPath() {
    return this.path.popLast()
  }
  isEqual(e) {
    return e !== null && oe.comparator(this.path, e.path) === 0
  }
  toString() {
    return this.path.toString()
  }
  static comparator(e, n) {
    return oe.comparator(e.path, n.path)
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0
  }
  static fromSegments(e) {
    return new L(new oe(e.slice()))
  }
}
function Xw(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = M.fromTimestamp(r === 1e9 ? new Je(n + 1, 0) : new Je(n, r))
  return new yn(i, L.empty(), e)
}
function Jw(t) {
  return new yn(t.readTime, t.key, -1)
}
class yn {
  constructor(e, n, r) {
    ;(this.readTime = e), (this.documentKey = n), (this.largestBatchId = r)
  }
  static min() {
    return new yn(M.min(), L.empty(), -1)
  }
  static max() {
    return new yn(M.max(), L.empty(), -1)
  }
}
function Zw(t, e) {
  let n = t.readTime.compareTo(e.readTime)
  return n !== 0
    ? n
    : ((n = L.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : W(t.largestBatchId, e.largestBatchId))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eT =
  'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.'
class tT {
  constructor() {
    this.onCommittedListeners = []
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e)
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e())
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ph(t) {
  if (t.code !== T.FAILED_PRECONDITION || t.message !== eT) throw t
  I('LocalStore', 'Unexpectedly lost primary lease')
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y {
  constructor(e) {
    ;(this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          ;(this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n)
        },
        (n) => {
          ;(this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n)
        }
      )
  }
  catch(e) {
    return this.next(void 0, e)
  }
  next(e, n) {
    return (
      this.callbackAttached && $(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new y((r, i) => {
            ;(this.nextCallback = (s) => {
              this.wrapSuccess(e, s).next(r, i)
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i)
              })
          })
    )
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n)
    })
  }
  wrapUserFunction(e) {
    try {
      const n = e()
      return n instanceof y ? n : y.resolve(n)
    } catch (n) {
      return y.reject(n)
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : y.resolve(n)
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : y.reject(n)
  }
  static resolve(e) {
    return new y((n, r) => {
      n(e)
    })
  }
  static reject(e) {
    return new y((n, r) => {
      r(e)
    })
  }
  static waitFor(e) {
    return new y((n, r) => {
      let i = 0,
        s = 0,
        o = !1
      e.forEach((a) => {
        ++i,
          a.next(
            () => {
              ++s, o && s === i && n()
            },
            (l) => r(l)
          )
      }),
        (o = !0),
        s === i && n()
    })
  }
  static or(e) {
    let n = y.resolve(!1)
    for (const r of e) n = n.next((i) => (i ? y.resolve(i) : r()))
    return n
  }
  static forEach(e, n) {
    const r = []
    return (
      e.forEach((i, s) => {
        r.push(n.call(this, i, s))
      }),
      this.waitFor(r)
    )
  }
  static mapArray(e, n) {
    return new y((r, i) => {
      const s = e.length,
        o = new Array(s)
      let a = 0
      for (let l = 0; l < s; l++) {
        const u = l
        n(e[u]).next(
          (c) => {
            ;(o[u] = c), ++a, a === s && r(o)
          },
          (c) => i(c)
        )
      }
    })
  }
  static doWhile(e, n) {
    return new y((r, i) => {
      const s = () => {
        e() === !0
          ? n().next(() => {
              s()
            }, i)
          : r()
      }
      s()
    })
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kh {
  constructor(e, n) {
    ;(this.action = e),
      (this.transaction = n),
      (this.aborted = !1),
      (this.V = new pn()),
      (this.transaction.oncomplete = () => {
        this.V.resolve()
      }),
      (this.transaction.onabort = () => {
        n.error ? this.V.reject(new Ni(e, n.error)) : this.V.resolve()
      }),
      (this.transaction.onerror = (r) => {
        const i = xh(r.target.error)
        this.V.reject(new Ni(e, i))
      })
  }
  static open(e, n, r, i) {
    try {
      return new kh(n, e.transaction(i, r))
    } catch (s) {
      throw new Ni(n, s)
    }
  }
  get m() {
    return this.V.promise
  }
  abort(e) {
    e && this.V.reject(e),
      this.aborted ||
        (I(
          'SimpleDb',
          'Aborting transaction:',
          e ? e.message : 'Client-initiated abort'
        ),
        (this.aborted = !0),
        this.transaction.abort())
  }
  g() {
    const e = this.transaction
    this.aborted || typeof e.commit != 'function' || e.commit()
  }
  store(e) {
    const n = this.transaction.objectStore(e)
    return new rT(n)
  }
}
class Mn {
  constructor(e, n, r) {
    ;(this.name = e),
      (this.version = n),
      (this.p = r),
      Mn.S(Qo()) === 12.2 &&
        Vt(
          'Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.'
        )
  }
  static delete(e) {
    return (
      I('SimpleDb', 'Removing database:', e),
      xn(window.indexedDB.deleteDatabase(e)).toPromise()
    )
  }
  static D() {
    if (!Cg()) return !1
    if (Mn.C()) return !0
    const e = Qo(),
      n = Mn.S(e),
      r = 0 < n && n < 10,
      i = Mn.v(e),
      s = 0 < i && i < 4.5
    return !(
      e.indexOf('MSIE ') > 0 ||
      e.indexOf('Trident/') > 0 ||
      e.indexOf('Edge/') > 0 ||
      r ||
      s
    )
  }
  static C() {
    var e
    return (
      typeof process < 'u' &&
      ((e = process.__PRIVATE_env) === null || e === void 0 ? void 0 : e.F) ===
        'YES'
    )
  }
  static M(e, n) {
    return e.store(n)
  }
  static S(e) {
    const n = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
      r = n ? n[1].split('_').slice(0, 2).join('.') : '-1'
    return Number(r)
  }
  static v(e) {
    const n = e.match(/Android ([\d.]+)/i),
      r = n ? n[1].split('.').slice(0, 2).join('.') : '-1'
    return Number(r)
  }
  async O(e) {
    return (
      this.db ||
        (I('SimpleDb', 'Opening database:', this.name),
        (this.db = await new Promise((n, r) => {
          const i = indexedDB.open(this.name, this.version)
          ;(i.onsuccess = (s) => {
            const o = s.target.result
            n(o)
          }),
            (i.onblocked = () => {
              r(
                new Ni(
                  e,
                  'Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.'
                )
              )
            }),
            (i.onerror = (s) => {
              const o = s.target.error
              o.name === 'VersionError'
                ? r(
                    new V(
                      T.FAILED_PRECONDITION,
                      'A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.'
                    )
                  )
                : o.name === 'InvalidStateError'
                ? r(
                    new V(
                      T.FAILED_PRECONDITION,
                      'Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: ' +
                        o
                    )
                  )
                : r(new Ni(e, o))
            }),
            (i.onupgradeneeded = (s) => {
              I(
                'SimpleDb',
                'Database "' + this.name + '" requires upgrade from version:',
                s.oldVersion
              )
              const o = s.target.result
              this.p
                .N(o, i.transaction, s.oldVersion, this.version)
                .next(() => {
                  I(
                    'SimpleDb',
                    'Database upgrade to version ' + this.version + ' complete'
                  )
                })
            })
        }))),
      this.B && (this.db.onversionchange = (n) => this.B(n)),
      this.db
    )
  }
  L(e) {
    ;(this.B = e), this.db && (this.db.onversionchange = (n) => e(n))
  }
  async runTransaction(e, n, r, i) {
    const s = n === 'readonly'
    let o = 0
    for (;;) {
      ++o
      try {
        this.db = await this.O(e)
        const a = kh.open(this.db, e, s ? 'readonly' : 'readwrite', r),
          l = i(a)
            .next((u) => (a.g(), u))
            .catch((u) => (a.abort(u), y.reject(u)))
            .toPromise()
        return l.catch(() => {}), await a.m, l
      } catch (a) {
        const l = a,
          u = l.name !== 'FirebaseError' && o < 3
        if (
          (I(
            'SimpleDb',
            'Transaction failed with error:',
            l.message,
            'Retrying:',
            u
          ),
          this.close(),
          !u)
        )
          return Promise.reject(l)
      }
    }
  }
  close() {
    this.db && this.db.close(), (this.db = void 0)
  }
}
class nT {
  constructor(e) {
    ;(this.k = e), (this.q = !1), (this.K = null)
  }
  get isDone() {
    return this.q
  }
  get $() {
    return this.K
  }
  set cursor(e) {
    this.k = e
  }
  done() {
    this.q = !0
  }
  U(e) {
    this.K = e
  }
  delete() {
    return xn(this.k.delete())
  }
}
class Ni extends V {
  constructor(e, n) {
    super(T.UNAVAILABLE, `IndexedDB transaction '${e}' failed: ${n}`),
      (this.name = 'IndexedDbTransactionError')
  }
}
function Cs(t) {
  return t.name === 'IndexedDbTransactionError'
}
class rT {
  constructor(e) {
    this.store = e
  }
  put(e, n) {
    let r
    return (
      n !== void 0
        ? (I('SimpleDb', 'PUT', this.store.name, e, n),
          (r = this.store.put(n, e)))
        : (I('SimpleDb', 'PUT', this.store.name, '<auto-key>', e),
          (r = this.store.put(e))),
      xn(r)
    )
  }
  add(e) {
    return I('SimpleDb', 'ADD', this.store.name, e, e), xn(this.store.add(e))
  }
  get(e) {
    return xn(this.store.get(e)).next(
      (n) => (
        n === void 0 && (n = null),
        I('SimpleDb', 'GET', this.store.name, e, n),
        n
      )
    )
  }
  delete(e) {
    return I('SimpleDb', 'DELETE', this.store.name, e), xn(this.store.delete(e))
  }
  count() {
    return I('SimpleDb', 'COUNT', this.store.name), xn(this.store.count())
  }
  W(e, n) {
    const r = this.options(e, n),
      i = r.index ? this.store.index(r.index) : this.store
    if (typeof i.getAll == 'function') {
      const s = i.getAll(r.range)
      return new y((o, a) => {
        ;(s.onerror = (l) => {
          a(l.target.error)
        }),
          (s.onsuccess = (l) => {
            o(l.target.result)
          })
      })
    }
    {
      const s = this.cursor(r),
        o = []
      return this.G(s, (a, l) => {
        o.push(l)
      }).next(() => o)
    }
  }
  j(e, n) {
    const r = this.store.getAll(e, n === null ? void 0 : n)
    return new y((i, s) => {
      ;(r.onerror = (o) => {
        s(o.target.error)
      }),
        (r.onsuccess = (o) => {
          i(o.target.result)
        })
    })
  }
  H(e, n) {
    I('SimpleDb', 'DELETE ALL', this.store.name)
    const r = this.options(e, n)
    r.J = !1
    const i = this.cursor(r)
    return this.G(i, (s, o, a) => a.delete())
  }
  Y(e, n) {
    let r
    n ? (r = e) : ((r = {}), (n = e))
    const i = this.cursor(r)
    return this.G(i, n)
  }
  Z(e) {
    const n = this.cursor({})
    return new y((r, i) => {
      ;(n.onerror = (s) => {
        const o = xh(s.target.error)
        i(o)
      }),
        (n.onsuccess = (s) => {
          const o = s.target.result
          o
            ? e(o.primaryKey, o.value).next((a) => {
                a ? o.continue() : r()
              })
            : r()
        })
    })
  }
  G(e, n) {
    const r = []
    return new y((i, s) => {
      ;(e.onerror = (o) => {
        s(o.target.error)
      }),
        (e.onsuccess = (o) => {
          const a = o.target.result
          if (!a) return void i()
          const l = new nT(a),
            u = n(a.primaryKey, a.value, l)
          if (u instanceof y) {
            const c = u.catch((h) => (l.done(), y.reject(h)))
            r.push(c)
          }
          l.isDone ? i() : l.$ === null ? a.continue() : a.continue(l.$)
        })
    }).next(() => y.waitFor(r))
  }
  options(e, n) {
    let r
    return (
      e !== void 0 && (typeof e == 'string' ? (r = e) : (n = e)),
      { index: r, range: n }
    )
  }
  cursor(e) {
    let n = 'next'
    if ((e.reverse && (n = 'prev'), e.index)) {
      const r = this.store.index(e.index)
      return e.J ? r.openKeyCursor(e.range, n) : r.openCursor(e.range, n)
    }
    return this.store.openCursor(e.range, n)
  }
}
function xn(t) {
  return new y((e, n) => {
    ;(t.onsuccess = (r) => {
      const i = r.target.result
      e(i)
    }),
      (t.onerror = (r) => {
        const i = xh(r.target.error)
        n(i)
      })
  })
}
let xf = !1
function xh(t) {
  const e = Mn.S(Qo())
  if (e >= 12.2 && e < 13) {
    const n = 'An internal error was encountered in the Indexed Database server'
    if (t.message.indexOf(n) >= 0) {
      const r = new V(
        'internal',
        `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`
      )
      return (
        xf ||
          ((xf = !0),
          setTimeout(() => {
            throw r
          }, 0)),
        r
      )
    }
  }
  return t
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nh {
  constructor(e, n) {
    ;(this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.se(r)),
        (this.oe = (r) => n.writeSequenceNumber(r)))
  }
  se(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)), this.previousValue
    )
  }
  next() {
    const e = ++this.previousValue
    return this.oe && this.oe(e), e
  }
}
Nh._e = -1
function Fa(t) {
  return t == null
}
function Yu(t) {
  return t === 0 && 1 / t == -1 / 0
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Nf(t) {
  let e = 0
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++
  return e
}
function $a(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
}
function iT(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1
  return !0
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ce {
  constructor(e, n) {
    ;(this.comparator = e), (this.root = n || Ae.EMPTY)
  }
  insert(e, n) {
    return new ce(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, Ae.BLACK, null, null)
    )
  }
  remove(e) {
    return new ce(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, Ae.BLACK, null, null)
    )
  }
  get(e) {
    let n = this.root
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key)
      if (r === 0) return n.value
      r < 0 ? (n = n.left) : r > 0 && (n = n.right)
    }
    return null
  }
  indexOf(e) {
    let n = 0,
      r = this.root
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key)
      if (i === 0) return n + r.left.size
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right))
    }
    return -1
  }
  isEmpty() {
    return this.root.isEmpty()
  }
  get size() {
    return this.root.size
  }
  minKey() {
    return this.root.minKey()
  }
  maxKey() {
    return this.root.maxKey()
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e)
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1))
  }
  toString() {
    const e = []
    return (
      this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)),
      `{${e.join(', ')}}`
    )
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e)
  }
  getIterator() {
    return new eo(this.root, null, this.comparator, !1)
  }
  getIteratorFrom(e) {
    return new eo(this.root, e, this.comparator, !1)
  }
  getReverseIterator() {
    return new eo(this.root, null, this.comparator, !0)
  }
  getReverseIteratorFrom(e) {
    return new eo(this.root, e, this.comparator, !0)
  }
}
class eo {
  constructor(e, n, r, i) {
    ;(this.isReverse = i), (this.nodeStack = [])
    let s = 1
    for (; !e.isEmpty(); )
      if (((s = n ? r(e.key, n) : 1), n && i && (s *= -1), s < 0))
        e = this.isReverse ? e.left : e.right
      else {
        if (s === 0) {
          this.nodeStack.push(e)
          break
        }
        this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left)
      }
  }
  getNext() {
    let e = this.nodeStack.pop()
    const n = { key: e.key, value: e.value }
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right)
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left)
    return n
  }
  hasNext() {
    return this.nodeStack.length > 0
  }
  peek() {
    if (this.nodeStack.length === 0) return null
    const e = this.nodeStack[this.nodeStack.length - 1]
    return { key: e.key, value: e.value }
  }
}
class Ae {
  constructor(e, n, r, i, s) {
    ;(this.key = e),
      (this.value = n),
      (this.color = r ?? Ae.RED),
      (this.left = i ?? Ae.EMPTY),
      (this.right = s ?? Ae.EMPTY),
      (this.size = this.left.size + 1 + this.right.size)
  }
  copy(e, n, r, i, s) {
    return new Ae(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      s ?? this.right
    )
  }
  isEmpty() {
    return !1
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    )
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    )
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min()
  }
  minKey() {
    return this.min().key
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey()
  }
  insert(e, n, r) {
    let i = this
    const s = r(e, i.key)
    return (
      (i =
        s < 0
          ? i.copy(null, null, null, i.left.insert(e, n, r), null)
          : s === 0
          ? i.copy(null, n, null, null, null)
          : i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp()
    )
  }
  removeMin() {
    if (this.left.isEmpty()) return Ae.EMPTY
    let e = this
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    )
  }
  remove(e, n) {
    let r,
      i = this
    if (n(e, i.key) < 0)
      i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(e, n), null))
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        n(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return Ae.EMPTY
        ;(r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin()))
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n))
    }
    return i.fixUp()
  }
  isRed() {
    return this.color
  }
  fixUp() {
    let e = this
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    )
  }
  moveRedLeft() {
    let e = this.colorFlip()
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    )
  }
  moveRedRight() {
    let e = this.colorFlip()
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e
    )
  }
  rotateLeft() {
    const e = this.copy(null, null, Ae.RED, null, this.right.left)
    return this.right.copy(null, null, this.color, e, null)
  }
  rotateRight() {
    const e = this.copy(null, null, Ae.RED, this.left.right, null)
    return this.left.copy(null, null, this.color, null, e)
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null)
    return this.copy(null, null, !this.color, e, n)
  }
  checkMaxDepth() {
    const e = this.check()
    return Math.pow(2, e) <= this.size + 1
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw $()
    const e = this.left.check()
    if (e !== this.right.check()) throw $()
    return e + (this.isRed() ? 0 : 1)
  }
}
;(Ae.EMPTY = null), (Ae.RED = !0), (Ae.BLACK = !1)
Ae.EMPTY = new (class {
  constructor() {
    this.size = 0
  }
  get key() {
    throw $()
  }
  get value() {
    throw $()
  }
  get color() {
    throw $()
  }
  get left() {
    throw $()
  }
  get right() {
    throw $()
  }
  copy(e, n, r, i, s) {
    return this
  }
  insert(e, n, r) {
    return new Ae(e, n)
  }
  remove(e, n) {
    return this
  }
  isEmpty() {
    return !0
  }
  inorderTraversal(e) {
    return !1
  }
  reverseTraversal(e) {
    return !1
  }
  minKey() {
    return null
  }
  maxKey() {
    return null
  }
  isRed() {
    return !1
  }
  checkMaxDepth() {
    return !0
  }
  check() {
    return 0
  }
})()
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ke {
  constructor(e) {
    ;(this.comparator = e), (this.data = new ce(this.comparator))
  }
  has(e) {
    return this.data.get(e) !== null
  }
  first() {
    return this.data.minKey()
  }
  last() {
    return this.data.maxKey()
  }
  get size() {
    return this.data.size
  }
  indexOf(e) {
    return this.data.indexOf(e)
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1))
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0])
    for (; r.hasNext(); ) {
      const i = r.getNext()
      if (this.comparator(i.key, e[1]) >= 0) return
      n(i.key)
    }
  }
  forEachWhile(e, n) {
    let r
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();

    )
      if (!e(r.getNext().key)) return
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e)
    return n.hasNext() ? n.getNext().key : null
  }
  getIterator() {
    return new Df(this.data.getIterator())
  }
  getIteratorFrom(e) {
    return new Df(this.data.getIteratorFrom(e))
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0))
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this
  }
  isEmpty() {
    return this.data.isEmpty()
  }
  unionWith(e) {
    let n = this
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r)
      }),
      n
    )
  }
  isEqual(e) {
    if (!(e instanceof ke) || this.size !== e.size) return !1
    const n = this.data.getIterator(),
      r = e.data.getIterator()
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key
      if (this.comparator(i, s) !== 0) return !1
    }
    return !0
  }
  toArray() {
    const e = []
    return (
      this.forEach((n) => {
        e.push(n)
      }),
      e
    )
  }
  toString() {
    const e = []
    return this.forEach((n) => e.push(n)), 'SortedSet(' + e.toString() + ')'
  }
  copy(e) {
    const n = new ke(this.comparator)
    return (n.data = e), n
  }
}
class Df {
  constructor(e) {
    this.iter = e
  }
  getNext() {
    return this.iter.getNext().key
  }
  hasNext() {
    return this.iter.hasNext()
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tn {
  constructor(e) {
    ;(this.fields = e), e.sort(Be.comparator)
  }
  static empty() {
    return new tn([])
  }
  unionWith(e) {
    let n = new ke(Be.comparator)
    for (const r of this.fields) n = n.add(r)
    for (const r of e) n = n.add(r)
    return new tn(n.toArray())
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0
    return !1
  }
  isEqual(e) {
    return jr(this.fields, e.fields, (n, r) => n.isEqual(r))
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $y extends Error {
  constructor() {
    super(...arguments), (this.name = 'Base64DecodeError')
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ue {
  constructor(e) {
    this.binaryString = e
  }
  static fromBase64String(e) {
    const n = (function (i) {
      try {
        return atob(i)
      } catch (s) {
        throw typeof DOMException < 'u' && s instanceof DOMException
          ? new $y('Invalid base64 string: ' + s)
          : s
      }
    })(e)
    return new Ue(n)
  }
  static fromUint8Array(e) {
    const n = (function (i) {
      let s = ''
      for (let o = 0; o < i.length; ++o) s += String.fromCharCode(i[o])
      return s
    })(e)
    return new Ue(n)
  }
  [Symbol.iterator]() {
    let e = 0
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    }
  }
  toBase64() {
    return (function (n) {
      return btoa(n)
    })(this.binaryString)
  }
  toUint8Array() {
    return (function (n) {
      const r = new Uint8Array(n.length)
      for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i)
      return r
    })(this.binaryString)
  }
  approximateByteSize() {
    return 2 * this.binaryString.length
  }
  compareTo(e) {
    return W(this.binaryString, e.binaryString)
  }
  isEqual(e) {
    return this.binaryString === e.binaryString
  }
}
Ue.EMPTY_BYTE_STRING = new Ue('')
const sT = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
function vn(t) {
  if ((pe(!!t), typeof t == 'string')) {
    let e = 0
    const n = sT.exec(t)
    if ((pe(!!n), n[1])) {
      let i = n[1]
      ;(i = (i + '000000000').substr(0, 9)), (e = Number(i))
    }
    const r = new Date(t)
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e }
  }
  return { seconds: de(t.seconds), nanos: de(t.nanos) }
}
function de(t) {
  return typeof t == 'number' ? t : typeof t == 'string' ? Number(t) : 0
}
function bn(t) {
  return typeof t == 'string' ? Ue.fromBase64String(t) : Ue.fromUint8Array(t)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Dh(t) {
  var e, n
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === 'server_timestamp'
  )
}
function Vh(t) {
  const e = t.mapValue.fields.__previous_value__
  return Dh(e) ? Vh(e) : e
}
function cs(t) {
  const e = vn(t.mapValue.fields.__local_write_time__.timestampValue)
  return new Je(e.seconds, e.nanos)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oT {
  constructor(e, n, r, i, s, o, a, l, u) {
    ;(this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = a),
      (this.longPollingOptions = l),
      (this.useFetchStreams = u)
  }
}
class hs {
  constructor(e, n) {
    ;(this.projectId = e), (this.database = n || '(default)')
  }
  static empty() {
    return new hs('', '')
  }
  get isDefaultDatabase() {
    return this.database === '(default)'
  }
  isEqual(e) {
    return (
      e instanceof hs &&
      e.projectId === this.projectId &&
      e.database === this.database
    )
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const to = {
  mapValue: { fields: { __type__: { stringValue: '__max__' } } },
}
function Yn(t) {
  return 'nullValue' in t
    ? 0
    : 'booleanValue' in t
    ? 1
    : 'integerValue' in t || 'doubleValue' in t
    ? 2
    : 'timestampValue' in t
    ? 3
    : 'stringValue' in t
    ? 5
    : 'bytesValue' in t
    ? 6
    : 'referenceValue' in t
    ? 7
    : 'geoPointValue' in t
    ? 8
    : 'arrayValue' in t
    ? 9
    : 'mapValue' in t
    ? Dh(t)
      ? 4
      : aT(t)
      ? 9007199254740991
      : 10
    : $()
}
function Lt(t, e) {
  if (t === e) return !0
  const n = Yn(t)
  if (n !== Yn(e)) return !1
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0
    case 1:
      return t.booleanValue === e.booleanValue
    case 4:
      return cs(t).isEqual(cs(e))
    case 3:
      return (function (i, s) {
        if (
          typeof i.timestampValue == 'string' &&
          typeof s.timestampValue == 'string' &&
          i.timestampValue.length === s.timestampValue.length
        )
          return i.timestampValue === s.timestampValue
        const o = vn(i.timestampValue),
          a = vn(s.timestampValue)
        return o.seconds === a.seconds && o.nanos === a.nanos
      })(t, e)
    case 5:
      return t.stringValue === e.stringValue
    case 6:
      return (function (i, s) {
        return bn(i.bytesValue).isEqual(bn(s.bytesValue))
      })(t, e)
    case 7:
      return t.referenceValue === e.referenceValue
    case 8:
      return (function (i, s) {
        return (
          de(i.geoPointValue.latitude) === de(s.geoPointValue.latitude) &&
          de(i.geoPointValue.longitude) === de(s.geoPointValue.longitude)
        )
      })(t, e)
    case 2:
      return (function (i, s) {
        if ('integerValue' in i && 'integerValue' in s)
          return de(i.integerValue) === de(s.integerValue)
        if ('doubleValue' in i && 'doubleValue' in s) {
          const o = de(i.doubleValue),
            a = de(s.doubleValue)
          return o === a ? Yu(o) === Yu(a) : isNaN(o) && isNaN(a)
        }
        return !1
      })(t, e)
    case 9:
      return jr(t.arrayValue.values || [], e.arrayValue.values || [], Lt)
    case 10:
      return (function (i, s) {
        const o = i.mapValue.fields || {},
          a = s.mapValue.fields || {}
        if (Nf(o) !== Nf(a)) return !1
        for (const l in o)
          if (o.hasOwnProperty(l) && (a[l] === void 0 || !Lt(o[l], a[l])))
            return !1
        return !0
      })(t, e)
    default:
      return $()
  }
}
function ds(t, e) {
  return (t.values || []).find((n) => Lt(n, e)) !== void 0
}
function Ur(t, e) {
  if (t === e) return 0
  const n = Yn(t),
    r = Yn(e)
  if (n !== r) return W(n, r)
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0
    case 1:
      return W(t.booleanValue, e.booleanValue)
    case 2:
      return (function (s, o) {
        const a = de(s.integerValue || s.doubleValue),
          l = de(o.integerValue || o.doubleValue)
        return a < l
          ? -1
          : a > l
          ? 1
          : a === l
          ? 0
          : isNaN(a)
          ? isNaN(l)
            ? 0
            : -1
          : 1
      })(t, e)
    case 3:
      return Vf(t.timestampValue, e.timestampValue)
    case 4:
      return Vf(cs(t), cs(e))
    case 5:
      return W(t.stringValue, e.stringValue)
    case 6:
      return (function (s, o) {
        const a = bn(s),
          l = bn(o)
        return a.compareTo(l)
      })(t.bytesValue, e.bytesValue)
    case 7:
      return (function (s, o) {
        const a = s.split('/'),
          l = o.split('/')
        for (let u = 0; u < a.length && u < l.length; u++) {
          const c = W(a[u], l[u])
          if (c !== 0) return c
        }
        return W(a.length, l.length)
      })(t.referenceValue, e.referenceValue)
    case 8:
      return (function (s, o) {
        const a = W(de(s.latitude), de(o.latitude))
        return a !== 0 ? a : W(de(s.longitude), de(o.longitude))
      })(t.geoPointValue, e.geoPointValue)
    case 9:
      return (function (s, o) {
        const a = s.values || [],
          l = o.values || []
        for (let u = 0; u < a.length && u < l.length; ++u) {
          const c = Ur(a[u], l[u])
          if (c) return c
        }
        return W(a.length, l.length)
      })(t.arrayValue, e.arrayValue)
    case 10:
      return (function (s, o) {
        if (s === to.mapValue && o === to.mapValue) return 0
        if (s === to.mapValue) return 1
        if (o === to.mapValue) return -1
        const a = s.fields || {},
          l = Object.keys(a),
          u = o.fields || {},
          c = Object.keys(u)
        l.sort(), c.sort()
        for (let h = 0; h < l.length && h < c.length; ++h) {
          const f = W(l[h], c[h])
          if (f !== 0) return f
          const g = Ur(a[l[h]], u[c[h]])
          if (g !== 0) return g
        }
        return W(l.length, c.length)
      })(t.mapValue, e.mapValue)
    default:
      throw $()
  }
}
function Vf(t, e) {
  if (typeof t == 'string' && typeof e == 'string' && t.length === e.length)
    return W(t, e)
  const n = vn(t),
    r = vn(e),
    i = W(n.seconds, r.seconds)
  return i !== 0 ? i : W(n.nanos, r.nanos)
}
function zr(t) {
  return Xu(t)
}
function Xu(t) {
  return 'nullValue' in t
    ? 'null'
    : 'booleanValue' in t
    ? '' + t.booleanValue
    : 'integerValue' in t
    ? '' + t.integerValue
    : 'doubleValue' in t
    ? '' + t.doubleValue
    : 'timestampValue' in t
    ? (function (n) {
        const r = vn(n)
        return `time(${r.seconds},${r.nanos})`
      })(t.timestampValue)
    : 'stringValue' in t
    ? t.stringValue
    : 'bytesValue' in t
    ? (function (n) {
        return bn(n).toBase64()
      })(t.bytesValue)
    : 'referenceValue' in t
    ? (function (n) {
        return L.fromName(n).toString()
      })(t.referenceValue)
    : 'geoPointValue' in t
    ? (function (n) {
        return `geo(${n.latitude},${n.longitude})`
      })(t.geoPointValue)
    : 'arrayValue' in t
    ? (function (n) {
        let r = '[',
          i = !0
        for (const s of n.values || []) i ? (i = !1) : (r += ','), (r += Xu(s))
        return r + ']'
      })(t.arrayValue)
    : 'mapValue' in t
    ? (function (n) {
        const r = Object.keys(n.fields || {}).sort()
        let i = '{',
          s = !0
        for (const o of r)
          s ? (s = !1) : (i += ','), (i += `${o}:${Xu(n.fields[o])}`)
        return i + '}'
      })(t.mapValue)
    : $()
}
function Ju(t) {
  return !!t && 'integerValue' in t
}
function Lh(t) {
  return !!t && 'arrayValue' in t
}
function Lf(t) {
  return !!t && 'nullValue' in t
}
function Of(t) {
  return !!t && 'doubleValue' in t && isNaN(Number(t.doubleValue))
}
function Ll(t) {
  return !!t && 'mapValue' in t
}
function Di(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) }
  if (t.timestampValue && typeof t.timestampValue == 'object')
    return { timestampValue: Object.assign({}, t.timestampValue) }
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } }
    return $a(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = Di(r))), e
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } }
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Di(t.arrayValue.values[n])
    return e
  }
  return Object.assign({}, t)
}
function aT(t) {
  return (
    (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === '__max__'
  )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rt {
  constructor(e) {
    this.value = e
  }
  static empty() {
    return new Rt({ mapValue: {} })
  }
  field(e) {
    if (e.isEmpty()) return this.value
    {
      let n = this.value
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !Ll(n))) return null
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Di(n)
  }
  setAll(e) {
    let n = Be.emptyPath(),
      r = {},
      i = []
    e.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const l = this.getFieldsMap(n)
        this.applyChanges(l, r, i), (r = {}), (i = []), (n = a.popLast())
      }
      o ? (r[a.lastSegment()] = Di(o)) : i.push(a.lastSegment())
    })
    const s = this.getFieldsMap(n)
    this.applyChanges(s, r, i)
  }
  delete(e) {
    const n = this.field(e.popLast())
    Ll(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()]
  }
  isEqual(e) {
    return Lt(this.value, e.value)
  }
  getFieldsMap(e) {
    let n = this.value
    n.mapValue.fields || (n.mapValue = { fields: {} })
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)]
      ;(Ll(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i)
    }
    return n.mapValue.fields
  }
  applyChanges(e, n, r) {
    $a(n, (i, s) => (e[i] = s))
    for (const i of r) delete e[i]
  }
  clone() {
    return new Rt(Di(this.value))
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Me {
  constructor(e, n, r, i, s, o, a) {
    ;(this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.createTime = s),
      (this.data = o),
      (this.documentState = a)
  }
  static newInvalidDocument(e) {
    return new Me(e, 0, M.min(), M.min(), M.min(), Rt.empty(), 0)
  }
  static newFoundDocument(e, n, r, i) {
    return new Me(e, 1, n, M.min(), r, i, 0)
  }
  static newNoDocument(e, n) {
    return new Me(e, 2, n, M.min(), M.min(), Rt.empty(), 0)
  }
  static newUnknownDocument(e, n) {
    return new Me(e, 3, n, M.min(), M.min(), Rt.empty(), 2)
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(M.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    )
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = Rt.empty()),
      (this.documentState = 0),
      this
    )
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = Rt.empty()),
      (this.documentState = 2),
      this
    )
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = M.min()), this
  }
  setReadTime(e) {
    return (this.readTime = e), this
  }
  get hasLocalMutations() {
    return this.documentState === 1
  }
  get hasCommittedMutations() {
    return this.documentState === 2
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations
  }
  isValidDocument() {
    return this.documentType !== 0
  }
  isFoundDocument() {
    return this.documentType === 1
  }
  isNoDocument() {
    return this.documentType === 2
  }
  isUnknownDocument() {
    return this.documentType === 3
  }
  isEqual(e) {
    return (
      e instanceof Me &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    )
  }
  mutableCopy() {
    return new Me(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    )
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${
      this.documentType
    }}), {documentState: ${this.documentState}})`
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ea {
  constructor(e, n) {
    ;(this.position = e), (this.inclusive = n)
  }
}
function Mf(t, e, n) {
  let r = 0
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i]
    if (
      (s.field.isKeyField()
        ? (r = L.comparator(L.fromName(o.referenceValue), n.key))
        : (r = Ur(o, n.data.field(s.field))),
      s.dir === 'desc' && (r *= -1),
      r !== 0)
    )
      break
  }
  return r
}
function Ff(t, e) {
  if (t === null) return e === null
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1
  for (let n = 0; n < t.position.length; n++)
    if (!Lt(t.position[n], e.position[n])) return !1
  return !0
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ta {
  constructor(e, n = 'asc') {
    ;(this.field = e), (this.dir = n)
  }
}
function lT(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field)
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jy {}
class ge extends jy {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r)
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === 'in' || n === 'not-in'
        ? this.createKeyFieldInFilter(e, n, r)
        : new cT(e, n, r)
      : n === 'array-contains'
      ? new fT(e, r)
      : n === 'in'
      ? new pT(e, r)
      : n === 'not-in'
      ? new mT(e, r)
      : n === 'array-contains-any'
      ? new gT(e, r)
      : new ge(e, n, r)
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === 'in' ? new hT(e, r) : new dT(e, r)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return this.op === '!='
      ? n !== null && this.matchesComparison(Ur(n, this.value))
      : n !== null &&
          Yn(this.value) === Yn(n) &&
          this.matchesComparison(Ur(n, this.value))
  }
  matchesComparison(e) {
    switch (this.op) {
      case '<':
        return e < 0
      case '<=':
        return e <= 0
      case '==':
        return e === 0
      case '!=':
        return e !== 0
      case '>':
        return e > 0
      case '>=':
        return e >= 0
      default:
        return $()
    }
  }
  isInequality() {
    return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0
  }
  getFlattenedFilters() {
    return [this]
  }
  getFilters() {
    return [this]
  }
}
class Ot extends jy {
  constructor(e, n) {
    super(), (this.filters = e), (this.op = n), (this.ue = null)
  }
  static create(e, n) {
    return new Ot(e, n)
  }
  matches(e) {
    return Uy(this)
      ? this.filters.find((n) => !n.matches(e)) === void 0
      : this.filters.find((n) => n.matches(e)) !== void 0
  }
  getFlattenedFilters() {
    return (
      this.ue !== null ||
        (this.ue = this.filters.reduce(
          (e, n) => e.concat(n.getFlattenedFilters()),
          []
        )),
      this.ue
    )
  }
  getFilters() {
    return Object.assign([], this.filters)
  }
}
function Uy(t) {
  return t.op === 'and'
}
function zy(t) {
  return uT(t) && Uy(t)
}
function uT(t) {
  for (const e of t.filters) if (e instanceof Ot) return !1
  return !0
}
function Zu(t) {
  if (t instanceof ge)
    return t.field.canonicalString() + t.op.toString() + zr(t.value)
  if (zy(t)) return t.filters.map((e) => Zu(e)).join(',')
  {
    const e = t.filters.map((n) => Zu(n)).join(',')
    return `${t.op}(${e})`
  }
}
function By(t, e) {
  return t instanceof ge
    ? (function (r, i) {
        return (
          i instanceof ge &&
          r.op === i.op &&
          r.field.isEqual(i.field) &&
          Lt(r.value, i.value)
        )
      })(t, e)
    : t instanceof Ot
    ? (function (r, i) {
        return i instanceof Ot &&
          r.op === i.op &&
          r.filters.length === i.filters.length
          ? r.filters.reduce((s, o, a) => s && By(o, i.filters[a]), !0)
          : !1
      })(t, e)
    : void $()
}
function Hy(t) {
  return t instanceof ge
    ? (function (n) {
        return `${n.field.canonicalString()} ${n.op} ${zr(n.value)}`
      })(t)
    : t instanceof Ot
    ? (function (n) {
        return n.op.toString() + ' {' + n.getFilters().map(Hy).join(' ,') + '}'
      })(t)
    : 'Filter'
}
class cT extends ge {
  constructor(e, n, r) {
    super(e, n, r), (this.key = L.fromName(r.referenceValue))
  }
  matches(e) {
    const n = L.comparator(e.key, this.key)
    return this.matchesComparison(n)
  }
}
class hT extends ge {
  constructor(e, n) {
    super(e, 'in', n), (this.keys = qy('in', n))
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key))
  }
}
class dT extends ge {
  constructor(e, n) {
    super(e, 'not-in', n), (this.keys = qy('not-in', n))
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key))
  }
}
function qy(t, e) {
  var n
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => L.fromName(r.referenceValue))
}
class fT extends ge {
  constructor(e, n) {
    super(e, 'array-contains', n)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return Lh(n) && ds(n.arrayValue, this.value)
  }
}
class pT extends ge {
  constructor(e, n) {
    super(e, 'in', n)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return n !== null && ds(this.value.arrayValue, n)
  }
}
class mT extends ge {
  constructor(e, n) {
    super(e, 'not-in', n)
  }
  matches(e) {
    if (ds(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1
    const n = e.data.field(this.field)
    return n !== null && !ds(this.value.arrayValue, n)
  }
}
class gT extends ge {
  constructor(e, n) {
    super(e, 'array-contains-any', n)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return (
      !(!Lh(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => ds(this.value.arrayValue, r))
    )
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yT {
  constructor(e, n = null, r = [], i = [], s = null, o = null, a = null) {
    ;(this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = a),
      (this.ce = null)
  }
}
function $f(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new yT(t, e, n, r, i, s, o)
}
function Oh(t) {
  const e = K(t)
  if (e.ce === null) {
    let n = e.path.canonicalString()
    e.collectionGroup !== null && (n += '|cg:' + e.collectionGroup),
      (n += '|f:'),
      (n += e.filters.map((r) => Zu(r)).join(',')),
      (n += '|ob:'),
      (n += e.orderBy
        .map((r) =>
          (function (s) {
            return s.field.canonicalString() + s.dir
          })(r)
        )
        .join(',')),
      Fa(e.limit) || ((n += '|l:'), (n += e.limit)),
      e.startAt &&
        ((n += '|lb:'),
        (n += e.startAt.inclusive ? 'b:' : 'a:'),
        (n += e.startAt.position.map((r) => zr(r)).join(','))),
      e.endAt &&
        ((n += '|ub:'),
        (n += e.endAt.inclusive ? 'a:' : 'b:'),
        (n += e.endAt.position.map((r) => zr(r)).join(','))),
      (e.ce = n)
  }
  return e.ce
}
function Mh(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1
  for (let n = 0; n < t.orderBy.length; n++)
    if (!lT(t.orderBy[n], e.orderBy[n])) return !1
  if (t.filters.length !== e.filters.length) return !1
  for (let n = 0; n < t.filters.length; n++)
    if (!By(t.filters[n], e.filters[n])) return !1
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!Ff(t.startAt, e.startAt) &&
    Ff(t.endAt, e.endAt)
  )
}
function ec(t) {
  return (
    L.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ja {
  constructor(
    e,
    n = null,
    r = [],
    i = [],
    s = null,
    o = 'F',
    a = null,
    l = null
  ) {
    ;(this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = a),
      (this.endAt = l),
      (this.le = null),
      (this.he = null),
      (this.Pe = null),
      this.startAt,
      this.endAt
  }
}
function vT(t, e, n, r, i, s, o, a) {
  return new ja(t, e, n, r, i, s, o, a)
}
function Qy(t) {
  return new ja(t)
}
function jf(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  )
}
function _T(t) {
  return t.collectionGroup !== null
}
function Vi(t) {
  const e = K(t)
  if (e.le === null) {
    e.le = []
    const n = new Set()
    for (const s of e.explicitOrderBy)
      e.le.push(s), n.add(s.field.canonicalString())
    const r =
      e.explicitOrderBy.length > 0
        ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
        : 'asc'
    ;(function (o) {
      let a = new ke(Be.comparator)
      return (
        o.filters.forEach((l) => {
          l.getFlattenedFilters().forEach((u) => {
            u.isInequality() && (a = a.add(u.field))
          })
        }),
        a
      )
    })(e).forEach((s) => {
      n.has(s.canonicalString()) || s.isKeyField() || e.le.push(new ta(s, r))
    }),
      n.has(Be.keyField().canonicalString()) ||
        e.le.push(new ta(Be.keyField(), r))
  }
  return e.le
}
function Dt(t) {
  const e = K(t)
  return e.he || (e.he = ET(e, Vi(t))), e.he
}
function ET(t, e) {
  if (t.limitType === 'F')
    return $f(
      t.path,
      t.collectionGroup,
      e,
      t.filters,
      t.limit,
      t.startAt,
      t.endAt
    )
  {
    e = e.map((i) => {
      const s = i.dir === 'desc' ? 'asc' : 'desc'
      return new ta(i.field, s)
    })
    const n = t.endAt ? new ea(t.endAt.position, t.endAt.inclusive) : null,
      r = t.startAt ? new ea(t.startAt.position, t.startAt.inclusive) : null
    return $f(t.path, t.collectionGroup, e, t.filters, t.limit, n, r)
  }
}
function tc(t, e, n) {
  return new ja(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt
  )
}
function Ua(t, e) {
  return Mh(Dt(t), Dt(e)) && t.limitType === e.limitType
}
function Ky(t) {
  return `${Oh(Dt(t))}|lt:${t.limitType}`
}
function nr(t) {
  return `Query(target=${(function (n) {
    let r = n.path.canonicalString()
    return (
      n.collectionGroup !== null &&
        (r += ' collectionGroup=' + n.collectionGroup),
      n.filters.length > 0 &&
        (r += `, filters: [${n.filters.map((i) => Hy(i)).join(', ')}]`),
      Fa(n.limit) || (r += ', limit: ' + n.limit),
      n.orderBy.length > 0 &&
        (r += `, orderBy: [${n.orderBy
          .map((i) =>
            (function (o) {
              return `${o.field.canonicalString()} (${o.dir})`
            })(i)
          )
          .join(', ')}]`),
      n.startAt &&
        ((r += ', startAt: '),
        (r += n.startAt.inclusive ? 'b:' : 'a:'),
        (r += n.startAt.position.map((i) => zr(i)).join(','))),
      n.endAt &&
        ((r += ', endAt: '),
        (r += n.endAt.inclusive ? 'a:' : 'b:'),
        (r += n.endAt.position.map((i) => zr(i)).join(','))),
      `Target(${r})`
    )
  })(Dt(t))}; limitType=${t.limitType})`
}
function za(t, e) {
  return (
    e.isFoundDocument() &&
    (function (r, i) {
      const s = i.key.path
      return r.collectionGroup !== null
        ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s)
        : L.isDocumentKey(r.path)
        ? r.path.isEqual(s)
        : r.path.isImmediateParentOf(s)
    })(t, e) &&
    (function (r, i) {
      for (const s of Vi(r))
        if (!s.field.isKeyField() && i.data.field(s.field) === null) return !1
      return !0
    })(t, e) &&
    (function (r, i) {
      for (const s of r.filters) if (!s.matches(i)) return !1
      return !0
    })(t, e) &&
    (function (r, i) {
      return !(
        (r.startAt &&
          !(function (o, a, l) {
            const u = Mf(o, a, l)
            return o.inclusive ? u <= 0 : u < 0
          })(r.startAt, Vi(r), i)) ||
        (r.endAt &&
          !(function (o, a, l) {
            const u = Mf(o, a, l)
            return o.inclusive ? u >= 0 : u > 0
          })(r.endAt, Vi(r), i))
      )
    })(t, e)
  )
}
function wT(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  )
}
function Wy(t) {
  return (e, n) => {
    let r = !1
    for (const i of Vi(t)) {
      const s = TT(i, e, n)
      if (s !== 0) return s
      r = r || i.field.isKeyField()
    }
    return 0
  }
}
function TT(t, e, n) {
  const r = t.field.isKeyField()
    ? L.comparator(e.key, n.key)
    : (function (s, o, a) {
        const l = o.data.field(s),
          u = a.data.field(s)
        return l !== null && u !== null ? Ur(l, u) : $()
      })(t.field, e, n)
  switch (t.dir) {
    case 'asc':
      return r
    case 'desc':
      return -1 * r
    default:
      return $()
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xr {
  constructor(e, n) {
    ;(this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0)
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n]
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, e)) return s
    }
  }
  has(e) {
    return this.get(e) !== void 0
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r]
    if (i === void 0) return (this.inner[r] = [[e, n]]), void this.innerSize++
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], e)) return void (i[s] = [e, n])
    i.push([e, n]), this.innerSize++
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n]
    if (r === void 0) return !1
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(i, 1),
          this.innerSize--,
          !0
        )
    return !1
  }
  forEach(e) {
    $a(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s)
    })
  }
  isEmpty() {
    return iT(this.inner)
  }
  size() {
    return this.innerSize
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ST = new ce(L.comparator)
function _n() {
  return ST
}
const Gy = new ce(L.comparator)
function _i(...t) {
  let e = Gy
  for (const n of t) e = e.insert(n.key, n)
  return e
}
function IT(t) {
  let e = Gy
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e
}
function Fn() {
  return Li()
}
function by() {
  return Li()
}
function Li() {
  return new Xr(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  )
}
const AT = new ke(L.comparator)
function q(...t) {
  let e = AT
  for (const n of t) e = e.add(n)
  return e
}
const CT = new ke(W)
function RT() {
  return CT
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function PT(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return { doubleValue: 'NaN' }
    if (e === 1 / 0) return { doubleValue: 'Infinity' }
    if (e === -1 / 0) return { doubleValue: '-Infinity' }
  }
  return { doubleValue: Yu(e) ? '-0' : e }
}
function kT(t) {
  return { integerValue: '' + t }
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ba {
  constructor() {
    this._ = void 0
  }
}
function xT(t, e, n) {
  return t instanceof nc
    ? (function (i, s) {
        const o = {
          fields: {
            __type__: { stringValue: 'server_timestamp' },
            __local_write_time__: {
              timestampValue: { seconds: i.seconds, nanos: i.nanoseconds },
            },
          },
        }
        return (
          s && Dh(s) && (s = Vh(s)),
          s && (o.fields.__previous_value__ = s),
          { mapValue: o }
        )
      })(n, e)
    : t instanceof na
    ? Yy(t, e)
    : t instanceof ra
    ? Xy(t, e)
    : (function (i, s) {
        const o = DT(i, s),
          a = Uf(o) + Uf(i.Ie)
        return Ju(o) && Ju(i.Ie) ? kT(a) : PT(i.serializer, a)
      })(t, e)
}
function NT(t, e, n) {
  return t instanceof na ? Yy(t, e) : t instanceof ra ? Xy(t, e) : n
}
function DT(t, e) {
  return t instanceof rc
    ? (function (r) {
        return (
          Ju(r) ||
          (function (s) {
            return !!s && 'doubleValue' in s
          })(r)
        )
      })(e)
      ? e
      : { integerValue: 0 }
    : null
}
class nc extends Ba {}
class na extends Ba {
  constructor(e) {
    super(), (this.elements = e)
  }
}
function Yy(t, e) {
  const n = Jy(e)
  for (const r of t.elements) n.some((i) => Lt(i, r)) || n.push(r)
  return { arrayValue: { values: n } }
}
class ra extends Ba {
  constructor(e) {
    super(), (this.elements = e)
  }
}
function Xy(t, e) {
  let n = Jy(e)
  for (const r of t.elements) n = n.filter((i) => !Lt(i, r))
  return { arrayValue: { values: n } }
}
class rc extends Ba {
  constructor(e, n) {
    super(), (this.serializer = e), (this.Ie = n)
  }
}
function Uf(t) {
  return de(t.integerValue || t.doubleValue)
}
function Jy(t) {
  return Lh(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
}
function VT(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (r, i) {
      return (r instanceof na && i instanceof na) ||
        (r instanceof ra && i instanceof ra)
        ? jr(r.elements, i.elements, Lt)
        : r instanceof rc && i instanceof rc
        ? Lt(r.Ie, i.Ie)
        : r instanceof nc && i instanceof nc
    })(t.transform, e.transform)
  )
}
class zn {
  constructor(e, n) {
    ;(this.updateTime = e), (this.exists = n)
  }
  static none() {
    return new zn()
  }
  static exists(e) {
    return new zn(void 0, e)
  }
  static updateTime(e) {
    return new zn(e)
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    )
  }
}
function yo(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument()
}
class Fh {}
function Zy(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null
  if (e === null)
    return t.isNoDocument()
      ? new OT(t.key, zn.none())
      : new $h(t.key, t.data, zn.none())
  {
    const n = t.data,
      r = Rt.empty()
    let i = new ke(Be.comparator)
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s)
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s))
      }
    return new Ha(t.key, r, new tn(i.toArray()), zn.none())
  }
}
function LT(t, e, n) {
  t instanceof $h
    ? (function (i, s, o) {
        const a = i.value.clone(),
          l = Bf(i.fieldTransforms, s, o.transformResults)
        a.setAll(l),
          s.convertToFoundDocument(o.version, a).setHasCommittedMutations()
      })(t, e, n)
    : t instanceof Ha
    ? (function (i, s, o) {
        if (!yo(i.precondition, s))
          return void s.convertToUnknownDocument(o.version)
        const a = Bf(i.fieldTransforms, s, o.transformResults),
          l = s.data
        l.setAll(ev(i)),
          l.setAll(a),
          s.convertToFoundDocument(o.version, l).setHasCommittedMutations()
      })(t, e, n)
    : (function (i, s, o) {
        s.convertToNoDocument(o.version).setHasCommittedMutations()
      })(0, e, n)
}
function Oi(t, e, n, r) {
  return t instanceof $h
    ? (function (s, o, a, l) {
        if (!yo(s.precondition, o)) return a
        const u = s.value.clone(),
          c = Hf(s.fieldTransforms, l, o)
        return (
          u.setAll(c),
          o.convertToFoundDocument(o.version, u).setHasLocalMutations(),
          null
        )
      })(t, e, n, r)
    : t instanceof Ha
    ? (function (s, o, a, l) {
        if (!yo(s.precondition, o)) return a
        const u = Hf(s.fieldTransforms, l, o),
          c = o.data
        return (
          c.setAll(ev(s)),
          c.setAll(u),
          o.convertToFoundDocument(o.version, c).setHasLocalMutations(),
          a === null
            ? null
            : a
                .unionWith(s.fieldMask.fields)
                .unionWith(s.fieldTransforms.map((h) => h.field))
        )
      })(t, e, n, r)
    : (function (s, o, a) {
        return yo(s.precondition, o)
          ? (o.convertToNoDocument(o.version).setHasLocalMutations(), null)
          : a
      })(t, e, n)
}
function zf(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (r, i) {
      return (
        (r === void 0 && i === void 0) ||
        (!(!r || !i) && jr(r, i, (s, o) => VT(s, o)))
      )
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  )
}
class $h extends Fh {
  constructor(e, n, r, i = []) {
    super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0)
  }
  getFieldMask() {
    return null
  }
}
class Ha extends Fh {
  constructor(e, n, r, i, s = []) {
    super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 1)
  }
  getFieldMask() {
    return this.fieldMask
  }
}
function ev(t) {
  const e = new Map()
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n)
        e.set(n, r)
      }
    }),
    e
  )
}
function Bf(t, e, n) {
  const r = new Map()
  pe(t.length === n.length)
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      a = e.data.field(s.field)
    r.set(s.field, NT(o, a, n[i]))
  }
  return r
}
function Hf(t, e, n) {
  const r = new Map()
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field)
    r.set(i.field, xT(s, o, e))
  }
  return r
}
class OT extends Fh {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = [])
  }
  getFieldMask() {
    return null
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MT {
  constructor(e, n, r, i) {
    ;(this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = i)
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i]
      s.key.isEqual(e.key) && LT(s, e, r[i])
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = Oi(r, e, n, this.localWriteTime))
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = Oi(r, e, n, this.localWriteTime))
    return n
  }
  applyToLocalDocumentSet(e, n) {
    const r = by()
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument
        let a = this.applyToLocalView(o, s.mutatedFields)
        a = n.has(i.key) ? null : a
        const l = Zy(o, a)
        l !== null && r.set(i.key, l),
          o.isValidDocument() || o.convertToNoDocument(M.min())
      }),
      r
    )
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), q())
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      jr(this.mutations, e.mutations, (n, r) => zf(n, r)) &&
      jr(this.baseMutations, e.baseMutations, (n, r) => zf(n, r))
    )
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FT {
  constructor(e, n) {
    ;(this.largestBatchId = e), (this.mutation = n)
  }
  getKey() {
    return this.mutation.key
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $T {
  constructor(e, n) {
    ;(this.count = e), (this.unchangedNames = n)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var he, B
function tv(t) {
  if (t === void 0) return Vt('GRPC error has no .code'), T.UNKNOWN
  switch (t) {
    case he.OK:
      return T.OK
    case he.CANCELLED:
      return T.CANCELLED
    case he.UNKNOWN:
      return T.UNKNOWN
    case he.DEADLINE_EXCEEDED:
      return T.DEADLINE_EXCEEDED
    case he.RESOURCE_EXHAUSTED:
      return T.RESOURCE_EXHAUSTED
    case he.INTERNAL:
      return T.INTERNAL
    case he.UNAVAILABLE:
      return T.UNAVAILABLE
    case he.UNAUTHENTICATED:
      return T.UNAUTHENTICATED
    case he.INVALID_ARGUMENT:
      return T.INVALID_ARGUMENT
    case he.NOT_FOUND:
      return T.NOT_FOUND
    case he.ALREADY_EXISTS:
      return T.ALREADY_EXISTS
    case he.PERMISSION_DENIED:
      return T.PERMISSION_DENIED
    case he.FAILED_PRECONDITION:
      return T.FAILED_PRECONDITION
    case he.ABORTED:
      return T.ABORTED
    case he.OUT_OF_RANGE:
      return T.OUT_OF_RANGE
    case he.UNIMPLEMENTED:
      return T.UNIMPLEMENTED
    case he.DATA_LOSS:
      return T.DATA_LOSS
    default:
      return $()
  }
}
;((B = he || (he = {}))[(B.OK = 0)] = 'OK'),
  (B[(B.CANCELLED = 1)] = 'CANCELLED'),
  (B[(B.UNKNOWN = 2)] = 'UNKNOWN'),
  (B[(B.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (B[(B.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (B[(B.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (B[(B.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (B[(B.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (B[(B.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (B[(B.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (B[(B.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (B[(B.ABORTED = 10)] = 'ABORTED'),
  (B[(B.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (B[(B.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (B[(B.INTERNAL = 13)] = 'INTERNAL'),
  (B[(B.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (B[(B.DATA_LOSS = 15)] = 'DATA_LOSS')
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jT() {
  return new TextEncoder()
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const UT = new Cr([4294967295, 4294967295], 0)
function qf(t) {
  const e = jT().encode(t),
    n = new Uw()
  return n.update(e), new Uint8Array(n.digest())
}
function Qf(t) {
  const e = new DataView(t.buffer),
    n = e.getUint32(0, !0),
    r = e.getUint32(4, !0),
    i = e.getUint32(8, !0),
    s = e.getUint32(12, !0)
  return [new Cr([n, r], 0), new Cr([i, s], 0)]
}
class jh {
  constructor(e, n, r) {
    if (
      ((this.bitmap = e),
      (this.padding = n),
      (this.hashCount = r),
      n < 0 || n >= 8)
    )
      throw new Ei(`Invalid padding: ${n}`)
    if (r < 0) throw new Ei(`Invalid hash count: ${r}`)
    if (e.length > 0 && this.hashCount === 0)
      throw new Ei(`Invalid hash count: ${r}`)
    if (e.length === 0 && n !== 0)
      throw new Ei(`Invalid padding when bitmap length is 0: ${n}`)
    ;(this.Te = 8 * e.length - n), (this.Ee = Cr.fromNumber(this.Te))
  }
  de(e, n, r) {
    let i = e.add(n.multiply(Cr.fromNumber(r)))
    return (
      i.compare(UT) === 1 && (i = new Cr([i.getBits(0), i.getBits(1)], 0)),
      i.modulo(this.Ee).toNumber()
    )
  }
  Ae(e) {
    return (this.bitmap[Math.floor(e / 8)] & (1 << e % 8)) != 0
  }
  mightContain(e) {
    if (this.Te === 0) return !1
    const n = qf(e),
      [r, i] = Qf(n)
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.de(r, i, s)
      if (!this.Ae(o)) return !1
    }
    return !0
  }
  static create(e, n, r) {
    const i = e % 8 == 0 ? 0 : 8 - (e % 8),
      s = new Uint8Array(Math.ceil(e / 8)),
      o = new jh(s, i, n)
    return r.forEach((a) => o.insert(a)), o
  }
  insert(e) {
    if (this.Te === 0) return
    const n = qf(e),
      [r, i] = Qf(n)
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.de(r, i, s)
      this.Re(o)
    }
  }
  Re(e) {
    const n = Math.floor(e / 8),
      r = e % 8
    this.bitmap[n] |= 1 << r
  }
}
class Ei extends Error {
  constructor() {
    super(...arguments), (this.name = 'BloomFilterError')
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qa {
  constructor(e, n, r, i, s) {
    ;(this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = i),
      (this.resolvedLimboDocuments = s)
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const i = new Map()
    return (
      i.set(e, Rs.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new qa(M.min(), i, new ce(W), _n(), q())
    )
  }
}
class Rs {
  constructor(e, n, r, i, s) {
    ;(this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s)
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new Rs(r, n, q(), q(), q())
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vo {
  constructor(e, n, r, i) {
    ;(this.Ve = e), (this.removedTargetIds = n), (this.key = r), (this.me = i)
  }
}
class nv {
  constructor(e, n) {
    ;(this.targetId = e), (this.fe = n)
  }
}
class rv {
  constructor(e, n, r = Ue.EMPTY_BYTE_STRING, i = null) {
    ;(this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i)
  }
}
class Kf {
  constructor() {
    ;(this.ge = 0),
      (this.pe = Gf()),
      (this.ye = Ue.EMPTY_BYTE_STRING),
      (this.we = !1),
      (this.Se = !0)
  }
  get current() {
    return this.we
  }
  get resumeToken() {
    return this.ye
  }
  get be() {
    return this.ge !== 0
  }
  get De() {
    return this.Se
  }
  Ce(e) {
    e.approximateByteSize() > 0 && ((this.Se = !0), (this.ye = e))
  }
  ve() {
    let e = q(),
      n = q(),
      r = q()
    return (
      this.pe.forEach((i, s) => {
        switch (s) {
          case 0:
            e = e.add(i)
            break
          case 2:
            n = n.add(i)
            break
          case 1:
            r = r.add(i)
            break
          default:
            $()
        }
      }),
      new Rs(this.ye, this.we, e, n, r)
    )
  }
  Fe() {
    ;(this.Se = !1), (this.pe = Gf())
  }
  Me(e, n) {
    ;(this.Se = !0), (this.pe = this.pe.insert(e, n))
  }
  xe(e) {
    ;(this.Se = !0), (this.pe = this.pe.remove(e))
  }
  Oe() {
    this.ge += 1
  }
  Ne() {
    ;(this.ge -= 1), pe(this.ge >= 0)
  }
  Be() {
    ;(this.Se = !0), (this.we = !0)
  }
}
class zT {
  constructor(e) {
    ;(this.Le = e),
      (this.ke = new Map()),
      (this.qe = _n()),
      (this.Qe = Wf()),
      (this.Ke = new ce(W))
  }
  $e(e) {
    for (const n of e.Ve)
      e.me && e.me.isFoundDocument()
        ? this.Ue(n, e.me)
        : this.We(n, e.key, e.me)
    for (const n of e.removedTargetIds) this.We(n, e.key, e.me)
  }
  Ge(e) {
    this.forEachTarget(e, (n) => {
      const r = this.ze(n)
      switch (e.state) {
        case 0:
          this.je(n) && r.Ce(e.resumeToken)
          break
        case 1:
          r.Ne(), r.be || r.Fe(), r.Ce(e.resumeToken)
          break
        case 2:
          r.Ne(), r.be || this.removeTarget(n)
          break
        case 3:
          this.je(n) && (r.Be(), r.Ce(e.resumeToken))
          break
        case 4:
          this.je(n) && (this.He(n), r.Ce(e.resumeToken))
          break
        default:
          $()
      }
    })
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.ke.forEach((r, i) => {
          this.je(i) && n(i)
        })
  }
  Je(e) {
    const n = e.targetId,
      r = e.fe.count,
      i = this.Ye(n)
    if (i) {
      const s = i.target
      if (ec(s))
        if (r === 0) {
          const o = new L(s.path)
          this.We(n, o, Me.newNoDocument(o, M.min()))
        } else pe(r === 1)
      else {
        const o = this.Ze(n)
        if (o !== r) {
          const a = this.Xe(e),
            l = a ? this.et(a, e, o) : 1
          if (l !== 0) {
            this.He(n)
            const u =
              l === 2
                ? 'TargetPurposeExistenceFilterMismatchBloom'
                : 'TargetPurposeExistenceFilterMismatch'
            this.Ke = this.Ke.insert(n, u)
          }
        }
      }
    }
  }
  Xe(e) {
    const n = e.fe.unchangedNames
    if (!n || !n.bits) return null
    const {
      bits: { bitmap: r = '', padding: i = 0 },
      hashCount: s = 0,
    } = n
    let o, a
    try {
      o = bn(r).toUint8Array()
    } catch (l) {
      if (l instanceof $y)
        return (
          $r(
            'Decoding the base64 bloom filter in existence filter failed (' +
              l.message +
              '); ignoring the bloom filter and falling back to full re-query.'
          ),
          null
        )
      throw l
    }
    try {
      a = new jh(o, i, s)
    } catch (l) {
      return (
        $r(
          l instanceof Ei
            ? 'BloomFilter error: '
            : 'Applying bloom filter failed: ',
          l
        ),
        null
      )
    }
    return a.Te === 0 ? null : a
  }
  et(e, n, r) {
    return n.fe.count === r - this.rt(e, n.targetId) ? 0 : 2
  }
  rt(e, n) {
    const r = this.Le.getRemoteKeysForTarget(n)
    let i = 0
    return (
      r.forEach((s) => {
        const o = this.Le.nt(),
          a = `projects/${o.projectId}/databases/${
            o.database
          }/documents/${s.path.canonicalString()}`
        e.mightContain(a) || (this.We(n, s, null), i++)
      }),
      i
    )
  }
  it(e) {
    const n = new Map()
    this.ke.forEach((s, o) => {
      const a = this.Ye(o)
      if (a) {
        if (s.current && ec(a.target)) {
          const l = new L(a.target.path)
          this.qe.get(l) !== null ||
            this.st(o, l) ||
            this.We(o, l, Me.newNoDocument(l, e))
        }
        s.De && (n.set(o, s.ve()), s.Fe())
      }
    })
    let r = q()
    this.Qe.forEach((s, o) => {
      let a = !0
      o.forEachWhile((l) => {
        const u = this.Ye(l)
        return (
          !u || u.purpose === 'TargetPurposeLimboResolution' || ((a = !1), !1)
        )
      }),
        a && (r = r.add(s))
    }),
      this.qe.forEach((s, o) => o.setReadTime(e))
    const i = new qa(e, n, this.Ke, this.qe, r)
    return (this.qe = _n()), (this.Qe = Wf()), (this.Ke = new ce(W)), i
  }
  Ue(e, n) {
    if (!this.je(e)) return
    const r = this.st(e, n.key) ? 2 : 0
    this.ze(e).Me(n.key, r),
      (this.qe = this.qe.insert(n.key, n)),
      (this.Qe = this.Qe.insert(n.key, this.ot(n.key).add(e)))
  }
  We(e, n, r) {
    if (!this.je(e)) return
    const i = this.ze(e)
    this.st(e, n) ? i.Me(n, 1) : i.xe(n),
      (this.Qe = this.Qe.insert(n, this.ot(n).delete(e))),
      r && (this.qe = this.qe.insert(n, r))
  }
  removeTarget(e) {
    this.ke.delete(e)
  }
  Ze(e) {
    const n = this.ze(e).ve()
    return (
      this.Le.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    )
  }
  Oe(e) {
    this.ze(e).Oe()
  }
  ze(e) {
    let n = this.ke.get(e)
    return n || ((n = new Kf()), this.ke.set(e, n)), n
  }
  ot(e) {
    let n = this.Qe.get(e)
    return n || ((n = new ke(W)), (this.Qe = this.Qe.insert(e, n))), n
  }
  je(e) {
    const n = this.Ye(e) !== null
    return n || I('WatchChangeAggregator', 'Detected inactive target', e), n
  }
  Ye(e) {
    const n = this.ke.get(e)
    return n && n.be ? null : this.Le._t(e)
  }
  He(e) {
    this.ke.set(e, new Kf()),
      this.Le.getRemoteKeysForTarget(e).forEach((n) => {
        this.We(e, n, null)
      })
  }
  st(e, n) {
    return this.Le.getRemoteKeysForTarget(e).has(n)
  }
}
function Wf() {
  return new ce(L.comparator)
}
function Gf() {
  return new ce(L.comparator)
}
const BT = (() => ({ asc: 'ASCENDING', desc: 'DESCENDING' }))(),
  HT = (() => ({
    '<': 'LESS_THAN',
    '<=': 'LESS_THAN_OR_EQUAL',
    '>': 'GREATER_THAN',
    '>=': 'GREATER_THAN_OR_EQUAL',
    '==': 'EQUAL',
    '!=': 'NOT_EQUAL',
    'array-contains': 'ARRAY_CONTAINS',
    in: 'IN',
    'not-in': 'NOT_IN',
    'array-contains-any': 'ARRAY_CONTAINS_ANY',
  }))(),
  qT = (() => ({ and: 'AND', or: 'OR' }))()
class QT {
  constructor(e, n) {
    ;(this.databaseId = e), (this.useProto3Json = n)
  }
}
function ic(t, e) {
  return t.useProto3Json || Fa(e) ? e : { value: e }
}
function KT(t, e) {
  return t.useProto3Json
    ? `${new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, '')
        .replace('Z', '')}.${('000000000' + e.nanoseconds).slice(-9)}Z`
    : { seconds: '' + e.seconds, nanos: e.nanoseconds }
}
function WT(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array()
}
function Rr(t) {
  return (
    pe(!!t),
    M.fromTimestamp(
      (function (n) {
        const r = vn(n)
        return new Je(r.seconds, r.nanos)
      })(t)
    )
  )
}
function GT(t, e) {
  return sc(t, e).canonicalString()
}
function sc(t, e) {
  const n = (function (i) {
    return new oe(['projects', i.projectId, 'databases', i.database])
  })(t).child('documents')
  return e === void 0 ? n : n.child(e)
}
function iv(t) {
  const e = oe.fromString(t)
  return pe(uv(e)), e
}
function Ol(t, e) {
  const n = iv(e)
  if (n.get(1) !== t.databaseId.projectId)
    throw new V(
      T.INVALID_ARGUMENT,
      'Tried to deserialize key from different project: ' +
        n.get(1) +
        ' vs ' +
        t.databaseId.projectId
    )
  if (n.get(3) !== t.databaseId.database)
    throw new V(
      T.INVALID_ARGUMENT,
      'Tried to deserialize key from different database: ' +
        n.get(3) +
        ' vs ' +
        t.databaseId.database
    )
  return new L(ov(n))
}
function sv(t, e) {
  return GT(t.databaseId, e)
}
function bT(t) {
  const e = iv(t)
  return e.length === 4 ? oe.emptyPath() : ov(e)
}
function bf(t) {
  return new oe([
    'projects',
    t.databaseId.projectId,
    'databases',
    t.databaseId.database,
  ]).canonicalString()
}
function ov(t) {
  return pe(t.length > 4 && t.get(4) === 'documents'), t.popFirst(5)
}
function YT(t, e) {
  let n
  if ('targetChange' in e) {
    e.targetChange
    const r = (function (u) {
        return u === 'NO_CHANGE'
          ? 0
          : u === 'ADD'
          ? 1
          : u === 'REMOVE'
          ? 2
          : u === 'CURRENT'
          ? 3
          : u === 'RESET'
          ? 4
          : $()
      })(e.targetChange.targetChangeType || 'NO_CHANGE'),
      i = e.targetChange.targetIds || [],
      s = (function (u, c) {
        return u.useProto3Json
          ? (pe(c === void 0 || typeof c == 'string'),
            Ue.fromBase64String(c || ''))
          : (pe(c === void 0 || c instanceof Uint8Array),
            Ue.fromUint8Array(c || new Uint8Array()))
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      a =
        o &&
        (function (u) {
          const c = u.code === void 0 ? T.UNKNOWN : tv(u.code)
          return new V(c, u.message || '')
        })(o)
    n = new rv(r, i, s, a || null)
  } else if ('documentChange' in e) {
    e.documentChange
    const r = e.documentChange
    r.document, r.document.name, r.document.updateTime
    const i = Ol(t, r.document.name),
      s = Rr(r.document.updateTime),
      o = r.document.createTime ? Rr(r.document.createTime) : M.min(),
      a = new Rt({ mapValue: { fields: r.document.fields } }),
      l = Me.newFoundDocument(i, s, o, a),
      u = r.targetIds || [],
      c = r.removedTargetIds || []
    n = new vo(u, c, l.key, l)
  } else if ('documentDelete' in e) {
    e.documentDelete
    const r = e.documentDelete
    r.document
    const i = Ol(t, r.document),
      s = r.readTime ? Rr(r.readTime) : M.min(),
      o = Me.newNoDocument(i, s),
      a = r.removedTargetIds || []
    n = new vo([], a, o.key, o)
  } else if ('documentRemove' in e) {
    e.documentRemove
    const r = e.documentRemove
    r.document
    const i = Ol(t, r.document),
      s = r.removedTargetIds || []
    n = new vo([], s, i, null)
  } else {
    if (!('filter' in e)) return $()
    {
      e.filter
      const r = e.filter
      r.targetId
      const { count: i = 0, unchangedNames: s } = r,
        o = new $T(i, s),
        a = r.targetId
      n = new nv(a, o)
    }
  }
  return n
}
function XT(t, e) {
  return { documents: [sv(t, e.path)] }
}
function JT(t, e) {
  const n = { structuredQuery: {} },
    r = e.path
  let i
  e.collectionGroup !== null
    ? ((i = r),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((i = r.popLast()),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (n.parent = sv(t, i))
  const s = (function (u) {
    if (u.length !== 0) return lv(Ot.create(u, 'and'))
  })(e.filters)
  s && (n.structuredQuery.where = s)
  const o = (function (u) {
    if (u.length !== 0)
      return u.map((c) =>
        (function (f) {
          return { field: rr(f.field), direction: tS(f.dir) }
        })(c)
      )
  })(e.orderBy)
  o && (n.structuredQuery.orderBy = o)
  const a = ic(t, e.limit)
  return (
    a !== null && (n.structuredQuery.limit = a),
    e.startAt &&
      (n.structuredQuery.startAt = (function (u) {
        return { before: u.inclusive, values: u.position }
      })(e.startAt)),
    e.endAt &&
      (n.structuredQuery.endAt = (function (u) {
        return { before: !u.inclusive, values: u.position }
      })(e.endAt)),
    { ut: n, parent: i }
  )
}
function ZT(t) {
  let e = bT(t.parent)
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0
  let i = null
  if (r > 0) {
    pe(r === 1)
    const c = n.from[0]
    c.allDescendants ? (i = c.collectionId) : (e = e.child(c.collectionId))
  }
  let s = []
  n.where &&
    (s = (function (h) {
      const f = av(h)
      return f instanceof Ot && zy(f) ? f.getFilters() : [f]
    })(n.where))
  let o = []
  n.orderBy &&
    (o = (function (h) {
      return h.map((f) =>
        (function (_) {
          return new ta(
            ir(_.field),
            (function (N) {
              switch (N) {
                case 'ASCENDING':
                  return 'asc'
                case 'DESCENDING':
                  return 'desc'
                default:
                  return
              }
            })(_.direction)
          )
        })(f)
      )
    })(n.orderBy))
  let a = null
  n.limit &&
    (a = (function (h) {
      let f
      return (f = typeof h == 'object' ? h.value : h), Fa(f) ? null : f
    })(n.limit))
  let l = null
  n.startAt &&
    (l = (function (h) {
      const f = !!h.before,
        g = h.values || []
      return new ea(g, f)
    })(n.startAt))
  let u = null
  return (
    n.endAt &&
      (u = (function (h) {
        const f = !h.before,
          g = h.values || []
        return new ea(g, f)
      })(n.endAt)),
    vT(e, i, o, s, a, 'F', l, u)
  )
}
function eS(t, e) {
  const n = (function (i) {
    switch (i) {
      case 'TargetPurposeListen':
        return null
      case 'TargetPurposeExistenceFilterMismatch':
        return 'existence-filter-mismatch'
      case 'TargetPurposeExistenceFilterMismatchBloom':
        return 'existence-filter-mismatch-bloom'
      case 'TargetPurposeLimboResolution':
        return 'limbo-document'
      default:
        return $()
    }
  })(e.purpose)
  return n == null ? null : { 'goog-listen-tags': n }
}
function av(t) {
  return t.unaryFilter !== void 0
    ? (function (n) {
        switch (n.unaryFilter.op) {
          case 'IS_NAN':
            const r = ir(n.unaryFilter.field)
            return ge.create(r, '==', { doubleValue: NaN })
          case 'IS_NULL':
            const i = ir(n.unaryFilter.field)
            return ge.create(i, '==', { nullValue: 'NULL_VALUE' })
          case 'IS_NOT_NAN':
            const s = ir(n.unaryFilter.field)
            return ge.create(s, '!=', { doubleValue: NaN })
          case 'IS_NOT_NULL':
            const o = ir(n.unaryFilter.field)
            return ge.create(o, '!=', { nullValue: 'NULL_VALUE' })
          default:
            return $()
        }
      })(t)
    : t.fieldFilter !== void 0
    ? (function (n) {
        return ge.create(
          ir(n.fieldFilter.field),
          (function (i) {
            switch (i) {
              case 'EQUAL':
                return '=='
              case 'NOT_EQUAL':
                return '!='
              case 'GREATER_THAN':
                return '>'
              case 'GREATER_THAN_OR_EQUAL':
                return '>='
              case 'LESS_THAN':
                return '<'
              case 'LESS_THAN_OR_EQUAL':
                return '<='
              case 'ARRAY_CONTAINS':
                return 'array-contains'
              case 'IN':
                return 'in'
              case 'NOT_IN':
                return 'not-in'
              case 'ARRAY_CONTAINS_ANY':
                return 'array-contains-any'
              default:
                return $()
            }
          })(n.fieldFilter.op),
          n.fieldFilter.value
        )
      })(t)
    : t.compositeFilter !== void 0
    ? (function (n) {
        return Ot.create(
          n.compositeFilter.filters.map((r) => av(r)),
          (function (i) {
            switch (i) {
              case 'AND':
                return 'and'
              case 'OR':
                return 'or'
              default:
                return $()
            }
          })(n.compositeFilter.op)
        )
      })(t)
    : $()
}
function tS(t) {
  return BT[t]
}
function nS(t) {
  return HT[t]
}
function rS(t) {
  return qT[t]
}
function rr(t) {
  return { fieldPath: t.canonicalString() }
}
function ir(t) {
  return Be.fromServerFormat(t.fieldPath)
}
function lv(t) {
  return t instanceof ge
    ? (function (n) {
        if (n.op === '==') {
          if (Of(n.value))
            return { unaryFilter: { field: rr(n.field), op: 'IS_NAN' } }
          if (Lf(n.value))
            return { unaryFilter: { field: rr(n.field), op: 'IS_NULL' } }
        } else if (n.op === '!=') {
          if (Of(n.value))
            return { unaryFilter: { field: rr(n.field), op: 'IS_NOT_NAN' } }
          if (Lf(n.value))
            return { unaryFilter: { field: rr(n.field), op: 'IS_NOT_NULL' } }
        }
        return {
          fieldFilter: { field: rr(n.field), op: nS(n.op), value: n.value },
        }
      })(t)
    : t instanceof Ot
    ? (function (n) {
        const r = n.getFilters().map((i) => lv(i))
        return r.length === 1
          ? r[0]
          : { compositeFilter: { op: rS(n.op), filters: r } }
      })(t)
    : $()
}
function uv(t) {
  return t.length >= 4 && t.get(0) === 'projects' && t.get(2) === 'databases'
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nn {
  constructor(
    e,
    n,
    r,
    i,
    s = M.min(),
    o = M.min(),
    a = Ue.EMPTY_BYTE_STRING,
    l = null
  ) {
    ;(this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a),
      (this.expectedCount = l)
  }
  withSequenceNumber(e) {
    return new nn(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    )
  }
  withResumeToken(e, n) {
    return new nn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e,
      null
    )
  }
  withExpectedCount(e) {
    return new nn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e
    )
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new nn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken,
      this.expectedCount
    )
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iS {
  constructor(e) {
    this.ct = e
  }
}
function sS(t) {
  const e = ZT({ parent: t.parent, structuredQuery: t.structuredQuery })
  return t.limitType === 'LAST' ? tc(e, e.limit, 'L') : e
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oS {
  constructor() {
    this._n = new aS()
  }
  addToCollectionParentIndex(e, n) {
    return this._n.add(n), y.resolve()
  }
  getCollectionParents(e, n) {
    return y.resolve(this._n.getEntries(n))
  }
  addFieldIndex(e, n) {
    return y.resolve()
  }
  deleteFieldIndex(e, n) {
    return y.resolve()
  }
  deleteAllFieldIndexes(e) {
    return y.resolve()
  }
  createTargetIndexes(e, n) {
    return y.resolve()
  }
  getDocumentsMatchingTarget(e, n) {
    return y.resolve(null)
  }
  getIndexType(e, n) {
    return y.resolve(0)
  }
  getFieldIndexes(e, n) {
    return y.resolve([])
  }
  getNextCollectionGroupToUpdate(e) {
    return y.resolve(null)
  }
  getMinOffset(e, n) {
    return y.resolve(yn.min())
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return y.resolve(yn.min())
  }
  updateCollectionGroup(e, n, r) {
    return y.resolve()
  }
  updateIndexEntries(e, n) {
    return y.resolve()
  }
}
class aS {
  constructor() {
    this.index = {}
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new ke(oe.comparator),
      s = !i.has(r)
    return (this.index[n] = i.add(r)), s
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n]
    return i && i.has(r)
  }
  getEntries(e) {
    return (this.index[e] || new ke(oe.comparator)).toArray()
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Br {
  constructor(e) {
    this.On = e
  }
  next() {
    return (this.On += 2), this.On
  }
  static Nn() {
    return new Br(0)
  }
  static Bn() {
    return new Br(-1)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lS {
  constructor() {
    ;(this.changes = new Xr(
      (e) => e.toString(),
      (e, n) => e.isEqual(n)
    )),
      (this.changesApplied = !1)
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e)
  }
  removeEntry(e, n) {
    this.assertNotApplied(),
      this.changes.set(e, Me.newInvalidDocument(e).setReadTime(n))
  }
  getEntry(e, n) {
    this.assertNotApplied()
    const r = this.changes.get(n)
    return r !== void 0 ? y.resolve(r) : this.getFromCache(e, n)
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n)
  }
  apply(e) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e)
    )
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uS {
  constructor(e, n) {
    ;(this.overlayedDocument = e), (this.mutatedFields = n)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cS {
  constructor(e, n, r, i) {
    ;(this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i)
  }
  getDocument(e, n) {
    let r = null
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((i) => ((r = i), this.remoteDocumentCache.getEntry(e, n)))
      .next((i) => (r !== null && Oi(r.mutation, i, tn.empty(), Je.now()), i))
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, q()).next(() => r))
  }
  getLocalViewOfDocuments(e, n, r = q()) {
    const i = Fn()
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = _i()
        return (
          s.forEach((a, l) => {
            o = o.insert(a, l.overlayedDocument)
          }),
          o
        )
      })
    )
  }
  getOverlayedDocuments(e, n) {
    const r = Fn()
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, q())
    )
  }
  populateOverlays(e, n, r) {
    const i = []
    return (
      r.forEach((s) => {
        n.has(s) || i.push(s)
      }),
      this.documentOverlayCache.getOverlays(e, i).next((s) => {
        s.forEach((o, a) => {
          n.set(o, a)
        })
      })
    )
  }
  computeViews(e, n, r, i) {
    let s = _n()
    const o = Li(),
      a = (function () {
        return Li()
      })()
    return (
      n.forEach((l, u) => {
        const c = r.get(u.key)
        i.has(u.key) && (c === void 0 || c.mutation instanceof Ha)
          ? (s = s.insert(u.key, u))
          : c !== void 0
          ? (o.set(u.key, c.mutation.getFieldMask()),
            Oi(c.mutation, u, c.mutation.getFieldMask(), Je.now()))
          : o.set(u.key, tn.empty())
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (l) => (
          l.forEach((u, c) => o.set(u, c)),
          n.forEach((u, c) => {
            var h
            return a.set(
              u,
              new uS(c, (h = o.get(u)) !== null && h !== void 0 ? h : null)
            )
          }),
          a
        )
      )
    )
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Li()
    let i = new ce((o, a) => o - a),
      s = q()
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((l) => {
            const u = n.get(l)
            if (u === null) return
            let c = r.get(l) || tn.empty()
            ;(c = a.applyToLocalView(u, c)), r.set(l, c)
            const h = (i.get(a.batchId) || q()).add(l)
            i = i.insert(a.batchId, h)
          })
      })
      .next(() => {
        const o = [],
          a = i.getReverseIterator()
        for (; a.hasNext(); ) {
          const l = a.getNext(),
            u = l.key,
            c = l.value,
            h = by()
          c.forEach((f) => {
            if (!s.has(f)) {
              const g = Zy(n.get(f), r.get(f))
              g !== null && h.set(f, g), (s = s.add(f))
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, u, h))
        }
        return y.waitFor(o)
      })
      .next(() => r)
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r))
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return (function (o) {
      return (
        L.isDocumentKey(o.path) &&
        o.collectionGroup === null &&
        o.filters.length === 0
      )
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : _T(n)
      ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r, i)
      : this.getDocumentsMatchingCollectionQuery(e, n, r, i)
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, r, i)
      .next((s) => {
        const o =
          i - s.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                r.largestBatchId,
                i - s.size
              )
            : y.resolve(Fn())
        let a = -1,
          l = s
        return o.next((u) =>
          y
            .forEach(
              u,
              (c, h) => (
                a < h.largestBatchId && (a = h.largestBatchId),
                s.get(c)
                  ? y.resolve()
                  : this.remoteDocumentCache.getEntry(e, c).next((f) => {
                      l = l.insert(c, f)
                    })
              )
            )
            .next(() => this.populateOverlays(e, u, s))
            .next(() => this.computeViews(e, l, u, q()))
            .next((c) => ({ batchId: a, changes: IT(c) }))
        )
      })
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new L(n)).next((r) => {
      let i = _i()
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i
    })
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r, i) {
    const s = n.collectionGroup
    let o = _i()
    return this.indexManager.getCollectionParents(e, s).next((a) =>
      y
        .forEach(a, (l) => {
          const u = (function (h, f) {
            return new ja(
              f,
              null,
              h.explicitOrderBy.slice(),
              h.filters.slice(),
              h.limit,
              h.limitType,
              h.startAt,
              h.endAt
            )
          })(n, l.child(s))
          return this.getDocumentsMatchingCollectionQuery(e, u, r, i).next(
            (c) => {
              c.forEach((h, f) => {
                o = o.insert(h, f)
              })
            }
          )
        })
        .next(() => o)
    )
  }
  getDocumentsMatchingCollectionQuery(e, n, r, i) {
    let s
    return this.documentOverlayCache
      .getOverlaysForCollection(e, n.path, r.largestBatchId)
      .next(
        (o) => (
          (s = o),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, s, i)
        )
      )
      .next((o) => {
        s.forEach((l, u) => {
          const c = u.getKey()
          o.get(c) === null && (o = o.insert(c, Me.newInvalidDocument(c)))
        })
        let a = _i()
        return (
          o.forEach((l, u) => {
            const c = s.get(l)
            c !== void 0 && Oi(c.mutation, u, tn.empty(), Je.now()),
              za(n, u) && (a = a.insert(l, u))
          }),
          a
        )
      })
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hS {
  constructor(e) {
    ;(this.serializer = e), (this.cr = new Map()), (this.lr = new Map())
  }
  getBundleMetadata(e, n) {
    return y.resolve(this.cr.get(n))
  }
  saveBundleMetadata(e, n) {
    return (
      this.cr.set(
        n.id,
        (function (i) {
          return { id: i.id, version: i.version, createTime: Rr(i.createTime) }
        })(n)
      ),
      y.resolve()
    )
  }
  getNamedQuery(e, n) {
    return y.resolve(this.lr.get(n))
  }
  saveNamedQuery(e, n) {
    return (
      this.lr.set(
        n.name,
        (function (i) {
          return {
            name: i.name,
            query: sS(i.bundledQuery),
            readTime: Rr(i.readTime),
          }
        })(n)
      ),
      y.resolve()
    )
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dS {
  constructor() {
    ;(this.overlays = new ce(L.comparator)), (this.hr = new Map())
  }
  getOverlay(e, n) {
    return y.resolve(this.overlays.get(n))
  }
  getOverlays(e, n) {
    const r = Fn()
    return y
      .forEach(n, (i) =>
        this.getOverlay(e, i).next((s) => {
          s !== null && r.set(i, s)
        })
      )
      .next(() => r)
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((i, s) => {
        this.ht(e, n, s)
      }),
      y.resolve()
    )
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.hr.get(r)
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.hr.delete(r)),
      y.resolve()
    )
  }
  getOverlaysForCollection(e, n, r) {
    const i = Fn(),
      s = n.length + 1,
      o = new L(n.child('')),
      a = this.overlays.getIteratorFrom(o)
    for (; a.hasNext(); ) {
      const l = a.getNext().value,
        u = l.getKey()
      if (!n.isPrefixOf(u.path)) break
      u.path.length === s && l.largestBatchId > r && i.set(l.getKey(), l)
    }
    return y.resolve(i)
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new ce((u, c) => u - c)
    const o = this.overlays.getIterator()
    for (; o.hasNext(); ) {
      const u = o.getNext().value
      if (u.getKey().getCollectionGroup() === n && u.largestBatchId > r) {
        let c = s.get(u.largestBatchId)
        c === null && ((c = Fn()), (s = s.insert(u.largestBatchId, c))),
          c.set(u.getKey(), u)
      }
    }
    const a = Fn(),
      l = s.getIterator()
    for (
      ;
      l.hasNext() &&
      (l.getNext().value.forEach((u, c) => a.set(u, c)), !(a.size() >= i));

    );
    return y.resolve(a)
  }
  ht(e, n, r) {
    const i = this.overlays.get(r.key)
    if (i !== null) {
      const o = this.hr.get(i.largestBatchId).delete(r.key)
      this.hr.set(i.largestBatchId, o)
    }
    this.overlays = this.overlays.insert(r.key, new FT(n, r))
    let s = this.hr.get(n)
    s === void 0 && ((s = q()), this.hr.set(n, s)), this.hr.set(n, s.add(r.key))
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Uh {
  constructor() {
    ;(this.Pr = new ke(_e.Ir)), (this.Tr = new ke(_e.Er))
  }
  isEmpty() {
    return this.Pr.isEmpty()
  }
  addReference(e, n) {
    const r = new _e(e, n)
    ;(this.Pr = this.Pr.add(r)), (this.Tr = this.Tr.add(r))
  }
  dr(e, n) {
    e.forEach((r) => this.addReference(r, n))
  }
  removeReference(e, n) {
    this.Ar(new _e(e, n))
  }
  Rr(e, n) {
    e.forEach((r) => this.removeReference(r, n))
  }
  Vr(e) {
    const n = new L(new oe([])),
      r = new _e(n, e),
      i = new _e(n, e + 1),
      s = []
    return (
      this.Tr.forEachInRange([r, i], (o) => {
        this.Ar(o), s.push(o.key)
      }),
      s
    )
  }
  mr() {
    this.Pr.forEach((e) => this.Ar(e))
  }
  Ar(e) {
    ;(this.Pr = this.Pr.delete(e)), (this.Tr = this.Tr.delete(e))
  }
  gr(e) {
    const n = new L(new oe([])),
      r = new _e(n, e),
      i = new _e(n, e + 1)
    let s = q()
    return (
      this.Tr.forEachInRange([r, i], (o) => {
        s = s.add(o.key)
      }),
      s
    )
  }
  containsKey(e) {
    const n = new _e(e, 0),
      r = this.Pr.firstAfterOrEqual(n)
    return r !== null && e.isEqual(r.key)
  }
}
class _e {
  constructor(e, n) {
    ;(this.key = e), (this.pr = n)
  }
  static Ir(e, n) {
    return L.comparator(e.key, n.key) || W(e.pr, n.pr)
  }
  static Er(e, n) {
    return W(e.pr, n.pr) || L.comparator(e.key, n.key)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fS {
  constructor(e, n) {
    ;(this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.yr = 1),
      (this.wr = new ke(_e.Ir))
  }
  checkEmpty(e) {
    return y.resolve(this.mutationQueue.length === 0)
  }
  addMutationBatch(e, n, r, i) {
    const s = this.yr
    this.yr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1]
    const o = new MT(s, n, r, i)
    this.mutationQueue.push(o)
    for (const a of i)
      (this.wr = this.wr.add(new _e(a.key, s))),
        this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast())
    return y.resolve(o)
  }
  lookupMutationBatch(e, n) {
    return y.resolve(this.Sr(n))
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.br(r),
      s = i < 0 ? 0 : i
    return y.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null
    )
  }
  getHighestUnacknowledgedBatchId() {
    return y.resolve(this.mutationQueue.length === 0 ? -1 : this.yr - 1)
  }
  getAllMutationBatches(e) {
    return y.resolve(this.mutationQueue.slice())
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new _e(n, 0),
      i = new _e(n, Number.POSITIVE_INFINITY),
      s = []
    return (
      this.wr.forEachInRange([r, i], (o) => {
        const a = this.Sr(o.pr)
        s.push(a)
      }),
      y.resolve(s)
    )
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new ke(W)
    return (
      n.forEach((i) => {
        const s = new _e(i, 0),
          o = new _e(i, Number.POSITIVE_INFINITY)
        this.wr.forEachInRange([s, o], (a) => {
          r = r.add(a.pr)
        })
      }),
      y.resolve(this.Dr(r))
    )
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1
    let s = r
    L.isDocumentKey(s) || (s = s.child(''))
    const o = new _e(new L(s), 0)
    let a = new ke(W)
    return (
      this.wr.forEachWhile((l) => {
        const u = l.key.path
        return !!r.isPrefixOf(u) && (u.length === i && (a = a.add(l.pr)), !0)
      }, o),
      y.resolve(this.Dr(a))
    )
  }
  Dr(e) {
    const n = []
    return (
      e.forEach((r) => {
        const i = this.Sr(r)
        i !== null && n.push(i)
      }),
      n
    )
  }
  removeMutationBatch(e, n) {
    pe(this.Cr(n.batchId, 'removed') === 0), this.mutationQueue.shift()
    let r = this.wr
    return y
      .forEach(n.mutations, (i) => {
        const s = new _e(i.key, n.batchId)
        return (
          (r = r.delete(s)),
          this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
        )
      })
      .next(() => {
        this.wr = r
      })
  }
  Mn(e) {}
  containsKey(e, n) {
    const r = new _e(n, 0),
      i = this.wr.firstAfterOrEqual(r)
    return y.resolve(n.isEqual(i && i.key))
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, y.resolve()
  }
  Cr(e, n) {
    return this.br(e)
  }
  br(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId
  }
  Sr(e) {
    const n = this.br(e)
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n]
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pS {
  constructor(e) {
    ;(this.vr = e),
      (this.docs = (function () {
        return new ce(L.comparator)
      })()),
      (this.size = 0)
  }
  setIndexManager(e) {
    this.indexManager = e
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      s = i ? i.size : 0,
      o = this.vr(n)
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - s),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    )
  }
  removeEntry(e) {
    const n = this.docs.get(e)
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size))
  }
  getEntry(e, n) {
    const r = this.docs.get(n)
    return y.resolve(r ? r.document.mutableCopy() : Me.newInvalidDocument(n))
  }
  getEntries(e, n) {
    let r = _n()
    return (
      n.forEach((i) => {
        const s = this.docs.get(i)
        r = r.insert(i, s ? s.document.mutableCopy() : Me.newInvalidDocument(i))
      }),
      y.resolve(r)
    )
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let s = _n()
    const o = n.path,
      a = new L(o.child('')),
      l = this.docs.getIteratorFrom(a)
    for (; l.hasNext(); ) {
      const {
        key: u,
        value: { document: c },
      } = l.getNext()
      if (!o.isPrefixOf(u.path)) break
      u.path.length > o.length + 1 ||
        Zw(Jw(c), r) <= 0 ||
        ((i.has(c.key) || za(n, c)) && (s = s.insert(c.key, c.mutableCopy())))
    }
    return y.resolve(s)
  }
  getAllFromCollectionGroup(e, n, r, i) {
    $()
  }
  Fr(e, n) {
    return y.forEach(this.docs, (r) => n(r))
  }
  newChangeBuffer(e) {
    return new mS(this)
  }
  getSize(e) {
    return y.resolve(this.size)
  }
}
class mS extends lS {
  constructor(e) {
    super(), (this.ar = e)
  }
  applyChanges(e) {
    const n = []
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? n.push(this.ar.addEntry(e, i))
          : this.ar.removeEntry(r)
      }),
      y.waitFor(n)
    )
  }
  getFromCache(e, n) {
    return this.ar.getEntry(e, n)
  }
  getAllFromCache(e, n) {
    return this.ar.getEntries(e, n)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gS {
  constructor(e) {
    ;(this.persistence = e),
      (this.Mr = new Xr((n) => Oh(n), Mh)),
      (this.lastRemoteSnapshotVersion = M.min()),
      (this.highestTargetId = 0),
      (this.Or = 0),
      (this.Nr = new Uh()),
      (this.targetCount = 0),
      (this.Br = Br.Nn())
  }
  forEachTarget(e, n) {
    return this.Mr.forEach((r, i) => n(i)), y.resolve()
  }
  getLastRemoteSnapshotVersion(e) {
    return y.resolve(this.lastRemoteSnapshotVersion)
  }
  getHighestSequenceNumber(e) {
    return y.resolve(this.Or)
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.Br.next()), y.resolve(this.highestTargetId)
    )
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.Or && (this.Or = n),
      y.resolve()
    )
  }
  qn(e) {
    this.Mr.set(e.target, e)
    const n = e.targetId
    n > this.highestTargetId &&
      ((this.Br = new Br(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.Or && (this.Or = e.sequenceNumber)
  }
  addTargetData(e, n) {
    return this.qn(n), (this.targetCount += 1), y.resolve()
  }
  updateTargetData(e, n) {
    return this.qn(n), y.resolve()
  }
  removeTargetData(e, n) {
    return (
      this.Mr.delete(n.target),
      this.Nr.Vr(n.targetId),
      (this.targetCount -= 1),
      y.resolve()
    )
  }
  removeTargets(e, n, r) {
    let i = 0
    const s = []
    return (
      this.Mr.forEach((o, a) => {
        a.sequenceNumber <= n &&
          r.get(a.targetId) === null &&
          (this.Mr.delete(o),
          s.push(this.removeMatchingKeysForTargetId(e, a.targetId)),
          i++)
      }),
      y.waitFor(s).next(() => i)
    )
  }
  getTargetCount(e) {
    return y.resolve(this.targetCount)
  }
  getTargetData(e, n) {
    const r = this.Mr.get(n) || null
    return y.resolve(r)
  }
  addMatchingKeys(e, n, r) {
    return this.Nr.dr(n, r), y.resolve()
  }
  removeMatchingKeys(e, n, r) {
    this.Nr.Rr(n, r)
    const i = this.persistence.referenceDelegate,
      s = []
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(e, o))
        }),
      y.waitFor(s)
    )
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Nr.Vr(n), y.resolve()
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Nr.gr(n)
    return y.resolve(r)
  }
  containsKey(e, n) {
    return y.resolve(this.Nr.containsKey(n))
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yS {
  constructor(e, n) {
    ;(this.Lr = {}),
      (this.overlays = {}),
      (this.kr = new Nh(0)),
      (this.qr = !1),
      (this.qr = !0),
      (this.referenceDelegate = e(this)),
      (this.Qr = new gS(this)),
      (this.indexManager = new oS()),
      (this.remoteDocumentCache = (function (i) {
        return new pS(i)
      })((r) => this.referenceDelegate.Kr(r))),
      (this.serializer = new iS(n)),
      (this.$r = new hS(this.serializer))
  }
  start() {
    return Promise.resolve()
  }
  shutdown() {
    return (this.qr = !1), Promise.resolve()
  }
  get started() {
    return this.qr
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()]
    return n || ((n = new dS()), (this.overlays[e.toKey()] = n)), n
  }
  getMutationQueue(e, n) {
    let r = this.Lr[e.toKey()]
    return (
      r || ((r = new fS(n, this.referenceDelegate)), (this.Lr[e.toKey()] = r)),
      r
    )
  }
  getTargetCache() {
    return this.Qr
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache
  }
  getBundleCache() {
    return this.$r
  }
  runTransaction(e, n, r) {
    I('MemoryPersistence', 'Starting transaction:', e)
    const i = new vS(this.kr.next())
    return (
      this.referenceDelegate.Ur(),
      r(i)
        .next((s) => this.referenceDelegate.Wr(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    )
  }
  Gr(e, n) {
    return y.or(Object.values(this.Lr).map((r) => () => r.containsKey(e, n)))
  }
}
class vS extends tT {
  constructor(e) {
    super(), (this.currentSequenceNumber = e)
  }
}
class zh {
  constructor(e) {
    ;(this.persistence = e), (this.zr = new Uh()), (this.jr = null)
  }
  static Hr(e) {
    return new zh(e)
  }
  get Jr() {
    if (this.jr) return this.jr
    throw $()
  }
  addReference(e, n, r) {
    return this.zr.addReference(r, n), this.Jr.delete(r.toString()), y.resolve()
  }
  removeReference(e, n, r) {
    return this.zr.removeReference(r, n), this.Jr.add(r.toString()), y.resolve()
  }
  markPotentiallyOrphaned(e, n) {
    return this.Jr.add(n.toString()), y.resolve()
  }
  removeTarget(e, n) {
    this.zr.Vr(n.targetId).forEach((i) => this.Jr.add(i.toString()))
    const r = this.persistence.getTargetCache()
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((i) => {
        i.forEach((s) => this.Jr.add(s.toString()))
      })
      .next(() => r.removeTargetData(e, n))
  }
  Ur() {
    this.jr = new Set()
  }
  Wr(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer()
    return y
      .forEach(this.Jr, (r) => {
        const i = L.fromPath(r)
        return this.Yr(e, i).next((s) => {
          s || n.removeEntry(i, M.min())
        })
      })
      .next(() => ((this.jr = null), n.apply(e)))
  }
  updateLimboDocument(e, n) {
    return this.Yr(e, n).next((r) => {
      r ? this.Jr.delete(n.toString()) : this.Jr.add(n.toString())
    })
  }
  Kr(e) {
    return 0
  }
  Yr(e, n) {
    return y.or([
      () => y.resolve(this.zr.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.Gr(e, n),
    ])
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bh {
  constructor(e, n, r, i) {
    ;(this.targetId = e), (this.fromCache = n), (this.qi = r), (this.Qi = i)
  }
  static Ki(e, n) {
    let r = q(),
      i = q()
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key)
          break
        case 1:
          i = i.add(s.doc.key)
      }
    return new Bh(e, n.fromCache, r, i)
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _S {
  constructor() {
    this._documentReadCount = 0
  }
  get documentReadCount() {
    return this._documentReadCount
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ES {
  constructor() {
    ;(this.$i = !1),
      (this.Ui = !1),
      (this.Wi = 100),
      (this.Gi = (function () {
        return w1() ? 8 : Mn.v(Qo()) > 0 ? 6 : 4
      })())
  }
  initialize(e, n) {
    ;(this.zi = e), (this.indexManager = n), (this.$i = !0)
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    const s = { result: null }
    return this.ji(e, n)
      .next((o) => {
        s.result = o
      })
      .next(() => {
        if (!s.result)
          return this.Hi(e, n, i, r).next((o) => {
            s.result = o
          })
      })
      .next(() => {
        if (s.result) return
        const o = new _S()
        return this.Ji(e, n, o).next((a) => {
          if (((s.result = a), this.Ui)) return this.Yi(e, n, o, a.size)
        })
      })
      .next(() => s.result)
  }
  Yi(e, n, r, i) {
    return r.documentReadCount < this.Wi
      ? (di() <= H.DEBUG &&
          I(
            'QueryEngine',
            'SDK will not create cache indexes for query:',
            nr(n),
            'since it only creates cache indexes for collection contains',
            'more than or equal to',
            this.Wi,
            'documents'
          ),
        y.resolve())
      : (di() <= H.DEBUG &&
          I(
            'QueryEngine',
            'Query:',
            nr(n),
            'scans',
            r.documentReadCount,
            'local documents and returns',
            i,
            'documents as results.'
          ),
        r.documentReadCount > this.Gi * i
          ? (di() <= H.DEBUG &&
              I(
                'QueryEngine',
                'The SDK decides to create cache indexes for query:',
                nr(n),
                'as using cache indexes may help improve performance.'
              ),
            this.indexManager.createTargetIndexes(e, Dt(n)))
          : y.resolve())
  }
  ji(e, n) {
    if (jf(n)) return y.resolve(null)
    let r = Dt(n)
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = tc(n, null, 'F')), (r = Dt(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = q(...s)
            return this.zi.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, r).next((l) => {
                const u = this.Zi(n, a)
                return this.Xi(n, u, o, l.readTime)
                  ? this.ji(e, tc(n, null, 'F'))
                  : this.es(e, u, n, l)
              })
            )
          }))
    )
  }
  Hi(e, n, r, i) {
    return jf(n) || i.isEqual(M.min())
      ? y.resolve(null)
      : this.zi.getDocuments(e, r).next((s) => {
          const o = this.Zi(n, s)
          return this.Xi(n, o, r, i)
            ? y.resolve(null)
            : (di() <= H.DEBUG &&
                I(
                  'QueryEngine',
                  'Re-using previous result from %s to execute query: %s',
                  i.toString(),
                  nr(n)
                ),
              this.es(e, o, n, Xw(i, -1)).next((a) => a))
        })
  }
  Zi(e, n) {
    let r = new ke(Wy(e))
    return (
      n.forEach((i, s) => {
        za(e, s) && (r = r.add(s))
      }),
      r
    )
  }
  Xi(e, n, r, i) {
    if (e.limit === null) return !1
    if (r.size !== n.size) return !0
    const s = e.limitType === 'F' ? n.last() : n.first()
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0)
  }
  Ji(e, n, r) {
    return (
      di() <= H.DEBUG &&
        I('QueryEngine', 'Using full collection scan to execute query:', nr(n)),
      this.zi.getDocumentsMatchingQuery(e, n, yn.min(), r)
    )
  }
  es(e, n, r, i) {
    return this.zi.getDocumentsMatchingQuery(e, r, i).next(
      (s) => (
        n.forEach((o) => {
          s = s.insert(o.key, o)
        }),
        s
      )
    )
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wS {
  constructor(e, n, r, i) {
    ;(this.persistence = e),
      (this.ts = n),
      (this.serializer = i),
      (this.ns = new ce(W)),
      (this.rs = new Xr((s) => Oh(s), Mh)),
      (this.ss = new Map()),
      (this.os = e.getRemoteDocumentCache()),
      (this.Qr = e.getTargetCache()),
      (this.$r = e.getBundleCache()),
      this._s(r)
  }
  _s(e) {
    ;(this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager
      )),
      (this.localDocuments = new cS(
        this.os,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.os.setIndexManager(this.indexManager),
      this.ts.initialize(this.localDocuments, this.indexManager)
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      'Collect garbage',
      'readwrite-primary',
      (n) => e.collect(n, this.ns)
    )
  }
}
function TS(t, e, n, r) {
  return new wS(t, e, n, r)
}
async function cv(t, e) {
  const n = K(t)
  return await n.persistence.runTransaction(
    'Handle user change',
    'readonly',
    (r) => {
      let i
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (s) => ((i = s), n._s(e), n.mutationQueue.getAllMutationBatches(r))
        )
        .next((s) => {
          const o = [],
            a = []
          let l = q()
          for (const u of i) {
            o.push(u.batchId)
            for (const c of u.mutations) l = l.add(c.key)
          }
          for (const u of s) {
            a.push(u.batchId)
            for (const c of u.mutations) l = l.add(c.key)
          }
          return n.localDocuments
            .getDocuments(r, l)
            .next((u) => ({ us: u, removedBatchIds: o, addedBatchIds: a }))
        })
    }
  )
}
function hv(t) {
  const e = K(t)
  return e.persistence.runTransaction(
    'Get last remote snapshot version',
    'readonly',
    (n) => e.Qr.getLastRemoteSnapshotVersion(n)
  )
}
function SS(t, e) {
  const n = K(t),
    r = e.snapshotVersion
  let i = n.ns
  return n.persistence
    .runTransaction('Apply remote event', 'readwrite-primary', (s) => {
      const o = n.os.newChangeBuffer({ trackRemovals: !0 })
      i = n.ns
      const a = []
      e.targetChanges.forEach((c, h) => {
        const f = i.get(h)
        if (!f) return
        a.push(
          n.Qr.removeMatchingKeys(s, c.removedDocuments, h).next(() =>
            n.Qr.addMatchingKeys(s, c.addedDocuments, h)
          )
        )
        let g = f.withSequenceNumber(s.currentSequenceNumber)
        e.targetMismatches.get(h) !== null
          ? (g = g
              .withResumeToken(Ue.EMPTY_BYTE_STRING, M.min())
              .withLastLimboFreeSnapshotVersion(M.min()))
          : c.resumeToken.approximateByteSize() > 0 &&
            (g = g.withResumeToken(c.resumeToken, r)),
          (i = i.insert(h, g)),
          (function (E, N, p) {
            return E.resumeToken.approximateByteSize() === 0 ||
              N.snapshotVersion.toMicroseconds() -
                E.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : p.addedDocuments.size +
                  p.modifiedDocuments.size +
                  p.removedDocuments.size >
                  0
          })(f, g, c) && a.push(n.Qr.updateTargetData(s, g))
      })
      let l = _n(),
        u = q()
      if (
        (e.documentUpdates.forEach((c) => {
          e.resolvedLimboDocuments.has(c) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, c))
        }),
        a.push(
          IS(s, o, e.documentUpdates).next((c) => {
            ;(l = c.cs), (u = c.ls)
          })
        ),
        !r.isEqual(M.min()))
      ) {
        const c = n.Qr.getLastRemoteSnapshotVersion(s).next((h) =>
          n.Qr.setTargetsMetadata(s, s.currentSequenceNumber, r)
        )
        a.push(c)
      }
      return y
        .waitFor(a)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, l, u))
        .next(() => l)
    })
    .then((s) => ((n.ns = i), s))
}
function IS(t, e, n) {
  let r = q(),
    i = q()
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = _n()
      return (
        n.forEach((a, l) => {
          const u = s.get(a)
          l.isFoundDocument() !== u.isFoundDocument() && (i = i.add(a)),
            l.isNoDocument() && l.version.isEqual(M.min())
              ? (e.removeEntry(a, l.readTime), (o = o.insert(a, l)))
              : !u.isValidDocument() ||
                l.version.compareTo(u.version) > 0 ||
                (l.version.compareTo(u.version) === 0 && u.hasPendingWrites)
              ? (e.addEntry(l), (o = o.insert(a, l)))
              : I(
                  'LocalStore',
                  'Ignoring outdated watch update for ',
                  a,
                  '. Current version:',
                  u.version,
                  ' Watch version:',
                  l.version
                )
        }),
        { cs: o, ls: i }
      )
    })
  )
}
function AS(t, e) {
  const n = K(t)
  return n.persistence
    .runTransaction('Allocate target', 'readwrite', (r) => {
      let i
      return n.Qr.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), y.resolve(i))
          : n.Qr.allocateTargetId(r).next(
              (o) => (
                (i = new nn(
                  e,
                  o,
                  'TargetPurposeListen',
                  r.currentSequenceNumber
                )),
                n.Qr.addTargetData(r, i).next(() => i)
              )
            )
      )
    })
    .then((r) => {
      const i = n.ns.get(r.targetId)
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.ns = n.ns.insert(r.targetId, r)), n.rs.set(e, r.targetId)),
        r
      )
    })
}
async function oc(t, e, n) {
  const r = K(t),
    i = r.ns.get(e),
    s = n ? 'readwrite' : 'readwrite-primary'
  try {
    n ||
      (await r.persistence.runTransaction('Release target', s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ))
  } catch (o) {
    if (!Cs(o)) throw o
    I('LocalStore', `Failed to update sequence numbers for target ${e}: ${o}`)
  }
  ;(r.ns = r.ns.remove(e)), r.rs.delete(i.target)
}
function Yf(t, e, n) {
  const r = K(t)
  let i = M.min(),
    s = q()
  return r.persistence.runTransaction('Execute query', 'readwrite', (o) =>
    (function (l, u, c) {
      const h = K(l),
        f = h.rs.get(c)
      return f !== void 0 ? y.resolve(h.ns.get(f)) : h.Qr.getTargetData(u, c)
    })(r, o, Dt(e))
      .next((a) => {
        if (a)
          return (
            (i = a.lastLimboFreeSnapshotVersion),
            r.Qr.getMatchingKeysForTargetId(o, a.targetId).next((l) => {
              s = l
            })
          )
      })
      .next(() =>
        r.ts.getDocumentsMatchingQuery(o, e, n ? i : M.min(), n ? s : q())
      )
      .next((a) => (CS(r, wT(e), a), { documents: a, hs: s }))
  )
}
function CS(t, e, n) {
  let r = t.ss.get(e) || M.min()
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime)
  }),
    t.ss.set(e, r)
}
class Xf {
  constructor() {
    this.activeTargetIds = RT()
  }
  As(e) {
    this.activeTargetIds = this.activeTargetIds.add(e)
  }
  Rs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e)
  }
  ds() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    }
    return JSON.stringify(e)
  }
}
class RS {
  constructor() {
    ;(this.no = new Xf()),
      (this.ro = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null)
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e) {
    return this.no.As(e), this.ro[e] || 'not-current'
  }
  updateQueryState(e, n, r) {
    this.ro[e] = n
  }
  removeLocalQueryTarget(e) {
    this.no.Rs(e)
  }
  isLocalQueryTarget(e) {
    return this.no.activeTargetIds.has(e)
  }
  clearQueryState(e) {
    delete this.ro[e]
  }
  getAllActiveQueryTargets() {
    return this.no.activeTargetIds
  }
  isActiveQueryTarget(e) {
    return this.no.activeTargetIds.has(e)
  }
  start() {
    return (this.no = new Xf()), Promise.resolve()
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PS {
  io(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jf {
  constructor() {
    ;(this.so = () => this.oo()),
      (this._o = () => this.ao()),
      (this.uo = []),
      this.co()
  }
  io(e) {
    this.uo.push(e)
  }
  shutdown() {
    window.removeEventListener('online', this.so),
      window.removeEventListener('offline', this._o)
  }
  co() {
    window.addEventListener('online', this.so),
      window.addEventListener('offline', this._o)
  }
  oo() {
    I('ConnectivityMonitor', 'Network connectivity changed: AVAILABLE')
    for (const e of this.uo) e(0)
  }
  ao() {
    I('ConnectivityMonitor', 'Network connectivity changed: UNAVAILABLE')
    for (const e of this.uo) e(1)
  }
  static D() {
    return (
      typeof window < 'u' &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    )
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let no = null
function Ml() {
  return (
    no === null
      ? (no = (function () {
          return 268435456 + Math.round(2147483648 * Math.random())
        })())
      : no++,
    '0x' + no.toString(16)
  )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kS = {
  BatchGetDocuments: 'batchGet',
  Commit: 'commit',
  RunQuery: 'runQuery',
  RunAggregationQuery: 'runAggregationQuery',
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xS {
  constructor(e) {
    ;(this.lo = e.lo), (this.ho = e.ho)
  }
  Po(e) {
    this.Io = e
  }
  To(e) {
    this.Eo = e
  }
  onMessage(e) {
    this.Ao = e
  }
  close() {
    this.ho()
  }
  send(e) {
    this.lo(e)
  }
  Ro() {
    this.Io()
  }
  Vo(e) {
    this.Eo(e)
  }
  mo(e) {
    this.Ao(e)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ve = 'WebChannelConnection'
class NS extends class {
  constructor(n) {
    ;(this.databaseInfo = n), (this.databaseId = n.databaseId)
    const r = n.ssl ? 'https' : 'http',
      i = encodeURIComponent(this.databaseId.projectId),
      s = encodeURIComponent(this.databaseId.database)
    ;(this.fo = r + '://' + n.host),
      (this.po = `projects/${i}/databases/${s}`),
      (this.yo =
        this.databaseId.database === '(default)'
          ? `project_id=${i}`
          : `project_id=${i}&database_id=${s}`)
  }
  get wo() {
    return !1
  }
  So(n, r, i, s, o) {
    const a = Ml(),
      l = this.bo(n, r.toUriEncodedString())
    I('RestConnection', `Sending RPC '${n}' ${a}:`, l, i)
    const u = {
      'google-cloud-resource-prefix': this.po,
      'x-goog-request-params': this.yo,
    }
    return (
      this.Do(u, s, o),
      this.Co(n, l, u, i).then(
        (c) => (I('RestConnection', `Received RPC '${n}' ${a}: `, c), c),
        (c) => {
          throw (
            ($r(
              'RestConnection',
              `RPC '${n}' ${a} failed with error: `,
              c,
              'url: ',
              l,
              'request:',
              i
            ),
            c)
          )
        }
      )
    )
  }
  vo(n, r, i, s, o, a) {
    return this.So(n, r, i, s, o)
  }
  Do(n, r, i) {
    ;(n['X-Goog-Api-Client'] = (function () {
      return 'gl-js/ fire/' + Yr
    })()),
      (n['Content-Type'] = 'text/plain'),
      this.databaseInfo.appId &&
        (n['X-Firebase-GMPID'] = this.databaseInfo.appId),
      r && r.headers.forEach((s, o) => (n[o] = s)),
      i && i.headers.forEach((s, o) => (n[o] = s))
  }
  bo(n, r) {
    const i = kS[n]
    return `${this.fo}/v1/${r}:${i}`
  }
  terminate() {}
} {
  constructor(e) {
    super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams),
      (this.longPollingOptions = e.longPollingOptions)
  }
  Co(e, n, r, i) {
    const s = Ml()
    return new Promise((o, a) => {
      const l = new jw()
      l.setWithCredentials(!0),
        l.listenOnce(Fw.COMPLETE, () => {
          try {
            switch (l.getLastErrorCode()) {
              case Vl.NO_ERROR:
                const c = l.getResponseJson()
                I(Ve, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(c)),
                  o(c)
                break
              case Vl.TIMEOUT:
                I(Ve, `RPC '${e}' ${s} timed out`),
                  a(new V(T.DEADLINE_EXCEEDED, 'Request time out'))
                break
              case Vl.HTTP_ERROR:
                const h = l.getStatus()
                if (
                  (I(
                    Ve,
                    `RPC '${e}' ${s} failed with status:`,
                    h,
                    'response text:',
                    l.getResponseText()
                  ),
                  h > 0)
                ) {
                  let f = l.getResponseJson()
                  Array.isArray(f) && (f = f[0])
                  const g = f == null ? void 0 : f.error
                  if (g && g.status && g.message) {
                    const _ = (function (N) {
                      const p = N.toLowerCase().replace(/_/g, '-')
                      return Object.values(T).indexOf(p) >= 0 ? p : T.UNKNOWN
                    })(g.status)
                    a(new V(_, g.message))
                  } else
                    a(
                      new V(
                        T.UNKNOWN,
                        'Server responded with status ' + l.getStatus()
                      )
                    )
                } else a(new V(T.UNAVAILABLE, 'Connection failed.'))
                break
              default:
                $()
            }
          } finally {
            I(Ve, `RPC '${e}' ${s} completed.`)
          }
        })
      const u = JSON.stringify(i)
      I(Ve, `RPC '${e}' ${s} sending request:`, i), l.send(n, 'POST', u, r, 15)
    })
  }
  Fo(e, n, r) {
    const i = Ml(),
      s = [this.fo, '/', 'google.firestore.v1.Firestore', '/', e, '/channel'],
      o = Ow(),
      a = Mw(),
      l = {
        httpSessionIdParam: 'gsessionid',
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      u = this.longPollingOptions.timeoutSeconds
    u !== void 0 && (l.longPollingTimeout = Math.round(1e3 * u)),
      this.useFetchStreams && (l.useFetchStreams = !0),
      this.Do(l.initMessageHeaders, n, r),
      (l.encodeInitMessageHeaders = !0)
    const c = s.join('')
    I(Ve, `Creating RPC '${e}' stream ${i}: ${c}`, l)
    const h = o.createWebChannel(c, l)
    let f = !1,
      g = !1
    const _ = new xS({
        lo: (N) => {
          g
            ? I(Ve, `Not sending because RPC '${e}' stream ${i} is closed:`, N)
            : (f ||
                (I(Ve, `Opening RPC '${e}' stream ${i} transport.`),
                h.open(),
                (f = !0)),
              I(Ve, `RPC '${e}' stream ${i} sending:`, N),
              h.send(N))
        },
        ho: () => h.close(),
      }),
      E = (N, p, d) => {
        N.listen(p, (m) => {
          try {
            d(m)
          } catch (v) {
            setTimeout(() => {
              throw v
            }, 0)
          }
        })
      }
    return (
      E(h, Zs.EventType.OPEN, () => {
        g || I(Ve, `RPC '${e}' stream ${i} transport opened.`)
      }),
      E(h, Zs.EventType.CLOSE, () => {
        g ||
          ((g = !0), I(Ve, `RPC '${e}' stream ${i} transport closed`), _.Vo())
      }),
      E(h, Zs.EventType.ERROR, (N) => {
        g ||
          ((g = !0),
          $r(Ve, `RPC '${e}' stream ${i} transport errored:`, N),
          _.Vo(new V(T.UNAVAILABLE, 'The operation could not be completed')))
      }),
      E(h, Zs.EventType.MESSAGE, (N) => {
        var p
        if (!g) {
          const d = N.data[0]
          pe(!!d)
          const m = d,
            v =
              m.error ||
              ((p = m[0]) === null || p === void 0 ? void 0 : p.error)
          if (v) {
            I(Ve, `RPC '${e}' stream ${i} received error:`, v)
            const C = v.status
            let P = (function (te) {
                const j = he[te]
                if (j !== void 0) return tv(j)
              })(C),
              x = v.message
            P === void 0 &&
              ((P = T.INTERNAL),
              (x =
                'Unknown error status: ' + C + ' with message ' + v.message)),
              (g = !0),
              _.Vo(new V(P, x)),
              h.close()
          } else I(Ve, `RPC '${e}' stream ${i} received:`, d), _.mo(d)
        }
      }),
      E(a, $w.STAT_EVENT, (N) => {
        N.stat === Pf.PROXY
          ? I(Ve, `RPC '${e}' stream ${i} detected buffering proxy`)
          : N.stat === Pf.NOPROXY &&
            I(Ve, `RPC '${e}' stream ${i} detected no buffering proxy`)
      }),
      setTimeout(() => {
        _.Ro()
      }, 0),
      _
    )
  }
}
function Fl() {
  return typeof document < 'u' ? document : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dv(t) {
  return new QT(t, !0)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fv {
  constructor(e, n, r = 1e3, i = 1.5, s = 6e4) {
    ;(this.oi = e),
      (this.timerId = n),
      (this.Mo = r),
      (this.xo = i),
      (this.Oo = s),
      (this.No = 0),
      (this.Bo = null),
      (this.Lo = Date.now()),
      this.reset()
  }
  reset() {
    this.No = 0
  }
  ko() {
    this.No = this.Oo
  }
  qo(e) {
    this.cancel()
    const n = Math.floor(this.No + this.Qo()),
      r = Math.max(0, Date.now() - this.Lo),
      i = Math.max(0, n - r)
    i > 0 &&
      I(
        'ExponentialBackoff',
        `Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.Bo = this.oi.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.Lo = Date.now()), e())
      )),
      (this.No *= this.xo),
      this.No < this.Mo && (this.No = this.Mo),
      this.No > this.Oo && (this.No = this.Oo)
  }
  Ko() {
    this.Bo !== null && (this.Bo.skipDelay(), (this.Bo = null))
  }
  cancel() {
    this.Bo !== null && (this.Bo.cancel(), (this.Bo = null))
  }
  Qo() {
    return (Math.random() - 0.5) * this.No
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class DS {
  constructor(e, n, r, i, s, o, a, l) {
    ;(this.oi = e),
      (this.$o = r),
      (this.Uo = i),
      (this.connection = s),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = a),
      (this.listener = l),
      (this.state = 0),
      (this.Wo = 0),
      (this.Go = null),
      (this.zo = null),
      (this.stream = null),
      (this.jo = new fv(e, n))
  }
  Ho() {
    return this.state === 1 || this.state === 5 || this.Jo()
  }
  Jo() {
    return this.state === 2 || this.state === 3
  }
  start() {
    this.state !== 4 ? this.auth() : this.Yo()
  }
  async stop() {
    this.Ho() && (await this.close(0))
  }
  Zo() {
    ;(this.state = 0), this.jo.reset()
  }
  Xo() {
    this.Jo() &&
      this.Go === null &&
      (this.Go = this.oi.enqueueAfterDelay(this.$o, 6e4, () => this.e_()))
  }
  t_(e) {
    this.n_(), this.stream.send(e)
  }
  async e_() {
    if (this.Jo()) return this.close(0)
  }
  n_() {
    this.Go && (this.Go.cancel(), (this.Go = null))
  }
  r_() {
    this.zo && (this.zo.cancel(), (this.zo = null))
  }
  async close(e, n) {
    this.n_(),
      this.r_(),
      this.jo.cancel(),
      this.Wo++,
      e !== 4
        ? this.jo.reset()
        : n && n.code === T.RESOURCE_EXHAUSTED
        ? (Vt(n.toString()),
          Vt('Using maximum backoff delay to prevent overloading the backend.'),
          this.jo.ko())
        : n &&
          n.code === T.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.i_(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.To(n)
  }
  i_() {}
  auth() {
    this.state = 1
    const e = this.s_(this.Wo),
      n = this.Wo
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.Wo === n && this.o_(r, i)
      },
      (r) => {
        e(() => {
          const i = new V(T.UNKNOWN, 'Fetching auth token failed: ' + r.message)
          return this.__(i)
        })
      }
    )
  }
  o_(e, n) {
    const r = this.s_(this.Wo)
    ;(this.stream = this.a_(e, n)),
      this.stream.Po(() => {
        r(
          () => (
            (this.state = 2),
            (this.zo = this.oi.enqueueAfterDelay(
              this.Uo,
              1e4,
              () => (this.Jo() && (this.state = 3), Promise.resolve())
            )),
            this.listener.Po()
          )
        )
      }),
      this.stream.To((i) => {
        r(() => this.__(i))
      }),
      this.stream.onMessage((i) => {
        r(() => this.onMessage(i))
      })
  }
  Yo() {
    ;(this.state = 5),
      this.jo.qo(async () => {
        ;(this.state = 0), this.start()
      })
  }
  __(e) {
    return (
      I('PersistentStream', `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    )
  }
  s_(e) {
    return (n) => {
      this.oi.enqueueAndForget(() =>
        this.Wo === e
          ? n()
          : (I(
              'PersistentStream',
              'stream callback skipped by getCloseGuardedDispatcher.'
            ),
            Promise.resolve())
      )
    }
  }
}
class VS extends DS {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      'listen_stream_connection_backoff',
      'listen_stream_idle',
      'health_check_timeout',
      n,
      r,
      i,
      o
    ),
      (this.serializer = s)
  }
  a_(e, n) {
    return this.connection.Fo('Listen', e, n)
  }
  onMessage(e) {
    this.jo.reset()
    const n = YT(this.serializer, e),
      r = (function (s) {
        if (!('targetChange' in s)) return M.min()
        const o = s.targetChange
        return o.targetIds && o.targetIds.length
          ? M.min()
          : o.readTime
          ? Rr(o.readTime)
          : M.min()
      })(e)
    return this.listener.u_(n, r)
  }
  c_(e) {
    const n = {}
    ;(n.database = bf(this.serializer)),
      (n.addTarget = (function (s, o) {
        let a
        const l = o.target
        if (
          ((a = ec(l) ? { documents: XT(s, l) } : { query: JT(s, l).ut }),
          (a.targetId = o.targetId),
          o.resumeToken.approximateByteSize() > 0)
        ) {
          a.resumeToken = WT(s, o.resumeToken)
          const u = ic(s, o.expectedCount)
          u !== null && (a.expectedCount = u)
        } else if (o.snapshotVersion.compareTo(M.min()) > 0) {
          a.readTime = KT(s, o.snapshotVersion.toTimestamp())
          const u = ic(s, o.expectedCount)
          u !== null && (a.expectedCount = u)
        }
        return a
      })(this.serializer, e))
    const r = eS(this.serializer, e)
    r && (n.labels = r), this.t_(n)
  }
  l_(e) {
    const n = {}
    ;(n.database = bf(this.serializer)), (n.removeTarget = e), this.t_(n)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LS extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.serializer = i),
      (this.A_ = !1)
  }
  R_() {
    if (this.A_)
      throw new V(
        T.FAILED_PRECONDITION,
        'The client has already been terminated.'
      )
  }
  So(e, n, r, i) {
    return (
      this.R_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s, o]) => this.connection.So(e, sc(n, r), i, s, o))
        .catch((s) => {
          throw s.name === 'FirebaseError'
            ? (s.code === T.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new V(T.UNKNOWN, s.toString())
        })
    )
  }
  vo(e, n, r, i, s) {
    return (
      this.R_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([o, a]) => this.connection.vo(e, sc(n, r), i, o, a, s))
        .catch((o) => {
          throw o.name === 'FirebaseError'
            ? (o.code === T.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              o)
            : new V(T.UNKNOWN, o.toString())
        })
    )
  }
  terminate() {
    ;(this.A_ = !0), this.connection.terminate()
  }
}
class OS {
  constructor(e, n) {
    ;(this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = 'Unknown'),
      (this.m_ = 0),
      (this.f_ = null),
      (this.g_ = !0)
  }
  p_() {
    this.m_ === 0 &&
      (this.y_('Unknown'),
      (this.f_ = this.asyncQueue.enqueueAfterDelay(
        'online_state_timeout',
        1e4,
        () => (
          (this.f_ = null),
          this.w_("Backend didn't respond within 10 seconds."),
          this.y_('Offline'),
          Promise.resolve()
        )
      )))
  }
  S_(e) {
    this.state === 'Online'
      ? this.y_('Unknown')
      : (this.m_++,
        this.m_ >= 1 &&
          (this.b_(),
          this.w_(
            `Connection failed 1 times. Most recent error: ${e.toString()}`
          ),
          this.y_('Offline')))
  }
  set(e) {
    this.b_(), (this.m_ = 0), e === 'Online' && (this.g_ = !1), this.y_(e)
  }
  y_(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e))
  }
  w_(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`
    this.g_ ? (Vt(n), (this.g_ = !1)) : I('OnlineStateTracker', n)
  }
  b_() {
    this.f_ !== null && (this.f_.cancel(), (this.f_ = null))
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MS {
  constructor(e, n, r, i, s) {
    ;(this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.D_ = []),
      (this.C_ = new Map()),
      (this.v_ = new Set()),
      (this.F_ = []),
      (this.M_ = s),
      this.M_.io((o) => {
        r.enqueueAndForget(async () => {
          ks(this) &&
            (I(
              'RemoteStore',
              'Restarting streams for network reachability change.'
            ),
            await (async function (l) {
              const u = K(l)
              u.v_.add(4),
                await Ps(u),
                u.x_.set('Unknown'),
                u.v_.delete(4),
                await Qa(u)
            })(this))
        })
      }),
      (this.x_ = new OS(r, i))
  }
}
async function Qa(t) {
  if (ks(t)) for (const e of t.F_) await e(!0)
}
async function Ps(t) {
  for (const e of t.F_) await e(!1)
}
function pv(t, e) {
  const n = K(t)
  n.C_.has(e.targetId) ||
    (n.C_.set(e.targetId, e), Qh(n) ? qh(n) : Jr(n).Jo() && Hh(n, e))
}
function mv(t, e) {
  const n = K(t),
    r = Jr(n)
  n.C_.delete(e),
    r.Jo() && gv(n, e),
    n.C_.size === 0 && (r.Jo() ? r.Xo() : ks(n) && n.x_.set('Unknown'))
}
function Hh(t, e) {
  if (
    (t.O_.Oe(e.targetId),
    e.resumeToken.approximateByteSize() > 0 ||
      e.snapshotVersion.compareTo(M.min()) > 0)
  ) {
    const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size
    e = e.withExpectedCount(n)
  }
  Jr(t).c_(e)
}
function gv(t, e) {
  t.O_.Oe(e), Jr(t).l_(e)
}
function qh(t) {
  ;(t.O_ = new zT({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    _t: (e) => t.C_.get(e) || null,
    nt: () => t.datastore.serializer.databaseId,
  })),
    Jr(t).start(),
    t.x_.p_()
}
function Qh(t) {
  return ks(t) && !Jr(t).Ho() && t.C_.size > 0
}
function ks(t) {
  return K(t).v_.size === 0
}
function yv(t) {
  t.O_ = void 0
}
async function FS(t) {
  t.C_.forEach((e, n) => {
    Hh(t, e)
  })
}
async function $S(t, e) {
  yv(t), Qh(t) ? (t.x_.S_(e), qh(t)) : t.x_.set('Unknown')
}
async function jS(t, e, n) {
  if ((t.x_.set('Online'), e instanceof rv && e.state === 2 && e.cause))
    try {
      await (async function (i, s) {
        const o = s.cause
        for (const a of s.targetIds)
          i.C_.has(a) &&
            (await i.remoteSyncer.rejectListen(a, o),
            i.C_.delete(a),
            i.O_.removeTarget(a))
      })(t, e)
    } catch (r) {
      I(
        'RemoteStore',
        'Failed to remove targets %s: %s ',
        e.targetIds.join(','),
        r
      ),
        await Zf(t, r)
    }
  else if (
    (e instanceof vo ? t.O_.$e(e) : e instanceof nv ? t.O_.Je(e) : t.O_.Ge(e),
    !n.isEqual(M.min()))
  )
    try {
      const r = await hv(t.localStore)
      n.compareTo(r) >= 0 &&
        (await (function (s, o) {
          const a = s.O_.it(o)
          return (
            a.targetChanges.forEach((l, u) => {
              if (l.resumeToken.approximateByteSize() > 0) {
                const c = s.C_.get(u)
                c && s.C_.set(u, c.withResumeToken(l.resumeToken, o))
              }
            }),
            a.targetMismatches.forEach((l, u) => {
              const c = s.C_.get(l)
              if (!c) return
              s.C_.set(
                l,
                c.withResumeToken(Ue.EMPTY_BYTE_STRING, c.snapshotVersion)
              ),
                gv(s, l)
              const h = new nn(c.target, l, u, c.sequenceNumber)
              Hh(s, h)
            }),
            s.remoteSyncer.applyRemoteEvent(a)
          )
        })(t, n))
    } catch (r) {
      I('RemoteStore', 'Failed to raise snapshot:', r), await Zf(t, r)
    }
}
async function Zf(t, e, n) {
  if (!Cs(e)) throw e
  t.v_.add(1),
    await Ps(t),
    t.x_.set('Offline'),
    n || (n = () => hv(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      I('RemoteStore', 'Retrying IndexedDB access'),
        await n(),
        t.v_.delete(1),
        await Qa(t)
    })
}
async function ep(t, e) {
  const n = K(t)
  n.asyncQueue.verifyOperationInProgress(),
    I('RemoteStore', 'RemoteStore received new credentials')
  const r = ks(n)
  n.v_.add(3),
    await Ps(n),
    r && n.x_.set('Unknown'),
    await n.remoteSyncer.handleCredentialChange(e),
    n.v_.delete(3),
    await Qa(n)
}
async function US(t, e) {
  const n = K(t)
  e
    ? (n.v_.delete(2), await Qa(n))
    : e || (n.v_.add(2), await Ps(n), n.x_.set('Unknown'))
}
function Jr(t) {
  return (
    t.N_ ||
      ((t.N_ = (function (n, r, i) {
        const s = K(n)
        return (
          s.R_(),
          new VS(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            i
          )
        )
      })(t.datastore, t.asyncQueue, {
        Po: FS.bind(null, t),
        To: $S.bind(null, t),
        u_: jS.bind(null, t),
      })),
      t.F_.push(async (e) => {
        e
          ? (t.N_.Zo(), Qh(t) ? qh(t) : t.x_.set('Unknown'))
          : (await t.N_.stop(), yv(t))
      })),
    t.N_
  )
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kh {
  constructor(e, n, r, i, s) {
    ;(this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new pn()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {})
  }
  get promise() {
    return this.deferred.promise
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      a = new Kh(e, n, o, i, s)
    return a.start(r), a
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e)
  }
  skipDelay() {
    return this.handleDelayElapsed()
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new V(T.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : ''))
      ))
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve()
    )
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null))
  }
}
function vv(t, e) {
  if ((Vt('AsyncQueue', `${e}: ${t}`), Cs(t)))
    return new V(T.UNAVAILABLE, `${e}: ${t}`)
  throw t
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pr {
  constructor(e) {
    ;(this.comparator = e
      ? (n, r) => e(n, r) || L.comparator(n.key, r.key)
      : (n, r) => L.comparator(n.key, r.key)),
      (this.keyedMap = _i()),
      (this.sortedSet = new ce(this.comparator))
  }
  static emptySet(e) {
    return new Pr(e.comparator)
  }
  has(e) {
    return this.keyedMap.get(e) != null
  }
  get(e) {
    return this.keyedMap.get(e)
  }
  first() {
    return this.sortedSet.minKey()
  }
  last() {
    return this.sortedSet.maxKey()
  }
  isEmpty() {
    return this.sortedSet.isEmpty()
  }
  indexOf(e) {
    const n = this.keyedMap.get(e)
    return n ? this.sortedSet.indexOf(n) : -1
  }
  get size() {
    return this.sortedSet.size
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1))
  }
  add(e) {
    const n = this.delete(e.key)
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null))
  }
  delete(e) {
    const n = this.get(e)
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this
  }
  isEqual(e) {
    if (!(e instanceof Pr) || this.size !== e.size) return !1
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator()
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key
      if (!i.isEqual(s)) return !1
    }
    return !0
  }
  toString() {
    const e = []
    return (
      this.forEach((n) => {
        e.push(n.toString())
      }),
      e.length === 0
        ? 'DocumentSet ()'
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    )
  }
  copy(e, n) {
    const r = new Pr()
    return (
      (r.comparator = this.comparator), (r.keyedMap = e), (r.sortedSet = n), r
    )
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tp {
  constructor() {
    this.L_ = new ce(L.comparator)
  }
  track(e) {
    const n = e.doc.key,
      r = this.L_.get(n)
    r
      ? e.type !== 0 && r.type === 3
        ? (this.L_ = this.L_.insert(n, e))
        : e.type === 3 && r.type !== 1
        ? (this.L_ = this.L_.insert(n, { type: r.type, doc: e.doc }))
        : e.type === 2 && r.type === 2
        ? (this.L_ = this.L_.insert(n, { type: 2, doc: e.doc }))
        : e.type === 2 && r.type === 0
        ? (this.L_ = this.L_.insert(n, { type: 0, doc: e.doc }))
        : e.type === 1 && r.type === 0
        ? (this.L_ = this.L_.remove(n))
        : e.type === 1 && r.type === 2
        ? (this.L_ = this.L_.insert(n, { type: 1, doc: r.doc }))
        : e.type === 0 && r.type === 1
        ? (this.L_ = this.L_.insert(n, { type: 2, doc: e.doc }))
        : $()
      : (this.L_ = this.L_.insert(n, e))
  }
  k_() {
    const e = []
    return (
      this.L_.inorderTraversal((n, r) => {
        e.push(r)
      }),
      e
    )
  }
}
class Hr {
  constructor(e, n, r, i, s, o, a, l, u) {
    ;(this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = i),
      (this.mutatedKeys = s),
      (this.fromCache = o),
      (this.syncStateChanged = a),
      (this.excludesMetadataChanges = l),
      (this.hasCachedResults = u)
  }
  static fromInitialDocuments(e, n, r, i, s) {
    const o = []
    return (
      n.forEach((a) => {
        o.push({ type: 0, doc: a })
      }),
      new Hr(e, n, Pr.emptySet(n), o, r, i, !0, !1, s)
    )
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty()
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        Ua(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1
    const n = this.docChanges,
      r = e.docChanges
    if (n.length !== r.length) return !1
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1
    return !0
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zS {
  constructor() {
    ;(this.q_ = void 0), (this.Q_ = [])
  }
}
class BS {
  constructor() {
    ;(this.queries = new Xr((e) => Ky(e), Ua)),
      (this.onlineState = 'Unknown'),
      (this.K_ = new Set())
  }
}
async function HS(t, e) {
  const n = K(t),
    r = e.query
  let i = !1,
    s = n.queries.get(r)
  if ((s || ((i = !0), (s = new zS())), i))
    try {
      s.q_ = await n.onListen(r)
    } catch (o) {
      const a = vv(o, `Initialization of query '${nr(e.query)}' failed`)
      return void e.onError(a)
    }
  n.queries.set(r, s),
    s.Q_.push(e),
    e.U_(n.onlineState),
    s.q_ && e.W_(s.q_) && Wh(n)
}
async function qS(t, e) {
  const n = K(t),
    r = e.query
  let i = !1
  const s = n.queries.get(r)
  if (s) {
    const o = s.Q_.indexOf(e)
    o >= 0 && (s.Q_.splice(o, 1), (i = s.Q_.length === 0))
  }
  if (i) return n.queries.delete(r), n.onUnlisten(r)
}
function QS(t, e) {
  const n = K(t)
  let r = !1
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s)
    if (o) {
      for (const a of o.Q_) a.W_(i) && (r = !0)
      o.q_ = i
    }
  }
  r && Wh(n)
}
function KS(t, e, n) {
  const r = K(t),
    i = r.queries.get(e)
  if (i) for (const s of i.Q_) s.onError(n)
  r.queries.delete(e)
}
function Wh(t) {
  t.K_.forEach((e) => {
    e.next()
  })
}
class WS {
  constructor(e, n, r) {
    ;(this.query = e),
      (this.G_ = n),
      (this.z_ = !1),
      (this.j_ = null),
      (this.onlineState = 'Unknown'),
      (this.options = r || {})
  }
  W_(e) {
    if (!this.options.includeMetadataChanges) {
      const r = []
      for (const i of e.docChanges) i.type !== 3 && r.push(i)
      e = new Hr(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults
      )
    }
    let n = !1
    return (
      this.z_
        ? this.H_(e) && (this.G_.next(e), (n = !0))
        : this.J_(e, this.onlineState) && (this.Y_(e), (n = !0)),
      (this.j_ = e),
      n
    )
  }
  onError(e) {
    this.G_.error(e)
  }
  U_(e) {
    this.onlineState = e
    let n = !1
    return (
      this.j_ &&
        !this.z_ &&
        this.J_(this.j_, e) &&
        (this.Y_(this.j_), (n = !0)),
      n
    )
  }
  J_(e, n) {
    if (!e.fromCache) return !0
    const r = n !== 'Offline'
    return (
      (!this.options.Z_ || !r) &&
      (!e.docs.isEmpty() || e.hasCachedResults || n === 'Offline')
    )
  }
  H_(e) {
    if (e.docChanges.length > 0) return !0
    const n = this.j_ && this.j_.hasPendingWrites !== e.hasPendingWrites
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    )
  }
  Y_(e) {
    ;(e = Hr.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults
    )),
      (this.z_ = !0),
      this.G_.next(e)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _v {
  constructor(e) {
    this.key = e
  }
}
class Ev {
  constructor(e) {
    this.key = e
  }
}
class GS {
  constructor(e, n) {
    ;(this.query = e),
      (this.oa = n),
      (this._a = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.aa = q()),
      (this.mutatedKeys = q()),
      (this.ua = Wy(e)),
      (this.ca = new Pr(this.ua))
  }
  get la() {
    return this.oa
  }
  ha(e, n) {
    const r = n ? n.Pa : new tp(),
      i = n ? n.ca : this.ca
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      a = !1
    const l =
        this.query.limitType === 'F' && i.size === this.query.limit
          ? i.last()
          : null,
      u =
        this.query.limitType === 'L' && i.size === this.query.limit
          ? i.first()
          : null
    if (
      (e.inorderTraversal((c, h) => {
        const f = i.get(c),
          g = za(this.query, h) ? h : null,
          _ = !!f && this.mutatedKeys.has(f.key),
          E =
            !!g &&
            (g.hasLocalMutations ||
              (this.mutatedKeys.has(g.key) && g.hasCommittedMutations))
        let N = !1
        f && g
          ? f.data.isEqual(g.data)
            ? _ !== E && (r.track({ type: 3, doc: g }), (N = !0))
            : this.Ia(f, g) ||
              (r.track({ type: 2, doc: g }),
              (N = !0),
              ((l && this.ua(g, l) > 0) || (u && this.ua(g, u) < 0)) &&
                (a = !0))
          : !f && g
          ? (r.track({ type: 0, doc: g }), (N = !0))
          : f &&
            !g &&
            (r.track({ type: 1, doc: f }), (N = !0), (l || u) && (a = !0)),
          N &&
            (g
              ? ((o = o.add(g)), (s = E ? s.add(c) : s.delete(c)))
              : ((o = o.delete(c)), (s = s.delete(c))))
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const c = this.query.limitType === 'F' ? o.last() : o.first()
        ;(o = o.delete(c.key)),
          (s = s.delete(c.key)),
          r.track({ type: 1, doc: c })
      }
    return { ca: o, Pa: r, Xi: a, mutatedKeys: s }
  }
  Ia(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    )
  }
  applyChanges(e, n, r, i) {
    const s = this.ca
    ;(this.ca = e.ca), (this.mutatedKeys = e.mutatedKeys)
    const o = e.Pa.k_()
    o.sort(
      (c, h) =>
        (function (g, _) {
          const E = (N) => {
            switch (N) {
              case 0:
                return 1
              case 2:
              case 3:
                return 2
              case 1:
                return 0
              default:
                return $()
            }
          }
          return E(g) - E(_)
        })(c.type, h.type) || this.ua(c.doc, h.doc)
    ),
      this.Ta(r),
      (i = i != null && i)
    const a = n && !i ? this.Ea() : [],
      l = this.aa.size === 0 && this.current && !i ? 1 : 0,
      u = l !== this._a
    return (
      (this._a = l),
      o.length !== 0 || u
        ? {
            snapshot: new Hr(
              this.query,
              e.ca,
              s,
              o,
              e.mutatedKeys,
              l === 0,
              u,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0
            ),
            da: a,
          }
        : { da: a }
    )
  }
  U_(e) {
    return this.current && e === 'Offline'
      ? ((this.current = !1),
        this.applyChanges(
          { ca: this.ca, Pa: new tp(), mutatedKeys: this.mutatedKeys, Xi: !1 },
          !1
        ))
      : { da: [] }
  }
  Aa(e) {
    return (
      !this.oa.has(e) && !!this.ca.has(e) && !this.ca.get(e).hasLocalMutations
    )
  }
  Ta(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.oa = this.oa.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.oa = this.oa.delete(n))),
      (this.current = e.current))
  }
  Ea() {
    if (!this.current) return []
    const e = this.aa
    ;(this.aa = q()),
      this.ca.forEach((r) => {
        this.Aa(r.key) && (this.aa = this.aa.add(r.key))
      })
    const n = []
    return (
      e.forEach((r) => {
        this.aa.has(r) || n.push(new Ev(r))
      }),
      this.aa.forEach((r) => {
        e.has(r) || n.push(new _v(r))
      }),
      n
    )
  }
  Ra(e) {
    ;(this.oa = e.hs), (this.aa = q())
    const n = this.ha(e.documents)
    return this.applyChanges(n, !0)
  }
  Va() {
    return Hr.fromInitialDocuments(
      this.query,
      this.ca,
      this.mutatedKeys,
      this._a === 0,
      this.hasCachedResults
    )
  }
}
class bS {
  constructor(e, n, r) {
    ;(this.query = e), (this.targetId = n), (this.view = r)
  }
}
class YS {
  constructor(e) {
    ;(this.key = e), (this.ma = !1)
  }
}
class XS {
  constructor(e, n, r, i, s, o) {
    ;(this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.fa = {}),
      (this.ga = new Xr((a) => Ky(a), Ua)),
      (this.pa = new Map()),
      (this.ya = new Set()),
      (this.wa = new ce(L.comparator)),
      (this.Sa = new Map()),
      (this.ba = new Uh()),
      (this.Da = {}),
      (this.Ca = new Map()),
      (this.va = Br.Bn()),
      (this.onlineState = 'Unknown'),
      (this.Fa = void 0)
  }
  get isPrimaryClient() {
    return this.Fa === !0
  }
}
async function JS(t, e) {
  const n = sI(t)
  let r, i
  const s = n.ga.get(e)
  if (s)
    (r = s.targetId),
      n.sharedClientState.addLocalQueryTarget(r),
      (i = s.view.Va())
  else {
    const o = await AS(n.localStore, Dt(e)),
      a = n.sharedClientState.addLocalQueryTarget(o.targetId)
    ;(r = o.targetId),
      (i = await ZS(n, e, r, a === 'current', o.resumeToken)),
      n.isPrimaryClient && pv(n.remoteStore, o)
  }
  return i
}
async function ZS(t, e, n, r, i) {
  t.Ma = (h, f, g) =>
    (async function (E, N, p, d) {
      let m = N.view.ha(p)
      m.Xi &&
        (m = await Yf(E.localStore, N.query, !1).then(({ documents: x }) =>
          N.view.ha(x, m)
        ))
      const v = d && d.targetChanges.get(N.targetId),
        C = d && d.targetMismatches.get(N.targetId) != null,
        P = N.view.applyChanges(m, E.isPrimaryClient, v, C)
      return rp(E, N.targetId, P.da), P.snapshot
    })(t, h, f, g)
  const s = await Yf(t.localStore, e, !0),
    o = new GS(e, s.hs),
    a = o.ha(s.documents),
    l = Rs.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== 'Offline',
      i
    ),
    u = o.applyChanges(a, t.isPrimaryClient, l)
  rp(t, n, u.da)
  const c = new bS(e, n, o)
  return (
    t.ga.set(e, c),
    t.pa.has(n) ? t.pa.get(n).push(e) : t.pa.set(n, [e]),
    u.snapshot
  )
}
async function eI(t, e) {
  const n = K(t),
    r = n.ga.get(e),
    i = n.pa.get(r.targetId)
  if (i.length > 1)
    return (
      n.pa.set(
        r.targetId,
        i.filter((s) => !Ua(s, e))
      ),
      void n.ga.delete(e)
    )
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await oc(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              mv(n.remoteStore, r.targetId),
              ac(n, r.targetId)
          })
          .catch(Ph)))
    : (ac(n, r.targetId), await oc(n.localStore, r.targetId, !0))
}
async function wv(t, e) {
  const n = K(t)
  try {
    const r = await SS(n.localStore, e)
    e.targetChanges.forEach((i, s) => {
      const o = n.Sa.get(s)
      o &&
        (pe(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1
        ),
        i.addedDocuments.size > 0
          ? (o.ma = !0)
          : i.modifiedDocuments.size > 0
          ? pe(o.ma)
          : i.removedDocuments.size > 0 && (pe(o.ma), (o.ma = !1)))
    }),
      await Sv(n, r, e)
  } catch (r) {
    await Ph(r)
  }
}
function np(t, e, n) {
  const r = K(t)
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = []
    r.ga.forEach((s, o) => {
      const a = o.view.U_(e)
      a.snapshot && i.push(a.snapshot)
    }),
      (function (o, a) {
        const l = K(o)
        l.onlineState = a
        let u = !1
        l.queries.forEach((c, h) => {
          for (const f of h.Q_) f.U_(a) && (u = !0)
        }),
          u && Wh(l)
      })(r.eventManager, e),
      i.length && r.fa.u_(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e)
  }
}
async function tI(t, e, n) {
  const r = K(t)
  r.sharedClientState.updateQueryState(e, 'rejected', n)
  const i = r.Sa.get(e),
    s = i && i.key
  if (s) {
    let o = new ce(L.comparator)
    o = o.insert(s, Me.newNoDocument(s, M.min()))
    const a = q().add(s),
      l = new qa(M.min(), new Map(), new ce(W), o, a)
    await wv(r, l), (r.wa = r.wa.remove(s)), r.Sa.delete(e), Gh(r)
  } else
    await oc(r.localStore, e, !1)
      .then(() => ac(r, e, n))
      .catch(Ph)
}
function ac(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e)
  for (const r of t.pa.get(e)) t.ga.delete(r), n && t.fa.xa(r, n)
  t.pa.delete(e),
    t.isPrimaryClient &&
      t.ba.Vr(e).forEach((r) => {
        t.ba.containsKey(r) || Tv(t, r)
      })
}
function Tv(t, e) {
  t.ya.delete(e.path.canonicalString())
  const n = t.wa.get(e)
  n !== null &&
    (mv(t.remoteStore, n), (t.wa = t.wa.remove(e)), t.Sa.delete(n), Gh(t))
}
function rp(t, e, n) {
  for (const r of n)
    r instanceof _v
      ? (t.ba.addReference(r.key, e), nI(t, r))
      : r instanceof Ev
      ? (I('SyncEngine', 'Document no longer in limbo: ' + r.key),
        t.ba.removeReference(r.key, e),
        t.ba.containsKey(r.key) || Tv(t, r.key))
      : $()
}
function nI(t, e) {
  const n = e.key,
    r = n.path.canonicalString()
  t.wa.get(n) ||
    t.ya.has(r) ||
    (I('SyncEngine', 'New document in limbo: ' + n), t.ya.add(r), Gh(t))
}
function Gh(t) {
  for (; t.ya.size > 0 && t.wa.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.ya.values().next().value
    t.ya.delete(e)
    const n = new L(oe.fromString(e)),
      r = t.va.next()
    t.Sa.set(r, new YS(n)),
      (t.wa = t.wa.insert(n, r)),
      pv(
        t.remoteStore,
        new nn(Dt(Qy(n.path)), r, 'TargetPurposeLimboResolution', Nh._e)
      )
  }
}
async function Sv(t, e, n) {
  const r = K(t),
    i = [],
    s = [],
    o = []
  r.ga.isEmpty() ||
    (r.ga.forEach((a, l) => {
      o.push(
        r.Ma(l, e, n).then((u) => {
          if (
            ((u || n) &&
              r.isPrimaryClient &&
              r.sharedClientState.updateQueryState(
                l.targetId,
                u != null && u.fromCache ? 'not-current' : 'current'
              ),
            u)
          ) {
            i.push(u)
            const c = Bh.Ki(l.targetId, u)
            s.push(c)
          }
        })
      )
    }),
    await Promise.all(o),
    r.fa.u_(i),
    await (async function (l, u) {
      const c = K(l)
      try {
        await c.persistence.runTransaction(
          'notifyLocalViewChanges',
          'readwrite',
          (h) =>
            y.forEach(u, (f) =>
              y
                .forEach(f.qi, (g) =>
                  c.persistence.referenceDelegate.addReference(h, f.targetId, g)
                )
                .next(() =>
                  y.forEach(f.Qi, (g) =>
                    c.persistence.referenceDelegate.removeReference(
                      h,
                      f.targetId,
                      g
                    )
                  )
                )
            )
        )
      } catch (h) {
        if (!Cs(h)) throw h
        I('LocalStore', 'Failed to update sequence numbers: ' + h)
      }
      for (const h of u) {
        const f = h.targetId
        if (!h.fromCache) {
          const g = c.ns.get(f),
            _ = g.snapshotVersion,
            E = g.withLastLimboFreeSnapshotVersion(_)
          c.ns = c.ns.insert(f, E)
        }
      }
    })(r.localStore, s))
}
async function rI(t, e) {
  const n = K(t)
  if (!n.currentUser.isEqual(e)) {
    I('SyncEngine', 'User change. New user:', e.toKey())
    const r = await cv(n.localStore, e)
    ;(n.currentUser = e),
      (function (s, o) {
        s.Ca.forEach((a) => {
          a.forEach((l) => {
            l.reject(new V(T.CANCELLED, o))
          })
        }),
          s.Ca.clear()
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await Sv(n, r.us)
  }
}
function iI(t, e) {
  const n = K(t),
    r = n.Sa.get(e)
  if (r && r.ma) return q().add(r.key)
  {
    let i = q()
    const s = n.pa.get(e)
    if (!s) return i
    for (const o of s) {
      const a = n.ga.get(o)
      i = i.unionWith(a.view.la)
    }
    return i
  }
}
function sI(t) {
  const e = K(t)
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = wv.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = iI.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = tI.bind(null, e)),
    (e.fa.u_ = QS.bind(null, e.eventManager)),
    (e.fa.xa = KS.bind(null, e.eventManager)),
    e
  )
}
class ip {
  constructor() {
    this.synchronizeTabs = !1
  }
  async initialize(e) {
    ;(this.serializer = dv(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.createSharedClientState(e)),
      (this.persistence = this.createPersistence(e)),
      await this.persistence.start(),
      (this.localStore = this.createLocalStore(e)),
      (this.gcScheduler = this.createGarbageCollectionScheduler(
        e,
        this.localStore
      )),
      (this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(
        e,
        this.localStore
      ))
  }
  createGarbageCollectionScheduler(e, n) {
    return null
  }
  createIndexBackfillerScheduler(e, n) {
    return null
  }
  createLocalStore(e) {
    return TS(this.persistence, new ES(), e.initialUser, this.serializer)
  }
  createPersistence(e) {
    return new yS(zh.Hr, this.serializer)
  }
  createSharedClientState(e) {
    return new RS()
  }
  async terminate() {
    var e, n
    ;(e = this.gcScheduler) === null || e === void 0 || e.stop(),
      (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown()
  }
}
class oI {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        np(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = rI.bind(
        null,
        this.syncEngine
      )),
      await US(this.remoteStore, this.syncEngine.isPrimaryClient))
  }
  createEventManager(e) {
    return (function () {
      return new BS()
    })()
  }
  createDatastore(e) {
    const n = dv(e.databaseInfo.databaseId),
      r = (function (s) {
        return new NS(s)
      })(e.databaseInfo)
    return (function (s, o, a, l) {
      return new LS(s, o, a, l)
    })(e.authCredentials, e.appCheckCredentials, r, n)
  }
  createRemoteStore(e) {
    return (function (r, i, s, o, a) {
      return new MS(r, i, s, o, a)
    })(
      this.localStore,
      this.datastore,
      e.asyncQueue,
      (n) => np(this.syncEngine, n, 0),
      (function () {
        return Jf.D() ? new Jf() : new PS()
      })()
    )
  }
  createSyncEngine(e, n) {
    return (function (i, s, o, a, l, u, c) {
      const h = new XS(i, s, o, a, l, u)
      return c && (h.Fa = !0), h
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n
    )
  }
  async terminate() {
    var e
    await (async function (r) {
      const i = K(r)
      I('RemoteStore', 'RemoteStore shutting down.'),
        i.v_.add(5),
        await Ps(i),
        i.M_.shutdown(),
        i.x_.set('Unknown')
    })(this.remoteStore),
      (e = this.datastore) === null || e === void 0 || e.terminate()
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aI {
  constructor(e) {
    ;(this.observer = e), (this.muted = !1)
  }
  next(e) {
    this.observer.next && this.Ba(this.observer.next, e)
  }
  error(e) {
    this.observer.error
      ? this.Ba(this.observer.error, e)
      : Vt('Uncaught Error in snapshot listener:', e.toString())
  }
  La() {
    this.muted = !0
  }
  Ba(e, n) {
    this.muted ||
      setTimeout(() => {
        this.muted || e(n)
      }, 0)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lI {
  constructor(e, n, r, i) {
    ;(this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = Le.UNAUTHENTICATED),
      (this.clientId = bw.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        I('FirestoreClient', 'Received user=', s.uid),
          await this.authCredentialListener(s),
          (this.user = s)
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          I('FirestoreClient', 'Received new app check token=', s),
          this.appCheckCredentialListener(s, this.user)
        )
      )
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    }
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new V(
        T.FAILED_PRECONDITION,
        'The client has already been terminated.'
      )
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode()
    const e = new pn()
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve()
        } catch (n) {
          const r = vv(n, 'Failed to shutdown persistence')
          e.reject(r)
        }
      }),
      e.promise
    )
  }
}
async function $l(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    I('FirestoreClient', 'Initializing OfflineComponentProvider')
  const n = t.configuration
  await e.initialize(n)
  let r = n.initialUser
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await cv(e.localStore, i), (r = i))
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t._offlineComponents = e)
}
async function sp(t, e) {
  t.asyncQueue.verifyOperationInProgress()
  const n = await cI(t)
  I('FirestoreClient', 'Initializing OnlineComponentProvider'),
    await e.initialize(n, t.configuration),
    t.setCredentialChangeListener((r) => ep(e.remoteStore, r)),
    t.setAppCheckTokenChangeListener((r, i) => ep(e.remoteStore, i)),
    (t._onlineComponents = e)
}
function uI(t) {
  return t.name === 'FirebaseError'
    ? t.code === T.FAILED_PRECONDITION || t.code === T.UNIMPLEMENTED
    : !(typeof DOMException < 'u' && t instanceof DOMException) ||
        t.code === 22 ||
        t.code === 20 ||
        t.code === 11
}
async function cI(t) {
  if (!t._offlineComponents)
    if (t._uninitializedComponentsProvider) {
      I('FirestoreClient', 'Using user provided OfflineComponentProvider')
      try {
        await $l(t, t._uninitializedComponentsProvider._offline)
      } catch (e) {
        const n = e
        if (!uI(n)) throw n
        $r(
          'Error using user provided cache. Falling back to memory cache: ' + n
        ),
          await $l(t, new ip())
      }
    } else
      I('FirestoreClient', 'Using default OfflineComponentProvider'),
        await $l(t, new ip())
  return t._offlineComponents
}
async function hI(t) {
  return (
    t._onlineComponents ||
      (t._uninitializedComponentsProvider
        ? (I('FirestoreClient', 'Using user provided OnlineComponentProvider'),
          await sp(t, t._uninitializedComponentsProvider._online))
        : (I('FirestoreClient', 'Using default OnlineComponentProvider'),
          await sp(t, new oI()))),
    t._onlineComponents
  )
}
async function dI(t) {
  const e = await hI(t),
    n = e.eventManager
  return (
    (n.onListen = JS.bind(null, e.syncEngine)),
    (n.onUnlisten = eI.bind(null, e.syncEngine)),
    n
  )
}
function fI(t, e, n = {}) {
  const r = new pn()
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (s, o, a, l, u) {
        const c = new aI({
            next: (f) => {
              o.enqueueAndForget(() => qS(s, h)),
                f.fromCache && l.source === 'server'
                  ? u.reject(
                      new V(
                        T.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : u.resolve(f)
            },
            error: (f) => u.reject(f),
          }),
          h = new WS(a, c, { includeMetadataChanges: !0, Z_: !0 })
        return HS(s, h)
      })(await dI(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  )
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Iv(t) {
  const e = {}
  return t.timeoutSeconds !== void 0 && (e.timeoutSeconds = t.timeoutSeconds), e
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const op = new Map()
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pI(t, e, n) {
  if (!n)
    throw new V(
      T.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`
    )
}
function mI(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new V(T.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`)
}
function ap(t) {
  if (L.isDocumentKey(t))
    throw new V(
      T.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    )
}
function gI(t) {
  if (t === void 0) return 'undefined'
  if (t === null) return 'null'
  if (typeof t == 'string')
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t)
  if (typeof t == 'number' || typeof t == 'boolean') return '' + t
  if (typeof t == 'object') {
    if (t instanceof Array) return 'an array'
    {
      const e = (function (r) {
        return r.constructor ? r.constructor.name : null
      })(t)
      return e ? `a custom ${e} object` : 'an object'
    }
  }
  return typeof t == 'function' ? 'a function' : $()
}
function lc(t, e) {
  if (('_delegate' in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new V(
        T.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      )
    {
      const n = gI(t)
      throw new V(
        T.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`
      )
    }
  }
  return t
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lp {
  constructor(e) {
    var n, r
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new V(
          T.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        )
      ;(this.host = 'firestore.googleapis.com'), (this.ssl = !0)
    } else
      (this.host = e.host),
        (this.ssl = (n = e.ssl) === null || n === void 0 || n)
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.localCache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new V(
          T.INVALID_ARGUMENT,
          'cacheSizeBytes must be at least 1048576'
        )
      this.cacheSizeBytes = e.cacheSizeBytes
    }
    mI(
      'experimentalForceLongPolling',
      e.experimentalForceLongPolling,
      'experimentalAutoDetectLongPolling',
      e.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling =
            !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = Iv(
        (r = e.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}
      )),
      (function (s) {
        if (s.timeoutSeconds !== void 0) {
          if (isNaN(s.timeoutSeconds))
            throw new V(
              T.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`
            )
          if (s.timeoutSeconds < 5)
            throw new V(
              T.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`
            )
          if (s.timeoutSeconds > 30)
            throw new V(
              T.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`
            )
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams)
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds
      })(
        this.experimentalLongPollingOptions,
        e.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    )
  }
}
class bh {
  constructor(e, n, r, i) {
    ;(this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new lp({})),
      (this._settingsFrozen = !1)
  }
  get app() {
    if (!this._app)
      throw new V(
        T.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      )
    return this._app
  }
  get _initialized() {
    return this._settingsFrozen
  }
  get _terminated() {
    return this._terminateTask !== void 0
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new V(
        T.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      )
    ;(this._settings = new lp(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new zw()
          switch (r.type) {
            case 'firstParty':
              return new Qw(
                r.sessionIndex || '0',
                r.iamToken || null,
                r.authTokenFactory || null
              )
            case 'provider':
              return r.client
            default:
              throw new V(
                T.INVALID_ARGUMENT,
                'makeAuthCredentialsProvider failed due to invalid credential type'
              )
          }
        })(e.credentials))
  }
  _getSettings() {
    return this._settings
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    )
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    }
  }
  _terminate() {
    return (
      (function (n) {
        const r = op.get(n)
        r &&
          (I('ComponentProvider', 'Removing Datastore'),
          op.delete(n),
          r.terminate())
      })(this),
      Promise.resolve()
    )
  }
}
function yI(t, e, n, r = {}) {
  var i
  const s = (t = lc(t, bh))._getSettings(),
    o = `${e}:${n}`
  if (
    (s.host !== 'firestore.googleapis.com' &&
      s.host !== o &&
      $r(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
      ),
    t._setSettings(Object.assign(Object.assign({}, s), { host: o, ssl: !1 })),
    r.mockUserToken)
  ) {
    let a, l
    if (typeof r.mockUserToken == 'string')
      (a = r.mockUserToken), (l = Le.MOCK_USER)
    else {
      a = _1(
        r.mockUserToken,
        (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId
      )
      const u = r.mockUserToken.sub || r.mockUserToken.user_id
      if (!u)
        throw new V(
          T.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        )
      l = new Le(u)
    }
    t._authCredentials = new Bw(new Fy(a, l))
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ka {
  constructor(e, n, r) {
    ;(this.converter = n),
      (this._query = r),
      (this.type = 'query'),
      (this.firestore = e)
  }
  withConverter(e) {
    return new Ka(this.firestore, e, this._query)
  }
}
class Zr {
  constructor(e, n, r) {
    ;(this.converter = n),
      (this._key = r),
      (this.type = 'document'),
      (this.firestore = e)
  }
  get _path() {
    return this._key.path
  }
  get id() {
    return this._key.path.lastSegment()
  }
  get path() {
    return this._key.path.canonicalString()
  }
  get parent() {
    return new kr(this.firestore, this.converter, this._key.path.popLast())
  }
  withConverter(e) {
    return new Zr(this.firestore, e, this._key)
  }
}
class kr extends Ka {
  constructor(e, n, r) {
    super(e, n, Qy(r)), (this._path = r), (this.type = 'collection')
  }
  get id() {
    return this._query.path.lastSegment()
  }
  get path() {
    return this._query.path.canonicalString()
  }
  get parent() {
    const e = this._path.popLast()
    return e.isEmpty() ? null : new Zr(this.firestore, null, new L(e))
  }
  withConverter(e) {
    return new kr(this.firestore, e, this._path)
  }
}
function vI(t, e, ...n) {
  if (((t = C1(t)), pI('collection', 'path', e), t instanceof bh)) {
    const r = oe.fromString(e, ...n)
    return ap(r), new kr(t, null, r)
  }
  {
    if (!(t instanceof Zr || t instanceof kr))
      throw new V(
        T.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      )
    const r = t._path.child(oe.fromString(e, ...n))
    return ap(r), new kr(t.firestore, null, r)
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _I {
  constructor() {
    ;(this.Xa = Promise.resolve()),
      (this.eu = []),
      (this.tu = !1),
      (this.nu = []),
      (this.ru = null),
      (this.iu = !1),
      (this.su = !1),
      (this.ou = []),
      (this.jo = new fv(this, 'async_queue_retry')),
      (this._u = () => {
        const n = Fl()
        n &&
          I('AsyncQueue', 'Visibility state changed to ' + n.visibilityState),
          this.jo.Ko()
      })
    const e = Fl()
    e &&
      typeof e.addEventListener == 'function' &&
      e.addEventListener('visibilitychange', this._u)
  }
  get isShuttingDown() {
    return this.tu
  }
  enqueueAndForget(e) {
    this.enqueue(e)
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.au(), this.uu(e)
  }
  enterRestrictedMode(e) {
    if (!this.tu) {
      ;(this.tu = !0), (this.su = e || !1)
      const n = Fl()
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this._u)
    }
  }
  enqueue(e) {
    if ((this.au(), this.tu)) return new Promise(() => {})
    const n = new pn()
    return this.uu(() =>
      this.tu && this.su
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise)
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.eu.push(e), this.cu()))
  }
  async cu() {
    if (this.eu.length !== 0) {
      try {
        await this.eu[0](), this.eu.shift(), this.jo.reset()
      } catch (e) {
        if (!Cs(e)) throw e
        I('AsyncQueue', 'Operation failed with retryable error: ' + e)
      }
      this.eu.length > 0 && this.jo.qo(() => this.cu())
    }
  }
  uu(e) {
    const n = this.Xa.then(
      () => (
        (this.iu = !0),
        e()
          .catch((r) => {
            ;(this.ru = r), (this.iu = !1)
            const i = (function (o) {
              let a = o.message || ''
              return (
                o.stack &&
                  (a = o.stack.includes(o.message)
                    ? o.stack
                    : o.message +
                      `
` +
                      o.stack),
                a
              )
            })(r)
            throw (Vt('INTERNAL UNHANDLED ERROR: ', i), r)
          })
          .then((r) => ((this.iu = !1), r))
      )
    )
    return (this.Xa = n), n
  }
  enqueueAfterDelay(e, n, r) {
    this.au(), this.ou.indexOf(e) > -1 && (n = 0)
    const i = Kh.createAndSchedule(this, e, n, r, (s) => this.lu(s))
    return this.nu.push(i), i
  }
  au() {
    this.ru && $()
  }
  verifyOperationInProgress() {}
  async hu() {
    let e
    do (e = this.Xa), await e
    while (e !== this.Xa)
  }
  Pu(e) {
    for (const n of this.nu) if (n.timerId === e) return !0
    return !1
  }
  Iu(e) {
    return this.hu().then(() => {
      this.nu.sort((n, r) => n.targetTimeMs - r.targetTimeMs)
      for (const n of this.nu)
        if ((n.skipDelay(), e !== 'all' && n.timerId === e)) break
      return this.hu()
    })
  }
  Tu(e) {
    this.ou.push(e)
  }
  lu(e) {
    const n = this.nu.indexOf(e)
    this.nu.splice(n, 1)
  }
}
class Av extends bh {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = 'firestore'),
      (this._queue = (function () {
        return new _I()
      })()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || '[DEFAULT]')
  }
  _terminate() {
    return this._firestoreClient || Cv(this), this._firestoreClient.terminate()
  }
}
function EI(t, e) {
  const n = typeof t == 'object' ? t : AE(),
    r = typeof t == 'string' ? t : e || '(default)',
    i = wE(n, 'firestore').getImmediate({ identifier: r })
  if (!i._initialized) {
    const s = y1('firestore')
    s && yI(i, ...s)
  }
  return i
}
function wI(t) {
  return (
    t._firestoreClient || Cv(t),
    t._firestoreClient.verifyNotTerminated(),
    t._firestoreClient
  )
}
function Cv(t) {
  var e, n, r
  const i = t._freezeSettings(),
    s = (function (a, l, u, c) {
      return new oT(
        a,
        l,
        u,
        c.host,
        c.ssl,
        c.experimentalForceLongPolling,
        c.experimentalAutoDetectLongPolling,
        Iv(c.experimentalLongPollingOptions),
        c.useFetchStreams
      )
    })(
      t._databaseId,
      ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || '',
      t._persistenceKey,
      i
    )
  ;(t._firestoreClient = new lI(
    t._authCredentials,
    t._appCheckCredentials,
    t._queue,
    s
  )),
    !((n = i.localCache) === null || n === void 0) &&
      n._offlineComponentProvider &&
      !((r = i.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (t._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: i.localCache.kind,
        _offline: i.localCache._offlineComponentProvider,
        _online: i.localCache._onlineComponentProvider,
      })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ia {
  constructor(e) {
    this._byteString = e
  }
  static fromBase64String(e) {
    try {
      return new ia(Ue.fromBase64String(e))
    } catch (n) {
      throw new V(
        T.INVALID_ARGUMENT,
        'Failed to construct data from Base64 string: ' + n
      )
    }
  }
  static fromUint8Array(e) {
    return new ia(Ue.fromUint8Array(e))
  }
  toBase64() {
    return this._byteString.toBase64()
  }
  toUint8Array() {
    return this._byteString.toUint8Array()
  }
  toString() {
    return 'Bytes(base64: ' + this.toBase64() + ')'
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString)
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rv {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new V(
          T.INVALID_ARGUMENT,
          'Invalid field name at argument $(i + 1). Field names must not be empty.'
        )
    this._internalPath = new Be(e)
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class TI {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new V(
        T.INVALID_ARGUMENT,
        'Latitude must be a number between -90 and 90, but was: ' + e
      )
    if (!isFinite(n) || n < -180 || n > 180)
      throw new V(
        T.INVALID_ARGUMENT,
        'Longitude must be a number between -180 and 180, but was: ' + n
      )
    ;(this._lat = e), (this._long = n)
  }
  get latitude() {
    return this._lat
  }
  get longitude() {
    return this._long
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long }
  }
  _compareTo(e) {
    return W(this._lat, e._lat) || W(this._long, e._long)
  }
}
const SI = new RegExp('[~\\*/\\[\\]]')
function II(t, e, n) {
  if (e.search(SI) >= 0)
    throw up(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    )
  try {
    return new Rv(...e.split('.'))._internalPath
  } catch {
    throw up(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    )
  }
}
function up(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0
  let a = `Function ${e}() called with invalid data`
  n && (a += ' (via `toFirestore()`)'), (a += '. ')
  let l = ''
  return (
    (s || o) &&
      ((l += ' (found'),
      s && (l += ` in field ${r}`),
      o && (l += ` in document ${i}`),
      (l += ')')),
    new V(T.INVALID_ARGUMENT, a + t + l)
  )
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pv {
  constructor(e, n, r, i, s) {
    ;(this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = i),
      (this._converter = s)
  }
  get id() {
    return this._key.path.lastSegment()
  }
  get ref() {
    return new Zr(this._firestore, this._converter, this._key)
  }
  exists() {
    return this._document !== null
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new AI(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        )
        return this._converter.fromFirestore(e)
      }
      return this._userDataWriter.convertValue(this._document.data.value)
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(kv('DocumentSnapshot.get', e))
      if (n !== null) return this._userDataWriter.convertValue(n)
    }
  }
}
class AI extends Pv {
  data() {
    return super.data()
  }
}
function kv(t, e) {
  return typeof e == 'string'
    ? II(t, e)
    : e instanceof Rv
    ? e._internalPath
    : e._delegate._internalPath
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function CI(t) {
  if (t.limitType === 'L' && t.explicitOrderBy.length === 0)
    throw new V(
      T.UNIMPLEMENTED,
      'limitToLast() queries require specifying at least one orderBy() clause'
    )
}
class RI {
  convertValue(e, n = 'none') {
    switch (Yn(e)) {
      case 0:
        return null
      case 1:
        return e.booleanValue
      case 2:
        return de(e.integerValue || e.doubleValue)
      case 3:
        return this.convertTimestamp(e.timestampValue)
      case 4:
        return this.convertServerTimestamp(e, n)
      case 5:
        return e.stringValue
      case 6:
        return this.convertBytes(bn(e.bytesValue))
      case 7:
        return this.convertReference(e.referenceValue)
      case 8:
        return this.convertGeoPoint(e.geoPointValue)
      case 9:
        return this.convertArray(e.arrayValue, n)
      case 10:
        return this.convertObject(e.mapValue, n)
      default:
        throw $()
    }
  }
  convertObject(e, n) {
    return this.convertObjectMap(e.fields, n)
  }
  convertObjectMap(e, n = 'none') {
    const r = {}
    return (
      $a(e, (i, s) => {
        r[i] = this.convertValue(s, n)
      }),
      r
    )
  }
  convertGeoPoint(e) {
    return new TI(de(e.latitude), de(e.longitude))
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n))
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case 'previous':
        const r = Vh(e)
        return r == null ? null : this.convertValue(r, n)
      case 'estimate':
        return this.convertTimestamp(cs(e))
      default:
        return null
    }
  }
  convertTimestamp(e) {
    const n = vn(e)
    return new Je(n.seconds, n.nanos)
  }
  convertDocumentKey(e, n) {
    const r = oe.fromString(e)
    pe(uv(r))
    const i = new hs(r.get(1), r.get(3)),
      s = new L(r.popFirst(5))
    return (
      i.isEqual(n) ||
        Vt(
          `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      s
    )
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ro {
  constructor(e, n) {
    ;(this.hasPendingWrites = e), (this.fromCache = n)
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    )
  }
}
class PI extends Pv {
  constructor(e, n, r, i, s, o) {
    super(e, n, r, i, o),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = s)
  }
  exists() {
    return super.exists()
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new _o(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        )
        return this._converter.fromFirestore(n, e)
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps
      )
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(kv('DocumentSnapshot.get', e))
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps)
    }
  }
}
class _o extends PI {
  data(e = {}) {
    return super.data(e)
  }
}
class kI {
  constructor(e, n, r, i) {
    ;(this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new ro(i.hasPendingWrites, i.fromCache)),
      (this.query = r)
  }
  get docs() {
    const e = []
    return this.forEach((n) => e.push(n)), e
  }
  get size() {
    return this._snapshot.docs.size
  }
  get empty() {
    return this.size === 0
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        n,
        new _o(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new ro(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      )
    })
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges
    if (n && this._snapshot.excludesMetadataChanges)
      throw new V(
        T.INVALID_ARGUMENT,
        'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
      )
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (i, s) {
          if (i._snapshot.oldDocs.isEmpty()) {
            let o = 0
            return i._snapshot.docChanges.map((a) => {
              const l = new _o(
                i._firestore,
                i._userDataWriter,
                a.doc.key,
                a.doc,
                new ro(
                  i._snapshot.mutatedKeys.has(a.doc.key),
                  i._snapshot.fromCache
                ),
                i.query.converter
              )
              return (
                a.doc, { type: 'added', doc: l, oldIndex: -1, newIndex: o++ }
              )
            })
          }
          {
            let o = i._snapshot.oldDocs
            return i._snapshot.docChanges
              .filter((a) => s || a.type !== 3)
              .map((a) => {
                const l = new _o(
                  i._firestore,
                  i._userDataWriter,
                  a.doc.key,
                  a.doc,
                  new ro(
                    i._snapshot.mutatedKeys.has(a.doc.key),
                    i._snapshot.fromCache
                  ),
                  i.query.converter
                )
                let u = -1,
                  c = -1
                return (
                  a.type !== 0 &&
                    ((u = o.indexOf(a.doc.key)), (o = o.delete(a.doc.key))),
                  a.type !== 1 &&
                    ((o = o.add(a.doc)), (c = o.indexOf(a.doc.key))),
                  { type: xI(a.type), doc: l, oldIndex: u, newIndex: c }
                )
              })
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    )
  }
}
function xI(t) {
  switch (t) {
    case 0:
      return 'added'
    case 2:
    case 3:
      return 'modified'
    case 1:
      return 'removed'
    default:
      return $()
  }
}
class NI extends RI {
  constructor(e) {
    super(), (this.firestore = e)
  }
  convertBytes(e) {
    return new ia(e)
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId)
    return new Zr(this.firestore, null, n)
  }
}
function DI(t) {
  t = lc(t, Ka)
  const e = lc(t.firestore, Av),
    n = wI(e),
    r = new NI(e)
  return CI(t._query), fI(n, t._query).then((i) => new kI(e, r, t, i))
}
;(function (e, n = !0) {
  ;(function (i) {
    Yr = i
  })(IE),
    Wo(
      new Zi(
        'firestore',
        (r, { instanceIdentifier: i, options: s }) => {
          const o = r.getProvider('app').getImmediate(),
            a = new Av(
              new Hw(r.getProvider('auth-internal')),
              new Ww(r.getProvider('app-check-internal')),
              (function (u, c) {
                if (
                  !Object.prototype.hasOwnProperty.apply(u.options, [
                    'projectId',
                  ])
                )
                  throw new V(
                    T.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  )
                return new hs(u.options.projectId, c)
              })(o, i),
              o
            )
          return (
            (s = Object.assign({ useFetchStreams: n }, s)), a._setSettings(s), a
          )
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    Ir(kf, '4.4.1', e),
    Ir(kf, '4.4.1', 'esm2017')
})()
var VI = 'firebase',
  LI = '10.7.2'
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Ir(VI, LI, 'app')
const OI = {
    apiKey: 'AIzaSyCUOML6rLU4b0uImZsqoGSpcIdponc0qA8',
    authDomain: 'portfolio-jpin730.firebaseapp.com',
    projectId: 'portfolio-jpin730',
    storageBucket: 'portfolio-jpin730.appspot.com',
    messagingSenderId: '733714402019',
    appId: '1:733714402019:web:a1301af4562abe9ecc53d6',
  },
  MI = Ng(OI),
  FI = EI(MI),
  $I = async () => {
    const t = vI(FI, 'projects')
    return (await DI(t)).docs.map((n) => ({ id: n.id, ...n.data() }))
  },
  jI = () =>
    A.jsx('footer', {
      className: 'bg-dark-subtle',
      children: A.jsxs('p', {
        className: 'container my-0 py-3 text-center',
        children: [
          A.jsx('a', {
            className: 'text-decoration-none',
            href: 'https://github.com/jpin730',
            target: '_blank',
            rel: 'noreferrer',
            children: 'GitHub',
          }),
          A.jsx('span', { className: 'mx-2', children: '·' }),
          A.jsx('a', {
            className: 'text-decoration-none',
            href: 'https://linkedin.com/in/jpin730',
            target: '_blank',
            rel: 'noreferrer',
            children: 'LinkedIn',
          }),
          A.jsx('span', { className: 'mx-2', children: '·' }),
          A.jsx('a', {
            className: 'text-decoration-none',
            href: 'https://jpin730.github.io/certificates',
            target: '_blank',
            rel: 'noreferrer',
            children: 'Certificates',
          }),
        ],
      }),
    }),
  UI = () => {
    const [t, e] = vt.useState(!1)
    return (
      vt.useEffect(() => {
        const n = () => e(window.scrollY / window.screen.height > 0.5)
        return (
          window.addEventListener('scroll', n),
          () => {
            window.removeEventListener('scroll', n)
          }
        )
      }, []),
      A.jsx(A.Fragment, {
        children:
          t &&
          A.jsx('button', {
            title: 'Go to top',
            className:
              'to-top btn btn-primary position-fixed bottom-0 end-0 p-3 m-3 m-lg-5 rounded',
            onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
            children: A.jsx('img', {
              loading: 'eager',
              src: '/top-arrow.svg',
              width: '24',
              height: '24',
              alt: 'top arrow icon',
            }),
          }),
      })
    )
  },
  zI = () => {
    const t = (i) => {
        document.documentElement.setAttribute('data-bs-theme', i),
          localStorage.setItem('theme', i)
      },
      [e, n] = vt.useState(() => {
        const i = localStorage.getItem('theme')
        if (i && (i === 'dark' || i === 'light')) return t(i), i
        const s = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        return t(s), s
      }),
      r = () => {
        const i = e === 'dark' ? 'light' : 'dark'
        n(i), t(i)
      }
    return A.jsx('nav', {
      className: `navbar position-sticky top-0 mb-5 z-1 ${
        e === 'dark' ? 'bg-black' : 'bg-dark'
      }`,
      children: A.jsxs('div', {
        className: 'container',
        children: [
          A.jsxs('div', {
            className: 'd-flex gap-3',
            children: [
              A.jsx('a', {
                target: '_blank',
                rel: 'noreferrer',
                className: 'text-light',
                href: 'https://github.com/jpin730',
                children: A.jsx('svg', {
                  width: '20',
                  height: '20',
                  fill: 'currentColor',
                  viewBox: '0 0 16 16',
                  children: A.jsx('path', {
                    d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8',
                  }),
                }),
              }),
              A.jsx('a', {
                target: '_blank',
                rel: 'noreferrer',
                className: 'text-light',
                href: 'https://linkedin.com/in/jpin730',
                children: A.jsx('svg', {
                  width: '20',
                  height: '20',
                  fill: 'currentColor',
                  viewBox: '0 0 16 16',
                  children: A.jsx('path', {
                    d: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z',
                  }),
                }),
              }),
            ],
          }),
          A.jsx('button', {
            className: 'btn btn-transparent btn-large text-light',
            onClick: r,
            children:
              e === 'dark'
                ? A.jsx('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 16 16',
                    fill: 'currentcolor',
                    children: A.jsx('path', {
                      d: 'M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278',
                    }),
                  })
                : A.jsx('svg', {
                    width: '20',
                    height: '20',
                    fill: 'currentColor',
                    viewBox: '0 0 16 16',
                    children: A.jsx('path', {
                      d: 'M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708',
                    }),
                  }),
          }),
        ],
      }),
    })
  },
  BI = () => {
    const [t, e] = vt.useState([]),
      [n, r] = vt.useState(!0),
      i = () => {
        $I()
          .then((s) => {
            s.sort((o, a) => a.created.localeCompare(o.created)), e(s)
          })
          .catch(() => e([]))
          .finally(() => {
            r(!1)
          })
      }
    return (
      vt.useEffect(() => {
        i()
      }, []),
      A.jsxs('div', {
        className: 'd-flex flex-column justify-content-between min-vh-100',
        children: [
          A.jsx(zI, {}),
          A.jsx(a1, {}),
          A.jsxs('main', {
            className: 'container flex-grow-1 my-4',
            children: [
              n && A.jsx(o1, {}),
              !n &&
                (t.length === 0
                  ? A.jsxs(A.Fragment, {
                      children: [
                        A.jsx('div', {
                          className: 'alert alert-info',
                          children: 'No projects available',
                        }),
                        A.jsx('button', {
                          className: 'btn btn-primary d-block mx-auto',
                          onClick: () => {
                            r(!0), i()
                          },
                          children: 'Reload projects',
                        }),
                      ],
                    })
                  : A.jsx(s1, { projects: t })),
            ],
          }),
          A.jsx(jI, {}),
          A.jsx(UI, {}),
        ],
      })
    )
  }
jl.createRoot(document.getElementById('root')).render(
  A.jsx(Wv.StrictMode, { children: A.jsx(BI, {}) })
)
