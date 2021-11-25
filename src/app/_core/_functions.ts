

export async function fileListToBase64(fileList:any) {
    // create function which return resolved promise
    // with data:base64 string
    function getBase64(file:any) {
      const reader = new FileReader()
      return new Promise(resolve => {
        reader.onload = ev => {
          resolve({file:ev.target!.result, nome: file.name, tipo: file.type})
        }
        reader.readAsDataURL(file)
      })
    }
    // here will be array of promisified functions
    const promises = []
  
    // loop through fileList with for loop
    for (let i = 0; i < fileList.length; i++) {
      promises.push(getBase64(fileList[i]))
    }
  
    // array with base64 strings
    return await Promise.all(promises)
  }
  
  export function base64ListToFile(base64List:any) {
    // create function which return resolved promise
    // with data:base64 string
    function getFile(dataURI:string) {
              // convert base64/URLEncoded data component to raw binary data held in a string
              var byteString;
              if (dataURI.split(',')[0].indexOf('base64') >= 0)
                  byteString = atob(dataURI.split(',')[1]);
              else
                  byteString = unescape(dataURI.split(',')[1]);
  
              // separate out the mime component
              var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  
              // write the bytes of the string to a typed array
              var ia = new Uint8Array(byteString.length);
              for (var i = 0; i < byteString.length; i++) {
                  ia[i] = byteString.charCodeAt(i);
              }
  
              return new Blob([ia], {type:mimeString});
    }
    // here will be array of promisified functions
    const files = []
  
    // loop through fileList with for loop
    for (let i = 0; i < base64List.length; i++) {
      files.push(new File([getFile(base64List[i].file)], base64List[i].nome, {type: base64List[i].tipo}))
    }
  
    // array with base64 strings
    return files;
  }


  export function b64toBlob(b64Data:string, contentType=''){
    var byteString = atob(b64Data.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: contentType });
  }