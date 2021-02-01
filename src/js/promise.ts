/*
 * @author: huqizhi
 */

//  1
const create = new Promise((resolve,reject)=>{
    resolve(1)
    reject(2)
})

// 2
const pro = (key:Number) => {
    return new Promise((resolve)=>{
        resolve(1)
    })
}

// 3
