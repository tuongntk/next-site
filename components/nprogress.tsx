import NProgress from 'nprogress';
import debounce from 'lodash.debounce';
import Router from 'next/router';

const start = debounce(NProgress.start, 500);
Router.events.on('routeChangeStart', () => {
  if (!Router.isFallback) {
    start();
  }
});
Router.events.on('routeChangeComplete', () => {
  start.cancel();
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  start.cancel();
  NProgress.done();
});

export default function NProgressComponent() {
  return null;
}
