<template>
    <div id="block" class="w3lvide-content" 
    data-vide-bg="/images/slot" data-vide-options="position: 0% 50%">
    <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; background-size: cover; background-repeat: no-repeat; background-position: center center;"><video style="visibility: visible; margin: auto; position: absolute; z-index: -1; top: 50%; left: 0%; transform: translate(0%, -50%); width: 1351px; height: auto;" autoplay="" loop=""><source src="images/slot.mp4" type="video/mp4"><source src="images/slot.webm" type="video/webm"><source src="images/slot.ogv" type="video/ogg"></video></div>
        <div class="wrapper">
            <div class="workinghny-form-grid">
                <div class="slot-w3l-comingsoon">
                    <div class="slot-w3content">
                        <h3>Task Management System</h3>
                        <h1>Manage your everyday task.</h1>
                        <p class="text-5 text-light mb-3">Enter your task and submit.</p>
                        
                           <form action="javascript:void(0)" @submit="submitdata" method="post" class="w3hny-subscribe-form" >
                            
                                <input type="text" v-model="task.task" class="form-control required" required="" placeholder="Enter Your Task Here..">
                                <button type="submit" class="btn btn-primary"><font size="3px" >{{ processing ? "Please wait" : "Submit" }}</font></button>
                                
                            </form>
                        
                    </div>
                </div>
                <!-- /form -->
                <div class="main-hotair"  style="width:100%" >
                    <div class="content-wthree">
                        <h2>Task List</h2>


                        <div class="input-grids">

                            <ul id="myUL">
                                <li v-for="singletask in tasklist" :key="singletask" v-if="singletask.status == 0">{{singletask.task}} 
                                    <a  href="javascript:void(0)" @click="completeTask(singletask.id)" class="btn btn-success btn-sm" style="width:20%;float:right"><i class="fa fa-check" aria-hidden="true"></i></a>
                                    <a  href="javascript:void(0)" @click="deleteTask(singletask.id)" class="btn btn-danger btn-sm" style="width:20%;float:right"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                </li>
                                <li class="checked" v-else >{{singletask.task}}
                                    <a href="javascript:void(0)" @click="incompleteTask(singletask.id)" class="btn btn-warning btn-sm" style="width:20%;float:right"><i class="fa fa-close" aria-hidden="true"></i></a>
                                    <a href="javascript:void(0)" @click="deleteTask(singletask.id)" class="btn btn-danger btn-sm" style="width:20%;float:right"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                </li>
                                
                            </ul>

                               </div>
                            
                        
                    </div>

                </div>
                <!-- //form -->
            </div>
           <!-- copyright-->
           <div class="copyright text-center">
            <p class="copy-footer-29">© 2021 Task management system. All rights reserved | Developed by <a
                    href="http://baizidmdashadzzaman.com/">Asadzaman</a></p>
           </div>
         <!-- //copyright-->
        </div>
    </div>  
</template>

<script>
export default {
    name:"dashboard",
    props: ['lang'],
    data(){
        return {
            tasklist:[],
            task:{
                task:'',
                status:0,
            },
            processing:false
        }
    },
    created() {
		    window.scrollTo(0, 0);
           
            axios
                .get(`/api/task-list`)
                .then((response) => {
                    this.tasklist = response.data.allData;
                    
            });
				
		},
        methods:{
        submitdata(){
			          this.processing = true;
                      let uri = '/api/task-store';
                      axios.post(uri, this.task).then((response) => {
                      if(response.data.status == 0)
                      {
                        Swal.fire({
                           icon: 'error',
                            text: response.data.message,
                            showConfirmButton: true,
                            timer: 6000
                         })
                        this.processing = false;
                      }
                      else
                      {
                         Swal.fire({
                           icon: 'success',
                            text: response.data.message,
                            showConfirmButton: true,
                            timer: 6000
                         })
                        this.tasklist = response.data.allData;
                        this.processing = false;					  
					    this.task.task = "";
                        this.task.status = 0;
                      }
                      
                      });
        },
        completeTask(id)
        {
                 axios
                .get(`/api/task-complete/${id}`)
                .then((response) => {
                    if(response.data.status == 0)
                      {
                        Swal.fire({
                           icon: 'error',
                            text: response.data.message,
                            showConfirmButton: true,
                            timer: 6000
                         })
                        this.processing = false;
                      }
                      else
                      {
                         this.tasklist = response.data.allData;
                         Swal.fire({
                           icon: 'success',
                            text: response.data.message,
                            showConfirmButton: true,
                            timer: 6000
                         })
                      
                      }
                      

                });
        },
        deleteTask(id)
        {
           Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
           }).then((result) => {
            if (result.isConfirmed) {
                 axios
                .get(`/api/task-delete/${id}`)
                .then((response) => {
                    if(response.data.status == 0)
                      {
                        Swal.fire({
                           icon: 'error',
                            text: response.data.message,
                            showConfirmButton: true,
                            timer: 6000
                         })
                        this.processing = false;
                      }
                      else
                      {
                         this.tasklist = response.data.allData;
                         Swal.fire({
                           icon: 'success',
                            text: response.data.message,
                            showConfirmButton: true,
                            timer: 6000
                         })
                      
                      }
                      

                });
             }
            })
        },
        incompleteTask(id)
        {
                 axios
                .get(`/api/task-incomplete/${id}`)
                .then((response) => {
                    if(response.data.status == 0)
                      {
                        Swal.fire({
                           icon: 'error',
                            text: response.data.message,
                            showConfirmButton: true,
                            timer: 6000
                         })
                        this.processing = false;
                      }
                      else
                      {
                         this.tasklist = response.data.allData;
                         Swal.fire({
                           icon: 'success',
                            text: response.data.message,
                            showConfirmButton: true,
                            timer: 6000
                         })
                      
                      }
                      

                });
        },

    }
}
</script>