import { useAttrs as Jn, createElementBlock as V, openBlock as $, createElementVNode as ge, unref as s, reactive as ta, computed as G, ref as X, toRef as Jt, watch as st, defineComponent as Ke, onMounted as Ge, onUnmounted as jt, renderSlot as ue, normalizeProps as We, mergeProps as Ve, Fragment as we, createCommentVNode as J, normalizeStyle as ot, createTextVNode as bt, toDisplayString as Je, onBeforeUpdate as Xn, nextTick as lt, withModifiers as Xt, normalizeClass as Me, withDirectives as ia, renderList as _e, vShow as da, createVNode as nt, createBlock as Se, withCtx as De, withKeys as Zn, Transition as Kt, createSlots as Xe, useSlots as Et, guardReactiveProps as et, resolveDynamicComponent as ma, toValue as xn, h as el, render as an, getCurrentScope as tl, onScopeDispose as al, getCurrentInstance as nl, isRef as nn, Teleport as ll } from "vue";
import { format as pt, isEqual as Ft, isValid as ca, addMonths as Bt, subMonths as Zt, getMonth as Ae, getYear as ye, set as Re, startOfMonth as rl, setMonth as ol, setYear as mt, isAfter as It, isBefore as Ht, eachDayOfInterval as hn, getSeconds as Ut, getMinutes as Tt, getHours as kt, startOfWeek as Ua, endOfWeek as bn, setHours as sl, setMinutes as ul, setSeconds as kn, setMilliseconds as wn, parse as Na, isDate as il, subDays as dl, addDays as Dt, addHours as cl, addYears as Dn, subYears as Mn, endOfYear as $n, startOfYear as fa, differenceInYears as fl, add as An, sub as vl, getWeek as ml, getISOWeek as pl, isSameQuarter as ln, eachQuarterOfInterval as yl, startOfQuarter as gl, endOfQuarter as rn, getQuarter as on, differenceInCalendarDays as hl, getDay as bl } from "date-fns";
function Gt() {
  const e = Jn();
  return $(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img",
      ...e
    },
    [
      ge("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      ge("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ge("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ge("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Gt.compatConfig = {
  MODE: 3
};
function Tn() {
  return $(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ge("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      ge("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Tn.compatConfig = {
  MODE: 3
};
function Wa() {
  return $(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ge("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Wa.compatConfig = {
  MODE: 3
};
function Va() {
  return $(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ge("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Va.compatConfig = {
  MODE: 3
};
function ja() {
  return $(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ge("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      ge("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
ja.compatConfig = {
  MODE: 3
};
function Ka() {
  return $(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ge("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Ka.compatConfig = {
  MODE: 3
};
function Ga() {
  return $(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ge("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Ga.compatConfig = {
  MODE: 3
};
const tt = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Qa = (e, t, r) => {
  const a = La(e, t, r);
  return a || K();
}, kl = (e, t, r) => {
  const a = t.dateInTz ? tt(new Date(e), t.dateInTz) : K(e);
  return r ? je(a, !0) : a;
}, La = (e, t, r) => {
  if (!e) return null;
  const a = r ? je(K(e), !0) : K(e);
  return t ? t.exactMatch ? kl(e, t, r) : tt(a, t.timezone) : a;
}, wl = (e) => {
  const r = new Date(e.getFullYear(), 0, 1).getTimezoneOffset();
  return e.getTimezoneOffset() < r;
}, Dl = (e, t) => {
  if (!e) return 0;
  const r = /* @__PURE__ */ new Date(), a = new Date(r.toLocaleString("en-US", { timeZone: "UTC" })), n = new Date(r.toLocaleString("en-US", { timeZone: e })), c = (wl(t ?? n) ? n : t ?? n).getTimezoneOffset() / 60;
  return (+a - +n) / (1e3 * 60 * 60) - c;
};
var ut = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(ut || {}), it = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(it || {}), _t = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(_t || {}), qe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(qe || {});
const Ml = ["timestamp", "date", "iso"];
var Ze = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Ze || {}), Oe = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Oe || {}), zt = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(zt || {});
function sn(e) {
  return (t) => {
    const r = new Intl.DateTimeFormat(e, {
      weekday: "short",
      timeZone: "UTC"
    }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`));
    return e === "ar" ? r.slice(2, 5) : r.slice(0, 2);
  };
}
function $l(e) {
  return (t) => pt(tt(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
const Al = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = a.map($l(e));
    } catch {
      n = a.map(sn(t));
    }
  else
    n = a.map(sn(t));
  const u = n.slice(0, r), c = n.slice(r + 1, n.length);
  return [n[r]].concat(...c).concat(...u);
}, qa = (e, t, r) => {
  const a = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    a.push({ value: +n, text: Sn(n) });
  return r ? a.reverse() : a;
}, Sn = (e) => {
  e = Number(e);
  const t = [
    { name: "明治", start: 1868, symbol: "M" },
    { name: "大正", start: 1912, symbol: "T" },
    { name: "昭和", start: 1926, symbol: "S" },
    { name: "平成", start: 1989, symbol: "H" },
    { name: "令和", start: 2019, symbol: "R" }
  ], r = t.findIndex(
    (a, n) => e >= a.start && (n === t.length - 1 || e < t[n + 1].start)
  );
  if (r !== -1) {
    const a = t[r], n = e - a.start + 1;
    return `${e}(${a.name}${n === 1 ? "元" : n}年)`;
  }
  return `${e}`;
}, Pn = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((u) => {
    const c = u < 10 ? `0${u}` : u;
    return /* @__PURE__ */ new Date(`2017-${c}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const u = r === "long" ? "LLLL" : "LLL";
      return a.map((c, p) => {
        const d = pt(tt(c, "UTC"), u, { locale: e });
        return {
          text: d.charAt(0).toUpperCase() + d.substring(1),
          value: p
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: r, timeZone: "UTC" });
  return a.map((u, c) => {
    const p = n.format(u);
    return {
      text: p.charAt(0).toUpperCase() + p.substring(1),
      value: c
    };
  });
}, Tl = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], He = (e) => {
  const t = s(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Sl = (e) => ({ type: "dot", ...e ?? {} }), Rn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Ja = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, ze = (e) => e, un = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, dn = (e) => e === null, Cn = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, Pl = (e) => {
  const t = [], r = (a) => a.filter((n) => n);
  for (let a = 0; a < e.length; a += 3) {
    const n = [e[a], e[a + 1], e[a + 2]];
    t.push(r(n));
  }
  return t;
}, xt = (e, t, r) => {
  const a = r != null, n = t != null;
  if (!a && !n) return !1;
  const u = +r, c = +t;
  return a && n ? +e > u || +e < c : a ? +e > u : n ? +e < c : !1;
}, Wt = (e, t) => Pl(e).map((r) => r.map((a) => {
  const { active: n, disabled: u, isBetween: c, highlighted: p } = t(a);
  return {
    ...a,
    active: n,
    disabled: u,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: u,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: u && n,
      dp__cell_in_between: c,
      "dp--highlighted": p
    }
  };
})), $t = (e, t, r = !1) => {
  e && t.allowStopPropagation && (r && e.stopImmediatePropagation(), e.stopPropagation());
}, Rl = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function Cl(e, t) {
  let r = [...document.querySelectorAll(Rl())];
  r = r.filter((n) => !e.contains(n) || n.hasAttribute("data-datepicker-instance"));
  const a = r.indexOf(e);
  if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= r.length))
    return r[a + (t ? -1 : 1)];
}
const Fa = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Ol = (e, t) => new Intl.NumberFormat(t, { useGrouping: !1, style: "decimal" }).format(e), Xa = (e, t) => pt(e, t ?? zt.DATE), Ta = (e) => Array.isArray(e), va = (e, t, r) => t.get(Xa(e, r)), Bl = (e, t) => e ? t ? t instanceof Map ? !!va(e, t) : t(K(e)) : !1 : !0, xe = (e, t, r = !1, a) => {
  if (e.key === Oe.enter || e.key === Oe.space)
    return r && e.preventDefault(), t();
  if (a) return a(e);
}, _l = () => "ontouchstart" in window || navigator.maxTouchPoints > 0, On = (e, t) => e ? zt.MONTH_AND_YEAR : t ? zt.YEAR : zt.DATE, Bn = (e) => e < 10 ? `0${e}` : e, cn = (e, t, r, a, n, u) => {
  const c = Na(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: u });
  return ca(c) && il(c) ? a || n ? c : Re(c, {
    hours: +r.hours,
    minutes: +(r == null ? void 0 : r.minutes),
    seconds: +(r == null ? void 0 : r.seconds),
    milliseconds: 0
  }) : null;
}, Yl = (e, t, r, a, n, u) => {
  const c = Array.isArray(r) ? r[0] : r;
  if (typeof t == "string")
    return cn(e, t, c, a, n, u);
  if (Array.isArray(t)) {
    let p = null;
    for (const d of t)
      if (p = cn(e, d, c, a, n, u), p)
        break;
    return p;
  }
  return typeof t == "function" ? t(e) : null;
}, K = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Il = (e, t, r) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), u = e.getDate().toString().padStart(2, "0"), c = e.getHours().toString().padStart(2, "0"), p = e.getMinutes().toString().padStart(2, "0"), d = r ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${u}T${c}:${p}:${d}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, je = (e, t) => {
  const r = K(JSON.parse(JSON.stringify(e))), a = Re(r, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return t ? rl(a) : a;
}, At = (e, t, r, a) => {
  let n = e ? K(e) : K();
  return (t || t === 0) && (n = sl(n, +t)), (r || r === 0) && (n = ul(n, +r)), (a || a === 0) && (n = kn(n, +a)), wn(n, 0);
}, Ne = (e, t) => !e || !t ? !1 : Ht(je(e), je(t)), Te = (e, t) => !e || !t ? !1 : Ft(je(e), je(t)), Fe = (e, t) => !e || !t ? !1 : It(je(e), je(t)), ea = (e, t, r) => e != null && e[0] && (e != null && e[1]) ? Fe(r, e[0]) && Ne(r, e[1]) : e != null && e[0] && t ? Fe(r, e[0]) && Ne(r, t) || Ne(r, e[0]) && Fe(r, t) : !1, dt = (e) => {
  const t = Re(new Date(e), { date: 1 });
  return je(t);
}, Sa = (e, t, r) => t && (r || r === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a) => a === t ? [a, r] : [a, isNaN(+e[a]) ? void 0 : +e[a]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, Yt = (e) => ({
  hours: kt(e),
  minutes: Tt(e),
  seconds: Ut(e)
}), _n = (e, t) => {
  if (t) {
    const r = ye(K(t));
    if (r > e) return 12;
    if (r === e) return Ae(K(t));
  }
}, Yn = (e, t) => {
  if (t) {
    const r = ye(K(t));
    return r < e ? -1 : r === e ? Ae(K(t)) : void 0;
  }
}, Vt = (e) => {
  if (e) return ye(K(e));
}, In = (e, t) => {
  const r = Fe(e, t) ? t : e, a = Fe(t, e) ? t : e;
  return hn({ start: r, end: a });
}, El = (e) => {
  const t = Bt(e, 1);
  return { month: Ae(t), year: ye(t) };
}, gt = (e, t) => {
  const r = Ua(e, { weekStartsOn: +t }), a = bn(e, { weekStartsOn: +t });
  return [r, a];
}, En = (e, t) => {
  const r = {
    hours: kt(K()),
    minutes: Tt(K()),
    seconds: t ? Ut(K()) : 0
  };
  return Object.assign(r, e);
}, Mt = (e, t, r) => [Re(K(e), { date: 1 }), Re(K(), { month: t, year: r, date: 1 })], ht = (e, t, r) => {
  let a = e ? K(e) : K();
  return (t || t === 0) && (a = ol(a, t)), r && (a = mt(a, r)), a;
}, Nn = (e, t, r, a, n) => {
  if (!a || n && !t || !n && !r) return !1;
  const u = n ? Bt(e, 1) : Zt(e, 1), c = [Ae(u), ye(u)];
  return n ? !Ll(...c, t) : !Nl(...c, r);
}, Nl = (e, t, r) => Ne(...Mt(r, e, t)) || Te(...Mt(r, e, t)), Ll = (e, t, r) => Fe(...Mt(r, e, t)) || Te(...Mt(r, e, t)), Ln = (e, t, r, a, n, u, c) => {
  if (typeof t == "function" && !c) return t(e);
  const p = r ? { locale: r } : void 0;
  return Array.isArray(e) ? `${pt(e[0], u, p)}${n && !e[1] ? "" : a}${e[1] ? pt(e[1], u, p) : ""}` : pt(e, u, p);
}, Nt = (e) => {
  if (e) return null;
  throw new Error(Ja.prop("partial-range"));
}, sa = (e, t) => {
  if (t) return e();
  throw new Error(Ja.prop("range"));
}, za = (e) => Array.isArray(e) ? ca(e[0]) && (e[1] ? ca(e[1]) : !0) : e ? ca(e) : !1, Fl = (e, t) => Re(t ?? K(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), Pa = (e, t, r, a) => {
  if (!e) return !0;
  if (a) {
    const n = r === "max" ? Ht(e, t) : It(e, t), u = { seconds: 0, milliseconds: 0 };
    return n || Ft(Re(e, u), Re(t, u));
  }
  return r === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, Ra = (e, t, r) => e ? Fl(e, t) : K(r ?? t), fn = (e, t, r, a, n) => {
  if (Array.isArray(a)) {
    const c = Ra(e, a[0], t), p = Ra(e, a[1], t);
    return Pa(a[0], c, r, !!t) && Pa(a[1], p, r, !!t) && n;
  }
  const u = Ra(e, a, t);
  return Pa(a, u, r, !!t) && n;
}, Ca = (e) => Re(K(), Yt(e)), zl = (e, t, r) => {
  if (e instanceof Map) {
    const a = `${Bn(r + 1)}-${t}`;
    return e.size ? e.has(a) : !1;
  }
  return typeof e == "function" ? e(je(Re(K(), { month: r, year: t }), !0)) : !1;
}, Hl = (e, t, r) => {
  if (e instanceof Map) {
    const a = `${Bn(r + 1)}-${t}`;
    return e.size ? e.has(a) : !0;
  }
  return !0;
}, Fn = (e, t, r) => typeof e == "function" ? e({ month: t, year: r }) : !!e.months.find((a) => a.month === t && a.year === r), Za = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Ha = (e) => `dp-${pt(e, "yyyy-MM-dd")}`, vn = (e, t) => {
  const r = dl(je(t), e), a = Dt(je(t), e);
  return { before: r, after: a };
}, Qt = ta({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), zn = () => {
  const e = (a) => {
    Qt.menuFocused = a;
  }, t = (a) => {
    Qt.shiftKeyInMenu !== a && (Qt.shiftKeyInMenu = a);
  };
  return {
    control: G(() => ({ shiftKeyInMenu: Qt.shiftKeyInMenu, menuFocused: Qt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Ce = ta({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Oa = X(null), ua = X(!1), Ba = X(!1), _a = X(!1), Ya = X(!1), Qe = X(0), Le = X(0), St = () => {
  const e = G(() => ua.value ? [...Ce.selectionGrid, Ce.actionRow].filter((h) => h.length) : Ba.value ? [
    ...Ce.timePicker[0],
    ...Ce.timePicker[1],
    Ya.value ? [] : [Oa.value],
    Ce.actionRow
  ].filter((h) => h.length) : _a.value ? [...Ce.monthPicker, Ce.actionRow] : [Ce.monthYear, ...Ce.calendar, Ce.time, Ce.actionRow].filter((h) => h.length)), t = (h) => {
    Qe.value = h ? Qe.value + 1 : Qe.value - 1;
    let R = null;
    e.value[Le.value] && (R = e.value[Le.value][Qe.value]), !R && e.value[Le.value + (h ? 1 : -1)] ? (Le.value = Le.value + (h ? 1 : -1), Qe.value = h ? 0 : e.value[Le.value].length - 1) : R || (Qe.value = h ? Qe.value - 1 : Qe.value + 1);
  }, r = (h) => {
    if (Le.value === 0 && !h || Le.value === e.value.length && h) return;
    Le.value = h ? Le.value + 1 : Le.value - 1, e.value[Le.value] ? e.value[Le.value] && !e.value[Le.value][Qe.value] && Qe.value !== 0 && (Qe.value = e.value[Le.value].length - 1) : Le.value = h ? Le.value - 1 : Le.value + 1;
  }, a = (h) => {
    let R = null;
    e.value[Le.value] && (R = e.value[Le.value][Qe.value]), R ? R.focus({ preventScroll: !ua.value }) : Qe.value = h ? Qe.value - 1 : Qe.value + 1;
  }, n = () => {
    t(!0), a(!0);
  }, u = () => {
    t(!1), a(!1);
  }, c = () => {
    r(!1), a(!0);
  }, p = () => {
    r(!0), a(!0);
  }, d = (h, R) => {
    Ce[R] = h;
  }, Y = (h, R) => {
    Ce[R] = h;
  }, f = () => {
    Qe.value = 0, Le.value = 0;
  };
  return {
    buildMatrix: d,
    buildMultiLevelMatrix: Y,
    setTimePickerBackRef: (h) => {
      Oa.value = h;
    },
    setSelectionGrid: (h) => {
      ua.value = h, f(), h || (Ce.selectionGrid = []);
    },
    setTimePicker: (h, R = !1) => {
      Ba.value = h, Ya.value = R, f(), h || (Ce.timePicker[0] = [], Ce.timePicker[1] = []);
    },
    setTimePickerElements: (h, R = 0) => {
      Ce.timePicker[R] = h;
    },
    arrowRight: n,
    arrowLeft: u,
    arrowUp: c,
    arrowDown: p,
    clearArrowNav: () => {
      Ce.monthYear = [], Ce.calendar = [], Ce.time = [], Ce.actionRow = [], Ce.selectionGrid = [], Ce.timePicker[0] = [], Ce.timePicker[1] = [], ua.value = !1, Ba.value = !1, Ya.value = !1, _a.value = !1, f(), Oa.value = null;
    },
    setMonthPicker: (h) => {
      _a.value = h, f();
    },
    refSets: Ce
    // exposed for testing
  };
}, mn = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), Ul = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  clearInput: "Clear value",
  calendarIcon: "Calendar icon",
  timePicker: "Time picker",
  monthPicker: (t) => `Month picker${t ? " overlay" : ""}`,
  yearPicker: (t) => `Year picker${t ? " overlay" : ""}`,
  timeOverlay: (t) => `${t} overlay`,
  ...e ?? {}
}), pn = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Wl = (e) => {
  const t = typeof e == "object" && e, r = {
    static: !0,
    solo: !1
  };
  if (!e) return { ...r, count: pn(!1) };
  const a = t ? e : {}, n = t ? a.count ?? !0 : e, u = pn(n);
  return Object.assign(r, a, { count: u });
}, Vl = (e, t, r) => e || (typeof r == "string" ? r : t), jl = (e) => typeof e == "boolean" ? e ? mn({}) : !1 : mn(e), Kl = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: "open",
    selectOnFocus: !1,
    rangeSeparator: " - ",
    escClose: !0
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, Gl = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), Ql = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), ql = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, Jl = (e) => ({ ...{
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0,
  arrowLeft: void 0,
  keepViewOnOffsetClick: !1,
  timeArrowHoldThreshold: 0,
  shadowDom: !1,
  mobileBreakpoint: 600,
  setDateOnMenuClose: !1
}, ...e ?? {} }), Xl = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((r) => K(r)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, Zl = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, xl = (e) => {
  const t = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...t, ...e } : {
    enabled: e,
    ...t
  };
}, er = (e) => e ? typeof e == "string" ? {
  timezone: e,
  exactMatch: !1,
  dateInTz: void 0,
  emitTimezone: void 0,
  convertModel: !0
} : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: e.emitTimezone ?? void 0,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: void 0 }, Ia = (e, t, r, a) => new Map(
  e.map((n) => {
    const u = Qa(n, t, a);
    return [Xa(u, r), u];
  })
), tr = (e, t) => e.length ? new Map(
  e.map((r) => {
    const a = Qa(r.date, t);
    return [Xa(a, zt.DATE), r];
  })
) : null, ar = (e) => {
  var r;
  const t = On(e.isMonthPicker, e.isYearPicker);
  return {
    minDate: La(e.minDate, e.timezone, e.isSpecific),
    maxDate: La(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: Ta(e.disabledDates) ? Ia(e.disabledDates, e.timezone, t, e.isSpecific) : e.disabledDates,
    allowedDates: Ta(e.allowedDates) ? Ia(e.allowedDates, e.timezone, t, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && Ta((r = e.highlight) == null ? void 0 : r.dates) ? Ia(e.highlight.dates, e.timezone, t) : e.highlight,
    markers: tr(e.markers, e.timezone)
  };
}, nr = (e) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: null } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, lr = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((r) => {
      const a = r, n = e[a], u = typeof e[a] == "string" ? { [n]: !0 } : Object.fromEntries(n.map((c) => [c, !0]));
      return [r, u];
    })
  )
}), Ye = (e) => {
  const t = () => {
    const H = e.enableSeconds ? ":ss" : "", M = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${M}${H}` : `hh${M}${H} aa`;
  }, r = () => {
    var H;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((H = _.value) == null ? void 0 : H.type) === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, a = (H) => En(H, e.enableSeconds), n = () => j.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, u = G(() => Wl(e.multiCalendars)), c = G(() => n()), p = G(() => Ul(e.ariaLabels)), d = G(() => Gl(e.filters)), Y = G(() => jl(e.transitions)), f = G(() => Ql(e.actionRow)), O = G(
    () => Vl(e.previewFormat, e.format, r())
  ), m = G(() => Kl(e.textInput)), P = G(() => ql(e.inline)), F = G(() => Jl(e.config)), L = G(() => Xl(e.highlight)), _ = G(() => Zl(e.weekNumbers)), h = G(() => er(e.timezone)), R = G(() => nr(e.multiDates)), b = G(
    () => ar({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: L.value,
      markers: e.markers,
      timezone: h.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker,
      isMonthPicker: e.monthPicker,
      isYearPicker: e.yearPicker
    })
  ), j = G(() => xl(e.range)), z = G(() => lr(e.ui));
  return {
    defaultedTransitions: Y,
    defaultedMultiCalendars: u,
    defaultedStartTime: c,
    defaultedAriaLabels: p,
    defaultedFilters: d,
    defaultedActionRow: f,
    defaultedPreviewFormat: O,
    defaultedTextInput: m,
    defaultedInline: P,
    defaultedConfig: F,
    defaultedHighlight: L,
    defaultedWeekNumbers: _,
    defaultedRange: j,
    propDates: b,
    defaultedTz: h,
    defaultedMultiDates: R,
    defaultedUI: z,
    getDefaultPattern: r,
    getDefaultStartTime: n,
    handleEventPropagation: (H) => {
      F.value.allowStopPropagation && H.stopPropagation(), F.value.allowPreventDefault && H.preventDefault();
    }
  };
}, rr = (e, t, r) => {
  const a = X(), { defaultedTextInput: n, defaultedRange: u, defaultedTz: c, defaultedMultiDates: p, getDefaultPattern: d } = Ye(t), Y = X(""), f = Jt(t, "format"), O = Jt(t, "formatLocale");
  st(
    a,
    () => {
      typeof t.onInternalModelChange == "function" && e("internal-model-change", a.value, T(!0));
    },
    { deep: !0 }
  ), st(u, (l, w) => {
    l.enabled !== w.enabled && (a.value = null);
  }), st(f, () => {
    U();
  });
  const m = (l) => c.value.timezone && c.value.convertModel ? tt(l, c.value.timezone) : l, P = (l) => {
    if (c.value.timezone && c.value.convertModel) {
      const w = Dl(c.value.timezone, l);
      return cl(l, w);
    }
    return l;
  }, F = (l, w, oe = !1) => Ln(
    l,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    w ?? d(),
    oe
  ), L = (l) => l ? t.modelType ? Z(l) : {
    hours: kt(l),
    minutes: Tt(l),
    seconds: t.enableSeconds ? Ut(l) : 0
  } : null, _ = (l) => t.modelType ? Z(l) : { month: Ae(l), year: ye(l) }, h = (l) => Array.isArray(l) ? p.value.enabled ? l.map((w) => R(w, mt(K(), w))) : sa(
    () => [
      mt(K(), l[0]),
      l[1] ? mt(K(), l[1]) : Nt(u.value.partialRange)
    ],
    u.value.enabled
  ) : mt(K(), +l), R = (l, w) => (typeof l == "string" || typeof l == "number") && t.modelType ? S(l) : w, b = (l) => Array.isArray(l) ? [
    R(
      l[0],
      At(null, +l[0].hours, +l[0].minutes, l[0].seconds)
    ),
    R(
      l[1],
      At(null, +l[1].hours, +l[1].minutes, l[1].seconds)
    )
  ] : R(l, At(null, l.hours, l.minutes, l.seconds)), j = (l) => {
    const w = Re(K(), { date: 1 });
    return Array.isArray(l) ? p.value.enabled ? l.map((oe) => R(oe, ht(w, +oe.month, +oe.year))) : sa(
      () => [
        R(l[0], ht(w, +l[0].month, +l[0].year)),
        R(
          l[1],
          l[1] ? ht(w, +l[1].month, +l[1].year) : Nt(u.value.partialRange)
        )
      ],
      u.value.enabled
    ) : R(l, ht(w, +l.month, +l.year));
  }, z = (l) => {
    if (Array.isArray(l))
      return l.map((w) => S(w));
    throw new Error(Ja.dateArr("multi-dates"));
  }, ae = (l) => {
    if (Array.isArray(l) && u.value.enabled) {
      const w = l[0], oe = l[1];
      return [
        K(Array.isArray(w) ? w[0] : null),
        Array.isArray(oe) && oe.length ? K(oe[0]) : null
      ];
    }
    return K(l[0]);
  }, H = (l) => t.modelAuto ? Array.isArray(l) ? [S(l[0]), S(l[1])] : t.autoApply ? [S(l)] : [S(l), null] : Array.isArray(l) ? sa(
    () => l[1] ? [
      S(l[0]),
      l[1] ? S(l[1]) : Nt(u.value.partialRange)
    ] : [S(l[0])],
    u.value.enabled
  ) : S(l), M = () => {
    Array.isArray(a.value) && u.value.enabled && a.value.length === 1 && a.value.push(Nt(u.value.partialRange));
  }, Q = () => {
    const l = a.value;
    return [
      Z(l[0]),
      l[1] ? Z(l[1]) : Nt(u.value.partialRange)
    ];
  }, B = () => Array.isArray(a.value) ? a.value[1] ? Q() : Z(ze(a.value[0])) : [], q = () => (a.value || []).map((l) => Z(l)), ve = (l = !1) => (l || M(), t.modelAuto ? B() : p.value.enabled ? q() : Array.isArray(a.value) ? sa(() => Q(), u.value.enabled) : Z(ze(a.value))), pe = (l) => !l || Array.isArray(l) && !l.length ? null : t.timePicker ? b(ze(l)) : t.monthPicker ? j(ze(l)) : t.yearPicker ? h(ze(l)) : p.value.enabled ? z(ze(l)) : t.weekPicker ? ae(ze(l)) : H(ze(l)), v = (l) => {
    const w = pe(l);
    za(ze(w)) ? (a.value = ze(w), U()) : (a.value = null, Y.value = "");
  }, N = () => {
    const l = (w) => pt(w, n.value.format);
    return `${l(a.value[0])} ${n.value.rangeSeparator} ${a.value[1] ? l(a.value[1]) : ""}`;
  }, ee = () => r.value && a.value ? Array.isArray(a.value) ? N() : pt(a.value, n.value.format) : F(a.value), y = () => a.value ? p.value.enabled ? a.value.map((l) => F(l)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? ee() : F(a.value) : "", U = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? Y.value = y() : Y.value = t.format(a.value);
  }, S = (l) => {
    if (t.utc) {
      const w = new Date(l);
      return t.utc === "preserve" ? new Date(w.getTime() + w.getTimezoneOffset() * 6e4) : w;
    }
    return t.modelType ? Ml.includes(t.modelType) ? m(new Date(l)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? m(
      Na(l, d(), /* @__PURE__ */ new Date(), { locale: O.value })
    ) : m(
      Na(l, t.modelType, /* @__PURE__ */ new Date(), { locale: O.value })
    ) : m(new Date(l));
  }, Z = (l) => l ? t.utc ? Il(l, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +P(l) : t.modelType === "iso" ? P(l).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? F(P(l)) : F(P(l), t.modelType, !0) : P(l) : "", A = (l, w = !1, oe = !1) => {
    if (oe) return l;
    if (e("update:model-value", l), c.value.emitTimezone && w) {
      const D = Array.isArray(l) ? l.map((he) => tt(ze(he), c.value.emitTimezone)) : tt(ze(l), c.value.emitTimezone);
      e("update:model-timezone-value", D);
    }
  }, ie = (l) => Array.isArray(a.value) ? p.value.enabled ? a.value.map((w) => l(w)) : [
    l(a.value[0]),
    a.value[1] ? l(a.value[1]) : Nt(u.value.partialRange)
  ] : l(ze(a.value)), i = () => {
    if (Array.isArray(a.value)) {
      const l = gt(a.value[0], t.weekStart), w = a.value[1] ? gt(a.value[1], t.weekStart) : [];
      return [l.map((oe) => K(oe)), w.map((oe) => K(oe))];
    }
    return gt(a.value, t.weekStart).map((l) => K(l));
  }, W = (l, w) => A(ze(ie(l)), !1, w), se = (l) => {
    const w = i();
    return l ? w : e("update:model-value", i());
  }, T = (l = !1) => (l || U(), t.monthPicker ? W(_, l) : t.timePicker ? W(L, l) : t.yearPicker ? W(ye, l) : t.weekPicker ? se(l) : A(ve(l), !0, l));
  return {
    inputValue: Y,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? u.value.enabled ? u.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
    parseExternalModelValue: v,
    formatInputValue: U,
    emitModelValue: T
  };
}, or = (e, t) => {
  const { defaultedFilters: r, propDates: a } = Ye(e), { validateMonthYearInRange: n } = Pt(e), u = (f, O) => {
    let m = f;
    return r.value.months.includes(Ae(m)) ? (m = O ? Bt(f, 1) : Zt(f, 1), u(m, O)) : m;
  }, c = (f, O) => {
    let m = f;
    return r.value.years.includes(ye(m)) ? (m = O ? Dn(f, 1) : Mn(f, 1), c(m, O)) : m;
  }, p = (f, O = !1) => {
    const m = Re(K(), { month: e.month, year: e.year });
    let P = f ? Bt(m, 1) : Zt(m, 1);
    e.disableYearSelect && (P = mt(P, e.year));
    let F = Ae(P), L = ye(P);
    r.value.months.includes(F) && (P = u(P, f), F = Ae(P), L = ye(P)), r.value.years.includes(L) && (P = c(P, f), L = ye(P)), n(F, L, f, e.preventMinMaxNavigation) && d(F, L, O);
  }, d = (f, O, m) => {
    t("update-month-year", { month: f, year: O, fromNav: m });
  }, Y = G(() => (f) => Nn(
    Re(K(), { month: e.month, year: e.year }),
    a.value.maxDate,
    a.value.minDate,
    e.preventMinMaxNavigation,
    f
  ));
  return { handleMonthYearChange: p, isDisabled: Y, updateMonthYear: d };
}, pa = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: [Boolean, String], default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  dayClass: {
    type: Function,
    default: null
  },
  yearRange: { type: Array, default: () => [1900, 2100] },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: !1 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  alwaysClearable: { type: Boolean, default: !1 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: !0 },
  ui: { type: Object, default: () => ({}) }
}, ct = {
  ...pa,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: !1 },
  isMobile: { type: Boolean, default: void 0 }
}, sr = ["title"], ur = ["disabled"], ir = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...ct
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const r = t, a = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: u,
      defaultedMultiCalendars: c,
      defaultedTextInput: p,
      defaultedInline: d,
      defaultedRange: Y,
      defaultedMultiDates: f
    } = Ye(a), { isTimeValid: O, isMonthValid: m } = Pt(a), { buildMatrix: P } = St(), F = X(null), L = X(null), _ = X(!1), h = X({}), R = X(null), b = X(null);
    Ge(() => {
      a.arrowNavigation && P([He(F), He(L)], "actionRow"), j(), window.addEventListener("resize", j);
    }), jt(() => {
      window.removeEventListener("resize", j);
    });
    const j = () => {
      _.value = !1, setTimeout(() => {
        var ee, y;
        const v = (ee = R.value) == null ? void 0 : ee.getBoundingClientRect(), N = (y = b.value) == null ? void 0 : y.getBoundingClientRect();
        v && N && (h.value.maxWidth = `${N.width - v.width - 20}px`), _.value = !0;
      }, 0);
    }, z = G(() => Y.value.enabled && !Y.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), ae = G(
      () => !O.value(a.internalModelValue) || !m.value(a.internalModelValue) || !z.value
    ), H = () => {
      const v = u.value;
      return a.timePicker || a.monthPicker, v(ze(a.internalModelValue));
    }, M = () => {
      const v = a.internalModelValue;
      return c.value.count > 0 ? `${Q(v[0])} - ${Q(v[1])}` : [Q(v[0]), Q(v[1])];
    }, Q = (v) => Ln(
      v,
      u.value,
      a.formatLocale,
      p.value.rangeSeparator,
      a.modelAuto,
      u.value
    ), B = G(() => !a.internalModelValue || !a.menuMount ? "" : typeof u.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? M() : f.value.enabled ? a.internalModelValue.map((v) => `${Q(v)}`) : a.modelAuto ? `${Q(a.internalModelValue[0])}` : `${Q(a.internalModelValue[0])} -` : Q(a.internalModelValue) : H()), q = () => f.value.enabled ? "; " : " - ", ve = G(
      () => Array.isArray(B.value) ? B.value.join(q()) : B.value
    ), pe = () => {
      O.value(a.internalModelValue) && m.value(a.internalModelValue) && z.value ? r("select-date") : r("invalid-select");
    };
    return (v, N) => ($(), V("div", {
      ref_key: "actionRowRef",
      ref: b,
      class: "dp__action_row"
    }, [
      v.$slots["action-row"] ? ue(v.$slots, "action-row", We(Ve({ key: 0 }, {
        internalModelValue: v.internalModelValue,
        disabled: ae.value,
        selectDate: () => v.$emit("select-date"),
        closePicker: () => v.$emit("close-picker")
      }))) : ($(), V(we, { key: 1 }, [
        s(n).showPreview ? ($(), V("div", {
          key: 0,
          class: "dp__selection_preview",
          title: ve.value,
          style: ot(h.value)
        }, [
          v.$slots["action-preview"] && _.value ? ue(v.$slots, "action-preview", {
            key: 0,
            value: v.internalModelValue
          }) : J("", !0),
          !v.$slots["action-preview"] && _.value ? ($(), V(we, { key: 1 }, [
            bt(Je(ve.value), 1)
          ], 64)) : J("", !0)
        ], 12, sr)) : J("", !0),
        ge("div", {
          ref_key: "actionBtnContainer",
          ref: R,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          v.$slots["action-buttons"] ? ue(v.$slots, "action-buttons", {
            key: 0,
            value: v.internalModelValue
          }) : J("", !0),
          v.$slots["action-buttons"] ? J("", !0) : ($(), V(we, { key: 1 }, [
            !s(d).enabled && s(n).showCancel ? ($(), V("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: F,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: N[0] || (N[0] = (ee) => v.$emit("close-picker")),
              onKeydown: N[1] || (N[1] = (ee) => s(xe)(ee, () => v.$emit("close-picker")))
            }, Je(v.cancelText), 545)) : J("", !0),
            s(n).showNow ? ($(), V("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: N[2] || (N[2] = (ee) => v.$emit("select-now")),
              onKeydown: N[3] || (N[3] = (ee) => s(xe)(ee, () => v.$emit("select-now")))
            }, Je(v.nowButtonLabel), 33)) : J("", !0),
            s(n).showSelect ? ($(), V("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: L,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: ae.value,
              "data-test-id": "select-button",
              onKeydown: N[4] || (N[4] = (ee) => s(xe)(ee, () => pe())),
              onClick: pe
            }, Je(v.selectText), 41, ur)) : J("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), dr = ["role", "aria-label", "tabindex"], cr = { class: "dp__selection_grid_header" }, fr = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], vr = ["aria-label"], aa = /* @__PURE__ */ Ke({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {},
    overlayLabel: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: r }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: n, setMonthPicker: u } = St(), c = r, p = e, { defaultedAriaLabels: d, defaultedTextInput: Y, defaultedConfig: f, handleEventPropagation: O } = Ye(
      p
    ), { hideNavigationButtons: m } = ha(), P = X(!1), F = X(null), L = X(null), _ = X([]), h = X(), R = X(null), b = X(0), j = X(null);
    Xn(() => {
      F.value = null;
    }), Ge(() => {
      lt().then(() => ve()), p.noOverlayFocus || ae(), z(!0);
    }), jt(() => z(!1));
    const z = (i) => {
      var W;
      p.arrowNavigation && ((W = p.headerRefs) != null && W.length ? u(i) : a(i));
    }, ae = () => {
      var W;
      const i = He(L);
      i && (Y.value.enabled || (F.value ? (W = F.value) == null || W.focus({ preventScroll: !0 }) : i.focus({ preventScroll: !0 })), P.value = i.clientHeight < i.scrollHeight);
    }, H = G(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !p.useRelative,
        "dp--overlay-relative": p.useRelative
      })
    ), M = G(
      () => p.useRelative ? { height: `${p.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), Q = G(() => ({
      dp__overlay_col: !0
    })), B = G(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: P.value,
        dp__button_bottom: p.isLast
      })
    ), q = G(() => {
      var i, W;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((i = p.items) == null ? void 0 : i.length) <= 6,
        dp__container_block: ((W = p.items) == null ? void 0 : W.length) > 6
      };
    });
    st(
      () => p.items,
      () => ve(!1),
      { deep: !0 }
    );
    const ve = (i = !0) => {
      lt().then(() => {
        const W = He(F), se = He(L), T = He(R), re = He(j), l = T ? T.getBoundingClientRect().height : 0;
        se && (se.getBoundingClientRect().height ? b.value = se.getBoundingClientRect().height - l : b.value = f.value.modeHeight - l), W && re && i && (re.scrollTop = W.offsetTop - re.offsetTop - (b.value / 2 - W.getBoundingClientRect().height) - l);
      });
    }, pe = (i) => {
      i.disabled || c("selected", i.value);
    }, v = () => {
      c("toggle"), c("reset-flow");
    }, N = (i) => {
      p.escClose && (v(), O(i));
    }, ee = (i, W, se, T) => {
      i && ((W.active || W.value === p.focusValue) && (F.value = i), p.arrowNavigation && (Array.isArray(_.value[se]) ? _.value[se][T] = i : _.value[se] = [i], y()));
    }, y = () => {
      var W, se;
      const i = (W = p.headerRefs) != null && W.length ? [p.headerRefs].concat(_.value) : _.value.concat([p.skipButtonRef ? [] : [R.value]]);
      n(ze(i), (se = p.headerRefs) != null && se.length ? "monthPicker" : "selectionGrid");
    }, U = (i) => {
      p.arrowNavigation || $t(i, f.value, !0);
    }, S = (i) => {
      h.value = i, c("hover-value", i);
    }, Z = () => {
      if (v(), !p.isLast) {
        const i = Fa(p.menuWrapRef ?? null, "action-row");
        if (i) {
          const W = Cn(i);
          W == null || W.focus();
        }
      }
    }, A = (i) => {
      switch (i.key) {
        case Oe.esc:
          return N(i);
        case Oe.arrowLeft:
          return U(i);
        case Oe.arrowRight:
          return U(i);
        case Oe.arrowUp:
          return U(i);
        case Oe.arrowDown:
          return U(i);
        default:
          return;
      }
    }, ie = (i) => {
      if (i.key === Oe.enter) return v();
      if (i.key === Oe.tab) return Z();
    };
    return t({ focusGrid: ae }), (i, W) => {
      var se;
      return $(), V("div", {
        ref_key: "gridWrapRef",
        ref: L,
        class: Me(H.value),
        style: ot(M.value),
        role: i.useRelative ? void 0 : "dialog",
        "aria-label": i.overlayLabel,
        tabindex: i.useRelative ? void 0 : "0",
        onKeydown: A,
        onClick: W[0] || (W[0] = Xt(() => {
        }, ["prevent"]))
      }, [
        ge("div", {
          ref_key: "containerRef",
          ref: j,
          class: Me(q.value),
          style: ot({ "--dp-overlay-height": `${b.value}px` }),
          role: "grid"
        }, [
          ge("div", cr, [
            ue(i.$slots, "header")
          ]),
          i.$slots.overlay ? ue(i.$slots, "overlay", { key: 0 }) : ($(!0), V(we, { key: 1 }, _e(i.items, (T, re) => ($(), V("div", {
            key: re,
            class: Me(["dp__overlay_row", { dp__flex_row: i.items.length >= 3 }]),
            role: "row"
          }, [
            ($(!0), V(we, null, _e(T, (l, w) => ($(), V("div", {
              key: l.value,
              ref_for: !0,
              ref: (oe) => ee(oe, l, re, w),
              role: "gridcell",
              class: Me(Q.value),
              "aria-selected": l.active || void 0,
              "aria-disabled": l.disabled || void 0,
              tabindex: "0",
              "data-test-id": l.text,
              onClick: Xt((oe) => pe(l), ["prevent"]),
              onKeydown: (oe) => s(xe)(oe, () => pe(l), !0),
              onMouseover: (oe) => S(l.value)
            }, [
              ge("div", {
                class: Me(l.className)
              }, [
                i.$slots.item ? ue(i.$slots, "item", {
                  key: 0,
                  item: l
                }) : J("", !0),
                i.$slots.item ? J("", !0) : ($(), V(we, { key: 1 }, [
                  bt(Je(l.text), 1)
                ], 64))
              ], 2)
            ], 42, fr))), 128))
          ], 2))), 128))
        ], 6),
        i.$slots["button-icon"] ? ia(($(), V("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: R,
          type: "button",
          "aria-label": (se = s(d)) == null ? void 0 : se.toggleOverlay,
          class: Me(B.value),
          tabindex: "0",
          onClick: v,
          onKeydown: ie
        }, [
          ue(i.$slots, "button-icon")
        ], 42, vr)), [
          [da, !s(m)(i.hideNavigation, i.type)]
        ]) : J("", !0)
      ], 46, dr);
    };
  }
}), mr = ["data-dp-mobile"], ya = /* @__PURE__ */ Ke({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = e, r = G(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = G(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, u) => ($(), V("div", {
      class: Me({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0,
        "dp--flex-display-collapsed": n.collapse
      }),
      "data-dp-mobile": n.isMobile
    }, [
      ($(!0), V(we, null, _e(r.value, (c, p) => ($(), V("div", {
        key: c,
        class: Me(a.value)
      }, [
        ue(n.$slots, "default", {
          instance: c,
          index: p
        })
      ], 2))), 128))
    ], 10, mr));
  }
}), pr = ["data-dp-element", "aria-label", "aria-disabled"], qt = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const r = t, a = X(null);
    return Ge(() => r("set-ref", a)), (n, u) => ($(), V("button", {
      ref_key: "elRef",
      ref: a,
      type: "button",
      "data-dp-element": n.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: u[0] || (u[0] = (c) => n.$emit("activate")),
      onKeydown: u[1] || (u[1] = (c) => s(xe)(c, () => n.$emit("activate"), !0))
    }, [
      ge("span", {
        class: Me(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        ue(n.$slots, "default")
      ], 2)
    ], 40, pr));
  }
}), yr = ["aria-label", "data-test-id"], Hn = /* @__PURE__ */ Ke({
  __name: "YearModePicker",
  props: {
    ...ct,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const r = t, a = e, { showRightIcon: n, showLeftIcon: u } = ha(), { defaultedConfig: c, defaultedMultiCalendars: p, defaultedAriaLabels: d, defaultedTransitions: Y, defaultedUI: f } = Ye(a), { showTransition: O, transitionName: m } = na(Y), P = X(!1), F = (h = !1, R) => {
      P.value = !P.value, r("toggle-year-picker", { flow: h, show: R });
    }, L = (h) => {
      P.value = !1, r("year-select", h);
    }, _ = (h = !1) => {
      r("handle-year", h);
    };
    return (h, R) => {
      var b, j, z, ae, H;
      return $(), V(we, null, [
        ge("div", {
          class: Me(["dp--year-mode-picker", { "dp--hidden-el": P.value }])
        }, [
          s(u)(s(p), e.instance) ? ($(), Se(qt, {
            key: 0,
            ref: "mpPrevIconRef",
            "aria-label": (b = s(d)) == null ? void 0 : b.prevYear,
            disabled: e.isDisabled(!1),
            class: Me((j = s(f)) == null ? void 0 : j.navBtnPrev),
            onActivate: R[0] || (R[0] = (M) => _(!1))
          }, {
            default: De(() => [
              h.$slots["arrow-left"] ? ue(h.$slots, "arrow-left", { key: 0 }) : J("", !0),
              h.$slots["arrow-left"] ? J("", !0) : ($(), Se(s(Wa), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : J("", !0),
          ge("button", {
            ref: "mpYearButtonRef",
            class: "dp__btn dp--year-select",
            type: "button",
            "aria-label": `${e.year}-${(z = s(d)) == null ? void 0 : z.openYearsOverlay}`,
            "data-test-id": `year-mode-btn-${e.instance}`,
            onClick: R[1] || (R[1] = () => F(!1)),
            onKeydown: R[2] || (R[2] = Zn(() => F(!1), ["enter"]))
          }, [
            h.$slots.year ? ue(h.$slots, "year", {
              key: 0,
              year: e.year
            }) : J("", !0),
            h.$slots.year ? J("", !0) : ($(), V(we, { key: 1 }, [
              bt(Je(e.year), 1)
            ], 64))
          ], 40, yr),
          s(n)(s(p), e.instance) ? ($(), Se(qt, {
            key: 1,
            ref: "mpNextIconRef",
            "aria-label": (ae = s(d)) == null ? void 0 : ae.nextYear,
            disabled: e.isDisabled(!0),
            class: Me((H = s(f)) == null ? void 0 : H.navBtnNext),
            onActivate: R[3] || (R[3] = (M) => _(!0))
          }, {
            default: De(() => [
              h.$slots["arrow-right"] ? ue(h.$slots, "arrow-right", { key: 0 }) : J("", !0),
              h.$slots["arrow-right"] ? J("", !0) : ($(), Se(s(Va), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : J("", !0)
        ], 2),
        nt(Kt, {
          name: s(m)(e.showYearPicker),
          css: s(O)
        }, {
          default: De(() => {
            var M, Q;
            return [
              e.showYearPicker ? ($(), Se(aa, {
                key: 0,
                items: e.items,
                "text-input": h.textInput,
                "esc-close": h.escClose,
                config: h.config,
                "is-last": h.autoApply && !s(c).keepActionRow,
                "hide-navigation": h.hideNavigation,
                "aria-labels": h.ariaLabels,
                "overlay-label": (Q = (M = s(d)) == null ? void 0 : M.yearPicker) == null ? void 0 : Q.call(M, !0),
                type: "year",
                onToggle: F,
                onSelected: R[4] || (R[4] = (B) => L(B))
              }, Xe({
                "button-icon": De(() => [
                  h.$slots["calendar-icon"] ? ue(h.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                  h.$slots["calendar-icon"] ? J("", !0) : ($(), Se(s(Gt), { key: 1 }))
                ]),
                _: 2
              }, [
                h.$slots["year-overlay-value"] ? {
                  name: "item",
                  fn: De(({ item: B }) => [
                    ue(h.$slots, "year-overlay-value", {
                      text: B.text,
                      value: B.value
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels", "overlay-label"])) : J("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 64);
    };
  }
}), xa = (e, t, r) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => Te(e, a))) {
      const a = t.value.filter((n) => !Te(n, e));
      t.value = a.length ? a : null;
    } else (r && +r > t.value.length || !r) && t.value.push(e);
  else
    t.value = [e];
}, en = (e, t, r) => {
  let a = e.value ? e.value.slice() : [];
  return a.length === 2 && a[1] !== null && (a = []), a.length ? (Ne(t, a[0]) ? a.unshift(t) : a[1] = t, r("range-end", t)) : (a = [t], r("range-start", t)), a;
}, ga = (e, t, r, a) => {
  e && (e[0] && e[1] && r && t("auto-apply"), e[0] && !e[1] && a && r && t("auto-apply"));
}, Un = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => tt(K(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = tt(K(e.value), e.timezone));
}, Wn = (e, t, r, a) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && a.value.partialRange) ? a.value.fixedStart && (Fe(e, t.value[0]) || Te(e, t.value[0])) ? [t.value[0], e] : a.value.fixedEnd && (Ne(e, t.value[1]) || Te(e, t.value[1])) ? [e, t.value[1]] : (r("invalid-fixed-range", e), t.value) : [], Vn = ({
  multiCalendars: e,
  range: t,
  highlight: r,
  propDates: a,
  calendars: n,
  modelValue: u,
  props: c,
  filters: p,
  year: d,
  month: Y,
  emit: f
}) => {
  const O = G(() => qa(c.yearRange, c.locale, c.reverseYears)), m = X([!1]), P = G(() => (B, q) => {
    const ve = Re(dt(/* @__PURE__ */ new Date()), {
      month: Y.value(B),
      year: d.value(B)
    }), pe = q ? $n(ve) : fa(ve);
    return Nn(
      pe,
      a.value.maxDate,
      a.value.minDate,
      c.preventMinMaxNavigation,
      q
    );
  }), F = () => Array.isArray(u.value) && e.value.solo && u.value[1], L = () => {
    for (let B = 0; B < e.value.count; B++)
      if (B === 0)
        n.value[B] = n.value[0];
      else if (B === e.value.count - 1 && F())
        n.value[B] = {
          month: Ae(u.value[1]),
          year: ye(u.value[1])
        };
      else {
        const q = Re(K(), n.value[B - 1]);
        n.value[B] = { month: Ae(q), year: ye(Dn(q, 1)) };
      }
  }, _ = (B) => {
    if (!B) return L();
    const q = Re(K(), n.value[B]);
    return n.value[0].year = ye(Mn(q, e.value.count - 1)), L();
  }, h = (B, q) => {
    const ve = fl(q, B);
    return t.value.showLastInRange && ve > 1 ? q : B;
  }, R = (B) => c.focusStartDate || e.value.solo ? B[0] : B[1] ? h(B[0], B[1]) : B[0], b = () => {
    if (u.value) {
      const B = Array.isArray(u.value) ? R(u.value) : u.value;
      n.value[0] = { month: Ae(B), year: ye(B) };
    }
  }, j = () => {
    b(), e.value.count && L();
  };
  st(u, (B, q) => {
    c.isTextInputDate && JSON.stringify(B ?? {}) !== JSON.stringify(q ?? {}) && j();
  }), Ge(() => {
    j();
  });
  const z = (B, q) => {
    n.value[q].year = B, f("update-month-year", { instance: q, year: B, month: n.value[q].month }), e.value.count && !e.value.solo && _(q);
  }, ae = G(() => (B) => Wt(O.value, (q) => {
    var N;
    const ve = d.value(B) === q.value, pe = xt(
      q.value,
      Vt(a.value.minDate),
      Vt(a.value.maxDate)
    ) || ((N = p.value.years) == null ? void 0 : N.includes(d.value(B))), v = Za(r.value, q.value);
    return { active: ve, disabled: pe, highlighted: v };
  })), H = (B, q) => {
    z(B, q), Q(q);
  }, M = (B, q = !1) => {
    if (!P.value(B, q)) {
      const ve = q ? d.value(B) + 1 : d.value(B) - 1;
      z(ve, B);
    }
  }, Q = (B, q = !1, ve) => {
    q || f("reset-flow"), ve !== void 0 ? m.value[B] = ve : m.value[B] = !m.value[B], m.value[B] ? f("overlay-toggle", { open: !0, overlay: qe.year }) : (f("overlay-closed"), f("overlay-toggle", { open: !1, overlay: qe.year }));
  };
  return {
    isDisabled: P,
    groupedYears: ae,
    showYearPicker: m,
    selectYear: z,
    toggleYearPicker: Q,
    handleYearSelect: H,
    handleYear: M
  };
}, gr = (e, t) => {
  const {
    defaultedMultiCalendars: r,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: u,
    defaultedRange: c,
    defaultedHighlight: p,
    propDates: d,
    defaultedTz: Y,
    defaultedFilters: f,
    defaultedMultiDates: O
  } = Ye(e), m = () => {
    e.isTextInputDate && j(ye(K(e.startDate)), 0);
  }, { modelValue: P, year: F, month: L, calendars: _ } = la(e, t, m), h = G(() => Pn(e.formatLocale, e.locale, e.monthNameFormat)), R = X(null), { checkMinMaxRange: b } = Pt(e), {
    selectYear: j,
    groupedYears: z,
    showYearPicker: ae,
    toggleYearPicker: H,
    handleYearSelect: M,
    handleYear: Q,
    isDisabled: B
  } = Vn({
    modelValue: P,
    multiCalendars: r,
    range: c,
    highlight: p,
    calendars: _,
    year: F,
    propDates: d,
    month: L,
    filters: f,
    props: e,
    emit: t
  });
  Ge(() => {
    e.startDate && (P.value && e.focusStartDate || !P.value) && j(ye(K(e.startDate)), 0);
  });
  const q = (T) => T ? { month: Ae(T), year: ye(T) } : { month: null, year: null }, ve = () => P.value ? Array.isArray(P.value) ? P.value.map((T) => q(T)) : q(P.value) : q(), pe = (T, re) => {
    const l = _.value[T], w = ve();
    return Array.isArray(w) ? w.some((oe) => oe.year === (l == null ? void 0 : l.year) && oe.month === re) : (l == null ? void 0 : l.year) === w.year && re === w.month;
  }, v = (T, re, l) => {
    var oe, D;
    const w = ve();
    return Array.isArray(w) ? F.value(re) === ((oe = w[l]) == null ? void 0 : oe.year) && T === ((D = w[l]) == null ? void 0 : D.month) : !1;
  }, N = (T, re) => {
    if (c.value.enabled) {
      const l = ve();
      if (Array.isArray(P.value) && Array.isArray(l)) {
        const w = v(T, re, 0) || v(T, re, 1), oe = ht(dt(K()), T, F.value(re));
        return ea(P.value, R.value, oe) && !w;
      }
      return !1;
    }
    return !1;
  }, ee = G(() => (T) => Wt(h.value, (re) => {
    var he;
    const l = pe(T, re.value), w = xt(
      re.value,
      _n(F.value(T), d.value.minDate),
      Yn(F.value(T), d.value.maxDate)
    ) || zl(d.value.disabledDates, F.value(T), re.value) || ((he = f.value.months) == null ? void 0 : he.includes(re.value)) || !Hl(d.value.allowedDates, F.value(T), re.value), oe = N(re.value, T), D = Fn(p.value, re.value, F.value(T));
    return { active: l, disabled: w, isBetween: oe, highlighted: D };
  })), y = (T, re) => ht(dt(K()), T, F.value(re)), U = (T, re) => {
    const l = P.value ? P.value : dt(/* @__PURE__ */ new Date());
    P.value = ht(l, T, F.value(re)), t("auto-apply"), t("update-flow-step");
  }, S = (T, re) => {
    const l = y(T, re);
    c.value.fixedEnd || c.value.fixedStart ? P.value = Wn(l, P, t, c) : P.value ? b(l, P.value) && (P.value = en(P, y(T, re), t)) : P.value = [y(T, re)], lt().then(() => {
      ga(P.value, t, e.autoApply, e.modelAuto);
    });
  }, Z = (T, re) => {
    xa(y(T, re), P, O.value.limit), t("auto-apply", !0);
  }, A = (T, re) => (_.value[re].month = T, i(re, _.value[re].year, T), O.value.enabled ? Z(T, re) : c.value.enabled ? S(T, re) : U(T, re)), ie = (T, re) => {
    j(T, re), i(re, T, null);
  }, i = (T, re, l) => {
    let w = l;
    if (!w && w !== 0) {
      const oe = ve();
      w = Array.isArray(oe) ? oe[T].month : oe.month;
    }
    t("update-month-year", { instance: T, year: re, month: w });
  };
  return {
    groupedMonths: ee,
    groupedYears: z,
    year: F,
    isDisabled: B,
    defaultedMultiCalendars: r,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: u,
    showYearPicker: ae,
    modelValue: P,
    presetDate: (T, re) => {
      Un({
        value: T,
        modelValue: P,
        range: c.value.enabled,
        timezone: re ? void 0 : Y.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (T, re) => {
      R.value = y(T, re);
    },
    selectMonth: A,
    selectYear: ie,
    toggleYearPicker: H,
    handleYearSelect: M,
    handleYear: Q,
    getModelMonthYear: ve
  };
}, hr = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...ct
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = Et(), u = at(n, "yearMode"), c = e;
    Ge(() => {
      c.shadow || a("mount", null);
    });
    const {
      groupedMonths: p,
      groupedYears: d,
      year: Y,
      isDisabled: f,
      defaultedMultiCalendars: O,
      defaultedConfig: m,
      showYearPicker: P,
      modelValue: F,
      presetDate: L,
      setHoverDate: _,
      selectMonth: h,
      selectYear: R,
      toggleYearPicker: b,
      handleYearSelect: j,
      handleYear: z,
      getModelMonthYear: ae
    } = gr(c, a);
    return t({ getSidebarProps: () => ({
      modelValue: F,
      year: Y,
      getModelMonthYear: ae,
      selectMonth: h,
      selectYear: R,
      handleYear: z
    }), presetDate: L, toggleYearPicker: (M) => b(0, M) }), (M, Q) => ($(), Se(ya, {
      "multi-calendars": s(O).count,
      collapse: M.collapse,
      stretch: "",
      "is-mobile": M.isMobile
    }, {
      default: De(({ instance: B }) => [
        M.$slots["top-extra"] ? ue(M.$slots, "top-extra", {
          key: 0,
          value: M.internalModelValue
        }) : J("", !0),
        M.$slots["month-year"] ? ue(M.$slots, "month-year", We(Ve({ key: 1 }, {
          year: s(Y),
          months: s(p)(B),
          years: s(d)(B),
          selectMonth: s(h),
          selectYear: s(R),
          instance: B
        }))) : ($(), Se(aa, {
          key: 2,
          items: s(p)(B),
          "arrow-navigation": M.arrowNavigation,
          "is-last": M.autoApply && !s(m).keepActionRow,
          "esc-close": M.escClose,
          height: s(m).modeHeight,
          config: M.config,
          "no-overlay-focus": !!(M.noOverlayFocus || M.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (q) => s(h)(q, B),
          onHoverValue: (q) => s(_)(q, B)
        }, Xe({
          header: De(() => [
            nt(Hn, Ve(M.$props, {
              items: s(d)(B),
              instance: B,
              "show-year-picker": s(P)[B],
              year: s(Y)(B),
              "is-disabled": (q) => s(f)(B, q),
              onHandleYear: (q) => s(z)(B, q),
              onYearSelect: (q) => s(j)(q, B),
              onToggleYearPicker: (q) => s(b)(B, q == null ? void 0 : q.flow, q == null ? void 0 : q.show)
            }), Xe({ _: 2 }, [
              _e(s(u), (q, ve) => ({
                name: q,
                fn: De((pe) => [
                  ue(M.$slots, q, We(et(pe)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          M.$slots["month-overlay-value"] ? {
            name: "item",
            fn: De(({ item: q }) => [
              ue(M.$slots, "month-overlay-value", {
                text: q.text,
                value: q.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse", "is-mobile"]));
  }
}), br = (e, t) => {
  const r = () => {
    e.isTextInputDate && (f.value = ye(K(e.startDate)));
  }, { modelValue: a } = la(e, t, r), n = X(null), { defaultedHighlight: u, defaultedMultiDates: c, defaultedFilters: p, defaultedRange: d, propDates: Y } = Ye(e), f = X();
  Ge(() => {
    e.startDate && (a.value && e.focusStartDate || !a.value) && (f.value = ye(K(e.startDate)));
  });
  const O = (b) => Array.isArray(a.value) ? a.value.some((j) => ye(j) === b) : a.value ? ye(a.value) === b : !1, m = (b) => d.value.enabled && Array.isArray(a.value) ? ea(a.value, n.value, _(b)) : !1, P = (b) => Y.value.allowedDates instanceof Map ? Y.value.allowedDates.size ? Y.value.allowedDates.has(`${b}`) : !1 : !0, F = (b) => Y.value.disabledDates instanceof Map ? Y.value.disabledDates.size ? Y.value.disabledDates.has(`${b}`) : !1 : !0, L = G(() => Wt(qa(e.yearRange, e.locale, e.reverseYears), (b) => {
    const j = O(b.value), z = xt(
      b.value,
      Vt(Y.value.minDate),
      Vt(Y.value.maxDate)
    ) || p.value.years.includes(b.value) || !P(b.value) || F(b.value), ae = m(b.value) && !j, H = Za(u.value, b.value);
    return { active: j, disabled: z, isBetween: ae, highlighted: H };
  })), _ = (b) => mt(dt(fa(/* @__PURE__ */ new Date())), b);
  return {
    groupedYears: L,
    modelValue: a,
    focusYear: f,
    setHoverValue: (b) => {
      n.value = mt(dt(/* @__PURE__ */ new Date()), b);
    },
    selectYear: (b) => {
      var j;
      if (t("update-month-year", { instance: 0, year: b }), c.value.enabled)
        return a.value ? Array.isArray(a.value) && (((j = a.value) == null ? void 0 : j.map((ae) => ye(ae))).includes(b) ? a.value = a.value.filter((ae) => ye(ae) !== b) : a.value.push(mt(je(K()), b))) : a.value = [mt(je(fa(K())), b)], t("auto-apply", !0);
      d.value.enabled ? (a.value = en(a, _(b), t), lt().then(() => {
        ga(a.value, t, e.autoApply, e.modelAuto);
      })) : (a.value = _(b), t("auto-apply"));
    }
  };
}, kr = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...ct
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { groupedYears: u, modelValue: c, focusYear: p, selectYear: d, setHoverValue: Y } = br(n, a), { defaultedConfig: f } = Ye(n);
    return t({ getSidebarProps: () => ({
      modelValue: c,
      selectYear: d
    }) }), (m, P) => ($(), V("div", null, [
      m.$slots["top-extra"] ? ue(m.$slots, "top-extra", {
        key: 0,
        value: m.internalModelValue
      }) : J("", !0),
      m.$slots["month-year"] ? ue(m.$slots, "month-year", We(Ve({ key: 1 }, {
        years: s(u),
        selectYear: s(d)
      }))) : ($(), Se(aa, {
        key: 2,
        items: s(u),
        "is-last": m.autoApply && !s(f).keepActionRow,
        height: s(f).modeHeight,
        config: m.config,
        "no-overlay-focus": !!(m.noOverlayFocus || m.textInput),
        "focus-value": s(p),
        type: "year",
        "use-relative": "",
        onSelected: s(d),
        onHoverValue: s(Y)
      }, Xe({ _: 2 }, [
        m.$slots["year-overlay-value"] ? {
          name: "item",
          fn: De(({ item: F }) => [
            ue(m.$slots, "year-overlay-value", {
              text: F.text,
              value: F.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), wr = {
  key: 0,
  class: "dp__time_input"
}, Dr = ["data-compact", "data-collapsed"], Mr = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], $r = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], Ar = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], Tr = { key: 0 }, Sr = ["aria-label", "data-compact"], Pr = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...ct
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { setTimePickerElements: u, setTimePickerBackRef: c } = St(), {
      defaultedAriaLabels: p,
      defaultedTransitions: d,
      defaultedFilters: Y,
      defaultedConfig: f,
      defaultedRange: O,
      defaultedMultiCalendars: m
    } = Ye(n), { transitionName: P, showTransition: F } = na(d), L = ta({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), _ = X("AM"), h = X(null), R = X([]), b = X(), j = X(!1);
    Ge(() => {
      a("mounted");
    });
    const z = (o) => Re(/* @__PURE__ */ new Date(), {
      hours: o.hours,
      minutes: o.minutes,
      seconds: n.enableSeconds ? o.seconds : 0,
      milliseconds: 0
    }), ae = G(
      () => (o) => S(o, n[o]) || M(o, n[o])
    ), H = G(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), M = (o, E) => O.value.enabled && !O.value.disableTimeRangeValidation ? !n.validateTime(o, E) : !1, Q = (o, E) => {
      if (O.value.enabled && !O.value.disableTimeRangeValidation) {
        const fe = E ? +n[`${o}Increment`] : -+n[`${o}Increment`], I = n[o] + fe;
        return !n.validateTime(o, I);
      }
      return !1;
    }, B = G(() => (o) => !W(+n[o] + +n[`${o}Increment`], o) || Q(o, !0)), q = G(() => (o) => !W(+n[o] - +n[`${o}Increment`], o) || Q(o, !1)), ve = (o, E) => An(Re(K(), o), E), pe = (o, E) => vl(Re(K(), o), E), v = G(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), N = G(
      () => n.timePickerInline && O.value.enabled && !m.value.count
    ), ee = G(() => {
      const o = [{ type: "hours" }];
      return n.enableMinutes && o.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), n.enableSeconds && o.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), o;
    }), y = G(() => ee.value.filter((o) => !o.separator)), U = G(() => (o) => {
      if (o === "hours") {
        const E = oe(+n.hours);
        return { text: E < 10 ? `0${E}` : `${E}`, value: E };
      }
      return { text: n[o] < 10 ? `0${n[o]}` : `${n[o]}`, value: n[o] };
    }), S = (o, E) => {
      var I;
      if (!n.disabledTimesConfig) return !1;
      const fe = n.disabledTimesConfig(n.order, o === "hours" ? E : void 0);
      return fe[o] ? !!((I = fe[o]) != null && I.includes(E)) : !0;
    }, Z = (o, E) => E !== "hours" || _.value === "AM" ? o : o + 12, A = (o) => {
      const E = n.is24 ? 24 : 12, fe = o === "hours" ? E : 60, I = +n[`${o}GridIncrement`], $e = o === "hours" && !n.is24 ? I : 0, be = [];
      for (let Pe = $e; Pe < fe; Pe += I)
        be.push({ value: n.is24 ? Pe : Z(Pe, o), text: Pe < 10 ? `0${Pe}` : `${Pe}` });
      return o === "hours" && !n.is24 && be.unshift({ value: _.value === "PM" ? 12 : 0, text: "12" }), Wt(be, (Pe) => ({ active: !1, disabled: Y.value.times[o].includes(Pe.value) || !W(Pe.value, o) || S(o, Pe.value) || M(o, Pe.value) }));
    }, ie = (o) => o >= 0 ? o : 59, i = (o) => o >= 0 ? o : 23, W = (o, E) => {
      const fe = n.minTime ? z(Sa(n.minTime)) : null, I = n.maxTime ? z(Sa(n.maxTime)) : null, $e = z(
        Sa(
          H.value,
          E,
          E === "minutes" || E === "seconds" ? ie(o) : i(o)
        )
      );
      return fe && I ? (Ht($e, I) || Ft($e, I)) && (It($e, fe) || Ft($e, fe)) : fe ? It($e, fe) || Ft($e, fe) : I ? Ht($e, I) || Ft($e, I) : !0;
    }, se = (o) => n[`no${o[0].toUpperCase() + o.slice(1)}Overlay`], T = (o) => {
      se(o) || (L[o] = !L[o], L[o] ? (j.value = !0, a("overlay-opened", o)) : (j.value = !1, a("overlay-closed", o)));
    }, re = (o) => o === "hours" ? kt : o === "minutes" ? Tt : Ut, l = () => {
      b.value && clearTimeout(b.value);
    }, w = (o, E = !0, fe) => {
      const I = E ? ve : pe, $e = E ? +n[`${o}Increment`] : -+n[`${o}Increment`];
      W(+n[o] + $e, o) && a(
        `update:${o}`,
        re(o)(I({ [o]: +n[o] }, { [o]: +n[`${o}Increment`] }))
      ), !(fe != null && fe.keyboard) && f.value.timeArrowHoldThreshold && (b.value = setTimeout(() => {
        w(o, E);
      }, f.value.timeArrowHoldThreshold));
    }, oe = (o) => n.is24 ? o : (o >= 12 ? _.value = "PM" : _.value = "AM", Tl(o)), D = () => {
      _.value === "PM" ? (_.value = "AM", a("update:hours", n.hours - 12)) : (_.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", _.value);
    }, he = (o) => {
      L[o] = !0;
    }, ke = (o, E, fe) => {
      if (o && n.arrowNavigation) {
        Array.isArray(R.value[E]) ? R.value[E][fe] = o : R.value[E] = [o];
        const I = R.value.reduce(
          ($e, be) => be.map((Pe, Ee) => [...$e[Ee] || [], be[Ee]]),
          []
        );
        c(n.closeTimePickerBtn), h.value && (I[1] = I[1].concat(h.value)), u(I, n.order);
      }
    }, le = (o, E) => (T(o), a(`update:${o}`, E));
    return t({ openChildCmp: he }), (o, E) => {
      var fe;
      return o.disabled ? J("", !0) : ($(), V("div", wr, [
        ($(!0), V(we, null, _e(ee.value, (I, $e) => {
          var be, Pe, Ee;
          return $(), V("div", {
            key: $e,
            class: Me(v.value),
            "data-compact": N.value && !o.enableSeconds,
            "data-collapsed": N.value && o.enableSeconds
          }, [
            I.separator ? ($(), V(we, { key: 0 }, [
              j.value ? J("", !0) : ($(), V(we, { key: 0 }, [
                bt(":")
              ], 64))
            ], 64)) : ($(), V(we, { key: 1 }, [
              ge("button", {
                ref_for: !0,
                ref: (Be) => ke(Be, $e, 0),
                type: "button",
                class: Me({
                  dp__btn: !0,
                  dp__inc_dec_button: !o.timePickerInline,
                  dp__inc_dec_button_inline: o.timePickerInline,
                  dp__tp_inline_btn_top: o.timePickerInline,
                  dp__inc_dec_button_disabled: B.value(I.type),
                  "dp--hidden-el": j.value
                }),
                "data-test-id": `${I.type}-time-inc-btn-${n.order}`,
                "aria-label": (be = s(p)) == null ? void 0 : be.incrementValue(I.type),
                tabindex: "0",
                onKeydown: (Be) => s(xe)(Be, () => w(I.type, !0, { keyboard: !0 }), !0),
                onClick: (Be) => s(f).timeArrowHoldThreshold ? void 0 : w(I.type, !0),
                onMousedown: (Be) => s(f).timeArrowHoldThreshold ? w(I.type, !0) : void 0,
                onMouseup: l
              }, [
                n.timePickerInline ? ($(), V(we, { key: 1 }, [
                  o.$slots["tp-inline-arrow-up"] ? ue(o.$slots, "tp-inline-arrow-up", { key: 0 }) : ($(), V(we, { key: 1 }, [
                    E[2] || (E[2] = ge("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    E[3] || (E[3] = ge("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : ($(), V(we, { key: 0 }, [
                  o.$slots["arrow-up"] ? ue(o.$slots, "arrow-up", { key: 0 }) : J("", !0),
                  o.$slots["arrow-up"] ? J("", !0) : ($(), Se(s(Ka), { key: 1 }))
                ], 64))
              ], 42, Mr),
              ge("button", {
                ref_for: !0,
                ref: (Be) => ke(Be, $e, 1),
                type: "button",
                "aria-label": `${U.value(I.type).text}-${(Pe = s(p)) == null ? void 0 : Pe.openTpOverlay(I.type)}`,
                class: Me({
                  dp__time_display: !0,
                  dp__time_display_block: !o.timePickerInline,
                  dp__time_display_inline: o.timePickerInline,
                  "dp--time-invalid": ae.value(I.type),
                  "dp--time-overlay-btn": !ae.value(I.type),
                  "dp--hidden-el": j.value
                }),
                disabled: se(I.type),
                tabindex: "0",
                "data-test-id": `${I.type}-toggle-overlay-btn-${n.order}`,
                onKeydown: (Be) => s(xe)(Be, () => T(I.type), !0),
                onClick: (Be) => T(I.type)
              }, [
                o.$slots[I.type] ? ue(o.$slots, I.type, {
                  key: 0,
                  text: U.value(I.type).text,
                  value: U.value(I.type).value
                }) : J("", !0),
                o.$slots[I.type] ? J("", !0) : ($(), V(we, { key: 1 }, [
                  bt(Je(U.value(I.type).text), 1)
                ], 64))
              ], 42, $r),
              ge("button", {
                ref_for: !0,
                ref: (Be) => ke(Be, $e, 2),
                type: "button",
                class: Me({
                  dp__btn: !0,
                  dp__inc_dec_button: !o.timePickerInline,
                  dp__inc_dec_button_inline: o.timePickerInline,
                  dp__tp_inline_btn_bottom: o.timePickerInline,
                  dp__inc_dec_button_disabled: q.value(I.type),
                  "dp--hidden-el": j.value
                }),
                "data-test-id": `${I.type}-time-dec-btn-${n.order}`,
                "aria-label": (Ee = s(p)) == null ? void 0 : Ee.decrementValue(I.type),
                tabindex: "0",
                onKeydown: (Be) => s(xe)(Be, () => w(I.type, !1, { keyboard: !0 }), !0),
                onClick: (Be) => s(f).timeArrowHoldThreshold ? void 0 : w(I.type, !1),
                onMousedown: (Be) => s(f).timeArrowHoldThreshold ? w(I.type, !1) : void 0,
                onMouseup: l
              }, [
                n.timePickerInline ? ($(), V(we, { key: 1 }, [
                  o.$slots["tp-inline-arrow-down"] ? ue(o.$slots, "tp-inline-arrow-down", { key: 0 }) : ($(), V(we, { key: 1 }, [
                    E[4] || (E[4] = ge("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    E[5] || (E[5] = ge("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : ($(), V(we, { key: 0 }, [
                  o.$slots["arrow-down"] ? ue(o.$slots, "arrow-down", { key: 0 }) : J("", !0),
                  o.$slots["arrow-down"] ? J("", !0) : ($(), Se(s(Ga), { key: 1 }))
                ], 64))
              ], 42, Ar)
            ], 64))
          ], 10, Dr);
        }), 128)),
        o.is24 ? J("", !0) : ($(), V("div", Tr, [
          o.$slots["am-pm-button"] ? ue(o.$slots, "am-pm-button", {
            key: 0,
            toggle: D,
            value: _.value
          }) : J("", !0),
          o.$slots["am-pm-button"] ? J("", !0) : ($(), V("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: h,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (fe = s(p)) == null ? void 0 : fe.amPmButton,
            tabindex: "0",
            "data-compact": N.value,
            onClick: D,
            onKeydown: E[0] || (E[0] = (I) => s(xe)(I, () => D(), !0))
          }, Je(_.value), 41, Sr))
        ])),
        ($(!0), V(we, null, _e(y.value, (I, $e) => ($(), Se(Kt, {
          key: $e,
          name: s(P)(L[I.type]),
          css: s(F)
        }, {
          default: De(() => {
            var be, Pe;
            return [
              L[I.type] ? ($(), Se(aa, {
                key: 0,
                items: A(I.type),
                "is-last": o.autoApply && !s(f).keepActionRow,
                "esc-close": o.escClose,
                type: I.type,
                "text-input": o.textInput,
                config: o.config,
                "arrow-navigation": o.arrowNavigation,
                "aria-labels": o.ariaLabels,
                "overlay-label": (Pe = (be = s(p)).timeOverlay) == null ? void 0 : Pe.call(be, I.type),
                onSelected: (Ee) => le(I.type, Ee),
                onToggle: (Ee) => T(I.type),
                onResetFlow: E[1] || (E[1] = (Ee) => o.$emit("reset-flow"))
              }, Xe({
                "button-icon": De(() => [
                  o.$slots["clock-icon"] ? ue(o.$slots, "clock-icon", { key: 0 }) : J("", !0),
                  o.$slots["clock-icon"] ? J("", !0) : ($(), Se(ma(o.timePickerInline ? s(Gt) : s(ja)), { key: 1 }))
                ]),
                _: 2
              }, [
                o.$slots[`${I.type}-overlay-value`] ? {
                  name: "item",
                  fn: De(({ item: Ee }) => [
                    ue(o.$slots, `${I.type}-overlay-value`, {
                      text: Ee.text,
                      value: Ee.value
                    })
                  ]),
                  key: "0"
                } : void 0,
                o.$slots[`${I.type}-overlay-header`] ? {
                  name: "header",
                  fn: De(() => [
                    ue(o.$slots, `${I.type}-overlay-header`, {
                      toggle: () => T(I.type)
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : J("", !0)
            ];
          }),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Rr = ["data-dp-mobile"], Cr = ["aria-label", "tabindex"], Or = ["role", "aria-label", "tabindex"], Br = ["aria-label"], jn = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...ct
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { buildMatrix: u, setTimePicker: c } = St(), p = Et(), { defaultedTransitions: d, defaultedAriaLabels: Y, defaultedTextInput: f, defaultedConfig: O, defaultedRange: m } = Ye(n), { transitionName: P, showTransition: F } = na(d), { hideNavigationButtons: L } = ha(), _ = X(null), h = X(null), R = X([]), b = X(null), j = X(!1);
    Ge(() => {
      a("mount"), !n.timePicker && n.arrowNavigation ? u([He(_.value)], "time") : c(!0, n.timePicker);
    });
    const z = G(() => m.value.enabled && n.modelAuto ? Rn(n.internalModelValue) : !0), ae = X(!1), H = (S) => ({
      hours: Array.isArray(n.hours) ? n.hours[S] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[S] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[S] : n.seconds
    }), M = G(() => {
      const S = [];
      if (m.value.enabled)
        for (let Z = 0; Z < 2; Z++)
          S.push(H(Z));
      else
        S.push(H(0));
      return S;
    }), Q = (S, Z = !1, A = "") => {
      Z || a("reset-flow"), ae.value = S, a(S ? "overlay-opened" : "overlay-closed", qe.time), n.arrowNavigation && c(S), lt(() => {
        A !== "" && R.value[0] && R.value[0].openChildCmp(A);
      });
    }, B = G(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: n.autoApply && !O.value.keepActionRow
    })), q = at(p, "timePicker"), ve = (S, Z, A) => m.value.enabled ? Z === 0 ? [S, M.value[1][A]] : [M.value[0][A], S] : S, pe = (S) => {
      a("update:hours", S);
    }, v = (S) => {
      a("update:minutes", S);
    }, N = (S) => {
      a("update:seconds", S);
    }, ee = () => {
      if (b.value && !f.value.enabled && !n.noOverlayFocus) {
        const S = Cn(b.value);
        S && S.focus({ preventScroll: !0 });
      }
    }, y = (S) => {
      j.value = !1, a("overlay-closed", S);
    }, U = (S) => {
      j.value = !0, a("overlay-opened", S);
    };
    return t({ toggleTimePicker: Q }), (S, Z) => {
      var A;
      return $(), V("div", {
        class: "dp--tp-wrap",
        "data-dp-mobile": S.isMobile
      }, [
        !S.timePicker && !S.timePickerInline ? ia(($(), V("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: _,
          type: "button",
          class: Me({ ...B.value, "dp--hidden-el": ae.value }),
          "aria-label": (A = s(Y)) == null ? void 0 : A.openTimePicker,
          tabindex: S.noOverlayFocus ? void 0 : 0,
          "data-test-id": "open-time-picker-btn",
          onKeydown: Z[0] || (Z[0] = (ie) => s(xe)(ie, () => Q(!0))),
          onClick: Z[1] || (Z[1] = (ie) => Q(!0))
        }, [
          S.$slots["clock-icon"] ? ue(S.$slots, "clock-icon", { key: 0 }) : J("", !0),
          S.$slots["clock-icon"] ? J("", !0) : ($(), Se(s(ja), { key: 1 }))
        ], 42, Cr)), [
          [da, !s(L)(S.hideNavigation, "time")]
        ]) : J("", !0),
        nt(Kt, {
          name: s(P)(ae.value),
          css: s(F) && !S.timePickerInline
        }, {
          default: De(() => {
            var ie, i;
            return [
              ae.value || S.timePicker || S.timePickerInline ? ($(), V("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: b,
                role: S.timePickerInline ? void 0 : "dialog",
                class: Me({
                  dp__overlay: !S.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !S.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: ot(S.timePicker ? { height: `${s(O).modeHeight}px` } : void 0),
                "aria-label": (ie = s(Y)) == null ? void 0 : ie.timePicker,
                tabindex: S.timePickerInline ? void 0 : 0
              }, [
                ge("div", {
                  class: Me(
                    S.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  S.$slots["time-picker-overlay"] ? ue(S.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: pe,
                    setMinutes: v,
                    setSeconds: N
                  }) : J("", !0),
                  S.$slots["time-picker-overlay"] ? J("", !0) : ($(), V("div", {
                    key: 1,
                    class: Me(S.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    ($(!0), V(we, null, _e(M.value, (W, se) => ia(($(), Se(Pr, Ve({
                      key: se,
                      ref_for: !0
                    }, {
                      ...S.$props,
                      order: se,
                      hours: W.hours,
                      minutes: W.minutes,
                      seconds: W.seconds,
                      closeTimePickerBtn: h.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: se === 0 ? s(m).fixedStart : s(m).fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: R,
                      "validate-time": (T, re) => e.validateTime(T, ve(re, se, T)),
                      "onUpdate:hours": (T) => pe(ve(T, se, "hours")),
                      "onUpdate:minutes": (T) => v(ve(T, se, "minutes")),
                      "onUpdate:seconds": (T) => N(ve(T, se, "seconds")),
                      onMounted: ee,
                      onOverlayClosed: y,
                      onOverlayOpened: U,
                      onAmPmChange: Z[2] || (Z[2] = (T) => S.$emit("am-pm-change", T))
                    }), Xe({ _: 2 }, [
                      _e(s(q), (T, re) => ({
                        name: T,
                        fn: De((l) => [
                          ue(S.$slots, T, Ve({ ref_for: !0 }, l))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [da, se === 0 ? !0 : z.value]
                    ])), 128))
                  ], 2)),
                  !S.timePicker && !S.timePickerInline ? ia(($(), V("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: h,
                    type: "button",
                    class: Me({ ...B.value, "dp--hidden-el": j.value }),
                    "aria-label": (i = s(Y)) == null ? void 0 : i.closeTimePicker,
                    tabindex: "0",
                    onKeydown: Z[3] || (Z[3] = (W) => s(xe)(W, () => Q(!1))),
                    onClick: Z[4] || (Z[4] = (W) => Q(!1))
                  }, [
                    S.$slots["calendar-icon"] ? ue(S.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                    S.$slots["calendar-icon"] ? J("", !0) : ($(), Se(s(Gt), { key: 1 }))
                  ], 42, Br)), [
                    [da, !s(L)(S.hideNavigation, "time")]
                  ]) : J("", !0)
                ], 2)
              ], 14, Or)) : J("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 8, Rr);
    };
  }
}), Kn = (e, t, r, a) => {
  const { defaultedRange: n } = Ye(e), u = (b, j) => Array.isArray(t[b]) ? t[b][j] : t[b], c = (b) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[b] : t.seconds : 0, p = (b, j) => b ? j !== void 0 ? At(b, u("hours", j), u("minutes", j), c(j)) : At(b, t.hours, t.minutes, c()) : kn(K(), c(j)), d = (b, j) => {
    t[b] = j;
  }, Y = G(() => e.modelAuto && n.value.enabled ? Array.isArray(r.value) ? r.value.length > 1 : !1 : n.value.enabled), f = (b, j) => {
    const z = Object.fromEntries(
      Object.keys(t).map((ae) => ae === b ? [ae, j] : [ae, t[ae]].slice())
    );
    if (Y.value && !n.value.disableTimeRangeValidation) {
      const ae = (M) => r.value ? At(
        r.value[M],
        z.hours[M],
        z.minutes[M],
        z.seconds[M]
      ) : null, H = (M) => wn(r.value[M], 0);
      return !(Te(ae(0), ae(1)) && (It(ae(0), H(1)) || Ht(ae(1), H(0))));
    }
    return !0;
  }, O = (b, j) => {
    f(b, j) && (d(b, j), a && a());
  }, m = (b) => {
    O("hours", b);
  }, P = (b) => {
    O("minutes", b);
  }, F = (b) => {
    O("seconds", b);
  }, L = (b, j, z, ae) => {
    j && m(b), !j && !z && P(b), z && F(b), r.value && ae(r.value);
  }, _ = (b) => {
    if (b) {
      const j = Array.isArray(b), z = j ? [+b[0].hours, +b[1].hours] : +b.hours, ae = j ? [+b[0].minutes, +b[1].minutes] : +b.minutes, H = j ? [+b[0].seconds, +b[1].seconds] : +b.seconds;
      d("hours", z), d("minutes", ae), e.enableSeconds && d("seconds", H);
    }
  }, h = (b, j) => {
    const z = {
      hours: Array.isArray(t.hours) ? t.hours[b] : t.hours,
      disabledArr: []
    };
    return (j || j === 0) && (z.hours = j), Array.isArray(e.disabledTimes) && (z.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[b]) ? e.disabledTimes[b] : e.disabledTimes), z;
  }, R = G(() => (b, j) => {
    var z;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: ae, hours: H } = h(b, j), M = ae.filter((Q) => +Q.hours === H);
      return ((z = M[0]) == null ? void 0 : z.minutes) === "*" ? { hours: [H], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (M == null ? void 0 : M.map((Q) => +Q.minutes)) ?? [],
        seconds: (M == null ? void 0 : M.map((Q) => Q.seconds ? +Q.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: d,
    updateHours: m,
    updateMinutes: P,
    updateSeconds: F,
    getSetDateTime: p,
    updateTimeValues: L,
    getSecondsValue: c,
    assignStartTime: _,
    validateTime: f,
    disabledTimesConfig: R
  };
}, _r = (e, t) => {
  const r = () => {
    e.isTextInputDate && j();
  }, { modelValue: a, time: n } = la(e, t, r), { defaultedStartTime: u, defaultedRange: c, defaultedTz: p } = Ye(e), { updateTimeValues: d, getSetDateTime: Y, setTime: f, assignStartTime: O, disabledTimesConfig: m, validateTime: P } = Kn(e, n, a, F);
  function F() {
    t("update-flow-step");
  }
  const L = (H) => {
    const { hours: M, minutes: Q, seconds: B } = H;
    return { hours: +M, minutes: +Q, seconds: B ? +B : 0 };
  }, _ = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const M = L(e.startTime[0]), Q = L(e.startTime[1]);
        return [Re(K(), M), Re(K(), Q)];
      }
      const H = L(e.startTime);
      return Re(K(), H);
    }
    return c.value.enabled ? [null, null] : null;
  }, h = () => {
    if (c.value.enabled) {
      const [H, M] = _();
      a.value = [
        tt(Y(H, 0), p.value.timezone),
        tt(Y(M, 1), p.value.timezone)
      ];
    } else
      a.value = tt(Y(_()), p.value.timezone);
  }, R = (H) => Array.isArray(H) ? [Yt(K(H[0])), Yt(K(H[1]))] : [Yt(H ?? K())], b = (H, M, Q) => {
    f("hours", H), f("minutes", M), f("seconds", e.enableSeconds ? Q : 0);
  }, j = () => {
    const [H, M] = R(a.value);
    return c.value.enabled ? b(
      [H.hours, M.hours],
      [H.minutes, M.minutes],
      [H.seconds, M.seconds]
    ) : b(H.hours, H.minutes, H.seconds);
  };
  Ge(() => {
    if (!e.shadow)
      return O(u.value), a.value ? j() : h();
  });
  const z = () => {
    Array.isArray(a.value) ? a.value = a.value.map((H, M) => H && Y(H, M)) : a.value = Y(a.value), t("time-update");
  };
  return {
    modelValue: a,
    time: n,
    disabledTimesConfig: m,
    updateTime: (H, M = !0, Q = !1) => {
      d(H, M, Q, z);
    },
    validateTime: P
  };
}, Yr = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...ct
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, u = Et(), c = at(u, "timePicker"), p = X(null), { time: d, modelValue: Y, disabledTimesConfig: f, updateTime: O, validateTime: m } = _r(n, a);
    return Ge(() => {
      n.shadow || a("mount", null);
    }), t({ getSidebarProps: () => ({
      modelValue: Y,
      time: d,
      updateTime: O
    }), toggleTimePicker: (L, _ = !1, h = "") => {
      var R;
      (R = p.value) == null || R.toggleTimePicker(L, _, h);
    } }), (L, _) => ($(), Se(ya, {
      "multi-calendars": 0,
      stretch: "",
      "is-mobile": L.isMobile
    }, {
      default: De(() => [
        nt(jn, Ve({
          ref_key: "tpRef",
          ref: p
        }, L.$props, {
          hours: s(d).hours,
          minutes: s(d).minutes,
          seconds: s(d).seconds,
          "internal-model-value": L.internalModelValue,
          "disabled-times-config": s(f),
          "validate-time": s(m),
          "onUpdate:hours": _[0] || (_[0] = (h) => s(O)(h)),
          "onUpdate:minutes": _[1] || (_[1] = (h) => s(O)(h, !1)),
          "onUpdate:seconds": _[2] || (_[2] = (h) => s(O)(h, !1, !0)),
          onAmPmChange: _[3] || (_[3] = (h) => L.$emit("am-pm-change", h)),
          onResetFlow: _[4] || (_[4] = (h) => L.$emit("reset-flow")),
          onOverlayClosed: _[5] || (_[5] = (h) => L.$emit("overlay-toggle", { open: !1, overlay: h })),
          onOverlayOpened: _[6] || (_[6] = (h) => L.$emit("overlay-toggle", { open: !0, overlay: h }))
        }), Xe({ _: 2 }, [
          _e(s(c), (h, R) => ({
            name: h,
            fn: De((b) => [
              ue(L.$slots, h, We(et(b)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }, 8, ["is-mobile"]));
  }
}), Ir = { class: "dp--header-wrap" }, Er = {
  key: 0,
  class: "dp__month_year_wrap"
}, Nr = { key: 0 }, Lr = { class: "dp__month_year_wrap" }, Fr = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], zr = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...ct
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      defaultedTransitions: u,
      defaultedAriaLabels: c,
      defaultedMultiCalendars: p,
      defaultedFilters: d,
      defaultedConfig: Y,
      defaultedHighlight: f,
      propDates: O,
      defaultedUI: m
    } = Ye(n), { transitionName: P, showTransition: F } = na(u), { buildMatrix: L } = St(), { handleMonthYearChange: _, isDisabled: h, updateMonthYear: R } = or(n, a), { showLeftIcon: b, showRightIcon: j } = ha(), z = X(!1), ae = X(!1), H = X(!1), M = X([null, null, null, null]);
    Ge(() => {
      a("mount");
    });
    const Q = (i) => ({
      get: () => n[i],
      set: (W) => {
        const se = i === ut.month ? ut.year : ut.month;
        a("update-month-year", { [i]: W, [se]: n[se] }), i === ut.month ? y(!0) : U(!0);
      }
    }), B = G(Q(ut.month)), q = G(Q(ut.year)), ve = G(() => (i) => ({
      month: n.month,
      year: n.year,
      items: i === ut.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: R,
      toggle: i === ut.month ? y : U
    })), pe = G(() => {
      const i = n.months.find((W) => W.value === n.month);
      return i || { text: "", value: 0 };
    }), v = G(() => Wt(n.months, (i) => {
      const W = n.month === i.value, se = xt(
        i.value,
        _n(n.year, O.value.minDate),
        Yn(n.year, O.value.maxDate)
      ) || d.value.months.includes(i.value), T = Fn(f.value, i.value, n.year);
      return { active: W, disabled: se, highlighted: T };
    })), N = G(() => Wt(n.years, (i) => {
      const W = n.year === i.value, se = xt(
        i.value,
        Vt(O.value.minDate),
        Vt(O.value.maxDate)
      ) || d.value.years.includes(i.value), T = Za(f.value, i.value);
      return { active: W, disabled: se, highlighted: T };
    })), ee = (i, W, se) => {
      se !== void 0 ? i.value = se : i.value = !i.value, i.value ? (H.value = !0, a("overlay-opened", W)) : (H.value = !1, a("overlay-closed", W));
    }, y = (i = !1, W) => {
      S(i), ee(z, qe.month, W);
    }, U = (i = !1, W) => {
      S(i), ee(ae, qe.year, W);
    }, S = (i) => {
      i || a("reset-flow");
    }, Z = (i, W) => {
      n.arrowNavigation && (M.value[W] = He(i), L(M.value, "monthYear"));
    }, A = G(() => {
      var i, W, se, T, re, l;
      return [
        {
          type: ut.month,
          index: 1,
          toggle: y,
          modelValue: B.value,
          updateModelValue: (w) => B.value = w,
          text: pe.value.text,
          showSelectionGrid: z.value,
          items: v.value,
          ariaLabel: (i = c.value) == null ? void 0 : i.openMonthsOverlay,
          overlayLabel: ((se = (W = c.value).monthPicker) == null ? void 0 : se.call(W, !0)) ?? void 0
        },
        {
          type: ut.year,
          index: 2,
          toggle: U,
          modelValue: q.value,
          updateModelValue: (w) => q.value = w,
          text: Ol(n.year, n.locale),
          showSelectionGrid: ae.value,
          items: N.value,
          ariaLabel: (T = c.value) == null ? void 0 : T.openYearsOverlay,
          overlayLabel: ((l = (re = c.value).yearPicker) == null ? void 0 : l.call(re, !0)) ?? void 0
        }
      ];
    }), ie = G(() => n.disableYearSelect ? [A.value[0]] : n.yearFirst ? [...A.value].reverse() : A.value);
    return t({
      toggleMonthPicker: y,
      toggleYearPicker: U,
      handleMonthYearChange: _
    }), (i, W) => {
      var se, T, re, l, w, oe;
      return $(), V("div", Ir, [
        i.$slots["month-year"] ? ($(), V("div", Er, [
          ue(i.$slots, "month-year", We(et({
            month: e.month,
            year: e.year,
            months: e.months,
            years: e.years,
            updateMonthYear: s(R),
            handleMonthYearChange: s(_),
            instance: e.instance,
            isDisabled: s(h)
          })))
        ])) : ($(), V(we, { key: 1 }, [
          i.$slots["top-extra"] ? ($(), V("div", Nr, [
            ue(i.$slots, "top-extra", { value: i.internalModelValue })
          ])) : J("", !0),
          ge("div", Lr, [
            s(b)(s(p), e.instance) && !i.vertical ? ($(), Se(qt, {
              key: 0,
              "aria-label": (se = s(c)) == null ? void 0 : se.prevMonth,
              disabled: s(h)(!1),
              class: Me((T = s(m)) == null ? void 0 : T.navBtnPrev),
              "el-name": "action-prev",
              onActivate: W[0] || (W[0] = (D) => s(_)(!1, !0)),
              onSetRef: W[1] || (W[1] = (D) => Z(D, 0))
            }, {
              default: De(() => [
                i.$slots["arrow-left"] ? ue(i.$slots, "arrow-left", { key: 0 }) : J("", !0),
                i.$slots["arrow-left"] ? J("", !0) : ($(), Se(s(Wa), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : J("", !0),
            ge("div", {
              class: Me(["dp__month_year_wrap", {
                dp__year_disable_select: i.disableYearSelect
              }])
            }, [
              ($(!0), V(we, null, _e(ie.value, (D, he) => ($(), V(we, {
                key: D.type
              }, [
                ge("button", {
                  ref_for: !0,
                  ref: (ke) => Z(ke, he + 1),
                  type: "button",
                  "data-dp-element": `overlay-${D.type}`,
                  class: Me(["dp__btn dp__month_year_select", { "dp--hidden-el": H.value }]),
                  "aria-label": `${D.text}-${D.ariaLabel}`,
                  "data-test-id": `${D.type}-toggle-overlay-${e.instance}`,
                  onClick: D.toggle,
                  onKeydown: (ke) => s(xe)(ke, () => D.toggle(), !0)
                }, [
                  i.$slots[D.type] ? ue(i.$slots, D.type, {
                    key: 0,
                    text: D.text,
                    value: n[D.type]
                  }) : J("", !0),
                  i.$slots[D.type] ? J("", !0) : ($(), V(we, { key: 1 }, [
                    bt(Je(D.type !== "year" ? D.text : s(Sn)(D.text)), 1)
                  ], 64))
                ], 42, Fr),
                nt(Kt, {
                  name: s(P)(D.showSelectionGrid),
                  css: s(F)
                }, {
                  default: De(() => [
                    D.showSelectionGrid ? ($(), Se(aa, {
                      key: 0,
                      items: D.items,
                      "arrow-navigation": i.arrowNavigation,
                      "hide-navigation": i.hideNavigation,
                      "is-last": i.autoApply && !s(Y).keepActionRow,
                      "skip-button-ref": !1,
                      config: i.config,
                      type: D.type,
                      "header-refs": [],
                      "esc-close": i.escClose,
                      "menu-wrap-ref": i.menuWrapRef,
                      "text-input": i.textInput,
                      "aria-labels": i.ariaLabels,
                      "overlay-label": D.overlayLabel,
                      onSelected: D.updateModelValue,
                      onToggle: D.toggle
                    }, Xe({
                      "button-icon": De(() => [
                        i.$slots["calendar-icon"] ? ue(i.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                        i.$slots["calendar-icon"] ? J("", !0) : ($(), Se(s(Gt), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      i.$slots[`${D.type}-overlay-value`] ? {
                        name: "item",
                        fn: De(({ item: ke }) => [
                          ue(i.$slots, `${D.type}-overlay-value`, {
                            text: ke.text,
                            value: ke.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      i.$slots[`${D.type}-overlay`] ? {
                        name: "overlay",
                        fn: De(() => [
                          ue(i.$slots, `${D.type}-overlay`, Ve({ ref_for: !0 }, ve.value(D.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      i.$slots[`${D.type}-overlay-header`] ? {
                        name: "header",
                        fn: De(() => [
                          ue(i.$slots, `${D.type}-overlay-header`, {
                            toggle: D.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : J("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            s(b)(s(p), e.instance) && i.vertical ? ($(), Se(qt, {
              key: 1,
              "aria-label": (re = s(c)) == null ? void 0 : re.prevMonth,
              "el-name": "action-prev",
              disabled: s(h)(!1),
              class: Me((l = s(m)) == null ? void 0 : l.navBtnPrev),
              onActivate: W[2] || (W[2] = (D) => s(_)(!1, !0))
            }, {
              default: De(() => [
                i.$slots["arrow-up"] ? ue(i.$slots, "arrow-up", { key: 0 }) : J("", !0),
                i.$slots["arrow-up"] ? J("", !0) : ($(), Se(s(Ka), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : J("", !0),
            s(j)(s(p), e.instance) ? ($(), Se(qt, {
              key: 2,
              ref: "rightIcon",
              "el-name": "action-next",
              disabled: s(h)(!0),
              "aria-label": (w = s(c)) == null ? void 0 : w.nextMonth,
              class: Me((oe = s(m)) == null ? void 0 : oe.navBtnNext),
              onActivate: W[3] || (W[3] = (D) => s(_)(!0, !0)),
              onSetRef: W[4] || (W[4] = (D) => Z(D, i.disableYearSelect ? 2 : 3))
            }, {
              default: De(() => [
                i.$slots[i.vertical ? "arrow-down" : "arrow-right"] ? ue(i.$slots, i.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : J("", !0),
                i.$slots[i.vertical ? "arrow-down" : "arrow-right"] ? J("", !0) : ($(), Se(ma(i.vertical ? s(Ga) : s(Va)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : J("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), Hr = {
  class: "dp__calendar_header",
  role: "row"
}, Ur = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Wr = ["aria-label"], Vr = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, jr = { class: "dp__cell_inner" }, Kr = ["id", "aria-pressed", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Gr = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...ct
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { buildMultiLevelMatrix: u } = St(), {
      defaultedTransitions: c,
      defaultedConfig: p,
      defaultedAriaLabels: d,
      defaultedMultiCalendars: Y,
      defaultedWeekNumbers: f,
      defaultedMultiDates: O,
      defaultedUI: m
    } = Ye(n), P = X(null), F = X({
      bottom: "",
      left: "",
      transform: ""
    }), L = X([]), _ = X(null), h = X(!0), R = X(""), b = X({ startX: 0, endX: 0, startY: 0, endY: 0 }), j = X([]), z = X({ left: "50%" }), ae = X(!1), H = G(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), M = G(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : Al(n.formatLocale, n.locale, +n.weekStart));
    Ge(() => {
      a("mount", { cmp: "calendar", refs: L }), p.value.noSwipe || _.value && (_.value.addEventListener("touchstart", Z, { passive: !1 }), _.value.addEventListener("touchend", A, { passive: !1 }), _.value.addEventListener("touchmove", ie, { passive: !1 })), n.monthChangeOnScroll && _.value && _.value.addEventListener("wheel", se, { passive: !1 });
    }), jt(() => {
      p.value.noSwipe || _.value && (_.value.removeEventListener("touchstart", Z), _.value.removeEventListener("touchend", A), _.value.removeEventListener("touchmove", ie)), n.monthChangeOnScroll && _.value && _.value.removeEventListener("wheel", se);
    });
    const Q = (D) => D ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", B = (D, he) => {
      if (n.transitions) {
        const ke = je(ht(K(), n.month, n.year));
        R.value = Fe(je(ht(K(), D, he)), ke) ? c.value[Q(!0)] : c.value[Q(!1)], h.value = !1, lt(() => {
          h.value = !0;
        });
      }
    }, q = G(
      () => ({
        ...m.value.calendar ?? {}
      })
    ), ve = G(() => (D) => {
      const he = Sl(D);
      return {
        dp__marker_dot: he.type === "dot",
        dp__marker_line: he.type === "line"
      };
    }), pe = G(() => (D) => Te(D, P.value)), v = G(() => ({
      dp__calendar: !0,
      dp__calendar_next: Y.value.count > 0 && n.instance !== 0
    })), N = G(() => (D) => n.hideOffsetDates ? D.current : !0), ee = async (D, he) => {
      const { width: ke, height: le } = D.getBoundingClientRect();
      P.value = he.value;
      let o = { left: `${ke / 2}px` }, E = -50;
      if (await lt(), j.value[0]) {
        const { left: fe, width: I } = j.value[0].getBoundingClientRect();
        fe < 0 && (o = { left: "0" }, E = 0, z.value.left = `${ke / 2}px`), window.innerWidth < fe + I && (o = { right: "0" }, E = 0, z.value.left = `${I - ke / 2}px`);
      }
      F.value = {
        bottom: `${le}px`,
        ...o,
        transform: `translateX(${E}%)`
      };
    }, y = async (D, he, ke) => {
      var o, E, fe;
      const le = He(L.value[he][ke]);
      le && ((o = D.marker) != null && o.customPosition && ((fe = (E = D.marker) == null ? void 0 : E.tooltip) != null && fe.length) ? F.value = D.marker.customPosition(le) : await ee(le, D), a("tooltip-open", D.marker));
    }, U = async (D, he, ke) => {
      var le, o;
      if (ae.value && O.value.enabled && O.value.dragSelect)
        return a("select-date", D);
      if (a("set-hover-date", D), (o = (le = D.marker) == null ? void 0 : le.tooltip) != null && o.length) {
        if (n.hideOffsetDates && !D.current) return;
        await y(D, he, ke);
      }
    }, S = (D) => {
      P.value && (P.value = null, F.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", D.marker));
    }, Z = (D) => {
      b.value.startX = D.changedTouches[0].screenX, b.value.startY = D.changedTouches[0].screenY;
    }, A = (D) => {
      b.value.endX = D.changedTouches[0].screenX, b.value.endY = D.changedTouches[0].screenY, i();
    }, ie = (D) => {
      n.vertical && !n.inline && D.preventDefault();
    }, i = () => {
      const D = n.vertical ? "Y" : "X";
      Math.abs(b.value[`start${D}`] - b.value[`end${D}`]) > 10 && a("handle-swipe", b.value[`start${D}`] > b.value[`end${D}`] ? "right" : "left");
    }, W = (D, he, ke) => {
      D && (Array.isArray(L.value[he]) ? L.value[he][ke] = D : L.value[he] = [D]), n.arrowNavigation && u(L.value, "calendar");
    }, se = (D) => {
      n.monthChangeOnScroll && (D.preventDefault(), a("handle-scroll", D));
    }, T = (D) => f.value.type === "local" ? ml(D.value, { weekStartsOn: +n.weekStart }) : f.value.type === "iso" ? pl(D.value) : typeof f.value.type == "function" ? f.value.type(D.value) : "", re = (D) => {
      const he = D[0];
      return f.value.hideOnOffsetDates ? D.some((ke) => ke.current) ? T(he) : "" : T(he);
    }, l = (D, he, ke = !0) => {
      !ke && _l() || (!O.value.enabled || p.value.allowPreventDefault) && ($t(D, p.value), a("select-date", he));
    }, w = (D) => {
      $t(D, p.value);
    }, oe = (D) => {
      O.value.enabled && O.value.dragSelect ? (ae.value = !0, a("select-date", D)) : O.value.enabled && a("select-date", D);
    };
    return t({ triggerTransition: B }), (D, he) => ($(), V("div", {
      class: Me(v.value)
    }, [
      ge("div", {
        ref_key: "calendarWrapRef",
        ref: _,
        class: Me(q.value),
        role: "grid"
      }, [
        ge("div", Hr, [
          D.weekNumbers ? ($(), V("div", Ur, Je(D.weekNumName), 1)) : J("", !0),
          ($(!0), V(we, null, _e(M.value, (ke, le) => {
            var o, E;
            return $(), V("div", {
              key: le,
              class: "dp__calendar_header_item",
              role: "gridcell",
              "data-test-id": "calendar-header",
              "aria-label": (E = (o = s(d)) == null ? void 0 : o.weekDay) == null ? void 0 : E.call(o, le)
            }, [
              D.$slots["calendar-header"] ? ue(D.$slots, "calendar-header", {
                key: 0,
                day: ke,
                index: le
              }) : J("", !0),
              D.$slots["calendar-header"] ? J("", !0) : ($(), V(we, { key: 1 }, [
                bt(Je(ke), 1)
              ], 64))
            ], 8, Wr);
          }), 128))
        ]),
        he[2] || (he[2] = ge("div", { class: "dp__calendar_header_separator" }, null, -1)),
        nt(Kt, {
          name: R.value,
          css: !!D.transitions
        }, {
          default: De(() => [
            h.value ? ($(), V("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: he[1] || (he[1] = (ke) => ae.value = !1)
            }, [
              ($(!0), V(we, null, _e(H.value, (ke, le) => ($(), V("div", {
                key: le,
                class: "dp__calendar_row",
                role: "row"
              }, [
                D.weekNumbers ? ($(), V("div", Vr, [
                  ge("div", jr, Je(re(ke.days)), 1)
                ])) : J("", !0),
                ($(!0), V(we, null, _e(ke.days, (o, E) => {
                  var fe, I, $e;
                  return $(), V("div", {
                    id: s(Ha)(o.value),
                    ref_for: !0,
                    ref: (be) => W(be, le, E),
                    key: E + le,
                    role: "gridcell",
                    class: "dp__calendar_item",
                    "aria-pressed": (o.classData.dp__active_date || o.classData.dp__range_start || o.classData.dp__range_start) ?? void 0,
                    "aria-disabled": o.classData.dp__cell_disabled || void 0,
                    "aria-label": (I = (fe = s(d)) == null ? void 0 : fe.day) == null ? void 0 : I.call(fe, o),
                    tabindex: !o.current && D.hideOffsetDates ? void 0 : 0,
                    "data-test-id": s(Ha)(o.value),
                    onClick: Xt((be) => l(be, o), ["prevent"]),
                    onTouchend: (be) => l(be, o, !1),
                    onKeydown: (be) => s(xe)(be, () => D.$emit("select-date", o)),
                    onMouseenter: (be) => U(o, le, E),
                    onMouseleave: (be) => S(o),
                    onMousedown: (be) => oe(o),
                    onMouseup: he[0] || (he[0] = (be) => ae.value = !1)
                  }, [
                    ge("div", {
                      class: Me(["dp__cell_inner", o.classData])
                    }, [
                      D.$slots.day && N.value(o) ? ue(D.$slots, "day", {
                        key: 0,
                        day: +o.text,
                        date: o.value
                      }) : J("", !0),
                      D.$slots.day ? J("", !0) : ($(), V(we, { key: 1 }, [
                        bt(Je(o.text), 1)
                      ], 64)),
                      o.marker && N.value(o) ? ($(), V(we, { key: 2 }, [
                        D.$slots.marker ? ue(D.$slots, "marker", {
                          key: 0,
                          marker: o.marker,
                          day: +o.text,
                          date: o.value
                        }) : ($(), V("div", {
                          key: 1,
                          class: Me(ve.value(o.marker)),
                          style: ot(o.marker.color ? { backgroundColor: o.marker.color } : {})
                        }, null, 6))
                      ], 64)) : J("", !0),
                      pe.value(o.value) ? ($(), V("div", {
                        key: 3,
                        ref_for: !0,
                        ref_key: "activeTooltip",
                        ref: j,
                        class: "dp__marker_tooltip",
                        style: ot(F.value)
                      }, [
                        ($e = o.marker) != null && $e.tooltip ? ($(), V("div", {
                          key: 0,
                          class: "dp__tooltip_content",
                          onClick: w
                        }, [
                          ($(!0), V(we, null, _e(o.marker.tooltip, (be, Pe) => ($(), V("div", {
                            key: Pe,
                            class: "dp__tooltip_text"
                          }, [
                            D.$slots["marker-tooltip"] ? ue(D.$slots, "marker-tooltip", {
                              key: 0,
                              tooltip: be,
                              day: o.value
                            }) : J("", !0),
                            D.$slots["marker-tooltip"] ? J("", !0) : ($(), V(we, { key: 1 }, [
                              ge("div", {
                                class: "dp__tooltip_mark",
                                style: ot(be.color ? { backgroundColor: be.color } : {})
                              }, null, 4),
                              ge("div", null, Je(be.text), 1)
                            ], 64))
                          ]))), 128)),
                          ge("div", {
                            class: "dp__arrow_bottom_tp",
                            style: ot(z.value)
                          }, null, 4)
                        ])) : J("", !0)
                      ], 4)) : J("", !0)
                    ], 2)
                  ], 40, Kr);
                }), 128))
              ]))), 128))
            ], 32)) : J("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), yn = (e) => Array.isArray(e), Qr = (e, t, r, a) => {
  const n = X([]), u = X(/* @__PURE__ */ new Date()), c = X(), p = () => A(e.isTextInputDate), { modelValue: d, calendars: Y, time: f, today: O } = la(e, t, p), {
    defaultedMultiCalendars: m,
    defaultedStartTime: P,
    defaultedRange: F,
    defaultedConfig: L,
    defaultedTz: _,
    propDates: h,
    defaultedMultiDates: R
  } = Ye(e), { validateMonthYearInRange: b, isDisabled: j, isDateRangeAllowed: z, checkMinMaxRange: ae } = Pt(e), { updateTimeValues: H, getSetDateTime: M, setTime: Q, assignStartTime: B, validateTime: q, disabledTimesConfig: ve } = Kn(e, f, d, a), pe = G(
    () => (g) => Y.value[g] ? Y.value[g].month : 0
  ), v = G(
    () => (g) => Y.value[g] ? Y.value[g].year : 0
  ), N = (g) => !L.value.keepViewOnOffsetClick || g ? !0 : !c.value, ee = (g, ne, me, C = !1) => {
    var te, ce;
    N(C) && (Y.value[g] || (Y.value[g] = { month: 0, year: 0 }), Y.value[g].month = dn(ne) ? (te = Y.value[g]) == null ? void 0 : te.month : ne, Y.value[g].year = dn(me) ? (ce = Y.value[g]) == null ? void 0 : ce.year : me);
  }, y = () => {
    e.autoApply && t("select-date");
  }, U = () => {
    P.value && B(P.value);
  };
  Ge(() => {
    e.shadow || (d.value || (he(), U()), A(!0), e.focusStartDate && e.startDate && he());
  });
  const S = G(() => {
    var g;
    return (g = e.flow) != null && g.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), Z = () => {
    e.autoApply && S.value && t("auto-apply", e.partialFlow ? e.flowStep !== e.flow.length : !1);
  }, A = (g = !1) => {
    if (d.value)
      return Array.isArray(d.value) ? (n.value = d.value, l(g)) : W(d.value, g);
    if (m.value.count && g && !e.startDate)
      return i(K(), g);
  }, ie = () => Array.isArray(d.value) && F.value.enabled ? Ae(d.value[0]) === Ae(d.value[1] ?? d.value[0]) : !1, i = (g = /* @__PURE__ */ new Date(), ne = !1) => {
    if ((!m.value.count || !m.value.static || ne) && ee(0, Ae(g), ye(g)), m.value.count && (!d.value || ie() || !m.value.solo) && (!m.value.solo || ne))
      for (let me = 1; me < m.value.count; me++) {
        const C = Re(K(), { month: pe.value(me - 1), year: v.value(me - 1) }), te = An(C, { months: 1 });
        Y.value[me] = { month: Ae(te), year: ye(te) };
      }
  }, W = (g, ne) => {
    i(g), Q("hours", kt(g)), Q("minutes", Tt(g)), Q("seconds", Ut(g)), m.value.count && ne && D();
  }, se = (g) => {
    if (m.value.count) {
      if (m.value.solo) return 0;
      const ne = Ae(g[0]), me = Ae(g[1]);
      return Math.abs(me - ne) < m.value.count ? 0 : 1;
    }
    return 1;
  }, T = (g, ne) => {
    g[1] && F.value.showLastInRange ? i(g[se(g)], ne) : i(g[0], ne);
    const me = (C, te) => [
      C(g[0]),
      g[1] ? C(g[1]) : f[te][1]
    ];
    Q("hours", me(kt, "hours")), Q("minutes", me(Tt, "minutes")), Q("seconds", me(Ut, "seconds"));
  }, re = (g, ne) => {
    if ((F.value.enabled || e.weekPicker) && !R.value.enabled)
      return T(g, ne);
    if (R.value.enabled && ne) {
      const me = g[g.length - 1];
      return W(me, ne);
    }
  }, l = (g) => {
    const ne = d.value;
    re(ne, g), m.value.count && m.value.solo && D();
  }, w = (g, ne) => {
    const me = Re(K(), { month: pe.value(ne), year: v.value(ne) }), C = g < 0 ? Bt(me, 1) : Zt(me, 1);
    b(Ae(C), ye(C), g < 0, e.preventMinMaxNavigation) && (ee(ne, Ae(C), ye(C)), t("update-month-year", { instance: ne, month: Ae(C), year: ye(C) }), m.value.count && !m.value.solo && oe(ne), r());
  }, oe = (g) => {
    for (let ne = g - 1; ne >= 0; ne--) {
      const me = Zt(Re(K(), { month: pe.value(ne + 1), year: v.value(ne + 1) }), 1);
      ee(ne, Ae(me), ye(me));
    }
    for (let ne = g + 1; ne <= m.value.count - 1; ne++) {
      const me = Bt(Re(K(), { month: pe.value(ne - 1), year: v.value(ne - 1) }), 1);
      ee(ne, Ae(me), ye(me));
    }
  }, D = () => {
    if (Array.isArray(d.value) && d.value.length === 2) {
      const g = K(
        K(d.value[1] ? d.value[1] : Bt(d.value[0], 1))
      ), [ne, me] = [Ae(d.value[0]), ye(d.value[0])], [C, te] = [Ae(d.value[1]), ye(d.value[1])];
      (ne !== C || ne === C && me !== te) && m.value.solo && ee(1, Ae(g), ye(g));
    } else d.value && !Array.isArray(d.value) && (ee(0, Ae(d.value), ye(d.value)), i(K()));
  }, he = () => {
    e.startDate && (ee(0, Ae(K(e.startDate)), ye(K(e.startDate))), m.value.count && oe(0));
  }, ke = (g, ne) => {
    if (e.monthChangeOnScroll) {
      const me = (/* @__PURE__ */ new Date()).getTime() - u.value.getTime(), C = Math.abs(g.deltaY);
      let te = 500;
      C > 1 && (te = 100), C > 100 && (te = 0), me > te && (u.value = /* @__PURE__ */ new Date(), w(e.monthChangeOnScroll !== "inverse" ? -g.deltaY : g.deltaY, ne));
    }
  }, le = (g, ne, me = !1) => {
    e.monthChangeOnArrows && e.vertical === me && o(g, ne);
  }, o = (g, ne) => {
    w(g === "right" ? -1 : 1, ne);
  }, E = (g) => {
    if (h.value.markers)
      return va(g.value, h.value.markers);
  }, fe = (g, ne) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [g == 0, !0];
      case "fair":
        return [g == 0 || ne > g, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, I = (g, ne, me, C) => {
    if (e.sixWeeks && g.length < 6) {
      const te = 6 - g.length, ce = (ne.getDay() + 7 - C) % 7, vt = 6 - (me.getDay() + 7 - C) % 7, [Ct, $a] = fe(ce, vt);
      for (let Ot = 1; Ot <= te; Ot++)
        if ($a ? !!(Ot % 2) == Ct : Ct) {
          const oa = g[0].days[0], Aa = $e(Dt(oa.value, -7), Ae(ne));
          g.unshift({ days: Aa });
        } else {
          const oa = g[g.length - 1], Aa = oa.days[oa.days.length - 1], qn = $e(Dt(Aa.value, 1), Ae(ne));
          g.push({ days: qn });
        }
    }
    return g;
  }, $e = (g, ne) => {
    const me = K(g), C = [];
    for (let te = 0; te < 7; te++) {
      const ce = Dt(me, te), yt = Ae(ce) !== ne;
      C.push({
        text: e.hideOffsetDates && yt ? "" : ce.getDate(),
        value: ce,
        current: !yt,
        classData: {}
      });
    }
    return C;
  }, be = (g, ne) => {
    const me = [], C = new Date(ne, g), te = new Date(ne, g + 1, 0), ce = e.weekStart, yt = Ua(C, { weekStartsOn: ce }), vt = (Ct) => {
      const $a = $e(Ct, g);
      if (me.push({ days: $a }), !me[me.length - 1].days.some(
        (Ot) => Te(je(Ot.value), je(te))
      )) {
        const Ot = Dt(Ct, 7);
        vt(Ot);
      }
    };
    return vt(yt), I(me, C, te, ce);
  }, Pe = (g) => {
    const ne = At(K(g.value), f.hours, f.minutes, rt());
    t("date-update", ne), R.value.enabled ? xa(ne, d, R.value.limit) : d.value = ne, a(), lt().then(() => {
      Z();
    });
  }, Ee = (g) => F.value.noDisabledRange ? In(n.value[0], g).some((me) => j(me)) : !1, Be = () => {
    n.value = d.value ? d.value.slice() : [], n.value.length === 2 && !(F.value.fixedStart || F.value.fixedEnd) && (n.value = []);
  }, k = (g, ne) => {
    const me = [
      K(g.value),
      Dt(K(g.value), +F.value.autoRange)
    ];
    z(me) ? (ne && x(g.value), n.value = me) : t("invalid-date", g.value);
  }, x = (g) => {
    const ne = Ae(K(g)), me = ye(K(g));
    if (ee(0, ne, me), m.value.count > 0)
      for (let C = 1; C < m.value.count; C++) {
        const te = El(
          Re(K(g), { year: v.value(C - 1), month: pe.value(C - 1) })
        );
        ee(C, te.month, te.year);
      }
  }, Ie = (g) => {
    if (Ee(g.value) || !ae(g.value, d.value, F.value.fixedStart ? 0 : 1))
      return t("invalid-date", g.value);
    n.value = Wn(K(g.value), d, t, F);
  }, Ue = (g, ne) => {
    if (Be(), F.value.autoRange) return k(g, ne);
    if (F.value.fixedStart || F.value.fixedEnd) return Ie(g);
    n.value[0] ? ae(K(g.value), d.value) && !Ee(g.value) ? Ne(K(g.value), K(n.value[0])) ? (n.value.unshift(K(g.value)), t("range-end", n.value[0])) : (n.value[1] = K(g.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", g.value), t("invalid-date", g.value)) : (n.value[0] = K(g.value), t("range-start", n.value[0]));
  }, rt = (g = !0) => e.enableSeconds ? Array.isArray(f.seconds) ? g ? f.seconds[0] : f.seconds[1] : f.seconds : 0, de = (g) => {
    n.value[g] = At(
      n.value[g],
      f.hours[g],
      f.minutes[g],
      rt(g !== 1)
    );
  }, Rt = () => {
    var g, ne;
    n.value[0] && n.value[1] && +((g = n.value) == null ? void 0 : g[0]) > +((ne = n.value) == null ? void 0 : ne[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, ft = () => {
    n.value.length && (n.value[0] && !n.value[1] ? de(0) : (de(0), de(1), a()), Rt(), d.value = n.value.slice(), ga(n.value, t, e.autoApply, e.modelAuto));
  }, ra = (g, ne = !1) => {
    if (j(g.value) || !g.current && e.hideOffsetDates) return t("invalid-date", g.value);
    if (c.value = JSON.parse(JSON.stringify(g)), !F.value.enabled) return Pe(g);
    yn(f.hours) && yn(f.minutes) && !R.value.enabled && (Ue(g, ne), ft());
  }, ba = (g, ne) => {
    var C;
    ee(g, ne.month, ne.year, !0), m.value.count && !m.value.solo && oe(g), t("update-month-year", { instance: g, month: ne.month, year: ne.year }), r(m.value.solo ? g : void 0);
    const me = (C = e.flow) != null && C.length ? e.flow[e.flowStep] : void 0;
    !ne.fromNav && (me === qe.month || me === qe.year) && a();
  }, ka = (g, ne) => {
    Un({
      value: g,
      modelValue: d,
      range: F.value.enabled,
      timezone: ne ? void 0 : _.value.timezone
    }), y(), e.multiCalendars && lt().then(() => A(!0));
  }, wa = () => {
    const g = Qa(K(), _.value);
    !F.value.enabled && !R.value.enabled ? d.value = g : d.value && Array.isArray(d.value) && d.value[0] ? R.value.enabled ? d.value = [...d.value, g] : d.value = Ne(g, d.value[0]) ? [g, d.value[0]] : [d.value[0], g] : d.value = [g], y();
  }, Da = () => {
    if (Array.isArray(d.value))
      if (R.value.enabled) {
        const g = Ma();
        d.value[d.value.length - 1] = M(g);
      } else
        d.value = d.value.map((g, ne) => g && M(g, ne));
    else
      d.value = M(d.value);
    t("time-update");
  }, Ma = () => Array.isArray(d.value) && d.value.length ? d.value[d.value.length - 1] : null;
  return {
    calendars: Y,
    modelValue: d,
    month: pe,
    year: v,
    time: f,
    disabledTimesConfig: ve,
    today: O,
    validateTime: q,
    getCalendarDays: be,
    getMarker: E,
    handleScroll: ke,
    handleSwipe: o,
    handleArrow: le,
    selectDate: ra,
    updateMonthYear: ba,
    presetDate: ka,
    selectCurrentDate: wa,
    updateTime: (g, ne = !0, me = !1) => {
      H(g, ne, me, Da);
    },
    assignMonthAndYear: i,
    setStartTime: U
  };
}, qr = { key: 0 }, Jr = /* @__PURE__ */ Ke({
  __name: "DatePicker",
  props: {
    ...ct
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      calendars: u,
      month: c,
      year: p,
      modelValue: d,
      time: Y,
      disabledTimesConfig: f,
      today: O,
      validateTime: m,
      getCalendarDays: P,
      getMarker: F,
      handleArrow: L,
      handleScroll: _,
      handleSwipe: h,
      selectDate: R,
      updateMonthYear: b,
      presetDate: j,
      selectCurrentDate: z,
      updateTime: ae,
      assignMonthAndYear: H,
      setStartTime: M
    } = Qr(n, a, ie, i), Q = Et(), { setHoverDate: B, getDayClassData: q, clearHoverDate: ve } = mo(d, n), { defaultedMultiCalendars: pe } = Ye(n), v = X([]), N = X([]), ee = X(null), y = at(Q, "calendar"), U = at(Q, "monthYear"), S = at(Q, "timePicker"), Z = (le) => {
      n.shadow || a("mount", le);
    };
    st(
      u,
      () => {
        n.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    ), st(
      pe,
      (le, o) => {
        le.count - o.count > 0 && H();
      },
      { deep: !0 }
    );
    const A = G(() => (le) => P(c.value(le), p.value(le)).map((o) => ({
      ...o,
      days: o.days.map((E) => (E.marker = F(E), E.classData = q(E), E))
    })));
    function ie(le) {
      var o;
      le || le === 0 ? (o = N.value[le]) == null || o.triggerTransition(c.value(le), p.value(le)) : N.value.forEach((E, fe) => E.triggerTransition(c.value(fe), p.value(fe)));
    }
    function i() {
      a("update-flow-step");
    }
    const W = (le, o = !1) => {
      R(le, o), n.spaceConfirm && a("select-date");
    }, se = (le, o, E = 0) => {
      var fe;
      (fe = v.value[E]) == null || fe.toggleMonthPicker(le, o);
    }, T = (le, o, E = 0) => {
      var fe;
      (fe = v.value[E]) == null || fe.toggleYearPicker(le, o);
    }, re = (le, o, E) => {
      var fe;
      (fe = ee.value) == null || fe.toggleTimePicker(le, o, E);
    }, l = (le, o) => {
      var E;
      if (!n.range) {
        const fe = d.value ? d.value : O, I = o ? new Date(o) : fe, $e = le ? Ua(I, { weekStartsOn: 1 }) : bn(I, { weekStartsOn: 1 });
        R({
          value: $e,
          current: Ae(I) === c.value(0),
          text: "",
          classData: {}
        }), (E = document.getElementById(Ha($e))) == null || E.focus();
      }
    }, w = (le) => {
      var o;
      (o = v.value[0]) == null || o.handleMonthYearChange(le, !0);
    }, oe = (le) => {
      b(0, { month: c.value(0), year: p.value(0) + (le ? 1 : -1), fromNav: !0 });
    }, D = (le, o) => {
      le === qe.time && a(`time-picker-${o ? "open" : "close"}`), a("overlay-toggle", { open: o, overlay: le });
    }, he = (le) => {
      a("overlay-toggle", { open: !1, overlay: le }), a("focus-menu");
    };
    return t({
      clearHoverDate: ve,
      presetDate: j,
      selectCurrentDate: z,
      toggleMonthPicker: se,
      toggleYearPicker: T,
      toggleTimePicker: re,
      handleArrow: L,
      updateMonthYear: b,
      getSidebarProps: () => ({
        modelValue: d,
        month: c,
        year: p,
        time: Y,
        updateTime: ae,
        updateMonthYear: b,
        selectDate: R,
        presetDate: j
      }),
      changeMonth: w,
      changeYear: oe,
      selectWeekDate: l,
      setStartTime: M
    }), (le, o) => ($(), V(we, null, [
      nt(ya, {
        "multi-calendars": s(pe).count,
        collapse: le.collapse,
        "is-mobile": le.isMobile
      }, {
        default: De(({ instance: E, index: fe }) => [
          le.disableMonthYearSelect ? J("", !0) : ($(), Se(zr, Ve({
            key: 0,
            ref: (I) => {
              I && (v.value[fe] = I);
            },
            months: s(Pn)(le.formatLocale, le.locale, le.monthNameFormat),
            years: s(qa)(le.yearRange, le.locale, le.reverseYears),
            month: s(c)(E),
            year: s(p)(E),
            instance: E
          }, le.$props, {
            onMount: o[0] || (o[0] = (I) => Z(s(_t).header)),
            onResetFlow: o[1] || (o[1] = (I) => le.$emit("reset-flow")),
            onUpdateMonthYear: (I) => s(b)(E, I),
            onOverlayClosed: he,
            onOverlayOpened: o[2] || (o[2] = (I) => le.$emit("overlay-toggle", { open: !0, overlay: I }))
          }), Xe({ _: 2 }, [
            _e(s(U), (I, $e) => ({
              name: I,
              fn: De((be) => [
                ue(le.$slots, I, We(et(be)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          nt(Gr, Ve({
            ref: (I) => {
              I && (N.value[fe] = I);
            },
            "mapped-dates": A.value(E),
            month: s(c)(E),
            year: s(p)(E),
            instance: E
          }, le.$props, {
            onSelectDate: (I) => s(R)(I, E !== 1),
            onHandleSpace: (I) => W(I, E !== 1),
            onSetHoverDate: o[3] || (o[3] = (I) => s(B)(I)),
            onHandleScroll: (I) => s(_)(I, E),
            onHandleSwipe: (I) => s(h)(I, E),
            onMount: o[4] || (o[4] = (I) => Z(s(_t).calendar)),
            onResetFlow: o[5] || (o[5] = (I) => le.$emit("reset-flow")),
            onTooltipOpen: o[6] || (o[6] = (I) => le.$emit("tooltip-open", I)),
            onTooltipClose: o[7] || (o[7] = (I) => le.$emit("tooltip-close", I))
          }), Xe({ _: 2 }, [
            _e(s(y), (I, $e) => ({
              name: I,
              fn: De((be) => [
                ue(le.$slots, I, We(et({ ...be })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse", "is-mobile"]),
      le.enableTimePicker ? ($(), V("div", qr, [
        le.$slots["time-picker"] ? ue(le.$slots, "time-picker", We(Ve({ key: 0 }, { time: s(Y), updateTime: s(ae) }))) : ($(), Se(jn, Ve({
          key: 1,
          ref_key: "timePickerRef",
          ref: ee
        }, le.$props, {
          hours: s(Y).hours,
          minutes: s(Y).minutes,
          seconds: s(Y).seconds,
          "internal-model-value": le.internalModelValue,
          "disabled-times-config": s(f),
          "validate-time": s(m),
          onMount: o[8] || (o[8] = (E) => Z(s(_t).timePicker)),
          "onUpdate:hours": o[9] || (o[9] = (E) => s(ae)(E)),
          "onUpdate:minutes": o[10] || (o[10] = (E) => s(ae)(E, !1)),
          "onUpdate:seconds": o[11] || (o[11] = (E) => s(ae)(E, !1, !0)),
          onResetFlow: o[12] || (o[12] = (E) => le.$emit("reset-flow")),
          onOverlayClosed: o[13] || (o[13] = (E) => D(E, !1)),
          onOverlayOpened: o[14] || (o[14] = (E) => D(E, !0)),
          onAmPmChange: o[15] || (o[15] = (E) => le.$emit("am-pm-change", E))
        }), Xe({ _: 2 }, [
          _e(s(S), (E, fe) => ({
            name: E,
            fn: De((I) => [
              ue(le.$slots, E, We(et(I)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : J("", !0)
    ], 64));
  }
}), Xr = (e, t) => {
  const r = X(), {
    defaultedMultiCalendars: a,
    defaultedConfig: n,
    defaultedHighlight: u,
    defaultedRange: c,
    propDates: p,
    defaultedFilters: d,
    defaultedMultiDates: Y
  } = Ye(e), { modelValue: f, year: O, month: m, calendars: P } = la(e, t), { isDisabled: F } = Pt(e), { selectYear: L, groupedYears: _, showYearPicker: h, isDisabled: R, toggleYearPicker: b, handleYearSelect: j, handleYear: z } = Vn({
    modelValue: f,
    multiCalendars: a,
    range: c,
    highlight: u,
    calendars: P,
    propDates: p,
    month: m,
    year: O,
    filters: d,
    props: e,
    emit: t
  }), ae = (y, U) => [y, U].map((S) => pt(S, "MMMM", { locale: e.formatLocale })).join("-"), H = G(() => (y) => f.value ? Array.isArray(f.value) ? f.value.some((U) => ln(y, U)) : ln(f.value, y) : !1), M = (y) => {
    if (c.value.enabled) {
      if (Array.isArray(f.value)) {
        const U = Te(y, f.value[0]) || Te(y, f.value[1]);
        return ea(f.value, r.value, y) && !U;
      }
      return !1;
    }
    return !1;
  }, Q = (y, U) => y.quarter === on(U) && y.year === ye(U), B = (y) => typeof u.value == "function" ? u.value({ quarter: on(y), year: ye(y) }) : !!u.value.quarters.find((U) => Q(U, y)), q = G(() => (y) => {
    const U = Re(/* @__PURE__ */ new Date(), { year: O.value(y) });
    return yl({
      start: fa(U),
      end: $n(U)
    }).map((S) => {
      const Z = gl(S), A = rn(S), ie = F(S), i = M(Z), W = B(Z);
      return {
        text: ae(Z, A),
        value: Z,
        active: H.value(Z),
        highlighted: W,
        disabled: ie,
        isBetween: i
      };
    });
  }), ve = (y) => {
    xa(y, f, Y.value.limit), t("auto-apply", !0);
  }, pe = (y) => {
    f.value = en(f, y, t), ga(f.value, t, e.autoApply, e.modelAuto);
  }, v = (y) => {
    f.value = y, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a,
    groupedYears: _,
    year: O,
    isDisabled: R,
    quarters: q,
    showYearPicker: h,
    modelValue: f,
    setHoverDate: (y) => {
      r.value = y;
    },
    selectYear: L,
    selectQuarter: (y, U, S) => {
      if (!S)
        return P.value[U].month = Ae(rn(y)), Y.value.enabled ? ve(y) : c.value.enabled ? pe(y) : v(y);
    },
    toggleYearPicker: b,
    handleYearSelect: j,
    handleYear: z
  };
}, Zr = { class: "dp--quarter-items" }, xr = ["data-test-id", "disabled", "onClick", "onMouseover"], eo = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...ct
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, u = Et(), c = at(u, "yearMode"), {
      defaultedMultiCalendars: p,
      defaultedConfig: d,
      groupedYears: Y,
      year: f,
      isDisabled: O,
      quarters: m,
      modelValue: P,
      showYearPicker: F,
      setHoverDate: L,
      selectQuarter: _,
      toggleYearPicker: h,
      handleYearSelect: R,
      handleYear: b
    } = Xr(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: P,
      year: f,
      selectQuarter: _,
      handleYearSelect: R,
      handleYear: b
    }) }), (z, ae) => ($(), Se(ya, {
      "multi-calendars": s(p).count,
      collapse: z.collapse,
      stretch: "",
      "is-mobile": z.isMobile
    }, {
      default: De(({ instance: H }) => [
        ge("div", {
          class: "dp-quarter-picker-wrap",
          style: ot({ minHeight: `${s(d).modeHeight}px` })
        }, [
          z.$slots["top-extra"] ? ue(z.$slots, "top-extra", {
            key: 0,
            value: z.internalModelValue
          }) : J("", !0),
          ge("div", null, [
            nt(Hn, Ve(z.$props, {
              items: s(Y)(H),
              instance: H,
              "show-year-picker": s(F)[H],
              year: s(f)(H),
              "is-disabled": (M) => s(O)(H, M),
              onHandleYear: (M) => s(b)(H, M),
              onYearSelect: (M) => s(R)(M, H),
              onToggleYearPicker: (M) => s(h)(H, M == null ? void 0 : M.flow, M == null ? void 0 : M.show)
            }), Xe({ _: 2 }, [
              _e(s(c), (M, Q) => ({
                name: M,
                fn: De((B) => [
                  ue(z.$slots, M, We(et(B)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          ge("div", Zr, [
            ($(!0), V(we, null, _e(s(m)(H), (M, Q) => ($(), V("div", { key: Q }, [
              ge("button", {
                type: "button",
                class: Me(["dp--qr-btn", {
                  "dp--qr-btn-active": M.active,
                  "dp--qr-btn-between": M.isBetween,
                  "dp--qr-btn-disabled": M.disabled,
                  "dp--highlighted": M.highlighted
                }]),
                "data-test-id": M.value,
                disabled: M.disabled,
                onClick: (B) => s(_)(M.value, H, M.disabled),
                onMouseover: (B) => s(L)(M.value)
              }, [
                z.$slots.quarter ? ue(z.$slots, "quarter", {
                  key: 0,
                  value: M.value,
                  text: M.text
                }) : ($(), V(we, { key: 1 }, [
                  bt(Je(M.text), 1)
                ], 64))
              ], 42, xr)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse", "is-mobile"]));
  }
}), Gn = (e, t) => {
  const r = X(0);
  Ge(() => {
    a(), window.addEventListener("resize", a, { passive: !0 });
  }), jt(() => {
    window.removeEventListener("resize", a);
  });
  const a = () => {
    r.value = window.document.documentElement.clientWidth;
  };
  return {
    isMobile: G(
      () => r.value <= e.value.mobileBreakpoint && !t ? !0 : void 0
    )
  };
}, to = ["id", "tabindex", "role", "aria-label"], ao = {
  key: 0,
  class: "dp--menu-load-container"
}, no = {
  key: 1,
  class: "dp--menu-header"
}, lo = ["data-dp-mobile"], ro = {
  key: 0,
  class: "dp__sidebar_left"
}, oo = ["data-dp-mobile"], so = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], uo = {
  key: 2,
  class: "dp__sidebar_right"
}, io = {
  key: 3,
  class: "dp__action_extra"
}, gn = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...pa,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "menu-blur"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, u = X(null), c = G(() => {
      const { openOnTop: k, ...x } = n;
      return {
        ...x,
        isMobile: _.value,
        flowStep: pe.value,
        menuWrapRef: u.value
      };
    }), { setMenuFocused: p, setShiftKey: d, control: Y } = zn(), f = Et(), { defaultedTextInput: O, defaultedInline: m, defaultedConfig: P, defaultedUI: F, handleEventPropagation: L } = Ye(n), { isMobile: _ } = Gn(P, n.shadow), h = X(null), R = X(0), b = X(null), j = X(!1), z = X(null), ae = X(!1), H = (k) => {
      ae.value = !0, P.value.allowPreventDefault && k.preventDefault(), $t(k, P.value, !0);
    };
    Ge(() => {
      if (!n.shadow) {
        j.value = !0, M(), window.addEventListener("resize", M);
        const k = He(u);
        k && !O.value.enabled && !m.value.enabled && (p(!0), Z()), k && (k.addEventListener("pointerdown", H), k.addEventListener("mousedown", H));
      }
      document.addEventListener("mousedown", Ee);
    }), jt(() => {
      window.removeEventListener("resize", M), document.removeEventListener("mousedown", Ee);
      const k = He(u);
      k && (k.removeEventListener("pointerdown", H), k.removeEventListener("mousedown", H));
    });
    const M = () => {
      const k = He(b);
      k && (R.value = k.getBoundingClientRect().width);
    }, { arrowRight: Q, arrowLeft: B, arrowDown: q, arrowUp: ve } = St(), { flowStep: pe, updateFlowStep: v, childMount: N, resetFlow: ee, handleFlow: y } = po(n, a, z), U = G(() => n.monthPicker ? hr : n.yearPicker ? kr : n.timePicker ? Yr : n.quarterPicker ? eo : Jr), S = G(() => {
      var Ie;
      if (P.value.arrowLeft) return P.value.arrowLeft;
      const k = (Ie = u.value) == null ? void 0 : Ie.getBoundingClientRect(), x = n.getInputRect();
      return (x == null ? void 0 : x.width) < (R == null ? void 0 : R.value) && (x == null ? void 0 : x.left) <= ((k == null ? void 0 : k.left) ?? 0) ? `${(x == null ? void 0 : x.width) / 2}px` : (x == null ? void 0 : x.right) >= ((k == null ? void 0 : k.right) ?? 0) && (x == null ? void 0 : x.width) < (R == null ? void 0 : R.value) ? `${(R == null ? void 0 : R.value) - (x == null ? void 0 : x.width) / 2}px` : "50%";
    }), Z = () => {
      const k = He(u);
      k && k.focus({ preventScroll: !0 });
    }, A = G(() => {
      var k;
      return ((k = z.value) == null ? void 0 : k.getSidebarProps()) || {};
    }), ie = () => {
      n.openOnTop && a("recalculate-position");
    }, i = at(f, "action"), W = G(() => n.monthPicker || n.yearPicker ? at(f, "monthYear") : n.timePicker ? at(f, "timePicker") : at(f, "shared")), se = G(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), T = G(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), re = G(
      () => ({
        dp__menu: !0,
        dp__menu_index: !m.value.enabled,
        dp__relative: m.value.enabled,
        ...F.value.menu ?? {}
      })
    ), l = (k) => {
      $t(k, P.value, !0);
    }, w = (k) => {
      n.escClose && (a("close-picker"), L(k));
    }, oe = (k) => {
      if (n.arrowNavigation) {
        if (k === Ze.up) return ve();
        if (k === Ze.down) return q();
        if (k === Ze.left) return B();
        if (k === Ze.right) return Q();
      } else k === Ze.left || k === Ze.up ? o("handleArrow", Ze.left, 0, k === Ze.up) : o("handleArrow", Ze.right, 0, k === Ze.down);
    }, D = (k) => {
      d(k.shiftKey), !n.disableMonthYearSelect && k.code === Oe.tab && k.target.classList.contains("dp__menu") && Y.value.shiftKeyInMenu && (k.preventDefault(), $t(k, P.value, !0), a("close-picker"));
    }, he = () => {
      Z(), a("time-picker-close");
    }, ke = (k) => {
      var x, Ie, Ue;
      (x = z.value) == null || x.toggleTimePicker(!1, !1), (Ie = z.value) == null || Ie.toggleMonthPicker(!1, !1, k), (Ue = z.value) == null || Ue.toggleYearPicker(!1, !1, k);
    }, le = (k, x = 0) => {
      var Ie, Ue, rt;
      return k === "month" ? (Ie = z.value) == null ? void 0 : Ie.toggleMonthPicker(!1, !0, x) : k === "year" ? (Ue = z.value) == null ? void 0 : Ue.toggleYearPicker(!1, !0, x) : k === "time" ? (rt = z.value) == null ? void 0 : rt.toggleTimePicker(!0, !1) : ke(x);
    }, o = (k, ...x) => {
      var Ie, Ue;
      (Ie = z.value) != null && Ie[k] && ((Ue = z.value) == null || Ue[k](...x));
    }, E = () => {
      o("selectCurrentDate");
    }, fe = (k, x) => {
      o("presetDate", xn(k), x);
    }, I = () => {
      o("clearHoverDate");
    }, $e = (k, x) => {
      o("updateMonthYear", k, x);
    }, be = (k, x) => {
      k.preventDefault(), oe(x);
    }, Pe = (k) => {
      var x, Ie, Ue;
      if (D(k), k.key === Oe.home || k.key === Oe.end)
        return o(
          "selectWeekDate",
          k.key === Oe.home,
          k.target.getAttribute("id")
        );
      switch ((k.key === Oe.pageUp || k.key === Oe.pageDown) && (k.shiftKey ? (o("changeYear", k.key === Oe.pageUp), (x = Fa(u.value, "overlay-year")) == null || x.focus()) : (o("changeMonth", k.key === Oe.pageUp), (Ie = Fa(u.value, k.key === Oe.pageUp ? "action-prev" : "action-next")) == null || Ie.focus()), k.target.getAttribute("id") && ((Ue = u.value) == null || Ue.focus({ preventScroll: !0 }))), k.key) {
        case Oe.esc:
          return w(k);
        case Oe.arrowLeft:
          return be(k, Ze.left);
        case Oe.arrowRight:
          return be(k, Ze.right);
        case Oe.arrowUp:
          return be(k, Ze.up);
        case Oe.arrowDown:
          return be(k, Ze.down);
        default:
          return;
      }
    }, Ee = (k) => {
      var x;
      m.value.enabled && !m.value.input && !((x = u.value) != null && x.contains(k.target)) && ae.value && (ae.value = !1, a("menu-blur"));
    };
    return t({
      updateMonthYear: $e,
      switchView: le,
      handleFlow: y,
      onValueCleared: () => {
        var k, x;
        (x = (k = z.value) == null ? void 0 : k.setStartTime) == null || x.call(k);
      }
    }), (k, x) => {
      var Ie, Ue, rt;
      return $(), V("div", {
        id: k.uid ? `dp-menu-${k.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: u,
        tabindex: s(m).enabled ? void 0 : "0",
        role: s(m).enabled ? void 0 : "dialog",
        "aria-label": (Ie = k.ariaLabels) == null ? void 0 : Ie.menu,
        class: Me(re.value),
        style: ot({ "--dp-arrow-left": S.value }),
        onMouseleave: I,
        onClick: l,
        onKeydown: Pe
      }, [
        (k.disabled || k.readonly) && s(m).enabled || k.loading ? ($(), V("div", {
          key: 0,
          class: Me(T.value)
        }, [
          k.loading ? ($(), V("div", ao, x[19] || (x[19] = [
            ge("span", { class: "dp--menu-loader" }, null, -1)
          ]))) : J("", !0)
        ], 2)) : J("", !0),
        k.$slots["menu-header"] ? ($(), V("div", no, [
          ue(k.$slots, "menu-header")
        ])) : J("", !0),
        !s(m).enabled && !k.teleportCenter ? ($(), V("div", {
          key: 2,
          class: Me(se.value)
        }, null, 2)) : J("", !0),
        ge("div", {
          ref_key: "innerMenuRef",
          ref: b,
          class: Me({
            dp__menu_content_wrapper: ((Ue = k.presetDates) == null ? void 0 : Ue.length) || !!k.$slots["left-sidebar"] || !!k.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((rt = k.presetDates) == null ? void 0 : rt.length) || !!k.$slots["left-sidebar"] || !!k.$slots["right-sidebar"])
          }),
          "data-dp-mobile": s(_),
          style: ot({ "--dp-menu-width": `${R.value}px` })
        }, [
          k.$slots["left-sidebar"] ? ($(), V("div", ro, [
            ue(k.$slots, "left-sidebar", We(et(A.value)))
          ])) : J("", !0),
          k.presetDates.length ? ($(), V("div", {
            key: 1,
            class: Me({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
            "data-dp-mobile": s(_)
          }, [
            ($(!0), V(we, null, _e(k.presetDates, (de, Rt) => ($(), V(we, { key: Rt }, [
              de.slot ? ue(k.$slots, de.slot, {
                key: 0,
                presetDate: fe,
                label: de.label,
                value: de.value
              }) : ($(), V("button", {
                key: 1,
                type: "button",
                style: ot(de.style || {}),
                class: Me(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test-id": de.testId ?? void 0,
                "data-dp-mobile": s(_),
                onClick: Xt((ft) => fe(de.value, de.noTz), ["prevent"]),
                onKeydown: (ft) => s(xe)(ft, () => fe(de.value, de.noTz), !0)
              }, Je(de.label), 47, so))
            ], 64))), 128))
          ], 10, oo)) : J("", !0),
          ge("div", {
            ref_key: "calendarWrapperRef",
            ref: h,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            ($(), Se(ma(U.value), Ve({
              ref_key: "dynCmpRef",
              ref: z
            }, c.value, {
              "flow-step": s(pe),
              onMount: s(N),
              onUpdateFlowStep: s(v),
              onResetFlow: s(ee),
              onFocusMenu: Z,
              onSelectDate: x[0] || (x[0] = (de) => k.$emit("select-date")),
              onDateUpdate: x[1] || (x[1] = (de) => k.$emit("date-update", de)),
              onTooltipOpen: x[2] || (x[2] = (de) => k.$emit("tooltip-open", de)),
              onTooltipClose: x[3] || (x[3] = (de) => k.$emit("tooltip-close", de)),
              onAutoApply: x[4] || (x[4] = (de) => k.$emit("auto-apply", de)),
              onRangeStart: x[5] || (x[5] = (de) => k.$emit("range-start", de)),
              onRangeEnd: x[6] || (x[6] = (de) => k.$emit("range-end", de)),
              onInvalidFixedRange: x[7] || (x[7] = (de) => k.$emit("invalid-fixed-range", de)),
              onTimeUpdate: x[8] || (x[8] = (de) => k.$emit("time-update")),
              onAmPmChange: x[9] || (x[9] = (de) => k.$emit("am-pm-change", de)),
              onTimePickerOpen: x[10] || (x[10] = (de) => k.$emit("time-picker-open", de)),
              onTimePickerClose: he,
              onRecalculatePosition: ie,
              onUpdateMonthYear: x[11] || (x[11] = (de) => k.$emit("update-month-year", de)),
              onAutoApplyInvalid: x[12] || (x[12] = (de) => k.$emit("auto-apply-invalid", de)),
              onInvalidDate: x[13] || (x[13] = (de) => k.$emit("invalid-date", de)),
              onOverlayToggle: x[14] || (x[14] = (de) => k.$emit("overlay-toggle", de)),
              "onUpdate:internalModelValue": x[15] || (x[15] = (de) => k.$emit("update:internal-model-value", de))
            }), Xe({ _: 2 }, [
              _e(W.value, (de, Rt) => ({
                name: de,
                fn: De((ft) => [
                  ue(k.$slots, de, We(et({ ...ft })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          k.$slots["right-sidebar"] ? ($(), V("div", uo, [
            ue(k.$slots, "right-sidebar", We(et(A.value)))
          ])) : J("", !0),
          k.$slots["action-extra"] ? ($(), V("div", io, [
            k.$slots["action-extra"] ? ue(k.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: E
            }) : J("", !0)
          ])) : J("", !0)
        ], 14, lo),
        !k.autoApply || s(P).keepActionRow ? ($(), Se(ir, Ve({
          key: 3,
          "menu-mount": j.value
        }, c.value, {
          "calendar-width": R.value,
          onClosePicker: x[16] || (x[16] = (de) => k.$emit("close-picker")),
          onSelectDate: x[17] || (x[17] = (de) => k.$emit("select-date")),
          onInvalidSelect: x[18] || (x[18] = (de) => k.$emit("invalid-select")),
          onSelectNow: E
        }), Xe({ _: 2 }, [
          _e(s(i), (de, Rt) => ({
            name: de,
            fn: De((ft) => [
              ue(k.$slots, de, We(et({ ...ft })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : J("", !0)
      ], 46, to);
    };
  }
});
var Lt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Lt || {});
const co = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: r,
  pickerWrapperRef: a,
  inline: n,
  emit: u,
  props: c,
  slots: p
}) => {
  const { defaultedConfig: d } = Ye(c), Y = X({}), f = X(!1), O = X({
    top: "0",
    left: "0"
  }), m = X(!1), P = Jt(c, "teleportCenter");
  st(P, () => {
    O.value = JSON.parse(JSON.stringify({})), z();
  });
  const F = (y) => {
    if (c.teleport) {
      const U = y.getBoundingClientRect();
      return {
        left: U.left + window.scrollX,
        top: U.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, L = (y, U) => {
    O.value.left = `${y + U - Y.value.width}px`;
  }, _ = (y) => {
    O.value.left = `${y}px`;
  }, h = (y, U) => {
    c.position === Lt.left && _(y), c.position === Lt.right && L(y, U), c.position === Lt.center && (O.value.left = `${y + U / 2 - Y.value.width / 2}px`);
  }, R = (y) => {
    const { width: U, height: S } = y.getBoundingClientRect(), { top: Z, left: A } = F(y);
    return { top: +Z, left: +A, width: U, height: S };
  }, b = () => {
    O.value.left = "50%", O.value.top = "50%", O.value.transform = "translate(-50%, -50%)", O.value.position = "fixed", delete O.value.opacity;
  }, j = () => {
    const y = He(r);
    O.value = c.altPosition(y);
  }, z = (y = !0) => {
    var U;
    if (!n.value.enabled) {
      if (P.value) return b();
      if (c.altPosition !== null) return j();
      if (y) {
        const S = c.teleport ? (U = t.value) == null ? void 0 : U.$el : e.value;
        S && (Y.value = S.getBoundingClientRect()), u("recalculate-position");
      }
      return ve();
    }
  }, ae = ({ inputEl: y, left: U, width: S }) => {
    window.screen.width > 768 && !f.value && h(U, S), Q(y);
  }, H = (y) => {
    const { top: U, left: S, height: Z, width: A } = R(y);
    O.value.top = `${Z + U + +c.offset}px`, m.value = !1, f.value || (O.value.left = `${S + A / 2 - Y.value.width / 2}px`), ae({ inputEl: y, left: S, width: A });
  }, M = (y) => {
    const { top: U, left: S, width: Z } = R(y);
    O.value.top = `${U - +c.offset - Y.value.height}px`, m.value = !0, ae({ inputEl: y, left: S, width: Z });
  }, Q = (y) => {
    if (c.autoPosition) {
      const { left: U, width: S } = R(y), { left: Z, right: A } = Y.value;
      if (!f.value) {
        if (Math.abs(Z) !== Math.abs(A)) {
          if (Z <= 0)
            return f.value = !0, _(U);
          if (A >= document.documentElement.clientWidth)
            return f.value = !0, L(U, S);
        }
        return h(U, S);
      }
    }
  }, B = () => {
    const y = He(r);
    if (y) {
      if (c.autoPosition === it.top) return it.top;
      if (c.autoPosition === it.bottom) return it.bottom;
      const { height: U } = Y.value, { top: S, height: Z } = y.getBoundingClientRect(), ie = window.innerHeight - S - Z, i = S;
      return U <= ie ? it.bottom : U > ie && U <= i ? it.top : ie >= i ? it.bottom : it.top;
    }
    return it.bottom;
  }, q = (y) => B() === it.bottom ? H(y) : M(y), ve = () => {
    const y = He(r);
    if (y)
      return c.autoPosition ? q(y) : H(y);
  }, pe = function(y) {
    if (y) {
      const U = y.scrollHeight > y.clientHeight, Z = window.getComputedStyle(y).overflowY.indexOf("hidden") !== -1;
      return U && !Z;
    }
    return !0;
  }, v = function(y) {
    return !y || y === document.body || y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : pe(y) ? y : v(
      y.assignedSlot && d.value.shadowDom ? y.assignedSlot.parentNode : y.parentNode
    );
  }, N = (y) => {
    if (y)
      switch (c.position) {
        case Lt.left:
          return { left: 0, transform: "translateX(0)" };
        case Lt.right:
          return { left: `${y.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${y.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: m,
    menuStyle: O,
    xCorrect: f,
    setMenuPosition: z,
    getScrollableParent: v,
    shadowRender: (y, U, S) => {
      var T, re, l;
      const Z = document.createElement("div"), A = (T = He(r)) == null ? void 0 : T.getBoundingClientRect();
      Z.setAttribute("id", "dp--temp-container");
      const ie = (re = a.value) != null && re.clientWidth ? a.value : document.body;
      ie.append(Z);
      const i = N(A), W = d.value.shadowDom ? Object.keys(p).filter(
        (w) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(w)
      ) : Object.keys(p), se = el(
        U,
        {
          ...S,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...i }
        },
        Object.fromEntries(W.map((w) => [w, p[w]]))
      );
      y != null && (se.appContext = y.appContext), an(se, Z), Y.value = (l = se.el) == null ? void 0 : l.getBoundingClientRect(), an(null, Z), ie.removeChild(Z);
    }
  };
}, wt = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] },
  { name: "menu-header", use: ["menu"] }
], fo = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], vo = {
  all: () => wt,
  monthYear: () => wt.filter((e) => e.use.includes("month-year")),
  input: () => fo,
  timePicker: () => wt.filter((e) => e.use.includes("time")),
  action: () => wt.filter((e) => e.use.includes("action")),
  calendar: () => wt.filter((e) => e.use.includes("calendar")),
  menu: () => wt.filter((e) => e.use.includes("menu")),
  shared: () => wt.filter((e) => e.use.includes("shared")),
  yearMode: () => wt.filter((e) => e.use.includes("year-mode"))
}, at = (e, t, r) => {
  const a = [];
  return vo[t]().forEach((n) => {
    e[n.name] && a.push(n.name);
  }), r != null && r.length && r.forEach((n) => {
    n.slot && a.push(n.slot);
  }), a;
}, na = (e) => {
  const t = G(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), r = G(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: r };
}, la = (e, t, r) => {
  const { defaultedRange: a, defaultedTz: n } = Ye(e), u = K(tt(K(), n.value.timezone)), c = X([{ month: Ae(u), year: ye(u) }]), p = (m) => {
    const P = {
      hours: kt(u),
      minutes: Tt(u),
      seconds: 0
    };
    return a.value.enabled ? [P[m], P[m]] : P[m];
  }, d = ta({
    hours: p("hours"),
    minutes: p("minutes"),
    seconds: p("seconds")
  });
  st(
    a,
    (m, P) => {
      m.enabled !== P.enabled && (d.hours = p("hours"), d.minutes = p("minutes"), d.seconds = p("seconds"));
    },
    { deep: !0 }
  );
  const Y = G({
    get: () => e.internalModelValue,
    set: (m) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", m);
    }
  }), f = G(
    () => (m) => c.value[m] ? c.value[m].month : 0
  ), O = G(
    () => (m) => c.value[m] ? c.value[m].year : 0
  );
  return st(
    Y,
    (m, P) => {
      r && JSON.stringify(m ?? {}) !== JSON.stringify(P ?? {}) && r();
    },
    { deep: !0 }
  ), {
    calendars: c,
    time: d,
    modelValue: Y,
    month: f,
    year: O,
    today: u
  };
}, mo = (e, t) => {
  const {
    defaultedMultiCalendars: r,
    defaultedMultiDates: a,
    defaultedUI: n,
    defaultedHighlight: u,
    defaultedTz: c,
    propDates: p,
    defaultedRange: d
  } = Ye(t), { isDisabled: Y } = Pt(t), f = X(null), O = X(tt(/* @__PURE__ */ new Date(), c.value.timezone)), m = (l) => {
    !l.current && t.hideOffsetDates || (f.value = l.value);
  }, P = () => {
    f.value = null;
  }, F = (l) => Array.isArray(e.value) && d.value.enabled && e.value[0] && f.value ? l ? Fe(f.value, e.value[0]) : Ne(f.value, e.value[0]) : !0, L = (l, w) => {
    const oe = () => e.value ? w ? e.value[0] || null : e.value[1] : null, D = e.value && Array.isArray(e.value) ? oe() : null;
    return Te(K(l.value), D);
  }, _ = (l) => {
    const w = Array.isArray(e.value) ? e.value[0] : null;
    return l ? !Ne(f.value ?? null, w) : !0;
  }, h = (l, w = !0) => (d.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !l.current ? !1 : Te(K(l.value), e.value[w ? 0 : 1]) : d.value.enabled ? L(l, w) && _(w) || Te(l.value, Array.isArray(e.value) ? e.value[0] : null) && F(w) : !1, R = (l, w) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const oe = Te(l.value, f.value);
      return w ? Fe(e.value[0], l.value) && oe : Ne(e.value[0], l.value) && oe;
    }
    return !1;
  }, b = (l) => !e.value || t.hideOffsetDates && !l.current ? !1 : d.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Te(l.value, e.value[0] ? e.value[0] : O.value) : !1 : a.value.enabled && Array.isArray(e.value) ? e.value.some((w) => Te(w, l.value)) : Te(l.value, e.value ? e.value : O.value), j = (l) => {
    if (d.value.autoRange || t.weekPicker) {
      if (f.value) {
        if (t.hideOffsetDates && !l.current) return !1;
        const w = Dt(f.value, +d.value.autoRange), oe = gt(K(f.value), t.weekStart);
        return t.weekPicker ? Te(oe[1], K(l.value)) : Te(w, K(l.value));
      }
      return !1;
    }
    return !1;
  }, z = (l) => {
    if (d.value.autoRange || t.weekPicker) {
      if (f.value) {
        const w = Dt(f.value, +d.value.autoRange);
        if (t.hideOffsetDates && !l.current) return !1;
        const oe = gt(K(f.value), t.weekStart);
        return t.weekPicker ? Fe(l.value, oe[0]) && Ne(l.value, oe[1]) : Fe(l.value, f.value) && Ne(l.value, w);
      }
      return !1;
    }
    return !1;
  }, ae = (l) => {
    if (d.value.autoRange || t.weekPicker) {
      if (f.value) {
        if (t.hideOffsetDates && !l.current) return !1;
        const w = gt(K(f.value), t.weekStart);
        return t.weekPicker ? Te(w[0], l.value) : Te(f.value, l.value);
      }
      return !1;
    }
    return !1;
  }, H = (l) => ea(e.value, f.value, l.value), M = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, Q = () => t.modelAuto ? Rn(t.internalModelValue) : !0, B = (l) => {
    if (t.weekPicker) return !1;
    const w = d.value.enabled ? !h(l) && !h(l, !1) : !0;
    return !Y(l.value) && !b(l) && !(!l.current && t.hideOffsetDates) && w;
  }, q = (l) => d.value.enabled ? t.modelAuto ? M() && b(l) : !1 : b(l), ve = (l) => u.value ? Bl(l.value, p.value.highlight) : !1, pe = (l) => {
    const w = Y(l.value);
    return w && (typeof u.value == "function" ? !u.value(l.value, w) : !u.value.options.highlightDisabled);
  }, v = (l) => {
    var w;
    return typeof u.value == "function" ? u.value(l.value) : (w = u.value.weekdays) == null ? void 0 : w.includes(l.value.getDay());
  }, N = (l) => (d.value.enabled || t.weekPicker) && (!(r.value.count > 0) || l.current) && Q() && !(!l.current && t.hideOffsetDates) && !b(l) ? H(l) : !1, ee = (l) => {
    if (Array.isArray(e.value) && e.value.length === 1) {
      const { before: w, after: oe } = vn(+d.value.maxRange, e.value[0]);
      return Ht(l.value, w) || It(l.value, oe);
    }
    return !1;
  }, y = (l) => {
    if (Array.isArray(e.value) && e.value.length === 1) {
      const { before: w, after: oe } = vn(+d.value.minRange, e.value[0]);
      return ea([w, oe], e.value[0], l.value);
    }
    return !1;
  }, U = (l) => d.value.enabled && (d.value.maxRange || d.value.minRange) ? d.value.maxRange && d.value.minRange ? ee(l) || y(l) : d.value.maxRange ? ee(l) : y(l) : !1, S = (l) => {
    const { isRangeStart: w, isRangeEnd: oe } = i(l), D = d.value.enabled ? w || oe : !1;
    return {
      dp__cell_offset: !l.current,
      dp__pointer: !t.disabled && !(!l.current && t.hideOffsetDates) && !Y(l.value) && !U(l),
      dp__cell_disabled: Y(l.value) || U(l),
      dp__cell_highlight: !pe(l) && (ve(l) || v(l)) && !q(l) && !D && !ae(l) && !(N(l) && t.weekPicker) && !oe,
      dp__cell_highlight_active: !pe(l) && (ve(l) || v(l)) && q(l),
      dp__today: !t.noToday && Te(l.value, O.value) && l.current,
      "dp--past": Ne(l.value, O.value),
      "dp--future": Fe(l.value, O.value)
    };
  }, Z = (l) => ({
    dp__active_date: q(l),
    dp__date_hover: B(l)
  }), A = (l) => {
    if (e.value && !Array.isArray(e.value)) {
      const w = gt(e.value, t.weekStart);
      return {
        ...se(l),
        dp__range_start: Te(w[0], l.value),
        dp__range_end: Te(w[1], l.value),
        dp__range_between_week: Fe(l.value, w[0]) && Ne(l.value, w[1])
      };
    }
    return {
      ...se(l)
    };
  }, ie = (l) => {
    if (e.value && Array.isArray(e.value)) {
      const w = gt(e.value[0], t.weekStart), oe = e.value[1] ? gt(e.value[1], t.weekStart) : [];
      return {
        ...se(l),
        dp__range_start: Te(w[0], l.value) || Te(oe[0], l.value),
        dp__range_end: Te(w[1], l.value) || Te(oe[1], l.value),
        dp__range_between_week: Fe(l.value, w[0]) && Ne(l.value, w[1]) || Fe(l.value, oe[0]) && Ne(l.value, oe[1]),
        dp__range_between: Fe(l.value, w[1]) && Ne(l.value, oe[0])
      };
    }
    return {
      ...se(l)
    };
  }, i = (l) => {
    const w = r.value.count > 0 ? l.current && h(l) && Q() : h(l) && Q(), oe = r.value.count > 0 ? l.current && h(l, !1) && Q() : h(l, !1) && Q();
    return { isRangeStart: w, isRangeEnd: oe };
  }, W = (l) => {
    const { isRangeStart: w, isRangeEnd: oe } = i(l);
    return {
      dp__range_start: w,
      dp__range_end: oe,
      dp__range_between: N(l),
      dp__date_hover: Te(l.value, f.value) && !w && !oe && !t.weekPicker,
      dp__date_hover_start: R(l, !0),
      dp__date_hover_end: R(l, !1)
    };
  }, se = (l) => ({
    ...W(l),
    dp__cell_auto_range: z(l),
    dp__cell_auto_range_start: ae(l),
    dp__cell_auto_range_end: j(l)
  }), T = (l) => d.value.enabled ? d.value.autoRange ? se(l) : t.modelAuto ? { ...Z(l), ...W(l) } : t.weekPicker ? ie(l) : W(l) : t.weekPicker ? A(l) : Z(l);
  return {
    setHoverDate: m,
    clearHoverDate: P,
    getDayClassData: (l) => t.hideOffsetDates && !l.current ? {} : {
      ...S(l),
      ...T(l),
      [t.dayClass ? t.dayClass(l.value, t.internalModelValue) : ""]: !0,
      ...n.value.calendarCell ?? {}
    }
  };
}, Pt = (e) => {
  const { defaultedFilters: t, defaultedRange: r, propDates: a, defaultedMultiDates: n } = Ye(e), u = (v) => a.value.disabledDates ? typeof a.value.disabledDates == "function" ? a.value.disabledDates(K(v)) : !!va(v, a.value.disabledDates) : !1, c = (v) => a.value.maxDate ? e.yearPicker ? ye(v) > ye(a.value.maxDate) : Fe(v, a.value.maxDate) : !1, p = (v) => a.value.minDate ? e.yearPicker ? ye(v) < ye(a.value.minDate) : Ne(v, a.value.minDate) : !1, d = (v) => {
    const N = c(v), ee = p(v), y = u(v), S = t.value.months.map((W) => +W).includes(Ae(v)), Z = e.disabledWeekDays.length ? e.disabledWeekDays.some((W) => +W === bl(v)) : !1, A = P(v), ie = ye(v), i = ie < +e.yearRange[0] || ie > +e.yearRange[1];
    return !(N || ee || y || S || i || Z || A);
  }, Y = (v, N) => Ne(...Mt(a.value.minDate, v, N)) || Te(...Mt(a.value.minDate, v, N)), f = (v, N) => Fe(...Mt(a.value.maxDate, v, N)) || Te(...Mt(a.value.maxDate, v, N)), O = (v, N, ee) => {
    let y = !1;
    return a.value.maxDate && ee && f(v, N) && (y = !0), a.value.minDate && !ee && Y(v, N) && (y = !0), y;
  }, m = (v, N, ee, y) => {
    let U = !1;
    return y && (a.value.minDate || a.value.maxDate) ? a.value.minDate && a.value.maxDate ? U = O(v, N, ee) : (a.value.minDate && Y(v, N) || a.value.maxDate && f(v, N)) && (U = !0) : U = !0, U;
  }, P = (v) => Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length ? !0 : a.value.allowedDates ? !va(v, a.value.allowedDates, On(e.monthPicker, e.yearPicker)) : !1, F = (v) => !d(v), L = (v) => r.value.noDisabledRange ? !hn({ start: v[0], end: v[1] }).some((ee) => F(ee)) : !0, _ = (v) => {
    if (v) {
      const N = ye(v);
      return N >= +e.yearRange[0] && N <= e.yearRange[1];
    }
    return !0;
  }, h = (v, N) => !!(Array.isArray(v) && v[N] && (r.value.maxRange || r.value.minRange) && _(v[N])), R = (v, N, ee = 0) => {
    if (h(N, ee) && _(v)) {
      const y = hl(v, N[ee]), U = In(N[ee], v), S = U.length === 1 ? 0 : U.filter((A) => F(A)).length, Z = Math.abs(y) - (r.value.minMaxRawRange ? 0 : S);
      if (r.value.minRange && r.value.maxRange)
        return Z >= +r.value.minRange && Z <= +r.value.maxRange;
      if (r.value.minRange) return Z >= +r.value.minRange;
      if (r.value.maxRange) return Z <= +r.value.maxRange;
    }
    return !0;
  }, b = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, j = (v) => Array.isArray(v) ? [v[0] ? Ca(v[0]) : null, v[1] ? Ca(v[1]) : null] : Ca(v), z = (v, N, ee) => v.find(
    (y) => +y.hours === kt(N) && y.minutes === "*" ? !0 : +y.minutes === Tt(N) && +y.hours === kt(N)
  ) && ee, ae = (v, N, ee) => {
    const [y, U] = v, [S, Z] = N;
    return !z(y, S, ee) && !z(U, Z, ee) && ee;
  }, H = (v, N) => {
    const ee = Array.isArray(N) ? N : [N];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? ae(e.disabledTimes, ee, v) : !ee.some((y) => z(e.disabledTimes, y, v)) : v;
  }, M = (v, N) => {
    const ee = Array.isArray(N) ? [Yt(N[0]), N[1] ? Yt(N[1]) : void 0] : Yt(N), y = !e.disabledTimes(ee);
    return v && y;
  }, Q = (v, N) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? H(N, v) : M(N, v) : N, B = (v) => {
    let N = !0;
    if (!v || b()) return !0;
    const ee = !a.value.minDate && !a.value.maxDate ? j(v) : v;
    return (e.maxTime || a.value.maxDate) && (N = fn(
      e.maxTime,
      a.value.maxDate,
      "max",
      ze(ee),
      N
    )), (e.minTime || a.value.minDate) && (N = fn(
      e.minTime,
      a.value.minDate,
      "min",
      ze(ee),
      N
    )), Q(v, N);
  }, q = (v) => {
    if (!e.monthPicker) return !0;
    let N = !0;
    const ee = K(dt(v));
    if (a.value.minDate && a.value.maxDate) {
      const y = K(dt(a.value.minDate)), U = K(dt(a.value.maxDate));
      return Fe(ee, y) && Ne(ee, U) || Te(ee, y) || Te(ee, U);
    }
    if (a.value.minDate) {
      const y = K(dt(a.value.minDate));
      N = Fe(ee, y) || Te(ee, y);
    }
    if (a.value.maxDate) {
      const y = K(dt(a.value.maxDate));
      N = Ne(ee, y) || Te(ee, y);
    }
    return N;
  }, ve = G(() => (v) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : B(v)), pe = G(() => (v) => e.monthPicker ? Array.isArray(v) && (r.value.enabled || n.value.enabled) ? !v.filter((ee) => !q(ee)).length : q(v) : !0);
  return {
    isDisabled: F,
    validateDate: d,
    validateMonthYearInRange: m,
    isDateRangeAllowed: L,
    checkMinMaxRange: R,
    isValidTime: B,
    isTimeValid: ve,
    isMonthValid: pe
  };
}, ha = () => {
  const e = G(() => (a, n) => a == null ? void 0 : a.includes(n)), t = G(() => (a, n) => a.count ? a.solo ? !0 : n === 0 : !0), r = G(() => (a, n) => a.count ? a.solo ? !0 : n === a.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: r };
}, po = (e, t, r) => {
  const a = X(0), n = ta({
    [_t.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [_t.calendar]: !1,
    [_t.header]: !1
  }), u = G(() => e.monthPicker || e.timePicker), c = (O) => {
    var m;
    if ((m = e.flow) != null && m.length) {
      if (!O && u.value) return f();
      n[O] = !0, Object.keys(n).filter((P) => !n[P]).length || f();
    }
  }, p = () => {
    var O, m;
    (O = e.flow) != null && O.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), f()), ((m = e.flow) == null ? void 0 : m.length) === a.value && lt().then(() => d());
  }, d = () => {
    a.value = -1;
  }, Y = (O, m, ...P) => {
    var F, L;
    e.flow[a.value] === O && r.value && ((L = (F = r.value)[m]) == null || L.call(F, ...P));
  }, f = (O = 0) => {
    O && (a.value += O), Y(qe.month, "toggleMonthPicker", !0), Y(qe.year, "toggleYearPicker", !0), Y(qe.calendar, "toggleTimePicker", !1, !0), Y(qe.time, "toggleTimePicker", !0, !0);
    const m = e.flow[a.value];
    (m === qe.hours || m === qe.minutes || m === qe.seconds) && Y(m, "toggleTimePicker", !0, !0, m);
  };
  return { childMount: c, updateFlowStep: p, resetFlow: d, handleFlow: f, flowStep: a };
}, yo = {
  key: 1,
  class: "dp__input_wrap"
}, go = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], ho = {
  key: 2,
  class: "dp--clear-btn"
}, bo = ["aria-label"], ko = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...pa
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur",
    "text-input"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      defaultedTextInput: u,
      defaultedAriaLabels: c,
      defaultedInline: p,
      defaultedConfig: d,
      defaultedRange: Y,
      defaultedMultiDates: f,
      defaultedUI: O,
      getDefaultPattern: m,
      getDefaultStartTime: P
    } = Ye(n), { checkMinMaxRange: F } = Pt(n), L = X(), _ = X(null), h = X(!1), R = X(!1), b = G(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !u.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !u.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: typeof n.state == "boolean" ? n.state : !1,
        dp__input_invalid: typeof n.state == "boolean" ? !n.state : !1,
        dp__input_focus: h.value || n.isMenuOpen,
        dp__input_reg: !u.value.enabled,
        ...O.value.input ?? {}
      })
    ), j = () => {
      a("set-input-date", null), n.clearable && n.autoApply && (a("set-empty-date"), L.value = null);
    }, z = (A) => {
      const ie = P();
      return Yl(
        A,
        u.value.format ?? m(),
        ie ?? En({}, n.enableSeconds),
        n.inputValue,
        R.value,
        n.formatLocale
      );
    }, ae = (A) => {
      const { rangeSeparator: ie } = u.value, [i, W] = A.split(`${ie}`);
      if (i) {
        const se = z(i.trim()), T = W ? z(W.trim()) : void 0;
        if (It(se, T)) return;
        const re = se && T ? [se, T] : [se];
        F(T, re, 0) && (L.value = se ? re : null);
      }
    }, H = () => {
      R.value = !0;
    }, M = (A) => {
      if (Y.value.enabled)
        ae(A);
      else if (f.value.enabled) {
        const ie = A.split(";");
        L.value = ie.map((i) => z(i.trim())).filter((i) => i);
      } else
        L.value = z(A);
    }, Q = (A) => {
      var i;
      const ie = typeof A == "string" ? A : (i = A.target) == null ? void 0 : i.value;
      ie !== "" ? (u.value.openMenu && !n.isMenuOpen && a("open"), M(ie), a("set-input-date", L.value)) : j(), R.value = !1, a("update:input-value", ie), a("text-input", A, L.value);
    }, B = (A) => {
      u.value.enabled ? (M(A.target.value), u.value.enterSubmit && za(L.value) && n.inputValue !== "" ? (a("set-input-date", L.value, !0), L.value = null) : u.value.enterSubmit && n.inputValue === "" && (L.value = null, a("clear"))) : pe(A);
    }, q = (A, ie) => {
      u.value.enabled && u.value.tabSubmit && !ie && M(A.target.value), u.value.tabSubmit && za(L.value) && n.inputValue !== "" ? (a("set-input-date", L.value, !0, !0), L.value = null) : u.value.tabSubmit && n.inputValue === "" && (L.value = null, a("clear", !0));
    }, ve = () => {
      h.value = !0, a("focus"), lt().then(() => {
        var A;
        u.value.enabled && u.value.selectOnFocus && ((A = _.value) == null || A.select());
      });
    }, pe = (A) => {
      if ($t(A, d.value, !0), u.value.enabled && u.value.openMenu && !p.value.input) {
        if (u.value.openMenu === "open" && !n.isMenuOpen) return a("open");
        if (u.value.openMenu === "toggle") return a("toggle");
      } else u.value.enabled || a("toggle");
    }, v = () => {
      a("real-blur"), h.value = !1, (!n.isMenuOpen || p.value.enabled && p.value.input) && a("blur"), n.autoApply && u.value.enabled && L.value && !n.isMenuOpen && (a("set-input-date", L.value), a("select-date"), L.value = null);
    }, N = (A) => {
      $t(A, d.value, !0), a("clear");
    }, ee = () => {
      a("close");
    }, y = (A) => {
      if (A.key === "Tab" && q(A), A.key === "Enter" && B(A), A.key === "Escape" && u.value.escClose && ee(), !u.value.enabled) {
        if (A.code === "Tab") return;
        A.preventDefault();
      }
    }, U = () => {
      var A;
      (A = _.value) == null || A.focus({ preventScroll: !0 });
    }, S = (A) => {
      L.value = A;
    }, Z = (A) => {
      A.key === Oe.tab && q(A, !0);
    };
    return t({
      focusInput: U,
      setParsedDate: S
    }), (A, ie) => {
      var i, W, se;
      return $(), V("div", { onClick: pe }, [
        A.$slots.trigger && !A.$slots["dp-input"] && !s(p).enabled ? ue(A.$slots, "trigger", { key: 0 }) : J("", !0),
        !A.$slots.trigger && (!s(p).enabled || s(p).input) ? ($(), V("div", yo, [
          A.$slots["dp-input"] && !A.$slots.trigger && (!s(p).enabled || s(p).enabled && s(p).input) ? ue(A.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: Q,
            onEnter: B,
            onTab: q,
            onClear: N,
            onBlur: v,
            onKeypress: y,
            onPaste: H,
            onFocus: ve,
            openMenu: () => A.$emit("open"),
            closeMenu: () => A.$emit("close"),
            toggleMenu: () => A.$emit("toggle")
          }) : J("", !0),
          A.$slots["dp-input"] ? J("", !0) : ($(), V("input", {
            key: 1,
            id: A.uid ? `dp-input-${A.uid}` : void 0,
            ref_key: "inputRef",
            ref: _,
            "data-test-id": "dp-input",
            name: A.name,
            class: Me(b.value),
            inputmode: s(u).enabled ? "text" : "none",
            placeholder: A.placeholder,
            disabled: A.disabled,
            readonly: A.readonly,
            required: A.required,
            value: e.inputValue,
            autocomplete: A.autocomplete,
            "aria-label": (i = s(c)) == null ? void 0 : i.input,
            "aria-disabled": A.disabled || void 0,
            "aria-invalid": A.state === !1 ? !0 : void 0,
            onInput: Q,
            onBlur: v,
            onFocus: ve,
            onKeypress: y,
            onKeydown: ie[0] || (ie[0] = (T) => y(T)),
            onPaste: H
          }, null, 42, go)),
          ge("div", {
            onClick: ie[3] || (ie[3] = (T) => a("toggle"))
          }, [
            A.$slots["input-icon"] && !A.hideInputIcon ? ($(), V("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: ie[1] || (ie[1] = (T) => a("toggle"))
            }, [
              ue(A.$slots, "input-icon")
            ])) : J("", !0),
            !A.$slots["input-icon"] && !A.hideInputIcon && !A.$slots["dp-input"] ? ($(), Se(s(Gt), {
              key: 1,
              "aria-label": (W = s(c)) == null ? void 0 : W.calendarIcon,
              class: "dp__input_icon dp__input_icons",
              onClick: ie[2] || (ie[2] = (T) => a("toggle"))
            }, null, 8, ["aria-label"])) : J("", !0)
          ]),
          A.$slots["clear-icon"] && (A.alwaysClearable || e.inputValue && A.clearable && !A.disabled && !A.readonly) ? ($(), V("span", ho, [
            ue(A.$slots, "clear-icon", { clear: N })
          ])) : J("", !0),
          !A.$slots["clear-icon"] && (A.alwaysClearable || A.clearable && e.inputValue && !A.disabled && !A.readonly) ? ($(), V("button", {
            key: 3,
            "aria-label": (se = s(c)) == null ? void 0 : se.clearInput,
            class: "dp--clear-btn",
            type: "button",
            onKeydown: ie[4] || (ie[4] = (T) => s(xe)(T, () => N(T), !0, Z)),
            onClick: ie[5] || (ie[5] = Xt((T) => N(T), ["prevent"]))
          }, [
            nt(s(Tn), {
              class: "dp__input_icons",
              "data-test-id": "clear-icon"
            })
          ], 40, bo)) : J("", !0)
        ])) : J("", !0)
      ]);
    };
  }
}), wo = typeof window < "u" ? window : void 0, Ea = () => {
}, Do = (e) => tl() ? (al(e), !0) : !1, Mo = (e, t, r, a) => {
  if (!e) return Ea;
  let n = Ea;
  const u = st(
    () => s(e),
    (p) => {
      n(), p && (p.removeEventListener(t, r), p.addEventListener(t, r, a), n = () => {
        p.removeEventListener(t, r, a), n = Ea;
      });
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), n();
  };
  return Do(c), c;
}, $o = (e, t, r, a = {}) => {
  const { window: n = wo, event: u = "pointerdown" } = a;
  return n ? Mo(n, u, (p) => {
    const d = He(e), Y = He(t);
    !d || !Y || d === p.target || p.composedPath().includes(d) || p.composedPath().includes(Y) || r(p);
  }, { passive: !0 }) : void 0;
}, Ao = ["data-dp-mobile"], To = /* @__PURE__ */ Ke({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...pa
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "text-input"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, u = Et(), c = X(!1), p = Jt(n, "modelValue"), d = Jt(n, "timezone"), Y = X(null), f = X(null), O = X(null), m = X(!1), P = X(null), F = X(!1), L = X(!1), _ = X(!1), h = X(!1), { setMenuFocused: R, setShiftKey: b } = zn(), { clearArrowNav: j } = St(), { validateDate: z, isValidTime: ae } = Pt(n), {
      defaultedTransitions: H,
      defaultedTextInput: M,
      defaultedInline: Q,
      defaultedConfig: B,
      defaultedRange: q,
      defaultedMultiDates: ve
    } = Ye(n), { menuTransition: pe, showTransition: v } = na(H), { isMobile: N } = Gn(B), ee = nl();
    Ge(() => {
      re(n.modelValue), lt().then(() => {
        if (!Q.value.enabled) {
          const C = i(P.value);
          C == null || C.addEventListener("scroll", fe), window == null || window.addEventListener("resize", I);
        }
      }), Q.value.enabled && (c.value = !0), window == null || window.addEventListener("keyup", $e), window == null || window.addEventListener("keydown", be);
    }), jt(() => {
      if (!Q.value.enabled) {
        const C = i(P.value);
        C == null || C.removeEventListener("scroll", fe), window == null || window.removeEventListener("resize", I);
      }
      window == null || window.removeEventListener("keyup", $e), window == null || window.removeEventListener("keydown", be);
    });
    const y = at(u, "all", n.presetDates), U = at(u, "input");
    st(
      [p, d],
      () => {
        re(p.value);
      },
      { deep: !0 }
    );
    const { openOnTop: S, menuStyle: Z, xCorrect: A, setMenuPosition: ie, getScrollableParent: i, shadowRender: W } = co({
      menuRef: Y,
      menuRefInner: f,
      inputRef: O,
      pickerWrapperRef: P,
      inline: Q,
      emit: a,
      props: n,
      slots: u
    }), {
      inputValue: se,
      internalModelValue: T,
      parseExternalModelValue: re,
      emitModelValue: l,
      formatInputValue: w,
      checkBeforeEmit: oe
    } = rr(a, n, m), D = G(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: Q.value.enabled,
        "dp--flex-display-collapsed": _.value,
        dp__flex_display_with_input: Q.value.input
      })
    ), he = G(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), ke = G(() => n.teleport ? {
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: !n.teleport || Q.value.enabled
    } : {}), le = G(() => ({ class: "dp__outer_menu_wrap" })), o = G(() => Q.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), E = () => {
      var C, te;
      return ((te = (C = O.value) == null ? void 0 : C.$el) == null ? void 0 : te.getBoundingClientRect()) ?? { width: 0, left: 0, right: 0 };
    }, fe = () => {
      c.value && (B.value.closeOnScroll ? de() : ie());
    }, I = () => {
      var te;
      c.value && ie();
      const C = ((te = f.value) == null ? void 0 : te.$el.getBoundingClientRect().width) ?? 0;
      _.value = document.body.offsetWidth <= C;
    }, $e = (C) => {
      C.key === "Tab" && !Q.value.enabled && !n.teleport && B.value.tabOutClosesMenu && (P.value.contains(document.activeElement) || de()), L.value = C.shiftKey;
    }, be = (C) => {
      L.value = C.shiftKey;
    }, Pe = () => {
      !n.disabled && !n.readonly && (W(ee, gn, n), ie(!1), c.value = !0, c.value && a("open"), c.value || rt(), re(n.modelValue));
    }, Ee = () => {
      var C, te;
      se.value = "", rt(), (C = f.value) == null || C.onValueCleared(), (te = O.value) == null || te.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), B.value.closeOnClearValue && de();
    }, Be = () => {
      const C = T.value;
      return !C || !Array.isArray(C) && z(C) ? !0 : Array.isArray(C) ? ve.value.enabled || C.length === 2 && z(C[0]) && z(C[1]) ? !0 : q.value.partialRange && !n.timePicker ? z(C[0]) : !1 : !1;
    }, k = () => {
      oe() && Be() ? (l(), de()) : a("invalid-select", T.value);
    }, x = (C) => {
      Ie(), l(), B.value.closeOnAutoApply && !C && de();
    }, Ie = () => {
      O.value && M.value.enabled && O.value.setParsedDate(T.value);
    }, Ue = (C = !1) => {
      n.autoApply && ae(T.value) && Be() && (q.value.enabled && Array.isArray(T.value) ? (q.value.partialRange || T.value.length === 2) && x(C) : x(C));
    }, rt = () => {
      M.value.enabled || (T.value = null);
    }, de = (C = !1) => {
      var te, ce;
      C && T.value && B.value.setDateOnMenuClose && k(), Q.value.enabled || (c.value && (c.value = !1, A.value = !1, R(!1), b(!1), j(), a("closed"), se.value && re(p.value)), rt(), a("blur"), (ce = (te = f.value) == null ? void 0 : te.$el) == null || ce.remove());
    }, Rt = (C, te, ce = !1) => {
      if (!C) {
        T.value = null;
        return;
      }
      const yt = Array.isArray(C) ? !C.some((Ct) => !z(Ct)) : z(C), vt = ae(C);
      yt && vt ? (h.value = !0, T.value = C, te ? (F.value = ce, k(), a("text-submit")) : n.autoApply && Ue(), lt().then(() => {
        h.value = !1;
      })) : a("invalid-date", C);
    }, ft = () => {
      n.autoApply && ae(T.value) && l(), Ie();
    }, ra = () => c.value ? de() : Pe(), ba = (C) => {
      T.value = C;
    }, ka = () => {
      M.value.enabled && (m.value = !0, w()), a("focus");
    }, wa = () => {
      if (M.value.enabled && (m.value = !1, re(n.modelValue), F.value)) {
        const C = Cl(P.value, L.value);
        C == null || C.focus();
      }
      a("blur");
    }, Da = (C) => {
      f.value && f.value.updateMonthYear(0, {
        month: un(C.month),
        year: un(C.year)
      });
    }, Ma = (C) => {
      re(C ?? n.modelValue);
    }, tn = (C, te) => {
      var ce;
      (ce = f.value) == null || ce.switchView(C, te);
    }, g = (C, te) => B.value.onClickOutside ? B.value.onClickOutside(C, te) : de(!0), ne = (C = 0) => {
      var te;
      (te = f.value) == null || te.handleFlow(C);
    }, me = () => Y;
    return $o(
      Y,
      O,
      (C) => g(Be, C)
    ), t({
      closeMenu: de,
      selectDate: k,
      clearValue: Ee,
      openMenu: Pe,
      onScroll: fe,
      formatInputValue: w,
      // exposed for testing purposes
      updateInternalModelValue: ba,
      // modify internal modelValue
      setMonthYear: Da,
      parseModel: Ma,
      switchView: tn,
      toggleMenu: ra,
      handleFlow: ne,
      getDpWrapMenuRef: me
    }), (C, te) => ($(), V("div", {
      ref_key: "pickerWrapperRef",
      ref: P,
      class: Me(D.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": s(N)
    }, [
      nt(ko, Ve({
        ref_key: "inputRef",
        ref: O,
        "input-value": s(se),
        "onUpdate:inputValue": te[0] || (te[0] = (ce) => nn(se) ? se.value = ce : null),
        "is-menu-open": c.value
      }, C.$props, {
        onClear: Ee,
        onOpen: Pe,
        onSetInputDate: Rt,
        onSetEmptyDate: s(l),
        onSelectDate: k,
        onToggle: ra,
        onClose: de,
        onFocus: ka,
        onBlur: wa,
        onRealBlur: te[1] || (te[1] = (ce) => m.value = !1),
        onTextInput: te[2] || (te[2] = (ce) => C.$emit("text-input", ce))
      }), Xe({ _: 2 }, [
        _e(s(U), (ce, yt) => ({
          name: ce,
          fn: De((vt) => [
            ue(C.$slots, ce, We(et(vt)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      ($(), Se(ma(C.teleport ? ll : "div"), We(et(ke.value)), {
        default: De(() => [
          nt(Kt, {
            name: s(pe)(s(S)),
            css: s(v) && !s(Q).enabled
          }, {
            default: De(() => [
              c.value ? ($(), V("div", Ve({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: Y
              }, le.value, {
                class: { "dp--menu-wrapper": !s(Q).enabled },
                style: s(Q).enabled ? void 0 : s(Z)
              }), [
                nt(gn, Ve({
                  ref_key: "dpMenuRef",
                  ref: f
                }, C.$props, {
                  "internal-model-value": s(T),
                  "onUpdate:internalModelValue": te[3] || (te[3] = (ce) => nn(T) ? T.value = ce : null),
                  class: { [he.value]: !0, "dp--menu-wrapper": C.teleport },
                  "open-on-top": s(S),
                  "no-overlay-focus": o.value,
                  collapse: _.value,
                  "get-input-rect": E,
                  "is-text-input-date": h.value,
                  onClosePicker: de,
                  onSelectDate: k,
                  onAutoApply: Ue,
                  onTimeUpdate: ft,
                  onFlowStep: te[4] || (te[4] = (ce) => C.$emit("flow-step", ce)),
                  onUpdateMonthYear: te[5] || (te[5] = (ce) => C.$emit("update-month-year", ce)),
                  onInvalidSelect: te[6] || (te[6] = (ce) => C.$emit("invalid-select", s(T))),
                  onAutoApplyInvalid: te[7] || (te[7] = (ce) => C.$emit("invalid-select", ce)),
                  onInvalidFixedRange: te[8] || (te[8] = (ce) => C.$emit("invalid-fixed-range", ce)),
                  onRecalculatePosition: s(ie),
                  onTooltipOpen: te[9] || (te[9] = (ce) => C.$emit("tooltip-open", ce)),
                  onTooltipClose: te[10] || (te[10] = (ce) => C.$emit("tooltip-close", ce)),
                  onTimePickerOpen: te[11] || (te[11] = (ce) => C.$emit("time-picker-open", ce)),
                  onTimePickerClose: te[12] || (te[12] = (ce) => C.$emit("time-picker-close", ce)),
                  onAmPmChange: te[13] || (te[13] = (ce) => C.$emit("am-pm-change", ce)),
                  onRangeStart: te[14] || (te[14] = (ce) => C.$emit("range-start", ce)),
                  onRangeEnd: te[15] || (te[15] = (ce) => C.$emit("range-end", ce)),
                  onDateUpdate: te[16] || (te[16] = (ce) => C.$emit("date-update", ce)),
                  onInvalidDate: te[17] || (te[17] = (ce) => C.$emit("invalid-date", ce)),
                  onOverlayToggle: te[18] || (te[18] = (ce) => C.$emit("overlay-toggle", ce)),
                  onMenuBlur: te[19] || (te[19] = (ce) => C.$emit("blur"))
                }), Xe({ _: 2 }, [
                  _e(s(y), (ce, yt) => ({
                    name: ce,
                    fn: De((vt) => [
                      ue(C.$slots, ce, We(et({ ...vt })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : J("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 10, Ao));
  }
}), Qn = /* @__PURE__ */ (() => {
  const e = To;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(So).forEach(([e, t]) => {
  e !== "default" && (Qn[e] = t);
});
export {
  Qn as default
};
