var responses = ["Yes", "No", "No U", "Probably", "Probably Not", "Never", "Always", "Ur Mom", "No Response", "Defintely", "On God", "Perhaps", "Maybe", "Defintely Not", "Roll Again", "Why?", "Try Again", "Most Likely Not", "Consult The Library Of Babel", "Reply Is Hazy, Try Again", "Concentrate And Ask Again", "It Is Certain", "Signs Point To Yes", "My Sources Say No", "By All Means", "Absolutely", "Of Course", "Negative", "Positive", "Yes, But Soon No", "No, But Soon Yes", "Don't Count On It", "Very Doubtful", "Not At All", "Your Answer Is Certain", "Your Answer Is Not Certain", "On God?"];
var responsesf = ["Yes", "No", "Probably", "Probably Not", "Never", "Always", "No Response", "Defintely", "Perhaps", "Maybe", "Defintely Not", "Roll Again", "Why?", "Try Again", "Most Likely Not", "Consult The Library Of Babel", "Reply Is Hazy, Try Again", "Concentrate And Ask Again", "It Is Certain", "Signs Point To Yes", "My Sources Say No", "By All Means", "Absolutely", "Of Course", "Negative", "Positive", "Yes, But Soon No", "No, But Soon Yes", "Don't Count On It", "Very Doubtful", "Not At All", "Your Answer Is Certain", "Your Answer Is Not Certain"];
const outer = document.getElementById("blackShell")
const inner = document.getElementById("whiteShell")
const eight = document.getElementById("eight")
function answer() {
    let n = Math.floor(Math.random() * responsesf.length);
    document.getElementById("responses").innerHTML = responsesf[n];
}

if(screen.width<1000){
outer.style.width = "70vw"
outer.style.height = "70vw"
inner.style.width = "50vw"
inner.style.height = "50vw"
eight.style.fontSize = "45vw"
}
