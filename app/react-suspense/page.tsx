import TableEmployee from "@/components/employeetable";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">Data Loading</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-center">
          <Link href={"/react-suspense/create"} className="btn btn-primary">
            Create
          </Link>
        </div>
        <Suspense fallback={<Spinner />}>
          <TableEmployee />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
