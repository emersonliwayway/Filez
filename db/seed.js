import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  const sql = `
    INSERT INTO folders(name) VALUES('Greens');
    INSERT INTO folders(name) VALUES('Blues');
    INSERT INTO folders(name) VALUES('Yellows');

    INSERT INTO files(name, size, folder_id) VALUES('Mint green', 3, (SELECT id FROM folders WHERE name = 'Greens'));
    INSERT INTO files(name, size, folder_id) VALUES('Emerald green', 2, (SELECT id FROM folders WHERE name = 'Greens'));
    INSERT INTO files(name, size, folder_id) VALUES('Forest green', 5, (SELECT id FROM folders WHERE name = 'Greens'));
    INSERT INTO files(name, size, folder_id) VALUES('Pthalo green', 1, (SELECT id FROM folders WHERE name = 'Greens'));
    INSERT INTO files(name, size, folder_id) VALUES('Pine green', 4, (SELECT id FROM folders WHERE name = 'Greens'));
    
    INSERT INTO files(name, size, folder_id) VALUES ('Sky blue', 3, (SELECT id FROM folders WHERE name = 'Blues'));
    INSERT INTO files(name, size, folder_id) VALUES ('Ocean blue', 2, (SELECT id FROM folders WHERE name = 'Blues'));
    INSERT INTO files(name, size, folder_id) VALUES ('Navy blue', 5, (SELECT id FROM folders WHERE name = 'Blues'));
    INSERT INTO files(name, size, folder_id) VALUES ('Midnight blue', 4, (SELECT id FROM folders WHERE name = 'Blues'));
    INSERT INTO files(name, size, folder_id) VALUES ('Royal blue', 1, (SELECT id FROM folders WHERE name = 'Blues'));

    INSERT INTO files(name, size, folder_id) VALUES ('Golden yellow', 4, (SELECT id FROM folders WHERE name = 'Yellows'));
    INSERT INTO files(name, size, folder_id) VALUES ('Butter yellow', 5, (SELECT id FROM folders WHERE name = 'Yellows'));
    INSERT INTO files(name, size, folder_id) VALUES ('Canary yellow', 2, (SELECT id FROM folders WHERE name = 'Yellows'));
    INSERT INTO files(name, size, folder_id) VALUES ('Lemon yellow', 1, (SELECT id FROM folders WHERE name = 'Yellows'));
    INSERT INTO files(name, size, folder_id) VALUES ('Butterscotch yellow', 3, (SELECT id FROM folders WHERE name = 'Yellows'));

  `;
  await db.query(sql);
}
