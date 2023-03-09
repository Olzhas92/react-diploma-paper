import React from "react";
import styles from "./Testimonials.module.css";
import Carousel from "react-grid-carousel";
import { CarouselCard } from "./CarouselCard";

const arr = [
  { id: 1, name: "Qairat", location: "Almaty, Kazakhstan" },
  {
    id: 2,
    name: "Astana",
    location: "Astana, Kazakhstan",
  },
  { id: 3, name: "Oqzhetpes", location: "Kokshetau, Kazakhstan" },
  { id: 4, name: "Qairat", location: "Almaty, Kazakhstan" },
  {
    id: 5,
    name: "Astana",
    location: "Astana, Kazakhstan",
  },
  { id: 6, name: "Oqzhetpes", location: "Kokshetau, Kazakhstan" },
  { id: 7, name: "Qairat", location: "Almaty, Kazakhstan" },
  {
    id: 8,
    name: "Astana",
    location: "Astana, Kazakhstan",
  },
  { id: 9, name: "Oqzhetpes", location: "Kokshetau, Kazakhstan" },
];

export const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h4 className={styles.testimonials__title}>Testimonials</h4>
      <p className={styles.testimonials__paragraph}>
        What people say about Us.
      </p>
      <div>
        <Carousel
          cols={3}
          rows={1}
          gap={10}
          loop={true}
          autoplay={5000}
          hideArrow={true}
          dotColorInactive="white"
          dotColorActive="#068CCF"
          responsiveLayout={[
            {
              breakpoint: 1200,
              cols: 3,
              rows: 1,
              gap: 1,
              loop: true,
              autoplay: 5000,
              hideArrow: true,
              dotColorInActive: "white",
              dotColorActive: "#068CCF",
            },
            {
              breakpoint: 1024,
              cols: 2,
              rows: 1,
              gap: 1,
              loop: true,
              autoplay: 5000,
              hideArrow: true,
              dotColorInActive: "white",
              dotColorActive: "#068CCF",
            },
            {
              breakpoint: 768,
              cols: 1,
              rows: 1,
              gap: 1,
              loop: true,
              autoplay: 5000,
              hideArrow: true,
              dotColorInActive: "white",
              dotColorActive: "#068CCF",
            },
            {
              breakpoint: 480,
              cols: 1,
              rows: 1,
              gap: 1,
              loop: true,
              autoplay: 5000,
              hideArrow: true,
              dotColorInActive: "white",
              dotColorActive: "#068CCF",
            },
          ]}
        >
          {arr.map((item) => (
            <Carousel.Item key={item.id}>
              <CarouselCard>
                <p className={styles.testimonials__name}>{item.name}</p>
                <p className={styles.testimonials__location}>{item.location}</p>
              </CarouselCard>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
