// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconDeviceMobileCog} from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconDeviceMobileCog
};

// ==============================|| Download MENU ITEMS ||============================== //

const utilities = {
  id: 'download',
  // title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'download-apps',
      title: 'Download Apps',
      type: 'item',
      url: '/download/app-download',
      icon: icons.IconDeviceMobileCog,
      breadcrumbs: true
    }
  ]
};

export default utilities;
