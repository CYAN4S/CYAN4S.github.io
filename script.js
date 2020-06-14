
function* doAnimateP0h1() {
    let p0 = document.getElementById("p0h1");
    const p0st = "우리, <br>모두를 <br>위한 ";
    let status = 0;
    const p0s = ["_", " ", "_", " ", "_",
    "창_", "창조_", "창조", "창조_", "창조", "창조_", "창_",
    "_", " ", "_", " ", "_",
    "디_", "디자_", "디자인_", "디자인", "디자인_", "디자인", "디자인_", "디자_", "디_",
    "_", " ", "_", " ", "_",
    "코_","코드_","코드","코드_","코드","코드_","코_"];
    while (true) {
        status = (status + 1) % p0s.length;
        p0.innerHTML = p0st + p0s[status];
        yield;
    }
}

let p0iter = doAnimateP0h1();
let aniP0h1 = setInterval(() => p0iter.next(), 500);