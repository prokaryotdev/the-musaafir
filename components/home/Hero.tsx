import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[#221d1e] pb-2 sm:pb-8 pt-20 sm:pt-24 text-white border-b mb-10 sm:mb-20">
      <div className="mx-auto w-full max-w-[900px] px-4 py-12 sm:p-12">
        <h1 className="mb-6 text-center text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          I Help Muslims Living In The West{" "}
          <span className="underline decoration-[#5a67f4]">Make Hijrah</span> To
          Muslim Countries
        </h1>

        <p className="mb-12 px-4 sm:px-12 text-center sm:text-xl font-light leading-relaxed">
          Ready for <b>Hijrah</b>? We offer <b>expert support</b> to help{" "}
          <b>Muslims in the West</b> transition smoothly to{" "}
          <b>Muslim-majority countries</b>. Begin your journey now!
        </p>

        <div className="flex items-center justify-center mb-12">
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
      

      <div className="border-2 border-white/50 p-4 bg-black rounded-xl shadow-xl shadow-white/10">


      {/* <Image
      src={Img}
      alt=""
      className="opacity-[.7]"
      /> */}

<iframe 
    className="aspect-video w-full"
    src="https://www.youtube.com/embed/7BGvaIzuvvg?si=6t-wBVcWx2rhxMRv" title="YouTube video player" 
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      </div>
    </div>
  );
};

export default Hero;
