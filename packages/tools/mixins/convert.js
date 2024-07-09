export default {
    props: {
        valueName: String,
        labelName: String,
        disabledName: [String, Function],
        childrenName: String,
        isLeafName: String,
        pathName: String
    },
    computed: {
        defaultProp() {
            const { valueName, labelName, childrenName, disabledName, isLeafName, pathName } = this;
            const { value, label, children, disabled, isLeaf, path, ...other } = this.props || {};
            return {
                ...other,
                value: valueName || value || 'value',
                label: labelName || label || 'label',
                disabled: disabledName || disabled || 'disabled',
                children: childrenName || children || 'children',
                isLeaf: isLeafName || isLeaf || 'isLeaf',
                path: pathName || path || 'path',
            };
        }
    }
};
