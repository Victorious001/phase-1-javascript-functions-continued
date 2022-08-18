// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(act = "go to the office") {
    return `This Monday, I will ${act}.`
}

function wrapAdjective(msg) {
    return function(adj) {
        return `You are ${msg}${adj}${msg}!`

    }
}
wrapAdjective("!")("a dedicated programmer")