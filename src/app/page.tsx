"use client";

import LiveClock from "@/components/live-clock";
import { getCurrentDay } from "@/utils/global-functions";

export default function Home() {
  return (
    <main className="h-screen">
      <section className="flex flex-col items-center gap-5 bg-gradient-to-b from-red-800 to-red-600 p-5 pb-10 text-center text-white">
        <div className="flex flex-col items-center gap-2">
          <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          <p className="line-clamp-1 text-sm font-bold">John Doe</p>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col items-center">
            <h2 className="text-xs">Jam Masuk</h2>
            <p className="text-lg font-bold">07:00</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xs">Jam Keluar</h2>
            <p className="text-lg font-bold">16:00</p>
          </div>
        </div>
      </section>
      <section className="-mt-5 flex h-screen flex-col items-center gap-5 rounded-t-2xl border bg-white p-5 text-center">
        <div>
          <LiveClock />
          <p className="text-sm font-semibold">{getCurrentDay()}</p>
        </div>
        <div className="aspect-square w-1/2 rounded-lg bg-gradient-to-b from-blue-800 to-blue-600"></div>
      </section>
    </main>
  );
}
