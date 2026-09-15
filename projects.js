/*
 * PROJECT DATA
 * ------------
 * This is the one file you touch to add or edit a project on the homepage.
 * Each object becomes one scrolling section. Fields:
 *
 *   id          short unique slug, used for the section anchor and the
 *               side index (e.g. "#truss-bridge")
 *   section     the label shown in the left-hand running index
 *   tag         small category label above the title (sentence case)
 *   title       project title
 *   descriptor  one or two sentence summary
 *   image       path to the photo/render (swap the placeholder .svg
 *               files in /images for real photos, any format works)
 *   meta        array of short spec strings (material, year, tools — optional)
 *   link        path to a detail page, or null to skip the "View project" link
 */

const PROJECTS = [
  {
    id: "truss-bridge",
    section: "Truss bridge",
    tag: "Structural engineering",
    title: "24 m pedestrian truss bridge",
    descriptor:
      "A Warren truss footbridge designed for a campus greenway crossing, optimized for material efficiency under pedestrian and light-maintenance-vehicle loading.",
    image: "images/truss-bridge.svg",
    meta: ["Steel, hot-rolled sections", "Span 24.0 m", "2024"],
    link: "projects/truss-bridge.html",
  },
  {
    id: "cnc-fixture",
    section: "CNC fixture",
    tag: "Manufacturing / tooling",
    title: "Four-axis machining fixture",
    descriptor:
      "A reusable locating fixture that cut setup time on a recurring aluminum bracket job from four operations down to two.",
    image: "images/cnc-fixture.svg",
    meta: ["6061-T6 aluminum", "±0.05 mm tolerance", "2023"],
    link: "projects/cnc-fixture.html",
  },
  {
    id: "drone-frame",
    section: "Drone frame",
    tag: "Aerospace / composites",
    title: "Lightweight quadrotor frame",
    descriptor:
      "A carbon-fiber X-frame built to survive repeated hard landings during flight testing while staying under a strict mass budget.",
    image: "images/drone-frame.svg",
    meta: ["Carbon fiber, 420 mm", "138 g frame mass", "2022"],
    link: null,
  },
];
