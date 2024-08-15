var Jr = Object.defineProperty;
var Gr = (e,t,n)=>t in e ? Jr(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Y = (e,t,n)=>(Gr(e, typeof t != "symbol" ? t + "" : t, n),
n);
function L() {}
const tt = e=>e;
function Kr(e, t) {
    for (const n in t)
        e[n] = t[n];
    return e
}
function Xn(e) {
    return e()
}
function gn() {
    return Object.create(null)
}
function K(e) {
    e.forEach(Xn)
}
function ue(e) {
    return typeof e == "function"
}
function Yr(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
let Te;
function ma(e, t) {
    return e === t ? !0 : (Te || (Te = document.createElement("a")),
    Te.href = t,
    e === Te.href)
}
function Qr(e) {
    return Object.keys(e).length === 0
}
function Vt(e, ...t) {
    if (e == null) {
        for (const r of t)
            r(void 0);
        return L
    }
    const n = e.subscribe(...t);
    return n.unsubscribe ? ()=>n.unsubscribe() : n
}
function _a(e) {
    let t;
    return Vt(e, n=>t = n)(),
    t
}
function ba(e, t, n) {
    e.$$.on_destroy.push(Vt(t, n))
}
function Ca(e, t, n, r) {
    if (e) {
        const i = Zn(e, t, n, r);
        return e[0](i)
    }
}
function Zn(e, t, n, r) {
    return e[1] && r ? Kr(n.ctx.slice(), e[1](r(t))) : n.ctx
}
function wa(e, t, n, r) {
    if (e[2] && r) {
        const i = e[2](r(n));
        if (t.dirty === void 0)
            return i;
        if (typeof i == "object") {
            const s = []
              , f = Math.max(t.dirty.length, i.length);
            for (let a = 0; a < f; a += 1)
                s[a] = t.dirty[a] | i[a];
            return s
        }
        return t.dirty | i
    }
    return t.dirty
}
function ka(e, t, n, r, i, s) {
    if (i) {
        const f = Zn(t, n, r, s);
        e.p(f, i)
    }
}
function Fa(e) {
    if (e.ctx.length > 32) {
        const t = []
          , n = e.ctx.length / 32;
        for (let r = 0; r < n; r++)
            t[r] = -1;
        return t
    }
    return -1
}
function xa(e) {
    const t = {};
    for (const n in e)
        n[0] !== "$" && (t[n] = e[n]);
    return t
}
function Aa(e, t) {
    const n = {};
    t = new Set(t);
    for (const r in e)
        !t.has(r) && r[0] !== "$" && (n[r] = e[r]);
    return n
}
function Ea(e) {
    const t = {};
    for (const n in e)
        t[n] = !0;
    return t
}
function Da(e) {
    return e ?? ""
}
function Sa(e, t, n) {
    return e.set(n),
    t
}
function Ba(e) {
    return e && ue(e.destroy) ? e.destroy : L
}
function yn(e) {
    const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
}
const Jn = typeof window < "u";
let Wt = Jn ? ()=>window.performance.now() : ()=>Date.now()
  , Xt = Jn ? e=>requestAnimationFrame(e) : L;
const ye = new Set;
function Gn(e) {
    ye.forEach(t=>{
        t.c(e) || (ye.delete(t),
        t.f())
    }
    ),
    ye.size !== 0 && Xt(Gn)
}
function Zt(e) {
    let t;
    return ye.size === 0 && Xt(Gn),
    {
        promise: new Promise(n=>{
            ye.add(t = {
                c: e,
                f: n
            })
        }
        ),
        abort() {
            ye.delete(t)
        }
    }
}
function ei(e, t) {
    e.appendChild(t)
}
function Kn(e) {
    if (!e)
        return document;
    const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t && t.host ? t : e.ownerDocument
}
function ti(e) {
    const t = Yn("style");
    return t.textContent = "/* empty */",
    ni(Kn(e), t),
    t.sheet
}
function ni(e, t) {
    return ei(e.head || e, t),
    t.sheet
}
function ri(e, t, n) {
    e.insertBefore(t, n || null)
}
function Jt(e) {
    e.parentNode && e.parentNode.removeChild(e)
}
function Oa(e, t) {
    for (let n = 0; n < e.length; n += 1)
        e[n] && e[n].d(t)
}
function Yn(e) {
    return document.createElement(e)
}
function ii(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
}
function Qn(e) {
    return document.createTextNode(e)
}
function Ra() {
    return Qn(" ")
}
function $a() {
    return Qn("")
}
function Ma(e, t, n, r) {
    return e.addEventListener(t, n, r),
    ()=>e.removeEventListener(t, n, r)
}
function Ta(e) {
    return function(t) {
        return t.preventDefault(),
        e.call(this, t)
    }
}
function za(e) {
    return function(t) {
        return t.stopPropagation(),
        e.call(this, t)
    }
}
function er(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
const oi = ["width", "height"];
function Pa(e, t) {
    const n = Object.getOwnPropertyDescriptors(e.__proto__);
    for (const r in t)
        t[r] == null ? e.removeAttribute(r) : r === "style" ? e.style.cssText = t[r] : r === "__value" ? e.value = e[r] = t[r] : n[r] && n[r].set && oi.indexOf(r) === -1 ? e[r] = t[r] : er(e, r, t[r])
}
function ja(e, t) {
    for (const n in t)
        er(e, n, t[n])
}
function si(e) {
    return Array.from(e.childNodes)
}
function qa(e, t) {
    t = "" + t,
    e.data !== t && (e.data = t)
}
function Na(e, t) {
    e.value = t ?? ""
}
function Ia(e, t, n, r) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "")
}
function La(e, t, n) {
    for (let r = 0; r < e.options.length; r += 1) {
        const i = e.options[r];
        if (i.__value === t) {
            i.selected = !0;
            return
        }
    }
    (!n || t !== void 0) && (e.selectedIndex = -1)
}
function Ua(e, t) {
    for (let n = 0; n < e.options.length; n += 1) {
        const r = e.options[n];
        r.selected = ~t.indexOf(r.__value)
    }
}
function Ha(e) {
    const t = e.querySelector(":checked");
    return t && t.__value
}
function Va(e, t, n) {
    e.classList.toggle(t, !!n)
}
function tr(e, t, {bubbles: n=!1, cancelable: r=!1}={}) {
    return new CustomEvent(e,{
        detail: t,
        bubbles: n,
        cancelable: r
    })
}
class Wa {
    constructor(t=!1) {
        Y(this, "is_svg", !1);
        Y(this, "e");
        Y(this, "n");
        Y(this, "t");
        Y(this, "a");
        this.is_svg = t,
        this.e = this.n = null
    }
    c(t) {
        this.h(t)
    }
    m(t, n, r=null) {
        this.e || (this.is_svg ? this.e = ii(n.nodeName) : this.e = Yn(n.nodeType === 11 ? "TEMPLATE" : n.nodeName),
        this.t = n.tagName !== "TEMPLATE" ? n : n.content,
        this.c(t)),
        this.i(r)
    }
    h(t) {
        this.e.innerHTML = t,
        this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes)
    }
    i(t) {
        for (let n = 0; n < this.n.length; n += 1)
            ri(this.t, this.n[n], t)
    }
    p(t) {
        this.d(),
        this.h(t),
        this.i(this.a)
    }
    d() {
        this.n.forEach(Jt)
    }
}
function Xa(e, t) {
    return new e(t)
}
const We = new Map;
let Xe = 0;
function ai(e) {
    let t = 5381
      , n = e.length;
    for (; n--; )
        t = (t << 5) - t ^ e.charCodeAt(n);
    return t >>> 0
}
function ci(e, t) {
    const n = {
        stylesheet: ti(t),
        rules: {}
    };
    return We.set(e, n),
    n
}
function Ze(e, t, n, r, i, s, f, a=0) {
    const h = 16.666 / r;
    let l = `{
`;
    for (let p = 0; p <= 1; p += h) {
        const y = t + (n - t) * s(p);
        l += p * 100 + `%{${f(y, 1 - y)}}
`
    }
    const c = l + `100% {${f(n, 1 - n)}}
}`
      , o = `__svelte_${ai(c)}_${a}`
      , u = Kn(e)
      , {stylesheet: d, rules: g} = We.get(u) || ci(u, e);
    g[o] || (g[o] = !0,
    d.insertRule(`@keyframes ${o} ${c}`, d.cssRules.length));
    const v = e.style.animation || "";
    return e.style.animation = `${v ? `${v}, ` : ""}${o} ${r}ms linear ${i}ms 1 both`,
    Xe += 1,
    o
}
function Je(e, t) {
    const n = (e.style.animation || "").split(", ")
      , r = n.filter(t ? s=>s.indexOf(t) < 0 : s=>s.indexOf("__svelte") === -1)
      , i = n.length - r.length;
    i && (e.style.animation = r.join(", "),
    Xe -= i,
    Xe || ui())
}
function ui() {
    Xt(()=>{
        Xe || (We.forEach(e=>{
            const {ownerNode: t} = e.stylesheet;
            t && Jt(t)
        }
        ),
        We.clear())
    }
    )
}
let Ee;
function Ae(e) {
    Ee = e
}
function Re() {
    if (!Ee)
        throw new Error("Function called outside component initialization");
    return Ee
}
function Za(e) {
    Re().$$.on_mount.push(e)
}
function Ja(e) {
    Re().$$.on_destroy.push(e)
}
function Ga() {
    const e = Re();
    return (t,n,{cancelable: r=!1}={})=>{
        const i = e.$$.callbacks[t];
        if (i) {
            const s = tr(t, n, {
                cancelable: r
            });
            return i.slice().forEach(f=>{
                f.call(e, s)
            }
            ),
            !s.defaultPrevented
        }
        return !0
    }
}
function Ka(e, t) {
    return Re().$$.context.set(e, t),
    t
}
function Ya(e) {
    return Re().$$.context.get(e)
}
function Qa(e, t) {
    const n = e.$$.callbacks[t.type];
    n && n.slice().forEach(r=>r.call(this, t))
}
const ge = []
  , vn = [];
let ve = [];
const St = []
  , nr = Promise.resolve();
