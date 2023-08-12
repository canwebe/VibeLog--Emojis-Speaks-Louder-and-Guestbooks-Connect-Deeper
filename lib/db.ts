import { Kysely } from 'kysely'
import { Database } from './db.d'
import { NeonDialect } from 'kysely-neon'

const db = new Kysely<Database>({
  dialect: new NeonDialect({
    connectionString: process.env.DATABASE_URL,
  }),
})

export default db
