
interface doctorModel {
    id:string;
    name: string;
    surName: string;
    tCNo: string;
    sex: number;
    userName: string | null;
    emailConfirmed: boolean| false;
    email: string;
    password: string;
    phoneNumber: string | null;
}

export default doctorModel