import ConfirmDialogComponent from "./components/ConfirmDialogComponent.vue";
import { createApp } from "vue";

function _confirm(props) {
  return new Promise((resolve) => {
    const app = createApp(ConfirmDialogComponent, {
      ...props,
      onConfirm: () => resolve(true),
      onCancel: () => resolve(false),
    }).mount(document.body.appendChild(document.createElement("div")));
  });
}
export default {
  install: (app) => {
    app.config.globalProperties.$confirm = _confirm;
  },
};
