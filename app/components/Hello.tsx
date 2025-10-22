export default function Hello({ name = "Tenantology" }: { name?: string }) {
  return <h1 className="text-3xl font-bold">Hello {name} 👋</h1>;
}
