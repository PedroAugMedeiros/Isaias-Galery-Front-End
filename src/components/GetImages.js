import { storage } from '../config/firebaseConfig';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 as createId } from 'uuid';

export const getAll = async () => {
    let list = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }
}

export const uploadImage = async (file) => {
    let isError = true;
    if(file) {
       isError = false;
    }
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}${file.name}`);
        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);
        return { name: upload.ref.name, url: photoUrl, isError };
    } else {
        console.log('typeerror')
        return 'TypeFileError';
    }
}

export const deletePhoto = async (name) => {
    let photoRef = ref(storage, `images/${name}`);
    await deleteObject(photoRef);
}