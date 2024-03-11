import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae id,
            doloremque ratione aperiam velit tenetur at illo iure ab placeat
            maxime dolorum quae et temporibus odio minima, perspiciatis quod aut
            quam, quo deserunt ad ea iste. Nemo possimus corrupti, quisquam
            accusamus laborum autem! Ullam facilis labore iste quidem soluta
            quibusdam.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
