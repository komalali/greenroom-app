const { prisma } = require('./generated/prisma-client');

async function main () {
  const newUser = await prisma.createUser({ name: 'Komal' });
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

  const allUsers = await prisma.users();
  console.log(allUsers);
}

main().catch(err => console.error(err));
