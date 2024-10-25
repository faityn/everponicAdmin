import Link from "next/link";
interface BreadcrumbProps {
  parentName: string;
  pageName: string;
}
const Breadcrumb = ({ parentName, pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md font-semibold text-black dark:text-white capitalize">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium capitalize" href="/">
              {parentName} /
            </Link>
          </li>
          <li className="font-medium text-primary capitalize">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
