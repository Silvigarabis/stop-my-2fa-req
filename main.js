const github = document.getElementById("githubtotpcode");
const npm = document.getElementById("npmtotpcode");
const updatetime = document.getElementById("updatetime");
const nowtime = document.getElementById("nowtime");
const lesstime = document.getElementById("lesstime");

const totp = new jsOTP.totp();
setInterval(update, 1000);
function update(){
    github.value = totp.getOtp("N7HWYVAPG6YBVYKN");
    npm.value = totp.getOtp("LBPIOLZH5HZ2GEEOTI3EH4LDXLH7N2HR");
    nextUpdateTime();
}
update();
function nextUpdateTime(){
    let now = Date.now();
    let time = Math.floor( ( now / 1000 + 30 ) / 30 ) * 30000;
    updatetime.value = getFullTimeString(new Date(time));
    nowtime.value = getFullTimeString();
    lesstime.value = ((time - now) / 1000).toFixed(0);
}
function getTimeString(now = new Date()) {
    
    let H = String(now.getHours());
    let M = String(now.getMinutes());
    let S = String(now.getSeconds());
    let MS = String(now.getMilliseconds());
    
    let sH = "00" + H;
    sH = sH.slice(sH.length - 2);
    
    let sM = "00" + M;
    sM = sM.slice(sM.length - 2);
    
    let sS = "00" + S;
    sS = sS.slice(sS.length - 2);
    
    let sMS = MS + "000";
    sMS = sMS.slice(0,3);
    
    let str = sH
       + ":" + sM
       + ":" + sS
       + "." + sMS;
    
    return str;
}

function getFullTimeString(now = new Date()) {
    
    let y = String(now.getFullYear());
    let m = String(now.getMonth()+1);
    let d = String(now.getDate()+1);
    let H = String(now.getHours());
    let M = String(now.getMinutes());
    let S = String(now.getSeconds());
    let MS = String(now.getMilliseconds());
    
    let sy = y;
    
    let sm = "00" + m
    sm = sm.slice(sm.length - 2);
    
    let sd = "00" + d;
    sd = sd.slice(sd.length - 2);
    
    let sH = "00" + H;
    sH = sH.slice(sH.length - 2);
    
    let sM = "00" + M;
    sM = sM.slice(sM.length - 2);
    
    let sS = "00" + S;
    sS = sS.slice(sS.length - 2);
    
    let sMS = MS + "000";
    sMS = sMS.slice(0,3);
    
    let str = `${sy}-${sm}-${sd} ${sH}:${sM}:${sS}.${sMS}`;
    
       
    return str;
}

