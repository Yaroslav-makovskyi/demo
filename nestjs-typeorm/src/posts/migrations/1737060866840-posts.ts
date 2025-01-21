import { MigrationInterface, QueryRunner } from 'typeorm';

export class Posts1737060866840 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "public"."post" (
        "title" character varying NOT NULL,
        "body" character varying NOT NULL,
        "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
        "authorId" uuid,
        CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id")
      ) WITH (oids = false);
    `);

    await queryRunner.query(`
      ALTER TABLE ONLY "public"."post" ADD CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0" FOREIGN KEY ("authorId")
      REFERENCES "user"(id) ON UPDATE SET NULL ON DELETE SET NULL NOT DEFERRABLE;
    `);

    await queryRunner.query(`
      INSERT INTO "post" ("title", "body", "id", "authorId") VALUES
      ('Hello',	'Word',	'8e59c99e-446a-4ad9-8b32-09d2c3f6e4f6',	NULL);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "post";`);
  }
}
