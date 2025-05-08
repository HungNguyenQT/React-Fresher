export { };

declare global {
    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: T;
    }

    interface IModelPaginate<T> {
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        },
        result: T[]
    }
    interface ILogin {
        access_token: string;
        user: {
            email: string;
            phone: string;
            fullName: string;
            role: string;
            avatar: string;
            id: string;
        }
    }
    interface IRegister {
        _id: string;
        email: string;
        fullName: string;
    }
    interface IUser {

        email: string;
        phone: string;
        fullName: string;
        role: string;
        avatar: string;
        id: string;
    }
    interface IFetchAccount {
        user: IUser
    }

    interface IUserTable {
        _id: string;
        fullName: string;
        email: string;
        phone: string;
        role: string;
        avatar: string;
        isActive: boolean;
        createdAt: Date;
        updateAt: Date;
    }
    interface IReponseImport {
        countSuccess: number;
        countError: number;
        detail: any;
    }
    // book
    interface IBookTable {
        _id: string;
        thumbnail: string;
        slider: string[];
        mainText: string;
        author: string;
        price: string;
        sold: string;
        quantity: string;
        category: string;
        createdAt: Date;
        updateAt: Date;
    }

}
