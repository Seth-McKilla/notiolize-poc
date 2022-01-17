import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";
import type { Properties } from "../../types";

interface Props {
  data: Properties;
  labelX: string;
  labelY: string;
}

export default function BarChart(props: Props) {
  const { data, labelX, labelY } = props;
  console.log(data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReBarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Bar dataKey="value" fill="#8884d8" />
        <XAxis dataKey={labelX} />
      </ReBarChart>
    </ResponsiveContainer>
  );
}
