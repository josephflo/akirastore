import { StatusIcon } from "@/constants";
import clsx from "clsx";
import Image from "next/image";

const statuses = {
  scheduled: "Scheduled",
  pending: "Pending",
  cancelled: "Cancelled",
} as const;

// Especifica las claves válidas
type StatusKey = keyof typeof statuses;

export const StatusBadge = ({ status }: { status: string }) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": (status = "scheduled"),
        "bg-blue-600": (status = "pending"),
        "bg-red-600": (status = "cancelled"),
      })}
    >
      <Image src={StatusIcon[status]} alt="status" width={24} height={24} />

      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-red-500": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};
