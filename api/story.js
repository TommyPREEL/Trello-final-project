import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function storyCreate(uid, idProject, idStatus, storyName, storyContent) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val() ?? [];
                const projectIndex = data1.findIndex((elem) => elem.id === idProject)
                const statusIndex = data1[projectIndex].statusList.findIndex((elem) => elem.id === idStatus)
                if (statusIndex == -1) {
                    reject({ message: "id not found for this status" })
                }
                if (projectIndex == -1) {
                    reject({ message: "id not found for this project" })
                }
                if (!data1[projectIndex].statusList[statusIndex].storyList)
                {
                    data1[projectIndex].statusList[statusIndex].storyList = []
                }
                data1[projectIndex].statusList[statusIndex].storyList.push({ id: uuidv4(), name: storyName, content: storyContent })
                set(ref(database, 'projectList/' + uid), data1)
                resolve(data1[projectIndex].statusList[statusIndex].storyList)
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function storyAll(uid, idProject, idStatus) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val() ?? []; 
                const projectIndex = data1.findIndex((elem) => elem.id === idProject)
                const statusIndex = data1[projectIndex].statusList.findIndex((elem) => elem.id === idStatus)
                if(statusIndex == -1) {
                    reject({ message: "id not found for this status" })
                }
                if(projectIndex == -1) {
                    reject({ message: "id not found for this project" })
                }
                if(!data1[projectIndex].statusList[statusIndex].storyList){
                    data1[projectIndex].statusList[statusIndex].storyList = []
                }
                resolve(data1[projectIndex].statusList[statusIndex].storyList)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function storyDelete(uid, idProject, idStatus, idStory) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val()
                const projectIndex = data1.findIndex((elem) => elem.id === idProject)
                const statusIndex = data1[projectIndex].statusList.findIndex((elem)=> elem.id === idStatus)
                const storyIndex = data1[projectIndex].statusList[statusIndex].storyList.findIndex((elem) => elem.id === idStory)
                data1[projectIndex].statusList[statusIndex].storyList.splice(storyIndex, 1)
                set(ref(database, 'projectList/' + uid), data1);
                resolve(data1[projectIndex].statusList[statusIndex].storyList)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function storyEdit(uid, idProject, idStatus, idStory, storyName, storyContent) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `projectList/${uid}`)).then((data) => {
                const data1 = data.val()
                const projectIndex = data1.findIndex((elem) => elem.id === idProject)
                const statusIndex = data1[projectIndex].statusList.findIndex((elem)=> elem.id === idStatus)
                if (projectIndex == -1){
                    reject({ message: "id not found for this project" })
                }
                if (statusIndex == -1){
                    reject({ message: "id not found for this status" })
                }
                const storyIndex = data1[projectIndex].statusList[statusIndex].storyList.findIndex((elem) => elem.id === idStory)
                if (storyIndex == -1){
                    reject({ message: "id not found for this story" })
                }
                data1[projectIndex].statusList[statusIndex].storyList[storyIndex] = {...data1[projectIndex].statusList[statusIndex].storyList[storyIndex], name: storyName, content: storyContent}
                set(ref(database, 'projectList/' + uid), data1);
                resolve(data1[projectIndex].statusList[statusIndex].storyList)
            }).catch(err => {
                console.log(err);
            });
        }
        catch (e) {
            reject(e)
        }
    })
}