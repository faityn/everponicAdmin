import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AdminUpdate from "@/components/Admin/AdminUpdate";

export const metadata: Metadata = {
  title: "Everponic | Admin page - Admin Manage",
  icons: "/images/logo_head_mini_black.svg",
};

interface CareersPageProps {
  params: {
    id: number;
  };
}

const UpdatePage: React.FC<CareersPageProps> = ({ params }) => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="Admin Manage" pageName="Admin Update" />

      <div className="flex flex-col gap-10">
        <AdminUpdate id={params.id} />
      </div>
    </DefaultLayout>
  );
};

export default UpdatePage;
