export const getInfoDengueData = async () => {
  const response = await fetch(
    "https://info.dengue.mat.br/api/alertcity?geocode=3304557&disease=dengue&format=json&ew_start=1&ew_end=50&ey_start=2017&ey_end=2017",
    {
      method: "GET",
      mode: "no-cors",
    }
  );

  console.log('RESPONSE', response);

  const data = await response.json();

  console.log('DATA', data);

  return data;
};
