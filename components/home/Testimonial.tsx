import Image from "next/image";
import Stars from "../../public/star.webp" 


const testimonials = [
  {
    name: "Amina S.",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
  },
  {
    name: "Omar K.",
    review: "Suspendisse potenti. In faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, egestas eget ipsum et, lacinia bibendum nisl. Curabitur non nulla sit amet nisl tempus convallis."
  },
  {
    name: "Fatima R.",
    review: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit."
  },
  {
    name: "Hassan M.",
    review: "Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
  },
  {
    name: "Leila J.",
    review: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat."
  },
  {
    name: "Zainab T.",
    review: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat."
  },
  {
    name: "Rami B.",
    review: "Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Proin eget tortor risus."
  },
  {
    name: "Maya L.",
    review: "Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat."
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
              <p className="font-normal text-gray-600">
                {person.review}
              </p>

              <div
                className=" mt-5 "
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
