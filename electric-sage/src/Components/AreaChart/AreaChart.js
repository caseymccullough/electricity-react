import Chart from "react-google-charts";

export default function AreaChart(props) 
{
   return (
   <Chart
  width={'500px'}
  height={'300px'}
  chartType="AreaChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ]}
  options={{
    isStacked: true,
    height: 300,
    legend: { position: 'top', maxLines: 3 },
    vAxis: { minValue: 0 },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
)
}