export const DashboardMenu = [
  {
    id: 1,
    title: "Payment",
    link: "/marketing/student/student-payment/",
    icon: "star",
  },
  {
    id: 2,
    title: "Invoice",
    link: "/marketing/student/student-invoice/",
    icon: "pie-chart",
  },
  {
    id: 3,
    title: "My Courses",
    link: "/marketing/instructor/instructor-my-courses/",
    icon: "book",
  },
  {
    id: 4,
    title: "Orders",
    link: "/marketing/instructor/instructor-orders/",
    icon: "shopping-bag",
  },
  {
    id: 5,
    title: "My Quiz Attempt",
    link: "/marketing/student/quiz/",
    icon: "help-circle",
  },
];

export const AccountSettingsMenu = [
  {
    id: 1,
    title: "Edit Profile",
    link: "/marketing/student/student-edit-profile/",
    icon: "settings",
  },
  {
    id: 2,
    title: "Security",
    link: "/marketing/student/student-security/",
    icon: "user",
  },
  {
    id: 3,
    title: "Social Profiles",
    link: "/marketing/student/student-social-profiles/",
    icon: "refresh-cw",
  },
  {
    id: 4,
    title: "Notifications",
    link: "/marketing/student/student-notifications/",
    icon: "bell",
  },
  {
    id: 5,
    title: "Profile Privacy",
    link: "/marketing/student/student-profile-privacy/",
    icon: "lock",
  },
  {
    id: 6,
    title: "Delete Profile",
    link: "/marketing/student/student-delete-profile/",
    icon: "trash",
  },
  {
    id: 6,
    title: "Linked Accounts",
    link: "/marketing/student/student-linked-accounts/",
    icon: "user",
  },
  {
    id: 6,
    title: "Sign Out",
    link: "/",
    icon: "power",
  },
];

export const InstructorDashboardMenu = [DashboardMenu, AccountSettingsMenu];

export default InstructorDashboardMenu;