let Bt = !1;
function rr() {
    Bt || (Bt = !0,
    nr.then(ir))
}
function ec() {
    return rr(),
    nr
}
function _e(e) {
    ve.push(e)
}
function tc(e) {
    St.push(e)
}
const dt = new Set;
let le = 0;
function ir() {
    if (le !== 0)
        return;
    const e = Ee;
    do {
        try {
            for (; le < ge.length; ) {
                const t = ge[le];
                le++,
                Ae(t),
                fi(t.$$)
            }
        } catch (t) {
            throw ge.length = 0,
            le = 0,
            t
        }
        for (Ae(null),
        ge.length = 0,
        le = 0; vn.length; )
            vn.pop()();
        for (let t = 0; t < ve.length; t += 1) {
            const n = ve[t];
            dt.has(n) || (dt.add(n),
            n())
        }
        ve.length = 0
    } while (ge.length);
    for (; St.length; )
        St.pop()();
    Bt = !1,
    dt.clear(),
    Ae(e)
}
function fi(e) {
    if (e.fragment !== null) {
        e.update(),
        K(e.before_update);
        const t = e.dirty;
        e.dirty = [-1],
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(_e)
    }
}
function li(e) {
    const t = []
      , n = [];
    ve.forEach(r=>e.indexOf(r) === -1 ? t.push(r) : n.push(r)),
    n.forEach(r=>r()),
    ve = t
}
let xe;
function Gt() {
    return xe || (xe = Promise.resolve(),
    xe.then(()=>{
        xe = null
    }
    )),
    xe
}
function ae(e, t, n) {
    e.dispatchEvent(tr(`${t ? "intro" : "outro"}${n}`))
}
const He = new Set;
let Z;
function nc() {
    Z = {
        r: 0,
        c: [],
        p: Z
    }
}
function rc() {
    Z.r || K(Z.c),
    Z = Z.p
}
function or(e, t) {
    e && e.i && (He.delete(e),
    e.i(t))
}
function hi(e, t, n, r) {
    if (e && e.o) {
        if (He.has(e))
            return;
        He.add(e),
        Z.c.push(()=>{
            He.delete(e),
            r && (n && e.d(1),
            r())
        }
        ),
        e.o(t)
    } else
        r && r()
}
const Kt = {
    duration: 0
};
function ic(e, t, n) {
    const r = {
        direction: "in"
    };
    let i = t(e, n, r), s = !1, f, a, h = 0;
    function l() {
        f && Je(e, f)
    }
    function c() {
        const {delay: u=0, duration: d=300, easing: g=tt, tick: v=L, css: p} = i || Kt;
        p && (f = Ze(e, 0, 1, d, u, g, p, h++)),
        v(0, 1);
        const y = Wt() + u
          , m = y + d;
        a && a.abort(),
        s = !0,
        _e(()=>ae(e, !0, "start")),
        a = Zt(b=>{
            if (s) {
                if (b >= m)
                    return v(1, 0),
                    ae(e, !0, "end"),
                    l(),
                    s = !1;
                if (b >= y) {
                    const _ = g((b - y) / d);
                    v(_, 1 - _)
                }
            }
            return s
        }
        )
    }
    let o = !1;
    return {
        start() {
            o || (o = !0,
            Je(e),
            ue(i) ? (i = i(r),
            Gt().then(c)) : c())
        },
        invalidate() {
            o = !1
        },
        end() {
            s && (l(),
            s = !1)
        }
    }
}
function oc(e, t, n) {
    const r = {
        direction: "out"
    };
    let i = t(e, n, r), s = !0, f;
    const a = Z;
    a.r += 1;
    let h;
    function l() {
        const {delay: c=0, duration: o=300, easing: u=tt, tick: d=L, css: g} = i || Kt;
        g && (f = Ze(e, 1, 0, o, c, u, g));
        const v = Wt() + c
          , p = v + o;
        _e(()=>ae(e, !1, "start")),
        "inert"in e && (h = e.inert,
        e.inert = !0),
        Zt(y=>{
            if (s) {
                if (y >= p)
                    return d(0, 1),
                    ae(e, !1, "end"),
                    --a.r || K(a.c),
                    !1;
                if (y >= v) {
                    const m = u((y - v) / o);
                    d(1 - m, m)
                }
            }
            return s
        }
        )
    }
    return ue(i) ? Gt().then(()=>{
        i = i(r),
        l()
    }
    ) : l(),
    {
        end(c) {
            c && "inert"in e && (e.inert = h),
            c && i.tick && i.tick(1, 0),
            s && (f && Je(e, f),
            s = !1)
        }
    }
}
function sc(e, t, n, r) {
    let s = t(e, n, {
        direction: "both"
    }), f = r ? 0 : 1, a = null, h = null, l = null, c;
    function o() {
        l && Je(e, l)
    }
    function u(g, v) {
        const p = g.b - f;
        return v *= Math.abs(p),
        {
            a: f,
            b: g.b,
            d: p,
            duration: v,
            start: g.start,
            end: g.start + v,
            group: g.group
        }
    }
    function d(g) {
        const {delay: v=0, duration: p=300, easing: y=tt, tick: m=L, css: b} = s || Kt
          , _ = {
            start: Wt() + v,
            b: g
        };
        g || (_.group = Z,
        Z.r += 1),
        "inert"in e && (g ? c !== void 0 && (e.inert = c) : (c = e.inert,
        e.inert = !0)),
        a || h ? h = _ : (b && (o(),
        l = Ze(e, f, g, p, v, y, b)),
        g && m(0, 1),
        a = u(_, p),
        _e(()=>ae(e, g, "start")),
        Zt(w=>{
            if (h && w > h.start && (a = u(h, p),
            h = null,
            ae(e, a.b, "start"),
            b && (o(),
            l = Ze(e, f, a.b, a.duration, 0, y, s.css))),
            a) {
                if (w >= a.end)
                    m(f = a.b, 1 - f),
                    ae(e, a.b, "end"),
                    h || (a.b ? o() : --a.group.r || K(a.group.c)),
                    a = null;
                else if (w >= a.start) {
                    const k = w - a.start;
                    f = a.a + a.d * y(k / a.duration),
                    m(f, 1 - f)
                }
            }
            return !!(a || h)
        }
        ))
    }
    return {
        run(g) {
            ue(s) ? Gt().then(()=>{
                s = s({
                    direction: g ? "in" : "out"
                }),
                d(g)
            }
            ) : d(g)
        },
        end() {
            o(),
            a = h = null
        }
    }
}
function ac(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e)
}
function cc(e, t) {
    e.d(1),
    t.delete(e.key)
}
function uc(e, t) {
    hi(e, 1, 1, ()=>{
        t.delete(e.key)
    }
    )
}
function fc(e, t, n, r, i, s, f, a, h, l, c, o) {
    let u = e.length
      , d = s.length
      , g = u;
    const v = {};
    for (; g--; )
        v[e[g].key] = g;
    const p = []
      , y = new Map
      , m = new Map
      , b = [];
    for (g = d; g--; ) {
        const C = o(i, s, g)
          , F = n(C);
        let x = f.get(F);
        x ? r && b.push(()=>x.p(C, t)) : (x = l(F, C),
        x.c()),
        y.set(F, p[g] = x),
        F in v && m.set(F, Math.abs(g - v[F]))
    }
    const _ = new Set
      , w = new Set;
    function k(C) {
        or(C, 1),
        C.m(a, c),
        f.set(C.key, C),
        c = C.first,
        d--
    }
    for (; u && d; ) {
        const C = p[d - 1]
          , F = e[u - 1]
          , x = C.key
          , E = F.key;
        C === F ? (c = C.first,
        u--,
        d--) : y.has(E) ? !f.has(x) || _.has(x) ? k(C) : w.has(E) ? u-- : m.get(x) > m.get(E) ? (w.add(x),
        k(C)) : (_.add(E),
        u--) : (h(F, f),
        u--)
    }
    for (; u--; ) {
        const C = e[u];
        y.has(C.key) || h(C, f)
    }
    for (; d; )
        k(p[d - 1]);
    return K(b),
    p
}
function lc(e, t) {
    const n = {}
      , r = {}
      , i = {
        $$scope: 1
    };
    let s = e.length;
    for (; s--; ) {
        const f = e[s]
          , a = t[s];
        if (a) {
            for (const h in f)
                h in a || (r[h] = 1);
            for (const h in a)
                i[h] || (n[h] = a[h],
                i[h] = 1);
            e[s] = a
        } else
            for (const h in f)
                i[h] = 1
    }
    for (const f in r)
        f in n || (n[f] = void 0);
    return n
}
function hc(e) {
    return typeof e == "object" && e !== null ? e : {}
}
function dc(e, t, n) {
    const r = e.$$.props[t];
    r !== void 0 && (e.$$.bound[r] = n,
    n(e.$$.ctx[r]))
}
function pc(e) {
    e && e.c()
}
function di(e, t, n) {
    const {fragment: r, after_update: i} = e.$$;
    r && r.m(t, n),
    _e(()=>{
        const s = e.$$.on_mount.map(Xn).filter(ue);
        e.$$.on_destroy ? e.$$.on_destroy.push(...s) : K(s),
        e.$$.on_mount = []
    }
    ),
    i.forEach(_e)
}
function pi(e, t) {
    const n = e.$$;
    n.fragment !== null && (li(n.after_update),
    K(n.on_destroy),
    n.fragment && n.fragment.d(t),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function gi(e, t) {
    e.$$.dirty[0] === -1 && (ge.push(e),
    rr(),
    e.$$.dirty.fill(0)),
    e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}
function gc(e, t, n, r, i, s, f, a=[-1]) {
    const h = Ee;
    Ae(e);
    const l = e.$$ = {
        fragment: null,
        ctx: [],
        props: s,
        update: L,
        not_equal: i,
        bound: gn(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (h ? h.$$.context : [])),
        callbacks: gn(),
        dirty: a,
        skip_bound: !1,
        root: t.target || h.$$.root
    };
    f && f(l.root);
    let c = !1;
    if (l.ctx = n ? n(e, t.props || {}, (o,u,...d)=>{
        const g = d.length ? d[0] : u;
        return l.ctx && i(l.ctx[o], l.ctx[o] = g) && (!l.skip_bound && l.bound[o] && l.bound[o](g),
        c && gi(e, o)),
        u
    }
    ) : [],
    l.update(),
    c = !0,
    K(l.before_update),
    l.fragment = r ? r(l.ctx) : !1,
    t.target) {
        if (t.hydrate) {
            const o = si(t.target);
            l.fragment && l.fragment.l(o),
            o.forEach(Jt)
        } else
            l.fragment && l.fragment.c();
        t.intro && or(e.$$.fragment),
        di(e, t.target, t.anchor),
        ir()
    }
    Ae(h)
}
class yc {
    constructor() {
        Y(this, "$$");
        Y(this, "$$set")
    }
    $destroy() {
        pi(this, 1),
        this.$destroy = L
    }
    $on(t, n) {
        if (!ue(n))
            return L;
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return r.push(n),
        ()=>{
            const i = r.indexOf(n);
            i !== -1 && r.splice(i, 1)
        }
    }
    $set(t) {
        this.$$set && !Qr(t) && (this.$$.skip_bound = !0,
        this.$$set(t),
        this.$$.skip_bound = !1)
    }
}
const yi = "4"
  , he = [];
function vi(e, t) {
    return {
        subscribe: mi(e, t).subscribe
    }
}
function mi(e, t=L) {
    let n;
    const r = new Set;
    function i(a) {
        if (Yr(e, a) && (e = a,
        n)) {
            const h = !he.length;
            for (const l of r)
                l[1](),
                he.push(l, e);
            if (h) {
                for (let l = 0; l < he.length; l += 2)
                    he[l][0](he[l + 1]);
                he.length = 0
            }
        }
    }
    function s(a) {
        i(a(e))
    }
    function f(a, h=L) {
        const l = [a, h];
        return r.add(l),
        r.size === 1 && (n = t(i, s) || L),
        a(e),
        ()=>{
            r.delete(l),
            r.size === 0 && n && (n(),
            n = null)
        }
    }
    return {
        set: i,
        update: s,
        subscribe: f
    }
}
function vc(e, t, n) {
    const r = !Array.isArray(e)
      , i = r ? [e] : e;
    if (!i.every(Boolean))
        throw new Error("derived() expects stores as input, got a falsy value");
    const s = t.length < 2;
    return vi(n, (f,a)=>{
        let h = !1;
        const l = [];
        let c = 0
          , o = L;
        const u = ()=>{
            if (c)
                return;
            o();
            const g = t(r ? l[0] : l, f, a);
            s ? f(g) : o = ue(g) ? g : L
        }
          , d = i.map((g,v)=>Vt(g, p=>{
            l[v] = p,
            c &= ~(1 << v),
            h && u()
        }
        , ()=>{
            c |= 1 << v
        }
        ));
        return h = !0,
        u(),
        function() {
            K(d),
            o(),
            h = !1
        }
    }
    )
}
var A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yt(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function sr(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var ar = {}, Ot = {}, cr = {}, P = {}, ze = {
    exports: {}
}, pt, mn;
function _i() {
    if (mn)
        return pt;
    mn = 1;
    var e = 1e3
      , t = e * 60
      , n = t * 60
      , r = n * 24
      , i = r * 7
      , s = r * 365.25;
    pt = function(c, o) {
        o = o || {};
        var u = typeof c;
        if (u === "string" && c.length > 0)
            return f(c);
        if (u === "number" && isFinite(c))
            return o.long ? h(c) : a(c);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(c))
    }
    ;
    function f(c) {
        if (c = String(c),
        !(c.length > 100)) {
            var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(c);
            if (o) {
                var u = parseFloat(o[1])
                  , d = (o[2] || "ms").toLowerCase();
                switch (d) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return u * s;
                case "weeks":
                case "week":
                case "w":
                    return u * i;
                case "days":
                case "day":
                case "d":
                    return u * r;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return u * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return u * t;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return u * e;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return u;
                default:
                    return
                }
            }
        }
    }
    function a(c) {
        var o = Math.abs(c);
        return o >= r ? Math.round(c / r) + "d" : o >= n ? Math.round(c / n) + "h" : o >= t ? Math.round(c / t) + "m" : o >= e ? Math.round(c / e) + "s" : c + "ms"
    }
    function h(c) {
        var o = Math.abs(c);
        return o >= r ? l(c, o, r, "day") : o >= n ? l(c, o, n, "hour") : o >= t ? l(c, o, t, "minute") : o >= e ? l(c, o, e, "second") : c + " ms"
    }
    function l(c, o, u, d) {
        var g = o >= u * 1.5;
        return Math.round(c / u) + " " + d + (g ? "s" : "")
    }
    return pt
}
var gt, _n;
function bi() {
    if (_n)
        return gt;
    _n = 1;
    function e(t) {
        r.debug = r,
        r.default = r,
        r.coerce = l,
        r.disable = f,
        r.enable = s,
        r.enabled = a,
        r.humanize = _i(),
        r.destroy = c,
        Object.keys(t).forEach(o=>{
            r[o] = t[o]
        }
        ),
        r.names = [],
        r.skips = [],
        r.formatters = {};
        function n(o) {
            let u = 0;
            for (let d = 0; d < o.length; d++)
                u = (u << 5) - u + o.charCodeAt(d),
                u |= 0;
            return r.colors[Math.abs(u) % r.colors.length]
        }
        r.selectColor = n;
        function r(o) {
            let u, d = null, g, v;
            function p(...y) {
                if (!p.enabled)
                    return;
                const m = p
                  , b = Number(new Date)
                  , _ = b - (u || b);
                m.diff = _,
                m.prev = u,
                m.curr = b,
                u = b,
                y[0] = r.coerce(y[0]),
                typeof y[0] != "string" && y.unshift("%O");
                let w = 0;
                y[0] = y[0].replace(/%([a-zA-Z%])/g, (C,F)=>{
                    if (C === "%%")
                        return "%";
                    w++;
                    const x = r.formatters[F];
                    if (typeof x == "function") {
                        const E = y[w];
                        C = x.call(m, E),
                        y.splice(w, 1),
                        w--
                    }
                    return C
                }
                ),
                r.formatArgs.call(m, y),
                (m.log || r.log).apply(m, y)
            }
            return p.namespace = o,
            p.useColors = r.useColors(),
            p.color = r.selectColor(o),
            p.extend = i,
            p.destroy = r.destroy,
            Object.defineProperty(p, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: ()=>d !== null ? d : (g !== r.namespaces && (g = r.namespaces,
                v = r.enabled(o)),
                v),
                set: y=>{
                    d = y
                }
            }),
            typeof r.init == "function" && r.init(p),
            p
        }
        function i(o, u) {
            const d = r(this.namespace + (typeof u > "u" ? ":" : u) + o);
            return d.log = this.log,
            d
        }
        function s(o) {
            r.save(o),
            r.namespaces = o,
            r.names = [],
            r.skips = [];
            let u;
            const d = (typeof o == "string" ? o : "").split(/[\s,]+/)
              , g = d.length;
            for (u = 0; u < g; u++)
                d[u] && (o = d[u].replace(/\*/g, ".*?"),
                o[0] === "-" ? r.skips.push(new RegExp("^" + o.slice(1) + "$")) : r.names.push(new RegExp("^" + o + "$")))
        }
        function f() {
            const o = [...r.names.map(h), ...r.skips.map(h).map(u=>"-" + u)].join(",");
            return r.enable(""),
            o
        }
        function a(o) {
            if (o[o.length - 1] === "*")
                return !0;
            let u, d;
            for (u = 0,
            d = r.skips.length; u < d; u++)
                if (r.skips[u].test(o))
                    return !1;
            for (u = 0,
            d = r.names.length; u < d; u++)
                if (r.names[u].test(o))
                    return !0;
            return !1
        }
        function h(o) {
            return o.toString().substring(2, o.toString().length - 2).replace(/\.\*\?$/, "*")
        }
        function l(o) {
            return o instanceof Error ? o.stack || o.message : o
        }
        function c() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }
        return r.enable(r.load()),
        r
    }
    return gt = e,
    gt
}
var bn;
function Ci() {
    return bn || (bn = 1,
    function(e, t) {
        t.formatArgs = r,
        t.save = i,
        t.load = s,
        t.useColors = n,
        t.storage = f(),
        t.destroy = (()=>{
            let h = !1;
            return ()=>{
                h || (h = !0,
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }
        }
        )(),
        t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
        function n() {
            return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        function r(h) {
            if (h[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + h[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
            !this.useColors)
                return;
            const l = "color: " + this.color;
            h.splice(1, 0, l, "color: inherit");
            let c = 0
              , o = 0;
            h[0].replace(/%[a-zA-Z%]/g, u=>{
                u !== "%%" && (c++,
                u === "%c" && (o = c))
            }
            ),
            h.splice(o, 0, l)
        }
        t.log = console.debug || console.log || (()=>{}
        );
        function i(h) {
            try {
                h ? t.storage.setItem("debug", h) : t.storage.removeItem("debug")
            } catch {}
        }
        function s() {
            let h;
            try {
                h = t.storage.getItem("debug")
            } catch {}
            return !h && typeof process < "u" && "env"in process && (h = {}.DEBUG),
            h
        }
        function f() {
            try {
                return localStorage
            } catch {}
        }
        e.exports = bi()(t);
        const {formatters: a} = e.exports;
        a.j = function(h) {
            try {
                return JSON.stringify(h)
            } catch (l) {
                return "[UnexpectedJSONParseError]: " + l.message
            }
        }
    }(ze, ze.exports)),
    ze.exports
}
var wi = A && A.__extends || function() {
    var e = function(t, n) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(r, i) {
            r.__proto__ = i
        }
        || function(r, i) {
            for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s])
        }
        ,
        e(t, n)
    };
    return function(t, n) {
        if (typeof n != "function" && n !== null)
            throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);
        function r() {
            this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype,
        new r)
    }
}();
Object.defineProperty(P, "__esModule", {
    value: !0
});
P.createEmitter = P.createCallback = P.bound = P.createSocketError = P.SocketError = P.debug = void 0;
P.debug = ki();
function ki() {
    try {
        return Ci()("smartsupp:client")
    } catch {
        return function() {}
    }
}
var ur = function(e) {
    wi(t, e);
    function t(n, r) {
        var i = e.call(this, n) || this;
        return Object.setPrototypeOf(i, t.prototype),
        i.name = i.constructor.name,
        i.code = r.code,
        i.type = r.type,
        i.event = r.event,
        r && r.stack && (i.stack = "".concat(i.stack, `
Caused By: `).concat(r.stack)),
        i
    }
    return t
}(Error);
P.SocketError = ur;
function fr(e) {
    return new ur(e.message,e)
}
P.createSocketError = fr;
function Fi(e, t) {
    return function() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        e[t].apply(e, n)
    }
}
P.bound = Fi;
function xi(e, t) {
    return function(n, r) {
        n ? t(fr(n)) : e(r)
    }
}
P.createCallback = xi;
function Ai(e, t) {
    return function(n) {
        e.emit(t, n)
    }
}
P.createEmitter = Ai;
var lr = {
    exports: {}
};
(function(e) {
    var t = Object.prototype.hasOwnProperty
      , n = "~";
    function r() {}
    Object.create && (r.prototype = Object.create(null),
    new r().__proto__ || (n = !1));
    function i(h, l, c) {
        this.fn = h,
        this.context = l,
        this.once = c || !1
    }
    function s(h, l, c, o, u) {
        if (typeof c != "function")
            throw new TypeError("The listener must be a function");
        var d = new i(c,o || h,u)
          , g = n ? n + l : l;
        return h._events[g] ? h._events[g].fn ? h._events[g] = [h._events[g], d] : h._events[g].push(d) : (h._events[g] = d,
        h._eventsCount++),
        h
    }
    function f(h, l) {
        --h._eventsCount === 0 ? h._events = new r : delete h._events[l]
    }
    function a() {
        this._events = new r,
        this._eventsCount = 0
    }
    a.prototype.eventNames = function() {
        var l = [], c, o;
        if (this._eventsCount === 0)
            return l;
        for (o in c = this._events)
            t.call(c, o) && l.push(n ? o.slice(1) : o);
        return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l
    }
    ,
    a.prototype.listeners = function(l) {
        var c = n ? n + l : l
          , o = this._events[c];
        if (!o)
            return [];
        if (o.fn)
            return [o.fn];
        for (var u = 0, d = o.length, g = new Array(d); u < d; u++)
            g[u] = o[u].fn;
        return g
    }
    ,
    a.prototype.listenerCount = function(l) {
        var c = n ? n + l : l
          , o = this._events[c];
        return o ? o.fn ? 1 : o.length : 0
    }
    ,
    a.prototype.emit = function(l, c, o, u, d, g) {
        var v = n ? n + l : l;
        if (!this._events[v])
            return !1;
        var p = this._events[v], y = arguments.length, m, b;
        if (p.fn) {
            switch (p.once && this.removeListener(l, p.fn, void 0, !0),
            y) {
            case 1:
                return p.fn.call(p.context),
                !0;
            case 2:
                return p.fn.call(p.context, c),
                !0;
            case 3:
                return p.fn.call(p.context, c, o),
                !0;
            case 4:
                return p.fn.call(p.context, c, o, u),
                !0;
            case 5:
                return p.fn.call(p.context, c, o, u, d),
                !0;
            case 6:
                return p.fn.call(p.context, c, o, u, d, g),
                !0
            }
            for (b = 1,
            m = new Array(y - 1); b < y; b++)
                m[b - 1] = arguments[b];
            p.fn.apply(p.context, m)
        } else {
            var _ = p.length, w;
            for (b = 0; b < _; b++)
                switch (p[b].once && this.removeListener(l, p[b].fn, void 0, !0),
                y) {
                case 1:
                    p[b].fn.call(p[b].context);
                    break;
                case 2:
                    p[b].fn.call(p[b].context, c);
                    break;
                case 3:
                    p[b].fn.call(p[b].context, c, o);
                    break;
                case 4:
                    p[b].fn.call(p[b].context, c, o, u);
                    break;
                default:
                    if (!m)
                        for (w = 1,
                        m = new Array(y - 1); w < y; w++)
                            m[w - 1] = arguments[w];
                    p[b].fn.apply(p[b].context, m)
                }
        }
        return !0
    }
    ,
    a.prototype.on = function(l, c, o) {
        return s(this, l, c, o, !1)
    }
    ,
    a.prototype.once = function(l, c, o) {
        return s(this, l, c, o, !0)
    }
    ,
    a.prototype.removeListener = function(l, c, o, u) {
        var d = n ? n + l : l;
        if (!this._events[d])
            return this;
        if (!c)
            return f(this, d),
            this;
        var g = this._events[d];
        if (g.fn)
            g.fn === c && (!u || g.once) && (!o || g.context === o) && f(this, d);
        else {
            for (var v = 0, p = [], y = g.length; v < y; v++)
                (g[v].fn !== c || u && !g[v].once || o && g[v].context !== o) && p.push(g[v]);
            p.length ? this._events[d] = p.length === 1 ? p[0] : p : f(this, d)
        }
        return this
    }
    ,
    a.prototype.removeAllListeners = function(l) {
        var c;
        return l ? (c = n ? n + l : l,
        this._events[c] && f(this, c)) : (this._events = new r,
        this._eventsCount = 0),
        this
    }
    ,
    a.prototype.off = a.prototype.removeListener,
    a.prototype.addListener = a.prototype.on,
    a.prefixed = n,
    a.EventEmitter = a,
    e.exports = a
}
)(lr);
var hr = lr.exports, Rt = {
    exports: {}
}, Ei = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Di = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], Si = function(t) {
    var n = t
      , r = t.indexOf("[")
      , i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    for (var s = Ei.exec(t || ""), f = {}, a = 14; a--; )
        f[Di[a]] = s[a] || "";
    return r != -1 && i != -1 && (f.source = n,
    f.host = f.host.substring(1, f.host.length - 1).replace(/;/g, ":"),
    f.authority = f.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    f.ipv6uri = !0),
    f
}, $t = {
    exports: {}
}, yt, Cn;
function Bi() {
    if (Cn)
        return yt;
    Cn = 1;
    var e = 1e3
      , t = e * 60
      , n = t * 60
      , r = n * 24
      , i = r * 7
      , s = r * 365.25;
    yt = function(c, o) {
        o = o || {};
        var u = typeof c;
        if (u === "string" && c.length > 0)
            return f(c);
        if (u === "number" && isFinite(c))
            return o.long ? h(c) : a(c);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(c))
    }
    ;
    function f(c) {
        if (c = String(c),
        !(c.length > 100)) {
            var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(c);
            if (o) {
                var u = parseFloat(o[1])
                  , d = (o[2] || "ms").toLowerCase();
                switch (d) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return u * s;
                case "weeks":
                case "week":
                case "w":
                    return u * i;
                case "days":
                case "day":
                case "d":
                    return u * r;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return u * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return u * t;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return u * e;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return u;
                default:
                    return
                }
            }
        }
    }
    function a(c) {
        var o = Math.abs(c);
        return o >= r ? Math.round(c / r) + "d" : o >= n ? Math.round(c / n) + "h" : o >= t ? Math.round(c / t) + "m" : o >= e ? Math.round(c / e) + "s" : c + "ms"
    }
    function h(c) {
        var o = Math.abs(c);
        return o >= r ? l(c, o, r, "day") : o >= n ? l(c, o, n, "hour") : o >= t ? l(c, o, t, "minute") : o >= e ? l(c, o, e, "second") : c + " ms"
    }
    function l(c, o, u, d) {
        var g = o >= u * 1.5;
        return Math.round(c / u) + " " + d + (g ? "s" : "")
    }
    return yt
}
function Oi(e) {
    n.debug = n,
    n.default = n,
    n.coerce = l,
    n.disable = f,
    n.enable = s,
    n.enabled = a,
    n.humanize = Bi(),
    Object.keys(e).forEach(c=>{
        n[c] = e[c]
    }
    ),
    n.instances = [],
    n.names = [],
    n.skips = [],
    n.formatters = {};
    function t(c) {
        let o = 0;
        for (let u = 0; u < c.length; u++)
            o = (o << 5) - o + c.charCodeAt(u),
            o |= 0;
        return n.colors[Math.abs(o) % n.colors.length]
    }
    n.selectColor = t;
    function n(c) {
        let o;
        function u(...d) {
            if (!u.enabled)
                return;
            const g = u
              , v = Number(new Date)
              , p = v - (o || v);
            g.diff = p,
            g.prev = o,
            g.curr = v,
            o = v,
            d[0] = n.coerce(d[0]),
            typeof d[0] != "string" && d.unshift("%O");
            let y = 0;
            d[0] = d[0].replace(/%([a-zA-Z%])/g, (b,_)=>{
                if (b === "%%")
                    return b;
                y++;
                const w = n.formatters[_];
                if (typeof w == "function") {
                    const k = d[y];
                    b = w.call(g, k),
                    d.splice(y, 1),
                    y--
                }
                return b
            }
            ),
            n.formatArgs.call(g, d),
            (g.log || n.log).apply(g, d)
        }
        return u.namespace = c,
        u.enabled = n.enabled(c),
        u.useColors = n.useColors(),
        u.color = t(c),
        u.destroy = r,
        u.extend = i,
        typeof n.init == "function" && n.init(u),
        n.instances.push(u),
        u
    }
    function r() {
        const c = n.instances.indexOf(this);
        return c !== -1 ? (n.instances.splice(c, 1),
        !0) : !1
    }
    function i(c, o) {
        const u = n(this.namespace + (typeof o > "u" ? ":" : o) + c);
        return u.log = this.log,
        u
    }
    function s(c) {
        n.save(c),
        n.names = [],
        n.skips = [];
        let o;
        const u = (typeof c == "string" ? c : "").split(/[\s,]+/)
          , d = u.length;
        for (o = 0; o < d; o++)
            u[o] && (c = u[o].replace(/\*/g, ".*?"),
            c[0] === "-" ? n.skips.push(new RegExp("^" + c.substr(1) + "$")) : n.names.push(new RegExp("^" + c + "$")));
        for (o = 0; o < n.instances.length; o++) {
            const g = n.instances[o];
            g.enabled = n.enabled(g.namespace)
        }
    }
    function f() {
        const c = [...n.names.map(h), ...n.skips.map(h).map(o=>"-" + o)].join(",");
        return n.enable(""),
        c
    }
    function a(c) {
        if (c[c.length - 1] === "*")
            return !0;
        let o, u;
        for (o = 0,
        u = n.skips.length; o < u; o++)
            if (n.skips[o].test(c))
                return !1;
        for (o = 0,
        u = n.names.length; o < u; o++)
            if (n.names[o].test(c))
                return !0;
        return !1
    }
    function h(c) {
        return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*")
    }
    function l(c) {
        return c instanceof Error ? c.stack || c.message : c
    }
    return n.enable(n.load()),
    n
}
var Ri = Oi;
(function(e, t) {
    t.log = i,
    t.formatArgs = r,
    t.save = s,
    t.load = f,
    t.useColors = n,
    t.storage = a(),
    t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function n() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    function r(l) {
        if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
        !this.useColors)
            return;
        const c = "color: " + this.color;
        l.splice(1, 0, c, "color: inherit");
        let o = 0
          , u = 0;
        l[0].replace(/%[a-zA-Z%]/g, d=>{
            d !== "%%" && (o++,
            d === "%c" && (u = o))
        }
        ),
        l.splice(u, 0, c)
    }
    function i(...l) {
        return typeof console == "object" && console.log && console.log(...l)
    }
    function s(l) {
        try {
            l ? t.storage.setItem("debug", l) : t.storage.removeItem("debug")
        } catch {}
    }
    function f() {
        let l;
        try {
            l = t.storage.getItem("debug")
        } catch {}
        return !l && typeof process < "u" && "env"in process && (l = {}.DEBUG),
        l
    }
    function a() {
        try {
            return localStorage
        } catch {}
    }
    e.exports = Ri(t);
    const {formatters: h} = e.exports;
    h.j = function(l) {
        try {
            return JSON.stringify(l)
        } catch (c) {
            return "[UnexpectedJSONParseError]: " + c.message
        }
    }
}
)($t, $t.exports);
var nt = $t.exports
  , $i = Si
  , wn = nt("socket.io-client:url")
  , Mi = Ti;
