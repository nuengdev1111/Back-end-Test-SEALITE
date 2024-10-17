function convertAlienNumerals(s) {
    const values = { A: 1, B: 5, Z: 10, L: 50, C: 100, D: 500, R: 1000 };
    let total = 0;
    let i = 0;

    while (i < s.length) {
        const current = values[s[i]];
        const next = values[s[i + 1]];

        if (next && current < next) {
            total += (next - current);
            i += 2;
        } else {
            total += current;
            i += 1;
        }
    }

    return total;
}

function showResult() {
    const input = document.getElementById('alienInput').value;
    const result = convertAlienNumerals(input);
    document.getElementById('result').innerText = `ผลลัพธ์: ${result}`;
}
