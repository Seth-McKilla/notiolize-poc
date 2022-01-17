import styles from "./BarChart.module.css";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
import type { Properties } from "../../types";
import { toUSD, toUpperFirst, abbrNumber } from "../../utils";

interface Props {
  data: Properties;
  labelX: string;
  labelY: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.container}>
        <p className={styles.label}>{`${toUpperFirst(label)}`}</p>
        <p className={styles.value}>{toUSD(payload[0].value)}</p>
      </div>
    );
  }

  return null;
};

export default function BarChart(props: Props) {
  const { data, labelX, labelY } = props;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReBarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 25,
          bottom: 35,
        }}
      >
        <XAxis
          dataKey={labelX}
          label={{
            value: toUpperFirst(labelX),
            position: "insideBottom",
            offset: -15,
            style: {
              fontSize: "1.2rem",
              fontWeight: "bold",
            },
          }}
        />
        <YAxis
          dataKey={labelY}
          label={{
            value: toUpperFirst(labelY),
            angle: -90,
            position: "insideLeft",
            offset: -10,
            style: {
              fontSize: "1.2rem",
              fontWeight: "bold",
            },
          }}
          tickFormatter={(value) => `$${abbrNumber(value)}`}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#91C483" />
      </ReBarChart>
    </ResponsiveContainer>
  );
}
