export const exerciseOption = {
  method: "GET",
  headers: {
    // eslint-disable-next-line no-undef
    "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const respons = await fetch(url, options);
  const data = await respons.json();
  return data;
};
