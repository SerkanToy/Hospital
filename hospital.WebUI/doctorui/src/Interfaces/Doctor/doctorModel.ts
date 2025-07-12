

export interface doctorModel {
    name: string;
    surName: string;
    tCNo: string;
    sex: number;
    email:string;
    phoneNumber:string | null;
    createdBy: string | null;
    createdDate: string | null;
    updatedBy: string | null;
    updateDate: string | null;
    deleteBy: string | null;
    deleteDate: string | null;
    isDeleted: boolean;
    /*userTitle: UserTitle[] | null;
    userRoles: UserRole[] | null;
    userAndPatients: UserAndPatient[];
    addresses: Address[];
    descriptions: Description[];
    diagnosisPatientUsers: DiagnosisPatientUser[];
    profilImages: ProfilImage[];
    userUnits: UserUnit[];*/
}