import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import GalleryUpdate from "@/components/Gallery/GalleryUpdate";

export const metadata: Metadata = {
  title: "Everponic | Admin page - Gallery Manage",
  icons: "/images/logo_head_mini_black.svg",
};

interface NewsPageProps {
  params: {
    id: number;
  };
}

const GalleryUpdatePage: React.FC<NewsPageProps> = ({ params }) => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="Gallery Manage" pageName="Gallery Update" />

      <div className="flex flex-col gap-10">
        <GalleryUpdate id={params.id} />
      </div>
    </DefaultLayout>
  );
};

export default GalleryUpdatePage;
