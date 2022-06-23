<script>
import Header from '../Child/Header.vue'
import Sidebar from '../Child/Sidebar.vue'
import Footer from '../Child/Footer.vue'
export default{
    name:'EditLeacture',
    components:{
        Header,
        Sidebar,
        Footer
    }

}
</script>

<template>
 <div class="container-fluid position-relative d-flex p-0">

   <Sidebar />
        <!-- Content Start -->
    <div class="content">

     <Header />
             <!-- Form Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="">
          <div class="bg-secondary rounded h-100 p-4">
            <h4 class="mb-4">Course: Web Development, Module: 3</h4>
            <hr>
            <h6 class="mb-4">Edit Lecture</h6>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" value="Linked List">
              <label for="floatingInput">Lecture Title</label>
            </div>

            <div class="mb-3">
              <label for="formFile" class="form-label">Video Link</label>
              <input class="form-control bg-dark" type="text" id="formFile"
                value="https://videos.elearning.edu/?i=gfh457438">
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">Documents</label>
              <input class="form-control bg-dark" type="file" id="formFile" multiple>
            </div>
            <div class="form-floating mb-3">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                style="height: 150px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga animi, dignissimos distinctio aspernatur soluta dolorum natus iure, a, inventore dolore eum veniam tempora aliquid voluptatum fugiat. Deserunt suscipit dolorum quisquam laudantium quia. Officiis, quisquam? Consequatur aliquam omnis minima dolore. Sapiente praesentium cum animi eaque corporis sunt aliquid corrupti ipsa, commodi odit quibusdam facilis neque at.</textarea>
              <label for="floatingTextarea">Overview</label>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>

      </div>
      <!-- Form End -->

     <Footer />

     </div>
        <!-- Content End -->

 </div>
</template>