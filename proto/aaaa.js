实现 hasProperty(o, 'x.y.z') 方法，可以判断 o.x.y.z 路径是否存在

const  o = {
    x: {

            y: {

                z : 0

            }

    }

}

hasProperty(o, 'x.y.z') // true
hasProperty(o, 'x.y.w') // false