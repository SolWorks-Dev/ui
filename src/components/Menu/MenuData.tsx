import { BuildingSkyscraper, Filter, Firetruck, ListDetails, Track } from 'tabler-icons-react';
import { appList } from '@solworks/application-registry';
import { formatCategoryLink } from '../../Common';
import { Icon } from 'tabler-icons-react';

export type MenuLinkDetails = {
  label: string;
  icon: Icon;
  links?: {
    label: string;
    link: string;
    comingSoon: boolean;
    external: boolean;
  }[];
  link?: string;
  initiallyOpened: boolean;
  disabled?: boolean;
  external?: boolean;
};

export const MenuData: MenuLinkDetails[] = [
  { label: 'Curated', icon: Filter, link: formatCategoryLink('curated'), initiallyOpened: false },
  {
    label: 'Categories',
    icon: ListDetails,
    links: [...new Set(appList.apps.map((app) => app.app.categories[0]))]
      .sort()
      .map((category) => {
        return appList.categories.find((mCategory) => mCategory.value === category)!;
      })
      .map((category) => {
        return {
          label: category.heading_label,
          link: formatCategoryLink(category.value),
          comingSoon: false,
          external: false,
        };
      }),
    initiallyOpened: false,
  },
  {
    label: 'Help',
    icon: Firetruck,
    links: [
      { label: 'Getting started', link: 'https://docs.solworks.dev', comingSoon: false, external: true },
      {
        label: 'Listing: Apply',
        link: 'https://k722zc9ivtg.typeform.com/to/uN4Pklej',
        comingSoon: false,
        external: true,
      },
      {
        label: 'Listing: Update',
        link: 'https://k722zc9ivtg.typeform.com/to/BljLUU8I',
        comingSoon: false,
        external: true,
      },
      { label: 'Partnership', link: 'https://k722zc9ivtg.typeform.com/to/OHTjdlkb', comingSoon: false, external: true },
    ],
    initiallyOpened: false,
  },
  { 
    label: 'Roadmap', 
    icon: Track, 
    link: 'https://solworks.notion.site/Roadmap-2f77e4c1cd864055ab2136b8a8f5b335', 
    initiallyOpened: false, 
    disabled: false,
    external: true
  },
  {
    label: 'Ecosystem',
    icon: BuildingSkyscraper,
    links: [
      { label: 'SolWorks', link: 'https://solworks.dev', comingSoon: false, external: true },
      { label: 'SolApps', link: '/#', comingSoon: false, external: false },
      { label: 'Sujiko', link: 'https://sujiko.trade', comingSoon: false, external: true },
      { label: 'Footpath', link: 'https://solworks.notion.site/Footpath-15acf5c8403b4361a0118aea23e39b0a', comingSoon: false, external: true },
      { label: 'Col8', link: 'https://github.com/SolWorks-Dev/col8', comingSoon: false, external: true },
      { label: 'SolToolkit', link: 'https://soltoolkit.dev', comingSoon: false, external: true },
      { label: 'SolDisperse', link: '/', comingSoon: true, external: false },
    ],
    initiallyOpened: false,
  },
];
