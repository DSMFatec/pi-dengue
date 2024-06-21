import { generateChart } from "./charts.js";
import { getInfoDengueData } from "./service.js";

try {
  const dengueData = await getInfoDengueData();

  const data = dengueData.map((data) => ({
    date: moment(data.data_iniSE).format("YYYY-MM-DD"),
    value: data.casos,
  }));

  generateChart(data);
} catch (error) {
  console.error(error);
}
