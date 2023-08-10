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
    title: 'Documentation',
    grouptitle: true,
  },
  {
    id: uuid(),
    title: '파일',
    icon: 'book',
    popup: 'FileListPopup',
  },
  {
    id: uuid(),
    title: '요약',
    icon: 'book-open',
    popup: 'SummaryPopup',
  },
  {
    id: uuid(),
    title: '문서QA',
    icon: 'message-square',
    popup: 'DocumentQAPopup',
  },
  {
    id: uuid(),
    title: '표절검사',
    icon: 'git-pull-request',
    popup: 'PlagiarismCheckPopup',
  },
  {
    id: uuid(),
    title: '평가',
    icon: 'clipboard',
    popup: 'EvaluationPopup',
    // link: 'EvaluationPopup',
  },
  {
    id: uuid(),
    title: '정보',
    icon: 'help-circle',
    popup: 'InfoPopup',
  },
];

export default DashboardMenu;
