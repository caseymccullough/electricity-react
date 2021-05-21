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
    ['Time', 'Dishwasher', 'Computer', 'Lamp'],
    ['0:00', 1000, 400, 60],
    ['3:00', 0, 460, 60],
    ['7:00', 0, 1120, 0],
    ['10:00', 0, 1120, 0],
    ['14:00', 1000, 1120, 60],
    ['24:00', 1030, 540, 60],
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