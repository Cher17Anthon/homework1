export const replacePlaceholder = (url: string): string => {
  if (!url) return "/fallback.png";
  if (url.includes("via.placeholder.com")) {
    const sizeMatch = url.match(/\/(\d+)(?:\/[0-9a-f]+)?$/);
    const size = sizeMatch ? sizeMatch[1] : "150";
    return `https://picsum.photos/${size}`;
  }
  return url;
};
