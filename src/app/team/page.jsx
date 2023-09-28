import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";

const Page = () => {
    return (
        <div>
            <Breadcrumb title="Team" href="/team"></Breadcrumb>
            <Team></Team>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Page;