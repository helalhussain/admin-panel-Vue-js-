<script>
    export default{
        name:'StudentTable'
        
    }

</script>


<template>
     <!-- Table Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-12">
            <div class="bg-secondary rounded h-100 p-4">
              <h6 class="mb-4">Student List</h6> 
              <div class="table-responsive">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>                
                        <td>Itmam Ahmed</td>
                        <td>itmam@gmail.com</td>
                        <td><button class="btn btn-primary">view profile</button></td>
                      </tr>
                      <tr>
                          <td>2</td>                
                          <td>Towfiq Khan</td>
                          <td>towfiq@gmail.com</td>
                          <td><button class="btn btn-primary">view profile</button></td>
                        </tr>
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table End -->
</template>