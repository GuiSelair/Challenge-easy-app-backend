import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export default class addAutoIncrementIDTOUsersTable1624279095740 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn("users", 
            new TableColumn({
                name: 'id',
                type: 'int',
                isPrimary: true,
                generationStrategy: 'increment',
            }),
            new TableColumn({
                name: 'id',
                type: 'int',
                isPrimary: true,
                generationStrategy: 'increment',
                isGenerated: true,
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn("users", 
            new TableColumn({
                name: 'id',
                type: 'int',
                isPrimary: true,
                generationStrategy: 'increment',
                isGenerated: true,
            }),
            new TableColumn({
                name: 'id',
                type: 'int',
                isPrimary: true,
                generationStrategy: 'increment',
            })
        )
    }

}
