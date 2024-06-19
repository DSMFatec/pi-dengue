export const getInfoDengueData = async () => {
  const response = await fetch(
    "https://info.dengue.mat.br/api/alertcity?geocode=3304557&disease=dengue&format=json&ew_start=1&ew_end=50&ey_start=2017&ey_end=2017"
  );
  const data = await response.json();

  return data;
};
