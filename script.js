let infolist = []


function showmeinfo() {
    
}
function addinfo() {
    let personalinfo = {}
    personalinfo.myfname =  document.getElementById('personsfname').value;
    personalinfo.mylname =  document.getElementById('personslname').value;
    personalinfo.myage =  document.getElementById('personsage').value;
    personalinfo.myemployer =  document.getElementById('personsempstatus').value;
    infolist.push(personalinfo);
    console.log(personalinfo);
    console.log(infolist);      
}
