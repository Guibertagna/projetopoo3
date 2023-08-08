import PermissionType from "./PermissionType";

interface DatabaseItem{
    email: string;
    password: string;
    permission: PermissionType
}

const Database:  DatabaseItem[] =[
    {
        email: "guibertagna@gmail",
        password: "12344",
        permission : PermissionType.ADMIN
    },
    {
        email: "bertagna@gmail",
        password: "1234",
        permission : PermissionType.USER
    }
];

export default Database;