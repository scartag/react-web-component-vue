<template>
  <div id="app" class="mt-0"  style="height: 100vh;">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 p-5" style="background: #f0f0f0;">
          <div class="form-group mb-5">
            <label>Title / Message</label>
            <input type="text" class="form-control" v-model="message">
          </div>
          <div class="form-group mb-5">
            <label>Background Color</label>
            <select class="form-control" v-model="selectedColor">
              <option v-for="(item,index) in colors" :key="index" :value="item.value">{{item.label}}</option>
            </select>
          </div>

        </div>
        <div class="col-md-9">
          <direflow-setup :color="selectedColor" :msg="message"></direflow-setup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      selectedColor: 'transparent',
      message: 'We can do all we want',
      colors:  [{value: 'transparent', label:'Transparent'}, {value: 'blue', label: 'Blue'}, {value: 'yellow', label: 'Yellow'}, {value: 'pink', label: 'Pink'}]
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
