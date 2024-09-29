import { cn } from "@/lib/utils";
import { ChevronsRight, Play } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#221d1e] pb-2 sm:pb-8 pt-20 sm:pt-24 text-white border-b mb-10 sm:mb-20">
      <div className="mx-auto w-full max-w-[900px] px-4 py-12 sm:p-12">
      <h1 className="mb-6 text-center text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
    We Help Travelers Living in Urban Areas{" "}
    <span className="underline decoration-[#5a67f4]">Explore </span> New Destinations
</h1>



<p className="mb-12 px-4 sm:px-12 text-center sm:text-xl font-light leading-relaxed">
    We provide <b>expert guidance</b> to help{" "}
    <b>travelers in urban areas</b> transition seamlessly to{" "}
    <b>new destinations</b>. Start your journey today!
</p>


        <Link href={''} className="flex items-center justify-center mb-12">
        <div className="overflow-hidden rounded-full border border-[#f6db4b]/80 bg-[#f6db4b]/90 p-0.5 shadow-lg shadow-[#f6db4b]/20">
            <button
              className={cn(
                "h-10 w-full flex items-center gap-1 rounded-full bg-[#f6db4b] px-8 font-semibold text-[#221d1e] backdrop-blur-xl",
              )}
            >
              <span>Schedule a call</span>
              <ChevronsRight className="text-[#221d1e] size-5"/>
            </button>
          </div>
        </Link>

        {/*  */}
      

      <div className="relative border-2 border-white/30 p-4 bg-black/50 rounded-xl shadow-xl shadow-white/10">

      <div className="aspect-video"></div>

      <div className="absolute mx-auto top-0 bottom-0 left-0 right-0  flex items-center justify-center">

        <div className=" size-[70px] lg:size-[110px] cursor-pointer bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center">

      <div className=" size-[60px] lg:size-[100px] bg-white rounded-full flex items-center justify-center">
      <Play className="size-[30px] lg:size-[40px] fill-black/90 text-black/90"/>
      </div>
      </div>


      </div>
       

      </div>

      </div>
    </div>
  );
};

export default Hero;
