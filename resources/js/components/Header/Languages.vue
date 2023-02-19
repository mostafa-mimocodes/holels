<template>
    <div class="dropdown">
        <!--begin::Toggle-->
        <div class="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
            <div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
                <img class="h-20px w-20px rounded-sm" :src="`/media/svg/flags/${flag}`" alt="" />
            </div>
        </div>
        <!--end::Toggle-->
        <!--begin::Dropdown-->
        <div class="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-right">
            <!--begin::Nav-->
            <ul class="navi navi-hover py-4">
                <language-item text="English" value="en" img-name="226-united-states"/>
                <language-item text="Arabic" value="ar" img-name="158-egypt"/>
                <language-item text="Spanish" value="es" img-name="128-spain"/>
                <language-item text="Dutch" value="de" img-name="162-germany"/>
                <language-item text="French" value="fr" img-name="195-france"/>
            </ul>
            <!--end::Nav-->
        </div>
        <!--end::Dropdown-->
    </div>
</template>

<script>
import LanguageItem from "@/components/Header/Languages/LanguageItem.vue";
export default {
    name: "Languages",
    components: {LanguageItem},
    data(){
        return{
            flag:'226-united-states.svg'
        }
    },
    computed:{
      locale(){
          return this.$page.props.locale
      }
    },
    methods:{
      setFlag(locale){

          switch (locale) {
              case  'en':
                  this.flag = '226-united-states.svg'
                  return this.flag;
              case 'ar':
                  this.flag = '158-egypt.svg'
                  return this.flag;
              case 'es':
                  this.flag = '128-spain.svg'
                  return this.flag;
              case 'de':
                  this.flag = '162-germany.svg'
                  return this.flag;
              case 'fr':
                  this.flag = '195-france.svg'
                  return this.flag;
              default:
                  this.flag = '226-united-states.svg'
                  return this.flag;
          }
      }
    },
    mounted() {

        if(this.locale){
            this.$i18n.locale = this.locale
            this.setFlag(this.locale)
        }

        this.emitter.on('lang-changed',e => {
            this.setFlag(e.lang)
        })
    }
}
</script>

<style scoped>

</style>
