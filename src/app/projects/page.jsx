import AllProjects from "@/components/AllProjects";
import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";

const Page = () => {
    return (
        <div>
            <Breadcrumb title="All Projects" href="/projects"></Breadcrumb>
            <AllProjects></AllProjects>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Page;