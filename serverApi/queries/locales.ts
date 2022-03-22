enum Locale{
    CS='CS',
    EN='EN'
}

export const locales =async (_parent:any, _args:any, _context:any) => {
    return Object.values(Locale);
}