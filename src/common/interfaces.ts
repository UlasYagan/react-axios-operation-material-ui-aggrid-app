
export interface INotification {
    isOpen: boolean,
    message: string,
    type: string
};

export interface IConfirmDialog {
    isOpen: boolean,
    title: string,
    subTitle: string
};

export interface IEmployee{
    id?: number
    fullName?: string
    email?: string
    mobile?: string
    city?: string   
    gender?: string   
    departmentId?: string 
}