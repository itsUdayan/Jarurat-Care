let progressValue = 0;
const maxValue = 150;
const valueDisplay = document.getElementById("value");
valueDisplay.textContent = 0;
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const progress = document.getElementById("progress-bar");

function updateBar(){
    if(progressValue<0){
        progressValue = 0;
    }else if(progressValue>maxValue){
        progressValue = maxValue;
    }

    const progressPercentage = (progressValue/maxValue)*100;

    progress.style.width = progressPercentage + '%';
    valueDisplay.textContent = progressValue;

}

addBtn.addEventListener('click',()=>{
    progressValue+=1;
    updateBar();
});

subBtn.addEventListener('click',()=>{
    progressValue-=1;
    updateBar();
});