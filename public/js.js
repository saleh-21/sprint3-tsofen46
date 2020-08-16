const root = document.getElementById('root');

fetch('/start')
    .then(res => res.json())
    .then(data => {
        render(data.array)
    });

function handleSubmit(event) {

    event.preventDefault()
    let menu = document.getElementById('menu');
    let choise = menu.options[menu.selectedIndex].value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // console.log(startDate)
    // console.log(endDate)
    
    fetch('/getModification', {
        method: 'POST',
        body: JSON.stringify({ choise: choise, startDate: startDate, endDate:endDate }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            render(data)
        })
}



function render(data) {
    let str = ''
  
    data.forEach(element => {
        console.log(element)
        console.log(element.jiraItem.jiraId)
        console.log("!@!@ !@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@@!@!@@!@!@!")
        str += `
        <div id='jiraID'>${element.jiraItem.jiraId}</div>
        <div id='jiraName'>${element.jiraItem.jiraName}</div>
        <div id='fieldName'>${element.diffItem.updatedFields[0].fieldName}</div>
        <div id='oldValue'>${element.diffItem.updatedFields[0].oldValue}</div>
        <div id='newValue'>${element.diffItem.updatedFields[0].newValue}</div>
        `
    });

    root.innerHTML = str;

}