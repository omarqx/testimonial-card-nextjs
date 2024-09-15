import { Noto_Sans } from 'next/font/google';
import Image from 'next/image';

// Load Noto Sans font with the desired weights and settings
const noto_sans = Noto_Sans({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

// Card component for testimonials
const Card = () => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md col-span-4 row-start-2 md:col-start-2 lg:col-start-5 h-fit w-[340px]">
      <header className="flex items-center mb-4">
        <figure className="w-12 h-12 mr-4">
          <Image
            src="/images/profile-thumbnail.png"
            alt="Sarah Dole's profile picture, showing a smiling woman with short hair."
            className="rounded-full"
            width={48}
            height={48}
          />
        </figure>
        <div>
          <h2 className="text-neutral-900 text-lg font-semibold name">Sarah Dole</h2>
          <p className="text-neutral-600 text-sm">@sarahdole</p>
        </div>
      </header>
      <section>
        <p className="text-neutral-600 text-base">
          I&apos;ve been searching for high-quality abstract images for my design projects,
          and I&apos;m thrilled to have found this platform. The variety and depth of creativity are astounding!
        </p>
      </section>
    </article>
  );
};

// Main testimonial card layout
const TestimonialCardHome = () => {
  return (
    <main className={`${noto_sans.className} grid grid-cols-1 grid-rows-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 p-6 bg-gradient h-screen`}>
      <Card />
    </main>
  );
};

export default TestimonialCardHome;