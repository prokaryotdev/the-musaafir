import Image from "next/image";
import Stars from "../../public/star.webp" 


const testimonials = [
    {
      name: "Amina S.",
      review: "The guidance I received was invaluable. From choosing the right country to settling in, everything was handled with care and professionalism. My Hijrah experience has been seamless, and I couldn’t be happier with the support I received!"
    },
    {
      name: "Omar K.",
      review: "I was overwhelmed with the paperwork and moving logistics, but the team made it easy. Their step-by-step assistance and cultural insights made all the difference. I’m now comfortably settled and thriving in my new home."
    },
    {
      name: "Fatima R.",
      review: "The personal touch and expert advice provided were exceptional. I felt supported throughout the entire process, from visa applications to finding a community. I highly recommend their services to anyone considering Hijrah."
    },
    {
      name: "Hassan M.",
      review: "From the initial consultation to post-move support, the service was outstanding. They addressed every concern I had and helped me integrate smoothly into my new environment. I’m grateful for their dedication and expertise."
    },
    {
      name: "Leila J.",
      review: "Moving to a new country can be daunting, but the team’s thorough and compassionate approach made it much easier. Their help with relocation planning and cultural orientation was crucial for a successful transition."
    },
    {
      name: "Zainab T.",
      review: "The support I received was beyond my expectations. They helped me navigate complex legal requirements and connected me with local resources, making my transition smooth and stress-free."
    },
    {
      name: "Rami B.",
      review: "I appreciated the personalized approach and ongoing support throughout my move. Their expertise in handling all aspects of relocation ensured that I felt confident and well-prepared."
    },
    {
      name: "Maya L.",
      review: "From start to finish, the service was exceptional. Their attention to detail and commitment to making my move as seamless as possible truly stood out. I felt supported every step of the way."
    }
  ];
  
  

const Testimonial = () => {
  return (
    <section className="py-12 sm:py-24 bg-gray-50/90 border-y">
    <div className="mx-auto max-w-[1100px] px-4 sm:px-8 mb-0 sm:mb-20">
        <div className="mb-14 sm:text-center">
        <span className="text-sm text-gray-500 font-medium sm:text-center block mb-1 sm:mb-2">TESTIMONIAL</span>

          
          <h2 className="text-3xl sm:text-5xl sm:text-center font-bold text-gray-900 py-3 sm:py-4">
         Those Who&#39;ve Made the Journey
          </h2>
          <p className="text-lg font-normal text-gray-600 max-w-md md:max-w-2xl mx-auto">
          Read success stories from people Who&#39;ve Made the Journey




          </p>
        </div>
        <div className="flex justify-center  gap-5 flex-wrap sm:flex-row  sm:gap-8">
          {testimonials.map((person, index) => (
            <div
              key={index}
              className="relative w-full bg-white rounded-[8px] border p-6 max-md:max-w-sm max-md:mx-auto md:w-[320px]"
            >
         
              <h4 className="text-lg flex items-center gap-x-3 font-semibold text-gray-900 mb-3 capitalize">
              <span className="bg-gray-100 size-10 border rounded-full"></span>

                <div>
                    <span className="">   {person.name}
                    </span>
              
                <span className="text-xs block font-extralight -mt-1 text-gray-500">
                    @username
                </span>

                </div>
              </h4>
              <p className=" font-normal text-gray-600">
                {person.review}
              </p>

              <div
                className="  mt-5 "
              >
            
                 <Image src={Stars} alt="" className="w-[40%]" />
               
              </div>
            </div>
          ))}
        </div>

  
      </div>
    </section>
  );
};

export default Testimonial;