function Ti(e, t) {
    var n = e;
    t = t || typeof location < "u" && location,
    e == null && (e = t.protocol + "//" + t.host),
    typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e),
    /^(https?|wss?):\/\//.test(e) || (wn("protocol-less url %s", e),
    typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e),
    wn("parse %s", e),
    n = $i(e)),
    n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
    n.path = n.path || "/";
    var r = n.host.indexOf(":") !== -1
      , i = r ? "[" + n.host + "]" : n.host;
    return n.id = n.protocol + "://" + i + ":" + n.port,
    n.href = n.protocol + "://" + i + (t && t.port === n.port ? "" : ":" + n.port),
    n
}
var rt = {}
  , Mt = {
    exports: {}
}
  , Tt = {
    exports: {}
}
  , De = 1e3
  , Se = De * 60
  , Be = Se * 60
  , Oe = Be * 24
  , zi = Oe * 365.25
  , Pi = function(e, t) {
    t = t || {};
    var n = typeof e;
    if (n === "string" && e.length > 0)
        return ji(e);
    if (n === "number" && isNaN(e) === !1)
        return t.long ? Ni(e) : qi(e);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
};
function ji(e) {
    if (e = String(e),
    !(e.length > 100)) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (t) {
            var n = parseFloat(t[1])
              , r = (t[2] || "ms").toLowerCase();
            switch (r) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
                return n * zi;
            case "days":
            case "day":
            case "d":
                return n * Oe;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
                return n * Be;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
                return n * Se;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
                return n * De;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
                return n;
            default:
                return
            }
        }
    }
}
function qi(e) {
    return e >= Oe ? Math.round(e / Oe) + "d" : e >= Be ? Math.round(e / Be) + "h" : e >= Se ? Math.round(e / Se) + "m" : e >= De ? Math.round(e / De) + "s" : e + "ms"
}
function Ni(e) {
    return Pe(e, Oe, "day") || Pe(e, Be, "hour") || Pe(e, Se, "minute") || Pe(e, De, "second") || e + " ms"
}
function Pe(e, t, n) {
    if (!(e < t))
        return e < t * 1.5 ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
}
(function(e, t) {
    t = e.exports = r.debug = r.default = r,
    t.coerce = h,
    t.disable = f,
    t.enable = s,
    t.enabled = a,
    t.humanize = Pi,
    t.instances = [],
    t.names = [],
    t.skips = [],
    t.formatters = {};
    function n(l) {
        var c = 0, o;
        for (o in l)
            c = (c << 5) - c + l.charCodeAt(o),
            c |= 0;
        return t.colors[Math.abs(c) % t.colors.length]
    }
    function r(l) {
        var c;
        function o() {
            if (o.enabled) {
                var u = o
                  , d = +new Date
                  , g = d - (c || d);
                u.diff = g,
                u.prev = c,
                u.curr = d,
                c = d;
                for (var v = new Array(arguments.length), p = 0; p < v.length; p++)
                    v[p] = arguments[p];
                v[0] = t.coerce(v[0]),
                typeof v[0] != "string" && v.unshift("%O");
                var y = 0;
                v[0] = v[0].replace(/%([a-zA-Z%])/g, function(b, _) {
                    if (b === "%%")
                        return b;
                    y++;
                    var w = t.formatters[_];
                    if (typeof w == "function") {
                        var k = v[y];
                        b = w.call(u, k),
                        v.splice(y, 1),
                        y--
                    }
                    return b
                }),
                t.formatArgs.call(u, v);
                var m = o.log || t.log || console.log.bind(console);
                m.apply(u, v)
            }
        }
        return o.namespace = l,
        o.enabled = t.enabled(l),
        o.useColors = t.useColors(),
        o.color = n(l),
        o.destroy = i,
        typeof t.init == "function" && t.init(o),
        t.instances.push(o),
        o
    }
    function i() {
        var l = t.instances.indexOf(this);
        return l !== -1 ? (t.instances.splice(l, 1),
        !0) : !1
    }
    function s(l) {
        t.save(l),
        t.names = [],
        t.skips = [];
        var c, o = (typeof l == "string" ? l : "").split(/[\s,]+/), u = o.length;
        for (c = 0; c < u; c++)
            o[c] && (l = o[c].replace(/\*/g, ".*?"),
            l[0] === "-" ? t.skips.push(new RegExp("^" + l.substr(1) + "$")) : t.names.push(new RegExp("^" + l + "$")));
        for (c = 0; c < t.instances.length; c++) {
            var d = t.instances[c];
            d.enabled = t.enabled(d.namespace)
        }
    }
    function f() {
        t.enable("")
    }
    function a(l) {
        if (l[l.length - 1] === "*")
            return !0;
        var c, o;
        for (c = 0,
        o = t.skips.length; c < o; c++)
            if (t.skips[c].test(l))
                return !1;
        for (c = 0,
        o = t.names.length; c < o; c++)
            if (t.names[c].test(l))
                return !0;
        return !1
    }
    function h(l) {
        return l instanceof Error ? l.stack || l.message : l
    }
}
)(Tt, Tt.exports);
var Ii = Tt.exports;
(function(e, t) {
    t = e.exports = Ii,
    t.log = i,
    t.formatArgs = r,
    t.save = s,
    t.load = f,
    t.useColors = n,
    t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : a(),
    t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function n() {
        return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    t.formatters.j = function(h) {
        try {
            return JSON.stringify(h)
        } catch (l) {
            return "[UnexpectedJSONParseError]: " + l.message
        }
    }
    ;
    function r(h) {
        var l = this.useColors;
        if (h[0] = (l ? "%c" : "") + this.namespace + (l ? " %c" : " ") + h[0] + (l ? "%c " : " ") + "+" + t.humanize(this.diff),
        !!l) {
            var c = "color: " + this.color;
            h.splice(1, 0, c, "color: inherit");
            var o = 0
              , u = 0;
            h[0].replace(/%[a-zA-Z%]/g, function(d) {
                d !== "%%" && (o++,
                d === "%c" && (u = o))
            }),
            h.splice(u, 0, c)
        }
    }
    function i() {
        return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }
    function s(h) {
        try {
            h == null ? t.storage.removeItem("debug") : t.storage.debug = h
        } catch {}
    }
    function f() {
        var h;
        try {
            h = t.storage.debug
        } catch {}
        return !h && typeof process < "u" && "env"in process && (h = {}.DEBUG),
        h
    }
    t.enable(f());
    function a() {
        try {
            return window.localStorage
        } catch {}
    }
}
)(Mt, Mt.exports);
var $e = Mt.exports
  , dr = {
    exports: {}
};
(function(e) {
    e.exports = t;
    function t(r) {
        if (r)
            return n(r)
    }
    function n(r) {
        for (var i in t.prototype)
            r[i] = t.prototype[i];
        return r
    }
    t.prototype.on = t.prototype.addEventListener = function(r, i) {
        return this._callbacks = this._callbacks || {},
        (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(i),
        this
    }
    ,
    t.prototype.once = function(r, i) {
        function s() {
            this.off(r, s),
            i.apply(this, arguments)
        }
        return s.fn = i,
        this.on(r, s),
        this
    }
    ,
    t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(r, i) {
        if (this._callbacks = this._callbacks || {},
        arguments.length == 0)
            return this._callbacks = {},
            this;
        var s = this._callbacks["$" + r];
        if (!s)
            return this;
        if (arguments.length == 1)
            return delete this._callbacks["$" + r],
            this;
        for (var f, a = 0; a < s.length; a++)
            if (f = s[a],
            f === i || f.fn === i) {
                s.splice(a, 1);
                break
            }
        return s.length === 0 && delete this._callbacks["$" + r],
        this
    }
    ,
    t.prototype.emit = function(r) {
        this._callbacks = this._callbacks || {};
        for (var i = new Array(arguments.length - 1), s = this._callbacks["$" + r], f = 1; f < arguments.length; f++)
            i[f - 1] = arguments[f];
        if (s) {
            s = s.slice(0);
            for (var f = 0, a = s.length; f < a; ++f)
                s[f].apply(this, i)
        }
        return this
    }
    ,
    t.prototype.listeners = function(r) {
        return this._callbacks = this._callbacks || {},
        this._callbacks["$" + r] || []
    }
    ,
    t.prototype.hasListeners = function(r) {
        return !!this.listeners(r).length
    }
}
)(dr);
var it = dr.exports
  , ot = {}
  , Li = {}.toString
  , Qt = Array.isArray || function(e) {
    return Li.call(e) == "[object Array]"
}
  , pr = Wi
  , Ui = typeof Buffer == "function" && typeof Buffer.isBuffer == "function"
  , Hi = typeof ArrayBuffer == "function"
  , Vi = function(e) {
    return typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
};
function Wi(e) {
    return Ui && Buffer.isBuffer(e) || Hi && (e instanceof ArrayBuffer || Vi(e))
}
var en = Qt
  , gr = pr
  , yr = Object.prototype.toString
  , Xi = typeof Blob == "function" || typeof Blob < "u" && yr.call(Blob) === "[object BlobConstructor]"
  , Zi = typeof File == "function" || typeof File < "u" && yr.call(File) === "[object FileConstructor]";
ot.deconstructPacket = function(e) {
    var t = []
      , n = e.data
      , r = e;
    return r.data = zt(n, t),
    r.attachments = t.length,
    {
        packet: r,
        buffers: t
    }
}
;
function zt(e, t) {
    if (!e)
        return e;
    if (gr(e)) {
        var n = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(e),
        n
    } else if (en(e)) {
        for (var r = new Array(e.length), i = 0; i < e.length; i++)
            r[i] = zt(e[i], t);
        return r
    } else if (typeof e == "object" && !(e instanceof Date)) {
        var r = {};
        for (var s in e)
            r[s] = zt(e[s], t);
        return r
    }
    return e
}
ot.reconstructPacket = function(e, t) {
    return e.data = Pt(e.data, t),
    e.attachments = void 0,
    e
}
;
function Pt(e, t) {
    if (!e)
        return e;
    if (e && e._placeholder === !0) {
        var n = typeof e.num == "number" && e.num >= 0 && e.num < t.length;
        if (n)
            return t[e.num];
        throw new Error("illegal attachments")
    } else if (en(e))
        for (var r = 0; r < e.length; r++)
            e[r] = Pt(e[r], t);
    else if (typeof e == "object")
        for (var i in e)
            e[i] = Pt(e[i], t);
    return e
}
ot.removeBlobs = function(e, t) {
    function n(s, f, a) {
        if (!s)
            return s;
        if (Xi && s instanceof Blob || Zi && s instanceof File) {
            r++;
            var h = new FileReader;
            h.onload = function() {
                a ? a[f] = this.result : i = this.result,
                --r || t(i)
            }
            ,
            h.readAsArrayBuffer(s)
        } else if (en(s))
            for (var l = 0; l < s.length; l++)
                n(s[l], l, s);
        else if (typeof s == "object" && !gr(s))
            for (var c in s)
                n(s[c], c, s)
    }
    var r = 0
      , i = e;
    n(i),
    r || t(i)
}
;
(function(e) {
    var t = $e("socket.io-parser")
      , n = it
      , r = ot
      , i = Qt
      , s = pr;
    e.protocol = 4,
    e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"],
    e.CONNECT = 0,
    e.DISCONNECT = 1,
    e.EVENT = 2,
    e.ACK = 3,
    e.ERROR = 4,
    e.BINARY_EVENT = 5,
    e.BINARY_ACK = 6,
    e.Encoder = f,
    e.Decoder = o;
    function f() {}
    var a = e.ERROR + '"encode error"';
    f.prototype.encode = function(p, y) {
        if (t("encoding packet %j", p),
        e.BINARY_EVENT === p.type || e.BINARY_ACK === p.type)
            c(p, y);
        else {
            var m = h(p);
            y([m])
        }
    }
    ;
    function h(p) {
        var y = "" + p.type;
        if ((e.BINARY_EVENT === p.type || e.BINARY_ACK === p.type) && (y += p.attachments + "-"),
        p.nsp && p.nsp !== "/" && (y += p.nsp + ","),
        p.id != null && (y += p.id),
        p.data != null) {
            var m = l(p.data);
            if (m !== !1)
                y += m;
            else
                return a
        }
        return t("encoded %j as %s", p, y),
        y
    }
    function l(p) {
        try {
            return JSON.stringify(p)
        } catch {
            return !1
        }
    }
    function c(p, y) {
        function m(b) {
            var _ = r.deconstructPacket(b)
              , w = h(_.packet)
              , k = _.buffers;
            k.unshift(w),
            y(k)
        }
        r.removeBlobs(p, m)
    }
    function o() {
        this.reconstructor = null
    }
    n(o.prototype),
    o.prototype.add = function(p) {
        var y;
        if (typeof p == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            y = u(p),
            e.BINARY_EVENT === y.type || e.BINARY_ACK === y.type ? (this.reconstructor = new g(y),
            this.reconstructor.reconPack.attachments === 0 && this.emit("decoded", y)) : this.emit("decoded", y)
        } else if (s(p) || p.base64)
            if (this.reconstructor)
                y = this.reconstructor.takeBinaryData(p),
                y && (this.reconstructor = null,
                this.emit("decoded", y));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + p)
    }
    ;
    function u(p) {
        var y = 0
          , m = {
            type: Number(p.charAt(0))
        };
        if (e.types[m.type] == null)
            return v("unknown packet type " + m.type);
        if (e.BINARY_EVENT === m.type || e.BINARY_ACK === m.type) {
            for (var b = y + 1; p.charAt(++y) !== "-" && y != p.length; )
                ;
            var _ = p.substring(b, y);
            if (_ != Number(_) || p.charAt(y) !== "-")
                throw new Error("Illegal attachments");
            m.attachments = Number(_)
        }
        if (p.charAt(y + 1) === "/") {
            for (var b = y + 1; ++y; ) {
                var w = p.charAt(y);
                if (w === "," || y === p.length)
                    break
            }
            m.nsp = p.substring(b, y)
        } else
            m.nsp = "/";
        var k = p.charAt(y + 1);
        if (k !== "" && Number(k) == k) {
            for (var b = y + 1; ++y; ) {
                var w = p.charAt(y);
                if (w == null || Number(w) != w) {
                    --y;
                    break
                }
                if (y === p.length)
                    break
            }
            m.id = Number(p.substring(b, y + 1))
        }
        if (p.charAt(++y)) {
            var C = d(p.substr(y))
              , F = C !== !1 && (m.type === e.ERROR || i(C));
            if (F)
                m.data = C;
            else
                return v("invalid payload")
        }
        return t("decoded %s as %j", p, m),
        m
    }
    function d(p) {
        try {
            return JSON.parse(p)
        } catch {
            return !1
        }
    }
    o.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction()
    }
    ;
    function g(p) {
        this.reconPack = p,
        this.buffers = []
    }
    g.prototype.takeBinaryData = function(p) {
        if (this.buffers.push(p),
        this.buffers.length === this.reconPack.attachments) {
            var y = r.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            y
        }
        return null
    }
    ,
    g.prototype.finishedReconstruction = function() {
        this.reconPack = null,
        this.buffers = []
    }
    ;
    function v(p) {
        return {
            type: e.ERROR,
            data: "parser error: " + p
        }
    }
}
)(rt);
var tn = {
    exports: {}
}
  , st = {}
  , jt = {
    exports: {}
};
try {
    jt.exports = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {
    jt.exports = !1
}
var Ji = jt.exports
  , nn = function() {
    return typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
}()
  , Gi = Ji
  , Ki = nn
  , rn = function(e) {
    var t = e.xdomain
      , n = e.xscheme
      , r = e.enablesXDR;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || Gi))
            return new XMLHttpRequest
    } catch {}
    try {
        if (typeof XDomainRequest < "u" && !n && r)
            return new XDomainRequest
    } catch {}
    if (!t)
        try {
            return new Ki[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
  , on = {
    exports: {}
}
  , fe = {}
  , Yi = Object.keys || function(t) {
    var n = []
      , r = Object.prototype.hasOwnProperty;
    for (var i in t)
        r.call(t, i) && n.push(i);
    return n
}
  , Qi = Qt
  , vr = Object.prototype.toString
  , eo = typeof Blob == "function" || typeof Blob < "u" && vr.call(Blob) === "[object BlobConstructor]"
  , to = typeof File == "function" || typeof File < "u" && vr.call(File) === "[object FileConstructor]"
  , mr = Ve;
function Ve(e) {
    if (!e || typeof e != "object")
        return !1;
    if (Qi(e)) {
        for (var t = 0, n = e.length; t < n; t++)
            if (Ve(e[t]))
                return !0;
        return !1
    }
    if (typeof Buffer == "function" && Buffer.isBuffer && Buffer.isBuffer(e) || typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || eo && e instanceof Blob || to && e instanceof File)
        return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
        return Ve(e.toJSON(), !0);
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r) && Ve(e[r]))
            return !0;
    return !1
}
var no = function(e, t, n) {
    var r = e.byteLength;
    if (t = t || 0,
    n = n || r,
    e.slice)
        return e.slice(t, n);
    if (t < 0 && (t += r),
    n < 0 && (n += r),
    n > r && (n = r),
    t >= r || t >= n || r === 0)
        return new ArrayBuffer(0);
    for (var i = new Uint8Array(e), s = new Uint8Array(n - t), f = t, a = 0; f < n; f++,
    a++)
        s[a] = i[f];
    return s.buffer
}
  , ro = io;
function io(e, t, n) {
    var r = !1;
    return n = n || oo,
    i.count = e,
    e === 0 ? t() : i;
    function i(s, f) {
        if (i.count <= 0)
            throw new Error("after called too many times");
        --i.count,
        s ? (r = !0,
        t(s),
        t = n) : i.count === 0 && !r && t(null, f)
    }
}
function oo() {}
/*! https://mths.be/utf8js v2.1.2 by @mathias */
var ee = String.fromCharCode;
function _r(e) {
    for (var t = [], n = 0, r = e.length, i, s; n < r; )
        i = e.charCodeAt(n++),
        i >= 55296 && i <= 56319 && n < r ? (s = e.charCodeAt(n++),
        (s & 64512) == 56320 ? t.push(((i & 1023) << 10) + (s & 1023) + 65536) : (t.push(i),
        n--)) : t.push(i);
    return t
}
function so(e) {
    for (var t = e.length, n = -1, r, i = ""; ++n < t; )
        r = e[n],
        r > 65535 && (r -= 65536,
        i += ee(r >>> 10 & 1023 | 55296),
        r = 56320 | r & 1023),
        i += ee(r);
    return i
}
function br(e, t) {
    if (e >= 55296 && e <= 57343) {
        if (t)
            throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
        return !1
    }
    return !0
}
function vt(e, t) {
    return ee(e >> t & 63 | 128)
}
function ao(e, t) {
    if (!(e & 4294967168))
        return ee(e);
    var n = "";
    return e & 4294965248 ? e & 4294901760 ? e & 4292870144 || (n = ee(e >> 18 & 7 | 240),
    n += vt(e, 12),
    n += vt(e, 6)) : (br(e, t) || (e = 65533),
    n = ee(e >> 12 & 15 | 224),
    n += vt(e, 6)) : n = ee(e >> 6 & 31 | 192),
    n += ee(e & 63 | 128),
    n
}
function co(e, t) {
    t = t || {};
    for (var n = t.strict !== !1, r = _r(e), i = r.length, s = -1, f, a = ""; ++s < i; )
        f = r[s],
        a += ao(f, n);
    return a
}
function de() {
    if (te >= Ke)
        throw Error("Invalid byte index");
    var e = Ge[te] & 255;
    if (te++,
    (e & 192) == 128)
        return e & 63;
    throw Error("Invalid continuation byte")
}
function uo(e) {
    var t, n, r, i, s;
    if (te > Ke)
        throw Error("Invalid byte index");
    if (te == Ke)
        return !1;
    if (t = Ge[te] & 255,
    te++,
    !(t & 128))
        return t;
    if ((t & 224) == 192) {
        if (n = de(),
        s = (t & 31) << 6 | n,
        s >= 128)
            return s;
        throw Error("Invalid continuation byte")
    }
    if ((t & 240) == 224) {
        if (n = de(),
        r = de(),
        s = (t & 15) << 12 | n << 6 | r,
        s >= 2048)
            return br(s, e) ? s : 65533;
        throw Error("Invalid continuation byte")
    }
    if ((t & 248) == 240 && (n = de(),
    r = de(),
    i = de(),
    s = (t & 7) << 18 | n << 12 | r << 6 | i,
    s >= 65536 && s <= 1114111))
        return s;
    throw Error("Invalid UTF-8 detected")
}
var Ge, Ke, te;
function fo(e, t) {
    t = t || {};
    var n = t.strict !== !1;
    Ge = _r(e),
    Ke = Ge.length,
    te = 0;
    for (var r = [], i; (i = uo(n)) !== !1; )
        r.push(i);
    return so(r)
}
var lo = {
    version: "2.1.2",
    encode: co,
    decode: fo
}, je = {}, kn;
function ho() {
    return kn || (kn = 1,
    function(e) {
        je.encode = function(t) {
            var n = new Uint8Array(t), r, i = n.length, s = "";
            for (r = 0; r < i; r += 3)
                s += e[n[r] >> 2],
                s += e[(n[r] & 3) << 4 | n[r + 1] >> 4],
                s += e[(n[r + 1] & 15) << 2 | n[r + 2] >> 6],
                s += e[n[r + 2] & 63];
            return i % 3 === 2 ? s = s.substring(0, s.length - 1) + "=" : i % 3 === 1 && (s = s.substring(0, s.length - 2) + "=="),
            s
        }
        ,
        je.decode = function(t) {
            var n = t.length * .75, r = t.length, i, s = 0, f, a, h, l;
            t[t.length - 1] === "=" && (n--,
            t[t.length - 2] === "=" && n--);
            var c = new ArrayBuffer(n)
              , o = new Uint8Array(c);
            for (i = 0; i < r; i += 4)
                f = e.indexOf(t[i]),
                a = e.indexOf(t[i + 1]),
                h = e.indexOf(t[i + 2]),
                l = e.indexOf(t[i + 3]),
                o[s++] = f << 2 | a >> 4,
                o[s++] = (a & 15) << 4 | h >> 2,
                o[s++] = (h & 3) << 6 | l & 63;
            return c
        }
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")),
    je
}
var mt, Fn;
function po() {
    if (Fn)
        return mt;
    Fn = 1;
    var e = typeof e < "u" ? e : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : !1
      , t = function() {
        try {
            var a = new Blob(["hi"]);
            return a.size === 2
        } catch {
            return !1
        }
    }()
      , n = t && function() {
        try {
            var a = new Blob([new Uint8Array([1, 2])]);
            return a.size === 2
        } catch {
            return !1
        }
    }()
      , r = e && e.prototype.append && e.prototype.getBlob;
    function i(a) {
        return a.map(function(h) {
            if (h.buffer instanceof ArrayBuffer) {
                var l = h.buffer;
                if (h.byteLength !== l.byteLength) {
                    var c = new Uint8Array(h.byteLength);
                    c.set(new Uint8Array(l,h.byteOffset,h.byteLength)),
                    l = c.buffer
                }
                return l
            }
            return h
        })
    }
    function s(a, h) {
        h = h || {};
        var l = new e;
        return i(a).forEach(function(c) {
            l.append(c)
        }),
        h.type ? l.getBlob(h.type) : l.getBlob()
    }
    function f(a, h) {
        return new Blob(i(a),h || {})
    }
    return typeof Blob < "u" && (s.prototype = Blob.prototype,
    f.prototype = Blob.prototype),
    mt = function() {
        return t ? n ? Blob : f : r ? s : void 0
    }(),
    mt
}
(function(e) {
    var t = Yi, n = mr, r = no, i = ro, s = lo, f;
    typeof ArrayBuffer < "u" && (f = ho());
    var a = typeof navigator < "u" && /Android/i.test(navigator.userAgent)
      , h = typeof navigator < "u" && /PhantomJS/i.test(navigator.userAgent)
      , l = a || h;
    e.protocol = 3;
    var c = e.packets = {
        open: 0,
        close: 1,
        ping: 2,
        pong: 3,
        message: 4,
        upgrade: 5,
        noop: 6
    }
      , o = t(c)
      , u = {
        type: "error",
        data: "parser error"
    }
      , d = po();
    e.encodePacket = function(_, w, k, C) {
        typeof w == "function" && (C = w,
        w = !1),
        typeof k == "function" && (C = k,
        k = null);
        var F = _.data === void 0 ? void 0 : _.data.buffer || _.data;
        if (typeof ArrayBuffer < "u" && F instanceof ArrayBuffer)
            return v(_, w, C);
        if (typeof d < "u" && F instanceof d)
            return y(_, w, C);
        if (F && F.base64)
            return g(_, C);
        var x = c[_.type];
        return _.data !== void 0 && (x += k ? s.encode(String(_.data), {
            strict: !1
        }) : String(_.data)),
        C("" + x)
    }
    ;
    function g(_, w) {
        var k = "b" + e.packets[_.type] + _.data.data;
        return w(k)
    }
    function v(_, w, k) {
        if (!w)
            return e.encodeBase64Packet(_, k);
        var C = _.data
          , F = new Uint8Array(C)
          , x = new Uint8Array(1 + C.byteLength);
        x[0] = c[_.type];
        for (var E = 0; E < F.length; E++)
            x[E + 1] = F[E];
        return k(x.buffer)
    }
    function p(_, w, k) {
        if (!w)
            return e.encodeBase64Packet(_, k);
        var C = new FileReader;
        return C.onload = function() {
            e.encodePacket({
                type: _.type,
                data: C.result
            }, w, !0, k)
        }
        ,
        C.readAsArrayBuffer(_.data)
    }
    function y(_, w, k) {
        if (!w)
            return e.encodeBase64Packet(_, k);
        if (l)
            return p(_, w, k);
        var C = new Uint8Array(1);
        C[0] = c[_.type];
        var F = new d([C.buffer, _.data]);
        return k(F)
    }
    e.encodeBase64Packet = function(_, w) {
        var k = "b" + e.packets[_.type];
        if (typeof d < "u" && _.data instanceof d) {
            var C = new FileReader;
            return C.onload = function() {
                var D = C.result.split(",")[1];
                w(k + D)
            }
            ,
            C.readAsDataURL(_.data)
        }
        var F;
        try {
            F = String.fromCharCode.apply(null, new Uint8Array(_.data))
        } catch {
            for (var x = new Uint8Array(_.data), E = new Array(x.length), B = 0; B < x.length; B++)
                E[B] = x[B];
            F = String.fromCharCode.apply(null, E)
        }
        return k += btoa(F),
        w(k)
    }
    ,
    e.decodePacket = function(_, w, k) {
        if (_ === void 0)
            return u;
        if (typeof _ == "string") {
            if (_.charAt(0) === "b")
                return e.decodeBase64Packet(_.substr(1), w);
            if (k && (_ = m(_),
            _ === !1))
                return u;
            var F = _.charAt(0);
            return Number(F) != F || !o[F] ? u : _.length > 1 ? {
                type: o[F],
                data: _.substring(1)
            } : {
                type: o[F]
            }
        }
        var C = new Uint8Array(_)
          , F = C[0]
          , x = r(_, 1);
        return d && w === "blob" && (x = new d([x])),
        {
            type: o[F],
            data: x
        }
    }
    ;
    function m(_) {
        try {
            _ = s.decode(_, {
                strict: !1
            })
        } catch {
            return !1
        }
        return _
    }
    e.decodeBase64Packet = function(_, w) {
        var k = o[_.charAt(0)];
        if (!f)
            return {
                type: k,
                data: {
                    base64: !0,
                    data: _.substr(1)
                }
            };
        var C = f.decode(_.substr(1));
        return w === "blob" && d && (C = new d([C])),
        {
            type: k,
            data: C
        }
    }
    ,
    e.encodePayload = function(_, w, k) {
        typeof w == "function" && (k = w,
        w = null);
        var C = n(_);
        if (w && C)
            return d && !l ? e.encodePayloadAsBlob(_, k) : e.encodePayloadAsArrayBuffer(_, k);
        if (!_.length)
            return k("0:");
        function F(E) {
            return E.length + ":" + E
        }
        function x(E, B) {
            e.encodePacket(E, C ? w : !1, !1, function(D) {
                B(null, F(D))
            })
        }
        b(_, x, function(E, B) {
            return k(B.join(""))
        })
    }
    ;
    function b(_, w, k) {
        for (var C = new Array(_.length), F = i(_.length, k), x = function(B, D, R) {
            w(D, function($, M) {
                C[B] = M,
                R($, C)
            })
        }, E = 0; E < _.length; E++)
            x(E, _[E], F)
    }
    e.decodePayload = function(_, w, k) {
        if (typeof _ != "string")
            return e.decodePayloadAsBinary(_, w, k);
        typeof w == "function" && (k = w,
        w = null);
        var C;
        if (_ === "")
            return k(u, 0, 1);
        for (var F = "", x, E, B = 0, D = _.length; B < D; B++) {
            var R = _.charAt(B);
            if (R !== ":") {
                F += R;
                continue
            }
            if (F === "" || F != (x = Number(F)) || (E = _.substr(B + 1, x),
            F != E.length))
                return k(u, 0, 1);
            if (E.length) {
                if (C = e.decodePacket(E, w, !1),
                u.type === C.type && u.data === C.data)
                    return k(u, 0, 1);
                var $ = k(C, B + x, D);
                if ($ === !1)
                    return
            }
            B += x,
            F = ""
        }
        if (F !== "")
            return k(u, 0, 1)
    }
    ,
    e.encodePayloadAsArrayBuffer = function(_, w) {
        if (!_.length)
            return w(new ArrayBuffer(0));
        function k(C, F) {
            e.encodePacket(C, !0, !0, function(x) {
                return F(null, x)
            })
        }
        b(_, k, function(C, F) {
            var x = F.reduce(function(D, R) {
                var $;
                return typeof R == "string" ? $ = R.length : $ = R.byteLength,
                D + $.toString().length + $ + 2
            }, 0)
              , E = new Uint8Array(x)
              , B = 0;
            return F.forEach(function(D) {
                var R = typeof D == "string"
                  , $ = D;
                if (R) {
                    for (var oe = new Uint8Array(D.length), M = 0; M < D.length; M++)
                        oe[M] = D.charCodeAt(M);
                    $ = oe.buffer
                }
                R ? E[B++] = 0 : E[B++] = 1;
                for (var ie = $.byteLength.toString(), M = 0; M < ie.length; M++)
                    E[B++] = parseInt(ie[M]);
                E[B++] = 255;
                for (var oe = new Uint8Array($), M = 0; M < oe.length; M++)
                    E[B++] = oe[M]
            }),
            w(E.buffer)
        })
    }
    ,
    e.encodePayloadAsBlob = function(_, w) {
        function k(C, F) {
            e.encodePacket(C, !0, !0, function(x) {
                var E = new Uint8Array(1);
                if (E[0] = 1,
                typeof x == "string") {
                    for (var B = new Uint8Array(x.length), D = 0; D < x.length; D++)
                        B[D] = x.charCodeAt(D);
                    x = B.buffer,
                    E[0] = 0
                }
                for (var R = x instanceof ArrayBuffer ? x.byteLength : x.size, $ = R.toString(), M = new Uint8Array($.length + 1), D = 0; D < $.length; D++)
                    M[D] = parseInt($[D]);
                if (M[$.length] = 255,
                d) {
                    var ie = new d([E.buffer, M.buffer, x]);
                    F(null, ie)
                }
            })
        }
        b(_, k, function(C, F) {
            return w(new d(F))
        })
    }
    ,
    e.decodePayloadAsBinary = function(_, w, k) {
        typeof w == "function" && (k = w,
        w = null);
        for (var C = _, F = []; C.byteLength > 0; ) {
            for (var x = new Uint8Array(C), E = x[0] === 0, B = "", D = 1; x[D] !== 255; D++) {
                if (B.length > 310)
                    return k(u, 0, 1);
                B += x[D]
            }
            C = r(C, 2 + B.length),
            B = parseInt(B);
            var R = r(C, 0, B);
            if (E)
                try {
                    R = String.fromCharCode.apply(null, new Uint8Array(R))
                } catch {
                    var $ = new Uint8Array(R);
                    R = "";
                    for (var D = 0; D < $.length; D++)
                        R += String.fromCharCode($[D])
                }
            F.push(R),
            C = r(C, B)
        }
        var M = F.length;
        F.forEach(function(ie, oe) {
            k(e.decodePacket(ie, w, !0), oe, M)
        })
    }
}
)(fe);
var _t, xn;
function sn() {
    if (xn)
        return _t;
    xn = 1;
    var e = fe
      , t = it;
    _t = n;
    function n(r) {
        this.path = r.path,
        this.hostname = r.hostname,
        this.port = r.port,
        this.secure = r.secure,
        this.query = r.query,
        this.timestampParam = r.timestampParam,
        this.timestampRequests = r.timestampRequests,
        this.readyState = "",
        this.agent = r.agent || !1,
        this.socket = r.socket,
        this.enablesXDR = r.enablesXDR,
        this.withCredentials = r.withCredentials,
        this.pfx = r.pfx,
        this.key = r.key,
        this.passphrase = r.passphrase,
        this.cert = r.cert,
        this.ca = r.ca,
        this.ciphers = r.ciphers,
        this.rejectUnauthorized = r.rejectUnauthorized,
        this.forceNode = r.forceNode,
        this.isReactNative = r.isReactNative,
        this.extraHeaders = r.extraHeaders,
        this.localAddress = r.localAddress
    }
    return t(n.prototype),
    n.prototype.onError = function(r, i) {
        var s = new Error(r);
        return s.type = "TransportError",
        s.description = i,
        this.emit("error", s),
        this
    }
    ,
    n.prototype.open = function() {
        return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening",
        this.doOpen()),
        this
    }
    ,
    n.prototype.close = function() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    ,
    n.prototype.send = function(r) {
        if (this.readyState === "open")
            this.write(r);
        else
            throw new Error("Transport not open")
    }
    ,
    n.prototype.onOpen = function() {
        this.readyState = "open",
        this.writable = !0,
        this.emit("open")
    }
    ,
    n.prototype.onData = function(r) {
        var i = e.decodePacket(r, this.socket.binaryType);
        this.onPacket(i)
    }
    ,
    n.prototype.onPacket = function(r) {
        this.emit("packet", r)
    }
    ,
    n.prototype.onClose = function() {
        this.readyState = "closed",
        this.emit("close")
    }
    ,
    _t
}
var Me = {};
Me.encode = function(e) {
    var t = "";
    for (var n in e)
        e.hasOwnProperty(n) && (t.length && (t += "&"),
        t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
}
;
Me.decode = function(e) {
    for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
        var s = n[r].split("=");
        t[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
    }
    return t
}
;
var at = function(e, t) {
    var n = function() {};
    n.prototype = t.prototype,
    e.prototype = new n,
    e.prototype.constructor = e
}, Cr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Ye = 64, wr = {}, An = 0, ne = 0, En;
function qt(e) {
    var t = "";
    do
        t = Cr[e % Ye] + t,
        e = Math.floor(e / Ye);
    while (e > 0);
    return t
}
function go(e) {
    var t = 0;
    for (ne = 0; ne < e.length; ne++)
        t = t * Ye + wr[e.charAt(ne)];
    return t
}
function an() {
    var e = qt(+new Date);
    return e !== En ? (An = 0,
    En = e) : e + "." + qt(An++)
}
for (; ne < Ye; ne++)
    wr[Cr[ne]] = ne;
an.encode = qt;
an.decode = go;
var kr = an
  , Fr = sn()
  , yo = Me
  , xr = fe
  , vo = at
  , mo = kr
  , X = $e("engine.io-client:polling")
  , Ar = J
  , _o = function() {
    var e = rn
      , t = new e({
        xdomain: !1
    });
    return t.responseType != null
}();
function J(e) {
    var t = e && e.forceBase64;
    (!_o || t) && (this.supportsBinary = !1),
    Fr.call(this, e)
}
vo(J, Fr);
J.prototype.name = "polling";
J.prototype.doOpen = function() {
    this.poll()
}
;
J.prototype.pause = function(e) {
    var t = this;
    this.readyState = "pausing";
    function n() {
        X("paused"),
        t.readyState = "paused",
        e()
    }
    if (this.polling || !this.writable) {
        var r = 0;
        this.polling && (X("we are currently polling - waiting to pause"),
        r++,
        this.once("pollComplete", function() {
            X("pre-pause polling complete"),
            --r || n()
        })),
        this.writable || (X("we are currently writing - waiting to pause"),
        r++,
        this.once("drain", function() {
            X("pre-pause writing complete"),
            --r || n()
        }))
    } else
        n()
}
;
J.prototype.poll = function() {
    X("polling"),
    this.polling = !0,
    this.doPoll(),
    this.emit("poll")
}
;
J.prototype.onData = function(e) {
    var t = this;
    X("polling got data %s", e);
    var n = function(r, i, s) {
        if (t.readyState === "opening" && t.onOpen(),
        r.type === "close")
            return t.onClose(),
            !1;
        t.onPacket(r)
    };
    xr.decodePayload(e, this.socket.binaryType, n),
    this.readyState !== "closed" && (this.polling = !1,
    this.emit("pollComplete"),
    this.readyState === "open" ? this.poll() : X('ignoring poll - transport state "%s"', this.readyState))
}
;
J.prototype.doClose = function() {
    var e = this;
    function t() {
        X("writing close packet"),
        e.write([{
            type: "close"
        }])
    }
    this.readyState === "open" ? (X("transport open - closing"),
    t()) : (X("transport not open - deferring close"),
    this.once("open", t))
}
;
J.prototype.write = function(e) {
    var t = this;
    this.writable = !1;
    var n = function() {
        t.writable = !0,
        t.emit("drain")
    };
    xr.encodePayload(e, this.supportsBinary, function(r) {
        t.doWrite(r, n)
    })
}
;
J.prototype.uri = function() {
    var e = this.query || {}
      , t = this.secure ? "https" : "http"
      , n = "";
    this.timestampRequests !== !1 && (e[this.timestampParam] = mo()),
    !this.supportsBinary && !e.sid && (e.b64 = 1),
    e = yo.encode(e),
    this.port && (t === "https" && Number(this.port) !== 443 || t === "http" && Number(this.port) !== 80) && (n = ":" + this.port),
    e.length && (e = "?" + e);
    var r = this.hostname.indexOf(":") !== -1;
    return t + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
}
;
var bo = rn
  , Er = Ar
  , Co = it
  , wo = at
  , Nt = $e("engine.io-client:polling-xhr")
  , ko = nn;
on.exports = we;
on.exports.Request = j;
function Dn() {}
function we(e) {
    if (Er.call(this, e),
    this.requestTimeout = e.requestTimeout,
    this.extraHeaders = e.extraHeaders,
    typeof location < "u") {
        var t = location.protocol === "https:"
          , n = location.port;
        n || (n = t ? 443 : 80),
        this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port,
        this.xs = e.secure !== t
    }
}
wo(we, Er);
we.prototype.supportsBinary = !0;
we.prototype.request = function(e) {
    return e = e || {},
    e.uri = this.uri(),
    e.xd = this.xd,
    e.xs = this.xs,
    e.agent = this.agent || !1,
    e.supportsBinary = this.supportsBinary,
    e.enablesXDR = this.enablesXDR,
    e.withCredentials = this.withCredentials,
    e.pfx = this.pfx,
    e.key = this.key,
    e.passphrase = this.passphrase,
    e.cert = this.cert,
    e.ca = this.ca,
    e.ciphers = this.ciphers,
    e.rejectUnauthorized = this.rejectUnauthorized,
    e.requestTimeout = this.requestTimeout,
    e.extraHeaders = this.extraHeaders,
    new j(e)
}
;
we.prototype.doWrite = function(e, t) {
    var n = typeof e != "string" && e !== void 0
      , r = this.request({
        method: "POST",
        data: e,
        isBinary: n
    })
      , i = this;
    r.on("success", t),
    r.on("error", function(s) {
        i.onError("xhr post error", s)
    }),
    this.sendXhr = r
}
;
we.prototype.doPoll = function() {
    Nt("xhr poll");
    var e = this.request()
      , t = this;
    e.on("data", function(n) {
        t.onData(n)
    }),
    e.on("error", function(n) {
        t.onError("xhr poll error", n)
    }),
    this.pollXhr = e
}
;
function j(e) {
    this.method = e.method || "GET",
    this.uri = e.uri,
    this.xd = !!e.xd,
    this.xs = !!e.xs,
    this.async = e.async !== !1,
    this.data = e.data !== void 0 ? e.data : null,
    this.agent = e.agent,
    this.isBinary = e.isBinary,
    this.supportsBinary = e.supportsBinary,
    this.enablesXDR = e.enablesXDR,
    this.withCredentials = e.withCredentials,
    this.requestTimeout = e.requestTimeout,
    this.pfx = e.pfx,
    this.key = e.key,
    this.passphrase = e.passphrase,
    this.cert = e.cert,
    this.ca = e.ca,
    this.ciphers = e.ciphers,
    this.rejectUnauthorized = e.rejectUnauthorized,
    this.extraHeaders = e.extraHeaders,
    this.create()
}
Co(j.prototype);
j.prototype.create = function() {
    var e = {
        agent: this.agent,
        xdomain: this.xd,
        xscheme: this.xs,
        enablesXDR: this.enablesXDR
    };
    e.pfx = this.pfx,
    e.key = this.key,
    e.passphrase = this.passphrase,
    e.cert = this.cert,
    e.ca = this.ca,
    e.ciphers = this.ciphers,
    e.rejectUnauthorized = this.rejectUnauthorized;
    var t = this.xhr = new bo(e)
      , n = this;
    try {
        Nt("xhr open %s: %s", this.method, this.uri),
        t.open(this.method, this.uri, this.async);
        try {
            if (this.extraHeaders) {
                t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
                for (var r in this.extraHeaders)
                    this.extraHeaders.hasOwnProperty(r) && t.setRequestHeader(r, this.extraHeaders[r])
            }
        } catch {}
        if (this.method === "POST")
            try {
                this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
            } catch {}
        try {
            t.setRequestHeader("Accept", "*/*")
        } catch {}
        "withCredentials"in t && (t.withCredentials = this.withCredentials),
        this.requestTimeout && (t.timeout = this.requestTimeout),
        this.hasXDR() ? (t.onload = function() {
            n.onLoad()
        }
        ,
        t.onerror = function() {
            n.onError(t.responseText)
        }
        ) : t.onreadystatechange = function() {
            if (t.readyState === 2)
                try {
                    var i = t.getResponseHeader("Content-Type");
                    (n.supportsBinary && i === "application/octet-stream" || i === "application/octet-stream; charset=UTF-8") && (t.responseType = "arraybuffer")
                } catch {}
            t.readyState === 4 && (t.status === 200 || t.status === 1223 ? n.onLoad() : setTimeout(function() {
                n.onError(typeof t.status == "number" ? t.status : 0)
            }, 0))
        }
        ,
        Nt("xhr data %s", this.data),
        t.send(this.data)
    } catch (i) {
        setTimeout(function() {
            n.onError(i)
        }, 0);
        return
    }
    typeof document < "u" && (this.index = j.requestsCount++,
    j.requests[this.index] = this)
}
;
j.prototype.onSuccess = function() {
    this.emit("success"),
    this.cleanup()
}
;
j.prototype.onData = function(e) {
    this.emit("data", e),
    this.onSuccess()
}
;
j.prototype.onError = function(e) {
    this.emit("error", e),
    this.cleanup(!0)
}
;
j.prototype.cleanup = function(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = Dn : this.xhr.onreadystatechange = Dn,
        e)
            try {
                this.xhr.abort()
            } catch {}
        typeof document < "u" && delete j.requests[this.index],
        this.xhr = null
    }
}
;
j.prototype.onLoad = function() {
    var e;
    try {
        var t;
        try {
            t = this.xhr.getResponseHeader("Content-Type")
        } catch {}
        t === "application/octet-stream" || t === "application/octet-stream; charset=UTF-8" ? e = this.xhr.response || this.xhr.responseText : e = this.xhr.responseText
    } catch (n) {
        this.onError(n)
    }
    e != null && this.onData(e)
}
;
j.prototype.hasXDR = function() {
    return typeof XDomainRequest < "u" && !this.xs && this.enablesXDR
}
;
j.prototype.abort = function() {
    this.cleanup()
}
;
j.requestsCount = 0;
j.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", Sn);
    else if (typeof addEventListener == "function") {
        var Fo = "onpagehide"in ko ? "pagehide" : "unload";
        addEventListener(Fo, Sn, !1)
    }
}
function Sn() {
    for (var e in j.requests)
        j.requests.hasOwnProperty(e) && j.requests[e].abort()
}
var xo = on.exports, cn = Ar, Ao = at, Bn = nn, Eo = ke, Do = /\n/g, So = /\\n/g, qe;
function Bo() {}
function ke(e) {
    cn.call(this, e),
    this.query = this.query || {},
    qe || (qe = Bn.___eio = Bn.___eio || []),
    this.index = qe.length;
    var t = this;
    qe.push(function(n) {
        t.onData(n)
    }),
    this.query.j = this.index,
    typeof addEventListener == "function" && addEventListener("beforeunload", function() {
        t.script && (t.script.onerror = Bo)
    }, !1)
}
Ao(ke, cn);
ke.prototype.supportsBinary = !1;
ke.prototype.doClose = function() {
    this.script && (this.script.parentNode.removeChild(this.script),
    this.script = null),
    this.form && (this.form.parentNode.removeChild(this.form),
    this.form = null,
    this.iframe = null),
    cn.prototype.doClose.call(this)
}
;
ke.prototype.doPoll = function() {
    var e = this
      , t = document.createElement("script");
    this.script && (this.script.parentNode.removeChild(this.script),
    this.script = null),
    t.async = !0,
    t.src = this.uri(),
    t.onerror = function(i) {
        e.onError("jsonp poll error", i)
    }
    ;
    var n = document.getElementsByTagName("script")[0];
    n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t),
    this.script = t;
    var r = typeof navigator < "u" && /gecko/i.test(navigator.userAgent);
    r && setTimeout(function() {
        var i = document.createElement("iframe");
        document.body.appendChild(i),
        document.body.removeChild(i)
    }, 100)
}
;
ke.prototype.doWrite = function(e, t) {
    var n = this;
    if (!this.form) {
        var r = document.createElement("form"), i = document.createElement("textarea"), s = this.iframeId = "eio_iframe_" + this.index, f;
        r.className = "socketio",
        r.style.position = "absolute",
        r.style.top = "-1000px",
        r.style.left = "-1000px",
        r.target = s,
        r.method = "POST",
        r.setAttribute("accept-charset", "utf-8"),
        i.name = "d",
        r.appendChild(i),
        document.body.appendChild(r),
        this.form = r,
        this.area = i
    }
    this.form.action = this.uri();
    function a() {
        h(),
        t()
    }
    function h() {
        if (n.iframe)
            try {
                n.form.removeChild(n.iframe)
            } catch (c) {
                n.onError("jsonp polling iframe removal error", c)
            }
        try {
            var l = '<iframe src="javascript:0" name="' + n.iframeId + '">';
            f = document.createElement(l)
        } catch {
            f = document.createElement("iframe"),
            f.name = n.iframeId,
            f.src = "javascript:0"
        }
        f.id = n.iframeId,
        n.form.appendChild(f),
        n.iframe = f
    }
    h(),
    e = e.replace(So, `\\
`),
    this.area.value = e.replace(Do, "\\n");
    try {
        this.form.submit()
    } catch {}
    this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
        n.iframe.readyState === "complete" && a()
    }
    : this.iframe.onload = a
}
;
const Oo = {}
  , Ro = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Oo
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Dr = sr(Ro);
var un = sn(), $o = fe, Mo = Me, To = at, zo = kr, Po = $e("engine.io-client:websocket"), Qe, fn;
typeof WebSocket < "u" ? Qe = WebSocket : typeof self < "u" && (Qe = self.WebSocket || self.MozWebSocket);
if (typeof window > "u")
    try {
        fn = Dr
    } catch {}
