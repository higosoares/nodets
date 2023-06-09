import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../database";

export class DeleteCategoryService {
    async execute(id: string): void {
        const repo = AppDataSource.getRepository(Category);

        if (!(await repo.findOne({ 
                where: {
                    id: id 
                }
        }))) {
            return new Error("Category does not exists!");
        }

        await repo.delete(id);
    }
}