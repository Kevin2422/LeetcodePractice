var insert = function(intervals, newInterval) {
    let size = intervals.length;
    let index = 0;
    let res = [];
    
    
    //  push all intervals that end before the start of the new interval since they 100% don't overlap with the new interval
    // stop at the first index with an end after the start
    while(index < size && intervals[index][1] < newInterval[0]) {
        res.push(intervals[index]);
        index++;
    }
    console.log(res)
    

    
    // loop stops when the it reaches an interval that starts after the end of the new interval
    // the new start interval is the min value (earliest start) of the intervals that overlap with the new interval (including the new interval)
    // the new end interval is the max value of the overlapping intervals (latest end)
    // then you push the new interval into the array
    // note that if there is no overlap, you skip this loop and just add the new interval unchanged

    while(index < size && intervals[index][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }
    res.push(newInterval);

    // push all the next non-overlapping intervals whose start times start after the end time of the new interval
    while(index < size) {
        res.push(intervals[index]);
        index++;
    }
    return res;
}

console.log(insert([[2,5],[6,9]],[3,8]))
