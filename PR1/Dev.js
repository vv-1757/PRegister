function DORAEMON(){
var DevM = navigator.userAgent;
var Device = document.getElementById("Doraemon_Device");
Device.value = `${DevM}`;
var EffectiveType = navigator.connection.effectiveType;
var EFT = document.getElementById("Doraemon_Type");
EFT.value = `${EffectiveType}`;
var NetworkType = navigator.connection.type;
var NT = document.getElementById("Doraemon_Network")
NT.value = `${NetworkType}`;
}

