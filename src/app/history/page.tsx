import HistoryCard from "@/components/history-card";

function HistoryPage() {
  return (
    <main className="pb-24">
      <div className="sticky top-0 bg-white p-5">
        <input
          type="date"
          placeholder="Cari Tanggal"
          className="w-full rounded-lg border-2 bg-zinc-50 p-2"
        />
      </div>
      <div className="flex flex-col gap-2 p-5 ">
        {[...Array(20)].map((_, index) => {
          return <HistoryCard key={index} />;
        })}
      </div>
    </main>
  );
}

export default HistoryPage;
