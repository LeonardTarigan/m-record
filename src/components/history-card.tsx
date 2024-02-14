import BadgeCheckIcon from "./icons/badge-check";

function HistoryCard() {
  return (
    <div className="flex items-center justify-between rounded-lg border-2 p-5 shadow-md">
      <div className="flex items-center gap-1">
        <BadgeCheckIcon className="w-5 text-green-500" />
        <h1 className="text-sm font-bold">12 September 2022</h1>
      </div>
      <button className="rounded-md bg-blue-600 px-4 py-1 text-sm text-white">
        Bukti
      </button>
    </div>
  );
}

export default HistoryCard;