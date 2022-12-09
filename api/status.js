import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function statusCreate(uid, idProject, statusName) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val() ?? [];
                const projectIndex = data1.findIndex(elem => elem.id === idProject)
                if(projectIndex == -1){
                    reject({ message: "id not found for this project" })
                }
                if(!data1[projectIndex].statusList){
                    data1[projectIndex].statusList = []
                }
                data1[projectIndex].statusList.push({ id: uuidv4(), name: statusName, storyList: [] })
                set(ref(database, 'projectList/' + uid), data1);
                resolve(data1)
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function statusAll(uid, idProject) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val() ?? [];
                const projectIndex = data1.findIndex(elem => elem.id === idProject)
                if(projectIndex == -1) 
                {
                    reject({ message: "id not found for this project" })
                }
                if(!data1[projectIndex].statusList){
                    data1[projectIndex].statusList = []
                } 
                resolve(data1[projectIndex].statusList)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function statusDelete(uid, idProject, idStatus) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val();
                const projectIndex = data1.findIndex(elem => elem.id === idProject)
                const indexStatus = data1[projectIndex].statusList.findIndex((elem) => elem.id === idStatus)
                data1[projectIndex].statusList.splice(indexStatus, 1)
                set(ref(database, 'projectList/' + uid), data1);
                resolve(data1[projectIndex].statusList)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function statusEdit(uid, idProject, idStatus, statusName) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val()
                const projectIndex = data1.findIndex((elem) => elem.id === idProject)
                if (projectIndex == -1){
                    reject({ message: "id not found for this project" })
                }
                const statusIndex = data1[projectIndex].statusList.findIndex((elem) => elem.id === idStatus)
                if (statusIndex == -1) {
                    reject({ message: "id not found for this status" })
                }
                data1[projectIndex].statusList[statusIndex] = {...data1[projectIndex].statusList[statusIndex], name: statusName}
                set(ref(database, 'projectList/' + uid), data1);
                resolve(data1[projectIndex].statusList)
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function statusById(uid, idProject, idStatus) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val() ?? [];
                const projectIndex = data1.findIndex((elem) => elem.id === idProject)
                const statusIndex = data1[projectIndex].statusList.findIndex((elem) => elem.id === idStatus)
                resolve(data1[projectIndex].statusList[statusIndex])
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}