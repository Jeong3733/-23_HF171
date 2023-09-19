// import node module libraries
import React, { Fragment, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Dropdown, Image, Table, Button } from 'react-bootstrap';

const ItemTable = ({
  itemList,
  itemDetailList,
  handleShowAdd,
  handleShowAddDetail,
}) => {
  // console.log(itemList);
  // console.log(itemDetailList);
  return (
    <Fragment>
      <Table className="text-nowrap">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">항목명</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">점수</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item, index) => {
            return (
              <Fragment key={index}>
                <tr>
                  <td scope="col" className="fw-bold">
                    {index + 1}
                  </td>
                  <td scope="col" className="fw-bold" colSpan={4}>
                    {item.name}
                  </td>
                  <td scope="col" className="fw-bold" colSpan={2}>
                    {item.max}
                  </td>
                </tr>
                {itemDetailList[item.evaluation_id].map(
                  (itemDetail, detailIndex) => (
                    <tr key={detailIndex}>
                      <td scope="col">
                        {index + 1} - {detailIndex + 1}
                      </td>
                      <td scope="col" colSpan={4}>
                        {itemDetail.name}
                      </td>
                      <td scope="col" colSpan={2}>
                        {itemDetail.max}
                      </td>
                    </tr>
                  ),
                )}
                <tr>
                  <td className="align-middle ">{''}</td>
                  <td className="align-middle " colSpan={6}>
                    <div className="d-flex align-items-center">
                      <Button
                        variant="link"
                        className="text-muted border border-2 rounded-3 card-dashed-hover p-0"
                        onClick={() => handleShowAddDetail(item.evaluation_id)}
                      >
                        <div className="icon-shape icon-lg ">+</div>
                      </Button>
                      <div className="ms-3">
                        <h4 className="mb-0">
                          <div className="text-inherit"> 세부 항목 추가</div>
                        </h4>
                      </div>
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
          <tr>
            <td className="align-middle " colSpan={7}>
              <div className="d-flex align-items-center">
                <Button
                  variant="link"
                  className="text-muted border border-2 rounded-3 card-dashed-hover p-0"
                  onClick={handleShowAdd}
                >
                  <div className="icon-shape icon-lg ">+</div>
                </Button>
                <div className="ms-3">
                  <h4 className="mb-0">
                    <div className="text-inherit">항목 추가</div>
                  </h4>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default ItemTable;
