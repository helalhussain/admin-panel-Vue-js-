<script >
import Header from '../Child/Header.vue'
import Sidebar from '../Child/Sidebar.vue'
import Footer from '../Child/Footer.vue'

export default{
 name:'CourseEdit',
    components:{
       Sidebar,
       Header,
       Footer
    }
};
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
            <h6 class="mb-4">Edit Course Details</h6>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" value="Web Development">
              <label for="floatingInput">Course Name</label>
            </div>

            <div class="form-floating mb-3">
              <select class="form-select">
                <option selected="">Select Category</option>
                <option value="1" selected>Comp. Sci</option>
                <option value="2">Business</option>
                <option value="3">Development</option>
              </select>
              <label for="floatingSelect">Category</label>
            </div>

            <div class="form-floating mb-3">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                style="height: 150px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis sit corporis exercitationem laborum nihil molestiae, incidunt a quas. Nam fugiat explicabo doloremque nisi debitis et ad numquam. Explicabo deserunt sunt adipisci ipsa magnam repellat ab. Consequatur libero quidem numquam, in, voluptas ad odio itaque nisi deserunt recusandae maxime minima?</textarea>
              <label for="floatingTextarea">Overview</label>
            </div>

            <div class="mb-3">
              <label for="formFile" class="form-label">Image</label>
              <input class="form-control bg-dark" type="file" id="formFile">
            </div>

            <div class="mb-3">
              <label for="floatingSelect">Select Instructors</label>
              <select id="cat" class="form-select select2" multiple>
                <option value="1" selected>John Doe</option>
                <option value="2">Albert Einstien</option>
                <option value="3" selected>Issac Newton</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="skill">What you will learn</label>
              <select id="skill" class="form-select select2" multiple>
                <option value="1" selected>skill_1</option>
                <option value="2" selected>skill_2</option>
                <option value="3" selected>skill_3</option>
                <option value="4" selected>skill_4</option>
                <option value="5">skill_5</option>
                <option value="6">skill_6</option>
                <option value="7">skill_7</option>
                <option value="8">skill_8</option>
              </select>
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