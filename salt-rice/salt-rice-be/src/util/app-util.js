let removeDuplicatePosts = (inpArr) => 
{
    // 67776yhn inpArr.filter()
}

let getTagArrayFromJSON = (inpJSON) => {
    let outputArr = [];

    inpJSON.map((item) => {
        /* let itemArr = [];
        itemArr.push(item.tagName);
        outputArr.push(itemArr); */
        outputArr.push(item.tagName);
    }) 

    console.log(outputArr);

    return outputArr;
}

let getTagValuesFromJSON = (inpJSON) => {
    let outputArr = [];

    inpJSON.map((item) => {
        outputArr.push("('"+item.tagName+"')");
    }) 

    var token = outputArr.join(',')
    console.log(token);

    return token;
}

export {
    getTagArrayFromJSON, getTagValuesFromJSON
}