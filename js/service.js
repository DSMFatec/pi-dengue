export const getInfoDengueData = async () => {
  const response = await fetch("https://api-dengue-pi.onrender.com/");

  const data = await response.json();

  return data;
};
