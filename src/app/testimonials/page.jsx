import Breadcrumb from "@/components/Breadcrumb";
import TestimonialList from "@/components/TestimonialList";
import Subscribe from "@/components/Subscribe";


const Page = () => {
    return (
        <div>
            <Breadcrumb title="Testimonials" href="/testimonials"></Breadcrumb>
            <TestimonialList></TestimonialList>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Page;