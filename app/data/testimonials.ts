export interface ITestimonial {
    id: number;
    author: string;
    handle: string;
    testimonial: string;
    imageSrc: string;
    imageAlt: string;
}

const testimonials: ITestimonial[] = [
    {
        id: 1,
        author: 'Sarah Dole',
        handle: '@sarahdole',
        testimonial: 'I\'ve been searching for high-quality abstract images for my design projects, and I\'m thrilled to have found this platform. The variety and depth of creativity are astounding!',
        imageSrc: '/profile-thumbnail.png',
        imageAlt: "Sarah Dole's profile picture, showing a smiling woman with short hair."
    },
    {
        id: 2,
        author: 'John Doe',
        handle: '@johndoe',
        testimonial: 'This platform offers exactly what I need for my freelance projects. The quality of assets here is unmatched!',
        imageSrc: '/profile-thumbnail.png',
        imageAlt: "Sarah Dole's profile picture, showing a smiling woman with short hair."
    },
    {
        id: 3,
        author: 'Jane Smith',
        handle: '@janesmith',
        testimonial: 'An amazing resource for designers and creatives! I love how easy it is to find what I need quickly.',
        imageSrc: '/profile-thumbnail.png',
        imageAlt: "Sarah Dole's profile picture, showing a smiling woman with short hair."
    },
    {
        id: 4,
        author: 'Wasfi Mohammed Awni Wasfi Mohamed Qaddoumi',
        handle: '@sarahdole',
        testimonial: 'I\'ve been searching for high-quality abstract images for my design projects, and I\'m thrilled to have found this platform. The variety and depth of creativity are astounding! I highly recommend it to anyone who is in need of unique and creative assets for their design and marketing work. The user interface is seamless, and the customer support is top-notch!',
        imageSrc: '/profile-thumbnail.png',
        imageAlt: "Sarah Dole's profile picture, showing a smiling woman with short hair."
    }
];

export default testimonials;
