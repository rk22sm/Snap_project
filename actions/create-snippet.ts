export const CreateSnippet = (
    values: { snapName: string; language: string; visibility: string },
    userId: string | undefined,
    code: string,
) => {
    return fetch("/api/snap", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            snapName: values.snapName,
            language: values.language,
            visibility: values.visibility,
            userId,
            code,
        }),
    });
};
