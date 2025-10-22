import Hello from "./components/Hello";


export default function Home() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Hello name="Tenantology" />
    </div>
  );
}
