import { SlideType } from "@/shared/types";
import TestimonyCarousel from "./TestimonyCarousel";

const Testimonies = () => {
  const testimonies: Array<SlideType> = [
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "AbdulHameed Quadri",
      authorTitle: "Snr. Frontend Engineer",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "Olamilekan Ibrahim",
      authorTitle: "Snr. Web3 Frontend Engineer",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "Promise Preston",
      authorTitle: "Snr. Ruby Engineer",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "AbdulHameed Quadri",
      authorTitle: "Snr. Frontend Engineer",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "AbdulHameed Quadri",
      authorTitle: "Snr. Frontend Engineer",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "AbdulHameed Quadri",
      authorTitle: "Snr. Frontend Engineer",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "AbdulHameed Quadri",
      authorTitle: "Snr. Frontend Engineer",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "AbdulHameed Quadri",
      authorTitle: "Snr. Frontend Engineer",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "AbdulHameed Quadri",
      authorTitle: "Snr. Frontend Engineer",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "AbdulHameed Quadri",
      authorTitle: "Snr. Frontend Engineer",
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias quaerat commodi facilis sapiente, unde debitis harum distinctio animi aut saepe! Beatae quos delectus vitae porro, aut numquam itaque a.",
      authorName: "AbdulHameed Quadri",
      authorTitle: "Snr. Frontend Engineer",
    },
  ];
  return (
    <section id="testimonials" className="w-full bg-white md:py-14 py-6">
      <h1 className="text-3xl font-spacegrotesk font-medium text-center px-16">
        Our customers say it best
      </h1>

      <TestimonyCarousel testimonies={testimonies} />
    </section>
  );
};

export default Testimonies;
