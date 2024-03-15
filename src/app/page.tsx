"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LiveClock from "@/components/ui/live-clock";
import StatusCard from "@/components/ui/status-card";
import { getCurrentDay } from "@/lib/helpers/getCurrentDay";
import { Coordinate } from "@/lib/types";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam, { WebcamProps } from "react-webcam";

export default function Home() {
  const [userCoodinate, setUserCoordinate] = useState<Coordinate>();
  const [isWithinOfficeHour, setIsWithinOfficeHour] = useState<boolean>(false);
  const [isWithinOfficeLocation, setIsWithinOfficeLocation] =
    useState<boolean>(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const officeCoordinate: Coordinate = {
    latitude: 3.483261638244815,
    longitude: 98.59782942217471,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const startHour = 7;
      const endHour = 16;
      const currentHour = new Date().getHours();

      setIsWithinOfficeHour(currentHour >= startHour && currentHour <= endHour);
    }, 1000);

    navigator.geolocation.getCurrentPosition((location) => {
      const { latitude, longitude } = location.coords;

      setUserCoordinate({ latitude, longitude });

      if (
        officeCoordinate.latitude === userCoodinate?.latitude &&
        officeCoordinate.longitude === officeCoordinate.longitude
      ) {
        setIsWithinOfficeLocation(true);
      }
    });

    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();

    setCapturedImage(imageSrc as string);
  }, [webcamRef]);

  const videoConstraints: WebcamProps["videoConstraints"] = {
    width: 500,
    height: 500,
    facingMode: "user",
  };

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

        {capturedImage && (
          <div className="relative aspect-square w-1/2 overflow-hidden rounded-lg">
            <Image src={capturedImage} fill alt="result" />
          </div>
        )}

        {!capturedImage && (
          <Dialog>
            <DialogTrigger className="flex w-full justify-center">
              <div className="relative flex aspect-square w-1/2 items-center justify-center rounded-lg bg-gradient-to-b from-blue-800 to-blue-600">
                <Camera
                  strokeWidth={1.2}
                  className="h-1/2 w-full fill-blue-700 text-white"
                />

                <div className="absolute left-0 top-0 m-2 aspect-square w-10 rounded-tl border-l-4 border-t-4 border-white"></div>
                <div className="absolute right-0 top-0 m-2 aspect-square w-10 rounded-tr border-r-4 border-t-4 border-white"></div>
                <div className="absolute bottom-0 left-0 m-2 aspect-square w-10 rounded-bl border-b-4 border-l-4 border-white"></div>
                <div className="absolute bottom-0 right-0 m-2 aspect-square w-10 rounded-br border-b-4 border-r-4 border-white"></div>
              </div>
            </DialogTrigger>
            <DialogContent className="w-[95%]">
              <div className="relative mt-5 aspect-square w-full overflow-hidden rounded-lg bg-gray-500">
                <Webcam
                  audio={false}
                  height={720}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width={1280}
                  videoConstraints={videoConstraints}
                />
              </div>
              <button
                onClick={capture}
                className="w-full rounded-lg bg-blue-600 px-5 py-2 font-bold text-white transition-all duration-150 hover:bg-blue-800 disabled:bg-gray-400 disabled:text-gray-200"
              >
                Ambil Foto
              </button>
            </DialogContent>
          </Dialog>
        )}
        {userCoodinate && (
          <div className="flex flex-col gap-2">
            {isWithinOfficeLocation && (
              <StatusCard type="green" message="Lokasi Sesuai" />
            )}
            {!isWithinOfficeLocation && (
              <StatusCard type="red" message="Lokasi di Luar Tempat Kerja" />
            )}

            {isWithinOfficeHour && (
              <StatusCard type="green" message="Sedang Dalam Jam Kerja" />
            )}
            {!isWithinOfficeHour && (
              <StatusCard type="red" message="Diluar Jam Kerja" />
            )}
          </div>
        )}

        <div className="mt-5 flex w-full flex-col gap-2">
          {
            <button
              disabled={!isWithinOfficeHour || !isWithinOfficeLocation}
              className="w-full rounded-lg bg-blue-600 px-5 py-2 font-bold text-white transition-all duration-150 hover:bg-blue-800 disabled:bg-gray-400 disabled:text-gray-200"
            >
              Presensi
            </button>
          }
          {capturedImage && (
            <button
              onClick={() => setCapturedImage(null)}
              className="w-full rounded-lg border-2 border-blue-600 px-5 py-2 font-bold text-blue-600 transition-all duration-150 hover:bg-gray-200 disabled:bg-gray-400 disabled:text-gray-200"
            >
              Ambil Ulang Foto
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
