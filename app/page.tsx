import { TestimonialCard } from './components';

// Main testimonial card layout
const TestimonialCardHome = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 p-6 h-screen py-[200px]">
        <div className='md:col-start-2 lg:col-start-5 col-span-4 '>
          <TestimonialCard
            author="Sarah Dole"
            handle="@sarahdole"
            testimonial="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
            imageSrc="/profile-thumbnail.png"
            imageAlt="Sarah Dole's profile picture, showing a smiling woman with short hair."
          />
        </div>
      </section>
    </main>
  );
};

export default TestimonialCardHome;