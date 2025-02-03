import { r as redirect } from './index-Q4WdoeBP.js';

const GET = async ({ url, locals: { supabase } }) => {
  const code = url.searchParams.get("code");
  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }
  throw redirect(303, "/");
};

export { GET };
//# sourceMappingURL=_server-C3HOZcnN.js.map
