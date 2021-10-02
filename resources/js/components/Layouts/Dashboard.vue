<template>

     <router-view v-on:listenerChild="listenerChild" :lang="this.language" ></router-view>

</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"dashboard-layout",
    data(){
        return {
            user:this.$store.state.auth.user,
            language: 0,
            active:0,
            setting:{
                site_name:"",
                site_logo:"",
                site_favicon: 1,
                site_information:"",
                site_phone:"",
                site_email:"",
                site_fb:"",
                site_meta_keyword:"",
                site_meta_description:"",

            },
        }
    },
    created() {
            axios
            .get(`/api/setting`)
            .then((response) => {
              
              this.setting.site_name = response.data.allData.site_name;
              this.setting.site_logo = response.data.allData.site_logo;
			        this.setting.site_favicon = response.data.allData.site_favicon;
              this.setting.site_information = response.data.allData.site_information;
              this.setting.site_phone = response.data.allData.site_phone;
              this.setting.site_email = response.data.allData.site_email;
              this.setting.site_fb = response.data.allData.site_fb;
              this.setting.site_meta_keyword = response.data.allData.site_meta_keyword;
              this.setting.site_meta_description = response.data.allData.site_meta_description;
              
            });
				
		},
    methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        },
        listenerChild(id) {
                this.active = id;
        },
    }
}
</script>