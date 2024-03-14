import BadgeCheckIcon from "../icons/badge-check-icon";
import { CheckIcon } from "../icons/check-icon";
import { XMarkIcon } from "../icons/x-mark";

type StatusCardProps = {
  type: "green" | "red";
  message: string;
};

function StatusCard({ type, message }: StatusCardProps) {
  return (
    <div
      className={`flex w-full items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-bold shadow-md ${type === "red" && "text-red-600"} ${type === "green" && "text-green-500"}`}
    >
      {type === "green" && (
        <div className="rounded-full bg-green-500 p-1">
          <CheckIcon className="h-4 w-4 text-white" />
        </div>
      )}
      {type === "red" && (
        <div className="rounded-full bg-red-600 p-1">
          <XMarkIcon className="h-4 w-4 text-white" />
        </div>
      )}

      {message}
    </div>
  );
}

export default StatusCard;
