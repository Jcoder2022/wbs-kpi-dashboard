import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  import "./Summary.css"

  export default function SummaryChart({ data }) {
    return (
        <div className='summary'>
      <ResponsiveContainer width="100%" height={700}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >



          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Team" fill="#8884d8" />

          <Bar dataKey="wacc" fill="#8884d8" />
          <Bar dataKey="scores" fill="#82ca9d" />
          <Bar dataKey="factory_utilisation" fill="#8884d8" />
          <Bar dataKey="employee_engagement" fill="#82ca9d" />
          <Bar dataKey="interest_coverage" fill="#8884d8" />
          <Bar dataKey="marketing_spend_rev" fill="#82ca9d" />
          <Bar dataKey="e_car_sales" fill="#8884d8" />
          <Bar dataKey="co2_penalty" fill="#82ca9d" />
         
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
  