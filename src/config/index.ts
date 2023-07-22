import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  local_database_url: process.env.LOCAL_DATABASE_URL,
  database_url: process.env.DATABASE_URL,
  default_student_pass: process.env.DEFAULT_SELLER_PASSWORD,
};
