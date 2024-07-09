export default function getChildrenRefs(component, ref) {
  let method = {};
  for (let key in component.methods) {
    method[key] = new Function(
      `return this.$refs.${ref}.${key}.apply(this,arguments)`
    );
  }
  return method;
}
