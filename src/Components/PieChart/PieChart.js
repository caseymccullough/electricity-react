import Chart from "react-google-charts";

export default function PieChart(data){


return(
<Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
               title: 'Load Profile',
               is3D: true,
            }}
            rootProps={{ 'data-testid': '1' }}
            />
   )
}