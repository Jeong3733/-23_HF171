// import node module libraries
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

// import custom components
import { Avatar } from 'components/elements/bootstrap/Avatar';

// import context file
import { ChatContext } from 'context/Context';

// import hook file
import useChatOperations from 'hooks/useChatOperations';

const Message = (props) => {
  const { chatScript } = props;
  console.log(chatScript);
  const {
    ChatState: { loggedInUserId },
  } = useContext(ChatContext);
  const { getUserDetailsById } = useChatOperations();

  let user = getUserDetailsById(chatScript.userId);

  return (
    <Fragment>
      {chatScript.userId === loggedInUserId ? (
        <div className="d-flex justify-content-end mb-4">
          <div className="d-flex mw-lg-40">
            <div className=" me-3 text-end">
              <small>
                {' '}
                {chatScript.date} {chatScript.time}{' '}
              </small>
              <div className="d-flex justify-content-end">
                <div className="card mt-2 rounded-top-md-end-0 bg-primary text-white">
                  <div className="card-body text-start p-3">
                    <p
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: chatScript.message,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Avatar
              size="md"
              className="rounded-circle chat-avatar-md"
              type={user.image ? 'image' : 'initial'}
              src={user.image}
              alt={user.name}
              name={user.name}
            />
          </div>
        </div>
      ) : (
        <div className="d-flex w-lg-40 mb-4">
          <Avatar
            size="md"
            className="rounded-circle chat-avatar-md"
            type={user.image ? 'image' : 'initial'}
            src={user.image}
            alt={user.name}
            name={user.name}
          />
          <div className=" ms-3">
            <small>
              {user.name}, {chatScript.date} {chatScript.time}{' '}
            </small>
            <div className="d-flex">
              <div className="card mt-2 rounded-top-md-left-0">
                <div className="card-body p-3">
                  <p
                    className="mb-0 text-dark"
                    dangerouslySetInnerHTML={{
                      __html: chatScript.message,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default Message;
