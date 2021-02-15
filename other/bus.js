const eventBus = {
  callBacks:{}
};

eventBus.on = function(type,callback){
  var _self = this;
  let callBacks = _self.callBacks;
  if(callBacks.type){
    callBacks[type].push(callback)
  }else{
    callBacks[type] = [callback]
  }
}

eventBus.emit = function(type,data){
  var _self = this;
  let callBacks = _self.callBacks;

  if(callBacks[type]&&callBacks[type].length > 0){
    callBacks[type].forEach(item => item(data))
  }else{
    throw new error('请先绑定该事件！')
  }
}

eventBus.off = function(type){
  var _self = this;
  let callBacks = _self.callBacks;
  //如果不传，删除全部
  if(type){
    delete callBacks[type]
  }else{
    this.callBacks = {}
  }
}



eventBus.on('lol',()=>console.log('lol'))
eventBus.emit('lol')
eventBus.off()
eventBus.emit('lol')

