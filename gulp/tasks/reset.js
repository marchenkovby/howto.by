import del from "del";
export const reset = () => {
  return del([
    app.path.clean.html,
    app.path.clean.style
  ]);
}