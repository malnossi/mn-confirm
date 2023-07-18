import { openBlock as r, createBlock as d, Transition as m, withCtx as f, createElementBlock as u, createElementVNode as o, toDisplayString as c, createCommentVNode as _, createApp as p } from "vue";
const g = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, C = {
  name: "ConfirmDialogComponent",
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: () => ""
    },
    okButton: {
      type: String,
      default: () => "Ok"
    },
    cancelButton: {
      type: String,
      default: () => "Cancel"
    }
  },
  data: () => ({
    isVisible: !0
  }),
  methods: {
    confirm() {
      this.isVisible = !1, this.$emit("confirm");
    },
    cancel() {
      this.isVisible = !1, this.$emit("cancel");
    }
  }
}, b = {
  key: 0,
  class: "popup-modal"
}, k = { class: "window" }, y = { style: { "margin-top": "0" } }, h = { class: "btns" };
function v(e, t, n, s, l, i) {
  return r(), d(m, { name: "fade" }, {
    default: f(() => [
      e.isVisible ? (r(), u("div", b, [
        o("div", k, [
          o("h2", y, c(n.title), 1),
          o("p", null, c(n.message), 1),
          o("div", h, [
            o("button", {
              class: "cancel-btn",
              onClick: t[0] || (t[0] = (...a) => i.cancel && i.cancel(...a))
            }, c(n.cancelButton), 1),
            o("button", {
              class: "ok-btn",
              onClick: t[1] || (t[1] = (...a) => i.confirm && i.confirm(...a))
            }, c(n.okButton), 1)
          ])
        ])
      ])) : _("", !0)
    ]),
    _: 1
  });
}
const B = /* @__PURE__ */ g(C, [["render", v], ["__scopeId", "data-v-9c6a7adc"]]);
function V(e) {
  return new Promise((t) => {
    p(B, {
      ...e,
      onConfirm: () => t(!0),
      onCancel: () => t(!1)
    }).mount(document.body.appendChild(document.createElement("div")));
  });
}
const S = {
  install: (e) => {
    e.config.globalProperties.$confirm = V;
  }
};
export {
  S as default
};
