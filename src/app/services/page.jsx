import Breadcrumb from "@/components/Breadcrumb";
import Services from "@/components/Services";

const Page = () => {
    return (
        <div>
            <Breadcrumb title="Services" href="/services"></Breadcrumb>
            <Services></Services>
        </div>
    );
};

export default Page;