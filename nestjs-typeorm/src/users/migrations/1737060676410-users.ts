import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1737060676410 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "public"."user" (
        "firstName" character varying NOT NULL,
        "lastName" character varying NOT NULL,
        "age" integer,
        "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
        CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
      ) WITH (oids = false);
    `);

    await queryRunner.query(`
      INSERT INTO "user" ("firstName", "lastName", "age", "id") VALUES
      ('John ',	'Doe',	20,	'7850d9cd-433b-4a09-9d9e-6fca86a02ac9');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS "user";');
  }
}
