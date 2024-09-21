// Import the testimonials array from the data file
import testimonials from '../data/testimonials';
import { TestimonialCard } from '../components';

// Main testimonial card layout
const TestimonialCardHome = () => {
  // Destructure the first testimonial from the array
  const [,,,problematicTestimonial] = testimonials; // Selecting the first testimonial

  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-8 px-4 md:px-8 lg:px-8 h-screen py-[200px]">
        <div className='md:col-start-2 lg:col-start-5 col-span-4 '>
          <TestimonialCard
            author={problematicTestimonial.author}
            handle={problematicTestimonial.handle}
            testimonial={problematicTestimonial.testimonial}
            imageSrc={problematicTestimonial.imageSrc}
            imageAlt={problematicTestimonial.imageAlt}
          />
        </div>
      </section>
    </main>
  );
};

export default TestimonialCardHome;
