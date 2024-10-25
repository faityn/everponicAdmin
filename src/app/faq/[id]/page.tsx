import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FaqUpdate from "@/components/Faq/FaqUpdate";

export const metadata: Metadata = {
  title: "Everponic | Admin page - Gallery Manage",
  icons: "/images/logo_head_mini_black.svg",
};

interface NewsPageProps {
  params: {
    id: number;
  };
}

const FaqUpdatePage: React.FC<NewsPageProps> = ({ params }) => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="FAQ Manage" pageName="FAQ Answer" />

      <div className="flex flex-col gap-10">
        <FaqUpdate id={params.id} />
      </div>
    </DefaultLayout>
  );
};

export default FaqUpdatePage;