var me = Qe || fn
  , jo = V;
function V(e) {
    var t = e && e.forceBase64;
    t && (this.supportsBinary = !1),
    this.perMessageDeflate = e.perMessageDeflate,
    this.usingBrowserWebSocket = Qe && !e.forceNode,
    this.protocols = e.protocols,
    this.usingBrowserWebSocket || (me = fn),
    un.call(this, e)
}
To(V, un);
V.prototype.name = "websocket";
V.prototype.supportsBinary = !0;
V.prototype.doOpen = function() {
    if (this.check()) {
        var e = this.uri()
          , t = this.protocols
          , n = {};
        this.isReactNative || (n.agent = this.agent,
        n.perMessageDeflate = this.perMessageDeflate,
        n.pfx = this.pfx,
        n.key = this.key,
        n.passphrase = this.passphrase,
        n.cert = this.cert,
        n.ca = this.ca,
        n.ciphers = this.ciphers,
        n.rejectUnauthorized = this.rejectUnauthorized),
        this.extraHeaders && (n.headers = this.extraHeaders),
        this.localAddress && (n.localAddress = this.localAddress);
        try {
            this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new me(e,t) : new me(e) : new me(e,t,n)
        } catch (r) {
            return this.emit("error", r)
        }
        this.ws.binaryType === void 0 && (this.supportsBinary = !1),
        this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0,
        this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer",
        this.addEventListeners()
    }
}
;
V.prototype.addEventListeners = function() {
    var e = this;
    this.ws.onopen = function() {
        e.onOpen()
    }
    ,
    this.ws.onclose = function() {
        e.onClose()
    }
    ,
    this.ws.onmessage = function(t) {
        e.onData(t.data)
    }
    ,
    this.ws.onerror = function(t) {
        e.onError("websocket error", t)
    }
}
;
V.prototype.write = function(e) {
    var t = this;
    this.writable = !1;
    for (var n = e.length, r = 0, i = n; r < i; r++)
        (function(f) {
            $o.encodePacket(f, t.supportsBinary, function(a) {
                if (!t.usingBrowserWebSocket) {
                    var h = {};
                    if (f.options && (h.compress = f.options.compress),
                    t.perMessageDeflate) {
                        var l = typeof a == "string" ? Buffer.byteLength(a) : a.length;
                        l < t.perMessageDeflate.threshold && (h.compress = !1)
                    }
                }
                try {
                    t.usingBrowserWebSocket ? t.ws.send(a) : t.ws.send(a, h)
                } catch {
                    Po("websocket closed before onclose event")
                }
                --n || s()
            })
        }
        )(e[r]);
    function s() {
        t.emit("flush"),
        setTimeout(function() {
            t.writable = !0,
            t.emit("drain")
        }, 0)
    }
}
;
V.prototype.onClose = function() {
    un.prototype.onClose.call(this)
}
;
V.prototype.doClose = function() {
    typeof this.ws < "u" && this.ws.close()
}
;
V.prototype.uri = function() {
    var e = this.query || {}
      , t = this.secure ? "wss" : "ws"
      , n = "";
    this.port && (t === "wss" && Number(this.port) !== 443 || t === "ws" && Number(this.port) !== 80) && (n = ":" + this.port),
    this.timestampRequests && (e[this.timestampParam] = zo()),
    this.supportsBinary || (e.b64 = 1),
    e = Mo.encode(e),
    e.length && (e = "?" + e);
    var r = this.hostname.indexOf(":") !== -1;
    return t + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
}
;
V.prototype.check = function() {
    return !!me && !("__initialize"in me && this.name === V.prototype.name)
}
;
var qo = rn
  , No = xo
  , Io = Eo
  , Lo = jo;
st.polling = Uo;
st.websocket = Lo;
function Uo(e) {
    var t, n = !1, r = !1, i = e.jsonp !== !1;
    if (typeof location < "u") {
        var s = location.protocol === "https:"
          , f = location.port;
        f || (f = s ? 443 : 80),
        n = e.hostname !== location.hostname || f !== e.port,
        r = e.secure !== s
    }
    if (e.xdomain = n,
    e.xscheme = r,
    t = new qo(e),
    "open"in t && !e.forceJSONP)
        return new No(e);
    if (!i)
        throw new Error("JSONP disabled");
    return new Io(e)
}
var Ho = [].indexOf
  , Sr = function(e, t) {
    if (Ho)
        return e.indexOf(t);
    for (var n = 0; n < e.length; ++n)
        if (e[n] === t)
            return n;
    return -1
}
  , Vo = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , Wo = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"]
  , Xo = function(t) {
    var n = t
      , r = t.indexOf("[")
      , i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    for (var s = Vo.exec(t || ""), f = {}, a = 14; a--; )
        f[Wo[a]] = s[a] || "";
    return r != -1 && i != -1 && (f.source = n,
    f.host = f.host.substring(1, f.host.length - 1).replace(/;/g, ":"),
    f.authority = f.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    f.ipv6uri = !0),
    f.pathNames = Zo(f, f.path),
    f.queryKey = Jo(f, f.query),
    f
};
function Zo(e, t) {
    var n = /\/{2,9}/g
      , r = t.replace(n, "/").split("/");
    return (t.substr(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.substr(t.length - 1, 1) == "/" && r.splice(r.length - 1, 1),
    r
}
function Jo(e, t) {
    var n = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, s) {
        i && (n[i] = s)
    }),
    n
}
var Go = st
  , Ko = it
  , z = $e("engine.io-client:socket")
  , Yo = Sr
  , Br = fe
  , On = Xo
  , Qo = Me
  , es = S;
function S(e, t) {
    if (!(this instanceof S))
        return new S(e,t);
    t = t || {},
    e && typeof e == "object" && (t = e,
    e = null),
    e ? (e = On(e),
    t.hostname = e.host,
    t.secure = e.protocol === "https" || e.protocol === "wss",
    t.port = e.port,
    e.query && (t.query = e.query)) : t.host && (t.hostname = On(t.host).host),
    this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:",
    t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
    this.agent = t.agent || !1,
    this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"),
    this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? 443 : 80),
    this.query = t.query || {},
    typeof this.query == "string" && (this.query = Qo.decode(this.query)),
    this.upgrade = t.upgrade !== !1,
    this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/",
    this.forceJSONP = !!t.forceJSONP,
    this.jsonp = t.jsonp !== !1,
    this.forceBase64 = !!t.forceBase64,
    this.enablesXDR = !!t.enablesXDR,
    this.withCredentials = t.withCredentials !== !1,
    this.timestampParam = t.timestampParam || "t",
    this.timestampRequests = t.timestampRequests,
    this.transports = t.transports || ["polling", "websocket"],
    this.transportOptions = t.transportOptions || {},
    this.readyState = "",
    this.writeBuffer = [],
    this.prevBufferLen = 0,
    this.policyPort = t.policyPort || 843,
    this.rememberUpgrade = t.rememberUpgrade || !1,
    this.binaryType = null,
    this.onlyBinaryUpgrades = t.onlyBinaryUpgrades,
    this.perMessageDeflate = t.perMessageDeflate !== !1 ? t.perMessageDeflate || {} : !1,
    this.perMessageDeflate === !0 && (this.perMessageDeflate = {}),
    this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024),
    this.pfx = t.pfx || null,
    this.key = t.key || null,
    this.passphrase = t.passphrase || null,
    this.cert = t.cert || null,
    this.ca = t.ca || null,
    this.ciphers = t.ciphers || null,
    this.rejectUnauthorized = t.rejectUnauthorized === void 0 ? !0 : t.rejectUnauthorized,
    this.forceNode = !!t.forceNode,
    this.isReactNative = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative",
    (typeof self > "u" || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders),
    t.localAddress && (this.localAddress = t.localAddress)),
    this.id = null,
    this.upgrades = null,
    this.pingInterval = null,
    this.pingTimeout = null,
    this.pingIntervalTimer = null,
    this.pingTimeoutTimer = null,
    this.open()
}
S.priorWebsocketSuccess = !1;
Ko(S.prototype);
S.protocol = Br.protocol;
S.Socket = S;
S.Transport = sn();
S.transports = st;
S.parser = fe;
S.prototype.createTransport = function(e) {
    z('creating transport "%s"', e);
    var t = ts(this.query);
    t.EIO = Br.protocol,
    t.transport = e;
    var n = this.transportOptions[e] || {};
    this.id && (t.sid = this.id);
    var r = new Go[e]({
        query: t,
        socket: this,
        agent: n.agent || this.agent,
        hostname: n.hostname || this.hostname,
        port: n.port || this.port,
        secure: n.secure || this.secure,
        path: n.path || this.path,
        forceJSONP: n.forceJSONP || this.forceJSONP,
        jsonp: n.jsonp || this.jsonp,
        forceBase64: n.forceBase64 || this.forceBase64,
        enablesXDR: n.enablesXDR || this.enablesXDR,
        withCredentials: n.withCredentials || this.withCredentials,
        timestampRequests: n.timestampRequests || this.timestampRequests,
        timestampParam: n.timestampParam || this.timestampParam,
        policyPort: n.policyPort || this.policyPort,
        pfx: n.pfx || this.pfx,
        key: n.key || this.key,
        passphrase: n.passphrase || this.passphrase,
        cert: n.cert || this.cert,
        ca: n.ca || this.ca,
        ciphers: n.ciphers || this.ciphers,
        rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
        perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
        extraHeaders: n.extraHeaders || this.extraHeaders,
        forceNode: n.forceNode || this.forceNode,
        localAddress: n.localAddress || this.localAddress,
        requestTimeout: n.requestTimeout || this.requestTimeout,
        protocols: n.protocols || void 0,
        isReactNative: this.isReactNative
    });
    return r
}
;
function ts(e) {
    var t = {};
    for (var n in e)
        e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}
