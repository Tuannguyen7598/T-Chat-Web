import Axios from "axios";
export class AppState {
    user: {
        accessToken:"",}
    //     hasLoggedIn: localStorage.getItem("user.hasLoggedIn") === "true" ? true : false,

    //     id: localStorage.getItem("user.id") || "",
    //     name: localStorage.getItem("user.name") || "",
    //     email: localStorage.getItem("user.email") || "",
    //     avatar: localStorage.getItem("user.avatar") || "",
    //     phone: localStorage.getItem("user.phone") || "",
    //     langCode: (localStorage.getItem("user.langCode") as LangCode) || LangCode.en,
    //     permission: {
    //         role: localStorage.getItem("user.permission.role") as UserRole,
    //         isActive: localStorage.getItem("user.permission.isActive") === "true" ? true : false,
    //         isDelete: localStorage.getItem("user.permission.isDelete") === "true" ? true : false,
    //     },
    //     company: localStorage.getItem("user.company") || "",
        
    //     skills: [],
    //     cv: "",
    //     jobs: [],
    //     courseRepertoire: [],
    //     eduHistory: [],
    //     deliveredCourses: [],
    // };

    // trainer: Array<ITrainerDto> = [
    //     {
    //         ...UserDto.createObj(),
    //         trainer: TrainerDto.createObj()
    //     }
    // ];

    // clients: Array<IClientRequest> = [];

    // sysToasts: React.ReactText;
    // settings: Array<ISettingRequest> = [];
    // courses: Array<ICourse> = [];
    // skills: Array<SkillDto> = [];
    // templates: Array<ITemplateCourse> = [];

    constructor() {
       
    }
}
