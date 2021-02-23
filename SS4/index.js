getOnceDocument();
function getOnceDocument() {
    const docId='vV4SHBzb76ztYKnLWD0u'
    firebase.firestore().collection('users').doc(docId).get().then((res) => {
        console.log(res)  
    })
    
}
