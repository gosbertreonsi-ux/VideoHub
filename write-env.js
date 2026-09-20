const fs = require('fs');

const databaseUrl = 'DATABASE_URL="postgresql://neondb_owner:npg_NvpBJ4rtY2Ez@ep-solitary-water-b5oi75lu-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"\n';

// Forces Node to write the file in pure standard UTF-8 format
fs.writeFileSync('.env', databaseUrl, 'utf8');
console.log('✅ Secure UTF-8 .env file written successfully!');
