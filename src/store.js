import {reactive} from 'vue';

export const store = reactive({

  typologies: [],
  selectedType: [],
  doctors: [],
  userFilter : '',
  myUrl: 'http://localhost:8000/api/doctors?',

});