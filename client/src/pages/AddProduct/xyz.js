

variation ={
    "set-bookset_notebookset": {
        "stream-pcm":{
            "opt-music": {

            },
            "opt-english": {

            },
        },
        "stream-pcb":{

        },
        "stream-commerce":{

        },
    },
    "set-notebookset": {

    }

}

const findallkeys = (obj) => {
    let keys = [];
    // for (let key in obj) {
    //     keys.push(key);
    //     if (typeof obj[key] === 'object') {
    //         let subkeys = findallkeys(obj[key]);
    //         keys = keys.concat(subkeys.map((subkey) => key + '-' + subkey));
    //     }
    // }

    for (let key in obj) {
        keys.push(key.split('-')[1]);
        
    }
    // set of keys
    return  new Set(keys);
}

console.log(findallkeys(variation['set-bookset_notebookset'])); 
