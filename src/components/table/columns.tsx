"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Catalogo } from "@/constants";
import { Appointment, Product } from "@/types/appwrite-types";

// import { AppointmentModal } from "../AppointmentModal";
import { StatusBadge } from "../StatusBadge";
import { formatDateTime } from "@/lib/utils";
import { ProductModal } from "../ProductModal";
import Link from "next/link";

export const columns: ColumnDef<Product>[] = [

  {
    header: "#ID",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.id}</p>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.original.name;
      return <p className="text-14-medium ">{name}</p>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.original.type;

      const catalogo = Catalogo.find(
        (catalogo) => catalogo.name === type
      );

      return (
        <div className="flex items-center gap-3">
          <Image
            src={catalogo?.image!}
            alt="catalogo"
            width={100}
            height={100}
            className="w-8 h-auto"
          />
          <p className="whitespace-nowrap">{type}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.original.price;
      return (
        <p className="text-14-regular min-w-[100px]">
          ${price}
        </p>
      );
    },
  },
  
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ row }) => {
      const size = row.original.size;
      return (
        <p className="text-14-regular min-w-[100px]">
          {size}	
        </p>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const createdAt = row.original.createdAt;
      return (
        <p className="text-14-regular min-w-[100px]">
          {formatDateTime(createdAt).dateTime}
        </p>
      );
    },
  },
  {
    accessorKey: "inStock",
    header: "In Stock",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={appointment.status} />
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      const item = row.original;

      return (
        <div className="flex gap-1 cursor-pointer">
          <ProductModal
            id={row.id}
            type="edit"
            item={item}
            title="Editar Producto"
            description="Please confirm the following details to schedule."
          />
          <ProductModal
            id={row.id}
            type="delete"
            item={item}
            title="Eliminar Producto"
            description="Please confirm the following details to schedule."
          />
          
        </div>
      );
    },
  },
];