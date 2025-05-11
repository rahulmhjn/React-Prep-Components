import Hobbies from "./Hobbies";
import Profile from "./Profile";
import Settings from "./Settings";

export const fileConfig = [
  {
    name: "Profile",
    component: Profile,
    validate: (data) => {
      const err = {};
      if (!data.name) {
        err.name = "Name is required";
      }
      if (!data?.email || data?.email?.length <= 2) {
        err.email = "Email not valid";
      }
      if (!data?.age || data?.age < 18) {
        err.age = "Minimum age should be 18";
      }
      return Object.keys(err).length === 0 ? true : err;
    },
  },
  {
    name: "Hobbies",
    component: Hobbies,
    validate: () => {
      return true;
    },
  },
  {
    name: "Settings",
    component: Settings,
    validate: () => {
      return true;
    },
  },
];
