<script setup>
const props = defineProps({
  buttons: Array,
  indexSelected: Number,
  classes: Object, // { each, first, selected, unselected }; values - Array || String
  // first, selected, unselected are added to 'each' value
});
const emit = defineEmits(['selectButtonIndex']);

const clickToButton = (index) => {
  if (index !== props.indexSelected) {
    emit('selectButtonIndex', index);
  }
};

const seekClass = (index) => {
  const { each, first, selected, unselected } = props.classes;
  const cl = [];
  const addCl = (arrayOrString) => {
    if (typeof arrayOrString === 'string') {
      cl.push(arrayOrString);
    } else {
      cl.push(...arrayOrString);
    }
  };
  if (each) addCl(each);
  if (index === props.indexSelected) {
    if (selected) addCl(selected);
  } else if (unselected) addCl(unselected);
  if (first && !index) addCl(first);
  return cl;
};
</script>

<template>
  <p
    v-for="(name, i) in props.buttons"
    :key="`radio-button-${i}`"
    @click="clickToButton(i)"
    :class="seekClass(i)"
    v-html="name"
  ></p>
</template>
