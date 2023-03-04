export interface Task {
    name: string;
    done: boolean;
    category: "general" | "work" | "gym" | "hobby";
}
export type Category = "general" | "work" | "gym" | "hobby";
export const categories: Category[] = ["general", "work", "gym", "hobby"];