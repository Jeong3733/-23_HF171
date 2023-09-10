// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// import sub components
import Chat from 'components/dashboard/chat/Chat';

const DocumentQAPopup = ({ fileInfo }) => {
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);

  return (
    <Fragment>
      file_info.data.file_id: {fileInfo.data.file_id}
      <Chat />
    </Fragment>
  );
};

export default DocumentQAPopup;
