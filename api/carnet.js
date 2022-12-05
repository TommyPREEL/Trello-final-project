import { uuidv4 } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function ajoutCarnet(uid, nomCarnet) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `albums/${uid}`)).then((snapshot) => {
                const data = snapshot.val() ?? [];
                data.push({ id: uuidv4(), nom: nomCarnet, photos: [] })
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
        }
        catch (e) {
            reject(e)
        }
    })
}
export function getAllCarnets(uid) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database, 'albums/' + uid);
            console.log(reference);
            onValue(reference, (snapshot) => {
                const data = snapshot.val();
                resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}

export function deleteCarnet(uid, idCarnet) {
    return new Promise((resolve, reject) => {
        try {
            const reference = ref(database);
            get(child(reference, `albums/${uid}`)).then((snapshot) => {
                const data = snapshot.val();
                const num = data.findIndex((elem) => elem.id === idCarnet)
                data.splice(num, 1)
                set(ref(database, 'albums/' + uid), data);
                resolve(data)
            });
        }
        catch (e) {
            reject(e)
        }
    })
}