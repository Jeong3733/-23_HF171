import { v4 as uuid } from "uuid";

const NavbarDefault = [
  {
    id: uuid(),
    menuitem: "공모전 둘러보기",
    link: "#",
    children: [
      {
        id: uuid(),
        menuitem: "카테고리1",
        link: "/competition-filter-page/",
      },
      {
        id: uuid(),
        menuitem: "카테고리2",
        link: "/competition-filter-page/",
      },
      {
        id: uuid(),
        menuitem: "카테고리3",
        link: "/competition-filter-page/",
      },
      {
        id: uuid(),
        divider: true,
      },
      {
        id: uuid(),
        menuitem: "공모전 추가하기",
        link: "/competition/add-new-competition/",
      },
    ],
  },

  {
    id: uuid(),
    menuitem: "준비 중마이페이지",
    link: "#",
    children: [
      {
        id: uuid(),
        menuitem: "Sign In",
        link: "/authentication/sign-in/",
      },
      {
        id: uuid(),
        menuitem: "Sign Up",
        link: "/authentication/sign-up/",
      },
      {
        id: uuid(),
        menuitem: "Forgot Password",
        link: "/authentication/forget-password/",
      },
      {
        id: uuid(),
        menuitem: "Edit Profile",
        link: "/marketing/student/student-edit-profile/",
      },
      {
        id: uuid(),
        menuitem: "Security",
        link: "/marketing/student/student-security/",
      },
      {
        id: uuid(),
        menuitem: "Social Profiles",
        link: "/marketing/student/student-social-profiles/",
      },
      {
        id: uuid(),
        menuitem: "Notifications",
        link: "/marketing/student/student-notifications/",
      },
      {
        id: uuid(),
        menuitem: "Privacy Settings",
        link: "/marketing/student/student-profile-privacy/",
      },
      {
        id: uuid(),
        menuitem: "Delete Profile",
        link: "/marketing/student/student-delete-profile/",
      },
      {
        id: uuid(),
        menuitem: "Linked Accounts",
        link: "/marketing/student/student-linked-accounts/",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "마이페이지",
    link: "#",
    children: [
      {
        id: uuid(),
        header: true,
        header_text: "Accounts",
        description: "Instructor dashboard for manage courses and earning.",
      },
      {
        id: uuid(),
        menuitem: "Instructor",
        link: "#",
        children: [
          {
            id: uuid(),
            header: true,
            header_text: "Instructor",
            description: "Instructor dashboard for manage courses and earning.",
          },
          {
            id: uuid(),
            divider: true,
          },
          {
            id: uuid(),
            menuitem: "Dashboard",
            link: "/marketing/instructor/dashboard/",
          },
          {
            id: uuid(),
            menuitem: "Profile",
            link: "/marketing/instructor/instructor-profile/",
          },
          {
            id: uuid(),
            menuitem: "My Courses",
            link: "/marketing/instructor/instructor-my-courses/",
          },
          {
            id: uuid(),
            menuitem: "Orders",
            link: "/marketing/instructor/instructor-orders/",
          },
          {
            id: uuid(),
            menuitem: "Reviews",
            link: "/marketing/instructor/instructor-reviews/",
          },
          {
            id: uuid(),
            menuitem: "Students",
            link: "/marketing/instructor/instructor-students/",
          },
          {
            id: uuid(),
            menuitem: "Payouts",
            link: "/marketing/instructor/instructor-payouts/",
          },
          {
            id: uuid(),
            menuitem: "Earning",
            link: "/marketing/instructor/instructor-earnings/",
          },
          {
            id: uuid(),
            menuitem: "Quiz",
            link: "#",
            children: [
              {
                id: uuid(),
                menuitem: "Quiz",
                link: "/marketing/instructor/quiz/",
              },
              {
                id: uuid(),
                menuitem: "Single",
                link: "/marketing/instructor/quiz/single/",
              },
              {
                id: uuid(),
                menuitem: "Result",
                link: "/marketing/instructor/quiz/result/",
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Students",
        link: "#",
        children: [
          {
            id: uuid(),
            header: true,
            header_text: "Students",
            description:
              "Students dashboard to manage your courses and subscriptions.",
          },
          {
            id: uuid(),
            divider: true,
          },
          {
            id: uuid(),
            menuitem: "Dashboard",
            link: "/marketing/student/dashboard/",
          },
          {
            id: uuid(),
            menuitem: "Subscriptions",
            link: "/marketing/student/student-subscriptions/",
          },
          {
            id: uuid(),
            menuitem: "Payments",
            link: "/marketing/student/student-payment/",
          },
          {
            id: uuid(),
            menuitem: "Billing Info",
            link: "/marketing/student/student-billing-info/",
          },
          {
            id: uuid(),
            menuitem: "Invoice",
            link: "/marketing/student/student-invoice/",
          },
          {
            id: uuid(),
            menuitem: "Invoice Details",
            link: "/marketing/student/student-invoice-details/",
          },
          {
            id: uuid(),
            menuitem: "Bookmarked",
            link: "/marketing/student/dashboard/",
          },
          {
            id: uuid(),
            menuitem: "My Path",
            link: "/marketing/student/dashboard/",
          },
          {
            id: uuid(),
            menuitem: "Quiz",
            link: "#",
            children: [
              {
                id: uuid(),
                menuitem: "Quiz",
                link: "/marketing/student/quiz/",
              },
              {
                id: uuid(),
                menuitem: "Attempt",
                link: "/marketing/student/quiz/attempt/",
              },
              {
                id: uuid(),
                menuitem: "Start",
                link: "/marketing/student/quiz/start/",
              },
              {
                id: uuid(),
                menuitem: "Result",
                link: "/marketing/student/quiz/result/",
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Admin",
        link: "#",
        children: [
          {
            id: uuid(),
            header: true,
            header_text: "Master Admin",
            description:
              "Master admin dashboard to manage courses, user, site setting, and work with amazing apps.",
          },
          {
            id: uuid(),
            divider: true,
          },
          {
            id: uuid(),
            menuitem: "Go to Dashboard",
            link: "/dashboard/overview/",
            type: "button",
          },
        ],
      },
      {
        id: uuid(),
        divider: true,
      },
      {
        id: uuid(),
        menuitem: "Sign In",
        link: "/authentication/sign-in/",
      },
      {
        id: uuid(),
        menuitem: "Sign Up",
        link: "/authentication/sign-up/",
      },
      {
        id: uuid(),
        menuitem: "Forgot Password",
        link: "/authentication/forget-password/",
      },
      {
        id: uuid(),
        menuitem: "Edit Profile",
        link: "/marketing/student/student-edit-profile/",
      },
      {
        id: uuid(),
        menuitem: "Security",
        link: "/marketing/student/student-security/",
      },
      {
        id: uuid(),
        menuitem: "Social Profiles",
        link: "/marketing/student/student-social-profiles/",
      },
      {
        id: uuid(),
        menuitem: "Notifications",
        link: "/marketing/student/student-notifications/",
      },
      {
        id: uuid(),
        menuitem: "Privacy Settings",
        link: "/marketing/student/student-profile-privacy/",
      },
      {
        id: uuid(),
        menuitem: "Delete Profile",
        link: "/marketing/student/student-delete-profile/",
      },
      {
        id: uuid(),
        menuitem: "Linked Accounts",
        link: "/marketing/student/student-linked-accounts/",
      },
    ],
  },
];

export default NavbarDefault;
