function minimalVaqt(vazifalar, cooldown) {
    vazifalar.sort((a, b) => a - b);
    let minimalVaqt = vazifalar[0];
    let so'nggiBajarilgan = vazifalar[0];
    for (let i = 1; i < vazifalar.length; i++) {
        if (vazifalar[i] - so'nggiBajarilgan > cooldown) {
            minimalVaqt += vazifalar[i] - so'nggiBajarilgan;
            so'nggiBajarilgan = vazifalar[i];
        }
    }
    return minimalVaqt;
}

// Test qilish
let vazifalar = [1, 2, 3, 4, 5];
let cooldown = 2;
console.log(minimalVaqt(vazifalar, cooldown));
```

```javascript
function minimalVaqt(vazifalar, cooldown) {
    let n = vazifalar.length;
    let dp = new Array(n).fill(0);
    dp[0] = vazifalar[0];
    for (let i = 1; i < n; i++) {
        if (i - cooldown - 1 >= 0) {
            dp[i] = Math.max(dp[i - cooldown - 1] + vazifalar[i], dp[i - 1]);
        } else {
            dp[i] = vazifalar[i];
        }
    }
    return dp[n - 1];
}

// Test qilish
let vazifalar = [1, 2, 3, 4, 5];
let cooldown = 2;
console.log(minimalVaqt(vazifalar, cooldown));
