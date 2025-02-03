import { createClient } from '@supabase/supabase-js';
import { a as PUBLIC_SUPABASE_URL } from './public-C_Z4GS8g.js';

const PRIVATE_SUPABASE_PRIVATE_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTczNzgyMTc2MCwiZXhwIjo0ODkzNDk1MzYwLCJyb2xlIjoic2VydmljZV9yb2xlIn0.VxuTEf4zcoHw595XPq-G2Lzb9C9vtwGSD71z0LfVcjo";
const supabase_admin = createClient(PUBLIC_SUPABASE_URL, PRIVATE_SUPABASE_PRIVATE_KEY);

export { supabase_admin as s };
//# sourceMappingURL=admin-Cwn7f44Z.js.map