S.prototype.open = function() {
    var e;
    if (this.rememberUpgrade && S.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
        e = "websocket";
    else if (this.transports.length === 0) {
        var t = this;
        setTimeout(function() {
            t.emit("error", "No transports available")
        }, 0);
        return
    } else
        e = this.transports[0];
    this.readyState = "opening";
    try {
        e = this.createTransport(e)
    } catch {
        this.transports.shift(),
        this.open();
        return
    }
    e.open(),
    this.setTransport(e)
}
;
S.prototype.setTransport = function(e) {
    z("setting transport %s", e.name);
    var t = this;
    this.transport && (z("clearing existing transport %s", this.transport.name),
    this.transport.removeAllListeners()),
    this.transport = e,
    e.on("drain", function() {
        t.onDrain()
    }).on("packet", function(n) {
        t.onPacket(n)
    }).on("error", function(n) {
        t.onError(n)
    }).on("close", function() {
        t.onClose("transport close")
    })
}
;
S.prototype.probe = function(e) {
    z('probing transport "%s"', e);
    var t = this.createTransport(e, {
        probe: 1
    })
      , n = !1
      , r = this;
    S.priorWebsocketSuccess = !1;
    function i() {
        if (r.onlyBinaryUpgrades) {
            var o = !this.supportsBinary && r.transport.supportsBinary;
            n = n || o
        }
        n || (z('probe transport "%s" opened', e),
        t.send([{
            type: "ping",
            data: "probe"
        }]),
        t.once("packet", function(u) {
            if (!n)
                if (u.type === "pong" && u.data === "probe") {
                    if (z('probe transport "%s" pong', e),
                    r.upgrading = !0,
                    r.emit("upgrading", t),
                    !t)
                        return;
                    S.priorWebsocketSuccess = t.name === "websocket",
                    z('pausing current transport "%s"', r.transport.name),
                    r.transport.pause(function() {
                        n || r.readyState !== "closed" && (z("changing transport and sending upgrade packet"),
                        c(),
                        r.setTransport(t),
                        t.send([{
                            type: "upgrade"
                        }]),
                        r.emit("upgrade", t),
                        t = null,
                        r.upgrading = !1,
                        r.flush())
                    })
                } else {
                    z('probe transport "%s" failed', e);
                    var d = new Error("probe error");
                    d.transport = t.name,
                    r.emit("upgradeError", d)
                }
        }))
    }
    function s() {
        n || (n = !0,
        c(),
        t.close(),
        t = null)
    }
    function f(o) {
        var u = new Error("probe error: " + o);
        u.transport = t.name,
        s(),
        z('probe transport "%s" failed because of error: %s', e, o),
        r.emit("upgradeError", u)
    }
    function a() {
        f("transport closed")
    }
    function h() {
        f("socket closed")
    }
    function l(o) {
        t && o.name !== t.name && (z('"%s" works - aborting "%s"', o.name, t.name),
        s())
    }
    function c() {
        t.removeListener("open", i),
        t.removeListener("error", f),
        t.removeListener("close", a),
        r.removeListener("close", h),
        r.removeListener("upgrading", l)
    }
    t.once("open", i),
    t.once("error", f),
    t.once("close", a),
    this.once("close", h),
    this.once("upgrading", l),
    t.open()
}
;
S.prototype.onOpen = function() {
    if (z("socket open"),
    this.readyState = "open",
    S.priorWebsocketSuccess = this.transport.name === "websocket",
    this.emit("open"),
    this.flush(),
    this.readyState === "open" && this.upgrade && this.transport.pause) {
        z("starting upgrade probes");
        for (var e = 0, t = this.upgrades.length; e < t; e++)
            this.probe(this.upgrades[e])
    }
}
;
S.prototype.onPacket = function(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
        switch (z('socket receive: type "%s", data "%s"', e.type, e.data),
        this.emit("packet", e),
        this.emit("heartbeat"),
        e.type) {
        case "open":
            this.onHandshake(JSON.parse(e.data));
            break;
        case "pong":
            this.setPing(),
            this.emit("pong");
            break;
        case "error":
            var t = new Error("server error");
            t.code = e.data,
            this.onError(t);
            break;
        case "message":
            this.emit("data", e.data),
            this.emit("message", e.data);
            break
        }
    else
        z('packet received with socket readyState "%s"', this.readyState)
}
;
S.prototype.onHandshake = function(e) {
    this.emit("handshake", e),
    this.id = e.sid,
    this.transport.query.sid = e.sid,
    this.upgrades = this.filterUpgrades(e.upgrades),
    this.pingInterval = e.pingInterval,
    this.pingTimeout = e.pingTimeout,
    this.onOpen(),
    this.readyState !== "closed" && (this.setPing(),
    this.removeListener("heartbeat", this.onHeartbeat),
    this.on("heartbeat", this.onHeartbeat))
}
;
S.prototype.onHeartbeat = function(e) {
    clearTimeout(this.pingTimeoutTimer);
    var t = this;
    t.pingTimeoutTimer = setTimeout(function() {
        t.readyState !== "closed" && t.onClose("ping timeout")
    }, e || t.pingInterval + t.pingTimeout)
}
;
S.prototype.setPing = function() {
    var e = this;
    clearTimeout(e.pingIntervalTimer),
    e.pingIntervalTimer = setTimeout(function() {
        z("writing ping packet - expecting pong within %sms", e.pingTimeout),
        e.ping(),
        e.onHeartbeat(e.pingTimeout)
    }, e.pingInterval)
}
;
S.prototype.ping = function() {
    var e = this;
    this.sendPacket("ping", function() {
        e.emit("ping")
    })
}
;
S.prototype.onDrain = function() {
    this.writeBuffer.splice(0, this.prevBufferLen),
    this.prevBufferLen = 0,
    this.writeBuffer.length === 0 ? this.emit("drain") : this.flush()
}
;
S.prototype.flush = function() {
    this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (z("flushing %d packets in socket", this.writeBuffer.length),
    this.transport.send(this.writeBuffer),
    this.prevBufferLen = this.writeBuffer.length,
    this.emit("flush"))
}
;
S.prototype.write = S.prototype.send = function(e, t, n) {
    return this.sendPacket("message", e, t, n),
    this
}
;
S.prototype.sendPacket = function(e, t, n, r) {
    if (typeof t == "function" && (r = t,
    t = void 0),
    typeof n == "function" && (r = n,
    n = null),
    !(this.readyState === "closing" || this.readyState === "closed")) {
        n = n || {},
        n.compress = n.compress !== !1;
        var i = {
            type: e,
            data: t,
            options: n
        };
        this.emit("packetCreate", i),
        this.writeBuffer.push(i),
        r && this.once("flush", r),
        this.flush()
    }
}
;
S.prototype.close = function() {
    if (this.readyState === "opening" || this.readyState === "open") {
        this.readyState = "closing";
        var e = this;
        this.writeBuffer.length ? this.once("drain", function() {
            this.upgrading ? r() : t()
        }) : this.upgrading ? r() : t()
    }
    function t() {
        e.onClose("forced close"),
        z("socket closing - telling transport to close"),
        e.transport.close()
    }
    function n() {
        e.removeListener("upgrade", n),
        e.removeListener("upgradeError", n),
        t()
    }
    function r() {
        e.once("upgrade", n),
        e.once("upgradeError", n)
    }
    return this
}
;
S.prototype.onError = function(e) {
    z("socket error %j", e),
    S.priorWebsocketSuccess = !1,
    this.emit("error", e),
    this.onClose("transport error", e)
}
;
S.prototype.onClose = function(e, t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        z('socket close with reason: "%s"', e);
        var n = this;
        clearTimeout(this.pingIntervalTimer),
        clearTimeout(this.pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        this.readyState = "closed",
        this.id = null,
        this.emit("close", e, t),
        n.writeBuffer = [],
        n.prevBufferLen = 0
    }
}
;
S.prototype.filterUpgrades = function(e) {
    for (var t = [], n = 0, r = e.length; n < r; n++)
        ~Yo(this.transports, e[n]) && t.push(e[n]);
    return t
}
;
tn.exports = es;
tn.exports.parser = fe;
var ns = tn.exports
  , Or = {
    exports: {}
}
  , Rr = {
    exports: {}
};
(function(e) {
    e.exports = t;
    function t(r) {
        if (r)
            return n(r)
    }
    function n(r) {
        for (var i in t.prototype)
            r[i] = t.prototype[i];
        return r
    }
    t.prototype.on = t.prototype.addEventListener = function(r, i) {
        return this._callbacks = this._callbacks || {},
        (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(i),
        this
    }
    ,
    t.prototype.once = function(r, i) {
        function s() {
            this.off(r, s),
            i.apply(this, arguments)
        }
        return s.fn = i,
        this.on(r, s),
        this
    }
    ,
    t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(r, i) {
        if (this._callbacks = this._callbacks || {},
        arguments.length == 0)
            return this._callbacks = {},
            this;
        var s = this._callbacks["$" + r];
        if (!s)
            return this;
        if (arguments.length == 1)
            return delete this._callbacks["$" + r],
            this;
        for (var f, a = 0; a < s.length; a++)
            if (f = s[a],
            f === i || f.fn === i) {
                s.splice(a, 1);
                break
            }
        return this
    }
    ,
    t.prototype.emit = function(r) {
        this._callbacks = this._callbacks || {};
        var i = [].slice.call(arguments, 1)
          , s = this._callbacks["$" + r];
        if (s) {
            s = s.slice(0);
            for (var f = 0, a = s.length; f < a; ++f)
                s[f].apply(this, i)
        }
        return this
    }
    ,
    t.prototype.listeners = function(r) {
        return this._callbacks = this._callbacks || {},
        this._callbacks["$" + r] || []
    }
    ,
    t.prototype.hasListeners = function(r) {
        return !!this.listeners(r).length
    }
}
)(Rr);
var $r = Rr.exports
  , rs = is;
function is(e, t) {
    var n = [];
    t = t || 0;
    for (var r = t || 0; r < e.length; r++)
        n[r - t] = e[r];
    return n
}
var Mr = os;
function os(e, t, n) {
    return e.on(t, n),
    {
        destroy: function() {
            e.removeListener(t, n)
        }
    }
}
var Rn = [].slice
  , Tr = function(e, t) {
    if (typeof t == "string" && (t = e[t]),
    typeof t != "function")
        throw new Error("bind() requires a function");
    var n = Rn.call(arguments, 2);
    return function() {
        return t.apply(e, n.concat(Rn.call(arguments)))
    }
}
  , ln = {};
ln.encode = function(e) {
    var t = "";
    for (var n in e)
        e.hasOwnProperty(n) && (t.length && (t += "&"),
        t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
}
;
ln.decode = function(e) {
    for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
        var s = n[r].split("=");
        t[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
    }
    return t
}
;
(function(e, t) {
    var n = rt
      , r = $r
      , i = rs
      , s = Mr
      , f = Tr
      , a = nt("socket.io-client:socket")
      , h = ln
      , l = mr;
    e.exports = u;
    var c = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1
    }
      , o = r.prototype.emit;
    function u(d, g, v) {
        this.io = d,
        this.nsp = g,
        this.json = this,
        this.ids = 0,
        this.acks = {},
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this.connected = !1,
        this.disconnected = !0,
        this.flags = {},
        v && v.query && (this.query = v.query),
        this.io.autoConnect && this.open()
    }
    r(u.prototype),
    u.prototype.subEvents = function() {
        if (!this.subs) {
            var d = this.io;
            this.subs = [s(d, "open", f(this, "onopen")), s(d, "packet", f(this, "onpacket")), s(d, "close", f(this, "onclose"))]
        }
    }
    ,
    u.prototype.open = u.prototype.connect = function() {
        return this.connected ? this : (this.subEvents(),
        this.io.open(),
        this.io.readyState === "open" && this.onopen(),
        this.emit("connecting"),
        this)
    }
    ,
    u.prototype.send = function() {
        var d = i(arguments);
        return d.unshift("message"),
        this.emit.apply(this, d),
        this
    }
    ,
    u.prototype.emit = function(d) {
        if (c.hasOwnProperty(d))
            return o.apply(this, arguments),
            this;
        var g = i(arguments)
          , v = {
            type: (this.flags.binary !== void 0 ? this.flags.binary : l(g)) ? n.BINARY_EVENT : n.EVENT,
            data: g
        };
        return v.options = {},
        v.options.compress = !this.flags || this.flags.compress !== !1,
        typeof g[g.length - 1] == "function" && (a("emitting packet with ack id %d", this.ids),
        this.acks[this.ids] = g.pop(),
        v.id = this.ids++),
        this.connected ? this.packet(v) : this.sendBuffer.push(v),
        this.flags = {},
        this
    }
    ,
    u.prototype.packet = function(d) {
        d.nsp = this.nsp,
        this.io.packet(d)
    }
    ,
    u.prototype.onopen = function() {
        if (a("transport is open - connecting"),
        this.nsp !== "/")
            if (this.query) {
                var d = typeof this.query == "object" ? h.encode(this.query) : this.query;
                a("sending connect packet with query %s", d),
                this.packet({
                    type: n.CONNECT,
                    query: d
                })
            } else
                this.packet({
                    type: n.CONNECT
                })
    }
    ,
    u.prototype.onclose = function(d) {
        a("close (%s)", d),
        this.connected = !1,
        this.disconnected = !0,
        delete this.id,
        this.emit("disconnect", d)
    }
    ,
    u.prototype.onpacket = function(d) {
        var g = d.nsp === this.nsp
          , v = d.type === n.ERROR && d.nsp === "/";
        if (!(!g && !v))
            switch (d.type) {
            case n.CONNECT:
                this.onconnect();
                break;
            case n.EVENT:
                this.onevent(d);
                break;
            case n.BINARY_EVENT:
                this.onevent(d);
                break;
            case n.ACK:
                this.onack(d);
                break;
            case n.BINARY_ACK:
                this.onack(d);
                break;
            case n.DISCONNECT:
                this.ondisconnect();
                break;
            case n.ERROR:
                this.emit("error", d.data);
                break
            }
    }
    ,
    u.prototype.onevent = function(d) {
        var g = d.data || [];
        a("emitting event %j", g),
        d.id != null && (a("attaching ack callback to event"),
        g.push(this.ack(d.id))),
        this.connected ? o.apply(this, g) : this.receiveBuffer.push(g)
    }
    ,
    u.prototype.ack = function(d) {
        var g = this
          , v = !1;
        return function() {
            if (!v) {
                v = !0;
                var p = i(arguments);
                a("sending ack %j", p),
                g.packet({
                    type: l(p) ? n.BINARY_ACK : n.ACK,
                    id: d,
                    data: p
                })
            }
        }
    }
    ,
    u.prototype.onack = function(d) {
        var g = this.acks[d.id];
        typeof g == "function" ? (a("calling ack %s with %j", d.id, d.data),
        g.apply(this, d.data),
        delete this.acks[d.id]) : a("bad ack %s", d.id)
    }
    ,
    u.prototype.onconnect = function() {
        this.connected = !0,
        this.disconnected = !1,
        this.emit("connect"),
        this.emitBuffered()
    }
    ,
    u.prototype.emitBuffered = function() {
        var d;
        for (d = 0; d < this.receiveBuffer.length; d++)
            o.apply(this, this.receiveBuffer[d]);
        for (this.receiveBuffer = [],
        d = 0; d < this.sendBuffer.length; d++)
            this.packet(this.sendBuffer[d]);
        this.sendBuffer = []
    }
    ,
    u.prototype.ondisconnect = function() {
        a("server disconnect (%s)", this.nsp),
        this.destroy(),
        this.onclose("io server disconnect")
    }
    ,
    u.prototype.destroy = function() {
        if (this.subs) {
            for (var d = 0; d < this.subs.length; d++)
                this.subs[d].destroy();
            this.subs = null
        }
        this.io.destroy(this)
    }
    ,
    u.prototype.close = u.prototype.disconnect = function() {
        return this.connected && (a("performing disconnect (%s)", this.nsp),
        this.packet({
            type: n.DISCONNECT
        })),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    ,
    u.prototype.compress = function(d) {
        return this.flags.compress = d,
        this
    }
    ,
    u.prototype.binary = function(d) {
        return this.flags.binary = d,
        this
    }
}
)(Or);
var zr = Or.exports
  , ss = Fe;
function Fe(e) {
    e = e || {},
    this.ms = e.min || 100,
    this.max = e.max || 1e4,
    this.factor = e.factor || 2,
    this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0,
    this.attempts = 0
}
Fe.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random()
          , n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n
    }
    return Math.min(e, this.max) | 0
}
;
Fe.prototype.reset = function() {
    this.attempts = 0
}
;
Fe.prototype.setMin = function(e) {
    this.ms = e
}
;
Fe.prototype.setMax = function(e) {
    this.max = e
}
;
Fe.prototype.setJitter = function(e) {
    this.jitter = e
}
;
var as = ns
  , cs = zr
  , us = $r
  , fs = rt
  , Q = Mr
  , pe = Tr
  , N = nt("socket.io-client:manager")
  , Pr = Sr
  , ls = ss
  , jr = Object.prototype.hasOwnProperty
  , $n = O;
function O(e, t) {
    if (!(this instanceof O))
        return new O(e,t);
    e && typeof e == "object" && (t = e,
    e = void 0),
    t = t || {},
    t.path = t.path || "/socket.io",
    this.nsps = {},
    this.subs = [],
    this.opts = t,
    this.reconnection(t.reconnection !== !1),
    this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
    this.reconnectionDelay(t.reconnectionDelay || 1e3),
    this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
    this.randomizationFactor(t.randomizationFactor || .5),
    this.backoff = new ls({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
    }),
    this.timeout(t.timeout == null ? 2e4 : t.timeout),
    this.readyState = "closed",
    this.uri = e,
    this.connecting = [],
    this.lastPing = null,
    this.encoding = !1,
    this.packetBuffer = [];
    var n = t.parser || fs;
    this.encoder = new n.Encoder,
    this.decoder = new n.Decoder,
    this.autoConnect = t.autoConnect !== !1,
    this.autoConnect && this.open()
}
O.prototype.emitAll = function() {
    this.emit.apply(this, arguments);
    for (var e in this.nsps)
        jr.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
}
;
O.prototype.updateSocketIds = function() {
    for (var e in this.nsps)
        jr.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
}
;
O.prototype.generateId = function(e) {
    return (e === "/" ? "" : e + "#") + this.engine.id
}
;
us(O.prototype);
O.prototype.reconnection = function(e) {
    return arguments.length ? (this._reconnection = !!e,
    this) : this._reconnection
}
;
O.prototype.reconnectionAttempts = function(e) {
    return arguments.length ? (this._reconnectionAttempts = e,
    this) : this._reconnectionAttempts
}
;
O.prototype.reconnectionDelay = function(e) {
    return arguments.length ? (this._reconnectionDelay = e,
    this.backoff && this.backoff.setMin(e),
    this) : this._reconnectionDelay
}
;
O.prototype.randomizationFactor = function(e) {
    return arguments.length ? (this._randomizationFactor = e,
    this.backoff && this.backoff.setJitter(e),
    this) : this._randomizationFactor
}
;
O.prototype.reconnectionDelayMax = function(e) {
    return arguments.length ? (this._reconnectionDelayMax = e,
    this.backoff && this.backoff.setMax(e),
    this) : this._reconnectionDelayMax
}
;
O.prototype.timeout = function(e) {
    return arguments.length ? (this._timeout = e,
    this) : this._timeout
}
;
O.prototype.maybeReconnectOnOpen = function() {
    !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
}
;
O.prototype.open = O.prototype.connect = function(e, t) {
    if (N("readyState %s", this.readyState),
    ~this.readyState.indexOf("open"))
        return this;
    N("opening %s", this.uri),
    this.engine = as(this.uri, this.opts);
    var n = this.engine
      , r = this;
    this.readyState = "opening",
    this.skipReconnect = !1;
    var i = Q(n, "open", function() {
        r.onopen(),
        e && e()
    })
      , s = Q(n, "error", function(h) {
        if (N("connect_error"),
        r.cleanup(),
        r.readyState = "closed",
        r.emitAll("connect_error", h),
        e) {
            var l = new Error("Connection error");
            l.data = h,
            e(l)
        } else
            r.maybeReconnectOnOpen()
    });
    if (this._timeout !== !1) {
        var f = this._timeout;
        N("connect attempt will timeout after %d", f);
        var a = setTimeout(function() {
            N("connect attempt timed out after %d", f),
            i.destroy(),
            n.close(),
            n.emit("error", "timeout"),
            r.emitAll("connect_timeout", f)
        }, f);
        this.subs.push({
            destroy: function() {
                clearTimeout(a)
            }
        })
    }
    return this.subs.push(i),
    this.subs.push(s),
    this
}
;
O.prototype.onopen = function() {
    N("open"),
    this.cleanup(),
    this.readyState = "open",
    this.emit("open");
    var e = this.engine;
    this.subs.push(Q(e, "data", pe(this, "ondata"))),
    this.subs.push(Q(e, "ping", pe(this, "onping"))),
    this.subs.push(Q(e, "pong", pe(this, "onpong"))),
    this.subs.push(Q(e, "error", pe(this, "onerror"))),
    this.subs.push(Q(e, "close", pe(this, "onclose"))),
    this.subs.push(Q(this.decoder, "decoded", pe(this, "ondecoded")))
}
;
O.prototype.onping = function() {
    this.lastPing = new Date,
    this.emitAll("ping")
}
;
O.prototype.onpong = function() {
    this.emitAll("pong", new Date - this.lastPing)
}
;
O.prototype.ondata = function(e) {
    this.decoder.add(e)
}
;
O.prototype.ondecoded = function(e) {
    this.emit("packet", e)
}
;
O.prototype.onerror = function(e) {
    N("error", e),
    this.emitAll("error", e)
}
;
O.prototype.socket = function(e, t) {
    var n = this.nsps[e];
    if (!n) {
        n = new cs(this,e,t),
        this.nsps[e] = n;
        var r = this;
        n.on("connecting", i),
        n.on("connect", function() {
            n.id = r.generateId(e)
        }),
        this.autoConnect && i()
    }
    function i() {
        ~Pr(r.connecting, n) || r.connecting.push(n)
    }
    return n
}
;
O.prototype.destroy = function(e) {
    var t = Pr(this.connecting, e);
    ~t && this.connecting.splice(t, 1),
    !this.connecting.length && this.close()
}
;
O.prototype.packet = function(e) {
    N("writing packet %j", e);
    var t = this;
    e.query && e.type === 0 && (e.nsp += "?" + e.query),
    t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0,
    this.encoder.encode(e, function(n) {
        for (var r = 0; r < n.length; r++)
            t.engine.write(n[r], e.options);
        t.encoding = !1,
        t.processPacketQueue()
    }))
}
;
O.prototype.processPacketQueue = function() {
    if (this.packetBuffer.length > 0 && !this.encoding) {
        var e = this.packetBuffer.shift();
        this.packet(e)
    }
}
;
O.prototype.cleanup = function() {
    N("cleanup");
    for (var e = this.subs.length, t = 0; t < e; t++) {
        var n = this.subs.shift();
        n.destroy()
    }
    this.packetBuffer = [],
    this.encoding = !1,
    this.lastPing = null,
    this.decoder.destroy()
}
;
O.prototype.close = O.prototype.disconnect = function() {
    N("disconnect"),
    this.skipReconnect = !0,
    this.reconnecting = !1,
    this.readyState === "opening" && this.cleanup(),
    this.backoff.reset(),
    this.readyState = "closed",
    this.engine && this.engine.close()
}
;
O.prototype.onclose = function(e) {
    N("onclose"),
    this.cleanup(),
    this.backoff.reset(),
    this.readyState = "closed",
    this.emit("close", e),
    this._reconnection && !this.skipReconnect && this.reconnect()
}
;
O.prototype.reconnect = function() {
    if (this.reconnecting || this.skipReconnect)
        return this;
    var e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
        N("reconnect failed"),
        this.backoff.reset(),
        this.emitAll("reconnect_failed"),
        this.reconnecting = !1;
    else {
        var t = this.backoff.duration();
        N("will wait %dms before reconnect attempt", t),
        this.reconnecting = !0;
        var n = setTimeout(function() {
            e.skipReconnect || (N("attempting reconnect"),
            e.emitAll("reconnect_attempt", e.backoff.attempts),
            e.emitAll("reconnecting", e.backoff.attempts),
            !e.skipReconnect && e.open(function(r) {
                r ? (N("reconnect attempt error"),
                e.reconnecting = !1,
                e.reconnect(),
                e.emitAll("reconnect_error", r.data)) : (N("reconnect success"),
                e.onreconnect())
            }))
        }, t);
        this.subs.push({
            destroy: function() {
                clearTimeout(n)
            }
        })
    }
}
;
O.prototype.onreconnect = function() {
    var e = this.backoff.attempts;
    this.reconnecting = !1,
    this.backoff.reset(),
    this.updateSocketIds(),
    this.emitAll("reconnect", e)
}
;
(function(e, t) {
    var n = Mi
      , r = rt
      , i = $n
      , s = nt("socket.io-client");
    e.exports = t = a;
    var f = t.managers = {};
    function a(h, l) {
        typeof h == "object" && (l = h,
        h = void 0),
        l = l || {};
        var c = n(h), o = c.source, u = c.id, d = c.path, g = f[u] && d in f[u].nsps, v = l.forceNew || l["force new connection"] || l.multiplex === !1 || g, p;
        return v ? (s("ignoring socket cache for %s", o),
        p = i(o, l)) : (f[u] || (s("new io instance for %s", o),
        f[u] = i(o, l)),
        p = f[u]),
        c.query && !l.query && (l.query = c.query),
        p.socket(c.path, l)
    }
    t.protocol = r.protocol,
    t.connect = a,
    t.Manager = $n,
    t.Socket = zr
}
)(Rt, Rt.exports);
var hs = Rt.exports
  , ct = {};
