import del from 'del';
export const reset = () => {
  return del([
    app.path.clean.html,
    app.path.clean.styles,
    app.path.clean.scripts
  ], {force:true});
}