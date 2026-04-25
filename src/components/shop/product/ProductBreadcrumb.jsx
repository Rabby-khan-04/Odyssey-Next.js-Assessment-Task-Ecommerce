import Link from "next/link";

const ProductBreadcrumb = ({ title }) => {
  return (
    <section>
      <div className="main-container">
        <ul className="flex items-center flex-wrap text-[#222222] py-7">
          <li className="breadcrumb-item">
            <Link href="/" title="Back to the home page">
              Home
            </Link>
          </li>
          <li className="before:content-['/'] before:text-[12px] before:px-3">
            <span>{title}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductBreadcrumb;
