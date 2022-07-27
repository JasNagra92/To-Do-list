function createVariable(variable){
    let obj = variable
}

function prjtodocombiner (prjobj,todo){
    prjobj[`${todo.title}`] = todo
}
export {prjtodocombiner}