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
    <article className="bg-white rounded-lg shadow-md p-6 h-fit w-[340px]">
      <header className="flex items-center mb-4">
        <figure className="w-12 h-12 mr-4">
          <Image
            src={"/images" + imageSrc}
            alt={imageAlt}
            className="rounded-full"
            width={48}
            height={48}
          />
        </figure>
        <div>
          <h2 className="text-neutral-900 text-lg font-semibold name">{author}</h2>
          <p className="text-neutral-600 text-sm">{handle}</p>
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