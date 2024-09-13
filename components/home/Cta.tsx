import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";


const Cta = () => {
  return (
    <div className="bg-[#221d1e] py-8 text-white border-b mb-10 sm:mb-20">
      <div className="mx-auto w-full max-w-[900px] px-6 py-8 sm:p-12">
        <h1 className="space mb-7 text-center text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        Start Your Hijrah Journey with Confidence
        </h1>

        <div className="flex items-center justify-center">
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
        </div>

        {/*  */}
      

   

      </div>
    </div>
  );
};

export default Cta;
