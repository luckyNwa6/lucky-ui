/*
 * @Author: lutz
 * @Date: 2019-06-24 11:16:27
 * @Last Modified by: lutz
 * @Last Modified time: 2019-07-01 15:15:41
 * @Last Modified by: lutz
 * @Last Modified time: 2021-04-28 11:30:43
 */

import _ from 'lodash';

/**
 * string to array
 * @param {any} val 需要处理的数据
 * @param {string} seq 字符串分隔符
 * @param {boolen} clone 是否深度拷贝
 * @param {array} dataSource 数据源
 * @param {string|number} dataSourceValueName 数据源需要匹配字段
 *
 * @return {array}
 */
export function str2arr(val, seq = ',', clone, dataSource = [], dataSourceValueName, isDataSourceChanged = false) {
    if (_.isNil(val) || val === '') {
        return [];
    }

    if (_.isArray(val)) {
        return clone ? _.cloneDeep(val) : val;
    }

    let data = val.toString().split(seq);

    // 数据源必须是数组 && 长度大于0 && 展示数据必须是数组
    if (_.isArray(dataSource) && dataSource.length && _.isArray(data)) {
        // 对象数组 或 数组的截取第一个数据判断数字类型
        if (
            (dataSourceValueName != null && _.isNumber(dataSource[0][dataSourceValueName])) ||
            (!dataSourceValueName && _.isNumber(dataSource[0]))
        ) {
            data = data.map(item => Number(item));
        }
    }

    if (isDataSourceChanged) {
        // huangjq 2020/07/24
        // 数据源改变后，有些原有的value不存在了，重新过滤
        const keys = [];
        dataSource.map(item=>keys.push(item[dataSourceValueName]));
        data = data.filter(item=>keys.indexOf(item) > -1);
    }

    return data;
}

/**
 * 将数据转换成指定数据类型
 * @param {*} val
 * @param {Array|String|Object} type 需要转换的类型
 * @param {String} seq 分隔符
 */
export function data2type(val, type, seq = ',', sort = true) {
    const bool = _[`is${type}`] && _[`is${type}`](val);

    if (bool) {
        return val;
    }

    // 为保证选项可选中，这里不能将数字转成字符串
    if (_.isNumber(val) && type === 'String') {
        return val;
    }

    if (_.isArray(val) && type === 'String') {
        return sort ? val.sort().join(seq) : val.join(seq);
    }

    if (_.isString(val) && type === 'Array') {
        return val.split(seq);
    }

    const map = {
        String: '',
        Array: [],
        Object: {}
    };

    return map[type];
}

/**
 * 两个数组合并成不重复的数组
 * @param {Array} exp
 * @param {Array} val
 */
export function uniqArr(exp, val) {
    if (_.isArray(exp) && _.isArray(val)) {
        return _.union(exp, val);
    }

    return [];
}
