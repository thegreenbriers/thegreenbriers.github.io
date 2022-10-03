<script>
function init() {
  Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQOfrkGIdWV80j1tXN6b5R8bPLTnKe8zIyhQ9cbpD6Msy5Wxs8djRHVXBMBlsF92Q/pubhtml?gid=374600002&single=true', {
  download: true,
  header: true,
  complete: function(results) {
    var data = results.data
    console.log(data)
  }
})
  window.addEventListener('DOMContentLoaded', init)

</script>