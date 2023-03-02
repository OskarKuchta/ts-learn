export interface Task {
    name: string;
    done: boolean;
    category?: "general" | "work" | "gym" | "hobby";
}