<template>
	<div>
		<create v-bind:ruleForm="info"></create>
	</div>
</template>

<script>
	import create from './create';
	export default {
    name: 'add',
    components: {create},
    data() {
      return {
      		info: {
      			name: '',
		          applytype: 0,
		          // tec: 'wifi',
		          explain: '',
		          type: 1
      		}
      }
    }
  }

</script>