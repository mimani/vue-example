<template>
	<div>
      <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title"
            data-content="And here's some amazing content. It's very engaging. Right?">
                  Click to toggle popover
      </button>

	</div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      data_from_pg: null
    }
  },
  mounted () {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
  }
}
</script>
