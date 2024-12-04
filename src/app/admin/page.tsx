import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AdminList from "@/components/Admin/AdminList";

export const metadata: Metadata = {
  title: "Everponic | Admin page - Admin Manage",
  icons: "/images/logo_head_mini_black.svg",
};

const Page = () => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="Admin Manage" pageName="Admin List" />

      <div className="flex flex-col gap-10">
        <AdminList />
      </div>
    </DefaultLayout>
  );
};

export default Page;
