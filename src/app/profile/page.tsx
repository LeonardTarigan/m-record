import Image from "next/image";

function ProfilePage() {
  return (
    <main className="">
      <section className=" flex w-full items-center justify-center gap-2 bg-gradient-to-b from-red-800 to-red-600 p-5 pb-24">
        <div className="relative h-7 w-7 rounded-full">
          <Image src={"/logo.png"} alt="Logo" fill />
        </div>
        <h1 className="text-start text-xs font-bold text-white">
          Sistem Presensi Karyawan <br /> Millenium Group
        </h1>
      </section>
      <section className="z-10 -mt-5 flex flex-col items-center gap-2 rounded-t-2xl bg-white p-5 pb-24 pt-0 text-center ">
        <div className="-mt-7 h-20 w-20 rounded-full border-4 border-white bg-zinc-300"></div>
        <h2 className="mb-5 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo!
        </h2>
        <div className="">
          <h3 className="text-xs">Posisi</h3>
          <p className="font-semibold">Dokter</p>
        </div>
        <div className="">
          <h3 className="text-xs">Nomor Induk Pegawai</h3>
          <p className="font-semibold">Dokter</p>
        </div>
        <button className="mt-10 w-full rounded-lg bg-red-700 px-5 py-2 font-semibold text-white transition-all duration-150 hover:bg-red-900 active:translate-y-1">
          Keluar
        </button>
      </section>
    </main>
  );
}

export default ProfilePage;
