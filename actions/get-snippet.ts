import { db } from "@/lib/db";

export const GetSnippet = (snapID: string) => {
    return db.snap.findUnique({ where: { id: snapID } });
};
