var responses = ["Yes", "No", "No U", "Probably", "Probably Not", "Never", "Always", "Ur Mom", "No Response", "Defintely", "On God", "Perhaps", "Maybe", "Defintely Not", "Roll Again", "Why?", "Try Again", "Most Likely Not", "Consult The Library Of Babel", "Reply Is Hazy, Try Again", "Concentrate And Ask Again", "It Is Certain", "Signs Point To Yes", "My Sources Say No", "By All Means", "Absolutely", "Of Course", "Negative", "Positive", "Yes, But Soon No", "No, But Soon Yes", "Don't Count On It", "Very Doubtful", "Not At All", "Your Answer Is Certain", "Your Answer Is Not Certain", "On God?"];
var responsesf = ["Yes", "No", "Probably", "Probably Not", "Never", "Always", "No Response", "Defintely", "Perhaps", "Maybe", "Defintely Not", "Roll Again", "Why?", "Try Again", "Most Likely Not", "Consult The Library Of Babel", "Reply Is Hazy, Try Again", "Concentrate And Ask Again", "It Is Certain", "Signs Point To Yes", "My Sources Say No", "By All Means", "Absolutely", "Of Course", "Negative", "Positive", "Yes, But Soon No", "No, But Soon Yes", "Don't Count On It", "Very Doubtful", "Not At All", "Your Answer Is Certain", "Your Answer Is Not Certain", "Affirmative", "Of Course Not", "Absolutely Not", "Under No Circumstances", "Indeed", "Are You Sure?", "Without A Doubt", "It Is Decidedly So", "You May Rely On It", "As I See It, Yes", "Most Likely", "Better Not Tell You Now", "Cannot Predict Now", "Outlook Not SO Good", "My Reply Is Yes", "My Reply Is No", "...", "The Spirits Say Yes", "The Spirits Say No", "The Prediction Is Foggy", "Try Thinking It Over", "Possibly In The Future", "Better If You Did Not Know"];
const outer = document.getElementById("blackShell"); const inner = document.getElementById("whiteShell"); const eight = document.getElementById("eight");
function answer() {
let n = Math.floor(Math.random() * responsesf.length); document.getElementById("responses").innerHTML = responsesf[n];
}
var w = screen.width if (w < 1000) {
outer.style.width = "70vw"; outer.style.height = "70vw"; inner.style.width = "50vw"; inner.style.height = "50vw"; eight.style.fontSize = "45vw";
}
window.addEventListener("resize", detects);
function detects() {
let w = screen.width; let h = screen.height; if (w > h) {
outer.style.width = "37vw"; outer.style.height = "37vw"; inner.style.width = "26vw"; inner.style.height = "26vw";

 eight.style.fontSize = "26vw"; } else if (w < h) {
outer.style.width = "70vw"; outer.style.height = "70vw"; inner.style.width = "50vw"; inner.style.height = "50vw"; eight.style.fontSize = "45vw";
} }
 
