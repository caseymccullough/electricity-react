import Chart from "react-google-charts";

export default function PieChart(props){

return(
<Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
               ['Load', 'kWh'],
               ['Work', 11],
               ['Eat', 2],
               ['Commute', 2],
               ['Watch TV', 2],
               ['Sleep', 7],
            ]}
            options={{
               title: 'Load Profile',
            }}
            rootProps={{ 'data-testid': '1' }}
            />
   )
}