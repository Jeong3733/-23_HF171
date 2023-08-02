import { v4 as uuid } from 'uuid';
/**
 *  All Dashboard Routes
 *
 *  Understanding name/value pairs for Dashboard routes
 *
 *  Applicable for main/root/level 1 routes
 *  icon 		: String - It's only for main menu or you can consider 1st level menu item to specify icon name.
 * 				: Object - Icon as an object added from v1.4.0.
 *
 *  Applicable for main/root/level 1 and subitems routes
 * 	id 			: Number - You can use uuid() as value to generate unique ID using uuid library, you can also assign constant unique ID for react dynamic objects.
 *  title 		: String - If menu contains childern use title to provide main menu name.
 *  badge 		: String - (Optional - Default - '') If you specify badge value it will be displayed beside the menu title or menu item.
 * 	badgecolor 	: String - (Optional - Default - 'primary' ) - Used to specify badge background color.
 *
 *  Applicable for subitems / children items routes
 *  name 		: String - If it's menu item in which you are specifiying link, use name ( don't use title for that )
 *  children	: Array - Use to specify submenu items
 *
 *  Used to segrigate menu groups
 *  grouptitle : Boolean - (Optional - Default - false ) If you want to group menu items you can use grouptitle = true,
 *  ( Use title : value to specify group title  e.g. COMPONENTS , DOCUMENTATION that we did here. )
 *
 */

// import MDI icons
import Icon from '@mdi/react';
import { mdiTrello, mdiCalendar } from '@mdi/js';

// home
// book
// book-open
// file
// clipboard
export const DashboardMenu = (competiton_id) => {
  const { id } = competiton_id;
  return [
    {
      id: uuid(),
      title: '평가 페이지(임시)',
      grouptitle: true,
    },
    {
      id: uuid(),
      title: '공모전 상세 페이지로 가기',
      icon: 'help-circle',
      link: '/detail/${id}/',
    },
    {
      id: uuid(),
      title: '제출 리스트',
      icon: 'help-circle',
      link: '/evaluate/${id}/submits/',
    },
    {
      id: uuid(),
      title: '제출 1',
      post_id: '1',
      icon: 'book',
      children: [
        {
          id: uuid(),
          name: '문서 리스트',
          post_id: '1',
          link: 'files',
        },
        {
          id: uuid(),
          name: '참가자 리스트',
          post_id: '1',
          link: 'member',
        },
      ],
    },
    {
      id: uuid(),
      title: '제출 2',
      post_id: '2',
      icon: 'book',
      children: [
        {
          id: uuid(),
          name: '문서 리스트',
          post_id: '2',
          link: 'files',
        },
        {
          id: uuid(),
          name: '참가자 리스트',
          post_id: '2',
          link: 'member',
        },
      ],
    },
  ];
};

export default DashboardMenu;
