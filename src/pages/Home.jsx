
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import CourseSection from "../components/CourseSection";

function Home() {
  return (
    <>
      <Helmet>
        <title>SafePath | Health & Safety Institute in Multan</title>

        <meta
          name="description"
          content="Explore health and safety training options with SafePath in Multan, Pakistan. Contact our team for course information and enrolment enquiries."
        />

        <meta
          property="og:title"
          content="SafePath | Health & Safety Institute in Multan"
        />

        <meta
          property="og:description"
          content="Discover health and safety training options with SafePath in Multan, Pakistan."
        />
      </Helmet>

      <Hero />
      <CourseSection />
    </>
  );
}

export default Home;
