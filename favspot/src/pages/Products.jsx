import React, { useEffect, useMemo } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProductGrid from "../components/products/ProductGrid";
import { getAllProducts, getProductsByType } from "../data/content";

const PAGE_SIZE = 10;

const tabs = [
  { label: "All", to: "/products", type: null },
  { label: "Tours", to: "/products/type/tour", type: "tour" },
  { label: "Transfers", to: "/products/type/transfer", type: "transfer" },
  { label: "Packages", to: "/products/type/package", type: "package" },
  { label: "Activities", to: "/products/type/activity", type: "activity" },
  { label: "Accommodation", to: "/products/type/accommodation", type: "accommodation" },
];

function Products() {
  const { type } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Math.max(1, Number(searchParams.get("page") || 1));

  const products = useMemo(() => {
    if (!type) return getAllProducts();
    if (type === "accommodation") return [];
    return getProductsByType(type);
  }, [type]);

  useEffect(() => {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      next.set("page", "1");
      return next;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const pageItems = products.slice(startIndex, startIndex + PAGE_SIZE);

  const activeTab =
    tabs.find((t) => (t.type ?? null) === (type ?? null))?.label || "All";

  function goToPage(nextPage) {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      next.set("page", String(nextPage));
      return next;
    });
  }

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Explore</h1>
            <p className="mt-2 text-sm text-gray-600">
              Browse tours, transfers, packages, and more.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <NavLink
                key={tab.label}
                to={tab.to}
                className={({ isActive }) =>
                  [
                    "rounded-sm border px-3 py-1.5 text-sm font-medium transition",
                    isActive
                      ? "border-[#223441] bg-[#223441] text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-[#223441] hover:text-[#223441]",
                  ].join(" ")
                }
                end={tab.to === "/products"}
              >
                {tab.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {type === "accommodation" ? (
            <div className="rounded-sm border border-gray-300 bg-white p-6 text-sm text-gray-700">
              Accommodation is coming soon.
            </div>
          ) : products.length ? (
            <>
              <ProductGrid products={pageItems} />

              <div className="mt-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => goToPage(Math.max(1, safePage - 1))}
                  disabled={safePage <= 1}
                  className="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition disabled:opacity-50 hover:border-[#223441] hover:text-[#223441]"
                >
                  ← Prev
                </button>

                <div className="text-sm text-gray-600">
                  Page {safePage} of {totalPages}
                </div>

                <button
                  type="button"
                  onClick={() => goToPage(Math.min(totalPages, safePage + 1))}
                  disabled={safePage >= totalPages}
                  className="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition disabled:opacity-50 hover:border-[#223441] hover:text-[#223441]"
                >
                  Next →
                </button>
              </div>
            </>
          ) : (
            <div className="rounded-sm border border-gray-300 bg-white p-6 text-sm text-gray-700">
              No {activeTab.toLowerCase()} available yet.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Products;
