import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: true })
    name: string;

    @Column({ length: 50, unique: true })
    email: string;

    @Column({ length: 50 })
    password: string;

    @Column({ length: 50 })
    role: string;

    @Column({ default: true })
    status: boolean;

    @Column({ length: 100, nullable: true })
    device: string;

    @UpdateDateColumn()
    updated: Date;

    @CreateDateColumn()
    created: Date;

}
