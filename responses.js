const responsesYes = ["Yes","Probably","Always","Defintely","Perhaps", "Maybe","It Is Certain", "Signs Point To Yes","By All Means", "Absolutely", "Of Course","Positive","No, But Soon Yes","Your Answer Is Certain","Affirmative","Indeed","Without A Doubt", "It Is Decidedly So", "You May Rely On It", "As I See It, Yes", "Most Likely","My Reply Is Yes","The Spirits Say Yes","Possibly In The Future", "Surely", "Naturally", "Obviously","Clearly"];
const responsesNo = ["No","Probably Not","Never","Defintely Not","Most Likely Not","My Sources Say No","Negative","Yes, But Soon No","Don't Count On It", "Very Doubtful", "Not At All","Your Answer Is Not Certain","Of Course Not", "Absolutely Not", "Under No Circumstances","Outlook Not So Good","My Reply Is No","The Spirits Say No","Not Ever"];
const responsesUnknown = ["No Response","Roll Again", "Why?", "Try Again","Consult The Library Of Babel", "Reply Is Hazy, Try Again", "Concentrate And Ask Again","Are You Sure?","Better Not Tell You Now", "Cannot Predict Now","...","Prediction Is Foggy", "Try Thinking It Over","Better If You Did Not Know", "Consult The Spirits", "Avoid That Question"];
const outer = document.getElementById("blackShell");
const inner = document.getElementById("whiteShell");
const eight = document.getElementById("eight");

function answer(){
    let n = Math.floor(Math.random()*7);
    let z = 0;
    switch(n){
        case 0:
            z = Math.floor(Math.random()*(responsesUnknown.length));
            document.getElementById("responses").innerHTML = responsesUnknown[z];
            break;
            case 1:
            z = Math.floor(Math.random()*(responsesYes.length));
            document.getElementById("responses").innerHTML = responsesYes[z];
            break;
            case 2:
            z = Math.floor(Math.random()*(responsesYes.length));
            document.getElementById("responses").innerHTML = responsesYes[z];
            break;
            case 3:
            z = Math.floor(Math.random()*(responsesYes.length));
            document.getElementById("responses").innerHTML = responsesYes[z];
            break;
            case 4:
            z = Math.floor(Math.random()*(responsesNo.length));
            document.getElementById("responses").innerHTML = responsesNo[z];
            break;
            case 5:
            z = Math.floor(Math.random()*(responsesNo.length));
            document.getElementById("responses").innerHTML = responsesNo[z];
            break;
            case 6:
            z = Math.floor(Math.random()*(responsesNo.length));
            document.getElementById("responses").innerHTML = responsesNo[z];
            break;
    }
    
}
var w = screen.width;
if (w < 1000) {
    outer.style.width = "70vw";
    outer.style.height = "70vw";
    inner.style.width = "50vw";
    inner.style.height = "50vw";
    eight.style.fontSize = "45vw";
}
window.addEventListener("resize", detects);

function detects() {
    let w = screen.width;
    let h = screen.height;
    if (w > h) {
        outer.style.width = "37vw";
        outer.style.height = "37vw";
        inner.style.width = "26vw";
        inner.style.height = "26vw";
        eight.style.fontSize = "26vw";
    } else if (w < h) {
        outer.style.width = "70vw";
        outer.style.height = "70vw";
        inner.style.width = "50vw";
        inner.style.height = "50vw";
        eight.style.fontSize = "45vw";
    }
}
