import { Dimensions, Text, View } from "react-native";

import { LineChart } from "react-native-chart-kit";

export function Chart() {
  const data = {
    labels: ["8AM", "9AM", "10AM", "11AM", "12AM", "13AM"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Mais produtividade"],
  };

  return (
    <View className="pt-4">
      <LineChart
        data={data}
        width={335}
        height={250}
        yAxisSuffix="m"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#FFFFFF",
          backgroundGradientFrom: "#FFFFFF",
          backgroundGradientTo: "#FFFFFF",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(175, 175, 235, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(143, 141, 162, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#9B51E0",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
