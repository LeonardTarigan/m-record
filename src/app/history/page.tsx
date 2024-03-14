"use client";

import HistoryCard from "@/components/ui/history-card";
import { useState } from "react";
import { addDays, format } from "date-fns";
import { id } from "date-fns/locale";

import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function HistoryPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <main className="pb-24">
      <div className="sticky top-0 bg-white p-5">
        {/* <input
          type="date"
          placeholder="Cari Tanggal"
          className="w-full rounded-lg border-2 bg-zinc-50 p-2"
        /> */}
        <div className={cn("grid gap-2")}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "dd LLLL yyyy", { locale: id })} -{" "}
                      {format(date.to, "dd LLLL yyyy", { locale: id })}
                    </>
                  ) : (
                    format(date.from, "dd LLLL yyyy", { locale: id })
                  )
                ) : (
                  <span>Pilih Tanggal</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
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
