//components
import { DeButton } from "@/components/ui/DeButton";
import { DeTitle } from "../ui/DeTitle";

const Hero = () => {
  return (
    <>
      <div className="py-20">
        <section className="">
          <div className="flex justify-center items-center">
            <img
              src="img/hero.png"
              alt="Bananas"
              className="w-[38rem] h-72 object-cover"
            />
          </div>
          <div className="container mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
            <DeTitle>
              <div className="">
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Fresh
                </span>{" "}
                ,{" "}
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Delicious{" "}
                </span>
                <span>Bananas Delivered to Your Doorstep</span>
              </div>
            </DeTitle>

            <div className="mt-8 flex justify-center">
              <DeButton
                text="Shop Now"
                onClick={() => {}}
                className="bg-gradient-to-t from-primary to-secondary text-yellow-700 mr-3 font-extrabold"
              />

              <DeButton
                text="Learn More"
                onClick={() => {}}
                className="bg-gray-100 text-black"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
