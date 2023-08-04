// import node module libraries
import { Form, Card } from 'react-bootstrap';

// import sub components
import Ratings from 'components/marketing/common/ratings/Ratings';
import { useState } from 'react';
import { competitionCategories } from 'components/marketing/pages/competition/competition-filter-page/competitionCategories';

// function onCategoryCheckboxClick(e, idx, selectedFilters, setSelectedFilters) {
// 	// idx번째 요소만 e.target.checked 설정하고, 나머지 요소들은 그대로 둠
// 	setSelectedFilters(selectedFilters.map((item, index) => {
// 		if (idx === index) {
// 			return e.target.checked;
// 		}
// 		return item;
// 	}));
// }

const FilterOptions = ({ selectedFilters, setSelectedFilters }) => {
  console.log(selectedFilters);
  return (
    <Card>
      {/* Card header */}
      <Card.Header>
        <h4 className="mb-0">Filter</h4>
      </Card.Header>
      {/* Card body */}
      <Card.Body>
        <span className="dropdown-header px-0 mb-2">적용 필터</span>
        {/* {
					selectedFilters.map((item, index) => {
						// 선택된 상태이면
						if (item) {
							return <div>{competitionCategories[index].name}</div>;
						}
						return null;
					})
				} */}
      </Card.Body>
      {/* Card body */}
      <Card.Body>
        <span className="dropdown-header px-0 mb-2"> Category</span>
        <Form>
          {/* Checkboxes for Courses */}
          {competitionCategories.map((item, index) => (
            <Form.Check
              type="checkbox"
              className="mb-1"
              label={item.label}
              key={index}
              // onClick={(e) => onCategoryCheckboxClick(e, index, selectedFilters, setSelectedFilters)}
            />
          ))}
        </Form>
      </Card.Body>
      {/* Card body */}
      <Card.Body className="border-top">
        <span className="dropdown-header px-0 mb-2"> Ratings</span>
        {/* Radio for Ratings */}
        <Form>
          {[4.5, 4.0, 3.5, 3.0].map((item, index) => (
            <Form.Check
              type="radio"
              id={`formRating${item}`}
              className="mb-1"
              key={index}
            >
              <Form.Check.Input type="radio" name="customRadio" />
              <Form.Check.Label>
                <span className="text-warning">
                  <Ratings rating={item} />
                </span>{' '}
                <span className="fs-6 pt-1">{item} & UP</span>
              </Form.Check.Label>
            </Form.Check>
          ))}
        </Form>
      </Card.Body>
      {/* Card body */}
      <Card.Body className="border-top">
        <span className="dropdown-header px-0 mb-2"> Skill Level</span>
        <Form>
          {/* Checkboxes for Level */}
          {['All Level', 'Beginner', 'Intermediate', 'Advance'].map(
            (item, index) => (
              <Form.Check
                type="checkbox"
                className="mb-1"
                label={item}
                key={index}
              />
            ),
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};
export default FilterOptions;
