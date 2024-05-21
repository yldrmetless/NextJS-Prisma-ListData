import { getEmployeeList } from "@/lib/action";
import React from "react";

const TableEmployee = async ({ query }: { query: string }) => {
  const employees = await getEmployeeList(query);
  return (
    <table className="table table-zebra mt-8">
      <thead className="text-sm uppercase">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((rs, index) => (
          <tr className="border-b" key={rs.id}>
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{rs.name}</td>
            <td className="py-3 px-6">{rs.email}</td>
            <td className="py-3 px-6">{rs.phone}</td>
            <td className="py-3 px-6">Date</td>
            <td className="flex justify-center gap-1 py-3">
              <button className="btn btn-info">View</button>
              <button className="btn btn-success">Edit</button>
              <button className="btn btn-error">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableEmployee;
