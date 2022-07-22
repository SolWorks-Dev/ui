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
