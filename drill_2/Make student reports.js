function makeStudentsReport(data) {
    // your code here
    let ans = []
    for (let key in data) {
        ans.push(`${data[key].name}: ${data[key].grade}`);
    }
    return ans;
}