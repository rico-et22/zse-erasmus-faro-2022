import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

export default function Navbar() {
  const { asPath } = useRouter();

  React.useEffect(() => console.log(asPath));

  const routes = [
    { label: "Home", path: "/" },
    { label: "Uczestnicy", path: "/uczestnicy" },
    { label: "Instytucje", path: "/instytucje" },
    { label: "Przygotowanie", path: "/przygotowanie" },
    { label: "Przebieg", path: "/przebieg" },
    { label: "Galeria", path: "/galeria" },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex justify-between items-center shadow-lg sticky top-0 z-[100] bg-gray-50">
      <Link href="/" passHref>
        <a className="m-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/erasmus-faro-logo.svg"
            alt="Erasmus Faro 2022"
            className="h-12 block"
          />
        </a>
      </Link>
      {routes.length > 0 && (
        <>
          <div className="hidden md:flex mr-4 border rounded-lg items-center py-1 lg:py-2 px-1 bg-gray-200">
            {routes.map((route) => (
              <Link key={route.path} href={route.path} passHref>
                <a
                  className={`px-2 mx-1 py-1 text-xs lg:text-base ${
                    route.path === asPath ? "bg-white rounded-lg shadow" : ""
                  }`}
                >
                  {route.label}
                </a>
              </Link>
            ))}
          </div>
          <button
            className="md:hidden mr-4"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open && <i className="bi bi-list text-[40px]" />}
            {open && <i className="bi bi-x text-[40px]" />}
          </button>
          {open && (
            <div className="absolute top-[5rem] right-0 flex md:hidden flex-col border rounded-lg justify-center py-2 px-1 bg-gray-200 z-50 mr-4">
              {routes.map((route) => (
                <Link key={route.path} href={route.path} passHref>
                  <a
                    className={`px-2 mx-1 py-1 text-sm ${
                      route.path === asPath ? "bg-white rounded-lg shadow" : ""
                    }`}
                  >
                    {route.label}
                  </a>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </nav>
  );
}
