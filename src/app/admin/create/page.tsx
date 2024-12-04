import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AdminCreate from "@/components/Admin/AdminCreate";

export const metadata: Metadata = {
  title: "Everponic | Admin page - News Manage",
  icons: "/images/logo_head_mini_black.svg",
};

const CreatePage = () => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="Admin Manage" pageName="Admin Create" />

      <div className="flex flex-col gap-10">
        <AdminCreate />
      </div>
    </DefaultLayout>
  );
};

export default CreatePage;
