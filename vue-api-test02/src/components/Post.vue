<template>
    <div class="container">
        <form @submit.prevent="createPost">
            <div class="row mt-4">
                <div class="col-4">
                    <div class="mb-3">
                        <label class="form-label">ID</label>
                        <input type="text" class="form-control" v-model="postData.id"> 
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Job Poisiton</label>
                        <input type="text" class="form-control" v-model="postData.title"> 
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Corporate</label>
                        <input type="text" class="form-control" v-model="postData.createdBy">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea name="" class="form-control" id="" cols="30" rows="10" v-model="postData.description"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import jobs from '../assets/job.json';

export default {
    data(){
        return {
            postData: {
                id: '',
                title: '',
                createdBy: '',
                description: ''
            }
        }
    },
    methods: {
        createPost(postData){
            axios
                .post(jobs, {
                    data: qs.stringify(this.postData)
                })
                .then(response => {
                    console.log(response)
                });
        }
    }
}
</script>