import { useProductStore } from "src/modules/products/productStore";
import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Center, Spinner } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Number of items per brand",
    },
  },
};

export const ProductChart = () => {
  const {
    productResponse: { data, isLoading },
  } = useProductStore();

  const chartLabel = useMemo(() => {
    if (data) {
      const uniqueBrand = new Set([
        ...data.products.map((datum) => datum.brand.toLowerCase()),
      ]);

      return Array.from(uniqueBrand);
    }
  }, [data]);

  const chartData = useMemo(() => {
    if (data) {
      const mapOfData = new Map();

      data.products.forEach((product) => {
        const brand = product.brand.toLowerCase();

        if (mapOfData.has(brand)) {
          const prevStock = mapOfData.get(brand);
          mapOfData.set(brand, prevStock + product.stock);

          return;
        }

        mapOfData.set(brand, product.stock);
      });

      return {
        labels: chartLabel,
        datasets: [
          {
            label: "Number of items",
            data: Array.from(mapOfData, ([_, value]) => value),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };
    }

    return {
      labels: [],
      datasets: [],
    };
  }, [data]);

  if (isLoading) {
    return (
      <Center h="10rem">
        <Spinner />
      </Center>
    );
  }

  return <Bar options={options} data={chartData} />;
};
