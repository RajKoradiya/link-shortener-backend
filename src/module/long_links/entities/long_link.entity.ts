import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LongLinks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  long_link: string;

  @Column()
  short_link: string;
}
