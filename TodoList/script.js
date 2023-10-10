const milestoneDatas = JSON.parse(data).data;

function loadMilestones(){
    const milestones = document.querySelector(`.milestones`);

    milestones.innerHTML = `${milestoneDatas.map((milestone) => {
        return (
            `<div class="milestone id="${milestone._id}" border-b">
                <div class="flex">
                <div class="checkbox"><input type="checkbox" onclick="cheked(this, ${milestone._id})" /></div>
                <div onclick="openMilestones(this, ${milestone._id})">
                    <p>
                    ${milestone.name}
                    <span><i class="fas fa-chevron-down"></i></span>
                    </p>
                </div>
                </div>
                <div class="hidden_panel">
                    ${milestone.modules.map((module)=>{
                        return (
                            `<div class="module border-b">
                                <p>${module.name}</p>
                            </div>`
                        )
                    }).join(``)}
                </div>
            </div>`
        )
    }).join(``)}`
}


function openMilestones(element, id){

    const currentPanel = element.parentNode.nextElementSibling;
    const showedPanel = document.querySelector(`.show`);
    const active = document.querySelector(`.active`);

    if(active && !element.classList.contains(`active`)){
        element.classList.remove(`active`);
    }
    element.classList.toggle(`active`);

    if(!currentPanel.classList.contains(`show`) && showedPanel){
        showedPanel.classList.remove(`show`);
    }

    // toggle: will delete if alredy have, or will add if don't have:
    currentPanel.classList.toggle(`show`);

    // currentPanel.classList.add(`show`);
    // currentPanel.classList.remove(`show`);

    showMilestoneImage(id);
}

function showMilestoneImage(id) {
    const milestoneImage = document.querySelector(`.milestoneImage`);
    const title = document.querySelector(`.title`);
    const details = document.querySelector(`.details`);
    
    title.innerText = milestoneDatas[id].name;
    details.innerText = milestoneDatas[id].description;

    milestoneImage.src = milestoneDatas[id].image;
    milestoneImage.style.opacity = "0";
}

const milestoneImage = document.querySelector(`.milestoneImage`);
milestoneImage.addEventListener(`load`, function(){
    this.style.opacity = "1";
})


function cheked(checkbox, id){

    const doneList = document.querySelector(`.doneList`);
    const milestones = document.querySelector(`.milestones`);
    const item = document.getElementById(id);
    console.log(id);

    if(checkbox.checked){
        milestones.removeChild(item);
        doneList.appendChild(item)
    } else {
        milestones.appendChild(item);
        doneList.removeChild(item)
    }
}


loadMilestones();