// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { Menu, Search } from 'react-feather';
import { Link } from 'react-router-dom';
import { Nav, Navbar, InputGroup, Form, Badge } from 'react-bootstrap';

const JudgeHeaderDefault = ({ data, fileInfo, itemList, scoreList }) => {
  // fileInfo, itemList, scoreList 하나라도 빈 값이면 return
  if (!fileInfo || !itemList || !scoreList) {
    return <Fragment />;
  }

  console.log(scoreList);
  console.log(itemList);

  // itemlist에서 evaluation_id를 찾아서 해당 item의 정보를 가져온다.
  function searchItem(evaluation_id) {
    for (let score of scoreList) {
      if (score.evaluation_id === evaluation_id) {
        return score;
      }
    }
    return { score: 'X' };
  }

  return (
    <Fragment>
      <Navbar expanded="lg" className="navbar-default">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center gap-2">
            <Link
              id="nav-toggle"
              to="#"
              onClick={() => data.SidebarToggleMenu(!data.showMenu)}
            >
              <Menu size="18px" />
            </Link>
            {fileInfo.file_title}
            {itemList.map((item, index) => {
              const info = searchItem(item.evaluation_id);
              return (
                <Badge pill bg="light" text="dark" className="me-1" key={index}>
                  [{item.name}] <b>{info.score}</b>/{item.max}
                </Badge>
              );
            })}
          </div>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default JudgeHeaderDefault;
