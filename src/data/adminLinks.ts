import {
  CalendarIcon,
  CollectionIcon,
  NewspaperIcon,
  SpeakerphoneIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'

export const adminLinks = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: ViewGridIcon,
  },
  {
    name: 'Matchverslagen',
    href: '/admin/matchverslagen',
    icon: NewspaperIcon,
  },
  {
    name: 'Mededelingen',
    href: '/admin/mededelingen',
    icon: SpeakerphoneIcon,
  },
  {
    name: 'Nieuws',
    href: '/admin/nieuws',
    icon: CollectionIcon,
  },
  {
    name: 'Evenementen',
    href: '/admin/evenementen',
    icon: CalendarIcon,
  },
]
