import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./Projects.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Salar de Atacama",
    src: "Esemka_Bima.jpg",
  },
  {
    title: "Valle de la luna",
    src: "Esemka_Bima.jpg",
  },
  {
    title: "Miscanti Lake",
    src: "Esemka_Bima.jpg",
  },
  {
    title: "Miniques Lagoons",
    src: "Esemka_Bima.jpg",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: imageContainer.current,
        pin: true,
        start: "top-=100px",
        end: "bottom-=100px",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/assets/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            mollitia error qui adipisci voluptatum recusandae delectus et
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            mollitia error qui adipisci voluptatum recusandae delectus et, nam
            tempore enim inventore iste, doloribus earum, sed dignissimos in
            nisi? Illum, atque!
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
