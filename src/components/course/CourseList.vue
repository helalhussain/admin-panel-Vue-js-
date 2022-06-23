<script >
import Header from '../Child/Header.vue'
import Sidebar from '../Child/Sidebar.vue'

import Footer from '../Child/Footer.vue'

export default{
 name:'StudentList',
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

  <!-- Table Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-12">
            <div class="bg-secondary rounded h-100 p-4">
              <div class="row col-12 mb-4">
                <div class="col-6">
                  <h6 class="mb-4">Course List</h6>
                </div>
                <div class="col-6">
                  <input type="text" class="form-control" placeholder="Search Here">
                </div>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">SL</th>
                      <th scope="col">Course Name</th>
                      <th scope="col">Categoty</th>
                      <th scope="col">No. of Students</th>
                      <th scope="col">Instructor</th>
                      <th scope="col">Rating</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Algorithm</td>
                      <td>Computer Science</td>
                      <td>45</td>
                      <td>Pranta Sarker</td>
                      <td>4.5</td>
                      <td class="">
                        <a class="mx-1" href="/modules/list.html" title="View"><i
                            class="text-success far fa-eye"></i></a>

                      <router-link to="/edit-course">
                          <a class="mx-1" title="Edit"><i class="text-blue far fa-edit"></i></a>
                      </router-link>
                       <a class="mx-1" href="#" title="Trash" data-bs-toggle="modal" data-bs-target="#deleteModal"><i
                            class="text-primary far fa-trash-alt"></i></a>
                        <a class="mx-1" href="#" title="Add Module"><i class="text-primary fas fa-plus"
                            data-bs-toggle="modal" data-bs-target="#exampleModalCat"></i></a>
                      </td>
                    </tr>

                  </tbody>
                </table>
                <nav aria-label="Page navigation example" class="mt-5">
                  <ul class="pagination" style="width:20%;margin-left: auto; margin-right: auto;">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table End -->

       <!--MOdal for Adding Courses-->
      <div class="modal fade" id="exampleModalCat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content bg-secondary">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"> Add Module </h5>
              <button type="button " class="btn-primary" data-bs-dismiss="modal" aria-label="Close">X</button>
            </div>
            <div class="modal-body">
              <div class="container-fluid pt-2 px-1">
                <div class="">
                  <div class="bg-secondary rounded h-100 p-1">

                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput">
                      <label for="floatingInput">Module Name</label>
                    </div>

                    <div class="form-floating mb-3">
                      <textarea class="form-control" placeholder="Description" id="floatingTextarea"
                        style="height: 150px;"></textarea>
                      <label for="floatingInput">Description</label>
                    </div>


                    <button type="submit" class="btn btn-primary">Save</button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="deleteModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content bg-secondary">
            <div class="modal-header">
              <h5 class="modal-title">Delete Course</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Are you sure want to delete this course?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <!--Modal to End -->
                

 <Footer />
        
</div>
        <!-- Content End -->


 </div>
</template>