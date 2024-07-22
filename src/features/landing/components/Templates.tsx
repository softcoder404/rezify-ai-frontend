import template1 from "@/assets/images/template1.png";
import template2 from "@/assets/images/template2.png";
import template3 from "@/assets/images/template3.png";
const Templates = () => {
  return (
    <section id="templates" className="w-screen bg-white md:py-24 py-18 mt-24 ">
      <div className=" w-5/6 mx-auto">
        <div className="flex justify-center">
          <h1 className="text-3xl font-spacegrotesk font-medium md:w-[370px] text-center">
            Start by selecting a resume template design
          </h1>
        </div>
        {/* Templates */}
        <div className="md:flex md:gap-6  mt-10 md:mt-16 ">
          <div className="p-6 bg-gray-300 rounded-xl mb-6">
            <img
              className="rounded-xl"
              src={template1}
              alt="template resume image 1"
            />
          </div>
          <div className="p-6 bg-gray-300 rounded-xl mb-6">
            <img src={template2} alt="template resume image 2" />
          </div>
          <div className="p-6 bg-gray-300 rounded-xl mb-6">
            <img src={template3} alt="template resume image 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
