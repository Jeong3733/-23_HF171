import { v4 as uuid } from 'uuid';

const NavbarDefault = [
  {
    id: uuid(),
    menuitem: '공모전 탐색',
    link: '',
    children: [
      {
        id: uuid(),
        menuitem: '공모전 탐색',
        link: '/explore/',
      },
      {
        id: uuid(),
        menuitem: '공모전 추가하기',
        link: '/add-new-competition/',
      },
    ],
  },
  {
    id: uuid(),
    menuitem: '마이페이지',
    link: '',
    children: [
      {
        id: uuid(),
        header: true,
        header_text: 'Accounts',
        description: 'Instructor dashboard for manage courses and earning.',
      },
      {
        id: uuid(),
        menuitem: '주최자',
        link: '',
        children: [
          {
            id: uuid(),
            header: true,
            header_text: '주최자',
            description: '주최자~~~',
          },
          {
            id: uuid(),
            divider: true,
          },
          {
            id: uuid(),
            menuitem: 'Dashboard',
            link: '/dashboard/creator/',
            type: 'button',
          },
        ],
      },
      {
        id: uuid(),
        menuitem: '참가자',
        link: '',
        children: [
          {
            id: uuid(),
            header: true,
            header_text: '참가자',
            description: '참가자~~',
          },
          {
            id: uuid(),
            divider: true,
          },
          {
            id: uuid(),
            menuitem: 'Dashboard',
            link: '/dashboard/participant/',
            type: 'button',
          },
        ],
      },
      {
        id: uuid(),
        divider: true,
      },
      {
        id: uuid(),
        header: true,
        header_text: 'Common',
      },
      {
        id: uuid(),
        menuitem: 'Sign In',
        link: '/authentication/sign-in/',
      },
      {
        id: uuid(),
        menuitem: 'Sign Up',
        link: '/authentication/sign-up/',
      },
      {
        id: uuid(),
        menuitem: 'Forgot Password',
        link: '/authentication/forget-password/',
      },
    ],
  },
];

export default NavbarDefault;
