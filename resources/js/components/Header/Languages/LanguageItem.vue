<template>
    <li class="navi-item">
        <a href="javascript:;" @click="changeLang" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img :src="`/media/svg/flags/${imgName}.svg`" alt="" />
            </span>
            <span class="navi-text">{{ text }}</span>
        </a>
    </li>
</template>

<script>
export default {
    name: "LanguageItem",
    props:{
        imgName:String,
        text:String,
        value:{
            type:String,
            default:'en'
        }
    },
    methods:{
        changeLang(){
            this.$inertia.post(this.route('settings.change_lang'),{
                lang:this.value
            });
            this.emitter.emit('lang-changed', {lang:this.value})

            if(this.$page.props.locale == 'ar' || this.value == 'ar'){
                window.location.reload()
            }else{
                $("html").attr("lang",this.value)
                this.$i18n.locale = this.value
            }
        }
    }
}
</script>

<style scoped>

</style>
