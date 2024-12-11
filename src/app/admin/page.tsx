import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns, Payment } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { Button } from "@/components/ui/button";
// import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const AdminPage = async () => {
  // const appointments = await getRecentAppointmentList();
  const data = await getData()
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/akira-logo-white.png"
            height={32}
            width={162}
            alt="logo"
            className="h-12 w-fit"
          />
        </Link>

        <p className="text-16-semibold text-white">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Bienvenida Camila 👋</h1>
          <p className="text-dark-700">
            Podes tener el control de todos articulos desde aquí.
          </p>
        </section>
        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={5}
            label="Scheduled appointments"
            icon={"/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={2}
            label="Pending appointments"
            icon={"/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={0}
            label="Cancelled appointments"
            icon={"/icons/cancelled.svg"}
          />
        </section>
        <Link href="/inventory/create" className="self-end">
          <Button size="sm" variant="outline">
            CREAR ARTICULO
          </Button>
        </Link>
        {/* <DataTable columns={columns} data={appointments.documents} /> */}
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
};

export default AdminPage;
