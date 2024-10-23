import getToken from "./getToken";

const getRole = async () => {
  const userToken = getToken();

  if (userToken !== undefined && userToken !== "undefined") {
    return "Super Admin";
  } else {
    return null;
  }
};

export default getRole;
