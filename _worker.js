export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname = 'https://affectionatedesertedplots.iliasoleimany.repl.co/745f7f61-f5ce-4b56-ae02-9edaa99ab5c9.html'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
