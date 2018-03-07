import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';

@Table
export class PostModel extends Model<PostModel> {
    @Column(DataType.INTEGER)
    postId: number;

    @Column(DataType.STRING(100))    
    title: string;    
    
}