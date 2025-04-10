import SalesChartCard from "@/components/ChartCard";
import Header from "@/components/Header";
import AvailabilityTable from "@/components/Table";
import TopCitiesChartCard from "@/components/TopCitiesChartCard";

export default function Home() {
  return (
    <div className='m-2 flex flex-col border-gray-300 border-1 rounded-md bg-[#FAFAFA] gap-5 overflow-hidden'>
      <Header />

      <div className="w-full flex flex-row gap-4 px-5">
        <SalesChartCard title='Sales (MRP)' />

        <SalesChartCard title='Total Quantity Sold' />

        <TopCitiesChartCard />
      </div>

      <div className="w-full flex flex-col gap-4 px-5 pb-5">
        <AvailabilityTable title='SKU level data' />

        <AvailabilityTable title='City level data' />
      </div>
    </div>
  );
}
