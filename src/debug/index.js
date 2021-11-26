var a = 'Hellou'

function hello() {
    let b = 'Hellou World'
    const c = 'Hellou World'
    if (true) {
        let d = 'Hellou World'
        debugger
    }
}

hello();

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);