function ds(e, t) {
    return t = t || {},
    new Promise(function(n, r) {
        var i = new XMLHttpRequest
          , s = []
          , f = []
          , a = {}
          , h = function() {
            return {
                ok: (i.status / 100 | 0) == 2,
                statusText: i.statusText,
                status: i.status,
                url: i.responseURL,
                text: function() {
                    return Promise.resolve(i.responseText)
                },
                json: function() {
                    return Promise.resolve(i.responseText).then(JSON.parse)
                },
                blob: function() {
                    return Promise.resolve(new Blob([i.response]))
                },
                clone: h,
                headers: {
                    keys: function() {
                        return s
                    },
                    entries: function() {
                        return f
                    },
                    get: function(c) {
                        return a[c.toLowerCase()]
                    },
                    has: function(c) {
                        return c.toLowerCase()in a
                    }
                }
            }
        };
        for (var l in i.open(t.method || "get", e, !0),
        i.onload = function() {
            i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(c, o, u) {
                s.push(o = o.toLowerCase()),
                f.push([o, u]),
                a[o] = a[o] ? a[o] + "," + u : u
            }),
            n(h())
        }
        ,
        i.onerror = r,
        i.withCredentials = t.credentials == "include",
        t.headers)
            i.setRequestHeader(l, t.headers[l]);
        i.send(t.body || null)
    }
    )
}
const ps = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ds
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Mn = sr(ps);
var gs = self.fetch || (self.fetch = Mn.default || Mn)
  , ys = A && A.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ct, "__esModule", {
    value: !0
});
ct.fetchBalancerConfig = void 0;
var Ne = P
  , vs = ys(gs)
  , ms = function(e) {
    return (0,
    Ne.debug)("using balancer ".concat(e, " to get websocket url")),
    (0,
    vs.default)("".concat(e)).then(function(t) {
        return t.json()
    }).then(function(t) {
        return t != null && t.url && (t != null && t.token) ? ((0,
        Ne.debug)("balancer returns url ".concat(t == null ? void 0 : t.url, " and token ").concat(t == null ? void 0 : t.token)),
        t) : ((0,
        Ne.debug)("balancer returns invalid response"),
        null)
    }).catch(function(t) {
        return (0,
        Ne.debug)("failed to resolve url: ".concat(t.message)),
        null
    })
};
ct.fetchBalancerConfig = ms;
var ut = {}
  , _s = A && A.__extends || function() {
    var e = function(t, n) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(r, i) {
            r.__proto__ = i
        }
        || function(r, i) {
            for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s])
        }
        ,
        e(t, n)
    };
    return function(t, n) {
        if (typeof n != "function" && n !== null)
            throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);
        function r() {
            this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype,
        new r)
    }
}()
  , Tn = A && A.__spreadArray || function(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, i = t.length, s; r < i; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
  , bs = A && A.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ut, "__esModule", {
    value: !0
});
ut.SocketMock = void 0;
var bt = P
  , Cs = bs(hr)
  , ws = function(e) {
    _s(t, e);
    function t(n) {
        var r = e.call(this) || this;
        return r.options = n,
        r.id = "mock",
        r.connected = !1,
        r.disconnected = !0,
        r.binaryType = "blob",
        r
    }
    return t.prototype.open = function() {
        var n = this;
        return (0,
        bt.debug)("SocketIOMock: connect"),
        this.once("visitor.connect", function(r, i) {
            i(null, n.options.connectData)
        }),
        this.connected = !0,
        this.disconnected = !1,
        this.emit("connect"),
        this
    }
    ,
    t.prototype.close = function() {
        return (0,
        bt.debug)("SocketIOMock: disconnect"),
        this.connected = !1,
        this.disconnected = !1,
        this.emit("disconnect", "io client disconnect"),
        this
    }
    ,
    t.prototype.emit = function(n) {
        for (var r = [], i = 1; i < arguments.length; i++)
            r[i - 1] = arguments[i];
        return bt.debug.apply(void 0, Tn(["SocketIOMock: emit"], r, !1)),
        (n === "connect" || n === "disconnect" || n === "visitor.connect") && e.prototype.emit.apply(this, Tn([n], r, !1)),
        this
    }
    ,
    t.prototype.send = function() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
        return this.emit(event, n)
    }
    ,
    t.prototype.compress = function() {
        return this
    }
    ,
    t.prototype.connect = function() {
        return this.open()
    }
    ,
    t.prototype.disconnect = function() {
        return this.close()
    }
    ,
    t.prototype.hasListeners = function(n) {
        return this.listenerCount(n) === 0
    }
    ,
    t.prototype.addEventListener = function(n, r) {
        return this.addListener(n, r),
        this
    }
    ,
    t.prototype.removeEventListener = function(n, r) {
        return this.removeListener(n, r),
        this
    }
    ,
    t
}(Cs.default);
ut.SocketMock = ws;
(function(e) {
    var t = A && A.__assign || function() {
        return t = Object.assign || function(g) {
            for (var v, p = 1, y = arguments.length; p < y; p++) {
                v = arguments[p];
                for (var m in v)
                    Object.prototype.hasOwnProperty.call(v, m) && (g[m] = v[m])
            }
            return g
        }
        ,
        t.apply(this, arguments)
    }
      , n = A && A.__createBinding || (Object.create ? function(g, v, p, y) {
        y === void 0 && (y = p);
        var m = Object.getOwnPropertyDescriptor(v, p);
        (!m || ("get"in m ? !v.__esModule : m.writable || m.configurable)) && (m = {
            enumerable: !0,
            get: function() {
                return v[p]
            }
        }),
        Object.defineProperty(g, y, m)
    }
    : function(g, v, p, y) {
        y === void 0 && (y = p),
        g[y] = v[p]
    }
    )
      , r = A && A.__exportStar || function(g, v) {
        for (var p in g)
            p !== "default" && !Object.prototype.hasOwnProperty.call(v, p) && n(v, g, p)
    }
      , i = A && A.__awaiter || function(g, v, p, y) {
        function m(b) {
            return b instanceof p ? b : new p(function(_) {
                _(b)
            }
            )
        }
        return new (p || (p = Promise))(function(b, _) {
            function w(F) {
                try {
                    C(y.next(F))
                } catch (x) {
                    _(x)
                }
            }
            function k(F) {
                try {
                    C(y.throw(F))
                } catch (x) {
                    _(x)
                }
            }
            function C(F) {
                F.done ? b(F.value) : m(F.value).then(w, k)
            }
            C((y = y.apply(g, v || [])).next())
        }
        )
    }
      , s = A && A.__generator || function(g, v) {
        var p = {
            label: 0,
            sent: function() {
                if (b[0] & 1)
                    throw b[1];
                return b[1]
            },
            trys: [],
            ops: []
        }, y, m, b, _;
        return _ = {
            next: w(0),
            throw: w(1),
            return: w(2)
        },
        typeof Symbol == "function" && (_[Symbol.iterator] = function() {
            return this
        }
        ),
        _;
        function w(C) {
            return function(F) {
                return k([C, F])
            }
        }
        function k(C) {
            if (y)
                throw new TypeError("Generator is already executing.");
            for (; _ && (_ = 0,
            C[0] && (p = 0)),
            p; )
                try {
                    if (y = 1,
                    m && (b = C[0] & 2 ? m.return : C[0] ? m.throw || ((b = m.return) && b.call(m),
                    0) : m.next) && !(b = b.call(m, C[1])).done)
                        return b;
                    switch (m = 0,
                    b && (C = [C[0] & 2, b.value]),
                    C[0]) {
                    case 0:
                    case 1:
                        b = C;
                        break;
                    case 4:
                        return p.label++,
                        {
                            value: C[1],
                            done: !1
                        };
                    case 5:
                        p.label++,
                        m = C[1],
                        C = [0];
                        continue;
                    case 7:
                        C = p.ops.pop(),
                        p.trys.pop();
                        continue;
                    default:
                        if (b = p.trys,
                        !(b = b.length > 0 && b[b.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                            p = 0;
                            continue
                        }
                        if (C[0] === 3 && (!b || C[1] > b[0] && C[1] < b[3])) {
                            p.label = C[1];
                            break
                        }
                        if (C[0] === 6 && p.label < b[1]) {
                            p.label = b[1],
                            b = C;
                            break
                        }
                        if (b && p.label < b[2]) {
                            p.label = b[2],
                            p.ops.push(C);
                            break
                        }
                        b[2] && p.ops.pop(),
                        p.trys.pop();
                        continue
                    }
                    C = v.call(g, p)
                } catch (F) {
                    C = [6, F],
                    m = 0
                } finally {
                    y = b = 0
                }
            if (C[0] & 5)
                throw C[1];
            return {
                value: C[0] ? C[1] : void 0,
                done: !0
            }
        }
    }
      , f = A && A.__importDefault || function(g) {
        return g && g.__esModule ? g : {
            default: g
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.SocketError = void 0;
    var a = P
      , h = f(hr)
      , l = f(hs)
      , c = ct
      , o = {
        transports: ["websocket"],
        path: "/socket",
        reconnection: !0,
        reconnectionDelay: 1e3,
        reconnectionDelayMax: 5e3,
        reconnectionAttempts: Number.POSITIVE_INFINITY
    }
      , u = function() {
        function g(v) {
            this.options = v,
            this.initialized = !1,
            this.forceReconnect = !1,
            this.identity = null,
            this.connection = null,
            this.connectCallback = null,
            this.disconnectCallback = null,
            this.initData = null,
            this.internalReconnection = !1,
            this.internalReconnecting = !1,
            this.internalReconnectingAttempt = 0,
            this.emitter = new h.default,
            this.sendBuffer = [],
            this.options.options = t(t(t({}, o), this.options.options), {
                autoConnect: !1
            })
        }
        return g.prototype.initConnection = function() {
            return i(this, void 0, void 0, function() {
                var v;
                return s(this, function(p) {
                    switch (p.label) {
                    case 0:
                        if (this.connection)
                            throw new Error("Connection already exists");
                        return this.options.socket ? ((0,
                        a.debug)("using socket ".concat(this.options.socket.id)),
                        this.internalReconnection = !1,
                        this.setConnection(this.options.socket),
                        [3, 4]) : [3, 1];
                    case 1:
                        return this.options.balancerUrl ? [4, (0,
                        c.fetchBalancerConfig)(this.options.balancerUrl)] : [3, 3];
                    case 2:
                        return v = p.sent(),
                        (0,
                        a.debug)("creating socket to ".concat(v.url, " with token ").concat(v.token)),
                        this.internalReconnection = !0,
                        this.setConnection((0,
                        l.default)(v.url, t(t({}, this.options.options), {
                            autoConnect: !1,
                            reconnection: !1,
                            query: {
                                token: v.token
                            }
                        })), !0),
                        [3, 4];
                    case 3:
                        if (this.options.url)
                            (0,
                            a.debug)("creating socket to ".concat(this.options.url)),
                            this.internalReconnection = !1,
                            this.setConnection((0,
                            l.default)(this.options.url, t(t({}, this.options.options), {
                                autoConnect: !1
                            })));
                        else
                            throw new Error("Missing required parameter url");
                        p.label = 4;
                    case 4:
                        return [2]
                    }
                })
            })
        }
        ,
        g.prototype.setConnection = function(v, p) {
            var y = this;
            p === void 0 && (p = !1),
            this.connection = v,
            this.forceReconnect = !1,
            this.internalReconnection = p,
            v.on("connect_error", function(m) {
                y.internalReconnection && (y.connectCallback = null,
                (0,
                a.debug)("connection was not reconnected"),
                y.emitter.emit("reconnect_error", m),
                y.options.options.reconnectionAttempts > y.internalReconnectingAttempt + 1 ? y.reconnect(y.internalReconnectingAttempt + 1) : y.emitter.emit("reconnect_failed", y.internalReconnectingAttempt))
            }),
            v.on("connect", function() {
                (0,
                a.debug)("socket was connected"),
                y.initialized = !1,
                y.internalReconnecting ? ((0,
                a.debug)("connection is reconnected"),
                y.emitter.emit("reconnect"),
                y.internalReconnecting = !1,
                y.internalReconnectingAttempt = 0) : y.emitter.emit("connect"),
                y.initialize().then(function(m) {
                    return (0,
                    a.debug)("socket was initialized"),
                    y.onInitialized(m),
                    y.connectCallback && (y.connectCallback(null, m),
                    y.connectCallback = null),
                    m
                }).catch(function(m) {
                    (0,
                    a.debug)("socket was not initialized ", t({}, m)),
                    y.onInitializeError(m),
                    y.connectCallback && (y.connectCallback(m),
                    y.connectCallback = null)
                })
            }),
            v.on("disconnect", function(m) {
                (0,
                a.debug)("socket was disconnected reason='".concat(m, "'")),
                y.initialized = !1,
                (!y.internalReconnecting || y.internalReconnectingAttempt === 1) && setTimeout(function() {
                    y.emitter.emit("disconnect", m),
                    y.disconnectCallback && (y.disconnectCallback(),
                    y.disconnectCallback = null)
                }, 100),
                y.options.options.reconnection && y.internalReconnection && !y.internalReconnecting && (y.forceReconnect || m !== "io server disconnect") && y.reconnect()
            }),
            v.on("reconnecting", function(m) {
                y.emitter.emit("reconnecting", m)
            }),
            v.on("reconnect", function() {
                y.emitter.emit("reconnect")
            }),
            v.on("reconnect_attempt", function(m) {
                y.emitter.emit("reconnect_attempt", m)
            }),
            v.on("reconnect_error", function(m) {
                y.emitter.emit("reconnect_error", m)
            }),
            v.on("reconnect_failed", function() {
                y.emitter.emit("reconnect_failed")
            }),
            v.on("force_reconnect", function() {
                (0,
                a.debug)("received event force_reconnect, setting flag forceReconnect = true"),
                y.forceReconnect = !0
            })
        }
        ,
        g.prototype.getConnection = function() {
            return this.connection
        }
        ,
        g.prototype.isConnected = function() {
            var v;
            return ((v = this.connection) === null || v === void 0 ? void 0 : v.connected) || !1
        }
        ,
        g.prototype.isInitialized = function() {
            return this.initialized
        }
        ,
        g.prototype.getInitData = function() {
            return this.initData
        }
        ,
        g.prototype.connect = function() {
            return i(this, void 0, void 0, function() {
                var v = this;
                return s(this, function(p) {
                    switch (p.label) {
                    case 0:
                        return this.connection ? [3, 2] : [4, this.initConnection()];
                    case 1:
                        p.sent(),
                        p.label = 2;
                    case 2:
                        return [2, new Promise(function(y, m) {
                            v.initialized ? y(v.initData) : ((0,
                            a.debug)("starting connecting"),
                            v.connectCallback = (0,
                            a.createCallback)(y, m),
                            v.connection.open())
                        }
                        )]
                    }
                })
            })
        }
        ,
        g.prototype.disconnect = function() {
            var v = this;
            return new Promise(function(p, y) {
                !v.connection || v.connection.disconnected ? (v.connection = null,
                p()) : ((0,
                a.debug)("starting disconnecting"),
                v.disconnectCallback = (0,
                a.createCallback)(p, y),
                v.connection.close(),
                v.connection = null)
            }
            )
        }
        ,
        g.prototype.reconnect = function(v) {
            var p = this;
            return v === void 0 && (v = 1),
            this.internalReconnecting = !0,
            this.internalReconnectingAttempt = v,
            this.disconnect().then(function() {
                var y = Math.floor(Math.random() * (p.options.options.reconnectionDelayMax - p.options.options.reconnectionDelay) + p.options.options.reconnectionDelay);
                return (0,
                a.debug)("connection will reconnect in ".concat(y, "ms")),
                p.emitter.emit("reconnecting", v),
                new Promise(function(m) {
                    setTimeout(m, y)
                }
                )
            }).then(function() {
                return (0,
                a.debug)("connection is starting reconnect"),
                p.emitter.emit("reconnect_attempt", v),
                p.connect()
            })
        }
        ,
        g.prototype.initialize = function() {
            return new Promise(function(v) {
                v({})
            }
            )
        }
        ,
        g.prototype.onInitialized = function(v) {
            var p = this;
            this.initialized || (this.initialized = !0,
            this.initData = v,
            (0,
            a.debug)("emit initialized"),
            this.emitter.emit("initialized", v),
            setTimeout(function() {
                if (p.sendBuffer.length > 0) {
                    (0,
                    a.debug)("sending buffered ".concat(p.sendBuffer.length, " events"));
                    for (var y = 0; y < p.sendBuffer.length; y++) {
                        var m = p.sendBuffer[y];
                        p.connection.emit(m.name, m.data, m.callback)
                    }
                    p.sendBuffer = []
                }
            }, 1))
        }
        ,
        g.prototype.onInitializeError = function(v) {
            this.disconnect(),
            (0,
            a.debug)("emit initialize_error", t({}, v)),
            this.emitter.emit("initialize_error", v)
        }
        ,
        g.prototype.send = function(v, p, y) {
            this.initialized ? this.connection.emit(v, p, y) : this.sendBuffer.push({
                name: v,
                data: p,
                callback: y
            })
        }
        ,
        g.prototype.on = function(v, p) {
            return this.emitter.on(v, p),
            this
        }
        ,
        g.prototype.once = function(v, p) {
            return this.emitter.once(v, p),
            this
        }
        ,
        g.prototype.removeAllListeners = function() {
            for (var v, p = [], y = 0; y < arguments.length; y++)
                p[y] = arguments[y];
            return (v = this.emitter).removeAllListeners.apply(v, p),
            this
        }
        ,
        g
    }();
    e.default = u;
    var d = P;
    Object.defineProperty(e, "SocketError", {
        enumerable: !0,
        get: function() {
            return d.SocketError
        }
    }),
    r(ut, e)
}
)(cr);
(function(e) {
    var t = A && A.__extends || function() {
        var l = function(c, o) {
            return l = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(u, d) {
                u.__proto__ = d
            }
            || function(u, d) {
                for (var g in d)
                    Object.prototype.hasOwnProperty.call(d, g) && (u[g] = d[g])
            }
            ,
            l(c, o)
        };
        return function(c, o) {
            if (typeof o != "function" && o !== null)
                throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
            l(c, o);
            function u() {
                this.constructor = c
            }
            c.prototype = o === null ? Object.create(o) : (u.prototype = o.prototype,
            new u)
        }
    }()
      , n = A && A.__assign || function() {
        return n = Object.assign || function(l) {
            for (var c, o = 1, u = arguments.length; o < u; o++) {
                c = arguments[o];
                for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (l[d] = c[d])
            }
            return l
        }
        ,
        n.apply(this, arguments)
    }
      , r = A && A.__awaiter || function(l, c, o, u) {
        function d(g) {
            return g instanceof o ? g : new o(function(v) {
                v(g)
            }
            )
        }
        return new (o || (o = Promise))(function(g, v) {
            function p(b) {
                try {
                    m(u.next(b))
                } catch (_) {
                    v(_)
                }
            }
            function y(b) {
                try {
                    m(u.throw(b))
                } catch (_) {
                    v(_)
                }
            }
            function m(b) {
                b.done ? g(b.value) : d(b.value).then(p, y)
            }
            m((u = u.apply(l, c || [])).next())
        }
        )
    }
      , i = A && A.__generator || function(l, c) {
        var o = {
            label: 0,
            sent: function() {
                if (g[0] & 1)
                    throw g[1];
                return g[1]
            },
            trys: [],
            ops: []
        }, u, d, g, v;
        return v = {
            next: p(0),
            throw: p(1),
            return: p(2)
        },
        typeof Symbol == "function" && (v[Symbol.iterator] = function() {
            return this
        }
        ),
        v;
        function p(m) {
            return function(b) {
                return y([m, b])
            }
        }
        function y(m) {
            if (u)
                throw new TypeError("Generator is already executing.");
            for (; v && (v = 0,
            m[0] && (o = 0)),
            o; )
                try {
                    if (u = 1,
                    d && (g = m[0] & 2 ? d.return : m[0] ? d.throw || ((g = d.return) && g.call(d),
                    0) : d.next) && !(g = g.call(d, m[1])).done)
                        return g;
                    switch (d = 0,
                    g && (m = [m[0] & 2, g.value]),
                    m[0]) {
                    case 0:
                    case 1:
                        g = m;
                        break;
                    case 4:
                        return o.label++,
                        {
                            value: m[1],
                            done: !1
                        };
                    case 5:
                        o.label++,
                        d = m[1],
                        m = [0];
                        continue;
                    case 7:
                        m = o.ops.pop(),
                        o.trys.pop();
                        continue;
                    default:
                        if (g = o.trys,
                        !(g = g.length > 0 && g[g.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                            o = 0;
                            continue
                        }
                        if (m[0] === 3 && (!g || m[1] > g[0] && m[1] < g[3])) {
                            o.label = m[1];
                            break
                        }
                        if (m[0] === 6 && o.label < g[1]) {
                            o.label = g[1],
                            g = m;
                            break
                        }
                        if (g && o.label < g[2]) {
                            o.label = g[2],
                            o.ops.push(m);
                            break
                        }
                        g[2] && o.ops.pop(),
                        o.trys.pop();
                        continue
                    }
                    m = c.call(l, o)
                } catch (b) {
                    m = [6, b],
                    d = 0
                } finally {
                    u = g = 0
                }
            if (m[0] & 5)
                throw m[1];
            return {
                value: m[0] ? m[1] : void 0,
                done: !0
            }
        }
    }
      , s = A && A.__importDefault || function(l) {
        return l && l.__esModule ? l : {
            default: l
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.WebsocketVisitorClient = void 0;
    var f = s(cr)
      , a = P
      , h = function(l) {
        t(c, l);
        function c(o) {
            var u = l.call(this, o.connection) || this;
            return u.serverVersion = null,
            u.updatedValues = {},
            u.connectData = o.data,
            u.identity = null,
            u
        }
        return c.prototype.setConnection = function(o) {
            l.prototype.setConnection.call(this, o),
            o.on("server.error", (0,
            a.bound)(this, "onServerError")),
            o.on("account.updated", (0,
            a.createEmitter)(this.emitter, "account.updated")),
            o.on("agent.updated", (0,
            a.createEmitter)(this.emitter, "agent.updated")),
            o.on("agent.status_updated", (0,
            a.createEmitter)(this.emitter, "agent.status_updated")),
            o.on("agent.removed", (0,
            a.createEmitter)(this.emitter, "agent.removed")),
            o.on("visitor.updated", (0,
            a.bound)(this, "onVisitorUpdated")),
            o.on("chat.updated", (0,
            a.createEmitter)(this.emitter, "chat.updated")),
            o.on("chat.agent_joined", (0,
            a.createEmitter)(this.emitter, "chat.agent_joined")),
            o.on("chat.agent_assigned", (0,
            a.createEmitter)(this.emitter, "chat.agent_assigned")),
            o.on("chat.agent_unassigned", (0,
            a.createEmitter)(this.emitter, "chat.agent_unassigned")),
            o.on("chat.agent_left", (0,
            a.createEmitter)(this.emitter, "chat.agent_left")),
            o.on("chat.opened", (0,
            a.createEmitter)(this.emitter, "chat.opened")),
            o.on("chat.served", (0,
            a.createEmitter)(this.emitter, "chat.served")),
            o.on("chat.closed", (0,
            a.createEmitter)(this.emitter, "chat.closed")),
            o.on("chat.visitor_closed", (0,
            a.createEmitter)(this.emitter, "chat.visitor_closed")),
            o.on("chat.message_received", (0,
            a.createEmitter)(this.emitter, "chat.message_received")),
            o.on("chat.message_updated", (0,
            a.createEmitter)(this.emitter, "chat.message_updated")),
            o.on("chat.agent_typing", (0,
            a.createEmitter)(this.emitter, "chat.agent_typing")),
            o.on("chat.rated", (0,
            a.createEmitter)(this.emitter, "chat.rated")),
            o.on("chat.contact_read", (0,
            a.createEmitter)(this.emitter, "chat.contact_read")),
            o.on("chat.deleted", (0,
            a.createEmitter)(this.emitter, "chat.deleted")),
            o.on("chat.transcript_pdf", (0,
            a.createEmitter)(this.emitter, "chat.transcript_pdf")),
            o.on("contact.acquired", (0,
            a.createEmitter)(this.emitter, "contact.acquired"))
        }
        ,
        c.prototype.on = function(o, u) {
            return this.emitter.on(o, u),
            this
        }
        ,
        c.prototype.once = function(o, u) {
            return this.emitter.once(o, u),
            this
        }
        ,
        c.prototype.getId = function() {
            return this.identity ? this.identity.id : null
        }
        ,
        c.prototype.getIdentity = function() {
            return this.identity
        }
        ,
        c.prototype.connect = function() {
            return l.prototype.connect.call(this)
        }
        ,
        c.prototype.disconnect = function(o) {
            return o === void 0 && (o = !1),
            r(this, void 0, void 0, function() {
                var u = this;
                return i(this, function(d) {
                    switch (d.label) {
                    case 0:
                        return o ? [4, new Promise(function(g, v) {
                            u.send("visitor.logout", {}, (0,
                            a.createCallback)(g, v))
                        }
                        )] : [3, 2];
                    case 1:
                        d.sent(),
                        d.label = 2;
                    case 2:
                        return [2, l.prototype.disconnect.call(this)]
                    }
                })
            })
        }
        ,
        c.prototype.update = function(o) {
            o === void 0 && (o = {}),
            this.checkServerVersion();
            for (var u in o)
                this.identity[u] = o[u],
                this.updatedValues[u] = o[u];
            this.saveVisitorValues()
        }
        ,
        c.prototype.authenticate = function(o) {
            var u = this;
            return this.checkServerVersion(),
            new Promise(function(d, g) {
                u.send("visitor.authenticate", {
                    values: o
                }, (0,
                a.createCallback)(d, g))
            }
            )
        }
        ,
        c.prototype.notify = function(o, u) {
            var d = this;
            return u === void 0 && (u = null),
            this.checkServerVersion(),
            new Promise(function(g, v) {
                d.send("visitor.notify", {
                    name: o,
                    value: u
                }, (0,
                a.createCallback)(g, v))
            }
            )
        }
        ,
        c.prototype.chatRead = function() {
            this.checkServerVersion(),
            this.send("chat.read", null)
        }
        ,
        c.prototype.chatTyping = function(o, u) {
            u === void 0 && (u = null),
            this.checkServerVersion(),
            this.send("chat.typing", {
                typing: {
                    is: o,
                    text: u
                }
            })
        }
        ,
        c.prototype.chatMessage = function(o) {
            var u = this;
            return this.checkServerVersion(),
            new Promise(function(d, g) {
                u.send("chat.message", o, (0,
                a.createCallback)(d, g))
            }
            )
        }
        ,
        c.prototype.chatClose = function(o) {
            o === void 0 && (o = null),
            this.checkServerVersion(),
            this.send("chat.close", {
                type: o
            })
        }
        ,
        c.prototype.chatUploadInit = function() {
            var o = this;
            return this.checkServerVersion(),
            new Promise(function(u, d) {
                o.send("chat.upload_init", null, (0,
                a.createCallback)(u, d))
            }
            )
        }
        ,
        c.prototype.chatUploadFinish = function(o) {
            var u = this;
            return this.checkServerVersion(),
            new Promise(function(d, g) {
                u.send("chat.upload_finish", {
                    uploadToken: o
                }, (0,
                a.createCallback)(d, g))
            }
            )
        }
        ,
        c.prototype.chatTranscript = function(o, u) {
            var d = this;
            return this.checkServerVersion(),
            new Promise(function(g, v) {
                d.send("chat.transcript", {
                    email: o,
                    lang: u
                }, (0,
                a.createCallback)(g, v))
            }
            )
        }
        ,
        c.prototype.chatRateInit = function() {
            var o = this;
            return this.checkServerVersion(),
            new Promise(function(u, d) {
                o.send("chat.rate_init", null, (0,
                a.createCallback)(u, d))
            }
            )
        }
        ,
        c.prototype.chatRate = function(o) {
            var u = this;
            return this.checkServerVersion(),
            new Promise(function(d, g) {
                u.send("chat.rate", o, (0,
                a.createCallback)(d, g))
            }
            )
        }
        ,
        c.prototype.chatTranscriptPdf = function() {
            var o = this;
            return this.checkServerVersion(),
            new Promise(function(u, d) {
                o.send("chat.transcript_pdf", null, (0,
                a.createCallback)(u, d))
            }
            )
        }
        ,
        c.prototype.visitorConnect = function() {
            var o = this
              , u = n({
                version: c.CLIENT_VERSION
            }, this.connectData);
            for (var d in this.updatedValues)
                u[d] = this.updatedValues[d];
            if (this.updatedValues = {},
            this.identity)
                for (var d in this.identity)
                    ["bannedAt", "chatId", "status"].includes(d) || (u[d] = this.identity[d]);
            return this.emitter.emit("initialize", u),
            new Promise(function(g, v) {
                o.connection.emit("visitor.connect", u, (0,
                a.createCallback)(g, v))
            }
            )
        }
        ,
        c.prototype.visitorDisconnect = function() {
            var o = this;
            return new Promise(function(u, d) {
                o.connection.emit("visitor.disconnect", {}, (0,
                a.createCallback)(u, d))
            }
            )
        }
        ,
        c.prototype.onVisitorUpdated = function(o) {
            var u = {};
            for (var d in o.changes)
                c.identityProperties.includes(d) && (this.identity && (this.identity[d] = o.changes[d]),
                u[d] = o.changes[d]);
            Object.getOwnPropertyNames(u).length > 0 && this.emitter.emit("visitor.updated", u)
        }
        ,
        c.prototype.onServerError = function(o) {
            var u = (0,
            a.createSocketError)(o);
            this.emitter.emit("error", u)
        }
        ,
        c.prototype.initialize = function() {
            var o = this;
            return this.visitorConnect().then(function(u) {
                return o.serverVersion = u.serverVersion,
                o.identity = n(n({}, u.visitor), {
                    variables: n({}, u.visitor.variables)
                }),
                u
            })
        }
        ,
        c.prototype.saveVisitorValues = function() {
            var o = this;
            this.initialized && setTimeout(function() {
                if (!(!o.initialized || Object.getOwnPropertyNames(o.updatedValues).length === 0)) {
                    var u = {};
                    for (var d in o.updatedValues)
                        u[d] = o.updatedValues[d];
                    o.send("visitor.update", {
                        values: u
                    }),
                    o.updatedValues = {}
                }
            }, 1)
        }
        ,
        c.prototype.checkServerVersion = function() {
            if (this.serverVersion === null)
                throw new Error("Client not yet connected to server")
        }
        ,
        c.CLIENT_VERSION = 6,
        c.identityProperties = ["id", "name", "email", "phone", "chatId", "variables", "lang", "group", "bannedAt", "triggerable", "visits", "gdprApproved"],
        c
    }(f.default);
    e.WebsocketVisitorClient = h,
    function(l) {
        (function(c) {
            c.WidgetOpen = "widget_open",
            c.WidgetShow = "widget_show",
            c.VisitorActive = "visitor_active",
            c.VisitorInactive = "visitor_inactive"
        }
        )(l.EventName || (l.EventName = {}))
    }(h = e.WebsocketVisitorClient || (e.WebsocketVisitorClient = {})),
    e.WebsocketVisitorClient = h
}
)(Ot);
var qr = {};
Object.defineProperty(qr, "__esModule", {
    value: !0
});
var Nr = {};
Object.defineProperty(Nr, "__esModule", {
    value: !0
});
var T = {};
Object.defineProperty(T, "__esModule", {
    value: !0
});
T.MessageDeliveryFailReason = T.MessageDeliveryStatus = T.AgentDevicePlatform = T.AgentDeviceType = T.VisitorStatus = T.ChatReadInfoType = T.ChatStatus = T.AgentStatus = T.AccountStatus = void 0;
T.AccountStatus = {
    Online: "online",
    Offline: "offline"
};
T.AgentStatus = {
    Online: "online",
    Offline: "offline"
};
T.ChatStatus = {
    Pending: "pending",
    Open: "open",
    Closed: "closed",
    Served: "served"
};
T.ChatReadInfoType = {
    Agent: "agent",
    Contact: "contact"
};
T.VisitorStatus = {
    Active: "active",
    Clicked: "clicked",
    Idle: "idle",
    Served: "served",
    Unserved: "unserved",
    Triggered: "triggered"
};
T.AgentDeviceType = {
    Browser: "browser",
    Mobile: "mobile",
    Xmpp: "xmpp",
    Other: "other"
};
T.AgentDevicePlatform = {
    IOS: "ios",
    ANDROID: "android"
};
T.MessageDeliveryStatus = {
    Ok: "ok",
    PermanentFail: "permanent_fail",
    TemporaryFail: "temporary_fail",
    Complained: "complained",
    Seen: "seen"
};
T.MessageDeliveryFailReason = {
    Facebook24hWindow: "facebook.outside_allowed_window"
};
(function(e) {
    var t = A && A.__createBinding || (Object.create ? function(s, f, a, h) {
        h === void 0 && (h = a);
        var l = Object.getOwnPropertyDescriptor(f, a);
        (!l || ("get"in l ? !f.__esModule : l.writable || l.configurable)) && (l = {
            enumerable: !0,
            get: function() {
                return f[a]
            }
        }),
        Object.defineProperty(s, h, l)
    }
    : function(s, f, a, h) {
        h === void 0 && (h = a),
        s[h] = f[a]
    }
    )
      , n = A && A.__exportStar || function(s, f) {
        for (var a in s)
            a !== "default" && !Object.prototype.hasOwnProperty.call(f, a) && t(f, s, a)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.SocketError = e.default = void 0;
    var r = Ot;
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return r.WebsocketVisitorClient
        }
    }),
    n(Ot, e),
    n(qr, e),
    n(Nr, e);
    var i = P;
    Object.defineProperty(e, "SocketError", {
        enumerable: !0,
        get: function() {
            return i.SocketError
        }
    }),
    n(T, e)
}
)(ar);
const mc = Yt(ar);
var ks = {}
  , Ir = {};
Object.defineProperty(Ir, "__esModule", {
    value: !0
});
var ft = {};
Object.defineProperty(ft, "__esModule", {
    value: !0
});
ft.CardsLayout = void 0;
ft.CardsLayout = {
    Grid: "grid",
    Carousel: "carousel"
};
var Lr = {};
Object.defineProperty(Lr, "__esModule", {
    value: !0
});
var I = {};
Object.defineProperty(I, "__esModule", {
    value: !0
});
I.ChannelType = I.MessageSubType = I.MessageType = I.AttachmentInvalidReason = I.AttachmentType = I.MessageActionType = void 0;
I.MessageActionType = {
    Text: "text",
    OpenUrl: "open_url"
};
I.AttachmentType = {
    Card: "card",
    Cards: "cards",
    File: "file",
    Image: "image",
    Media: "media",
    Invalid: "invalid"
};
I.AttachmentInvalidReason = {
    InvalidSize: "invalid_size",
    InvalidType: "invalid_type"
};
I.MessageType = {
    Message: "message",
    Event: "event",
    Help: "help"
};
I.MessageSubType = {
    Agent: "agent",
    Contact: "contact",
    Trigger: "trigger",
    Bot: "bot",
    System: "system",
    AgentExternal: "agent_external",
    FoundEmail: "found_email",
    ChatResolve: "chat_resolve"
};
I.ChannelType = {
    Default: "default",
    Email: "email",
    FacebookMessenger: "facebook_messenger",
    Smartsupp: "smartsupp"
};
var Ur = {};
Object.defineProperty(Ur, "__esModule", {
    value: !0
});
var Hr = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.MessageContentType = e.MessageContent = void 0;
    var t;
    (function(n) {
        (function(r) {
            r.Type = {
                Text: "text",
                Upload: "upload",
                RateForm: "rate_form"
            }
        }
        )(n.Message || (n.Message = {})),
        function(r) {
            r.Type = {
                AgentJoin: "agent_join",
                AgentAssign: "agent_assign",
                AgentUnassign: "agent_unassign",
                AgentLeave: "agent_leave",
                ChatClose: "chat_close",
                ChatVisitorClose: "chat_visitor_close"
            }
        }(n.Event || (n.Event = {})),
        function(r) {
            r.Type = {
                Text: "text",
                FoundEmail: "found_email"
            }
        }(n.Help || (n.Help = {}))
    }
    )(t = e.MessageContent || (e.MessageContent = {})),
    e.MessageContentType = {
        ...t.Message.Type,
        ...t.Event.Type,
        ...t.Help.Type
    }
}
)(Hr);
var Vr = {};
Object.defineProperty(Vr, "__esModule", {
    value: !0
});
(function(e) {
    var t = A && A.__createBinding || (Object.create ? function(r, i, s, f) {
        f === void 0 && (f = s);
        var a = Object.getOwnPropertyDescriptor(i, s);
        (!a || ("get"in a ? !i.__esModule : a.writable || a.configurable)) && (a = {
            enumerable: !0,
            get: function() {
                return i[s]
            }
        }),
        Object.defineProperty(r, f, a)
    }
    : function(r, i, s, f) {
        f === void 0 && (f = s),
        r[f] = i[s]
    }
    )
      , n = A && A.__exportStar || function(r, i) {
        for (var s in r)
            s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, r, s)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(Ir, e),
    n(ft, e),
    n(Lr, e),
    n(I, e),
    n(Ur, e),
    n(Hr, e),
    n(Vr, e)
}
)(ks);
/*! js-cookie v3.0.5 | MIT */
function Ie(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            e[r] = n[r]
    }
    return e
}
var Fs = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)),
        e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};
