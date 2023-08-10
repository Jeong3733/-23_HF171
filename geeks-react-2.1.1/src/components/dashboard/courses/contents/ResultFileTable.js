// import node module libraries
import React, { Fragment, useMemo } from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from 'react-table';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Dropdown, Image, Table } from 'react-bootstrap';
import {
  Trash,
  MoreVertical,
  Edit,
  Move,
  Copy,
  ToggleLeft,
  ToggleRight,
  Video,
} from 'react-feather';
import LinkIcon from 'react-feather/dist/icons/link';
import ImageIcon from 'react-feather/dist/icons/image';

// Import required custom components
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';
import Checkbox from 'components/elements/advance-table/Checkbox';
import DotBadge from 'components/elements/bootstrap/DotBadge';

const ResultFileTable = ({ data }) => {
  return (
    <Fragment>
      {data.file_result_info.map((result) => (
        <>
          <div>result.file_id: {result.file_id}</div>
          <div>result.comp_file_id: {result.comp_file_id}</div>
          <div>result.score: {result.score}</div>
          <div>result.report: {result.report}</div>
        </>
      ))}
    </Fragment>
  );
};

export default ResultFileTable;
