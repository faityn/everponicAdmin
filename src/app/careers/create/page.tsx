import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CareersCreate from "@/components/Careers/CareersCreate";

export const metadata: Metadata = {
  title: "Everponic | Admin page - News Manage",
  icons: "/images/logo_head_mini_black.svg",
};

const CareersCreatePage = () => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="Careers Manage" pageName="Careers Create" />

      <div className="flex flex-col gap-10">
        <CareersCreate />
      </div>
    </DefaultLayout>
  );
};

export default CareersCreatePage;
