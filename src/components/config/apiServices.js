const baseUrl = "https://api.petfinder.com/v2/animals";
const config = () => {
  const token = process.env.TOKEN;
  const AuthStr = "Bearer ".concat(token);
  return { headers: { Authorization: AuthStr } };
};

export const Get = async (url) => {
  try {
    return await axios.get(`${baseUrl}/${url}`, config());
  } catch (error) {
    throw error;
  }
};
