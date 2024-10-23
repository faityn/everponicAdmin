import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import GalleryCreate from "@/components/Gallery/GalleryCreate";

export const metadata: Metadata = {
  title: "Lound | Admin page - Gallery Manage",
  icons: "/images/favicon.ico",
};

const GalleryCreatePage = () => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="Gallery Manage" pageName="Gallery Create" />

      <div className="flex flex-col gap-10">
        <GalleryCreate />
      </div>
    </DefaultLayout>
  );
};

export default GalleryCreatePage;