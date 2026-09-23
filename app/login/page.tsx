import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string; error?: string }>;
}) {
  const params = await searchParams;
  const redirectTo = params.redirect ?? "/";
  const hasError = params.error === "1";

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="w-full max-w-sm rounded-card border border-line bg-white p-6">
        <h1 className="mb-1 font-display text-h2 text-ink">Internal Enablement</h1>
        <p className="mb-6 text-sm text-ink/60">Find the password in 1Password under the category Enablement.</p>
        <form action={login} className="space-y-3">
          <input type="hidden" name="redirect" value={redirectTo} />
          <input
            type="password"
            name="password"
            autoFocus
            placeholder="Password"
            className="w-full rounded-card border border-line bg-paper-2 p-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-forest focus:outline-none"
          />
          {hasError && <p className="text-xs font-medium text-red-600">Incorrect password.</p>}
          <button type="submit" className="w-full rounded-full bg-forest px-4 py-2.5 text-sm font-medium text-signal">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
