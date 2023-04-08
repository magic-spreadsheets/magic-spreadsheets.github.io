const a = (): void => {
  const e = document.getElementById('form-box') as HTMLElement;
  e.style.height = '196px';
};

a();

const b = (): void => {
  const e = document.getElementById('form-box') as HTMLElement;
  e.style.height = 'auto';
};

const v = (): void => {
  if (typeof Tally !== 'undefined') {
    Tally.loadEmbeds();
  } else {
    document
      .querySelectorAll('iframe[data-tally-src]:not([src])')
      .forEach((e: HTMLIFrameElement) => {
        e.src = e.dataset.tallySrc as string;
      });
  }
};

if (typeof Tally !== 'undefined') {
  v();
  b();
} else if (document.querySelector(`script[src="https://tally.so/widgets/embed.js"]`) === null) {
  const s = document.createElement('script');
  s.src = 'https://tally.so/widgets/embed.js';
  s.onload = v;
  s.onerror = v;
  document.body.appendChild(s);
}
