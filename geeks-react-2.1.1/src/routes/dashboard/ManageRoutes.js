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
export const DashboardMenu = [
  {
    id: uuid(),
    title: '소개글 관리',
    icon: 'book',
    link: 'readme',
  },
  {
    id: uuid(),
    title: '인원 관리',
    icon: 'book-open',
    link: 'members',
  },
  {
    id: uuid(),
    title: '공지사항 관리',
    icon: 'book-open',
    link: 'announcements',
  },
  {
    id: uuid(),
    title: 'QNA 관리',
    icon: 'book',
    link: 'qna',
  },
  {
    id: uuid(),
    title: '제출물 관리',
    icon: 'book-open',
    link: 'submits',
  },
  {
    id: uuid(),
    title: '평가 항목 관리',
    icon: 'book-open',
    link: 'evaluate',
  },
];

export default DashboardMenu;
