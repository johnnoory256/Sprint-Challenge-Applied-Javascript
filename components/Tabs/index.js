// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicEl = document.querySelector(".topics");

axios.get(" https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    return response.data;
}) 
.then(response2 => {
    response2.topics.forEach(data => {
        topicEl.appendChild(tab(data))
    })
})

tab = (obj => {
    const divEl = document.createElement("div");

    divEl.classList.add("tab");

    divEl.textContent = obj;

    return divEl;
})