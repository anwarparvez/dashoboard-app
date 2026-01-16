import { prisma } from "@/db/prisma";

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-muted">
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td className="p-2">{u.name}</td>
            <td className="p-2">{u.email}</td>
            <td className="p-2">{u.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
