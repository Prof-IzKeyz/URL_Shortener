// Here i'm generating a random 6 character string.
export const generateCode = () => {
    return Math.random().toString(36).substring(2, 8);
}