import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { chartData } from '../lib/utilityFunctions.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const DataChart = ({ dataList, setOpenChart }) => {
  const product = useSelector(state => state.session.productInfo);
  const dataSet = useMemo(() => chartData(dataList), [dataList]);

  const data = {
    labels: dataSet.dateData,
    datasets: [
      {
        label: 'Price',
        data: dataSet.priceData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 2
      }
    ]
  }


  return (
    <div className='line-chart-wrapper'>
      <h1 className='line-chart-title'>Price Changes for {product.productName}</h1>
      <Line options={{ responsive: true }} data={data} />
      <svg onClick={() => setOpenChart(false)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="icon exit-line-chart">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
  )
}

export default DataChart;