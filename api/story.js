import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";
import { getDownloadURL, getStorage, ref as refB, uploadBytes, } from "firebase/storage";

const storage = getStorage(app);
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

export function uploadFile(file, name) {
    return new Promise((res, rej) => {
        // Why are we using XMLHttpRequest? See: 
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662 
        new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", file, true);
            xhr.send(null);
        }).then(blob => {
            // console.log(blob);
            const fileRef = refB(storage, name);
            uploadBytes(fileRef, blob).then(snapshot => {
                // We're done with the blob, close and release it 
                blob.close();
                res(getDownloadURL(fileRef))
            })
        }).catch(err => rej(err.message))
    })
}

export function addPhoto(uid, idProject, file) {
    return new Promise((resolve, reject) => {
        try {
            let spNameUri = file.split('/')
            let name = spNameUri[spNameUri.length - 1]
            uploadFile(file, name).then(url => {
                const reference = ref(database);
                get(child(reference, `projectList/${uid}`)).then((snapshot) => {
                    const data = snapshot.val() ?? [];
                    const projectIndex = data.findIndex(elem => elem.id === idProject)
                    if (projectIndex == -1) reject({ message: "id not find for this project" })
                    const statusIndex = data[projectIndex].statusList.findIndex((elem)=> elem.id === idStatus)
                    if (statusIndex == -1){
                        reject({ message: "id not found for this status" })
                    }
                    if (!data[projectIndex].photos) data[projectIndex].photos = []
                    data[projectIndex].photos.push({ name, url })
                    console.log(data);
                    set(ref(database, 'projectList/' + uid), data);
                    resolve(data)
                }).catch(err => {
                    console.log(err);
                });
            })
        }
        catch (e) {
            reject(e)
        }
    })
}



export function storyCreateWithImage(uid, idProject, idStatus, storyName, storyContent, image) {
    return new Promise((resolve, reject) => {
        try {
            // let spNameUri = image.split('/')
            // let name = spNameUri[spNameUri.length - 1]
            // uploadFile(image, name).then(url => {
                const reference = ref(database);
                get(child(reference, `projectList/${uid}`)).then((data) => {
                    const data1 = data.val() ?? [];
                    const projectIndex = data1.findIndex((elem1) => elem1.id === idProject)
                    const statusIndex = data1[projectIndex].statusList.findIndex((elem2) => elem2.id === idStatus)
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
                    // if (!data1[projectIndex].statusList[statusIndex].photos)
                    // {
                    //     data1[projectIndex].statusList[statusIndex].photos = []
                    // }
                    
                    data1[projectIndex].statusList[statusIndex].storyList.push({ id: uuidv4(), name: storyName, content: storyContent, image: "url" })
                    //data1[projectIndex].photos.push({ name, url })
                    set(ref(database, 'projectList/' + uid), data1)
                    resolve(data1)
                    //  data1[projectIndex].statusList[statusIndex].storyList
                
                }).catch(err => {
                    console.log(err);
                });
            // })
        }
        catch (e) {
            reject(e)
        }
    })
}