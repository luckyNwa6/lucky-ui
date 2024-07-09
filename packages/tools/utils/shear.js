/*
 * @Author: lutz
 * @Date: 2019-06-05 17:05:32
 * @Last Modified by: lutz
 * @Last Modified time: 2019-12-06 08:58:43
 */

import _ from "lodash";

/**
 * 修改组件属性或对象的属性
 * 深度克隆
 * @param {Object} cpm
 * @param {Array|Object} hook 生命周期函数和组件属性；数组默认删除，对象默认替换（恒等undefined，默认删除）
 * @param {Array|Object} watch 监听属性的修改
 * @return {Object}
 */
export function complex(cpm, hook, watch) {
    let component = _.cloneDeep(cpm);

    if (hook) {
        if (_.isArray(hook)) {
            hook.forEach(item => {
                delete component[item];
            });
        } else if (_.isObject(hook)) {
            for (let key in hook) {
                if (hook[key] === void 0) {
                    delete component[key];
                } else {
                    component[key] = hook[key];
                }
            }
        }
    }

    if (watch) {
        if (_.isArray(watch) && component.watch) {
            watch.forEach(item => {
                delete component.watch[item];
            });
        } else if (_.isObject(watch)) {
            for (let key in watch) {
                if (watch[key] === void 0) {
                    delete component.watch[key];
                } else {
                    component.watch[key] = watch[key];
                }
            }
        }
    }

    return component;
}

/**
 * 删除对象上的属性
 * @param {object} obj 需要操作的对象
 * @param {array} filterArr 需要删除的属性名称
 *
 * @return {object}
 */
export function filterObj(obj = {}, filterArr = []) {
    const newObj = { ...obj };
    filterArr.forEach(item => {
        delete newObj[item];
    });
    return newObj;
}

/**
 * 替换对象上的属性
 * @param {object} obj 需要操作的对象
 * @param {object} filterObj 需要替换的属性名称，undefined则会删除对象上属性
 *
 * @return {object}
 */
export function replaceObj(obj = {}, filterObj = {}) {
    const newObj = { ...obj, ...filterObj };
    Object.keys(filterObj).forEach(item => {
        if (filterObj[item] === void 0) {
            delete newObj[item];
        }
    });
    return newObj;
}

/**
 * 根据参数操作对象
 * 浅拷贝
 * demo
 * a) 过滤undefined
 *  var obj = { input: void 0, change() { console.log('change') } }
 *  complexObj(obj, null, true) // { change: f }
 *  obj // { input: undefined, change: f }
 *
 * b) 删除属性
 *  var obj = { a: 2, b: 3 }, arr = ['a', 'c']
 *  complexObj(obj, arr) // { b: 3 }
 *  obj // {a: 2, b: 3}
 *
 * c) 替换属性
 *  var obj = { a: 2, b: 3 }, fobj = { a: void 0, c: 9, b: 4 }
 *  complexObj(obj, fobj) // { b: 4, c: 9 }
 *  obj // {a: 2, b: 3}
 *
 *
 * @param {object} obj 需要操作的对象
 * @param {array|object} filterVal 数组：需要删除的属性名称，对象：需要替换的属性名称，undefined则会删除对象上属性
 * @param {boolen} filterNull 是否过滤 undefined
 *
 * @return {object}
 */
export function complexObj(obj, filterVal, filterNull = false) {
    let newObj = { ...obj };

    if (_.isArray(filterVal)) {
        newObj = filterObj(obj, filterVal);
    } else if (_.isObject(filterVal)) {
        newObj = replaceObj(obj, filterVal);
    }

    // 过滤 undefined
    if (filterNull) {
        Object.keys(newObj).forEach(item => {
            if (newObj[item] === void 0) {
                delete newObj[item];
            }
        });
    }

    return newObj;
}

const hyphenateRE = /\B([A-Z])/g;

/**
 * 将驼峰转换成-隔开
 * hyphenate('ElTable') => "el-table"
 * @param {string} str
 * @return {string}
 */
export const hyphenate = str => str.replace(hyphenateRE, "-$1").toLowerCase();

/**
 * 获取指定组件的参数值
 * @param cmp 组件对象，如ElTable
 * @param instance  当前组件对象,调用时，传this
 * @param filterObject 过滤属性值，{name:"11",sex:(props,val)=>val,age:undefined} 属性undefined 删除属性
 */
export function getCmpProps(cmp, instance, filterObj = {}) {
    // 如果不是组件函数，则生成组件函数，主要是把混合的属性合并在一起
    if (!_.isFunction(cmp)) {
        cmp = instance.constructor.extend(cmp);
    }
    // 传入属性值+默认的值
    const propsData = {
        ...instance.$attrs,
        ...instance.$props
    };

    // 过滤属性值
    const cmpProps = {};
    _.forOwn(cmp.options.props, (value, key) => {
        let propValue = propsData[key] || propsData[hyphenate(key)];
        // 过滤组件属性
        if (filterObj.hasOwnProperty(key)) {
            propValue =
                _.isFunction(filterObj[key])
                    ? filterObj[key](propsData, propValue)
                    : filterObj[key];
        }

        // 过滤 undefined
        if (propValue !== undefined) {
            cmpProps[key] = propValue;
        }
    });

    return cmpProps;
}

/**
 * 获取组件的事件对象
 * @param instance
 * @param filterObj {click:"handleClick",change:(evt)=>val,input:undefined} 属性undefined 删除属性
 * @returns {*}
 */
export function getCmpEvents(instance, filterObj = {}) {
    let listeners = _.clone(instance.$listeners);
    _.forOwn(filterObj, function (val, key) {
        if (val && _.isString(val)) {
            listeners[key] = instance[val];
        } else if (val && _.isFunction(val)) {
            listeners[key] = val;
        } else if (val === undefined) {
            delete listeners[key];
        }
    });
    return listeners;
}

/**
 * 根据组件参数是，require、import获取组件的对象
 * @param type
 * @returns {type}
 */
export function getCmpType(type) {
    if (_.isObject(type) && type.default) {
        type = type.default;
    }
    if (type && type instanceof Promise) {
        let promise = type;
        type = (resolve, reject) => {
            promise.then(function (obj) {
                resolve(obj);
            });
        };
    }
    return type;
}

/**
 * 从$attrs获取匹配的属性
 * @param instance
 * @param reg
 */
export function getCmpPropsFromAttrs(instance, reg) {
    let attr = instance.$attrs;
    let obj = {};

    Object.keys(attr).map(item => {
        if (reg.test(item)) {
            obj[item.replace(reg, "")] = attr[item];
        }
    });

    return obj;
}
