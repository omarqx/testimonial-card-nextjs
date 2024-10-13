import Image from "next/image";

interface ITestimonialCardProps {
  author: string;
  handle: string;
  testimonial: string;
  imageSrc: string;
  imageAlt: string;
}

const TestimonialCard = ({ author, handle, testimonial, imageSrc, imageAlt }: ITestimonialCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-custom p-6 w-[340px]">
      <header className="items-center mb-4 h-[49px] justify-center items-center inline-flex">
        <figure className="w-12 h-12 mr-4 justify-center items-center inline-flex">
          <Image
            src={"/images" + imageSrc}
            alt={imageAlt}
            className="w-12 h-12 rounded-[48px]"
            width={48}
            height={48}
          />
        </figure>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-px inline-flex overflow-hidden">
          <h2 className="self-stretch text-neutral-900 leading-7 text-lg font-semibold truncate max-w-full">{author}</h2>
          <p className="self-stretch text-neutral-600 leading-tight font-normal text-sm">{handle}</p>
        </div>
      </header>
      <section>
        <p className="text-neutral-600 text-base">
          {testimonial}
        </p>
      </section>
    </article>
  );
};

export default TestimonialCard;