import Breadcrumb from "@/components/Breadcrumb";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";

const Page = () => {
    return (
        <div>
            <Breadcrumb title="Services" href="/services"></Breadcrumb>
            <Services></Services>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Page;