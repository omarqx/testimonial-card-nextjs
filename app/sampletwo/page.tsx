// Import the testimonials array from the data file
import testimonials from '../data/testimonials';
import { TestimonialCard } from '../components';

// Main testimonial card layout
const TestimonialCardHome = () => {
  // Select the first three testimonials
  const firstThreeTestimonials = testimonials.slice(0, 3);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-8 px-4 md:px-8 lg:px-8 h-screen py-[200px]">
        {firstThreeTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-span-4">
            <TestimonialCard
            author={testimonial.author}
            handle={testimonial.handle}
            testimonial={testimonial.testimonial}
            imageSrc={testimonial.imageSrc}
            imageAlt={testimonial.imageAlt}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default TestimonialCardHome;
