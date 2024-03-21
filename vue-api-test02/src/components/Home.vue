<script setup>
import axios from 'axios';
import jobs from '../assets/job.json';

axios.get(jobs)
  .then(response => {
    const jobs = response.data
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
</script>

<template>
<div id="app" class="container ms-5">
  <!-- Container -->
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-3 pt-5" v-for="job in jobs" :key="job.id">
        <div class="card shadow" style="width: 18rem;">
          <div class="card-body" style="height: 300px; overflow: hidden;">
            <h5 class="card-title">{{  job.title }}</h5>
            <h6>{{ job.createdBy }}</h6>
            <p class="card-text" v-html="job.description.txt"></p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
          <div class="card-footer">
            <button class="btn-primary btn btn-sm">Go Detail</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped></style>