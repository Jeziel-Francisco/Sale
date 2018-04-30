interface IUserPermissions {
    id: number;
    note: string;
    userIdPermissions: number;   //chave estrangeria do usuario que deu permissao
    permissionsId: number;       //chave estrangeria da permissao
    userId: number;              //chave estrangeria do usuario que tem permissao
}

export { IUserPermissions };