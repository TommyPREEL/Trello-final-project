import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function projectCreate(uid, projectName) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val() ?? [];
                data1.push({ id: uuidv4(), name: projectName, statusList: [] })
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

export function projectAll(uid) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database, 'projectList/' + uid);
            onValue(reference, (data) => {
                const data1 = data.val();
                resolve(data1)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function projectDelete(uid, idProject) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val();
                const num = data1.findIndex((elem) => elem.id === idProject)
                data1.splice(num, 1)
                set(ref(database, 'projectList/' + uid), data1);
                resolve(data1)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function projectEdit(uid, idProject, projectName) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val() ?? [];
                const num = data1.findIndex((elem) => elem.id === idProject)
                data1[num] = {...data1[num], name: projectName}
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

export function projectById(uid, idProject) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val() ?? [];
                const projectIndex = data1.findIndex((elem) => elem.id === idProject)
                data1[projectIndex] = {...data1[num], name: projectName}
                data1.push({ id: uuidv4(), name: projectName, statusList: [] })
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