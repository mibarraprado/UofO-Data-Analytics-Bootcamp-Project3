/**
 *TODO: Figure out how to communicate with flask server from this js file. https request sbaby
 *TODO: Probably has to send http request back 
 *TODO: and it will pick it up but ive yet to do such a thing in python
 *TODO: lol lets go chef gang brrrr 
 *TODO:
 *TODO:
 *TODO:
 *TODO:


 */

const handleVote = (str)=>{
    voteCast(str)
    showVotingTotals()
}

const voteCast = (str) => {
    fetch("localhost:5000/chefkiss/vote", {
        method: 'POST', // Specify the request method
        headers: {
          'Content-Type': 'application/json' // Set the content type of the request body
        },
        body: JSON.stringify(str) // Attach the JSON data as the request body
      })
}

const showVotingTotals = () => {
    fetch("localhost:5000/chefkiss/voteTot")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // make a chart with data
        //add chart to html 
    })
}