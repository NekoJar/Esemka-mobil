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
    src: "Factory.jpg",
  },
  {
    title: "Miscanti Lake",
    src: "worker.jpg",
  },
  {
    title: "Miniques Lagoons",
    src: "mobil_bak.jpg",
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
        end: "bottom+=550px",
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
            Seiring berjalannya waktu ESEMKA akhirnya berpindah ke jalur
            Industri untuk dapat lebih mengembangkan diri beserta variasi
            produknya.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            ESEMKA membentuk suatu badan usaha berbentuk perseroan terbatas yang
            diberi nama PT. Solo Manufaktur Kreasi yang 100% sahamnya dimiliki
            oleh swasta nasional.
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
