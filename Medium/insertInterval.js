var insert = function(intervals, newInterval) {
    let size = intervals.length;
    let index = 0;
    let res = [];
    
    // iterate thorugh intervals and if the end interval at the index is less than the start of the index (no overlap), push the interval at index
    // stop when end interval is greater than the start of the new interval
    while(index < size && intervals[index][1] < newInterval[0]) {
        res.push(intervals[index]);
        index++;
    }
    console.log(res)
    

    // while start inverval is less than the end of the new interval ( ie )
    while(index < size && intervals[index][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }
    res.push(newInterval);
    while(index < size) {
        res.push(intervals[index]);
        index++;
    }
    return res;
}

console.log(insert([[2,5],[6,9]],[3,8]))
