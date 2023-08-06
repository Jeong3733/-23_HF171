// import node module libraries
import { Card, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

// import custom components

const JobListingListviewCard = ({ item, index }) => {
  const { competition_id } = useParams();
  console.log(item);
  return (
    <Link
      to={`/detail/${competition_id}/announcements/${item.post_id}/`}
      key={index}
    >
      <Card className="card-bordered mb-4 card-hover cursor-pointer">
        <Card.Body>
          <div className="d-md-flex">
            <div className="mb-3 mb-md-0">
              <Image
                src="https://miro.medium.com/v2/resize:fit:914/format:webp/1*zIxyGH-bIZP4cA7Ho8oilQ.png"
                alt="Geeks UI - Bootstrap 5 Template"
                className="icon-shape border rounded-circle"
                width={100}
              />
            </div>
            <div className="ms-md-3 w-100 mt-3 mt-xl-1">
              <div className="d-flex justify-content-between mb-5">
                <div>
                  <h3 className="mb-1 fs-4 text-inherit me-1">{item.title}</h3>
                  <div>
                    <span>{item.contents} </span>
                  </div>
                </div>
              </div>
              <div className="d-md-flex justify-content-between ">
                <div className="mb-2 mb-md-0">
                  <div>
                    <i className="fe fe-briefcase text-muted"></i>
                    <span> {item.user_id}</span>
                  </div>
                  <div>
                    <i className="fe fe-clock text-muted"></i>
                    <span> {item.created_date}</span>
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
