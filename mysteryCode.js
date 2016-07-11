module.exports = function (N) {
    N = parseInt(N);
    if (N > 65 || N < 1) {
        throw new Error('Input constaints error, Should be: 1 <= N <= 65');
    }
    if (isNaN(N)) {
        throw new Error('Not a number');
    }
    var max = Math.pow(2, N) - N;
    for (var i = 0; i < N; i++) {
        let num = max + i;
        let code = num ^ (num >>> 1);
        if (code < 0) {
            code = code >>> 0;
        }
        console.log(ConvertBase(code).from(10).to(2));
    }
};

var ConvertBase = function (num) {
    return {
        from: function (baseFrom) {
            return {
                to: function (baseTo) {
                    return parseInt(num, baseFrom).toString(baseTo);
                }
            };
        }
    };
};

