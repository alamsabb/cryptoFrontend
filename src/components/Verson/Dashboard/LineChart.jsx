import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const mockLineData = [
    {
      id: "japan",
      color: "#4cceac",
      data: [
        {
          x: "plane",
          y: 101,
        },
        {
          x: "helicopter",
          y: 75,
        },
        {
          x: "boat",
          y: 36,
        },
        {
          x: "train",
          y: 216,
        },
        {
          x: "subway",
          y: 35,
        },
        {
          x: "bus",
          y: 236,
        },
        {
          x: "car",
          y: 88,
        },
        {
          x: "moto",
          y: 232,
        },
        {
          x: "bicycle",
          y: 281,
        },
        {
          x: "horse",
          y: 1,
        },
        {
          x: "skateboard",
          y: 35,
        },
        {
          x: "others",
          y: 14,
        },
      ],
    },
    {
      id: "france",
      color: "#a4a9fc",
      data: [
        {
          x: "plane",
          y: 212,
        },
        {
          x: "helicopter",
          y: 190,
        },
        {
          x: "boat",
          y: 270,
        },
        {
          x: "train",
          y: 9,
        },
        {
          x: "subway",
          y: 75,
        },
        {
          x: "bus",
          y: 175,
        },
        {
          x: "car",
          y: 33,
        },
        {
          x: "moto",
          y: 189,
        },
        {
          x: "bicycle",
          y: 97,
        },
        {
          x: "horse",
          y: 87,
        },
        {
          x: "skateboard",
          y: 299,
        },
        {
          x: "others",
          y: 251,
        },
      ],
    },
    {
      id: "us",
      color: "#58201e",
      data: [
        {
          x: "plane",
          y: 191,
        },
        {
          x: "helicopter",
          y: 136,
        },
        {
          x: "boat",
          y: 91,
        },
        {
          x: "train",
          y: 190,
        },
        {
          x: "subway",
          y: 211,
        },
        {
          x: "bus",
          y: 152,
        },
        {
          x: "car",
          y: 189,
        },
        {
          x: "moto",
          y: 152,
        },
        {
          x: "bicycle",
          y: 8,
        },
        {
          x: "horse",
          y: 197,
        },
        {
          x: "skateboard",
          y: 107,
        },
        {
          x: "others",
          y: 170,
        },
      ],
    },
  ];
  return (
    <ResponsiveLine
      data={mockLineData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#e0e0e0",
            },
          },
          legend: {
            text: {
              fill: "#e0e0e0",
            },
          },
          ticks: {
            line: {
              stroke: "#e0e0e0",
              strokeWidth: 1,
            },
            text: {
              fill: "#e0e0e0",
            },
          },
        },
        legends: {
          text: {
            fill: "#e0e0e0",
          },
        },
        tooltip: {
          container: {
            color: "#141b2d",
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation", // added
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count", // added
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
