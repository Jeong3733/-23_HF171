// import node module libraries
import { toDateByYYYYMMDD, truncateString } from 'helper/utils';
import { Badge, Card, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

// import custom components

const JobListingListviewCard = ({ item, index, user_name }) => {
  // console.log(item);
  const pathType = {
    NOTICE: 'announcements',
    QNA: 'qna',
    SUBMIT: 'submits',
  };
  // console.log(user_name);

  const renderContent = () => {
    switch (item.board_type) {
      case 'SUBMIT':
        return 'primary';
      case 'QNA':
        return 'success';
      default:
        return 'info';
    }
  };
  return (
    <Link
      to={`/detail/${item.competition_info_id}/${pathType[item.board_type]}/${
        item.post_info_id
      }/`}
      key={index}
    >
      <Card className="card-bordered mb-4 card-hover cursor-pointer">
        <Card.Body>
          <div className="d-md-flex">
            {/* <div className="mb-3 mb-md-0">
              <Image
                src="https://miro.medium.com/v2/resize:fit:914/format:webp/1*zIxyGH-bIZP4cA7Ho8oilQ.png"
                alt="Geeks UI - Bootstrap 5 Template"
                className="icon-shape border rounded-circle"
                width={100}
              />
              {item.board_type === 'SUBMIT' && (
                <div>
                  <div>제출 상태 유무</div>
                  <div>마감일까지 기간</div>
                </div>
              )}
            </div> */}
            <div className="ms-md-2 w-100 mt-1 mt-xl-1">
              <div className="d-flex justify-content-between mb-5">
                <div>
                  <h3 className="mb-1 fs-4 text-inherit me-1">
                    <Badge
                      pill
                      bg={renderContent()}
                      text="white"
                      className="me-1"
                    >
                      {item.board_type}
                    </Badge>
                    {item.title}
                  </h3>
                  <div>
                    <span>{truncateString(item.contents, 100)}</span>
                  </div>
                </div>
              </div>
              <div className="d-md-flex justify-content-between ">
                <div className="mb-2 mb-md-0">
                  <div>
                    <i className="fe fe-briefcase text-muted"></i>
                    <span> {user_name}</span>
                  </div>
                  <div>
                    <i className="fe fe-clock text-muted"></i>
                    <span> {toDateByYYYYMMDD(item.created_date)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default JobListingListviewCard;
