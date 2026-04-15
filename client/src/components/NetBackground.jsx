import React , { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const NetBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#3b82f6",
          },
          links: {
            enable: true,
            color: "#3b82f6",
            distance: 120,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.7,
              },
            },
          },
        },
      }}
    />
  );
};

export default NetBackground;