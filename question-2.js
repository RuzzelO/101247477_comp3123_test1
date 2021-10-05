const resolvedPromise = () =>{
    setTimeout(() =>{
        let success = {'message': 'delayed success!'}
        console.log(success);
    },500)
}

const rejectedPromise = () => {
    setTimeout(() => {
        try{
            throw new Error('error: delayed exception!');
        } catch (e){
            console.log(e)
        }
    }, 5000)
}

resolvedPromise()
resolvedPromise()