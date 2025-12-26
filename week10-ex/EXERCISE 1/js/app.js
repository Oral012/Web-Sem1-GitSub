    let container1 = document.getElementById("container1");
    let container2 = document.getElementById("container2");
    let container3 = document.getElementById("container3");
    //  1- Move the item 3 to the second container
    // YOUR CODE !!
    container2.appendChild(container1.lastElementChild);
    //  2- Remove item 4
    // YOUR CODE !!
    container2.firstElementChild.remove();
    
    // 3- Create a new item 10 and add it to container 3
    // YOUR CODE !!
    let ten = document.createElement("div");
    ten.className = "item";
    ten.textContent = "10";
    container3.appendChild(ten);

    //  4- Set all items located in a blue container to red
    // YOUR CODE !!
    let items = document.querySelectorAll(".containerBlue .item");
    items.forEach(item => item.style.backgroundColor = "red");