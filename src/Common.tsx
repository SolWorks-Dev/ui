import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function encodeString(text: string) {
  return text.replace(' ', '_').toLocaleLowerCase().replace(/\W/g, '');
}

export function formatLink(appName: string) {
  return `/apps/${encodeString(appName)}`;
}

export function formatCategoryLink(categoryName: string) {
  return `/category/${encodeString(categoryName)}`;
}

export function categoryToColorHex(category: string): string {
  switch (category.toLowerCase()) {
    case 'aggregator':
      return '#BF8A8F';
    case 'amm':
    case 'amms':
      return '#71adff';
    case 'analytics':
      return '#8AA78C';
    case 'dao':
      return '#f89a3d';
    case 'derivatives':
      return '#461183';
    case 'game':
      return '#ff0000';
    case 'dex':
      return '#8AA78C';
    case 'lending':
      return '#8a2be2';
    case 'marketplace':
      return '#8a8583';
    case 'music':
      return '#C2C2B4';
    case 'oracle':
      return '#461183';
    case 'wallet':
      return '#475c6c'
    case 'infrastructure':
      return '#cd8b62'
    case 'nft':
      return '#71adff'
    default:
      return '#8AA78C';
  }
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function formatNumber(value: number, decimals: number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return formatter.format(value);
}
