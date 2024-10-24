import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import NewsUpdate from "@/components/News/NewsUpdate";

export const metadata: Metadata = {
  title: "Everponic | Admin page - News Manage",
  icons: "/images/favicon.ico",
};

interface NewsPageProps {
  params: {
    id: number;
  };
}

const NewsUpdatePage: React.FC<NewsPageProps> = ({ params }) => {
  return (
    <DefaultLayout allowedRoles={["Super Admin"]}>
      <Breadcrumb parentName="News Manage" pageName="News Update" />

      <div className="flex flex-col gap-10">
        <NewsUpdate id={params.id} />
      </div>
    </DefaultLayout>
  );
};

export default NewsUpdatePage;
