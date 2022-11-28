
const SpeedDetector =require ('prompt-user');
const prompt =SpeedDetector();
function speedMonitor(){
    let speed =prompt('speed:');
    if (speed <=70){
     console.log('ok');
    }
      else if (speed >70 && speed <=130){
        let demeritPoint =(speed -70)/5;
        console.log (`points:$demeritpoint`);
   
      }else {
        console.log("license suspended")
    }
}
speedMonitor();

   