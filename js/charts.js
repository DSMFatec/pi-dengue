export const generateChart = (data) => {
  am4core.useTheme(am4themes_animated);

  // Create chart instance
  let chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.data = data;
  chart.language.locale = am4lang_pt_BR;

  // Create axes
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  dateAxis.renderer.grid.template.disabled = true;
  valueAxis.renderer.grid.template.disabled = true;

  // Create series
  let series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";
  series.tooltipText = "{value} casos";
  series.strokeWidth = 2;
  series.minBulletDistance = 15;

  // Drop-shaped tooltips
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.strokeOpacity = 0;
  series.tooltip.pointerOrientation = "vertical";
  series.tooltip.label.minWidth = 40;
  series.tooltip.label.minHeight = 40;
  series.tooltip.label.textAlign = "middle";
  series.tooltip.label.textValign = "middle";

  // Make bullets grow on hover
  let bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.strokeWidth = 2;
  bullet.circle.radius = 4;
  bullet.circle.fill = am4core.color("#fff");

  let bullethover = bullet.states.create("hover");
  bullethover.properties.scale = 1.3;

  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "none";
};
