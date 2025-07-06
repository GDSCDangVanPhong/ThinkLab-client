
import {defineStore} from "pinia";
import { ref } from 'vue'
export const useTabs = defineStore('tabs' ,()=>{
  const tab = ref('Playground')
  const changeTab = (targetTab : string)=>{
    tab.value = targetTab

  }
  return {
    tab,
    changeTab,
  }


})