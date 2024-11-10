import { db } from "@/lib/db";

export const GetSnippets = (userID: string | undefined) => {
    return db.snap.findMany({
        where: { authorId: userID },
    });
};
