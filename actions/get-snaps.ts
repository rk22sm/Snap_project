import { db } from "@/lib/db";

export const GetSnaps = (userID: string | undefined) => {
    return db.snap.findMany({
        where: { authorId: userID },
    });
};
