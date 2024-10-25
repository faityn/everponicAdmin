import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CareersUpdate from "@/components/Careers/CareersUpdate";

export const metadata: Metadata = {
  title: "Everponic | Admin page - Careers Manage",
  icons: "/images/logo_head_mini_black.svg",
};

interface CareersPageProps {
  params: {
    id: number;
  };
}

const CareersUpdatePage: React.FC<CareersPageProps> = ({ params }) => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="Careers Manage" pageName="Careers Update" />

      <div className="flex flex-col gap-10">
        <CareersUpdate id={params.id} />
      </div>
    </DefaultLayout>
  );
};

export default CareersUpdatePage;
