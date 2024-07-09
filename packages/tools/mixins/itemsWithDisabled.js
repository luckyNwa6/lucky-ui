/*
@author lutz
@updateDate 2019-06-18
@describe
    props
        data {array} 组件数据源,透传到 $data.dataSource
        disabled-value {array|string} 禁用项
        seq {string} 分隔符（命名参考: https://nodejs.org/dist/latest-v10.x/docs/api/querystring.html）
        output-format {string} enum["String", "Array"]
    data
        dataSource {array} 数据源
    computed
        itemsWithDisabled @return {array<object>} 添加禁用状态到数据源
    watch
        data => dataSource 兼容组件 $props.data 对 $data.dataSource 值变化
*/

import _ from 'lodash';
import convert from './convert.js';
import { str2arr } from '../utils/data-convert.js';
export default {
    mixins: [convert],
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        disabledValue: {
            type: [String, Array],
            default() {
                return [];
            }
        },
        seq: { type: String, default: ',' },
        outputFormat: {
            type: String,
            default: 'String',
            validator: function(val) {
                return ['String', 'Array'].indexOf(val) !== -1;
            }
        }
    },
    watch: {
        data(val) {
            this.dataSource = val;
        },
        // dataSource 触发 data改变的方法
        dataSource(val) {
            this.$emit('change-data', val);
        }
    },
    data() {
        return { dataSource: this.data };
    },
    computed: {
        itemsWithDisabled() {
            const { dataSource, disabledValue, seq, defaultProp } = this;
            const disabledArr = str2arr(disabledValue, seq, true, dataSource, defaultProp.value);
            if (disabledArr.length < 1) {
                return dataSource;
            }
            // 深度拷贝,避免污染数据源($data)
            let data = _.cloneDeep(dataSource);
            data.forEach(item => {
                const isInclude = _.includes(disabledArr, item[defaultProp.value]);
                // 这里if中的布尔值要分开写否则会报错
                if (isInclude) {
                    item[defaultProp.disabled] = true;
                }
            });
            return data;
        }
    }
};
