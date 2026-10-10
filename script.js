const gumroadUrl = 'https://compiledpress.gumroad.com/l/how-to-use-ai-avoid-plagiarism';
const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const params = new URLSearchParams(window.location.search);
const trackingQuery = trackingKeys
  .filter((key) => params.has(key))
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params.get(key))}`)
  .join('&');

document.querySelectorAll('[data-gumroad-link]').forEach((link) => {
  link.href = trackingQuery ? `${gumroadUrl}?${trackingQuery}` : gumroadUrl;
  link.addEventListener('click', () => {
    if (typeof window.fbq === 'function') window.fbq('track', 'ViewContent', { content_name: 'How to Use AI and Avoid Plagiarism' });
  });
});