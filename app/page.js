import SalesChartCard from "@/components/ChartCard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className='m-2 flex flex-col border-gray-300 border-1 rounded-md'>
      <Header />

      <div className="w-full flex flex-row gap-4 p-8 bg-[#FAFAFA]">
        <SalesChartCard title='Sales (MRP)' />

        <SalesChartCard title='Total Quantity Sold' />
      </div>
    </div>
  );
}
