// 아이폰, 아이패드, 에어팟, 노트북, 워치 5개를 준비
// 300은 1개, 500원은 2개
//
function changes(coin, choice) {
    return coin - choice;
}
function game(coin, choice) {
    let item = {
        1: "iphone",
        2: "ipad",
        3: "airpot",
        4: "notebook",
        5: "watch",
    };
    let rand1 = Math.floor(Math.random() * 5) + 1;
    let rand2 = Math.floor(Math.random() * 5) + 1;

    let a = item[rand1];
    let b = item[rand2];
    let change = changes(coin, choice);

    if (coin >= choice && choice === 300) return console.log(`잔돈 : ${change}, 상품 : ${a}`);
    if (coin >= choice && choice === 500)
        return console.log(`잔돈 : ${change}, 상품1 : ${a}, 상품2 : ${b}`);
    if (coin < 300) return console.log("돈없어 임마");
}
game(1500, 500);
