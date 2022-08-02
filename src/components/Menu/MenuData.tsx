import { BuildingSkyscraper, Filter, Firetruck, ListDetails, Track } from 'tabler-icons-react';
import { appList } from '@solworks/application-registry';
import { MenuLinkDetails } from './index';

export const MenuData: MenuLinkDetails[] = [
  { label: 'Curated', icon: Filter, link: '/#curated', initiallyOpened: false },
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
          link: `/#${category.value}`,
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
      { label: 'Getting started', link: 'https://help.solworks.dev', comingSoon: false, external: true },
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
  { label: 'Roadmap', icon: Track, link: '/roadmap', initiallyOpened: false },
  {
    label: 'Ecosystem',
    icon: BuildingSkyscraper,
    links: [
      { label: 'SolWorks', link: 'https://solworks.dev', comingSoon: false, external: true },
      { label: 'SolApps', link: '/#', comingSoon: false, external: false },
      { label: 'SolToolkit', link: '/', comingSoon: true, external: false },
      { label: 'SolDisperse', link: '/', comingSoon: true, external: false },
      { label: 'Sujiko', link: '/', comingSoon: true, external: false },
      { label: 'Nite (Aptos)', link: '/', comingSoon: true, external: false },
    ],
    initiallyOpened: false,
  },
];