function It(e, t) {
    function n(i, s, f) {
        if (!(typeof document > "u")) {
            f = Ie({}, t, f),
            typeof f.expires == "number" && (f.expires = new Date(Date.now() + f.expires * 864e5)),
            f.expires && (f.expires = f.expires.toUTCString()),
            i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var h in f)
                f[h] && (a += "; " + h,
                f[h] !== !0 && (a += "=" + f[h].split(";")[0]));
            return document.cookie = i + "=" + e.write(s, i) + a
        }
    }
    function r(i) {
        if (!(typeof document > "u" || arguments.length && !i)) {
            for (var s = document.cookie ? document.cookie.split("; ") : [], f = {}, a = 0; a < s.length; a++) {
                var h = s[a].split("=")
                  , l = h.slice(1).join("=");
                try {
                    var c = decodeURIComponent(h[0]);
                    if (f[c] = e.read(l, c),
                    i === c)
                        break
                } catch {}
            }
            return i ? f[i] : f
        }
    }
    return Object.create({
        set: n,
        get: r,
        remove: function(i, s) {
            n(i, "", Ie({}, s, {
                expires: -1
            }))
        },
        withAttributes: function(i) {
            return It(this.converter, Ie({}, this.attributes, i))
        },
        withConverter: function(i) {
            return It(Ie({}, this.converter, i), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(t)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var _c = It(Fs, {
    path: "/"
})
  , xs = "sessionAccessId-";
function As(e) {
    var t = void 0;
    return e && e.id && ~e.id.indexOf(xs) && (t = e.id),
    t
}
var Es = As;
function Ds(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++)
            n[t] = e[t];
        return n
    } else
        return Array.from(e)
}
var Ss = Es
  , Bs = "sessionAccessId-";
function Os() {
    return Bs + Date.now()
}
var Rs = function(t, n) {
    n = n || document.body;
    var r = void 0
      , i = {}
      , s = []
      , f = !1
      , a = !0
      , h = void 0
      , l = !1
      , c = document.createElement("iframe");
    c.src = t,
    c.width = 0,
    c.height = 0,
    c.style.display = "none",
    c.onload = function() {
        l = !0
    }
    ;
    function o() {
        n.appendChild(c),
        r = c.contentWindow,
        a = !1,
        window.addEventListener("message", u),
        m()
    }
    o();
    function u(b) {
        var _ = b.data
          , w = Ss(_);
        if (w === "sessionAccessId-connected") {
            f = !0;
            return
        }
        if (_.connectError) {
            Object.keys(i).forEach(function(C) {
                return i[C](_.error)
            }),
            i = {};
            return
        }
        var k = i[w];
        w && k && k(_.error, _.data)
    }
    function d() {
        clearTimeout(h),
        window.removeEventListener("message", u),
        c.parentNode.removeChild(c),
        f = !1,
        a = !0
    }
    function g(b, _, w, k) {
        a && o(),
        !f && b !== "connect" && s.push([b, _, w, k]);
        var C = Os();
        i && typeof k == "function" && (i[C] = k),
        l && r.postMessage({
            method: b,
            key: _,
            value: w,
            id: C
        }, t)
    }
    function v(b, _) {
        if (!_)
            throw new Error("callback required for get");
        g("get", b, null, _)
    }
    function p(b, _, w) {
        g("set", b, _, w)
    }
    function y(b, _) {
        g("remove", b, null, _)
    }
    function m() {
        if (f) {
            for (clearTimeout(h); s.length; )
                g.apply(void 0, Ds(s.pop()));
            return
        }
        g("connect"),
        h = setTimeout(m, 125)
    }
    return {
        get: v,
        set: p,
        remove: y,
        close: d
    }
};
const $s = Rs;
var Ms = $s;
const bc = Yt(Ms);
var hn = {}
  , Ts = A && A.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(hn, "__esModule", {
    value: !0
});
var zs = hn.FetchAdapter = void 0;
const Ps = Ts(Dr);
class dn {
    constructor(t) {
        this.options = {},
        this.options = t
    }
    async request(t, n, r, i, s) {
        const f = {
            ...this.options,
            ...s
        }
          , a = i ? "?" + Ps.default.stringify(i) : "";
        try {
            const h = await fetch(`${f.baseURL || ""}${n}${a}`, {
                method: t,
                body: r ? JSON.stringify(r) : null,
                ...f
            });
            return {
                status: h.status,
                statusText: h.statusText,
                data: await h.json(),
                headers: [...h.headers.entries()].reduce((l,[c,o])=>(l[c] = o,
                l), {})
            }
        } catch (h) {
            throw h.isOpenApiError = !0,
            h
        }
    }
    withOptions(t) {
        return new dn(t)
    }
}
zs = hn.FetchAdapter = dn;
var js = {}
  , be = {};
Object.defineProperty(be, "__esModule", {
    value: !0
});
be.ProjectName = be.ErrorCode = void 0;
be.ErrorCode = {
    BadRequest: "bad_request",
    NotAllowed: "not_allowed",
    NotFound: "not_found",
    Forbidden: "forbidden",
    TooManyRequests: "too_many_requests",
    Unauthorized: "unauthorized",
    Unprocessable: "unprocessable"
};
be.ProjectName = {
    Widget: "widget",
    Chatbot: "chatbot"
};
var Ce = {}
  , ce = {};
Object.defineProperty(ce, "__esModule", {
    value: !0
});
ce.TranslationsClientRaw = ce.TranslationsClient = void 0;
class qs {
    constructor(t) {
        this.adapter = t,
        this.raw = new Wr(this.adapter)
    }
    getDefaults(t, n, r) {
        return this.adapter.request("get", `/${t}/translations/lang/${n}/defaults`, null, null, r).then(Ns)
    }
}
ce.TranslationsClient = qs;
class Wr {
    constructor(t) {
        this.adapter = t
    }
    getDefaults(t, n, r) {
        return this.adapter.request("get", `/${t}/translations/lang/${n}/defaults`, null, null, r)
    }
}
ce.TranslationsClientRaw = Wr;
function Ns(e) {
    return e.data
}
Object.defineProperty(Ce, "__esModule", {
    value: !0
});
Ce.SmartsuppTranslationsClientApi = void 0;
const Is = ce;
class lt {
    constructor(t) {
        this.adapter = t,
        this.translations = new Is.TranslationsClient(t)
    }
    withOptions(t) {
        return new lt(this.adapter.withOptions(t))
    }
}
Ce.SmartsuppTranslationsClientApi = lt;
Ce.default = lt;
(function(e) {
    var t = A && A.__createBinding || (Object.create ? function(i, s, f, a) {
        a === void 0 && (a = f);
        var h = Object.getOwnPropertyDescriptor(s, f);
        (!h || ("get"in h ? !s.__esModule : h.writable || h.configurable)) && (h = {
            enumerable: !0,
            get: function() {
                return s[f]
            }
        }),
        Object.defineProperty(i, a, h)
    }
    : function(i, s, f, a) {
        a === void 0 && (a = f),
        i[a] = s[f]
    }
    )
      , n = A && A.__exportStar || function(i, s) {
        for (var f in i)
            f !== "default" && !Object.prototype.hasOwnProperty.call(s, f) && t(s, i, f)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n(be, e),
    n(Ce, e),
    n(ce, e);
    const r = Ce;
    e.default = r.SmartsuppTranslationsClientApi
}
)(js);
var Ct, zn;
function Ls() {
    return zn || (zn = 1,
    Ct = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/),
    Ct
}
var wt, Pn;
function Us() {
    return Pn || (Pn = 1,
    wt = /[\0-\x1F\x7F-\x9F]/),
    wt
}
var kt, jn;
function Hs() {
    return jn || (jn = 1,
    kt = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/),
    kt
}
var Ft, qn;
function Vs() {
    return qn || (qn = 1,
    Ft = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/),
    Ft
}
var xt, Nn;
function Ws() {
    return Nn || (Nn = 1,
    xt = function(e) {
        var t = {};
        e = e || {},
        t.src_Any = Ls().source,
        t.src_Cc = Us().source,
        t.src_Z = Hs().source,
        t.src_P = Vs().source,
        t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"),
        t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
        var n = "[><｜]";
        return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")",
        t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
        t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?",
        t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",
        t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))",
        t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?",
        t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',
        t.src_xn = "xn--[a-z0-9\\-]{1,59}",
        t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})",
        t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))",
        t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))",
        t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))",
        t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))",
        t.src_host_strict = t.src_host + t.src_host_terminator,
        t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator,
        t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator,
        t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator,
        t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator,
        t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))",
        t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")",
        t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")",
        t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")",
        t
    }
    ),
    xt
}
function Lt(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return t.forEach(function(n) {
        n && Object.keys(n).forEach(function(r) {
            e[r] = n[r]
        })
    }),
    e
}
function ht(e) {
    return Object.prototype.toString.call(e)
}
function Xs(e) {
    return ht(e) === "[object String]"
}
function Zs(e) {
    return ht(e) === "[object Object]"
}
function Js(e) {
    return ht(e) === "[object RegExp]"
}
function In(e) {
    return ht(e) === "[object Function]"
}
function Gs(e) {
    return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
}
var Xr = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
};
function Ks(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t || Xr.hasOwnProperty(n)
    }, !1)
}
var Ys = {
    "http:": {
        validate: function(e, t, n) {
            var r = e.slice(t);
            return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,"i")),
            n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
        }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
        validate: function(e, t, n) {
            var r = e.slice(t);
            return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,"i")),
            n.re.no_http.test(r) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : r.match(n.re.no_http)[0].length : 0
        }
    },
    "mailto:": {
        validate: function(e, t, n) {
            var r = e.slice(t);
            return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict,"i")),
            n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
        }
    }
}
  , Qs = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"
  , ea = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function ta(e) {
    e.__index__ = -1,
    e.__text_cache__ = ""
}
function na(e) {
    return function(t, n) {
        var r = t.slice(n);
        return e.test(r) ? r.match(e)[0].length : 0
    }
}
function Ln() {
    return function(e, t) {
        t.normalize(e)
    }
}
function et(e) {
    var t = e.re = Ws()(e.__opts__)
      , n = e.__tlds__.slice();
    e.onCompile(),
    e.__tlds_replaced__ || n.push(Qs),
    n.push(t.src_xn),
    t.src_tlds = n.join("|");
    function r(a) {
        return a.replace("%TLDS%", t.src_tlds)
    }
    t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), "i"),
    t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), "i"),
    t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), "i"),
    t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), "i");
    var i = [];
    e.__compiled__ = {};
    function s(a, h) {
        throw new Error('(LinkifyIt) Invalid schema "' + a + '": ' + h)
    }
    Object.keys(e.__schemas__).forEach(function(a) {
        var h = e.__schemas__[a];
        if (h !== null) {
            var l = {
                validate: null,
                link: null
            };
            if (e.__compiled__[a] = l,
            Zs(h)) {
                Js(h.validate) ? l.validate = na(h.validate) : In(h.validate) ? l.validate = h.validate : s(a, h),
                In(h.normalize) ? l.normalize = h.normalize : h.normalize ? s(a, h) : l.normalize = Ln();
                return
            }
            if (Xs(h)) {
                i.push(a);
                return
            }
            s(a, h)
        }
    }),
    i.forEach(function(a) {
        e.__compiled__[e.__schemas__[a]] && (e.__compiled__[a].validate = e.__compiled__[e.__schemas__[a]].validate,
        e.__compiled__[a].normalize = e.__compiled__[e.__schemas__[a]].normalize)
    }),
    e.__compiled__[""] = {
        validate: null,
        normalize: Ln()
    };
    var f = Object.keys(e.__compiled__).filter(function(a) {
        return a.length > 0 && e.__compiled__[a]
    }).map(Gs).join("|");
    e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + f + ")", "i"),
    e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + f + ")", "ig"),
    e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"),
    e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
    ta(e)
}
function ra(e, t) {
    var n = e.__index__
      , r = e.__last_index__
      , i = e.__text_cache__.slice(n, r);
    this.schema = e.__schema__.toLowerCase(),
    this.index = n + t,
    this.lastIndex = r + t,
    this.raw = i,
    this.text = i,
    this.url = i
}
function Ut(e, t) {
    var n = new ra(e,t);
    return e.__compiled__[n.schema].normalize(n, e),
    n
}
function H(e, t) {
    if (!(this instanceof H))
        return new H(e,t);
    t || Ks(e) && (t = e,
    e = {}),
    this.__opts__ = Lt({}, Xr, t),
    this.__index__ = -1,
    this.__last_index__ = -1,
    this.__schema__ = "",
    this.__text_cache__ = "",
    this.__schemas__ = Lt({}, Ys, e),
    this.__compiled__ = {},
    this.__tlds__ = ea,
    this.__tlds_replaced__ = !1,
    this.re = {},
    et(this)
}
H.prototype.add = function(t, n) {
    return this.__schemas__[t] = n,
    et(this),
    this
}
;
H.prototype.set = function(t) {
    return this.__opts__ = Lt(this.__opts__, t),
    this
}
;
H.prototype.test = function(t) {
    if (this.__text_cache__ = t,
    this.__index__ = -1,
    !t.length)
        return !1;
    var n, r, i, s, f, a, h, l, c;
    if (this.re.schema_test.test(t)) {
        for (h = this.re.schema_search,
        h.lastIndex = 0; (n = h.exec(t)) !== null; )
            if (s = this.testSchemaAt(t, n[2], h.lastIndex),
            s) {
                this.__schema__ = n[2],
                this.__index__ = n.index + n[1].length,
                this.__last_index__ = n.index + n[0].length + s;
                break
            }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = t.search(this.re.host_fuzzy_test),
    l >= 0 && (this.__index__ < 0 || l < this.__index__) && (r = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (f = r.index + r[1].length,
    (this.__index__ < 0 || f < this.__index__) && (this.__schema__ = "",
    this.__index__ = f,
    this.__last_index__ = r.index + r[0].length))),
    this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (c = t.indexOf("@"),
    c >= 0 && (i = t.match(this.re.email_fuzzy)) !== null && (f = i.index + i[1].length,
    a = i.index + i[0].length,
    (this.__index__ < 0 || f < this.__index__ || f === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:",
    this.__index__ = f,
    this.__last_index__ = a))),
    this.__index__ >= 0
}
;
H.prototype.pretest = function(t) {
    return this.re.pretest.test(t)
}
;
H.prototype.testSchemaAt = function(t, n, r) {
    return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(t, r, this) : 0
}
;
H.prototype.match = function(t) {
    var n = 0
      , r = [];
    this.__index__ >= 0 && this.__text_cache__ === t && (r.push(Ut(this, n)),
    n = this.__last_index__);
    for (var i = n ? t.slice(n) : t; this.test(i); )
        r.push(Ut(this, n)),
        i = i.slice(this.__last_index__),
        n += this.__last_index__;
    return r.length ? r : null
}
;
H.prototype.matchAtStart = function(t) {
    if (this.__text_cache__ = t,
    this.__index__ = -1,
    !t.length)
        return null;
    var n = this.re.schema_at_start.exec(t);
    if (!n)
        return null;
    var r = this.testSchemaAt(t, n[2], n[0].length);
    return r ? (this.__schema__ = n[2],
    this.__index__ = n.index + n[1].length,
    this.__last_index__ = n.index + n[0].length + r,
    Ut(this, 0)) : null
}
;
H.prototype.tlds = function(t, n) {
    return t = Array.isArray(t) ? t : [t],
    n ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(r, i, s) {
        return r !== s[i - 1]
    }).reverse(),
    et(this),
    this) : (this.__tlds__ = t.slice(),
    this.__tlds_replaced__ = !0,
    et(this),
    this)
}
;
H.prototype.normalize = function(t) {
    t.schema || (t.url = "http://" + t.url),
    t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url)
}
;
H.prototype.onCompile = function() {}
;
var ia = H;
const Cc = Yt(ia)
  , wc = ["aaa", "aarp", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "actor", "ad", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "airbus", "airforce", "airtel", "akdn", "al", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "amazon", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "casa", "case", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cpa", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dog", "domains", "dot", "download", "drive", "dtv", "dubai", "dunlop", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "et", "etisalat", "eu", "eurovision", "eus", "events", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gay", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "inc", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "ismaili", "ist", "istanbul", "it", "itau", "itv", "jaguar", "java", "jcb", "je", "jeep", "jetzt", "jewelry", "jio", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kids", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "lamborghini", "lamer", "lancaster", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "link", "lipsy", "live", "living", "lk", "llc", "llp", "loan", "loans", "locker", "locus", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "luxe", "luxury", "lv", "ly", "ma", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merckmsd", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "music", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nagoya", "name", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "racing", "radio", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "ril", "rio", "rip", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "spa", "space", "sport", "spot", "sr", "srl", "ss", "st", "stada", "staples", "star", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiss", "sx", "sy", "sydney", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "vermögensberater", "vermögensberatung", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zm", "zone", "zuerich", "zw", "ελ", "ευ", "бг", "бел", "дети", "ею", "католик", "ком", "мкд", "мон", "москва", "онлайн", "орг", "рус", "рф", "сайт", "срб", "укр", "қаз", "հայ", "ישראל", "קום", "ابوظبي", "اتصالات", "ارامكو", "الاردن", "البحرين", "الجزائر", "السعودية", "العليان", "المغرب", "امارات", "ایران", "بارت", "بازار", "بيتك", "بھارت", "تونس", "سودان", "سورية", "شبكة", "عراق", "عرب", "عمان", "فلسطين", "قطر", "كاثوليك", "كوم", "مصر", "مليسيا", "موريتانيا", "موقع", "همراه", "پاکستان", "ڀارت", "कॉम", "नेट", "भारत", "भारतम्", "भारोत", "संगठन", "বাংলা", "ভারত", "ভাৰত", "ਭਾਰਤ", "ભારત", "ଭାରତ", "இந்தியா", "இலங்கை", "சிங்கப்பூர்", "భారత్", "ಭಾರತ", "ഭാരതം", "ලංකා", "คอม", "ไทย", "ລາວ", "გე", "みんな", "アマゾン", "クラウド", "グーグル", "コム", "ストア", "セール", "ファッション", "ポイント", "世界", "中信", "中国", "中國", "中文网", "亚马逊", "企业", "佛山", "信息", "健康", "八卦", "公司", "公益", "台湾", "台灣", "商城", "商店", "商标", "嘉里", "嘉里大酒店", "在线", "大拿", "天主教", "娱乐", "家電", "广东", "微博", "慈善", "我爱你", "手机", "招聘", "政务", "政府", "新加坡", "新闻", "时尚", "書籍", "机构", "淡马锡", "游戏", "澳門", "点看", "移动", "组织机构", "网址", "网店", "网站", "网络", "联通", "谷歌", "购物", "通販", "集团", "電訊盈科", "飞利浦", "食品", "餐厅", "香格里拉", "香港", "닷넷", "닷컴", "삼성", "한국"];
