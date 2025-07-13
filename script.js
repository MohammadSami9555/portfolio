// Basic GSAP animations
gsap.from(".hero h1", { y: -100, duration: 1, opacity: 0 });
gsap.from(".hero p", { y: 100, duration: 1, opacity: 0, delay: 0.5 });
gsap.from("section", {
  scrollTrigger: "section",
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3
});
