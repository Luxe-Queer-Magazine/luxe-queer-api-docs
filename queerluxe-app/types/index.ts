export interface Destination {
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Feature {
  icon: React.ComponentType;
  title: string;
  description: string;
}
