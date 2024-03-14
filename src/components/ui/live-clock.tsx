"use client";

import { useEffect, useState } from "react";
import Clock from "react-live-clock";

function LiveClock() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {!isClient && <p className="text-4xl font-bold"> -:-:- </p>}
      {isClient && (
        <Clock
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"Asia/Jakarta"}
          className="text-4xl font-bold"
        />
      )}
    </>
  );
}

export default LiveClock;
