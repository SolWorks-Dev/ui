import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TagColor } from './components/ApplicationCardMini';

export function formatLink(appName: string) {
  return `/apps/${appName.toLocaleLowerCase().replace(' ', '_').replace(/\W/g, '')}`;
}

export function categoryToColor(category: string): TagColor {
  switch (category.toLowerCase()) {
    case 'amm':
    case 'amms':
      return 'purple';
    case 'infrastructure':
      return 'orange';
    case 'nft':
    default:
      return 'light-blue';
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
