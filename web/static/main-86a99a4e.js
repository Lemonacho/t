import {w as S, g as f, d as A, a as Ns, c as hr, b as Us, F as br, l as X, e as yr, V as Mn, f as M, h as Vs, t as Ws, o as Ge, T as it, S as G, i as N, s as B, j as Nt, k as E, m as p, n as $, p as v, u as Ut, q as Vt, r as Wt, v as m, x as h, y as I, z as zs, A as ct, B as J, C as j, D as _r, E as dn, G as we, H as le, I as ue, J as O, K as k, L as F, M as ve, N as nt, O as st, P as zt, Q as x, R as Ht, U as ke, W as H, X as yt, Y as lt, Z as ut, _ as pe, $ as wr, a0 as Y, a1 as It, a2 as Cr, a3 as vr, a4 as Xe, a5 as ot, a6 as ds, a7 as Hs, a8 as gn, a9 as gs, aa as On, ab as fs, ac as Ze, ad as kn, ae as Lt} from "./vendor-7c63ec1d.js";
var js = (e=>(e[e.Good = 5] = "Good",
e[e.Normal = 3] = "Normal",
e[e.Bad = 1] = "Bad",
e))(js || {});
const Sr = {
    5: {
        value: 5,
        text: "agentRating.good.formText",
        name: "good"
    },
    3: {
        value: 3,
        text: "agentRating.normal.formText",
        name: "neutral"
    },
    1: {
        value: 1,
        text: "agentRating.bad.formText",
        name: "bad"
    }
}
  , wp = Object.values(Sr).sort((e,t)=>t.value - e.value)
  , qs = S(null)
  , Ks = S(null)
  , Ar = S(!1)
  , Fn = S([])
  , Tr = e=>{
    Fn.update(t=>[...t, e])
}
  , Er = ()=>{
    let e;
    return Fn.update(t=>(e = t.pop(),
    t)),
    e ?? null
}
  , Mr = ()=>f(Fn).length === 0
  , $n = (e,{useStack: t=!1}={})=>{
    Ks.update(n=>(t && n && Tr(n),
    Ar.set(n !== null),
    e))
}
  , Ys = ()=>{
    let e = null;
    Mr() || (e = Er()),
    Ks.set(e)
}
;
var jt = (e=>(e[e.Options = 0] = "Options",
e[e.GdprAndPrivacy = 1] = "GdprAndPrivacy",
e[e.AuthForm = 2] = "AuthForm",
e[e.CloseChat = 3] = "CloseChat",
e[e.ChatRating = 4] = "ChatRating",
e))(jt || {});
const Or = ()=>{
    const e = S({})
      , {subscribe: t, update: n} = e;
    return {
        subscribe: t,
        add: a=>{
            n(c=>({
                ...c,
                [a.id]: a
            }))
        }
        ,
        remove: a=>{
            n(c=>{
                const {[a]: i, ...u} = c;
                return u
            }
            )
        }
        ,
        find: a=>f(e)[a] || null
    }
}
  , Rt = Or()
  , Cp = A([Rt], ([e])=>Object.values(e))
  , In = e=>(t,n=3e3)=>{
    const s = `fm-${e}-${t}`
      , o = Rt.find(s);
    let r = 1;
    o && (clearTimeout(o.timeout),
    r = o.recurrence + 1);
    let a;
    return n > 0 && (a = window.setTimeout(()=>{
        ps(s)
    }
    , n)),
    Rt.add({
        id: s,
        type: e,
        text: t,
        timeout: a,
        recurrence: r
    }),
    ()=>ps(s)
}
  , ps = e=>{
    Rt.remove(e)
}
  , vp = In("success")
  , Oe = In("error")
  , et = In("warning")
  , Sp = 500
  , Ap = 1e3
  , Tp = Symbol("contentListItem")
  , Ep = Symbol("contentMessageAttachment")
  , Mp = "-replies"
  , kr = .35
  , Fr = 5e3
  , $r = "default"
  , Ln = (e,t)=>{
    const n = {};
    for (const s of t) {
        const o = String(s[e]);
        n[o] = s
    }
    return n
}
  , Ir = ()=>{
    const e = S({})
      , {subscribe: t, set: n} = e;
    return {
        subscribe: t,
        setGroups: o=>{
            n(Ln("key", o))
        }
    }
}
  , Rn = Ir()
  , Xs = A([Rn], ([e])=>Object.values(e))
  , Js = e=>(t,...n)=>{
    e(`[Smartsupp] ${t}`, ...n)
}
  , z = Js(console.warn)
  , ce = Js(console.error)
  , Lr = "data-smartsupp-id"
  , Mt = ()=>window.top ?? window.parent
  , ee = ()=>window.parent
  , De = ()=>ee().document
  , Op = e=>e && e.ownerDocument || document
  , Rr = ({vid: e})=>{
    const t = ee().smartsupp || {};
    t.vid = e,
    ee().smartsupp = t
}
  , Dr = "debug"
  , Pr = e=>{
    try {
        const t = ee().localStorage.getItem(Dr);
        if (!t)
            return !1;
        if (t === e || t === "*")
            return !0;
        const n = e.match(/^\w+:/g);
        return n ? t === `${n[0]}*` : !1
    } catch {
        return !1
    }
}
  , Br = (e,t)=>(n,...s)=>{
    Pr(e) && console.debug(`%c${e}`, `color: ${t};`, n, ...s)
}
  , Q = Br("smartsupp:widget", "#1233df")
  , xr = ()=>{
    let e = null;
    const t = [];
    return Object.freeze({
        init: a=>{
            e = a,
            Q("widget options", a),
            t.forEach(c=>c(a))
        }
        ,
        getOptions: ()=>{
            if (!e)
                throw new Error("Widget options not initialized");
            return e
        }
        ,
        awaitOptions: async()=>e || new Promise(a=>{
            t.push(a)
        }
        ),
        updateOptions: a=>{
            e = {
                ...e,
                ...a
            }
        }
    })
}
  , _ = xr()
  , Dn = e=>{
    const n = e.document.getElementsByTagName("body")[0].getAttribute(Lr);
    if (!n)
        throw new Error("Missing chat ID attribute on body element.");
    if (!e.parent.$smartsupp)
        throw new Error("Something went wrong. Seems like loader.js did not initialize widget.");
    if (!e.parent.$smartsupp.getWidget)
        throw new Error("Get widget function was not supplied by loader.js.");
    return e.parent.$smartsupp.getWidget(n)
}
  , oe = {
    authFormDrawer: "authFormDrawer",
    authFormPrivacyNotice: "authFormPrivacyNotice",
    authFormPrivacyNoticeSwitch: "authFormPrivacyNoticeSwitch",
    authFormSubmitButton: "authFormSubmitButton",
    avatarAgent: "avatarAgent",
    avatarBot: "avatarBot",
    avatarGroup: "avatarGroup",
    avatarInfo: "avatarInfo",
    buttonAttachment: "buttonAttachment",
    buttonCloseChat: "buttonCloseChat",
    buttonCloseDrawer: "buttonCloseDrawer",
    buttonCollapseChat: "buttonCollapseChat",
    buttonEmoji: "buttonEmoji",
    buttonExpandChat: "buttonExpandChat",
    buttonMinimizeChat: "buttonMinimizeChat",
    buttonOptions: "buttonOptions",
    buttonSend: "buttonSend",
    chatRatingDrawer: "chatRatingDrawer",
    chatRatingEmojiButton: "chatRatingEmoji",
    chatRatingSendButton: "chatRatingSendButton",
    chatRatingTextarea: "chatRatingTextarea",
    chatRatingFeedbackButton: "chatRatingFeedbackButton",
    closeChatConfirmButton: "closeChatConfirmButton",
    closeChatDeclineButton: "closeChatDeclineButton",
    closeChatDrawer: "closeChatDrawer",
    flashMessage: "flashMessage",
    gdprDrawer: "gdprDrawer",
    headerTitle: "headerTitle",
    headerStatus: "headerStatus",
    headerBadge: "headerBadge",
    messageAttachment: "messageAttachment",
    messageAgent: "messageAgent",
    messageBot: "messageBot",
    messageBotReply: "messageBotReply",
    messageBotBack: "messageBotBack",
    messageContact: "messageContact",
    messageFile: "messageFile",
    messageGroup: "messageGroup",
    messageImage: "messageImage",
    optionsDrawer: "optionsDrawer",
    optionsFeedback: "optionsFeedback",
    optionsPrivacyNotice: "optionsPrivacyNotice",
    optionsSounds: "optionsSounds",
    optionsTranscript: "optionsTranscript",
    popup: "popup",
    popupMessage: "popupMessage",
    popupButton: "popupButton",
    popupButtonClose: "popupButtonClose",
    productCard: "productCard",
    productCardArrowLeft: "productCardArrowLeft",
    productCardArrowRight: "productCardArrowRight",
    productCardButton: "productCardButton",
    productCardCarousel: "productCardCarousel",
    productCardDescription: "productCardDescription",
    productCardImage: "productCardImage",
    productCardInfo: "productCardInfo",
    productCardTitle: "productCardTitle",
    systemMessage: "systemMessage",
    textarea: "textarea",
    textareaPreviewFile: "textareaPreviewFile",
    textareaPreviewImage: "textareaPreviewImage",
    transcriptInput: "transcriptInput",
    transcriptSendButton: "transcriptSend",
    widgetButton: "widgetButton",
    widgetButtonFrame: "widgetButtonFrame",
    widgetButtonText: "widgetButtontext",
    widgetImagePreview: "widgetImagePreview",
    widgetMessenger: "widgetMessenger",
    widgetMessengerFrame: "widgetMessengerFrame",
    widgetOnlineBadge: "widgetOnlineBadge",
    widgetPopupFrame: "widgetPopupFrame",
    widgetTypingFrame: "widgetTypingFrame",
    widgetUnreadMessagesBadge: "widgetUnreadMessagesBadge",
    widgetHeader: "widgetHeader"
}
  , kp = "https://www.smartsupp.com"
  , Fp = "/powered-by-smartsupp"
  , $p = ["cs", "es", "fr", "hu", "it", "de", "nl", "pl"]
  , Gr = "3.0"
  , Ip = "https://www.smartsupp.com/my-data-and-gdpr"
  , Nr = ()=>{
    const e = new Map;
    return Object.freeze({
        on: (o,r)=>{
            const a = e.get(o);
            a ? a.push(r) : e.set(o, [r])
        }
        ,
        off: (o,r)=>{
            const a = e.get(o);
            a && e.set(o, a.filter(c=>c !== r))
        }
        ,
        emit: (o,r)=>{
            const a = e.get(o);
            a && a.forEach(c=>c(r))
        }
    })
}
  , W = Nr()
  , fn = "ssupp"
  , Zs = 182
  , Ur = (e=Zs)=>({
    expires: e,
    domain: _.getOptions().cookieDomain,
    path: _.getOptions().cookiePath || "/",
    sameSite: "strict",
    secure: ee().location.protocol === "https:"
})
  , Qs = e=>`${_.getOptions().cookiePrefix || ""}${fn}.${e}`
  , Vr = ({name: e, value: t, expirationInDays: n=Zs, options: s})=>{
    Ns.set(Qs(e), t, {
        ...Ur(n),
        ...s
    })
}
  , Wr = e=>Ns.get(Qs(e))
  , zr = ()=>{
    const {key: e} = _.getOptions();
    return `${ee().SMARTSUPP_AUTOCREATE !== !1 ? fn : `${Dn(window).id}_${fn}`}_ ${e}`
}
  , eo = e=>`${zr()}${e ? `_${e}` : ""}`
  , qt = e=>{
    try {
        const t = window.localStorage.getItem(eo(e)) ?? "{}";
        return JSON.parse(t)
    } catch {
        return {}
    }
}
  , Pn = (e,t)=>{
    try {
        window.localStorage.setItem(eo(t), JSON.stringify(e))
    } catch (n) {
        z("Set to local storage failed", n)
    }
}
  , Hr = (e,t)=>{
    const s = {
        ...qt(),
        [e]: String(t)
    };
    Pn(s)
}
  , to = e=>{
    const t = qt();
    t[e] && (delete t[e],
    Pn(t))
}
;
var V = (e=>(e.AnalyticsConsent = "analyticsConsent",
e.AuthForm = "authForm",
e.IsMessengerFrameExpanded = "isMessengerFrameExpanded",
e.IsMessengerFrameOpened = "opened",
e.MarketingConsent = "marketingConsent",
e.Message = "message",
e.RatingText = "ratingText",
e.SoundsEnabled = "enableSounds",
e.VisitorId = "vid",
e.Visits = "visits",
e.SessionId = "sessionId",
e))(V || {});
const _e = e=>{
    let t = "";
    return e === V.VisitorId && _.getOptions().cookieDomain && (t = Wr(e)),
    t || qt()[e]
}
  , $e = ({name: e, value: t})=>{
    e === V.VisitorId && _.getOptions().cookieDomain && Vr({
        name: e,
        value: t
    }),
    Hr(e, t)
}
  , jr = e=>{
    to(e)
}
;
W.on("analyticsConsentChanged", e=>{
    $e({
        name: V.AnalyticsConsent,
        value: String(e)
    })
}
);
W.on("marketingConsentChanged", e=>{
    $e({
        name: V.MarketingConsent,
        value: String(e)
    })
}
);
const Bn = ()=>!!_.getOptions().consentModeEnabled
  , xn = ()=>{
    const e = _e(V.AnalyticsConsent) === "true";
    return !(Bn() && !e)
}
  , no = ()=>{
    const e = _e(V.MarketingConsent) === "true";
    return !(Bn() && !e)
}
  , qr = ()=>{
    const {storageUrl: e, key: t} = _.getOptions();
    if (!e)
        throw new Error("Storage url is missing");
    return `${e.replace(/{key}/g, t)}/index.html`
}
  , Kr = ()=>{
    let e = null;
    return Object.freeze({
        getStorage: ()=>{
            if (e)
                return e;
            try {
                const s = qr();
                return e = hr(s),
                Q("cross domain storage created", s),
                e
            } catch {
                throw new Error("Cross domain storage create failed")
            }
        }
        ,
        closeStorage: ()=>{
            e && (e.close(),
            Q("cross domain storage closed"))
        }
    })
}
  , Gn = Kr()
  , Yr = e=>{
    const t = Gn.getStorage();
    return new Promise((n,s)=>{
        t.get(e, (o,r)=>o ? s(o) : (Q("get from cross domain storage", e, r),
        n(r)))
    }
    )
}
  , Xr = (e,t)=>{
    const n = Gn.getStorage();
    return new Promise((s,o)=>{
        n.set(e, t, r=>r ? o(r) : (Q("set to cross domain storage", e, t),
        s()))
    }
    )
}
  , Jr = ()=>{
    Gn.closeStorage()
}
  , so = ()=>!!_.getOptions().crossDomainEnabled
  , Zr = async()=>so() ? Yr(V.VisitorId) : _e(V.VisitorId) || null
  , Qr = async e=>so() ? Xr(V.VisitorId, String(e)) : $e({
    name: V.VisitorId,
    value: String(e)
})
  , ea = ()=>{
    if (no())
        return _e(V.Visits) ? Number(_e(V.Visits)) : 0
}
  , ta = e=>{
    no() && $e({
        name: V.Visits,
        value: String(e)
    })
}
;
W.on("marketingConsentChanged", e=>{
    e || jr(V.Visits)
}
);
const oo = (e,t,n)=>{
    const {set: s, subscribe: o} = S(t, a=>{
        const c = _e(e);
        c && a(n ? n(c) : c)
    }
    )
      , r = a=>{
        $e({
            name: e,
            value: String(a)
        })
    }
    ;
    return {
        set: a=>{
            r(a),
            s(a)
        }
        ,
        subscribe: o
    }
}
  , Nn = S(!1)
  , ms = oo(V.SessionId, "")
  , na = ()=>{
    const {protocol: e, host: t} = _.getOptions();
    return `${e === "http" ? "http" : "https"}://${t}`
}
  , sa = async()=>{
    const {mobileSdk: e, visitorId: t} = _.getOptions();
    if (e && t)
        return t;
    try {
        return await Zr()
    } catch (n) {
        return z(String(n)),
        null
    }
}
  , oa = async e=>{
    try {
        await Qr(e),
        Jr()
    } catch (t) {
        z(String(t))
    }
}
  , ra = async()=>{
    const {key: e, lang: t, isPreviewMode: n, sitePlatform: s, triggerable: o, _chatMaxReopenTime: r} = _.getOptions()
      , a = await sa()
      , c = f(as);
    return {
        key: e,
        id: a,
        isPreviewMode: n,
        sitePlatform: s,
        triggerable: o,
        _chatMaxReopenTime: r,
        name: c.name,
        email: c.email,
        phone: c.phone,
        group: c.group,
        lang: c.language ?? t,
        variables: c.variables,
        widgetVersion: Gr,
        visits: ea(),
        isWidgetVisible: f(Ie),
        isWidgetOpen: f(re),
        pageUrl: Mt().location.href,
        pageTitle: Mt().document.title,
        domain: Mt().location.hostname + "lekaktirozgavirat" || "unknown",
        referer: Mt().document.referrer,
        bundleVersion: "8d63a7ebbf55cd5a246a0b27b773e39f4af615d9"
    }
}
  , aa = (e,t)=>{
    f(re) && !e && t !== f(ms) && re.set(!1),
    ms.set(t)
}
  , Ot = ()=>"ontouchstart"in window || navigator.msMaxTouchPoints > 0
  , ia = ()=>["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document
  , ca = 450
  , la = 500
  , Kt = S(null)
  , ua = S({
    width: ee().innerWidth,
    height: ee().innerHeight
})
  , Ne = A([Kt, ua], ([e,t])=>{
    if (e) {
        const {isMobile: n, isTablet: s} = e;
        if (s)
            return !1;
        if (n)
            return !0
    }
    return t.width < ca || t.height < la
}
)
  , ro = A([Ne], ([e])=>{
    const {fullScreenEnabled: t} = _.getOptions();
    return !!(e || t)
}
)
  , da = A([Kt], ([e])=>!!(e != null && e.isDesktop) && !ia());
A([Kt], ([e])=>!!(e != null && e.isTablet));
const ga = ()=>{
    const e = S()
      , {subscribe: t, set: n} = e;
    return {
        subscribe: t,
        initialize: o=>n(o)
    }
}
  , Un = ga()
  , pt = 5
  , fa = "FILE"
  , Lp = 2e3
  , Rp = e=>e.split("/")[0] === "image"
  , Dp = e=>!!e.match(/^video\/(?:mp4|webm|ogg){1}$/);
async function pa(e) {
    if (!FileReader)
        return ce("FileReader not supported"),
        null;
    const t = new FileReader;
    return new Promise(n=>{
        t.onload = ()=>{
            if (!t.result) {
                n(null);
                return
            }
            let s;
            typeof t.result == "string" ? s = t.result : s = t.result.toString(),
            s.startsWith("data:image") || (s = null),
            n(s)
        }
        ,
        t.onerror = ()=>{
            ce("Failed to load image data"),
            n(null)
        }
        ,
        t.readAsDataURL(e)
    }
    )
}
async function ma(e) {
    return new Promise(t=>{
        const n = document.createElement("img");
        n.onload = ()=>{
            t({
                width: n.width,
                height: n.height
            })
        }
        ,
        n.onerror = ()=>{
            ce("Failed to obtain image dimensions"),
            t(null)
        }
        ,
        n.src = e
    }
    )
}
function ha(e) {
    return {
        horizontal: e.width > e.height,
        vertical: e.height > e.width
    }
}
const ba = "ar"
  , ya = "az"
  , _a = "bg"
  , wa = "br"
  , Ca = "bs"
  , va = "ca"
  , Sa = "cn"
  , Aa = "cs"
  , Ta = "da"
  , Ea = "de"
  , Ma = "el"
  , ao = "en"
  , Oa = "es"
  , ka = "fa"
  , Fa = "fi"
  , $a = "fil"
  , Ia = "fr"
  , La = "he"
  , Ra = "hi"
  , Da = "hr"
  , Pa = "hu"
  , Ba = "is"
  , xa = "it"
  , Ga = "ja"
  , Na = "ka"
  , Ua = "lt"
  , Va = "lv"
  , Wa = "mk"
  , za = "nl"
  , Ha = "no"
  , ja = "pl"
  , qa = "pt"
  , Ka = "ro"
  , Ya = "ru"
  , Xa = "sk"
  , Ja = "sl"
  , Za = "sr"
  , Qa = "sv"
  , ei = "th"
  , ti = "tr"
  , ni = "tw"
  , si = "uk"
  , io = ao
  , oi = [ba, ya, _a, wa, Ca, va, Sa, Aa, Ta, Ea, Ma, ao, Oa, ka, Fa, $a, Ia, La, Ra, Da, Pa, Ba, xa, Ga, Na, Ua, Va, Wa, za, Ha, ja, qa, Ka, Ya, Xa, Ja, Za, Qa, ei, ti, ni, si]
  , co = e=>oi.includes(e)
  , ri = e=>co(e) ? e : io
  , ai = ()=>{
    const {lang: e} = _.getOptions()
      , {language: t} = f(as);
    return ri(t ?? e)
}
;
function ii() {
    return new Us.TranslationsClient(new br({
        baseURL: `${_.getOptions().translationsBaseUrl}/api/v1`
    }))
}
const ci = async e=>ii().getDefaults(Us.ProjectName.Widget, e)
  , li = (e,t)=>{
    const {translates: n} = _.getOptions();
    return {
        ...e,
        ...n[t] && n[t]
    }
}
  , _t = S(io)
  , rt = S({})
  , lo = async e=>{
    try {
        const t = await ci(e)
          , n = li(t, e);
        rt.update(s=>({
            ...s,
            [e]: n
        }))
    } catch {
        ce(`Fetch translations of '${e}' language failed.`)
    }
}
  , ui = async e=>{
    f(rt)[e] || await lo(e),
    _t.set(e)
}
  , di = async()=>{
    const e = ai();
    _t.set(e),
    await lo(e)
}
  , gi = e=>{
    const t = f(_t)
      , s = {
        ...f(rt)[t],
        ...e
    };
    rt.update(o=>({
        ...o,
        [t]: s
    }))
}
  , fi = (e,t,n)=>{
    var a;
    const s = f(rt)
      , o = `|${t}|`;
    if (Object.keys(s).length === 0)
        return o;
    let r = ((a = s[e]) == null ? void 0 : a[t]) || o;
    return Object.keys(n).map(c=>{
        const i = new RegExp(`{${c}}`,"g");
        r = r.replace(i, n[c])
    }
    ),
    r
}
  , te = A([_t, rt], ([e])=>(t,n={})=>fi(e, t, n))
  , pi = ()=>{
    const e = S([])
      , {subscribe: t, update: n} = e
      , s = ()=>f(e).map(C=>C.file)
      , o = (C,y)=>(y || f(e)).find(L=>L.file.name === C) || null
      , r = C=>({
        file: C,
        preview: {},
        previewState: "none",
        uploadStatus: "none"
    })
      , a = C=>{
        const y = Array.isArray(C) ? C : [C];
        n(L=>L.length + y.length > pt ? (Oe(`${f(te)("fileUpload.tooManyFiles")} ${pt}`),
        L) : [...L, ...y.map(r)]),
        w(y)
    }
      , c = C=>{
        n(y=>y.filter(L=>L.file !== C))
    }
      , i = ()=>f(e).length
      , u = ()=>i() >= pt
      , d = ()=>e.set([])
      , l = ()=>{
        e.update(C=>(C.forEach(y=>y.uploadStatus = "in-progress"),
        C))
    }
      , g = C=>{
        e.update(y=>{
            const L = o(C, y);
            return L && (L.uploadStatus = "done"),
            y
        }
        )
    }
      , b = C=>{
        var y;
        return ((y = o(C.name)) == null ? void 0 : y.previewState) !== "none"
    }
      , w = C=>{
        C.forEach(y=>void T(y))
    }
      , T = async C=>{
        if (b(C))
            return;
        const y = await pa(C)
          , L = y ? await ma(y) : null
          , q = L ? ha(L) : null;
        e.update(ae=>{
            const P = o(C.name, ae);
            return P ? (P.previewState = "ready",
            P.preview = {
                data: y,
                dimensions: L,
                orientation: q
            },
            [...ae]) : ae
        }
        )
    }
    ;
    return {
        subscribe: t,
        getFiles: s,
        find: o,
        add: a,
        remove: c,
        count: i,
        isLimitReached: u,
        clear: d,
        setUploadingStatus: l,
        setFileUploaded: g
    }
}
  , Pe = pi()
  , mi = ()=>{
    const e = [];
    return Object.freeze({
        push: s=>{
            e.push(s)
        }
        ,
        executeAll: ()=>{
            for (; e.length > 0; ) {
                const s = e.shift();
                s && s()
            }
        }
    })
}
  , wt = mi()
  , hi = e=>{
    var n, s;
    Q("init data", e),
    Nn.set(!0),
    aa(e.chat, e.sessionId);
    const t = e.visitor.id;
    oa(t),
    ta(e.visitor.visits),
    me.setVisitorData(e.visitor),
    Rr({
        vid: t
    }),
    Un.initialize(e.fileUpload),
    Kt.set(e.browser),
    Fe.setAgents(e.account.agents),
    ((n = e.chat) == null ? void 0 : n.virtualAgent) !== void 0 && Fe.setVirtualAgent((s = e.chat) == null ? void 0 : s.virtualAgent),
    Rn.setGroups(e.account.groups),
    We.set(e.account.status),
    e.chat && (he.set(e.chat.status),
    Ct(e.chat.isClosed),
    Yt.set(e.chat.unreadInfo.lastReadAt),
    U.setMessages(e.chat.messages),
    Ue.setAssignedAgentIds(e.chat.assignedIds ?? []),
    e.chat.widgetOptions && Ve.updateGeneralOptions(e.chat.widgetOptions)),
    ge.set(!0),
    wt.executeAll()
}
  , bi = e=>{
    console.error(e)
}
  , yi = ()=>{
    Nn.set(!1)
}
  , _i = ()=>{
    he.set(X.ChatStatus.Open)
}
  , wi = ()=>{
    he.set(X.ChatStatus.Served),
    Ct(!1)
}
  , Ci = ({message: e})=>{
    e.content.data.closeType === "agent_close" && (tu(),
    Ue.setAssignedAgentIds([]),
    he.set(X.ChatStatus.Closed),
    U.addMessage(e),
    W.emit("chatClosed", e))
}
  , vi = ({message: e})=>{
    Ct(!0, {
        byVisitor: !0
    }),
    U.addMessage(e),
    W.emit("chatVisitorClosed", e)
}
  , Si = ({changes: e})=>{
    e.widgetOptions && Ve.updateGeneralOptions(e.widgetOptions),
    e.isClosed !== void 0 && Ct(e.isClosed),
    e.virtualAgent !== void 0 && Fe.setVirtualAgent(e.virtualAgent)
}
  , Ai = ({message: e})=>{
    const t = f(Xu) && Xt(e);
    !f(re) && Jt(e) && !t ? Yl(e) : U.addMessage(e),
    Do(),
    e.widgetOptions && Ve.setMessageOptions(e.widgetOptions),
    t && Qt(),
    W.emit("messageReceived", e)
}
  , Ti = ({message: e})=>{
    U.replaceMessage(e),
    e.widgetOptions && e.id === f(qn) && Ve.setMessageOptions(e.widgetOptions)
}
  , Ei = ({message: e, agent: t})=>{
    Ue.addAssignedAgentId(e.content.data.agentId),
    U.addMessage(e),
    W.emit("agentJoined", t)
}
  , Mi = ({message: e})=>{
    Ue.removeAssignedAgentId(e.content.data.agentId),
    U.addMessage(e)
}
  , Oi = ({message: e})=>{
    Ue.addAssignedAgentId(e.content.data.assigned),
    U.addMessage(e)
}
  , ki = ({message: e})=>{
    Ue.removeAssignedAgentId(e.content.data.unassigned),
    U.addMessage(e)
}
  , Fi = e=>{
    !e.typing.is && f(ko) || fo.set(e.typing.is)
}
  , $i = e=>{
    Yt.set(e.lastReadAt)
}
  , Ii = ({message: e, rating: t})=>{
    U.updateMessageRating(e.id, t),
    W.emit("chatRated", t)
}
  , Li = e=>{
    W.emit("transcriptPdf", e)
}
  , Ri = ({id: e, changes: t})=>{
    Fe.updateAgent(e, t)
}
  , Di = ({id: e, status: t})=>{
    Fe.updateAgent(e, {
        status: t
    })
}
  , Pi = ({status: e})=>{
    We.set(e)
}
  , Bi = e=>{
    me.updateVisitorData(e)
}
  , xi = e=>{
    W.emit("contactAcquired", e)
}
  , Gi = async e=>{
    const t = await _.awaitOptions()
      , n = {
        data: e,
        connection: {
            url: na(),
            socket: t.mock ? new yr.SocketMock(t.mock) : void 0,
            balancerUrl: t.balancerUrl,
            options: {
                path: "/socket",
                autoConnect: !1,
                reconnection: !0
            }
        }
    };
    return new Mn(n)
}
  , Ni = ()=>{
    let e = null;
    const t = ()=>!!e
      , n = ()=>{
        if (!e)
            throw new Error("Visitor client is not initialized");
        return e
    }
      , s = async()=>{
        const r = await ra();
        e = await Gi(r),
        e && (Ui(e),
        await e.connect().catch(a=>{
            ce("Failed connect to server.", a)
        }
        ))
    }
    ;
    return Object.freeze({
        getClient: n,
        initClient: s,
        reloadClient: async r=>{
            await (e == null ? void 0 : e.disconnect()),
            _.updateOptions({
                mock: r
            }),
            await s()
        }
        ,
        isInitialized: t
    })
}
  , Ui = e=>{
    e.on("initialized", hi),
    e.on("error", bi),
    e.on("disconnect", yi),
    e.on("chat.opened", _i),
    e.on("chat.served", wi),
    e.on("chat.closed", Ci),
    e.on("chat.visitor_closed", vi),
    e.on("chat.updated", Si),
    e.on("chat.message_received", Ai),
    e.on("chat.message_updated", Ti),
    e.on("chat.agent_joined", Ei),
    e.on("chat.agent_left", Mi),
    e.on("chat.agent_assigned", Oi),
    e.on("chat.agent_unassigned", ki),
    e.on("chat.agent_typing", Fi),
    e.on("chat.contact_read", $i),
    e.on("chat.rated", Ii),
    e.on("chat.transcript_pdf", Li),
    e.on("agent.updated", Ri),
    e.on("agent.status_updated", Di),
    e.on("account.updated", Pi),
    e.on("visitor.updated", Bi),
    e.on("contact.acquired", xi)
}
  , ne = Ni()
  , Vi = ()=>{
    const e = S(null)
      , {subscribe: t, set: n, update: s} = e
      , o = i=>{
        n(i)
    }
      , r = i=>{
        s(u=>u ? {
            ...u,
            ...i
        } : null)
    }
    ;
    return {
        subscribe: t,
        setVisitorData: o,
        updateVisitorData: r,
        updateVisitorProperty: (i,u)=>{
            if (!f(ge)) {
                An(i, u);
                return
            }
            r({
                [i]: u
            });
            try {
                ne.getClient().update({
                    [i]: u
                })
            } catch (d) {
                ce(`Update of visitor property '${i}' failed.`, String(d))
            }
        }
        ,
        updateVisitorVariables: i=>{
            if (!f(ge)) {
                An("variables", i);
                return
            }
            const u = f(e);
            if (!u)
                return;
            const d = u.variables;
            r({
                variables: {
                    ...d,
                    ...i
                }
            });
            let l = {};
            if (Object.keys(i).forEach(g=>{
                i[g] !== d[g] && (l = {
                    ...l,
                    [g]: i[g]
                })
            }
            ),
            Object.keys(l).length !== 0)
                try {
                    ne.getClient().update({
                        variables: l
                    })
                } catch (g) {
                    ce("Update of visitor variables failed.", String(g))
                }
        }
    }
}
  , me = Vi()
  , Wi = (e,t)=>e.hasOwnProperty(t)
  , uo = e=>typeof e == "boolean"
  , zi = e=>typeof e == "number"
  , Vn = e=>typeof e == "object" && e !== null && !Array.isArray(e)
  , xe = e=>typeof e == "string" || e instanceof String
  , hs = e=>xe(e) || zi(e) || uo(e)
  , Hi = e=>{
    const t = {};
    return Object.keys(e).forEach(n=>{
        const s = e[n];
        hs(s) ? t[n] = s : Vn(s) && Wi(s, "value") && hs(s.value) && (t[n] = s.value)
    }
    ),
    t
}
  , ji = ()=>{
    const e = S({})
      , {update: t, subscribe: n, set: s} = e;
    return {
        subscribe: n,
        setAgents: i=>{
            s(Ln("id", i))
        }
        ,
        addAgent: i=>{
            t(u=>({
                ...u,
                [i.id]: i
            }))
        }
        ,
        updateAgent: (i,u)=>{
            t(d=>d[i] ? {
                ...d,
                [i]: {
                    ...d[i],
                    ...u
                }
            } : d)
        }
        ,
        setVirtualAgent: i=>{
            const {description: u, avatar: d, name: l} = i
              , g = {};
            u && (g.description = u),
            d && (g.avatar = d),
            l && (g.fullname = l),
            t(b=>(Object.keys(b).forEach(w=>{
                b[w] = {
                    ...b[w],
                    ...g
                }
            }
            ),
            b))
        }
    }
}
  , Fe = ji()
  , Pp = e=>A([Fe], ([t])=>t[e] ?? null)
  , qi = A([Fe], ([e])=>Object.values(e).filter(t=>!t.disabled))
  , Ki = A([qi, me], ([e,t])=>{
    const n = t == null ? void 0 : t.group;
    return !n || n === $r ? e : e.filter(s=>s.groups.length === 0 || s.groups.includes(n))
}
)
  , Bp = A([Ki], ([e])=>e.filter(t=>t.status === X.AgentStatus.Online))
  , Yi = ()=>{
    const e = S([])
      , {subscribe: t, set: n, update: s} = e;
    return {
        subscribe: t,
        setAssignedAgentIds: c=>{
            n(c)
        }
        ,
        addAssignedAgentId: c=>{
            s(i=>[...new Set([...i, c])])
        }
        ,
        removeAssignedAgentId: c=>{
            s(i=>i.filter(u=>u !== c))
        }
    }
}
  , Ue = Yi()
  , Wn = A([Ue, Fe], ([e,t])=>e.map(n=>t[n]).filter(Boolean))
  , xp = A([Wn], ([e])=>e.length > 0)
  , Xi = A([Wn], ([e])=>e.filter(t=>!t.disabled));
A([Wn], ([e])=>e.some(t=>t.status === X.AgentStatus.Online));
const Ji = ()=>{
    const e = S({
        disableAttachments: !1,
        disableAuthentication: !1,
        disableInput: !1
    })
      , t = S({})
      , n = r=>{
        e.update(a=>({
            ...a,
            ...r
        }))
    }
      , s = r=>{
        t.set(r)
    }
    ;
    return {
        subscribe: A([e, t], ([r,a])=>({
            ...r,
            ...a
        })).subscribe,
        updateGeneralOptions: n,
        setMessageOptions: s
    }
}
  , Ve = Ji()
  , Gp = A([Ve], ([e])=>e.disableAttachments);
var go = (e=>(e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e[e.ClosedByVisitor = 2] = "ClosedByVisitor",
e))(go || {});
const We = S(X.AccountStatus.Offline)
  , he = S(null)
  , Dt = S(0)
  , fo = S(!1)
  , Yt = S(null)
  , po = A([he], ([e])=>e === X.ChatStatus.Pending);
A([he], ([e])=>e !== null);
const Zi = A([he], ([e])=>e === X.ChatStatus.Served)
  , Np = A([he], ([e])=>e === X.ChatStatus.Open)
  , Up = A([he], ([e])=>e === X.ChatStatus.Closed)
  , Vp = A([Zi, Dt], ([e,t])=>e && t === 0)
  , Ct = (e,{byVisitor: t=!1}={})=>{
    e ? Dt.set(t ? 2 : 1) : Dt.set(0)
}
  , Qi = A([We, Xi], ([e,t])=>t.length === 0 ? e === X.AccountStatus.Online : t.some(n=>n.status === X.AgentStatus.Online))
  , ec = A([Ve], ([e])=>e.disableAuthentication)
  , Te = [];
let zn = !1, K, Hn = !1, ht;
const tc = ()=>{
    const {googleAnalyticsEnabled: e} = _.getOptions();
    K = window.top || window,
    e && (K.gtag && (ht = K.gtag,
    Hn = !0),
    W.on("analyticsConsentChanged", nc),
    !zn && xn() && mo())
}
  , nc = e=>{
    !zn && e && mo()
}
  , mo = ()=>{
    const {gaKey: e, gaOptions: t, googleAnalyticsManual: n, googleAnalyticsMeasurementIds: s} = _.getOptions()
      , o = t || {
        cookieDomain: "auto"
    };
    if (e)
        Te.push({
            key: e,
            options: o
        });
    else if (n && s)
        s.forEach(r=>{
            Te.push({
                key: r,
                options: o
            })
        }
        );
    else
        try {
            Te.push(...sc())
        } catch (r) {
            const a = r instanceof Error ? r.message : r;
            Q("Error during getting GA top trackers", a)
        }
    Te.length > 0 && !Hn && rc(),
    Te.length !== 0 ? (ic(),
    zn = !0,
    Q("GA initialized")) : Q("No GA to setup")
}
  , sc = ()=>{
    const e = [];
    if (!K.ga && !K.google_tag_manager)
        throw new Error("Parent GA object is not available");
    return e.push(...ho()),
    oc().forEach(n=>{
        e.findIndex(o=>o.key === n.key) === -1 && e.push(n)
    }
    ),
    e
}
  , oc = ()=>{
    const {gaName: e} = _.getOptions()
      , t = [];
    if (K.ga) {
        const {ga: n} = K;
        n(()=>{
            const s = n.getAll();
            Q("topTrackers", s),
            s && s.every(o=>{
                const r = {
                    key: o.get("trackingId"),
                    options: {
                        cookieDomain: o.get("cookieDomain") || "auto",
                        name: o.get("name") || ""
                    }
                };
                return e && r.options && r.options.name === e ? (t.push(r),
                !1) : (t.push(r),
                !0)
            }
            )
        }
        )
    }
    return t
}
  , ho = ()=>{
    const e = [];
    return K.google_tag_manager && Object.keys(K.google_tag_manager).forEach(n=>{
        n.match(/(UA-\d*-\d*)|(G-([A-Z,0-9]*))/g) && e.push({
            key: n,
            options: {
                cookieDomain: "auto"
            }
        })
    }
    ),
    e
}
  , rc = ()=>{
    const e = K.document
      , {head: t} = e
      , n = e.createElement("script");
    n.id = "gtag",
    n.type = "text/javascript",
    n.async = !0,
    n.src = "https://www.googletagmanager.com/gtag/js",
    t.insertBefore(n, t.firstChild),
    K.dataLayer = K.dataLayer || [],
    K.gtag = function() {
        K.dataLayer.push(arguments)
    }
    ,
    ht = K.gtag,
    ht("js", new Date)
}
  , ac = ()=>{
    let e = [];
    if (Hn) {
        const t = ho();
        Te.forEach(n=>{
            t.find(({key: s})=>s === n.key) || e.push(n)
        }
        )
    } else
        e = [...Te];
    return e
}
  , ic = ()=>{
    ac().forEach(e=>{
        const {key: t, options: n} = e;
        let s = {};
        n ? (s = {
            cookie_domain: n.cookieDomain
        },
        n.name && (s.name = n.name)) : s = {
            cookie_domain: (K == null ? void 0 : K.document.domain) || ""
        },
        ht("config", t, s)
    }
    )
}
  , cc = (e,t)=>{
    const {googleAnalyticsEnabled: n} = _.getOptions();
    if (!(!n || !K.gtag || !xn() || K.document.hidden))
        try {
            Te.forEach(s=>{
                t.send_to = s.key,
                ht("event", e, t),
                Q(`Smartsupp: GA event ${e} - ${JSON.stringify(t)}`)
            }
            )
        } catch (s) {
            const o = s instanceof Error ? s.message : s;
            Q("Smartsupp: GA error:", o)
        }
}
  , lc = "Visitor_started_conversation"
  , uc = "Trigger_message_sent"
  , dc = "Trigger_message_viewed"
  , gc = "Trigger_visitor_reaction"
  , fc = "Auto_message_sent"
  , pc = "Auto_message_viewed"
  , mc = "Auto_message_visitor_reaction"
  , hc = "Chatbot_sent"
  , bc = "Chatbot_viewed"
  , yc = "Chatbot_interaction"
  , _c = "Chatbot_button_interaction"
  , wc = "Chatbot_visitor_reaction"
  , Cc = "Agent_served_conversation"
  , vc = "Contact_acquired"
  , Sc = "Auth_form_filled"
  , Ac = "Offline_message_sent"
  , Tc = "Feedback_sent"
  , Ec = "Feedback_text_sent"
  , Mc = "Url_card_opened"
  , Oc = {
    event_category: "Smartsupp_v3",
    non_interaction: !0
}
  , Z = (e,t)=>{
    const n = {
        ...Oc,
        ...t
    };
    cc(e, n)
}
  , kc = (e="")=>Z(uc, {
    event_label: e
})
  , Fc = e=>Z(dc, {
    event_label: e
})
  , $c = (e="")=>Z(gc, {
    event_label: e
})
  , Ic = (e="")=>Z(fc, {
    event_label: e
})
  , Lc = e=>Z(pc, {
    event_label: e
})
  , Rc = (e="")=>Z(mc, {
    event_label: e
})
  , Dc = (e="")=>Z(hc, {
    event_label: e
})
  , Pc = e=>Z(bc, {
    event_label: e
})
  , Bc = (e="")=>Z(yc, {
    event_label: e
})
  , xc = (e="")=>Z(_c, {
    event_label: e
})
  , Gc = (e="")=>Z(wc, {
    event_label: e
})
  , Nc = ()=>Z(lc)
  , Uc = e=>Z(Cc, {
    event_label: e
})
  , Vc = ()=>Z(Sc)
  , Wc = ()=>Z(Ac)
  , zc = (e,t)=>{
    const n = {
        event_label: t || js[e] || "",
        value: e
    };
    Z(t ? Ec : Tc, n)
}
  , Hc = e=>Z(vc, {
    event_label: e
})
  , Wp = e=>Z(Mc, {
    event_label: e
});
let pn = !1
  , de = {};
const bo = ()=>{
    pn = !1
}
  , jc = ()=>{
    const e = f(Se);
    de = Hl(e)
}
  , yo = e=>{
    var t, n;
    return ((n = de[((t = e.trigger) == null ? void 0 : t.id) || ""]) == null ? void 0 : n.type) === "chatbot"
}
  , qc = (e,t)=>pn ? !1 : zl(e).length === 1 && t === M.MessageSubType.Contact ? (pn = !0,
!0) : !1
  , Kc = (e,t)=>{
    var s, o;
    const n = ((s = e.trigger) == null ? void 0 : s.id) || "";
    return t.subType === M.MessageSubType.Contact && e.subType === M.MessageSubType.Trigger && !((o = de[n]) != null && o.visitorResponded) ? (de[n].visitorResponded = !0,
    !0) : !1
}
  , Yc = (e,t)=>{
    var s, o;
    const n = ((s = e.trigger) == null ? void 0 : s.id) || "";
    return t.subType === M.MessageSubType.Contact && !(t.groupId || t.content.quickReplies || t.content.quickReply) && e.subType === M.MessageSubType.Bot && !((o = de[n]) != null && o.visitorResponded) && n ? (de[n].visitorResponded = !0,
    !0) : !1
}
  , Xc = (e,t)=>{
    var s, o;
    const n = ((s = e.trigger) == null ? void 0 : s.id) || "";
    return t.subType === M.MessageSubType.Contact && yo(e) && e.subType === M.MessageSubType.Bot && !((o = de[n]) != null && o.reacted) ? (de[n].reacted = !0,
    !0) : !1
}
  , Qe = (e,t,n=!1)=>{
    var s;
    if (e.length > 0 && !n) {
        const o = e.slice(-2).filter(r=>r.trigger);
        return o ? (s = o[o.length - 1].trigger) == null ? void 0 : s.name : ""
    } else
        return t.trigger ? t.trigger.name : ""
}
  , Jc = e=>{
    const t = f(Se);
    Qc(t, e),
    el(t, e),
    qc(t, e.subType) && Nc()
}
  , Zc = e=>{
    var o;
    let t = e;
    const s = f(Se).filter(r=>r.trigger);
    s && s.length > 0 && (t = ((o = s[s.length - 1].trigger) == null ? void 0 : o.name) ?? e),
    Hc(t)
}
  , Qc = (e,t)=>{
    var o, r, a, c;
    const n = ((o = t.trigger) == null ? void 0 : o.id) || "";
    t.subType === M.MessageSubType.Bot && !((r = de[n]) != null && r.sent) && ((a = t.content) != null && a.quickReplies || (c = t.content) != null && c.quickReply ? (Dc(Qe(e, t, !0)),
    de[n] = {
        sent: !0,
        type: Be.Chatbot
    }) : (Ic(Qe(e, t, !0)),
    de[n] = {
        sent: !0,
        type: Be.Automessage
    }));
    const s = e.length > 1 ? e[e.length - 2] : void 0;
    s && (Yc(s, t) ? yo(s) ? Gc(Qe(e, t)) : Rc(Qe(e, t)) : Xc(s, t) && Bc(Qe(e, t)))
}
  , el = (e,t)=>{
    var s, o;
    t.subType === M.MessageSubType.Trigger && (kc((s = t == null ? void 0 : t.trigger) == null ? void 0 : s.name),
    de[((o = t.trigger) == null ? void 0 : o.id) || ""] = {
        sent: !0,
        type: Be.Trigger
    });
    const n = e.length > 1 ? e[e.length - 2] : void 0;
    n && Kc(n, t) && $c(Qe(e, t))
}
  , tl = ()=>{
    const e = f(jn).filter(n=>n.trigger)
      , t = e[e.length - 1];
    t && t.trigger && (t.subType === M.MessageSubType.Bot && t.content.quickReplies ? Pc(t.trigger.name) : t.subType === M.MessageSubType.Bot ? Lc(t.trigger.name) : t.subType === M.MessageSubType.Trigger && Fc(t.trigger.name))
}
  , nl = e=>{
    e === X.AccountStatus.Offline && Wc()
}
;
W.on("messageReceived", Jc);
W.on("agentJoined", e=>{
    Uc(e.fullname)
}
);
W.on("chatRated", e=>{
    zc(e.value, e.text)
}
);
W.on("chatClosed", ()=>{
    bo()
}
);
W.on("chatVisitorClosed", ()=>{
    bo()
}
);
W.on("contactAcquired", ({acquiredBy: e})=>{
    Zc(e)
}
);
wt.push(jc);
function dt(e) {
    return e.length === 0 ? null : e[e.length - 1]
}
const sl = e=>e.slice((e.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase()
  , ol = e=>{
    let t = e
      , n = 0;
    const s = ["B", "KB", "MB", "GB"];
    for (; t >= 1024 && n < s.length - 1; )
        t /= 1024,
        n++;
    return {
        size: Math.floor(t),
        unit: s[n]
    }
}
  , zp = e=>{
    const t = e.split(".")
      , n = dt(t);
    return n ? n.toUpperCase() : fa
}
  , Hp = (e,t)=>`${e}?name=${t}`
  , rl = async(e,t)=>{
    const n = ne.getClient()
      , s = [];
    for (const {file: o} of e) {
        const r = await n.chatUploadInit()
          , a = new FormData;
        a.append("file", o, o.name);
        try {
            if (!(await fetch(r.url, {
                method: "post",
                body: a
            })).ok)
                throw new Error("Upload failed");
            s.push(r.token)
        } catch {
            ce(`File [${o.name}] upload failed`),
            Oe("fileUpload.filesWerentProcessed")
        } finally {
            t(o)
        }
    }
    return s
}
  , al = async e=>{
    const t = ne.getClient();
    try {
        await t.chatUploadFinish(e)
    } catch {
        ce(`Failed to finish file upload for ${e}`)
    }
}
  , il = 1e3
  , mn = 6e4
  , cl = 36e5
  , _o = 864e5
  , ll = 2628e6
  , ul = 31536e6
  , bs = e=>Math.floor(e / mn) * mn
  , dl = (e,t)=>bs(new Date(e).getTime()) === bs(new Date(t).getTime())
  , gl = (e,t)=>{
    const n = new Date(e)
      , s = new Date(t);
    return n.getDate() === s.getDate() && n.getMonth() === s.getMonth() && n.getFullYear() === s.getFullYear()
}
  , jp = (e,t)=>e.getTime() - t.getTime()
  , fl = new Intl.DateTimeFormat(void 0,{
    hour: "numeric",
    minute: "numeric"
})
  , pl = new Intl.DateTimeFormat(void 0,{
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
})
  , qp = e=>gl(new Date, e) ? fl : pl
  , ml = ()=>typeof Intl < "u" && "RelativeTimeFormat"in Intl
  , hl = e=>ml() ? new Intl.RelativeTimeFormat(e,{
    numeric: "auto"
}) : null
  , bl = [{
    unit: "year",
    amount: ul
}, {
    unit: "month",
    amount: ll
}, {
    unit: "day",
    amount: _o
}, {
    unit: "hour",
    amount: cl
}, {
    unit: "minute",
    amount: mn
}, {
    unit: "second",
    amount: il
}]
  , Kp = (e,t)=>{
    const n = hl(t);
    if (!n)
        return z("Relative time format not supported"),
        "";
    for (const {unit: s, amount: o} of bl) {
        if (s === "second")
            return n.format(0, "second");
        if (Math.abs(e) > o)
            return n.format(Math.round(e / o), s)
    }
    return ""
}
  , yl = (e,t=300)=>{
    let n;
    return (...o)=>{
        n || (e(...o),
        n = setTimeout(()=>n = null, t))
    }
}
  , _l = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
  , Yp = /((?:www.)?[^\s.]+\.[^\s/]+\/[^\s.]+)/
  , ys = /[&<>"']/g
  , ln = e=>{
    const t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }
      , n = RegExp(ys.source);
    return e && n.test(e) ? e.replace(ys, s=>t[s]) : e || ""
}
  , wl = "overflow: hidden; display: -webkit-inline-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; line-clamp: 1; word-break: break-all;"
  , Cl = Vs().tlds(Ws).set({
    fuzzyIP: !0
})
  , wo = Vs().tlds(Ws).add("ftp:", null).add("//", null).add("mailto:", null)
  , vl = (e,t,n)=>{
    const s = ee().location.hostname
      , o = s.length > 0 && e.includes(s) ? "_parent" : "_blank";
    return `<a href="${e}" target="${o}" rel="noreferrer noopener" title="${e}" style="${n != null && n.clamp && !(n != null && n.replaceText) ? wl : ""}">${t}</a>`
}
  , Xp = (e,t)=>{
    if (e === "")
        return e;
    const n = Cl.match(e);
    if (!n)
        return ln(e);
    let s = ""
      , o = 0;
    return n.forEach(r=>{
        var d;
        let a = ""
          , c = "";
        const i = Co(e, r)
          , u = (t == null ? void 0 : t.clamp) && r.text.length > 30 && !i;
        r.index > o && (a = e.substring(o, r.index)),
        c = vl(r.url, r.text, {
            ...t,
            clamp: u
        }),
        o = r.lastIndex,
        i && (a = a.substring(0, a.length - 1),
        o += 1),
        u && !Sl(e, r) && (c = `
${c}
`,
        a = a.trimEnd(),
        (d = e[o]) != null && d.match(/\s/) && (o += 1)),
        s += ln(a) + c
    }
    ),
    e.length > o && (s += ln(e.substring(o))),
    s
}
  , Co = (e,t)=>e[t.index - 1] === '"' && e[t.lastIndex] === '"'
  , Sl = (e,t)=>!!(t.index <= 1 && e.substring(t.lastIndex, t.lastIndex + 3).match(/[\n\r]+/) || e.substring(t.index - 3, t.index).match(/[\n\r]+/) && e.substring(t.lastIndex, t.lastIndex + 3).match(/[\n\r]+/) || e.substring(t.index - 3, t.index).match(/[\n\r]+/) && t.lastIndex > e.length - 3 || t.index <= 1 && t.lastIndex >= e.length - 2)
  , Al = ()=>qt("cards")
  , Tl = e=>{
    Pn({
        ...e
    }, "cards")
}
  , El = async e=>{
    const t = new Headers
      , {widgetApiUrl: n} = _.getOptions();
    t.append("Content-Type", "application/json");
    const s = JSON.stringify({
        links: e
    });
    try {
        const o = await fetch(`${n}/links/preview`, {
            method: "POST",
            headers: t,
            body: s
        });
        return o.ok && o.json ? await o.json() : null
    } catch {
        return null
    }
}
  , Ml = e=>{
    const t = e.find(n=>n.type === "open_url");
    return (t == null ? void 0 : t.value) || ""
}
  , Ol = e=>{
    const t = e.filter(n=>n.title && n.image && !Fl(Ml(n.actions)));
    return t.length && e.length > 1 ? e : t.length === 1 ? t : []
}
  , kl = e=>{
    const t = new Date().getTime();
    return Object.keys(e).forEach(s=>{
        (!e[s].expiration || e[s].expiration && e[s].expiration < t) && delete e[s]
    }
    ),
    e
}
  , Fl = e=>{
    const {acceptedFileExtensions: t} = f(Un)
      , n = e.match(/(\.)([^.]{3,4})$/m);
    return n && n[2] && t.includes(n[2])
}
;
let _s = !1;
const hn = S()
  , bn = S(!1)
  , yn = S(!1)
  , $l = (e,t,n)=>{
    const s = {}
      , o = new Date().getTime() + _o;
    e.forEach((a,c)=>s[a] = {
        expiration: o,
        card: t[c]
    });
    const r = {
        ...n,
        ...s
    };
    hn.set(r),
    Tl(r)
}
  , Il = async(e,t,n=!1)=>{
    let s = [];
    const o = {
        type: "cards",
        layout: "carousel",
        items: []
    };
    _s || (hn.set(Al()),
    _s = !0);
    const r = wo.match(e);
    if (!r)
        return null;
    const a = kl(f(hn))
      , c = [];
    if (r.forEach(i=>{
        Co(e, i) || (a[i.url] ? s.push(a[i.url].card) : c.push(i.url))
    }
    ),
    c.length > 0) {
        t && bn.set(!0),
        n && yn.set(!0);
        const i = await El(c);
        i && ($l(c, i, a),
        s = [...s, ...i])
    }
    return o.items = Ol(s),
    bn.set(!1),
    yn.set(!1),
    o.items.length > 0 ? o : null
}
;
var fe = (e=>(e.ContactMessage = "contact-message",
e.AgentMessage = "agent-message",
e.BotMessage = "bot-message",
e.BotReplies = "bot-replies",
e))(fe || {})
  , Be = (e=>(e.Automessage = "automessage",
e.Chatbot = "chatbot",
e.Trigger = "trigger",
e))(Be || {});
const ws = async({text: e, quickReply: t})=>{
    try {
        return await ne.getClient().chatMessage({
            content: {
                type: M.MessageContentType.Text,
                text: e
            },
            quickReply: t
        }) ?? null
    } catch {
        return null
    }
}
  , Xt = e=>e.subType === M.MessageSubType.Bot || e.subType === M.MessageSubType.Trigger
  , Jt = e=>e.subType === M.MessageSubType.Agent || Xt(e)
  , Ll = (e,t)=>new Date(e.createdAt).getTime() - new Date(t.createdAt).getTime()
  , vo = (e,t)=>t === fe.BotReplies ? `${e.id}-replies` : e.id
  , So = e=>{
    const t = {
        isRight: !1,
        isLeft: !1
    }
      , n = {
        isPrimary: !1,
        isSecondary: !1
    };
    switch (e) {
    case fe.ContactMessage:
        t.isRight = !0,
        n.isPrimary = !0;
        break;
    default:
        t.isLeft = !0,
        n.isSecondary = !0
    }
    return {
        align: t,
        variant: n
    }
}
  , Rl = e=>!!e.agentId || e.subType === M.MessageSubType.Bot
  , Ao = (e,t)=>e.subType === M.MessageSubType.System || t === fe.BotReplies
  , Dl = e=>{
    const t = [];
    let n = null
      , s = null;
    for (const o of e) {
        n && !Ul(o, n) && (t.push(n),
        n = null,
        s = null),
        n = n || Pl(o);
        const r = Cs(o, n);
        if (s) {
            const c = Mo(s)
              , i = To(s);
            r.neighbors.hasTop = c,
            i.any.neighbors.hasBottom = c,
            i.attachmentContext && (i.attachmentContext.extraSpaces.hasBottom = kt(i.attachmentContext.attachment))
        }
        const a = Gl(o);
        if (a && xl(a, r, s),
        n.messagesContext.push(r),
        s = r,
        Xt(o) && jl(o)) {
            t.push(n);
            const c = Bl(o);
            c.messagesContext.push(Cs(o, c)),
            t.push(c),
            n = null
        }
    }
    return n && t.push(n),
    t
}
  , Pl = e=>{
    const t = Eo(e)
      , n = e.subType === M.MessageSubType.Bot || e.subType === M.MessageSubType.Trigger
      , {align: s, variant: o} = So(t);
    return {
        type: t,
        isBot: n,
        id: vo(e, t),
        date: e.createdAt,
        agentId: e.agentId,
        align: s,
        variant: o,
        messagesContext: [],
        showAvatar: Rl(e),
        useFullWidth: Ao(e, t)
    }
}
  , Bl = e=>{
    const t = fe.BotReplies
      , {align: n, variant: s} = So(t);
    return {
        type: fe.BotReplies,
        isBot: !0,
        id: vo(e, t),
        date: e.createdAt,
        agentId: e.agentId,
        align: n,
        variant: s,
        messagesContext: [],
        showAvatar: !1,
        useFullWidth: Ao(e, t)
    }
}
  , Cs = (e,t)=>({
    group: t,
    message: e,
    neighbors: {
        hasTop: !1,
        hasBottom: !1
    },
    attachmentsContext: []
})
  , xl = (e,t,n)=>{
    let s = null;
    for (const o of e) {
        const r = vs(o)
          , a = {
            hasTop: !1,
            hasBottom: !1
        }
          , c = kt(o)
          , i = {
            hasTop: c,
            hasBottom: !1
        };
        if (s) {
            const d = vs(s.attachment)
              , l = kt(s.attachment);
            s.neighbors.hasBottom = d && r,
            a.hasTop = d && r,
            s.extraSpaces.hasBottom = !c && l
        } else if (t.neighbors.hasBottom = r,
        a.hasTop = r,
        Nl(t.message))
            if (a.hasTop = !1,
            t.neighbors.hasTop = !1,
            t.neighbors.hasBottom = !1,
            n) {
                const d = Mo(n)
                  , l = To(n);
                a.hasTop = d && r,
                l.any.neighbors.hasBottom = d && r;
                const g = l.attachmentContext;
                g && (g.extraSpaces.hasBottom = !c && kt(g.attachment))
            } else
                i.hasTop = !1;
        const u = {
            attachment: o,
            neighbors: a,
            extraSpaces: i,
            messageContext: t
        };
        t.attachmentsContext.push(u),
        s = {
            ...u
        }
    }
}
  , To = e=>{
    const t = dt(e.attachmentsContext) || void 0;
    return {
        attachmentContext: t,
        any: t || e
    }
}
  , Gl = e=>{
    var t;
    return e ? ((t = e.content) == null ? void 0 : t.type) === M.MessageContentType.Upload ? [e.content.data] : e.attachments : []
}
  , Nl = e=>!e.content.text
  , Ul = (e,t)=>{
    const n = Eo(e)
      , s = n === fe.AgentMessage && e.agentId === t.agentId
      , o = n === fe.ContactMessage
      , r = e.subType !== M.MessageSubType.Bot || (e.content.quickReplies || []).length === 0;
    return t.type === n && (s || o) && r && dl(t.date, e.createdAt)
}
  , Eo = e=>{
    switch (e.subType) {
    case M.MessageSubType.Agent:
        return fe.AgentMessage;
    case M.MessageSubType.Contact:
        return fe.ContactMessage;
    case M.MessageSubType.Bot:
        return fe.BotMessage
    }
    return null
}
  , Mo = e=>{
    const t = e.attachmentsContext.length;
    return !(t > 0 && e.attachmentsContext[t - 1].attachment.type === M.AttachmentType.File)
}
  , vs = e=>e.type !== M.AttachmentType.File && e.type !== M.AttachmentType.Cards
  , kt = e=>!!e && (e.type === M.AttachmentType.File || e.type === M.AttachmentType.Cards)
  , Oo = ()=>{
    const e = au();
    e.volume = kr,
    e.addEventListener("canplaythrough", ()=>{
        e.play().catch(t=>z("Could not play message sound.", t))
    }
    )
}
  , Vl = yl(Oo, Fr)
  , Wl = e=>e.filter(t=>t.type === M.MessageType.Message && (t.subType === M.MessageSubType.Agent || t.subType === M.MessageSubType.Contact))
  , zl = (e,t=!0)=>{
    const n = e.reduce((s,o)=>(s.push(o),
    o.content.type === M.MessageContentType.ChatClose || o.content.type === M.MessageContentType.ChatVisitorClose ? [] : s), []);
    return t ? n.filter(s=>s.type === M.MessageType.Message && s.subType !== M.MessageSubType.System) : n
}
  , Hl = e=>{
    const t = {};
    return e.forEach(n=>{
        if (n.trigger) {
            let s = Be.Automessage;
            n.subType === M.MessageSubType.Trigger ? s = Be.Trigger : n.subType === M.MessageSubType.Bot && n.content.quickReplies && (s = Be.Chatbot),
            t[n.trigger.id] = {
                type: s,
                sent: !0
            }
        }
    }
    ),
    t
}
  , jl = e=>!!(e.content.quickReplies && e.content.quickReplies.length > 0)
  , _n = async(e,t=!1)=>{
    var o;
    const n = Jt(e)
      , s = !t && n;
    if ((o = e.content) != null && o.text && _.getOptions().urlCardsEnabled) {
        const r = await Il(e.content.text, e.subType === M.MessageSubType.Contact, s);
        r && r.items.length > 0 && e.attachments.push(r)
    }
    return fo.set(!1),
    e
}
  , ql = async e=>(_.getOptions().urlCardsEnabled && await Promise.all(e.map(async t=>await _n(t))),
e)
  , Jp = e=>e.findIndex(t=>t.message.channel.type === "email") > -1
  , Kl = ()=>{
    const e = S({})
      , {subscribe: t, update: n, set: s} = e
      , o = async d=>{
        s(Ln("id", await ql(d)))
    }
      , r = async d=>{
        const l = await _n(d);
        Xt(d) && ko.set(!1),
        n(g=>({
            ...g,
            [d.id]: l
        })),
        Xl(l)
    }
      , a = async d=>{
        const l = f(qn) === d.id ? await _n(d, !0) : d;
        n(g=>({
            ...g,
            [d.id]: l
        }))
    }
    ;
    return {
        subscribe: t,
        setMessages: o,
        addMessage: r,
        replaceMessage: a,
        updateMessageRating: (d,l)=>{
            n(g=>{
                const b = g[d];
                if (!b || b.content.type !== "rate_form")
                    return {
                        ...g
                    };
                const w = {
                    ...b,
                    content: {
                        ...b.content,
                        data: {
                            value: l.value,
                            text: l.text ?? void 0
                        }
                    }
                };
                return {
                    ...g,
                    [d]: w
                }
            }
            )
        }
        ,
        sendMessage: async(d,l)=>{
            wn.set(d);
            const g = await ws({
                text: d
            });
            g && (wn.set(null),
            await a(g),
            W.emit("messageSent", g),
            nl(f(We))),
            await Promise.all(l.map(b=>al(b)))
        }
        ,
        sendBotReply: async(d,l,g)=>{
            const b = await ws({
                text: l,
                quickReply: {
                    replyTo: d,
                    payload: g
                }
            });
            g.isGoBackButton || xc(l),
            b && await a(b)
        }
    }
}
  , U = Kl()
  , Yl = e=>{
    f(Ie) || es(),
    ed(),
    setTimeout(()=>{
        U.addMessage(e),
        qo()
    }
    , 1600)
}
  , Xl = e=>{
    e && f(Pt) && f(Ie) && !(f(Go) && f(re)) && iu(e) && Vl()
}
  , ko = S(!1)
  , Jl = A([U], ([e])=>{
    const t = Object.values(e).filter(Jt);
    if (!t)
        return null;
    const n = t.sort((s,o)=>new Date(s.createdAt).getTime() - new Date(o.createdAt).getTime());
    return dt(n)
}
)
  , jn = A([U, Yt], ([e,t])=>{
    const n = Object.values(e).filter(Jt);
    return t ? n.filter(s=>new Date(s.createdAt) > new Date(t)) : n
}
)
  , Zl = A([jn], ([e])=>dt(e))
  , Fo = A([jn], ([e])=>e.length)
  , Ql = A([Fo], ([e])=>e > 0)
  , Se = A([U], ([e])=>Object.values(e).sort(Ll))
  , Zp = A([Se], ([e])=>Dl(e))
  , qn = A([Se], ([e])=>{
    const t = dt(e);
    return (t == null ? void 0 : t.id) ?? null
}
)
  , Qp = A([U], ([e])=>{
    var s;
    const t = Object.values(e).filter(o=>{
        var r;
        return typeof ((r = o.widgetOptions) == null ? void 0 : r.disableInput) == "boolean"
    }
    )
      , n = dt(t);
    return ((s = n == null ? void 0 : n.widgetOptions) == null ? void 0 : s.disableInput) ?? !1
}
)
  , $o = A([U], ([e])=>Object.values(e).filter(t=>t.subType === "contact" || t.subType === "agent").length > 0)
  , em = A([U], ([e])=>Object.values(e).filter(t=>t.subType === M.MessageSubType.Contact).length > 0)
  , tm = A([U, qs], ([e,t])=>{
    var s, o;
    if (!t)
        return null;
    const n = e[t] ?? null;
    return !n || n.content.type !== "rate_form" ? null : {
        messageId: n.id,
        value: (s = n.content.data) == null ? void 0 : s.value,
        text: (o = n.content.data) == null ? void 0 : o.text
    }
}
)
  , eu = A([Se], ([e])=>e.slice().reverse().find(n=>n.subType === M.MessageSubType.Contact) || null)
  , wn = S(null)
  , Io = ()=>!!_.getOptions().ratingEnabled
  , Lo = e=>{
    qs.set(e),
    $n(jt.ChatRating)
}
  , Ro = async()=>{
    try {
        return await ne.getClient().chatRateInit()
    } catch (e) {
        ce("Init chat rating failed.", String(e)),
        Oe(f(te)("form.submit.error"))
    }
}
  , nm = async({messageId: e, rating: {text: t, value: n}, onSuccess: s})=>{
    const o = f(U)[e];
    try {
        U.updateMessageRating(e, {
            value: n,
            text: t
        }),
        await ne.getClient().chatRate({
            messageId: e,
            value: n,
            text: t ?? void 0
        }),
        s && s()
    } catch (r) {
        o && await U.replaceMessage(o),
        ce("Chat rating failed.", String(r)),
        Oe(f(te)("form.submit.error"))
    }
}
  , sm = e=>{
    const {widgetV3Url: t} = _.getOptions();
    return `${t}/assets/images/rating/${e}.svg`
}
  , Kn = ()=>{
    Yt.set(new Date().toISOString()),
    ne.getClient().chatRead()
}
  , Do = ()=>{
    const e = De().visibilityState === "visible";
    !f(Ql) || !f(re) || !e || Kn()
}
  , om = async()=>{
    if (Ct(!0, {
        byVisitor: !0
    }),
    ne.getClient().chatClose(),
    Io()) {
        const e = await Ro();
        if (!e)
            return;
        await U.addMessage(e.message),
        Lo(e.message.id)
    } else
        Sn(),
        Ys()
}
  , tu = async()=>{
    const e = f(he) === X.ChatStatus.Served
      , t = f(Dt) !== go.Open;
    if (!Io() || !e || t)
        return;
    const n = await Ro();
    n && await U.addMessage(n.message)
}
  , Yn = (e,t=300)=>{
    let n;
    return (...o)=>{
        clearTimeout(n),
        n = setTimeout(()=>e(...o), t)
    }
}
  , nu = 500
  , su = 3e3;
var Po = (e=>(e.Default = "blackberry2.mp3",
e))(Po || {})
  , Me = (e=>(e.Connecting = "connecting",
e.Connected = "connected",
e.Disconnected = "disconnected",
e))(Me || {})
  , Cn = (e=>(e.Image = "image",
e.Video = "video",
e))(Cn || {});
const ou = e=>{
    const t = ()=>{
        Do()
    }
    ;
    Ge(()=>(e.addEventListener("visibilitychange", t),
    ()=>e.removeEventListener("visibilitychange", t)))
}
  , ru = ()=>{
    const e = ee()._smartsupp || {};
    e.appVersion = "0.0.1",
    e.commitHash = "8d63a7ebbf55cd5a246a0b27b773e39f4af615d9",
    e.commitInfo = "8d63a7ebbf55cd5a246a0b27b773e39f4af615d9 - Merge pull request #276 from smartsupp/develop - 2024-03-13 08:17:51 +0100",
    ee()._smartsupp = e
}
  , au = (e=Po.Default)=>{
    const {widgetV3Url: t} = _.getOptions()
      , n = new Audio(`${t}/assets/sounds/${e}`);
    return n.crossOrigin = "anonymous",
    n.load(),
    n
}
  , iu = e=>e.subType !== M.MessageSubType.Contact && ![M.MessageContentType.RateForm, M.MessageContentType.AgentJoin, M.MessageContentType.AgentLeave, M.MessageContentType.AgentAssign, M.MessageContentType.AgentUnassign].includes(e.content.type)
  , Bo = e=>{
    ne.isInitialized() && ne.getClient().notify(e)
}
  , cu = ()=>{
    _.getOptions().isPreviewMode || Bo(Mn.EventName.WidgetOpen)
}
  , lu = ()=>Bo(Mn.EventName.WidgetShow)
  , xo = ()=>document.visibilityState === "visible"
  , ge = S(!1)
  , Pt = S(!0);
_.awaitOptions().then(e=>{
    const t = _e(V.SoundsEnabled);
    t ? Pt.set(t === "true") : typeof e.enableSounds == "boolean" && Pt.set(e.enableSounds)
}
);
const rm = e=>{
    Pt.set(e),
    $e({
        name: V.SoundsEnabled,
        value: e.toString()
    }),
    e && Oo()
}
  , Go = S(xo())
  , uu = Yn(()=>Go.set(xo()), nu);
ee().addEventListener("visibilitychange", ()=>{
    uu()
}
);
const du = S(0)
  , am = ()=>du.update(e=>e + 1)
  , No = 255
  , gu = 32
  , im = 500
  , cm = e=>{
    const t = {};
    return e.filter(n=>!n.isHidden).reduce((n,s)=>(n[s.name] = s.value,
    n), t)
}
  , lm = e=>{
    const t = {};
    return e.reduce((n,s)=>(n[s.name] = s.validators,
    n), t)
}
  , um = (e,t,n)=>{
    e.update(s=>({
        ...s,
        [t]: n
    }))
}
  , dm = (e,t)=>{
    const n = {};
    for (const s in e)
        n[s] = t;
    return n
}
  , gm = ()=>Math.random().toString(36)
  , fu = e=>{
    if (!e)
        return !1;
    const t = e.split("@");
    if (t.length !== 2)
        return !1;
    const n = t[0]
      , s = t[1];
    return n.length > 64 || s.length > 255 || s.split(".").some(r=>r.length > 63) ? !1 : _l.test(e)
}
;
var ze = (e=>(e.Text = "text",
e.Checkbox = "checkbox",
e.Select = "select",
e))(ze || {});
const Zt = ()=>e=>{
    let t = !0;
    return e == null && (t = !1),
    xe(e) && (t = e.trim().length > 0),
    {
        type: "required",
        isValid: t
    }
}
  , pu = ()=>e=>({
    type: "checked",
    isValid: xe(e) ? e === "true" : e === !0
})
  , mu = ()=>e=>({
    type: "email",
    isValid: fu(String(e))
})
  , hu = ()=>e=>({
    type: "phone",
    isValid: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/.test(String(e))
})
  , un = S(void 0)
  , bu = e=>{
    const {emailControl: t} = _.getOptions()
      , n = !!(e != null && e.email);
    return t && !n
}
  , yu = e=>{
    const {nameControl: t} = _.getOptions()
      , n = !!(e != null && e.name);
    return t && !n
}
  , _u = e=>{
    const {numberControl: t} = _.getOptions()
      , n = !!(e != null && e.phone);
    return !!t && !n
}
  , wu = ()=>{
    const {groupSelectEnabled: e} = _.getOptions()
      , t = f(Xs);
    return !!e && t.length > 0
}
  , Cu = ()=>{
    const {privacyNoticeEnabled: e, privacyNoticeCheckRequired: t} = _.getOptions()
      , n = Lu();
    return !!e && t && !n
}
  , vu = e=>{
    var s;
    const {privacyNoticeEnabled: t} = _.getOptions()
      , n = !!((s = e == null ? void 0 : e.variables) != null && s.personalDataProcessingConsent);
    return !!t && !n
}
  , Su = ()=>({
    type: ze.Text,
    subType: "email",
    name: "email",
    label: "authForm.label.email",
    placeholder: "authForm.yourEmail",
    value: "",
    validators: [Zt(), mu()],
    maxLength: No
})
  , Au = ()=>({
    type: ze.Text,
    subType: "text",
    name: "name",
    label: "authForm.label.name",
    placeholder: "authForm.yourName",
    value: "",
    validators: [Zt()],
    maxLength: No
})
  , Tu = ()=>({
    type: ze.Text,
    subType: "tel",
    name: "phone",
    label: "authForm.label.phone",
    placeholder: "authForm.yourPhone",
    value: "",
    validators: [Zt(), hu()],
    maxLength: gu
})
  , Eu = e=>{
    const t = f(Xs);
    return {
        type: ze.Select,
        name: "group",
        label: "authForm.label.group",
        placeholder: "authForm.group",
        value: (e == null ? void 0 : e.group) ?? "",
        validators: [Zt()],
        options: t.map(n=>({
            text: n.name,
            value: n.key
        }))
    }
}
  , Mu = ()=>({
    type: ze.Checkbox,
    name: "personalDataProcessingConsent",
    label: "authForm.acceptTerms",
    value: !1,
    validators: [pu()]
})
  , Ou = ()=>({
    type: ze.Checkbox,
    name: "personalDataProcessingConsent",
    label: "topBar.gdprTitle",
    value: !1,
    validators: [],
    isHidden: !0
})
  , Uo = e=>({
    showEmail: bu(e),
    showName: yu(e),
    showPhone: _u(e),
    showGroups: wu(),
    showConsent: Cu()
})
  , ku = e=>({
    showEmail: !!e.emailControl,
    showName: !!e.nameControl,
    showPhone: !!e.numberControl,
    showGroups: !!e.groupSelectEnabled,
    showConsent: !!e.privacyNoticeEnabled && e.privacyNoticeCheckRequired
})
  , Fu = e=>Object.values(Uo(e)).some(t=>t)
  , fm = (e,t)=>{
    const n = []
      , {showEmail: s, showName: o, showPhone: r, showGroups: a, showConsent: c} = t ? ku(t) : Uo(e);
    return o && n.push(Au()),
    s && n.push(Su()),
    r && n.push(Tu()),
    a && n.push(Eu(e)),
    c ? n.push(Mu()) : n.length > 0 && (t ? t != null && t.privacyNoticeEnabled : vu(e)) && n.push(Ou()),
    n
}
  , $u = ()=>{
    const e = _e(V.AuthForm);
    if (!e)
        return null;
    try {
        return JSON.parse(e)
    } catch {
        return null
    }
}
  , pm = (e,t)=>{
    const n = $u()
      , s = {
        [e]: t
    }
      , o = n ? {
        ...n,
        ...s
    } : s;
    $e({
        name: V.AuthForm,
        value: JSON.stringify(o)
    })
}
  , mm = ()=>{
    to(V.AuthForm)
}
  , Iu = ()=>{
    var t;
    const e = f(me);
    return !!((t = e == null ? void 0 : e.variables) != null && t.authenticated)
}
  , Lu = ()=>{
    var e;
    return ((e = f(me)) == null ? void 0 : e.gdprApproved) || !1
}
  , Ss = ()=>{
    const {isPreviewMode: e} = _.getOptions();
    if (e || f(ec) || Iu())
        return !1;
    const t = f(me);
    if (!Fu(t))
        return !1;
    const {requireLogin: n} = _.getOptions()
      , s = f(We) === X.AccountStatus.Offline;
    return !!n || s
}
  , hm = async e=>{
    const {privacyNoticeCheckRequired: t} = _.getOptions()
      , n = f(me)
      , s = (n == null ? void 0 : n.name) ?? e.name
      , o = (n == null ? void 0 : n.email) ?? e.email
      , r = (n == null ? void 0 : n.phone) ?? e.phone
      , a = e.group ?? (n == null ? void 0 : n.group)
      , c = e.personalDataProcessingConsent
      , i = {
        ...s && {
            name: s
        },
        ...o && {
            email: o
        },
        ...r && {
            phone: r
        },
        ...a && {
            group: a
        },
        ...c && t && {
            personalDataProcessingConsent: c
        }
    };
    await ne.getClient().authenticate(i),
    Vc(),
    await jo(),
    Ys()
}
  , Xn = S(!1)
  , Vo = S(!1);
ee().addEventListener("offline", ()=>Xn.set(!0));
ee().addEventListener("online", ()=>Xn.set(!1));
const Wo = A([Nn, Xn, Vo], ([e,t,n])=>n ? Me.Connected : !e || t ? Me.Disconnected : Me.Connected, Me.Connecting);
let ft;
const As = Yn(e=>{
    e && !ft && (ft = et(f(te)("error.noInternet"), 0)),
    !e && ft && (ft(),
    ft = void 0)
}
, su);
Wo.subscribe(e=>{
    e === Me.Disconnected && As(!0),
    e === Me.Connected && As(!1)
}
);
const Ru = ()=>{
    const e = f(Wo)
      , t = f($o)
      , n = f(Ve);
    return e === Me.Disconnected || !t || n.disableAttachments
}
  , Bt = S(!1)
  , bm = e=>{
    if (f(Bt)) {
        z("There is already file upload in progress");
        return
    }
    if (e.length === 0)
        return;
    const t = Du(e);
    t.length > 0 && Pe.add(t)
}
  , Du = e=>e.length > pt ? (Oe(`${f(te)("fileUpload.tooManyFiles")} ${pt}`),
[]) : e.filter(t=>Pu(t))
  , Pu = e=>{
    const {acceptedFileExtensions: t, acceptedFileTypes: n, maxFileSize: s} = f(Un);
    if (!e)
        return !1;
    const o = t.includes(sl(e.name))
      , r = n.some(a=>a === e.type);
    if (Ru())
        return z("File upload is disabled"),
        !1;
    if (!f($o))
        return Oe(f(te)("warningBar.uploadFileNotFirst")),
        !1;
    if (e.size > s) {
        const a = ol(s);
        return Oe(`${f(te)("fileUpload.fileTooBig")} ${a.size} ${a.unit}`),
        !1
    }
    return o || r ? !0 : (Oe(f(te)("fileUpload.badFileType")),
    !1)
}
  , Bu = ()=>Pe.count() === 0 ? [] : (Pe.setUploadingStatus(),
rl(f(Pe), e=>Pe.setFileUploaded(e.name)))
  , Ts = 10
  , xu = 1e4
  , Gu = 3e4
  , Nu = 20
  , vn = {
    ":)": "🙂",
    ":-)": "🙂",
    ":D": "😀",
    ":-D": "😀",
    ";)": "😉",
    ";-)": "😉",
    "<3": "❤️",
    ":(": "😞",
    ":-(": "😞",
    ":P": "😛",
    ":-P": "😛",
    ":-o": "😮",
    ":O": "😮",
    ":/": "😕",
    ":-/": "😕"
}
  , Uu = e=>{
    const t = `(${e ? "$|" : ""} )`;
    return new RegExp(Object.keys(vn).map(n=>`${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}${t}`).join("|"),"gi")
}
  , zo = (e,t=!1)=>{
    const n = Uu(t);
    return e.replace(n, s=>{
        const o = Object.keys(vn).find(a=>s.toUpperCase().includes(a));
        if (!o)
            return s;
        const r = s.endsWith(" ") ? " " : "";
        return `${vn[o]}${r}`
    }
    )
}
  , Vu = e=>{
    if (e.length > 0 && e.length % Ts === 0) {
        const t = e.slice(-Ts)
          , n = new Date(e[e.length - 1].createdAt).getTime();
        if (new Date().getTime() - n > Gu || !t.every(o=>o.subType === M.MessageSubType.Contact))
            return !1;
        const s = new Date(t[0].createdAt).getTime();
        if (n - s < xu)
            return !0
    }
    return !1
}
  , Wu = e=>{
    const t = wo.match(e);
    return !!(t && (t == null ? void 0 : t.length) > Nu)
}
  , Jn = S()
  , xt = S(!1)
  , ym = S()
  , zu = 200
  , Hu = S(!1)
  , vt = A([Jn], ([e])=>typeof e > "u" ? _e(V.Message) ?? "" : e)
  , Zn = A([vt], ([e])=>e.trim().length === 0)
  , Ho = e=>{
    Jn.set(zo(e))
}
  , _m = (e,t)=>{
    const n = f(vt) ?? ""
      , s = n.slice(0, t)
      , o = n.slice(t)
      , r = `${s}${e}${o}`;
    Jn.set(r)
}
  , wm = ()=>{
    if (f(xt))
        return;
    ne.getClient().chatTyping(!0),
    xt.set(!0)
}
  , ju = ()=>{
    if (!f(xt))
        return;
    ne.getClient().chatTyping(!1),
    xt.set(!1)
}
  , jo = async(e=[])=>{
    if (f(Zn) && e.length === 0)
        return;
    const t = zo(f(vt), !0).trim();
    await U.sendMessage(t, e),
    Ho(""),
    ju(),
    e.length > 0 && (Pe.clear(),
    Bt.set(!1)),
    Hu.set(!0),
    Kn()
}
  , Cm = Yn(async()=>{
    const e = Pe.count() > 0;
    if (f(Zn) && !e)
        return;
    if (!f(re) && Ss() && Qt(),
    qu() && !e) {
        et(f(te)("warningBar.sameMessageTwice"));
        return
    }
    if (Vu(f(Se))) {
        et(f(te)("warningBar.spamProtection"));
        return
    }
    if (f(Bt)) {
        ce(f(te)("chat.fileUpload.error.stillUploading"));
        return
    }
    if (f(bn)) {
        et(f(te)("card.sendingInProgress"));
        return
    }
    if (Wu(f(vt))) {
        et(f(te)("card.linksLimitReached"));
        return
    }
    if (Ss()) {
        $n(jt.AuthForm);
        return
    }
    let t = [];
    e && (Bt.set(!0),
    t = await Bu()),
    await jo(t)
}
, zu)
  , qu = ()=>{
    const e = f(eu)
      , t = f(wn)
      , n = f(vt);
    return e && n === e.content.text || t && n === t
}
  , Je = (e,t)=>(Q(`widget visible: ${String(t)} => reason: ${e}`),
t && t !== f(Ie) && lu(),
t)
  , Qn = S()
  , es = ()=>Qn.set(!0)
  , Ku = ()=>Qn.set(!1)
  , Yu = A([We, Se, Zn, po], ([e,t,n,s])=>{
    const {hideOfflineChat: o, isPreviewMode: r} = _.getOptions();
    return e === X.AccountStatus.Offline && !!o && Wl(t).length === 0 && n && !s && !r
}
)
  , Ie = A([me, Ne, Qn, he, po, Yu], ([e,t,n,s,o,r])=>{
    const {hideMobileWidget: a, hideWidget: c} = _.getOptions();
    return e != null && e.bannedAt ? Je("visitor is banned", !1) : t && a ? Je("option 'hideMobileWidget' is true", !1) : typeof n == "boolean" ? Je("set by API command", n) : s && !o ? Je("chat status is not pending", !0) : r ? Je("option 'hideOfflineChat' is true", !1) : Je(`option 'hideWidget' is ${String(c)}`, !c)
}
)
  , Xu = A([Ne], ([e])=>{
    const {openOnTrigger: t} = _.getOptions();
    return t && !e
}
)
  , re = oo(V.IsMessengerFrameOpened, !1, e=>!f(Ne) && e === "true")
  , Qt = ()=>{
    re.set(!0),
    td(),
    tl(),
    cu()
}
  , Sn = ()=>{
    W.emit("messengerClose", !0),
    re.set(!1),
    Kn()
}
  , Ju = A([ge, Ie, re], ([e,t,n])=>e && t && n);
function Zu() {
    const e = S(!1)
      , {subscribe: t} = e;
    let n = null;
    return {
        subscribe: t,
        handleDragOver: (r,a=!0)=>{
            a && r.preventDefault(),
            f(e) || e.set(!0),
            n && clearTimeout(n),
            n = window.setTimeout(()=>{
                e.set(!1)
            }
            , 200)
        }
        ,
        handleDrop: r=>{
            var c;
            r.preventDefault(),
            n && clearTimeout(n),
            e.set(!1);
            const a = (c = r.dataTransfer) != null && c.files ? [...r.dataTransfer.files] : [];
            return a.length === 0 && et("Dropped item(s) are not processable files"),
            {
                droppedFiles: a
            }
        }
    }
}
const vm = Zu()
  , Qu = A([ge, Ie, re], ([e,t,n])=>e && t && !n)
  , ts = S(!1)
  , en = S(!1)
  , ed = ()=>{
    ts.set(!0),
    en.set(!1)
}
  , qo = ()=>{
    en.set(!0),
    ts.set(!1)
}
  , td = ()=>{
    en.set(!1)
}
  , Ko = A([Ne], ([e])=>{
    const {mobilePopupsEnabled: t} = _.getOptions();
    return e ? !!t : !0
}
)
  , nd = A([ge, Ie, ts, re, Ko], ([e,t,n,s,o])=>e && t && n && !s && o)
  , sd = A([ge, Ie, en, re, Jl, Ko, yn], ([e,t,n,s,o,r,a])=>e && t && n && o && !s && r && !a)
  , bt = {
    white: "#ffffff",
    slate100: "#f1f5f9",
    slate200: "#e2e8f0",
    slate300: "#cbd5e1",
    slate900: "#0f172a",
    blue700: "#1d4ed8",
    smartsuppBlue: "#1233df"
}
  , od = .299
  , rd = .587
  , ad = .114
  , id = 180
  , cd = -20
  , ld = -.25
  , ud = .2
  , dd = -5
  , gd = .03
  , fd = .5
  , Es = 5
  , Ft = (e,t)=>new it(e).darken(t).toHexString()
  , pd = e=>{
    const t = new it(e).toRgb();
    return `${t.r}, ${t.g}, ${t.b}`
}
  , Gt = e=>/^#[0-9A-F]{6}$/i.test(e)
  , tn = e=>{
    const {r: t, g: n, b: s} = new it(e).toRgb();
    return Math.sqrt(od * (t * t) + rd * (n * n) + ad * (s * s)) > id
}
  , md = e=>{
    const t = new it(e)
      , {s: n, l: s} = t.toHsl();
    return t.spin(cd).desaturate(n * ld).lighten(s * ud).toHexString()
}
  , hd = (e,t=fd)=>{
    const n = new it(e)
      , {s, l: o} = n.toHsl();
    return n.spin(dd).saturate(s * gd).darken(o * t).toHexString()
}
  , bd = e=>{
    const {color: t, color2: n, colorGradient: s} = e;
    return s ? n ? {
        from: t,
        to: n
    } : tn(t) ? {
        from: t,
        to: hd(t)
    } : {
        from: t,
        to: md(t)
    } : {
        from: t,
        to: t
    }
}
  , yd = e=>tn(e) ? bt.slate900 : bt.white
  , _d = e=>tn(e) ? .1 : .2
  , wd = e=>{
    if (tn(e)) {
        const t = new it(e).getLuminance();
        return t > .8 ? Ft(e, Math.pow(10 * t, t)) : e
    }
    return e
}
  , ie = (e,t,n)=>{
    e.documentElement.style.setProperty(t, n)
}
  , Cd = (e,t)=>{
    const {color: n} = t
      , s = bd(t)
      , o = s.from === "#ffffff" && s.from === s.to ? {
        from: bt.slate300,
        to: bt.slate300
    } : s
      , r = yd(n);
    ie(e, "--color-primary", n),
    ie(e, "--color-primary-content", r),
    ie(e, "--color-primary-content-rgb", pd(r)),
    ie(e, "--color-primary-gradient-from", s.from),
    ie(e, "--color-primary-gradient-to", s.to),
    ie(e, "--color-primary-gradient-button-from", o.from),
    ie(e, "--color-primary-gradient-button-to", o.to),
    ie(e, "--color-primary-gradient-hover-from", Ft(s.from, Es)),
    ie(e, "--color-primary-gradient-hover-to", Ft(s.to, Es));
    const a = wd(n);
    ie(e, "--color-primary-button", a),
    ie(e, "--color-primary-button-hover", Ft(a, 10)),
    ie(e, "--color-primary-button-content", r),
    ie(e, "--opacity-primary-content", String(_d(n)))
}
  , vd = ()=>{
    const e = S({
        color: bt.smartsuppBlue,
        color2: null,
        colorGradient: !0
    })
      , {subscribe: t, set: n} = e;
    return {
        subscribe: t,
        setThemeColor: o=>{
            const {color: r, color2: a, colorGradient: c} = o;
            if (Gt(r)) {
                if (c && a && !Gt(a)) {
                    z(`Provided color '${a}' is not valid. Default color will be used instead.`);
                    return
                }
            } else {
                z(`Provided color '${r}' is not valid. Default color will be used instead.`);
                return
            }
            n({
                color: r,
                color2: a,
                colorGradient: c
            })
        }
    }
}
  , ns = vd()
  , Yo = 24
  , Xo = 12
  , Sd = 300
  , Jo = 56
  , Zo = Jo
  , Ad = 166
  , Td = Zo + 16
  , Ed = 380
  , Md = 672
  , Od = 12
  , kd = 560
  , Fd = 840
  , $d = 104
  , Id = 60
  , Sm = A([ro], ([e])=>e ? Id : $d)
  , at = e=>`${e}px`
  , Qo = e=>{
    if (e)
        return xe(e) ? parseInt(e, 10) : e
}
  , Ld = (e,t)=>e ? {
    width: "100%",
    height: "100%"
} : t ? {
    width: kd,
    height: Fd
} : {
    width: Ed,
    height: Md
}
  , Rd = e=>{
    const {widgetBlockingOptions: t} = _.getOptions();
    e.style.borderRadius = at(Od),
    t != null && t.limitShadow ? e.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 5px 12px" : e.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 5px 40px"
}
  , er = ()=>{
    const {offsetY: e} = _.getOptions();
    return Qo(e) ?? Yo
}
  , tr = ()=>{
    const {offsetX: e} = _.getOptions();
    return Qo(e) ?? Xo
}
  , Dd = e=>e ? 0 : Yo
  , Pd = e=>e ? 0 : Xo
  , ss = ()=>{
    const {position: e} = _.getOptions();
    return e === "fixed"
}
  , os = e=>{
    ss() && (e.style.position = "fixed")
}
  , nn = (e,t)=>{
    ss() && (e.style.bottom = at(t))
}
  , sn = (e,t)=>{
    if (ss()) {
        const {orientation: n} = _.getOptions();
        n === "right" ? (e.style.left = "initial",
        e.style.right = at(t)) : (e.style.left = at(t),
        e.style.right = "initial")
    }
}
  , on = e=>{
    const {zIndex: t} = _.getOptions();
    e.style.zIndex = String(t ?? "auto")
}
  , nr = e=>{
    e.style.overflow = "hidden"
}
  , St = e=>{
    const t = document.createElement("iframe");
    return t.style.position = "absolute",
    t.style.width = "100%",
    t.style.height = "100%",
    t.style.border = "none",
    t.style.display = "block",
    t.style.textAlign = "left",
    t.style.margin = "0",
    t.style.padding = "0",
    t.style.top = "0",
    t.style.left = "0",
    t.style.opacity = "1",
    e && e(t),
    t.getAttribute("style") ?? ""
}
  , Bd = e=>{
    os(e),
    nn(e, er()),
    sn(e, tr()),
    on(e)
}
  , xd = (e,t)=>{
    os(e),
    nn(e, Dd(t)),
    sn(e, Pd(t)),
    on(e),
    nr(e),
    t || Rd(e)
}
  , sr = e=>{
    os(e),
    nn(e, er() + Td),
    sn(e, tr()),
    on(e),
    nr(e)
}
  , Gd = e=>{
    e.style.position = "fixed",
    e.style.width = "100%",
    e.style.height = "100%",
    nn(e, 0),
    sn(e, 0),
    on(e)
}
  , Nd = e=>{
    Bd(e)
}
  , Ud = (e,t)=>{
    xd(e, t)
}
  , Vd = e=>{
    sr(e)
}
  , Wd = e=>{
    sr(e)
}
  , zd = e=>{
    Gd(e)
}
  , or = S(Sd)
  , Hd = S(Ad)
  , jd = S(!1)
  , rr = S(void 0)
  , rs = A([Ne, rr], ([e,t])=>{
    const {buttonStyle: n} = _.getOptions();
    return t ? t === "bubble" : e || n === "bubble"
}
)
  , qd = A([rs, or], ([e,t])=>e ? Jo : t)
  , ar = S()
  , Kd = A([ar], ([e])=>typeof e > "u" ? _e(V.IsMessengerFrameExpanded) === (!0).toString() : e)
  , Am = e=>{
    $e({
        name: V.IsMessengerFrameExpanded,
        value: e.toString()
    }),
    ar.set(e)
}
;
var R = (e=>(e.Name = "name",
e.Group = "group",
e.Email = "email",
e.Phone = "phone",
e.Variables = "variables",
e.Language = "language",
e.ChatClose = "chat:close",
e.ChatOpen = "chat:open",
e.ChatShow = "chat:show",
e.ChatHide = "chat:hide",
e.ThemeColor = "theme:color",
e.ChatMessage = "chat:message",
e.RecordingDisable = "recording:disable",
e.RecordingOff = "recording:off",
e.HtmlApply = "html:apply",
e.On = "on",
e.AnalyticsConsent = "analyticsConsent",
e.MarketingConsent = "marketingConsent",
e.OpenRateForm = "openRateForm",
e.OpenAuthForm = "openAuthForm",
e.WidgetStatus = "widgetStatus",
e.Translations = "translations",
e.AuthFormFields = "authFormFields",
e.ButtonStyle = "buttonStyle",
e.PreviewTranslate = "previewTranslate",
e.DisableConnectionStatus = "disableConnectionStatus",
e.ReloadWithMockData = "reloadWithMockData",
e))(R || {})
  , mt = (e=>(e.MessageSent = "message_sent",
e.MessageReceived = "message_received",
e.MessengerClose = "messenger_close",
e))(mt || {});
const Yd = e=>{
    W.on("messageSent", e)
}
  , Xd = e=>{
    W.on("messageReceived", e)
}
  , Jd = e=>{
    W.on("messengerClose", e)
}
  , Zd = {
    [mt.MessageSent]: Yd,
    [mt.MessageReceived]: Xd,
    [mt.MessengerClose]: Jd
}
  , Qd = (e,t)=>{
    const n = Zd[e];
    n && n(t)
}
  , He = "https://docs.smartsupp.com/chat-box/"
  , eg = `${He}localization/#supported-languages`
  , tg = `${He}visitor-identification/#custom-visitor-data`
  , ng = `${He}javascript-api/events/`
  , sg = "https://www.smartsupp.com/help/cookie-consent/#where-to-enable-cookie-consent-in-smartsupp"
  , ir = "https://www.smartsupp.com/pricing"
  , as = S({})
  , An = (e,t)=>{
    as.update(n=>({
        ...n,
        [e]: t
    }))
}
  , og = e=>Object.values(R).some(t=>t === e)
  , Le = (e,t)=>xe(t) ? !0 : (z(`Parameter of '${e}' API command must be type string. See ${He} for more information.`),
!1)
  , rn = (e,t)=>uo(t) ? !0 : (z(`Parameter of '${e}' API command must be type boolean. See ${He} for more information.`),
!1)
  , rg = (e,t)=>typeof t != "function" ? (z(`Parameter of '${e}' API command must be type function. See ${He} for more information.`),
!1) : !0
  , an = (e,t)=>Vn(t) ? !0 : (z(`Parameter of '${e}' API command must be type object. See ${tg} for more information.`),
!1)
  , ag = (e,t)=>Vn(t) ? !0 : (z(`Parameter of '${e}' API command must be type object.`),
!1)
  , ig = (e,t)=>{
    const n = Object.values(mt);
    return n.includes(t) ? !0 : (z(`Unknown event: '${t}'. Available event names are: ${n.join(", ")}. See ${ng} for more information.`),
    !1)
}
  , cr = e=>{
    z(`Unknown API command: '${e}'. See ${He} to check available API commands.`)
}
  , lr = ()=>{
    var e;
    return !!((e = _.getOptions().features) != null && e.api)
}
  , cg = ()=>{
    var e;
    return !!((e = _.getOptions().features) != null && e.groups)
}
  , gt = ()=>lr() ? !0 : (z(`Chat box API feature is not enabled. See ${ir} to upgrade your package.`),
!1)
  , lg = ()=>!lr() || !cg() ? (z(`Chat box Groups feature is not enabled. See ${ir} to upgrade your package.`),
!1) : !0
  , ur = ()=>{
    Bn() || z(`Enable managing cookie consent in widget settings to allow this command. See ${sg} for more information.`)
}
  , ug = ()=>{
    const e = ()=>{
        Qt(),
        es()
    }
    ;
    if (!f(ge)) {
        wt.push(e);
        return
    }
    e()
}
  , dg = ()=>{
    if (gt()) {
        if (!f(ge)) {
            wt.push(Sn);
            return
        }
        Sn()
    }
}
  , gg = ()=>{
    gt() && es()
}
  , fg = ()=>{
    gt() && Ku()
}
  , pg = (e,t)=>{
    if (gt() && e === R.Language && Le(e, t)) {
        if (!co(t)) {
            z(`Provided language '${t}' is not supported. See ${eg} to check supported languages.`);
            return
        }
        if (!f(ge)) {
            An(e, t);
            return
        }
        ui(t)
    }
}
  , mg = (e,t)=>{
    let n, s = null, o = !0;
    if (gt()) {
        if (typeof t == "string" && Le(e, t))
            n = t;
        else if (an(e, t)) {
            if (n = t.color,
            s = t.color2,
            o = t.colorGradient,
            !rn(e, o))
                return
        } else
            return;
        if (Gt(n)) {
            if (o && s && !Gt(s)) {
                z(`Provided color '${s}' is not valid. Default color will be used instead.`);
                return
            }
        } else {
            z(`Provided color '${n}' is not valid. Please use hex color code.`);
            return
        }
        ns.setThemeColor({
            color: n,
            color2: s,
            colorGradient: o
        })
    }
}
  , hg = (e,t)=>{
    gt() && Le(e, t) && Ho(t)
}
  , bg = (e,t,n)=>{
    Le(e, t) && ig(e, t) && rg(e, n) && Qd(t, n)
}
  , yg = (e,t)=>{
    an(e, t) && me.updateVisitorVariables(Hi(t))
}
  , $t = (e,t)=>{
    e !== R.Name && e !== R.Email && e !== R.Phone && e !== R.Group || Le(e, t) && me.updateVisitorProperty(e, t)
}
  , _g = (e,t)=>{
    if (!lg() || !Le(e, t))
        return;
    const n = f(Rn)[t];
    if (f(ge) && !n) {
        z(`Group with key '${t}' does not exist. Please provide correct group key from your group settings.`);
        return
    }
    $t(e, t)
}
  , wg = (e,t)=>{
    rn(e, t) && (ur(),
    W.emit("analyticsConsentChanged", !!t))
}
  , Cg = (e,t)=>{
    rn(e, t) && (ur(),
    W.emit("marketingConsentChanged", !!t))
}
  , vg = ()=>{
    Lo(f(qn) || "")
}
  , Sg = ()=>{
    $n(jt.AuthForm)
}
  , Ag = (e,t)=>{
    Le(e, t) && (t !== X.AccountStatus.Online && t !== X.AccountStatus.Offline || We.set(t))
}
  , Tg = (e,t)=>{
    an(e, t) && gi(t)
}
  , Eg = (e,t)=>{
    an(e, t) && (f(un) || un.set(_.getOptions()),
    un.update(n=>({
        ...n,
        ...t
    })))
}
  , Mg = (e,t)=>{
    Le(e, t) && rr.set(t)
}
  , Og = ()=>{
    let e = ()=>{}
    ;
    e = _t.subscribe(()=>{
        f(Se).forEach(t=>{
            var s;
            const n = ((s = t.content) == null ? void 0 : s.data) || "";
            typeof n == "string" && n.match(/widgetPreview\..*/) && (t.content.text = f(te)(n),
            U.replaceMessage(t))
        }
        ),
        e()
    }
    )
}
  , kg = (e,t)=>{
    rn(e, t) && Vo.set(t)
}
  , Fg = (e,t)=>{
    ag(e, t) && ne.reloadClient(t)
}
  , $g = {
    version: "8d63a7ebbf55cd5a246a0b27b773e39f4af615d9",
    execute: e=>{
        const t = e[0];
        if (typeof t == "function") {
            Rg(t);
            return
        }
        if (!og(t)) {
            cr(String(t));
            return
        }
        Lg(t, e[1], ...e.slice(2))
    }
    ,
    exec: function(...e) {
        this.execute(e)
    }
}
  , Ig = {
    [R.ChatOpen]: ug,
    [R.ChatClose]: dg,
    [R.ChatShow]: gg,
    [R.ChatHide]: fg,
    [R.ChatMessage]: hg,
    [R.Language]: pg,
    [R.ThemeColor]: mg,
    [R.On]: bg,
    [R.Variables]: yg,
    [R.Name]: $t,
    [R.Group]: _g,
    [R.Email]: $t,
    [R.Phone]: $t,
    [R.AnalyticsConsent]: wg,
    [R.MarketingConsent]: Cg,
    [R.HtmlApply]: null,
    [R.RecordingDisable]: null,
    [R.RecordingOff]: null,
    [R.OpenRateForm]: vg,
    [R.OpenAuthForm]: Sg,
    [R.WidgetStatus]: Ag,
    [R.Translations]: Tg,
    [R.AuthFormFields]: Eg,
    [R.ButtonStyle]: Mg,
    [R.PreviewTranslate]: Og,
    [R.DisableConnectionStatus]: kg,
    [R.ReloadWithMockData]: Fg
}
  , Lg = (e,t,...n)=>{
    const s = Ig[e];
    if (s === void 0) {
        cr(e);
        return
    }
    s !== null && (s(e, t, ...n),
    Q(`🧙‍♂️[API] ${e}${t ? ":" : ""}`, t ?? ""))
}
  , Rg = e=>{
    f(ge) ? e() : wt.push(e)
}
  , Ee = ee()
  , tt = (e,t)=>{
    Q(`recordings ${e ? "✅" : "⛔️"}${t ? ` => reason: ${t}` : ""}`)
}
  , dr = ()=>{
    const {smartlook: e, recordingOff: t} = _.getOptions();
    if (!e || !e.enabled)
        return tt(!1, "recordings are not enabled");
    if (Ee.smartlook)
        return tt(!1, "smartlook is already in parent window");
    if (!xn())
        return tt(!1, "analytics consent not given");
    if (t)
        return tt(!1, "recording is disabled by 'recordingOff' option");
    Pg()
}
  , Dg = (e,t)=>{
    const n = e.document.getElementsByTagName("head")[0]
      , s = e.document.createElement("script");
    s.async = !0,
    s.type = "text/javascript",
    s.charset = "utf-8",
    s.crossOrigin = "anonymous",
    s.src = t,
    n.appendChild(s)
}
  , Pg = ()=>{
    const {smartlook: e, recordingDisable: t} = _.getOptions()
      , n = Ee.smartlook = function(...s) {
        var o, r;
        (r = (o = Ee.smartlook) == null ? void 0 : o.api) == null || r.push(s)
    }
    ;
    Ee.smartlook.api = [],
    Dg(Ee, e.scriptUrl),
    n("init", e.key, {
        host: e.serverHost
    }),
    n("record", {
        forms: !0,
        numbers: !0,
        emails: !0,
        ips: !1
    }),
    t ? (n("pause"),
    tt(!1, "recording is disabled by 'recordingDisable' option")) : (n(()=>{
        var o;
        const s = (o = Ee.smartlook) == null ? void 0 : o.visitorId;
        if (!s) {
            ce("Smartlook visitorId is undefined");
            return
        }
        me.updateVisitorVariables({
            smartlook_vid: s
        }),
        tt(!0)
    }
    ),
    Q("recordings: initializing ⏳"))
}
;
W.on("analyticsConsentChanged", e=>{
    if (Ee.smartlook) {
        Ee.smartlook(e ? "resume" : "pause"),
        Q(`recordings ${e ? "resumed ▶️" : "paused ⏸"}`);
        return
    }
    dr()
}
);
function Bg(e) {
    let t, n, s;
    const o = e[3].default
      , r = Nt(o, e, e[2], null);
    return {
        c() {
            t = E("div"),
            n = E("div"),
            r && r.c(),
            p(n, "id", e[1])
        },
        m(a, c) {
            $(a, t, c),
            v(t, n),
            r && r.m(n, null),
            e[4](n),
            s = !0
        },
        p(a, [c]) {
            r && r.p && (!s || c & 4) && Ut(r, o, a, a[2], s ? Wt(o, a[2], c, null) : Vt(a[2]), null)
        },
        i(a) {
            s || (m(r, a),
            s = !0)
        },
        o(a) {
            h(r, a),
            s = !1
        },
        d(a) {
            a && I(t),
            r && r.d(a),
            e[4](null)
        }
    }
}
function xg(e, t, n) {
    let {$$slots: s={}, $$scope: o} = t, r;
    const a = `${ee().SMARTSUPP_AUTOCREATE !== !1 ? "smartsupp" : Dn(window).id}-widget-container`;
    Ge(()=>{
        De().body.appendChild(r)
    }
    ),
    zs(()=>{
        var i;
        (i = De().getElementById(a)) == null || i.remove()
    }
    );
    function c(i) {
        ct[i ? "unshift" : "push"](()=>{
            r = i,
            n(0, r)
        }
        )
    }
    return e.$$set = i=>{
        "$$scope"in i && n(2, o = i.$$scope)
    }
    ,
    [r, a, o, s, c]
}
class Gg extends G {
    constructor(t) {
        super(),
        N(this, t, xg, Bg, B, {})
    }
}
function Ng(e) {
    let t;
    return {
        c() {
            t = E("iframe"),
            p(t, "id", e[2]),
            p(t, "title", e[1]),
            p(t, "style", e[0]),
            t.allowFullscreen = !0,
            p(t, "scrolling", "no")
        },
        m(n, s) {
            $(n, t, s),
            e[7](t)
        },
        p(n, [s]) {
            s & 4 && p(t, "id", n[2]),
            s & 2 && p(t, "title", n[1]),
            s & 1 && p(t, "style", n[0])
        },
        i: J,
        o: J,
        d(n) {
            n && I(t),
            e[7](null)
        }
    }
}
function Ug(e, t, n) {
    let s;
    j(e, ns, y=>n(6, s = y));
    let {component: o} = t, {frameStyle: r} = t, {title: a} = t, {id: c} = t, i, u, d;
    const l = y=>{
        d && d.$destroy(),
        y && o && (d = new o({
            target: y.body
        }))
    }
      , g = y=>{
        u && Cd(u, y)
    }
      , b = y=>{
        const L = u.createElement("style");
        return L.textContent = y,
        u.head.appendChild(L),
        L
    }
      , w = ()=>{
        for (const y of window.document.styleSheets) {
            const L = [...y.cssRules].map(q=>q.cssText).join("");
            b(L)
        }
    }
      , T = ()=>{
        i.contentDocument && (n(5, u = i.contentDocument),
        w())
    }
    ;
    Ge(async()=>{
        var y;
        await _r(),
        ((y = i.contentDocument) == null ? void 0 : y.readyState) === "complete" && i.contentDocument.defaultView ? T() : i.addEventListener("load", T)
    }
    ),
    zs(()=>{
        i && i.removeEventListener("load", T),
        d && d.$destroy()
    }
    );
    function C(y) {
        ct[y ? "unshift" : "push"](()=>{
            i = y,
            n(3, i)
        }
        )
    }
    return e.$$set = y=>{
        "component"in y && n(4, o = y.component),
        "frameStyle"in y && n(0, r = y.frameStyle),
        "title"in y && n(1, a = y.title),
        "id"in y && n(2, c = y.id)
    }
    ,
    e.$$.update = ()=>{
        e.$$.dirty & 32 && l(u),
        e.$$.dirty & 96 && u && g(s)
    }
    ,
    [r, a, c, i, o, u, s, C]
}
class At extends G {
    constructor(t) {
        super(),
        N(this, t, Ug, Ng, B, {
            component: 4,
            frameStyle: 0,
            title: 1,
            id: 2
        })
    }
}
function Vg(e) {
    let t, n;
    return {
        c() {
            t = dn("svg"),
            n = dn("path"),
            p(n, "d", "M63.113,18.51v-.16C60.323,7.05,44.582,3,31.972,3S3.582,7,.792,18.5a66.22,66.22,0,0,0,0,20.46c1.18,4.74,5.05,8.63,11.36,11.41l-4,5A3.47,3.47,0,0,0,10.882,61a3.39,3.39,0,0,0,1.44-.31L26.862,54c1.79.18,3.49.27,5.07.27,11.04.04,28.41-4.04,31.18-15.43a60.33,60.33,0,0,0,0-20.33Z"),
            p(t, "xmlns", "http://www.w3.org/2000/svg"),
            p(t, "viewBox", "0 0 64 64"),
            p(t, "fill", "currentColor"),
            p(t, "preserveAspectRatio", "xMidYMid meet"),
            p(t, "width", e[0]),
            p(t, "height", e[0])
        },
        m(s, o) {
            $(s, t, o),
            v(t, n)
        },
        p(s, [o]) {
            o & 1 && p(t, "width", s[0]),
            o & 1 && p(t, "height", s[0])
        },
        i: J,
        o: J,
        d(s) {
            s && I(t)
        }
    }
}
function Wg(e, t, n) {
    let {size: s=16} = t;
    return e.$$set = o=>{
        "size"in o && n(0, s = o.size)
    }
    ,
    [s]
}
class zg extends G {
    constructor(t) {
        super(),
        N(this, t, Wg, Vg, B, {
            size: 0
        })
    }
}
function Ms(e) {
    let t;
    const n = e[2].default
      , s = Nt(n, e, e[1], null);
    return {
        c() {
            s && s.c()
        },
        m(o, r) {
            s && s.m(o, r),
            t = !0
        },
        p(o, r) {
            s && s.p && (!t || r & 2) && Ut(s, n, o, o[1], t ? Wt(n, o[1], r, null) : Vt(o[1]), null)
        },
        i(o) {
            t || (m(s, o),
            t = !0)
        },
        o(o) {
            h(s, o),
            t = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}
function Hg(e) {
    let t, n, s = e[0] && Ms(e);
    return {
        c() {
            s && s.c(),
            t = we()
        },
        m(o, r) {
            s && s.m(o, r),
            $(o, t, r),
            n = !0
        },
        p(o, [r]) {
            o[0] ? s ? (s.p(o, r),
            r & 1 && m(s, 1)) : (s = Ms(o),
            s.c(),
            m(s, 1),
            s.m(t.parentNode, t)) : s && (le(),
            h(s, 1, 1, ()=>{
                s = null
            }
            ),
            ue())
        },
        i(o) {
            n || (m(s),
            n = !0)
        },
        o(o) {
            h(s),
            n = !1
        },
        d(o) {
            o && I(t),
            s && s.d(o)
        }
    }
}
function jg(e, t, n) {
    let {$$slots: s={}, $$scope: o} = t
      , r = !1;
    return Ge(()=>{
        n(0, r = !0)
    }
    ),
    e.$$set = a=>{
        "$$scope"in a && n(1, o = a.$$scope)
    }
    ,
    [r, o, s]
}
class qg extends G {
    constructor(t) {
        super(),
        N(this, t, jg, Hg, B, {})
    }
}
function Kg(e) {
    let t, n, s, o;
    return n = new zg({
        props: {
            size: 24
        }
    }),
    {
        c() {
            t = E("div"),
            O(n.$$.fragment),
            p(t, "class", "transform transition-transform duration-300 group-hover:scale-115")
        },
        m(r, a) {
            $(r, t, a),
            k(n, t, null),
            o = !0
        },
        p: J,
        i(r) {
            o || (m(n.$$.fragment, r),
            r && ve(()=>{
                o && (s || (s = nt(t, st, {
                    delay: 200,
                    duration: 300,
                    start: .6,
                    opacity: .8
                }, !0)),
                s.run(1))
            }
            ),
            o = !0)
        },
        o(r) {
            h(n.$$.fragment, r),
            r && (s || (s = nt(t, st, {
                delay: 200,
                duration: 300,
                start: .6,
                opacity: .8
            }, !1)),
            s.run(0)),
            o = !1
        },
        d(r) {
            r && I(t),
            F(n),
            r && s && s.end()
        }
    }
}
function Yg(e) {
    let t, n;
    return t = new qg({
        props: {
            $$slots: {
                default: [Kg]
            },
            $$scope: {
                ctx: e
            }
        }
    }),
    {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            k(t, s, o),
            n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 1 && (r.$$scope = {
                dirty: o,
                ctx: s
            }),
            t.$set(r)
        },
        i(s) {
            n || (m(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            h(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            F(t, s)
        }
    }
}
class gr extends G {
    constructor(t) {
        super(),
        N(this, t, null, Yg, B, {})
    }
}
function Xg(e) {
    let t, n, s, o;
    return s = new gr({}),
    {
        c() {
            t = E("div"),
            n = E("div"),
            O(s.$$.fragment),
            p(n, "class", "flex-center w-12 h-12 bg-white bg-opacity-10 rounded-full"),
            p(t, "class", "p-1")
        },
        m(r, a) {
            $(r, t, a),
            v(t, n),
            k(s, n, null),
            o = !0
        },
        p: J,
        i(r) {
            o || (m(s.$$.fragment, r),
            o = !0)
        },
        o(r) {
            h(s.$$.fragment, r),
            o = !1
        },
        d(r) {
            r && I(t),
            F(s)
        }
    }
}
class Jg extends G {
    constructor(t) {
        super(),
        N(this, t, null, Xg, B, {})
    }
}
function Zg(e) {
    let t, n, s = e[1]("button.greeting") + "", o, r, a, c;
    return a = new Jg({}),
    {
        c() {
            t = E("div"),
            n = E("div"),
            o = zt(s),
            r = x(),
            O(a.$$.fragment),
            p(n, "class", "flex-center whitespace-nowrap pl-4 pr-1"),
            p(n, "data-testid", oe.widgetButtonText),
            p(t, "class", "flex")
        },
        m(i, u) {
            $(i, t, u),
            v(t, n),
            v(n, o),
            v(t, r),
            k(a, t, null),
            e[2](t),
            c = !0
        },
        p(i, [u]) {
            (!c || u & 2) && s !== (s = i[1]("button.greeting") + "") && Ht(o, s)
        },
        i(i) {
            c || (m(a.$$.fragment, i),
            c = !0)
        },
        o(i) {
            h(a.$$.fragment, i),
            c = !1
        },
        d(i) {
            i && I(t),
            F(a),
            e[2](null)
        }
    }
}
function Qg(e, t, n) {
    let s;
    j(e, te, a=>n(1, s = a));
    let o;
    Ge(()=>{
        const a = Math.ceil(o.getBoundingClientRect().width);
        or.set(a)
    }
    );
    function r(a) {
        ct[a ? "unshift" : "push"](()=>{
            o = a,
            n(0, o)
        }
        )
    }
    return [o, s, r]
}
class ef extends G {
    constructor(t) {
        super(),
        N(this, t, Qg, Zg, B, {})
    }
}
function Os(e) {
    let t, n, s;
    return {
        c() {
            t = E("div"),
            p(t, "id", "widget-online-badge"),
            p(t, "class", "absolute left-0 bottom-0 w-2 h-2 p-1.5 bg-green-400 rounded-full border-2 border-white"),
            p(t, "data-testid", oe.widgetOnlineBadge)
        },
        m(o, r) {
            $(o, t, r),
            s = !0
        },
        i(o) {
            s || (o && ve(()=>{
                s && (n || (n = nt(t, st, {}, !0)),
                n.run(1))
            }
            ),
            s = !0)
        },
        o(o) {
            o && (n || (n = nt(t, st, {}, !1)),
            n.run(0)),
            s = !1
        },
        d(o) {
            o && I(t),
            o && n && n.end()
        }
    }
}
function tf(e) {
    let t, n = e[0] && Os();
    return {
        c() {
            n && n.c(),
            t = we()
        },
        m(s, o) {
            n && n.m(s, o),
            $(s, t, o)
        },
        p(s, [o]) {
            s[0] ? n ? o & 1 && m(n, 1) : (n = Os(),
            n.c(),
            m(n, 1),
            n.m(t.parentNode, t)) : n && (le(),
            h(n, 1, 1, ()=>{
                n = null
            }
            ),
            ue())
        },
        i(s) {
            m(n)
        },
        o(s) {
            h(n)
        },
        d(s) {
            s && I(t),
            n && n.d(s)
        }
    }
}
function nf(e, t, n) {
    let s;
    return j(e, Qi, o=>n(0, s = o)),
    [s]
}
class sf extends G {
    constructor(t) {
        super(),
        N(this, t, nf, tf, B, {})
    }
}
function ks(e) {
    let t, n = (e[0] > 99 ? "99+" : e[0]) + "", s, o, r;
    return {
        c() {
            t = E("div"),
            s = zt(n),
            p(t, "id", "widget-unread-messages-badge"),
            p(t, "class", "absolute right-0 top-0 min-w-5 h-5 flex-center px-1 text-white bg-red-500 text-xs rounded-full shadow"),
            p(t, "data-testid", oe.widgetUnreadMessagesBadge)
        },
        m(a, c) {
            $(a, t, c),
            v(t, s),
            r = !0
        },
        p(a, c) {
            (!r || c & 1) && n !== (n = (a[0] > 99 ? "99+" : a[0]) + "") && Ht(s, n)
        },
        i(a) {
            r || (a && ve(()=>{
                r && (o || (o = nt(t, st, {}, !0)),
                o.run(1))
            }
            ),
            r = !0)
        },
        o(a) {
            a && (o || (o = nt(t, st, {}, !1)),
            o.run(0)),
            r = !1
        },
        d(a) {
            a && I(t),
            a && o && o.end()
        }
    }
}
function of(e) {
    let t, n = e[1] && ks(e);
    return {
        c() {
            n && n.c(),
            t = we()
        },
        m(s, o) {
            n && n.m(s, o),
            $(s, t, o)
        },
        p(s, [o]) {
            s[1] ? n ? (n.p(s, o),
            o & 2 && m(n, 1)) : (n = ks(s),
            n.c(),
            m(n, 1),
            n.m(t.parentNode, t)) : n && (le(),
            h(n, 1, 1, ()=>{
                n = null
            }
            ),
            ue())
        },
        i(s) {
            m(n)
        },
        o(s) {
            h(n)
        },
        d(s) {
            s && I(t),
            n && n.d(s)
        }
    }
}
function rf(e, t, n) {
    let s;
    j(e, Fo, r=>n(0, s = r));
    let o;
    return e.$$.update = ()=>{
        e.$$.dirty & 1 && n(1, o = s > 0)
    }
    ,
    [s, o]
}
class af extends G {
    constructor(t) {
        super(),
        N(this, t, rf, of, B, {})
    }
}
function cf(e) {
    let t, n;
    return t = new ef({}),
    {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            k(t, s, o),
            n = !0
        },
        i(s) {
            n || (m(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            h(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            F(t, s)
        }
    }
}
function lf(e) {
    let t, n;
    return t = new gr({}),
    {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            k(t, s, o),
            n = !0
        },
        i(s) {
            n || (m(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            h(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            F(t, s)
        }
    }
}
function uf(e) {
    let t, n, s, o, r, a, c, i, u, d, l;
    const g = [lf, cf]
      , b = [];
    function w(T, C) {
        return T[0] ? 0 : 1
    }
    return s = w(e),
    o = b[s] = g[s](e),
    a = new sf({}),
    i = new af({}),
    {
        c() {
            t = E("div"),
            n = E("div"),
            o.c(),
            r = x(),
            O(a.$$.fragment),
            c = x(),
            O(i.$$.fragment),
            p(n, "role", "button"),
            p(n, "tabindex", 0),
            p(n, "class", "group flex-center w-full bg-primary-gradient bg-primary-gradient-hover text-primary-content rounded-full overflow-hidden cursor-pointer"),
            p(n, "data-testid", oe.widgetButton),
            p(t, "id", "smartsupp-widget-button"),
            p(t, "class", "h-full w-full relative flex justify-end")
        },
        m(T, C) {
            $(T, t, C),
            v(t, n),
            b[s].m(n, null),
            v(n, r),
            k(a, n, null),
            v(t, c),
            k(i, t, null),
            u = !0,
            d || (l = ke(n, "click", Qt),
            d = !0)
        },
        p(T, [C]) {
            let y = s;
            s = w(T),
            s !== y && (le(),
            h(b[y], 1, 1, ()=>{
                b[y] = null
            }
            ),
            ue(),
            o = b[s],
            o || (o = b[s] = g[s](T),
            o.c()),
            m(o, 1),
            o.m(n, r))
        },
        i(T) {
            u || (m(o),
            m(a.$$.fragment, T),
            m(i.$$.fragment, T),
            u = !0)
        },
        o(T) {
            h(o),
            h(a.$$.fragment, T),
            h(i.$$.fragment, T),
            u = !1
        },
        d(T) {
            T && I(t),
            b[s].d(),
            F(a),
            F(i),
            d = !1,
            l()
        }
    }
}
function df(e, t, n) {
    let s;
    return j(e, rs, o=>n(0, s = o)),
    [s]
}
class gf extends G {
    constructor(t) {
        super(),
        N(this, t, df, uf, B, {})
    }
}
function Fs(e) {
    let t, n = e[2] || e[3], s, o, r, a, c, i = $s();
    return {
        c() {
            var u;
            t = E("div"),
            i.c(),
            p(t, "style", `border-radius: 9999px; box-shadow: rgb(0 0 0 / 6%) 0px 1px 6px, rgb(0 0 0 / ${(u = e[4]) != null && u.limitShadow ? "20%) 0px 2px 12px" : "12%) 0px 2px 32px"};`),
            p(t, "data-testid", oe.widgetButtonFrame),
            H(t, "height", Zo)
        },
        m(u, d) {
            $(u, t, d),
            i.m(t, null),
            e[6](t),
            r = !0,
            a || (c = yt(Nd.call(null, t)),
            a = !0)
        },
        p(u, d) {
            d & 12 && B(n, n = u[2] || u[3]) ? (le(),
            h(i, 1, 1, J),
            ue(),
            i = $s(),
            i.c(),
            m(i, 1),
            i.m(t, null)) : i.p(u, d)
        },
        i(u) {
            r || (m(i),
            u && ve(()=>{
                r && (o && o.end(1),
                s = lt(t, pe, {
                    y: 20,
                    delay: 150,
                    duration: 300
                }),
                s.start())
            }
            ),
            r = !0)
        },
        o(u) {
            h(i),
            s && s.invalidate(),
            u && (o = ut(t, wr, {
                duration: 250
            })),
            r = !1
        },
        d(u) {
            u && I(t),
            i.d(u),
            e[6](null),
            u && o && o.end(),
            a = !1,
            c()
        }
    }
}
function $s(e) {
    let t, n;
    return t = new At({
        props: {
            component: gf,
            id: oe.widgetButtonFrame,
            title: "Smartsupp widget button",
            frameStyle: St()
        }
    }),
    {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            k(t, s, o),
            n = !0
        },
        p: J,
        i(s) {
            n || (m(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            h(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            F(t, s)
        }
    }
}
function ff(e) {
    let t, n, s = e[1] && Fs(e);
    return {
        c() {
            s && s.c(),
            t = we()
        },
        m(o, r) {
            s && s.m(o, r),
            $(o, t, r),
            n = !0
        },
        p(o, [r]) {
            o[1] ? s ? (s.p(o, r),
            r & 2 && m(s, 1)) : (s = Fs(o),
            s.c(),
            m(s, 1),
            s.m(t.parentNode, t)) : s && (le(),
            h(s, 1, 1, ()=>{
                s = null
            }
            ),
            ue())
        },
        i(o) {
            n || (m(s),
            n = !0)
        },
        o(o) {
            h(s),
            n = !1
        },
        d(o) {
            o && I(t),
            s && s.d(o)
        }
    }
}
function pf(e, t, n) {
    let s, o, r, a;
    j(e, qd, l=>n(5, s = l)),
    j(e, Qu, l=>n(1, o = l)),
    j(e, rs, l=>n(2, r = l)),
    j(e, te, l=>n(3, a = l));
    let c;
    const i = l=>{
        n(0, c.style.width = `${l}px`, c)
    }
      , {widgetBlockingOptions: u} = _.getOptions();
    function d(l) {
        ct[l ? "unshift" : "push"](()=>{
            c = l,
            n(0, c)
        }
        )
    }
    return e.$$.update = ()=>{
        e.$$.dirty & 33 && c && i(s)
    }
    ,
    [c, o, r, a, u, s, d]
}
class mf extends G {
    constructor(t) {
        super(),
        N(this, t, pf, ff, B, {})
    }
}
function hf(e) {
    let t;
    return {
        c() {
            t = E("div"),
            p(t, "class", e[3]),
            Y(t, "bg-gray-200", e[2] === "gray"),
            Y(t, "bg-gray-300", e[2] === "darkGray"),
            H(t, "height", e[0]),
            H(t, "width", e[1])
        },
        m(n, s) {
            $(n, t, s)
        },
        p(n, [s]) {
            s & 4 && Y(t, "bg-gray-200", n[2] === "gray"),
            s & 4 && Y(t, "bg-gray-300", n[2] === "darkGray"),
            s & 1 && H(t, "height", n[0]),
            s & 2 && H(t, "width", n[1])
        },
        i: J,
        o: J,
        d(n) {
            n && I(t)
        }
    }
}
function bf(e, t, n) {
    let {height: s=20} = t
      , {width: o="100%"} = t
      , {colorScheme: r="gray"} = t
      , {roundedStyle: a="rounded-full"} = t;
    const c = `${a} animate-pulse`;
    return e.$$set = i=>{
        "height"in i && n(0, s = i.height),
        "width"in i && n(1, o = i.width),
        "colorScheme"in i && n(2, r = i.colorScheme),
        "roundedStyle"in i && n(4, a = i.roundedStyle)
    }
    ,
    [s, o, r, c, a]
}
class ye extends G {
    constructor(t) {
        super(),
        N(this, t, bf, hf, B, {
            height: 0,
            width: 1,
            colorScheme: 2,
            roundedStyle: 4
        })
    }
}
function yf(e) {
    let t, n;
    return t = new ye({
        props: {
            colorScheme: "darkGray",
            width: e[0],
            height: e[0]
        }
    }),
    {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            k(t, s, o),
            n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 1 && (r.width = s[0]),
            o & 1 && (r.height = s[0]),
            t.$set(r)
        },
        i(s) {
            n || (m(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            h(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            F(t, s)
        }
    }
}
function _f(e, t, n) {
    let {size: s=20} = t;
    return e.$$set = o=>{
        "size"in o && n(0, s = o.size)
    }
    ,
    [s]
}
class Re extends G {
    constructor(t) {
        super(),
        N(this, t, _f, yf, B, {
            size: 0
        })
    }
}
const wf = e=>({})
  , Is = e=>({})
  , Cf = e=>({
    error: e & 8
})
  , Ls = e=>({
    error: e[3]
});
function vf(e) {
    let t, n, s;
    var o = e[2];
    function r(a, c) {
        return {}
    }
    return o && (t = It(o, r())),
    {
        c() {
            t && O(t.$$.fragment),
            n = we()
        },
        m(a, c) {
            t && k(t, a, c),
            $(a, n, c),
            s = !0
        },
        p(a, c) {
            if (c & 4 && o !== (o = a[2])) {
                if (t) {
                    le();
                    const i = t;
                    h(i.$$.fragment, 1, 0, ()=>{
                        F(i, 1)
                    }
                    ),
                    ue()
                }
                o ? (t = It(o, r()),
                O(t.$$.fragment),
                m(t.$$.fragment, 1),
                k(t, n.parentNode, n)) : t = null
            }
        },
        i(a) {
            s || (t && m(t.$$.fragment, a),
            s = !0)
        },
        o(a) {
            t && h(t.$$.fragment, a),
            s = !1
        },
        d(a) {
            a && I(n),
            t && F(t, a)
        }
    }
}
function Sf(e) {
    let t;
    const n = e[7].loading
      , s = Nt(n, e, e[6], Is);
    return {
        c() {
            s && s.c()
        },
        m(o, r) {
            s && s.m(o, r),
            t = !0
        },
        p(o, r) {
            s && s.p && (!t || r & 64) && Ut(s, n, o, o[6], t ? Wt(n, o[6], r, wf) : Vt(o[6]), Is)
        },
        i(o) {
            t || (m(s, o),
            t = !0)
        },
        o(o) {
            h(s, o),
            t = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}
function Af(e) {
    let t;
    const n = e[7].error
      , s = Nt(n, e, e[6], Ls);
    return {
        c() {
            s && s.c()
        },
        m(o, r) {
            s && s.m(o, r),
            t = !0
        },
        p(o, r) {
            s && s.p && (!t || r & 72) && Ut(s, n, o, o[6], t ? Wt(n, o[6], r, Cf) : Vt(o[6]), Ls)
        },
        i(o) {
            t || (m(s, o),
            t = !0)
        },
        o(o) {
            h(s, o),
            t = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}
function Tf(e) {
    let t, n, s, o;
    const r = [Af, Sf, vf]
      , a = [];
    function c(i, u) {
        return i[1] === i[0].Error ? 0 : i[1] === i[0].Loading ? 1 : i[1] === i[0].Success ? 2 : -1
    }
    return ~(t = c(e)) && (n = a[t] = r[t](e)),
    {
        c() {
            n && n.c(),
            s = we()
        },
        m(i, u) {
            ~t && a[t].m(i, u),
            $(i, s, u),
            o = !0
        },
        p(i, [u]) {
            let d = t;
            t = c(i),
            t === d ? ~t && a[t].p(i, u) : (n && (le(),
            h(a[d], 1, 1, ()=>{
                a[d] = null
            }
            ),
            ue()),
            ~t ? (n = a[t],
            n ? n.p(i, u) : (n = a[t] = r[t](i),
            n.c()),
            m(n, 1),
            n.m(s.parentNode, s)) : n = null)
        },
        i(i) {
            o || (m(n),
            o = !0)
        },
        o(i) {
            h(n),
            o = !1
        },
        d(i) {
            i && I(s),
            ~t && a[t].d(i)
        }
    }
}
const Tn = new Map
  , Ef = async e=>{
    const t = (await e()).default;
    return Tn.set(e, t),
    t
}
;
function Mf(e, t, n) {
    let {$$slots: s={}, $$scope: o} = t;
    const r = Cr(s);
    var a;
    (function(T) {
        T[T.Initialized = 0] = "Initialized",
        T[T.Loading = 1] = "Loading",
        T[T.Success = 2] = "Success",
        T[T.Error = 3] = "Error"
    }
    )(a || (a = {}));
    let {delay: c=200} = t, {loader: i} = t, u = a.Initialized, d, l, g;
    const b = ()=>{
        window.clearTimeout(g)
    }
      , w = async()=>{
        b(),
        n(3, l = void 0),
        n(2, d = void 0),
        c > 0 ? (n(1, u = a.Initialized),
        g = window.setTimeout(()=>{
            n(1, u = a.Loading)
        }
        , c)) : n(1, u = a.Loading);
        try {
            n(2, d = await Ef(i)),
            n(1, u = a.Success)
        } catch (T) {
            if (n(1, u = a.Error),
            T instanceof Error && n(3, l = T),
            !r.error)
                throw T
        }
        b()
    }
    ;
    return Tn.has(i) ? (u = a.Success,
    d = Tn.get(i)) : Ge(()=>{
        w()
    }
    ),
    e.$$set = T=>{
        "delay"in T && n(4, c = T.delay),
        "loader"in T && n(5, i = T.loader),
        "$$scope"in T && n(6, o = T.$$scope)
    }
    ,
    [a, u, d, l, c, i, o, s]
}
class fr extends G {
    constructor(t) {
        super(),
        N(this, t, Mf, Tf, B, {
            delay: 4,
            loader: 5
        })
    }
}
const Of = "modulepreload"
  , kf = function(e, t) {
    return e[0] === "." ? new URL(e,t).href : e
}
  , Rs = {}
  , pr = function(t, n, s) {
    if (!n || n.length === 0)
        return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(n.map(r=>{
        if (r = kf(r, s),
        r in Rs)
            return;
        Rs[r] = !0;
        const a = r.endsWith(".css")
          , c = a ? '[rel="stylesheet"]' : "";
        if (!!s)
            for (let d = o.length - 1; d >= 0; d--) {
                const l = o[d];
                if (l.href === r && (!a || l.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${r}"]${c}`))
            return;
        const u = document.createElement("link");
        if (u.rel = a ? "stylesheet" : Of,
        a || (u.as = "script",
        u.crossOrigin = ""),
        u.href = r,
        document.head.appendChild(u),
        a)
            return new Promise((d,l)=>{
                u.addEventListener("load", d),
                u.addEventListener("error", ()=>l(new Error(`Unable to preload CSS for ${r}`)))
            }
            )
    }
    )).then(()=>t()).catch(r=>{
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = r,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw r
    }
    )
}
  , Ff = ()=>pr(()=>import("./WidgetMessenger-ffc7bae7.js"), [window.widget.getAssetUrl("./WidgetMessenger-ffc7bae7.js"), window.widget.getAssetUrl("./vendor-7c63ec1d.js"), window.widget.getAssetUrl("./WidgetMessengerInput-824c990c.js")], import.meta.url);
function $f(e) {
    let t, n, s, o, r, a, c, i, u, d, l, g, b, w, T, C, y, L, q, ae, P, se, be, Ce, is, Tt, je, cs, Ae, qe, ls, Ke, us, Ye, Et;
    return o = new Re({
        props: {
            size: 32
        }
    }),
    c = new Re({
        props: {
            size: 32
        }
    }),
    u = new Re({
        props: {
            size: 32
        }
    }),
    l = new Re({
        props: {
            size: 32
        }
    }),
    T = new Re({
        props: {
            size: 44
        }
    }),
    L = new ye({
        props: {
            height: 20,
            width: 270
        }
    }),
    ae = new ye({
        props: {
            height: 20,
            width: 122
        }
    }),
    Ce = new Re({
        props: {
            size: 28
        }
    }),
    je = new ye({
        props: {
            height: 112,
            width: 295,
            roundedStyle: "rounded-6"
        }
    }),
    qe = new ye({
        props: {
            height: 32,
            width: 295
        }
    }),
    Ke = new ye({
        props: {
            height: 32,
            width: 148
        }
    }),
    Ye = new ye({
        props: {
            height: 32,
            width: 224
        }
    }),
    {
        c() {
            t = E("div"),
            n = E("div"),
            s = E("div"),
            O(o.$$.fragment),
            r = x(),
            a = E("div"),
            O(c.$$.fragment),
            i = x(),
            O(u.$$.fragment),
            d = x(),
            O(l.$$.fragment),
            g = x(),
            b = E("div"),
            w = E("div"),
            O(T.$$.fragment),
            C = x(),
            y = E("div"),
            O(L.$$.fragment),
            q = x(),
            O(ae.$$.fragment),
            P = x(),
            se = E("div"),
            be = E("div"),
            O(Ce.$$.fragment),
            is = x(),
            Tt = E("div"),
            O(je.$$.fragment),
            cs = x(),
            Ae = E("div"),
            O(qe.$$.fragment),
            ls = x(),
            O(Ke.$$.fragment),
            us = x(),
            O(Ye.$$.fragment),
            p(s, "class", "flex"),
            p(a, "class", "flex space-x-2"),
            p(n, "class", "flex justify-between"),
            p(w, "class", "flex ml-1 mr-2"),
            p(y, "class", "flex-bottom space-y-2"),
            p(b, "class", "flex mt-2"),
            p(be, "class", "flex ml-1 mr-2"),
            p(Tt, "class", "space-y-2"),
            p(se, "class", "flex items-baseline mt-8"),
            p(Ae, "class", "flex flex-col items-end space-y-5 mt-8 mr-1"),
            p(t, "slot", "loading"),
            p(t, "class", "h-full p-2 bg-white")
        },
        m(D, mr) {
            $(D, t, mr),
            v(t, n),
            v(n, s),
            k(o, s, null),
            v(n, r),
            v(n, a),
            k(c, a, null),
            v(a, i),
            k(u, a, null),
            v(a, d),
            k(l, a, null),
            v(t, g),
            v(t, b),
            v(b, w),
            k(T, w, null),
            v(b, C),
            v(b, y),
            k(L, y, null),
            v(y, q),
            k(ae, y, null),
            v(t, P),
            v(t, se),
            v(se, be),
            k(Ce, be, null),
            v(se, is),
            v(se, Tt),
            k(je, Tt, null),
            v(t, cs),
            v(t, Ae),
            k(qe, Ae, null),
            v(Ae, ls),
            k(Ke, Ae, null),
            v(Ae, us),
            k(Ye, Ae, null),
            Et = !0
        },
        p: J,
        i(D) {
            Et || (m(o.$$.fragment, D),
            m(c.$$.fragment, D),
            m(u.$$.fragment, D),
            m(l.$$.fragment, D),
            m(T.$$.fragment, D),
            m(L.$$.fragment, D),
            m(ae.$$.fragment, D),
            m(Ce.$$.fragment, D),
            m(je.$$.fragment, D),
            m(qe.$$.fragment, D),
            m(Ke.$$.fragment, D),
            m(Ye.$$.fragment, D),
            Et = !0)
        },
        o(D) {
            h(o.$$.fragment, D),
            h(c.$$.fragment, D),
            h(u.$$.fragment, D),
            h(l.$$.fragment, D),
            h(T.$$.fragment, D),
            h(L.$$.fragment, D),
            h(ae.$$.fragment, D),
            h(Ce.$$.fragment, D),
            h(je.$$.fragment, D),
            h(qe.$$.fragment, D),
            h(Ke.$$.fragment, D),
            h(Ye.$$.fragment, D),
            Et = !1
        },
        d(D) {
            D && I(t),
            F(o),
            F(c),
            F(u),
            F(l),
            F(T),
            F(L),
            F(ae),
            F(Ce),
            F(je),
            F(qe),
            F(Ke),
            F(Ye)
        }
    }
}
function If(e) {
    let t, n, s, o, r = e[0] + "", a;
    return {
        c() {
            t = E("div"),
            n = E("div"),
            n.textContent = "Failed to load widget",
            s = x(),
            o = E("div"),
            a = zt(r),
            p(n, "class", "text-lg font-bold"),
            p(o, "class", "text-xs"),
            p(t, "slot", "error"),
            p(t, "class", "h-full p-4 bg-white text-red-500")
        },
        m(c, i) {
            $(c, t, i),
            v(t, n),
            v(t, s),
            v(t, o),
            v(o, a)
        },
        p(c, i) {
            i & 1 && r !== (r = c[0] + "") && Ht(a, r)
        },
        d(c) {
            c && I(t)
        }
    }
}
function Lf(e) {
    let t, n;
    return t = new fr({
        props: {
            loader: Ff,
            delay: 0,
            $$slots: {
                error: [If, ({error: s})=>({
                    0: s
                }), ({error: s})=>s ? 1 : 0],
                loading: [$f]
            },
            $$scope: {
                ctx: e
            }
        }
    }),
    {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            k(t, s, o),
            n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 3 && (r.$$scope = {
                dirty: o,
                ctx: s
            }),
            t.$set(r)
        },
        i(s) {
            n || (m(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            h(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            F(t, s)
        }
    }
}
class Rf extends G {
    constructor(t) {
        super(),
        N(this, t, null, Lf, B, {})
    }
}
function Ds(e) {
    let t, n, s, o, r, a, c, i;
    return n = new At({
        props: {
            component: Rf,
            id: oe.widgetMessengerFrame,
            title: "Smartsupp widget messenger",
            frameStyle: St()
        }
    }),
    {
        c() {
            t = E("div"),
            O(n.$$.fragment),
            p(t, "data-testid", oe.widgetMessengerFrame),
            H(t, "transition", "max-height 250ms ease-in-out, width 250ms ease-in-out")
        },
        m(u, d) {
            $(u, t, d),
            k(n, t, null),
            e[6](t),
            a = !0,
            c || (i = yt(s = Ud.call(null, t, e[2])),
            c = !0)
        },
        p(u, d) {
            s && vr(s.update) && d & 4 && s.update.call(null, u[2])
        },
        i(u) {
            a || (m(n.$$.fragment, u),
            u && ve(()=>{
                a && (r && r.end(1),
                o = lt(t, pe, {
                    y: 20,
                    duration: 200
                }),
                o.start())
            }
            ),
            a = !0)
        },
        o(u) {
            h(n.$$.fragment, u),
            o && o.invalidate(),
            u && (r = ut(t, pe, {
                y: 10,
                duration: 150
            })),
            a = !1
        },
        d(u) {
            u && I(t),
            F(n),
            e[6](null),
            u && r && r.end(),
            c = !1,
            i()
        }
    }
}
function Df(e) {
    let t, n, s = e[1] && Ds(e);
    return {
        c() {
            s && s.c(),
            t = we()
        },
        m(o, r) {
            s && s.m(o, r),
            $(o, t, r),
            n = !0
        },
        p(o, [r]) {
            o[1] ? s ? (s.p(o, r),
            r & 2 && m(s, 1)) : (s = Ds(o),
            s.c(),
            m(s, 1),
            s.m(t.parentNode, t)) : s && (le(),
            h(s, 1, 1, ()=>{
                s = null
            }
            ),
            ue())
        },
        i(o) {
            n || (m(s),
            n = !0)
        },
        o(o) {
            h(s),
            n = !1
        },
        d(o) {
            o && I(t),
            s && s.d(o)
        }
    }
}
const Ps = "MobileWidgetMessengerOpen";
function Pf(e, t, n) {
    let s, o, r, a;
    j(e, Ju, l=>n(1, s = l)),
    j(e, Ne, l=>n(4, o = l)),
    j(e, Kd, l=>n(5, r = l)),
    j(e, ro, l=>n(2, a = l));
    let c;
    const i = (l,g)=>{
        if (!c)
            return;
        const {width: b, height: w} = Ld(l, g);
        n(0, c.style.maxHeight = xe(w) ? w : at(w), c),
        n(0, c.style.width = xe(b) ? b : at(b), c),
        n(0, c.style.height = l ? "100%" : "calc(100% - 40px)", c)
    }
    ;
    let u = !1;
    function d(l) {
        ct[l ? "unshift" : "push"](()=>{
            c = l,
            n(0, c)
        }
        )
    }
    return e.$$.update = ()=>{
        if (e.$$.dirty & 37 && c && i(a, r),
        e.$$.dirty & 26 && o) {
            if (s && !u) {
                const l = De().createElement("style");
                l.textContent = "* {overflow: hidden}",
                l.className = Ps,
                De().head.appendChild(l),
                n(3, u = !0)
            }
            if (!s && u) {
                const l = De().head.getElementsByClassName(Ps);
                for (let g = 0; g < l.length; g++)
                    De().head.removeChild(l[g]);
                n(3, u = !1)
            }
        }
    }
    ,
    [c, s, a, u, o, r, d]
}
class Bf extends G {
    constructor(t) {
        super(),
        N(this, t, Pf, Df, B, {})
    }
}
const xf = ()=>pr(()=>import("./WidgetPopup-d23a739c.js"), [window.widget.getAssetUrl("./WidgetPopup-d23a739c.js"), window.widget.getAssetUrl("./vendor-7c63ec1d.js"), window.widget.getAssetUrl("./WidgetMessengerInput-824c990c.js")], import.meta.url);
function Gf(e) {
    let t, n, s, o, r, a, c, i, u, d;
    return n = new Re({
        props: {
            size: 44
        }
    }),
    r = new ye({
        props: {
            height: 20,
            width: 270
        }
    }),
    c = new ye({
        props: {
            height: 20,
            width: 270
        }
    }),
    u = new ye({
        props: {
            height: 20,
            width: 122
        }
    }),
    {
        c() {
            t = E("div"),
            O(n.$$.fragment),
            s = x(),
            o = E("div"),
            O(r.$$.fragment),
            a = x(),
            O(c.$$.fragment),
            i = x(),
            O(u.$$.fragment),
            p(o, "class", "mt-4 space-y-2"),
            p(t, "slot", "loading"),
            p(t, "class", "h-full p-2 bg-white")
        },
        m(l, g) {
            $(l, t, g),
            k(n, t, null),
            v(t, s),
            v(t, o),
            k(r, o, null),
            v(o, a),
            k(c, o, null),
            v(o, i),
            k(u, o, null),
            d = !0
        },
        p: J,
        i(l) {
            d || (m(n.$$.fragment, l),
            m(r.$$.fragment, l),
            m(c.$$.fragment, l),
            m(u.$$.fragment, l),
            d = !0)
        },
        o(l) {
            h(n.$$.fragment, l),
            h(r.$$.fragment, l),
            h(c.$$.fragment, l),
            h(u.$$.fragment, l),
            d = !1
        },
        d(l) {
            l && I(t),
            F(n),
            F(r),
            F(c),
            F(u)
        }
    }
}
function Nf(e) {
    let t, n;
    return t = new fr({
        props: {
            loader: xf,
            delay: 0,
            $$slots: {
                loading: [Gf]
            },
            $$scope: {
                ctx: e
            }
        }
    }),
    {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            k(t, s, o),
            n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 1 && (r.$$scope = {
                dirty: o,
                ctx: s
            }),
            t.$set(r)
        },
        i(s) {
            n || (m(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            h(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            F(t, s)
        }
    }
}
class Uf extends G {
    constructor(t) {
        super(),
        N(this, t, null, Nf, B, {})
    }
}
function Bs(e) {
    let t, n, s, o, r, a, c;
    return n = new At({
        props: {
            component: Uf,
            id: oe.widgetPopupFrame,
            title: "Smartsupp widget popup",
            frameStyle: St()
        }
    }),
    {
        c() {
            var i;
            t = E("div"),
            O(n.$$.fragment),
            H(t, "height", "calc(100% - 40px)"),
            H(t, "border-radius", "12px"),
            H(t, "transition", "box-shadow 0.2s ease-in-out"),
            H(t, "transition", "max-height 250ms ease-in-out"),
            p(t, "data-testid", oe.widgetPopupFrame),
            H(t, "width", 300),
            H(t, "box-shadow", `rgba(0, 0, 0, ${(i = e[3]) != null && i.limitShadow ? "0.2) 0px 3px 12px" : `${e[1]}) 0px 3px 16px}`}`)
        },
        m(i, u) {
            $(i, t, u),
            k(n, t, null),
            e[6](t),
            r = !0,
            a || (c = yt(Vd.call(null, t)),
            a = !0)
        },
        p(i, u) {
            var d;
            u & 2 && H(t, "box-shadow", `rgba(0, 0, 0, ${(d = i[3]) != null && d.limitShadow ? "0.2) 0px 3px 12px" : `${i[1]}) 0px 3px 16px}`}`)
        },
        i(i) {
            r || (m(n.$$.fragment, i),
            i && ve(()=>{
                r && (o && o.end(1),
                s = lt(t, pe, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }),
                s.start())
            }
            ),
            r = !0)
        },
        o(i) {
            h(n.$$.fragment, i),
            s && s.invalidate(),
            i && (o = ut(t, pe, {
                y: 10,
                duration: 400
            })),
            r = !1
        },
        d(i) {
            i && I(t),
            F(n),
            e[6](null),
            i && o && o.end(),
            a = !1,
            c()
        }
    }
}
function Vf(e) {
    let t, n, s = e[2] && Bs(e);
    return {
        c() {
            s && s.c(),
            t = we()
        },
        m(o, r) {
            s && s.m(o, r),
            $(o, t, r),
            n = !0
        },
        p(o, [r]) {
            o[2] ? s ? (s.p(o, r),
            r & 4 && m(s, 1)) : (s = Bs(o),
            s.c(),
            m(s, 1),
            s.m(t.parentNode, t)) : s && (le(),
            h(s, 1, 1, ()=>{
                s = null
            }
            ),
            ue())
        },
        i(o) {
            n || (m(s),
            n = !0)
        },
        o(o) {
            h(s),
            n = !1
        },
        d(o) {
            o && I(t),
            s && s.d(o)
        }
    }
}
function Wf(e, t, n) {
    let s, o, r;
    j(e, jd, l=>n(4, s = l)),
    j(e, Hd, l=>n(5, o = l)),
    j(e, sd, l=>n(2, r = l));
    let a;
    const c = l=>{
        n(0, a.style.maxHeight = `${l}px`, a)
    }
      , {widgetBlockingOptions: i} = _.getOptions();
    let u;
    function d(l) {
        ct[l ? "unshift" : "push"](()=>{
            a = l,
            n(0, a)
        }
        )
    }
    return e.$$.update = ()=>{
        e.$$.dirty & 33 && a && c(o),
        e.$$.dirty & 16 && n(1, u = s ? .28 : .16)
    }
    ,
    [a, u, r, i, s, o, d]
}
class zf extends G {
    constructor(t) {
        super(),
        N(this, t, Wf, Vf, B, {})
    }
}
function Hf(e) {
    let t, n, s, o, r, a, c, i, u;
    return {
        c() {
            t = E("div"),
            n = E("div"),
            o = x(),
            r = E("div"),
            c = x(),
            i = E("div"),
            p(n, "class", s = Xe(`typing-indicator ${e[0]} indicator-color-${e[1]} animate-typing`) + " svelte-13wgl1n"),
            H(n, "animation-iteration-count", e[2]),
            p(r, "class", a = Xe(`typing-indicator ${e[0]} indicator-color-${e[1]} typing-indicator-second animate-typing`) + " svelte-13wgl1n"),
            H(r, "animation-iteration-count", e[2]),
            p(i, "class", u = Xe(`typing-indicator ${e[0]} indicator-color-${e[1]} typing-indicator-third animate-typing`) + " svelte-13wgl1n"),
            H(i, "animation-iteration-count", e[2]),
            p(t, "class", "flex p-2")
        },
        m(d, l) {
            $(d, t, l),
            v(t, n),
            v(t, o),
            v(t, r),
            v(t, c),
            v(t, i)
        },
        p(d, [l]) {
            l & 3 && s !== (s = Xe(`typing-indicator ${d[0]} indicator-color-${d[1]} animate-typing`) + " svelte-13wgl1n") && p(n, "class", s),
            l & 4 && H(n, "animation-iteration-count", d[2]),
            l & 3 && a !== (a = Xe(`typing-indicator ${d[0]} indicator-color-${d[1]} typing-indicator-second animate-typing`) + " svelte-13wgl1n") && p(r, "class", a),
            l & 4 && H(r, "animation-iteration-count", d[2]),
            l & 3 && u !== (u = Xe(`typing-indicator ${d[0]} indicator-color-${d[1]} typing-indicator-third animate-typing`) + " svelte-13wgl1n") && p(i, "class", u),
            l & 4 && H(i, "animation-iteration-count", d[2])
        },
        i: J,
        o: J,
        d(d) {
            d && I(t)
        }
    }
}
function jf(e, t, n) {
    let s, {size: o="md"} = t, {color: r="black"} = t, {iterations: a=void 0} = t;
    return e.$$set = c=>{
        "size"in c && n(0, o = c.size),
        "color"in c && n(1, r = c.color),
        "iterations"in c && n(3, a = c.iterations)
    }
    ,
    e.$$.update = ()=>{
        e.$$.dirty & 8 && n(2, s = a ?? "infinite")
    }
    ,
    [o, r, s, a]
}
class qf extends G {
    constructor(t) {
        super(),
        N(this, t, jf, Hf, B, {
            size: 0,
            color: 1,
            iterations: 3
        })
    }
}
function Kf(e) {
    let t, n, s;
    return n = new qf({
        props: {
            iterations: 2
        }
    }),
    {
        c() {
            t = E("div"),
            O(n.$$.fragment),
            p(t, "class", "flex-center h-full bg-white rounded-lg")
        },
        m(o, r) {
            $(o, t, r),
            k(n, t, null),
            s = !0
        },
        p: J,
        i(o) {
            s || (m(n.$$.fragment, o),
            s = !0)
        },
        o(o) {
            h(n.$$.fragment, o),
            s = !1
        },
        d(o) {
            o && I(t),
            F(n)
        }
    }
}
class Yf extends G {
    constructor(t) {
        super(),
        N(this, t, null, Kf, B, {})
    }
}
function xs(e) {
    let t, n, s, o, r, a, c;
    return n = new At({
        props: {
            component: Yf,
            id: oe.widgetTypingFrame,
            title: "Smartsupp widget typing",
            frameStyle: St()
        }
    }),
    {
        c() {
            var i;
            t = E("div"),
            O(n.$$.fragment),
            p(t, "style", `box-shadow: rgba(0, 0, 0, 0.2) ${(i = e[1]) != null && i.limitShadow ? "0px 3px 12px" : "0px 3px 16px"} border-radius: 24px;`),
            p(t, "data-testid", oe.widgetTypingFrame),
            H(t, "height", 40),
            H(t, "width", 70)
        },
        m(i, u) {
            $(i, t, u),
            k(n, t, null),
            r = !0,
            a || (c = yt(Wd.call(null, t)),
            a = !0)
        },
        p: J,
        i(i) {
            r || (m(n.$$.fragment, i),
            i && ve(()=>{
                r && (o && o.end(1),
                s = lt(t, pe, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }),
                s.start())
            }
            ),
            r = !0)
        },
        o(i) {
            h(n.$$.fragment, i),
            s && s.invalidate(),
            i && (o = ut(t, pe, {
                y: 10,
                duration: 250
            })),
            r = !1
        },
        d(i) {
            i && I(t),
            F(n),
            i && o && o.end(),
            a = !1,
            c()
        }
    }
}
function Xf(e) {
    let t, n, s = e[0] && xs(e);
    return {
        c() {
            s && s.c(),
            t = we()
        },
        m(o, r) {
            s && s.m(o, r),
            $(o, t, r),
            n = !0
        },
        p(o, [r]) {
            o[0] ? s ? (s.p(o, r),
            r & 1 && m(s, 1)) : (s = xs(o),
            s.c(),
            m(s, 1),
            s.m(t.parentNode, t)) : s && (le(),
            h(s, 1, 1, ()=>{
                s = null
            }
            ),
            ue())
        },
        i(o) {
            n || (m(s),
            n = !0)
        },
        o(o) {
            h(s),
            n = !1
        },
        d(o) {
            o && I(t),
            s && s.d(o)
        }
    }
}
function Jf(e, t, n) {
    let s;
    j(e, nd, r=>n(0, s = r));
    const {widgetBlockingOptions: o} = _.getOptions();
    return [s, o]
}
class Zf extends G {
    constructor(t) {
        super(),
        N(this, t, Jf, Xf, B, {})
    }
}
const En = S(null)
  , Qf = A([En], ([e])=>!!e);
function ep(e) {
    let t, n = '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>', s = [{
        viewBox: "0 0 24 24"
    }, {
        width: "1.2em"
    }, {
        height: "1.2em"
    }, e[0]], o = {};
    for (let r = 0; r < s.length; r += 1)
        o = ot(o, s[r]);
    return {
        c() {
            t = dn("svg"),
            ds(t, o)
        },
        m(r, a) {
            $(r, t, a),
            t.innerHTML = n
        },
        p(r, [a]) {
            ds(t, o = Hs(s, [{
                viewBox: "0 0 24 24"
            }, {
                width: "1.2em"
            }, {
                height: "1.2em"
            }, a & 1 && r[0]]))
        },
        i: J,
        o: J,
        d(r) {
            r && I(t)
        }
    }
}
function tp(e, t, n) {
    return e.$$set = s=>{
        n(0, t = ot(ot({}, t), gn(s)))
    }
    ,
    t = gn(t),
    [t]
}
class np extends G {
    constructor(t) {
        super(),
        N(this, t, tp, ep, B, {})
    }
}
function sp(e) {
    let t, n, s, o, r, a, c;
    var i = e[0];
    function u(g, b) {
        return {
            props: {
                width: "1em",
                height: "1em",
                style: `transform: scale(${g[7]}) scaleX(${g[8]});`
            }
        }
    }
    i && (s = It(i, u(e)));
    let d = [{
        type: "button"
    }, {
        tabindex: "0"
    }, e[9], {
        "aria-label": e[1]
    }, {
        class: o = `btn btn-${e[4]} btn-${e[3]}`
    }, {
        disabled: e[5]
    }, {
        "data-testid": e[6]
    }]
      , l = {};
    for (let g = 0; g < d.length; g += 1)
        l = ot(l, d[g]);
    return {
        c() {
            t = E("button"),
            n = E("div"),
            s && O(s.$$.fragment),
            p(n, "class", "w-full h-full flex items-center justify-center"),
            Y(n, "animate-spin", e[2] === "spin"),
            gs(t, l),
            Y(t, "btn-disabled", !!e[5]),
            Y(t, "cursor-auto", Ot()),
            Y(t, "cursor-pointer", !Ot()),
            Y(t, "svelte-1lb2fzt", !0)
        },
        m(g, b) {
            $(g, t, b),
            v(t, n),
            s && k(s, n, null),
            t.autofocus && t.focus(),
            r = !0,
            a || (c = ke(t, "click", On(e[11])),
            a = !0)
        },
        p(g, [b]) {
            if (b & 1 && i !== (i = g[0])) {
                if (s) {
                    le();
                    const w = s;
                    h(w.$$.fragment, 1, 0, ()=>{
                        F(w, 1)
                    }
                    ),
                    ue()
                }
                i ? (s = It(i, u(g)),
                O(s.$$.fragment),
                m(s.$$.fragment, 1),
                k(s, n, null)) : s = null
            } else if (i) {
                const w = {};
                b & 128 && (w.style = `transform: scale(${g[7]}) scaleX(${g[8]});`),
                s.$set(w)
            }
            (!r || b & 4) && Y(n, "animate-spin", g[2] === "spin"),
            gs(t, l = Hs(d, [{
                type: "button"
            }, {
                tabindex: "0"
            }, b & 512 && g[9], (!r || b & 2) && {
                "aria-label": g[1]
            }, (!r || b & 24 && o !== (o = `btn btn-${g[4]} btn-${g[3]}`)) && {
                class: o
            }, (!r || b & 32) && {
                disabled: g[5]
            }, (!r || b & 64) && {
                "data-testid": g[6]
            }])),
            Y(t, "btn-disabled", !!g[5]),
            Y(t, "cursor-auto", Ot()),
            Y(t, "cursor-pointer", !Ot()),
            Y(t, "svelte-1lb2fzt", !0)
        },
        i(g) {
            r || (s && m(s.$$.fragment, g),
            r = !0)
        },
        o(g) {
            s && h(s.$$.fragment, g),
            r = !1
        },
        d(g) {
            g && I(t),
            s && F(s),
            a = !1,
            c()
        }
    }
}
function op(e, t, n) {
    const s = ["icon", "iconDescription", "iconOrientation", "iconAnimation", "size", "variant", "disabled", "testId"];
    let o = fs(t, s)
      , {icon: r} = t
      , {iconDescription: a} = t
      , {iconOrientation: c="right"} = t
      , {iconAnimation: i="none"} = t
      , {size: u="md"} = t
      , {variant: d="ghost"} = t
      , {disabled: l=void 0} = t
      , {testId: g=void 0} = t;
    const b = c === "right" ? 1 : -1;
    let w = 1.2;
    function T(C) {
        Ze.call(this, e, C)
    }
    return e.$$set = C=>{
        t = ot(ot({}, t), gn(C)),
        n(9, o = fs(t, s)),
        "icon"in C && n(0, r = C.icon),
        "iconDescription"in C && n(1, a = C.iconDescription),
        "iconOrientation"in C && n(10, c = C.iconOrientation),
        "iconAnimation"in C && n(2, i = C.iconAnimation),
        "size"in C && n(3, u = C.size),
        "variant"in C && n(4, d = C.variant),
        "disabled"in C && n(5, l = C.disabled),
        "testId"in C && n(6, g = C.testId)
    }
    ,
    e.$$.update = ()=>{
        e.$$.dirty & 8 && u === "xl" && n(7, w = 1.5)
    }
    ,
    [r, a, i, u, d, l, g, w, b, o, c, T]
}
class rp extends G {
    constructor(t) {
        super(),
        N(this, t, op, sp, B, {
            icon: 0,
            iconDescription: 1,
            iconOrientation: 10,
            iconAnimation: 2,
            size: 3,
            variant: 4,
            disabled: 5,
            testId: 6
        })
    }
}
function ap(e) {
    let t, n, s, o, r, a;
    return {
        c() {
            t = E("video"),
            n = E("track"),
            s = E("source"),
            p(n, "kind", "captions"),
            Lt(s.src, o = e[1].attachment.url) || p(s, "src", o),
            t.controls = !0,
            p(t, "class", "m-auto max-h-full max-w-full bg-black object-contain"),
            t.autoplay = !0,
            t.loop = !0
        },
        m(c, i) {
            $(c, t, i),
            v(t, n),
            v(t, s),
            r || (a = [ke(t, "click", On(e[6])), ke(t, "keypress", e[7])],
            r = !0)
        },
        p(c, i) {
            i & 2 && !Lt(s.src, o = c[1].attachment.url) && p(s, "src", o)
        },
        d(c) {
            c && I(t),
            r = !1,
            kn(a)
        }
    }
}
function ip(e) {
    let t, n, s, o, r;
    return {
        c() {
            var a, c;
            t = E("img"),
            p(t, "class", "m-auto max-h-full max-w-full select-none bg-black"),
            p(t, "width", "auto"),
            p(t, "height", "auto"),
            Lt(t.src, n = (a = e[1]) == null ? void 0 : a.attachment.url) || p(t, "src", n),
            p(t, "alt", s = (c = e[1]) == null ? void 0 : c.attachment.fileName)
        },
        m(a, c) {
            $(a, t, c),
            o || (r = [ke(t, "click", On(e[4])), ke(t, "keypress", e[5])],
            o = !0)
        },
        p(a, c) {
            var i, u;
            c & 2 && !Lt(t.src, n = (i = a[1]) == null ? void 0 : i.attachment.url) && p(t, "src", n),
            c & 2 && s !== (s = (u = a[1]) == null ? void 0 : u.attachment.fileName) && p(t, "alt", s)
        },
        d(a) {
            a && I(t),
            o = !1,
            kn(r)
        }
    }
}
function cp(e) {
    var ae;
    let t, n, s, o, r = ((ae = e[1]) == null ? void 0 : ae.attachment.fileName) + "", a, c, i, u, d, l, g, b, w, T, C;
    u = new rp({
        props: {
            icon: np,
            iconDescription: "Close",
            size: "xl"
        }
    }),
    u.$on("click", e[8]);
    function y(P, se) {
        var be, Ce;
        if (((be = P[1]) == null ? void 0 : be.type) === Cn.Image)
            return ip;
        if (((Ce = P[1]) == null ? void 0 : Ce.type) === Cn.Video)
            return ap
    }
    let L = y(e)
      , q = L && L(e);
    return {
        c() {
            t = E("div"),
            n = E("div"),
            s = E("div"),
            o = E("span"),
            a = zt(r),
            c = x(),
            i = E("div"),
            O(u.$$.fragment),
            d = x(),
            l = E("div"),
            q && q.c(),
            p(o, "class", "whitespace-nowrap text-ellipsis overflow-hidden"),
            p(s, "class", "flex-grow flex items-center text-md px-4 overflow-hidden"),
            p(i, "class", "flex-shrink"),
            p(n, "class", "flex-shrink flex flex-row w-full bg-black text-white"),
            p(l, "class", "relative overflow-hidden flex-grow flex items-center bg-black/80 z-10"),
            Y(l, "p-8", e[0]),
            Y(l, "p-4", !e[0]),
            p(t, "class", "w-full h-full flex flex-col")
        },
        m(P, se) {
            $(P, t, se),
            v(t, n),
            v(n, s),
            v(s, o),
            v(o, a),
            v(n, c),
            v(n, i),
            k(u, i, null),
            v(t, d),
            v(t, l),
            q && q.m(l, null),
            w = !0,
            T || (C = [ke(l, "click", e[9]), ke(l, "keypress", e[3])],
            T = !0)
        },
        p(P, [se]) {
            var be;
            (!w || se & 2) && r !== (r = ((be = P[1]) == null ? void 0 : be.attachment.fileName) + "") && Ht(a, r),
            L === (L = y(P)) && q ? q.p(P, se) : (q && q.d(1),
            q = L && L(P),
            q && (q.c(),
            q.m(l, null))),
            (!w || se & 1) && Y(l, "p-8", P[0]),
            (!w || se & 1) && Y(l, "p-4", !P[0])
        },
        i(P) {
            w || (m(u.$$.fragment, P),
            P && ve(()=>{
                w && (b && b.end(1),
                g = lt(t, pe, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }),
                g.start())
            }
            ),
            w = !0)
        },
        o(P) {
            h(u.$$.fragment, P),
            g && g.invalidate(),
            P && (b = ut(t, pe, {
                y: 10,
                duration: 250
            })),
            w = !1
        },
        d(P) {
            P && I(t),
            F(u),
            q && q.d(),
            P && b && b.end(),
            T = !1,
            kn(C)
        }
    }
}
function lp(e, t, n) {
    let s, o, r;
    j(e, da, w=>n(0, o = w)),
    j(e, En, w=>n(1, r = w));
    const a = w=>{
        w === "overlay" && !s || En.set(null)
    }
    ;
    function c(w) {
        Ze.call(this, e, w)
    }
    function i(w) {
        Ze.call(this, e, w)
    }
    function u(w) {
        Ze.call(this, e, w)
    }
    function d(w) {
        Ze.call(this, e, w)
    }
    function l(w) {
        Ze.call(this, e, w)
    }
    const g = ()=>a("button")
      , b = ()=>a("overlay");
    return e.$$.update = ()=>{
        e.$$.dirty & 1 && (s = o)
    }
    ,
    [o, r, a, c, i, u, d, l, g, b]
}
class up extends G {
    constructor(t) {
        super(),
        N(this, t, lp, cp, B, {})
    }
}
function Gs(e) {
    let t, n, s, o, r, a, c;
    return n = new At({
        props: {
            component: up,
            id: oe.widgetImagePreview,
            title: "Smartsupp widget image preview",
            frameStyle: St(gp)
        }
    }),
    {
        c() {
            t = E("div"),
            O(n.$$.fragment),
            p(t, "data-testid", oe.widgetImagePreview),
            H(t, "transition", "max-height 250ms ease-in-out, width 250ms ease-in-out")
        },
        m(i, u) {
            $(i, t, u),
            k(n, t, null),
            r = !0,
            a || (c = yt(zd.call(null, t)),
            a = !0)
        },
        i(i) {
            r || (m(n.$$.fragment, i),
            i && ve(()=>{
                r && (o && o.end(1),
                s = lt(t, pe, {
                    y: 20,
                    delay: 100,
                    duration: 250
                }),
                s.start())
            }
            ),
            r = !0)
        },
        o(i) {
            h(n.$$.fragment, i),
            s && s.invalidate(),
            i && (o = ut(t, pe, {
                y: 10,
                duration: 250
            })),
            r = !1
        },
        d(i) {
            i && I(t),
            F(n),
            i && o && o.end(),
            a = !1,
            c()
        }
    }
}
function dp(e) {
    let t, n, s = e[0] && Gs();
    return {
        c() {
            s && s.c(),
            t = we()
        },
        m(o, r) {
            s && s.m(o, r),
            $(o, t, r),
            n = !0
        },
        p(o, [r]) {
            o[0] ? s ? r & 1 && m(s, 1) : (s = Gs(),
            s.c(),
            m(s, 1),
            s.m(t.parentNode, t)) : s && (le(),
            h(s, 1, 1, ()=>{
                s = null
            }
            ),
            ue())
        },
        i(o) {
            n || (m(s),
            n = !0)
        },
        o(o) {
            h(s),
            n = !1
        },
        d(o) {
            o && I(t),
            s && s.d(o)
        }
    }
}
const gp = e=>{
    e.style.position = "fixed"
}
;
function fp(e, t, n) {
    let s;
    return j(e, Qf, o=>n(0, s = o)),
    [s]
}
class pp extends G {
    constructor(t) {
        super(),
        N(this, t, fp, dp, B, {})
    }
}
function mp(e) {
    let t, n, s, o, r, a, c, i, u, d;
    return t = new Zf({}),
    s = new zf({}),
    r = new mf({}),
    c = new Bf({}),
    u = new pp({}),
    {
        c() {
            O(t.$$.fragment),
            n = x(),
            O(s.$$.fragment),
            o = x(),
            O(r.$$.fragment),
            a = x(),
            O(c.$$.fragment),
            i = x(),
            O(u.$$.fragment)
        },
        m(l, g) {
            k(t, l, g),
            $(l, n, g),
            k(s, l, g),
            $(l, o, g),
            k(r, l, g),
            $(l, a, g),
            k(c, l, g),
            $(l, i, g),
            k(u, l, g),
            d = !0
        },
        i(l) {
            d || (m(t.$$.fragment, l),
            m(s.$$.fragment, l),
            m(r.$$.fragment, l),
            m(c.$$.fragment, l),
            m(u.$$.fragment, l),
            d = !0)
        },
        o(l) {
            h(t.$$.fragment, l),
            h(s.$$.fragment, l),
            h(r.$$.fragment, l),
            h(c.$$.fragment, l),
            h(u.$$.fragment, l),
            d = !1
        },
        d(l) {
            l && (I(n),
            I(o),
            I(a),
            I(i)),
            F(t, l),
            F(s, l),
            F(r, l),
            F(c, l),
            F(u, l)
        }
    }
}
function hp(e) {
    let t, n;
    return t = new Gg({
        props: {
            $$slots: {
                default: [mp]
            },
            $$scope: {
                ctx: e
            }
        }
    }),
    {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            k(t, s, o),
            n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 4 && (r.$$scope = {
                dirty: o,
                ctx: s
            }),
            t.$set(r)
        },
        i(s) {
            n || (m(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            h(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            F(t, s)
        }
    }
}
function bp(e, t, n) {
    let s, o;
    return j(e, re, r=>n(0, s = r)),
    j(e, Zl, r=>n(1, o = r)),
    Ge(()=>{
        (async()=>{
            await di(),
            await ne.initClient()
        }
        )()
    }
    ),
    ou(ee()),
    e.$$.update = ()=>{
        e.$$.dirty & 3 && o && !s && qo()
    }
    ,
    [s, o]
}
class yp extends G {
    constructor(t) {
        super(),
        N(this, t, bp, hp, B, {})
    }
}
const cn = Dn(window);
window.widget = cn;
_.init(cn.options);
cn.installApi($g);
ns.setThemeColor(cn.options);
dr();
ru();
tc();
new yp({
    target: document.getElementById("app")
});
export {au as $, tm as A, _e as B, V as C, Sr as D, nm as E, ze as F, am as G, jr as H, rp as I, $e as J, wp as K, sm as L, Od as M, om as N, Yp as O, Fp as P, Np as Q, im as R, kp as S, Zi as T, Up as U, W as V, $p as W, np as X, ne as Y, Q as Z, Pt as _, oe as a, Ml as a$, rm as a0, $n as a1, jt as a2, Ks as a3, Pp as a4, Jp as a5, qf as a6, Kd as a7, Ep as a8, Ne as a9, Vp as aA, Ue as aB, ro as aC, Sn as aD, Am as aE, Wn as aF, We as aG, Qi as aH, xp as aI, Sm as aJ, vm as aK, bm as aL, Nn as aM, Do as aN, Jl as aO, em as aP, Zl as aQ, Hd as aR, Qt as aS, Kn as aT, td as aU, jd as aV, Cp as aW, Op as aX, Ip as aY, Xp as aZ, ln as a_, Tp as aa, Hp as ab, zp as ac, ol as ad, Dp as ae, En as af, Cn as ag, qp as ah, jp as ai, Kp as aj, qn as ak, ml as al, Sp as am, Ap as an, ko as ao, Mp as ap, U as aq, jl as ar, Fe as as, fl as at, Lo as au, fe as av, du as aw, ym as ax, Zp as ay, fo as az, Ar as b, Wp as b0, Ki as b1, Bp as b2, Pe as b3, Un as b4, z as b5, Bt as b6, pt as b7, Rp as b8, vt as b9, ia as bA, Hu as bB, bn as bC, Zn as bD, Gp as bE, Ru as bF, Lp as bG, Cm as bH, $o as bI, Qp as bJ, re as ba, Ho as bb, et as bc, wm as bd, Yn as be, ju as bf, pr as bg, ye as bh, Re as bi, ai as bj, io as bk, ao as bl, Aa as bm, ba as bn, Ea as bo, Oa as bp, ka as bq, Ia as br, xa as bs, Ga as bt, za as bu, ja as bv, qa as bw, Ya as bx, si as by, _m as bz, gm as c, No as d, Ot as e, da as f, ee as g, un as h, dm as i, fm as j, cm as k, _t as l, lm as m, hm as n, vp as o, at as p, ce as q, mm as r, pm as s, te as t, um as u, me as v, _ as w, Oe as x, $u as y, Ys as z};
