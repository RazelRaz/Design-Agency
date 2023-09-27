import Brands from "@/components/Brands";
import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

const Page = () => {
  return (
    <div>
      <Hero></Hero>
      <Brands></Brands>
      <WorkList></WorkList>
      <Stats></Stats>
      <FeaturedProject></FeaturedProject>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Page;