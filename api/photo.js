import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";
import { getDownloadURL, getStorage, ref as refB, uploadBytes, } from "firebase/storage";

const database = getDatabase(app);
const storage = getStorage(app);

export function uploadFile(fich, nom) {
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
            xhr.open("GET", fich, true);
            xhr.send(null);
        }).then(blob => {
            // console.log(blob);
            const fileRef = refB(storage, nom);
            uploadBytes(fileRef, blob).then(snapshot => {
                // We're done with the blob, close and release it 
                blob.close();
                res(getDownloadURL(fileRef))
            })
        }).catch(err => rej(err.message))
    })
}

export function ajoutPhoto(uid, idCarnet, fichier) {
    return new Promise((resolve, reject) => {
        try {
            let spNomUri = fichier.split('/')
            let nom = spNomUri[spNomUri.length - 1]
            uploadFile(fichier, nom).then(url => {
                const reference = ref(database);
                get(child(reference, `albums/${uid}`)).then((snapshot) => {
                    const data = snapshot.val() ?? [];
                    const indexCarnet = data.findIndex(elem => elem.id === idCarnet)
                    if (indexCarnet == -1) reject({ message: "id non trouvé sur tableau photo" })
                    if (!data[indexCarnet].photos) data[indexCarnet].photos = []
                    data[indexCarnet].photos.push({ nom, url })
                    console.log(data);
                    set(ref(database, 'albums/' + uid), data);
                    resolve(data)
                }).catch(err => {
                    console.log(err);
                    // const data = []
                    // data.push({ id: uuidv4(), nom: nomCarnet, photos: [] })
                    // set(ref(database, 'albums/' + uid), data);
                    // resolve(data)
                });
            })
        }
        catch (e) {
            reject(e)
        }
    })
}
export function getAllPhotos(uid, idCarnet) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            console.log(reference);
            get(child(reference, `albums/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                console.log("coucou", idCarnet, data, uid, snapshot.val());
                const indexCarnet = data.findIndex(elem => elem.id === idCarnet)
                if (indexCarnet == -1) reject({ message: "id non trouvé sur tableau photo" })
                if (!data[indexCarnet].photos) data[indexCarnet].photos = []

                resolve(data[indexCarnet].photos)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}
