// import node module libraries
import { Card, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

// import custom components

const JobListingListviewCard = (props) => {
  const { competiton_id } = useParams();
  const { item } = props;

  return (
    <Link to={`/detail/${competiton_id}/announcements/${item.postId}/`} s>
      <Card className="card-bordered mb-4 card-hover cursor-pointer">
        <Card.Body>
          <div>
            <div className="d-md-flex">
              <div className="mb-3 mb-md-0">
                <Image
                  src={item.logo}
                  alt="Geeks UI - Bootstrap 5 Template"
                  className="icon-shape border rounded-circle"
                />
              </div>
              <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                <div className="d-flex justify-content-between mb-5">
                  <div>
                    <h3 className="mb-1 fs-4 text-inherit me-1">
                      {item.title}
                    </h3>
                    <div>
                      <span>{item.contents} </span>
                    </div>
                  </div>
                </div>
                <div className="d-md-flex justify-content-between ">
                  <div className="mb-2 mb-md-0">
                    <div>
                      <i className="fe fe-briefcase text-muted"></i>
                      <span> {item.userId}</span>
                    </div>
                    <div>
                      <i className="fe fe-clock text-muted"></i>
                      <span> {item.createDate}</span>
                    </div>
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
