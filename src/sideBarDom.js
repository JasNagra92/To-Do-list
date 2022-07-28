function populateSidebar(prjObj){
    const sideBar = document.getElementById('sidebar');
    const prjdiv = document.createElement('div');
    prjdiv.classList.add('prjdiv')
    const prj = document.createElement('h4');
    console.log(prjObj)
    prj.innerHTML = prjObj["title"];
    prj.id = prjObj["title"]
    sideBar.appendChild(prjdiv);
    prjdiv.appendChild(prj)
}
export {populateSidebar}