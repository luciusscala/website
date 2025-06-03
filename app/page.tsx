
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gideon-roman-regular">
      <main className="flex-1 flex flex-col items-center justify-center relative">
        <div className="relative flex items-center justify-center w-full">
          <figure className="w-full max-w-[400px] flex flex-col items-center">
            <Image
              src="/flowers.jpg"
              alt="flowers"
              width={400}
              height={274}
              className="object-contain rounded-xl ring-2 ring-white/60 dark:ring-[#2c2c25] shadow-2xl hover:scale-105 transition-transform duration-300 w-full h-auto bg-white/60 dark:bg-[#26231d]/80"
              priority
            />
          </figure>
        </div>
      </main>
    </div>
  );
}
