/**  CONDITIONAL WRAPPING COMPONENT
 *
 * This is conditional wrapping component
 * We have two type of profiles 1) Student Profile and 2) Instructor Profile.
 * We have a few common pages for both profiles, located in the account-settings folder.
 * We need to wrap theme conditionally for different layout based on some parameters.
 * The role of that conditionally wrapping will be done with this additional ProfileLayout component.
 *
 * We have used this wrapping component for below pages, which are common for both student and instructor.
 * 1) Security
 * 2) Social Profiles
 * 3) Notifications
 * 4) Profile Privacy
 * 5) Delete Profile
 *
 * Required Parameters
 * pathpara = it can be either student or instructor because we have only two profile layout at this stage.
 *
 */

// import node module libraries
import { Fragment } from 'react';

// import both profile layouts
import InstructorProfileLayout from 'components/marketing/instructor/ProfileLayout';
import StudentProfileLayout from 'components/marketing/student/ProfileLayout';

const ProfileLayoutWrap = (props) => {
	const { pathpara } = props;
	return (
		<Fragment>
			{pathpara.includes('student') ? (
				<StudentProfileLayout> {props.children}</StudentProfileLayout>
			) : (
				<InstructorProfileLayout> {props.children} </InstructorProfileLayout>
			)}
		</Fragment>
	);
};
export default ProfileLayoutWrap;
