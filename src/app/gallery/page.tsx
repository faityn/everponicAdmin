import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import GalleryList from "@/components/Gallery/GalleryList";

export const metadata: Metadata = {
  title: "Everponic | Admin page - Gallery Manage",
  icons: "/images/logo_head_mini_black.svg",
};

const GalleryPage = () => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="Gallery Manage" pageName="Gallery List" />

      <div className="flex flex-col gap-10">
        <GalleryList />
      </div>
    </DefaultLayout>
  );
};

export default GalleryPage;
