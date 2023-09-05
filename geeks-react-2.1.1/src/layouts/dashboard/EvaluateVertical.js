// import node module libraries
import { Fragment, useContext, useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  ListGroup,
  Accordion,
  Card,
  Image,
  Badge,
  useAccordionButton,
  AccordionContext,
} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import simple bar scrolling used for notification item scrolling
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// import media files
import InverseLogo from 'assets/images/brand/logo/logo-inverse.svg';

// import routes file
// import { DashboardMenu } from 'routes/dashboard/EvaluateRoutes';

const EvaluateVertical = (props) => {
  const { competition_id } = useParams();
  const Auth = useAuth();
  const location = useLocation();

  const CustomToggle = ({ children, eventKey, icon }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('Event Key : ' + eventKey),
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <li className="nav-item">
        <Link
          className="nav-link "
          onClick={decoratedOnClick}
          to="#!"
          data-bs-toggle="collapse"
          data-bs-target="#navDashboard"
          aria-expanded={isCurrentEventKey ? true : false}
          aria-controls="navDashboard"
        >
          {icon ? <i className={`nav-icon fe fe-${icon} me-2`}></i> : ''}{' '}
          {children}
        </Link>
      </li>
    );
  };

  const generateLink = (item) => {
    return (
      <Link
        className={`nav-link ${
          location.pathname ===
          `/evaluate/${competition_id}/${item.post_id}/${item.link}/`
            ? 'active'
            : ''
        }`}
        to={`/evaluate/${competition_id}/${item.post_id}/${item.link}/`}
        onClick={(e) =>
          isMobile ? props.onClick(!props.showMenu) : props.showMenu
        }
      >
        {item.name}
        {''}
        {item.badge ? (
          <Badge
            className="ms-1"
            bg={item.badgecolor ? item.badgecolor : 'primary'}
          >
            {item.badge}
          </Badge>
        ) : (
          ''
        )}
      </Link>
    );
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [dashboardMenu, setDashboardMenu] = useState([]);

  const createMenuItems = (postList) => {
    return postList.map((post) => ({
      id: uuid(),
      title: post.title,
      post_id: post.post_info_id,
      icon: 'book',
      children: [
        {
          id: uuid(),
          name: '문서 리스트',
          post_id: post.post_info_id,
          link: 'files',
        },
        {
          id: uuid(),
          name: '참가자 리스트',
          post_id: post.post_info_id,
          link: 'member',
        },
        {
          id: uuid(),
          name: '심사위원 관리',
          post_id: post.post_info_id,
          link: 'judge',
        },
        {
          id: uuid(),
          name: '평가 항목 관리',
          post_id: post.post_info_id,
          link: 'item',
        },
        {
          id: uuid(),
          name: '결과 조회',
          post_id: post.post_info_id,
          link: 'result',
        },
      ],
    }));
  };

  useEffect(() => {
    const data4 = {
      competitionId: competition_id,
      boardType: 'SUBMIT',
    };
    apiUtils
      .GetPostInfoByBoardType(data4)
      .then((response) => {
        const getPostList = response.data;
        setDashboardMenu([
          {
            id: uuid(),
            title: '평가 페이지(임시)',
            grouptitle: true,
          },
          {
            id: uuid(),
            title: '공모전 상세 페이지로 가기',
            icon: 'help-circle',
            link: `/detail/${competition_id}/`,
          },
          {
            id: uuid(),
            title: '제출 리스트',
            icon: 'help-circle',
            link: `/evaluate/${competition_id}/submits/`,
          },
          ...createMenuItems(getPostList),
        ]);
      })
      .catch((error) => {
        // alert(error.response.data);
        handleLogError(error);
        const getPostList = [
          {
            post_id: '1',
            title: '제출 1',
            user_id: '1',
            created_date: '0000-00-00',
            contents: '',
          },
          {
            post_id: '2',
            title: '제출 2',
            user_id: '1',
            created_date: '0000-00-00',
            contents: '',
          },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setDashboardMenu([
          {
            id: uuid(),
            title: '평가 페이지(임시)',
            grouptitle: true,
          },
          {
            id: uuid(),
            title: '공모전 상세 페이지로 가기',
            icon: 'help-circle',
            link: `/detail/${competition_id}/`,
          },
          {
            id: uuid(),
            title: '제출 리스트',
            icon: 'help-circle',
            link: `/evaluate/${competition_id}/submits/`,
          },
          ...createMenuItems(getPostList),
        ]);
      });
  }, [competition_id]);

  return (
    <Fragment>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <div className="nav-scroller">
          <Link className="navbar-brand" to="/dashboard/overview">
            <Image src={InverseLogo} alt="" />
          </Link>
        </div>
        {/* Dashboard Menu */}
        <Accordion
          defaultActiveKey="0"
          as="ul"
          className="navbar-nav flex-column"
        >
          {dashboardMenu.map(function (menu, index) {
            if (menu.grouptitle) {
              return (
                <Card bsPrefix="nav-item" key={index}>
                  {/* group title item */}
                  <div className="navbar-heading">{menu.title}</div>
                  {/* end of group title item */}
                </Card>
              );
            } else {
              if (menu.children) {
                return (
                  <Fragment key={index}>
                    {/* main menu / menu level 1 / root items */}
                    <CustomToggle eventKey={menu.id} icon={menu.icon}>
                      {menu.title}
                      {menu.badge ? (
                        <Badge
                          className="ms-1"
                          bg={menu.badgecolor ? menu.badgecolor : 'primary'}
                        >
                          {menu.badge}
                        </Badge>
                      ) : (
                        ''
                      )}
                    </CustomToggle>
                    <Accordion.Collapse
                      eventKey={menu.id}
                      as="li"
                      bsPrefix="nav-item"
                    >
                      <Accordion className="navbar-nav flex-column" as="ul">
                        <ListGroup
                          as="ul"
                          bsPrefix=""
                          className="nav flex-column"
                        >
                          {menu.children.map(function (
                            menuItem,
                            menuItemIndex,
                          ) {
                            if (menuItem.children) {
                              return (
                                <Fragment key={menuItemIndex}>
                                  {/* second level with children */}
                                  <CustomToggle eventKey={menuItem.id}>
                                    {menuItem.title}
                                    {menuItem.badge ? (
                                      <Badge
                                        className="ms-1"
                                        bg={
                                          menuItem.badgecolor
                                            ? menuItem.badgecolor
                                            : 'primary'
                                        }
                                      >
                                        {menuItem.badge}
                                      </Badge>
                                    ) : (
                                      ''
                                    )}
                                  </CustomToggle>
                                  <Accordion.Collapse
                                    eventKey={menuItem.id}
                                    bsPrefix="nav-item"
                                    as="li"
                                  >
                                    <Accordion
                                      className="navbar-nav flex-column"
                                      as="ul"
                                    >
                                      <ListGroup
                                        as="ul"
                                        bsPrefix=""
                                        className="nav flex-column"
                                      >
                                        {/* third level menu started  */}
                                        {menuItem.children.map(function (
                                          subMenuItem,
                                          subMenuItemIndex,
                                        ) {
                                          return subMenuItem.children ? (
                                            <Fragment key={subMenuItemIndex}>
                                              <CustomToggle
                                                eventKey={subMenuItem.id}
                                              >
                                                {subMenuItem.title}
                                                {subMenuItem.badge ? (
                                                  <Badge
                                                    className="ms-1"
                                                    bg={
                                                      subMenuItem.badgecolor
                                                        ? subMenuItem.badgecolor
                                                        : 'primary'
                                                    }
                                                  >
                                                    {subMenuItem.badge}
                                                  </Badge>
                                                ) : (
                                                  ''
                                                )}
                                              </CustomToggle>
                                              <Accordion.Collapse
                                                eventKey={subMenuItem.id}
                                                bsPrefix="nav-item"
                                                as="li"
                                              >
                                                <ListGroup
                                                  as="ul"
                                                  bsPrefix=""
                                                  className="nav flex-column"
                                                >
                                                  {subMenuItem.children.map(
                                                    function (
                                                      thirdLevelItem,
                                                      thirdLevelItemIndex,
                                                    ) {
                                                      return (
                                                        <ListGroup.Item
                                                          key={
                                                            thirdLevelItemIndex
                                                          }
                                                          as="li"
                                                          bsPrefix="nav-item"
                                                        >
                                                          {/* third level with children */}
                                                          {generateLink(
                                                            thirdLevelItem,
                                                          )}
                                                        </ListGroup.Item>
                                                      );
                                                    },
                                                  )}
                                                </ListGroup>
                                              </Accordion.Collapse>
                                            </Fragment>
                                          ) : (
                                            <ListGroup.Item
                                              key={subMenuItemIndex}
                                              as="li"
                                              bsPrefix="nav-item"
                                            >
                                              {/* third level without children */}
                                              {generateLink(subMenuItem)}
                                            </ListGroup.Item>
                                          );
                                        })}
                                        {/* end of third level menu  */}
                                      </ListGroup>
                                    </Accordion>
                                  </Accordion.Collapse>
                                  {/* end of second level with children */}
                                </Fragment>
                              );
                            } else {
                              return (
                                <ListGroup.Item
                                  as="li"
                                  bsPrefix="nav-item"
                                  key={menuItemIndex}
                                >
                                  {/* second level without children */}
                                  {generateLink(menuItem)}
                                  {/* end of second level without children  */}
                                </ListGroup.Item>
                              );
                            }
                          })}
                        </ListGroup>
                      </Accordion>
                    </Accordion.Collapse>
                    {/* end of main menu / menu level 1 / root items */}
                  </Fragment>
                );
              } else {
                return (
                  <Card bsPrefix="nav-item" key={index}>
                    {/* menu item without any childern items like Help Center, Documentation and Changelog items*/}
                    <Link
                      to={`${menu.link}`}
                      className={`nav-link ${
                        location.pathname === `${menu.link}` ? 'active' : ''
                      }`}
                    >
                      {typeof menu.icon === 'string' ? (
                        <i className={`nav-icon fe fe-${menu.icon} me-2`}></i>
                      ) : (
                        menu.icon
                      )}
                      {menu.title}
                      {menu.badge ? (
                        <Badge
                          className="ms-1"
                          bg={menu.badgecolor ? menu.badgecolor : 'primary'}
                        >
                          {menu.badge}
                        </Badge>
                      ) : (
                        ''
                      )}
                    </Link>
                    {/* end of menu item without any childern items */}
                  </Card>
                );
              }
            }
          })}
        </Accordion>
        {/* end of Dashboard Menu */}
      </SimpleBar>
    </Fragment>
  );
};

export default EvaluateVertical;
