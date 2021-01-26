export function emailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export function getDattaFromDoc(doc){
    const data=doc.data()
    data.id=doc.id
    return data
}
export function getDataFromDocs(docs){
  return  docs.map(getDattaFromDoc)
    }
    