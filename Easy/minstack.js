var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min = val; 
    if(this.stack.length > 0)
      min = Math.min(this.stack[this.stack.length - 1].min, val);
      
    this.stack.push({ 'val': val, 'min': min});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {    
    return (this.stack.pop()).val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */