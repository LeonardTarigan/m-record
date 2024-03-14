import { BadgeCheck } from "lucide-react";

function HistoryCard() {
  return (
    <div className="flex items-center justify-between rounded-lg border-2 p-5 shadow-md">
      <div className="flex items-center gap-1">
        <BadgeCheck className="w-7 fill-green-500 text-white" />
        <h1 className="text-sm font-bold">12 September 2022</h1>
      </div>
      <button className="rounded-md bg-blue-600 px-4 py-1 text-sm font-semibold text-white transition-all duration-150 hover:bg-blue-800 active:translate-y-1">
        Bukti
      </button>
    </div>
  );
}

export default HistoryCard;
