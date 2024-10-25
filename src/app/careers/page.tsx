import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CareersList from "@/components/Careers/CareersList";

export const metadata: Metadata = {
  title: "Everponic | Admin page - Careers Manage",
  icons: "/images/logo_head_mini_black.svg",
};

const CareersPage = () => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="Careers Manage" pageName="Careers List" />

      <div className="flex flex-col gap-10">
        <CareersList />
      </div>
    </DefaultLayout>
  );
};

export default CareersPage;
