import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FaqList from "@/components/Faq/FaqList";

export const metadata: Metadata = {
  title: "Lound | Admin page - FAQ Manage",
  icons: "/images/favicon.ico",
};

const FaqPage = () => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="FAQ Manage" pageName="FAQ List" />

      <div className="flex flex-col gap-10">
        <FaqList />
      </div>
    </DefaultLayout>
  );
};

export default FaqPage;