function q(e, t) {
    oa(e) && (e = "100%");
    var n = sa(e);
    return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)),
    e)
}
function Le(e) {
    return Math.min(1, Math.max(0, e))
}
function oa(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
}
function sa(e) {
    return typeof e == "string" && e.indexOf("%") !== -1
}
function Zr(e) {
    return e = parseFloat(e),
    (isNaN(e) || e < 0 || e > 1) && (e = 1),
    e
}
function Ue(e) {
    return e <= 1 ? "".concat(Number(e) * 100, "%") : e
}
function se(e) {
    return e.length === 1 ? "0" + e : String(e)
}
function aa(e, t, n) {
    return {
        r: q(e, 255) * 255,
        g: q(t, 255) * 255,
        b: q(n, 255) * 255
    }
}
function Un(e, t, n) {
    e = q(e, 255),
    t = q(t, 255),
    n = q(n, 255);
    var r = Math.max(e, t, n)
      , i = Math.min(e, t, n)
      , s = 0
      , f = 0
      , a = (r + i) / 2;
    if (r === i)
        f = 0,
        s = 0;
    else {
        var h = r - i;
        switch (f = a > .5 ? h / (2 - r - i) : h / (r + i),
        r) {
        case e:
            s = (t - n) / h + (t < n ? 6 : 0);
            break;
        case t:
            s = (n - e) / h + 2;
            break;
        case n:
            s = (e - t) / h + 4;
            break
        }
        s /= 6
    }
    return {
        h: s,
        s: f,
        l: a
    }
}
function At(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function ca(e, t, n) {
    var r, i, s;
    if (e = q(e, 360),
    t = q(t, 100),
    n = q(n, 100),
    t === 0)
        i = n,
        s = n,
        r = n;
    else {
        var f = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - f;
        r = At(a, f, e + 1 / 3),
        i = At(a, f, e),
        s = At(a, f, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: i * 255,
        b: s * 255
    }
}
function Hn(e, t, n) {
    e = q(e, 255),
    t = q(t, 255),
    n = q(n, 255);
    var r = Math.max(e, t, n)
      , i = Math.min(e, t, n)
      , s = 0
      , f = r
      , a = r - i
      , h = r === 0 ? 0 : a / r;
    if (r === i)
        s = 0;
    else {
        switch (r) {
        case e:
            s = (t - n) / a + (t < n ? 6 : 0);
            break;
        case t:
            s = (n - e) / a + 2;
            break;
        case n:
            s = (e - t) / a + 4;
            break
        }
        s /= 6
    }
    return {
        h: s,
        s: h,
        v: f
    }
}
function ua(e, t, n) {
    e = q(e, 360) * 6,
    t = q(t, 100),
    n = q(n, 100);
    var r = Math.floor(e)
      , i = e - r
      , s = n * (1 - t)
      , f = n * (1 - i * t)
      , a = n * (1 - (1 - i) * t)
      , h = r % 6
      , l = [n, f, s, s, a, n][h]
      , c = [a, n, n, f, s, s][h]
      , o = [s, s, a, n, n, f][h];
    return {
        r: l * 255,
        g: c * 255,
        b: o * 255
    }
}
function Vn(e, t, n, r) {
    var i = [se(Math.round(e).toString(16)), se(Math.round(t).toString(16)), se(Math.round(n).toString(16))];
    return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
}
function fa(e, t, n, r, i) {
    var s = [se(Math.round(e).toString(16)), se(Math.round(t).toString(16)), se(Math.round(n).toString(16)), se(la(r))];
    return i && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("")
}
function la(e) {
    return Math.round(parseFloat(e) * 255).toString(16)
}
function Wn(e) {
    return U(e) / 255
}
function U(e) {
    return parseInt(e, 16)
}
function ha(e) {
    return {
        r: e >> 16,
        g: (e & 65280) >> 8,
        b: e & 255
    }
}
var Ht = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};
function da(e) {
    var t = {
        r: 0,
        g: 0,
        b: 0
    }
      , n = 1
      , r = null
      , i = null
      , s = null
      , f = !1
      , a = !1;
    return typeof e == "string" && (e = ya(e)),
    typeof e == "object" && (G(e.r) && G(e.g) && G(e.b) ? (t = aa(e.r, e.g, e.b),
    f = !0,
    a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : G(e.h) && G(e.s) && G(e.v) ? (r = Ue(e.s),
    i = Ue(e.v),
    t = ua(e.h, r, i),
    f = !0,
    a = "hsv") : G(e.h) && G(e.s) && G(e.l) && (r = Ue(e.s),
    s = Ue(e.l),
    t = ca(e.h, r, s),
    f = !0,
    a = "hsl"),
    Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
    n = Zr(n),
    {
        ok: f,
        format: e.format || a,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n
    }
}
var pa = "[-\\+]?\\d+%?"
  , ga = "[-\\+]?\\d*\\.\\d+%?"
  , re = "(?:".concat(ga, ")|(?:").concat(pa, ")")
  , Et = "[\\s|\\(]+(".concat(re, ")[,|\\s]+(").concat(re, ")[,|\\s]+(").concat(re, ")\\s*\\)?")
  , Dt = "[\\s|\\(]+(".concat(re, ")[,|\\s]+(").concat(re, ")[,|\\s]+(").concat(re, ")[,|\\s]+(").concat(re, ")\\s*\\)?")
  , W = {
    CSS_UNIT: new RegExp(re),
    rgb: new RegExp("rgb" + Et),
    rgba: new RegExp("rgba" + Dt),
    hsl: new RegExp("hsl" + Et),
    hsla: new RegExp("hsla" + Dt),
    hsv: new RegExp("hsv" + Et),
    hsva: new RegExp("hsva" + Dt),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function ya(e) {
    if (e = e.trim().toLowerCase(),
    e.length === 0)
        return !1;
    var t = !1;
    if (Ht[e])
        e = Ht[e],
        t = !0;
    else if (e === "transparent")
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
    var n = W.rgb.exec(e);
    return n ? {
        r: n[1],
        g: n[2],
        b: n[3]
    } : (n = W.rgba.exec(e),
    n ? {
        r: n[1],
        g: n[2],
        b: n[3],
        a: n[4]
    } : (n = W.hsl.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        l: n[3]
    } : (n = W.hsla.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        l: n[3],
        a: n[4]
    } : (n = W.hsv.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        v: n[3]
    } : (n = W.hsva.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        v: n[3],
        a: n[4]
    } : (n = W.hex8.exec(e),
    n ? {
        r: U(n[1]),
        g: U(n[2]),
        b: U(n[3]),
        a: Wn(n[4]),
        format: t ? "name" : "hex8"
    } : (n = W.hex6.exec(e),
    n ? {
        r: U(n[1]),
        g: U(n[2]),
        b: U(n[3]),
        format: t ? "name" : "hex"
    } : (n = W.hex4.exec(e),
    n ? {
        r: U(n[1] + n[1]),
        g: U(n[2] + n[2]),
        b: U(n[3] + n[3]),
        a: Wn(n[4] + n[4]),
        format: t ? "name" : "hex8"
    } : (n = W.hex3.exec(e),
    n ? {
        r: U(n[1] + n[1]),
        g: U(n[2] + n[2]),
        b: U(n[3] + n[3]),
        format: t ? "name" : "hex"
    } : !1)))))))))
}
function G(e) {
    return !!W.CSS_UNIT.exec(String(e))
}
var kc = function() {
    function e(t, n) {
        t === void 0 && (t = ""),
        n === void 0 && (n = {});
        var r;
        if (t instanceof e)
            return t;
        typeof t == "number" && (t = ha(t)),
        this.originalInput = t;
        var i = da(t);
        this.originalInput = t,
        this.r = i.r,
        this.g = i.g,
        this.b = i.b,
        this.a = i.a,
        this.roundA = Math.round(100 * this.a) / 100,
        this.format = (r = n.format) !== null && r !== void 0 ? r : i.format,
        this.gradientType = n.gradientType,
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        this.isValid = i.ok
    }
    return e.prototype.isDark = function() {
        return this.getBrightness() < 128
    }
    ,
    e.prototype.isLight = function() {
        return !this.isDark()
    }
    ,
    e.prototype.getBrightness = function() {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
    }
    ,
    e.prototype.getLuminance = function() {
        var t = this.toRgb(), n, r, i, s = t.r / 255, f = t.g / 255, a = t.b / 255;
        return s <= .03928 ? n = s / 12.92 : n = Math.pow((s + .055) / 1.055, 2.4),
        f <= .03928 ? r = f / 12.92 : r = Math.pow((f + .055) / 1.055, 2.4),
        a <= .03928 ? i = a / 12.92 : i = Math.pow((a + .055) / 1.055, 2.4),
        .2126 * n + .7152 * r + .0722 * i
    }
    ,
    e.prototype.getAlpha = function() {
        return this.a
    }
    ,
    e.prototype.setAlpha = function(t) {
        return this.a = Zr(t),
        this.roundA = Math.round(100 * this.a) / 100,
        this
    }
    ,
    e.prototype.isMonochrome = function() {
        var t = this.toHsl().s;
        return t === 0
    }
    ,
    e.prototype.toHsv = function() {
        var t = Hn(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            v: t.v,
            a: this.a
        }
    }
    ,
    e.prototype.toHsvString = function() {
        var t = Hn(this.r, this.g, this.b)
          , n = Math.round(t.h * 360)
          , r = Math.round(t.s * 100)
          , i = Math.round(t.v * 100);
        return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toHsl = function() {
        var t = Un(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            l: t.l,
            a: this.a
        }
    }
    ,
    e.prototype.toHslString = function() {
        var t = Un(this.r, this.g, this.b)
          , n = Math.round(t.h * 360)
          , r = Math.round(t.s * 100)
          , i = Math.round(t.l * 100);
        return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toHex = function(t) {
        return t === void 0 && (t = !1),
        Vn(this.r, this.g, this.b, t)
    }
    ,
    e.prototype.toHexString = function(t) {
        return t === void 0 && (t = !1),
        "#" + this.toHex(t)
    }
    ,
    e.prototype.toHex8 = function(t) {
        return t === void 0 && (t = !1),
        fa(this.r, this.g, this.b, this.a, t)
    }
    ,
    e.prototype.toHex8String = function(t) {
        return t === void 0 && (t = !1),
        "#" + this.toHex8(t)
    }
    ,
    e.prototype.toHexShortString = function(t) {
        return t === void 0 && (t = !1),
        this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
    }
    ,
    e.prototype.toRgb = function() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
        }
    }
    ,
    e.prototype.toRgbString = function() {
        var t = Math.round(this.r)
          , n = Math.round(this.g)
          , r = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toPercentageRgb = function() {
        var t = function(n) {
            return "".concat(Math.round(q(n, 255) * 100), "%")
        };
        return {
            r: t(this.r),
            g: t(this.g),
            b: t(this.b),
            a: this.a
        }
    }
    ,
    e.prototype.toPercentageRgbString = function() {
        var t = function(n) {
            return Math.round(q(n, 255) * 100)
        };
        return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toName = function() {
        if (this.a === 0)
            return "transparent";
        if (this.a < 1)
            return !1;
        for (var t = "#" + Vn(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Ht); n < r.length; n++) {
            var i = r[n]
              , s = i[0]
              , f = i[1];
            if (t === f)
                return s
        }
        return !1
    }
    ,
    e.prototype.toString = function(t) {
        var n = !!t;
        t = t ?? this.format;
        var r = !1
          , i = this.a < 1 && this.a >= 0
          , s = !n && i && (t.startsWith("hex") || t === "name");
        return s ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()),
        t === "prgb" && (r = this.toPercentageRgbString()),
        (t === "hex" || t === "hex6") && (r = this.toHexString()),
        t === "hex3" && (r = this.toHexString(!0)),
        t === "hex4" && (r = this.toHex8String(!0)),
        t === "hex8" && (r = this.toHex8String()),
        t === "name" && (r = this.toName()),
        t === "hsl" && (r = this.toHslString()),
        t === "hsv" && (r = this.toHsvString()),
        r || this.toHexString())
    }
    ,
    e.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }
    ,
    e.prototype.clone = function() {
        return new e(this.toString())
    }
    ,
    e.prototype.lighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l += t / 100,
        n.l = Le(n.l),
        new e(n)
    }
    ,
    e.prototype.brighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))),
        n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))),
        n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))),
        new e(n)
    }
    ,
    e.prototype.darken = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l -= t / 100,
        n.l = Le(n.l),
        new e(n)
    }
    ,
    e.prototype.tint = function(t) {
        return t === void 0 && (t = 10),
        this.mix("white", t)
    }
    ,
    e.prototype.shade = function(t) {
        return t === void 0 && (t = 10),
        this.mix("black", t)
    }
    ,
    e.prototype.desaturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s -= t / 100,
        n.s = Le(n.s),
        new e(n)
    }
    ,
    e.prototype.saturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s += t / 100,
        n.s = Le(n.s),
        new e(n)
    }
    ,
    e.prototype.greyscale = function() {
        return this.desaturate(100)
    }
    ,
    e.prototype.spin = function(t) {
        var n = this.toHsl()
          , r = (n.h + t) % 360;
        return n.h = r < 0 ? 360 + r : r,
        new e(n)
    }
    ,
    e.prototype.mix = function(t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb()
          , i = new e(t).toRgb()
          , s = n / 100
          , f = {
            r: (i.r - r.r) * s + r.r,
            g: (i.g - r.g) * s + r.g,
            b: (i.b - r.b) * s + r.b,
            a: (i.a - r.a) * s + r.a
        };
        return new e(f)
    }
    ,
    e.prototype.analogous = function(t, n) {
        t === void 0 && (t = 6),
        n === void 0 && (n = 30);
        var r = this.toHsl()
          , i = 360 / n
          , s = [this];
        for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t; )
            r.h = (r.h + i) % 360,
            s.push(new e(r));
        return s
    }
    ,
    e.prototype.complement = function() {
        var t = this.toHsl();
        return t.h = (t.h + 180) % 360,
        new e(t)
    }
    ,
    e.prototype.monochromatic = function(t) {
        t === void 0 && (t = 6);
        for (var n = this.toHsv(), r = n.h, i = n.s, s = n.v, f = [], a = 1 / t; t--; )
            f.push(new e({
                h: r,
                s: i,
                v: s
            })),
            s = (s + a) % 1;
        return f
    }
    ,
    e.prototype.splitcomplement = function() {
        var t = this.toHsl()
          , n = t.h;
        return [this, new e({
            h: (n + 72) % 360,
            s: t.s,
            l: t.l
        }), new e({
            h: (n + 216) % 360,
            s: t.s,
            l: t.l
        })]
    }
    ,
    e.prototype.onBackground = function(t) {
        var n = this.toRgb()
          , r = new e(t).toRgb()
          , i = n.a + r.a * (1 - n.a);
        return new e({
            r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
            g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
            b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
            a: i
        })
    }
    ,
    e.prototype.triad = function() {
        return this.polyad(3)
    }
    ,
    e.prototype.tetrad = function() {
        return this.polyad(4)
    }
    ,
    e.prototype.polyad = function(t) {
        for (var n = this.toHsl(), r = n.h, i = [this], s = 360 / t, f = 1; f < t; f++)
            i.push(new e({
                h: (r + f * s) % 360,
                s: n.s,
                l: n.l
            }));
        return i
    }
    ,
    e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString()
    }
    ,
    e
}();
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(yi);
function pn(e) {
    const t = e - 1;
    return t * t * t + 1
}
function Fc(e, {delay: t=0, duration: n=400, easing: r=tt}={}) {
    const i = +getComputedStyle(e).opacity;
    return {
        delay: t,
        duration: n,
        easing: r,
        css: s=>`opacity: ${s * i}`
    }
}
function xc(e, {delay: t=0, duration: n=400, easing: r=pn, x: i=0, y: s=0, opacity: f=0}={}) {
    const a = getComputedStyle(e)
      , h = +a.opacity
      , l = a.transform === "none" ? "" : a.transform
      , c = h * (1 - f)
      , [o,u] = yn(i)
      , [d,g] = yn(s);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: (v,p)=>`
			transform: ${l} translate(${(1 - v) * o}${u}, ${(1 - v) * d}${g});
			opacity: ${h - c * p}`
    }
}
function Ac(e, {delay: t=0, duration: n=400, easing: r=pn, axis: i="y"}={}) {
    const s = getComputedStyle(e)
      , f = +s.opacity
      , a = i === "y" ? "height" : "width"
      , h = parseFloat(s[a])
      , l = i === "y" ? ["top", "bottom"] : ["left", "right"]
      , c = l.map(y=>`${y[0].toUpperCase()}${y.slice(1)}`)
      , o = parseFloat(s[`padding${c[0]}`])
      , u = parseFloat(s[`padding${c[1]}`])
      , d = parseFloat(s[`margin${c[0]}`])
      , g = parseFloat(s[`margin${c[1]}`])
      , v = parseFloat(s[`border${c[0]}Width`])
      , p = parseFloat(s[`border${c[1]}Width`]);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: y=>`overflow: hidden;opacity: ${Math.min(y * 20, 1) * f};${a}: ${y * h}px;padding-${l[0]}: ${y * o}px;padding-${l[1]}: ${y * u}px;margin-${l[0]}: ${y * d}px;margin-${l[1]}: ${y * g}px;border-${l[0]}-width: ${y * v}px;border-${l[1]}-width: ${y * p}px;`
    }
}
function Ec(e, {delay: t=0, duration: n=400, easing: r=pn, start: i=0, opacity: s=0}={}) {
    const f = getComputedStyle(e)
      , a = +f.opacity
      , h = f.transform === "none" ? "" : f.transform
      , l = 1 - i
      , c = a * (1 - s);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: (o,u)=>`
			transform: ${h} scale(${1 - l * u});
			opacity: ${a - c * u}
		`
    }
}
export {Fc as $, vn as A, L as B, ba as C, ec as D, ii as E, zs as F, $a as G, nc as H, rc as I, pc as J, di as K, pi as L, _e as M, sc as N, Ec as O, Qn as P, Ra as Q, qa as R, yc as S, kc as T, Ma as U, mc as V, Ia as W, Ba as X, ic as Y, oc as Z, xc as _, _c as a, Va as a0, Xa as a1, Ea as a2, ue as a3, Da as a4, Kr as a5, ja as a6, lc as a7, xa as a8, Pa as a9, za as aa, Aa as ab, Qa as ac, K as ad, ma as ae, Ga as af, Na as ag, dc as ah, hc as ai, tc as aj, Ua as ak, La as al, Ha as am, ac as an, fc as ao, uc as ap, Ta as aq, Ac as ar, Vt as as, Ya as at, Ka as au, Sa as av, Oa as aw, cc as ax, pn as ay, Wa as az, js as b, bc as c, vc as d, cr as e, ks as f, _a as g, Cc as h, gc as i, Ca as j, Yn as k, ar as l, er as m, ri as n, Za as o, ei as p, Fa as q, wa as r, Yr as s, wc as t, ka as u, or as v, mi as w, hi as x, Jt as y, Ja as z};
