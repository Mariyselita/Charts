<template>
    <div>
      <bar-chart :chart-data="dataToChart" v-if="viewData"></bar-chart>
      <select @change="onChangeSelect($event)">
        <option value="default">Default</option>
        <option value="js">Javascript</option>
        <option value="python">Python</option>
        <option value="go">Go</option>
        <option value="ruby">Ruby</option>
      </select>
    </div>
    
</template>

<script>
import BarChart from './BarChart.vue';
import { setTimeout } from 'timers';
export default {
  components: { BarChart },
  data(){
    return {
      filter: 'default',
      filters:{
        'default': undefined,
        'js': undefined,
        'go': undefined,
        'python': undefined,
        'ruby': undefined,
      },
      dataToChart:{},
      viewData:false
    }
  },
  //Se manda a llamar la info para el filtro por default y se le asigna la gráfica
  async created(){
    this.filter = 'default';
    const response = await this.getDataByFilter(this.filter);
    this.filters[this.filter]=this.setToDataToChart(response,this.filter);
    this.dataToChart = this.filters[this.filter];
    this.viewData=true;
  }, 

  methods: {
    //Se obtiene la data de la api de gh recibiendo como parámetro el filtro deseado
    async getDataByFilter(filter){
        switch (filter) {
          case 'js':
            filter = 'https://api.github.com/search/repositories?q=stars:>500+language:Javascript&sort=stars&order=desc';
            break;
          case 'go':
            filter = 'https://api.github.com/search/repositories?q=stars:>500+language:go&sort=stars&order=desc';
            break;
          case 'python':
            filter = 'https://api.github.com/search/repositories?q=stars:>500+language:python&sort=stars&order=desc';
            break;
          case 'ruby':
            filter = 'https://api.github.com/search/repositories?q=stars:>500+language:ruby&sort=stars&order=desc';
            break;
          default:
            filter = 'https://api.github.com/search/repositories?q=stars:>10000&sort=stars&order=desc';
            break;
        }
        return await this.axios.get(filter, {
              headers: { 'Accept':'application/vnd.github.v3+json'}
          });
    },
    //Se construye el objeto para la data de la gráfica
    setToDataToChart(response,nameFilter){
      return {
        labels: response.data.items.slice(0,10).map(repository => repository.name),
        datasets:[
          {
            label:nameFilter,
            backgroundColor: 'blue',
            borderColor: 'red',
            borderWidth: 1,
            data: response.data.items.slice(0,10).map(repository => repository.stargazers_count)
          }
        ]
      };
    },

    //método que se le asigna al evento del select para el cambio de filtro 
    async onChangeSelect(event){
        this.viewData=false;
        this.filter = event.target.value;
        //se valida que no tenga Información  el filtro si no la tiene se manda a llamar a la api de gh
        if(!this.filters[this.filter]){
          const response = await this.getDataByFilter(this.filter);
          this.filters[this.filter]=this.setToDataToChart(response,this.filter); 
          this.dataToChart = this.filters[this.filter];
          this.viewData=true;         
        }else{
          setTimeout(() => { 
            this.dataToChart = this.filters[this.filter];
            this.viewData=true;
          });
        }
        
    }
  }

}
</script>