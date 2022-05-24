import del from 'del';

export const reset = () => {
  return del([
    app.path.clean.pages,
    app.path.clean.content,
    app.path.clean.styles
  ], {force:true});
}