import { SVGAttributes } from "react";

function CameraIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="54"
      height="48"
      viewBox="0 0 54 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M45.55 5.33337H41.8877L41.4346 4.42137C40.7779 3.08988 39.7638 1.97002 38.5072 1.18862C37.2507 0.407207 35.8018 -0.00452663 34.3246 4.28888e-05H19.6754C18.1982 -0.00483682 16.7491 0.406769 15.4925 1.18821C14.2359 1.96965 13.2219 3.08969 12.5655 4.42137L12.1123 5.33337H8.45C6.34153 5.33337 4.31942 6.17623 2.8285 7.67652C1.33759 9.17681 0.5 11.2116 0.5 13.3334V42.6667C0.5 44.0812 1.05839 45.4377 2.05233 46.4379C3.04628 47.4381 4.39435 48 5.8 48H48.2C49.6056 48 50.9537 47.4381 51.9477 46.4379C52.9416 45.4377 53.5 44.0812 53.5 42.6667V13.3334C53.5 11.2116 52.6624 9.17681 51.1715 7.67652C49.6806 6.17623 47.6585 5.33337 45.55 5.33337ZM36.275 24C36.275 25.846 35.731 27.6505 34.7119 29.1853C33.6927 30.7202 32.2442 31.9165 30.5494 32.6229C28.8546 33.3293 26.9897 33.5141 25.1905 33.154C23.3914 32.7939 21.7387 31.905 20.4416 30.5997C19.1445 29.2944 18.2611 27.6314 17.9032 25.8209C17.5453 24.0104 17.729 22.1338 18.431 20.4283C19.133 18.7229 20.3218 17.2652 21.8471 16.2396C23.3724 15.2141 25.1656 14.6667 27 14.6667C29.4599 14.6667 31.819 15.65 33.5584 17.4004C35.2978 19.1507 36.275 21.5247 36.275 24Z"
        fill="white"
      />
    </svg>
  );
}

export default CameraIcon;