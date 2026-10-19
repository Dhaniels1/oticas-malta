/**
 * Resolve imagens com caminhos locais nos dois hosts:
 * - Netlify em /images/...
 * - GitHub Pages em /oticas-malta/images/...
 * Evita usar PUBLIC_URL do Create React App como origem absoluta.
 */
const getImageUrl = (imagePath) => {
  if (/^https?:\/\//i.test(imagePath)) return imagePath;
  const cleanPath = imagePath.replace(/^\/+/, '');
  const path = window.location.pathname;
  const prefix = path === '/oticas-malta' || path.startsWith('/oticas-malta/')
    ? '/oticas-malta'
    : '';
  return `${prefix}/${cleanPath}`;
};
export default getImageUrl;
