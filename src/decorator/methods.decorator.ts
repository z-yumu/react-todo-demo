
// 装饰器装饰函数，可以采用高阶函数的形式直接执行。
interface IFun{
    (target:Object,methodName:string,description:PropertyDescriptor):void
}

export function Get(address:string):IFun{
    return (target,methodName,desc)=>{
        // console.log(methodName,'methodName')
        // console.log(desc,'desc')
        const _origin = desc.value
        desc.value = function(txt:string){
            console.log(target,'target')
            txt = `${txt}4444444444444`
            _origin.call(this,txt)
        }
    }

}


